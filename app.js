window.addEventListener("load", cargarPagina);

function cargarPagina () {
	var navbar = document.getElementById("nav");
	navbar.addEventListener("click", desplegarMenu);
}

function desplegarMenu () {
	
	if (navbar.className === "topnav") {
		navbar.className += " responsive";
	} else {
		navbar.className = "topnav";
	}
}