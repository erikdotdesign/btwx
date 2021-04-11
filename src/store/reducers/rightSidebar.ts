import {
  EXPAND_SHAPE_STYLES,
  COLLAPSE_SHAPE_STYLES,
  EXPAND_OPACITY_STYLES,
  COLLAPSE_OPACITY_STYLES,
  EXPAND_TEXT_STYLES,
  COLLAPSE_TEXT_STYLES,
  EXPAND_ALIGNMENT_STYLES,
  COLLAPSE_ALIGNMENT_STYLES,
  EXPAND_FILL_STYLES,
  COLLAPSE_FILL_STYLES,
  EXPAND_STROKE_STYLES,
  COLLAPSE_STROKE_STYLES,
  EXPAND_STROKE_OPTIONS_STYLES,
  COLLAPSE_STROKE_OPTIONS_STYLES,
  EXPAND_SHADOW_STYLES,
  COLLAPSE_SHADOW_STYLES,
  EXPAND_BLUR_STYLES,
  COLLAPSE_BLUR_STYLES,
  RightSidebarTypes,
} from '../actionTypes/rightSidebar';

export interface RightSidebarState {
  shapeStylesCollapsed: boolean;
  opacityStylesCollapsed: boolean;
  textStylesCollapsed: boolean;
  alignmentStylesCollapsed: boolean;
  fillStylesCollapsed: boolean;
  strokeStylesCollapsed: boolean;
  strokeOptionsStylesCollapsed: boolean;
  shadowStylesCollapsed: boolean;
  blurStylesCollapsed: boolean;
}

const initialState: RightSidebarState = {
  shapeStylesCollapsed: false,
  opacityStylesCollapsed: false,
  textStylesCollapsed: false,
  alignmentStylesCollapsed: false,
  fillStylesCollapsed: false,
  strokeStylesCollapsed: false,
  strokeOptionsStylesCollapsed: false,
  shadowStylesCollapsed: false,
  blurStylesCollapsed: false
};

export default (state = initialState, action: RightSidebarTypes): RightSidebarState => {
  switch (action.type) {
    case EXPAND_SHAPE_STYLES: {
      return {
        ...state,
        shapeStylesCollapsed: false
      };
    }
    case COLLAPSE_SHAPE_STYLES: {
      return {
        ...state,
        shapeStylesCollapsed: true
      };
    }
    case EXPAND_OPACITY_STYLES: {
      return {
        ...state,
        opacityStylesCollapsed: false
      };
    }
    case COLLAPSE_OPACITY_STYLES: {
      return {
        ...state,
        opacityStylesCollapsed: true
      };
    }
    case EXPAND_TEXT_STYLES: {
      return {
        ...state,
        textStylesCollapsed: false
      };
    }
    case COLLAPSE_TEXT_STYLES: {
      return {
        ...state,
        textStylesCollapsed: true
      };
    }
    case EXPAND_ALIGNMENT_STYLES: {
      return {
        ...state,
        alignmentStylesCollapsed: false
      };
    }
    case COLLAPSE_ALIGNMENT_STYLES: {
      return {
        ...state,
        alignmentStylesCollapsed: true
      };
    }
    case EXPAND_FILL_STYLES: {
      return {
        ...state,
        fillStylesCollapsed: false
      };
    }
    case COLLAPSE_FILL_STYLES: {
      return {
        ...state,
        fillStylesCollapsed: true
      };
    }
    case EXPAND_STROKE_STYLES: {
      return {
        ...state,
        strokeStylesCollapsed: false
      };
    }
    case COLLAPSE_STROKE_STYLES: {
      return {
        ...state,
        strokeStylesCollapsed: true
      };
    }
    case EXPAND_STROKE_OPTIONS_STYLES: {
      return {
        ...state,
        strokeOptionsStylesCollapsed: false
      };
    }
    case COLLAPSE_STROKE_OPTIONS_STYLES: {
      return {
        ...state,
        strokeOptionsStylesCollapsed: true
      };
    }
    case EXPAND_SHADOW_STYLES: {
      return {
        ...state,
        shadowStylesCollapsed: false
      };
    }
    case COLLAPSE_SHADOW_STYLES: {
      return {
        ...state,
        shadowStylesCollapsed: true
      };
    }
    case EXPAND_BLUR_STYLES: {
      return {
        ...state,
        blurStylesCollapsed: false
      };
    }
    case COLLAPSE_BLUR_STYLES: {
      return {
        ...state,
        blurStylesCollapsed: true
      };
    }
    default:
      return state;
  }
}
