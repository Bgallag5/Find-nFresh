var userName 
var userEmail
var userMessage
var userRating 

// Set Name to localStorage

$("name .description").val(localStorage.getItem(userName));

// Set Email to localStorage

$("#email .description").val(localStorage.getItem(userEmail));

// Set Message to localStorage 

$("#message .description").val(localStorage.getItem(userMessage));


// Set Rating to localStorage (?)

$("#rating .description").val(localStorage.getItem(userRating));