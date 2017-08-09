/*inicializo*/
$(document).ready(function(){
	$("#boton").click(function(e){
		/*valido email, secuencia de caracteres y números que tiene que 
		contener la contraseña, guardar variables con una "expresión*/
		function isEmail(email){
			var regex = /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/;
			return regex.test(email);
		};

		/*Ingresar datos, se deja "" para ingresar datos*/
		if($("#correo").val() == ""){
			alert("Ingresar correo")
		}

		/*condiciones if si el email es falso, el email no es valido*/
		/*e.PreventDefault() se utiliza para detener una acción por omisión,
		 utilizada comunmente sobre etiquetas (a) o botones input:submit*/
		if(isEmail($("#correo").val()) == false){
			e.preventDefault();
			alert("tu correo no es valido")
		}

		/*la clave debe cumplir*/
		if($("#clave").val().length != 8){
			alert("la clave debe tener 8 digitos")
		}

		else{
			e.preventDefault();
			window.location = "index-menu.html";

		}
	});

});


/*var codigo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
	$("#boton").click(function(){
		var email = $("#email").val();
		var contraseña = $("#contraseña").val();
	});

	if(email == ""){
		$("#mensaje1").fadeIn();
		return false;
	}else{
		$("#mensaje1").fadeOut();
		if(contraseña == "" !expr.test(contraseña)){
			$("#mensaje2").fadeIn();
			return false;
		}
	}

}*/
