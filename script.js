const button = document.querySelector("#btn")
const list = document.querySelector("ul")
const input = document.querySelector("input")

const form = document.querySelector("form")


form.onsubmit = (event)=> {
  
    event.preventDefault(); 

    const item = input.value
    if(item !== ""){
      createElementItem(item)
    }


}

function createElementItem(item){
  const li = document.createElement("li");
  const div = document.createElement("div")
  const checkbox = document.createElement("input")
  const btnDelete = document.createElement("button")

  const img = document.createElement("img")

  img.src = "assets/icon-delete.svg"

  btnDelete.append(img)

  li.classList.add("item");
  
  const span = document.createElement("span");
  span.textContent = item;

  checkbox.type = "checkbox"
  
  div.append(checkbox,span)
  
  li.append(div, btnDelete);
  list.appendChild(li); 
  
  input.value = ""
}