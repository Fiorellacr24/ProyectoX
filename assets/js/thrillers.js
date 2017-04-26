var collection = document.getElementsByClassName('collection');

var collecmovie = [{url:"assets/img/movies/el-renacido.jpg", video:"https://www.youtube.com/embed/xJWb3l1TInI?ecver=1", alt:"El Renacido", sinopsis:"Sinopsis: Basada en una historia real, nos traslada a las profundidades de la América salvaje, donde el trampero Hugh Glass resulta gravemente herido y es abandonado a su suerte por un traicionero miembro de su equipo, John Fitzgerald."},
					{url:"assets/img/movies/sing.jpg", video:"https://www.youtube.com/embed/vqRS9JMpBvs?ecver=1", alt:"Sing", sinopsis:"Sinopsis: En un mundo de animales antropomorfos un koala llamado Buster busca recuperar la gloria perdida de su teatro. Para conseguirlo convoca a un concurso de canto en el que se dará $100.000 al ganador. Siendo así acuden animales motivados por el dinero, la fama y la gran oportunidad de demostrar su talento."},
					{url:"assets/img/movies/robert.jpg", video:"https://www.youtube.com/embed/WHppdg0gII8?ecver=1", alt:"Robert", sinopsis:"Sinopsis: Cuenta la historia de la familia de Otto, a quienes su siniestra ama de llaves, Agatha, les deja un muñeco cuando ella es despedida. Inmediatamente sucesos extraños ocurren. Ellos no encuentran explicación a lo que sucede en su hogar, no saben que Robert el Muñeco quiere poseer a Gene, el hijo de los Otto."}];

document.getElementById('myMovies').addEventListener('click', function(e){
		var iframe = document.getElementById("video");
		for (var i = 0; i < collection.length; i++) {
			var x = e.target.name;
	 		if(e.target.tagName == 'A' && x == collecmovie[i].alt){
			modal.style.display = "block";
			iframe.src = collecmovie[i].video;
		}
	}
});

document.getElementById('close').addEventListener('click', function(){ //Cerrar Modal
		modal.style.display = "none";
	});
