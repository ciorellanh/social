<?php
  require('../configuracion.php'); // The mysql database connection script

    $query="select id,tema,descripcion,usuario,fecha,estado from cattemas WHERE estado='A';";
    $result = mysqli_query($con,$query) or die("Error in Selecting " . mysqli_error($con));

    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    echo json_encode($emparray);
?>
