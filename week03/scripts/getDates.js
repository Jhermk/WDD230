// Get the current date
let currentDate = new Date();

// Get the year of the current date
let currentYear = currentDate.getFullYear();

// Display the current year in the "year" span
document.getElementById("year").textContent = currentYear;

// Get the last modified date from the document
let lastModifiedDate = document.lastModified;

// Display the last modified date in the "lastModified" paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;

