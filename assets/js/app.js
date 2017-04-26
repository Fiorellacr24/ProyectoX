window.addEventListener("load", function(event) {

	var moviesAccion = [{url:"assets/img/movies/el-renacido.jpg", video:"https://www.youtube.com/embed/xJWb3l1TInI?ecver=1", alt:"El Renacido",
	 										 sinopsis:"Sinopsis: Basada en una historia real, nos traslada a las profundidades de la América salvaje, donde el trampero Hugh Glass resulta gravemente herido y es abandonado a su suerte por un traicionero miembro de su equipo, John Fitzgerald."},
											{url:"assets/img/movies/rf-8.jpg", video:"https://www.youtube.com/embed/M_qGK2haoEg?ecver=1", alt:"Rf-8",
											 sinopsis:"Sinopsis: La carrera ha comenzado. Dom Toretto (Vin Diesel) y su equipo volverán en esta ocasión con más ganas de guerra que nunca. No faltarán los excesos de velocidad y la adrenalina a raudales para un filme del que se espera que sea la entrega con más acción de esta saga callejera por excelencia."},
											{url:"assets/img/movies/x-men.jpg", video:"https://www.youtube.com/embed/TBZjPqYty8E?ecver=1", alt:"Xmen",
											 sinopsis:"Sinopsis: Mientras el destino de la Tierra pende de un hilo, Raven (Jennifer Lawrence) con la ayuda del Profesor X (James McAvoy) debe liderar un equipo de jóvenes X-Men para detener a su mayor némesis y salvar a la humanidad de la destrucción completa."}];

	var moviesTerror = [{url:"assets/img/movies/anguish.jpg", video:"https://www.youtube.com/embed/2GVMsY4CwD0?ecver=1", alt:"Anguish",
											 sinopsis:"Sinopsis: Aparentemente, Tess sufre un trastorno que solo puede aplacarse a base de pastillas. O, al menos, eso es lo que cree. La realidad es que sus problemas psicológicos tienen otra explicación: Tess tiene el don de dejar que los espíritus se apoderen de ella."},
											{url:"assets/img/movies/anna-waters.jpg", video:"https://www.youtube.com/embed/MubwcDPy6Dg?ecver=1", alt:"Anna Waters",
											 sinopsis:"Sinopsis: Jamie, una joven y exitosa reportera, decide viajar a Singapur para investigar la verdad sobre el fallecimiento de su hermana en un misterioso accidente. Al llegar allí, empieza a descubrir conexiones con otras numerosas muertes."},
											{url:"assets/img/movies/robert.jpg", video:"https://www.youtube.com/embed/WHppdg0gII8?ecver=1", alt:"Robert",
											 sinopsis:"Sinopsis: Cuenta la historia de la familia de Otto, a quienes su siniestra ama de llaves, Agatha, les deja un muñeco cuando ella es despedida. Inmediatamente sucesos extraños ocurren. Ellos no encuentran explicación a lo que sucede en su hogar, no saben que Robert el Muñeco quiere poseer a Gene, el hijo de los Otto."}];

	var moviesInfantil = [{url:"assets/img/movies/monster-trucks.jpg",  video:"https://www.youtube.com/embed/XXYHZh9wO24?ecver=1", alt:"Monster Trucks",
												 sinopsis:"Sinopsis: Tratando de evadirse de la vida en el pueblo en el que se encuentra atrapado desde que nació, Tripp (Lucas Till), un estudiante de último curso de instituto, construye un Monster Truck a partir de piezas y restos de coches de desguace."},
												{url:"assets/img/movies/sing.jpg", video:"https://www.youtube.com/embed/vqRS9JMpBvs?ecver=1", alt:"Sing",
												 sinopsis:"Sinopsis: En un mundo de animales antropomorfos un koala llamado Buster busca recuperar la gloria perdida de su teatro. Para conseguirlo convoca a un concurso de canto en el que se dará $100.000 al ganador. Siendo así acuden animales motivados por el dinero, la fama y la gran oportunidad de demostrar su talento."},
												{url:"assets/img/movies/book-henry.jpg", video:"https://www.youtube.com/embed/Dz8R2xxeyaA?ecver=1", alt:"Book of Henry",
												 sinopsis:"Sinopsis: Narra la historia de una madre soltera que deberá hacerse cargo ella sola de la educación de su hijo, un niño superdotado"}];


	var filter = document.getElementsByClassName("filter"); //Anchors para filtrar grids.
	var grid = document.getElementById('content-grid');
	var contVideo = document.getElementById("cont-video");

	function createGrid(arr) {
		for (var obj in arr) {
			var div =	document.createElement("div");
			div.classList.add("grid");
			div.setAttribute("draggable", "true");
			div.setAttribute("id", "dragtarget");
			var img = document.createElement("img");
			img.classList.add("img-grid");
			img.setAttribute("src", arr[obj].url);
			img.setAttribute("alt", arr[obj].alt);
			var mask = document.createElement("div");
			mask.classList.add("transition");
			var text = document.createElement("text");
			text.classList.add("text");
			text.innerHTML = arr[obj].sinopsis;

			mask.appendChild(text);
			div.appendChild(img);
			div.appendChild(mask);
			grid.appendChild(div);
		}
	}

	function changeGrid(arr){
		var imgGrid = document.getElementsByClassName("img-grid");
		var text = document.getElementsByClassName("text");
		for (var i = 0; i < imgGrid.length; i++) {
			imgGrid[i].setAttribute("src", arr[i].url);
			imgGrid[i].setAttribute("alt", arr[i].alt);
			text[i].innerHTML = arr[i].sinopsis;
		}
	}

	filter[0].addEventListener("click", function(event){
		if(grid.innerHTML == ""){
			createGrid(moviesAccion);
		} else {
			changeGrid(moviesAccion);
		}
		  dragContent.style.width = "200px"; //desplegar dragover
			dragContent.style.border = "dotted";
			contVideo.style.display = "none";
	});

	filter[1].addEventListener("click", function(event){
		if(grid.innerHTML == ""){
			createGrid(moviesTerror);
		} else {
			changeGrid(moviesTerror);
		}
		dragContent.style.width = "200px";
		dragContent.style.border = "dotted";
		contVideo.style.display = "none";
	});

	filter[2].addEventListener("click", function(event){
		if(grid.innerHTML == ""){
			createGrid(moviesInfantil);
		} else {
			changeGrid(moviesInfantil);
		}
		dragContent.style.width = "200px";
		dragContent.style.border = "dotted";
		contVideo.style.display = "none";
	});

	var socialBar = document.getElementsByClassName("social-bar")[0];
	socialBar.addEventListener("mouseover", function(event){
		socialBar.style.width = "60px";
	});

});
