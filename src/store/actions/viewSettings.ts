import { paperMain } from '../../canvas';
import { RootState } from '../reducers';
import { updateInViewLayers } from './layer';
import { setCanvasMatrix } from './documentSettings';

import {
  SET_LEFT_SIDEBAR_WIDTH,
  SET_RIGHT_SIDEBAR_WIDTH,
  SET_TWEEN_DRAWER_HEIGHT,
  SET_TWEEN_DRAWER_LAYERS_WIDTH,
  OPEN_RIGHT_SIDEBAR,
  CLOSE_RIGHT_SIDEBAR,
  OPEN_LEFT_SIDEBAR,
  CLOSE_LEFT_SIDEBAR,
  OPEN_TWEEN_DRAWER,
  CLOSE_TWEEN_DRAWER,
  ENABLE_DARK_THEME,
  ENABLE_LIGHT_THEME,
  SetLeftSidebarWidthPayload,
  SetRightSidebarWidthPayload,
  SetTweenDrawerHeightPayload,
  SetTweenDrawerLayersWidthPayload,
  ViewSettingsTypes
} from '../actionTypes/viewSettings';

export const setLeftSidebarWidth = (payload: SetLeftSidebarWidthPayload): ViewSettingsTypes => ({
  type: SET_LEFT_SIDEBAR_WIDTH,
  payload
});

export const setRightSidebarWidth = (payload: SetRightSidebarWidthPayload): ViewSettingsTypes => ({
  type: SET_RIGHT_SIDEBAR_WIDTH,
  payload
});

export const setTweenDrawerHeight = (payload: SetTweenDrawerHeightPayload): ViewSettingsTypes => ({
  type: SET_TWEEN_DRAWER_HEIGHT,
  payload
});

export const setTweenDrawerLayersWidth = (payload: SetTweenDrawerLayersWidthPayload): ViewSettingsTypes => ({
  type: SET_TWEEN_DRAWER_LAYERS_WIDTH,
  payload
});

export const openRightSidebar = (): ViewSettingsTypes => ({
  type: OPEN_RIGHT_SIDEBAR
});

export const closeRightSidebar = (): ViewSettingsTypes => ({
  type: CLOSE_RIGHT_SIDEBAR
});

export const toggleRightSidebarThunk = () => {
  return (dispatch: any, getState: any): void => {
    const state = getState() as RootState;
    if (state.viewSettings.rightSidebar.isOpen) {
      paperMain.view.viewSize = new paperMain.Size(paperMain.view.viewSize.width + state.viewSettings.rightSidebar.width, paperMain.view.viewSize.height);
      dispatch(closeRightSidebar());
    } else {
      paperMain.view.viewSize = new paperMain.Size(paperMain.view.viewSize.width - state.viewSettings.rightSidebar.width, paperMain.view.viewSize.height);
      dispatch(openRightSidebar());
    }
    dispatch(setCanvasMatrix({matrix: paperMain.view.matrix.values}));
    dispatch(updateInViewLayers());
  }
};

export const openLeftSidebar = (): ViewSettingsTypes => ({
  type: OPEN_LEFT_SIDEBAR
});

export const closeLeftSidebar = (): ViewSettingsTypes => ({
  type: CLOSE_LEFT_SIDEBAR
});

export const toggleLeftSidebarThunk = () => {
  return (dispatch: any, getState: any): void => {
    const state = getState() as RootState;
    if (state.viewSettings.leftSidebar.isOpen) {
      paperMain.view.viewSize = new paperMain.Size(paperMain.view.viewSize.width + state.viewSettings.leftSidebar.width, paperMain.view.viewSize.height);
      dispatch(closeLeftSidebar());
    } else {
      paperMain.view.viewSize = new paperMain.Size(paperMain.view.viewSize.width - state.viewSettings.leftSidebar.width, paperMain.view.viewSize.height);
      dispatch(openLeftSidebar());
    }
    dispatch(setCanvasMatrix({matrix: paperMain.view.matrix.values}));
    dispatch(updateInViewLayers());
  }
};

export const openTweenDrawer = (): ViewSettingsTypes => ({
  type: OPEN_TWEEN_DRAWER
});

export const closeTweenDrawer = (): ViewSettingsTypes => ({
  type: CLOSE_TWEEN_DRAWER
});

export const toggleTweenDrawerThunk = () => {
  return (dispatch: any, getState: any): void => {
    const state = getState() as RootState;
    if (state.viewSettings.tweenDrawer.isOpen) {
      paperMain.view.viewSize = new paperMain.Size(paperMain.view.viewSize.width, paperMain.view.viewSize.height + state.viewSettings.tweenDrawer.height);
      dispatch(closeTweenDrawer());
    } else {
      paperMain.view.viewSize = new paperMain.Size(paperMain.view.viewSize.width, paperMain.view.viewSize.height - state.viewSettings.tweenDrawer.height);
      dispatch(openTweenDrawer());
    }
    dispatch(setCanvasMatrix({matrix: paperMain.view.matrix.values}));
    dispatch(updateInViewLayers());
  }
};

export const enableDarkTheme = (): ViewSettingsTypes => ({
  type: ENABLE_DARK_THEME
});

export const enableLightTheme = (): ViewSettingsTypes => ({
  type: ENABLE_LIGHT_THEME
});