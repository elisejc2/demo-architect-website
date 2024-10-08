// Get the modal
const modal = document.getElementById("myModal");

//const projects = document.querySelectorAll('.modal-trigger');

const carouselImages = document.getElementsByClassName('modal-carousel-image');//class on the img el in the modal (html); js reads class as an array

const imageBasePath = "buildingImg/WebProjectLowRes";

const projects = {
    carrollCreek: {
        images: [
            // img count: 8
            `${imageBasePath}/carrollCreek1.jpeg`,
            `${imageBasePath}/carrollCreek2.jpeg`,
            `${imageBasePath}/carrollCreek3.jpeg`,
            `${imageBasePath}/carrollCreek4.jpeg`,
            `${imageBasePath}/carrollCreek5.jpeg`,
            `${imageBasePath}/carrollCreek6.jpeg`,
            `${imageBasePath}/carrollCreek7.jpeg`,
            `${imageBasePath}/carrollCreek8.jpeg`
        ]
    },
    rosslynHq: {
        images: [
            // img count: 5
            `${imageBasePath}/rosslynHq1.jpeg`,
            `${imageBasePath}/rosslynHq2.jpeg`,
            `${imageBasePath}/rosslynHq3.jpeg`,
            `${imageBasePath}/rosslynHq4.jpeg`,
            `${imageBasePath}/rosslynHq5.jpeg`
        ]
    },
    masterplanGreenbelt: {
        images: [
            // img count: 3
            `${imageBasePath}/masterplanGreenbelt1.jpg`,
            `${imageBasePath}/masterplanGreenbelt2.jpeg`,
            `${imageBasePath}/masterplanGreenbelt3.jpeg`
            
        ]
    },
    bethesdaAve: {
        images: [
            //img count: 2
            `${imageBasePath}/bethesdaAve1.jpg`,
            `${imageBasePath}/bethesdaAve2.jpeg`
        ]
    },
    auburnAve: {
        images: [
            // img count: 2
            `${imageBasePath}/auburnAve1.jpeg`,
            `${imageBasePath}/auburnAve2.jpeg`
        ]
    },
    wisconsinAve: {
        images: [
            //img count: 3
            `${imageBasePath}/wisconsinAve1.jpeg`,
            `${imageBasePath}/wisconsinAve2.jpeg`,
            `${imageBasePath}/wisconsinAve3.jpeg`,
        ]
    },
    sigSiteReston: {
        images: [
            //img count: 5
            `${imageBasePath}/sigSiteReston1.jpeg`,
            `${imageBasePath}/sigSiteReston2.jpeg`,
            `${imageBasePath}/sigSiteReston3.jpeg`,
            `${imageBasePath}/sigSiteReston4.jpeg`,
            `${imageBasePath}/sigSiteReston5.jpeg`,
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