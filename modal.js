// Get the modal
const modal = document.getElementById("myModal");

//const projects = document.querySelectorAll('.modal-trigger');

const projectImage = document.getElementById('project-modal-image');



// When the user clicks the button, open the modal 
/*
for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const closeButton = closeButtons[i];

    project.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <close> (x), close the modal
    closeButton.onclick = function() {
        modal.style.display = "none";
    }
}
*/

function openModal(imagePath) {
    //console.log({imagePath});
    projectImage.src = imagePath;
    modal.style.display = "block"
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}