// Define a JavaScript variable using let to store the last modified date
let lastModifiedDate = new Date(document.lastModified);

// Get the year of the last modified date
let year = lastModifiedDate.getFullYear();

// Update the "year" span with the current year
document.getElementById("year").textContent = year;

// Format the last modified date as a string with numeric values and time (e.g., "Last modified: 09/15/2023 12:34:56")
let lastModifiedDateStr = "Last modified: " + lastModifiedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
  // Update the "lastModified" paragraph with the formatted date
  document.getElementById("lastModified").textContent = lastModifiedDateStr;