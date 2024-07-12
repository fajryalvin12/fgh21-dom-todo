const popup = document.getElementsByClassName("popup").item(0);

const pinkSection = document.getElementById("pink-section");
let dataPink = [];
// kalau data di local storage tidak kosong, maka dataPink = local storage
const submitDataPink = window.localStorage.getItem("data1");
if (submitDataPink !== null) {
  dataPink = JSON.parse(submitDataPink);
}
const btnPink = document.getElementById("btn-pink");
const inputDataPink = document.getElementById("data-pink");
function processPink() {
  pinkSection.innerHTML = "";
  dataPink.forEach((item, index) => {
    const listSection = document.createElement("div");
    const inputBox = document.createElement("input");
    inputBox.type = "checkbox";
    inputBox.id = "pink" + index + 1;
    if (item.checked) {
      inputBox.checked = true;
    }
    const labelSection = document.createElement("label");
    labelSection.textContent = item.text;
    labelSection.htmlFor = inputBox.id;

    listSection.appendChild(inputBox);
    listSection.appendChild(labelSection);
    pinkSection.appendChild(listSection);
  });
}
processPink();
btnPink.addEventListener("click", (event) => {
  popup.classList.toggle("hide");
});
inputDataPink.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = event.target.list.value;
  dataPink.push({
    text: " " + inputText,
    checked: false,
  });

  processPink();
  // mengirimkan data ke local storage
  window.localStorage.setItem("data1", JSON.stringify(dataPink));
  popup.classList.toggle("hide");
});
inputDataPink.reset();

//panggil pop up button di section warna hijau dan isikan form serta submit ke local storage
const greenSection = document.getElementById("green-section");
let dataGreen = [
  {
    checked: false,
    text: " Visit Time Square",
  },
  {
    checked: false,
    text: " Dinner with Sarah",
  },
];

dataGreen.forEach((item, index) => {
  const listSection2 = document.createElement("div");
  const inputBox = document.createElement("input");
  inputBox.type = "checkbox";
  inputBox.id = "green" + index + 1;
  if (item.checked) {
    inputBox.checked = true;
  }
  const labelSection = document.createElement("label");
  labelSection.textContent = item.text;
  labelSection.htmlFor = inputBox.id;

  listSection2.appendChild(inputBox);
  listSection2.appendChild(labelSection);
  greenSection.appendChild(listSection2);
});

const btnGreen = document.getElementById("btn-green");
const inputDataGreen = document.getElementById("data-green");

// mengirimkan data ke local storage

inputDataGreen.reset();

///////////////////
const orangeSection = document.getElementById("orange-section");
let dataOrange = [
  {
    text: " Meet John for project proposal",
    checked: false,
  },
  {
    text: " Client Presentation with Eric",
    checked: false,
  },
  {
    text: " Call Kids",
    checked: false,
  },
  {
    text: " Call Manager",
    checked: false,
  },
];
dataOrange.forEach((item, index) => {
  const listSection = document.createElement("div");
  const inputBox = document.createElement("input");
  inputBox.type = "checkbox";
  inputBox.id = "orange" + index + 1;
  if (item.checked) {
    inputBox.checked = true;
  }
  const labelSection = document.createElement("label");
  labelSection.textContent = item.text;
  labelSection.htmlFor = inputBox.id;

  listSection.appendChild(inputBox);
  listSection.appendChild(labelSection);
  orangeSection.appendChild(listSection);
});
