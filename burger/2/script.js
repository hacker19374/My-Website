//Version 1.1.35

var saveCode = btoa(saveCodeData)
var saveFunction = setInterval(save, 30000);
var money = +0;
var moneyReal = +0;
var burgers = +0;
var burgersReal = +0;
var bps = +0;
var mps = +0;
var timer = setInterval(perSecond, 1000)
var randMin = +300;
var randMax = +5000;
var clickValue = +1;
var burgerPrice = +1;
var sellAmount = +1;
var cursorPrice = +10;
var grandpaPrice = +50;
var oven1Price = +200;
var rand = Math.floor(Math.random() * randMin) + randMax;
var timer2 = setInterval(sellBurger, rand);
var saveCodeData = {
    burgers:burgersReal,
    money:moneyReal,
    bps:bps,
    mps:mps,
    randomMin:randMin,
    randomMax:randMax,
    clickVal:clickValue,
    burgerPr:burgerPrice,
    sellAmount:sellAmount,
    cursorPr:cursorPrice,
    grandpaPr:grandpaPrice,
    oven1Pr:oven1Price
};

function goSay() {
    alert(saveCodeData);
}

function perSecond() {
    moneyReal += mps;
    burgersReal += bps;
    update();
}

function creatorHax(dollas) {
    if (dollas == "a lot") {
        moneyReal += 100;
        moneyReal *= 5;
    } else {
        moneyReal /= 2;
        console.log("NO CHEATING!! You get 1/2 of your money TAKEN AWAY!!!");
    }
}

function update() {
    money = Math.floor(moneyReal);
    console.log(saveCode);
    burgers = Math.floor(burgersReal);
    if (burgersReal > 0 && burgersReal < 9999) {
        burgers = burgersReal;
    } 
    else {
    if (burgersReal > 9999 && burgersReal < 999999) {
      burgers = Math.round(burgersReal / 10) / 100 + "K";
    } 
    else {
      if (burgersReal > 999999 && burgersReal < 999999999) {
        burgers = Math.round(burgersReal / 10000) / 100 + "M";
      } 
      else {
        if (burgersReal > 999999999 && burgersReal < 999999999999) {
          burgers = Math.round(burgersReal / 10000000) / 100 + "B";
        }
        else {
          if (burgersReal > 999999999999 && burgersReal < 999999999999999) {
            burgers = Math.round(burgersReal / 10000000000) / 100 + "T";
          }
          else {
            if (burgersReal > 999999999999999 && burgersReal < 999999999999999999) {
                burgers = Math.round(burgersReal / 10000000000000) / 100 + "q";
            }
            else {
                if (burgersReal > 999999999999 && burgersReal < 999999999999999) {
                    burgers = Math.round(burgersReal / 10000000000000000) / 100 + "Q";
                }
            }
          }
        }
      }
    }
  }
    document.getElementById("mouse-price").innerHTML = Math.ceil(cursorPrice) + " Dollars";
    document.getElementById("grandpa-price").innerHTML = Math.ceil(grandpaPrice) + " Dollars";
    if (grandpaPrice != 50) {
        document.getElementById("super-oven-1-price").innerHTML = Math.ceil(oven1Price) + " Dollars";
    };
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
        cursorPrice = cursorPrice + ((cursorPrice / 100) * (Math.floor(Math.random() * 10) + 5));
        document.getElementById("mouse-price").innerHTML = cursorPrice + " Dollars";
        randMax = randMax - ((randMax / 100) * 5);
        update();
    } else {
        console.log("Not enough Money, you need " + (cursorPrice - money) + " more dollars.");
    }
}
function buyGrandpa() {
    if (money >= grandpaPrice || moneyReal >= grandpaPrice || moneyReal == grandpaPrice) {
        mps = mps + 0.1;
        moneyReal = moneyReal - grandpaPrice;
        grandpaPrice = grandpaPrice + ((grandpaPrice / 100) * (Math.floor(Math.random() * 10) + 5));
        document.getElementById("grandpa-price").innerHTML = grandpaPrice + " Dollars";
        if (document.getElementById("super-oven-name").innerHTML == "???") {
            document.getElementById("super-oven-name").innerHTML = "Super Oven 1.0";
            document.getElementById("super-oven-1-price").innerHTML = oven1Price + " Dollars";
            document.getElementById("oven-1-Description").innerHTML = "The first model of the Super Ovens, increases burgers per click by one.";
            document.getElementById("super-oven-1").classList.add("shop-item");
            document.getElementById("super-oven-1").classList.remove("hidden");
        };
    } else {
        console.log("Not enough Money, you need " + (grandpaPrice - money) + " more dollars.");
    }
}
function buyOven1() {
    if (money >= oven1Price || moneyReal >= oven1Price || moneyReal == oven1Price) {
        clickValue = clickValue + 1;
        moneyReal = moneyReal - oven1Price;
        oven1Price = oven1Price + ((oven1Price / 100) * (Math.floor(Math.random() * 10) + 5));
        document.getElementById("super-oven-1-price").innerHTML = oven1Price + " Dollars";
    } else {
        console.log("Not enough Money, you need " + (oven1Price - money) + " more dollars.");
    }
}

function tab1(tab) {
    if (tab == stats) {
        document.getElementById("stats").innerHTML = "<u>Stats</u>";
        document.getElementById("lottery").innerHTML = "Lottery";
    } else {
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
