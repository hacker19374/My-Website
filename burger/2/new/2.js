
var loadd = setTimeout(load,1);

//
//Variables
//

var money = 0;
var moneyS = "$" + money;
var moneyT = 0;
var grandpas = 0;
var mOuse = 0;
var tick = setInterval(tick, 1000);
var text = "Stats";
var txt = 1;
var clickPprice = 500;
var clickPnum = 0;
var clickPower = 1;

//
//Functions
//

function load() {
  moneyS = "$" + money;
  document.getElementById("burger").addEventListener("click", onCl);
  document.getElementById("grandpaBtn").addEventListener("click", grandpa);
  document.getElementById("mouseBtn").addEventListener("click", mous);
  document.getElementById("toggleButton").addEventListener("click", toggleTabs);
  document.getElementById("clickPu").addEventListener("click", upgradeCp);
  update();
}

function update() {
  document.getElementById("money").innerHTML = moneyS;
  document.getElementById("total_money").innerHTML = "You have made " + Math.floor(moneyT) + " dollars in total.";
}

function onCl() {
  money += clickPower;
  moneyT += clickPower;
  moneyS = "$" + Math.floor(money);
  update();
}

function grandpa() {
  if (money >= 200) {
    grandpas++;
    money -= 200;
    moneyS = "$" + Math.floor(money);
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function mous() {
  if (money >= 50) {
    mOuse++;
    money -= 50;
    moneyS = "$" + Math.floor(money);
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function tick() {
  money += (grandpas * 1);
  moneyT += (grandpas * 1);
  money += (mOuse * 0.2);
  moneyT += (mOuse * 0.2);
  moneyS = "$" + Math.floor(money);
  update();
}

function updateTxt() {
	if (txt == 1) {
		text = "Stats";
	} else {
		text = "Upgrades";
	}
	txt = Math.abs(txt - 1);
	document.getElementById("toggleButton").innerHTML = text;
} //Updates the tab button text
function toggleTabs() {
	var element1 = document.getElementById("stats");
	element1.classList.toggle("tab-2a");
	element1.classList.toggle("tab-1a");
	var element2 = document.getElementById("upgrades");
	element2.classList.toggle("tab-2b");
	element2.classList.toggle("tab-1b");
	updateTxt();
	update();
} //Shows and hides the workshop and the shop


function upgradeCp() {
  if (money >= clickPprice) {
    if (clickPnum === 0) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
    } else if (clickPnum == 1) {
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
    } else {
      console.log("Maximum reached!");
    }
    money -= clickPprice;
    clickPnum++;
    clickPower++;
    clickPprice += clickPprice;
    update()
  } else {
    console.log("Not enough money!!!!");
  }
}