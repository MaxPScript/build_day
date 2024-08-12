const { log } = console;

window.onload = () => {
	// const showImageElement = document.querySelector(".showImage");
	var modal = document.getElementById("myModal");
	var img = document.getElementById("myImg");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	const images = document.querySelectorAll("img");
	images.forEach((_) => {
		_.addEventListener("click", showImage);
	});
	function showImage(ev) {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
		// const imageUrl = ev.target.src;
		// showImageElement.style.display = "block";
		// showImageElement.style.background = `hsl(200 50% 0% / 0.8) url(${imageUrl})`;
		// showImageElement.style.backgroundSize = "contain";
		// showImageElement.style.backgroundPosition = "center 0%";
		// showImageElement.style.backgroundRepeat = "no-repeat";
		// showImageElement.style.position = "absolute";
		// showImageElement.style.inset = "0";
		var span = document.getElementsByClassName("close")[0];
		span.onclick = function () {
			modal.style.display = "none";
		};
	}
};
// Get the modal

// Get the image and insert it inside the modal - use its "alt" text as a caption

// img.onclick = function(){

// }

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal

// window.onload = () => {
// 	log("loaded");
// 	const images = document.querySelectorAll("img");
// 	const modal = document.getElementById("modal");
// 	const modalImage = document.getElementById("modal-image");
// 	const container = document.querySelector(".container");
// 	images.forEach((img) => {
// 		img.addEventListener("click", (event) => {
// 			container.style.filter = "grayscale(0.5)";
// 			modal.style.display = "block";
// 			modal.style.maxWidth = "calc(65vw)";
// 			modal.style.maxHeight = "calc(90vw)";
// 			modal.style.position = "fixed";
// 			modal.style.left = "50%";
// 			modal.style.transform = "translate(-50%)";
// 			modalImage.src = event.target.src;
// 		});
// 	});
// 	modal.addEventListener("click", (event) => {
// 		if (event.target === modal) {
// 			modal.style.display = "none";
// 		}
// 	});
// };
