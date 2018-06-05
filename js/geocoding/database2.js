// exports.todatabase2 = function(Rut,Latitud, Longitud, db) {
exports.todatabase2 = function(n, nombre, latitud, longitud, db) {
  // db.run("UPDATE UsersNo SET Latitud =?,Longitud=? WHERE Rut = ?", [Latitud, Longitud,Rut]);
  db.run("UPDATE agentes SET latitud =?, longitud=? WHERE n=?", [latitud, longitud, n]);
  console.log("success");
};
