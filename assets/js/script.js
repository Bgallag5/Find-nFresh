// LINES 1-500: BEN
// LINES 501-1000: ANI
// LINES 1001-1500: RYAN
// LINES 1501-2000: SHANE
// LINES 2001-2500: GAYE

var ingredient = document.getElementById("searchRecipe");
var zipCode = document.getElementById("zipCode")




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
//combine USDA API with Google maps- No Images for the USDA API, can we use google maps as the visual element
//on the market-display section?
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//


function findMarkets(){
    var zip = zipCode.value;
    var markets = document.getElementById("market-display");
    var zipInput = document.getElementById("zipBox");
    var title1 = document.getElementById("title-1");
    var map1 = document.getElementById("map-1");
    var title2 = document.getElementById("title-2");
    var map2 = document.getElementById("map-2");
    var title3 = document.getElementById("title-3");
    var map3 = document.getElementById("map-3");
    var title4 = document.getElementById("title-4");
    var map4 = document.getElementById("map-4");

    zipInput.style.display = "none";
    markets.style.display="flex";

    fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip)
    .then(function(response) {
      return response.json();
    })
    .then(function(response){
        var market1 = response.results[0].id
        var market2 = response.results[1].id
        var market3 = response.results[2].id
        var market4 = response.results[3].id

        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market1)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var link = response.marketdetails.GoogleLink;
            link = link.replace(/[^a-z+/.:?=]/gi, '').replace([".C."], '');
            if (!link.includes("Farmers")){
                link = link.concat("+Farmers+Market");
            }
          title1.textContent = response.marketdetails.Address;
          map1.href = link;
          console.log(link);
        })
        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market2)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var link = response.marketdetails.GoogleLink;
            link = link.replace(/[^a-z+/.:?=]/gi, '').replace([".C."], '');
            if (!link.includes("Farmers")){
                link = link.concat("+Farmers+Market");
            }
          title2.textContent = response.marketdetails.Address;
          map2.href = link;
          console.log(link);

          })
        fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market3)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var link = response.marketdetails.GoogleLink;
            link = link.replace(/[^a-z+/.:?=]/gi, '').replace([".C."], '');
            if (!link.includes("Farmers")){
                link = link.concat("+Farmers+Market");
            }
          title3.textContent = response.marketdetails.Address;
          map3.href = link;
          console.log(link);

          })
          fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market4)
          .then(function(response){
              return response.json();
          })
          .then(function(response){
            var link = response.marketdetails.GoogleLink;
            link = link.replace(/[^a-z+/.:?=]/gi, '').replace([".C."], '');
            if (!link.includes("Farmers")){
                link = link.concat("+Farmers+Market");
            }
          title4.textContent = response.marketdetails.Address;
          map4.href = link;
          console.log(link);

            })
    })
}





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