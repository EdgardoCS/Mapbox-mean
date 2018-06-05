const remote = require('electron').remote;

var fs = require('fs');

function openFile() {


  dialog.showOpenDialog({
    filters: [{
      name: 'geojson',
      extension: ['geojson']
    }]
  }, function(Name) {
    if (Name === undefined) return;
    var Name = Name[0];
    fs.readFile(Name, 'utf-8', function(err, data) {
      console.log(data);


    });
  });
}
