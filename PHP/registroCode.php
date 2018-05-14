<?php
include('UsuarioControlador.php');
include('helps.php');

session_start();

header('Content-type:application/json');



if($_SERVER["REQUEST_METHOD"]=="POST"){

  if( 
      isset($_POST["txtNombre"]) && isset($_POST["txtEmail"]) &&
      isset($_POST["txtUsuario"]) && isset($_POST["txtPassword"])
    )
  {

      $txtNombre=validar_campo($_POST["txtNombre"]);
      $txtEmail=validar_campo($_POST["txtEmail"]);
      $txtUsuario=validar_campo($_POST["txtUsuario"]);
      $txtPassword=validar_campo($_POST["txtPassword"]);
      $txtPrivilegio=2;


      if(Controlador::registro($txtNombre,$txtEmail,$txtUsuario,$txtPassword,$txtPrivilegio))
      {
        $usuario=Controlador::getUser($txtUsuario,$txtPassword);

        $_SESSION["usuario"]=array(

          "id"=>$usuario->getId(),
          "nombre"=>$usuario->getNombre(),
          "usuario"=>$usuario->getUsuario(),
          "email"=>$usuario->getEmail(),
          "privilegio"=>$usuario->getPrivilegio()

        );
        //return print(json_encode($resultado));
        header("location:admin.php");
        
      }

  }

}else{

    header("location:registro.php?error=1");
}

?>