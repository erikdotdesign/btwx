import {
  SET_EVENT_DRAWER_EVENT_HOVER,
  SET_EVENT_DRAWER_EVENT,
  SET_EVENT_DRAWER_TWEEN_LAYER_HOVER,
  SET_EVENT_DRAWER_TWEEN_HOVER,
  SET_EVENT_DRAWER_TWEEN_EDITING,
  SET_EVENT_DRAWER_EVENT_SORT,
  EventDrawerTypes,
} from '../actionTypes/eventDrawer';

export interface EventDrawerState {
  event: string;
  eventHover: string;
  tweenLayerHover: string;
  tweenHover: string;
  tweenEditing: string;
  eventSort: Btwx.EventSort;
}

const initialState: EventDrawerState = {
  event: null,
  eventHover: null,
  tweenLayerHover: null,
  tweenHover: null,
  tweenEditing: null,
  eventSort: 'none'
};

export default (state = initialState, action: EventDrawerTypes): EventDrawerState => {
  switch (action.type) {
    case SET_EVENT_DRAWER_EVENT_HOVER: {
      return {
        ...state,
        eventHover: action.payload.id
      };
    }
    case SET_EVENT_DRAWER_EVENT: {
      return {
        ...state,
        event: action.payload.id,
        tweenLayerHover: null,
        tweenHover: null,
        eventHover: null
      };
    }
    case SET_EVENT_DRAWER_TWEEN_LAYER_HOVER: {
      return {
        ...state,
        tweenLayerHover: action.payload.id
      };
    }
    case SET_EVENT_DRAWER_TWEEN_HOVER: {
      return {
        ...state,
        tweenHover: action.payload.id
      };
    }
    case SET_EVENT_DRAWER_TWEEN_EDITING: {
      return {
        ...state,
        tweenEditing: action.payload.id
      };
    }
    case SET_EVENT_DRAWER_EVENT_SORT: {
      return {
        ...state,
        eventSort: action.payload.eventSort
      };
    }
    default:
      return state;
  }
}
