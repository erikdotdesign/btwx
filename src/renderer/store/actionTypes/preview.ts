export const OPEN_PREVIEW = 'OPEN_PREVIEW';
export const CLOSE_PREVIEW = 'CLOSE_PREVIEW';
export const START_PREVIEW_RECORDING = 'START_PREVIEW_RECORDING';
export const STOP_PREVIEW_RECORDING = 'STOP_PREVIEW_RECORDING';
export const SET_PREVIEW_FOCUSING = 'SET_PREVIEW_FOCUSING';
export const SET_PREVIEW_TWEENING = 'SET_PREVIEW_TWEENING';
export const SET_PREVIEW_DEVICE = 'SET_PREVIEW_DEVICE';
export const TOGGLE_PREVIEW_DEVICE_ORIENTATION = 'TOGGLE_PREVIEW_DEVICE_ORIENTATION';
export const ENABLE_PREVIEW_AUTOPLAY = 'ENABLE_PREVIEW_AUTOPLAY';
export const DISABLE_PREVIEW_AUTOPLAY = 'DISABLE_PREVIEW_AUTOPLAY';
export const SET_PREVIEW_MATRIX = 'SET_PREVIEW_MATRIX';

export interface OpenPreview {
  type: typeof OPEN_PREVIEW;
}

export interface ClosePreview {
  type: typeof CLOSE_PREVIEW;
}

export interface StartPreviewRecording {
  type: typeof START_PREVIEW_RECORDING;
}

export interface StopPreviewRecording {
  type: typeof STOP_PREVIEW_RECORDING;
}

export interface SetPreviewFocusingPayload {
  focusing: boolean;
}

export interface SetPreviewFocusing {
  type: typeof SET_PREVIEW_FOCUSING;
  payload: SetPreviewFocusingPayload;
}

export interface SetPreviewTweeningPayload {
  tweening: string;
}

export interface SetPreviewTweening {
  type: typeof SET_PREVIEW_TWEENING;
  payload: SetPreviewTweeningPayload;
}

export interface SetPreviewDevicePayload {
  device: string;
  deviceColor: string;
}

export interface SetPreviewDevice {
  type: typeof SET_PREVIEW_DEVICE;
  payload: SetPreviewDevicePayload;
}

export interface TogglePreviewDeviceOrientation {
  type: typeof TOGGLE_PREVIEW_DEVICE_ORIENTATION;
}

export interface EnablePreviewAutoplay {
  type: typeof ENABLE_PREVIEW_AUTOPLAY;
}

export interface DisablePreviewAutoplay {
  type: typeof DISABLE_PREVIEW_AUTOPLAY;
}

export interface SetPreviewMatrixPayload {
  matrix: number[];
}

export interface SetPreviewMatrix {
  type: typeof SET_PREVIEW_MATRIX;
  payload: SetPreviewMatrixPayload;
}

export type PreviewTypes = OpenPreview |
                           ClosePreview |
                           StartPreviewRecording |
                           StopPreviewRecording |
                           SetPreviewFocusing |
                           SetPreviewTweening |
                           SetPreviewDevice |
                           TogglePreviewDeviceOrientation |
                           EnablePreviewAutoplay |
                           DisablePreviewAutoplay |
                           SetPreviewMatrix;