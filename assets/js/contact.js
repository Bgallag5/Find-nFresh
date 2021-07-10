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

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {

        if (event.target == modal) {
            modal.style.display = "none";
        }

    }

    if (window.localStorage) {
        var userEmail = document.getElementById("user-email");
        userEmail.value = localStorage.getItem("user-email");

        userEmail.addEventListener("input", function store() {
            localStorage.setItem("user-email", userEmail.value);

        }, false)

        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {

            if (event.target == modal) {
                modal.style.display = "none";
            }

        }

        if (window.localStorage) {
            var userMessage = document.getElementById("user-message");
            userMessage.value = localStorage.getItem("user-message");

            userMessage.addEventListener("input", function store() {
                localStorage.setItem("user-message", userMessage.value);
            }, false)

            btn.onclick = function () {
                modal.style.display = "block";
            }

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {

                if (event.target == modal) {
                    modal.style.display = "none";
                }

            }
        }
    };



}

// THANK YOU  // ADD LOCAL STORAGE OF RATING 

// // 1 star
// var rating = document.getElementById("user-rating");
// return awful();
document.getElementById("rating1").addEventListener("click", function (event) {
    event.preventDefault
})


// // 2 stars
// var rating2 = document.getElementById("user-rating")
// return ok();
document.getElementById("rating2").addEventListener("click", function (event) {
    event.preventDefault
})

// // 3 stars 
// var rating3 = document.getElementById("user-rating")
// return good();
document.getElementById("rating3").addEventListener("click", function (event) {
    event.preventDefault
})

// // 4 stars 
// var rating4 = document.getElementById("user-rating")
// return great();
document.getElementById("rating4").addEventListener("click", function (event) {
    event.preventDefault
})

// // 5 stars 
// var rating5 = document.getElementById("user-rating")
// return awesome();
document.getElementById("rating5").addEventListener("click", function (event) {
    event.preventDefault
})
