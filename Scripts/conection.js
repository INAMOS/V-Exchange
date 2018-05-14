
 
 if (typeof web3 !== 'undefined') 
 {
    
            web3 = new Web3(web3.currentProvider);
            console.log("se encontro web3");
            console.log("El proveedor es Metamask");


} else {
        
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            console.log("Web3 se configuro en el puerto localhost:8545");
}
        
if(web3.isConnected){

    console.log("Web3 Esta conectado al Blockchain");
}
else{
    console.log("Web3 No esta conectado");
}


        
    
