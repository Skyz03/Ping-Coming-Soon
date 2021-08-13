const email = document.getElementById("email")


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        document.getElementById("error").innerHTML = "Please provide a valid email address";
    } else {
        document.getElementById("error").innerHTML = "";
    }
});