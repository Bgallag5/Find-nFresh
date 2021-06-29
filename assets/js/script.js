// LINES 1-500: BEN
// LINES 501-1000: ANI
// LINES 1001-1500: RYAN
// LINES 1501-2000: SHANE
// LINES 2001-2500: GAYE







// ********************** RYAN'S CODE **********************

//FETCH THE PRODUCE API (LOCAL FARMERS MARKETS BASED ON ZIP)
function getProduce() {

    var searchProduce = "30075"
     // document.querySelector("#searchProduce").value;

    fetch('' + searchProduce + '')

    .then(function (response) {
        console.log(response.json());
        return response.json();
    })

    .then(function(response) {
        var localMarket = response;
        console.log(localMarket);

        var responseContainerEl = document.querySelector('#response-container');
        responseContainerEl.innerHTML = localMarket.description;

    })
}




//FETCH THE RECIPE API RECIPES BASED ON DROPDOWN INGREDIENTS
// FORMAT:  &apiKey=YOUR-API-KEY.
// API KEY: b79ab8cbea19412a8dc76a8297bc9d42
function getRecipe() {

    var searchRecipe = document.querySelector("#searchRecipe").value;

    fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + searchRecipe + '&apiKey=b79ab8cbea19412a8dc76a8297bc9d42')

    .then(function (response) {
        //console.log(response.json());
        return response.json();
    })

    .then(function (response) {
        var recipeTitle = response.results[0].title;
        console.log(recipeTitle);

        var responseContainerEl = document.querySelector('#response-container-2');

        responseContainerEl.innerHTML = recipeTitle;

        var recipe = document.createElement("recipe");
        recipe.setAttribute('src', response.results[0]);

        responseContainerEl.appendChild(recipe);
    });
}

