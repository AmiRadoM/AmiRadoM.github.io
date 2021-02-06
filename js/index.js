function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}




var sidebar = document.getElementById("sidebar");

var blocks = document.getElementsByClassName('block');


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

//Integrating Mobile Accessibility
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    sidebar.style.display = 'none';
    for(i = 0; i < blocks.length; i++) {
        blocks[i].style.padding = '10%';
    }
}

//sidebar buttons background
document.body.onscroll = function(){
if(window.pageYOffset < homeBlock.getBoundingClientRect().bottom){
    var color = RGBToHex(getComputedStyle(homeBlock).backgroundColor);
    var css = "#sidebar button:hover{background-color: "+color+"; color: #77bfa3;}"
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}
else if(window.pageYOffset < projectsBlock.getBoundingClientRect().bottom){
    var color = RGBToHex(getComputedStyle(projectsBlock).backgroundColor);
    var css = "#sidebar button:hover{background-color: "+color+"; color: #77bfa3;}";
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}
else if(window.pageYOffset < contactMeBlock.getBoundingClientRect().bottom){
    var color = RGBToHex(getComputedStyle(contactMeBlock).backgroundColor);
    var css = "#sidebar button:hover{background-color: "+color+"; color: #77bfa3;}";
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}
}