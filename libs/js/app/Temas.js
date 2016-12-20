//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('temasController', function($scope, $http) {

  obtTemas(); // Load all available tasks
  function obtTemas(){
    $http.post("../CRUD/lstTemas.php").success(function(data){
          $scope.tasks = data.d;
          alert("get" + data.d);
         });
  };
  $scope.nuevoTema = function (tema) {
<<<<<<< HEAD:libs/js/app/Temas.js
    $http.post("../CRUD/insTema.php?task="+task).success(function(data){
=======
    $http.post("CRUD/insTema.php?tema="+tema).success(function(data){
>>>>>>> 46563e3c40ccb5353c9be912361d0ef34b353a57:app/Temas.js
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
  alert("Hola2");
});
