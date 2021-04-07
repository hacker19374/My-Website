//Version 1.1.8

var money = 0;
var moneyReal = 0;
var burgers = 0;
var burgersReal = 0;
var bps = 0;
var mps = 0;
var timer = setInterval(perSecond, 1000)
var clickValue = 1;
var cursorPrice = 30;
var grandpaPrice = 200;
var farmPrice = 2200;
var cavePrice = 24000;
var workshopPrice = 260000;
var bankPrice = 2800000;
var pyramidPrice = 40000000;
var alchemistTowerPrice = 660000000;

function perSecond() {
  moneyReal += mps;
  burgersReal += bps;
  update();
}

function tab1(tab) {
  if (tab == stats) {
    document.getElementById("toggleStuff").innerHTML = "<span id="stats" onclick="tab1(stats)"><u>Stats</u></span>/<span id="lottery" onclick="tab1(lottery)">Lottery</span>";
  }
  else {
    document.getElementById("toggleStuff").innerHTML = "<span id="stats" onclick="tab1(stats)">Stats</span>/<span id="lottery" onclick="tab1(lottery)"><u>Lottery</u></span>";
  }
}

function update() {
  money = Math.floor(moneyReal);
  burgers = Math.floor(burgersReal);
  document.getElementById("moneyVisible").innerHTML = money + " Burgers";
}

function clickBurger() {
  burgers = burgers + clickValue;
  update();
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
