<?php
  require('../configuracion.php'); // The mysql database connection script
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $tema=$request->tema;

    $query="SELECT id,tema,descripcion,usuario,fecha,estado FROM cattemas WHERE estado='A' AND id=$tema;";
    $result = mysqli_query($con,$query) or die("Error in Selecting " . mysqli_error($con));

    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    echo json_encode($emparray);
?>
