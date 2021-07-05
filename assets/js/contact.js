// STORES VALUES ON BUTTON CLICK
function store() {
    var userName = document.getElementById("user-name");
    localStorage.setItem("user-name", userName.value);

    var userEmail = document.getElementById("user-email");
    localStorage.setItem("user-email", userEmail.value);

    var userMessage = document.getElementById("user-message");
    localStorage.setItem("user-message", userMessage.value);

    var userRating = document.getElementById("user-rating");
    localStorage.setItem("user-rating", userRating.value);

    function submission() {
        window.alert("your form has been successfully submitted")
    }

    submission()

    // function disableSubmit("submit-button") {
    //     document.getElementById("submit-button").disabled = 'true'
    // }
}

// GET ITEM 

var storedName = localStorage.getItem("user-name");
var storedEmail = localStorage.getItem("user-email");
var storedMessage = localStorage.getItem("user-message");
var storedRating = localStorage.getItem("user-rating");
