<?php
  require('../configuracion.php'); // The mysql database connection script
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    //$usuario=$request->usuario;
    $usuario='cioh';

    $query="SELECT contacto,estado FROM tbcontactos WHERE estado='A' AND usuario='$usuario';";
    $result = mysqli_query($con,$query) or die("Error in Selecting " . mysqli_error($con));

    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    echo json_encode($emparray);
?>
