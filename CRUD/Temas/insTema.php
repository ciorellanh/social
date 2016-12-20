<?php
  require_once '../configuracion.php'; // The mysql database connection script
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $tema = $request->tema;
    $descripcion=$request->descripcion;

    echo $descripcion;
?>
