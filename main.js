let projectObject = {
    1: {
        src: '../PortfolioFD/images/HGASmall.png',
        title: "Hidden Gem Atlanta",
        description: "Hidden Gem Atlanta is a fully functional app which thrives off of user generated content. \
        HGA aims to aid in the growth and sustainability of local 'gems' in a day where large organizations dominate the marketplace."
    },
    2: {
        src: '../PortfolioFD/images/MMLogo.png',
        title: "Hidden Gem Atlanta",
        description: "Hidden Gem Atlanta is a fully functional app which thrives off of user generated content. \
        HGA aims to aid in the growth and sustainability of local 'gems' in a day where large organizations dominate the marketplace."
    },
    3: {
        src: '../PortfolioFD/images/HGA.png',
        title: "Hidden Gem Atlanta",
        description: "BLABLAHBLAHBLAHBLAHBKLAH"
    }
}

let projects = document.querySelectorAll(".projectItem");
let modal = document.querySelector(".modalWindow");
let visibleModal = document.querySelector("#modalFlexOne");
let modalTitle = document.querySelector("#modalFlexTwo");
let modalCloseBTN = document.querySelector(".closeX");


projects.forEach(function(project) {
    let modalPopup = function (event) {
        modal.classList.add("showModal");
        visibleModal.appendChild(modalIMG);
        modalTitle.appendChild(title);
        modalTitle.appendChild(description);
    }
    let hideModal = (event) => {
        if (event.target === modal || event.target === modalCloseBTN) {
            visibleModal.removeChild(modalIMG);
            modalTitle.removeChild(title);
            modalTitle.removeChild(description);
            modal.classList.remove("showModal");
        }
    }
    
    let modalIMG = document.createElement('img');
    let title = document.createElement('h1');
    let description = document.createElement('p')
    let imgSRC = project.getAttribute('src');

    console.log(imgSRC);

    if (imgSRC === projectObject[1]['src']) {
        title.textContent = projectObject[1]["title"]
        description.textContent = projectObject[1]["description"]
    } else if (imgSRC === projectObject[2]['src']) {
        title.textContent = projectObject[2]["title"]
        description.textContent = projectObject[2]["description"]
    } else if (imgSRC === projectObject[3]['src']) {
        title.textContent = projectObject[3]["title"]
        description.textContent = projectObject[3]["description"]
    }
    modalIMG.setAttribute('src', imgSRC);
    modalIMG.classList.add('modalIMG');
    project.addEventListener('click', modalPopup);
    window.addEventListener('click', hideModal);
})


