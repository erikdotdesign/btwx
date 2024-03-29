/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, ReactElement, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { paperMain } from '../canvas';
import { getAllProjectIndices } from '../store/selectors/layer';
import { setCanvasCursor, setCanvasZooming } from '../store/actions/canvasSettings';
import { setCanvasMatrix } from '../store/actions/documentSettings';

interface ZoomToolProps {
  zoomEvent: WheelEvent;
}

const ZoomTool = (props: ZoomToolProps): ReactElement => {
  const { zoomEvent } = props;
  const cursor = useSelector((state: RootState) => state.canvasSettings.cursor);
  const isEnabled = useSelector((state: RootState) => state.canvasSettings.zooming);
  const allProjectIndices = useSelector((state: RootState) => getAllProjectIndices(state));
  const dispatch = useDispatch();

  const debounceZoomEnd = useCallback(
    debounce((currentCursor: Btwx.CanvasCursor[], paperMatrix) => {
      dispatch(setCanvasZooming({zooming: false}));
      dispatch(setCanvasMatrix({matrix: paperMatrix}));
      dispatch(setCanvasCursor({cursor: currentCursor.filter(c => c !== 'zoom-in' && c !== 'zoom-out')}));
    }, 50),
    []
  );

  useEffect(() => {
    if (zoomEvent) {
      if (!isEnabled) {
        dispatch(setCanvasZooming({zooming: true}));
      }
      const cursorPoint = paperMain.project.view.getEventPoint(zoomEvent as any);
      const pointDiff = new paperMain.Point(cursorPoint.x - paperMain.view.center.x, cursorPoint.y - paperMain.view.center.y);
      allProjectIndices.forEach((current, index) => {
        const project = paperMain.projects[current];
        if (index === 0) {
          const prevZoom = project.view.zoom;
          const nextZoom = project.view.zoom - zoomEvent.deltaY * (0.01 * project.view.zoom);
          if (zoomEvent.deltaY < 0 && nextZoom < 25) {
            if (cursor[0] !== 'zoom-in') {
              dispatch(setCanvasCursor({cursor: ['zoom-in', ...cursor]}));
            }
            project.view.zoom = nextZoom;
          } else if (zoomEvent.deltaY > 0 && nextZoom > 0) {
            if (cursor[0] !== 'zoom-out') {
              dispatch(setCanvasCursor({cursor: ['zoom-out', ...cursor]}));
            }
            project.view.zoom = nextZoom;
          } else if (zoomEvent.deltaY > 0 && nextZoom < 0) {
            project.view.zoom = 0.01;
          }
          const zoomDiff = project.view.zoom - prevZoom;
          project.view.translate(
            new paperMain.Point(
              ((zoomDiff * pointDiff.x) * (1 / project.view.zoom)) * -1,
              ((zoomDiff * pointDiff.y) * (1 / project.view.zoom)) * -1
            )
          );
        } else {
          project.view.matrix = paperMain.projects[0].view.matrix;
        }
      });
      debounceZoomEnd(cursor, paperMain.projects[0].view.matrix.values);
    }
  }, [zoomEvent]);

  return null;
}

export default ZoomTool;