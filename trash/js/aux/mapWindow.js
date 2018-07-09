function mapWindow() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;

  var auxWindow = new BrowserWindow({
    width: 1600,
    height: 800,
    minWidth: 420,
    minHeight: 480,
    autoHideMenuBar: true,
    fullscreen: false
  });

  auxWindow.openDevTools();
  auxWindow.loadURL('file://' + __dirname + '/mapIndex.html');
  auxWindow.on('closed', function() {
    auxWindow = null;
  });

  auxWindow.webContents.on('did-finish-load', () => {
    auxWindow.show();
    auxWindow.focus();
  });
}
