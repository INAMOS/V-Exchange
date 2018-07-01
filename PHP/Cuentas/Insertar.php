<?php

include '../UsuarioControlador.php';

if($_SERVER["REQUEST_METHOD"]=="POST"){

    if(isset($_FILES["txtFile"])){

        $nombre=$_FILES["txtFile"]["name"];
        $ruta=$_FILES["txtFile"]["tmp_name"];

        if(!file_exists('backups')){

            mkdir('backups',0777,true);
        }else if(file_exists('backups')){

            if(move_uploaded_file($ruta,'backups/'.$nombre)){
                echo "archivo guardado";
            }else echo "No guardado";
        }


        if(Controlador::Exportar($nombre)){
            echo "Insercion exitosa";
        }else{
            echo "No funciono";
        }
            
    }

}


?>