"use strict";

/* 1st i created a div */
const divNavTop = document.querySelector("#navbar_top");

//var ul = document.createElement("ul");

/*ul.setAttribute("tag", "ul");
ul.setAttribute(
  "style",
  "list-style-type:none;margin: 0; padding: 0;   overflow: hidden; background-color: rgb(218, 244, 255);"
);*/

//var content = document.createElement("div");
//content.innerHTML = "";

/*create an unordered list save it in liststart varable*/
var liststart = document.createElement("ul");

/*create a new <li> varibale  */
var section1 = document.createElement("li");
var section2 = document.createElement("li");
var section3 = document.createElement("li");
var section4 = document.createElement("li");

/*giving each  of the 4 variables its value and ad a tag to it */
section1.innerHTML =
  '<a  data-target="section1" href="#" class="navbar-scroll-into" >Section1</a>';
section2.innerHTML =
  ' <a  data-target="section2" href="#" class="navbar-scroll-into" >Section2</a>';
section3.innerHTML =
  '<a data-target="section3" href="#" class="navbar-scroll-into" >Section3</a>';
section4.innerHTML =
  '<a  data-target="section4" href="#" class="navbar-scroll-into" >Section4</a>';

/*add the new <li> created to the <li> */
liststart.appendChild(section1);
liststart.appendChild(section2);
liststart.appendChild(section3);
liststart.appendChild(section4);
/* add <li> to the div*/
divNavTop.append(liststart);

/* inorder to create a dynamic navBar scrollIntoView is used and addEventListener inorder to listen to the action taken and scroll to the sepcific position */
document.addEventListener("click", function (event) {
  if (!event.target.matches(".navbar-scroll-into")) return;

  event.preventDefault();

  const element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView({ behavior: "smooth" });
});

/* every time i scroll the position of the scroll is displayed */
function update_display() {
  var bounding = document.getElementById("bounding");
  var disaply = document.getElementById("display");
  var rect = bounding.getBoundingClientRect();
  var props = "top right bottom left".split(" ");
  var out = "";
  for (var i = 0; i < props.length; i++) {
    if (out) {
      out += "\n";
    }
    var name = props[i];
    out += name + ": " + rect[name];
  }
  display.textContent = out;
}
function init() {
  window.addEventListener("scroll", update_display);
  window.addEventListener("resize", update_display);
  update_display();
}
init();
