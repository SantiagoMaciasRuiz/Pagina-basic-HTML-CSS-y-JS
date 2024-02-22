function areas(){
	var boton = document.getElementById('boton');
	var boton1 = document.getElementById('boton1');
	var boton2 = document.getElementById('boton2');

	boton.onclick = function(e){
		var a=0;
		var base = document.getElementById("base").value;
		var altura = document.getElementById("altura").value;
		a = (base*altura)/2;	
		var resultado = document.getElementById("resultado");
		resultado.innerHTML = a;
	}
	boton1.onclick = function(e){
		var a=0;
		var base1 = document.getElementById("base1").value;
		var altura1 = document.getElementById("altura1").value;
		a = base1*altura1;
		var resultado1 = document.getElementById("resultado1");
		resultado1.innerHTML = a;
	}
	boton2.onclick = function(e){
		var a=0;
		var lados = document.getElementById("lados").value;
		a = lados*2
		var resultado2 = document.getElementById("resultado2");
		resultado2.innerHTML = a;
	}
}