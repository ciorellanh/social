//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('chatController', function($scope, $http,$interval) {
  $scope.lContacto='';

  obtContactos = function () {
      var httpreq = {
          method: 'POST',
          url: 'http://localhost:88/social/CRUD/chat/lstContactos.php',
          headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'dataType': 'json'
          },
          data: {}
      }
      $http(httpreq).success(function (response) {
          $scope.lstContactos=response;
      })
  };

  $scope.obtMensajes = function (contacto) {
        var httpreq = {
            method: 'POST',
            url: 'http://localhost:88/social/CRUD/chat/lstMensajes.php',
            headers: {
                'Content-Type': 'application/json; charslocet=utf-8',
                'dataType': 'json'
            },
            data: {
                contacto:contacto
              }
        }
        $http(httpreq).success(function (response) {
            $scope.lstMensajes=response;
        })
    };


    $scope.EligeContacto=function(contacto)
    {
      $scope.lContacto=contacto;
      $scope.obtMensajes(contacto);
      alert(contacto);
    };

    $scope.nuevoMensaje = function (contacto,mensaje) {
        var httpreq = {
            method: 'POST',
            url: 'http://localhost:88/social/CRUD/chat/insMensaje.php',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json'
            },
            data: {
                contacto:contacto,
                mensaje:mensaje
              }
        }
        $http(httpreq).success(function (response) {
            $scope.obtMensajes(contacto);
        })
    };

      $interval(function(){
        if($scope.lContacto!=""){
          $scope.obtMensajes(lContacto);
        }
      },1000);


  obtContactos();
});
