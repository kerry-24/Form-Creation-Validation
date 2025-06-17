/*wrap entire script in DOMcontentloaded event listener*/
document.addEventListener('DOMContentLoaded', function(){ 

    /* select regiatration form and feedbackDiv*/
    const form = document.getElementById(registration-form); 
    const feedbackDiv = document.getElementById(form-feedback);

    /*prevent form submission before validation*/
    form.addEventListener('submit', function(event)) {
        event.preventDefault(); 
    }
    /*retrieve and trim user inputs*/
    let username = document.getElementById(username).value.trim(); 
    let email = document.getElementById(email).value.trim();
    let password = document.getElementById(password).value.trim();

    /*error meesages implementation*/
    let isValid = true;
    let messages = [];

    /*validate username, email and password*/
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

     /*Display feedback*/
    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745"; // green color
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // red color
    }
});
