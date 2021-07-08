// LINES 1-500: BEN
// LINES 501-1000: ANI
// LINES 1001-1500: RYAN
// LINES 1501-2000: SHANE
// LINES 2001-2500: GAYE

// var ingredient = document.getElementById("searchRecipe");

var zipCode = document.getElementById("zipCode");
var googleKey = "AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk";
var mapContainer = document.getElementById("mapContainer");
var spoonKey1 = "53ed151123a740PPPf094ac3e8409f6c1f3"
var spoonKey2 = "b79ab8cbea19412a8dc76a8297bc9d42"
var spoonKey3 = "cf30b0d4a91f446480096e46c8f5ed82"


//FETCH THE RECIPE API RECIPES BASED ON DROPDOWN INGREDIENTS
// FORMAT:  &apiKey=YOUR-API-KEY.
// API KEY: b79ab8cbea19412a8dc76a8297bc9d42

// FETCH THE RECIPE AND NUTRITION APIS

var searchRecipe = document.querySelector("#searchRecipe");  
searchRecipe.addEventListener("keyup", function(event){   //add event listener for "keyup if keycode=13", keycode 13= enter key
  if (event.keyCode === 13){
    event.preventDefault();
    document.getElementById("search-button").click();  //if enter key is released, the button is set to onclick and the function runs
  }
})

function getRecipe() {

  var searchRecipe = document.querySelector("#searchRecipe").value;

  fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      searchRecipe +
      "&apiKey=" + spoonKey3
  )
    .then(function (response) {
      //console.log(response.json());
      return response.json();
    })

    // RECIPE IMAGE, TITLE, LINK 1

    .then(function (response) {
    
      var x = Math.floor(Math.random() * 4);
      var y = Math.floor(Math.random() * 3) + 4;
      var z = Math.floor(Math.random() * 3) + 7;
      console.log(x)
      console.log(y)
      console.log(z)

      console.log(response);
      const lastThreeRecipes = [response.results[x], response.results[y], response.results[z] ];
      console.log(lastThreeRecipes);
      localStorage.setItem(
        "lastThreeRecipes",
        JSON.stringify(lastThreeRecipes)
      );

      console.log(lastThreeRecipes);
      var recipeTitle = response.results[x].title;
      console.log(recipeTitle);

      var responseContainerEl = document.querySelector("#response-container-2");
      responseContainerEl.innerHTML = recipeTitle;

      var recipeImage = response.results[x].image;
      console.log(recipeImage);

      var responseContainerEl = document.querySelector("#card-1");
      responseContainerEl.innerHTML = "";

      var image = document.createElement("img");
      image.setAttribute("src", " ");
      image.setAttribute("src", response.results[x].image);

      responseContainerEl.appendChild(image);
      window.localStorage.setItem("recipeTitle", JSON.stringify(recipeTitle)); ////// ANI LOCAL STORAGE
      window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitle)); ///// ANI LOCAL STORAGE

      // RECIPE IMAGE, TITLE, LINK 2/////////////////////////////////////////////////////////

      var recipeTitleI = response.results[y].title;
      console.log(recipeTitleI);

      var responseContainerEl = document.querySelector("#response-container-i");
      responseContainerEl.innerHTML = recipeTitleI;

      var recipeImageI = response.results[y].image;
      console.log(recipeImageI);

      var responseContainerEl = document.querySelector("#card-2");
      responseContainerEl.innerHTML = "";

      var imageI = document.createElement("img");
      imageI.setAttribute("src", " ");
      imageI.setAttribute("src", response.results[y].image);

      responseContainerEl.appendChild(imageI);
      window.localStorage.setItem("recipeTitleI", JSON.stringify(recipeTitleI)); ///// ANI LOCAL STORAGE
      window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleI)); //// ANI LOCAL STORAGE

      // RECIPE IMAGE, TITLE, LINK 3//////////////////////////////////////////////////////

      var recipeTitleII = response.results[z].title;
      console.log(recipeTitleII);
    

      var responseContainerEl = document.querySelector(
        "#response-container-ii"
      );
      responseContainerEl.innerHTML = recipeTitleII;

      var recipeImageII = response.results[z].image;
      console.log(recipeImageII);

      var responseContainerEl = document.querySelector("#card-3");
      responseContainerEl.innerHTML = "";

      var imageII = document.createElement("img");
      imageII.setAttribute("src", " ");
      imageII.setAttribute("src", response.results[z].image);

      responseContainerEl.appendChild(imageII);
      window.localStorage.setItem(
        "recipeTitleII",
        JSON.stringify(recipeTitleII)
      );
      window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleII));

      // RECIPE 1 : // API CALL IS WORKIGN BUT RETURNING A 404

      var id = response.results[x].id;
      var id2 = response.results[y].id;
      var id3 = response.results[z].id;
      //send three recipe id's into getRecipeData()
      getRecipeData(id, id2, id3);
    });
}

