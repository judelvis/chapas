function verificarUsuario(){
    var email = $("#mail").val();
    if (email == ''){
        $("#mail").css({'border': '3px solid #CC0000'});
		 $("#mail").attr("placeholder", "Disculpe debe registrar su E-mail").placeholder();
        return false;
    }
    $.ajax({
        url : "consultas/verificaUsuario.php",
        type : "POST",
        data:"email="+email,
        success : function(resp) {
            $("#resp").html(resp);
			 $("#mail").css({'border': '3px solid #ccc'});
            setTimeout(function(){  $("#fvpp-close").click(); }, 5000);

        }
    });

}