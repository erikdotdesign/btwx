export const SET_TEXT_SETTINGS = 'SET_TEXT_SETTINGS';
export const SET_TEXT_SETTINGS_FILL_COLOR = 'SET_TEXT_SETTINGS_FILL_COLOR';
export const SET_TEXT_SETTINGS_FONT_SIZE = 'SET_TEXT_SETTINGS_FONT_SIZE';
export const SET_TEXT_SETTINGS_FONT_WEIGHT = 'SET_TEXT_SETTINGS_FONT_WEIGHT';
export const SET_TEXT_SETTINGS_FONT_FAMILY = 'SET_TEXT_SETTINGS_FONT_FAMILY';
export const SET_TEXT_SETTINGS_LETTER_SPACING = 'SET_TEXT_SETTINGS_LETTER_SPACING';
export const SET_TEXT_SETTINGS_LEADING = 'SET_TEXT_SETTINGS_LEADING';
export const SET_TEXT_SETTINGS_JUSTIFICATION = 'SET_TEXT_SETTINGS_JUSTIFICATION';
export const SET_TEXT_SETTINGS_SYSTEM_FONTS = 'SET_TEXT_SETTINGS_SYSTEM_FONTS';
export const SET_TEXT_SETTINGS_READY = 'SET_TEXT_SETTINGS_READY';
export const SET_TEXT_SETTINGS_TEXT_TRANSFORM = 'SET_TEXT_SETTINGS_TEXT_TRANSFORM';
export const SET_TEXT_SETTINGS_FONT_STYLE = 'SET_TEXT_SETTINGS_FONT_STYLE';

export type SetTextSettingsPayload = {
  [P in keyof Btwx.TextStyle]?: Btwx.TextStyle[P];
} & { fillColor?: Btwx.Color }

export interface SetTextSettings {
  type: typeof SET_TEXT_SETTINGS;
  payload: SetTextSettingsPayload;
}

export interface SetTextSettingsFillColorPayload {
  fillColor: Btwx.Color;
}

export interface SetTextSettingsFillColor {
  type: typeof SET_TEXT_SETTINGS_FILL_COLOR;
  payload: SetTextSettingsFillColorPayload;
}

export interface SetTextSettingsFontSizePayload {
  fontSize: number;
}

export interface SetTextSettingsFontSize {
  type: typeof SET_TEXT_SETTINGS_FONT_SIZE;
  payload: SetTextSettingsFontSizePayload;
}

export interface SetTextSettingsFontWeightPayload {
  fontWeight: Btwx.FontWeight;
}

export interface SetTextSettingsFontWeight {
  type: typeof SET_TEXT_SETTINGS_FONT_WEIGHT;
  payload: SetTextSettingsFontWeightPayload;
}

export interface SetTextSettingsFontFamilyPayload {
  fontFamily: string;
}

export interface SetTextSettingsFontFamily {
  type: typeof SET_TEXT_SETTINGS_FONT_FAMILY;
  payload: SetTextSettingsFontFamilyPayload;
}

export interface SetTextSettingsLetterSpacingPayload {
  letterSpacing: number;
}

export interface SetTextSettingsLetterSpacing {
  type: typeof SET_TEXT_SETTINGS_LETTER_SPACING;
  payload: SetTextSettingsLetterSpacingPayload;
}

export interface SetTextSettingsLeadingPayload {
  leading: number;
}

export interface SetTextSettingsLeading {
  type: typeof SET_TEXT_SETTINGS_LEADING;
  payload: SetTextSettingsLeadingPayload;
}

export interface SetTextSettingsTextTransformPayload {
  textTransform: Btwx.TextTransform;
}

export interface SetTextSettingsTextTransform {
  type: typeof SET_TEXT_SETTINGS_TEXT_TRANSFORM;
  payload: SetTextSettingsTextTransformPayload;
}

export interface SetTextSettingsFontStylePayload {
  fontStyle: Btwx.FontStyle;
}

export interface SetTextSettingsFontStyle {
  type: typeof SET_TEXT_SETTINGS_FONT_STYLE;
  payload: SetTextSettingsFontStylePayload;
}

export interface SetTextSettingsJustificationPayload {
  justification: Btwx.Jusftification;
}

export interface SetTextSettingsJustification {
  type: typeof SET_TEXT_SETTINGS_JUSTIFICATION;
  payload: SetTextSettingsJustificationPayload;
}

export interface SetTextSettingsSystemFontsPayload {
  systemFonts: string[];
}

export interface SetTextSettingsSystemFonts {
  type: typeof SET_TEXT_SETTINGS_SYSTEM_FONTS;
  payload: SetTextSettingsSystemFontsPayload;
}

export interface SetTextSettingsReady {
  type: typeof SET_TEXT_SETTINGS_READY;
}

export type TextSettingsTypes = SetTextSettings |
                                SetTextSettingsFillColor |
                                SetTextSettingsFontSize |
                                SetTextSettingsFontWeight |
                                SetTextSettingsFontFamily |
                                SetTextSettingsLetterSpacing |
                                SetTextSettingsLeading |
                                SetTextSettingsJustification |
                                SetTextSettingsTextTransform |
                                SetTextSettingsFontStyle |
                                SetTextSettingsSystemFonts |
                                SetTextSettingsReady;