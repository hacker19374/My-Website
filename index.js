var x = 1
var elmt
var timer = setInterval(changeTitle, 3000);
var z = "hacker19374's Website"
function changeTitle() {
  if (x == 1) {
      z = "Home Page";
  }
  else {
      z = "hacker19374's Website";
  }
  document.title = z;
  x = Math.abs(x - 1);

};
function extendPic(num) {
  elmt = getElementById("img" + num).style.display = block;
};
function hidePic(num) {
    elmt = getElementById("img" + num).style.display = none;
};
