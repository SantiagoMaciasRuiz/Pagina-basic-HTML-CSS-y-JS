function fecha(){
	var boton = document.getElementById('boton');

	//eventos

	boton.onclick = function(e){
	var a=0;
	var mes = document.getElementById('mes').value;
	var dia = document.getElementById("dia").value;
	var año = document.getElementById("año").value;
	a = (año%100);
	a+= a/4;
	a= Math.floor(a);
	a+= parseInt(dia);
	mes = parseInt(mes);
	switch(mes){
		case 1:
			mes = 0;
			break;
		case 2:
			mes = 3;		
			break;
		case 3:
			mes = 3;
			break;
		case 4:
			b = 6;
			break;
		case 5:
			mes = 1;
			break;
		case 6:
			mes = 4;
			break;
		case 7:
			mes = 6;
			break;
		case 8:
			mes = 2;
			break;
		case 9:
			mes = 5;
			break;
		case 10:
			mes = 0;
			break;
		case 11:
			mes = 3;
			break;
		case 12:
			mes = 5;
			break;	
		default: alert("Error: Mes incorrecto");
		return mes;	
	}
	a+=mes;
	var b;
	b= a%7;
	switch(b){
		case 1:
		 	b = 0;
		 	b = ("Domingo");
		 break;
		case 2:
			b = 1;
			b = ("Lunes");
		break;
		case 3:
			b = 2;
			b = ("Martes");
		break;
		case 4:
			b = 3;
			b = ("Miercoles");
		break;
		case 5:
			b = 4;
			b = ("Jueves");
		break;
		case 6:
			b = 5;
			b = ("Viernes");
		break;
		case 7:
			b = 6;
			b = ("Sabado");
		break;	 
	}	

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = b;
	}
	
}