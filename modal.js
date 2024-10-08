// Get the modal
const modal = document.getElementById("myModal");

//const projects = document.querySelectorAll('.modal-trigger');

const carouselImages = document.getElementsByClassName('modal-carousel-image');//class on the img el in the modal (html); js reads class as an array

const imageBasePath = "buildingImg/WebProjectLowRes";

const projects = {
    carollCreek: {
        images: [
            // img count: 7
            `${imageBasePath}/carollCreek1.jpg`,
            `${imageBasePath}/carollCreek2.jpg`,
            `${imageBasePath}/carollCreek3.jpg`,
            `${imageBasePath}/carollCreek4.jpg`,
            `${imageBasePath}/carollCreek5.jpg`,
            `${imageBasePath}/carollCreek6.jpg`,
            `${imageBasePath}/carollCreek7.jpg`
        ]
    },
    headquartersVA: {
        images: [
            // img count: 5
            `${imageBasePath}/hqVA1.jpg`,
            `${imageBasePath}/hqVA2.jpg`,
            `${imageBasePath}/hqVA3.jpg`,
            `${imageBasePath}/hqVA4.jpg`,
            `${imageBasePath}/hqVA5.jpg`
        ]
    },
    masterplanGreenbelt: {
        images: [
            // img count: 2
            `${imageBasePath}/masterplanGreenbelt1.jpg`,
            `${imageBasePath}/masterplanGreenbelt2.jpg`
            
        ]
    },
    bethesdaAve: {
        images: [
            //img count: 2
            `${imageBasePath}/bethesdaAve1.jpg`,
            `${imageBasePath}/bethesdaAve2.jpg`
        ]
    },
    auburnAve: {
        images: [
            // img count: 2
            `${imageBasePath}/auburnAve1.jpg`,
            `${imageBasePath}/auburnAve2.jpg`
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
        // console.log( "project images:", projects[project].images[i])

        const projectImage = projects[project].images[i];
        //array within an array

        carouselImageEl.src = projectImage || projects[project].images[0];
        // carouselImageEl.src = projectImage || `${imageBasePath}/WebProjectLowResNames.jpg`;
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