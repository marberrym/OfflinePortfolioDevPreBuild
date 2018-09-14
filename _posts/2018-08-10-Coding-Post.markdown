---
layout: post
title:  "The Importance of Efficiant Variable Declaration"
date:   2018-08-11 17:57:56 -0400
categories: jekyll, coding
---
Good evening!

I wanted to come talk about something today that I have personally been struggling with in my journey into software development.  For me lately that has been effective variable declaration.

When I am working on a large and complex project and I have multiple variables in relation to similar objects as parts of similar functions I notice that I have the tendancy to get rather sloppy with my variable naming.  While this may not be an immediate problem for myself, it does become a problem when someone else is reviewing my code.  Let's take a look at my most recent and infamous offense in regards to variable naming:

Alright let's take a look at some JS code I wrote for a project I worked on recently called _**Hidden Gem Atlanta.**_

~~~js
var windowOnClick = function(event) {
    if (event.target === modal) {
        hideModal();
    } else if (event.target === modal2) {
        hideModal2();
    } else if (event.target === modal3) {
        hideModal3();
    }
}

var toggleModal = function(event) {
    event.preventDefault();
    console.log('Toggle form modal.');
    modal.classList.toggle("showmodal");
}

var toggleModal2 = function(event) {
    event.preventDefault();
    console.log('Toggle modal 2');
    modal2.classList.toggle("showmodal");    
}

var toggleModal3 = function(event) {
    modal3.classList.add("showmodal");
    modalLOD.classList.add("coolFadeIn");
}

var signupBtn = document.querySelector('[name="signUp"]');
var modal = document.querySelector('.modaloutter');
var modal2 = document.querySelector('.modaloutter2');
var modal3 = document.querySelector('.modaloutter3');
var submit = document.querySelector("[name='submit']");
var closeButton = document.querySelector("[name='closebutton']");
var closeButton2 = document.querySelector("[name='closebutton2']");
var closeButton3 = document.querySelector("[name='closebutton3']");
const modalLOD = document.querySelector('.modalLOD');
const LODButton = document.querySelector(".legion");

signupBtn.addEventListener('click', toggleModal2);
submit.addEventListener('click', toggleModal);
LODButton.addEventListener('click', toggleModal3);

closeButton.addEventListener('click', hideModal);
closeButton2.addEventListener('click', hideModal2);
~~~

So... I'm sure we can all see how problematic this is right away.


