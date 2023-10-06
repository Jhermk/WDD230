// Function to check if passwords match
function checkPassword(input) {
    let password = document.getElementById("password").value;
    let confirmPassword = input.value;
    let passwordConfirmHelp = document.getElementById("password-confirm-help");

    if (password === confirmPassword) {
        passwordConfirmHelp.innerText = "Passwords match";
        passwordConfirmHelp.style.color = "green";
    } else {
        passwordConfirmHelp.innerText = "Passwords do not match";
        passwordConfirmHelp.style.color = "red";
    }
}

// Function to validate the email format and confirm email
function validateEmail(input) {
    let email = input.value;
    let emailHelp = input.nextElementSibling;

    // Regular expression to match the specified pattern
    let emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (emailPattern.test(email)) {
        emailHelp.innerText = "Email format is valid";
        emailHelp.style.color = "green";

        // Check if the input is the "Confirm Email" field
        if (input.name === "email2") {
            // Get the original email field value
            let originalEmail = document.querySelector('input[name="email"]').value;

            // Compare the values of the two email fields
            if (email === originalEmail) {
                emailHelp.innerText = "Emails match";
                emailHelp.style.color = "green";
            } else {
                emailHelp.innerText = "Emails do not match";
                emailHelp.style.color = "red";
            }
        }
    } else {
        emailHelp.innerText = "Please enter a valid email address from byui.edu";
        emailHelp.style.color = "red";
    }
}


// Function to update the rating value
function updateRating(input) {
    let ratingValue = document.getElementById("ratingValue");
    ratingValue.innerText = input.value;
}

