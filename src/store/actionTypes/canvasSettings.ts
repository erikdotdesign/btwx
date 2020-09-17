export const SET_CANVAS_RESIZING = 'SET_CANVAS_RESIZING';
export const SET_CANVAS_SELECTING = 'SET_CANVAS_SELECTING';
export const SET_CANVAS_DRAGGING = 'SET_CANVAS_DRAGGING';
export const SET_CANVAS_ZOOMING = 'SET_CANVAS_ZOOMING';
export const SET_CANVAS_ZOOMING_TYPE = 'SET_CANVAS_ZOOMING_TYPE';
export const SET_CANVAS_MEASURING = 'SET_CANVAS_MEASURING';
export const SET_CANVAS_FOCUSING = 'SET_CANVAS_FOCUSING';
export const RESET_CANVAS_SETTINGS = 'RESET_CANVAS_SETTINGS';

export interface SetCanvasResizingPayload {
  resizing: boolean;
  resizingType?: em.ResizingType;
}

export interface SetCanvasResizing {
  type: typeof SET_CANVAS_RESIZING;
  payload: SetCanvasResizingPayload;
}

export interface SetCanvasSelectingPayload {
  selecting: boolean;
}

export interface SetCanvasSelecting {
  type: typeof SET_CANVAS_SELECTING;
  payload: SetCanvasSelectingPayload;
}

export interface SetCanvasDraggingPayload {
  dragging: boolean;
}

export interface SetCanvasDragging {
  type: typeof SET_CANVAS_DRAGGING;
  payload: SetCanvasDraggingPayload;
}

export interface SetCanvasZoomingPayload {
  zooming: boolean;
  zoomingType?: em.ZoomingType;
}

export interface SetCanvasZooming {
  type: typeof SET_CANVAS_ZOOMING;
  payload: SetCanvasZoomingPayload;
}

export interface SetCanvasZoomingTypePayload {
  zoomingType: em.ZoomingType;
}

export interface SetCanvasZoomingType {
  type: typeof SET_CANVAS_ZOOMING_TYPE;
  payload: SetCanvasZoomingTypePayload;
}

export interface SetCanvasMeasuringPayload {
  measuring: boolean;
}

export interface SetCanvasMeasuring {
  type: typeof SET_CANVAS_MEASURING;
  payload: SetCanvasMeasuringPayload;
}

export interface SetCanvasFocusingPayload {
  focusing: boolean;
}

export interface SetCanvasFocusing {
  type: typeof SET_CANVAS_FOCUSING;
  payload: SetCanvasFocusingPayload;
}

export interface ResetCanvasSettings {
  type: typeof RESET_CANVAS_SETTINGS;
}

export type CanvasSettingsTypes = SetCanvasResizing |
                                  SetCanvasSelecting |
                                  SetCanvasDragging |
                                  SetCanvasZooming |
                                  SetCanvasZoomingType |
                                  SetCanvasMeasuring |
                                  SetCanvasFocusing |
                                  ResetCanvasSettings;