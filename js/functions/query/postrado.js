var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  var ndb = db.db("mydb");

  var obj = [{
    postrado: {
      paciente: {
        rut: "1234",
        apellidos: "apellido 1",
        nombres: "nombre1",
        fechaNacimiento: "fecha1",
        sexo: "sexo1",
        estadoCivil: "estado1",
        escolaridad: "escolaridad1",
        prevision: "prevision1",
        puntajeFichaProteccion: "puntaje1",
        programaGubernamental: "programa1",
        direccion: "direccion1",
        cerro: "cerro1",
        sector: "sector1",
        jefeEquipoCabecera: "jefe1",
        medicosDelEquipo: "medicos1",
        region: "region1",
        servicio: "servicio1",
        comuna: "comuna1",
        establecimiento: "establecimiento1",
        sector: "sector2",
        fechaIngreso: "fecha1",
        gradoDeDependencia: "grado1",
        tipoPerdidaAut: "tipo1",
        acreditacion: "acreditacion1",
        quienAcredita: "quien1"
      },
      cuidador: {
        rut: "5678",
        apellidos: "apellido2",
        nombres: "nombre2",
        fechaNacimiento: "fecha2",
        sexo: "sexo2",
        estadoCivil: "estado2",
        escolaridad: "escolaridad2",
        relacionDeParentezco: "relacion1",
        prevision: "prevision2",
        telefonoCelular: "telefono1",
        telefono2: "telefono2",
        capacitacion: "capacitacion1",
        firmaMandato: "firma1"
      },
      imc: "imc1",
      zarit: "zarit1",
      estipendio: "estipendio1",
      vdMedico: "medico1",
      vdEnfermera: "enfermera1",
      vdTens: "tens1",
      examenes: "examenes1",
      vdNutricionista: "nutricionista1",
      vdKinesiologia: "kinesiologia1",
      vdAsistSocial: "asistente1",
    }
  }];

  // ndb.collection("postrado").insertMany(obj, function(err, res) {
  //   if (err) throw err;
  //   console.log(res.insertedCount + " objetos insertados a coleccion postrado");

  ndb.collection("postrado").find({}).toArray(function(err, result) {
    if (err) throw err;
    _l = result.length;
    if (_l == 0) {
      console.log("coleccion no encontrada");
    } else {
      for (i = 0; i < _l; i++) {
        console.log(result[i]);
      }
    }
  db.close();
  });
});
