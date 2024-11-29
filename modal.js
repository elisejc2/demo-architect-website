//const projects = document.querySelectorAll('.modal-trigger');
var isMobileDeviceOrTablet = false;

// Get modal and other DOM elements
const modalEl = document.getElementById("myModal");
const carouselImageEls = document.getElementsByClassName('modal-carousel-image');//class on the img el in the modal (html); js reads class as an array
const carouselTitleEls = document.getElementsByClassName("projectTitle");
const carouselDesignedEls = document.getElementsByClassName("projectDesigned");
const carouselOverviewEls = document.getElementsByClassName("projectOverview");
const carouselTextEls = document.getElementsByClassName("projectText");

const paths = {
    base: "buildingImg",
    carrollCreek: "carroll-creek_maxres",
    rosslynHq: "rosslynHq",
    greenbelt: "greenbelt",
    bethesdaAve: "bethesdaAve_maxres",
    auburnAve: "auburn_maxres",
    wisconsinAve: "wisconsin_maxres",
    sigSiteReston: "sigSiteReston",
    vaHq: "vaHq",
    cityRidge: "cityRidge_maxres",
    pStreet: "pStreet880_maxres",
    fortMyer: "fortMyer",
    walterReed: "walterReed",
    unionMarket: "unionMarket",
    silverSpring: "silverSpring",
    oldGeorgetownRd: "oldGeorgetownRd"
};

