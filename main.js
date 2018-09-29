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
let graphicD = document.querySelectorAll(".gdImg");
let graphicModal = document.querySelector(".graphicModal");
let resumeBTN = document.querySelector("#resumeBTN");
let resumeModal = document.querySelector("#resumeModal");

let showResume = (event) => {
    modalWindow.classList.add('showModal');
    resumeModal.classList.add('showModal');
}

resumeBTN.addEventListener('click', showResume);



graphicD.forEach(function(image) {
    let src = image.getAttribute('src');
    let graphics = {
        flutter: `I created this little blue butterfly for my twitter clone that was named Flutter.
            When I was thinking of what I wanted to do for my clone, I wanted to do something that 
            paralleled the twitter concept.  Something that was still light hearted and similar in concept,
            I came to the idea of the flutter of a butterfly's winds.  A flutter is short and fleeting, just like the
            twitter of a bird. `,
        gem: `This logo will always have a special place in my heart.  It was designed for my first major development project
            Hidden Gem Atlanta.  The concept of Hidden Gem Atlanta, was to shed some light on some regionally unique locations
            in Atlanta that the locals have a lot of passion for.  I designed the logo placing the gem surrounded by some more complex
            objects.  The complexity of the surrounding designs represents the the complex and prevelant nature of chains and coorporations
            which can overshadow the existance of small locally owned businesses.`,
        Reentry: `Reentry Bank is a local Atlanta nonprofit I have been working on at the Code for Atlanta hackathons.  Reentry Bank strives
            to help recently released felons reintigrate into society.  RB aims to help people put the pieces of their lives back together,
            that is why I decided to go with a mosaic design.  I wanted a logo that would symbolize that although people may make mistakes,
            they can still put the pieces of their lives back together and create a beautiful life for themselves.`,
        plunder: `Plunder was an app developed to offer a new online marketplace where users can safely exchange goods with one another.
            We named Plunder with a heavy dose of irony, because we offered suggested safe 'plunder spots' where users could meet and conduct
            their online transactions safely.  When developing the logo for plunder, I thought of how many unwanted items that are looking to be sold
            could be hidden treasures to another person.  The treasure chest logo represents how different users could find different values in different things.`,
        MM: `Throughout my life, I have always placed a high value on symmetry and balance in life.  When developing my personal brand, I wanted to come up with
            a custom logo that represented these values.  I used the symmetry of my initials to convey these point.  The shape used in this design drew
            inspiration froum a mountain.  Mountains by nature are strong and unmoving - I wanted a logo that represented strength and dedication to my convictions.
            I place a high value on craftsmanship, integrity, passion and creative problem solving.  I wanted this logo to convey these things.`,
        LH: `Lighthouse is the name of my personal blog.  At one point in my life, I was helped by certain people who I consider to be metaphorical lighthouses.
            They were people that bought light to my life by showing me how to live.  They did not force their light or assistance upon me, instead they let their light
            shine through their actions.  I decided that I wanted to live my life as a lighthouse, lending my experience, knowledge and insight to others wherever and however
            I can.  I want my passion, drive, integrity and concern to shine through all of my actions.  I want to live life as a lighthouse, showing lost ships the way back home.`,
        dgdg: `'Do Good.  Die Great.' is a personal project that I have been working on.  I live a civic minded life, where I try to volunteer my time to make the community a better place.
            Not only do I feel good when I help others, but it always reminds me about what I truly care about; bettering the world around me.  I wanted a logo that would symbolize the feeling I hope
            to give others when I volunteer.  I just want to be a hand reaching out to help pick up others.  I want to offer aid to those in need.  I wanted a logo that would hopefully
            inspire others to feel the same.`

    }
    let logo = Object.keys(graphics);
    
    let showDesign = () => {
        let description = document.createElement('div');
        let modalImg = document.createElement('img');
        let modalX = document.createElement('i');
        modalX.classList.add('far', 'fa-times-circle', 'fa-2x', 'closeX');
        logo.forEach(function(name) {
            console.log(name);
            console.log(src);
            if (src.includes(name)) {
                description.textContent = graphics[name];
                description.classList.add("modalDescription");
            }
        })

        modalImg.setAttribute('src', src);
        if (src.endsWith('Text.png')) {
            modalImg.classList.add('hga');
        } else {
            modalImg.classList.add('graphicImage');
        }
        modalWindow.classList.add('showModal');
        graphicModal.classList.add('showModal');
        console.log(src);
        
        graphicModal.appendChild(modalImg);
        graphicModal.appendChild(description);
        graphicModal.appendChild(modalX);
        modalX.addEventListener('click', function(event) {
            emptyGraphic();
            graphicModal.classList.remove('showModal');
            modalWindow.classList.remove('showModal');
        }); 
    }
    
    image.addEventListener('click', showDesign);
})

let emptyGraphic = () => {
    while (graphicModal.firstChild) {
        graphicModal.removeChild(graphicModal.firstChild);
    }
}



projects.forEach(function(project) {
    let modalPopup = function (event) {
        modalWindow.classList.add("showModal");
        if (projectName === 'images/plunder.png') {
            projectOne.classList.add('showModal');     
        } else if (projectName === 'images/hiddengem.png') {
            projectTwo.classList.add('showModal'); 
        } else if (projectName === 'images/DGSS.png') {
            projectThree.classList.add('showModal');
        } else if (projectName === 'images/DIYHub.png') {
            projectFour.classList.add('showModal');
        }
    }
        
    let projectName = project.getAttribute('src');
    console.log(projectName);
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

    let clear = () => {
        modalWindow.classList.remove("showModal");
        projectOne.classList.remove("showModal");
        projectTwo.classList.remove("showModal");
        projectThree.classList.remove("showModal");
        projectFour.classList.remove("showModal");
        graphicModal.classList.remove("showModal");
        resumeModal.classList.remove("showModal");
        emptyGraphic();
    }

    let hideModal = (event) => { 
        if (event.target === modalWindow) {
            clear();
        } else {
            modalCloseBTN.forEach(function(button) {
                if (event.target === button) {
                    clear();
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










