import {
  SET_PLATFORM,
  SessionTypes,
} from '../actionTypes/session';

export interface SessionState {
  instance: number;
  windowType: Btwx.WindowType;
  platform: string;
  env: 'production' | 'development';
}

export const initialState: SessionState = {
  instance: null,
  windowType: null,
  platform: null,
  env: 'production'
};

export default (state = initialState, action: SessionTypes): SessionState => {
  switch (action.type) {
    case SET_PLATFORM: {
      return {
        ...state,
        platform: action.payload.platform
      }
    }
    default:
      return state;
  }
}
