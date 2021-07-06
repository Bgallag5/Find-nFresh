
// when we look for recipes store a key -value pair in our history object
// object key = {title} value = {link}
// localstorage key history = value {stringified object}
// stringify history object, and write it to localstorage 


// when we click on previously viewed page
// grab history object from localstorage
// parse it
// and use all key value pairs, to display cards, with keys as title and vaues as src attribute to images

///////////////////////First and Last Images are being displayed to page. Leaving col and img variables for now in case of format change/////////////////////////
// var arrayImageEl = document.getElementById("card-3");
// var arrayPrintEl = document.getElementById("arrayPrint");
// var colOneEl = document.getElementById("colOne");
// var colTwoEl = document.getElementById("colTwo");
// var colThreeEl = document.getElementById("colThree");
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

// var displayRecipeOne = function () {
//     var firstRecipe = localStorage.getItem("recipeTitle");
//     var recipeOne = JSON.parse(firstRecipe);
//     console.log(recipeOne);
// }
// recipeImageEl = document.getElementById('recipeImage');
// imgData = getBase64Image(recipeImage);
// localStorage.setItem("lastThreeRecipes", imgData);

// function getBase64Image(img) {            ////// LOCAL STORAGE ONLY SUPPORTS STRINGS (& APPROX 5MB) SO MUST USE BASE64 DATA THEN CONVERT USING CANVAS
//     var canvas = document.createElement("canvas"); /// NVM BC THANKFULLY SPOONACULAR HAS LOW QUALITY
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

// var dataImage = localStorage.getItem('imgData');
// recipeImageEl = document.getElementById('recipeImage');
// recipeImage.src = "data:image/png;base64," + dataImage;





// document.appendChild(lastThreeRecipes[0].id)




// body.append(recipeTitle.lastThreeRecipes[0].image)

// document.getElementById("arrayPrint").innerHTML = JSON.stringify(recipesArray[0].image.); // may be better 
// var newDiv = document.createElement("div");
// newDiv.innerHTML = lastThreeRecipes.title
// newDiv.appendChild(recipesArray[i]);
// img.append(recipesArray[i].image[0]);
// img.append(recipesArray[i].image[1]);
// img.append(recipesArray[i].image[2]);





// lastThreeRecipes = response.results.slice(0, 3);
// localStorage.setItem("lastThreeRecipes", JSON.stringify(lastThreeRecipes));
// console.log(lastThreeRecipes);
// new.appendChild(lastThreeRecipes);



/////////////////////////////////////////////////////////////////////////////////////////////




