let target = document.getElementById('draggable-div');

function onDrag(e) {
  let originalStyles = window.getComputedStyle(target);
  target.style.left = parseInt(originalStyles.left) + e.movementX + 'px';
  target.style.top = parseInt(originalStyles.top) + e.movementY + 'px';
}

function onLetGo() {
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', onLetGo);
}

function onGrab() {
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', onLetGo);
}

target.addEventListener('mousedown', onGrab);




  

  
var button = document.querySelector(".button");
  

  
  

  
button.onclick = function(){
          location.href = "collections.html";
      }
    



  
