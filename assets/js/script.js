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
var spoonKey3 = "b0c5916c7355494bba6f931d954fdad9"



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
  var errorMessage = document.getElementById("error");
  errorMessage.textContent = ""
  errorMessage.style.color = '#3d550c';

    var searchRecipe = document.querySelector("#searchRecipe").value;


  fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +

      searchRecipe +
      "&apiKey=" + spoonKey3

  )
    .then(function (response) {
      return response.json();
      })


        // RECIPE IMAGE, TITLE, LINK 1


    .then(function (response) {
      console.log(response);
    
      var x = Math.floor(Math.random() * 4);
      var y = Math.floor(Math.random() * 3) + 4;
      var z = Math.floor(Math.random() * 3) + 7;
      console.log(x)
      console.log(y)
      console.log(z)

      console.log(response);
      const lastThreeRecipes = [response.results[x], response.results[y], response.results[z]];
      console.log(lastThreeRecipes);
      
      // IF spelling is right, say "Finding Fresh"
      // IF spelling is wrong, say "No Results"

      if (response.results.length !== 0) {
        errorMessage.textContent = "Finding Fresh";
      }

      else {
        errorMessage.textContent = "No results. Please check your spelling.";

      }

      localStorage.setItem(
        "lastThreeRecipes",
        JSON.stringify(lastThreeRecipes)
      );


            console.log(response);
            const lastThreeRecipes = [response.results[x], response.results[y], response.results[z]];
            console.log(lastThreeRecipes);
            localStorage.setItem(
                "lastThreeRecipes",
                JSON.stringify(lastThreeRecipes)
            );

            console.log(lastThreeRecipes);
            var recipeTitle = response.results[x].title;
            console.log(recipeTitle);

      var recipeImage = response.results[x].image;
      console.log(recipeImage);


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

            var recipeTitleI = response.results[y].title;
            console.log(recipeTitleI);

            var recipeTitleI = response.results[y].title;
            console.log(recipeTitleI);


      var recipeImageI = response.results[y].image;
      console.log(recipeImageI);


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


      var recipeImageII = response.results[z].image;
      console.log(recipeImageII);


            responseContainerEl.appendChild(recipeThree);

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


      var id = response.results[x].id;
      var id2 = response.results[y].id;
      var id3 = response.results[z].id;
      //send three recipe id's into getRecipeData()
      getRecipeData(id, id2, id3);
    });

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

}
////////////////////////////////////////// END ANI LOCAL STORAGE FOR INGREDIENT /////////////////////////////////////////////////////






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
      localStorage.setItem("recipeOneLink", recipeLink); // storing URL for recentlyViewed
      var recipeTitle = response[0].title;  //grab recipe title
      var responseContainerEl = document.querySelector("#response-container-2");
      responseContainerEl.innerHTML = "";  //clear the text in container 

      var recipeOne = document.createElement("a")    //create an 'a', element set it's href, and give it text that links
      recipeOne.setAttribute("href", recipeLink);
      recipeOne.setAttribute("target", "_blank")

      recipeOne.innerHTML= recipeTitle;
      responseContainerEl.appendChild(recipeOne);
      //2 lines: set and get
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
      console.log(response);
      var recipeLink = response[0].spoonacularSourceUrl; 
      localStorage.setItem("recipeTwoLink", recipeLink);
      var recipeTitle = response[0].title;  
      console.log(recipeTitle);
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
      localStorage.setItem("recipeThreeLink", recipeLink);
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


////////////////////////////////////////// END ANI LOCAL STORAGE FOR THIS FILE /////////////////////////////////////////////////////



//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN START
//
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
        }) //grab id's of the two closest markets
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

    }
}



//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//
//
// BEN END
//
//---------------------Bens Code--------------------------------Bens Code-----------------------------------------------------------//

