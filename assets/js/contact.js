var userName = document.getElementById("contact-name").value;
var userEmail = document.getElementById("contact-email").value;
var userMessage = document.getElementById("user-message").value;
var userRating = document.getElementById("user-rating").value;

// WHEN USER CLICKS SAVE, THE TEXT VALUE IS OBTAINED
$("#submit-button").on("click", function () {
    // OBTAIN TEXT VALUES FROM ROW CLASS AND ID 
    // var textValue = $(this).siblings(".description").val();

    // SET TO SAVE IN LOCALSTORAGE
    localStorage.setItem("user-name" textValue);
    localStorage.setItem("user-email", textValue);
    localStorage.setItem("user-message", textValue);
    localStorage.setItem("user-rating", textValue);
});

// Set Name to localStorage

$("name .description").val(localStorage.getItem(userName));

// Set Email to localStorage

$("#email .description").val(localStorage.getItem(userEmail));

// Set Message to localStorage 

$("#message .description").val(localStorage.getItem(userMessage));


// Set Rating to localStorage (?)

$("#rating .description").val(localStorage.getItem(userRating));

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

//   // remove all tasks
// $("#remove-tasks").on("click", function() {
//     for (var key in tasks) {
//       tasks[key].length = 0;
//       $("#list-" + key).empty();
//     }
//     saveTasks();
//   });