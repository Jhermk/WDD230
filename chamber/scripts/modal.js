// Function to hide the banner
function hideBanner() {
    document.getElementById("banner").style.display = "none";
}

// Function to check if it's Monday, Tuesday, or Wednesday and show the banner
function showBanner() {
    let today = new Date();
    let dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, and so on

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday, Tuesday, or Wednesday
        document.getElementById("banner").style.display = "block";
    } else {
        document.getElementById("banner").style.display = "none";
    }
}

// Call the showBanner function when the page loads
window.onload = showBanner();