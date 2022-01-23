var btnNew = document.getElementById("new");
var btnPick = document.getElementById("pick");
var areaLeft = document.getElementsByClassName("left");
var fullPick = [];
for (var i = 1; i < 90; i++) {
  fullPick.push(i);
}

function vanmoi() {
  fullPick = [];
  for (var i = 1; i < 90; i++) {
    fullPick.push(i);
  }
  const myNode = document.getElementById("left");
  myNode.innerHTML = "";
}
function pick() {
  if (fullPick.length > 0) {
    var index = Math.floor(Math.random() * fullPick.length);
    var newItem = document.createElement("p");
    var textnode = document.createTextNode(fullPick[index]);
    newItem.appendChild(textnode);
    var list = document.getElementById("left");
    list.insertBefore(newItem, list.childNodes[0]);
    fullPick.splice(index, 1);
  } else {
    alert("Đã hết số <-_->");
  }
}
function getGiay() {
  var win = window.open("vedo.html", "_blank");
  win.focus();
}
