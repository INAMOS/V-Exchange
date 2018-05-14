<?php

include('../conexion.php');

header('Content-type:application/json');

session_start();


if($_SERVER['REQUEST_METHOD']=="POST"){

    $respuesta=array();

    if(isset($_POST['txtHASH']) && isset($_POST['txtCodMon']) && isset($_POST['txtMon']))
      {

        $cnx=Conecction::conectar();

        $query="INSERT INTO transacciones (has_tra,cod_cri,mon_tra,fec_tra,ide_usu) VALUES (:has_tra,:cod_cri,:mon_tra,:fec_tra,:ide_usu)";

        $resultado=$cnx->prepare($query);

        $HASH=$_POST['txtHASH'];
        $COD=$_POST['txtCodMon'];
        $MON=$_POST['txtMon'];
        $FEC=date('Y-m-d');
        $ID=$_SESSION['usuario']['id'];

        $resultado->bindParam(':has_tra',$HASH);
        $resultado->bindParam(':cod_cri',$COD);
        $resultado->bindParam(':mon_tra',$MON);
        $resultado->bindParam(':fec_tra',$FEC);
        $resultado->bindParam(':ide_usu',$ID);
        
       if( $resultado->execute()){
       
        $respuesta=array("estado"=>"true");
        return print(json_encode($respuesta));

       }

        
        
      }

}

$respuesta=array("estado"=>"false");

return print(json_encode($respuesta));

?>