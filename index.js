// const email = document.getElementById("email")




// email.addEventListener("input", function () {
//     if (email.validity.typeMismatch) {
//         document.getElementById("error").innerHTML = "Please provide a valid email address";
//     } else {
//         document.getElementById("error").innerHTML = "";
//     }
// });


const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

email.addEventListener('input', function (event) {

    if (email.validity.valid) {

        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});

form.addEventListener('submit', function (event) {

    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {

        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {

        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {

        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (!isEmail(emailValue)) {
        emailError.textContent = 'Looks like this is not an email'
    }

    emailError.className = 'error active';
}