//Version 1.1.23

var saveFunction = setInterval(save, 300000)
var money = +0;
var moneyReal = +0;
var burgers = +0;
var burgersReal = +0;
var bps = +0;
var mps = +0;
var timer = setInterval(perSecond, 1000)
var randMin = +1000;
var randMax = +15000;
var clickValue = +1;
var burgerPrice = +1;
var sellAmount = +1;
var cursorPrice = +10;
var grandpaPrice = +200;
var farmPrice = +2200;
var cavePrice = +24000;
var workshopPrice = +260000;
var bankPrice = +2800000;
var pyramidPrice = +40000000;
var alchemistTowerPrice = +660000000;
var rand = Math.floor(Math.random() * randMin) + randMax;
var timer2 = setInterval(sellBurger, rand);

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
    rand = Math.floor(Math.random() * randMin) + randMax;
    burgersReal = burgersReal - sellAmount;
    moneyReal = moneyReal + (burgerPrice * sellAmount);
    update();
  }
}

function buyMouse() {
    if (moneyReal >= cursorPrice || moneyReal == cursorPrice || money >= cursorPrice) {
      moneyReal = moneyReal - cursorPrice;
      cursorPrice = cursorPrice + ((cursorPrice / 100) * (Math.floor(Math.random() * 5) + 2));
      document.getElementById("mouse-price").innerHTML = cursorPrice + " Dollars";
      randMax = randMax - ((randMax / 100) * 2);
      update();
    }
    else {
      console.log("Not enough Money, you need " + (cursorPrice - money) + " more dollars.");
    }
  }
function buyGrandpa() {
    if (money >= grandpaPrice || moneyReal >= grandpaPrice) {
      bps = bps + 1;
      grandpaPrice = grandpaPrice + ((grandpaPrice / 100) * (Math.floor(Math.random() * 10) + 1));
      document.getElementById("grandpa-price").innerHTML = grandpaPrice + " Dollars";
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

function save() {
  localStorage.money_real = moneyReal;
  localStorage.burgers_real = burgersReal;
  localStorage.bps = bps;
  localStorage.mps = mps;
  localStorage.randMin = randMin;
  localStorage.randMax = randMax;
  localStorage.clickValue = clickValue;
  localStorage.cursorPrice = cursorPrice;
  localStorage.burgerPrice = burgerPrice;
  localStorage.sellAmount = sellAmount;
  localStorage.cursorPrice = cursorPrice;
  localStorage.grandpaPrice = grandpaPrice;
}

function load() {
  if (localStorage.money_real != "" || localStorage.money_real != undefined) {
    moneyReal = +localStorage.money_real;
  }
  if (localStorage.burgers_real != "" || localStorage.burgers_real != undefined) {
    burgersReal = +localStorage.burgers_real;
  }
}
