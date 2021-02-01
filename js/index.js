var homeBlock = document.getElementById("homeBlock");
var projectsBlock = document.getElementById("projectsBlock");
var contactMeBlock = document.getElementById("contactMeBlock");

var homeButton = document.getElementById("homeBtn");
var projectsButton = document.getElementById("projectsBtn");
var contactMeButton = document.getElementById("contactMeBtn");

var projects = document.getElementById("projectsContainer").children;

//Setting Sidebar Buttons OnClick()
homeButton.onclick = function(){homeBlock.scrollIntoView(); }
projectsButton.onclick = function(){projectsBlock.scrollIntoView(); }
contactMeButton.onclick = function(){contactMeBlock.scrollIntoView(); }

//Setting Projects Buttons OnClick()
for(var i = 0; i< projects.length; i++)
{
    projects[i].onclick = function(){console.log("Yo")}
    projects[i].style.cursor = "pointer";
}