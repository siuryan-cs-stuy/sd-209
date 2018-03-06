var svg = document.getElementById("pic");

var radius = 20;
var height = 500;
var width = 500;

svg.addEventListener("click", function() {
  drawCircle(event.offsetX, event.offsetY);
});

var drawCircle = function(x, y) {
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", radius);
  circle.setAttribute("id", "animCircle");
  svg.appendChild(circle);

  circle.addEventListener("click", changeColor);
}

var changeColor = function(e) {
  e.target.setAttribute("fill", "red");
  e.stopPropagation();
  e.target.addEventListener("click", removeAndReplace);
}

var removeAndReplace = function(e) {
  svg.removeChild(e.target);
  drawCircle(Math.random() * width, Math.random() * height);
}

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
  svg.innerHTML = "";
});
