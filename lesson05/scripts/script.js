const list = document.querySelector("ul");
const input = document.querySelector('#favchap');
const button = document.querySelector("button");

const addItem = () =>{
    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listButton.textContent="❌";
    list.appendChild(listItem);

    listButton.addEventListener("click", () =>{
            list.removeChild(listItem);
    });

    input.focus();

};
button.addEventListener("click", addItem);
input.addEventListener("keydown", (event) => (event.key === "Enter") && addItem());