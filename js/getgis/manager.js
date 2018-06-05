var beginners = require('../../js/getgis/div.js')
var barefoot = require('../../js/getgis/lev.js')
var muddy = require('../../js/getgis/sal.js')
var down = require('../../js/getgis/tra.js')
var mythic = require('../../js/getgis/un.js')

var clasification;
var div_pol_adm;
var lev_comp_cat;
var salud_geocoor;
var transporte_geocoor;

exports.parser = function(incomingG) {

  var _l = incomingG.features.length;
  clasification = incomingG.name;

  if (clasification == "Limite_Comunal" || clasification == "Limite_Urbano" || clasification == "Plazas" || clasification == "Sectores_dideco" || clasification == "Unidades_vecinales") {
    div_pol_adm = incomingG;
    beginners.luck(div_pol_adm, _l, clasification);
  }
  if (clasification == "levantamiento_completo" || clasification == "juntas_vecinos") {
    lev_comp_cat = incomingG;
    barefoot.desert(lev_comp_cat, _l, clasification);
  }
  if (clasification == "establecimientos_hospitalarios" || clasification == "establecimientos_salud" || clasification == "seremi_salud" || clasification == "servicios_salud") {
    salud_geocoor = incomingG;
    muddy.water(salud_geocoor, _l, clasification);
  }
  if (clasification == "ascensores" || clasification == "recorridos_microbuses" || clasification == "recorridos_taxicolectivos") {
    transporte_geocoor = incomingG;
    down.thesink(transporte_geocoor, _l, clasification);
  }
  if (clasification == "Unidad_Vecinal") {
    unidad_geocoor = incomingG;
    mythic.sunship(unidad_geocoor, _l, clasification);
  }
}
