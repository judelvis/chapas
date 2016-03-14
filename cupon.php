<?php
 	$strURL = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
?>
<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/QAPage" xmlns="http://www.w3.org/1999/html">
  <head>
    <meta charset="utf-8">
    <meta name="GOOGLEBOT" content="index,follow" />
    <meta name="robots" content="follow,index" />
  	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="author" content="Novacorp.co®" />
    <meta name="description" content="Te conectamos con cientos de profesionales cerca de ti.">
    <meta name="keywords" content="ChapaChapa, Perú, Cupones, Descuentos, Porcentaje, Tiendas, Convenio, Ahorro.">
    <meta name="twitter:site" content="@ChapaChapa">
    <meta name="twitter:title" content="ChapaChapa.com.pe">
    <meta name="twitter:description" content="Te conectamos con cientos de profesionales cerca de ti.">
    <meta name="twitter:image:src" content="<?php echo $strURL; ?>/img/web_logo.png">
    <meta property="og:title" content="ChapaChapa" />
    <meta property="og:url" content="<?php echo $strURL; ?>/img/web_logo.png" />
    <meta property="og:locale" content="es_PE" />
    <meta property="og:site_name" content="ChapaChapa.com.pe" />
    <meta property="og:image" content="<?php echo $strURL; ?>">
    <meta property="og:type" content="blog" />
    <title>ChapaChapa.com.pe | Tus cupones de descuentos en un solo lugar.</title>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="canonical" href="<?php echo $strURL; ?>" />
    <link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" href="css/shop.css" type="text/css" media="all" />
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css" type="text/css">
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="all" />
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:400,100,300,700" type="text/css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
    <style>
	.coupon {
    border: 3px dashed #bcbcbc;
    border-radius: 10px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", 
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
}

.coupon #head {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-height: 56px;
}

.coupon #footer {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

#title .visible-xs {
    font-size: 12px;
}

.coupon #title img {
    font-size: 30px;
    height: 30px;
    margin-top: 5px;
}

@media screen and (max-width: 500px) {
    .coupon #title img {
        height: 15px;
    }
}

.coupon #title span {
    float: right;
    margin-top: 5px;
    font-weight: 700;
    text-transform: uppercase;
}

.coupon-img {
    width: 100%;
    margin-bottom: 15px;
    padding: 0;
}

.items {
    margin: 15px 0;
}

.usd, .cents {
    font-size: 20px;
}

.number {
    font-size: 40px;
    font-weight: 700;
}

sup {
    top: -15px;
}

#business-info ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
}

#business-info ul li { 
    display: inline;
    text-align: center;
}

#business-info ul li span {
    text-decoration: none;
    padding: .2em 1em;
}

#business-info ul li span i {
    padding-right: 5px;
}

.disclosure {
    padding-top: 15px;
    font-size: 11px;
    color: #bcbcbc;
    text-align: center;
}

.coupon-code {
    color: #333333;
    font-size: 11px;
}

.exp {
    color: #f34235;
}

.print {
    font-size: 14px;
    float: right;
}



/*------------------dont copy these lines----------------------*/
body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", 
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
}
.row {
    margin: 30px 0;
}

#quicknav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
}

#quicknav ul li { 
    display: inline; 
}

#quicknav ul li a {
    text-decoration: none;
    padding: .2em 1em;
}

.btn-danger, 
.btn-success, 
.btn-info, 
.btn-warning, 
.btn-primary {
    width: 105px;
}

.btn-default {
    margin-bottom: 40px;
}
/*-------------------------------------------------------------*/
	</style>
 </head>

<body style="background-color:#333333;"> 


<div class="none">
	<p><a href="#content">Skip to Content</a></p></div><!--.none-->
