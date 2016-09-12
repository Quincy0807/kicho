const { app, BrowserWindow } = require('electron');
const shell = require('shelljs');

let win;
app.on('ready', () => {
  win = new BrowserWindow({ backgroundColor: '#996ca2', width: 800, height: 800 });
  win.loadURL(`file://${__dirname}/dist/kicho.html`);
  win.on('closed', () => {
    win = null;
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
