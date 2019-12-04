// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const title = document.getElementById("jsH1");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handleMouseOver: function handleMouseOver() {
    title.innerText = "The mouse is here !";
    title.style.color = colors[0];
  },

  handleMouseLeave: function handleMouseLeave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  handleResize: function handleResize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },

  handleMRC: function handleMRC() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseover", superEventHandler.handleMouseOver);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleMRC);
