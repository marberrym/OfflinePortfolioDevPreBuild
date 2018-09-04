let projects = document.querySelectorAll(".projectItem");
let modal = document.querySelector(".modalWindow");
let projectOne = document.querySelector("#projectOne")
let modalCloseBTN = document.querySelectorAll(".closeX");


let hideModal = (event) => {
    modal.classList.remove("showModal");
    projectOne.classList.remove("showModal");
    projectTwo.classList.remove("showModal");
    projectThree.classList.remove("showModal");
}

modalCloseBTN.forEach(function(button) {
    button.addEventListener('click', hideModal);
})

projects.forEach(function(project) {
    let modalPopup = function (event) {
        modal.classList.add("showModal");
        if (projectName === 'images/plunder.png') {
            projectOne.classList.add('showModal');
        } else if (projectName === 'images/hiddengem.png') {
            projectTwo.classList.add('showModal');
        } else if (projectName === 'images/Flutter.jpg') {
            projectThree.classList.add('showModal');
        }
    }
        
    let projectName = project.getAttribute('src');

    project.addEventListener('click', modalPopup);
    modal.addEventListener('click', hideModal);
})


