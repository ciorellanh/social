<?php
  require_once '../configuracion.php'; // The mysql database connection script

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    //$usuario = $request->usuario;
    $usuario='cioh';
    $contacto=$request->contacto;
    $mensaje=$request->mensaje;

    $query="INSERT INTO tbchat(escribio,contacto,mensaje,fecha)  VALUES ('$usuario', '$contacto','$mensaje', now());";
    $result = mysqli_query($con,$query) or die("Error al agregar " . mysqli_error($con));

    echo json_encode($result);
?>
