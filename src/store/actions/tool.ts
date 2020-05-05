import {
  ENABLE_RECTANGLE_DRAW_TOOL,
  ENABLE_ELLIPSE_DRAW_TOOL,
  ENABLE_STAR_DRAW_TOOL,
  ENABLE_POLYGON_DRAW_TOOL,
  ENABLE_ROUNDED_DRAW_TOOL,
  ENABLE_SELECTION_TOOL,
  ENABLE_DRAG_TOOL,
  ENABLE_ARTBOARD_TOOL,
  ToolTypes
} from '../actionTypes/tool';

export const enableRectangleDrawTool = (): ToolTypes => ({
  type: ENABLE_RECTANGLE_DRAW_TOOL
});

export const enableEllipseDrawTool = (): ToolTypes => ({
  type: ENABLE_ELLIPSE_DRAW_TOOL
});

export const enableStarDrawTool = (): ToolTypes => ({
  type: ENABLE_STAR_DRAW_TOOL
});

export const enablePolygonDrawTool = (): ToolTypes => ({
  type: ENABLE_POLYGON_DRAW_TOOL
});

export const enableRoundedDrawTool = (): ToolTypes => ({
  type: ENABLE_ROUNDED_DRAW_TOOL
});

export const enableSelectionTool = (): ToolTypes => ({
  type: ENABLE_SELECTION_TOOL
});

export const enableDragTool = (): ToolTypes => ({
  type: ENABLE_DRAG_TOOL
});

export const enableArtboardTool = (): ToolTypes => ({
  type: ENABLE_ARTBOARD_TOOL
});