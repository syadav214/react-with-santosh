var myVar;

function myTimer() {
  const array = TABLE_DATA;
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  displayData(array);
}

function myStopFunction() {
  clearInterval(myVar);
}

function sortingTheTable() {
  let array = TABLE_DATA;
  array.sort((a, b) =>
    b.price > a.price
      ? 1
      : a.price === b.price
      ? parseInt(a.id) > parseInt(b.id)
        ? 1
        : -1
      : -1
  );

  document.getElementsByTagName("tbody")[0].innerHTML = "";
  displayData(array);
}

document.getElementById("start").addEventListener("click", function () {
  myVar = setInterval(myTimer, 1000);
});

document.getElementById("stop").addEventListener("click", function () {
  myStopFunction();
});

function displayData(arr) {
  const table = document.getElementsByTagName("table");
  if (table.length > 0) {
    const tbody = table[0].getElementsByTagName("tbody");

    if (tbody.length > 0) {
      const tbodyRef = tbody[0];

      arr.forEach((tData) => {
        const newRow = tbodyRef.insertRow();

        const cellId = newRow.insertCell();
        cellId.appendChild(document.createTextNode(tData.id));

        const cellImage = newRow.insertCell();
        cellImage.appendChild(document.createTextNode(tData.thumbnailUrl));

        const cellName = newRow.insertCell();
        cellName.appendChild(document.createTextNode(tData.name));

        const cellPrice = newRow.insertCell();
        cellPrice.appendChild(document.createTextNode(tData.price));
      });
    }
  }
}

displayData(TABLE_DATA);
