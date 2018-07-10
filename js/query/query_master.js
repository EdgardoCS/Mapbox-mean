var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) throw err;
  
  var coleccion = "maestro_AmMena";
  var ndb = db.db("mydb");

  ndb.collection(coleccion).find({}).toArray(function(err, result) {

    if (err) throw err;

    var master = result;
    var found = [];

    queryMaster= function(rut){

      _m=master.length; 
      _r=rut.length;

      console.log(master);
      for (i=0; i<_r; i++){
        for (j=0; j<_m; j++){
          if(rut[i]==master[j].paciente.rut){
            found.push(master[j])
          }
        }
      }
      console.log("Encontradas " +found.length+ " coincidencias"); 
      console.log(found); 
    }
    db.close();
  });
});
