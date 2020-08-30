import electron, { app, BrowserWindow, Menu, dialog } from 'electron';
import { createPreferencesWindow, createNewDocument, preferencesWindow, handleSave, handleSaveAs, handleOpenDocument } from './index';

const isMac = process.platform === 'darwin';

const getFocusedDocument = (): electron.BrowserWindow => {
  return BrowserWindow.getFocusedWindow() ? BrowserWindow.getFocusedWindow().getParentWindow() ? BrowserWindow.getFocusedWindow().getParentWindow() : BrowserWindow.getFocusedWindow() : null;
}

export default Menu.buildFromTemplate([
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      {
        label: 'Preferences',
        click: () => {
          if (!preferencesWindow) {
            createPreferencesWindow();
          }
        }
      },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      {
        label: 'New',
        accelerator: process.platform === 'darwin' ? 'Cmd+N' : 'Ctrl+N',
        click: () => {
          // if document already open, set new document size to focused document size
          const focusedDocument = getFocusedDocument();
          if (focusedDocument) {
            const size = focusedDocument.getSize();
            createNewDocument(size[0], size[1]);
          } else {
            createNewDocument();
          }
        }
      },
      {
        label: 'Save',
        accelerator: process.platform === 'darwin' ? 'Cmd+S' : 'Ctrl+S',
        // enabled: getFocusedDocument(),
        click: () => {
          const document = getFocusedDocument();
          document.webContents.executeJavaScript(`getDocumentSettings()`).then((documentSettingsJSON) => {
            const documentSettings = JSON.parse(documentSettingsJSON);
            if (documentSettings.path) {
              handleSave(documentSettings.path);
            } else {
              handleSaveAs();
            }
          });
        }
      },
      {
        label: 'Save As...',
        accelerator: process.platform === 'darwin' ? 'Cmd+Shift+S' : 'Ctrl+Shift+S',
        // enabled: getFocusedDocument(),
        click: () => {
          handleSaveAs();
        }
      },
      {
        label: 'Open...',
        accelerator: process.platform === 'darwin' ? 'Cmd+O' : 'Ctrl+O',
        click: () => {
          const document = getFocusedDocument();
          dialog.showOpenDialog(document, {
            filters: [
              { name: 'Custom File Type', extensions: ['esketch'] }
            ],
            properties: ['openFile']
          }).then((result) => {
            if (result.filePaths.length > 0 && !result.canceled) {
              handleOpenDocument(result.filePaths[0]);
            }
          });
        }
      },
      {
        label: 'Open Recent',
        role: 'recentDocuments',
        submenu: [
          {
            role: 'clearRecentDocuments'
          }
        ]
      },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startspeaking' },
            { role: 'stopspeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  }
] as any);