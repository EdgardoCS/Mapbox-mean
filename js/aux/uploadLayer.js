function loadFeature() {

  fs = require('fs')
  var really = require('../auxJs/editLayer.js');

  fs.readFile('./geojson/data.geojson', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    really.real(data);

  });
}
