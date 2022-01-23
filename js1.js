var tagP = document.getElementsByTagName("p");
var fullPick = [];
for (var i = 1; i < 90; i++) {
  fullPick.push(i);
}
for (var i = 0; i < 9; i++) {
  var count = 0;
  var j = 0;
  while (true) {
    if (count == 5) {
      break;
    }
    var check = Math.random() < 0.5 + 0.1 * count;
    if (check && tagP[i + j * 9].innerHTML == "") {
      tagP[i + j * 9].innerHTML = pick(j * 10 + 1);
      tagP[i + j * 9].style.backgroundColor = "#fff";
      count++;
    }
    j++;
    if (j == 9) {
      j = 0;
    }
  }
}
function rdColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var xuat = "#" + randomColor;
  return xuat;
}
function pick(gioiHan) {
  var index = Math.floor(Math.random() * fullPick.length);
  var number;
  while (true) {
    index = Math.floor(Math.random() * fullPick.length);
    number = fullPick[index];
    if (number > gioiHan - 1 && number < gioiHan + 9) {
      fullPick.splice(index, 1);
      break;
    }
  }
  return number;
}
