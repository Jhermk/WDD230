// Function to update and display the page visit count or first visit message
function updateVisitCount() {
    let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
  
    if (visitCount === 0) {
      // Display the first visit message
      document.getElementById('visit-count').textContent = `${visitCount}. This is your first visit!`;
    } else {
      // Display the visit count
      document.getElementById('visit-count').textContent = `You've visited ${visitCount} times.`;
    }
  
    // Increment the visit count and store it in localStorage
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
  }
  
  // Call the function to update the visit count or display the message when the page loads
  window.addEventListener('load', updateVisitCount);
  