// PSEUDOCODING////
// when we look for recipes store a key -value pair in our history object
// object key = {title} value = {link}
// localstorage key history = value {stringified object}
// stringify history object, and write it to localstorage 


// when we click on previously viewed page
// grab history object from localstorage
// parse it
// and use all key value pairs, to display cards, with keys as title and vaues as src attribute to images

///////////////////////First and Last Images are displayed to page/////////////////////////

var cardOneEl = document.getElementById("cardOne");
var cardTwoEl = document.getElementById("cardTwo");
var cardThreeEl = document.getElementById("cardThree");
// var imgOneEl = document.getElementById("imgOne");
// var imageTwoEl = document.getElementById("imgTwo");
// var imageThreeEl = document.getElementById("imgThree");

var displayLastThreeRecipes = function () {
    var recipesArray = localStorage.getItem("lastThreeRecipes");
    var lastThreeRecipes = JSON.parse(recipesArray);
    console.log(lastThreeRecipes);
    console.log(lastThreeRecipes[0].id); /// use this format in for loop to grab parts of array 
    for (let i = 0; i < lastThreeRecipes.length; i++) {
        cardOneEl.innerHTML = lastThreeRecipes[0].title; /// displays title 1  ***********************
        cardTwoEl.innerHTML = lastThreeRecipes[1].title; /// displays title 2 ************************
        cardThreeEl.innerHTML = lastThreeRecipes[2].title; /// displays title 3 **********************
        // arrayPrintEl.appendChild.lastThreeRecipes[1].title;
        // document.getElementById("arrayPrint").innerHTML = JSON.stringify(recipesArray); // displays array as is
        var image = document.createElement("img");
        image.setAttribute('src', " ");
        image.setAttribute('src', lastThreeRecipes[0].image);
        cardOneEl.appendChild(image);       ///// first image is displayed ***************************
        // cardOneEl.appendChild(lastThreeRecipes[0].title)


        var image1 = document.createElement("img");
        image1.setAttribute('src', " ");
        image1.setAttribute('src', lastThreeRecipes[1].image);
        cardTwoEl.appendChild(image1);         /////// second image is displayed ***************************


        var image2 = document.createElement("img");
        image2.setAttribute('src', " ");
        image2.setAttribute('src', lastThreeRecipes[2].image);
        cardThreeEl.appendChild(image2);                         ///// third image is displayed *********************************
        // cardThreeEl.innerHTML = lastThreeRecipes[2].title;   



        console.log(lastThreeRecipes);

    }
}
displayLastThreeRecipes();






