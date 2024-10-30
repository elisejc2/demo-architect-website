//const projects = document.querySelectorAll('.modal-trigger');
var isMobileDevice = false;

// Get modal and other DOM elements
const modalEl = document.getElementById("myModal");
const carouselImageEls = document.getElementsByClassName('modal-carousel-image');//class on the img el in the modal (html); js reads class as an array
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
    silverSpring: "silverSpring"
};

const projects = {
    // img count: 6
    carrollCreek: [
        {
            image:`${paths.base}/${paths.carrollCreek}/c04_ALLSAINTS.jpg`,
            text: `Carroll Creek Historic District\n\nFrederick, Maryland \nAnticipated Completion: 2026\nProgram: 230 Residences, Retail\nLocated in a historic district on the National Register of Historic Places, the project’s design responds to the industrial legacy of its site including a former rail station, warehouses, and manufacturing buildings. The site is located on the historic Carroll Creek canal and public park. The building concept consists of three wings organized around three outdoor courtyards. The material selections include clay masonry consistent with the historic context and metal panels that recall historic metal roofscapes in Frederick. The program includes retail and residential uses.`
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/c01_CCAERIAL.jpg`,
            text: "Carroll Creek Historic District"
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/c03_EASTST.jpg`,
            text: "Carroll Creek Historic District"
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/c02_CCGROUND.jpg`,
            text: "Carroll Creek Historic District"
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/carrollCreek5.jpeg`,
            text: "Carroll Creek Historic District"
        },
        {
            image: `${paths.base}/${paths.carrollCreek}/carrollCreek6.jpeg`,
            text: "Carroll Creek Historic District"
        }
    ],
    // img count: 13
    rosslynHq: [
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq7.jpeg`,
            text: "National Corporate Headquarters\n\nRosslyn, Virginia\nAnticipated Completion: 2026\nProgram: Corporate Headquarters\nLocated in one of the tallest buildings in the region, the 360-degree views afforded from the top levels of this building were the driver in its’ adaptive reuse as a national headquarters   in Rosslyn, Virginia. Prospects directly across the river to the National Mall and the Georgetown neighborhood in Washington DC were the drivers in the design. The scope involved the renovation of the top level of the building to provide meeting and amenity spaces. The innovative architectural concept uses a series of outwardly focused spaces- a ‘room necklace’ that provides variously scaled rooms including a café space for employees. The design embraces natural materials and plantings to integrate nature into the daily experience of employees while also permitting special events and meetings"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq1.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq2.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq3.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq4.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq5.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq6.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq8.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq9.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq10.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/rosslynHq11.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/r1ab-s4.jpeg`,
            text: "National Corporate Headquarter"
        },
        {
            image: `${paths.base}/${paths.rosslynHq}/view2-sliding door.jpg`,
            text: "National Corporate Headquarter"
        }
    ],
    // img count: 2
    greenbelt: [       
        {
            image: `${paths.base}/${paths.greenbelt}/masterplanGreenbelt1.jpg`,
            text: "Historic Greenbelt Master Plan\n\nGreenbelt, Maryland\nMaster Plan completion:  December 2024\nProgram: Office, Hotel, Residential, Townhomes\nThe redevelopment of this site references the legacy of the historic greenbelt town center planned during the public works era in the 1930’s. The plan converts a suburban office park and puts the pedestrian and public realm at the center of its densification.  A combination of uses is added to the existing office buildings including office, residential, hotel and retail. The plan is street focused plan and integrates pedestrians and vehicles in a network of streets, green spaces, gardens, and parks in this historically significant neighborhood."
        },
        {
            image: `${paths.base}/${paths.greenbelt}/masterplanGreenbelt2.jpeg`,
            text: "Historic Greenbelt Master Plan"
        } 
    ],
    //img count: 3
    bethesdaAve: [
        {
            image: `${paths.base}/${paths.bethesdaAve}/4747-Bethesda-06.jpg`,
            text: "4747 Bethesda Avenue\n\nBethesda, Maryland\nCompletion: 2018\nProgram: Corporate Headquarters, Retail\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nUpdates to local zoning ordinances triggered the development of this transit rich site in Bethesda Maryland, a suburb of Washington DC.  The design responds to the unique character of the neighborhood, providing a transition between the  commercial and lower scaled residential context. The design responds with a stepped series of volumes that address the heart of the district. The primary exterior material, a patinaed bronze panel, uses a scalloped shape to create visual interest with minimal means."
        },
        {
            image: `${paths.base}/${paths.bethesdaAve}/4747-Bethesda-01.jpg`,
            text: "4747 Bethesda Avenue"
        },
        {
            image:`${paths.base}/${paths.bethesdaAve}/4747-Bethesda-11.jpeg`,
            text:"4747 Bethesda Avenue"
        }
    ],
     // img count: 2
    auburnAve: [
        {
            image: `${paths.base}/${paths.auburnAve}/C01_op1_0327_FP.jpg`,
            text: "Auburn Avenue\n\nWoodmont Triangle District, Bethesda, Maryland\nCompletion: 2024\nProgram: 210 Residences\nThe unusual architectural form for this project is inspired by its unique location. The architects wanted the building to mediate the scale of the residential neighborhood to its north and the downtown urban character to its south. Beyond merely stepping the building, the design embraces the modular scale of the neighborhood as part of its form. A through block public connection runs through the center of the building on the ground level, providing mid square access to a neighborhood park adjacent to the site. The patterned masonry surfaces provide a welcoming, approachable palette for the neighborhood."
        },
        {
            image: `${paths.base}/${paths.auburnAve}/Alley.jpg`,
            text: "Auburn Avenue"
        }
    ],
    //img count: 4
    wisconsinAve: [
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve1.jpg`,
            text: "7272 Wisconsin Avenue\n\nBethesda, Maryland\nCompletion: 2019\nProgram: Office, Residential, Retail, Transit Station\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nLocated on one of the most transit friendly sites in the Washington metropolitan region, 7272 Wisconsin establishes a high-water mark for design. The program includes class A office, residential and retail uses built atop a new transit station for metro, light rail and a regional pedestrian  trail. Three separate towers were sculpted to form a series of outdoor spaces and to maximize natural light and views for residents and office workers. A main entry plaza links to transit stations below grade. The innovative design has received awards from the Tall Building Institute and Design Excellence awards program in Montgomery County."
        },
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve2.jpg`,
            text: "7272 Wisconsin Avenue"
        },
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve3.jpg`,
            text: "7272 Wisconsin Avenue"
        },
        {
            image: `${paths.base}/${paths.wisconsinAve}/wisconsinAve4.jpg`,
            text: "7272 Wisconsin Avenue"
        }
    ],
    //img count: 5
    sigSiteReston: [
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston1.jpeg`,
            text: "Signature Site\n\nReston, Virginia\nCompletion: 2017\nProgram: 450 Residences, Retail\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nThe site location is one of the most prominent sites within the Reston Town Center plan area, and one of the last sites to develop. The design proposes two towers that anchor the corner with an urban void between them. The towers include 2-3 story volumes that scale the site to the pedestrian streetscape with innovative townhouse and retail wings. Materials highlight the slender proportions of the towers, articulating their vertical forms."
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston2.jpeg`,
            text: "Signature Site"
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston3.jpeg`,
            text: "Signature Site"
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston4.jpeg`,
            text: "Signature Site"
        },
        { 
            image:`${paths.base}/${paths.sigSiteReston}/sigSiteReston5.jpeg`,
            text: "Signature Site"
        },
    ],
    //img count: 4
    vaHq: [
        {
            image: `${paths.base}/${paths.vaHq}/vaHq1.jpg`,
            text: "International Corporate Headquarters\n\nMcLean, Virginia\nCompletion: 2026\nProgram: Corporate Headquarters\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nAn existing building was adaptively reused and expanded to become the headquarters location of an international organization. The existing and new wings were developed in a modular fashion around an atrium space inserted into the existing building. Plantings and natural light between the ‘neighborhoods’ are part of an overall strategy to bring nature into the building and part of the everyday work environment. Natural light is brought in through deep clerestories and biophilic inserts that minimize energy used for lighting. On site energy generation  includes geothermal wells and solar panels, and provides approximately 60% of the total energy needed annually."
        },
        {
            image: `${paths.base}/${paths.vaHq}/vaHq2.jpeg`,
            text: "International Corporate Headquarters"
        },
        {
            image: `${paths.base}/${paths.vaHq}/vaHq3.jpeg`,
            text: "International Corporate Headquarters"
        },
        {
            image: `${paths.base}/${paths.vaHq}/vaHq4.jpeg`,
            text: "International Corporate Headquarters"
        }
    ],
    //img count: 5
    cityRidge: [
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge1.jpg`,
            text: "City Ridge\nWashington, DC\n\nMaster Plan completion: 2018\nConstruction completion: 2022\nProgram: Office, Retail, 700 Residences\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nThis project began with a masterplan for the densification of a site formerly home to Fannie Mae’s headquarters in northwest Washington DC.  A series of new, intimate walking streets surround the historic existing building and connect to the adjacent neighborhoods to the north and south. Intimately scaled curb less streets are defined by the eight new buildings and open spaces that form the public realm. A varied palette of materials provides architectural interest within a distinctly industrial, timeless vocabulary."
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge2.jpg`,
            text: "City Ridge"
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge3.jpg`,
            text: "City Ridge"
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge4.jpg`,
            text: "City Ridge"
        },
        {
            image: `${paths.base}/${paths.cityRidge}/cityRidge5.jpg`,
            text: "City Ridge"
        }
    ],
    //img count: 4
    pStreet880:[
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_5.jpeg`,
            text: "880 P Street NW\n\nWashington DC, Shaw neighborhood\nCompletion: 2015\nProgram: Residential, Retail\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates.\nAs the final phase of the City Market at O Street development, this project restores the urban fabric along the Ninth and P street frontages. A series of vertically proportioned volumes face the historic townhomes characteristic of the historic Shaw neighborhood.  Upper story setbacks emphasize the scale along the street frontage. Exterior materials include deeply coffered facades in anodized aluminum in combination with softly textured white masonry. Direct entrances from the street are provided along P street, and outdoor balconies and terraces are incorporated throughout."
        },
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_2.jpg`,
            text: "880 P Street NW"
        },
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_1.jpg`,
            text: "880 P Street NW"
        },
        {
            image: `${paths.base}/${paths.pStreet}/pStreet880_3.jpg`,
            text: "880 P Street NW"
        }
    ],
    //img count: 4
    fortMyer: [
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer3.jpeg`,
            text: "Silver Spring Vision\n\nSilver Spring, Maryland\nPlan completion: 2022.\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates \nInvited by the local jurisdiction to assist in a master plan update, the project involved an urban vision for Silver Spring Maryland, a close in Washington DC urban center. Centered on a multi-modal transit hub this vision adds a much needed green park over the transit center along with increased pedestrian access to green space and well defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
        },
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer1.jpeg`,
            text: "Silver Spring Vision"
        },
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer2.jpeg`,
            text: "Silver Spring Vision"
        },
        {
            image: `${paths.base}/${paths.fortMyer}/fortMyer4.jpg`,
            text: "Silver Spring Vision"
        }
    ],
    //img count: 4
    walterReed: [
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan1.jpg`,
            text: "Walter Reed"
        },
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan2.jpg`,
            text: "Walter Reed"
        },
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan3.jpeg`,
            text: "Walter Reed"
        },
        {
            image: `${paths.base}/${paths.walterReed}/walterReedMasterplan4.jpeg`,
            text: "Walter Reed"
        }
    ],
    //img count: 3
    unionMarket: [
        {
            image: `${paths.base}/${paths.unionMarket}/unionMarket1.jpg`,
            text: "Union Market"
        },
        {
            image: `${paths.base}/${paths.unionMarket}/unionMarket2.jpg`,
            text: "Union Market"
        },
        {
            image: `${paths.base}/${paths.unionMarket}/unionMarket3.jpg`,
            text: "Union Market"
        }
    ],
    //img count: 3
    silverSpring: [
        {
            image: `${paths.base}/${paths.silverSpring}/silverSpring2.jpeg`,
            text: "\n\nSilver Spring, Maryland\nPlan completion: 2022.\nDesigned by Robert Sponseller FAIA while at Shalom Baranes Associates \nInvited by the local jurisdiction to assist in a master plan update, the project involved an urban vision for Silver Spring Maryland, a close in Washington DC urban center. Centered on a multi-modal transit hub this vision adds a much needed green park over the transit center along with increased pedestrian access to green space and well defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
        },
        {
            image: `${paths.base}/${paths.silverSpring}/silverSpring4.jpeg`,
            text: "Silver Spring Vision"
        },
        {
            image: `${paths.base}/${paths.silverSpring}/silverSpring7.jpeg`,
            text: "Silver Spring Vision"
        }
    ]
}

