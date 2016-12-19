<?php
  require_once '../db.php'; // The mysql database connection script
    echo 'test';
    $query="select id,tema,descripcion,usuario,fecha,estado from cattemas WHERE estado='A';";
    $result = $mysqli->query($query) or die($mysqli->error.__LINE__);

    echo $json_response = json_encode($result);

?>
