  <div class="mainbar">

  <div class="container">

    <button type="button" class="btn mainbar-toggle" data-toggle="collapse" data-target=".mainbar-collapse">
      <i class="fa fa-bars"></i>
    </button>

    <div class="mainbar-collapse collapse">

      <ul class="nav navbar-nav mainbar-nav">

        <li class="active">
          <a href="./principal.php">
            <i class="fa fa-home"></i>
            Inicio
          </a>
        </li>
        
         <li class="dropdown ">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i class="fa fa-certificate"></i>
            Cupones
            <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">   
            <li><a href="./principal.php?slug=nuevo_cupon"><i class="fa fa-plus-circle"></i> Nuevo</a></li>
            <li><a href="./principal.php?slug=categorias_cupon"><i class="fa fa-bars"></i> Categorias</a></li>
            <li><a href="./principal.php?slug=cupones"><i class="fa fa-folder-open"></i> Todos</a></li>
          </ul>
        </li>

        <li class="dropdown ">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i class="fa fa-money"></i>
            Ventas
            <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">   
            <li><a href="./principal.php?slug=por_fecha"><i class="fa fa-calendar"></i> Por Fecha</a></li>
            <li><a href="./principal.php?slug=por_categoria"><i class="fa fa-bars"></i> Por Categoria</a></li>
            <li><a href="./principal.php?slug=por_socio"><i class="fa fa-user-secret"></i> Por Socio</a></li>
            <li><a href="./principal.php?slug=ventas"><i class="fa fa-folder-open"></i> Todas</a></li>
          </ul>
        </li>
        
         <li class="dropdown ">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i class="fa fa-user-secret"></i>
            Socios
            <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">   
            <li><a href="./principal.php?slug=nuevo_socio"><i class="fa fa-plus-circle"></i> Nuevo</a></li>
            <li><a href="./principal.php?slug=socios"><i class="fa fa-folder-open"></i> Todos</a></li> 
          </ul>
        </li>
        
         <li class="dropdown ">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
            <i class="fa fa-users"></i>
            Clientes
            <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">   
            <li><a href="./principal.php?slug=visitantes"><i class="fa fa-envelope"></i> Visitantes</a></li>
            <li><a href="./principal.php?slug=registrados"><i class="fa fa-user-plus"></i> Registrados</a></li>
          </ul>
        </li>

      </ul>

    </div> <!-- /.navbar-collapse -->   

  </div> <!-- /.container --> 

</div> <!-- /.mainbar -->
