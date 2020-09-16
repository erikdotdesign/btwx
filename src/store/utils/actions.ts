import { paperMain } from '../../canvas';
import { getPaperShapePathData } from './paper';

import {
  DEFAULT_TRANSFORM, DEFAULT_FILL_STYLE, DEFAULT_STROKE_STYLE, DEFAULT_TEXT_STYLE,
  DEFAULT_SHADOW_STYLE, DEFAULT_BLEND_MODE, DEFAULT_OPACITY, DEFAULT_SHAPE_WIDTH,
  DEFAULT_SHAPE_HEIGHT, DEFAULT_STAR_POINTS, DEFAULT_ROUNDED_RADIUS, DEFAULT_STAR_RADIUS,
  DEFAULT_POLYGON_SIDES, DEFAULT_STROKE_OPTIONS_STYLE, DEFAULT_LINE_FROM, DEFAULT_LINE_TO
} from '../../constants';

export const getLayerFillStyle = (payload: any, overrides = {}): em.Fill => {
  const fill = payload.layer.style && payload.layer.style.fill ? { ...DEFAULT_FILL_STYLE, ...payload.layer.style.fill } : DEFAULT_FILL_STYLE;
  return { ...fill, ...overrides };
};

export const getLayerStrokeOptionsStyle = (payload: any, overrides = {}): em.StrokeOptions => {
  const strokeOptions = payload.layer.style && payload.layer.style.strokeOptions ? { ...DEFAULT_STROKE_OPTIONS_STYLE, ...payload.layer.style.strokeOptions } : DEFAULT_STROKE_OPTIONS_STYLE;
  return { ...strokeOptions, ...overrides };
};

export const getLayerStrokeStyle = (payload: any, overrides = {}): em.Stroke => {
  const stroke = payload.layer.style && payload.layer.style.stroke ? { ...DEFAULT_STROKE_STYLE, ...payload.layer.style.stroke } : DEFAULT_STROKE_STYLE;
  return { ...stroke, ...overrides };
};

export const getLayerShadowStyle = (payload: any, overrides = {}): em.Shadow => {
  const shadow = payload.layer.style && payload.layer.style.shadow ? { ...DEFAULT_SHADOW_STYLE, ...payload.layer.style.shadow } : DEFAULT_SHADOW_STYLE;
  return { ...shadow, ...overrides };
};

export const getLayerTransform = (payload: any, overrides = {}): em.Transform => {
  const transform = payload.layer.transform ? { ...DEFAULT_TRANSFORM, ...payload.layer.transform } : DEFAULT_TRANSFORM;
  return { ...transform, ...overrides };
}

export const getLayerStyle = (payload: any, styleOverrides = {}, overrides = { fill: {}, stroke: {}, strokeOptions: {}, shadow: {} } as { fill?: em.Fill; stroke?: em.Stroke; strokeOptions?: em.StrokeOptions; shadow?: em.Shadow }): em.Style => {
  const fill = getLayerFillStyle(payload, overrides.fill);
  const stroke = getLayerStrokeStyle(payload, overrides.stroke);
  const strokeOptions = getLayerStrokeOptionsStyle(payload, overrides.strokeOptions);
  const shadow = getLayerShadowStyle(payload, overrides.shadow);
  const opacity = payload.layer.style && payload.layer.style.opacity ? payload.layer.style.opacity : DEFAULT_OPACITY;
  const blendMode = payload.layer.style && payload.layer.style.blendMode ? payload.layer.style.blendMode : DEFAULT_BLEND_MODE;
  return { fill, stroke, strokeOptions, shadow, opacity, blendMode, ...styleOverrides };
}

export const getLayerTextStyle = (payload: any, overrides = {}): em.TextStyle => {
  const textStyle = payload.layer.textStyle ? { ...DEFAULT_TEXT_STYLE, ...payload.layer.textStyle } : DEFAULT_TEXT_STYLE;
  return { ...textStyle, ...overrides };
}

export const getLayerShapeOpts = (payload: any): { radius?: number; points?: number; sides?: number; from?: em.Point; to?: em.Point } => {
  const hasRadius = payload.layer.shapeType === 'Rounded' || payload.layer.shapeType === 'Star';
  const radius = hasRadius ? (payload.layer as em.Star | em.Rounded).radius !== null && (payload.layer as em.Star | em.Rounded).radius !== undefined ? (payload.layer as em.Star | em.Rounded).radius : payload.layer.shapeType === 'Rounded' ? DEFAULT_ROUNDED_RADIUS : DEFAULT_STAR_RADIUS : null;
  const points = payload.layer.shapeType === 'Star' ? (payload.layer as em.Star).points !== null && (payload.layer as em.Star).points !== undefined ? (payload.layer as em.Star).points : DEFAULT_STAR_POINTS : null;
  const sides = payload.layer.shapeType === 'Polygon' ? (payload.layer as em.Polygon).sides !== null && (payload.layer as em.Polygon).sides !== undefined ? (payload.layer as em.Polygon).sides : DEFAULT_POLYGON_SIDES : null;
  const from = payload.layer.shapeType === 'Line' ? (payload.layer as em.Line).from ? (payload.layer as em.Line).from : DEFAULT_LINE_FROM : null;
  const to = payload.layer.shapeType === 'Line' ? (payload.layer as em.Line).to ? (payload.layer as em.Line).to : DEFAULT_LINE_TO : null;
  switch(payload.layer.shapeType) {
    case 'Ellipse':
    case 'Rectangle':
      return {};
    case 'Rounded':
      return {
        radius
      };
    case 'Star':
      return {
        points,
        radius
      }
    case 'Polygon':
      return {
        sides
      }
    case 'Line':
      return {
        from,
        to
      }
    default:
      return {};
  }
}

export const getLayerFrame = (payload: any, overrides = {}): em.Frame => {
  const x = payload.layer.frame && (payload.layer.frame.x !== null && payload.layer.frame.x !== undefined) ? payload.layer.frame.x : paperMain.view.center.x;
  const y = payload.layer.frame && (payload.layer.frame.y !== null && payload.layer.frame.y !== undefined) ? payload.layer.frame.y : paperMain.view.center.y;
  const width = payload.layer.frame && (payload.layer.frame.width !== null && payload.layer.frame.width !== undefined) ? payload.layer.frame.width : DEFAULT_SHAPE_WIDTH;
  const height = payload.layer.frame && (payload.layer.frame.height !== null && payload.layer.frame.height !== undefined) ? payload.layer.frame.height : DEFAULT_SHAPE_HEIGHT;
  const innerWidth = payload.layer.frame && (payload.layer.frame.innerWidth !== null && payload.layer.frame.innerWidth !== undefined) ? payload.layer.frame.innerWidth : DEFAULT_SHAPE_WIDTH;
  const innerHeight = payload.layer.frame && (payload.layer.frame.innerHeight !== null && payload.layer.frame.innerHeight !== undefined) ? payload.layer.frame.innerHeight : DEFAULT_SHAPE_HEIGHT;
  return { x, y, width, height, innerWidth, innerHeight, ...overrides };
}

export const getLayerPathData = (payload: any): string => {
  const shapeType = payload.layer.shapeType ? payload.layer.shapeType : 'Rectangle';
  const frame = getLayerFrame(payload);
  const shapeOpts = getLayerShapeOpts(payload);
  const pathData = payload.layer.pathData && payload.layer.pathData ? payload.layer.pathData : getPaperShapePathData(shapeType, frame.innerWidth, frame.innerHeight, frame.x, frame.y, shapeOpts);
  return pathData;
}