const projects = {
    //img count: 8
    carrollCreek: [
        {
            image:`${paths.base}/${paths.carrollCreek}/c04_ALLSAINTS.jpg`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "Frederick, Maryland \nAnticipated Completion: 2026\nProgram: 230 Residences, Retail",
            text: `Located in a historic district on the National Register of Historic Places, the project’s design responds to the industrial legacy of its site including a former rail station, warehouses, and manufacturing buildings. The site is located on the historic Carroll Creek canal and public park. The building concept consists of three wings organized around three outdoor courtyards. The material selections include clay masonry consistent with the historic context and metal panels that recall historic metal roofscapes in Frederick. The program includes retail and residential uses.`
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/c01_CCAERIAL.jpg`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/c03_EASTST.jpg`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/c02_CCGROUND.jpg`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/carrollCreek6.jpeg`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/CC_TOY_MODEL_VIEW3.png`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/CC_TOY_MODEL_VIEW2.png`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/amesDiagrams.png`,
            title: "Carroll Creek Historic District",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    // img count: 18
    rosslynHq: [
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq7.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "Rosslyn, Virginia\nAnticipated Completion: 2026\nProgram: Corporate Headquarters\n",
            text: "Located in one of the tallest buildings in the region, the 360-degree views afforded from the top levels of this building were the driver in its’ adaptive reuse as a national headquarters   in Rosslyn, Virginia. Prospects directly across the river to the National Mall and the Georgetown neighborhood in Washington DC were the drivers in the design. The scope involved the renovation of the top level of the building to provide meeting and amenity spaces. The innovative architectural concept uses a series of outwardly focused spaces- a ‘room necklace’ that provides variously scaled rooms including a café space for employees. The design embraces natural materials and plantings to integrate nature into the daily experience of employees while also permitting special events and meetings"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq1.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq2.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq3.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq4.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq5.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq6.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq8.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq9.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq10.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq11.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/r1ab-s4.jpeg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/view2-sliding door.jpg`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/1201_sk3_inverted.png`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/1201_sk6_inverted.png`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/1201_sk3.png`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/1201_sk6_inverted.png`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/1201_sk6.png`,
            title: "National Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    // img count: 2
    greenbelt: [       
        {
            image: `${paths.base}/${paths.greenbelt}/masterplanGreenbelt1.jpg`,
            title: "Historic Greenbelt Master Plan",
            designed: "",
            overview: "Greenbelt, Maryland\nMaster Plan completion:  December 2024\nProgram: Office, Hotel, Residential, Townhomes",
            text: "The redevelopment of this site references the legacy of the historic greenbelt town center planned during the public works era in the 1930’s. The plan converts a suburban office park and puts the pedestrian and public realm at the center of its densification.  A combination of uses is added to the existing office buildings including office, residential, hotel and retail. The plan is street focused plan and integrates pedestrians and vehicles in a network of streets, green spaces, gardens, and parks in this historically significant neighborhood."
        },
        {
            image: `${paths.base}/${paths.greenbelt}/masterplanGreenbelt2.jpeg`,
            title: "Historic Greenbelt Master Plan",
            designed: "",
            overview: "",
            text: ""
        } 
    ],
    //img count: 3
    bethesdaAve: [
        {
            image: `${paths.base}/${paths.bethesdaAve}/4747-Bethesda-06.jpg`,
            title: "4747 Bethesda Avenue",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates.",
            overview: "Bethesda, Maryland\nCompletion: 2018\nProgram: Corporate Headquarters, Retail",
            text: "Updates to local zoning ordinances triggered the development of this transit rich site in Bethesda Maryland, a suburb of Washington DC.  The design responds to the unique character of the neighborhood, providing a transition between the  commercial and lower scaled residential context. The design responds with a stepped series of volumes that address the heart of the district. The primary exterior material, a patinaed bronze panel, uses a scalloped shape to create visual interest with minimal means."
        },
        {
            image: `${paths.base}/${paths.bethesdaAve}/4747-Bethesda-01.jpg`,
            title: "4747 Bethesda Avenue",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image:`${paths.base}/${paths.bethesdaAve}/4747-Bethesda-11.jpeg`,
            title: "4747 Bethesda Avenue",
            designed: "",
            overview: "",
            text: ""
        }
    ],
     // img count: 2
    auburnAve: [
        {
            image: `${paths.base}/${paths.auburnAve}/C01_op1_0327_FP.jpg`,
            title: "Auburn Avenue",
            designed: "",
            overview: "Woodmont Triangle District, Bethesda, Maryland\nCompletion: 2024\nProgram: 210 Residences",
            text: "The unusual architectural form for this project is inspired by its unique location. The architects wanted the building to mediate the scale of the residential neighborhood to its north and the downtown urban character to its south. Beyond merely stepping the building, the design embraces the modular scale of the neighborhood as part of its form. A through block public connection runs through the center of the building on the ground level, providing mid square access to a neighborhood park adjacent to the site. The patterned masonry surfaces provide a welcoming, approachable palette for the neighborhood."
        },
        {
            image: `${paths.base}/${paths.auburnAve}/Alley.jpg`,
            title: "Auburn Avenue",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 4
    wisconsinAve: [
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve1.jpg`,
            title: "7272 Wisconsin Avenue",
            designed: "",
            overview: "Bethesda, Maryland\nCompletion: 2019\nProgram: Office, Residential, Retail, Transit Station\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.",
            text: "Located on one of the most transit friendly sites in the Washington metropolitan region, 7272 Wisconsin establishes a high-water mark for design. The program includes class A office, residential and retail uses built atop a new transit station for metro, light rail and a regional pedestrian  trail. Three separate towers were sculpted to form a series of outdoor spaces and to maximize natural light and views for residents and office workers. A main entry plaza links to transit stations below grade. The innovative design has received awards from the Tall Building Institute and Design Excellence awards program in Montgomery County."
        },
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve2.jpg`,
            title: "7272 Wisconsin Avenue",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve3.jpg`,
            title: "7272 Wisconsin Avenue",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve4.jpg`,
            title: "7272 Wisconsin Avenue",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 5
    sigSiteReston: [
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston1.jpeg`,
            title: "Signature Site",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates.",
            overview: "Reston, Virginia\nCompletion: 2017\nProgram: 450 Residences, Retail",
            text: "The site location is one of the most prominent sites within the Reston Town Center plan area, and one of the last sites to develop. The design proposes two towers that anchor the corner with an urban void between them. The towers include 2-3 story volumes that scale the site to the pedestrian streetscape with innovative townhouse and retail wings. Materials highlight the slender proportions of the towers, articulating their vertical forms."
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston2.jpeg`,
            title: "Signature Site",
            designed: "",
            overview: "",
            text: ""
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston3.jpeg`,
            title: "Signature Site",
            designed: "",
            overview: "",
            text: ""
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston4.jpeg`,
            title: "Signature Site",
            designed: "",
            overview: "",
            text: ""
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston5.jpeg`,
            title: "Signature Site",
            designed: "",
            overview: "",
            text: ""
        },
    ],
    //img count: 4
    vaHq: [
        {
            image: `${paths.base}/${paths.vaHq}/vaHq1.jpg`,
            title: "International Corporate Headquarters",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates.",
            overview: "McLean, Virginia\nCompletion: 2026\nProgram: Corporate Headquarters",
            text: "An existing building was adaptively reused and expanded to become the headquarters location of an international organization. The existing and new wings were developed in a modular fashion around an atrium space inserted into the existing building. Plantings and natural light between the ‘neighborhoods’ are part of an overall strategy to bring nature into the building and part of the everyday work environment. Natural light is brought in through deep clerestories and biophilic inserts that minimize energy used for lighting. On site energy generation  includes geothermal wells and solar panels, and provides approximately 60% of the total energy needed annually."
        },
        {
            image: `${paths.base}/${paths.vaHq}/vaHq2_300pxin.jpeg`,
            title: "International Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.vaHq}/vaHq3.jpeg`,
            title: "International Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.vaHq}/vaHq4.jpeg`,
            title: "International Corporate Headquarters",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 5
    cityRidge: [
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge1.jpg`,
            title: "City Ridge",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates.",
            overview: "Washington, DC\nMaster Plan completion: 2018\tConstruction completion: 2022\nProgram: Office, Retail, 700 Residences",
            text: "This project began with a masterplan for the densification of a site formerly home to Fannie Mae’s headquarters in northwest Washington DC.  A series of new, intimate walking streets surround the historic existing building and connect to the adjacent neighborhoods to the north and south. Intimately scaled curb less streets are defined by the eight new buildings and open spaces that form the public realm. A varied palette of materials provides architectural interest within a distinctly industrial, timeless vocabulary."
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge2.jpg`,
            title: "City Ridge",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge3.jpg`,
            title: "City Ridge",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge4.jpg`,
            title: "City Ridge",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge5.jpg`,
            title: "City Ridge",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 4
    pStreet880:[
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_2.jpg`,
            title: "880 P Street NW",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates.",
            overview: "Washington DC, Shaw neighborhood\nCompletion: 2015\nProgram: Residential, Retail",
            text: "As the final phase of the City Market at O Street development, this project restores the urban fabric along the Ninth and P street frontages. A series of vertically proportioned volumes face the historic townhomes characteristic of the historic Shaw neighborhood.  Upper story setbacks emphasize the scale along the street frontage. Exterior materials include deeply coffered facades in anodized aluminum in combination with softly textured white masonry. Direct entrances from the street are provided along P street, and outdoor balconies and terraces are incorporated throughout."
        },
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_1.jpg`,
            title: "880 P Street NW",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_3.jpg`,
            title: "880 P Street NW",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_5.jpeg`,
            title: "880 P Street NW",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 4
    fortMyer: [
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer3.jpeg`,
            title: "1820 Fort Myer",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates",
            overview: "Rosslyn, Virginia\nProgram: 750 Residences, Retail\nCompletion: Anticipated 2028",
            text: "The focus of this redevelopment project was implementing a mid-block public passage as part of a master plan that links the neighborhood to the adjacent transit center. The building forms are designed to maximize natural light along this public passage and scale the buildings appropriately. An undulating, wrinkled façade plane allows for outdoor balconies to be inset into the majority of residences. Green plantings enhance the public realm and are incorporated into the balconies."
        },
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer1.jpeg`,
            title: "1820 Fort Myer",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer2.jpeg`,
            title: "1820 Fort Myer",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer4.jpg`,
            title: "1820 Fort Myer",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 4
    walterReed: [
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan1.jpg`,
            title: "Walter Reed",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates",
            overview: "Washington, DC\nProgram:  Planning and Adaptive Re-use of 70 acres",
            text: "This master plan was a competition entry for the development of a formerly military hospital campus. The master plan included the adaptive re-use of multiple existing buildings and the formation of multiple new use areas including a residential neighborhood, a new commercial district including research facilities and recreational and cultural uses utilizing an expansive natural park area."
        },
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan2.jpg`,
            title: "Walter Reed",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan3.jpeg`,
            title: "Walter Reed",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan4.jpeg`,
            title: "Walter Reed",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 3
    unionMarket: [
        {
            image: `${paths.base}/${paths.unionMarket}/unionMarket2.jpeg`,
            title: "Union Market",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates",
            overview: "Silver Spring, Maryland\nResidential Building Completion: 2018",
            text: "A residential and commercial building were designed as part of an emerging district in northeast Washington DC.  The unique architectural approach was a response to the industrial character of the existing warehouse district, long an integral part of the food distribution network of the city.  The commercial building is designed to span a new food market that remains operational during construction.  The residential building provides four modules that rise above an existing warehouse that is repurposed as a food market."
        },
        {
            image: `${paths.base}/${paths.unionMarket}/unionMarket3.jpg`,
            title: "Union Market",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.unionMarket}/unionMarket1.jpg`,
            title: "Union Market",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 3
    silverSpring: [
        {
            image: `${paths.base}/${paths.silverSpring}/silverSpring2_300pxin.jpeg`,
            title: "Silver Spring Vision",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates ",
            overview: "Silver Spring, Maryland\nPlan completion: 2022.",
            text: "Invited by the local jurisdiction to assist in a master plan update, the project involved an urban vision for Silver Spring Maryland, a close in Washington DC urban center. Centered on a multi-modal transit hub this vision adds a much needed green park over the transit center along with increased pedestrian access to green space and well defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
        },
        {
            image: `${paths.base}/${paths.silverSpring}/silverSpring4_300pxin.jpeg`,
            title: "Silver Spring Vision",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.silverSpring}/silverSpring7_300pxin.jpeg`,
            title: "Silver Spring Vision",
            designed: "",
            overview: "",
            text: ""
        }
    ],
    //img count: 4
    oldGeorgetownRd: [
        {
            image: `${paths.base}/${paths.oldGeorgetownRd}/oldGeorgetownRdCornerPerspective.jpeg`,
            title: "7607 Old Georgetown Rd",
            designed: "Designed by Robert Sponseller FAIA while at Shalom Baranes Associates",
            overview: "Bethesda, Md\nProgram:  Residential, Retail",
            text: "A highly constrained urban site  in the heart of this neighborhood required careful planning and massing.  The volumes address both the primary arterial and the adjacent curving tree lined frontage to the east.  The architects utilized modest masonry materials and worked with window articulation, pattern and color to provide design value using conventional construction practices."
        },
        {
            image: `${paths.base}/${paths.oldGeorgetownRd}/oldGeorgetownRdFormDevelopmentDiagrams.jpeg`,
            title: "7607 Old Georgetown Rd",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.oldGeorgetownRd}/oldGeorgetownRdBuildingElevations.jpeg`,
            title: "7607 Old Georgetown Rd",
            designed: "",
            overview: "",
            text: ""
        },
        {
            image: `${paths.base}/${paths.oldGeorgetownRd}/oldGeorgetownRdBuildingElevations2.jpeg`,
            title: "7607 Old Georgetown Rd",
            designed: "",
            overview: "",
            text: ""
        }
    ]
}

