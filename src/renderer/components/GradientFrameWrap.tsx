import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import GradientFrame from './GradientFrame';

const GradientFrameWrap = (): ReactElement => {
  const selected = useSelector((state: RootState) => state.layer.present.selected);
  const isDragging = useSelector((state: RootState) => state.canvasSettings.dragging);
  const isZooming = useSelector((state: RootState) => state.canvasSettings.zooming);
  const isSelecting = useSelector((state: RootState) => state.canvasSettings.selecting);
  const isGradientEditorOpen = useSelector((state: RootState) => state.gradientEditor.isOpen);
  const isTextEditorOpen = useSelector((state: RootState) => state.textEditor.isOpen);
  const isEnabled = selected.length > 0 && isGradientEditorOpen && !isSelecting && !isTextEditorOpen && !isDragging && !isZooming;

  return (
    isEnabled
    ? <GradientFrame />
    : null
  );
}

export default GradientFrameWrap;