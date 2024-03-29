import { LayerState } from '../reducers/layer';

export const ADD_GROUP = 'ADD_GROUP';
export const ADD_SHAPE = 'ADD_SHAPE';
export const ADD_ARTBOARD = 'ADD_ARTBOARD';
export const ADD_TEXT = 'ADD_TEXT';
export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_LAYERS = 'ADD_LAYERS';

export const REMOVE_LAYER = 'REMOVE_LAYER';
export const REMOVE_LAYERS = 'REMOVE_LAYERS';

export const SELECT_LAYER = 'SELECT_LAYER';
export const DEEP_SELECT_LAYER = 'DEEP_SELECT_LAYER';
export const SELECT_LAYERS = 'SELECT_LAYERS';
export const DESELECT_LAYER = 'DESELECT_LAYER';
export const DESELECT_LAYERS = 'DESELECT_LAYERS';
export const SELECT_ALL_LAYERS = 'SELECT_ALL_LAYERS';
export const DESELECT_ALL_LAYERS = 'DESELECT_ALL_LAYERS';
export const AREA_SELECT_LAYERS = 'AREA_SELECT_LAYERS';

export const SET_LAYER_HOVER = 'SET_LAYER_HOVER';
export const ENABLE_LAYER_HOVER = 'ENABLE_LAYER_HOVER';
export const DISABLE_LAYER_HOVER = 'DISABLE_LAYER_HOVER';

export const ADD_LAYER_CHILD = 'ADD_LAYER_CHILD';
export const ADD_LAYER_CHILDREN = 'ADD_LAYER_CHILDREN';
export const INSERT_LAYER_CHILD = 'INSERT_LAYER_CHILD';
export const SHOW_LAYER_CHILDREN = 'SHOW_LAYER_CHILDREN';
export const SHOW_LAYERS_CHILDREN = 'SHOW_LAYERS_CHILDREN';
export const HIDE_LAYER_CHILDREN = 'HIDE_LAYER_CHILDREN';
export const HIDE_LAYERS_CHILDREN = 'HIDE_LAYERS_CHILDREN';

export const INSERT_LAYER_ABOVE = 'INSERT_LAYER_ABOVE';
export const INSERT_LAYERS_ABOVE = 'INSERT_LAYERS_ABOVE';
export const INSERT_LAYER_BELOW = 'INSERT_LAYER_BELOW';
export const INSERT_LAYERS_BELOW = 'INSERT_LAYERS_BELOW';

export const INCREASE_LAYER_SCOPE = 'INCREASE_LAYER_SCOPE';
export const DECREASE_LAYER_SCOPE = 'DECREASE_LAYER_SCOPE';
export const CLEAR_LAYER_SCOPE = 'CLEAR_LAYER_SCOPE';
export const NEW_LAYER_SCOPE = 'NEW_LAYER_SCOPE';
export const ESCAPE_LAYER_SCOPE = 'ESCAPE_LAYER_SCOPE';
export const SET_GLOBAL_SCOPE = 'SET_GLOBAL_SCOPE';
export const SET_LAYER_SCOPE = 'SET_LAYER_SCOPE';
export const SET_LAYERS_SCOPE = 'SET_LAYERS_SCOPE';

export const GROUP_LAYERS = 'GROUP_LAYERS';
export const UNGROUP_LAYER = 'UNGROUP_LAYER';
export const UNGROUP_LAYERS = 'UNGROUP_LAYERS';
export const SET_GROUP_SCOPE = 'SET_GROUP_SCOPE';

export const MOVE_LAYER = 'MOVE_LAYER';
export const MOVE_LAYERS = 'MOVE_LAYERS';
export const MOVE_LAYER_TO = 'MOVE_LAYER_TO';
export const MOVE_LAYER_BY = 'MOVE_LAYER_BY';
export const MOVE_LAYERS_TO = 'MOVE_LAYERS_TO';
export const MOVE_LAYERS_BY = 'MOVE_LAYERS_BY';

export const ENABLE_LAYER_DRAG = 'ENABLE_LAYER_DRAG';
export const DISABLE_LAYER_DRAG = 'DISABLE_LAYER_DRAG';

export const SET_LAYER_NAME = 'SET_LAYER_NAME';

export const SET_ACTIVE_ARTBOARD = 'SET_ACTIVE_ARTBOARD';

export const ADD_LAYER_EVENT = 'ADD_LAYER_EVENT';
export const ADD_LAYERS_EVENT = 'ADD_LAYERS_EVENT';
export const REMOVE_LAYER_EVENT = 'REMOVE_LAYER_EVENT';
export const REMOVE_LAYERS_EVENT = 'REMOVE_LAYERS_EVENT';
export const SET_LAYER_EVENT_EVENT_LISTENER = 'SET_LAYER_EVENT_EVENT_LISTENER';
export const SET_LAYERS_EVENT_EVENT_LISTENER = 'SET_LAYERS_EVENT_EVENT_LISTENER';

export const SELECT_LAYER_EVENT = 'SELECT_LAYER_EVENT';
export const DESELECT_LAYER_EVENT = 'DESELECT_LAYER_EVENT';
export const SELECT_LAYER_EVENTS = 'SELECT_LAYER_EVENTS';
export const DESELECT_LAYER_EVENTS = 'DESELECT_LAYER_EVENTS';
export const DESELECT_ALL_LAYER_EVENTS = 'DESELECT_ALL_LAYER_EVENTS';

export const SELECT_LAYER_EVENT_TWEEN = 'SELECT_LAYER_EVENT_TWEEN';
export const DESELECT_LAYER_EVENT_TWEEN = 'DESELECT_LAYER_EVENT_TWEEN';
export const SELECT_LAYER_EVENT_TWEENS = 'SELECT_LAYER_EVENT_TWEENS';
export const DESELECT_LAYER_EVENT_TWEENS = 'DESELECT_LAYER_EVENT_TWEENS';
export const DESELECT_ALL_LAYER_EVENT_TWEENS = 'DESELECT_ALL_LAYER_EVENT_TWEENS';

export const ADD_LAYER_TWEEN = 'ADD_LAYER_TWEEN';
export const REMOVE_LAYER_TWEEN = 'REMOVE_LAYER_TWEEN';
export const REMOVE_LAYER_TWEENS = 'REMOVE_LAYER_TWEENS';

export const SET_LAYER_TWEEN_DURATION = 'SET_LAYER_TWEEN_DURATION';
export const SET_LAYERS_TWEEN_DURATION = 'SET_LAYERS_TWEEN_DURATION';
export const SET_LAYER_TWEEN_REPEAT = 'SET_LAYER_TWEEN_REPEAT';
export const SET_LAYERS_TWEEN_REPEAT = 'SET_LAYERS_TWEEN_REPEAT';
export const SET_LAYER_TWEEN_REPEAT_DELAY = 'SET_LAYER_TWEEN_REPEAT_DELAY';
export const SET_LAYERS_TWEEN_REPEAT_DELAY = 'SET_LAYERS_TWEEN_REPEAT_DELAY';
export const SET_LAYER_TWEEN_YOYO = 'SET_LAYER_TWEEN_YOYO';
export const SET_LAYERS_TWEEN_YOYO = 'SET_LAYERS_TWEEN_YOYO';
export const SET_LAYER_TWEEN_YOYO_EASE = 'SET_LAYER_TWEEN_YOYO_EASE';
export const SET_LAYERS_TWEEN_YOYO_EASE = 'SET_LAYERS_TWEEN_YOYO_EASE';
export const SET_LAYER_TWEEN_DELAY = 'SET_LAYER_TWEEN_DELAY';
export const SET_LAYERS_TWEEN_DELAY = 'SET_LAYERS_TWEEN_DELAY';
export const SET_LAYER_TWEEN_EASE = 'SET_LAYER_TWEEN_EASE';
export const SET_LAYERS_TWEEN_EASE = 'SET_LAYERS_TWEEN_EASE';
export const SET_LAYER_TWEEN_POWER = 'SET_LAYER_TWEEN_POWER';
export const SET_LAYERS_TWEEN_POWER = 'SET_LAYERS_TWEEN_POWER';
export const SET_LAYER_TWEEN_TIMING = 'SET_LAYER_TWEEN_TIMING';
export const SET_LAYERS_TWEEN_TIMING = 'SET_LAYERS_TWEEN_TIMING';

export const SET_LAYER_STEPS_TWEEN_STEPS = 'SET_LAYER_STEPS_TWEEN_STEPS';
export const SET_LAYERS_STEPS_TWEEN_STEPS = 'SET_LAYERS_STEPS_TWEEN_STEPS';

export const SET_LAYER_ROUGH_TWEEN_CLAMP = 'SET_LAYER_ROUGH_TWEEN_CLAMP';
export const SET_LAYERS_ROUGH_TWEEN_CLAMP = 'SET_LAYERS_ROUGH_TWEEN_CLAMP';
export const SET_LAYER_ROUGH_TWEEN_POINTS = 'SET_LAYER_ROUGH_TWEEN_POINTS';
export const SET_LAYERS_ROUGH_TWEEN_POINTS = 'SET_LAYERS_ROUGH_TWEEN_POINTS';
export const SET_LAYER_ROUGH_TWEEN_RANDOMIZE = 'SET_LAYER_ROUGH_TWEEN_RANDOMIZE';
export const SET_LAYERS_ROUGH_TWEEN_RANDOMIZE = 'SET_LAYERS_ROUGH_TWEEN_RANDOMIZE';
export const SET_LAYER_ROUGH_TWEEN_STRENGTH = 'SET_LAYER_ROUGH_TWEEN_STRENGTH';
export const SET_LAYERS_ROUGH_TWEEN_STRENGTH = 'SET_LAYERS_ROUGH_TWEEN_STRENGTH';
export const SET_LAYER_ROUGH_TWEEN_TAPER = 'SET_LAYER_ROUGH_TWEEN_TAPER';
export const SET_LAYERS_ROUGH_TWEEN_TAPER = 'SET_LAYERS_ROUGH_TWEEN_TAPER';
export const SET_LAYER_ROUGH_TWEEN_TEMPLATE = 'SET_LAYER_ROUGH_TWEEN_TEMPLATE';
export const SET_LAYERS_ROUGH_TWEEN_TEMPLATE = 'SET_LAYERS_ROUGH_TWEEN_TEMPLATE';

export const SET_LAYER_SLOW_TWEEN_LINEAR_RATIO = 'SET_LAYER_SLOW_TWEEN_LINEAR_RATIO';
export const SET_LAYERS_SLOW_TWEEN_LINEAR_RATIO = 'SET_LAYERS_SLOW_TWEEN_LINEAR_RATIO';
export const SET_LAYER_SLOW_TWEEN_POWER = 'SET_LAYER_SLOW_TWEEN_POWER';
export const SET_LAYERS_SLOW_TWEEN_POWER = 'SET_LAYERS_SLOW_TWEEN_POWER';
export const SET_LAYER_SLOW_TWEEN_YOYO_MODE = 'SET_LAYER_SLOW_TWEEN_YOYO_MODE';
export const SET_LAYERS_SLOW_TWEEN_YOYO_MODE = 'SET_LAYERS_SLOW_TWEEN_YOYO_MODE';

export const SET_LAYER_TEXT_TWEEN_DELIMITER = 'SET_LAYER_TEXT_TWEEN_DELIMITER';
export const SET_LAYERS_TEXT_TWEEN_DELIMITER = 'SET_LAYERS_TEXT_TWEEN_DELIMITER';
export const SET_LAYER_TEXT_TWEEN_SPEED = 'SET_LAYER_TEXT_TWEEN_SPEED';
export const SET_LAYERS_TEXT_TWEEN_SPEED = 'SET_LAYERS_TEXT_TWEEN_SPEED';
export const SET_LAYER_TEXT_TWEEN_DIFF = 'SET_LAYER_TEXT_TWEEN_DIFF';
export const SET_LAYERS_TEXT_TWEEN_DIFF = 'SET_LAYERS_TEXT_TWEEN_DIFF';
export const SET_LAYER_TEXT_TWEEN_SCRAMBLE = 'SET_LAYER_TEXT_TWEEN_SCRAMBLE';
export const SET_LAYERS_TEXT_TWEEN_SCRAMBLE = 'SET_LAYERS_TEXT_TWEEN_SCRAMBLE';

export const SET_LAYER_SCRAMBLE_TEXT_TWEEN_CHARACTERS = 'SET_LAYER_SCRAMBLE_TEXT_TWEEN_CHARACTERS';
export const SET_LAYERS_SCRAMBLE_TEXT_TWEEN_CHARACTERS = 'SET_LAYERS_SCRAMBLE_TEXT_TWEEN_CHARACTERS';
export const SET_LAYER_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY = 'SET_LAYER_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY';
export const SET_LAYERS_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY = 'SET_LAYERS_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY';
export const SET_LAYER_SCRAMBLE_TEXT_TWEEN_SPEED = 'SET_LAYER_SCRAMBLE_TEXT_TWEEN_SPEED';
export const SET_LAYERS_SCRAMBLE_TEXT_TWEEN_SPEED = 'SET_LAYERS_SCRAMBLE_TEXT_TWEEN_SPEED';
export const SET_LAYER_SCRAMBLE_TEXT_TWEEN_DELIMITER = 'SET_LAYER_SCRAMBLE_TEXT_TWEEN_DELIMITER';
export const SET_LAYERS_SCRAMBLE_TEXT_TWEEN_DELIMITER = 'SET_LAYERS_SCRAMBLE_TEXT_TWEEN_DELIMITER';
export const SET_LAYER_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT = 'SET_LAYER_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT';
export const SET_LAYERS_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT = 'SET_LAYERS_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT';

export const SET_LAYER_CUSTOM_BOUNCE_TWEEN_STRENGTH = 'SET_LAYER_CUSTOM_BOUNCE_TWEEN_STRENGTH';
export const SET_LAYERS_CUSTOM_BOUNCE_TWEEN_STRENGTH = 'SET_LAYERS_CUSTOM_BOUNCE_TWEEN_STRENGTH';
export const SET_LAYER_CUSTOM_BOUNCE_TWEEN_END_AT_START = 'SET_LAYER_CUSTOM_BOUNCE_TWEEN_END_AT_START';
export const SET_LAYERS_CUSTOM_BOUNCE_TWEEN_END_AT_START = 'SET_LAYERS_CUSTOM_BOUNCE_TWEEN_END_AT_START';
export const SET_LAYER_CUSTOM_BOUNCE_TWEEN_SQUASH = 'SET_LAYER_CUSTOM_BOUNCE_TWEEN_SQUASH';
export const SET_LAYERS_CUSTOM_BOUNCE_TWEEN_SQUASH = 'SET_LAYERS_CUSTOM_BOUNCE_TWEEN_SQUASH';

export const SET_LAYER_CUSTOM_WIGGLE_TWEEN_STRENGTH = 'SET_LAYER_CUSTOM_WIGGLE_TWEEN_STRENGTH';
export const SET_LAYERS_CUSTOM_WIGGLE_TWEEN_STRENGTH = 'SET_LAYERS_CUSTOM_WIGGLE_TWEEN_STRENGTH';
export const SET_LAYER_CUSTOM_WIGGLE_TWEEN_WIGGLES = 'SET_LAYER_CUSTOM_BOUNCE_TWEEN_WIGGLES';
export const SET_LAYERS_CUSTOM_WIGGLE_TWEEN_WIGGLES = 'SET_LAYERS_CUSTOM_WIGGLE_TWEEN_WIGGLES';
export const SET_LAYER_CUSTOM_WIGGLE_TWEEN_TYPE = 'SET_LAYER_CUSTOM_WIGGLE_TWEEN_TYPE';
export const SET_LAYERS_CUSTOM_WIGGLE_TWEEN_TYPE = 'SET_LAYERS_CUSTOM_WIGGLE_TWEEN_TYPE';

export const FREEZE_LAYER_TWEEN = 'FREEZE_LAYER_TWEEN';
export const UNFREEZE_LAYER_TWEEN = 'UNFREEZE_LAYER_TWEEN';
export const FREEZE_LAYER_TWEENS = 'FREEZE_LAYER_TWEENS';
export const UNFREEZE_LAYER_TWEENS = 'UNFREEZE_LAYER_TWEENS';

export const SET_LAYER_X = 'SET_LAYER_X';
export const SET_LAYERS_X = 'SET_LAYERS_X';
export const SET_LAYER_Y = 'SET_LAYER_Y';
export const SET_LAYERS_Y = 'SET_LAYERS_Y';
export const SET_LAYER_LEFT = 'SET_LAYER_LEFT';
export const SET_LAYERS_LEFT = 'SET_LAYERS_LEFT';
export const SET_LAYER_CENTER = 'SET_LAYER_CENTER';
export const SET_LAYERS_CENTER = 'SET_LAYERS_CENTER';
export const SET_LAYER_RIGHT = 'SET_LAYER_RIGHT';
export const SET_LAYERS_RIGHT = 'SET_LAYERS_RIGHT';
export const SET_LAYER_TOP = 'SET_LAYER_TOP';
export const SET_LAYERS_TOP = 'SET_LAYERS_TOP';
export const SET_LAYER_MIDDLE = 'SET_LAYER_MIDDLE';
export const SET_LAYERS_MIDDLE = 'SET_LAYERS_MIDDLE';
export const SET_LAYER_BOTTOM = 'SET_LAYER_BOTTOM';
export const SET_LAYERS_BOTTOM = 'SET_LAYERS_BOTTOM';
export const SET_LAYER_WIDTH = 'SET_LAYER_WIDTH';
export const SET_LAYERS_WIDTH = 'SET_LAYERS_WIDTH';
export const SET_LAYER_HEIGHT = 'SET_LAYER_HEIGHT';
export const SET_LAYERS_HEIGHT = 'SET_LAYERS_HEIGHT';
export const SET_LAYER_ROTATION = 'SET_LAYER_ROTATION';
export const SET_LAYERS_ROTATION = 'SET_LAYERS_ROTATION';

