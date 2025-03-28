document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser;

    try {
        loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || null;
    } catch (error) {
        console.error("Error parsing loggedInUser:", error);
        loggedInUser = null;
    }

    if (!loggedInUser || loggedInUser.role !== "client") {
        alert("Access Denied! Redirecting to Home...");
        window.location.href = "index.html"; // Redirect to home page
        return;
    }

    // Display client name
    document.getElementById("client-name").textContent = loggedInUser.name || "Client";

    // Function to Load Content Dynamically
    window.loadContent = function (page) {
        let content = document.getElementById("main-content");

        const pages = {
            "post-job": "<h2>Post a Job</h2><p>Here you can post a new job.</p>",
            "my-jobs": "<h2>My Jobs</h2><p>List of your posted jobs.</p>",
            "applicants": "<h2>Applicants</h2><p>Freelancers who applied to your jobs.</p>",
            "profile": "<h2>Manage Profile</h2><p>Update your details here.</p>"
        };

        content.innerHTML = pages[page] || "<h2>Page not found</h2><p>Please select a valid page.</p>";
    };

    // Logout function
    document.getElementById("logout-btn").addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "index.html"; // Redirect to home after logout
    });

    // Toggle Sidebar (Mobile)
    document.getElementById("toggle-btn").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("sidebar-open");
    });
});
