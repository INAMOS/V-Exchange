<?php

    class Conecction{

        public static function conectar(){
            
            try{

                $db_user="root";
                $db_password="";
                $db_host="localhost";
                $db_name="exchange";

                $conexion= new PDO("mysql:host=$db_host;dbname=$db_name;charset=UTF8",$db_user,$db_password);

                return $conexion;

           }catch(PDOException $e){

                die($e->getMessage());
                
            }

            
 
        }
    }

?>