export const ENABLE_LAYER_HORIZONTAL_FLIP = 'ENABLE_LAYER_HORIZONTAL_FLIP';
export const DISABLE_LAYER_HORIZONTAL_FLIP = 'DISABLE_LAYER_HORIZONTAL_FLIP';
export const ENABLE_LAYERS_HORIZONTAL_FLIP = 'ENABLE_LAYERS_HORIZONTAL_FLIP';
export const DISABLE_LAYERS_HORIZONTAL_FLIP = 'DISABLE_LAYERS_HORIZONTAL_FLIP';
export const ENABLE_LAYER_VERTICAL_FLIP = 'ENABLE_LAYER_VERTICAL_FLIP';
export const DISABLE_LAYER_VERTICAL_FLIP = 'DISABLE_LAYER_VERTICAL_FLIP';
export const ENABLE_LAYERS_VERTICAL_FLIP = 'ENABLE_LAYERS_VERTICAL_FLIP';
export const DISABLE_LAYERS_VERTICAL_FLIP = 'DISABLE_LAYERS_VERTICAL_FLIP';

export const SET_LAYER_OPACITY = 'SET_LAYER_OPACITY';
export const SET_LAYERS_OPACITY = 'SET_LAYERS_OPACITY';

export const SET_LAYER_FILL = 'SET_LAYER_FILL';
export const SET_LAYERS_FILL = 'SET_LAYERS_FILL';
export const ENABLE_LAYER_FILL = 'ENABLE_LAYER_FILL';
export const ENABLE_LAYERS_FILL = 'ENABLE_LAYERS_FILL';
export const DISABLE_LAYER_FILL = 'DISABLE_LAYER_FILL';
export const DISABLE_LAYERS_FILL = 'DISABLE_LAYERS_FILL';
export const SET_LAYER_FILL_COLOR = 'SET_LAYER_FILL_COLOR';
export const SET_LAYERS_FILL_COLOR = 'SET_LAYERS_FILL_COLOR';
export const SET_LAYERS_FILL_COLORS = 'SET_LAYERS_FILL_COLORS';
export const SET_LAYER_FILL_TYPE = 'SET_LAYER_FILL_TYPE';
export const SET_LAYERS_FILL_TYPE = 'SET_LAYERS_FILL_TYPE';

export const SET_LAYER_GRADIENT = 'SET_LAYER_GRADIENT';
export const SET_LAYERS_GRADIENT = 'SET_LAYERS_GRADIENT';
export const SET_LAYER_GRADIENT_TYPE = 'SET_LAYER_GRADIENT_TYPE';
export const SET_LAYERS_GRADIENT_TYPE = 'SET_LAYERS_GRADIENT_TYPE';
export const SET_LAYER_GRADIENT_ORIGIN = 'SET_LAYER_GRADIENT_ORIGIN';
export const SET_LAYERS_GRADIENT_ORIGIN = 'SET_LAYERS_GRADIENT_ORIGIN';
export const SET_LAYER_GRADIENT_DESTINATION = 'SET_LAYER_GRADIENT_DESTINATION';
export const SET_LAYERS_GRADIENT_DESTINATION = 'SET_LAYERS_GRADIENT_DESTINATION';
export const SET_LAYERS_GRADIENT_OD = 'SET_LAYERS_GRADIENT_OD';
export const SET_LAYER_GRADIENT_STOP_COLOR = 'SET_LAYER_GRADIENT_STOP_COLOR';
export const SET_LAYERS_GRADIENT_STOP_COLOR = 'SET_LAYERS_GRADIENT_STOP_COLOR';
export const SET_LAYER_GRADIENT_STOP_POSITION = 'SET_LAYER_GRADIENT_STOP_POSITION';
export const SET_LAYERS_GRADIENT_STOP_POSITION = 'SET_LAYERS_GRADIENT_STOP_POSITION';
export const ADD_LAYER_GRADIENT_STOP = 'ADD_LAYER_GRADIENT_STOP';
export const ADD_LAYERS_GRADIENT_STOP = 'ADD_LAYERS_GRADIENT_STOP';
export const REMOVE_LAYER_GRADIENT_STOP = 'REMOVE_LAYER_GRADIENT_STOP';
export const REMOVE_LAYERS_GRADIENT_STOP = 'REMOVE_LAYERS_GRADIENT_STOP';
export const SET_LAYER_ACTIVE_GRADIENT_STOP = 'SET_LAYER_ACTIVE_GRADIENT_STOP';
export const FLIP_LAYER_GRADIENT = 'FLIP_LAYER_GRADIENT';
export const FLIP_LAYERS_GRADIENT = 'FLIP_LAYERS_GRADIENT';

export const SET_LAYER_STROKE = 'SET_LAYER_STROKE';
export const SET_LAYERS_STROKE = 'SET_LAYERS_STROKE';
export const ENABLE_LAYER_STROKE = 'ENABLE_LAYER_STROKE';
export const ENABLE_LAYERS_STROKE = 'ENABLE_LAYERS_STROKE';
export const DISABLE_LAYER_STROKE = 'DISABLE_LAYER_STROKE';
export const DISABLE_LAYERS_STROKE = 'DISABLE_LAYERS_STROKE';
export const SET_LAYER_STROKE_COLOR = 'SET_LAYER_STROKE_COLOR';
export const SET_LAYERS_STROKE_COLOR = 'SET_LAYERS_STROKE_COLOR';
export const SET_LAYERS_STROKE_COLORS = 'SET_LAYERS_STROKE_COLORS';
export const SET_LAYER_STROKE_FILL_TYPE = 'SET_LAYER_STROKE_FILL_TYPE';
export const SET_LAYERS_STROKE_FILL_TYPE = 'SET_LAYERS_STROKE_FILL_TYPE';
export const SET_LAYER_STROKE_WIDTH = 'SET_LAYER_STROKE_WIDTH';
export const SET_LAYERS_STROKE_WIDTH = 'SET_LAYERS_STROKE_WIDTH';
export const SET_LAYER_STROKE_CAP = 'SET_LAYER_STROKE_CAP';
export const SET_LAYERS_STROKE_CAP = 'SET_LAYERS_STROKE_CAP';
export const SET_LAYER_STROKE_JOIN = 'SET_LAYER_STROKE_JOIN';
export const SET_LAYERS_STROKE_JOIN = 'SET_LAYERS_STROKE_JOIN';
export const SET_LAYER_STROKE_DASH_OFFSET = 'SET_LAYER_STROKE_DASH_OFFSET';
export const SET_LAYERS_STROKE_DASH_OFFSET = 'SET_LAYERS_STROKE_DASH_OFFSET';
export const SET_LAYER_STROKE_DASH_ARRAY = 'SET_LAYER_STROKE_DASH_ARRAY';
export const SET_LAYERS_STROKE_DASH_ARRAY = 'SET_LAYERS_STROKE_DASH_ARRAY';
export const SET_LAYER_STROKE_DASH_ARRAY_WIDTH = 'SET_LAYER_STROKE_DASH_ARRAY_WIDTH';
export const SET_LAYERS_STROKE_DASH_ARRAY_WIDTH = 'SET_LAYERS_STROKE_DASH_ARRAY_WIDTH';
export const SET_LAYER_STROKE_DASH_ARRAY_GAP = 'SET_LAYER_STROKE_DASH_ARRAY_GAP';
export const SET_LAYERS_STROKE_DASH_ARRAY_GAP = 'SET_LAYERS_STROKE_DASH_ARRAY_GAP';
export const SET_LAYER_STROKE_MITER_LIMIT = 'SET_LAYER_STROKE_MITER_LIMIT';
export const SET_LAYERS_STROKE_MITER_LIMIT = 'SET_LAYERS_STROKE_MITER_LIMIT';

export const SET_LAYER_SHADOW = 'SET_LAYER_SHADOW';
export const SET_LAYERS_SHADOW = 'SET_LAYERS_SHADOW';
export const ENABLE_LAYER_SHADOW = 'ENABLE_LAYER_SHADOW';
export const ENABLE_LAYERS_SHADOW = 'ENABLE_LAYERS_SHADOW';
export const DISABLE_LAYER_SHADOW = 'DISABLE_LAYER_SHADOW';
export const DISABLE_LAYERS_SHADOW = 'DISABLE_LAYERS_SHADOW';
export const SET_LAYER_SHADOW_COLOR = 'SET_LAYER_SHADOW_COLOR';
export const SET_LAYERS_SHADOW_COLOR = 'SET_LAYERS_SHADOW_COLOR';
export const SET_LAYERS_SHADOW_COLORS = 'SET_LAYERS_SHADOW_COLORS';
export const SET_LAYER_SHADOW_BLUR = 'SET_LAYER_SHADOW_BLUR';
export const SET_LAYERS_SHADOW_BLUR = 'SET_LAYERS_SHADOW_BLUR';
export const SET_LAYER_SHADOW_X_OFFSET = 'SET_LAYER_SHADOW_X_OFFSET';
export const SET_LAYERS_SHADOW_X_OFFSET = 'SET_LAYERS_SHADOW_X_OFFSET';
export const SET_LAYER_SHADOW_Y_OFFSET = 'SET_LAYER_SHADOW_Y_OFFSET';
export const SET_LAYERS_SHADOW_Y_OFFSET = 'SET_LAYERS_SHADOW_Y_OFFSET';

export const SCALE_LAYER = 'SCALE_LAYER';
export const SCALE_LAYERS = 'SCALE_LAYERS';

export const SET_LAYER_TEXT = 'SET_LAYER_TEXT';
export const SET_LAYER_TEXT_RESIZE = 'SET_LAYER_TEXT_RESIZE';
export const SET_LAYERS_TEXT_RESIZE = 'SET_LAYERS_TEXT_RESIZE';
export const SET_LAYER_FONT_SIZE = 'SET_LAYER_FONT_SIZE';
export const SET_LAYERS_FONT_SIZE = 'SET_LAYERS_FONT_SIZE';
export const SET_LAYER_LEADING = 'SET_LAYER_LEADING';
export const SET_LAYERS_LEADING = 'SET_LAYERS_LEADING';
export const SET_LAYER_FONT_WEIGHT = 'SET_LAYER_FONT_WEIGHT';
export const SET_LAYERS_FONT_WEIGHT = 'SET_LAYERS_FONT_WEIGHT';
export const SET_LAYER_FONT_FAMILY = 'SET_LAYER_FONT_FAMILY';
export const SET_LAYERS_FONT_FAMILY = 'SET_LAYERS_FONT_FAMILY';
export const SET_LAYER_JUSTIFICATION = 'SET_LAYER_JUSTIFICATION';
export const SET_LAYERS_JUSTIFICATION = 'SET_LAYERS_JUSTIFICATION';
export const SET_LAYER_VERTICAL_ALIGNMENT = 'SET_LAYER_VERTICAL_ALIGNMENT';
export const SET_LAYERS_VERTICAL_ALIGNMENT = 'SET_LAYERS_VERTICAL_ALIGNMENT';
export const SET_LAYER_FONT_STYLE = 'SET_LAYER_FONT_STYLE';
export const SET_LAYERS_FONT_STYLE = 'SET_LAYERS_FONT_STYLE';
export const SET_LAYER_POINT_X = 'SET_LAYER_POINT_X';
export const SET_LAYERS_POINT_X = 'SET_LAYERS_POINT_X';
export const SET_LAYER_POINT_Y = 'SET_LAYER_POINT_Y';
export const SET_LAYERS_POINT_Y = 'SET_LAYERS_POINT_Y';
export const SET_LAYER_LETTER_SPACING = 'SET_LAYER_LETTER_SPACING';
export const SET_LAYERS_LETTER_SPACING = 'SET_LAYERSS_LETTER_SPACING';
export const SET_LAYER_TEXT_TRANSFORM = 'SET_LAYER_TEXT_TRANSFORM';
export const SET_LAYERS_TEXT_TRANSFORM = 'SET_LAYERS_TEXT_TRANSFORM';

export const SET_LAYER_UNDERLYING_MASK = 'SET_LAYER_UNDERLYING_MASK';
export const SET_LAYERS_UNDERLYING_MASK = 'SET_LAYERS_UNDERLYING_MASK';
export const TOGGLE_LAYER_IGNORE_UNDERLYING_MASK = 'TOGGLE_LAYER_IGNORE_UNDERLYING_MASK';
export const TOGGLE_LAYERS_IGNORE_UNDERLYING_MASK = 'TOGGLE_LAYERS_IGNORE_UNDERLYING_MASK';
export const SET_LAYER_MASKED = 'SET_LAYER_MASKED';
export const SET_LAYERS_MASKED = 'SET_LAYERS_MASKED';
export const TOGGLE_LAYER_MASK = 'TOGGLE_LAYER_MASK';
export const TOGGLE_LAYERS_MASK = 'TOGGLE_LAYERS_MASK';
export const ADD_LAYERS_MASK = 'ADD_LAYERS_MASK';
export const REMOVE_LAYERS_MASK = 'REMOVE_LAYERS_MASK';

export const ALIGN_LAYERS_TO_LEFT = 'ALIGN_LAYERS_TO_LEFT';
export const ALIGN_LAYERS_TO_RIGHT = 'ALIGN_LAYERS_TO_RIGHT';
export const ALIGN_LAYERS_TO_TOP = 'ALIGN_LAYERS_TO_TOP';
export const ALIGN_LAYERS_TO_BOTTOM = 'ALIGN_LAYERS_TO_BOTTOM';
export const ALIGN_LAYERS_TO_CENTER = 'ALIGN_LAYERS_TO_CENTER';
export const ALIGN_LAYERS_TO_MIDDLE = 'ALIGN_LAYERS_TO_MIDDLE';

export const DISTRIBUTE_LAYERS_HORIZONTALLY = 'DISTRIBUTE_LAYERS_HORIZONTALLY';
export const DISTRIBUTE_LAYERS_VERTICALLY = 'DISTRIBUTE_LAYERS_VERTICALLY';

export const DUPLICATE_LAYER = 'DUPLICATE_LAYER';
export const DUPLICATE_LAYERS = 'DUPLICATE_LAYERS';
export const REMOVE_DUPLICATED_LAYERS = 'REMOVE_DUPLICATED_LAYERS';

export const SEND_LAYER_BACKWARD = 'SEND_LAYER_BACKWARD';
export const SEND_LAYERS_BACKWARD = 'SEND_LAYERS_BACKWARD';
export const SEND_LAYER_TO_BACK = 'SEND_LAYER_TO_BACK';
export const SEND_LAYERS_TO_BACK = 'SEND_LAYERS_TO_BACK';
export const BRING_LAYER_FORWARD = 'BRING_LAYER_FORWARD';
export const BRING_LAYERS_FORWARD = 'BRING_LAYERS_FORWARD';
export const BRING_LAYER_TO_FRONT = 'BRING_LAYER_TO_FRONT';
export const BRING_LAYERS_TO_FRONT = 'BRING_LAYERS_TO_FRONT';

export const SET_LAYER_BLEND_MODE = 'SET_LAYER_BLEND_MODE';
export const SET_LAYERS_BLEND_MODE = 'SET_LAYERS_BLEND_MODE';

export const UNITE_LAYERS = 'UNITE_LAYERS';
export const INTERSECT_LAYERS = 'INTERSECT_LAYERS';
export const SUBTRACT_LAYERS = 'SUBTRACT_LAYERS';
export const EXCLUDE_LAYERS = 'EXCLUDE_LAYERS';
export const DIVIDE_LAYERS = 'DIVIDE_LAYERS';

export const SET_ROUNDED_RADIUS = 'SET_ROUNDED_RADIUS';
export const SET_ROUNDED_RADII = 'SET_ROUNDED_RADII';
export const SET_POLYGON_SIDES = 'SET_POLYGON_SIDES';
export const SET_POLYGONS_SIDES = 'SET_POLYGONS_SIDES';
export const SET_STAR_POINTS = 'SET_STAR_POINTS';
export const SET_STARS_POINTS = 'SET_STARS_POINTS';
export const SET_STAR_RADIUS = 'SET_STAR_RADIUS';
export const SET_STARS_RADIUS = 'SET_STARS_RADIUS';
export const SET_LINE_FROM_X = 'SET_LINE_FROM_X';
export const SET_LINES_FROM_X = 'SET_LINES_FROM_X';
export const SET_LINE_FROM_Y = 'SET_LINE_FROM_Y';
export const SET_LINES_FROM_Y = 'SET_LINES_FROM_Y';
export const SET_LINE_FROM = 'SET_LINE_FROM';
export const SET_LINE_TO_X = 'SET_LINE_TO_X';
export const SET_LINES_TO_X = 'SET_LINES_TO_X';
export const SET_LINE_TO_Y = 'SET_LINE_TO_Y';
export const SET_LINES_TO_Y = 'SET_LINES_TO_Y';
export const SET_LINE_TO = 'SET_LINE_TO';

export const RESET_IMAGE_DIMENSIONS = 'RESET_IMAGE_DIMENSIONS';
export const RESET_IMAGES_DIMENSIONS = 'RESET_IMAGES_DIMENSIONS';
export const REPLACE_IMAGE = 'REPLACE_IMAGE';
export const REPLACE_IMAGES = 'REPLACE_IMAGES';

export const SET_LAYER_EDIT = 'SET_LAYER_EDIT';

export const SET_LAYER_STYLE = 'SET_LAYER_STYLE';
export const SET_LAYERS_STYLE = 'SET_LAYERS_STYLE';

export const PASTE_LAYERS_FROM_CLIPBOARD = 'PASTE_LAYERS_FROM_CLIPBOARD';

export const SET_LAYER_TREE = 'SET_LAYER_TREE';
export const SET_LAYER_TREE_SCROLL = 'SET_LAYER_TREE_SCROLL';
export const SET_LAYER_TREE_STICKY_ARTBOARD = 'SET_LAYER_TREE_STICKY_ARTBOARD';

export const HYDRATE_LAYERS = 'HYDRATE_LAYERS';

export const ENABLE_LAYER_BLUR = 'ENABLE_LAYER_BLUR';
export const ENABLE_LAYERS_BLUR = 'ENABLE_LAYERS_BLUR';
export const DISABLE_LAYER_BLUR = 'DISABLE_LAYER_BLUR';
export const DISABLE_LAYERS_BLUR = 'DISABLE_LAYERS_BLUR';
export const SET_LAYER_BLUR_RADIUS = 'SET_LAYER_BLUR_RADIUS';
export const SET_LAYERS_BLUR_RADIUS = 'SET_LAYERS_BLUR_RADIUS';

