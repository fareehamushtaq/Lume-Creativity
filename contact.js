document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or menu not found!");
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let successMessage = document.getElementById("successMessage");

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
        error.style.display = "none";
    });

    // Name Validation
    if (name.value.trim() === "") {
        setError(name, "Name is required");
        isValid = false;
    }

    // Email Validation
    if (!validateEmail(email.value)) {
        setError(email, "Valid email is required");
        isValid = false;
    }

    // Message Validation
    if (message.value.trim() === "") {
        setError(message, "Message cannot be empty");
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
            document.getElementById("contactForm").reset();
        }, 3000);
    }
});

// Function to Show Error Messages
function setError(input, message) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

// Email Validation Function
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
