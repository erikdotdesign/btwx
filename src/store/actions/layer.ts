import { v4 as uuidv4 } from 'uuid';
import paper from 'paper';

import {
  ADD_PAGE,
  ADD_ARTBOARD,
  ADD_GROUP,
  ADD_SHAPE,
  REMOVE_LAYER,
  REMOVE_LAYERS,
  SELECT_LAYER,
  DEEP_SELECT_LAYER,
  SELECT_LAYERS,
  DESELECT_LAYER,
  DESELECT_LAYERS,
  DESELECT_ALL_LAYERS,
  SET_LAYER_HOVER,
  ADD_LAYER_CHILD,
  INSERT_LAYER_CHILD,
  SHOW_LAYER_CHILDREN,
  HIDE_LAYER_CHILDREN,
  INSERT_LAYER_ABOVE,
  INSERT_LAYER_BELOW,
  INCREASE_LAYER_SCOPE,
  DECREASE_LAYER_SCOPE,
  NEW_LAYER_SCOPE,
  CLEAR_LAYER_SCOPE,
  ESCAPE_LAYER_SCOPE,
  GROUP_LAYERS,
  UNGROUP_LAYER,
  UNGROUP_LAYERS,
  COPY_LAYER_TO_CLIPBOARD,
  COPY_LAYERS_TO_CLIPBOARD,
  PASTE_LAYERS_FROM_CLIPBOARD,
  MOVE_LAYER,
  MOVE_LAYERS,
  MOVE_LAYER_TO,
  MOVE_LAYERS_TO,
  MOVE_LAYER_BY,
  MOVE_LAYERS_BY,
  ENABLE_LAYER_DRAG,
  DISABLE_LAYER_DRAG,
  SET_LAYER_NAME,
  SET_ACTIVE_ARTBOARD,
  ADD_LAYER_TWEEN_EVENT,
  REMOVE_LAYER_TWEEN_EVENT,
  ADD_LAYER_TWEEN,
  REMOVE_LAYER_TWEEN,
  AddPagePayload,
  AddArtboardPayload,
  AddGroupPayload,
  AddShapePayload,
  RemoveLayerPayload,
  RemoveLayersPayload,
  SelectLayerPayload,
  DeepSelectLayerPayload,
  SelectLayersPayload,
  DeselectLayerPayload,
  DeselectLayersPayload,
  SetLayerHoverPayload,
  AddLayerChildPayload,
  InsertLayerChildPayload,
  ShowLayerChildrenPayload,
  HideLayerChildrenPayload,
  InsertLayerAbovePayload,
  InsertLayerBelowPayload,
  IncreaseLayerScopePayload,
  NewLayerScopePayload,
  GroupLayersPayload,
  UngroupLayerPayload,
  UngroupLayersPayload,
  CopyLayerToClipboardPayload,
  CopyLayersToClipboardPayload,
  PasteLayersFromClipboardPayload,
  MoveLayerPayload,
  MoveLayersPayload,
  MoveLayerToPayload,
  MoveLayersToPayload,
  MoveLayerByPayload,
  MoveLayersByPayload,
  SetLayerNamePayload,
  SetActiveArtboardPayload,
  AddLayerTweenEventPayload,
  RemoveLayerTweenEventPayload,
  AddLayerTweenPayload,
  RemoveLayerTweenPayload,
  LayerTypes
} from '../actionTypes/layer';

// Page

export const addPage = (payload: AddPagePayload): LayerTypes => {
  const layerId = uuidv4();
  const paperLayer = new paper.Group({
    data: { id: layerId, type: 'Page' }
  });
  return {
    type: ADD_PAGE,
    payload: {
      type: 'Page',
      id: layerId,
      name: payload.name ? payload.name : 'Page',
      parent: null,
      children: [],
      //paperLayer: paperLayer.exportJSON(),
      selected: false,
      tweenEvents: [],
      tweens: []
    }
  }
};

// Artboard

