<?php
  require_once '../configuracion.php'; // The mysql database connection script
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $tema = $request->tema;
    $descripcion=$request->descripcion;
    //$created=date("Y-m-d H:i:s");
    $created=date("Y-m-d");

    $query="INSERT INTO cattemas(tema,descripcion,usuario,fecha)  VALUES ('$tema', '$descripcion','cioh', '$created');";
    $result = mysqli_query($con,$query) or die("Error al agregar " . mysqli_error($con));

    echo json_encode($result);
?>
