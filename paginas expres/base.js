function base(){
	
	var t = document.getElementById('t');
	firebase.database().ref("inventario").on("value",function(snapchop){
		var hola = "";
		console.log("hola mundo");
		snapchop.forEach(function(e){
			var mundo = e.val();
			var nombre = mundo.nombre;
			console.log("hola mundo");
		});
		hola = "<tr><td> hello word</td></tr>" + hola;
		t.innerHTML = hola;
	});
	
}