<?php
    include('../partials/cabecera.php');

    session_start();

    if(isset($_SESSION["usuario"])){
        if($_SESSION["usuario"]["privilegio"]==1){
        
?>		
    <script>
            var numero=parseInt('<?php echo $_SESSION["usuario"]["id"] ?>')            
			web3.eth.defaultAccount=web3.eth.accounts[numero-1];
            console.log(web3.eth.defaultAccount);
            console.log('Usuario administrador');
            console.log(web3.currentProvider);
	</script>
<?php 	
        }else{
	
?>
            <script>
                var numero=parseInt('<?php echo $_SESSION["usuario"]["id"] ?>')            
			    web3.eth.defaultAccount=web3.eth.accounts[numero-1];
                console.log('Usuario normal');
                console.log(web3.currentProvider);
                console.log(web3.eth.defaultAccount);
		    </script>
          <?php   
        } 
    }
    
        ?>


<body style="background-color:rgb(237, 237, 237)">
     
	<section style="color:grey"><!--Informacion de Cuenta-->
        <div class="contenedor">
            <h1><strong>Resumen</strong> de Cuentas</h1>
            <h2 style="color:white;padding:2px; display:inline-block; background:grey">Cuentas</h2>
            <p>
                Las cuentas son claves protegidas por contraseña que pueden contener tokens basados ​​en Ether y Ethereum. 
                Pueden controlar los contratos, pero no pueden mostrar las transacciones entrantes.
            </p>
            <div class="balance" style="/*border:solid black 1px*/">
                <img src="../../Imagenes/icono.png" width="30px" style="border-radius:50%">
                <div>
                <span style="color:#41A4C3">Cuenta Principal</span><br>
                <span id="cuenta"><script>document.getElementById('cuenta').innerHTML=web3.eth.defaultAccount;</script></span>             
                </div>
            </div>
        </div>
	</section>


</body>
 
</html>
