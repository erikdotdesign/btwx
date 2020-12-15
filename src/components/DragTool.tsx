/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { getLayerProjectIndex, getPaperLayer, getPaperLayersBounds, getSelectedProjectIndices } from '../store/selectors/layer';
import { uiPaperScope } from '../canvas';
import { THEME_PRIMARY_COLOR } from '../constants';
import { setCanvasDragging } from '../store/actions/canvasSettings';
import { moveLayers, duplicateLayers, updateSelectionFrame } from '../store/actions/layer';
import SnapTool from './SnapTool';
import PaperTool, { PaperToolProps } from './PaperTool';

const DragTool = (props: PaperToolProps): ReactElement => {
  const { tool, altModifier, downEvent, dragEvent, upEvent } = props;
  const hover = useSelector((state: RootState) => state.layer.present.hover);
  const selected = useSelector((state: RootState) => state.layer.present.selected);
  const isEnabled = useSelector((state: RootState) => state.canvasSettings.activeTool === 'Drag');
  const dragging = useSelector((state: RootState) => state.canvasSettings.dragging);
  const dragHandle = useSelector((state: RootState) => state.canvasSettings.dragHandle);
  const selectedProjectIndices = useSelector((state: RootState) => getSelectedProjectIndices(state));
  const hoverPaperScope = useSelector((state: RootState) => hover ? getLayerProjectIndex(state.layer.present, state.layer.present.hover) : null);
  const [originalSelection, setOriginalSelection] = useState<{id: string; projectIndex: number}[]>(null);
  const [fromBounds, setFromBounds] = useState<paper.Rectangle>(null);
  const [toBounds, setToBounds] = useState<paper.Rectangle>(null);
  const [snapBounds, setSnapBounds] = useState<paper.Rectangle>(null);
  const [minDistance, setMinDistance] = useState<number>(0);
  const [originalPaperSelection, setOriginalPaperSelection] = useState<paper.Item[]>(null);
  const [selectionOutlines, setSelectionOutlines] = useState<paper.Group>(null);
  const dispatch = useDispatch();

  const resetState = (): void => {
    const drawingPreview = uiPaperScope.projects[0].getItem({data: {id: 'drawingPreview'}});
    drawingPreview.removeChildren();
    setOriginalSelection(null);
    setFromBounds(null);
    setToBounds(null);
    setSnapBounds(null);
    setMinDistance(0);
    setOriginalPaperSelection(null);
    setSelectionOutlines(null);
  }

  const updateDuplicatePreview = () => {
    const drawingPreview = uiPaperScope.projects[0].getItem({data: {id: 'drawingPreview'}});
    drawingPreview.removeChildren();
    if (altModifier && selectionOutlines) {
      const newPreview = selectionOutlines.clone({insert: false});
      newPreview.position = toBounds.center;
      drawingPreview.addChild(newPreview);
    }
  }

  const translateLayers = (): void => {
    const vector = toBounds.center.subtract(fromBounds.center);
    if (altModifier) {
      updateDuplicatePreview();
    } else {
      selected.forEach((id, index) => {
        const paperLayer = getPaperLayer(id, selectedProjectIndices[id]);
        const ogLayer = originalPaperSelection[index];
        if (paperLayer && ogLayer) {
          const absPosition = ogLayer.position;
          paperLayer.position.x = absPosition.x + vector.x;
          paperLayer.position.y = absPosition.y + vector.y;
        }
      });
      updateSelectionFrame(toBounds, dragHandle ? 'move' : 'none');
    }
  }

  // tool mousedown will fire before selected is updated...
  // so we need to determine next selection on mousedown
  const getDragLayers = (e: paper.ToolEvent): {id: string; projectIndex: number}[] => {
    const isHoverSelected = hover && selected.includes(hover);
    const selectedWithPaperScopes = selected.reduce((result, current) => {
      result = [...result, {id: current, projectIndex: selectedProjectIndices[current]}];
      return result;
    }, []) as {id: string; projectIndex: number}[];
    if (e.modifiers.shift) {
      if (isHoverSelected) {
        return selectedWithPaperScopes.reduce((result, current) => {
          if (current.id !== hover) {
            result = [...result, current];
          }
          return result;
        }, []);
      } else {
        if (hover) {
          return [...selectedWithPaperScopes, {id: hover, projectIndex: hoverPaperScope}];
        } else {
          return selectedWithPaperScopes;
        }
      }
    } else {
      if (isHoverSelected) {
        return selectedWithPaperScopes;
      } else {
        if (hover) {
          return [{id: hover, projectIndex: hoverPaperScope}];
        } else {
          return selectedWithPaperScopes;
        }
      }
    }
  }

  const handleSnapToolUpdate = (snapToolBounds: paper.Rectangle, xSnapPoint: Btwx.SnapPoint, ySnapPoint: Btwx.SnapPoint): void => {
    setToBounds(snapToolBounds);
  }

  useEffect(() => {
    if (isEnabled && originalSelection && dragging && toBounds) {
      updateDuplicatePreview();
      if (altModifier) {
        const selectionFrame = uiPaperScope.project.getItem({ data: { id: 'selectionFrame' } });
        selectionFrame.removeChildren();
        originalSelection.forEach((item, index) => {
          const paperLayer = getPaperLayer(item.id, item.projectIndex);
          const ogLayer = originalPaperSelection[index];
          if (paperLayer && ogLayer) {
            const absPosition = ogLayer.position;
            paperLayer.position.x = absPosition.x;
            paperLayer.position.y = absPosition.y;
          }
        });
      } else {
        translateLayers();
      }
    }
  }, [altModifier]);

  useEffect(() => {
    if (downEvent && isEnabled) {
      if (uiPaperScope.project.activeLayer.data.id !== 'ui') {
        uiPaperScope.projects[0].activate();
      }
      const dragLayers = getDragLayers(downEvent);
      const dragOutlines = new uiPaperScope.Group({insert: false});
      const dragPaperLayers: paper.Item[] = [];
      dragLayers.forEach((layer, index) => {
        const paperLayer = getPaperLayer(layer.id, layer.projectIndex);
        dragPaperLayers.push(paperLayer.clone({ insert: false }));
        switch(paperLayer.data.layerType) {
          case 'Artboard': {
            const artboardBackground = paperLayer.getItem({ data: { id: 'artboardBackground' } });
            new uiPaperScope.Path.Rectangle({
              strokeColor: THEME_PRIMARY_COLOR,
              strokeWidth: 2 / uiPaperScope.view.zoom,
              rectangle: artboardBackground.bounds,
              parent: dragOutlines
            });
            break;
          }
          case 'Shape':
            new uiPaperScope.CompoundPath({
              strokeColor: THEME_PRIMARY_COLOR,
              strokeWidth: 2 / uiPaperScope.view.zoom,
              closed: paperLayer.data.shapeType !== 'Line',
              pathData: (paperLayer as paper.Path | paper.CompoundPath).pathData,
              parent: dragOutlines
            });
            break;
          case 'Text': {
            const textLayer = paperLayer.getItem({data: { id: 'textContent' }});
            const initialPoint = (textLayer as paper.PointText).point;
            (textLayer as any)._lines.forEach((line: any, index: number) => {
              new uiPaperScope.Path.Line({
                from: new uiPaperScope.Point(initialPoint.x, initialPoint.y + (((textLayer as paper.PointText).leading as number) * index)),
                to: new uiPaperScope.Point(initialPoint.x + textLayer.bounds.width, initialPoint.y + (((textLayer as paper.PointText).leading as number) * index)),
                strokeColor: THEME_PRIMARY_COLOR,
                strokeWidth: 2 / uiPaperScope.view.zoom,
                data: {
                  type: 'UIElementChild',
                  interactive: false,
                  interactiveType: null,
                  elementId: 'hoverFrame'
                },
                parent: dragOutlines
              });
            });
            break;
          }
          default:
            new uiPaperScope.Path.Rectangle({
              strokeColor: THEME_PRIMARY_COLOR,
              strokeWidth: 2 / uiPaperScope.view.zoom,
              from: paperLayer.bounds.topLeft,
              to: paperLayer.bounds.bottomRight,
              parent: dragOutlines
            });
            break;
        }
      });
      const nextFromBounds = getPaperLayersBounds(dragPaperLayers);
      setFromBounds(nextFromBounds);
      setOriginalSelection(dragLayers);
      setOriginalPaperSelection(dragPaperLayers);
      setSelectionOutlines(dragOutlines);
    }
  }, [downEvent]);

  useEffect(() => {
    if (dragEvent && isEnabled && fromBounds) {
      if (minDistance > 3) {
        const vector = dragEvent.point.subtract(dragEvent.downPoint);
        const nextSnapBounds = new uiPaperScope.Rectangle(fromBounds);
        nextSnapBounds.center.x = fromBounds.center.x + vector.x;
        nextSnapBounds.center.y = fromBounds.center.y + vector.y;
        setSnapBounds(nextSnapBounds);
      } else {
        if (!dragging) {
          dispatch(setCanvasDragging({dragging: true}));
        }
        setMinDistance(minDistance + 1);
      }
    }
  }, [dragEvent]);

  useEffect(() => {
    if (upEvent && isEnabled) {
      if (selected.length > 0 && minDistance > 3) {
        if (altModifier) {
          const offset = toBounds.center.subtract(fromBounds.center).round();
          dispatch(duplicateLayers({layers: selected, offset: {x: offset.x, y: offset.y}}));
        } else {
          dispatch(moveLayers({layers: selected}));
        }
      }
      dispatch(setCanvasDragging({dragging: false}));
      resetState();
    }
  }, [upEvent]);

  useEffect(() => {
    if (toBounds && isEnabled) {
      translateLayers();
    }
  }, [toBounds]);

  // handle tool enable / disable
  useEffect(() => {
    if (isEnabled) {
      if (tool) {
        tool.activate();
      }
    } else {
      if (tool && uiPaperScope.tool && (uiPaperScope.tool as any)._index === (tool as any)._index) {
        uiPaperScope.tool = null;
      }
    }
  }, [isEnabled]);

  return (
    isEnabled && dragging
    ? <SnapTool
        bounds={snapBounds}
        snapRule='move'
        hitTestZones={{all: true}}
        onUpdate={handleSnapToolUpdate}
        toolEvent={dragEvent}
        blackListLayers={altModifier ? null : selected}
        measure />
    : null
  );
}

export default PaperTool(
  DragTool,
  {
    mouseDown: true,
    mouseDrag: true,
    mouseUp: true
  }
);