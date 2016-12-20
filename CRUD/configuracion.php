<?php
$bd_host = "localhost";
$bd_usuario = "root";
$bd_password = "";
$bd_base = "social";

$con =mysqli_connect($bd_host, $bd_usuario, $bd_password,$bd_base) or die("Error " . mysqli_error($con));

?>
