var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var usuarios = [];

savefile = function (planilla,coleccion){
    
    _l = planilla.length; 
    
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, db) {
        if (err) throw err;
        var ndb = db.db("mydb");
        
        //console.log(planilla); 
        //console.log(coleccion); 
        
        for (i = 0; i < _l; i++) {
            usuarios[i] = {
                paciente:planilla[i]
            }

            ndb.collection(coleccion).insert(usuarios[i], function(err, res) {
                
               if (err) throw err;
               console.log("objetos insertados a "+ coleccion +": " + i);
            });
        }
    
        db.close();
    });
}
