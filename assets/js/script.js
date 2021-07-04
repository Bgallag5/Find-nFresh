// LINES 1-500: BEN
// LINES 501-1000: ANI
// LINES 1001-1500: RYAN
// LINES 1501-2000: SHANE
// LINES 2001-2500: GAYE

// var ingredient = document.getElementById("searchRecipe");

var zipCode = document.getElementById("zipCode");
var googleKey = "AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk";
var mapContainer = document.getElementById("mapContainer");

// ********************** RYAN'S CODE **********************

//FETCH THE RECIPE API RECIPES BASED ON DROPDOWN INGREDIENTS
// FORMAT:  &apiKey=YOUR-API-KEY.
// API KEY: b79ab8cbea19412a8dc76a8297bc9d42

// FETCH THE RECIPE AND NUTRITION APIS

function getRecipe() {
  var searchRecipe = document.querySelector("#searchRecipe").value;

  fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      searchRecipe +
      "&apiKey=53ed151123a740f094ac3e8409f6c1f3"
  )
    .then(function (response) {
      //console.log(response.json());
      return response.json();
    })

    // RECIPE IMAGE, TITLE, LINK 1

    .then(function (response) {
      console.log(response);
      var recipeTitle = response.results[0].title;
      console.log(recipeTitle);

      var responseContainerEl = document.querySelector("#response-container-2");
      responseContainerEl.innerHTML = recipeTitle;

      var recipe = document.createElement("recipe");
      recipe.setAttribute("src", response.results[0]);
      recipe.setAttribute("id", "recipeOne");

      responseContainerEl.appendChild(recipe);

      var recipeImage = response.results[0].image;
      console.log(recipeImage);

      var responseContainerEl = document.querySelector("#card-1");
      responseContainerEl.innerHTML = recipeImage;

      var image = document.createElement("img");
      image.setAttribute("src", " ");
      image.setAttribute("src", response.results[0].image);

      responseContainerEl.appendChild(image);
      window.localStorage.setItem("recipeTitle", JSON.stringify(recipeTitle)); ////// ANI LOCAL STORAGE
      window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitle)); ///// ANI LOCAL STORAGE

      // RECIPE IMAGE, TITLE, LINK 2

      var recipeTitleI = response.results[1].title;
      console.log(recipeTitleI);

      var responseContainerEl = document.querySelector("#response-container-i");
      responseContainerEl.innerHTML = recipeTitleI;

      var recipeI = document.createElement("recipe");
      recipeI.setAttribute("src", response.results[1]);

      responseContainerEl.appendChild(recipeI);

      var recipeImageI = response.results[1].image;
      console.log(recipeImageI);

      var responseContainerEl = document.querySelector("#card-2");
      responseContainerEl.innerHTML = recipeImageI;

      var imageI = document.createElement("img");
      imageI.setAttribute("src", " ");
      imageI.setAttribute("src", response.results[1].image);

      responseContainerEl.appendChild(imageI);
      window.localStorage.setItem("recipeTitleI", JSON.stringify(recipeTitleI)); ///// ANI LOCAL STORAGE
      window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleI)); //// ANI LOCAL STORAGE

      // RECIPE IMAGE, TITLE, LINK 3

      var recipeTitleII = response.results[2].title;
      console.log(recipeTitleII);

      var responseContainerEl = document.querySelector(
        "#response-container-ii"
      );
      responseContainerEl.innerHTML = recipeTitleII;

      var recipeII = document.createElement("recipe");
      recipeII.setAttribute("src", response.results[2]);

      responseContainerEl.appendChild(recipeII);

      var recipeImageII = response.results[2].image;
      console.log(recipeImageII);

      var responseContainerEl = document.querySelector("#card-3");
      responseContainerEl.innerHTML = recipeImageII;

      var imageII = document.createElement("img");
      imageII.setAttribute("src", " ");
      imageII.setAttribute("src", response.results[2].image);

      responseContainerEl.appendChild(imageII);
      window.localStorage.setItem(
        "recipeTitleII",
        JSON.stringify(recipeTitleII)
      );
      window.localStorage.getItem("recipeTitle", JSON.stringify(recipeTitleII));

      // RECIPE 1 : // API CALL IS WORKIGN BUT RETURNING A 404

      var id = response.results[0].id;
      console.log(id);

      fetch(
        `https://api.spoonacular.com/recipes/${id}/summary&apiKey=53ed151123a740f094ac3e8409f6c1f3`
      )
        .then(function (response) {
          console.log(response);
          return response.json();
        })

        .then(function (response) {
          var recipeLink = response.url;
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
        });
    });
}

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



























