export const ENABLE_GROUP_SCROLL = 'ENABLE_GROUP_SCROLL';
export const ENABLE_GROUPS_SCROLL = 'ENABLE_GROUPS_SCROLL';
export const DISABLE_GROUP_SCROLL = 'DISABLE_GROUP_SCROLL';
export const DISABLE_GROUPS_SCROLL = 'DISABLE_GROUPS_SCROLL';
export const ENABLE_GROUP_HORIZONTAL_SCROLL = 'ENABLE_GROUP_HORIZONTAL_SCROLL';
export const ENABLE_GROUPS_HORIZONTAL_SCROLL = 'ENABLE_GROUPS_HORIZONTAL_SCROLL';
export const DISABLE_GROUP_HORIZONTAL_SCROLL = 'DISABLE_GROUP_HORIZONTAL_SCROLL';
export const DISABLE_GROUPS_HORIZONTAL_SCROLL = 'DISABLE_GROUPS_HORIZONTAL_SCROLL';
export const ENABLE_GROUP_VERTICAL_SCROLL = 'ENABLE_GROUP_VERTICAL_SCROLL';
export const ENABLE_GROUPS_VERTICAL_SCROLL = 'ENABLE_GROUPS_VERTICAL_SCROLL';
export const DISABLE_GROUP_VERTICAL_SCROLL = 'DISABLE_GROUP_VERTICAL_SCROLL';
export const DISABLE_GROUPS_VERTICAL_SCROLL = 'DISABLE_GROUPS_VERTICAL_SCROLL';
export const SET_GROUP_SCROLL_OVERFLOW = 'SET_GROUP_SCROLL_OVERFLOW';
export const SET_GROUPS_SCROLL_OVERFLOW = 'SET_GROUPS_SCROLL_OVERFLOW';
export const SET_GROUP_SCROLL_FRAME = 'SET_GROUP_SCROLL_FRAME';

export const ENABLE_GROUP_GROUP_EVENT_TWEENS = 'ENABLE_GROUP_GROUP_EVENT_TWEENS';
export const ENABLE_GROUPS_GROUP_EVENT_TWEENS = 'ENABLE_GROUPS_GROUP_EVENT_TWEENS';
export const DISABLE_GROUP_GROUP_EVENT_TWEENS = 'DISABLE_GROUP_GROUP_EVENT_TWEENS';
export const DISABLE_GROUPS_GROUP_EVENT_TWEENS = 'DISABLE_GROUPS_GROUP_EVENT_TWEENS';

export const ADD_GROUP_WIGGLES = 'ADD_GROUP_WIGGLES';

// Artboard

export type AddArtboardPayload = {
  layer: {
    [P in keyof Btwx.Artboard]?: Btwx.Artboard[P];
  };
  batch?: boolean;
}

export interface AddArtboard {
  type: typeof ADD_ARTBOARD;
  payload: AddArtboardPayload;
}

// Group

export type AddGroupPayload = {
  layer: {
    [P in keyof Btwx.Group]?: Btwx.Group[P];
  };
  batch?: boolean;
}

export interface AddGroup {
  type: typeof ADD_GROUP;
  payload: AddGroupPayload;
}

// Shape

export type AddShapePayload = {
  layer: {
    [P in keyof Btwx.Shape]?: Btwx.Shape[P];
  };
  shapeIcon?: string;
  batch?: boolean;
}

export interface AddShape {
  type: typeof ADD_SHAPE;
  payload: AddShapePayload;
}

// Text

export type AddTextPayload = {
  layer: {
    [P in keyof Btwx.Text]?: Btwx.Text[P];
  };
  batch?: boolean;
}

export interface AddText {
  type: typeof ADD_TEXT;
  payload: AddTextPayload;
}

// Image

export type AddImagePayload = {
  layer: {
    [P in keyof Btwx.Image]?: Btwx.Image[P];
  };
  batch?: boolean;
  base64?: string;
  ext?: string;
}

export interface AddImage {
  type: typeof ADD_IMAGE;
  payload: AddImagePayload;
}

// layers

export interface AddLayersPayload {
  layers: Btwx.Layer[];
  buffers?: {
    [id: string]: Btwx.DocumentImage;
  };
}

export interface AddLayers {
  type: typeof ADD_LAYERS;
  payload: AddLayersPayload;
}

// Remove

export interface RemoveLayerPayload {
  id: string;
}

export interface RemoveLayer {
  type: typeof REMOVE_LAYER;
  payload: RemoveLayerPayload;
}

export interface RemoveLayersPayload {
  layers: string[];
  batch?: boolean;
}

export interface RemoveLayers {
  type: typeof REMOVE_LAYERS;
  payload: RemoveLayersPayload;
}

// Select

export interface SelectLayerPayload {
  id: string;
  selectedEdit?: string;
  newSelection?: boolean;
}

export interface SelectLayer {
  type: typeof SELECT_LAYER;
  payload: SelectLayerPayload;
}

export interface DeepSelectLayerPayload {
  id: string;
}

export interface DeepSelectLayer {
  type: typeof DEEP_SELECT_LAYER;
  payload: DeepSelectLayerPayload;
}

export interface SelectLayersPayload {
  layers: string[];
  newSelection?: boolean;
}

export interface SelectLayers {
  type: typeof SELECT_LAYERS;
  payload: SelectLayersPayload;
}

export interface DeselectLayerPayload {
  id: string;
  selectedEdit?: string;
}

export interface DeselectLayer {
  type: typeof DESELECT_LAYER;
  payload: DeselectLayerPayload;
}

export interface DeselectLayersPayload {
  layers: string[];
}

export interface DeselectLayers {
  type: typeof DESELECT_LAYERS;
  payload: DeselectLayersPayload;
}

export interface SelectAllLayers {
  type: typeof SELECT_ALL_LAYERS;
}

export interface DeselectAllLayers {
  type: typeof DESELECT_ALL_LAYERS;
}

export interface AreaSelectLayersPayload {
  layers: string[];
  events: string[];
  shiftModifier: boolean;
}

export interface AreaSelectLayers {
  type: typeof AREA_SELECT_LAYERS;
  payload: AreaSelectLayersPayload;
}

// Hover

export interface SetLayerHoverPayload {
  id: string;
}

export interface SetLayerHover {
  type: typeof SET_LAYER_HOVER;
  payload: SetLayerHoverPayload;
}

export interface EnableLayerHoverPayload {
  id: string;
}

export interface EnableLayerHover {
  type: typeof ENABLE_LAYER_HOVER;
  payload: EnableLayerHoverPayload;
}

export interface DisableLayerHoverPayload {
  id: string;
}

export interface DisableLayerHover {
  type: typeof DISABLE_LAYER_HOVER;
  payload: DisableLayerHoverPayload;
}

// Children

export interface AddLayerChildPayload {
  id: string;
  child: string;
}

export interface AddLayerChild {
  type: typeof ADD_LAYER_CHILD;
  payload: AddLayerChildPayload;
}

export interface AddLayerChildrenPayload {
  id: string;
  children: string[];
}

export interface AddLayerChildren {
  type: typeof ADD_LAYER_CHILDREN;
  payload: AddLayerChildrenPayload;
}

export interface InsertLayerChildPayload {
  id: string;
  child: string;
  index: number;
}

export interface InsertLayerChild {
  type: typeof INSERT_LAYER_CHILD;
  payload: InsertLayerChildPayload;
}

export interface ShowLayerChildrenPayload {
  id: string;
}

export interface ShowLayerChildren {
  type: typeof SHOW_LAYER_CHILDREN;
  payload: ShowLayerChildrenPayload;
}

export interface ShowLayersChildrenPayload {
  layers: string[];
}

export interface ShowLayersChildren {
  type: typeof SHOW_LAYERS_CHILDREN;
  payload: ShowLayersChildrenPayload;
}

export interface HideLayerChildrenPayload {
  id: string;
}

export interface HideLayerChildren {
  type: typeof HIDE_LAYER_CHILDREN;
  payload: HideLayerChildrenPayload;
}

export interface HideLayersChildrenPayload {
  layers: string[];
}

export interface HideLayersChildren {
  type: typeof HIDE_LAYERS_CHILDREN;
  payload: HideLayersChildrenPayload;
}

// Insert

export interface InsertLayerAbovePayload {
  id: string;
  above: string;
}

export interface InsertLayerAbove {
  type: typeof INSERT_LAYER_ABOVE;
  payload: InsertLayerAbovePayload;
}

export interface InsertLayersAbovePayload {
  layers: string[];
  above: string;
}

export interface InsertLayersAbove {
  type: typeof INSERT_LAYERS_ABOVE;
  payload: InsertLayersAbovePayload;
}

export interface InsertLayerBelowPayload {
  id: string;
  below: string;
}

export interface InsertLayerBelow {
  type: typeof INSERT_LAYER_BELOW;
  payload: InsertLayerBelowPayload;
}

export interface InsertLayersBelowPayload {
  layers: string[];
  below: string;
}

export interface InsertLayersBelow {
  type: typeof INSERT_LAYERS_BELOW;
  payload: InsertLayersBelowPayload;
}

// Scope

export interface IncreaseLayerScopePayload {
  id: string;
}

export interface IncreaseLayerScope {
  type: typeof INCREASE_LAYER_SCOPE;
  payload: IncreaseLayerScopePayload;
}

export interface DecreaseLayerScope {
  type: typeof DECREASE_LAYER_SCOPE;
}

export interface ClearLayerScope {
  type: typeof CLEAR_LAYER_SCOPE;
}

export interface NewLayerScopePayload {
  id: string;
}

export interface NewLayerScope {
  type: typeof NEW_LAYER_SCOPE;
  payload: NewLayerScopePayload;
}

export interface EscapeLayerScope {
  type: typeof ESCAPE_LAYER_SCOPE;
}

export interface SetGlobalScopePayload {
  scope: string[];
}

export interface SetGlobalScope {
  type: typeof SET_GLOBAL_SCOPE;
  payload: SetGlobalScopePayload;
}

export interface SetLayerScopePayload {
  id: string;
  scope: string[];
}

export interface SetLayerScope {
  type: typeof SET_LAYER_SCOPE;
  payload: SetLayerScopePayload;
}

export interface SetLayersScopePayload {
  layers: string[];
  scope: string[];
}

export interface SetLayersScope {
  type: typeof SET_LAYERS_SCOPE;
  payload: SetLayersScopePayload;
}

// Group

export interface GroupLayersPayload {
  layers: string[];
  group?: Btwx.Group;
}

export interface GroupLayers {
  type: typeof GROUP_LAYERS;
  payload: GroupLayersPayload;
}

export interface UngroupLayerPayload {
  id: string;
}

export interface UngroupLayer {
  type: typeof UNGROUP_LAYER;
  payload: UngroupLayerPayload;
}

export interface UngroupLayersPayload {
  layers: string[];
}

export interface UngroupLayers {
  type: typeof UNGROUP_LAYERS;
  payload: UngroupLayersPayload;
}

export interface SetGroupScopePayload {
  id: string;
}

export interface SetGroupScope {
  type: typeof SET_GROUP_SCOPE;
  payload: SetGroupScopePayload;
}

// Move

export interface MoveLayerPayload {
  id: string;
}

export interface MoveLayer {
  type: typeof MOVE_LAYER;
  payload: MoveLayerPayload;
}

export interface MoveLayersPayload {
  layers: string[];
}

export interface MoveLayers {
  type: typeof MOVE_LAYERS;
  payload: MoveLayersPayload;
}

export interface MoveLayerToPayload {
  id: string;
  x: number;
  y: number;
}

export interface MoveLayerTo {
  type: typeof MOVE_LAYER_TO;
  payload: MoveLayerToPayload;
}

export interface MoveLayerByPayload {
  id: string;
  x: number;
  y: number;
}

export interface MoveLayerBy {
  type: typeof MOVE_LAYER_BY;
  payload: MoveLayerByPayload;
}

export interface MoveLayersToPayload {
  layers: string[];
  x: number;
  y: number;
}

export interface MoveLayersTo {
  type: typeof MOVE_LAYERS_TO;
  payload: MoveLayersToPayload;
}

export interface MoveLayersByPayload {
  layers: string[];
  x: number;
  y: number;
}

export interface MoveLayersBy {
  type: typeof MOVE_LAYERS_BY;
  payload: MoveLayersByPayload;
}

// Drag

export interface EnableLayerDrag {
  type: typeof ENABLE_LAYER_DRAG;
}

export interface DisableLayerDrag {
  type: typeof DISABLE_LAYER_DRAG;
}

// Set layer name

export interface SetLayerNamePayload {
  id: string;
  name: string;
}

export interface SetLayerName {
  type: typeof SET_LAYER_NAME;
  payload: SetLayerNamePayload;
}

// Artboard

export interface SetActiveArtboardPayload {
  id: string;
}

export interface SetActiveArtboard {
  type: typeof SET_ACTIVE_ARTBOARD;
  payload: SetActiveArtboardPayload;
}

// Tween Event

export type AddLayerEventPayload = {
  [P in keyof Btwx.Event]?: Btwx.Event[P];
}

export interface AddLayerEvent {
  type: typeof ADD_LAYER_EVENT;
  payload: AddLayerEventPayload;
}

export type AddLayersEventPayload = {
  events: {
    [P in keyof Btwx.Event]?: Btwx.Event[P];
  }[];
}

export interface AddLayersEvent {
  type: typeof ADD_LAYERS_EVENT;
  payload: AddLayersEventPayload;
}

export interface RemoveLayerEventPayload {
  id: string;
}

export interface RemoveLayerEvent {
  type: typeof REMOVE_LAYER_EVENT;
  payload: RemoveLayerEventPayload;
}

export interface RemoveLayersEventPayload {
  events: string[];
}

export interface RemoveLayersEvent {
  type: typeof REMOVE_LAYERS_EVENT;
  payload: RemoveLayersEventPayload;
}

export interface SetLayerEventEventListenerPayload {
  id: string;
  eventListener: Btwx.EventType;
}

export interface SetLayerEventEventListener {
  type: typeof SET_LAYER_EVENT_EVENT_LISTENER;
  payload: SetLayerEventEventListenerPayload;
}

export interface SetLayersEventEventListenerPayload {
  events: string[];
  eventListener: Btwx.EventType;
}

export interface SetLayersEventEventListener {
  type: typeof SET_LAYERS_EVENT_EVENT_LISTENER;
  payload: SetLayersEventEventListenerPayload;
}

export interface SelectLayerEventPayload {
  id: string;
  newSelection?: boolean;
}

export interface SelectLayerEvent {
  type: typeof SELECT_LAYER_EVENT;
  payload: SelectLayerEventPayload;
}

export interface DeselectLayerEventPayload {
  id: string;
}

export interface DeselectLayerEvent {
  type: typeof DESELECT_LAYER_EVENT;
  payload: DeselectLayerEventPayload;
}

export interface SelectLayerEventsPayload {
  events: string[];
  newSelection?: boolean;
}

export interface SelectLayerEvents {
  type: typeof SELECT_LAYER_EVENTS;
  payload: SelectLayerEventsPayload;
}

export interface DeselectLayerEventsPayload {
  events: string[];
}

export interface DeselectLayerEvents {
  type: typeof DESELECT_LAYER_EVENTS;
  payload: DeselectLayerEventsPayload;
}

export interface DeselectAllLayerEvents {
  type: typeof DESELECT_ALL_LAYER_EVENTS;
}

// Tween

export type AddLayerTweenPayload = {
  [P in keyof Btwx.Tween]?: Btwx.Tween[P];
}

export interface AddLayerTween {
  type: typeof ADD_LAYER_TWEEN;
  payload: AddLayerTweenPayload;
}

export interface RemoveLayerTweenPayload {
  id: string;
}

export interface RemoveLayerTween {
  type: typeof REMOVE_LAYER_TWEEN;
  payload: RemoveLayerTweenPayload;
}

export interface RemoveLayerTweensPayload {
  tweens: string[];
}

export interface RemoveLayerTweens {
  type: typeof REMOVE_LAYER_TWEENS;
  payload: RemoveLayerTweensPayload;
}

export interface SelectLayerEventTweenPayload {
  id: string;
  handle: Btwx.EventTweenHandle;
  newSelection?: boolean;
}

export interface SelectLayerEventTween {
  type: typeof SELECT_LAYER_EVENT_TWEEN;
  payload: SelectLayerEventTweenPayload;
}

export interface DeselectLayerEventTweenPayload {
  id: string;
}

export interface DeselectLayerEventTween {
  type: typeof DESELECT_LAYER_EVENT_TWEEN;
  payload: DeselectLayerEventTweenPayload;
}

export interface SelectLayerEventTweensPayload {
  tweens: string[];
  handle: {
    [id: string]: Btwx.EventTweenHandle;
  };
  newSelection?: boolean;
}

export interface SelectLayerEventTweens {
  type: typeof SELECT_LAYER_EVENT_TWEENS;
  payload: SelectLayerEventTweensPayload;
}

export interface DeselectLayerEventTweensPayload {
  tweens: string[];
}

export interface DeselectLayerEventTweens {
  type: typeof DESELECT_LAYER_EVENT_TWEENS;
  payload: DeselectLayerEventTweensPayload;
}

export interface DeselectAllLayerEventTweens {
  type: typeof DESELECT_ALL_LAYER_EVENT_TWEENS;
}

export interface SetLayerTweenDurationPayload {
  id: string;
  duration: number;
}

export interface SetLayerTweenDuration {
  type: typeof SET_LAYER_TWEEN_DURATION;
  payload: SetLayerTweenDurationPayload;
}

export interface SetLayersTweenDurationPayload {
  tweens: string[];
  duration: number;
}

export interface SetLayersTweenDuration {
  type: typeof SET_LAYERS_TWEEN_DURATION;
  payload: SetLayersTweenDurationPayload;
}

export interface SetLayerTweenRepeatPayload {
  id: string;
  repeat: number;
}

export interface SetLayerTweenRepeat {
  type: typeof SET_LAYER_TWEEN_REPEAT;
  payload: SetLayerTweenRepeatPayload;
}

export interface SetLayersTweenRepeatPayload {
  tweens: string[];
  repeat: number;
}

export interface SetLayersTweenRepeat {
  type: typeof SET_LAYERS_TWEEN_REPEAT;
  payload: SetLayersTweenRepeatPayload;
}

//

export interface SetLayerTweenRepeatDelayPayload {
  id: string;
  repeatDelay: number;
}

export interface SetLayerTweenRepeatDelay {
  type: typeof SET_LAYER_TWEEN_REPEAT_DELAY;
  payload: SetLayerTweenRepeatDelayPayload;
}

