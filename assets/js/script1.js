// var userRecipes = {};
// var recipesContainerEl = document.getElementById("recipesContainer");

// var want2Savebtnel = document.createElement("button");
// want2Savebtnel.setAttribute("id", "saveRecipeBtn")



//FETCH THE RECIPE API RECIPES BASED ON DROPDOWN INGREDIENTS
// FORMAT:  &apiKey=YOUR-API-KEY.
// API KEY: b79ab8cbea19412a8dc76a8297bc9d42

// FETCH THE RECIPE AND NUTRITION APIS
var zipCode = document.getElementById("zipCode");
var googleKey = "AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk";
var mapContainer = document.getElementById('mapContainer');

var rememberdivEl = document.querySelector(".remember");
var forgetdivEl = document.querySelector(".forget");
var formEl = document.querySelector("form");
var userPicksEl = document.querySelector("#userPicks");
var saveSearchEl = document.querySelector("#saveSearch");
var forgetUserPicksEl = document.querySelector("#forgetUserPicks");

var h1 = document.querySelector(h1);
var pThanksel = document.querySelector(".thankYou");


//FETCH THE RECIPE API RECIPES BASED ON DROPDOWN INGREDIENTS
// FORMAT:  &apiKey=YOUR-API-KEY.
// API KEY: b79ab8cbea19412a8dc76a8297bc9d42

// FETCH THE RECIPE AND NUTRITION APIS

function getRecipe() {

    var searchRecipe = document.querySelector("#searchRecipe").value;

    fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + searchRecipe + '&apiKey=53ed151123a740f094ac3e8409f6c1f3')

        .then(function (response) {
            //console.log(response.json());
            return response.json();
        })

        // RECIPE IMAGE, TITLE, LINK 1

        .then(function (response) {
            console.log(response);
            let recipeTitle = response.results[0].title;
            console.log(recipeTitle);

            var responseContainerEl = document.querySelector('#response-container-2');
            responseContainerEl.innerHTML = recipeTitle;

            var recipe = document.createElement("recipe");
            recipe.setAttribute('src', response.results[0]);
            recipe.setAttribute("id", "recipeOne");

            responseContainerEl.appendChild(recipe);


            var recipeImage = response.results[0].image;
            console.log(recipeImage);

            var responseContainerEl = document.querySelector('#card-1');
            responseContainerEl.innerHTML = recipeImage;


            var image = document.createElement("img");
            image.setAttribute('src', " ");
            image.setAttribute('src', response.results[0].image);
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////

            responseContainerEl.appendChild(image);
            window.localStorage.setItem("recipeTitle", JSON.stringify(recipeTitle));  ////// ANI LOCAL STORAGE
            window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitle));  ///// ANI LOCAL STORAGE

            var savedRecipes = {};







            // $("#search-button").on("click", function () {
            //     //get values from input
            //     var textValue = $(this).siblings(".search-term").val();
            //     var favRecipe = $(this).parent().attr("id");

            //     //set to save in localstorage
            //     localStorage.setItem(textValue, favRecipe);
            // })

            // $("#searchRecipe .search-term,").val(localStorage.getItem("searchRecipe"));


            // var newDiv = document.createElement("div")
            // newDiv.appendChild("recipeTitle");




            // //form does not submit if pressed 
            // formEl.addEventListener("submit", function (e) {
            //     e.preventDefault();
            // });

            // //run this function if user clicks saveSearch button
            // saveSearchEl.addEventListener("click", function () {
            //     // store the recipe 
            //     localStorage.setItem("recipeTitle", JSON.stringify);
            //     // run displayRecipeCheck
            //     displayRecipeCheck();
            // });

            // // run function  if foget button clicked
            // forgetUserPicksEl.addEventListener("click", function () {
            //     // remove the stored recipe from storage
            //     localStorage.removeItem("recipeImage");
            //     //run display check to display generic page again
            //     displayRecipeCheck();
            // });

            // //define the displayRecipeCheck function
            // function displayRecipeCheck() {
            //     //check if recipe data is stored
            //     if (localStorage.getItem("recipeTitle")) {
            //         //if it is, display recipe
            //         recipeTitle = localStorage.getItem("recipeTitle");
            //         h1.textContent = "Here are your recipes!"
            //         //hide the 'remember' part of the form and show 'forgtet' part
            //         forgetdivEl.style.display = "block";
            //         rememberdivEl.style.display = "none";
            //     } else {
            //         // if not, display generic
            //         h1.textContent = "Welcome to FindFresh ";
            //         //hide forget part and show remember
            //         forgetdivEl.style.display = "none";
            //         rememberdivEl.style.display = "block";
            //     }

            // }

            // ////// run this function on load to see if a recipe was previously set and if so show the recipe//
            // document.body.onload = displayRecipeCheck;

























            // function getRecipe() {

            //     var searchRecipe = document.querySelector("#searchRecipe").value;

            //     fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + searchRecipe + '&apiKey=53ed151123a740f094ac3e8409f6c1f3')

            //         .then(function (response) {
            //             //console.log(response.json());
            //             return response.json();
            //         })

            //         // RECIPE IMAGE, TITLE, LINK 1

            //         .then(function (response) {
            //             console.log(response);
            //             var recipeTitle = response.results[0].title;
            //             console.log(recipeTitle);

            //             var responseContainerEl = document.querySelector('#response-container-2');
            //             responseContainerEl.innerHTML = recipeTitle;

            //             var recipe = document.createElement("recipe");
            //             recipe.setAttribute('src', response.results[0]);
            //             recipe.setAttribute("id", "recipeOne");

            //             responseContainerEl.appendChild(recipe);


            //             var recipeImage = response.results[0].image;
            //             console.log(recipeImage);

            //             var responseContainerEl = document.querySelector('#card-1');
            //             responseContainerEl.innerHTML = recipeImage;


            //             var image = document.createElement("img");
            //             image.setAttribute('src', " ");
            //             image.setAttribute('src', response.results[0].image);


            //             responseContainerEl.appendChild(image);
            //             window.localStorage.setItem("recipeTitle", JSON.stringify(recipeTitle));  ////// ANI LOCAL STORAGE
            //             window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitle));  ///// ANI LOCAL STORAGE/////