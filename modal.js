// Get the modal
const modal = document.getElementById("myModal");

//const projects = document.querySelectorAll('.modal-trigger');

const carouselImages = document.getElementsByClassName('modal-carousel-image');

const imageBasePath = "buildingImg/WebProjectLowRes";

const projects = {
    carollCreek: {
        images: [
            `${imageBasePath}/CarollCreek4.jpg`,
            `${imageBasePath}/CarollCreek5.jpg`,
            `${imageBasePath}/CarollCreek6.jpg`,
            `${imageBasePath}/CarollCreekHistoricDistrict1.jpg`,
            `${imageBasePath}/CarollCreekHistoricDistrict2.jpg`,
            `${imageBasePath}/CarollCreekHistoricDistrict3.jpg`,
        ]
    },
    headquartersVA: {
        images: [
            `${imageBasePath}/CommericalHq3.jpg`,
            `${imageBasePath}/CommericalHqVa.jpg`,
        ]
    },
    masterplanGreenbelt: {
        images: [
            `${imageBasePath}/MasterplanGreenbeltMd1.jpg`,
            `${imageBasePath}/img6.jpg`
        ]
    }
}



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

function openModal(project) {
    //console.log({imagePath});

    for (let i = 0; i < carouselImages.length; i++) {
        const carouselImageEl = carouselImages[i];
        // console.log({ project })
        console.log( "project images:", projects[project].images[i])

        const projectImage = projects[project].images[i];

        carouselImageEl.src = projectImage || `${imageBasePath}/WebProjectLowResNames.jpg`;
        modal.style.display = "block"
    }
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