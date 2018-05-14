<?php
include 'PHP/conexion.php';




    $cnx=Conecction::conectar();

    $query="SELECT dir_mon,nom_mon FROM criptomoneda";

    

    $res=$cnx->prepare($query);

    $res->execute();

    $Tokens=$res->fetchAll();

    //print_r($Tokens);
    
    echo '<select>';
    for ($i=0; $i < sizeof($Tokens); $i++) { 
        echo "<option value=".$Tokens[$i]['dir_mon'].">".$Tokens[$i]["nom_mon"]."</option>";
    }
    echo '<select>';

    echo date("Y-m-d");
    

    
   
    
        
        
    
    
 

?>

