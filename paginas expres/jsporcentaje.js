function onit(){

	var boton = document.getElementById("boton");

	boton.onclick = function(e){
		var a=0;
	var numero1 = document.getElementById('numero1').value;
	var numero2 = document.getElementById("numero2").value;
		a= (numero1 * numero2)/100;
	var resultado = document.getElementById("resultado");
		resultado.innerHTML = a;
	}
}