<?php
    include('../partials/cabecera.php');
    session_start();
?>
<script>
    var numero=parseInt('<?php echo $_SESSION["usuario"]["id"] ?>')            
    web3.eth.defaultAccount=web3.eth.accounts[numero-1];
    console.log(web3.eth.defaultAccount);
</script>

<body style="background-color:rgb(237, 237, 237)">

<section style="color:grey"><!--Informacion de Cuenta-->
         <div class="contenedor">
             
             <div class="balance" style="/*border:solid black 1px*/">
 
                     <form id="tokenForm"  action="../Vista/Token.php" method="POST">

                        <h1 style="color:white;padding:2px; display:inline-block; background:grey">Añadir Token</h1>
                        
                        <h3>Nombre de Token</h3>
                        <input type="text" name="txtTokenN" id="tokenName" style="border:none;width:390px;height:30px;font-size:20px" required >
                        <h3>Simbolo de Token</h3>
                        <input type="text" name="txtTokenS" id="tokenSymbol" style="border:none;width:390px;height:30px;font-size:20px" required >
                        <h3>Cantidad Total</h3>
                        <input type="text" name="txtTokenY" id="totalSupply" style="border:none;width:390px;height:30px;font-size:20px" required ><br><br>
                        
                        <input type="hidden" name="txtTokenD" id="tokenDirection"> 
                        <input type="hidden" name="txtTokenC" id="tokenCreator"> 
                                                
                        <button id="boton">Crear Token</button>

                        <img id="loading" src="../../Imagenes/loading.gif" style="display:none" alt="cargando" widht="100px" height="100px">
                        
                        <div>
                            <h4 id="message"></h4>
                        </div>

                        
                     
                     </form>
             </div>
         </div>
     </section>
 
 
 </body>
  
 </html>