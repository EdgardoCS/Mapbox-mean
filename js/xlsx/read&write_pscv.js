var xlsx = require('node-xlsx').default;

goToPath = path.join(__dirname, '../../src/xlsx/');

const workSheetsFromFile = xlsx.parse(goToPath + 'JUNIO-2018-TARJETERO.xlsx');

var coleccion = workSheetsFromFile[0].name;
var data = workSheetsFromFile[0].data;

var headers = data[7];

var _h = headers.length;
var _l = data.length;

var tarjetero = [];

// console.log(coleccion);

for (i = 8; i < _l; i++) {
  for (j = 0; j < _h; j++) {
    if (data[i][j] == "1") {
      data[i][j] = 0;
    }
    if (data[i][j] == "2") {
      data[i][j] = 1;
    }
    tarjetero[i] = {
      paciente: {
        ficha: data[i][0],
        sector: data[i][1],
        rut: data[i][3],
        edad: data[i][5],
        nombre: data[i][6],
        paterno: data[i][7],
        materno: data[i][8],
        ultimocontrol: data[i][11],
        patologias: {
          intolgluc: data[i][14],
          hta: data[i][15],
          dm: data[i][16],
          dislipidemia: data[i][17],
          hipotiroidismo: data[i][18],
          epilepsia: data[i][19],
          parkinson: data[i][20],
          artrosis: data[i][21],
          postrado: data[i][22],
          tabaquismo: data[i][23],
          antecedenteemegercencia: {
            acv: data[i][24],
            iam: data[i][25],
          },
          clinico: {
            empam: data[i][59],
          },
        },
      },
    };
  };
};

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
