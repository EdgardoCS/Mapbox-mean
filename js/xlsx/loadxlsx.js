/* from app code, require('electron').remote calls back to main process */
var dialog = require('electron').remote.dialog;

/* show a file-open dialog and read the first selected file */
var o = dialog.showOpenDialog({ properties: ['openFile'] });
var workbook = X.readFile(o[0]);

/* show a file-save dialog and write the workbook */
/*
var o = dialog.showSaveDialog();
XLSX.writeFile(workbook, o);
*/
