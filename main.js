let projectObject = {
    1: {
        title: "Hidden Gem Atlanta",
        description: "Hidden Gem Atlanta is a fully functional app which thrives off of user generated content. \
        HGA aims to aid in the growth and sustainability of local 'gems' in a day where large organizations dominate the marketplace."
    }
}

let projects = document.querySelectorAll(".projectItem");
let modal = document.querySelector(".modalWindow");
let visibleModal = document.querySelector("#modalFlexOne");
let modalTitle = document.querySelector("#modalFlexTwo");


let hideModal = (event) => {
    if (event.target === modal) {
        modal.classList.remove("showModal");
    }
}

projects.forEach(function(project) {
    let modalPopup = function (event) {
        modal.classList.add("showModal");
        visibleModal.appendChild(modalIMG);
        modalTitle.appendChild(title);
        modalTitle.appendChild(description);
    }
    
    let modalIMG = document.createElement('img');
    let title = document.createElement('h1');
    let description = document.createElement('p')
    let imgSRC = project.getAttribute('src');
    if (imgSRC.endsWith("HGASmall.png")) {
        title.textContent = projectObject[1]["title"]
        description.textContent = projectObject[1]["description"]
    }
    modalIMG.setAttribute('src', imgSRC);
    modalIMG.classList.add('modalIMG');
    project.addEventListener('click', modalPopup);
})

window.addEventListener('click', hideModal);

