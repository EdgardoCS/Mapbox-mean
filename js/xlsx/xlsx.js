var xlsx = require('node-xlsx').default;

goToPath = path.join(__dirname, '../../xlsx/');

const workSheetsFromFile = xlsx.parse(goToPath + 'AM_Definitivo.xlsx');
var data = workSheetsFromFile[5].data;

// console.log(workSheetsFromFile);
// console.log(data);

var _l = data.length;
var n = 9;
var obj = [];

for (i = 1; i < _l; i++) {
  obj[i] = [{
    postrado: {
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
    }
  }];
};

console.log(obj);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");

  for (i = 1; i < _l; i++) {
    ndb.collection("postrado").insert(obj[i], function(err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " objetos insertados a coleccion postrado");
    });
  }
  db.close();
});
