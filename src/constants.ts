/* eslint-disable @typescript-eslint/no-use-before-define */
export const MAX_PROJECT_COUNT = 11;
export const ARTBOARDS_PER_PROJECT = 3;
export const APP_NAME = 'btwx';
export const PREVIEW_PREFIX = '**preview**';
export const THEME_PRIMARY_COLOR = '#3C88FD';
export const THEME_GUIDE_COLOR = 'red';
export const THEME_RECORDING_COLOR = 'red';
export const THEME_UNIT_SIZE = 4;
export const DEFAULT_ARTBOARD_BACKGROUND_COLOR = { h: 0, s: 0, l: 1, v: 1, a: 1 };
export const DEFAULT_THEME = 'dark';
export const WEB_SAFE_FONTS = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT'];
export const WEB_SAFE_FONT_WEIGHTS = [400, 700];

// Tween
export const DEFAULT_TWEEN_EASE_OPTIONS: Btwx.CubicBezier[] = ['linear', 'power1', 'power2', 'power3', 'power4', 'back', 'elastic', 'bounce', 'rough', 'slow', 'steps', 'circ', 'expo', 'sine', 'customBounce', 'customWiggle'];
export const DEFAULT_TWEEN_POWER_OPTIONS: Btwx.CubicBezierType[] = ['in', 'inOut', 'out'];
export const DEFAULT_TWEEN_DURATION = 0.5;
export const DEFAULT_TWEEN_DELAY = 0;
export const DEFAULT_TWEEN_EASE = 'power1';
export const DEFAULT_TWEEN_POWER = 'out';
// Text Tween
export const DEFAULT_TEXT_TWEEN_DELIMITER = '';
export const DEFAULT_TEXT_TWEEN_DIFF = false;
export const DEFAULT_TEXT_TWEEN_SPEED: number = null;
export const DEFAULT_TEXT_TWEEN_SCRAMBLE = false;
// Scramble Text Tween
export const DEFAULT_SCRAMBLE_TEXT_TWEEN_CHARACTERS: Btwx.ScrambleTextTweenCharacters = 'upperCase';
export const DEFAULT_SCRAMBLE_TEXT_TWEEN_REVEAL_DELAY = 0;
export const DEFAULT_SCRAMBLE_TEXT_TWEEN_SPEED = 1;
export const DEFAULT_SCRAMBLE_TEXT_TWEEN_DELIMITER = '';
export const DEFAULT_SCRAMBLE_TEXT_TWEEN_RIGHT_TO_LEFT = false;
// Step Tween
export const DEFAULT_STEPS_TWEEN_STEPS = 5;
// Rough Tween
export const DEFAULT_ROUGH_TWEEN_CLAMP = false;
export const DEFAULT_ROUGH_TWEEN_POINTS = 20;
export const DEFAULT_ROUGH_TWEEN_RANDOMIZE = true;
export const DEFAULT_ROUGH_TWEEN_STRENGTH = 1;
export const DEFAULT_ROUGH_TWEEN_TAPER = 'none';
export const DEFAULT_ROUGH_TWEEN_TAPER_TYPES: Btwx.RoughTweenTaper[] = ['in', 'out', 'both', 'none'];
export const DEFAULT_ROUGH_TWEEN_TEMPLATE = 'none';
// Slow Tween
export const DEFAULT_SLOW_TWEEN_LINEAR_RATIO = 0.7;
export const DEFAULT_SLOW_TWEEN_LINEAR_POWER = 0.7;
export const DEFAULT_SLOW_TWEEN_LINEAR_YOYO_MODE = false;
// Custom Bounce Tween
export const DEFAULT_CUSTOM_BOUNCE_TWEEN_STRENGTH = 0.7;
export const DEFAULT_CUSTOM_BOUNCE_TWEEN_END_AT_START = false;
export const DEFAULT_CUSTOM_BOUNCE_TWEEN_SQUASH = 0;
// Custom Wiggle Tween
export const DEFAULT_CUSTOM_WIGGLE_TWEEN_WIGGLES = 10;
export const DEFAULT_CUSTOM_WIGGLE_TWEEN_TYPE = 'easeOut';
export const DEFAULT_CUSTOM_WIGGLE_TWEEN_TYPES: Btwx.CustomWiggleTweenType[] = ['easeOut', 'easeInOut', 'anticipate', 'uniform', 'random'];

