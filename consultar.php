<?php
$myfile = fopen("registro.txt", "r") or die("Unable to open file!");
$json =fread($myfile,filesize("registro.txt"));
$json=str_replace("\r","",$json);
$json=str_replace("\n","",$json);
$json =substr($json, 0, -1);
header('Content-Type: application/json; charset=UTF-8');
echo ("[".$json."]");
fclose($myfile);
?>
