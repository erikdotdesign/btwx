import paper, { Layer, Rectangle, Point, Group, CompoundPath, Path, Color } from 'paper';
import FileFormat from '@sketch-hq/sketch-file-format-ts';
import { drawShapePath, getWindingRule } from './shapePathUtils';

interface GetBooleanOperation {
  operation: FileFormat.BooleanOperation;
}

export const getBooleanOperation = ({ operation }: GetBooleanOperation): string | null => {
  switch(operation) {
    case -1:
      return 'exclude';
    case 0:
      return 'unite';
    case 1:
      return 'subtract';
    case 2:
      return 'intersect';
    case 3:
      return 'exclude';
  }
};

interface ApplyBooleanOperation {
  operation: FileFormat.BooleanOperation;
  a: paper.PathItem;
  b: paper.PathItem;
  insert?: boolean;
}

export const applyBooleanOperation = ({ a, b, operation, insert }: ApplyBooleanOperation): paper.PathItem => {
  const booleanOperation = getBooleanOperation({operation});
  switch(booleanOperation) {
    case 'normal':
      return b;
    case 'unite':
      return a.unite(b, {insert});
    case 'subtract':
      return a.subtract(b, {insert});
    case 'intersect':
      return a.intersect(b, {insert});
    case 'exclude':
      return a.exclude(b, {insert});
  }
};

interface GetNestedPathItem {
  layer: paper.PathItem | paper.Layer;
}

export const getNestedPathItem = ({ layer }: GetNestedPathItem): paper.PathItem => {
  switch(layer.className) {
    case 'Path':
    case 'CompoundPath':
      return layer as paper.PathItem;
    case 'Layer': {
      let lastChild = layer.lastChild;
      while(lastChild.className === 'Layer') {
        lastChild = lastChild.lastChild;
      }
      return lastChild as paper.PathItem;
    }
  }
};

interface RenderShapeGroupLayer {
  layer: FileFormat.ShapePath | FileFormat.Rectangle | FileFormat.Star | FileFormat.Polygon;
  container: paper.Layer | paper.Group;
}

const renderShapeGroupLayer = ({ layer, container }: RenderShapeGroupLayer): void => {
  const layerPath = drawShapePath({
    layer: layer,
    opts: {
      name: layer.do_objectID,
      data: { name: layer.name },
      visible: layer.isVisible,
      locked: layer.isLocked,
      closed: layer.isClosed,
      parent: container,
      windingRule: getWindingRule({windingRule: layer.style.windingRule})
    }
  });
  layerPath.position.x += layer.frame.x;
  layerPath.position.y += layer.frame.y;
  if (container.children.length > 1) {
    const prevBoolResult = container.children[container.children.length - 2];
    const boolResult = applyBooleanOperation({
      a: getNestedPathItem({layer: prevBoolResult as paper.Layer}) as paper.PathItem,
      b: layerPath,
      operation: layer.booleanOperation
    });
    if (prevBoolResult.className === 'Layer') {
      boolResult.parent = container;
    }
  }
};

interface RenderShapeGroupLayers {
  layer: FileFormat.ShapeGroup;
  container: paper.Layer | paper.Group;
}

export const renderShapeGroupLayers = ({ layer, container }: RenderShapeGroupLayers): void => {
  layer.layers.forEach((shapeGroupLayer) => {
    switch(shapeGroupLayer._class) {
      case 'shapeGroup':
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        renderShapeGroup({
          layer: shapeGroupLayer,
          container: container
        });
        break;
      case 'shapePath':
      case 'rectangle':
      case 'triangle':
      case 'star':
      case 'polygon':
      case 'oval':
        renderShapeGroupLayer({
          layer: shapeGroupLayer as FileFormat.ShapePath | FileFormat.Rectangle | FileFormat.Star | FileFormat.Polygon,
          container: container,
        });
        break;
      default:
        throw new Error('Unknown layer type');
    }
  });
};

interface RenderShapeGroup {
  layer: FileFormat.ShapeGroup;
  container: paper.Group;
}

const renderShapeGroup = ({ layer, container }: RenderShapeGroup): paper.Layer => {
  const shape = new Layer({
    parent: container,
    name: layer.do_objectID,
    data: { name: layer.name },
    visible: layer.isVisible,
    locked: layer.isLocked
  });
  renderShapeGroupLayers({
    layer: layer,
    container: shape
  });
  shape.position.x += layer.frame.x;
  shape.position.y += layer.frame.y;
  if (container.children.length > 1) {
    const boolResult = applyBooleanOperation({
      a: getNestedPathItem({layer: container.children[container.children.length - 2] as paper.PathItem}) as paper.PathItem,
      b: getNestedPathItem({layer: shape as paper.Layer}) as paper.PathItem,
      operation: layer.booleanOperation
    });
    boolResult.parent = container;
  }
  return shape;
};