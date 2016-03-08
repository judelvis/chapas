<?php

$conectar = mysql_connect("localhost","root","");//conectar a mysql
$base = mysql_select_db("chapas",$conectar);//conectar a base de datos

$resulado = mysql_query("SET NAMES 'utf8'", $conectar);//query para que acepte caracteres especiales
?>