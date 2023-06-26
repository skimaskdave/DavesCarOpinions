var allFilters = {
	// type filters
	"coupe": false,
	"convertible": false,
	"hatchback": false,
	// gearbox filters
	"manual": false,
	"automatic": false
};

function openFilters() {
	document.getElementById("myFilters").style.width = "20em";
	document.getElementById("main").style.marginLeft = "20em";
	document.getElementById("main").style.display = "none";
	document.getElementById("page").style.marginLeft = "20em";
	document.getElementById("myFilters").style.borderRight = "0.25em solid black";
}

function closeFilters() {
	document.getElementById("myFilters").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.display = "block";
	document.getElementById("page").style.marginLeft = "0";
	document.getElementById("myFilters").style.borderRight = "none";	
}

function updateFilters(id) {
	var filterID = id.slice(0, -3);
	allFilters[filterID] = document.getElementById(id).checked;
	console.log(allFilters);
}

function applyFilters() {
	
}