<div id="main" class=""><!-- this encompasses the entire Web site -->

	<div id="header" class="header-v1">
	<header>
		<div class="container">
			<div id="title">
            	<a href="<?php echo $strURL; ?>"><img src="img/logo.png" alt="Logo" data-at2x="img/logo_2x.png" /></a>			</div><!--#title-->

            <div id="slide-menu"><a title="Side Menu" id="sidr-menu" href="#sidr"><span class="fa fa-reorder">&nbsp;</span></a></div><!--#side-menu-->
            
			<div id="nav-primary" class="nav black"><nav>
			<div class="menu-primary-menu-container">
            <ul id="menu-primary-menu" class="mega-menu">
                 <li><a href="index.php"><span class="fa fa-home"></span> Inicio</a></li>
                <li><a href="#"><span class="fa fa-star"></span> Destacados</a></li>
                <li><a href="#" ><span class="fa fa-bullseye" ></span> Entretenimiento</a></li>
                <li><a href="#" ><span class="fa fa-heartbeat" ></span> Salud</a></li>
                <li><a href="#" ><span class="fa fa-cutlery" ></span> Comida</a></li>
                <li><a href="#" ><span class="fa fa-suitcase" ></span> Productos</a></li>
                <li><a href="#" ><span class="fa fa-plus-circle" ></span> Otros</a></li>
            </ul>
            </div>
            </nav></div><!--#nav-primary-->            
			<div class="clear"></div>
		</div><!--.container-->
	</header></div><!--#header-->
    
		<div class="container" style="background-color:#FFF;">	
       	<div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default coupon">
              <div class="panel-heading" id="head">
                <div class="panel-title" id="title">
                    <span class="hidden-xs">Stand Up Comedy</span>
                    <span class="visible-xs">Stand Up Comedy</span>
                </div>
              </div>
              <div class="panel-body">
                <img src="cupones/front/show4.jpg" class="coupon-img">
                <div class="col-md-9">
                    <ul class="items">
                        <li>Categoria: Entretenimiento</li>
                        <li>Descripción: Guerra de los Sexos</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <div class="offer">
                        <span class="usd"><sup>$</sup></span>
                        <span class="number">11</span>
                        <span class="cents"><sup>00</sup></span>
                    </div>
                </div>
                <div class="col-md-12">
                    <p class="disclosure">Este cupon es valido para ser usado unicamente en la tienda del proveedor que publico dicho cupon tiene una valides de 20 dias.</p>
                </div>
              </div>
              <div class="panel-footer">
                <div class="coupon-code">
                    Publicado: Sep 30, 2016
                    <span class="print">
                         <a href="login.php?cod=" class="btn btn-primary btn-xs"><span class="fa fa-shopping-cart"></span> Comprar</a>
                    </span>
                </div>
                <div class="exp">Expira: Sep 30, 2016</div>
              </div>
            </div>
    	</div>
    </div>
	</div><!--.container-->    
    
    <div id="footer-spacer" class="clear"></div><!--#footer-spacer-->

	    
</div><!--#main-->
<div id="footer">
<footer>
   <div class="container">
      <div class="textwidget">
         <div id="footer-text">
            <div>© Copyright 2016 | ChapaChapa.com.pe </div>
         </div>
      </div>
</footer>
</div><!--#footer-->
<div id="sidr">
   <h5>MENU</h5>
   <div class="sidr-desktop">
      <div class="widget-area">
         <ul>
            <form method="post" action="buscar.php">
               <input x-webkit-speech speech type="text" name="s" id="search" placeholder="Buscar..." />
            </form>
         </ul>
      </div>


   </div>
   <div class="sidr-mobile">
      <div class="widget-area">
         <ul>
            <form method="post" action="buscar.php">
               <input x-webkit-speech speech type="text" name="s" id="search"  placeholder="Buscar..." />
            </form>
         </ul>
      </div>
      <div class="widget-area">
         <ul>
            <div class="menu-primary-menu-container">
               <ul class="menu">
                    <li><a href="index.php"><span class="fa fa-home"></span> Inicio</a></li>
                    <li><a href="#"><span class="fa fa-star"></span> Destacados</a></li>
                    <li><a href="#" ><span class="fa fa-bullseye" ></span> Entretenimiento</a></li>
                    <li><a href="#" ><span class="fa fa-heartbeat" ></span> Salud</a></li>
                    <li><a href="#" ><span class="fa fa-cutlery" ></span> Comida</a></li>
                    <li><a href="#" ><span class="fa fa-suitcase" ></span> Productos</a></li>
                    <li><a href="#" ><span class="fa fa-plus-circle" ></span> Otros</a></li>
               </ul>
            </div>
         </ul>
      </div>
         </ul>
      </div>
   </div>
</div>
<!--#sidr-->    
<a href="#top" id="to-top-button" title="Return to Top"><span class="fa fa-chevron-up"></span></a><!--#to-top-button-->
<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="js/contrast-global-plugins.js"></script>
<script type="text/javascript" src="js/dc-mega-menu.min.js"></script>
<script type='text/javascript'>
   /* <![CDATA[ */
   var headerType = {"style":"v1","menu_type":"mega"};
   /* ]]> */
</script>
<script type="text/javascript" src="js/contrast.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-media.js"></script>
<script type="text/javascript" src="js/jquery.fancybox-thumbs.js"></script>
</body>
</html>