import { v4 as uuidv4 } from 'uuid';
import { ActionCreators } from 'redux-undo';
import { updateFramesThunk } from './layer';

import {
  OPEN_DOCUMENT,
  SAVE_DOCUMENT_AS,
  SAVE_DOCUMENT,
  ADD_DOCUMENT_IMAGE,
  SET_CANVAS_MATRIX,
  SET_CANVAS_COLOR_FORMAT,
  HYDRATE_DOCUMENT,
  HYDRATE_DOCUMENT_IMAGES,
  HydrateDocumentImagesPayload,
  HydrateDocumentPayload,
  OpenDocumentPayload,
  SaveDocumentAsPayload,
  SaveDocumentPayload,
  AddDocumentImagePayload,
  SetCanvasMatrixPayload,
  SetCanvasColorFormatPayload,
  DocumentSettingsTypes
} from '../actionTypes/documentSettings';

export const openDocument = (payload: OpenDocumentPayload): DocumentSettingsTypes => ({
  type: OPEN_DOCUMENT,
  payload
});

export const hydrateDocument = (payload: HydrateDocumentPayload): DocumentSettingsTypes => ({
  type: HYDRATE_DOCUMENT,
  payload
});

export const hydrateDocumentThunk = (payload: HydrateDocumentPayload) => {
  return (dispatch: any, getState: any): void => {
    dispatch(hydrateDocument(payload));
    dispatch(ActionCreators.clearHistory());
    dispatch(updateFramesThunk());
  }
};

export const saveDocumentAs = (payload: SaveDocumentAsPayload): DocumentSettingsTypes => ({
  type: SAVE_DOCUMENT_AS,
  payload: {
    ...payload,
    id: uuidv4()
  }
});

export const saveDocument = (payload: SaveDocumentPayload): DocumentSettingsTypes => ({
  type: SAVE_DOCUMENT,
  payload
});

export const addDocumentImage = (payload: AddDocumentImagePayload): DocumentSettingsTypes => ({
  type: ADD_DOCUMENT_IMAGE,
  payload
});

export const setCanvasMatrix = (payload: SetCanvasMatrixPayload): DocumentSettingsTypes => ({
  type: SET_CANVAS_MATRIX,
  payload
});

export const setCanvasColorFormat = (payload: SetCanvasColorFormatPayload): DocumentSettingsTypes => ({
  type: SET_CANVAS_COLOR_FORMAT,
  payload
});

export const hydrateDocumentImages = (payload: HydrateDocumentImagesPayload): DocumentSettingsTypes => ({
  type: HYDRATE_DOCUMENT_IMAGES,
  payload
});