export const addArtboard = (payload: AddArtboardPayload): LayerTypes => {
  const layerId = uuidv4();
  const backgroundId = uuidv4();
  payload.paperLayer.name = 'ArtboardBackground';
  payload.paperLayer.data = { id: backgroundId, type: 'ArtboardBackground', artboard: layerId };
  const paperLayer = new paper.Group({
    name: payload.name ? payload.name : 'Artboard',
    data: { id: layerId, type: 'Artboard' },
    children: [payload.paperLayer]
  });
  return {
    type: ADD_ARTBOARD,
    payload: {
      type: 'Artboard',
      id: layerId,
      frame: payload.frame,
      name: payload.name ? payload.name : 'Artboard',
      parent: null,
      children: [backgroundId],
      selected: false,
      //paperLayer: paperLayer.exportJSON(),
      showChildren: false,
      tweenEvents: [],
      tweens: []
    }
  }
};

// Group

export const addGroup = (payload: AddGroupPayload): LayerTypes => {
  const layerId = uuidv4();
  const paperLayer = new paper.Group({
    name: payload.name ? payload.name : 'Group',
    data: { id: layerId, type: 'Group' }
  });
  return {
    type: ADD_GROUP,
    payload: {
      type: 'Group',
      id: layerId,
      frame: payload.frame,
      name: payload.name ? payload.name : 'Group',
      parent: payload.parent ? payload.parent : null,
      children: [],
      selected: false,
      //paperLayer: paperLayer.exportJSON(),
      showChildren: false,
      tweenEvents: [],
      tweens: []
    }
  }
};

// Shape

export const addShape = (payload: AddShapePayload): LayerTypes => {
  const id = uuidv4();
  payload.paperLayer.name = payload.name ? payload.name : payload.shapeType;
  payload.paperLayer.data = {
    id: id,
    type: 'Shape'
  }
  const clone = payload.paperLayer.clone({insert: false}) as paper.PathItem;
  clone.fitBounds(new paper.Rectangle({
    point: new paper.Point(0,0),
    size: new paper.Size(16,16)
  }));
  return {
    type: ADD_SHAPE,
    payload: {
      type: 'Shape',
      id: id,
      frame: payload.frame,
      name: payload.name ? payload.name : payload.shapeType,
      parent: payload.parent ? payload.parent : null,
      shapeType: payload.shapeType,
      pathData: clone.pathData,
      //paperLayer: payload.paperLayer.exportJSON(),
      selected: false,
      tweenEvents: [],
      tweens: []
    }
  }
};

// Remove

export const removeLayer = (payload: RemoveLayerPayload): LayerTypes => ({
  type: REMOVE_LAYER,
  payload
});

export const removeLayers = (payload: RemoveLayersPayload): LayerTypes => ({
  type: REMOVE_LAYERS,
  payload
});

// Select

export const selectLayer = (payload: SelectLayerPayload): LayerTypes => ({
  type: SELECT_LAYER,
  payload
});

export const deepSelectLayer = (payload: DeepSelectLayerPayload): LayerTypes => ({
  type: DEEP_SELECT_LAYER,
  payload
});

export const selectLayers = (payload: SelectLayersPayload): LayerTypes => ({
  type: SELECT_LAYERS,
  payload
});

export const deselectLayer = (payload: DeselectLayerPayload): LayerTypes => ({
  type: DESELECT_LAYER,
  payload
});

export const deselectLayers = (payload: DeselectLayersPayload): LayerTypes => ({
  type: DESELECT_LAYERS,
  payload
});

export const deselectAllLayers = (): LayerTypes => ({
  type: DESELECT_ALL_LAYERS
});

// Hover

export const setLayerHover = (payload: SetLayerHoverPayload): LayerTypes => ({
  type: SET_LAYER_HOVER,
  payload
});

// Children

export const addLayerChild = (payload: AddLayerChildPayload): LayerTypes => ({
  type: ADD_LAYER_CHILD,
  payload
});

export const insertLayerChild = (payload: InsertLayerChildPayload): LayerTypes => ({
  type: INSERT_LAYER_CHILD,
  payload
});

export const showLayerChildren = (payload: ShowLayerChildrenPayload): LayerTypes => ({
  type: SHOW_LAYER_CHILDREN,
  payload
});

export const hideLayerChildren = (payload: HideLayerChildrenPayload): LayerTypes => ({
  type: HIDE_LAYER_CHILDREN,
  payload
});

// Insert

