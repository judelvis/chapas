<?php
include("../datos/conexion.php");

$query = "select * from t_usuarios where email='" . $_POST['email']."'";
$rs = mysql_query($query);
$cmb = '';
if (mysql_num_rows($rs) > 0) {
    echo 'BIENVENIDO';
} else {
    $fecha = date("Y-m-d");
    $insert = 'Insert into t_usuarios (email,nivel,fecha) values("'.$_POST['email'].'",3,'.$fecha.')';
    $rsI = mysql_query($insert);
    if($rsI){
        echo "Se Registro Correctamente";
    }else{
        echo "No se pudo registrar".mysql_error();
    }
}

?>