// export const TWEEN_PROPS = ['image', 'shape', 'fill', 'fillGradientOriginX', 'fillGradientOriginY', 'fillGradientDestinationX', 'fillGradientDestinationY', 'x', 'y', 'radius', 'rotation', 'width', 'height', 'stroke', 'strokeGradientOriginX', 'strokeGradientOriginY', 'strokeGradientDestinationX', 'strokeGradientDestinationY', 'dashOffset', 'dashArrayWidth', 'dashArrayGap', 'strokeWidth', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'opacity', 'fontSize', 'lineHeight', 'fromX', 'fromY', 'toX', 'toY'];
export const TWEEN_PROPS_MAP: { [id: string]: string[] } = {
  image: [],
  shape: [],
  fill: [],
  fillGradientOriginX: [],
  fillGradientOriginY: [],
  fillGradientDestinationX: [],
  fillGradientDestinationY: [],
  x: [],
  y: [],
  radius: [],
  rotation: [],
  width: [],
  height: [],
  stroke: [],
  strokeGradientOriginX: [],
  strokeGradientOriginY: [],
  strokeGradientDestinationX: [],
  strokeGradientDestinationY: [],
  dashOffset: [],
  dashArrayWidth: [],
  dashArrayGap: [],
  strokeWidth: [],
  shadowColor: [],
  shadowOffsetX: [],
  shadowOffsetY: [],
  shadowBlur: [],
  opacity: [],
  fontSize: [],
  letterSpacing: [],
  lineHeight: [],
  fontWeight: [],
  oblique: [],
  justification: [],
  text: [],
  fromX: [],
  fromY: [],
  toX: [],
  toY: [],
  pointX: [],
  pointY: []
}

export const DEFAULT_TWEEN_EVENTS = [
  { event: 'mousedown', titleCase: 'Mouse Down' },
  { event: 'mouseup', titleCase: 'Mouse Up' },
  { event: 'mousedrag', titleCase: 'Mouse Drag' },
  { event: 'click', titleCase: 'Click' },
  { event: 'rightclick', titleCase: 'Right Click' },
  { event: 'doubleclick', titleCase: 'Double Click' },
  { event: 'mousemove', titleCase: 'Mouse Move' },
  { event: 'mouseenter', titleCase: 'Mouse Enter' },
  { event: 'mouseleave', titleCase: 'Mouse Leave' }
];

export const DEFAULT_COLOR_FORMAT = 'rgb';
export const DEFAULT_DEVICE_ORIENTATION = 'Portrait';

export const DEFAULT_LEFT_SIDEBAR_WIDTH = 320;
export const DEFAULT_RIGHT_SIDEBAR_WIDTH = 264;
export const DEFAULT_TWEEN_DRAWER_HEIGHT = 320;
export const DEFAULT_TWEEN_DRAWER_LAYERS_WIDTH = 224;

export const DEFAULT_ROUNDED_RADIUS = 0.15;
export const DEFAULT_POLYGON_SIDES = 5;
export const DEFAULT_STAR_POINTS = 5;
export const DEFAULT_STAR_RADIUS = 0.5;
export const DEFAULT_SHAPE_WIDTH = 200;
export const DEFAULT_SHAPE_HEIGHT = 200;
export const DEFAULT_LINE_FROM_X = -0.5;
export const DEFAULT_LINE_FROM_Y = 0;
export const DEFAULT_LINE_FROM = { x: DEFAULT_LINE_FROM_X, y: DEFAULT_LINE_FROM_Y };
export const DEFAULT_LINE_TO_X = 0.5;
export const DEFAULT_LINE_TO_Y = 0;
export const DEFAULT_LINE_TO = { x: DEFAULT_LINE_TO_X, y: DEFAULT_LINE_TO_Y };

export const PREVIEW_TOPBAR_HEIGHT = 44;

export const MAC_TITLEBAR_HEIGHT = 22;
export const WINDOWS_TITLEBAR_HEIGHT = 30;

