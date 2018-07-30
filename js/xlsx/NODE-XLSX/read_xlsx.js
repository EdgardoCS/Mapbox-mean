var xlsx = require('node-xlsx').default;
var file_path; 
var file_name; 

toparser = function (f){

  file_path = f.path;  
  file_name = f.name;

goToPath = file_path;
const workSheetsFromFile = xlsx.parse(goToPath);
//goToPath = path.join(__dirname, '../../src/xlsx/');
//const workSheetsFromFile = xlsx.parse(goToPath + 'Oxigeno dependientes.xlsx');

var coleccion = workSheetsFromFile[0].name;
var gestor = workSheetsFromFile[0].data;
var headers = gestor[0];

var _g = gestor.length;  
var _h = headers.length;  

var planilla = [];

strip = function () {
  for (h=0; h<_h; h++){
    var field = paciente[h]

    name = 'headers[h]'
    Object.assign(paciente,{[eval(name)]:field}) 
  }
  for (h=0; h<_h;h++){
    paciente.splice(0,1); 
  }
}

for (g = 1; g < _g; g++) {

  var paciente = gestor[g]
  strip(paciente)
  planilla[g]= paciente;
}

document.getElementById("save").addEventListener("click", function(){

  // savefile(planilla, coleccion); 
  console.log(planilla); 
  console.log(coleccion); 
}); 

}
