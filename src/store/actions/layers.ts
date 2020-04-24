import {
  ADD_LAYER,
  ADD_SHAPE,
  ADD_PAGE,
  ADD_TO_SELECTION,
  REMOVE_FROM_SELECTION,
  CLEAR_SELECTION,
  NEW_SELECTION,
  SelectionPayload,
  LayersTypes,
  AddLayerPayload,
  AddPagePayload,
  AddShapePayload
} from '../actionTypes/layers';

export const addLayer = (content: AddLayerPayload): LayersTypes => ({
  type: ADD_LAYER,
  payload: content
});

export const addShape = (content: AddShapePayload): LayersTypes => ({
  type: ADD_SHAPE,
  payload: content
});

export const addPage = (content: AddPagePayload): LayersTypes => ({
  type: ADD_PAGE,
  payload: content
});

export const addToSelection = (selection: SelectionPayload): LayersTypes => ({
  type: ADD_TO_SELECTION,
  payload: selection
});

export const removeFromSelection = (selection: SelectionPayload): LayersTypes => ({
  type: REMOVE_FROM_SELECTION,
  payload: selection
});

export const clearSelection = (): LayersTypes => ({
  type: CLEAR_SELECTION
});

export const newSelection = (selection: SelectionPayload): LayersTypes => ({
  type: NEW_SELECTION,
  payload: selection
});