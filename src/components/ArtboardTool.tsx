/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useEffect, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiPaperScope } from '../canvas';
import { RootState } from '../store/reducers';
import { setCanvasDrawing } from '../store/actions/canvasSettings';
import { addArtboardThunk } from '../store/actions/layer';
import { toggleArtboardToolThunk } from '../store/actions/artboardTool';
import { ThemeContext } from './ThemeProvider';
import Tooltip from '../canvas/tooltip';
import SnapTool from './SnapTool';
import PaperTool, { PaperToolProps } from './PaperTool';

const ArtboardTool = (props: PaperToolProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { tool, keyDownEvent, keyUpEvent, moveEvent, downEvent, dragEvent, upEvent } = props;
  const isEnabled = useSelector((state: RootState) => state.artboardTool.isEnabled);
  const drawing = useSelector((state: RootState) => state.canvasSettings.drawing);
  const [handle, setHandle] = useState<Btwx.ResizeHandle>(null);
  const [constrainedDims, setConstrainedDims] = useState<paper.Point>(null);
  const [shiftModifier, setShiftModifier] = useState<boolean>(false);
  const [snapBounds, setSnapBounds] = useState<paper.Rectangle>(null);
  const [from, setFrom] = useState<paper.Point>(null);
  const [toBounds, setToBounds] = useState<paper.Rectangle>(null);
  const [initialToBounds, setInitialToBounds] = useState<paper.Rectangle>(null);
  const dispatch = useDispatch();

  const resetState = (): void => {
    const drawingPreview = uiPaperScope.projects[0].getItem({ data: { id: 'drawingPreview' }});
    const tooltips = uiPaperScope.projects[0].getItem({ data: { id: 'tooltips' }});
    drawingPreview.removeChildren();
    tooltips.removeChildren();
    setFrom(null);
    setHandle(null);
    setConstrainedDims(null);
    setToBounds(null);
    setShiftModifier(false);
    setSnapBounds(null);
    setInitialToBounds(null);
  }

  const updatePreview = (): void => {
    const drawingPreview = uiPaperScope.projects[0].getItem({ data: { id: 'drawingPreview' }});
    const tooltips = uiPaperScope.projects[0].getItem({ data: { id: 'tooltips' }});
    drawingPreview.removeChildren();
    tooltips.removeChildren();
    new Tooltip(`${Math.round(toBounds.width)} x ${Math.round(toBounds.height)}`, dragEvent.point, {up: true});
    new uiPaperScope.Path.Rectangle({
      rectangle: toBounds,
      strokeColor: theme.palette.primary,
      strokeWidth: 1 / uiPaperScope.view.zoom,
      parent: drawingPreview
    }).removeOn({
      up: true
    });
  }

  const getSnapToolHitTestZones = (): {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    center?: boolean;
    middle?: boolean;
  } => {
    if (drawing) {
      const x = dragEvent ? dragEvent.point.x - dragEvent.downPoint.x : 0;
      const y = dragEvent ? dragEvent.point.y - dragEvent.downPoint.y : 0;
      switch(handle) {
        case 'topCenter':
          return { top: true };
        case 'bottomCenter':
          return { bottom: true };
        case 'leftCenter':
          return { left: true };
        case 'rightCenter':
          return { right: true };
        case 'topLeft':
          if (dragEvent && dragEvent.modifiers.shift) {
            if (snapBounds.width > snapBounds.height) {
              return { left: true };
            } else if (snapBounds.width < snapBounds.height) {
              return { top: true };
            } else {
              if (Math.abs(x) > Math.abs(y)) {
                return { left: true };
              } else if (Math.abs(x) < Math.abs(y)) {
                return { top: true };
              } else {
                return { top: true, left: true };
              }
            }
          } else {
            return { top: true, left: true };
          }
        case 'topRight':
          if (dragEvent && dragEvent.modifiers.shift) {
            if (snapBounds.width > snapBounds.height) {
              return { right: true };
            } else if (snapBounds.width < snapBounds.height) {
              return { top: true };
            } else {
              if (Math.abs(x) > Math.abs(y)) {
                return { right: true };
              } else if (Math.abs(x) < Math.abs(y)) {
                return { top: true };
              } else {
                return { top: true, right: true };
              }
            }
          } else {
            return { top: true, right: true };
          }
        case 'bottomLeft':
          if (dragEvent && dragEvent.modifiers.shift) {
            if (snapBounds.width > snapBounds.height) {
              return { left: true };
            } else if (snapBounds.width < snapBounds.height) {
              return { bottom: true };
            } else {
              if (Math.abs(x) > Math.abs(y)) {
                return { left: true };
              } else if (Math.abs(x) < Math.abs(y)) {
                return { bottom: true };
              } else {
                return { bottom: true, left: true };
              }
            }
          } else {
            return { bottom: true, left: true };
          }
        case 'bottomRight':
          if (dragEvent && dragEvent.modifiers.shift) {
            if (snapBounds.width > snapBounds.height) {
              return { right: true };
            } else if (snapBounds.width < snapBounds.height) {
              return { bottom: true };
            } else {
              if (Math.abs(x) > Math.abs(y)) {
                return { right: true };
              } else if (Math.abs(x) < Math.abs(y)) {
                return { bottom: true };
              } else {
                return { bottom: true, right: true };
              }
            }
          } else {
            return { bottom: true, right: true };
          }
      }
    } else {
      return { center: true, middle: true };
    }
  }

  const handleSnapToolUpdate = (snapToolBounds: paper.Rectangle, xSnapPoint: Btwx.SnapPoint, ySnapPoint: Btwx.SnapPoint): void => {
    if (drawing) {
      setToBounds(snapToolBounds);
    } else {
      setInitialToBounds(snapToolBounds);
    }
  }

  useEffect(() => {
    if (moveEvent && isEnabled && !drawing) {
      const nextSnapBounds = new uiPaperScope.Rectangle({
        from: new uiPaperScope.Point(moveEvent.point.x - 0.5, moveEvent.point.y - 0.5),
        to: new uiPaperScope.Point(moveEvent.point.x + 0.5, moveEvent.point.y + 0.5)
      });
      setSnapBounds(nextSnapBounds);
    }
  }, [moveEvent])

  useEffect(() => {
    if (downEvent && isEnabled) {
      if (uiPaperScope.project.activeLayer.data.id !== 'ui') {
        uiPaperScope.projects[0].activate();
      }
      if (initialToBounds) {
        setFrom(initialToBounds.center);
      } else {
        setFrom(downEvent.point);
      }
    }
  }, [downEvent])

  useEffect(() => {
    if (dragEvent && isEnabled) {
      const fromPoint = from ? from : dragEvent.downPoint;
      const x = dragEvent.point.x - fromPoint.x;
      const y = dragEvent.point.y - fromPoint.y;
      const nextHandle = `${y > 0 ? 'bottom' : 'top'}${x > 0 ? 'Right' : 'Left'}` as 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
      const nextVector = dragEvent.point.subtract(fromPoint);
      const nextDims = new uiPaperScope.Rectangle({from: fromPoint, to: dragEvent.point}).size;
      const nextMaxDim = Math.max(nextDims.width, nextDims.height);
      const nextContrainedDims = new uiPaperScope.Point(nextVector.x < 0 ? fromPoint.x - nextMaxDim : fromPoint.x + nextMaxDim, nextVector.y < 0 ? fromPoint.y - nextMaxDim : fromPoint.y + nextMaxDim);
      const nextSnapBounds = new uiPaperScope.Rectangle({
        from: fromPoint,
        to: dragEvent.modifiers.shift ? nextContrainedDims : dragEvent.point
      });
      setHandle(nextHandle);
      setConstrainedDims(nextContrainedDims);
      setSnapBounds(nextSnapBounds);
      if (!drawing) {
        dispatch(setCanvasDrawing({drawing: true}));
      }
      if (dragEvent.modifiers.shift && !shiftModifier) {
        setShiftModifier(true);
      }
      if (!dragEvent.modifiers.shift && shiftModifier) {
        setShiftModifier(false);
      }
    }
  }, [dragEvent]);

  useEffect(() => {
    if (upEvent && isEnabled && drawing) {
      resetState();
      dispatch(addArtboardThunk({
        layer: {
          frame: {
            x: toBounds.center.x,
            y: toBounds.center.y,
            width: toBounds.width,
            height: toBounds.height,
            innerWidth: toBounds.width,
            innerHeight: toBounds.height
          }
        }
      })) as any;
      dispatch(toggleArtboardToolThunk());
    }
  }, [upEvent]);

  useEffect(() => {
    if (keyDownEvent && isEnabled && drawing) {
      if (keyDownEvent.key === 'shift') {
        setSnapBounds(new uiPaperScope.Rectangle({
          from: from,
          to: constrainedDims
        }));
        setShiftModifier(true);
      }
    }
  }, [keyDownEvent]);

  useEffect(() => {
    if (keyUpEvent && isEnabled && drawing) {
      if (keyUpEvent.key === 'shift') {
        setSnapBounds(new uiPaperScope.Rectangle({
          from: from,
          to: dragEvent.point
        }));
        setShiftModifier(false);
      }
    }
  }, [keyUpEvent]);

  // handle preview on toBounds update
  useEffect(() => {
    if (toBounds && isEnabled) {
      updatePreview();
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
        resetState();
      }
    }
  }, [isEnabled]);

  return (
    isEnabled
    ? <SnapTool
        bounds={snapBounds}
        snapRule={drawing ? 'resize' : 'move'}
        hitTestZones={getSnapToolHitTestZones()}
        preserveAspectRatio={shiftModifier}
        aspectRatio={1}
        onUpdate={handleSnapToolUpdate}
        toolEvent={drawing ? dragEvent : moveEvent}
        resizeHandle={handle} />
    : null
  );
}

export default PaperTool(
  ArtboardTool,
  { all: true }
);