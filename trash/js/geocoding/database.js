
var data = require(path.resolve('js/geocoding', './geocoding.js'));
var sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve('src/db','ams.db')
var db = new sqlite3.Database(dbPath);


db.all("SELECT * FROM agentes", function(err, row) {
  if (row == null) {
    console.log("Error: Celda Vacía");

  } else {
    for (i = 17; i < 20; i++) {
      // data.togeocoding(row[i].Rut, row[i].Nombre, row[i].Direccion, db);
      data.togeocoding(row[i].n, row[i].nombre, row[i].direccion, db);
    }
  }
});
