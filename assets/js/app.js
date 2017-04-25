window.addEventListener("load", function(event) {

	var moviesAccion = [{url:"assets/img/accion-1.jpg"},{url:"assets/img/accion-2.jpg"},{url:"assets/img/accion-3.jpg"}];
	var moviesTerror = [{url:"assets/img/terror-1.jpg"},{url:"assets/img/terror-2.jpg"},{url:"assets/img/terror-3.jpg"}];
	var moviesInfantil = [{url:"assets/img/infantil-1.jpg"},{url:"assets/img/infantil-2.jpg"},{url:"assets/img/infantil-3.jpg"}];

	//var filter = document.getElementsByClassName('filter');
	var filter = document.getElementsByClassName('filter');
	var grid = document.getElementById('content-grid');

		filter[0].addEventListener("click", function(event) {
			for (var i in moviesAccion) {
				var div =	document.createElement("div");
				div.classList.add("grid");
				var img = document.createElement("img");
				img.setAttribute("src", moviesAccion[i].url);
				var mask = document.createElement("div");
				mask.classList.add("transition");
				var text = document.createElement("text");
				text.classList.add("text");
				text.innerHTML = "Sinopsis: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, placeat! Omnis iusto, cumque id excepturi. Vitae perspiciatis aut minima asperiores repellat nihil porro officiis commodi, eos accusamus voluptates, velit assumenda.";

				mask.appendChild(text);
				div.appendChild(img);
				div.appendChild(mask);
				grid.appendChild(div);
			}
		});

		filter[1].addEventListener("click", function(event) {

		});

		filter[2].addEventListener("click", function(event) {

		});


/*
	document.addEventListener("dragover", function(event) {
    event.preventDefault();
});
*/

});
