import React, { ReactElement, useEffect } from 'react';
import * as fontFinder from 'font-finder';
import { useSelector, useDispatch } from 'react-redux';
import { setTextSettingsSystemFonts, setTextSettingsReady } from '../store/actions/textSettings';
import { WEB_SAFE_FONTS } from '../constants';
import { RootState } from '../store/reducers';
import Topbar from './Topbar';
import EaseEditorWrap from './EaseEditorWrap';
import ArtboardPresetEditorWrap from './ArtboardPresetEditorWrap';
import DocumentImages from './DocumentImages';
import Titlebar from './Titlebar';
import AutoSaver from './AutoSaver';
import AppMain from './AppMain';

const App = (): ReactElement => {
  const theme = useSelector((state: RootState) => state.preferences.theme);
  const platform = useSelector((state: RootState) => state.session.platform);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const fontList = await fontFinder.list();
      const compiledFontList = [...WEB_SAFE_FONTS, ...Object.keys(fontList)].reduce((result: string[], current) => {
        if (!result.includes(current) && !current.startsWith('.')) {
          result = [...result, current];
        }
        return result;
      }, []).sort();
      dispatch(setTextSettingsSystemFonts({systemFonts: compiledFontList}));
      dispatch(setTextSettingsReady());
    })();
  }, []);

  return (
    <div
      id='app'
      className={`
        c-app
        theme--${theme}
        ${`os--${platform === 'darwin' ? 'mac' : 'windows'}`}`
      }>
        {/* flex items */}
        <Titlebar />
        <Topbar />
        <AppMain />
        {/* abs elements */}
        <EaseEditorWrap />
        <ArtboardPresetEditorWrap />
        <DocumentImages />
        <AutoSaver />
    </div>
  );
}

export default App;