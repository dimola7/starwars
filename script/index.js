// let loader = document.querySelector(".loader");
let open = document.querySelector(".btn");
const gridContainer = document.querySelector(".grid");
let details = document.querySelector(".details");
let detailsBtn = document.querySelector(".details-btn");

// function to display list of characters
const showNameList = (data) => {
  const characters = data.results;

  characters.map((element, index) => {
    const imgSrc = `./assets/${index}.jpeg`; //using the index of the characters to get their images which are numbered accordingly, from assets

    //creating the template for displaying the characters
    const wrapperDiv = document.createElement("div");
    const card = document.createElement("div");
    card.className = "card";
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.className = "card-img";
    img.src = imgSrc;
    imgDiv.appendChild(img);
    const charName = document.createElement("div");
    charName.className = "name";
    charName.innerText = element.name;
    const viewButton = document.createElement("button");
    viewButton.className = "btn";
    viewButton.innerText = "View";
    card.appendChild(imgDiv);
    card.appendChild(charName);
    card.appendChild(viewButton);
    wrapperDiv.appendChild(card);
    gridContainer.appendChild(wrapperDiv);
    viewButton.addEventListener("click", () => {
      details.classList.remove("hide");
      showDetails(element, index);
    });
  });
};

//Details populating the pop up
const showDetails = (element, index) => {
  const imageSrc = `./assets/${index}.jpeg`;
  console.log("details", element.name);
  const modal = document.createElement("div");
  modal.className = "modal";
  const modalImgDiv = document.createElement("div");
  const modalImg = document.createElement("img");
  modalImg.className = "modal-image";
  modalImg.src = imageSrc;
  modalImgDiv.appendChild(modalImg);
  const charName = document.createElement("div");
  charName.className = "name";
  charName.innerText = element.name;
  const gender = document.createElement("div");
  gender.className = "gender";
  gender.innerText = `Gender : ${element.gender}`;
  const height = document.createElement("div");
  height.className = "height";
  height.innerText = `Height : ${element.height} cm`;
  const bntWrapper = document.createElement("div");
  const closeButton = document.createElement("button");
  bntWrapper.appendChild(closeButton);
  closeButton.className = "btn";
  closeButton.innerText = "Close";
  modal.appendChild(modalImgDiv);
  modal.appendChild(charName);
  modal.appendChild(gender);
  modal.appendChild(height);
  modal.appendChild(bntWrapper);
  details.appendChild(modal);
  closeButton.addEventListener("click", () => {
    details.classList.add("hide");
  });
};
