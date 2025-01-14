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
    welcomeMessage.style.fontSize = "2.5rem";
    welcomeMessage.style.color = "teal";
    welcomeMessage.style.marginTop = "50px";
});
