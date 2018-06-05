const AccessControl = require('accesscontrol');

var app = angular.module('userControl', []);

app.controller('maincontrol', [
  '$scope',
  function($scope) {

    $scope.inputType = 'password';
    $scope.hideShowPassword = function() {
      if ($scope.inputType == 'password')
        $scope.inputType = 'text';
      else
        $scope.inputType = 'password';
    };

    $scope.checkUser = function() {
      if ($scope.user === '') {
        return;
      } else {
        $scope.usuarios = [];
        $scope.usuarios.push({
          user: $scope.user,
          pass: $scope.pass,
        })
      };
      setusuarios = setpermission($scope.usuarios);
      $scope.user = '';
    }
  }
]);

setpermission = function(usuarios) {

  var usuario = usuarios[0].user;
  const ac = new AccessControl();
  ac.grant('mena').readAny('profile');
  ac.grant('user').readOwn('profile');

  try {
    const permission = ac.can(usuario).readAny('profile');
    if (permission.granted == true) {

      sistam_window();

    } else {
      alert("acceso denegado");
    }
  } catch (e) {
    alert("contraseña invalida");
  }
}
