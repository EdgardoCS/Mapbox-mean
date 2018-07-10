var xlsx = require('node-xlsx').default;

goToPath = path.join(__dirname, '../../src/xlsx/example/');

const workSheetsFromFile = xlsx.parse(goToPath + 'Gestor de casos S27.xlsx');

var coleccion = workSheetsFromFile[0].name;
var gestor = workSheetsFromFile[0].data;
var headers = gestor[0];

var _h = headers.length; 
var _g = gestor.length; 
var paciente = []; 
var casos27 = [];


for (j=0; j<_g ; j++){

    for (i = 0; i < _h; i++){

    var name = 'headers[i]'
    Object.assign(paciente,{[eval(name)]:gestor[j][i]})
}
casos27.push(paciente); 
}

console.log(casos27); 

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");

  for (i = 8; i < _l; i++) {

    ndb.collection(coleccion).insert(tarjetero[i], function(err, res) {

      if (err) throw err;
      console.log("objetos insertados a coleccion: " + i);
    });
  }
  db.close();
});
*/