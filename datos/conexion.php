<?php

$conectar = mysql_connect("localhost","root","123");//conectar a mysql
$base = mysql_select_db("chapas",$conectar);//conectar a base de datos
/*if($base)echo "entro<br>";
else echo "no entro".mysql_error()."<br>";*/
$resulado = mysql_query("SET NAMES 'utf8'", $conectar);//query para que acepte caracteres especiales
?>