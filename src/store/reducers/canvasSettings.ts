import {
  SET_CANVAS_ACTIVE_TOOL,
  SET_CANVAS_DRAWING,
  SET_CANVAS_TYPING,
  SET_CANVAS_ZOOMING,
  SET_CANVAS_SELECTING,
  SET_CANVAS_RESIZING,
  SET_CANVAS_DRAGGING,
  SET_CANVAS_MEASURING,
  SET_CANVAS_FOCUSING,
  RESET_CANVAS_SETTINGS,
  SET_CANVAS_MOUSE_POSITION,
  SET_CANVAS_TRANSLATING,
  CanvasSettingsTypes,
} from '../actionTypes/canvasSettings';

export interface CanvasSettingsState {
  activeTool: em.ToolType;
  mouse: {
    x: number;
    y: number;
    paperX: number;
    paperY: number;
  };
  drawing: boolean;
  typing: boolean;
  resizing: boolean;
  dragging: boolean;
  selecting: boolean;
  measuring: boolean;
  focusing: boolean;
  zooming: boolean;
  translating: boolean;
}

const initialState: CanvasSettingsState = {
  activeTool: null,
  mouse: null,
  drawing: false,
  typing: false,
  resizing: false,
  dragging: false,
  selecting: false,
  measuring: false,
  focusing: true,
  zooming: false,
  translating: false
};

export default (state = initialState, action: CanvasSettingsTypes): CanvasSettingsState => {
  switch (action.type) {
    case SET_CANVAS_ACTIVE_TOOL: {
      return {
        ...state,
        activeTool: action.payload.activeTool
      };
    }
    case SET_CANVAS_DRAWING: {
      return {
        ...state,
        drawing: action.payload.drawing
      };
    }
    case SET_CANVAS_TYPING: {
      return {
        ...state,
        typing: action.payload.typing
      };
    }
    case SET_CANVAS_RESIZING: {
      return {
        ...state,
        resizing: action.payload.resizing
      };
    }
    case SET_CANVAS_SELECTING: {
      return {
        ...state,
        selecting: action.payload.selecting
      };
    }
    case SET_CANVAS_DRAGGING: {
      return {
        ...state,
        dragging: action.payload.dragging
      };
    }
    case SET_CANVAS_ZOOMING: {
      return {
        ...state,
        zooming: action.payload.zooming,
      };
    }
    case SET_CANVAS_MEASURING: {
      return {
        ...state,
        measuring: action.payload.measuring
      };
    }
    case SET_CANVAS_FOCUSING: {
      return {
        ...state,
        focusing: action.payload.focusing
      };
    }
    case RESET_CANVAS_SETTINGS: {
      return {
        ...state,
        ...initialState
      };
    }
    case SET_CANVAS_MOUSE_POSITION: {
      return {
        ...state,
        mouse: action.payload.mouse
      };
    }
    case SET_CANVAS_TRANSLATING: {
      return {
        ...state,
        translating: action.payload.translating
      };
    }
    default:
      return state;
  }
}
