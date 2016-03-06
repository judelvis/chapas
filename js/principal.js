function verificarUsuario(){
    var email = $("#mail").val();
    if (email == ''){
        alert("Debe ingresar email");
        return false;
    }
    $.ajax({
        url : "consultas/verificaUsuario.php",
        type : "POST",
        data:"email="+email,
        success : function(resp) {
            $("#resp").html(resp);
            setTimeout(function(){  $("#fvpp-close").click(); }, 5000);

        }
    });

}

