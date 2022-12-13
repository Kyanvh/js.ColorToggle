const getSidebarUl = document.querySelector(".nav-sidebar ul");
const getIconAndSidebar = document.querySelector(".container");
const bodyBackgroundColor = document.body;
const openBlock = function() {getSidebarUl.style.display = "block";}
const closeBlock = function() {getSidebarUl.style.display = "none";}
const hamburgerBtn = document.querySelector(".nav__img");


//attach event to hamburgerbtn
function attachMouseenterToHamburgerBtn() {
    getIconAndSidebar.addEventListener("mouseover", openBlock);
}

const attachMouseleaveToHamburgerBtn = function () {
    getIconAndSidebar.addEventListener("mouseleave",closeBlock);
}

//color buttons

//home toggle button
const changeClassHomeBackgroundColor = function () {
    bodyBackgroundColor.style.background = "lightgray";
    console.log("home-background-color added to the body");
}

const attachEventToHomeButton = function () {
    const changeColorToHome = document.getElementById("home");
    changeColorToHome.addEventListener("click", function(){
        changeClassHomeBackgroundColor();
        closeBlock();
        console.log("attachEventToHomeButton activated");
    });
}

//red toggle button
const changeClassRedBackgroundColor = function () {
    bodyBackgroundColor.style.background = "red";
    console.log("red-background-color added to the body");
}

const attachEventToRedButton = function () {
    const changeColorToRed = document.getElementById("red");
    changeColorToRed.addEventListener("click", function(){
        changeClassRedBackgroundColor();
        closeBlock();
        console.log("attachEventToRedButton activated");
    });
}

//orange toggle button
const changeClassOrangeBackgroundColor = function () {
    bodyBackgroundColor.style.background = "orange";
    console.log("orange-background-color added to the body");
}

const attachEventToOrangeButton = function () {
    const changeColorToOrange = document.getElementById("orange");
    changeColorToOrange.addEventListener("click", function(){
        changeClassOrangeBackgroundColor();
        closeBlock();
        console.log("attachEventToOrangeButton activated");
    });
}

//purple toggle button 
const changeClassPurpleBackgroundColor = function () {
    bodyBackgroundColor.style.background = "purple";
    console.log("purple-background-color added to the body");
}

const attachEventToPurpleButton = function () {
    const changeColorToPurple = document.getElementById("purple");
    changeColorToPurple.addEventListener("click", function(){
        changeClassPurpleBackgroundColor();
        closeBlock();
        console.log("attachEventToPurpleButton activated");
    });
}

//green toggle button
const changeClassGreenBackgroundColor = function () {
    bodyBackgroundColor.style.background = "green";
    console.log("Green-background-color added to the body");
}

const attachEventToGreenButton = function () {
    const changeColorToGreen = document.getElementById("green");
    changeColorToGreen.addEventListener("click", function(){
        changeClassGreenBackgroundColor();
        closeBlock();
        console.log("attachEventToGreenButton activated");
    });
}

attachMouseenterToHamburgerBtn();
attachMouseleaveToHamburgerBtn();
attachEventToHomeButton();
attachEventToRedButton();
attachEventToOrangeButton();
attachEventToPurpleButton();
attachEventToGreenButton();



//- attach a "click" event to hamburger btn (element.addEventListener(event, function))
//- when clicked the menu opens with color buttons (element.style.display = "block")
//- attach a "click" event to the color buttons (element.addEventListener(event, function))
//- when color button has been clicked, the background color should
//  change to that color (element.style.background = color)
//- menu should close after the (color)button has been clicked
//  (element.style.display = "none")

//  element.removeEventLister("event", function()), only works if you call the function by name

// bonus
// -when hovert over the burger button, the menu should appear 
// (element.addEventListener("mouseover",("click")? , function())
