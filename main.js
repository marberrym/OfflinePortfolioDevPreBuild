let projects = document.querySelectorAll(".projectItem");
let modal = document.querySelector(".modalWindow");
let visibleModal = document.querySelector("#modalFlexOne");
let modalDescription = document.querySelector("#modalFlexTwo");

let hideModal = (event) => {
    if (event.target === modal) {
        modal.classList.remove("showModal");
    }
}

projects.forEach(function(project) {
    let modalPopup = function (event) {
        modal.classList.add("showModal");
        visibleModal.appendChild(modalIMG);
        modalDescription.appendChild(title);
    }
    
    let modalIMG = document.createElement('img');
    let title = document.createElement('h1');
    let imgSRC = project.getAttribute('src');
    if (imgSRC.endsWith("HGASmall.png")) {
        title.textContent = "Hidden Gem Atlanta";
    }
    modalIMG.setAttribute('src', imgSRC);
    modalIMG.classList.add('modalIMG');
    project.addEventListener('click', modalPopup);
})

window.addEventListener('click', hideModal);

