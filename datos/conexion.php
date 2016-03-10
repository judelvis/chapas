<?php

  $dbhost = 'localhost';
  $dbuser = 'root';
  $dbpass = ''; 
  
  $conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Ocurrió un error al conectarse al servidor mysql');

  $dbname = 'chapas';
  mysql_select_db($dbname);
?>