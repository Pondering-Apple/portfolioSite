document.addEventListener("DOMContentLoaded", function () {
	window.scrollTo(0, 0);
	mouseGlow();
	scrolling();
});

let cursor = document.getElementById("cursor");
let body = document.querySelector("body");

function mouseGlow() {
	document.addEventListener("mousemove", (e) => {
		const cursorOffset = 15 / 2;
		body.style.backgroundPositionX = e.clientX / -20 + "px";
		body.style.backgroundPositionY = e.clientY / -20 + "px";
		cursor.style.top = e.clientY + "px";
		cursor.style.left = e.clientX + "px";
	});
}

function scrolling() {
	const navLinks = document.querySelectorAll('a[href^="#"]'); // Select all nav links
	const sections = document.querySelectorAll(".page"); // Select all sections

	// Disable normal scrolling
	document.body.style.overflow = "hidden";

	// Add click event listeners to nav links
	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault(); // Prevent default anchor behavior

			// Remove active class from all links
			navLinks.forEach((navLink) => navLink.classList.remove("active"));

			// Add active class to the clicked link
			link.classList.add("active");

			const targetId = link.getAttribute("href").substring(1); // Get the target section ID
			const targetSection = document.getElementById(targetId);

			// Scroll to the target section smoothly
			targetSection.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	});
}
