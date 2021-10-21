<?php
$myfile = fopen("registro.txt", "r") or die("Unable to open file!");
$json =fread($myfile,filesize("registro.txt"));
$json=str_replace("\r\n","",$json);
$json =substr($json, 0, -1);
echo ("[".$json."]");
fclose($myfile);
?>