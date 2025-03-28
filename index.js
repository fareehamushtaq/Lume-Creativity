
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
 
        document.getElementById("postJobBtn").addEventListener("click", function() {
            window.location.href = "post_job.html"; // Redirect to post_job.html
        });
        document.addEventListener("DOMContentLoaded", function () {
            const registerBtn = document.getElementById("register-btn");
            const loginBtn = document.getElementById("login-btn");
            const logoutBtn = document.getElementById("logout-btn");
        
            // Check if user is logged in
            let loggedInUser = localStorage.getItem("loggedInUser");
        
            if (loggedInUser) {
                // User is logged in → Hide Register & Login, Show Logout
                registerBtn.style.display = "none";  
                loginBtn.style.display = "none";     
                logoutBtn.style.display = "inline-block"; 
            } else {
                // User is NOT logged in → Show Register & Login, Hide Logout
                registerBtn.style.display = "inline-block"; 
                loginBtn.style.display = "inline-block";    
                logoutBtn.style.display = "none";          
            }
        
            // Logout Functionality
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem("loggedInUser"); // Clear login data
                alert("You have been logged out.");
                window.location.reload(); // Refresh page
            });
        });
        
