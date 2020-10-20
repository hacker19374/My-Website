var x = 1
var z = "hacker19374's Website"
function changeTitle() {
  if (x == 1) {
      z = "Home Page";
  };
  else {
      z = "hacker19374's Website";
  };
  document.title = z;
  x = Math.abs(x - 1);

};

var timer = setInterval(changeTitle, 1000);
