var xlsx = require('node-xlsx').default;

goToPath = path.join(__dirname, '../../src/xlsx/');

const workSheetsFromFile = xlsx.parse(goToPath + 'Gestor de casos S27.xlsx');

var gestor = workSheetsFromFile[0].data;
console.log(gestor); 
var _g = gestor.length; 
var coleccion = workSheetsFromFile[0].name;
var header = gestor[0];
console.log(header); 
var _h= header.length;
var iedad;
var irut;
var iriesgo;
var store = [];
var bajo = [];
var medio = [];
var alto =[];

for (i = 0; i < _h; i++){
    if(header[i]== "Edad" || header[i]=="edad" || header[i]=="EDAD"){
    iedad= i;    
    }
    if(header[i]== "Rut" || header[i]=="rut" || header[i]=="RUT"){
    irut=i;
    }
    if(header[i]== "Riesgo" || header[i]== "riesgo" || header[i] == "RIESGO"){
    iriesgo = i;
    }
}

for (i = 0; i < _g; i++){
    if (gestor[i][iedad] >= 60){
        store.push(gestor[i]);
    }
}

console.log(store);

var vacio = [];
var _s = store.length;

for (i = 0; i < _s; i++){
    if (store[i][iriesgo] == "Bajo"){
        bajo.push(store[i]);
    }
    if (store[i][iriesgo] == "Medio"){
        medio.push(store[i]);
    }
    if (store[i][iriesgo] == "Alto"){
        alto.push(store[i]);
    }
    if (store[i][iriesgo] == undefined){
    vacio.push(store[i]);
    }
}



