<?php
include("datos/conexion.php");
$query = "select *,t_categorias.nombre as cnom,t_cupon.nombre as cunom from t_cupon
join t_categorias on t_categorias.id = t_cupon.id_categoria
where t_categorias.id=".$cat."
order by fecha_pub DESC limit 6";
$rs = mysql_query($query);
$html = '';
if (mysql_num_rows($rs) > 0) {
    while ($fila = mysql_fetch_assoc($rs)) {
        $html .='
        <article class="item thumb" data-width="350">
            <div class="cap">
                <div class="categoria">'.$fila["cnom"].'</div>
                <br/>

                <div class="texto">'.$fila["cunom"].' </div>
            </div>
            <a href="images/'.$fila['imagen'].'" class="image"><img src="images/'.$fila['imagen'].'" alt=""></a>
        </article>
        ';
    }
} else {
    header('Location: index.php');
}
echo $html;
?>