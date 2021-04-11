import React, { ReactElement, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { ipcRenderer } from 'electron';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const AutoSaver = (): ReactElement => {
  const autoSave = useSelector((state: RootState) => state.preferences.autoSave);
  const edit = useSelector((state: RootState) => state.layer.present.edit);
  const documentPath = useSelector((state: RootState) => state.documentSettings.path);

  const debounceSave = useCallback(debounce(() => {
    ipcRenderer.send('saveInstance');
  }, 500), []);

  useEffect(() => {
    if (edit.undoable && autoSave && documentPath) {
      debounceSave();
    }
  }, [edit, autoSave, documentPath]);

  return null;
}

export default AutoSaver;