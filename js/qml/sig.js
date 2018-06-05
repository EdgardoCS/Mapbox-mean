var convert = require('xml-js');

var Uxml = require('fs').readFileSync('./qml/users.qml', 'utf8');
var Zxml = require('fs').readFileSync('./qml/zone.qml', 'utf8');
var Pxml = require('fs').readFileSync('./qml/poly.qml', 'utf8');
var Sxml = require('fs').readFileSync('./qml/single.qml','utf8');

var rgbcolors = [];
var size = [];
var properties = [];
var id = [];
var head = [];
var hexcolors = [];
var tojson = [];

var Uresult = convert.xml2json(Uxml, {
  compact: true,
  spaces: 4
});

var Uqml = JSON.parse(Uresult);


var _l = Uqml.qgis['renderer-v2'].symbols.symbol.length;
var type1 = Uqml.qgis['renderer-v2']._attributes.type;


if (type1 == 'categorizedSymbol') {
  for (i = 0; i < _l; i++) {

    id[i] = Uqml.qgis['renderer-v2'].symbols.symbol[i]._attributes.name;
    head[i] = Uqml.qgis['renderer-v2'].categories.category[i]._attributes.label;
    rgbcolors[i] = Uqml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[1]._attributes.v.split(',');
    size[i] = Uqml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[14]._attributes.v;
    properties[i] = Uqml.qgis['renderer-v2'].symbols.symbol[i].layer.prop;

    rgbcolors[i].splice(3, 1);
  }
}

rgbtohex = function() {
  for (i = 0; i < _l; i++) {
  var colors = rgbcolors[i].map(function(x) {
    x = parseInt(x).toString(16);
    return (x.length == 1) ? "0" + x : x;
  });
  colors = "#" + colors.join("");
  hexcolors.push(colors);
}
return hexcolors;
};
makejson = function(id, head, hexcolors, size) {
  var json = {
    "type": "JSON",
    "id": id,
    "properties": {
      "head": head,
      "color": hexcolors,
      "size": size,
    }
  }
  return json
}

rgbtohex(rgbcolors);

for (i = 0; i < _l; i++) {
  tojson[i] = makejson(id[i], head[i], hexcolors[i], size[i]);
}
console.log(tojson);
