
$(document).ready(function(){


$("#home").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-dos-menu.html";/*ubicación actual*/
});

$("#uneperfil").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-tres-perfil.html";
});

$("#uneperfil").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-tres-perfil.html";
});

$("#preguntas").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-cuatro-preguntas.html";/*ubicación actual*/
});

$("#press").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-cuatro-preguntas.html";/*ubicación actual*/
});

$("#saldo").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-cinco-saldo.html";/*ubicación actual*/
});

$("#saldomenu").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-cinco-saldo.html";/*ubicación actual*/
});

$("#tarifa").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-seis-tarifa.html";/*ubicación actual*/
});

$("#menucalculo").click(function(e){
	e.preventDefault();/*detiene una acción*/
	Window.location = "index-seis-tarifa.html";/*ubicación actual*/
});

/*imprimir-tarjeta*/

var tarjetas = $("#tarjetas").val();/*obtener un valor*/
	$("#agregar").click(function(e){
		localStorage.tarjetas = $("#tarjetas").val();
		/*append agrega y localStorage almacena */
	$("#guardartarjetas").append('<p class="imprime>' + localStorage.tarjetas + '</p>');

	});

/*imprimir-saldo*/
$(document).ready(function(){
	$("#saldo2").on("click", function(){
		var ultimoSaldo = $("#tarjeta2").val();
	$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + ultimoSaldo,
		type: 'GET',
		datatype: 'JSON',
	})

	.done(function(response){
		$("#muestrasaldo").append('<div id="saldito">' + response.saldoTarjeta + '</div')
		console.log(response.saldoTarjeta);
	})

	.fail(function(error){
		console.log("error");
	})

});
    })
	});

/*calcular saldo*/

    $(document).ready(function(){
	$("#saldo3").on("click", function(){
		var ultimoSaldo = $("#tarjeta5").val();
		var tarifa  =$("#imtarifa").val();
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + ultimoSaldo, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
        	$("#calculasaldo").append('<div id="saldito">'+ response.saldoTarjeta +'</div>')
            console.log(response.saldoTarjeta-tarifa);
        })

        .fail(function(error){
            console.log("error");
        })
    });
	})

