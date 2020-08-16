import { app, BrowserWindow, ipcMain } from 'electron';
import { spawn } from 'child_process';

app.on('ready', () => {
  const win = new BrowserWindow();

  win.loadFile('../../renderer/dist/index.html');

  win.webContents.openDevTools();
});

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.on('message', () => {});

spawn('notepad');
