addEventListener("mousemove", function (event) {
  document.body.style.setProperty("--x", event.clientX + "px");
  document.body.style.setProperty("--y", event.clientY + "px");
});
