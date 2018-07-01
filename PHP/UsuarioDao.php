<?php

include('conexion.php');
include('Usuario.php');

class DAO extends Conecction{

    protected static $cnx;

    public static function get_Conexion(){

        self::$cnx=Conecction::conectar();
        
    }

    private static function desconectar(){
        self::$cnx=null;
    }

    public static function logi($obj_usuario){


            $query="SELECT * from usuarios WHERE usuario=:us AND password=:pas";

            self::get_Conexion();

            $resultado=self::$cnx->prepare($query);

            $usu=$obj_usuario->getUsuario();
            $cont= $obj_usuario->getPassword();
            
            $resultado->bindParam(':us',$usu);
            $resultado->bindParam(':pas',$cont);
            
            $resultado->execute();
            

            if($resultado->rowCount()>0){

                $filas=$resultado->fetch();

                if($filas["usuario"]==$obj_usuario->getUsuario() && 
                   $filas["password"]==$obj_usuario->getPassword())
                {
                    return true;
                }
                
                
            }
            
          return false;  
   
       
    }



    public static function getUsuario($obj_usuario){

        $query="SELECT id,nombre,usuario,email,password,fecha_registro,privilegio from usuarios WHERE usuario=:us AND password=:pas";

        self::get_Conexion();

        $resultado=self::$cnx->prepare($query);
       
        $usu=$obj_usuario->getUsuario();
        $cont= $obj_usuario->getPassword();
        
        $resultado->bindParam(':us',$usu);
        $resultado->bindParam(':pas',$cont);
     
        $resultado->execute();
        
        $filas=$resultado->fetch();

        $obj_usuario=new usuario();

        $obj_usuario->setId($filas["id"]);
        $obj_usuario->setUsuario($filas["usuario"]);
        $obj_usuario->setPassword($filas["password"]);
        $obj_usuario->setEmail($filas["email"]);
        $obj_usuario->setNombre($filas["nombre"]);
        $obj_usuario->setFecha_registro($filas["fecha_registro"]);
        $obj_usuario->setPrivilegio($filas["privilegio"]);
       
        return $obj_usuario;
   
    }

    public static function registrar($obj_usuario){


        $query="INSERT INTO usuarios (nombre,email,usuario,password,privilegio) VALUES(:nombre,:email,:usuario,:password,:privilegio)";
    
        self::get_Conexion();
    
        $resultado=self::$cnx->prepare($query);
    
        $usu=$obj_usuario->getUsuario();
        $cont= $obj_usuario->getPassword();
        $nom=$obj_usuario->getNombre();
        $ema=$obj_usuario->getEmail();
        $priv="2";
        
        $resultado->bindParam(':nombre',$nom);
        $resultado->bindParam(':email',$ema);
        $resultado->bindParam(':usuario',$usu);
        $resultado->bindParam(':password',$cont);
        $resultado->bindParam(':privilegio',$priv);
    
        
        
        
        if($resultado->execute()){
            return true;
        }    
        
      return false;  
    

    }

    public static function Exportar($nombre){
        
        self::get_Conexion();

        $slash=".\.";
        
        $r=explode('.',$slash);

        $ruta=dirname(getcwd());

        $ruta= str_replace($r,"/",getcwd());
        
        $tabla=explode('.',$nombre);

        $query="LOAD DATA INFILE '$ruta/backups/$nombre' INTO TABLE ".$tabla[0]." FIELDS TERMINATED BY '|' LINES TERMINATED BY ';' "; 
        
        $resultado=self::$cnx->prepare($query);

        if($resultado->execute()){
            return true;
        }
        
        return false;
    
    }
}





?>