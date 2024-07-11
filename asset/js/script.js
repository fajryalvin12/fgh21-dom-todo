const pinkSection = document.getElementById("pink-section");
const greenSection = document.getElementById("green-section");
const orangeSection = document.getElementById("orange-section");

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

const dataGreen = [
  {
    text: " Visit time square",
    checked: false,
  },
  {
    text: " Dinner with Sarah",
    checked: false,
  },
];
dataGreen.forEach((item, index) => {
  const listSection = document.createElement("div");
  const inputBox = document.createElement("input");
  inputBox.type = "checkbox";
  inputBox.id = "green" + index + 1;
  if (item.checked) {
    inputBox.checked = true;
  }
  const labelSection = document.createElement("label");
  labelSection.textContent = item.text;
  labelSection.htmlFor = inputBox.id;

  listSection.appendChild(inputBox);
  listSection.appendChild(labelSection);
  greenSection.appendChild(listSection);
});

const dataOrange = [
  {
    text: " Meet John for project proposal",
    checked: false,
  },
  {
    text: " Client Presentation with Eric",
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

const addPink = document.getElementById("add-pink");

const popup = document.getElementsByClassName("popup").item(0);
addPink.addEventListener("click", (event) => {
  popup.classList.toggle("hide");
});

const inputData = document.getElementById("input-data");

inputData.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputDataPink = event.target.list.value;
  inputDataPink.forEach((item, index) => {
    let dataPink = [
      // {
      //   text: " Clean The Room",
      //   checked: false,
      // },
      // {
      //   text: " Send Email to John",
      //   checked: false,
      // },
      // {
      //   text: " Order a new bike",
      //   checked: false,
      // },
      // {
      //   text: " Create a SEO Account",
      //   checked: false,
      // },
    ];
  });
  popup.classList.toggle("hide");
});
