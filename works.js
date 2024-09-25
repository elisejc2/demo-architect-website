var document;
const listButton = document.querySelector('.listButton');
const listView = document.querySelector('.listView');
const thumbnailButton = document.querySelector('.thumbnailButton');
const thumbnailView = document.querySelector('.thumbnailView');

let visible = false;
let thumbnailVisible = false;
let showImages = true;

const toggleImages = function(e) {
    e.preventDefault();
    showImages = !showImages;

    let activeButtonId;
    let inactiveButtonId
    let classToRender;
    let classToHide;

    if (showImages) {
        activeButtonId = "thumbnail-toggle-button"
        inactiveButtonId = "list-toggle-button"
        classToRender = "thumbnailView";
        classToHide = "listView";
    } else {
        activeButtonId = "list-toggle-button"
        inactiveButtonId = "thumbnail-toggle-button"
        classToRender = "listView";
        classToHide = "thumbnailView";
    }

    const activeButton = document.getElementById(activeButtonId);

    const inactiveButton = document.getElementById(inactiveButtonId);

    const divToShow = document.getElementsByClassName(classToRender)[0];

    const divToHide = document.getElementsByClassName(classToHide)[0];

    activeButton.classList.add("active-toggle");

    inactiveButton.classList.remove("active-toggle");

    divToShow.style["display"] = "flex";

    divToHide.style["display"] = "none";
}

const listFunction = function(e) {
    visible = !visible

    let displaySetting = visible ? "block" : "none";

    const listButtonEl =  document.getElementsByClassName('listView')[0];
   listButtonEl.style["display"] = displaySetting;
} 

const thumbnailFunction = function(e) {
    thumbnailVisible = !thumbnailVisible
    
    let displaySetting = thumbnailVisible ? "none": "flex";

    const thumbnailButtonEl =  document.getElementsByClassName('thumbnailView')[0];

    thumbnailButtonEl.style["display"] = displaySetting;
} 

listButton.addEventListener('click', toggleImages);
thumbnailButton.addEventListener('click', toggleImages);


