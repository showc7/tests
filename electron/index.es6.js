let app = require('app');
let BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready',() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  //mainWindow.setMenu(null);
  mainWindow.loadUrl('file://' + __dirname + '/../build/index.html');
  mainWindow.webContents.on('did-finich-load',() => {
    mainWindow.setTitle(app.getName());
  });
  mainWindow.on('closed',() => {
    mainWindow = null;
  });
});
