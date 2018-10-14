let projects = document.querySelectorAll(".projectItem");
let modalWindow = document.querySelector(".modalWindow");
let projectOne = document.querySelector("#projectOne");
let projectTwo = document.querySelector("#projectTwo");
let projectThree = document.querySelector("#projectThree");
let projectFour = document.querySelector("#projectFour");
let projectFive = document.querySelector("#projectFive");
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
        flutter: `Matthew created this little blue butterfly for his twitter clone that was named Flutter. When he was thinking 
            of what he wanted to do for his clone, he wanted to do something that paralleled the twitter concept.  A twitter-ish 
            that was still light hearted and similar in concept, he came to the idea of the flutter of a butterfly's winds.  A 
            flutter is short and fleeting, just like the tweet or twitter of a bird.`,
        gem: `The Hidden Gem Atlanta logo will always have a special place in Matthew’s heart.  He designed this logo for his first 
            major development project Hidden Gem Atlanta.  The concept of Hidden Gem Atlanta, was to shed some light on some regionally unique 
            locations in Atlanta that the locals have a lot of passion for.  Matthew designed the logo placing the gem surrounded by some more 
            complex objects.  The complexity of the surrounding designs represents the complex and prevalent nature of chains and corporations 
            which can overshadow the existence of small locally owned businesses.`,
        Reentry: `Reentry Bank is a local Atlanta nonprofit that Matthew has been working on at the Code for Atlanta hack-a-thons.  Reentry Bank strives to help recently released 
            felons reintegrate into society.  RB aims to help people put the pieces of their lives back together, that is why Matthew decided to go with a mosaic design.  He wanted a logo 
            that would symbolize that although people may make mistakes, they can still put the pieces of their lives back together and create a beautiful life for themselves.`,
        plunder: `Matthew worked as part of a team to develop the Plunder app.  Plunder aimed to offer a new online marketplace where users can safely exchange goods with one another.  
            We named Plunder with a heavy dose of irony, because we offered suggested safe 'plunder spots' where users could meet and conduct their online transactions safely.  When developing 
            the logo for plunder, Matthew thought of how many unwanted items that are looking to be sold could be hidden treasures to another person.  The treasure chest logo represents how different 
            users could find different values in various belongings.`,
        MM: `Throughout Matthew’s life, he has always placed a high value on symmetry and balance in life. When developing his personal brand, he wanted to come up with a custom logo 
            that represented these values.  Matthew used the symmetry of his initials to convey these points. The shape used in this design drew inspiration from mountains.  Mountains by 
            nature are strong and unmoving - Matthew wanted a logo that represented his strength and dedication to his convictions.  He places a high value on craftsmanship, integrity, passion 
            and creative problem solving.  Matthew wanted this logo to convey these things.`,
        LH: `Lighthouse Mindset is the name of Matthew’s personal blog.  At one point in his life, Matthew was helped by certain people who he considers to be metaphorical lighthouses.  
            They were people that bought light to his life by showing him how to live.  They did not force their light or assistance upon him, but instead they let their light shine through 
            their actions.  Matthew decided that he wanted to live his life as a lighthouse, lending his experience, knowledge and insight to others wherever and however he can.  Matthew wants 
            his passion, drive, integrity and concern to shine through all of his actions.  He wants to live his life as a lighthouse, showing lost ships the way back home.`,
        dgdg: `'Do Good. Die Great.' is a personal project that Matthew has been working on.  Matthew lives a civic-minded life, where he regularly volunteers his time to make the 
            community a better place. Not only does he feel great when he gets to help others, but it always reminds him about what he truly cares about; bettering the world around him.  
            Matthew wanted a logo that would symbolize the feeling he hopes to give to others when he volunteers.  His goal is to be a hand reaching out to help pick up others in need.  
            He wants to offer aid to those in need.  Matthew wanted to design a logo that would inspire others to feel the same.`,
        DIY: `This is the logo for DIYHub, Matthew's most recent and polished project.  DIYHub is an app that aims to increase the productivity, creativity of its user base.  DIYHub also aims
            to inspire people to try new things and take on new projects.  The projects featured on DIYHub cater to the 'makers' of the world.  Matthew wanted to develop a logo that represented
            the thought patterns that run through a creator's brain.  Fellow creators always want to know how things work, they want to see what makes them tick and operate.  Matthew chose to run with
            this theme and drew inspiration from the cogs and gears that make various inventions functional.  DIYHub wants to get its users' internal cogs turning.`

    }
    let logo = Object.keys(graphics);
    
    let showDesign = () => {
        let description = document.createElement('div');
        let modalImg = document.createElement('img');
        let modalX = document.createElement('i');
        modalX.classList.add('far', 'fa-times-circle', 'fa-2x', 'closeX');
        logo.forEach(function(name) {
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
            projectThree.classList.add('showModal');     
        } else if (projectName === 'images/hiddengem.png') {
            projectFour.classList.add('showModal'); 
        } else if (projectName === 'images/DGSS.png') {
            projectTwo.classList.add('showModal');
        } else if (projectName === 'images/DIYHUBSS2.png') {
            projectOne.classList.add('showModal');
        } else if (projectName === 'images/CREATESS.png') {
            projectFive.classList.add('showModal');
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

    let clear = () => {
        modalWindow.classList.remove("showModal");
        projectOne.classList.remove("showModal");
        projectTwo.classList.remove("showModal");
        projectThree.classList.remove("showModal");
        projectFour.classList.remove("showModal");
        projectFive.classList.remove("showModal");
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










