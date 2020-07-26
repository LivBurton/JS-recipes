// ------------------------------------------
// toggle the navbar for smaller screens
// ------------------------------------------
const menuToggle = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function(){
	menu.classList.toggle("show-menu");
});

// -------------------------------------------
// RECIPE SELECTION
// -------------------------------------------

const btnsDiv = document.querySelector(".btns-div");
const recipeSection = document.querySelector(".recipe-section");

window.addEventListener("DOMContentLoaded", function(){
	// console.log(recipes);
	displayRecipes(recipes);
	displayButtons();
});

//---------------------------------------------------------
// Show the selected recipes
//---------------------------------------------------------
function displayRecipes(items){
		let displayItem = items.map(function(id){
				return `<article class="each-recipe">
					<img src=${id.img} alt=${id.name} class="recipe-photo">
					<div class="recipe-description">
						<h3>${id.name}</h3>
						<p>${id.description}</p>
					</div>
				</article>`;
		});
		displayItem = displayItem.join("");
		recipeSection.innerHTML = displayItem;
}
//---------------------------------------------------------
// Show buttons based on "selection" in recipes array (data.js) and filter by selection.
//----------------------------------------------------------
function displayButtons(){

	// return accumulator of one instance of each selection from recipes
	const selection = recipes.reduce(function(total, id){
		if(!total.includes(id.selection)){
			total.push(id.selection);
		}
		// console.log(types);
		return total;
	},["all"]);

// create a button for each selection type
	let selectionBtns = selection.map(function(type){
			return `<button type="button" class="btn-selection" data-select=${type}>${type}</button>`;
	});
		selectionBtns= selectionBtns.join("");
	btnsDiv.innerHTML = selectionBtns;

// addEventListener for each button (filter by selection)
	const filters = document.querySelectorAll(".btn-selection");
	filters.forEach(function(btn){
		btn.addEventListener("click", function(id){
			const foodType = id.currentTarget.dataset.select;
			const recipeType = recipes.filter(function(item){
				if(item.selection === foodType){
					return item;
				}
			});
			if(foodType === "all"){
				displayRecipes(recipes);
			}else{
				displayRecipes(recipeType);
			}
		});
	});

}
