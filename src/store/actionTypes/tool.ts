export const ENABLE_RECTANGLE_DRAW_TOOL = 'ENABLE_RECTANGLE_DRAW_TOOL';
export const ENABLE_ELLIPSE_DRAW_TOOL = 'ENABLE_ELLIPSE_DRAW_TOOL';
export const ENABLE_STAR_DRAW_TOOL = 'ENABLE_STAR_DRAW_TOOL';
export const ENABLE_POLYGON_DRAW_TOOL = 'ENABLE_POLYGON_DRAW_TOOL';
export const ENABLE_ROUNDED_DRAW_TOOL = 'ENABLE_ROUNDED_DRAW_TOOL';

export const ENABLE_SELECTION_TOOL = 'ENABLE_SELECTION_TOOL';

interface EnableRectangleDrawTool {
  type: typeof ENABLE_RECTANGLE_DRAW_TOOL;
}

interface EnableEllipseDrawTool {
  type: typeof ENABLE_ELLIPSE_DRAW_TOOL;
}

interface EnableStarDrawTool {
  type: typeof ENABLE_STAR_DRAW_TOOL;
}

interface EnablePolygonDrawTool {
  type: typeof ENABLE_POLYGON_DRAW_TOOL;
}

interface EnableRoundedDrawTool {
  type: typeof ENABLE_ROUNDED_DRAW_TOOL;
}

interface EnableSelectionTool {
  type: typeof ENABLE_SELECTION_TOOL;
}

export type ToolTypes = EnableRectangleDrawTool | EnableEllipseDrawTool | EnableStarDrawTool | EnablePolygonDrawTool | EnableRoundedDrawTool | EnableSelectionTool;