function getRecipeData(id, id2, id3) {
  //fetch three recipes, turn to JSON, then pull the data we need (link to recipe)
  fetch(
    "https://api.spoonacular.com/recipes/informationBulk?ids=" +
      id +
      "&apiKey=" + spoonKey3
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var recipeLink = response[0].spoonacularSourceUrl;  //grab recipe URL
      var recipeTitle = response[0].title;  //grab recipe URL
      var responseContainerEl = document.querySelector("#response-container-2");
      responseContainerEl.innerHTML = "";

      var recipeOne = document.createElement("a")    //create an 'a', element set it's href, and give it text that links
      recipeOne.setAttribute("href", recipeLink);
      recipeOne.setAttribute("target", "_blank")
      recipeOne.innerHTML= recipeTitle;
      responseContainerEl.appendChild(recipeOne);
      
    });
  fetch(
    "https://api.spoonacular.com/recipes/informationBulk?ids=" +
      id2 +
      "&apiKey=" + spoonKey3
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var recipeLink = response[0].spoonacularSourceUrl;  
      var recipeTitle = response[0].title;  
      var responseContainerEl = document.querySelector("#response-container-i");
      responseContainerEl.innerHTML = "";

      var recipeTwo = document.createElement("a")   
      recipeTwo.setAttribute("href", recipeLink);
      recipeTwo.setAttribute("target", "_blank")
      recipeTwo.innerHTML= recipeTitle;
      responseContainerEl.appendChild(recipeTwo);
    });
  fetch(
    "https://api.spoonacular.com/recipes/informationBulk?ids=" +
      id3 +
      "&apiKey=" + spoonKey3
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var recipeLink = response[0].spoonacularSourceUrl;  
      var recipeTitle = response[0].title;  
      var responseContainerEl = document.querySelector("#response-container-ii");
      responseContainerEl.innerHTML = "";

      var recipeThree = document.createElement("a")   
      recipeThree.setAttribute("href", recipeLink);
      recipeThree.setAttribute("target", "_blank")
      recipeThree.innerHTML= recipeTitle;
      responseContainerEl.appendChild(recipeThree);
    });
}
// var responseContainerEl = document.querySelector('#response-container-ii');
// responseContainerEl.innerHTML = recipeTitleII;


// var recipeII = document.createElement("recipe");
// recipeII.setAttribute('src', response.results[2]);


// var imageII = document.createElement("img");
// imageII.setAttribute("src", " ");
// imageII.setAttribute("src", response.results[2].image);

// responseContainerEl.appendChild(imageII);
// window.localStorage.setItem("recipeTitleII", JSON.stringify(recipeTitleII));
// window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleII));

// RECIPE 1 : // API CALL IS WORKIGN BUT RETURNING A 404

// var id = response.results[0].id;    //Can we delete this through the closing bracket on line 253? -- this was an attempt at getRecipeData() but isnt used
// console.log(id);

// fetch(
//   `https://api.spoonacular.com/recipes/${id}/summary&apiKey=53ed151123a740f094ac3e8409f6c1f3`
// )
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })

//   .then(function (response) {
//     var recipeLink = response.url;
//     console.log(recipeLink);

//     // var responseContainerEl = document.querySelector('#response-container-ii');
//     // responseContainerEl.innerHTML = recipeTitleII;

//     // var recipeII = document.createElement("recipe");
//     // recipeII.setAttribute('src', response.results[2]);

//     // responseContainerEl.appendChild(recipeII);

//     // var recipeImageII = response.results[2].image;
//     // console.log(recipeImageII);

//     // var imageII = document.createElement("img");
//     // imageII.setAttribute('src', " ");
//     // imageII.setAttribute('src', response.results[2].image);

//     // responseContainerEl.appendChild(imageII);
//   });

