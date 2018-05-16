<html>

	<head>
        <?php
            session_start();
        ?>
		<title>V-Exchange</title>
		<meta charset="utf-8">

		<link rel="stylesheet" type="text/css" href="../Estilos/main.css">
		<link rel="stylesheet" type="text/css" href="../Estilos/screen.css">
		
		<link rel="icon" href="Imagenes/ethereum.png">
		<!--<?php
           //if(isset($_SESSION["usuario"])){
		?>
		<style>/*.portada{background-image: url('../Imagenes/Ethereum-background-33.jpg');*/</style>
		<?php
		   //}
        ?>-->
	</head>

	<body style="background-color:rgb(237, 237, 237)">
		

		<section id="portada" > <!--portada class="portada portadaU"-->

			<section style="background:#273b47">
				<header id="header" class="header contenedor">
					
					<figure class="logotipo"> <!--logotipo-->
						<img  src="../Imagenes/ethereum.svg" width="50" height="50" alt="Ethereum logo">
					</figure>

					<nav class="menu"> <!--menu-->
						<ul>
							<li>
								<a href="Cuentas/cuentas.php"><i class="icon-account_balance_wallet"></i>Cuentas</a>
							</li>
							<?php if(!$_SESSION["usuario"]){?>
								<li>
									<a href="login.html">Iniciar sesion</a>
								</li>
							<?php } ?>
							<li>
								<a href="Vista/cerrarSesion.php" ><i class="icon-exit"></i>Cerrar Sesion</a>
							</li>
						</ul>
					</nav>
				</header>
			</section>
			
				<div class="contenedor">		
                    
					    <h1 class="titulo">V-<span>Bienvenido</span> <?php echo $_SESSION["usuario"]["nombre"]?></h1><!--titulo-->

						<!--<h3 class="title-a">El Poder del Blockchain en tus manos</h3>--><!--slogan-->
						<p style="color:gray">

							V-Exchange es una cartera open source, descentralizada que permite la creación de acuerdos de contratos inteligentes entre pares,
							basada en el modelo blockchain.​<br>​<br>
							
							Esta cartera esta construida bajo el ecosistema de Ethereum, y no solo te permitira manejar Ether sino tambien tendras la posibilidad
							de crear tu propia criptomoneda la cual vivira en el blockchain de Ethereum.


						</p>

					    <button id="boton" style="color:white" class="button" onclick=""><strong>Empieza por aqui</strong></button><!--Boton-->
                    
                </div>
			
        </section>
    </body>
        
</html>