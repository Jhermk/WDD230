// Use the const keyword to create three variables that store references to the input, button, and list components.
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Initialize chaptersArray from localStorage or with an empty array
let chaptersArray = getChapterList() || [];

// Using addEventListener, create a click event listener for the Add Chapter button.
button.addEventListener("click", () => {
  // Make sure the input is not blank with the if condition.
  if (input.value.trim() !== "") {
    const chapter = input.value.trim();

    // Add the chapter to the chaptersArray.
    chaptersArray.push(chapter);

    // Update the localStorage with the new chaptersArray.
    setChapterList(chaptersArray);

    // Create the li and button components.
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    // Set the text content of the listText and deleteButton.
    listText.textContent = chapter;
    deleteButton.textContent = "❌";

    // Append elements to the li.
    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);

    // Append li to ul.
    list.appendChild(listItem);

    // Make a delete button event listener to remove the li from the list and update chaptersArray.
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
      deleteChapter(chapter);
    });

    // Focus and clear input.
    input.focus();
    input.value = "";
  }
});

// Function to display the initial list of chapters.
function displayList(chapter) {
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const deleteButton = document.createElement("button");

  listText.textContent = chapter;
  deleteButton.textContent = "❌";

  listItem.appendChild(listText);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
    deleteChapter(chapter);
  });
}

// Function to set chapters in localStorage.
function setChapterList(chapters) {
  localStorage.setItem("chapters", JSON.stringify(chapters));
}

// Function to get chapters from localStorage.
function getChapterList() {
  const storedChapters = localStorage.getItem("chapters");
  return storedChapters ? JSON.parse(storedChapters) : [];
}

// Function to delete a chapter from chaptersArray and localStorage.
function deleteChapter(chapter) {
  // Remove the chapter from chaptersArray.
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // Update the localStorage with the modified chaptersArray.
  setChapterList(chaptersArray);
}

// Display the initial list of chapters on page load.
chaptersArray.forEach(displayList);
