

//create variables to better define recipe title & image...Do I need to do this or can I pull from previous function??
// my goal is to display previously viewed recipes (based on user ingredient search) to a seperate page in seperate JS file
//first declare an object which stores previous recipes
// var savedRecipes = {};
// everytime the website loads for the first time, check to see if there is history object

// in the localstorage, and if there is parse it, and set it as the initial value of the history object
// if there isn't set history object to be empty {}
// if (!savedRecipes) {
//     savedRecipes = {};
// }
// when we look for recipes store a key -value pair in our history object
// object key = {title} value = {link}
// localstorage key history = value {stringified object}
// stringify history object, and write it to localstorage 


// when we click on previously viewed page
// grab history object from localstorage
// parse it
// and use all key value pairs, to display cards, with keys as title and vaues as src attribute to images

///////////////////////LAST THREE RECIPES FROM HOME PAGE ARE BEING STORED IN THE CONSOLE IN USERPICK PAGE, I JUST NEED TO PUSH THEM TO DISPLAY ON THE PAGE////////////////////
var arrayImageEl = document.getElementById("card-3");
var arrayPrintEl = document.getElementById("arrayPrint");
var colOneEl = document.getElementById("colOne");
var colTwoEl = document.getElementById("colTwo");
var colThreeEl = document.getElementById("colThree");

var displayLastThreeRecipes = function () {
    var recipesArray = localStorage.getItem("lastThreeRecipes");
    var lastThreeRecipes = JSON.parse(recipesArray);
    console.log(lastThreeRecipes);
    console.log(lastThreeRecipes[0].id); /// use this format in for loop to grab other parts of array 
    for (let i = 0; i < lastThreeRecipes.length; i++) {
        colTwoEl.innerHTML = lastThreeRecipes[0].title; /// displays title   ***********************
        // arrayPrintEl.appendChild.lastThreeRecipes[1].title;
        // document.getElementById("arrayPrint").innerHTML = JSON.stringify(recipesArray); // displays array as is
        var image = document.createElement("img");
        image.setAttribute('src', " ");
        image.setAttribute('src', lastThreeRecipes[0].image);
        colTwoEl.appendChild(image);       ///// first image is displayed ***************************
        colOneEl.appendChild(lastThreeRecipes[0].title)


        var image1 = document.createElement("img");
        image1.setAttribute('src', " ");
        image1.setAttribute('src', lastThreeRecipes[1].image1);
        // colTwoEl.appendChild(image1);         /////// second image is not displayed......
        // colTwoEl.innerHTML = lastThreeRecipes[1].title;

        var image2 = document.createElement("img");
        image2.setAttribute('src', " ");
        image2.setAttribute('src', lastThreeRecipes[2].image);   ///// third image is displayed *********************************
        // colThreeEl.appendChild(image2);
        colThreeEl.innerHTML = lastThreeRecipes[2].title;   //// the title makes the image dissappear? ? 



        // var newDiv = document.createElement("div");
        // newDiv.innerHTML = lastThreeRecipes[1].title;
        // newDiv.appendChild(recipesArray[i]);
        console.log(lastThreeRecipes);
        /////////////onto something here/////////////////////////////////////////////
        ///////////// maybe empty out innerHTML then try again///////////////////
        // document.getElementById("arrayPrint").innerHTML = "";
        var recipeTitle1 = lastThreeRecipes[1].title;
        console.log(recipeTitle);   /////////successfully console logged first recipe title

        newDiv.appendChild(recipeTitle1);  /// when i user innerHTML here instead of append, I get three responses back to console. 
        newDiv.innerHTML = lastThreeRecipes[1].title;

        lastThreeRecipes.find(x => x.b === 3)


        // var titleEl = document.createElement("span");
        // recipeTitle.textContent = lastThreeRecipes.title;

        // titleEl.append(lastThreeRecipes.textContent);  
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

// function getBase64Image(img) {            ////// LOCAL STORAGE ONLY SUPPORTS STRINGS (APPROX 5MB) SO MUST USE BASE64 DATA THEN CONVERT USING CANVAS
//     var canvas = document.createElement("canvas");
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