export const DEFAULT_GRADIENT_TYPE = 'linear';
export const DEFAULT_GRADIENT_ACTIVE_STOP_INDEX = 0;
export const DEFAULT_GRADIENT_ORIGIN_X = -0.5;
export const DEFAULT_GRADIENT_ORIGIN_Y = 0.5;
export const DEFAULT_GRADIENT_ORIGIN = { x: DEFAULT_GRADIENT_ORIGIN_X, y: DEFAULT_GRADIENT_ORIGIN_Y };
export const DEFAULT_GRADIENT_DESTINATION_X = 0.5;
export const DEFAULT_GRADIENT_DESTINATION_Y = -0.5;
export const DEFAULT_GRADIENT_DESTINATION = { x: DEFAULT_GRADIENT_DESTINATION_X, y: DEFAULT_GRADIENT_DESTINATION_Y };
export const DEFAULT_GRADIENT_STOP_0_POSITION = 0;
export const DEFAULT_GRADIENT_STOP_0_COLOR = { h: 0, s: 0, l: 0.8, v: 0.8, a: 1 };
export const DEFAULT_GRADIENT_STOP_0 = { position: DEFAULT_GRADIENT_STOP_0_POSITION, color: DEFAULT_GRADIENT_STOP_0_COLOR };
export const DEFAULT_GRADIENT_STOP_1_POSITION = 1;
export const DEFAULT_GRADIENT_STOP_1_COLOR = { h: 0, s: 0, l: 0, v: 0, a: 1 };
export const DEFAULT_GRADIENT_STOP_1 = { position: DEFAULT_GRADIENT_STOP_1_POSITION, color: DEFAULT_GRADIENT_STOP_1_COLOR };
export const DEFAULT_GRADIENT_STOPS = [DEFAULT_GRADIENT_STOP_0, DEFAULT_GRADIENT_STOP_1];

export const THEME_DARK_BACKGROUND_MIN = '#111';
export const THEME_LIGHT_BACKGROUND_MIN = '#f7f7f7';
export const THEME_DARK_BACKGROUND_MAX = '#555';
export const THEME_LIGHT_BACKGROUND_MAX = '#ccc';

export const DEFAULT_GRADIENT_STYLE: Btwx.Gradient = {
  gradientType: DEFAULT_GRADIENT_TYPE,
  origin: DEFAULT_GRADIENT_ORIGIN,
  destination: DEFAULT_GRADIENT_DESTINATION,
  activeStopIndex: DEFAULT_GRADIENT_ACTIVE_STOP_INDEX,
  stops: DEFAULT_GRADIENT_STOPS
}

export const DEFAULT_FILL_FILL_TYPE = 'color';
export const DEFAULT_FILL_COLOR = { h: 0, s: 0, l: 0.8, v: 0.8, a: 1 };

export const DEFAULT_FILL_STYLE: Btwx.Fill = {
  fillType: DEFAULT_FILL_FILL_TYPE,
  enabled: true,
  color: DEFAULT_FILL_COLOR,
  gradient: DEFAULT_GRADIENT_STYLE
}

export const DEFAULT_STROKE_FILL_TYPE = 'color';
export const DEFAULT_STROKE_COLOR = { h: 0, s: 0, l: 0.6, v: 0.6, a: 1 };
export const DEFAULT_STROKE_WIDTH = 1;

export const DEFAULT_STROKE_STYLE: Btwx.Stroke = {
  fillType: DEFAULT_STROKE_FILL_TYPE,
  enabled: true,
  color: DEFAULT_STROKE_COLOR,
  width: DEFAULT_STROKE_WIDTH,
  gradient: DEFAULT_GRADIENT_STYLE
}

export const DEFAULT_STROKE_CAP = 'butt';
export const DEFAULT_STROKE_JOIN = 'miter';
export const DEFAULT_STROKE_DASH_ARRAY_WIDTH = 0;
export const DEFAULT_STROKE_DASH_ARRAY_GAP = 0;
export const DEFAULT_STROKE_DASH_ARRAY = [DEFAULT_STROKE_DASH_ARRAY_WIDTH, DEFAULT_STROKE_DASH_ARRAY_GAP];
export const DEFAULT_STROKE_DASH_OFFSET = 0;

export const DEFAULT_STROKE_OPTIONS_STYLE: Btwx.StrokeOptions = {
  cap: DEFAULT_STROKE_CAP,
  join: DEFAULT_STROKE_JOIN,
  dashArray: DEFAULT_STROKE_DASH_ARRAY,
  dashOffset: DEFAULT_STROKE_DASH_OFFSET,
}

export const DEFAULT_SHADOW_FILL_TYPE = 'color';
export const DEFAULT_SHADOW_COLOR = { h: 0, s: 0, l: 0, v: 0, a: 0.5 };
export const DEFAULT_SHADOW_BLUR = 10;
export const DEFAULT_SHADOW_OFFSET_X = 0;
export const DEFAULT_SHADOW_OFFSET_Y = 0;
export const DEFAULT_SHADOW_OFFSET = { x: DEFAULT_SHADOW_OFFSET_X, y: DEFAULT_SHADOW_OFFSET_Y };

export const DEFAULT_SHADOW_STYLE: Btwx.Shadow = {
  fillType: DEFAULT_SHADOW_FILL_TYPE,
  enabled: false,
  color: DEFAULT_SHADOW_COLOR,
  blur: DEFAULT_SHADOW_BLUR,
  offset: DEFAULT_SHADOW_OFFSET
}

