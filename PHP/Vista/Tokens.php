<?php
include '../conexion.php';


function Tokens(){

    $cnx=Conecction::conectar();

    $query="SELECT dir_mon,nom_mon,cod_mon FROM criptomoneda";

    

    $res=$cnx->prepare($query);

    $res->execute();

    $Tokens=$res->fetchAll();

    echo "<h1>".$Tokens[0]['cod_mon']."</h1>";

    if (sizeof($Tokens)==0){
        echo "<option>Aun no hay Tokens Disponibles</option>";
    }else{
        for ($i=0; $i < sizeof($Tokens); $i++) { 
            echo "<option value=".$Tokens[$i]['dir_mon'].">".$Tokens[$i]["nom_mon"]."</option>";
        }
    }
    
   
    
        
        
    
    
    
}

?>

