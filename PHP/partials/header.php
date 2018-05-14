<html>

	<head>
        <?php
            session_start();
        ?>
		<title>V-Exchange</title>
		<meta charset="utf-8">

		<link rel="stylesheet" type="text/css" href="../Estilos/main.css">
		<link rel="icon" href="Imagenes/ethereum.png">
		<?php
           if(isset($_SESSION["usuario"])){
		?>
		<style>.portada{background-image: url('../Imagenes/Ethereum-background-33.jpg');}</style>
		<?php
		   }
        ?>
	</head>

	<body style="background-color:rgb(237, 237, 237)">
		

		<section id="portada" class="portada portadaU"> <!--portada-->
		<header id="header" class="header contenedor">
			
			<figure class="logotipo"> <!--logotipo-->
				<img  src="../Imagenes/ethereum.svg" width="100" height="100" alt="Ethereum logo">
			</figure>

			<nav class="menu"> <!--menu-->
				<ul>
					<li>
						<a href="Cuentas/cuentas.php">Cuentas</a>
					</li>
					<?php if(!$_SESSION["usuario"]){?>
						<li>
							<a href="login.html">Iniciar sesion</a>
						</li>
					<?php } ?>
					<li>
						<a href="Vista/cerrarSesion.php">Cerrar Sesion</a>
					</li>
				</ul>
			</nav>
		</header>
			
				<div class="contenedor">		
                    
					    <h1 class="titulo">V-<span>Bienvenido</span> <?php echo $_SESSION["usuario"]["nombre"]?></h1><!--titulo-->

					    <h3 class="title-a">El Poder del Blockchain en tus manos</h3><!--slogan-->

					    <button class="button" onclick="">ConoceMás</button><!--Boton-->
                    
                </div>
			
        </section>
    </body>
        
</html>