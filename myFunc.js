let blocknav = document.getElementById('blockNav');
let nav = document.getElementById('nav');
let closenav = document.getElementById('closeNav');

blocknav.onclick = function() {
	nav.style.display = "block";
	closenav.style.display = "block";
}

closenav.onclick = function() {
	nav.style.display = "none";
	closenav.style.display = "none";
}