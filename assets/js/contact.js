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

// 1 star

// 2 stars

// 3 stars 

// 4 stars 

// 5 stars 