//////////////////////////////////////ANI STORING ZIP CODE ////////////////////////////////////////////////////////
if (window.localStorage) {
  var storeZip = document.getElementById("zipCode");
  storeZip.value = localStorage.getItem("zipCode");

  storeZip.addEventListener(
    "input",
    function () {
      localStorage.setItem("zipCode", storeZip.value);
    },
    false
  );

}
///////////////////////////////////ANI STORING FIRST RECIPE RETURNED //////////////////////////////////////////////////////////
// window.localStorage.setItem("recipeTitle", JSON.stringify(recipeTitle));
// window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitle));
/////////////////////////////////// ANI STORING SECOND RECIPE RETURNED //////////////////////////////////////////////////////
// window.localStorage.setItem("recipeTitleI", JSON.stringify(recipeTitleI));
// window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleI));
////////////////////////////////// ANI STORING THIRD RECIPE RETURNED ///////////////////////////////////////////////////////////
// window.localStorage.setItem("recipeTitleII", JSON.stringify(recipeTitleII));
// window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleII));
///////////////////////////// ANI STORING INGREDIENT (might need to be moved) //////////////////////////////////////////////////////////////////////////
if (window.localStorage) {

  var saveIndgredient = document.getElementById("searchRecipe"); //html input id
  saveIndgredient.value = localStorage.getItem("searchRecipe");

  saveIndgredient.addEventListener(
    "input",
    function () {
      localStorage.setItem("searchRecipe", saveIndgredient.value);
    },
    false
  );

}
////////////////////////////////////////// END ANI LOCAL STORAGE FOR THIS FILE /////////////////////////////////////////////////////



//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN START
//Notes:
// use the API id of each recipe to eventually link to the spoonful recipe page
//combine USDA API with Google maps
// use response.results[math.random] to "cheat" showing different results each time (in the recipe pulls)...
//...and to avoid duplicates we can say random 0-3, 4-6, 7-9.

//MUST DO BEFORE WEDNESDAY CLASS:
//Display random recipes on search With working links to recipes
//My Meals page that can store recipes the user chooses
//have Link! read 'View recipe and related recipes'--Shane Style
//Shane/Ani get a new Spoonacular api key to use for presentation 
//Ani has to re-write local storage Array logic. Instead of saving Array0-3, she needs to save xyz. 
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//

function findMarkets() {

  var zip = zipCode.value;
  var zipInput = document.getElementById("zipBox");

  // zipInput.style.display = "none";
  //fetch local farmers markets from zipcode search
  fetch(
    "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" +
      zip
  )
    .then(function (response) {
      return response.json();
    }) //grab id's of the two closest markets
    .then(function (response) {
      var market1 = response.results[0].id;
      var market2 = response.results[1].id;
      console.log(market1);
      //new fetches with the market id's
      fetch(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
          market1
      )
        .then(function (response) {
          return response.json();
        }) //capture google link and edit it to make it a better google maps search term (the link is originally given...
        //..as a long/lat location; so I have to clear the string of numbers and make sure the location has the words 'Farmers Market' in them)
        .then(function (response) {
          console.log(response);
          var link = response.marketdetails.GoogleLink;
          link = link.replace(/[^a-z+/.:?=]/gi, "").replace([".C."], "");
          if (!link.includes("Farmers")) {
            link = link.concat("+Farmers+Market");
          }
          console.log(link);
          fetch(
            "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
              market2
          )
            .then(function (response2) {
              return response2.json();
            })
            .then(function (response2) {
              console.log(response2);
              var link2 = response2.marketdetails.GoogleLink;
              link2 = link2.replace(/[^a-z+/.:?=]/gi, "").replace([".C."], "");
              if (!link2.includes("Farmers")) {
                link2 = link2.concat("+Farmers+Market");
              }
              showMaps(link, link2);
            });
        });
    });
}

function showMaps(link, link2) {
  console.log(link);
  //split the USDA maps link and grab the second half(the search term), and insert it into a google maps embed link
  var market = link.split("q=");
  console.log(market[1]);
  var marketName = market[1];
  var embedLink =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk&q=" +
    marketName;
  //push it to the page
  var map1 = document.getElementById("mapBox1");
  map1.setAttribute("src", embedLink);

  var market2 = link2.split("q=");
  var marketName2 = market2[1];
  var embedLink2 =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk&q=" +
    marketName2;

  var map2 = document.getElementById("mapBox2");
  map2.setAttribute("src", embedLink2);

};

//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN END
//
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//

