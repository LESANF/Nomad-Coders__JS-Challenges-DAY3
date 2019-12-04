const title = document.getElementById("jsH1");
const colorArray = ["#55efc4", "#74b9ff", "#a29bfe", "#e67e22"];

const superEventHandler = {
  handleMouseOver: function handleMouseOver() {
    title.innerText = "The mouse is here !";
    title.style.color = colorArray[0];
  },

  handleMouseLeave: function handleMouseLeave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colorArray[1];
  },

  handleResize: function handleResize() {
    title.innerText = "You just resized!";
    title.style.color = colorArray[2];
  },

  handleMRC: function handleMRC() {
    title.innerText = "That was a right click!";
    title.style.color = colorArray[3];
  }
};

title.addEventListener("mouseover", superEventHandler.handleMouseOver);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleMRC);
