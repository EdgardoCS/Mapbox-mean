var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
const {
  crashReporter
} = require('electron');

const shell = require('electron').shell;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({

    width: 1800,
    height: 800,
    minWidth: 420,
    minHeight: 480,
    center: true,
    autoHideMenuBar: true,
    fullscreen: false
  });


  mainWindow.openDevTools();

  // mainWindow.loadURL('file://' + __dirname + '/src/html/mapIndex.html');
  // mainWindow.loadURL('file://' + __dirname + '/src/html/main.html');
  // mainWindow.loadURL('file://' + __dirname + '/src/html/welcome.html');
  mainWindow.loadURL('file://' + __dirname + '/src/html/test/test.html');

  mainWindow.webContents.on('will-navigate', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)

  })

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

crashReporter.start({
  productName: 'Geropolis DesktopApp',
  companyName: 'Universidad de Valparaiso',
  submitURL: 'https://0.0.0.0:4242',
  autoSubmit: false
});
