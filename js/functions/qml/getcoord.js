var utm = require('utm');
var easting = 254466.709772179630818;
var northing = 6341656.771755977533758;
var zoneN = 19;
var zoneL = "H";
var northern;

var a = utm.toLatLon(easting, northing,zoneN, zoneL, northern, strict = false);
console.log(a);
