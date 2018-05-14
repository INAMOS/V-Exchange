<?php

if(isset($_SESSION["usuario"])){
    header('location:user.php');
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" type="text/css" href="../Estilos/screens.css" >
    <title>Registro</title>
</head>

<body >

    <header class="header">
            <figure>
            <img src="../Imagenes/ethereum.png" width="50px" alt="ethereum-logo">
            <figcaption style="color:white">V-Exchange</figcaption>
            </figure>
            <nav class="menu">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                </ul>
            </nav>
    </header>
    
    <div class="contenedor">

        <form action="registroCode.php"  method="POST">
    
            <div id="personal">
                Nombre<br>
                <input for="nombre" id="nombre" name="txtNombre" type="text" required><br>
                Email<br>
                <input type="email" for="email" id="email" name="txtEmail" required>
            </div>
            <br>
            <br>
            <br>
            <div id="usuario">
                Nombre Usuario<br>
                <input type="text" for="usuario" id="usuario" name="txtUsuario" required><br>
                Contraseña <br>
                <input type="password" minlength="6" for="contraseña" id="contraseña" name="txtPassword" required>
            </div>
            <br>
            <input id="boton" type="submit" value="Registrar">

        </form>

    </div>

</body>

</html>