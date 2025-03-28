document.addEventListener("DOMContentLoaded", function () {
    const freelancerName = document.getElementById("freelancer-name");
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    console.log("Logged-in user data:", loggedInUser); // Debugging

    if (!loggedInUser || loggedInUser.role !== "freelancer") {
        alert("Access Denied!");
        window.location.href = "index.html";
        return;
    }

    freelancerName.textContent = loggedInUser.name || "Freelancer";

    document.getElementById("logout-btn").addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    });
});
