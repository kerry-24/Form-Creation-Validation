document.addEventListener('DOMContentLoaded', function(){ //wrap entire script in DOMcontentloaded event listener

    const form = document.getElementById(registration-form); // store the registration form in  a constant 'form'
    const feedbackDiv = document.getElementById(form-feedback); // store the feedbackDiv in  a constant 'feedbackDiv'

    form.addEventListener('submit', function(event)) {
        event.preventDefault(); // prevent form submission before validation
    }
    let username = document.getElementById(username).value.trim(); // retrieve the value of input fields and trim any whitespace
    let email = document.getElementById(email).value.trim();
    let password = document.getElementById(password).value.trim();

    let isValid = true;
    let messages = [];
    if (username.length < 3) {
        isValid = false;
        messages.push("username must be atleast 3 characters!");
    }
    if (email.includes('@') && email.includes('.')) {
        isValid = true;
    } else {
        isValid = false;
        messages.push("Enter valid email!");
    }
    if (password.length < 8) {
        isValid = false;
        messages.push("password too short");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration Successful";
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"
    }
});