function handleMobileDeviceAndTabletRenderingAdjustments() {
    modalEl.style.height = "100%"; // Allows pop-up to take up the full viewport
    document.getElementById("carousel-container").scrollTop = 0; // Scrolls to the top of carousel, since sometimes the view is set to the center
}

function openModal(project) {
    const currentPrj = projects[project];

    for (let i = 0; i < carouselImageEls.length; i++) {
        const currentPrjItem = currentPrj[i % currentPrj.length]; //the modulo ensures the array wraps back to the first img if i exceeds length
        const { image, title, designed, overview, text } = currentPrjItem; // Shorthand for currentPrjItem.image and currentPrjItem.text ... this is called "object destructuring"

        const carouselImageEl = carouselImageEls[i]; // Grabs a specific carousel image DOM element
        const carouselTitleEl = carouselTitleEls[i]; 
        const carouselDesignedEl = carouselDesignedEls[i]; 
        const carouselOverviewEl = carouselOverviewEls[i]; 
        const carouselTextEl = carouselTextEls[i]; // Grabs a specific carousel text DOM element

        carouselImageEl.src = image;
        carouselImageEl.parentElement.classList.remove("active");
        carouselTitleEl.innerHTML = title;

        if (designed) {
            carouselDesignedEl.innerHTML = designed;
            carouselDesignedEl.style.display = ""; // Ensure it's visible when there is content
        } else {
            carouselDesignedEl.style.display = "none"; // Hide when there is no content
        }
        
        carouselOverviewEl.innerHTML = overview.replace(/\n/g, "<br>").replace(/\t/g, "<code>&#9;&#9;</code>"); // 2nd .replace will subsitutde \t for *two* HTML tab chars. Note that the overview element is a <pre> tag to preserve whitespace formatting
        carouselTextEl.innerHTML = text.replace(/\n/g, "<br>");
    }
    
    carouselImageEls[0].parentElement.classList.add("active"); 
    modalEl.style.display = "block"
    document.body.style.overflowY = "hidden"; // Eliminate scrollbar for page behind modal while modal is open

    if (mobileAndTabletCheck) {
        handleMobileDeviceAndTabletRenderingAdjustments(); // TODO: fix the code to scroll to the top of the modal on mobile
    }
}

function closeModal() {
    modalEl.style.display = "none";
    document.body.style.overflowY = "auto"; // Replace scrollbar for page behind modal when modal is closed
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modalEl) {
    modalEl.style.display = "none";
  }
}

window.mobileAndTabletCheck = function() {
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobileDeviceOrTablet = true;})(navigator.userAgent||navigator.vendor||window.opera);
  };