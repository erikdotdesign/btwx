import paper, { Shape } from 'paper';

const reducers = (state: any, action: any): any => {
  switch(action.type) {
    case 'initialize-app': {
      return {
        ...state,
        ready: action.ready,
        sketchDocument: action.sketchDocument,
        sketchMeta: action.sketchMeta,
        sketchUser: action.sketchUser,
        sketchPages: action.sketchPages,
        sketchImages: action.sketchImages
      };
    }
    case 'set-selected-layer': {
      paper.project.deselectAll();
      action.layer.selected = true;
      return {
        ...state,
        selectedLayer: action.layer,
        selectedLayerPath: action.path
      };
    }
    case 'set-selected-artboard': {
      return {
        ...state,
        selectedArtboard: action.selectedArtboard,
      };
    }
    case 'set-selected-paper-layer': {
      return {
        ...state,
        selectedPaperLayer: action.selectedPaperLayer
      };
    }
    case 'set-canvas': {
      return {
        ...state,
        canvas: action.canvas
      };
    }
    case 'set-project': {
      return {
        ...state,
        project: action.project
      };
    }
    case 'set-layers-sidebar-width': {
      return {
        ...state,
        layersSidebarWidth: action.layersSidebarWidth
      };
    }
    case 'set-styles-sidebar-width': {
      return {
        ...state,
        stylesSidebarWidth: action.stylesSidebarWidth
      };
    }
    case 'set-drawing': {
      return {
        ...state,
        drawing: action.drawing,
        drawingShape: action.drawingShape
      };
    }
    case 'add-artboard': {
      return {
        ...state,
        artboards: [...state.artboards, action.artboard]
      };
    }
    default:
      throw new Error(`Action not found ${action.type}`);
  }
};

export default reducers;