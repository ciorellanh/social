<?php
  require('../configuracion.php'); // The mysql database connection script

    $query="select id,tema,descripcion,usuario,fecha,estado from cattemas WHERE estado='A';";
    $result = mysql_query($query,$con);

    echo $json_response = json_encode($result);
?>