export const DEFAULT_OPACITY = 1;
export const DEFAULT_BLEND_MODE = 'normal';

export const DEFAULT_STYLE: Btwx.Style = {
  fill: DEFAULT_FILL_STYLE,
  stroke: DEFAULT_STROKE_STYLE,
  strokeOptions: DEFAULT_STROKE_OPTIONS_STYLE,
  shadow: DEFAULT_SHADOW_STYLE,
  opacity: DEFAULT_OPACITY,
  blendMode: DEFAULT_BLEND_MODE
}

export const DEFAULT_ROTATION = 0;
export const DEFAULT_VERTICAL_FLIP = false;
export const DEFAULT_HORIZONTAL_FLIP = false;

export const DEFAULT_TRANSFORM: Btwx.Transform = {
  rotation: DEFAULT_ROTATION,
  horizontalFlip: DEFAULT_HORIZONTAL_FLIP,
  verticalFlip: DEFAULT_VERTICAL_FLIP
}

export const DEFAULT_TEXT_VALUE = 'Type Something';
export const DEFAULT_FONT_SIZE = 12;
export const DEFAULT_FONT_FAMILY = 'Helvetica';
export const DEFAULT_FONT_WEIGHT = 400;
export const DEFAULT_OBLIQUE = 0;
export const DEFAULT_JUSTIFICATION = 'left';
export const DEFAULT_LETTER_SPACING = 0;
export const DEFAULT_LEADING = 16;
export const DEFAULT_TEXT_FILL_COLOR = { h: 0, s: 0, l: 0, v: 0, a: 1 };

export const DEFAULT_TEXT_STYLE: Btwx.TextStyle = {
  fontSize: DEFAULT_FONT_SIZE,
  leading: DEFAULT_LEADING,
  fontWeight: DEFAULT_FONT_WEIGHT,
  fontFamily: DEFAULT_FONT_FAMILY,
  oblique: DEFAULT_OBLIQUE,
  justification: DEFAULT_JUSTIFICATION,
  letterSpacing: DEFAULT_LETTER_SPACING
}

export const APPLE_IPHONE_DEVICES: Btwx.Device[] = [
  {
    type: 'iPhone 8',
    category: 'Apple',
    width: 375,
    height: 667
  }, {
    type: 'iPhone 8 Plus',
    category: 'Apple',
    width: 414,
    height: 736
  }, {
    type: 'iPhone SE',
    category: 'Apple',
    width: 320,
    height: 568
  }, {
    type: 'iPhone 11 Pro',
    category: 'Apple',
    width: 375,
    height: 812
  }, {
    type: 'iPhone 11',
    category: 'Apple',
    width: 414,
    height: 896
  }, {
    type: 'iPhone 11 Pro Max',
    category: 'Apple',
    width: 414,
    height: 896
  }
];

export const APPLE_IPAD_DEVICES: Btwx.Device[] = [
  {
    type: '7.9" iPad mini',
    category: 'Apple',
    width: 768,
    height: 1024
  }, {
    type: '10.2" iPad',
    category: 'Apple',
    width: 810,
    height: 1080
  }, {
    type: '10.5" iPad Air',
    category: 'Apple',
    width: 835,
    height: 1112
  }, {
    type: '11" iPad Pro',
    category: 'Apple',
    width: 834,
    height: 1194
  }, {
    type: '12.9" iPad Pro',
    category: 'Apple',
    width: 1024,
    height: 1366
  }
];

export const APPLE_WATCH_DEVICES: Btwx.Device[] = [
  {
    type: 'Apple Watch 38mm',
    category: 'Apple',
    width: 136,
    height: 170
  }, {
    type: 'Apple Watch 40mm',
    category: 'Apple',
    width: 162,
    height: 197
  }, {
    type: 'Apple Watch 42mm',
    category: 'Apple',
    width: 156,
    height: 195
  }, {
    type: 'Apple Watch 44mm',
    category: 'Apple',
    width: 184,
    height: 224
  }
];

export const APPLE_TV_DEVICES: Btwx.Device[] = [
  {
    type: 'Apple TV',
    category: 'Apple',
    width: 1920,
    height: 1028
  }
];

export const APPLE_MAC_DEVICES: Btwx.Device[] = [
  {
    type: 'Touch Bar',
    category: 'Apple',
    width: 1085,
    height: 30
  }
];

