document.addEventListener("DOMContentLoaded", function () {
	mouseGlow();
});

let cursor = document.getElementById("cursor");
let body = document.querySelector("body");

function mouseGlow() {
	document.addEventListener("mousemove", (e) => {
		body.style.backgroundPositionX = e.pageX / -20 + "px";
		body.style.backgroundPositionY = e.pageY / -20 + "px";
		cursor.style.top = e.pageY + "px";
		cursor.style.left = e.pageX + "px";
	});
}
