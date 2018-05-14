
var abi=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimal","type":"uint8"},{"name":"_total","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];

function desplegar(form){
    
    var _name = document.getElementById('tokenName').value;
    var _symbol = document.getElementById('tokenSymbol').value;
    var _decimal =3  ;
    var _total = document.getElementById('totalSupply').value ;
    

    if(_name!="" && _symbol!="" && _total!=""){

        var erc20tokenContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimal","type":"uint8"},{"name":"_total","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
        var erc20token = erc20tokenContract.new(
        _name,
        _symbol,
        _decimal,
        _total,
        {
            from: web3.eth.accounts[0], 
            data:'0x60806040526040805190810160405280600481526020017f48312e3000000000000000000000000000000000000000000000000000000000815250600690805190602001906200005192919062000146565b503480156200005f57600080fd5b50604051620011f6380380620011f683398101806040528101908080518201929190602001805182019291906020018051906020019092919080519060200190929190505050806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508060028190555083600390805190602001906200010792919062000146565b5081600460006101000a81548160ff021916908360ff16021790555082600590805190602001906200013b92919062000146565b5050505050620001f5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018957805160ff1916838001178555620001ba565b82800160010185558215620001ba579182015b82811115620001b95782518255916020019190600101906200019c565b5b509050620001c99190620001cd565b5090565b620001f291905b80821115620001ee576000816000905550600101620001d4565b5090565b90565b610ff180620002056000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100c1578063095ea7b31461015157806318160ddd146101b657806323b872dd146101e1578063313ce5671461026657806354fd4d501461029757806370a082311461032757806395d89b411461037e578063a9059cbb1461040e578063cae9ca5114610473578063dd62ed3e1461051e575b3480156100bb57600080fd5b50600080fd5b3480156100cd57600080fd5b506100d6610595565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101165780820151818401526020810190506100fb565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015d57600080fd5b5061019c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610633565b604051808215151515815260200191505060405180910390f35b3480156101c257600080fd5b506101cb610725565b6040518082815260200191505060405180910390f35b3480156101ed57600080fd5b5061024c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061072b565b604051808215151515815260200191505060405180910390f35b34801561027257600080fd5b5061027b6109a4565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102a357600080fd5b506102ac6109b7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ec5780820151818401526020810190506102d1565b50505050905090810190601f1680156103195780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561033357600080fd5b50610368600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a55565b6040518082815260200191505060405180910390f35b34801561038a57600080fd5b50610393610a9d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103d35780820151818401526020810190506103b8565b50505050905090810190601f1680156104005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561041a57600080fd5b50610459600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b3b565b604051808215151515815260200191505060405180910390f35b34801561047f57600080fd5b50610504600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610ca1565b604051808215151515815260200191505060405180910390f35b34801561052a57600080fd5b5061057f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f3e565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062b5780601f106106005761010080835404028352916020019161062b565b820191906000526020600020905b81548152906001019060200180831161060e57829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60025481565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156107f7575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156108035750600082115b1561099857816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905061099d565b600090505b9392505050565b600460009054906101000a900460ff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a4d5780601f10610a2257610100808354040283529160200191610a4d565b820191906000526020600020905b815481529060010190602001808311610a3057829003601f168201915b505050505081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b335780601f10610b0857610100808354040283529160200191610b33565b820191906000526020600020905b815481529060010190602001808311610b1657829003601f168201915b505050505081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610b8b5750600082115b15610c9657816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610c9b565b600090505b92915050565b600082600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff1660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e01905060405180910390207c01000000000000000000000000000000000000000000000000000000009004338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828051906020019080838360005b83811015610ee2578082015181840152602081019050610ec7565b50505050905090810190601f168015610f0f5780820380516001836020036101000a031916815260200191505b509450505050506000604051808303816000875af1925050501515610f3357600080fd5b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a72305820f3170e30daa853754ce93380be3eb436e8c66d99b64c8bfc3dcc6880f65d6e4c0029', 
            gas:'4700000'
        }, function (e, contract){
            
            if (typeof contract.address !== 'undefined') {
                
                document.getElementById('tokenDirection').value=contract.address;
                document.getElementById('tokenCreator').value=web3.eth.accounts[0];
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                ajaxCall(form,contract.address);
            }
        })
    }
    
   
}

function clean(){
    document.getElementById('tokenName').value="";
    document.getElementById('tokenSymbol').value="";
    document.getElementById('totalSupply').value="";
}

function ajaxCall(form,contract){

    $.ajax({
        type:$(form).attr("method"),
        url:$(form).attr("action"),
        data:$(form).serialize(),
        beforeSend:function(){
            
            $('#boton').hide();
            $('#loading').show();
            console.log('antes de enviar');  
        },
        success: function(response){
            console.log('se recibio'); 
            console.log('1') 
            if(response.estado=="true"){
                console.log('GOOD');
                clean();
                $('#loading').delay(7000).hide();
                $('#boton').show();
                $('#message').html('Token Creado con exito en la Direccion: '+contract);
            }else{
                console.log("AJAX ERROR");
            }
        },
        error:function(){
            console.log('WRONG');
        }   
    });

    console.log('2');
}


$(document).ready(function(){

        $('#tokenForm').bind("submit",function(e){

            e.preventDefault();
            desplegar($(this));
           
               /* $.ajax({
                    type:$(this).attr("method"),
                    url:$(this).attr("action"),
                    data:$(this).serialize(),
                    beforeSend:function(){
                        
                        $('#boton').hide();
                        $('img').show();
                        clean(); 
                        console.log('antes de enviar');  
                    },
                    success: function(response){
                        console.log('se recibio');  
                        if(response.estado=="true"){
                            console.log('GOOD');
                            $('img').delay(7000).hide();
                            $('#boton').show();
                        }else{
                            console.log("AJAX ERROR");
                        }
                    },
                    error:function(){
                        console.log('WRONG');
                    }   
                });*/

            })
        
            
            
        
        });






