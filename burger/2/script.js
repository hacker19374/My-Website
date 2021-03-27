var money = 0;
var clickValue = 1;
var cursorPrice = 30;
var grandpaPrice = 200;
var farmPrice = 2200;
var cavePrice = 24000;

function update() {
  document.getElementById("moneyVisible").innerHTML = money;
}

function clickBurger() {
  money += clickValue;
  update();
}
