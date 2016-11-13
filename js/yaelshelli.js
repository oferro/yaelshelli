/**
 * @author OferR
 */

function smalMenu() {
	var x = document.getElementById("mnu").style.display;
	if (x === "block") {
		document.getElementById("mnu").style.display = "none";
	} else {
		document.getElementById("mnu").style.display = "block";
	}
}

function goToHome () {
	window.location.href = "index.html";
}