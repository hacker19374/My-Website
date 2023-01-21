





//
//Variables
//



  
  
  
var loadd = setTimeout(load,1);
var splashie = setTimeout(function(){
  document.getElementById("splash").style.display = "none";
},700);
var money = 0;
var moneyS = "$" + money;
var moneyT = 0;

var grandpas = 0;
var mOuse = 0;
var diners = 0;

var mps = 0;

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
    mps += 0.2;
    money -= 50;
    moneyS = "$" + short(Math.floor(money));
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
    mps += 1;
    money -= 300;
    moneyS = "$" + short(Math.floor(money));
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

function diner() {
  if (money >= 2000) {
    diners++;
    mps += 5;
    money -= 2000;
    moneyS = "$" + short(Math.floor(money));
    if (diners == 1) {
      document.getElementById("diners_owned").innerHTML = diners + " Diner";
    } else {
      document.getElementById("diners_owned").innerHTML = diners + " Diners";
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
  money += (mOuse * 0.20);
  moneyT += (mOuse * 0.20);
  money += (diners * 5);
  moneyT += (diners * 5);
  moneyS = "$" + short(Math.floor(money));
  if (startT === true) {
    window.localStorage.setItem("money", Math.floor(money));
    time++;
    window.localStorage.setItem("time", time);
    window.localStorage.setItem("moneyT", Math.floor(moneyT));
    window.localStorage.setItem("grandpas", grandpas);
    window.localStorage.setItem("mice", mOuse);
    window.localStorage.setItem("diners", diners);
    window.localStorage.setItem("clickPnum", clickPnum);
    localStorage.setItem("saveT", Date.now());
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
  document.getElementById("dinerBtn").addEventListener("click", diner);
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
    if (localStorage.getItem("remember") === null) {
    document.getElementById("loadSt").innerHTML = "You have $" + localStorage.getItem("money") + " and have played for " + (Math.ceil(localStorage.getItem("time") / 60)) + " minutes.";
    } else if (localStorage.getItem("remember") == "yes") {
      saveY();
    } else if (localStorage.getItem("remember") == "no") {
      saveN();
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
    }
  else if (grandpas !== 0) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
    }
  mOuse = +(localStorage.mice);
  if (mOuse == 1) {
    document.getElementById("mice_owned").innerHTML = mOuse + " Cursor";
  }
  else if (mOuse !== 0) {
    document.getElementById("mice_owned").innerHTML = mOuse + " Cursors";
  }
  diners = +(localStorage.diners);
  if (diners == 1) {
    document.getElementById("diners_owned").innerHTML = diners + " Diner";
  }
  else if (diners !== 0) {
    document.getElementById("diners_owned").innerHTML = diners + " Diners";
  }
  moneyT = +(localStorage.moneyT);
  clickPnum = +(localStorage.clickPnum);
  if (clickPnum === 0) {
      
    
  }
  else if (clickPnum == 1) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      clickPower = 2;
      clickPprice = 1000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 2) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      clickPower = 3;
      clickPprice = 2000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 3) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      clickPower = 4;
      clickPprice = 4000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 4) {
      document.getElementById("cP4").style.fill = "rgb(100,120,120)";
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      clickPower = 5;
      clickPprice = 4000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 5) {
      document.getElementById("cP5").style.fill = "rgb(100,120,120)";
      document.getElementById("cP4").style.fill = "rgb(100,120,120)";
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      clickPower = 6;
      clickPprice = 4000;
      document.getElementById("clickPu").innerHTML = "<u>Maximum click power reached!!</u>";
    }
  document.getElementById("notification").style.display = "none";
  if (remembe.checked === true) {
    localStorage.setItem("remember", "yes");
  }
  startT = true;
  var oldT = localStorage.saveT;
  var diff = Date.now() - oldT;
  var sec = Math.floor(diff / 1000);
  var offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec);
  if (sec >= 60 && sec <= 86400) {
    alert("You earned " + offlineMoney + " dollars while you were away!");
    money += offlineMoney;
    moneyT += offlineMoney;
  } else if (sec >= 86400) {
    sec = 86400;
    offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec);
    alert("You earned " + offlineMoney + " dollars while you were away!");
    money += offlineMoney;
    moneyT += offlineMoney;
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
  document.getElementById("total_money").innerHTML = "You have made " + short(Math.floor(moneyT)) + " dollars in total.";
  mps = (mOuse * 0.2) + grandpas + (diners * 5);
  document.getElementById("dps").innerHTML = "<i>" + mps.toFixed(1) + " MPS</i>";
  
}

function onCl() {
  money += clickPower;
  moneyT += clickPower;
  moneyS = "$" + short(Math.floor(money));
  update();
}

function short(val) {
  if (val >= 1000 && val < 1000000) {
    return((val / 1000).toFixed(2) + "k")
  } else if (val >= 100000 && val < 1000000000) {
    return((val / 1000000).toFixed(2) + "m")
  } else if (val >= 100000000 && val < 1000000000000) {
    return((val / 1000000000).toFixed(2) + "b")
  } else if (val >= 100000000000 && val < 1000000000000000) {
    return((val / 1000000000000).toFixed(2) + "t")
  } else if (val >= 100000000000000 && val < 1000000000000000000) {
    return((val / 1000000000000000).toFixed(2) + "q")
  } else if (val >= 100000000000000000 && val < 1000000000000000000000) {
    return((val / 1000000000000000000).toFixed(2) + "Q")
  } else if (val >= 100000000000000000000 && val < 1000000000000000000000000) {
    return((val / 1000000000000000000000).toFixed(2) + "Sx")
  } else if (val >= 100000000000000000000000 && val < 1000000000000000000000000000) {
    return((val / 1000000000000000000000000).toFixed(2) + "Sp")
  }
  else if (val < 1000 || val > 900000000000000000000000000) {
    return(val)
  }
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
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
      update();
    } else if (clickPnum == 1) {
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
      update();
    } else if (clickPnum == 2) {
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
      update();
    } else if (clickPnum == 3) {
      document.getElementById("cP4").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
      update();
    } else if (clickPnum == 4) {
      document.getElementById("cP5").style.fill = "rgb(100,120,120)";
      money -= clickPprice;
      clickPnum++;
      clickPower++;
      clickPprice += clickPprice;
      document.getElementById("clickPu").innerHTML = "<u>Maximum click power reached!!</u>";
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