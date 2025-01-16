document.addEventListener("DOMContentLoaded", () => {
    fetch('/navbar/navbar.html')  // Path to the navbar file
        .then(response => response.text())
        .then(data => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.innerHTML = data;  // Insert the navbar content
            }
        })
        .catch(error => console.error('Error loading navbar:', error));  // Log any error
});
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const hour = new Date().getHours();
    
    let message;
    if (hour < 12) {
        message = "Good morning!";
    } else if (hour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }
    
    welcomeMessage.textContent = message;
    welcomeMessage.style.fontSize = "30px";
    welcomeMessage.style.color = "white";
    welcomeMessage.style.marginTop = "0";
});
