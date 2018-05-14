<?php

include('UsuarioDAO.php');

class Controlador{

    public static function login($usuario,$password){

        $obj_usuario=new usuario();

        $obj_usuario->setUsuario($usuario);
        $obj_usuario->setPassword($password);
        
    
        return Dao::logi($obj_usuario);
    }

    public static function getUser($usuario,$password){

        $obj_usuario=new usuario();

        $obj_usuario->setUsuario($usuario);
        $obj_usuario->setPassword($password);
        

        return Dao::getUsuario($obj_usuario);
    }

    public static function registro($nombre,$email,$usuario,$password,$privilegio){

        $obj_usuario=new usuario();

        $obj_usuario->setNombre($nombre);
        $obj_usuario->setEmail($email);
        $obj_usuario->setUsuario($usuario);
        $obj_usuario->setPassword($password);
        $obj_usuario->setPrivilegio($privilegio);
        
        

        return Dao::registrar($obj_usuario);
    }

}
?>