// LINES 1-500: BEN
// LINES 501-1000: ANI
// LINES 1001-1500: RYAN
// LINES 1501-2000: SHANE
// LINES 2001-2500: GAYE

var ingredient = document.getElementById("searchRecipe");





// ********************** RYAN'S CODE **********************

//FETCH THE PRODUCE API (LOCAL FARMERS MARKETS BASED ON ZIP)
// function getMarkets() {

// }



// // FETCH NUTRITIONAL INFO FOR YOUR INGREDIENT
function getHealth() {

    var searchProduce = "apple"
     // document.querySelector("#searchProduce").value;

    fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query=' + searchProduce + '&api_key=nyDYT2Um4SpETFMeJhGqMrB0GNnwvVDQw1H5nx0K')

    .then(function (response) {
       // console.log(response.json());
        return response.json();
    })

    .then(function(response) {
        var healthInfo = response.foods[0].foodNutrients[0].nutrientName;
        console.log(healthInfo);

        var responseContainerEl = document.querySelector('#response-container-1');
        responseContainerEl.innerHTML = healthInfo;

        var health = document.createElement("health");
        health.setAttribute('src', response.foods[0]);

        responseContainerEl.appendChild(health);

    });
}

// getHealth();


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

















































































//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN START
//Notes:
// use the API id of each recipe to eventually link to the spoonful recipe page
//combine USDA API with Google maps
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//


function findMarkets(){
    var zip = "22182";

    fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip)
    .then(function(response) {
      return response.json();
    })
    .then(function(response){
        var market1 = response.results[0].id
        var market2 = response.results[1].id
        var market3 = response.results[2].id

        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market1)
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(response){
          console.log(response.marketdetails.Address);
          console.log(response.marketdetails.GoogleLink);
        })
        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market2)
        .then(function(response){
            console.log(response.json());
        })
        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market3)
        .then(function(response){
            console.log(response.json());
        })
    })
}
findMarkets();




// function getRecipes(){
//     var spoonKey = "20af9545e7844540b4be28a453355597"
//     var searchTerm = "broccoli";
//     // var searchTerm = ingredient.value;
//     // console.log(searchTerm);

// fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=" + spoonKey + "&query=" + searchTerm)
// .then(function(response) {
//     return response.json();
// })
// .then(function(response){
//     console.log(response)
//     console.log(response.results[2])
// })

// fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + spoonKey + "&ingredients=" + searchTerm)
// .then(function(response) {
//     return response.json();
// })
// .then(function(response){
//     console.log(response)
//     console.log(response[1])
// })
// }

// getRecipes();





























//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN END
//
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//