export const insertLayerAbove = (payload: InsertLayerAbovePayload): LayerTypes => ({
  type: INSERT_LAYER_ABOVE,
  payload
});

export const insertLayerBelow = (payload: InsertLayerBelowPayload): LayerTypes => ({
  type: INSERT_LAYER_BELOW,
  payload
});

// Scope

export const increaseLayerScope = (payload: IncreaseLayerScopePayload): LayerTypes => ({
  type: INCREASE_LAYER_SCOPE,
  payload
});

export const decreaseLayerScope = (): LayerTypes => ({
  type: DECREASE_LAYER_SCOPE
});

export const clearLayerScope = (): LayerTypes => ({
  type: CLEAR_LAYER_SCOPE
});

export const newLayerScope = (payload: NewLayerScopePayload): LayerTypes => ({
  type: NEW_LAYER_SCOPE,
  payload
});

export const escapeLayerScope = (): LayerTypes => ({
  type: ESCAPE_LAYER_SCOPE
});

// Group

export const groupLayers = (payload: GroupLayersPayload): LayerTypes => ({
  type: GROUP_LAYERS,
  payload
});

export const ungroupLayer = (payload: UngroupLayerPayload): LayerTypes => ({
  type: UNGROUP_LAYER,
  payload
});

export const ungroupLayers = (payload: UngroupLayersPayload): LayerTypes => ({
  type: UNGROUP_LAYERS,
  payload
});

// Clipboard

export const copyLayerToClipboard = (payload: CopyLayerToClipboardPayload): LayerTypes => ({
  type: COPY_LAYER_TO_CLIPBOARD,
  payload
});

export const copyLayersToClipboard = (payload: CopyLayersToClipboardPayload): LayerTypes => ({
  type: COPY_LAYERS_TO_CLIPBOARD,
  payload
});

export const pasteLayersFromClipboard = (payload: PasteLayersFromClipboardPayload): LayerTypes => ({
  type: PASTE_LAYERS_FROM_CLIPBOARD,
  payload
});

// Move

export const moveLayer = (payload: MoveLayerPayload): LayerTypes => ({
  type: MOVE_LAYER,
  payload
});

export const moveLayers = (payload: MoveLayersPayload): LayerTypes => ({
  type: MOVE_LAYERS,
  payload
});

export const moveLayerTo = (payload: MoveLayerToPayload): LayerTypes => ({
  type: MOVE_LAYER_TO,
  payload
});

export const moveLayersTo = (payload: MoveLayersToPayload): LayerTypes => ({
  type: MOVE_LAYERS_TO,
  payload
});

export const moveLayerBy = (payload: MoveLayerByPayload): LayerTypes => ({
  type: MOVE_LAYER_BY,
  payload
});

export const moveLayersBy = (payload: MoveLayersByPayload): LayerTypes => ({
  type: MOVE_LAYERS_BY,
  payload
});

// Drag

export const enableLayerDrag = (): LayerTypes => ({
  type: ENABLE_LAYER_DRAG
});

export const disableLayerDrag = (): LayerTypes => ({
  type: DISABLE_LAYER_DRAG
});

// Name

export const setLayerName = (payload: SetLayerNamePayload): LayerTypes => ({
  type: SET_LAYER_NAME,
  payload
});

// Artboard

export const setActiveArtboard = (payload: SetActiveArtboardPayload): LayerTypes => ({
  type: SET_ACTIVE_ARTBOARD,
  payload
});

// Animation Event

export const addLayerTweenEvent = (payload: AddLayerTweenEventPayload): LayerTypes => ({
  type: ADD_LAYER_TWEEN_EVENT,
  payload: {
    ...payload,
    id: uuidv4()
  }
});

export const removeLayerTweenEvent = (payload: RemoveLayerTweenEventPayload): LayerTypes => ({
  type: REMOVE_LAYER_TWEEN_EVENT,
  payload
});

// Tween

export const addLayerTween = (payload: AddLayerTweenPayload): LayerTypes => ({
  type: ADD_LAYER_TWEEN,
  payload: {
    ...payload,
    id: uuidv4()
  }
});

export const removeLayerTween = (payload: RemoveLayerTweenPayload): LayerTypes => ({
  type: REMOVE_LAYER_TWEEN,
  payload
});