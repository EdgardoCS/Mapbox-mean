var xlsx = require('node-xlsx').default;

goToPath = path.join(__dirname, '../../src/xlsx/');

const workSheetsFromFile = xlsx.parse(goToPath + 'AM_Definitivo.xlsx');

var data = workSheetsFromFile[5].data;
var coleccion = "AmMena";

var _l = data.length;
var usuarios = [];

for (i = 1; i < _l; i++) {
  usuarios[i] = {
    paciente: {
      rut: data[i][0],
      apellidoPaterno: data[i][1],
      apellidoMaterno: data[i][2],
      nombres: data[i][3],
      sexo: data[i][8],
      geolocalizacion: {
        direccion: data[i][4],
        longitud: data[i][5],
        latitud: data[i][6],
        subsector: data[i][7],
      },
    },
  };
};


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");

  for (i = 1; i < _l; i++) {
    ndb.collection(coleccion).insert(usuarios[i], function(err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " objetos insertados a coleccion " + coleccion);
    });
  }
  db.close();
});
