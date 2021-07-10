var modal = document.getElementById("myModal");
var btn = document.getElementById("submit-button");
var span = document.getElementsByClassName("close")[0];
var stars = document.getElementById("");


// STORES VALUES ON BUTTON CLICK
function store() {
    var userName = document.getElementById("user-name");
    localStorage.setItem("user-name", userName.value);

    var userEmail = document.getElementById("user-email");
    localStorage.setItem("user-email", userEmail.value);

    var userMessage = document.getElementById("user-message");
    localStorage.setItem("user-message", userMessage.value);

    displayInfo()
}

// GET ITEM 

localStorage.getItem("user-name");
localStorage.getItem("user-email");
localStorage.getItem("user-message");

// var storedRating = localStorage.getItem("user-rating");

var userRating = document.getElementById("user-rating");
var thankYou = document.getElementById("thank-you")

// Confirm Submission Module // ADD LOCAL STORAGE HERE



function displayInfo() {
    localStorage.setItem("user-name", storedName);
    $("#myModal").modal("show");
    console.log(storedName)
    
    localStorage.setItem("user-email", storedEmail);
    $("#myModal").modal("show");
    console.log(storedEmail)
    
    localStorage.setItem("user-message", storedMessage);
    $("#myModal").modal("show");
    console.log(storedMessage)
}




// THANK YOU  // ADD LOCAL STORAGE OF RATING 
// add event listener to each star and prevent default 
var rating = document.getElementById("thankYou");
rating.textContent = "";

// 1 star

function awful () {
    rating.textContent = "AWFUL!";
}

// 2 stars

function ok () {
    rating.textContent = "OK!";
}

// 3 stars 

function good() {
    rating.textContent = "GOOD!"
}

// 4 stars 

function great() {
    rating.textContent = "GREAT!"
}

// 5 stars 

function awesome() {
    rating.textContent = "AWESOME!"
}