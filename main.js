let projects = document.querySelectorAll(".projectItem");
let modalWindow = document.querySelector(".modalWindow");
let projectOne = document.querySelector("#projectOne");
let projectTwo = document.querySelector("#projectTwo");
let projectThree = document.querySelector("#projectThree");
let projectFour = document.querySelector("#projectFour");
let modalCloseBTN = document.querySelectorAll(".closeX");
let leftArws = document.querySelectorAll(".leftArw");
let rightArws = document.querySelectorAll(".rightArw");
let modals = document.querySelectorAll(".modalBox");





projects.forEach(function(project) {
    let modalPopup = function (event) {
        modalWindow.classList.add("showModal");
        if (projectName === 'images/plunder.png') {
            projectOne.classList.add('showModal');     
        } else if (projectName === 'images/hiddengem.png') {
            projectTwo.classList.add('showModal'); 
        } else if (projectName === 'images/Flutter.jpg') {
            projectThree.classList.add('showModal');
        } else if (projectName === 'images/MillionsKnives.png') {
            projectFour.classList.add('showModal');
        }
    }
        
    let projectName = project.getAttribute('src');
    project.addEventListener('click', modalPopup);
})


modals.forEach(function(modal) {
    let left = document.createElement('i');
    let right = document.createElement('i');
    left.classList.add('far', 'fa-arrow-alt-circle-left', 'fa-5x', 'leftArw', 'outlineBlack');
    right.classList.add('far', 'fa-arrow-alt-circle-right', 'fa-5x', 'rightArw', 'outlineBlack');

    let scrollRight = (event) => {
        modal.classList.remove('showModal');
        modal.classList.add('scrollRight');
        let parent = right.parentElement;
        setTimeout(function() {
            modal.classList.remove('scrollRight')}, 500);
        if (parent === projectOne) {
            projectTwo.classList.add('showModal');
        } else if (parent === projectTwo) {
            projectThree.classList.add('showModal');
        } else if ( parent === projectThree) {
            projectFour.classList.add('showModal');
        } else {
            projectOne.classList.add('showModal');
        }
    }

    let scrollLeft = (event) => {
        modal.classList.remove('showModal');
        modal.classList.add('scrollLeft');
        let parent = left.parentElement;
        setTimeout(function() {
            modal.classList.remove('scrollLeft')}, 500);
        if (parent === projectOne) {
            projectFour.classList.add('showModal');
        } else if (parent === projectTwo) {
            projectOne.classList.add('showModal');
        } else if ( parent === projectThree) {
            projectTwo.classList.add('showModal');
        } else {
            projectThree.classList.add('showModal');
        }   
    }

    modal.appendChild(left);
    modal.appendChild(right);
    
    let hideModal = (event) => { 
        if (event.target === modalWindow) {
            modalWindow.classList.remove("showModal");
            projectOne.classList.remove("showModal");
            projectTwo.classList.remove("showModal");
            projectThree.classList.remove("showModal");
            projectFour.classList.remove("showModal");
        } else {
            modalCloseBTN.forEach(function(button) {
                if (event.target === button) {
                    modalWindow.classList.remove("showModal");
                    projectOne.classList.remove("showModal");
                    projectTwo.classList.remove("showModal");
                    projectThree.classList.remove("showModal");
                    projectFour.classList.remove("showModal");
                }
            })
        }
    }

    left.addEventListener('click', scrollLeft);
    right.addEventListener('click', scrollRight);
    modalWindow.addEventListener('click', hideModal);
    modalCloseBTN.forEach(function(button) {
        button.addEventListener('click', hideModal);
    })
})








