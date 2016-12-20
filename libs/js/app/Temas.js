//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('temasController', function($scope, $http) {

  obtTemas(); // Load all available tasks
  function obtTemas(){
    $http.post("../../../CRUD/Temas/lstTemas.php")
    .success(function(data){
      $scope.lstTemas = data.d;
      alert("OK");
     });
  };

  $scope.nuevoTema = function (tema) {
    $http.post("CRUD/insTema.php?tema="+tema).success(function(data){
        obtTemas();
        $scope.tTema = "";
        alert("Agregado");
      });
  };

  $scope.eliminarTema = function (tema) {
    if(confirm("Are you sure to delete this line?")){
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
});
