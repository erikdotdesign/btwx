import {
  OPEN_ARTBOARD_PRESET_EDITOR,
  CLOSE_ARTBOARD_PRESET_EDITOR,
  ArtboardPresetEditorTypes,
} from '../actionTypes/artboardPresetEditor';

export interface ArtboardPresetEditorState extends Btwx.ArtboardPreset {
  isOpen: boolean;
  new: boolean;
}

const initialState: ArtboardPresetEditorState = {
  isOpen: false,
  id: null,
  type: 'Custom',
  category: 'Custom',
  width: 100,
  height: 100,
  new: false
};

export default (state = initialState, action: ArtboardPresetEditorTypes): ArtboardPresetEditorState => {
  switch (action.type) {
    case OPEN_ARTBOARD_PRESET_EDITOR: {
      return {
        ...state,
        ...action.payload,
        isOpen: true
      };
    }
    case CLOSE_ARTBOARD_PRESET_EDITOR: {
      return initialState;
    }
    default:
      return state;
  }
}
