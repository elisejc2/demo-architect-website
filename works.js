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

    console.log({displaySetting})

    const listButtonEl =  document.getElementsByClassName('listView')[0];

    console.log(`listButtonEl.style.display: ${listButtonEl.style.display}`)

   listButtonEl.style["display"] = displaySetting;

   console.log("listButtonEl.style.display:", listButtonEl.style.display)
} 

const thumbnailFunction = function(e) {
    thumbnailVisible = !thumbnailVisible
    
    let displaySetting = thumbnailVisible ? "none": "flex";

    console.log({displaySetting})

    const thumbnailButtonEl =  document.getElementsByClassName('thumbnailView')[0];

    console.log(`thumbnailButtonEl.style.display: ${thumbnailButtonEl.style.display}`)

    thumbnailButtonEl.style["display"] = displaySetting;

   console.log("thumbnailButtonEl.style.display:", thumbnailButtonEl.style.display)
} 


// listButton.addEventListener('click', listFunction);
// thumbnailButton.addEventListener('click', thumbnailFunction);
listButton.addEventListener('click', toggleImages);
thumbnailButton.addEventListener('click', toggleImages);


