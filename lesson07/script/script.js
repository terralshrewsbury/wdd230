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
button.addEventListener("click", () =>{
    if (input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value='';
        input.focus();
    }
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (input.value !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent=item;
    deletebutton.textContent='❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray=chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
