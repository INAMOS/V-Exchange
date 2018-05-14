$(document).ready(function(){

    $('#loginForm').bind("submit",function() {

        $.ajax({
            type:$(this).attr("method"),
            url:$(this).attr("action"),
            data:$(this).serialize(),
            beforeSend: function(){
                $("#loginForm button").html("cargando...");
                $("#loginForm button").attr('disabled','disabled');
            },
            success: function(response){
                
                if(response.estado=="true"){
                    
                    $("body").overhang({
                        type: "success",
                        message: "Usuario Autenticado!",
                        callback:function(){
                            window.location.href="admin.php";
                        }
                      });
                }else{
                    $("body").overhang({
                        type: "error",
                        message: "Usuario ó Password Incorrecto ",
                        closeConfirm: true
                      });
                }

                $("#loginForm button").html("Ingresar");
                $("#loginForm button").removeAttr('disabled');
               },
            error: function(){
               
            } 

        });

        return false;
    });
    
});

