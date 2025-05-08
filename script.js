const button = document.querySelector("#btn");
const list = document.querySelector("ul");
const input = document.querySelector("input");

const form = document.querySelector("form");
const trashMessage = document.getElementById("trash");
const btnClose = document.getElementById("btnClose");

form.onsubmit = (event) => {
  event.preventDefault();

  const item = input.value;
  if (item !== "") {
    createElementItem(item);
  }
};

function createElementItem(item) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const btnDelete = document.createElement("button");
  const imgSpan = document.createElement("span");
  const img = document.createElement("img");
  img.src = "assets/icon-delete.svg";

  btnDelete.append(img);

  li.classList.add("item");
  div.classList.add("checkbox-wrapper")
  imgSpan.classList.add("checkbox-image")


  const span = document.createElement("span");
  span.textContent = item;

  checkbox.type = "checkbox";

  div.append(checkbox, imgSpan,span);


  li.append(div, btnDelete);
  list.appendChild(li);



  btnDelete.addEventListener("click", () => {
    li.remove();
    errorMessage();
  });

  input.value = "";
}

function errorMessage() {
  trashMessage.style.display = "flex";
  setTimeout(() => {
    trashMessage.classList.add("show");
  }, 10);

  setTimeout(()=> {
    trashMessage.classList.remove("show");
  },3000);
}

btnClose.onclick = function() {
  trashMessage.classList.remove("show");
  setTimeout(() => {
    trashMessage.style.display = "none";
  }, 300); 
};