// function handleMobileDeviceRenderingAdjustments() {
//     if (isMobileDevice) {
//         modal.style.height = "100%";
//         carouselTextEl.style.overflowY = "auto";
//     }
// }

function openModal(project) {
    //handleMobileDeviceRenderingAdjustments();
    const currentPrj = projects[project];
    const numberOfItemsInPrj = currentPrj.length;

    for (let i = 0; i < carouselImageEls.length; i++) {
        const currentPrjItem = currentPrj[i % numberOfItemsInPrj]; //the modulo ensures the array wraps back to the first img if i exceeds length
        const { image, text } = currentPrjItem; // Shorthand for currentPrjItem.image and currentPrjItem.text ... this is called "object destructuring"

        const carouselImageEl = carouselImageEls[i % numberOfItemsInPrj]; // Grabs a specific carousel image DOM element
        const carouselTextEl = carouselTextEls[i % numberOfItemsInPrj]; // Grabs a specific carousel text DOM element
        
        carouselImageEl.src = image;
        carouselImageEl.parentElement.classList.remove("active");
        carouselTextEl.innerHTML = text.replace(/\n/g, "<br>");
    }
    
    carouselImageEls[0].parentElement.classList.add("active"); 
    modalEl.style.display = "block"
}

function closeModal() {
    modalEl.style.display = "none";
    carouselIndex = 0; // reset carouselIndex tracker each time modal is closed
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modalEl) {
    modalEl.style.display = "none";
  }
}

// window.mobileCheck = function() {
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobileDevice = true;})(navigator.userAgent||navigator.vendor||window.opera);
//   }