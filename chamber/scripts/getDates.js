// Get the current date
let currentDate = new Date();

// Define an array of day names
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the day of the week as a number (0-6)
let dayOfWeek = currentDate.getDay();

// Get the day name corresponding to the current date
let dayName = dayNames[dayOfWeek];

// Get the day, month, and year
let day = currentDate.getDate();
let month = currentDate.toLocaleString('default', { month: 'long' });
let currentYear = currentDate.getFullYear(); // Changed variable name to "currentYear"

// Display the date with the day name in the span element
let dateElement = document.getElementById('date');
dateElement.textContent = `${dayName}, ${month} ${day}, ${currentYear}`;

// Define a JavaScript variable using let to store the last modified date
let lastModifiedDate = new Date(document.lastModified);

// Get the year of the last modified date
let lastModifiedYear = lastModifiedDate.getFullYear(); // Changed variable name to "lastModifiedYear"

// Update the "year" span with the current year
document.getElementById("year").textContent = lastModifiedYear;

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



