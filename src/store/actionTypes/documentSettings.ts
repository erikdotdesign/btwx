import { StateWithHistory } from 'redux-undo';
import { LayerState } from '../reducers/layer';
import { DocumentSettingsState } from '../reducers/documentSettings';
import { ViewSettingsState } from '../reducers/viewSettings';

export const OPEN_DOCUMENT = 'OPEN_DOCUMENT';
export const HYDRATE_DOCUMENT = 'HYDRATE_DOCUMENT';

export const SAVE_DOCUMENT_AS = 'SAVE_DOCUMENT_AS';
export const SAVE_DOCUMENT = 'SAVE_DOCUMENT';

export const SET_CANVAS_MATRIX = 'SET_CANVAS_MATRIX';
export const SET_CANVAS_COLOR_FORMAT = 'SET_CANVAS_COLOR_FORMAT';

export const ADD_DOCUMENT_IMAGE = 'ADD_DOCUMENT_IMAGE';
export const HYDRATE_DOCUMENT_IMAGES = 'HYDRATE_DOCUMENT_IMAGES';

export interface OpenDocumentPayload {
  layer: StateWithHistory<LayerState>;
  documentSettings: DocumentSettingsState;
  viewSettings: ViewSettingsState;
}

export interface OpenDocument {
  type: typeof OPEN_DOCUMENT;
  payload: OpenDocumentPayload;
}

export interface HydrateDocumentPayload {
  layer: StateWithHistory<LayerState>;
  documentSettings: DocumentSettingsState;
  viewSettings: ViewSettingsState;
}

export interface HydrateDocument {
  type: typeof HYDRATE_DOCUMENT;
  payload: HydrateDocumentPayload;
}

export interface SaveDocumentAsPayload {
  id?: string;
  name: string;
  path: string;
  edit: string;
}

export interface SaveDocumentAs {
  type: typeof SAVE_DOCUMENT_AS;
  payload: SaveDocumentAsPayload;
}

export interface SaveDocumentPayload {
  edit: string;
}

export interface SaveDocument {
  type: typeof SAVE_DOCUMENT;
  payload: SaveDocumentPayload;
}

export interface SetCanvasMatrixPayload {
  matrix: number[];
}

export interface SetCanvasMatrix {
  type: typeof SET_CANVAS_MATRIX;
  payload: SetCanvasMatrixPayload;
}

export interface SetCanvasColorFormatPayload {
  colorFormat: Btwx.ColorFormat;
}

export interface SetCanvasColorFormat {
  type: typeof SET_CANVAS_COLOR_FORMAT;
  payload: SetCanvasColorFormatPayload;
}

export interface AddDocumentImagePayload {
  id: string;
  buffer: Buffer;
  ext: string;
}

export interface AddDocumentImage {
  type: typeof ADD_DOCUMENT_IMAGE;
  payload: AddDocumentImagePayload;
}

export interface HydrateDocumentImagesPayload {
  images: {
    allIds: string[];
    byId: {
      [id: string]: Btwx.DocumentImage;
    };
  };
}

export interface HydrateDocumentImages {
  type: typeof HYDRATE_DOCUMENT_IMAGES;
  payload: HydrateDocumentImagesPayload;
}

export type DocumentSettingsTypes = OpenDocument |
                                    SaveDocumentAs |
                                    SaveDocument |
                                    SetCanvasMatrix |
                                    SetCanvasColorFormat |
                                    AddDocumentImage |
                                    HydrateDocument |
                                    HydrateDocumentImages;