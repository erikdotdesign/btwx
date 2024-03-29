/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef, useEffect, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { setPreviewMatrix } from '../store/actions/preview';
import { paperPreview } from '../canvas';
import CanvasArtboardLayer from './CanvasArtboardLayer';

const PreviewCanvas = (): ReactElement => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isTweening = useSelector((state: RootState) => state.preview.tweening !== null);
  const artboards = useSelector((state: RootState) => state.layer.present.byId.root.children);
  const activeArtboardItem = useSelector((state: RootState) => state.layer.present.byId[state.layer.present.activeArtboard]);
  const [ready, setReady] = useState(false);
  const [wheelEvent, setWheelEvent] = useState(null);
  const dispatch = useDispatch();

  const handleResize = (): void => {
    paperPreview.view.viewSize = new paperPreview.Size(
      canvasContainerRef.current.clientWidth,
      canvasContainerRef.current.clientHeight
    );
    paperPreview.view.center = new paperPreview.Point(activeArtboardItem.frame.x, activeArtboardItem.frame.y);
    dispatch(setPreviewMatrix({
      matrix: paperPreview.view.matrix.values
    }));
  }

  useEffect(() => {
    canvasRef.current.width = canvasContainerRef.current.clientWidth;
    canvasRef.current.height = canvasContainerRef.current.clientHeight;
    paperPreview.setup(canvasRef.current);
    paperPreview.view.center = new paperPreview.Point(activeArtboardItem.frame.x, activeArtboardItem.frame.y);
    window.addEventListener('resize', handleResize);
    setReady(true);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleWheel = (e: any) => {
    setWheelEvent(e);
  }

  return (
    <div
      className='c-canvas'
      ref={canvasContainerRef}
      onWheel={ready ? handleWheel : null}>
      <canvas
        id='canvas-preview'
        ref={canvasRef}
        style={{
          pointerEvents: isTweening ? 'none' : 'auto'
        }} />
      {
        ready
        ? artboards.map((id) => (
            <CanvasArtboardLayer
              key={id}
              id={id}
              paperScope='preview'
              wheelEvent={wheelEvent} />
          ))
        : null
      }
    </div>
  );
}

export default PreviewCanvas;