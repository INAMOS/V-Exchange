<?php
    session_start();
    if(isset($_SESSION['usuario'])){
        header('location:user.php');
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Login</title>
   <link rel="stylesheet" type="text/css" media="screen" href="../Estilos/screens.css" />
    
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>

    <!--<script type="text/javascript" src="../Jquery/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../Jquery/jquery-jquery-7751e69/dist/jquery.min.js"></script>-->
    <link rel="stylesheet" type="text/css" href="../Overhang/dist/overhang.min.css" />
    <script type="text/javascript" src="../Overhang/dist/overhang.min.js"></script>
    <script src="app.js"></script>
</head>

<body>

    <header class="header ">
        <figure>
            <img src="../Imagenes/ethereum.png" width="50px" height="50px" alt="ethereum-logo">
            <figcaption style="color:white">V-Exchange</figcaption>
        </figure>
        <nav class="menu">
            <ul>
                <li>
                    <a href="../index.html">Home</a>
                </li>
            </ul>
        </nav>
    </header>
    <div class="login-form">
        <img src="../Imagenes/avatar_generico_fb.webp" class="avatar" alt="ethereum logo" >
        <form id="loginForm" action="Validar.php" method="POST" role="form">
            <input type="text" name="txtUsuario" required placeholder="Nombre de Usuario"><br>
            <input type="password" name="txtPassword" required placeholder="Contraseña"><br>
            <button id="boton">Login</button>
        </form>
    
       <h4>No tienes cuenta aun?</h4>  <a style="color:#273b47" href="registro.php"><strong>Registrate</strong></a>
    </div>
    
</body>


</html>