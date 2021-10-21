<?php
if (strtoupper($_SERVER['REQUEST_METHOD']) !== 'POST') {
  http_response_code(400);
  die("<h1>Bad Request</h1>\nThe requested method is not implemented.\n");
}

header('Content-Type: application/json; charset=UTF-8');
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $entrada = json_encode([
     $_POST["ident"],
     $_POST["nombres"],
     $_POST["apellidos"],
     $_POST["tipo_biologico"],
     $_POST["fecha_dosis1"],
     $_POST["fecha_dosis2"],
  ]);
  echo ($entrada);
  file_put_contents("registro.txt", $entrada.",".PHP_EOL, FILE_APPEND | LOCK_EX);
}