export const APPLE_DEVICES: Btwx.DeviceCategory[] = [
  {
    type: 'iPhone',
    devices: APPLE_IPHONE_DEVICES
  }, {
    type: 'iPad',
    devices: APPLE_IPAD_DEVICES
  }, {
    type: 'Apple Watch',
    devices: APPLE_WATCH_DEVICES
  }, {
    type: 'Apple TV',
    devices: APPLE_TV_DEVICES
  }, {
    type: 'Mac',
    devices: APPLE_MAC_DEVICES
  }
];

export const ANDROID_MOBILE_DEVICES: Btwx.Device[] = [
  {
    type: 'Android',
    category: 'Android',
    width: 360,
    height: 640
  }, {
    type: 'Pixel 2',
    category: 'Android',
    width: 412,
    height: 732
  }, {
    type: 'Pixel 2 XL',
    category: 'Android',
    width: 360,
    height: 720
  }, {
    type: 'Pixel 3',
    category: 'Android',
    width: 360,
    height: 720
  }, {
    type: 'Pixel 3 XL',
    category: 'Android',
    width: 360,
    height: 740
  }, {
    type: 'Galaxy S10e',
    category: 'Android',
    width: 360,
    height: 760
  }, {
    type: 'Galaxy S10',
    category: 'Android',
    width: 360,
    height: 760
  }, {
    type: 'Galaxy S10+',
    category: 'Android',
    width: 360,
    height: 760
  }
];

export const ANDROID_TABLET_DEVICES: Btwx.Device[] = [
  {
    type: 'Nexus 7',
    category: 'Android',
    width: 600,
    height: 960
  }, {
    type: 'Nexus 9',
    category: 'Android',
    width: 768,
    height: 1024
  }, {
    type: 'Nexus 10',
    category: 'Android',
    width: 800,
    height: 1280
  }
];

export const ANDROID_CHROMEBOOK_DEVICES: Btwx.Device[] = [
  {
    type: 'Pixel State',
    category: 'Android',
    width: 1333,
    height: 888
  }, {
    type: 'Pixelbook',
    category: 'Android',
    width: 1200,
    height: 800
  }
];

export const ANDROID_DEVICES: Btwx.DeviceCategory[] = [
  {
    type: 'Common Mobile',
    devices: ANDROID_MOBILE_DEVICES
  }, {
    type: 'Common Tablet',
    devices: ANDROID_TABLET_DEVICES
  }, {
    type: 'Chromebook',
    devices: ANDROID_CHROMEBOOK_DEVICES
  }
];

export const RESPONSIVE_WEB_MOBILE_DEVICES: Btwx.Device[] = [
  {
    type: 'Mobile',
    category: 'Responsive Web',
    width: 320,
    height: 1024
  }
];

export const RESPONSIVE_WEB_TABLET_DEVICES: Btwx.Device[] = [
  {
    type: 'Tablet',
    category: 'Responsive Web',
    width: 768,
    height: 1024
  }
];

export const RESPONSIVE_WEB_DESKTOP_DEVICES: Btwx.Device[] = [
  {
    type: 'Desktop',
    category: 'Responsive Web',
    width: 1024,
    height: 1024
  }, {
    type: 'Desktop HD',
    category: 'Responsive Web',
    width: 1440,
    height: 1024
  }
];

export const RESPONSIVE_WEB_DEVICES: Btwx.DeviceCategory[] = [
  {
    type: 'Mobile',
    devices: RESPONSIVE_WEB_MOBILE_DEVICES
  }, {
    type: 'Tablet',
    devices: RESPONSIVE_WEB_TABLET_DEVICES
  }, {
    type: 'Desktop',
    devices: RESPONSIVE_WEB_DESKTOP_DEVICES
  }
];

export const DEVICES: Btwx.DevicePlatform[] = [
  {
    type: 'Apple',
    categories: APPLE_DEVICES
  }, {
    type: 'Android',
    categories: ANDROID_DEVICES
  }, {
    type: 'Responsive Web',
    categories: RESPONSIVE_WEB_DEVICES
  }
];

export const DEFAULT_WINDOWS_DEVICE_NAME = 'Galaxy S10e';
export const DEFAULT_MAC_DEVICE_NAME = 'iPhone 11 Pro';

export const DEFAULT_WINDOWS_DEVICE = ANDROID_MOBILE_DEVICES.find((device) => device.type === DEFAULT_WINDOWS_DEVICE_NAME);
export const DEFAULT_MAC_DEVICE = APPLE_IPHONE_DEVICES.find((device) => device.type === DEFAULT_MAC_DEVICE_NAME);