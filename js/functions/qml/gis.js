var convert = require('xml-js');

var Uxml = require('fs').readFileSync('./qml/users.qml', 'utf8');
var Zxml = require('fs').readFileSync('./qml/zone.qml', 'utf8');
var Pxml = require('fs').readFileSync('./qml/poly.qml', 'utf8');
var Sxml = require('fs').readFileSync('./qml/single.qml', 'utf8');

var id = [];
var head = [];
var size = [];
var rgbcolors = [];
var rgbcolorsOut = [];
var properties = [];
var hexcolors = [];
var hexcolorsout = [];
var outline = [];

var tojson = [];
var topolyjson = [];
var crit;
var type;

var _l;

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
rgbOuttohex = function() {
  for (i = 0; i < _l; i++) {
    var colorsOut = rgbcolorsOut[i].map(function(x) {
      x = parseInt(x).toString(16);
      return (x.length == 1) ? "0" + x : x;
    });
    colorsOut = "#" + colorsOut.join("");
    hexcolorsout.push(colorsOut);
  }
  return hexcolorsout;
};

srgbtohex = function() {
  var colors = rgbcolors.map(function(x) {
    x = parseInt(x).toString(16);
    return (x.length == 1) ? "0" + x : x;
  });
  colors = "#" + colors.join("");
  hexcolors.push(colors);

  return hexcolors;
};
srgbOuttohex = function() {
  var colorsOut = rgbcolorsOut.map(function(x) {
    x = parseInt(x).toString(16);
    return (x.length == 1) ? "0" + x : x;
  });
  colorsOut = "#" + colorsOut.join("");
  hexcolorsout.push(colorsOut);

  return hexcolorsout;
};
makejson = function(id, head, hexcolors, size) {
  var json = {
    "type": "point",
    "id": id,
    "properties": {
      "head": head,
      "color": hexcolors,
      "size": size,
    }
  }
  return json
};
makepolyjson = function(id, outline, hexcolors, hexcolorsout) {
  var polyjson = {
    "type": "fill",
    "id": id,
    "properties": {
      "color": hexcolors,
      "outline-color": hexcolorsout,
    }
  }
  return polyjson
};

var Uresult = convert.xml2json(Uxml, {
  compact: true,
  spaces: 4
});
var Zresult = convert.xml2json(Zxml, {
  compact: true,
  space: 4
});
var Presult = convert.xml2json(Pxml, {
  compact: true,
  spaces: 4
});
var Sresult = convert.xml2json(Sxml, {
  compact: true,
  spaces: 4
});

var Uqml = JSON.parse(Uresult);
var Pqml = JSON.parse(Presult);
var Zqml = JSON.parse(Zresult);
var Sqml = JSON.parse(Sresult);

qml = Sqml;

type = qml.qgis['renderer-v2']._attributes.type;

if (type == 'categorizedSymbol') {
  crit = qml.qgis['renderer-v2']['source-symbol'].symbol.layer._attributes.class;
  _l = qml.qgis['renderer-v2'].symbols.symbol.length

  var crit1 = 'SimpleFill';
  var crit2 = 'SimpleMarker';

  if (crit == crit1) {
    for (i = 0; i < _l; i++) {
      id[i] = qml.qgis['renderer-v2'].symbols.symbol[i]._attributes.name;
      outline[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[0]._attributes.v;
      rgbcolors[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[1]._attributes.v.split(',');
      rgbcolorsOut[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[6]._attributes.v.split(',');

      rgbcolors[i].splice(3, 1);
      rgbcolorsOut[i].splice(3, 1);
    }
    rgbtohex(rgbcolors);
    rgbOuttohex(rgbcolorsOut);
    for (i = 0; i < _l; i++) {
      topolyjson[i] = makepolyjson(id[i], outline[i], hexcolors[i], hexcolorsout[i]);
    }
    console.log(topolyjson);
  }
  if (crit == crit2) {
    for (i = 0; i < _l; i++) {
      id[i] = qml.qgis['renderer-v2'].symbols.symbol[i]._attributes.name;
      head[i] = qml.qgis['renderer-v2'].categories.category[i]._attributes.label;
      rgbcolors[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[1]._attributes.v.split(',');
      size[i] = qml.qgis['renderer-v2'].symbols.symbol[i].layer.prop[14]._attributes.v;

      rgbcolors[i].splice(3, 1);
    }
    rgbtohex(rgbcolors);
    for (i = 0; i < _l; i++) {
      tojson[i] = makejson(id[i], head[i], hexcolors[i], size[i]);
    }
    console.log(tojson);
  }
}
if (type == 'singleSymbol') {
  crit = qml.qgis['renderer-v2'].symbols.symbol._attributes.type;
  var crit1 = 'fill';
  var crit2 = 'marker';

  if (crit == crit1) {
    id = qml.qgis['renderer-v2'].symbols.symbol._attributes.name;
    outline = qml.qgis['renderer-v2'].symbols.symbol.layer.prop[0]._attributes.v;
    rgbcolors = qml.qgis['renderer-v2'].symbols.symbol.layer.prop[1]._attributes.v.split(',');
    rgbcolorsOut = qml.qgis['renderer-v2'].symbols.symbol.layer.prop[6]._attributes.v.split(',');

    rgbcolors.splice(3, 1);
    rgbcolorsOut.splice(3, 1);

    srgbtohex(rgbcolors);
    srgbOuttohex(rgbcolorsOut);

    topolyjson = makepolyjson(id, outline, hexcolors, hexcolorsout);
    console.log(topolyjson);
  }
  if (crit == crit2) {
    id = qml.qgis['renderer-v2'].symbols.symbol._attributes.name;
    head;
    rgbcolors = qml.qgis['renderer-v2'].symbols.symbol.layer.prop[1]._attributes.v.split(',');
    size = qml.qgis['renderer-v2'].symbols.symbol.layer.prop[14]._attributes.v;

    rgbcolors.splice(3, 1);

    srgbtohex(rgbcolors);

    tojson = makejson(id, head, hexcolors, size);
    console.log(tojson);
  }
}
