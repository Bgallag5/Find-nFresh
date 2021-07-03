

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
//         }


//         )
// }
///////////////////////LAST THREE RECIPES FROM HOME PAGE ARE BEING STORED IN THE CONSOLE, I JUST NEED TO PUSH THEM TO THE PAGE////////////////////
var displayLastThreeRecipes = function () {
    var recipesArray = localStorage.getItem("lastThreeRecipes");
    var lastThreeRecipes = JSON.parse(recipesArray);
    console.log(lastThreeRecipes);
    for (let i = 0; i < lastThreeRecipes.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.appendChild(lastThreeRecipes);
        console.log(lastThreeRecipes[i]);

    }


}

displayLastThreeRecipes();


lastThreeRecipes = response.results.slice(0, 3);
localStorage.setItem("lastThreeRecipes", JSON.stringify(lastThreeRecipes));
console.log(lastThreeRecipes);