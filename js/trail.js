const onClick = (event) => {
  console.log(event.target.id);
  // event.preventDefault();
  return event.target.id;
};
window.addEventListener("click", RespondMouseOver);

function RespondMouseOver() {
  //onClick();
  var sectionScroll;

  if (onClick() == "nav_section1") {
    sectionScroll = document.querySelector("section1");
  }

  sectionScroll.scrollIntoView( {behavior: "smooth"});
}

let buttonHome = document.querySelector("#event.target.id");
let CountButtonHomeClicks = 0;

buttonHome.addEventListener("click", function () {
  CountButtonHomeClicks += 1;
  console.log(CountButtonHomeClicks);
});

/*
  $("#body").on("click", function (e) {
    console.log(e.target); // target
    console.log($(this)); // body
  });
  */

//window.addEventListener("click", onClick);
addEventListener("click", (event) => {
  const element = document.getElementById("event.target.id");

  //element.scrollIntoView();
});

function scroll() {
  var getMeTo = document.getElementById("section1");
  getMeTo.scrollIntoView({ behavior: "smooth" }, true);
}

/*
document.querySelector("#nav_Section1").addEventListener("click", (evnt) => {
  evnt.preventDefault();

  //    Find the istitem.
  const listitem = document.querySelector("#item");

  //    Create the new listview.
  const listview = document.createElement("ul");
  listview.innerHTML = `
            <li><a href="/about/history">History</a></li>
            <li><a href="/about/team">The team</a></li>
            <li><a href="/about/address">Our address</a></li>`;

  //    Add the listview to the listitem.
  listitem.append(listview);
});
*/



function myFunction() {
  const element = document.getElementById("viewport");
  const rect = element.getBoundingClientRect();

    setTimeout(() => {
        document.getElementById("h6").innerHTML =
    "Left: " +
    rect.left.toFixed() +
    ", Top: " +
    rect.top.toFixed() +
    ", Width: " +
    rect.width +
    ", Height: " +
    rect.height;
      
        // 👇️ removes element from DOM
        box.style.display = 'display';
      
        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
      }, 1000); 
      box.style.display = 'none';
}




/*
const checkbox = document.querySelector("#nav_section1");

checkbox.addEventListener("click", checkboxClick);

function checkboxClick(event) {
  /* let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault(); * /

  //scrollTo = document.querySelector("#section1");
  scrollTo = document.getElementById("section1");
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  scrollTo.scrollIntoView();
  var i = 0;
  console.log(i++);
}*/


























"use strict";
//const section1 = document.querySelector( "#list .mm-listview" ); const listitem
// = document.createElement( "li" ); listitem.innerHTML = `
// <a href="/work">Our work</a>`; listview.append( listitem ); var navSections =
// ['section1', 'section2', 'section3', 'section4']; var cont =
// document.getElementById('container');

const divNavTop = document.querySelector("#navbar_top");
var ul = document.createElement("ul");

/*ul.setAttribute("tag", "ul");
ul.setAttribute(
  "style",
  "list-style-type:none;margin: 0; padding: 0;   overflow: hidden; background-color: rgb(218, 244, 255);"
);*/

//ul.setAttribute("id", "theList");

/* 1st i created a div */ 

var content = document.createElement("div");
content.innerHTML = "";

/*create an unordered list save it in liststart varable*/ 
var liststart = document.createElement("ul");

/*create 4 variables */ 
var section1 = document.createElement("li");
var section2 = document.createElement("li");
var section3 = document.createElement("li");
var section4 = document.createElement("li");

/*giving each  of the 4 variables its value */ 
section1.innerHTML =
  '<a  data-target="section1" href="#" class="navbar-scroll-into" >Section1</a>';
section2.innerHTML =
  ' <a  data-target="section2" href="#" class="navbar-scroll-into" >Section2</a>';
section3.innerHTML =
  '<a data-target="section3" href="#" class="navbar-scroll-into" >Section3</a>';
section4.innerHTML =
  '<a  data-target="section4" href="#" class="navbar-scroll-into" >Section4</a>';



liststart.appendChild(section1);
liststart.appendChild(section2);
liststart.appendChild(section3);
liststart.appendChild(section4);
divNavTop.append(liststart);

document.addEventListener("click", function (event) {
  if (!event.target.matches(".navbar-scroll-into")) return;

  event.preventDefault();

  const element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView({ behavior: "smooth" });
});

function update_display() {
  var box = document.getElementById("box");
  var pos = document.getElementById("pos");
  var rect = box.getBoundingClientRect();
  var props = "top right bottom left".split(" ");
  var out = "";
  for (var i = 0; i < props.length; i++) {
    if (out) {
      out += "\n";
    }
    var name = props[i];
    out += name + ": " + rect[name];
  }
  pos.textContent = out;
}
function init() {
  window.addEventListener("scroll", update_display);
  window.addEventListener("resize", update_display);
  update_display();
}
init();

setTimeout(function () {
  const element = document.getElementById("view_port");
  const rect = element.getBoundingClientRect();

  document.getElementById("h6").innerHTML =
    " Left: ${rect.left.toFixed()}, Top: ${rect.top.toFixed()}, Width: ${rect.width}, Height:, ${rect.height}";
}, 3000);

// Now remove alarmmsg's content.
document.getElementById("view_port").innerHTML = "";

//const element = document.getElementById("viewport");
//const rect = element.getBoundingClientRect();

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
