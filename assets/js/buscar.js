var moviesAccion = [{url:"assets/img/movies/el-renacido.jpg", video:"https://www.youtube.com/embed/xJWb3l1TInI?ecver=1", alt:"El Renacido",
	 										 sinopsis:"Sinopsis: Basada en una historia real, nos traslada a las profundidades de la América salvaje, donde el trampero Hugh Glass resulta gravemente herido y es abandonado a su suerte por un traicionero miembro de su equipo, John Fitzgerald."},
											{url:"assets/img/movies/rf-8.jpg", video:"https://www.youtube.com/embed/M_qGK2haoEg?ecver=1", alt:"Rf-8",
											 sinopsis:"Sinopsis: La carrera ha comenzado. Dom Toretto (Vin Diesel) y su equipo volverán en esta ocasión con más ganas de guerra que nunca. No faltarán los excesos de velocidad y la adrenalina a raudales para un filme del que se espera que sea la entrega con más acción de esta saga callejera por excelencia."},
											{url:"assets/img/movies/x-men.jpg", video:"https://www.youtube.com/embed/TBZjPqYty8E?ecver=1", alt:"Xmen",
											 sinopsis:"Sinopsis: Mientras el destino de la Tierra pende de un hilo, Raven (Jennifer Lawrence) con la ayuda del Profesor X (James McAvoy) debe liderar un equipo de jóvenes X-Men para detener a su mayor némesis y salvar a la humanidad de la destrucción completa."}];

function createGridMovie(getURL){
	var gridbusqueda = document.getElementsByClassName("gridbusqueda");
	var div = document.createElement("div");
	var img = document.createElement("img");
	img.setAttribute("src", getURL);
	div.appendChild(img);
	contenedor.appendChild(div);
}

function getURL(e){
	for(var i = 0; i < moviesAccion.length; i++){
		if(){

		}
	}
}

/*var inputsearch = document.getElementsByClassName("searchbar");
	function createGridMovie(e){
		if(e.keyCode == 13){
			createGridMovie(this.value);
			this.value = "";
		}
	}
inputsearch.onkeydown = getURL;*/

/*document.getElementsByClassName('searchbar').onchange = function(){
		var text = document.getElementById('searchbar').value;
		document.getElementById('resultado').innerHTML = text;
	}*/