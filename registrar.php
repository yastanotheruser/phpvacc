<?php
if (strtoupper($_SERVER['REQUEST_METHOD']) !== 'POST') {
  http_response_code(400);
  die("<h1>Bad Request</h1>\nThe requested method is not implemented.\n");
}

header('Content-Type: application/json; charset=UTF-8');

echo json_encode([
  'ident' => '123',
  'nombres' => 'Abc',
  'apellidos' => 'Def',
  'fecha_dosis1' => '0000-00-00',
  'fecha_dosis2' => '0000-00-00',
])
?>
