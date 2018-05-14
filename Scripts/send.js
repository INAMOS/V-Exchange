

function enviar(form){
    
   
    var emisor=document.getElementById('cuenta').value;
    var destinatario=document.getElementById('direccion').value;
    var monto=document.getElementById("monto").value;
    console.log(emisor);
    console.log(destinatario);
    console.log(monto);
    
    const Transaction={
        from:emisor,
        to:destinatario,
        value:web3.toWei(monto, "ether")
    }
    console.log(Transaction)

    web3.eth.sendTransaction(Transaction, function(error, Hash) {
        if(!error){
            console.log("transaccion sucesfull");
            console.log(Hash)
            document.getElementById('hash').value=Hash;

            callAjax(form);

            document.getElementById('hashMessage').innerHTML="Transaccion Exitosa!<br> Hash de Transaccion: "+Hash;
            setTimeout(()=>{document.getElementById('hashMessage').innerHTML="" },4000);
        
        
        }else{
            console.log(error.toString());
        }
    });
}

function callAjax(form){

    $.ajax({
        type:$(form).attr('method'),
        url:$(form).attr('action'),
        data:$(form).serialize(),
        beforeSend:function(){
            $('#loader').show();
            $('#boton').hide();
        },
        success:function(respuesta){

            if(respuesta.estado=="true"){

                console.log('perfecto');
                $('#loader').hide();
                $('#boton').show();
                cleaner();
                document.getElementById('Balance').innerHTML="Balance: "+web3.fromWei(web3.eth.getBalance(web3.eth.defaultAccount),'ether')+" Ether"
            
            }else{

                console.log('Hubo un error');
                $('#loader').hide();
                $('#boton').show();
                cleaner();
                document.getElementById('Balance').innerHTML="Balance: "+web3.fromWei(web3.eth.getBalance(web3.eth.defaultAccount),'ether')+" Ether"
                
            }
        },
        error:function(){
            console.log('error');
        }
    })

}


function cleaner(){
    document.getElementById('direccion').value="";
    document.getElementById('monto').value="";
}


function sendToken(form){

    var tokenDirection=document.getElementById('TOptions').value;
    var direction=document.getElementById('direccionT').value;

    var amount=document.getElementById('monto').value;

    console.log(tokenDirection);
    console.log(direction);
    console.log(amount);

    const contrato=web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimal","type":"uint8"},{"name":"_total","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
    
    var Token=contrato.at(tokenDirection);

    

    Token.transfer(direction,amount,{from:document.getElementById('cuenta').value}, function(err,txthash)
    {   
        if(!err){
            document.getElementById('hashT').value=txthash;
        }

        document.getElementById('CodMon').value=Token.symbol();

        console.log(document.getElementById('CodMon').value);
        console.log(document.getElementById('hashT').value)
        console.log(document.getElementById('Monto').value);
        
        callAjax(form);
           
    });

    
}

function setToken(){

    var tokenDirection=document.getElementById('TOptions').value;
    const contrato=web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimal","type":"uint8"},{"name":"_total","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
    var Token=contrato.at(tokenDirection);
    Token.balanceOf(web3.eth.defaultAccount,(e,re)=>{
        document.getElementById('BalanceT').innerHTML="Balance: "+re.toString()+" "+Token.name();  
    });   
}

$(document).ready(function(){

    $('#sendForm').bind('submit',function(e){

        e.preventDefault();
        enviar($(this));

    });

    $('#sendTForm').bind('submit',function(e){

        
        e.preventDefault();
        sendToken($(this));

    });

   
    
    
});