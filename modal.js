// Get the modal
const modal = document.getElementById("myModal");

//const projects = document.querySelectorAll('.modal-trigger');

const carouselImages = document.getElementsByClassName('modal-carousel-image');//class on the img el in the modal (html); js reads class as an array

const carouselText = document.getElementById("projectText");

const imageBasePath = "buildingImg";
const carrollCreekPath = "carroll-creek_maxres";
const rosslynHqPath = "rosslynHq";
const greenbeltPath = "greenbelt";
const bethesdaAvePath = "bethesdaAve_maxres";
const auburnAvePath = "auburn_maxres";
const wisconsinAvePath = "wisconsin_maxres";
const sigSiteRestonPath = "sigSiteReston";
const vaHqPath = "vaHq";
const cityRidgePath = "cityRidge_maxres";
const pStreetPath = "pStreet880_maxres";
const fortMyerPath = "fortMyer";
const walterReedPath = "walterReed";
const unionMarketPath = "unionMarket";
const silverSpringPath = "silverSpring";


const projects = {
    carrollCreek: {
        images: [
            // img count: 6
            `${imageBasePath}/${carrollCreekPath}/c04_ALLSAINTS.jpg`,
            `${imageBasePath}/${carrollCreekPath}/c01_CCAERIAL.jpg`,
            `${imageBasePath}/${carrollCreekPath}/c03_EASTST.jpg`,
            `${imageBasePath}/${carrollCreekPath}/c02_CCGROUND.jpg`,
            `${imageBasePath}/${carrollCreekPath}/carrollCreek5.jpeg`,
            `${imageBasePath}/${carrollCreekPath}/carrollCreek6.jpeg`
        ],
        text: `Carroll Creek Historic District\n\nFrederick, Maryland \nAnticipated Completion: 2026\nProgram: 230 Residences, Retail\nLocated in a historic district on the National Register of Historic Places, the project’s design responds to the industrial legacy of its site including a former rail station, warehouses, and manufacturing buildings. The site is located on the historic Carroll Creek canal and public park. The building concept consists of three wings organized around three outdoor courtyards. The material selections include clay masonry consistent with the historic context and metal panels that recall historic metal roofscapes in Frederick. The program includes retail and residential uses.`
    },
    rosslynHq: {
        images: [
            // img count: 13
            `${imageBasePath}/${rosslynHqPath}/rosslynHq7.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq1.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq2.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq3.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq4.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq5.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq6.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq8.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq9.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq10.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/rosslynHq11.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/r1ab-s4.jpeg`,
            `${imageBasePath}/${rosslynHqPath}/view2-sliding door.jpg`

        ],
        text: "National Corporate Headquarters\n\nRosslyn, Virginia\nAnticipated Completion: 2026\nProgram: Corporate Headquarters\nLocated in one of the tallest buildings in the region, the 360-degree views afforded from the top levels of this building were the driver in its’ adaptive reuse as a national headquarters   in Rosslyn, Virginia. Prospects directly across the river to the National Mall and the Georgetown neighborhood in Washington DC were the drivers in the design. The scope involved the renovation of the top level of the building to provide meeting and amenity spaces. The innovative architectural concept uses a series of outwardly focused spaces- a ‘room necklace’ that provides variously scaled rooms including a café space for employees. The design embraces natural materials and plantings to integrate nature into the daily experience of employees while also permitting special events and meetings"
    },
    greenbelt: {
        images: [
            // img count: 2
            `${imageBasePath}/${greenbeltPath}/masterplanGreenbelt1.jpg`,
            `${imageBasePath}/${greenbeltPath}/masterplanGreenbelt2.jpeg` 
        ],
        text: "Historic Greenbelt Master Plan\n\nGreenbelt, Maryland\nMaster Plan completion:  December 2024\nProgram: Office, Hotel, Residential, Townhomes\nThe redevelopment of this site references the legacy of the historic greenbelt town center planned during the public works era in the 1930’s. The plan converts a suburban office park and puts the pedestrian and public realm at the center of its densification.  A combination of uses is added to the existing office buildings including office, residential, hotel and retail. The plan is street focused plan and integrates pedestrians and vehicles in a network of streets, green spaces, gardens, and parks in this historically significant neighborhood."
    },
    bethesdaAve: {
        images: [
            //img count: 3
            `${imageBasePath}/${bethesdaAvePath}/4747-Bethesda-06.jpg`,
            `${imageBasePath}/${bethesdaAvePath}/4747-Bethesda-01.jpg`,
            `${imageBasePath}/${bethesdaAvePath}/4747-Bethesda-11.jpeg`
        ],
        text: "4747 Bethesda Avenue\n\nBethesda, Maryland\nCompletion: 2018\nProgram: Corporate Headquarters, Retail\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nUpdates to local zoning ordinances triggered the development of this transit rich site in Bethesda Maryland, a suburb of Washington DC.  The design responds to the unique character of the neighborhood, providing a transition between the  commercial and lower scaled residential context. The design responds with a stepped series of volumes that address the heart of the district. The primary exterior material, a patinaed bronze panel, uses a scalloped shape to create visual interest with minimal means."
    },
    auburnAve: {
        images: [
            // img count: 2
            `${imageBasePath}/${auburnAvePath}/C01_op1_0327_FP.jpg`,
            `${imageBasePath}/${auburnAvePath}/Alley.jpg`
        ],
        text: "Auburn Avenue\n\nWoodmont Triangle District, Bethesda, Maryland\nCompletion: 2024\nProgram: 210 Residences\nThe unusual architectural form for this project is inspired by its unique location. The architects wanted the building to mediate the scale of the residential neighborhood to its north and the downtown urban character to its south. Beyond merely stepping the building, the design embraces the modular scale of the neighborhood as part of its form. A through block public connection runs through the center of the building on the ground level, providing mid square access to a neighborhood park adjacent to the site. The patterned masonry surfaces provide a welcoming, approachable palette for the neighborhood."
    },
    wisconsinAve: {
        images: [
            //img count: 4
            `${imageBasePath}/${wisconsinAvePath}/wisconsinAve1.jpg`,
            `${imageBasePath}/${wisconsinAvePath}/wisconsinAve2.jpg`,
            `${imageBasePath}/${wisconsinAvePath}/wisconsinAve3.jpg`,
            `${imageBasePath}/${wisconsinAvePath}/wisconsinAve4.jpg`
        ],
        text: "7272 Wisconsin Avenue\n\nBethesda, Maryland\nCompletion: 2019\nProgram: Office, Residential, Retail, Transit Station\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nLocated on one of the most transit friendly sites in the Washington metropolitan region, 7272 Wisconsin establishes a high-water mark for design. The program includes class A office, residential and retail uses built atop a new transit station for metro, light rail and a regional pedestrian  trail. Three separate towers were sculpted to form a series of outdoor spaces and to maximize natural light and views for residents and office workers. A main entry plaza links to transit stations below grade. The innovative design has received awards from the Tall Building Institute and Design Excellence awards program in Montgomery County."
    },
    sigSiteReston: {
        images: [
            //img count: 5
            `${imageBasePath}/${sigSiteRestonPath}/sigSiteReston1.jpeg`,
            `${imageBasePath}/${sigSiteRestonPath}/sigSiteReston2.jpeg`,
            `${imageBasePath}/${sigSiteRestonPath}/sigSiteReston3.jpeg`,
            `${imageBasePath}/${sigSiteRestonPath}/sigSiteReston4.jpeg`,
            `${imageBasePath}/${sigSiteRestonPath}/sigSiteReston5.jpeg`,
        ],
        text: "Signature Site\n\nReston, Virginia\nCompletion: 2017\nProgram: 450 Residences, Retail\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nThe site location is one of the most prominent sites within the Reston Town Center plan area, and one of the last sites to develop. The design proposes two towers that anchor the corner with an urban void between them. The towers include 2-3 story volumes that scale the site to the pedestrian streetscape with innovative townhouse and retail wings. Materials highlight the slender proportions of the towers, articulating their vertical forms."
    },
    vaHq: {
        images: [
            //img count: 4
            `${imageBasePath}/${vaHqPath}/vaHq1.jpg`,
            `${imageBasePath}/${vaHqPath}/vaHq2.jpeg`,
            `${imageBasePath}/${vaHqPath}/vaHq3.jpeg`,
            `${imageBasePath}/${vaHqPath}/vaHq4.jpeg`

        ],
        text: "International Corporate Headquarters\n\nMcLean, Virginia\nCompletion: 2026\nProgram: Corporate Headquarters\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nAn existing building was adaptively reused and expanded to become the headquarters location of an international organization. The existing and new wings were developed in a modular fashion around an atrium space inserted into the existing building. Plantings and natural light between the ‘neighborhoods’ are part of an overall strategy to bring nature into the building and part of the everyday work environment. Natural light is brought in through deep clerestories and biophilic inserts that minimize energy used for lighting. On site energy generation  includes geothermal wells and solar panels, and provides approximately 60% of the total energy needed annually."
    },
    cityRidge: {
        //img count: 5
        images: [`${imageBasePath}/cityRidge_maxres/cityRidge1.jpg`,
        `${imageBasePath}/${cityRidgePath}/cityRidge2.jpg`,
        `${imageBasePath}/${cityRidgePath}/cityRidge3.jpg`,
        `${imageBasePath}/${cityRidgePath}/cityRidge4.jpg`,
        `${imageBasePath}/${cityRidgePath}/cityRidge5.jpg`],
        text: "City Ridge\nWashington, DC\n\nMaster Plan completion: 2018\nConstruction completion: 2022\nProgram: Office, Retail, 700 Residences\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nThis project began with a masterplan for the densification of a site formerly home to Fannie Mae’s headquarters in northwest Washington DC.  A series of new, intimate walking streets surround the historic existing building and connect to the adjacent neighborhoods to the north and south. Intimately scaled curb less streets are defined by the eight new buildings and open spaces that form the public realm. A varied palette of materials provides architectural interest within a distinctly industrial, timeless vocabulary."
    },
    pStreet880: {
        images: [
            //img count: 4
            `${imageBasePath}/${pStreetPath}/pStreet880_5.jpeg`,
            `${imageBasePath}/${pStreetPath}/pStreet880_2.jpg`,
            `${imageBasePath}/${pStreetPath}/pStreet880_1.jpg`,
            `${imageBasePath}/${pStreetPath}/pStreet880_3.jpg`
        ],
        text: "880 P Street NW\n\nWashington DC, Shaw neighborhood\nCompletion: 2015\nProgram: Residential, Retail\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nAs the final phase of the City Market at O Street development, this project restores the urban fabric along the Ninth and P street frontages. A series of vertically proportioned volumes face the historic townhomes characteristic of the historic Shaw neighborhood.  Upper story setbacks emphasize the scale along the street frontage. Exterior materials include deeply coffered facades in anodized aluminum in combination with softly textured white masonry. Direct entrances from the street are provided along P street, and outdoor balconies and terraces are incorporated throughout."
    },
    fortMyer: {
        //img count: 4
        images: [
            `${imageBasePath}/${fortMyerPath}/fortMyer3.jpeg`,
            `${imageBasePath}/${fortMyerPath}/fortMyer1.jpeg`,
            `${imageBasePath}/${fortMyerPath}/fortMyer2.jpeg`,
            `${imageBasePath}/${fortMyerPath}/fortMyer4.jpg`
        ],
        text: "Silver Spring Vision\n\nSilver Spring, Maryland\nPlan completion: 2022.\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates \nInvited by the local jurisdiction to assist in a master plan update, the project involved an urban vision for Silver Spring Maryland, a close in Washington DC urban center. Centered on a multi-modal transit hub this vision adds a much needed green park over the transit center along with increased pedestrian access to green space and well defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
    },
    walterReed: {
        images: [
            //img count: 4
            `${imageBasePath}/${walterReedPath}/walterReedMasterplan1.jpg`,
            `${imageBasePath}/${walterReedPath}/walterReedMasterplan2.jpg`,
            `${imageBasePath}/${walterReedPath}/walterReedMasterplan3.jpeg`,
            `${imageBasePath}/${walterReedPath}/walterReedMasterplan4.jpeg`
        ],
        text: "Walter Reed"
    },
    unionMarket: {
        images: [
            //img count: 3
            `${imageBasePath}/${unionMarketPath}/unionMarket1.jpg`,
            `${imageBasePath}/${unionMarketPath}/unionMarket2.jpg`,
            `${imageBasePath}/${unionMarketPath}/unionMarket3.jpg`
        ],
        text: "Union Market"
    },
    silverSpring: {
        images: [//img count: 3
        `${imageBasePath}/${silverSpringPath}/silverSpring2.jpeg`,
        `${imageBasePath}/${silverSpringPath}/silverSpring4.jpeg`,
        `${imageBasePath}/${silverSpringPath}/silverSpring7.jpeg`
        ],
        text: "Silver Spring Vision\n\nSilver Spring, Maryland\nPlan completion: 2022.\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates \nInvited by the local jurisdiction to assist in a master plan update, the project involved an urban vision for Silver Spring Maryland, a close in Washington DC urban center. Centered on a multi-modal transit hub this vision adds a much needed green park over the transit center along with increased pedestrian access to green space and well defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
    }
}

function openModal(project) {
    const currentProject = projects[project]
    const projectText = currentProject.text.replace(/\n/g, "<br>");


    carouselText.innerHTML = projectText; 

    
    for (let i = 0; i < carouselImages.length; i++) {
        const carouselImageEl = carouselImages[i];
        const projectImage = currentProject.images[i % currentProject.images.length]; //the modulo ensures the array wraps back to the first img if i exceeds length
        carouselImageEl.src = projectImage; 
        carouselImageEl.parentElement.classList.remove("active");
    }
    carouselImages[0].parentElement.classList.add("active"); 
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