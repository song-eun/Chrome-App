const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");

const superEventHandler = {
  HandleMouseEnter: function () {
    title.style.color = colors[0];
    title.innerText = "mouse is here!";
  },
  HandleMouseOut: function () {
    title.style.color = colors[1];
    title.innerText = "mouse is gone!";
  },
  HandleResize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },
  HandleContextMenu: function () {
    title.style.color = colors[3];
    title.innerText = "That was a right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.HandleMouseEnter);
title.addEventListener("mouseout", superEventHandler.HandleMouseOut);
window.addEventListener("resize", superEventHandler.HandleResize);
title.addEventListener("contextmenu", superEventHandler.HandleContextMenu);
