import { combineReducers } from 'redux';
import undoable, { includeAction, excludeAction } from 'redux-undo';
import layer from './layer';
import tool from './tool';
import contextMenu from './contextMenu';
import tweenDrawer from './tweenDrawer';
import easeEditor from './easeEditor';
import fillEditor from './fillEditor';
import strokeEditor from './strokeEditor';
import textEditor from './textEditor';
import textSettings from './textSettings';
import canvasSettings from './canvasSettings';
import theme from './theme';

import {
  ADD_ARTBOARD,
  ADD_GROUP,
  ADD_SHAPE,
  ADD_TEXT,
  ADD_IMAGE,
  REMOVE_LAYER,
  REMOVE_LAYERS,
  ADD_LAYER_CHILD,
  ADD_LAYER_CHILDREN,
  INSERT_LAYER_CHILD,
  INSERT_LAYER_ABOVE,
  INSERT_LAYERS_ABOVE,
  INSERT_LAYER_BELOW,
  INSERT_LAYERS_BELOW,
  GROUP_LAYERS,
  UNGROUP_LAYER,
  UNGROUP_LAYERS,
  COPY_LAYER_TO_CLIPBOARD,
  COPY_LAYERS_TO_CLIPBOARD,
  PASTE_LAYERS_FROM_CLIPBOARD,
  MOVE_LAYER_TO,
  MOVE_LAYER_BY,
  MOVE_LAYERS_TO,
  MOVE_LAYERS_BY,
  SET_LAYER_NAME,
  ADD_LAYER_TWEEN_EVENT,
  REMOVE_LAYER_TWEEN_EVENT,
  ADD_LAYER_TWEEN,
  REMOVE_LAYER_TWEEN,
  SET_LAYER_TWEEN_EASE,
  SET_LAYER_TWEEN_POWER,
  SET_LAYER_X,
  SET_LAYER_Y,
  SET_LAYER_WIDTH,
  SET_LAYER_HEIGHT,
  SET_LAYER_ROTATION,
  SET_LAYER_OPACITY,
  ENABLE_LAYER_HORIZONTAL_FLIP,
  DISABLE_LAYER_HORIZONTAL_FLIP,
  ENABLE_LAYER_VERTICAL_FLIP,
  DISABLE_LAYER_VERTICAL_FLIP,
  ENABLE_LAYER_FILL,
  DISABLE_LAYER_FILL,
  SET_LAYER_FILL,
  SET_LAYER_FILL_COLOR,
  SET_LAYER_FILL_GRADIENT,
  SET_LAYER_FILL_TYPE,
  SET_LAYER_FILL_GRADIENT_TYPE,
  ENABLE_LAYER_STROKE,
  DISABLE_LAYER_STROKE,
  SET_LAYER_STROKE_COLOR,
  SET_LAYER_STROKE_FILL_TYPE,
  SET_LAYER_STROKE_GRADIENT,
  SET_LAYER_STROKE_GRADIENT_TYPE,
  SET_LAYER_STROKE_WIDTH,
  SET_LAYER_STROKE_CAP,
  SET_LAYER_STROKE_JOIN,
  SET_LAYER_STROKE_DASH_ARRAY,
  ENABLE_LAYER_SHADOW,
  DISABLE_LAYER_SHADOW,
  SET_LAYER_SHADOW_COLOR,
  SET_LAYER_SHADOW_BLUR,
  SET_LAYER_SHADOW_X_OFFSET,
  SET_LAYER_SHADOW_Y_OFFSET,
  RESIZE_LAYER,
  RESIZE_LAYERS,
  SET_LAYER_TEXT,
  SET_LAYER_FONT_SIZE,
  SET_LAYER_LEADING,
  SET_LAYER_FONT_WEIGHT,
  SET_LAYER_FONT_FAMILY,
  SET_LAYER_JUSTIFICATION,
  ADD_LAYERS_MASK,
  ALIGN_LAYERS_TO_LEFT,
  ALIGN_LAYERS_TO_RIGHT,
  ALIGN_LAYERS_TO_TOP,
  ALIGN_LAYERS_TO_BOTTOM,
  ALIGN_LAYERS_TO_CENTER,
  ALIGN_LAYERS_TO_MIDDLE,
  DISTRIBUTE_LAYERS_HORIZONTALLY,
  DISTRIBUTE_LAYERS_VERTICALLY
} from '../actionTypes/layer';

