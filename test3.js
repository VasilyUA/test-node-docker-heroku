const divs = document.querySelectorAll("#test div");
const items = document.querySelectorAll(".item");

divs.forEach((div) => {
  div.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.y + "px";
    contextElement.style.left = event.x + "px";
    contextElement.classList.add("active");
  });
});

items.forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("context-menu").classList.remove("active");
  });
});

window.addEventListener("click", function () {
  document.getElementById("context-menu").classList.remove("active");
});
