//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('temasController', function($scope, $http) {

  function obtTemas(){
    $http.post("http://localhost:88/social/CRUD/Temas/lstTemas.php")
    .success(function(data){
      $scope.lstTemas = data;
     });
  };

  $scope.nuevoTema = function (tema,descripcion) {
        var httpreq = {
            method: 'POST',
            url: 'http://localhost:88/social/CRUD/Temas/insTema.php',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json'
            },
            data: {
                tema: tema,
                descripcion: descripcion
              }
        }
        $http(httpreq).success(function (response) {
            obtTemas();
            alert("Agregado");
            addNewClicked=false;
        })
    };

  $scope.eliminarTema = function (tema) {
    if(confirm("¿Estás seguro que deseas eliminar este tema?")){
    $http.post("CRUD/delTema.php?idTema="+tema).success(function(data){
        obtTemas();
      });
    }
  };

  $scope.toggleStatus = function(item, status, tema) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("CRUD/actTema.php?idTema="+item+"&status="+status).success(function(data){
        obtTemas();
      });
  };

  obtTemas(); // Load all available tasks
});
