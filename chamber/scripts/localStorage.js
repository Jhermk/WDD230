// Function to update visit information
function updateVisitInfo() {
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = Date.now();
  const visitsElement = document.getElementById('visits');
  const lastVisitedElement = document.getElementById('lastVisited');
  const visitMessageElement = document.getElementById('visit-message');

  if (!lastVisit) {
    // First visit
    visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    // Convert lastVisit from a string to a date
    const lastVisitDate = new Date(parseInt(lastVisit));

    const daysDifference = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      // Less than a day
      visitMessageElement.textContent = "Back so soon! Awesome!";
    } else {
      // More than a day
      visitMessageElement.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
    }
  }

  // Update the visit information
  const totalVisits = (parseInt(localStorage.getItem('visits'), 10) || 0) + 1;
  visitsElement.textContent = totalVisits;
  localStorage.setItem('visits', totalVisits);

  const lastVisitedDate = new Date(currentDate).toLocaleString();
  lastVisitedElement.textContent = lastVisitedDate;

  // Update the last visit date
  localStorage.setItem('lastVisit', currentDate.toString());
}

// Call the function when the page loads
window.onload = updateVisitInfo;