// "http://maps.google.com/?q=38.776991%2C%20-77.263568%20(%22Burke+%22)"
// "http://maps.google.com/?q=Burke++Farmers+Market"
// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.543957590443!2d-77.30029918465263!3d38.797087779586235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e1b5983a451%3A0x311f6970ab8a1a77!2sBurke%20Farmers%20Market!5e0!3m2!1sen!2sus!4v1625148725193!5m2!1sen!2sus"

// "https://www.google.com/maps/embed/v1/place?key=AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk&q=Burke++Farmers+Market"

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
  // var title2 = document.getElementById("title-2");
  // var map2 = document.getElementById("map-2");
  // var title3 = document.getElementById("title-3");
  // var map3 = document.getElementById("map-3");
  // var title4 = document.getElementById("title-4");
  // var map4 = document.getElementById("map-4");

  zipInput.style.display = "none";
  markets.style.display = "flex";

  fetch(
    "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" +
      zip
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var market1 = response.results[0].id;
      var market2 = response.results[1].id;
      var market3 = response.results[2].id;
      var market4 = response.results[3].id;

      fetch(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
          market1
      )
        .then(function (response) {
          return response.json();
        }) //capture google link and edit it to make it a better google maps search term (the link is originally given...
        //..as a long/lat location; so I have to clear the string of numbers and make sure the location has the words 'Farmers Market' in them)
        .then(function (response) {
          // console.log(response.marketdetails.GoogleLink)
          var link = response.marketdetails.GoogleLink;
          link = link.replace(/[^a-z+/.:?=]/gi, "").replace([".C."], "");
          if (!link.includes("Farmers")) {
            link = link.concat("+Farmers+Market");
          }
          title1.textContent = response.marketdetails.Address;
          map1.href = link;
          showMaps(link);
        });
      fetch(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
          market2
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          // console.log(response.marketdetails.GoogleLink)
          var link2 = response.marketdtetails.GoogleLink;
          link2 = link2.replace(/[^a-z+/.:?=]/gi, "").replace([".C."], "");
          if (!link2.includes("Farmers")) {
            link2 = link2.concat("+Farmers+Market");
          }
          title2.textContent = response.marketdetails.Address;
          map2.href = link2;
          showMaps(link2);
        });
      fetch(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" +
          market3
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          // console.log(response.marketdetails.GoogleLink);
          var link3 = response.marketdetails.GoogleLink;
          link3 = link3.replace(/[^a-z+/.:?=]/gi, "").replace([".C."], "");
          if (!link3.includes("Farmers")) {
            link3 = link3.concat("+Farmers+Market");
          }
          title3.textContent = response.marketdetails.Address;
          map3.href = link3;
          showMaps(link3);
        });
    });
}

showMaps = function (link, link2) {
  console.log(link);
  var market = link.split("q=");
  console.log(market[1]);
  var marketName = market[1];
  var embedLink =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk&q=" +
    marketName;

  var map1 = document.getElementById("mapBox");
  map1.setAttribute("src", embedLink);

  //   var market = link2.split("q=");
  //   var marketName = market[1];
  //   var embedLink =
  //     "https://www.google.com/maps/embed/v1/place?key=AIzaSyD6qU4Fdx74Tp9Z0lcCt26TIjLK8iC1uBk&q=" +
  //     marketName;
  //   var map2 = document.createElement("iframe")
  //   map2.setAttribute({"src": embedLink, "width": "500", "height": "500", "style": "border:0", "allowfullscreen": "", "loading": "lazy", "class": "col-4"})
  // mapContainer.appendChild(map2);
};

//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN END
//
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------/
