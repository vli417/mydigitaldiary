// Update the time box in the start bar every 10 seconds

function updateTime(){
    var today = new Date();
    var hours24 = today.getHours();
    var hours12;
    var minutes = today.getMinutes();
    var suffix = '';
  
    if (hours24 >= 12) {
      suffix = " PM";
      hours12 = hours24 % 12;
    } else {
      suffix = " AM";
      hours12 = hours24;
    }
    
    if (minutes % 10 == 0) {
      //minutes = minutes + "0";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    var time = hours12 + ":" + minutes + suffix;
  
    var timeBox = document.querySelector(".start__time-text");
  
    timeBox.innerHTML = time;
  }
  
  setInterval(updateTime, 1000);
  
  // Store the necessary objects
  
  var startButton = document.querySelector(".start__button");
  
  var startMenu = document.querySelector(".start__menu-main");
  
  var body = document.querySelector("body");
  
  let experienceItem = document.querySelector(".experience");

  let educationItem = document.querySelector(".education");

  let skillsItem = document.querySelector(".skills");

  let findItem = document.querySelector(".find");
  
  let experienceMenu = document.querySelector(".sub__experience");

  let educationMenu = document.querySelector(".sub__education");

  let skillsMenu = document.querySelector(".sub__skills");

  let findMenu = document.querySelector(".sub__find");
  
  
  // Start menu appear on click of start button and disappear on click of start button or anything else except the menu
  
  body.onclick = function(e) {
    for (var i = 0, l = e.target.classList.length; i < l; ++i) {
      if(/start__.*/.test(e.target.classList[i])) {
          break;
      } else {
        startMenu.classList.remove("menu-open");
      }
    }
  }
  
  // Show/hide menu on click
  
  function menuDisplay(menu) {
    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
    } else {
      menu.classList.add("menu-open");
    }
  }
  
  startButton.addEventListener("click", function() {
    menuDisplay(startMenu);
  });
  
  experienceItem.addEventListener("click", function() {
    menuDisplay(experienceMenu);
  });

  educationItem.addEventListener("click", function() {
    menuDisplay(educationMenu);
  });
  
  skillsItem.addEventListener("click", function() {
    menuDisplay(skillsMenu);
  });

  findItem.addEventListener("click", function() {
    menuDisplay(findMenu);
  });

  // Make the desktop icons draggable
  
  var desktopIcons = document.getElementsByClassName("desktop-icon");
  
  for (let i = 0; i < desktopIcons.length; i++) {
    dragElement(desktopIcons[i]);
  }
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  



  



  const win = document.querySelector('.window');
const input = document.querySelector('.window__input');
//const close = document.querySelector('.window__button--close');
const min = document.querySelector('.window__button--minimize');
const max = document.querySelector('.window__button--maximize');

const activateText = () => {
  win.classList.add('is-active');
}

const deActivateText = () => {
  win.classList.remove('is-active');
}

const toggleMaximize = () => {
  win.classList.toggle('is-maximized');
}

const toggleMinimize = () => {
  win.classList.toggle('is-minimized');
}

const closeWin = () => {
  win.outerHTML = ''; // :'(
}

function dragElement(el) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  el.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
   
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // Only move window if not targeting the text input
    if(!e.target.matches('.window__input')) {
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag; 
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(win);

input.addEventListener('focusin', activateText);
input.addEventListener('blur', deActivateText);
max.addEventListener('click', toggleMaximize);
min.addEventListener('click', toggleMinimize);
close.addEventListener('click', closeWin);
