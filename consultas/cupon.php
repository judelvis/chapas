<?php
include("datos/conexion.php");
$query = "select t_cupon.nombre as cunom,t_negocios.nombre as nenom,imagen,porcentaje,monto,fecha_exp,t_categorias.nombre as canom from t_cupon
join t_negocios on t_negocios.id = t_cupon.id_negocio
join t_categorias on t_categorias.id = t_cupon.id_categoria
where t_cupon.id =".$code;
$rs = mysql_query($query);
$html = '';
if (mysql_num_rows($rs) > 0) {
    while ($fila = mysql_fetch_assoc($rs)) {
        $html .='
        <div id="left">   
                      <img src="images/'.$fila['imagen'].'" style="max-width:300px;">
                </div>
                 
                <div id="right">   
                    <p class="til">'.$fila['nenom'].'</p>

                    <p class="catg">'.$fila['canom'].'</p>  
                    <br/><br/>

                    <p class="catg">'.$fila['cunom'].'</p>

                    <p class="catg">MONTO:'.$fila['monto'].'</p>  


                    <p class="catg">PORCENTAJE:'.$fila['porcentaje'].'</p>  


                    <p class="catg">EXPIRA:'.$fila['fecha_exp'].'</p>  
                    <br/>

                    <p style="float:right;">
                        <button class="envia" type="button"><span class="fa fa-shopping-cart"></span> Comprar</button>
                    </p>
                </div>
        ';
    }
} else {
    header('Location: index.php');
}
echo $html;
?>