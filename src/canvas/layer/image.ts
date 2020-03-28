import paper, { Layer, Raster, Rectangle, Path, Point, Color } from 'paper';
import FileFormat from '@sketch-hq/sketch-file-format-ts';
import { imageUtils, fillUtils, borderUtils, shadowUtils, innerShadowUtils } from './utils';

interface RenderImage {
  layer: FileFormat.Bitmap;
  container: paper.Group;
  images: {
    [id: string]: string;
  };
  path: string;
  groupShadows?: FileFormat.Shadow[];
  overrides?: FileFormat.OverrideValue[];
  symbolPath: string;
}

const renderImage = ({ layer, container, images, path, groupShadows, overrides, symbolPath }: RenderImage): paper.Layer => {
  const imageContainer = new Layer({
    name: layer.do_objectID,
    data: { name: layer.name },
    locked: layer.isLocked,
    visible: layer.isVisible,
    parent: container
  });
  // render bitmap
  const override = imageUtils.getOverrideImage({
    overrides: overrides,
    symbolPath: symbolPath
  });
  const bitmapContainer = new Layer({
    name: 'bitmap',
    parent: imageContainer
  });
  const bitmap = new Raster(imageUtils.getImage({
    ref: override ? (override.value as FileFormat.ImageFileRef)._ref : layer.image._ref,
    images: images
  }));
  bitmap.width = layer.frame.width;
  bitmap.height = layer.frame.height;
  bitmap.parent = bitmapContainer;
  bitmap.position = new Point(layer.frame.width / 2, layer.frame.height / 2);
  // create shape ref for styles
  const imageShape = new Path.Rectangle({
    point: [0, 0],
    size: [layer.frame.width, layer.frame.height],
    insert: false
  });
  // render shadows
  shadowUtils.renderShadows({
    shapePath: imageShape,
    shadows: groupShadows ? [...groupShadows, ...layer.style.shadows] : layer.style.shadows,
    container: imageContainer
  });
  // render fills
  fillUtils.renderFills({
    shapePath: imageShape,
    fills: layer.style.fills,
    images: images,
    container: imageContainer
  });
  // render borders
  borderUtils.renderBorders({
    shapePath: imageShape,
    borders: layer.style.borders,
    borderOptions: layer.style.borderOptions,
    container: imageContainer
  });
  // render inner shadows
  innerShadowUtils.renderInnerShadows({
    shapePath: imageShape,
    innerShadows: layer.style.innerShadows,
    container: imageContainer
  });
  // position container
  imageContainer.position.x += layer.frame.x;
  imageContainer.position.y += layer.frame.y;
  return imageContainer;
};

export default renderImage;