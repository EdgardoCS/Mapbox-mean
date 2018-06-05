var doom;

var sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve('src/db', 'gisTest.db')
var db = new sqlite3.Database(dbPath);

db.serialize(function() {
  db.each("SELECT recorrido_taxicolectivos FROM transporte ", function(err, row) {
    knightrider(row);
  });
});
db.close();

knightrider = function(row) {
  var wizard = JSON.parse(row.recorrido_taxicolectivos);
  map.on('load', function() {
    map.addLayer(wizard);
  });
}