const rootReducer = combineReducers({
  layer: undoable(layer, { filter: includeAction([
    ADD_ARTBOARD,
    ADD_GROUP,
    ADD_SHAPE,
    ADD_TEXT,
    ADD_IMAGE,
    REMOVE_LAYER,
    REMOVE_LAYERS,
    ADD_LAYER_CHILD,
    ADD_LAYER_CHILDREN,
    INSERT_LAYER_CHILD,
    INSERT_LAYER_ABOVE,
    INSERT_LAYERS_ABOVE,
    INSERT_LAYER_BELOW,
    INSERT_LAYERS_BELOW,
    GROUP_LAYERS,
    UNGROUP_LAYER,
    UNGROUP_LAYERS,
    COPY_LAYER_TO_CLIPBOARD,
    COPY_LAYERS_TO_CLIPBOARD,
    PASTE_LAYERS_FROM_CLIPBOARD,
    MOVE_LAYER_TO,
    MOVE_LAYER_BY,
    MOVE_LAYERS_TO,
    MOVE_LAYERS_BY,
    SET_LAYER_NAME,
    ADD_LAYER_TWEEN_EVENT,
    REMOVE_LAYER_TWEEN_EVENT,
    ADD_LAYER_TWEEN,
    REMOVE_LAYER_TWEEN,
    SET_LAYER_TWEEN_EASE,
    SET_LAYER_TWEEN_POWER,
    SET_LAYER_X,
    SET_LAYER_Y,
    SET_LAYER_WIDTH,
    SET_LAYER_HEIGHT,
    SET_LAYER_ROTATION,
    SET_LAYER_OPACITY,
    ENABLE_LAYER_HORIZONTAL_FLIP,
    DISABLE_LAYER_HORIZONTAL_FLIP,
    ENABLE_LAYER_VERTICAL_FLIP,
    DISABLE_LAYER_VERTICAL_FLIP,
    ENABLE_LAYER_FILL,
    DISABLE_LAYER_FILL,
    SET_LAYER_FILL,
    SET_LAYER_FILL_COLOR,
    SET_LAYER_FILL_GRADIENT,
    SET_LAYER_FILL_TYPE,
    SET_LAYER_FILL_GRADIENT_TYPE,
    ENABLE_LAYER_STROKE,
    DISABLE_LAYER_STROKE,
    SET_LAYER_STROKE_COLOR,
    SET_LAYER_STROKE_FILL_TYPE,
    SET_LAYER_STROKE_GRADIENT,
    SET_LAYER_STROKE_GRADIENT_TYPE,
    SET_LAYER_STROKE_WIDTH,
    SET_LAYER_STROKE_CAP,
    SET_LAYER_STROKE_JOIN,
    SET_LAYER_STROKE_DASH_ARRAY,
    ENABLE_LAYER_SHADOW,
    DISABLE_LAYER_SHADOW,
    SET_LAYER_SHADOW_COLOR,
    SET_LAYER_SHADOW_BLUR,
    SET_LAYER_SHADOW_X_OFFSET,
    SET_LAYER_SHADOW_Y_OFFSET,
    RESIZE_LAYER,
    RESIZE_LAYERS,
    SET_LAYER_TEXT,
    SET_LAYER_FONT_SIZE,
    SET_LAYER_LEADING,
    SET_LAYER_FONT_WEIGHT,
    SET_LAYER_FONT_FAMILY,
    SET_LAYER_JUSTIFICATION,
    ADD_LAYERS_MASK,
    ALIGN_LAYERS_TO_LEFT,
    ALIGN_LAYERS_TO_RIGHT,
    ALIGN_LAYERS_TO_TOP,
    ALIGN_LAYERS_TO_BOTTOM,
    ALIGN_LAYERS_TO_CENTER,
    ALIGN_LAYERS_TO_MIDDLE,
    DISTRIBUTE_LAYERS_HORIZONTALLY,
    DISTRIBUTE_LAYERS_VERTICALLY
  ])}),
  tool,
  contextMenu,
  tweenDrawer,
  easeEditor,
  textEditor,
  textSettings,
  canvasSettings,
  fillEditor,
  strokeEditor,
  theme
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;