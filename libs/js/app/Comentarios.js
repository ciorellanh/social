//Define an angular module for our app
var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('comentariosController', function($scope, $http, $location) {

alert($location.search().tema);

  obtTema = function () {
        var httpreq = {
            method: 'POST',
            url: 'http://localhost:88/social/CRUD/Temas/cstTema.php',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json'
            },
            data: {
                tema:$location.search().tema
              }
        }
        $http(httpreq).success(function (response) {
            $scope.TemaX=response;
        })
    };



  $scope.obtComentarios = function (padre) {
        var httpreq = {
            method: 'POST',
            url: 'http://localhost:88/social/CRUD/Comentarios/lstComentarios.php',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json'
            },
            data: {
                tema:$location.search().tema,
                padre:padre
              }
        }
        $http(httpreq).success(function (response) {
            $scope.lstComentarios=response;
        })
    };



  $scope.nuevoComentario = function (comentario) {
        var httpreq = {
            method: 'POST',
            url: 'http://localhost:88/social/CRUD/Comentarios/insComentario.php',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json'
            },
            data: {
                comentario:comentario
              }
        }
        $http(httpreq).success(function (response) {
            obtTemas();
            alert("Agregado");
        })
    };

  $scope.eliminarTema = function (tema) {
    if(confirm("¿Estás seguro que deseas eliminar este tema?")){
    $http.post("CRUD/delTema.php?idTema="+tema).success(function(data){
        obtTemas();
      });
    }
  };

  obtTema(0); // Load all available tasks
  $scope.obtComentarios(0);
});
