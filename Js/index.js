const Theme = document.getElementById("image");
const theInput = document.getElementById("type");
const typing = document.getElementById("typeit");
const myTasks = document.getElementById("tasks");
const theLabel = document.getElementsByTagName("label");
const theCircles = document.getElementsByClassName("circle");
const completedTask = document.getElementById("completed-task");
const line = document.getElementsByClassName("activities");
const sameColor = document.getElementsByClassName("same-color");
const siblings = document.getElementsByClassName("siblings");
const drag = document.getElementById("thedrag");
let toggle = true;


function changeTheme(){
   toggle = !toggle;
   if(toggle){
    Theme.src = "images\\icon-moon.svg";
   }else{
    Theme.src = "images\\icon-sun.svg";
   };
   document.body.classList.toggle("dark");
   typing.classList.toggle("search");
   theInput.classList.toggle("white");
   completedTask.classList.toggle("done-color");
   for(i = 0 ; i < line.length ; i++){
    line[i].classList.toggle("theline");
   };
   myTasks.classList.toggle("tasks");
   for(let i = 0; i < theLabel.length ; i++){
    theLabel[i].style.borderBottom = "red";
   };
   for(i = 0 ; i < theCircles.length ; i++){
    theCircles[i].classList.toggle("rings");
   };
  for(i = 0 ; i < sameColor.length ; i++){
    sameColor[i].classList.toggle("samecolor");
  };
  for(i = 0 ; i < siblings.length ; i++){
    siblings[i].classList.toggle("sib");
  };
  drag.classList.toggle("colorchange");
  document.body.classList.toggle("mobile-dark");
}

