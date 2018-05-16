<?php
    include('../partials/cabecera.php');
    include('../Vista/Tokens.php');
    session_start();

    if(isset($_SESSION["usuario"])){
        
?>		
    <script>
            var numero=parseInt('<?php echo $_SESSION["usuario"]["id"] ?>')            
			web3.eth.defaultAccount=web3.eth.accounts[numero-1];
            console.log(web3.eth.defaultAccount);
    </script>
 <?php } ?>     
        
<body style="background-color:rgb(237, 237, 237)">
     
	<section style="color:grey"><!--Informacion de Cuenta-->
        <div class="contenedor">

            <h1><strong>Enviar</strong> Fondos</h1>
            
            <div class="balance" style="/*border:solid black 1px*/">

                    <form id="sendForm" action="../Vista/enviar.php" method="POST">
                        
                        <h2 id="Balance"></h2>
                        <script>document.getElementById('Balance').innerHTML="Balance: "+web3.fromWei(web3.eth.getBalance(web3.eth.defaultAccount),'ether')+" Ether";</script>
                        <h3>Desde</h3>
                        
                        <div class="cuenta">
                            <img src="../../Imagenes/icono.png" width="30px" style="border-radius:50%">
                            <span id="cuenta"><script>document.getElementById('cuenta').innerHTML=web3.eth.defaultAccount;</script></span>
                        </div>
                        
                        <h3>Para</h3>
                        <input type="text" id="direccion"  style="border:none;width:390px;height:30px;font-size:18px" placeholder="0x00000" required><br>
                        <h3>Monto</h3>
                        <input type="text" id="monto" name="txtMon" style="border:none;width:390px;height:30px;font-size:18px" placeholder="0.0" required><br>
                        <input id="hash" type="hidden" name="txtHASH" >
                        <input id="codmon" type="hidden" name="txtCodMon" value="ETH">
                        <img  id="loader" src="../../Imagenes/loading.gif" style="width:100px;display:none">
                        <br>
                        <button id="boton">Enviar</button>
                        <h2 id="hashMessage"></h2>
                        
                    </form>

                    
            </div>

            <form id="sendTForm" action="../Vista/enviar.php" method="POST">
                        <h1 style="color:white;padding:2px; display:inline-block; background:grey">Enviar Token</h1><br>

                        <div id="Tokens-select">
                            <select name="txtCodMon" id="TOptions" onChange="setToken()">
                                <?php
                                    Tokens();
                                ?>
                            </select>
                        </div>

                        <h2 id="BalanceT"></h2>
                        <script>setToken()</script>
                        <script>document.getElementById('Balance').innerHTML="Balance: "+web3.fromWei(web3.eth.getBalance(web3.eth.defaultAccount),'ether')+" Ether";</script>
                        <h3>Para</h3>
                        <input type="text" id="direccionT"  style="border:none;width:390px;height:30px;font-size:18px" placeholder="0x00000" required><br>
                        <h3>Monto</h3>
                        <input type="text" id="Monto" name="txtMon" style="border:none;width:390px;height:30px;font-size:18px" placeholder="0.0" required><br>
                        <input id="hashT" type="hidden" name="txtHASH" >
                        <input type="hidden" id="CodMon" name="txtCodMon">
                        <img  id="loader" src="../../Imagenes/loading.gif" style="width:100px;display:none">
                        <br>
                        <button id="boton">Enviar Token</button>
                        <h2 id="hashmessage"></h2>
                    </form>
  
                    
        </div>
	</section>


</body>
 
</html>
