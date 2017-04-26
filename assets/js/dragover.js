
var dragOver = document.getElementById("dragover");
var dragContent = document.getElementById("content-dragover");
var pCopy = document.getElementById("copy");

document.addEventListener("dragstart", function(event) {
	event.dataTransfer.setData("Data", event.target.id);
	pCopy.style.display = "block";
});

dragOver.addEventListener("drop", function(event) {
	event.preventDefault();
	var data = event.dataTransfer.getData("Data");
	event.target.appendChild(document.getElementById(data));
	pCopy.style.display = "block";
});

dragOver.addEventListener("dragover", function(event) {
	event.preventDefault();
});

var myMovies = document.getElementById("myMovies");
