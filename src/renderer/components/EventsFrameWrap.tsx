import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import EventsFrame from './EventsFrame';

const EventsFrameWrap = (): ReactElement => {
  const artboardSelected = useSelector((state: RootState) => state.layer.present.selected.some(id => state.layer.present.allArtboardIds.includes(id)));
  const isResizing = useSelector((state: RootState) => state.canvasSettings.resizing);
  const isDragging = useSelector((state: RootState) => state.canvasSettings.dragging);
  const isZooming = useSelector((state: RootState) => state.canvasSettings.zooming);
  const isEventDrawerOpen = useSelector((state: RootState) => state.viewSettings.eventDrawer.isOpen);
  // const eventDrawerEvent = useSelector((state: RootState) => state.eventDrawer.event);
  const isTextEditorOpen = useSelector((state: RootState) => state.textEditor.isOpen);
  const events = useSelector((state: RootState) => state.layer.present.events.allIds.length > 0);
  const isEnabled = events && isEventDrawerOpen && !isTextEditorOpen && !(isResizing && artboardSelected) && !(isDragging && artboardSelected) && !isZooming;

  return (
    isEnabled
    ? <EventsFrame />
    : null
  );
}

export default EventsFrameWrap;