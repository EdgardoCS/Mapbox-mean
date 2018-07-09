function sistam_window() {
  
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;

  var sisWindow = new BrowserWindow({
    width: 2000,
    height: 1200,
    minWidth: 420,
    minHeight: 480,
    center: true,
    autoHideMenuBar: true,
    fullscreen: false
  });

  sisWindow.openDevTools();
  sisWindow.loadURL('file://' + __dirname + '/main.html');
  sisWindow.on('closed', function() {
    auxWindow = null;
  });

  sisWindow.webContents.on('did-finish-load', () => {
    sisWindow.show();
    sisWindow.focus();
  });
}
