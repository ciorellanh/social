//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('temasController', function($scope, $http) {
  obtTemas(); // Load all available tasks
  function obtTemas(){
    $http.post("CRUD/lstTemas.php").success(function(data){
          $scope.tasks = data;
         });
  };
  $scope.nuevoTema = function (tema) {
    $http.post("CRUD/insTema.php?task="+task).success(function(data){
        obtTemas();
        $scope.tTema = "";
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