//@variables
var document;
const listButton = document.querySelector('.listButton');
const listView = document.querySelector('.listView');
const thumbnailButton = document.querySelector('.thumbnailButton');
const thumbnailView = document.querySelector('.thumbnailView');

let visible = false;
let thumbnailVisible = false;
let showImages = true;

//@toggleImages: list/image toggle function
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

//@listFunction: list view is hidden by default, this function allows it to be visiable when "List View" button is clicked by user 
const listFunction = function(e) {
    visible = !visible

    let displaySetting = visible ? "block" : "none";

    const listButtonEl =  document.getElementsByClassName('listView')[0];
   listButtonEl.style["display"] = displaySetting;
} 

//@thumbnailFunction: thumbnail view is visible by default; however, it is hidden when List is shown so this function allows it to be visible again when "Image View" button is clicked by user 
const thumbnailFunction = function(e) {
    thumbnailVisible = !thumbnailVisible
    
    let displaySetting = thumbnailVisible ? "none": "flex";

    const thumbnailButtonEl =  document.getElementsByClassName('thumbnailView')[0];

    thumbnailButtonEl.style["display"] = displaySetting;
}

//@listButton & @thumbnailButton: event listeners attached to "List View" and "Image View" button that trigger toggleImages() upon a click by the user
listButton.addEventListener('click', toggleImages);
thumbnailButton.addEventListener('click', toggleImages);
