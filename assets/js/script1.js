

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

var arrayPrintEl = document.getElementById("arrayPrint");

var displayLastThreeRecipes = function () {
    var recipesArray = localStorage.getItem("lastThreeRecipes");
    var lastThreeRecipes = JSON.parse(recipesArray);
    console.log(lastThreeRecipes);
    console.log(lastThreeRecipes[0].id); /// use this format in for loop to grab other parts of array 
    for (let i = 0; i < lastThreeRecipes.length; i++) {
        arrayPrintEl.innerHTML = lastThreeRecipes[0].title; /// displays title   ***********************
        // arrayPrintEl.appendChild.lastThreeRecipes[1].title;
        // document.getElementById("arrayPrint").innerHTML = JSON.stringify(recipesArray); // displays array as is
        var image = document.createElement("img");
        image.setAttribute('src', " ");
        image.setAttribute('src', lastThreeRecipes[0].image);
        arrayPrintEl.appendChild(image);       ///// first image is displayed

        var image1 = document.createElement("img");
        image1.setAttribute('src', " ");
        image1.setAttribute('src', lastThreeRecipes[1].image1);
        arrayPrintEl.appendChild(image);         /////// second image is not displayed......


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
recipeImageEl = document.getElementById('recipeImage');
imgData = getBase64Image(recipeImage);
localStorage.setItem("lastThreeRecipes", imgData);

function getBase64Image(img) {            ////// LOCAL STORAGE ONLY SUPPORTS STRINGS (APPROX 5MB) SO MUST USE BASE64 DATA THEN CONVERT USING CANVAS
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

var dataImage = localStorage.getItem('imgData');
recipeImageEl = document.getElementById('recipeImage');
recipeImage.src = "data:image/png;base64," + dataImage;





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

// function getNumbers(min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(9);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getNumbers);

// getNumbers();

// Math.floor(Math.random() * 10) - 1;

// var myMin = 0;
// var myMax = 9;

// function randomNumber(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// console.log(randomNumber(myMin, myMax));

// var randomNumbers = [];  // create empty array 

// var createRandom = function (arr) {
//     if (arr.length >= 9) return;
//     var newNumber = Math.floor(Math.random() * 9 + 1);
//     if (arr.indexOf(newNumber) < 0) {
//         arr.push(newNumber);
//     }
//     createRandom(arr);
// };

// createRandom(randomNumbers);

// console.log(createRandom(randomNumbers));

/////////////////////////////////////////////////////////////////////////////////////////////

var numbers = [];   // make empty array
var min = 0;
var max = 9;
// how many numbers to extract
var stop = 3;


// loop through numbers array 
for (let i = 0; i < stop; i++) {
    var n = Math.floor(Math.random() * max) + min;
    var check = numbers.includes(n);

    if (check === false) {       //check that num isn't in array already
        numbers.push(n);
    } else {
        while (check === true) {
            n = Math.floor(Math.random() * max) + min;
            check = numbers.includes(n);
            if (check === false) {
                numbers.push(n);
            }
        }
    }
}


console.log(numbers);
// sort();

// //Sort array in ascending order
// function sort() {
//     numbers.sort(function (a, b) { return a - b });
//     document.getElementById("array_number").innerHTML = numbers.join(" - ");
// }
// console.log(numbers);  
