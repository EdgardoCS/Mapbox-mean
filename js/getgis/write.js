var sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve('src/db', 'gisTest.db')
var db = new sqlite3.Database(dbPath);

var table;
var column;
var geonew;

exports.wah = function(div_source) {
  geonew = div_source;
  table = "politico_administrativa";
  if (geonew.id == "Limite_Comunal") {
    column = "limite_comunal";
  }
  if (geonew.id == "Limite_Urbano") {
    column = "limite_urbano";
  }
  if (geonew.id == "Plazas") {
    column = "plazas";
  }
  if (geonew.id == "Sectores_dideco") {
    column = "sectores_dideco";
  }
  if (geonew.id == "Unidades_vecinales") {
    column = "uv_2016";
  }

  var object = JSON.stringify(geonew);
  mojopin(object, table, column);
}

exports.beat = function(lev_source) {
  geonew = lev_source;
  table = "levantamiento";
  if (geonew.id == "juntas_vecinos") {
    column = "juntas_vecinos";
  }
  if (geonew.id == "levantamiento_completo") {
    column = "levantamiento_completo";
  }

  var object = JSON.stringify(geonew);
  mojopin(object, table, column);
}

exports.water = function(sal_source) {
  geonew = sal_source;
  table = "salud";
  if (geonew.id == "escolumncimientos_hospitalarios") {
    column = "escolumncimientos_hospitalarios";
  }
  if (geonew.id == "escolumncimientos_salud") {
    column = "escolumncimientos_salud";
  }
  if (geonew.id == "seremi_salud") {
    column = "seremi_salud";
  }
  if (geonew.id == "servicios_salud") {
    column = "servicios_salud";
  }

  var object = JSON.stringify(geonew);
  mojopin(object, table, column);
}

exports.train = function(tra_source) {
  geonew = tra_source;
  table = "transporte";
  if (geonew.id == "ascensores") {
    column = "ascensores";
  }
  if (geonew.id == "recorridos_microbuses") {
    column = "recorrido_microbuses";
  }
  if (geonew.id == "recorridos_taxicolectivos") {
    column = "recorrido_taxicolectivos";
  }

  var object = JSON.stringify(geonew);
  mojopin(object, table, column);
}

mojopin = function(object, table, column) {
  db.serialize(function() {
    var statement = db.prepare("INSERT INTO " + table + "(" + column + ") VALUES (?)");
    statement.run(object);
    statement.finalize();
  });
}
