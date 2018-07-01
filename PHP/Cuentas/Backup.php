

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

        <form action="Insertar.php" enctype="multipart/form-data" method="POST">
            <input type="file" name="txtFile" id="" required>
            <input type="submit" value="Importar">
        </form>
            
        </div>
	</section>


</body>
 
</html>

