





//
//Variables
//






var loadd = setTimeout(load,1);
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
var time = 0;
var startT = false;






//
// Shop Items
//






function mous() {
  if (money >= 50) {
    mOuse++;
    money -= 50;
    moneyS = "$" + Math.floor(money);
    if (mOuse == 1) {
      document.getElementById("mice_owned").innerHTML = mOuse + " Cursor";
    } else {
      document.getElementById("mice_owned").innerHTML = mOuse + " Cursors";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function grandpa() {
  if (money >= 300) {
    grandpas++;
    money -= 300;
    moneyS = "$" + Math.floor(money);
    if (grandpas == 1) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpa";
    } else {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}






//
// Functional Functions
//






function tick() {
  money += (grandpas * 1);
  moneyT += (grandpas * 1);
  money += (mOuse * 0.2);
  moneyT += (mOuse * 0.2);
  moneyS = "$" + Math.floor(money);
  if (startT === true) {
    window.localStorage.setItem("money", Math.floor(money));
    time++;
    window.localStorage.setItem("time", time);
    window.localStorage.setItem("moneyT", Math.floor(moneyT));
    window.localStorage.setItem("grandpas", grandpas);
    window.localStorage.setItem("mice", mOuse);
  }
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

function load() {
  moneyS = "$" + money;
  document.getElementById("burger").addEventListener("click", onCl);
  document.getElementById("grandpaBtn").addEventListener("click", grandpa);
  document.getElementById("mouseBtn").addEventListener("click", mous);
  document.getElementById("toggleButton").addEventListener("click", toggleTabs);
  document.getElementById("clickPu").addEventListener("click", upgradeCp);
  document.getElementById("burger").addEventListener("mousedown", dow);
  document.getElementById("yes").addEventListener("click", saveY);
  document.getElementById("no").addEventListener("click", saveN);
  
  
  document.getElementById("burger").addEventListener("mouseup", function(){
    this.style.height = "40vh";
    document.getElementById("burger").style.margin = "3vh auto auto auto";
  });
  document.getElementById("gramps_owned").addEventListener("mouseover", function(){
    this.innerHTML = "Sell 1 Grandpa";
  });
  document.getElementById("gramps_owned").addEventListener("mouseout", function(){
    if (grandpas == 1) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpa";
    } else {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
    }
  });
  if (localStorage.getItem("time") !== 0 && localStorage.getItem("time") !== null) {
    //document.getElementById("notification").style.display = "none";
    startT= false;
    if (localStorage.getItem("remember") == "no" || localStorage.getItem("remember") === null) {
    document.getElementById("loadSt").innerHTML = "You have $" + localStorage.getItem("money") + " and have played for " + (Math.ceil(localStorage.getItem("time") / 60)) + " minutes.";
    } else {
      saveY();
    }
  } else {
    document.getElementById("notification").style.display = "none";
    startT = true;
  }
  update();
}

function saveN() {
  document.getElementById("notification").style.display = "none";
  window.localStorage.setItem("money", 0);
  window.localStorage.setItem("time", 0);
  window.localStorage.setItem("mice", 0);
  window.localStorage.setItem("grandpas", 0);
  window.localStorage.setItem("moneyT", 0);
  if (remembe.checked === true) {
    localStorage.setItem("remember", "no");
  }
  startT = true;
}

function check() {
  if (remembe.checked === false) {
    remembe.checked = true;
  } else {
    remembe.checked = false;
  }
}

function saveY() {
  money = +(localStorage.money);
  time = localStorage.time;
  grandpas = +(localStorage.grandpas);
  if (grandpas == 1) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpa";
    } else if (grandpas !== 0) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
    }
  mOuse = +(localStorage.mice);
  if (mOuse == 1) {
    document.getElementById("mice_owned").innerHTML = mOuse + " Cursor";
  } else if (mOuse !== 0) {
    document.getElementById("mice_owned").innerHTML = mOuse + " Cursors";
  }
  moneyT = +(localStorage.moneyT);
  document.getElementById("notification").style.display = "none";
  startT = true;
  if (remembe.checked === true) {
    localStorage.setItem("remember", "yes");
  }
  update();
}

function dow() {
    document.getElementById("burger").style.height = "39vh";
    document.getElementById("burger").style.margin = "3.5vh auto auto auto";
  }

function update() {
  document.querySelectorAll(".money").innerHTML = moneyS;
  const nodeList = document.querySelectorAll(".moneyS");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = moneyS;
  }
  document.getElementById("total_money").innerHTML = "You have made " + Math.floor(moneyT) + " dollars in total.";
  document.cookie = "money=" + money;
}

function onCl() {
  money += clickPower;
  moneyT += clickPower;
  moneyS = "$" + Math.floor(money);
  update();
}






//
// Upgrade Functions
//






function upgradeCp() {
  if (money >= clickPprice) {
    if (clickPnum === 0) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      update();
    } else if (clickPnum == 1) {
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      update();
    } else if (clickPnum == 2) {
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      update();
    } else if (clickPnum == 3) {
      document.getElementById("cP4").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      update();
    } else if (clickPnum == 4) {
      document.getElementById("cP5").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      update();
    }
    else {
      console.log("Maximum reached!");
    }
  }
  else {
    console.log("Not enough money!!!!");
  }
}