function openFilters() {
	document.getElementById("myFilters").style.width = "20em";
	document.getElementById("main").style.marginLeft = "20em";
	document.getElementById("main").style.display = "none";
}

function closeFilters() {
	document.getElementById("myFilters").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.display = "block";
}