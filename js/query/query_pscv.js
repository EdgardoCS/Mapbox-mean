var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  
  var slave_coleccion = "TARJETERO";
  var ndb = db.db("mydb");

  ndb.collection(slave_coleccion).find({}).toArray(function(err, result) {

    if (err) throw err; 

    var tarjetero = result; 
    
    search(tarjetero)

    db.close();
  });
});

search = function(tarjetero){
  var rut= [];
  _t = tarjetero.length; 

  for (i=0; i<_t;i++){
    rut[i] = tarjetero[i].paciente.rut; 
  }
  queryMaster(rut)
}