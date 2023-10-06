$// Function to check if passwords match
function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("passwordConfirm").value;
    let passwordConfirmHelp = document.getElementById("password-confirm-help");

    if (password === confirmPassword) {
        passwordConfirmHelp.innerText = "Passwords match";
        passwordConfirmHelp.style.color = "green";
    } else {
        passwordConfirmHelp.innerText = "Passwords do not match";
        passwordConfirmHelp.style.color = "red";
    }
}

// Function to validate the email format
function validateEmail(input) {
    const email = input.value;
    const emailHelp = input.nextElementSibling;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (emailPattern.test(email)) {
        emailHelp.innerText = "Email format is valid";
        emailHelp.style.color = "green";
    } else {
        emailHelp.innerText = "Please enter a valid email address from byui.edu";
        emailHelp.style.color = "red";
    }
}

// Add event listener for email validation
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", function () {
    validateEmail(this);
});


// Function to update the rating value
function updateRating(input) {
    let ratingValue = document.getElementById("ratingValue");
    ratingValue.innerText = input.value;
}
