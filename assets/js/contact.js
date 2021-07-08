var modal = document.getElementById("myModal");
var btn = document.getElementById("submit-button");
var span = document.getElementsByClassName("close")[0];
var stars = document.getElementById("");


// STORES VALUES ON BUTTON CLICK

if (window.localStorage) {
    var userName = document.getElementById("user-name");
    userName.value = localStorage.getItem("user-name");      /// get input value

    userName.addEventListener("input", function store() {    /// listen for submit button 
        localStorage.setItem("user-name", userName.value);   /// set the info retrieved from storage
    }, false)

    if (window.localStorage) {
        var userEmail = document.getElementById("user-email");
        userEmail.value = localStorage.getItem("user-email");

        userEmail.addEventListener("input", function store() {
            localStorage.setItem("user-email", userEmail.value);

        }, false)

        if (window.localStorage) {
            var userMessage = document.getElementById("user-message");
            userMessage.value = localStorage.getItem("user-message");

            userMessage.addEventListener("input", function store() {
                localStorage.setItem("user-message", userMessage.value);
            }, false)
        }
    };


    // localStorage.setItem("user-email", value);
    // document.getElementById("user-email").innerHTML = localStorage.getItem("user-email");







    // var userMessage = document.getElementById("user-message");
    // userMessage.value = localStorage.getItem("user-message");
    // localStorage.setItem("user-message", userMessage.value);



    // GET ITEM 

    // var storedName = localStorage.getItem("user-name");
    // var storedEmail = localStorage.getItem("user-email");
    // var storedMessage = localStorage.getItem("user-message");
    // var storedRating = localStorage.getItem("user-rating");

    // var userRating = document.getElementById("user-rating");
    // var thankYou = document.getElementById("thank-you")

    // Confirm Submission Module // ADD LOCAL STORAGE HERE

    // btn.onclick = function () {
    //     modal.style.display = "block";
    // }

    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    // window.onclick = function (event) {

    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }

    // }
}

// THANK YOU  // ADD LOCAL STORAGE OF RATING 

// 1 star

// 2 stars

// 3 stars 

// 4 stars 

// 5 stars 
