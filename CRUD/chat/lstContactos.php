<?php
  require('../configuracion.php'); // The mysql database connection script
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    //$usuario=$request->usuario;
    $usuario='cioh';

    $query="SELECT u.contacto,ifnull((SELECT MAX(c.FECHA) FROM TBCHAT c WHERE c.escribio='$usuario' AND c.contacto=u.contacto)>(SELECT MAX(c2.FECHA) FROM TBCHAT c2 WHERE c2.escribio=u.contacto AND c2.contacto='$usuario'),0) AS ultimo FROM tbcontactos u WHERE u.estado='A' AND u.usuario='$usuario';";
    $result = mysqli_query($con,$query) or die("Error in Selecting " . mysqli_error($con));

    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    echo json_encode($emparray);
?>
