const requestURL =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getData(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    const prophets = data["prophets"];
    prophets.forEach((prophet) => {
      displayCards(prophet);
      // displayTable(prophet);
    });
  }
}

getData(requestURL);

function displayCards(prophet) {
  let card = document.createElement("section");

  // Prophet Name
  let h2 = document.createElement("h2");
  h2.textContent = prophet.name + " " + prophet.lastname;
  card.appendChild(h2);

  // Prophet Birthdate
  let birthdate = document.createElement("p");
  birthdate.textContent = "Date of Birth: " + prophet.birthdate;
  card.appendChild(birthdate);

  // Prophet Birthplace
  let birthplace = document.createElement("p");
  birthplace.textContent = "Place of Birth: " + prophet.birthplace;
  card.appendChild(birthplace);

  // Prophet Image
  let image = document.createElement("img");
  image.setAttribute("src", prophet.imageurl);
  image.setAttribute(
    "alt",
    `${prophet.name} ${prophet.lastname} ${prophet.order}`
  );
  card.appendChild(image);

  // Append card to the DOM (the prophet list).
  document.querySelector("div.cards").appendChild(card);
}

function displayTable(prophet) {
  let tableRow = document.createElement("tr");

  // Prophet Name
  let tableName = document.createElement("td");
  tableName.textContent = prophet.name + " " + prophet.lastname;
  tableRow.appendChild(tableName);

  // Prophet Birthdate
  let tableBirthdate = document.createElement("td");
  tableBirthdate.textContent = prophet.birthdate;
  tableRow.appendChild(tableBirthdate);

  // Prophet Birthplace
  let tableBirthplace = document.createElement("td");
  tableBirthplace.textContent = prophet.birthplace;
  tableRow.appendChild(tableBirthplace);

  document.querySelector("table").appendChild(tableRow);
}
