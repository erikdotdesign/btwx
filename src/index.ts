/* eslint-disable @typescript-eslint/no-use-before-define */
import electron, { app, BrowserWindow, ipcMain, systemPreferences, Menu, shell } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

if (!systemPreferences.getUserDefault('theme', 'string')) {
  systemPreferences.setUserDefault('theme', 'string', 'dark');
}

let mainWindow: electron.BrowserWindow;
let previewWindow: electron.BrowserWindow;
let preferencesWindow: electron.BrowserWindow;
const isMac = process.platform === 'darwin';

const template = [
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
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

const createWindow = (): void => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    titleBarStyle: 'hidden'
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.webContents.session.clearStorageData();

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.session.clearStorageData().then(() => {
      mainWindow.webContents.executeJavaScript(`renderMainWindow()`);
    });
  });
};

const createPreferencesWindow = (): void => {
  preferencesWindow = new BrowserWindow({
    parent: mainWindow,
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    titleBarStyle: 'hidden',
    show: false
  });

  preferencesWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  preferencesWindow.webContents.openDevTools();

  preferencesWindow.webContents.on('did-finish-load', () => {
    preferencesWindow.webContents.executeJavaScript(`renderPreferencesWindow()`).then(() => {
      preferencesWindow.show();
    });
  });

  preferencesWindow.on('close', () => {
    preferencesWindow = null;
  });
}

const createPreviewWindow = (width: number, height: number): void => {
  previewWindow = new BrowserWindow({
    parent: mainWindow,
    minWidth: width,
    minHeight: height,
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    titleBarStyle: 'hidden'
  });

  previewWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  previewWindow.webContents.openDevTools();

  previewWindow.webContents.on('did-finish-load', () => {
    previewWindow.webContents.executeJavaScript(`renderPreviewWindow()`);
  });

  previewWindow.on('close', () => {
    previewWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
ipcMain.on('openPreview', (event, activeArtboard) => {
  const artboard = JSON.parse(activeArtboard);
  createPreviewWindow(artboard.frame.width, artboard.frame.height);
});

ipcMain.on('updateTheme', (event, theme) => {
  systemPreferences.setUserDefault('theme', 'string', theme);

  if (mainWindow.webContents) {
    mainWindow.webContents.executeJavaScript(`updateTheme()`);
  }
  if (previewWindow.webContents) {
    previewWindow.webContents.executeJavaScript(`updateTheme()`);
  }
  if (preferencesWindow.webContents) {
    preferencesWindow.webContents.executeJavaScript(`updateTheme()`);
  }
});