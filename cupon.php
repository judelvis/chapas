<?php
$strURL = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
?>
<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/QAPage" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="GOOGLEBOT" content="index,follow"/>
    <meta name="robots" content="follow,index"/>
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Novacorp.co®"/>
    <meta name="description" content="Te conectamos con cientos de profesionales cerca de ti.">
    <meta name="keywords" content="ChapaChapa, Perú, Cupones, Descuentos, Porcentaje, Tiendas, Convenio, Ahorro.">

    <meta name="twitter:site" content="@ChapaChapa">
    <meta name="twitter:title" content="ChapaChapa.com.pe">
    <meta name="twitter:description" content="Te conectamos con cientos de profesionales cerca de ti.">
    <meta name="twitter:image:src" content="<?php echo $strURL; ?>/images/web_logo.png">

    <meta property="og:title" content="ChapaChapa"/>
    <meta property="og:url" content="<?php echo $strURL; ?>/images/web_logo.png"/>
    <meta property="og:locale" content="es_PE"/>
    <meta property="og:site_name" content="ChapaChapa.com.pe"/>
    <meta property="og:image" content="<?php echo $strURL; ?>">
    <meta property="og:type" content="blog"/>

    <title>ChapaChapa.com.pe | Tus cupones de descuentos en un solo lugar.</title>
    <link rel="canonical" href="<?php echo $strURL; ?>"/>
    <link rel="shortcut icon" href="favicon.ico">
    <!--[if lte IE 8]>
    <script src="assets/js/ie/html5shiv.js"></script><![endif]-->
    <link rel="stylesheet" href="assets/css/main.css"/>
    <link rel="stylesheet" href="assets/css/font-awesome.min.css"/>
    <noscript>
        <link rel="stylesheet" href="assets/css/noscript.css"/>
    </noscript>
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="assets/css/ie8.css"/><![endif]-->
    <!--[if lte IE 9]>
    <link rel="stylesheet" href="assets/css/ie9.css"/><![endif]-->
</head>
<body>
<?php include "include/menu.php"; ?>

<div id="wrapper">

    <div id="form-maina">
        <div id="form-diva">
            <div id="contenta"> 
            <?php $code = $_GET['code'];require_once("consultas/cupon.php");?>
            </div>
        </div>
    </div>


    <div id="footer">
        <div class="left">
            <p><img src="images/dev.png" style="margin-bottom:-17px;"></p>

            <p>&copy; Copyright 2016 ChapaChapa.com.pe</p>
        </div>
        <div class="right">
            <ul class="copyright">
                <li><a href="terminos.php">Terminos de uso</a></li>
                <li><a href="politicas.php">Politicas de privacidad</a></li>
                <li><a href="contacto.php">Contacto</a></li>
            </ul>
        </div>
    </div>

</div>
</div>
<div id="my-welcome-message" style="background: url('images/bgpop.jpg') no-repeat center center fixed; ">
    <br/>

    <p><img src="images/logo.png"></p>

    <p id="resp">A partir de este momento vas a formar parte de nuestra red de descuentos te invitamos a
        registrarte.</p>

    <p><input name="mail" id="mail" class="mail" placeholder="Tu E-mail Aqui">
        <br/>
        <input value="Registrarse" class="envia" type="button" onclick="verificarUsuario()">
    </p>

    <p class="foot">Si tiene alguna suguerencia puede escribirnos a soporte@chapchapa.com.pe</p>
    <br/>
</div>
<!-- Scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.poptrox.min.js"></script>
<script src="assets/js/jquery.firstVisitPopup.js"></script>
<script src="assets/js/skel.min.js"></script>
<script src="assets/js/skel-viewport.min.js"></script>
<script src="assets/js/util.js"></script>
<!--[if lte IE 8]>
<script src="assets/js/ie/respond.min.js"></script><![endif]-->
<script src="js/toggle.js"></script>


</body>
</html>