export interface SetLayersTweenRepeatDelayPayload {
  tweens: string[];
  repeatDelay: number;
}

export interface SetLayersTweenRepeatDelay {
  type: typeof SET_LAYERS_TWEEN_REPEAT_DELAY;
  payload: SetLayersTweenRepeatDelayPayload;
}

export interface SetLayerTweenYoyoPayload {
  id: string;
  yoyo: boolean;
}

export interface SetLayerTweenYoyo {
  type: typeof SET_LAYER_TWEEN_YOYO;
  payload: SetLayerTweenYoyoPayload;
}

export interface SetLayersTweenYoyoPayload {
  tweens: string[];
  yoyo: boolean;
}

export interface SetLayersTweenYoyo {
  type: typeof SET_LAYERS_TWEEN_YOYO;
  payload: SetLayersTweenYoyoPayload;
}

export interface SetLayerTweenYoyoEasePayload {
  id: string;
  yoyoEase: boolean | string;
}

export interface SetLayerTweenYoyoEase {
  type: typeof SET_LAYER_TWEEN_YOYO_EASE;
  payload: SetLayerTweenYoyoEasePayload;
}

export interface SetLayersTweenYoyoEasePayload {
  tweens: string[];
  yoyoEase: boolean | string;
}

export interface SetLayersTweenYoyoEase {
  type: typeof SET_LAYERS_TWEEN_YOYO_EASE;
  payload: SetLayersTweenYoyoEasePayload;
}

export interface SetLayerTweenTimingPayload {
  id: string;
  duration: number;
  delay: number;
}

export interface SetLayerTweenTiming {
  type: typeof SET_LAYER_TWEEN_TIMING;
  payload: SetLayerTweenTimingPayload;
}

export interface SetLayersTweenTimingPayload {
  tweens: string[];
  duration: {
    [id: string]: number;
  };
  delay: {
    [id: string]: number;
  };
}

export interface SetLayersTweenTiming {
  type: typeof SET_LAYERS_TWEEN_TIMING;
  payload: SetLayersTweenTimingPayload;
}

export interface SetLayerTweenDelayPayload {
  id: string;
  delay: number;
}

export interface SetLayerTweenDelay {
  type: typeof SET_LAYER_TWEEN_DELAY;
  payload: SetLayerTweenDelayPayload;
}

export interface SetLayersTweenDelayPayload {
  tweens: string[];
  delay: number;
}

export interface SetLayersTweenDelay {
  type: typeof SET_LAYERS_TWEEN_DELAY;
  payload: SetLayersTweenDelayPayload;
}

export interface SetLayerTweenEasePayload {
  id: string;
  ease: Btwx.CubicBezier;
}

export interface SetLayerTweenEase {
  type: typeof SET_LAYER_TWEEN_EASE;
  payload: SetLayerTweenEasePayload;
}

export interface SetLayersTweenEasePayload {
  tweens: string[];
  ease: Btwx.CubicBezier;
}

export interface SetLayersTweenEase {
  type: typeof SET_LAYERS_TWEEN_EASE;
  payload: SetLayersTweenEasePayload;
}

export interface SetLayerTweenPowerPayload {
  id: string;
  power: Btwx.CubicBezierType;
}

export interface SetLayerTweenPower {
  type: typeof SET_LAYER_TWEEN_POWER;
  payload: SetLayerTweenPowerPayload;
}

export interface SetLayersTweenPowerPayload {
  tweens: string[];
  power: Btwx.CubicBezierType;
}

export interface SetLayersTweenPower {
  type: typeof SET_LAYERS_TWEEN_POWER;
  payload: SetLayersTweenPowerPayload;
}

export interface FreezeLayerTweenPayload {
  id: string;
}

export interface FreezeLayerTween {
  type: typeof FREEZE_LAYER_TWEEN;
  payload: FreezeLayerTweenPayload;
}

export interface UnFreezeLayerTweenPayload {
  id: string;
}

export interface UnFreezeLayerTween {
  type: typeof UNFREEZE_LAYER_TWEEN;
  payload: UnFreezeLayerTweenPayload;
}

export interface SetLayerStepsTweenStepsPayload {
  id: string;
  steps: number;
}

export interface SetLayerStepsTweenSteps {
  type: typeof SET_LAYER_STEPS_TWEEN_STEPS;
  payload: SetLayerStepsTweenStepsPayload;
}

export interface SetLayersStepsTweenStepsPayload {
  tweens: string[];
  steps: number;
}

export interface SetLayersStepsTweenSteps {
  type: typeof SET_LAYERS_STEPS_TWEEN_STEPS;
  payload: SetLayersStepsTweenStepsPayload;
}

export interface SetLayerRoughTweenClampPayload {
  id: string;
  clamp: boolean;
  ref: string;
}

export interface SetLayerRoughTweenClamp {
  type: typeof SET_LAYER_ROUGH_TWEEN_CLAMP;
  payload: SetLayerRoughTweenClampPayload;
}

export interface SetLayersRoughTweenClampPayload {
  tweens: string[];
  clamp: boolean;
  ref: {
    [id: string]: string;
  };
}

export interface SetLayersRoughTweenClamp {
  type: typeof SET_LAYERS_ROUGH_TWEEN_CLAMP;
  payload: SetLayersRoughTweenClampPayload;
}

export interface SetLayerRoughTweenPointsPayload {
  id: string;
  points: number;
  ref: string;
}

export interface SetLayerRoughTweenPoints {
  type: typeof SET_LAYER_ROUGH_TWEEN_POINTS;
  payload: SetLayerRoughTweenPointsPayload;
}

export interface SetLayersRoughTweenPointsPayload {
  tweens: string[];
  points: number;
  ref: {
    [id: string]: string;
  };
}

export interface SetLayersRoughTweenPoints {
  type: typeof SET_LAYERS_ROUGH_TWEEN_POINTS;
  payload: SetLayersRoughTweenPointsPayload;
}

export interface SetLayerRoughTweenRandomizePayload {
  id: string;
  randomize: boolean;
  ref: string;
}

export interface SetLayerRoughTweenRandomize {
  type: typeof SET_LAYER_ROUGH_TWEEN_RANDOMIZE;
  payload: SetLayerRoughTweenRandomizePayload;
}

export interface SetLayersRoughTweenRandomizePayload {
  tweens: string[];
  randomize: boolean;
  ref: {
    [id: string]: string;
  };
}

export interface SetLayersRoughTweenRandomize {
  type: typeof SET_LAYERS_ROUGH_TWEEN_RANDOMIZE;
  payload: SetLayersRoughTweenRandomizePayload;
}

export interface SetLayerRoughTweenStrengthPayload {
  id: string;
  strength: number;
  ref: string;
}

export interface SetLayerRoughTweenStrength {
  type: typeof SET_LAYER_ROUGH_TWEEN_STRENGTH;
  payload: SetLayerRoughTweenStrengthPayload;
}

export interface SetLayersRoughTweenStrengthPayload {
  tweens: string[];
  strength: number;
  ref: {
    [id: string]: string;
  };
}

export interface SetLayersRoughTweenStrength {
  type: typeof SET_LAYERS_ROUGH_TWEEN_STRENGTH;
  payload: SetLayersRoughTweenStrengthPayload;
}

export interface SetLayerRoughTweenTaperPayload {
  id: string;
  taper: Btwx.RoughTweenTaper;
  ref: string;
}

export interface SetLayerRoughTweenTaper {
  type: typeof SET_LAYER_ROUGH_TWEEN_TAPER;
  payload: SetLayerRoughTweenTaperPayload;
}

export interface SetLayersRoughTweenTaperPayload {
  tweens: string[];
  taper: Btwx.RoughTweenTaper;
  ref: {
    [id: string]: string;
  };
}

export interface SetLayersRoughTweenTaper {
  type: typeof SET_LAYERS_ROUGH_TWEEN_TAPER;
  payload: SetLayersRoughTweenTaperPayload;
}

export interface SetLayerRoughTweenTemplatePayload {
  id: string;
  template: string;
  ref: string;
}

export interface SetLayerRoughTweenTemplate {
  type: typeof SET_LAYER_ROUGH_TWEEN_TEMPLATE;
  payload: SetLayerRoughTweenTemplatePayload;
}

export interface SetLayersRoughTweenTemplatePayload {
  tweens: string[];
  template: string;
  ref: {
    [id: string]: string;
  };
}

export interface SetLayersRoughTweenTemplate {
  type: typeof SET_LAYERS_ROUGH_TWEEN_TEMPLATE;
  payload: SetLayersRoughTweenTemplatePayload;
}

export interface SetLayerSlowTweenLinearRatioPayload {
  id: string;
  linearRatio: number;
}

export interface SetLayerSlowTweenLinearRatio {
  type: typeof SET_LAYER_SLOW_TWEEN_LINEAR_RATIO;
  payload: SetLayerSlowTweenLinearRatioPayload;
}

export interface SetLayersSlowTweenLinearRatioPayload {
  tweens: string[];
  linearRatio: number;
}

export interface SetLayersSlowTweenLinearRatio {
  type: typeof SET_LAYERS_SLOW_TWEEN_LINEAR_RATIO;
  payload: SetLayersSlowTweenLinearRatioPayload;
}

export interface SetLayerSlowTweenPowerPayload {
  id: string;
  power: number;
}

export interface SetLayerSlowTweenPower {
  type: typeof SET_LAYER_SLOW_TWEEN_POWER;
  payload: SetLayerSlowTweenPowerPayload;
}

export interface SetLayersSlowTweenPowerPayload {
  tweens: string[];
  power: number;
}

export interface SetLayersSlowTweenPower {
  type: typeof SET_LAYERS_SLOW_TWEEN_POWER;
  payload: SetLayersSlowTweenPowerPayload;
}

export interface SetLayerSlowTweenYoYoModePayload {
  id: string;
  yoyoMode: boolean;
}

export interface SetLayerSlowTweenYoYoMode {
  type: typeof SET_LAYER_SLOW_TWEEN_YOYO_MODE;
  payload: SetLayerSlowTweenYoYoModePayload;
}

export interface SetLayersSlowTweenYoYoModePayload {
  tweens: string[];
  yoyoMode: boolean;
}

export interface SetLayersSlowTweenYoYoMode {
  type: typeof SET_LAYERS_SLOW_TWEEN_YOYO_MODE;
  payload: SetLayersSlowTweenYoYoModePayload;
}

export interface SetLayerTextTweenDelimiterPayload {
  id: string;
  delimiter: string;
}

export interface SetLayerTextTweenDelimiter {
  type: typeof SET_LAYER_TEXT_TWEEN_DELIMITER;
  payload: SetLayerTextTweenDelimiterPayload;
}

export interface SetLayersTextTweenDelimiterPayload {
  tweens: string[];
  delimiter: string;
}

export interface SetLayersTextTweenDelimiter {
  type: typeof SET_LAYERS_TEXT_TWEEN_DELIMITER;
  payload: SetLayersTextTweenDelimiterPayload;
}

export interface SetLayerTextTweenSpeedPayload {
  id: string;
  speed: number;
}

export interface SetLayerTextTweenSpeed {
  type: typeof SET_LAYER_TEXT_TWEEN_SPEED;
  payload: SetLayerTextTweenSpeedPayload;
}

export interface SetLayersTextTweenSpeedPayload {
  tweens: string[];
  speed: number;
}

export interface SetLayersTextTweenSpeed {
  type: typeof SET_LAYERS_TEXT_TWEEN_SPEED;
  payload: SetLayersTextTweenSpeedPayload;
}

export interface SetLayerTextTweenDiffPayload {
  id: string;
  diff: boolean;
}

export interface SetLayerTextTweenDiff {
  type: typeof SET_LAYER_TEXT_TWEEN_DIFF;
  payload: SetLayerTextTweenDiffPayload;
}

export interface SetLayersTextTweenDiffPayload {
  tweens: string[];
  diff: boolean;
}

export interface SetLayersTextTweenDiff {
  type: typeof SET_LAYERS_TEXT_TWEEN_DIFF;
  payload: SetLayersTextTweenDiffPayload;
}

export interface SetLayerTextTweenScramblePayload {
  id: string;
  scramble: boolean;
}

export interface SetLayerTextTweenScramble {
  type: typeof SET_LAYER_TEXT_TWEEN_SCRAMBLE;
  payload: SetLayerTextTweenScramblePayload;
}

export interface SetLayersTextTweenScramblePayload {
  tweens: string[];
  scramble: boolean;
}

export interface SetLayersTextTweenScramble {
  type: typeof SET_LAYERS_TEXT_TWEEN_SCRAMBLE;
  payload: SetLayersTextTweenScramblePayload;
}

export interface SetLayerScrambleTextTweenCharactersPayload {
  id: string;
  characters: Btwx.ScrambleTextTweenCharacters;
  customCharacters?: string;
}

export interface SetLayerScrambleTextTweenCharacters {
  type: typeof SET_LAYER_SCRAMBLE_TEXT_TWEEN_CHARACTERS;
  payload: SetLayerScrambleTextTweenCharactersPayload;
}

export interface SetLayersScrambleTextTweenCharactersPayload {
  tweens: string[];
  characters: Btwx.ScrambleTextTweenCharacters;
  customCharacters?: string;
}

export interface SetLayersScrambleTextTweenCharacters {
  type: typeof SET_LAYERS_SCRAMBLE_TEXT_TWEEN_CHARACTERS;
  payload: SetLayersScrambleTextTweenCharactersPayload;
}

export interface SetLayerScrambleTextTweenRevealDelayPayload {
  id: string;
  revealDelay: number;
}

export interface SetLayerScrambleTextTweenRevealDelay {
  type: typeof SET_LAYER_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY;
  payload: SetLayerScrambleTextTweenRevealDelayPayload;
}

export interface SetLayersScrambleTextTweenRevealDelayPayload {
  tweens: string[];
  revealDelay: number;
}

export interface SetLayersScrambleTextTweenRevealDelay {
  type: typeof SET_LAYERS_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY;
  payload: SetLayersScrambleTextTweenRevealDelayPayload;
}

export interface SetLayerScrambleTextTweenSpeedPayload {
  id: string;
  speed: number;
}

export interface SetLayerScrambleTextTweenSpeed {
  type: typeof SET_LAYER_SCRAMBLE_TEXT_TWEEN_SPEED;
  payload: SetLayerScrambleTextTweenSpeedPayload;
}

export interface SetLayersScrambleTextTweenSpeedPayload {
  tweens: string[];
  speed: number;
}

export interface SetLayersScrambleTextTweenSpeed {
  type: typeof SET_LAYERS_SCRAMBLE_TEXT_TWEEN_SPEED;
  payload: SetLayersScrambleTextTweenSpeedPayload;
}

export interface SetLayerScrambleTextTweenDelimiterPayload {
  id: string;
  delimiter: string;
}

export interface SetLayerScrambleTextTweenDelimiter {
  type: typeof SET_LAYER_SCRAMBLE_TEXT_TWEEN_DELIMITER;
  payload: SetLayerScrambleTextTweenDelimiterPayload;
}

export interface SetLayersScrambleTextTweenDelimiterPayload {
  tweens: string[];
  delimiter: string;
}

export interface SetLayersScrambleTextTweenDelimiter {
  type: typeof SET_LAYERS_SCRAMBLE_TEXT_TWEEN_DELIMITER;
  payload: SetLayersScrambleTextTweenDelimiterPayload;
}

export interface SetLayerScrambleTextTweenRightToLeftPayload {
  id: string;
  rightToLeft: boolean;
}

export interface SetLayerScrambleTextTweenRightToLeft {
  type: typeof SET_LAYER_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT;
  payload: SetLayerScrambleTextTweenRightToLeftPayload;
}

export interface SetLayersScrambleTextTweenRightToLeftPayload {
  tweens: string[];
  rightToLeft: boolean;
}

export interface SetLayersScrambleTextTweenRightToLeft {
  type: typeof SET_LAYERS_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT;
  payload: SetLayersScrambleTextTweenRightToLeftPayload;
}

export interface SetLayerCustomBounceTweenStrengthPayload {
  id: string;
  strength: number;
}

export interface SetLayerCustomBounceTweenStrength {
  type: typeof SET_LAYER_CUSTOM_BOUNCE_TWEEN_STRENGTH;
  payload: SetLayerCustomBounceTweenStrengthPayload;
}

export interface SetLayersCustomBounceTweenStrengthPayload {
  tweens: string[];
  strength: number;
}

export interface SetLayersCustomBounceTweenStrength {
  type: typeof SET_LAYERS_CUSTOM_BOUNCE_TWEEN_STRENGTH;
  payload: SetLayersCustomBounceTweenStrengthPayload;
}

export interface SetLayerCustomBounceTweenEndAtStartPayload {
  id: string;
  endAtStart: boolean;
}

export interface SetLayerCustomBounceTweenEndAtStart {
  type: typeof SET_LAYER_CUSTOM_BOUNCE_TWEEN_END_AT_START;
  payload: SetLayerCustomBounceTweenEndAtStartPayload;
}

export interface SetLayersCustomBounceTweenEndAtStartPayload {
  tweens: string[];
  endAtStart: boolean;
}

export interface SetLayersCustomBounceTweenEndAtStart {
  type: typeof SET_LAYERS_CUSTOM_BOUNCE_TWEEN_END_AT_START;
  payload: SetLayersCustomBounceTweenEndAtStartPayload;
}

export interface SetLayerCustomBounceTweenSquashPayload {
  id: string;
  squash: number;
}

export interface SetLayerCustomBounceTweenSquash {
  type: typeof SET_LAYER_CUSTOM_BOUNCE_TWEEN_SQUASH;
  payload: SetLayerCustomBounceTweenSquashPayload;
}

export interface SetLayersCustomBounceTweenSquashPayload {
  tweens: string[];
  squash: number;
}

export interface SetLayersCustomBounceTweenSquash {
  type: typeof SET_LAYERS_CUSTOM_BOUNCE_TWEEN_SQUASH;
  payload: SetLayersCustomBounceTweenSquashPayload;
}

export interface SetLayerCustomWiggleTweenStrengthPayload {
  id: string;
  strength: number;
}

export interface SetLayerCustomWiggleTweenStrength {
  type: typeof SET_LAYER_CUSTOM_WIGGLE_TWEEN_STRENGTH;
  payload: SetLayerCustomWiggleTweenStrengthPayload;
}

