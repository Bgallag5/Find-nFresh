// LINES 1-500: BEN
// LINES 501-1000: ANI
// LINES 1001-1500: RYAN
// LINES 1501-2000: SHANE
// LINES 2001-2500: GAYE

var ingredient = document.getElementById("searchRecipe");
var zipCode = document.getElementById("zipCode")


// ********************** RYAN'S CODE **********************


//FETCH THE RECIPE API RECIPES BASED ON DROPDOWN INGREDIENTS
// FORMAT:  &apiKey=YOUR-API-KEY.
// API KEY: b79ab8cbea19412a8dc76a8297bc9d42

// FETCH THE RECIPE AND NUTRITION APIS

function getRecipe() {

    var searchRecipe = document.querySelector("#searchRecipe").value;

  fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + searchRecipe + '&apiKey=b79ab8cbea19412a8dc76a8297bc9d42')


        .then(function (response) {
            //console.log(response.json());
            return response.json();
        })

        // RECIPE IMAGE, TITLE, LINK 1

        .then(function (response) {
            console.log(response);
            var recipeTitle = response.results[0].title;
            console.log(recipeTitle);

            var responseContainerEl = document.querySelector('#response-container-2');
            responseContainerEl.innerHTML = recipeTitle;

            var recipe = document.createElement("recipe");
            recipe.setAttribute('src', response.results[0]);

            responseContainerEl.appendChild(recipe);


            var recipeImage = response.results[0].image;
            console.log(recipeImage);

            var responseContainerEl = document.querySelector('#card-1');
            responseContainerEl.innerHTML = recipeImage;

            var image = document.createElement("img");
            image.setAttribute('src', " ");
            image.setAttribute('src', response.results[0].image);


            responseContainerEl.appendChild(image);



            // RECIPE IMAGE, TITLE, LINK 2

            var recipeTitleI = response.results[1].title;
            console.log(recipeTitleI);

            var responseContainerEl = document.querySelector('#response-container-i');
            responseContainerEl.innerHTML = recipeTitleI;

            var recipeI = document.createElement("recipe");
            recipeI.setAttribute('src', response.results[1]);

            responseContainerEl.appendChild(recipeI);


            var recipeImageI = response.results[1].image;
            console.log(recipeImageI);

            var responseContainerEl = document.querySelector('#card-2');
            responseContainerEl.innerHTML = recipeImageI;

            var imageI = document.createElement("img");
            imageI.setAttribute('src', " ");
            imageI.setAttribute('src', response.results[1].image);


            responseContainerEl.appendChild(imageI);


            // RECIPE IMAGE, TITLE, LINK 3

            var recipeTitleII = response.results[2].title;
            console.log(recipeTitleII);

            var responseContainerEl = document.querySelector('#response-container-ii');
            responseContainerEl.innerHTML = recipeTitleII;

            var recipeII = document.createElement("recipe");
            recipeII.setAttribute('src', response.results[2]);

            responseContainerEl.appendChild(recipeII);


            var recipeImageII = response.results[2].image;
            console.log(recipeImageII);

            var responseContainerEl = document.querySelector('#card-3');
            responseContainerEl.innerHTML = recipeImageII;

            var imageII = document.createElement("img");
            imageII.setAttribute('src', " ");
            imageII.setAttribute('src', response.results[2].image);


            responseContainerEl.appendChild(imageII);



            // RECIPE 1 : // API CALL IS WORKIGN BUT RETURNING A 404 

            var id = response.results[0].id;
            console.log(id);

            fetch(`https://api.spoonacular.com/recipes/${id}/summary&apiKey=b79ab8cbea19412a8dc76a8297bc9d42`)

                .then(function (response) {
                    console.log(response);
                    return response.json();
                })

                .then(function (response) {
                    var recipeLink = response.url
                    console.log(recipeLink);

                    // var responseContainerEl = document.querySelector('#response-container-ii');
                    // responseContainerEl.innerHTML = recipeTitleII;

                    // var recipeII = document.createElement("recipe");
                    // recipeII.setAttribute('src', response.results[2]);

                    // responseContainerEl.appendChild(recipeII);


                    // var recipeImageII = response.results[2].image;
                    // console.log(recipeImageII);

                    // var responseContainerEl = document.querySelector('#card-3');
                    // responseContainerEl.innerHTML = recipeImageII;

                    // var imageII = document.createElement("img");
                    // imageII.setAttribute('src', " ");
                    // imageII.setAttribute('src', response.results[2].image);


                    // responseContainerEl.appendChild(imageII);

                })
        });
}

















































































//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN START
//Notes:
// use the API id of each recipe to eventually link to the spoonful recipe page
//combine USDA API with Google maps
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//


function findMarkets() {
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
    markets.style.display = "flex";

    fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var market1 = response.results[0].id
            var market2 = response.results[1].id
            var market3 = response.results[2].id
            var market4 = response.results[3].id

            fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market1)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response.marketdetails.Address);
                    console.log(response.marketdetails.GoogleLink);
                    title1.textContent = response.marketdetails.Address;
                    map1.href = response.marketdetails.GoogleLink;
                })
            fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market2)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    title2.textContent = response.marketdetails.Address;
                    map2.href = response.marketdetails.GoogleLink;
                })
            fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market3)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    title3.textContent = response.marketdetails.Address;
                    map3.href = response.marketdetails.GoogleLink;
                })
            fetch("https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + market4)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    title4.textContent = response.marketdetails.Address;
                    map4.href = response.marketdetails.GoogleLink;
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