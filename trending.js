// ------------------------------------------
// toggle the navbar for smaller screens
// ------------------------------------------
const menuToggle = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function(){
	menu.classList.toggle("show-menu");
});


// ------------------------------------------
// skip through trending recipes from data.js
// ------------------------------------------

const trendImg = document.getElementById("top-img");
const trendTitle = document.getElementById("top-title");
const trendDesc = document.getElementById("top-description");
let trendArray = [];


const btnTrendPrev = document.querySelector(".prev-btn");
const btnTrendNext = document.querySelector(".next-btn");
const article = document.querySelector(".top-item");

let itemTrending = 0;


window.addEventListener("DOMContentLoaded", function() {
	setTrendArray();
	displayRecipe();
		// console.log(trendArray);
});

function setTrendArray() {
	for (let i = 0; i < recipes.length; i++) {
		if (recipes[i].trending === "yes") {
			trendArray.push(recipes[i]);
			// console.log(trendArray[i]);
		}
	}
}

function displayRecipe() {

	const item = trendArray[itemTrending];
	trendImg.src = item.img;
	trendImg.alt = item.name;
	trendTitle.textContent = item.name;
	trendDesc.textContent = item.description;

}

btnTrendNext.addEventListener("click", function() {
	if (article.classList.contains("animate")) {
		article.classList.remove("animate");
	}
	setTimeout(function() {
		article.classList.add("animate");
	}, 5);
	itemTrending++;
	if (itemTrending > trendArray.length - 1) {
		itemTrending = 0;
	}
	displayRecipe();
});

btnTrendPrev.addEventListener("click", function() {
	if (article.classList.contains("animate")) {
		article.classList.remove("animate");
	}
	setTimeout(function() {
		article.classList.add("animate");
	}, 5);
	itemTrending--;
	if (itemTrending < 0) {
		itemTrending = trendArray.length - 1;
	}
	displayRecipe();
});