export interface SetLayersCustomWiggleTweenStrengthPayload {
  tweens: string[];
  strength: number;
}

export interface SetLayersCustomWiggleTweenStrength {
  type: typeof SET_LAYERS_CUSTOM_WIGGLE_TWEEN_STRENGTH;
  payload: SetLayersCustomWiggleTweenStrengthPayload;
}

export interface SetLayerCustomWiggleTweenWigglesPayload {
  id: string;
  wiggles: number;
}

export interface SetLayerCustomWiggleTweenWiggles {
  type: typeof SET_LAYER_CUSTOM_WIGGLE_TWEEN_WIGGLES;
  payload: SetLayerCustomWiggleTweenWigglesPayload;
}

export interface SetLayersCustomWiggleTweenWigglesPayload {
  tweens: string[];
  wiggles: number;
}

export interface SetLayersCustomWiggleTweenWiggles {
  type: typeof SET_LAYERS_CUSTOM_WIGGLE_TWEEN_WIGGLES;
  payload: SetLayersCustomWiggleTweenWigglesPayload;
}

export interface SetLayerCustomWiggleTweenTypePayload {
  id: string;
  type: Btwx.CustomWiggleTweenType;
}

export interface SetLayerCustomWiggleTweenType {
  type: typeof SET_LAYER_CUSTOM_WIGGLE_TWEEN_TYPE;
  payload: SetLayerCustomWiggleTweenTypePayload;
}

export interface SetLayersCustomWiggleTweenTypePayload {
  tweens: string[];
  type: Btwx.CustomWiggleTweenType;
}

export interface SetLayersCustomWiggleTweenType {
  type: typeof SET_LAYERS_CUSTOM_WIGGLE_TWEEN_TYPE;
  payload: SetLayersCustomWiggleTweenTypePayload;
}

export interface SetLayerXPayload {
  id: string;
  x: number;
}

export interface SetLayerX {
  type: typeof SET_LAYER_X;
  payload: SetLayerXPayload;
}

export interface SetLayersXPayload {
  layers: string[];
  x: number;
}

export interface SetLayersX {
  type: typeof SET_LAYERS_X;
  payload: SetLayersXPayload;
}

export interface SetLayerYPayload {
  id: string;
  y: number;
}

export interface SetLayerY {
  type: typeof SET_LAYER_Y;
  payload: SetLayerYPayload;
}

export interface SetLayersYPayload {
  layers: string[];
  y: number;
}

export interface SetLayersY {
  type: typeof SET_LAYERS_Y;
  payload: SetLayersYPayload;
}

export interface SetLayerLeftPayload {
  id: string;
  left: number;
}

export interface SetLayerLeft {
  type: typeof SET_LAYER_LEFT;
  payload: SetLayerLeftPayload;
}

export interface SetLayersLeftPayload {
  layers: string[];
  left: number;
}

export interface SetLayersLeft {
  type: typeof SET_LAYERS_LEFT;
  payload: SetLayersLeftPayload;
}

export interface SetLayerCenterPayload {
  id: string;
  center: number;
}

export interface SetLayerCenter {
  type: typeof SET_LAYER_CENTER;
  payload: SetLayerCenterPayload;
}

export interface SetLayersCenterPayload {
  layers: string[];
  center: number;
}

export interface SetLayersCenter {
  type: typeof SET_LAYERS_CENTER;
  payload: SetLayersCenterPayload;
}

export interface SetLayerRightPayload {
  id: string;
  right: number;
}

export interface SetLayerRight {
  type: typeof SET_LAYER_RIGHT;
  payload: SetLayerRightPayload;
}

export interface SetLayersRightPayload {
  layers: string[];
  right: number;
}

export interface SetLayersRight {
  type: typeof SET_LAYERS_RIGHT;
  payload: SetLayersRightPayload;
}

export interface SetLayerTopPayload {
  id: string;
  top: number;
}

export interface SetLayerTop {
  type: typeof SET_LAYER_TOP;
  payload: SetLayerTopPayload;
}

export interface SetLayersTopPayload {
  layers: string[];
  top: number;
}

export interface SetLayersTop {
  type: typeof SET_LAYERS_TOP;
  payload: SetLayersTopPayload;
}

export interface SetLayerMiddlePayload {
  id: string;
  middle: number;
}

export interface SetLayerMiddle {
  type: typeof SET_LAYER_MIDDLE;
  payload: SetLayerMiddlePayload;
}

export interface SetLayersMiddlePayload {
  layers: string[];
  middle: number;
}

export interface SetLayersMiddle {
  type: typeof SET_LAYERS_MIDDLE;
  payload: SetLayersMiddlePayload;
}

export interface SetLayerBottomPayload {
  id: string;
  bottom: number;
}

export interface SetLayerBottom {
  type: typeof SET_LAYER_BOTTOM;
  payload: SetLayerBottomPayload;
}

export interface SetLayersBottomPayload {
  layers: string[];
  bottom: number;
}

export interface SetLayersBottom {
  type: typeof SET_LAYERS_BOTTOM;
  payload: SetLayersBottomPayload;
}

export interface SetLayerWidthPayload {
  id: string;
  width: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  lines?: Btwx.TextLine[];
  paragraphs?: string[][];
  textResize?: Btwx.TextResize;
  from?: Btwx.Point;
  to?: Btwx.Point;
}

export interface SetLayerWidth {
  type: typeof SET_LAYER_WIDTH;
  payload: SetLayerWidthPayload;
}

export interface SetLayersWidthPayload {
  layers: string[];
  width: number;
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
  bounds?: {
    [id: string]: Btwx.Frame;
  }
  lines?: {
    [id: string]: Btwx.TextLine[];
  };
  paragraphs?: {
    [id: string]: string[][];
  };
  textResize?: {
    [id: string]: Btwx.TextResize;
  };
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
}

export interface SetLayersWidth {
  type: typeof SET_LAYERS_WIDTH;
  payload: SetLayersWidthPayload;
}

export interface SetLayerHeightPayload {
  id: string;
  height: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  lines?: Btwx.TextLine[];
  paragraphs?: string[][];
  textResize?: Btwx.TextResize;
  from?: Btwx.Point;
  to?: Btwx.Point;
}

export interface SetLayerHeight {
  type: typeof SET_LAYER_HEIGHT;
  payload: SetLayerHeightPayload;
}

export interface SetLayersHeightPayload {
  layers: string[];
  height: number;
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
  bounds?: {
    [id: string]: Btwx.Frame;
  };
  lines?: {
    [id: string]: Btwx.TextLine[];
  };
  paragraphs?: {
    [id: string]: string[][];
  };
  textResize?: {
    [id: string]: Btwx.TextResize;
  };
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
}

export interface SetLayersHeight {
  type: typeof SET_LAYERS_HEIGHT;
  payload: SetLayersHeightPayload;
}

export interface SetLayerRotationPayload {
  id: string;
  rotation: number;
  bounds?: Btwx.Frame;
  pathData?: string;
  shapeIcon?: string;
  point?: Btwx.Point;
  from?: Btwx.Point;
  to?: Btwx.Point;
  fillGradientOrigin?: Btwx.Point;
  fillGradientDestination?: Btwx.Point;
  strokeGradientOrigin?: Btwx.Point;
  strokeGradientDestination?: Btwx.Point;
}

export interface SetLayerRotation {
  type: typeof SET_LAYER_ROTATION;
  payload: SetLayerRotationPayload;
}

export interface SetLayersRotationPayload {
  layers: string[];
  rotation: number;
  bounds?: {
    [id: string]: Btwx.Frame;
  };
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
  point?: {
    [id: string]: Btwx.Point;
  };
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
  fillGradientOrigin?: {
    [id: string]: Btwx.Point;
  };
  fillGradientDestination?: {
    [id: string]: Btwx.Point;
  };
  strokeGradientOrigin?: {
    [id: string]: Btwx.Point;
  };
  strokeGradientDestination?: {
    [id: string]: Btwx.Point;
  };
}

export interface SetLayersRotation {
  type: typeof SET_LAYERS_ROTATION;
  payload: SetLayersRotationPayload;
}

export interface SetLayerOpacityPayload {
  id: string;
  opacity: number;
}

export interface SetLayerOpacity {
  type: typeof SET_LAYER_OPACITY;
  payload: SetLayerOpacityPayload;
}

export interface SetLayersOpacityPayload {
  layers: string[];
  opacity: number;
}

export interface SetLayersOpacity {
  type: typeof SET_LAYERS_OPACITY;
  payload: SetLayersOpacityPayload;
}

export interface EnableLayerBlurPayload {
  id: string;
}

export interface EnableLayerBlur {
  type: typeof ENABLE_LAYER_BLUR;
  payload: EnableLayerBlurPayload;
}

export interface DisableLayerBlurPayload {
  id: string;
}

export interface DisableLayerBlur {
  type: typeof DISABLE_LAYER_BLUR;
  payload: DisableLayerBlurPayload;
}

export interface EnableLayersBlurPayload {
  layers: string[];
}

export interface EnableLayersBlur {
  type: typeof ENABLE_LAYERS_BLUR;
  payload: EnableLayersBlurPayload;
}

export interface DisableLayersBlurPayload {
  layers: string[];
}

export interface DisableLayersBlur {
  type: typeof DISABLE_LAYERS_BLUR;
  payload: DisableLayersBlurPayload;
}

export interface SetLayerBlurRadiusPayload {
  id: string;
  radius: number;
}

export interface SetLayerBlurRadius {
  type: typeof SET_LAYER_BLUR_RADIUS;
  payload: SetLayerBlurRadiusPayload;
}

export interface SetLayersBlurRadiusPayload {
  layers: string[];
  radius: number;
}

export interface SetLayersBlurRadius {
  type: typeof SET_LAYERS_BLUR_RADIUS;
  payload: SetLayersBlurRadiusPayload;
}

export interface EnableLayerHorizontalFlipPayload {
  id: string;
  from?: Btwx.Point;
  to?: Btwx.Point;
  point?: Btwx.Point;
  pathData?: string;
  shapeIcon?: string;
}

export interface EnableLayerHorizontalFlip {
  type: typeof ENABLE_LAYER_HORIZONTAL_FLIP;
  payload: EnableLayerHorizontalFlipPayload;
}

export interface EnableLayersHorizontalFlipPayload {
  layers: string[];
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
  point?: {
    [id: string]: Btwx.Point;
  };
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
}

export interface EnableLayersHorizontalFlip {
  type: typeof ENABLE_LAYERS_HORIZONTAL_FLIP;
  payload: EnableLayersHorizontalFlipPayload;
}

export interface DisableLayerHorizontalFlipPayload {
  id: string;
  from?: Btwx.Point;
  to?: Btwx.Point;
  point?: Btwx.Point;
  pathData?: string;
  shapeIcon?: string;
}

export interface DisableLayerHorizontalFlip {
  type: typeof DISABLE_LAYER_HORIZONTAL_FLIP;
  payload: DisableLayerHorizontalFlipPayload;
}

export interface DisableLayersHorizontalFlipPayload {
  layers: string[];
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
  point?: {
    [id: string]: Btwx.Point;
  };
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
}

export interface DisableLayersHorizontalFlip {
  type: typeof DISABLE_LAYERS_HORIZONTAL_FLIP;
  payload: DisableLayersHorizontalFlipPayload;
}

export interface EnableLayerVerticalFlipPayload {
  id: string;
  from?: Btwx.Point;
  to?: Btwx.Point;
  point?: Btwx.Point;
  pathData?: string;
  shapeIcon?: string;
}

export interface EnableLayerVerticalFlip {
  type: typeof ENABLE_LAYER_VERTICAL_FLIP;
  payload: EnableLayerVerticalFlipPayload;
}

export interface EnableLayersVerticalFlipPayload {
  layers: string[];
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
  point?: {
    [id: string]: Btwx.Point;
  };
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
}

export interface EnableLayersVerticalFlip {
  type: typeof ENABLE_LAYERS_VERTICAL_FLIP;
  payload: EnableLayersVerticalFlipPayload;
}

export interface DisableLayerVerticalFlipPayload {
  id: string;
  from?: Btwx.Point;
  to?: Btwx.Point;
  point?: Btwx.Point;
  pathData?: string;
  shapeIcon?: string;
}

export interface DisableLayerVerticalFlip {
  type: typeof DISABLE_LAYER_VERTICAL_FLIP;
  payload: DisableLayerVerticalFlipPayload;
}

export interface DisableLayersVerticalFlipPayload {
  layers: string[];
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
  point?: {
    [id: string]: Btwx.Point;
  };
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
}

export interface DisableLayersVerticalFlip {
  type: typeof DISABLE_LAYERS_VERTICAL_FLIP;
  payload: DisableLayersVerticalFlipPayload;
}

export interface EnableLayerFillPayload {
  id: string;
}

export interface EnableLayerFill {
  type: typeof ENABLE_LAYER_FILL;
  payload: EnableLayerFillPayload;
}

export interface EnableLayersFillPayload {
  layers: string[];
}

export interface EnableLayersFill {
  type: typeof ENABLE_LAYERS_FILL;
  payload: EnableLayersFillPayload;
}

export interface DisableLayerFillPayload {
  id: string;
}

export interface DisableLayerFill {
  type: typeof DISABLE_LAYER_FILL;
  payload: DisableLayerFillPayload;
}

export interface DisableLayersFillPayload {
  layers: string[];
}

export interface DisableLayersFill {
  type: typeof DISABLE_LAYERS_FILL;
  payload: DisableLayersFillPayload;
}

export interface SetLayerFillColorPayload {
  id: string;
  fillColor: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayerFillColor {
  type: typeof SET_LAYER_FILL_COLOR;
  payload: SetLayerFillColorPayload;
}

export interface SetLayersFillColorPayload {
  layers: string[];
  fillColor: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayersFillColor {
  type: typeof SET_LAYERS_FILL_COLOR;
  payload: SetLayersFillColorPayload;
}

export interface SetLayersFillColorsPayload {
  layers: string[];
  fillColors: {
    [id: string]: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
  };
}

export interface SetLayersFillColors {
  type: typeof SET_LAYERS_FILL_COLORS;
  payload: SetLayersFillColorsPayload;
}

export interface SetLayerStrokePayload {
  id: string;
  stroke: { [P in keyof Btwx.Stroke]?: Btwx.Stroke[P] };
}

export interface SetLayerStroke {
  type: typeof SET_LAYER_STROKE;
  payload: SetLayerStrokePayload;
}

export interface SetLayersStrokePayload {
  layers: string[];
  stroke: { [P in keyof Btwx.Stroke]?: Btwx.Stroke[P] };
}

export interface SetLayersStroke {
  type: typeof SET_LAYERS_STROKE;
  payload: SetLayersStrokePayload;
}

export interface EnableLayerStrokePayload {
  id: string;
}

export interface EnableLayerStroke {
  type: typeof ENABLE_LAYER_STROKE;
  payload: EnableLayerStrokePayload;
}

export interface EnableLayersStrokePayload {
  layers: string[];
}

export interface EnableLayersStroke {
  type: typeof ENABLE_LAYERS_STROKE;
  payload: EnableLayersStrokePayload;
}

export interface DisableLayerStrokePayload {
  id: string;
}

export interface DisableLayerStroke {
  type: typeof DISABLE_LAYER_STROKE;
  payload: DisableLayerStrokePayload;
}

export interface DisableLayersStrokePayload {
  layers: string[];
}

export interface DisableLayersStroke {
  type: typeof DISABLE_LAYERS_STROKE;
  payload: DisableLayersStrokePayload;
}

export interface SetLayerStrokeColorPayload {
  id: string;
  strokeColor: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayerStrokeColor {
  type: typeof SET_LAYER_STROKE_COLOR;
  payload: SetLayerStrokeColorPayload;
}

export interface SetLayersStrokeColorPayload {
  layers: string[];
  strokeColor: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayersStrokeColor {
  type: typeof SET_LAYERS_STROKE_COLOR;
  payload: SetLayersStrokeColorPayload;
}

export interface SetLayersStrokeColorsPayload {
  layers: string[];
  strokeColors: {
    [id: string]: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
  };
}

export interface SetLayersStrokeColors {
  type: typeof SET_LAYERS_STROKE_COLORS;
  payload: SetLayersStrokeColorsPayload;
}

export interface SetLayerStrokeFillTypePayload {
  id: string;
  fillType: Btwx.FillType;
  gradientType?: Btwx.GradientType;
}

export interface SetLayerStrokeFillType {
  type: typeof SET_LAYER_STROKE_FILL_TYPE;
  payload: SetLayerStrokeFillTypePayload;
}

export interface SetLayersStrokeFillTypePayload {
  layers: string[];
  fillType: Btwx.FillType;
  gradientType?: Btwx.GradientType;
}

export interface SetLayersStrokeFillType {
  type: typeof SET_LAYERS_STROKE_FILL_TYPE;
  payload: SetLayersStrokeFillTypePayload;
}

export interface SetLayerGradientPayload {
  id: string;
  prop: 'fill' | 'stroke';
  gradient: Btwx.Gradient;
}

export interface SetLayerGradient {
  type: typeof SET_LAYER_GRADIENT;
  payload: SetLayerGradientPayload;
}

export interface SetLayersGradientPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  gradient: Btwx.Gradient;
}

export interface SetLayersGradient {
  type: typeof SET_LAYERS_GRADIENT;
  payload: SetLayersGradientPayload;
}

export interface SetLayerGradientTypePayload {
  id: string;
  prop: 'fill' | 'stroke';
  gradientType: Btwx.GradientType;
}

export interface SetLayerGradientType {
  type: typeof SET_LAYER_GRADIENT_TYPE;
  payload: SetLayerGradientTypePayload;
}

export interface SetLayersGradientTypePayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  gradientType: Btwx.GradientType;
}

export interface SetLayersGradientType {
  type: typeof SET_LAYERS_GRADIENT_TYPE;
  payload: SetLayersGradientTypePayload;
}

export interface SetLayerGradientOriginPayload {
  id: string;
  prop: 'fill' | 'stroke';
  origin: Btwx.Point;
}

export interface SetLayerGradientOrigin {
  type: typeof SET_LAYER_GRADIENT_ORIGIN;
  payload: SetLayerGradientOriginPayload;
}

export interface SetLayersGradientOriginPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  origin: Btwx.Point;
}

export interface SetLayersGradientOrigin {
  type: typeof SET_LAYERS_GRADIENT_ORIGIN;
  payload: SetLayersGradientOriginPayload;
}

export interface SetLayerGradientDestinationPayload {
  id: string;
  prop: 'fill' | 'stroke';
  destination: Btwx.Point;
}

export interface SetLayerGradientDestination {
  type: typeof SET_LAYER_GRADIENT_DESTINATION;
  payload: SetLayerGradientDestinationPayload;
}

export interface SetLayersGradientDestinationPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  destination: Btwx.Point;
}

