// Hardcoded user data for demonstration
const users = [
    { email: "john@example.com", password: "password123", name: "John Doe" },
    { email: "jane@example.com", password: "mypassword", name: "Jane Smith" }
];

// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Check credentials
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Save user info in session storage and redirect
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location.href = "welcome.html";
    } else {
        // Show error message
        errorMessage.textContent = "Invalid email or password!";
    }
});

// Display welcome message
if (window.location.pathname.endsWith("welcome.html")) {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
        document.getElementById("welcome-message").textContent = `Welcome, ${user.name}!`;
    } else {
        window.location.href = "index.html"; // Redirect to login if no user session
    }

    document.getElementById("logoutButton").addEventListener("click", () => {
        sessionStorage.clear(); // Clear session and redirect to login
        window.location.href = "index.html";
    });
}



