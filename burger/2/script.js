//Version 1.1.14

var money = 0;
var moneyReal = 0;
var burgers = 0;
var burgersReal = 0;
var bps = 0;
var mps = 0;
var timer = setInterval(perSecond, 1000)
var clickValue = 1;
var burgerPrice = 1;
var sellAmount = 1;
var cursorPrice = 30;
var grandpaPrice = 200;
var farmPrice = 2200;
var cavePrice = 24000;
var workshopPrice = 260000;
var bankPrice = 2800000;
var pyramidPrice = 40000000;
var alchemistTowerPrice = 660000000;
var rand = Math.floor(Math.random() * 1000) + 20000

function perSecond() {
  moneyReal += mps;
  burgersReal += bps;
  update();
}

function update() {
  money = Math.floor(moneyReal);
  burgers = Math.floor(burgersReal);
  document.getElementById("burgersVisible").innerHTML = burgers + " Burgers";
  document.getElementById("moneyVisible").innerHTML = money + " Dollars";
}

function clickBurger() {
  burgersReal = burgersReal + clickValue;
  update();
}

function sellBurger() {
  if (burgersReal >= 1) {
    rand = Math.floor(Math.random() * 1000) + 20000
    burgersReal -= sellAmount;
    moneyReal += (burgerPrice * sellAmount);
    update();
    setTimeout(sellBurger, rand);
  }
}

function buy(byee) {
  if (byee == "mouse") {
    if (money => cursorPrice) {
      mps = mps + 0.1;
      cursorPrice = cursorPrice + ((cursorPrice / 100) * (Math.floor(Math.random() * 10) + 1));
      document.getElementById("mouse-price").innerHTML = cursorPrice + " Dollars";
    }
  }
  if (byee == "grandpa") {
    if (money => grandpaPrice) {
      bps = bps + 1;
      grandpaPrice = grandpaPrice + ((grandpaPrice / 100) * (Math.floor(Math.random() * 10) + 1));
      document.getElementById("grandpa-price").innerHTML = grandpaPrice + " Dollars";
    }
  }
}

function tab1(tab) {
  if (tab == stats) {
    document.getElementById("stats").innerHTML = "<u>Stats</u>";
    document.getElementById("lottery").innerHTML = "Lottery";
  }
  else {
    document.getElementById("lottery").innerHTML = "<u>Lottery</u>";    
    document.getElementById("stats").innerHTML = "Stats";

  }
}

window.onload = function() {
  sellBurger();
}