export interface SetLayersGradientDestination {
  type: typeof SET_LAYERS_GRADIENT_DESTINATION;
  payload: SetLayersGradientDestinationPayload;
}

export interface SetLayersGradientODPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  origin: Btwx.Point;
  destination: Btwx.Point;
  handle: 'origin' | 'destination';
}

export interface SetLayersGradientOD {
  type: typeof SET_LAYERS_GRADIENT_OD;
  payload: SetLayersGradientODPayload;
}

export interface SetLayerGradientStopColorPayload {
  id: string;
  stopIndex: number;
  prop: 'fill' | 'stroke';
  color: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayerGradientStopColor {
  type: typeof SET_LAYER_GRADIENT_STOP_COLOR;
  payload: SetLayerGradientStopColorPayload;
}

export interface SetLayersGradientStopColorPayload {
  layers: string[];
  stopIndex: number;
  prop: 'fill' | 'stroke';
  color: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayersGradientStopColor {
  type: typeof SET_LAYERS_GRADIENT_STOP_COLOR;
  payload: SetLayersGradientStopColorPayload;
}

export interface SetLayerGradientStopPositionPayload {
  id: string;
  stopIndex: number;
  prop: 'fill' | 'stroke';
  position: number;
}

export interface SetLayerGradientStopPosition {
  type: typeof SET_LAYER_GRADIENT_STOP_POSITION;
  payload: SetLayerGradientStopPositionPayload;
}

export interface SetLayersGradientStopPositionPayload {
  layers: string[];
  stopIndex: number;
  prop: 'fill' | 'stroke';
  position: number;
}

export interface SetLayersGradientStopPosition {
  type: typeof SET_LAYERS_GRADIENT_STOP_POSITION;
  payload: SetLayersGradientStopPositionPayload;
}

export interface AddLayerGradientStopPayload {
  id: string;
  prop: 'fill' | 'stroke';
  gradientStop: Btwx.GradientStop;
}

export interface AddLayerGradientStop {
  type: typeof ADD_LAYER_GRADIENT_STOP;
  payload: AddLayerGradientStopPayload;
}

export interface AddLayersGradientStopPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  gradientStop: Btwx.GradientStop;
}

export interface AddLayersGradientStop {
  type: typeof ADD_LAYERS_GRADIENT_STOP;
  payload: AddLayersGradientStopPayload;
}

export interface RemoveLayerGradientStopPayload {
  id: string;
  prop: 'fill' | 'stroke';
  stopIndex: number;
}

export interface RemoveLayerGradientStop {
  type: typeof REMOVE_LAYER_GRADIENT_STOP;
  payload: RemoveLayerGradientStopPayload;
}

export interface RemoveLayersGradientStopPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
  stopIndex: number;
}

export interface RemoveLayersGradientStop {
  type: typeof REMOVE_LAYERS_GRADIENT_STOP;
  payload: RemoveLayersGradientStopPayload;
}

export interface SetLayerActiveGradientStopPayload {
  id: string;
  prop: 'fill' | 'stroke';
  stopIndex: number;
}

export interface SetLayerActiveGradientStop {
  type: typeof SET_LAYER_ACTIVE_GRADIENT_STOP;
  payload: SetLayerActiveGradientStopPayload;
}

export interface FlipLayerGradientPayload {
  id: string;
  prop: 'fill' | 'stroke';
}

export interface FlipLayerGradient {
  type: typeof FLIP_LAYER_GRADIENT;
  payload: FlipLayerGradientPayload;
}

export interface FlipLayersGradientPayload {
  layers: string[];
  prop: 'fill' | 'stroke';
}

export interface FlipLayersGradient {
  type: typeof FLIP_LAYERS_GRADIENT;
  payload: FlipLayersGradientPayload;
}

export interface SetLayerStrokeWidthPayload {
  id: string;
  strokeWidth: number;
}

export interface SetLayerStrokeWidth {
  type: typeof SET_LAYER_STROKE_WIDTH;
  payload: SetLayerStrokeWidthPayload;
}

export interface SetLayersStrokeWidthPayload {
  layers: string[];
  strokeWidth: number;
}

export interface SetLayersStrokeWidth {
  type: typeof SET_LAYERS_STROKE_WIDTH;
  payload: SetLayersStrokeWidthPayload;
}

export interface SetLayerStrokeCapPayload {
  id: string;
  strokeCap: Btwx.StrokeCap;
}

export interface SetLayerStrokeCap {
  type: typeof SET_LAYER_STROKE_CAP;
  payload: SetLayerStrokeCapPayload;
}

export interface SetLayersStrokeCapPayload {
  layers: string[];
  strokeCap: Btwx.StrokeCap;
}

export interface SetLayersStrokeCap {
  type: typeof SET_LAYERS_STROKE_CAP;
  payload: SetLayersStrokeCapPayload;
}

export interface SetLayerStrokeJoinPayload {
  id: string;
  strokeJoin: Btwx.StrokeJoin;
}

export interface SetLayerStrokeJoin {
  type: typeof SET_LAYER_STROKE_JOIN;
  payload: SetLayerStrokeJoinPayload;
}

export interface SetLayersStrokeJoinPayload {
  layers: string[];
  strokeJoin: Btwx.StrokeJoin;
}

export interface SetLayersStrokeJoin {
  type: typeof SET_LAYERS_STROKE_JOIN;
  payload: SetLayersStrokeJoinPayload;
}

export interface SetLayerStrokeDashOffsetPayload {
  id: string;
  strokeDashOffset: number;
}

export interface SetLayerStrokeDashOffset {
  type: typeof SET_LAYER_STROKE_DASH_OFFSET;
  payload: SetLayerStrokeDashOffsetPayload;
}

export interface SetLayersStrokeDashOffsetPayload {
  layers: string[];
  strokeDashOffset: number;
}

export interface SetLayersStrokeDashOffset {
  type: typeof SET_LAYERS_STROKE_DASH_OFFSET;
  payload: SetLayersStrokeDashOffsetPayload;
}

export interface SetLayerStrokeDashArrayPayload {
  id: string;
  strokeDashArray: number[];
}

export interface SetLayerStrokeDashArray {
  type: typeof SET_LAYER_STROKE_DASH_ARRAY;
  payload: SetLayerStrokeDashArrayPayload;
}

export interface SetLayersStrokeDashArrayPayload {
  layers: string[];
  strokeDashArray: number[];
}

export interface SetLayersStrokeDashArray {
  type: typeof SET_LAYERS_STROKE_DASH_ARRAY;
  payload: SetLayersStrokeDashArrayPayload;
}

export interface SetLayerStrokeDashArrayWidthPayload {
  id: string;
  strokeDashArrayWidth: number;
}

export interface SetLayerStrokeDashArrayWidth {
  type: typeof SET_LAYER_STROKE_DASH_ARRAY_WIDTH;
  payload: SetLayerStrokeDashArrayWidthPayload;
}

export interface SetLayersStrokeDashArrayWidthPayload {
  layers: string[];
  strokeDashArrayWidth: number;
}

export interface SetLayersStrokeDashArrayWidth {
  type: typeof SET_LAYERS_STROKE_DASH_ARRAY_WIDTH;
  payload: SetLayersStrokeDashArrayWidthPayload;
}

export interface SetLayerStrokeDashArrayGapPayload {
  id: string;
  strokeDashArrayGap: number;
}

export interface SetLayerStrokeDashArrayGap {
  type: typeof SET_LAYER_STROKE_DASH_ARRAY_GAP;
  payload: SetLayerStrokeDashArrayGapPayload;
}

export interface SetLayersStrokeDashArrayGapPayload {
  layers: string[];
  strokeDashArrayGap: number;
}

export interface SetLayersStrokeDashArrayGap {
  type: typeof SET_LAYERS_STROKE_DASH_ARRAY_GAP;
  payload: SetLayersStrokeDashArrayGapPayload;
}

export interface SetLayerStrokeMiterLimitPayload {
  id: string;
  miterLimit: number;
}

export interface SetLayerStrokeMiterLimit {
  type: typeof SET_LAYER_STROKE_MITER_LIMIT;
  payload: SetLayerStrokeMiterLimitPayload;
}

export interface SetLayerShadowPayload {
  id: string;
  shadow: { [P in keyof Btwx.Shadow]?: Btwx.Shadow[P] };
}

export interface SetLayerShadow {
  type: typeof SET_LAYER_SHADOW;
  payload: SetLayerShadowPayload;
}

export interface SetLayersShadowPayload {
  layers: string[];
  shadow: { [P in keyof Btwx.Shadow]?: Btwx.Shadow[P] };
}

export interface SetLayersShadow {
  type: typeof SET_LAYERS_SHADOW;
  payload: SetLayersShadowPayload;
}

export interface EnableLayerShadowPayload {
  id: string;
}

export interface EnableLayerShadow {
  type: typeof ENABLE_LAYER_SHADOW;
  payload: EnableLayerShadowPayload;
}

export interface EnableLayersShadowPayload {
  layers: string[];
}

export interface EnableLayersShadow {
  type: typeof ENABLE_LAYERS_SHADOW;
  payload: EnableLayersShadowPayload;
}

export interface DisableLayerShadowPayload {
  id: string;
}

export interface DisableLayerShadow {
  type: typeof DISABLE_LAYER_SHADOW;
  payload: DisableLayerShadowPayload;
}

export interface DisableLayersShadowPayload {
  layers: string[];
}

export interface DisableLayersShadow {
  type: typeof DISABLE_LAYERS_SHADOW;
  payload: DisableLayersShadowPayload;
}

