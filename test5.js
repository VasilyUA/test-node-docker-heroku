window.addEventListener("keydown", function (e) {
  console.log(e);
  if (
    (e.metaKey == true && e.altKey == true && e.keyCode == 73) ||
    (e.metaKey == true && e.altKey == true && e.keyCode == 74) ||
    (e.metaKey == true && e.altKey == true && e.keyCode == 67) ||
    (e.metaKey == true && e.shiftKey == true && e.keyCode == 67) ||
    (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73) ||
    (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74) ||
    (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67) ||
    e.keyCode == 123 ||
    (e.metaKey == true && e.altKey == true && e.keyCode == 85) ||
    (e.ctrlKey == true && e.keyCode == 85)
  ) {
    e.preventDefault();
  }
});

window.oncontextmenu = function () {
  return false;
};