export interface SetLayerShadowColorPayload {
  id: string;
  shadowColor: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayerShadowColor {
  type: typeof SET_LAYER_SHADOW_COLOR;
  payload: SetLayerShadowColorPayload;
}

export interface SetLayersShadowColorPayload {
  layers: string[];
  shadowColor: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
}

export interface SetLayersShadowColor {
  type: typeof SET_LAYERS_SHADOW_COLOR;
  payload: SetLayersShadowColorPayload;
}

export interface SetLayersShadowColorsPayload {
  layers: string[];
  shadowColors: {
    [id: string]: { [P in keyof Btwx.Color]?: Btwx.Color[P] };
  };
}

export interface SetLayersShadowColors {
  type: typeof SET_LAYERS_SHADOW_COLORS;
  payload: SetLayersShadowColorsPayload;
}

export interface SetLayerShadowBlurPayload {
  id: string;
  shadowBlur: number;
}

export interface SetLayerShadowBlur {
  type: typeof SET_LAYER_SHADOW_BLUR;
  payload: SetLayerShadowBlurPayload;
}

export interface SetLayersShadowBlurPayload {
  layers: string[];
  shadowBlur: number;
}

export interface SetLayersShadowBlur {
  type: typeof SET_LAYERS_SHADOW_BLUR;
  payload: SetLayersShadowBlurPayload;
}

export interface SetLayerShadowXOffsetPayload {
  id: string;
  shadowXOffset: number;
}

export interface SetLayerShadowXOffset {
  type: typeof SET_LAYER_SHADOW_X_OFFSET;
  payload: SetLayerShadowXOffsetPayload;
}

export interface SetLayersShadowXOffsetPayload {
  layers: string[];
  shadowXOffset: number;
}

export interface SetLayersShadowXOffset {
  type: typeof SET_LAYERS_SHADOW_X_OFFSET;
  payload: SetLayersShadowXOffsetPayload;
}

export interface SetLayerShadowYOffsetPayload {
  id: string;
  shadowYOffset: number;
}

export interface SetLayerShadowYOffset {
  type: typeof SET_LAYER_SHADOW_Y_OFFSET;
  payload: SetLayerShadowYOffsetPayload;
}

export interface SetLayersShadowYOffsetPayload {
  layers: string[];
  shadowYOffset: number;
}

export interface SetLayersShadowYOffset {
  type: typeof SET_LAYERS_SHADOW_Y_OFFSET;
  payload: SetLayersShadowYOffsetPayload;
}

export interface ScaleLayerPayload {
  id: string;
  scale: Btwx.Point;
  verticalFlip: boolean;
  horizontalFlip: boolean;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  from?: Btwx.Point;
  to?: Btwx.Point;
  point?: Btwx.Point;
  lines?: Btwx.TextLine[];
  rotation?: number;
  resize?: Btwx.TextResize;
  paragraphs?: string[][];
}

export interface ScaleLayer {
  type: typeof SCALE_LAYER;
  payload: ScaleLayerPayload;
}

export interface ScaleLayersPayload {
  layers: string[];
  scale: Btwx.Point;
  verticalFlip: boolean;
  horizontalFlip: boolean;
  pathData?: {
    [id: string]: string;
  };
  shapeIcon?: {
    [id: string]: string;
  };
  bounds?: {
    [id: string]: Btwx.Frame;
  };
  from?: {
    [id: string]: Btwx.Point;
  };
  to?: {
    [id: string]: Btwx.Point;
  };
  point?: {
    [id: string]: Btwx.Point;
  };
  lines?: {
    [id: string]: Btwx.TextLine[];
  };
  rotation?: {
    [id: string]: number;
  };
  resize?: {
    [id: string]: Btwx.TextResize;
  }
  paragraphs?: {
    [id: string]: string[][];
  }
}

export interface ScaleLayers {
  type: typeof SCALE_LAYERS;
  payload: ScaleLayersPayload;
}

export interface SetLayerTextPayload {
  id: string;
  text: string;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerText {
  type: typeof SET_LAYER_TEXT;
  payload: SetLayerTextPayload;
}

export interface SetLayerTextResizePayload {
  id: string;
  resize: Btwx.TextResize;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerTextResize {
  type: typeof SET_LAYER_TEXT_RESIZE;
  payload: SetLayerTextResizePayload;
}

export interface SetLayersTextResizePayload {
  layers: string[];
  resize: Btwx.TextResize;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersTextResize {
  type: typeof SET_LAYERS_TEXT_RESIZE;
  payload: SetLayersTextResizePayload;
}

export interface SetLayerFontSizePayload {
  id: string;
  fontSize: number;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerFontSize {
  type: typeof SET_LAYER_FONT_SIZE;
  payload: SetLayerFontSizePayload;
}

export interface SetLayersFontSizePayload {
  layers: string[];
  fontSize: number;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersFontSize {
  type: typeof SET_LAYERS_FONT_SIZE;
  payload: SetLayersFontSizePayload;
}

export interface SetLayerLeadingPayload {
  id: string;
  leading: number;
  bounds?: Btwx.Frame;
  lines?: Btwx.TextLine[];
  point?: Btwx.Point;
}

export interface SetLayerLeading {
  type: typeof SET_LAYER_LEADING;
  payload: SetLayerLeadingPayload;
}

export interface SetLayersLeadingPayload {
  layers: string[];
  leading: number;
  bounds?: Btwx.Frame[];
  lines?: Btwx.TextLine[][];
  point?: Btwx.Point[];
}

export interface SetLayersLeading {
  type: typeof SET_LAYERS_LEADING;
  payload: SetLayersLeadingPayload;
}

export interface SetLayerFontWeightPayload {
  id: string;
  fontWeight: string | number;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerFontWeight {
  type: typeof SET_LAYER_FONT_WEIGHT;
  payload: SetLayerFontWeightPayload;
}

export interface SetLayersFontWeightPayload {
  layers: string[];
  fontWeight: string | number;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersFontWeight {
  type: typeof SET_LAYERS_FONT_WEIGHT;
  payload: SetLayersFontWeightPayload;
}

export interface SetLayerFontFamilyPayload {
  id: string;
  fontFamily: string;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerFontFamily {
  type: typeof SET_LAYER_FONT_FAMILY;
  payload: SetLayerFontFamilyPayload;
}

export interface SetLayersFontFamilyPayload {
  layers: string[];
  fontFamily: string;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersFontFamily {
  type: typeof SET_LAYERS_FONT_FAMILY;
  payload: SetLayersFontFamilyPayload;
}

export interface SetLayerJustificationPayload {
  id: string;
  justification: Btwx.Jusftification;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  point?: Btwx.Point;
}

export interface SetLayerJustification {
  type: typeof SET_LAYER_JUSTIFICATION;
  payload: SetLayerJustificationPayload;
}

export interface SetLayersJustificationPayload {
  layers: string[];
  justification: Btwx.Jusftification;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  points?: Btwx.Point[];
}

export interface SetLayersJustification {
  type: typeof SET_LAYERS_JUSTIFICATION;
  payload: SetLayersJustificationPayload;
}

export interface SetLayerVerticalAlignmentPayload {
  id: string;
  verticalAlignment: Btwx.VerticalAlignment;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  point?: Btwx.Point;
}

export interface SetLayerVerticalAlignment {
  type: typeof SET_LAYER_VERTICAL_ALIGNMENT;
  payload: SetLayerVerticalAlignmentPayload;
}

export interface SetLayersVerticalAlignmentPayload {
  layers: string[];
  verticalAlignment: Btwx.VerticalAlignment;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  points?: Btwx.Point[];
}

export interface SetLayersVerticalAlignment {
  type: typeof SET_LAYERS_VERTICAL_ALIGNMENT;
  payload: SetLayersVerticalAlignmentPayload;
}

export interface SetLayerFontStylePayload {
  id: string;
  fontStyle: Btwx.FontStyle;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerFontStyle {
  type: typeof SET_LAYER_FONT_STYLE;
  payload: SetLayerFontStylePayload;
}

export interface SetLayersFontStylePayload {
  layers: string[];
  fontStyle: Btwx.FontStyle;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersFontStyle {
  type: typeof SET_LAYERS_FONT_STYLE;
  payload: SetLayersFontStylePayload;
}

export interface SetLayerPointXPayload {
  id: string;
  x: number;
}

export interface SetLayerPointX {
  type: typeof SET_LAYER_POINT_X;
  payload: SetLayerPointXPayload;
}

export interface SetLayersPointXPayload {
  layers: string[];
  x: number;
}

export interface SetLayersPointX {
  type: typeof SET_LAYERS_POINT_X;
  payload: SetLayersPointXPayload;
}

export interface SetLayerPointYPayload {
  id: string;
  y: number;
}

export interface SetLayerPointY {
  type: typeof SET_LAYER_POINT_Y;
  payload: SetLayerPointYPayload;
}

export interface SetLayersPointYPayload {
  layers: string[];
  y: number;
}

export interface SetLayersPointY {
  type: typeof SET_LAYERS_POINT_Y;
  payload: SetLayersPointYPayload;
}

export interface SetLayerLetterSpacingPayload {
  id: string;
  letterSpacing: number;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerLetterSpacing {
  type: typeof SET_LAYER_LETTER_SPACING;
  payload: SetLayerLetterSpacingPayload;
}

export interface SetLayersLetterSpacingPayload {
  layers: string[];
  letterSpacing: number;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersLetterSpacing {
  type: typeof SET_LAYERS_LETTER_SPACING;
  payload: SetLayersLetterSpacingPayload;
}

export interface SetLayerTextTransformPayload {
  id: string;
  textTransform: Btwx.TextTransform;
  lines?: Btwx.TextLine[];
  bounds?: Btwx.Frame;
  paragraphs?: string[][];
  point?: Btwx.Point;
}

export interface SetLayerTextTransform {
  type: typeof SET_LAYER_TEXT_TRANSFORM;
  payload: SetLayerTextTransformPayload;
}

export interface SetLayersTextTransformPayload {
  layers: string[];
  textTransform: Btwx.TextTransform;
  lines?: Btwx.TextLine[][];
  bounds?: Btwx.Frame[];
  paragraphs?: string[][][];
  point?: Btwx.Point[];
}

export interface SetLayersTextTransform {
  type: typeof SET_LAYERS_TEXT_TRANSFORM;
  payload: SetLayersTextTransformPayload;
}

export interface SetLayerFillPayload {
  id: string;
  fill: { [P in keyof Btwx.Fill]?: Btwx.Fill[P] };
}

export interface SetLayerFill {
  type: typeof SET_LAYER_FILL;
  payload: SetLayerFillPayload;
}

export interface SetLayersFillPayload {
  layers: string[];
  fill: { [P in keyof Btwx.Fill]?: Btwx.Fill[P] };
}

export interface SetLayersFill {
  type: typeof SET_LAYERS_FILL;
  payload: SetLayersFillPayload;
}

export interface SetLayerFillTypePayload {
  id: string;
  fillType: Btwx.FillType;
  gradientType?: Btwx.GradientType;
}

export interface SetLayerFillType {
  type: typeof SET_LAYER_FILL_TYPE;
  payload: SetLayerFillTypePayload;
}

export interface SetLayersFillTypePayload {
  layers: string[];
  fillType: Btwx.FillType;
  gradientType?: Btwx.GradientType;
}

export interface SetLayersFillType {
  type: typeof SET_LAYERS_FILL_TYPE;
  payload: SetLayersFillTypePayload;
}

export interface SetLayerUnderlyingMaskPayload {
  id: string;
  underlyingMask: string;
}

export interface SetLayerUnderlyingMask {
  type: typeof SET_LAYER_UNDERLYING_MASK;
  payload: SetLayerUnderlyingMaskPayload;
}

export interface SetLayersUnderlyingMaskPayload {
  layers: string[];
  underlyingMask: string;
}

export interface SetLayersUnderlyingMask {
  type: typeof SET_LAYERS_UNDERLYING_MASK;
  payload: SetLayersUnderlyingMaskPayload;
}

export interface ToggleLayerIgnoreUnderlyingMaskPayload {
  id: string;
}

export interface ToggleLayerIgnoreUnderlyingMask {
  type: typeof TOGGLE_LAYER_IGNORE_UNDERLYING_MASK;
  payload: ToggleLayerIgnoreUnderlyingMaskPayload;
}

export interface ToggleLayersIgnoreUnderlyingMaskPayload {
  layers: string[];
}

export interface ToggleLayersIgnoreUnderlyingMask {
  type: typeof TOGGLE_LAYERS_IGNORE_UNDERLYING_MASK;
  payload: ToggleLayersIgnoreUnderlyingMaskPayload;
}

export interface ToggleLayerMaskPayload {
  id: string;
}

export interface ToggleLayerMask {
  type: typeof TOGGLE_LAYER_MASK;
  payload: ToggleLayerMaskPayload;
}

export interface ToggleLayersMaskPayload {
  layers: string[];
}

export interface ToggleLayersMask {
  type: typeof TOGGLE_LAYERS_MASK;
  payload: ToggleLayersMaskPayload;
}

export interface SetLayerMaskedPayload {
  id: string;
  masked: boolean;
}

export interface SetLayerMasked {
  type: typeof SET_LAYER_MASKED;
  payload: SetLayerMaskedPayload;
}

export interface SetLayersMaskedPayload {
  layers: string[];
  masked: boolean;
}

export interface SetLayersMasked {
  type: typeof SET_LAYERS_MASKED;
  payload: SetLayersMaskedPayload;
}

export interface AddLayersMaskPayload {
  layers: string[];
  group?: Btwx.Group;
}

export interface AddLayersMask {
  type: typeof ADD_LAYERS_MASK;
  payload: AddLayersMaskPayload;
}

export interface RemoveLayersMaskPayload {
  id: string;
}

export interface RemoveLayersMask {
  type: typeof REMOVE_LAYERS_MASK;
  payload: RemoveLayersMaskPayload;
}

export interface AlignLayersToLeftPayload {
  layers: string[];
}

export interface AlignLayersToLeft {
  type: typeof ALIGN_LAYERS_TO_LEFT;
  payload: AlignLayersToLeftPayload;
}

export interface AlignLayersToRightPayload {
  layers: string[];
}

export interface AlignLayersToRight {
  type: typeof ALIGN_LAYERS_TO_RIGHT;
  payload: AlignLayersToRightPayload;
}

export interface AlignLayersToTopPayload {
  layers: string[];
}

export interface AlignLayersToTop {
  type: typeof ALIGN_LAYERS_TO_TOP;
  payload: AlignLayersToTopPayload;
}

export interface AlignLayersToBottomPayload {
  layers: string[];
}

export interface AlignLayersToBottom {
  type: typeof ALIGN_LAYERS_TO_BOTTOM;
  payload: AlignLayersToBottomPayload;
}

export interface AlignLayersToCenterPayload {
  layers: string[];
}

export interface AlignLayersToCenter {
  type: typeof ALIGN_LAYERS_TO_CENTER;
  payload: AlignLayersToCenterPayload;
}

export interface AlignLayersToMiddlePayload {
  layers: string[];
}

export interface AlignLayersToMiddle {
  type: typeof ALIGN_LAYERS_TO_MIDDLE;
  payload: AlignLayersToMiddlePayload;
}

export interface DistributeLayersHorizontallyPayload {
  layers: string[];
}

export interface DistributeLayersHorizontally {
  type: typeof DISTRIBUTE_LAYERS_HORIZONTALLY;
  payload: DistributeLayersHorizontallyPayload;
}

export interface DistributeLayersVerticallyPayload {
  layers: string[];
}

export interface DistributeLayersVertically {
  type: typeof DISTRIBUTE_LAYERS_VERTICALLY;
  payload: DistributeLayersVerticallyPayload;
}

export interface DuplicateLayerPayload {
  id: string;
  offset?: Btwx.Point;
}

export interface DuplicateLayer {
  type: typeof DUPLICATE_LAYER;
  payload: DuplicateLayerPayload;
}

export interface DuplicateLayersPayload {
  layers: string[];
  offset?: Btwx.Point;
}

export interface DuplicateLayers {
  type: typeof DUPLICATE_LAYERS;
  payload: DuplicateLayersPayload;
}

export interface RemoveDuplicatedLayersPayload {
  layers: string[];
  newSelection?: string[];
}

export interface RemoveDuplicatedLayers {
  type: typeof REMOVE_DUPLICATED_LAYERS;
  payload: RemoveDuplicatedLayersPayload;
}

export interface SendLayerBackwardPayload {
  id: string;
}

export interface SendLayerBackward {
  type: typeof SEND_LAYER_BACKWARD;
  payload: SendLayerBackwardPayload;
}

export interface SendLayersBackwardPayload {
  layers: string[];
}

export interface SendLayersBackward {
  type: typeof SEND_LAYERS_BACKWARD;
  payload: SendLayersBackwardPayload;
}

export interface SendLayerToBackPayload {
  id: string;
}

export interface SendLayerToBack {
  type: typeof SEND_LAYER_TO_BACK;
  payload: SendLayerToBackPayload;
}

export interface SendLayersToBackPayload {
  layers: string[];
}

export interface SendLayersToBack {
  type: typeof SEND_LAYERS_TO_BACK;
  payload: SendLayersToBackPayload;
}

export interface BringLayerForwardPayload {
  id: string;
}

export interface BringLayerForward {
  type: typeof BRING_LAYER_FORWARD;
  payload: BringLayerForwardPayload;
}

export interface BringLayersForwardPayload {
  layers: string[];
}

export interface BringLayersForward {
  type: typeof BRING_LAYERS_FORWARD;
  payload: BringLayersForwardPayload;
}

export interface BringLayerToFrontPayload {
  id: string;
}

export interface BringLayerToFront {
  type: typeof BRING_LAYER_TO_FRONT;
  payload: BringLayerToFrontPayload;
}

export interface BringLayersToFrontPayload {
  layers: string[];
}

export interface BringLayersToFront {
  type: typeof BRING_LAYERS_TO_FRONT;
  payload: BringLayersToFrontPayload;
}

export interface SetLayerBlendModePayload {
  id: string;
  blendMode: Btwx.BlendMode;
}

export interface SetLayerBlendMode {
  type: typeof SET_LAYER_BLEND_MODE;
  payload: SetLayerBlendModePayload;
}

export interface SetLayersBlendModePayload {
  layers: string[];
  blendMode: Btwx.BlendMode;
}

export interface SetLayersBlendMode {
  type: typeof SET_LAYERS_BLEND_MODE;
  payload: SetLayersBlendModePayload;
}

export interface UniteLayersPayload {
  layers: string[];
  booleanLayer?: Btwx.Shape;
}

export interface UniteLayers {
  type: typeof UNITE_LAYERS;
  payload: UniteLayersPayload;
}

export interface IntersectLayersPayload {
  layers: string[];
  booleanLayer?: Btwx.Shape;
}

export interface IntersectLayers {
  type: typeof INTERSECT_LAYERS;
  payload: IntersectLayersPayload;
}

export interface SubtractLayersPayload {
  layers: string[];
  booleanLayer?: Btwx.Shape;
}

export interface SubtractLayers {
  type: typeof SUBTRACT_LAYERS;
  payload: SubtractLayersPayload;
}

export interface ExcludeLayersPayload {
  layers: string[];
  booleanLayer?: Btwx.Shape;
}

export interface ExcludeLayers {
  type: typeof EXCLUDE_LAYERS;
  payload: ExcludeLayersPayload;
}

export interface DivideLayersPayload {
  layers: string[];
  booleanLayer?: Btwx.Shape;
}

export interface DivideLayers {
  type: typeof DIVIDE_LAYERS;
  payload: DivideLayersPayload;
}

export interface SetRoundedRadiusPayload {
  id: string;
  radius: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
}

export interface SetRoundedRadius {
  type: typeof SET_ROUNDED_RADIUS;
  payload: SetRoundedRadiusPayload;
}

export interface SetRoundedRadiiPayload {
  layers: string[];
  radius: number;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
}

export interface SetRoundedRadii {
  type: typeof SET_ROUNDED_RADII;
  payload: SetRoundedRadiiPayload;
}

export interface SetPolygonSidesPayload {
  id: string;
  sides: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
}

export interface SetPolygonSides {
  type: typeof SET_POLYGON_SIDES;
  payload: SetPolygonSidesPayload;
}

export interface SetPolygonsSidesPayload {
  layers: string[];
  sides: number;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
}

export interface SetPolygonsSides {
  type: typeof SET_POLYGONS_SIDES;
  payload: SetPolygonsSidesPayload;
}

export interface SetStarPointsPayload {
  id: string;
  points: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
}

export interface SetStarPoints {
  type: typeof SET_STAR_POINTS;
  payload: SetStarPointsPayload;
}

export interface SetStarsPointsPayload {
  layers: string[];
  points: number;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
}

export interface SetStarsPoints {
  type: typeof SET_STARS_POINTS;
  payload: SetStarsPointsPayload;
}

export interface SetStarRadiusPayload {
  id: string;
  radius: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
}

export interface SetStarRadius {
  type: typeof SET_STAR_RADIUS;
  payload: SetStarRadiusPayload;
}

export interface SetStarsRadiusPayload {
  layers: string[];
  radius: number;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
}

export interface SetStarsRadius {
  type: typeof SET_STARS_RADIUS;
  payload: SetStarsRadiusPayload;
}

export interface SetLineFromXPayload {
  id: string;
  x: number;
  setEdit?: boolean;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  rotation?: number;
}

export interface SetLineFromX {
  type: typeof SET_LINE_FROM_X;
  payload: SetLineFromXPayload;
}

export interface SetLinesFromXPayload {
  layers: string[];
  x: number;
  setEdit?: boolean;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
  rotation?: number[];
}

export interface SetLinesFromX {
  type: typeof SET_LINES_FROM_X;
  payload: SetLinesFromXPayload;
}

export interface SetLineFromYPayload {
  id: string;
  y: number;
  setEdit?: boolean;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  rotation?: number;
}

export interface SetLineFromY {
  type: typeof SET_LINE_FROM_Y;
  payload: SetLineFromYPayload;
}

export interface SetLinesFromYPayload {
  layers: string[];
  y: number;
  setEdit?: boolean;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
  rotation?: number[];
}

export interface SetLinesFromY {
  type: typeof SET_LINES_FROM_Y;
  payload: SetLinesFromYPayload;
}

export interface SetLineFromPayload {
  id: string;
  x: number;
  y: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  rotation?: number;
}

export interface SetLineFrom {
  type: typeof SET_LINE_FROM;
  payload: SetLineFromPayload;
}

export interface SetLineToXPayload {
  id: string;
  x: number;
  setEdit?: boolean;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  rotation?: number;
}

export interface SetLineToX {
  type: typeof SET_LINE_TO_X;
  payload: SetLineToXPayload;
}

export interface SetLinesToXPayload {
  layers: string[];
  x: number;
  setEdit?: boolean;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
  rotation?: number[];
}

export interface SetLinesToX {
  type: typeof SET_LINES_TO_X;
  payload: SetLinesToXPayload;
}

export interface SetLineToYPayload {
  id: string;
  y: number;
  setEdit?: boolean;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  rotation?: number;
}

export interface SetLineToY {
  type: typeof SET_LINE_TO_Y;
  payload: SetLineToYPayload;
}

export interface SetLinesToYPayload {
  layers: string[];
  y: number;
  setEdit?: boolean;
  pathData?: string[];
  shapeIcon?: string[];
  bounds?: Btwx.Frame[];
  rotation?: number[];
}

export interface SetLinesToY {
  type: typeof SET_LINES_TO_Y;
  payload: SetLinesToYPayload;
}

export interface SetLineToPayload {
  id: string;
  x: number;
  y: number;
  pathData?: string;
  shapeIcon?: string;
  bounds?: Btwx.Frame;
  rotation?: number;
}

export interface SetLineTo {
  type: typeof SET_LINE_TO;
  payload: SetLineToPayload;
}

export interface SetLayerEditPayload {
  edit?: Btwx.Edit;
}

export interface SetLayerEdit {
  type: typeof SET_LAYER_EDIT;
  payload: SetLayerEditPayload;
}

export interface SetLayerStylePayload {
  id: string;
  style: Btwx.Style;
  textStyle?: Btwx.TextStyle;
}

export interface SetLayerStyle {
  type: typeof SET_LAYER_STYLE;
  payload: SetLayerStylePayload;
}

export interface SetLayersStylePayload {
  layers: string[];
  style: Btwx.Style;
  textStyle?: Btwx.TextStyle;
}

export interface SetLayersStyle {
  type: typeof SET_LAYERS_STYLE;
  payload: SetLayersStylePayload;
}

export interface ResetImageDimensionsPayload {
  id: string;
  bounds?: Btwx.Frame;
}

export interface ResetImageDimensions {
  type: typeof RESET_IMAGE_DIMENSIONS;
  payload: ResetImageDimensionsPayload;
}

export interface ResetImagesDimensionsPayload {
  layers: string[];
  bounds?: {
    [id: string]: Btwx.Frame;
  };
}

export interface ResetImagesDimensions {
  type: typeof RESET_IMAGES_DIMENSIONS;
  payload: ResetImagesDimensionsPayload;
}

export interface ReplaceImagePayload {
  id: string;
  imageId: string;
  originalDimensions: {
    width: number;
    height: number;
  };
}

export interface ReplaceImage {
  type: typeof REPLACE_IMAGE;
  payload: ReplaceImagePayload;
}

export interface ReplaceImagesPayload {
  layers: string[];
  imageId: string;
  originalDimensions: {
    width: number;
    height: number;
  };
}

export interface ReplaceImages {
  type: typeof REPLACE_IMAGES;
  payload: ReplaceImagesPayload;
}

export interface PasteLayersFromClipboardPayload {
  clipboardLayers: Btwx.ClipboardLayers;
  overSelection?: boolean;
  overPoint?: Btwx.Point;
  overLayer?: string;
}

export interface PasteLayersFromClipboard {
  type: typeof PASTE_LAYERS_FROM_CLIPBOARD;
  payload: PasteLayersFromClipboardPayload;
}

export interface SetLayerTree {
  type: typeof SET_LAYER_TREE;
}

export interface SetLayerTreeScrollPayload {
  scroll: string;
}

export interface SetLayerTreeScroll {
  type: typeof SET_LAYER_TREE_SCROLL;
  payload: SetLayerTreeScrollPayload;
}

export interface SetLayerTreeStickyArtboardPayload {
  stickyArtboard: string;
}

export interface SetLayerTreeStickyArtboard {
  type: typeof SET_LAYER_TREE_STICKY_ARTBOARD;
  payload: SetLayerTreeStickyArtboardPayload;
}

export interface HydrateLayers {
  type: typeof HYDRATE_LAYERS;
  payload: LayerState;
}

//

export interface EnableGroupScrollPayload {
  id: string;
}

export interface EnableGroupScroll {
  type: typeof ENABLE_GROUP_SCROLL;
  payload: EnableGroupScrollPayload;
}

export interface EnableGroupsScrollPayload {
  layers: string[];
}

export interface EnableGroupsScroll {
  type: typeof ENABLE_GROUPS_SCROLL;
  payload: EnableGroupsScrollPayload;
}

//

export interface DisableGroupScrollPayload {
  id: string;
}

export interface DisableGroupScroll {
  type: typeof DISABLE_GROUP_SCROLL;
  payload: DisableGroupScrollPayload;
}

export interface DisableGroupsScrollPayload {
  layers: string[];
}

export interface DisableGroupsScroll {
  type: typeof DISABLE_GROUPS_SCROLL;
  payload: DisableGroupsScrollPayload;
}

//

export interface EnableGroupHorizontalScrollPayload {
  id: string;
}

export interface EnableGroupHorizontalScroll {
  type: typeof ENABLE_GROUP_HORIZONTAL_SCROLL;
  payload: EnableGroupHorizontalScrollPayload;
}

export interface EnableGroupsHorizontalScrollPayload {
  layers: string[];
}

export interface EnableGroupsHorizontalScroll {
  type: typeof ENABLE_GROUPS_HORIZONTAL_SCROLL;
  payload: EnableGroupsHorizontalScrollPayload;
}

//

export interface DisableGroupHorizontalScrollPayload {
  id: string;
}

export interface DisableGroupHorizontalScroll {
  type: typeof DISABLE_GROUP_HORIZONTAL_SCROLL;
  payload: DisableGroupHorizontalScrollPayload;
}

export interface DisableGroupsHorizontalScrollPayload {
  layers: string[];
}

export interface DisableGroupsHorizontalScroll {
  type: typeof DISABLE_GROUPS_HORIZONTAL_SCROLL;
  payload: DisableGroupsHorizontalScrollPayload;
}

//

export interface EnableGroupVerticalScrollPayload {
  id: string;
}

export interface EnableGroupVerticalScroll {
  type: typeof ENABLE_GROUP_VERTICAL_SCROLL;
  payload: EnableGroupVerticalScrollPayload;
}

export interface EnableGroupsVerticalScrollPayload {
  layers: string[];
}

export interface EnableGroupsVerticalScroll {
  type: typeof ENABLE_GROUPS_VERTICAL_SCROLL;
  payload: EnableGroupsVerticalScrollPayload;
}

//

export interface DisableGroupVerticalScrollPayload {
  id: string;
}

export interface DisableGroupVerticalScroll {
  type: typeof DISABLE_GROUP_VERTICAL_SCROLL;
  payload: DisableGroupVerticalScrollPayload;
}

export interface DisableGroupsVerticalScrollPayload {
  layers: string[];
}

export interface DisableGroupsVerticalScroll {
  type: typeof DISABLE_GROUPS_VERTICAL_SCROLL;
  payload: DisableGroupsVerticalScrollPayload;
}

//

export interface SetGroupScrollOverflowPayload {
  id: string;
  overflow: Btwx.ScrollOverflow;
}

export interface SetGroupScrollOverflow {
  type: typeof SET_GROUP_SCROLL_OVERFLOW;
  payload: SetGroupScrollOverflowPayload;
}

export interface SetGroupsScrollOverflowPayload {
  layers: string[];
  overflow: Btwx.ScrollOverflow;
}

export interface SetGroupsScrollOverflow {
  type: typeof SET_GROUPS_SCROLL_OVERFLOW;
  payload: SetGroupsScrollOverflowPayload;
}

//

export interface SetGroupScrollFramePayload {
  id: string;
  frame: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface SetGroupScrollFrame {
  type: typeof SET_GROUP_SCROLL_FRAME;
  payload: SetGroupScrollFramePayload;
}

//

export interface EnableGroupGroupEventTweensPayload {
  id: string;
}

export interface EnableGroupGroupEventTweens {
  type: typeof ENABLE_GROUP_GROUP_EVENT_TWEENS;
  payload: EnableGroupGroupEventTweensPayload;
}

export interface EnableGroupsGroupEventTweensPayload {
  layers: string[];
}

export interface EnableGroupsGroupEventTweens {
  type: typeof ENABLE_GROUPS_GROUP_EVENT_TWEENS;
  payload: EnableGroupsGroupEventTweensPayload;
}

//

export interface DisableGroupGroupEventTweensPayload {
  id: string;
}

export interface DisableGroupGroupEventTweens {
  type: typeof DISABLE_GROUP_GROUP_EVENT_TWEENS;
  payload: DisableGroupGroupEventTweensPayload;
}

export interface DisableGroupsGroupEventTweensPayload {
  layers: string[];
}

export interface DisableGroupsGroupEventTweens {
  type: typeof DISABLE_GROUPS_GROUP_EVENT_TWEENS;
  payload: DisableGroupsGroupEventTweensPayload;
}

//

export interface AddGroupsWigglesPayload {
  layers: string[];
  byLayer: {
    [id: string]: AddLayerTweenPayload;
  }
}

export interface AddGroupsWiggles {
  type: typeof ADD_GROUP_WIGGLES;
  payload: AddGroupsWigglesPayload;
}

export type LayerTypes = AddArtboard |
                         AddGroup |
                         AddShape |
                         AddText |
                         AddImage |
                         AddLayers |
                         RemoveLayer |
                         RemoveLayers |
                         SelectLayer |
                         DeepSelectLayer |
                         SelectLayers |
                         DeselectLayer |
                         DeselectLayers |
                         SelectAllLayers |
                         DeselectAllLayers |
                         AreaSelectLayers |
                         SetLayerHover |
                         EnableLayerHover |
                         DisableLayerHover |
                         AddLayerChild |
                         AddLayerChildren |
                         InsertLayerChild |
                         ShowLayerChildren |
                         ShowLayersChildren |
                         HideLayerChildren |
                         HideLayersChildren |
                         InsertLayerAbove |
                         InsertLayersAbove |
                         InsertLayerBelow |
                         InsertLayersBelow |
                         IncreaseLayerScope |
                         DecreaseLayerScope |
                         NewLayerScope |
                         ClearLayerScope |
                         EscapeLayerScope |
                         SetLayerScope |
                         SetLayersScope |
                         SetGlobalScope |
                         GroupLayers |
                         UngroupLayer |
                         UngroupLayers |
                         MoveLayer |
                         MoveLayers |
                         MoveLayerTo |
                         MoveLayersTo |
                         MoveLayerBy |
                         MoveLayersBy |
                         EnableLayerDrag |
                         DisableLayerDrag |
                         SetLayerName |
                         SetActiveArtboard |
                         AddLayerEvent |
                         AddLayersEvent |
                         RemoveLayerEvent |
                         RemoveLayersEvent |
                         SetLayerEventEventListener |
                         SetLayersEventEventListener |
                         SelectLayerEvent |
                         DeselectLayerEvent |
                         SelectLayerEvents |
                         DeselectLayerEvents |
                         DeselectAllLayerEvents |
                         AddLayerTween |
                         RemoveLayerTween |
                         RemoveLayerTweens |
                         SelectLayerEventTween |
                         DeselectLayerEventTween |
                         SelectLayerEventTweens |
                         DeselectLayerEventTweens |
                         DeselectAllLayerEventTweens |
                         SetLayerTweenDuration |
                         SetLayersTweenDuration |
                         SetLayerTweenRepeat |
                         SetLayersTweenRepeat |
                         SetLayerTweenRepeatDelay |
                         SetLayersTweenRepeatDelay |
                         SetLayerTweenYoyo |
                         SetLayersTweenYoyo |
                         SetLayerTweenYoyoEase |
                         SetLayersTweenYoyoEase |
                         SetLayerTweenTiming |
                         SetLayersTweenTiming |
                         SetLayerTweenDelay |
                         SetLayersTweenDelay |
                         SetLayerTweenEase |
                         SetLayersTweenEase |
                         SetLayerTweenPower |
                         SetLayersTweenPower |
                         FreezeLayerTween |
                         UnFreezeLayerTween |
                         SetLayerX |
                         SetLayersX |
                         SetLayerY |
                         SetLayersY |
                         SetLayerLeft |
                         SetLayersLeft |
                         SetLayerCenter |
                         SetLayersCenter |
                         SetLayerRight |
                         SetLayersRight |
                         SetLayerTop |
                         SetLayersTop |
                         SetLayerMiddle |
                         SetLayersMiddle |
                         SetLayerBottom |
                         SetLayersBottom |
                         SetLayerWidth |
                         SetLayersWidth |
                         SetLayerHeight |
                         SetLayersHeight |
                         SetLayerRotation |
                         SetLayersRotation |
                         SetLayerOpacity |
                         SetLayersOpacity |
                         EnableLayerBlur |
                         DisableLayerBlur |
                         EnableLayersBlur |
                         DisableLayersBlur |
                         SetLayerBlurRadius |
                         SetLayersBlurRadius |
                         EnableLayerHorizontalFlip |
                         EnableLayersHorizontalFlip |
                         DisableLayerHorizontalFlip |
                         DisableLayersHorizontalFlip |
                         EnableLayerVerticalFlip |
                         EnableLayersVerticalFlip |
                         DisableLayerVerticalFlip |
                         DisableLayersVerticalFlip |
                         EnableLayerFill |
                         EnableLayersFill |
                         DisableLayerFill |
                         DisableLayersFill |
                         SetLayerFillColor |
                         SetLayersFillColor |
                         SetLayersFillColors |
                         SetLayerFill |
                         SetLayersFill |
                         SetLayerFillType |
                         SetLayersFillType |
                         SetLayerGradient |
                         SetLayersGradient |
                         SetLayerGradientType |
                         SetLayersGradientType |
                         SetLayerGradientOrigin |
                         SetLayersGradientOrigin |
                         SetLayerGradientDestination |
                         SetLayersGradientDestination |
                         SetLayersGradientOD |
                         SetLayerGradientStopColor |
                         SetLayersGradientStopColor |
                         SetLayerGradientStopPosition |
                         SetLayersGradientStopPosition |
                         AddLayerGradientStop |
                         AddLayersGradientStop |
                         RemoveLayerGradientStop |
                         RemoveLayersGradientStop |
                         SetLayerActiveGradientStop |
                         FlipLayerGradient |
                         FlipLayersGradient |
                         SetLayerStroke |
                         SetLayersStroke |
                         EnableLayerStroke |
                         EnableLayersStroke |
                         DisableLayerStroke |
                         DisableLayersStroke |
                         SetLayerStrokeColor |
                         SetLayersStrokeColor |
                         SetLayersStrokeColors |
                         SetLayerStrokeFillType |
                         SetLayersStrokeFillType |
                         SetLayerStrokeWidth |
                         SetLayersStrokeWidth |
                         SetLayerStrokeCap |
                         SetLayersStrokeCap |
                         SetLayerStrokeJoin |
                         SetLayersStrokeJoin |
                         SetLayerStrokeDashOffset |
                         SetLayersStrokeDashOffset |
                         SetLayerStrokeDashArray |
                         SetLayersStrokeDashArray |
                         SetLayerStrokeDashArrayWidth |
                         SetLayersStrokeDashArrayWidth |
                         SetLayerStrokeDashArrayGap |
                         SetLayersStrokeDashArrayGap |
                         SetLayerStrokeMiterLimit |
                         SetLayerShadow |
                         SetLayersShadow |
                         EnableLayerShadow |
                         EnableLayersShadow |
                         DisableLayerShadow |
                         DisableLayersShadow |
                         SetLayerShadowColor |
                         SetLayersShadowColor |
                         SetLayersShadowColors |
                         SetLayerShadowBlur |
                         SetLayersShadowBlur |
                         SetLayerShadowXOffset |
                         SetLayersShadowXOffset |
                         SetLayerShadowYOffset |
                         SetLayersShadowYOffset |
                         ScaleLayer |
                         ScaleLayers |
                         SetLayerText |
                         SetLayerTextResize |
                         SetLayersTextResize |
                         SetLayerFontSize |
                         SetLayersFontSize |
                         SetLayerLeading |
                         SetLayersLeading |
                         SetLayerFontWeight |
                         SetLayersFontWeight |
                         SetLayerFontFamily |
                         SetLayersFontFamily |
                         SetLayerJustification |
                         SetLayersJustification |
                         SetLayerVerticalAlignment |
                         SetLayersVerticalAlignment |
                         SetLayerFontStyle |
                         SetLayersFontStyle |
                         SetLayerPointX |
                         SetLayersPointX |
                         SetLayerPointY |
                         SetLayersPointY |
                         SetLayerLetterSpacing |
                         SetLayersLetterSpacing |
                         SetLayerTextTransform |
                         SetLayersTextTransform |
                         SetLayerUnderlyingMask |
                         SetLayersUnderlyingMask |
                         ToggleLayerIgnoreUnderlyingMask |
                         ToggleLayersIgnoreUnderlyingMask |
                         ToggleLayerMask |
                         ToggleLayersMask |
                         SetLayerMasked |
                         SetLayersMasked |
                         AddLayersMask |
                         RemoveLayersMask |
                         AlignLayersToLeft |
                         AlignLayersToRight |
                         AlignLayersToTop |
                         AlignLayersToBottom |
                         AlignLayersToCenter |
                         AlignLayersToMiddle |
                         DistributeLayersHorizontally |
                         DistributeLayersVertically |
                         DuplicateLayer |
                         DuplicateLayers |
                         RemoveDuplicatedLayers |
                         BringLayerForward |
                         BringLayersForward |
                         BringLayerToFront |
                         BringLayersToFront |
                         SendLayerBackward |
                         SendLayersBackward |
                         SendLayerToBack |
                         SendLayersToBack |
                         SetLayerBlendMode |
                         SetLayersBlendMode |
                         UniteLayers |
                         IntersectLayers |
                         SubtractLayers |
                         ExcludeLayers |
                         DivideLayers |
                         SetRoundedRadius |
                         SetRoundedRadii |
                         SetPolygonSides |
                         SetPolygonsSides |
                         SetStarPoints |
                         SetStarsPoints |
                         SetStarRadius |
                         SetStarsRadius |
                         SetLineFromX |
                         SetLinesFromX |
                         SetLineFromY |
                         SetLinesFromY |
                         SetLineFrom |
                         SetLineToX |
                         SetLinesToX |
                         SetLineToY |
                         SetLinesToY |
                         SetLineTo |
                         SetLayerEdit |
                         SetLayerStyle |
                         SetLayersStyle |
                         ResetImageDimensions |
                         ResetImagesDimensions |
                         ReplaceImage |
                         ReplaceImages |
                         PasteLayersFromClipboard |
                         SetLayerScrambleTextTweenCharacters |
                         SetLayerScrambleTextTweenRevealDelay |
                         SetLayerScrambleTextTweenSpeed |
                         SetLayerScrambleTextTweenDelimiter |
                         SetLayerScrambleTextTweenRightToLeft |
                         SetLayerCustomBounceTweenStrength |
                         SetLayerCustomBounceTweenEndAtStart |
                         SetLayerCustomBounceTweenSquash |
                         SetLayerCustomWiggleTweenStrength |
                         SetLayerCustomWiggleTweenWiggles |
                         SetLayerCustomWiggleTweenType |
                         SetLayerStepsTweenSteps |
                         SetLayerRoughTweenClamp |
                         SetLayerRoughTweenPoints |
                         SetLayerRoughTweenRandomize |
                         SetLayerRoughTweenStrength |
                         SetLayerRoughTweenTaper |
                         SetLayerRoughTweenTemplate |
                         SetLayerSlowTweenLinearRatio |
                         SetLayerSlowTweenPower |
                         SetLayerSlowTweenYoYoMode |
                         SetLayerTextTweenDelimiter |
                         SetLayerTextTweenSpeed |
                         SetLayerTextTweenDiff |
                         SetLayerTextTweenScramble |
                         SetLayersScrambleTextTweenCharacters |
                         SetLayersScrambleTextTweenRevealDelay |
                         SetLayersScrambleTextTweenSpeed |
                         SetLayersScrambleTextTweenDelimiter |
                         SetLayersScrambleTextTweenRightToLeft |
                         SetLayersCustomBounceTweenStrength |
                         SetLayersCustomBounceTweenEndAtStart |
                         SetLayersCustomBounceTweenSquash |
                         SetLayersCustomWiggleTweenStrength |
                         SetLayersCustomWiggleTweenWiggles |
                         SetLayersCustomWiggleTweenType |
                         SetLayersStepsTweenSteps |
                         SetLayersRoughTweenClamp |
                         SetLayersRoughTweenPoints |
                         SetLayersRoughTweenRandomize |
                         SetLayersRoughTweenStrength |
                         SetLayersRoughTweenTaper |
                         SetLayersRoughTweenTemplate |
                         SetLayersSlowTweenLinearRatio |
                         SetLayersSlowTweenPower |
                         SetLayersSlowTweenYoYoMode |
                         SetLayersTextTweenDelimiter |
                         SetLayersTextTweenSpeed |
                         SetLayersTextTweenDiff |
                         SetLayersTextTweenScramble |
                         SetLayerTree |
                         SetLayerTreeScroll |
                         SetLayerTreeStickyArtboard |
                         HydrateLayers |
                         EnableGroupScroll |
                         EnableGroupsScroll |
                         DisableGroupScroll |
                         DisableGroupsScroll |
                         EnableGroupHorizontalScroll |
                         EnableGroupsHorizontalScroll |
                         DisableGroupHorizontalScroll |
                         DisableGroupsHorizontalScroll |
                         EnableGroupVerticalScroll |
                         EnableGroupsVerticalScroll |
                         DisableGroupVerticalScroll |
                         DisableGroupsVerticalScroll |
                         SetGroupScrollOverflow |
                         SetGroupsScrollOverflow |
                         SetGroupScrollFrame |
                         EnableGroupGroupEventTweens |
                         EnableGroupsGroupEventTweens |
                         DisableGroupGroupEventTweens |
                         DisableGroupsGroupEventTweens |
                         AddGroupsWiggles;