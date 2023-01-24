





//
//Variables
//



  
  
  
var loadd = setTimeout(load,1);
var splashie = setTimeout(function(){
  document.getElementById("splash").style.display = "none";
},1000);
var money = 0;
var moneyS = "$" + money;
var moneyT = 0;

var grandpas = 0;
var mOuse = 0;
var diners = 0;
var largeRs = 0;

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
    moneyS = "$" + (Math.floor(money));
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

function diner() {
  if (money >= 2000) {
    diners++;
    mps += 5;
    money -= 2000;
    moneyS = "$" + Math.floor(money);
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

function largeR() {
  if (money >= 13000) {
    largeRs++;
    mps += 25;
    money -= 13000;
    moneyS = "$" + Math.floor(money);
    if (largeRs == 1) {
      document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturant";
    } else {
      document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturants";
    }
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
  money += (largeRs * 25);
  moneyT += (largeRs * 25);
  moneyS = "$" + Math.floor(money);
  if (startT === true) {
    window.localStorage.setItem("money", Math.floor(money));
    time++;
    window.localStorage.setItem("time", time);
    window.localStorage.setItem("moneyT", Math.floor(moneyT));
    window.localStorage.setItem("grandpas", grandpas);
    window.localStorage.setItem("mice", mOuse);
    window.localStorage.setItem("diners", diners);
    window.localStorage.setItem("largeR", largeRs);
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
  document.getElementById("resturantBtn").addEventListener("click", largeR);
  document.getElementById("toggleButton").addEventListener("click", toggleTabs);
  document.getElementById("clickPu").addEventListener("click", upgradeCp);
  document.getElementById("burger").addEventListener("mousedown", dow);
  document.getElementById("yes").addEventListener("click", saveY);
  document.getElementById("no").addEventListener("click", saveN);
  
  
  document.getElementById("burger").addEventListener("mouseup", function(){
    this.style.height = "40vh";
    document.getElementById("burger").style.margin = "3vh auto auto auto";
  });
  document.getElementById("mouseBtn").addEventListener("mouseover", function(){
    this.innerHTML = "$0.2 per second";
  });
  document.getElementById("mouseBtn").addEventListener("mouseout", function(){
    this.innerHTML = "Mouse - $50";
  });
  document.getElementById("grandpaBtn").addEventListener("mouseover", function(){
    this.innerHTML = "$1 per second";
  });
  document.getElementById("grandpaBtn").addEventListener("mouseout", function(){
    this.innerHTML = "Grandpa - $300";
  });
  document.getElementById("dinerBtn").addEventListener("mouseover", function(){
    this.innerHTML = "$5 per second";
  });
  document.getElementById("dinerBtn").addEventListener("mouseout", function(){
    this.innerHTML = "Local Diner - $2k";
  });
  document.getElementById("resturantBtn").addEventListener("mouseover", function(){
    this.innerHTML = "$25 per second";
  });
  document.getElementById("resturantBtn").addEventListener("mouseout", function(){
    this.innerHTML = "Large Resturant - $13k";
  });
  if (localStorage.getItem("time") !== 0 && localStorage.getItem("time") !== null) {
    //document.getElementById("notification").style.display = "none";
    startT= false;
    if (localStorage.getItem("remember") === null) {
    document.getElementById("loadSt").innerHTML = "You have $" + short(localStorage.getItem("money")) + " and have played for " + (Math.ceil(localStorage.getItem("time") / 60)) + " minutes.";
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
  window.localStorage.setItem("largeR", 0);
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
  largeRs = +(localStorage.largeR);
  if (largeRs == 1) {
    document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturant";
  }
  else if (largeRs !== 0) {
    document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturants";
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
  if (sec >= 60 && sec <= 14400) {
    alert("You earned " + short(offlineMoney) + " dollars while you were away!");
    money += offlineMoney;
    moneyT += offlineMoney;
  } else if (sec >= 14400) {
    sec = 14400;
    offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec);
    alert("You earned " + short(offlineMoney) + " dollars while you were away!");
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
    if (money > 0 && money < 9999) {
    moneyS = "$" + Math.floor(money);
  }
  else {
    if (money > 9999 && money < 999999) {
      moneyS = "$" + Math.round(money / 10) / 100 + "k";
    }
    else {
      if (money > 999999 && money < 999999999) {
        moneyS = "$" + Math.round(money / 10000) / 100 + "m";
      }
      else {
        if (money > 999999999 && money < 999999999999) {
          moneyS = "$" + Math.round(money / 10000000) / 100 + "b";
        }
        else {
          if (money > 999999999999 && money < 999999999999999) {
            moneyS = "$" + Math.round(money / 10000000000) / 100 + "t";
          }
          else {
            if (money > 999999999999999 && money < 999999999999999999) {
                moneyS = "$" + Math.round(money / 10000000000000) / 100 + "Qa";
            }
            else {
                if (money > 999999999999999999 && money < 999999999999999999999) {
                    moneyS = "$" + Math.round(money / 10000000000000000) / 100 + "Qi";
                }
                else {
                  if (money > 999999999999999999999 && money < 999999999999999999999999) {
                    moneyS = "$" + Math.round(money / 10000000000000000000) / 100 + "Sx";
                  }
                }
            }
          }
        }
      }
    }
  }
    nodeList[i].innerHTML = moneyS;
  }
  document.getElementById("total_money").innerHTML = "You have made " + short(Math.floor(moneyT)) + " dollars in total.";
  mps = (mOuse * 0.2) + grandpas + (diners * 5) + (largeRs * 25);
  document.getElementById("dps").innerHTML = "<i>" + mps.toFixed(1) + " MPS</i>";
  
}

function onCl() {
  money += clickPower;
  moneyT += clickPower;
  moneyS = "$" + Math.floor(money);
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

function prestige() {
  
}

function types(n, r) {
  if (n == 1) {
    var rando = Math.floor(Math.random() * 5) + 1
    if (rando == 1) {
      document.getElementById("num1t").innerHTML = "Bacon"
      if (r == "c") {
        document.getElementById("num1d").innerHTML = "-1% shop prices"
      } else if (r == "r") {
        document.getElementById("num1d").innerHTML = "-2% shop prices"
      } else if (r == "e") {
        document.getElementById("num1d").innerHTML = "-3.5% shop prices"
      } else if (r == "l") {
        document.getElementById("num1d").innerHTML = "-5% shop prices"
      }
    }
    if (rando == 2) {
      document.getElementById("num1t").innerHTML = "Lettuce"
      if (r == "c") {
        document.getElementById("num1d").innerHTML = "+1% money earned for everything"
      } else if (r == "r") {
        document.getElementById("num1d").innerHTML = "+2% money earned for everything"
      } else if (r == "e") {
        document.getElementById("num1d").innerHTML = "+3% money earned for everything"
      } else if (r == "l") {
        document.getElementById("num1d").innerHTML = "+6% money earned for everything"
      }
    }
    if (rando == 3) {
      document.getElementById("num1t").innerHTML = "Tomato"
      if (r == "c") {
        document.getElementById("num1d").innerHTML = "1% faster tick speed"
      } else if (r == "r") {
        document.getElementById("num1d").innerHTML = "2% faster tick speed"
      } else if (r == "e") {
        document.getElementById("num1d").innerHTML = "3% faster tick speed"
      } else if (r == "l") {
        document.getElementById("num1d").innerHTML = "4.5% faster tick speed"
      }
    }
    if (rando == 4) {
      document.getElementById("num1t").innerHTML = "Mustard"
      if (r == "c") {
        document.getElementById("num1d").innerHTML = "-0.5% upgrade prices"
      } else if (r == "r") {
        document.getElementById("num1d").innerHTML = "-1% upgrade prices"
      } else if (r == "e") {
        document.getElementById("num1d").innerHTML = "-1.75% upgrade prices"
      } else if (r == "l") {
        document.getElementById("num1d").innerHTML = "-2.5% upgrade prices"
      }
    }
    if (rando == 5) {
      document.getElementById("num1t").innerHTML = "Pickles"
      if (r == "c") {
        document.getElementById("num1d").innerHTML = "+30 minutes of offline time"
      } else if (r == "r") {
        document.getElementById("num1d").innerHTML = "+45 minutes of offline time"
      } else if (r == "e") {
        document.getElementById("num1d").innerHTML = "+1.5 hours of offline time"
      } else if (r == "l") {
        document.getElementById("num1d").innerHTML = "+3 hours of offline time"
      }
    }
  } else if (n == 2) {
    var rando = Math.floor(Math.random() * 5) + 1
    if (rando == 1) {
      document.getElementById("num2t").innerHTML = "Bacon"
      if (r == "c") {
        document.getElementById("num2d").innerHTML = "-1% shop prices"
      } else if (r == "r") {
        document.getElementById("num2d").innerHTML = "-2% shop prices"
      } else if (r == "e") {
        document.getElementById("num2d").innerHTML = "-3.5% shop prices"
      } else if (r == "l") {
        document.getElementById("num2d").innerHTML = "-5% shop prices"
      }
    }
    if (rando == 2) {
      document.getElementById("num2t").innerHTML = "Lettuce"
      if (r == "c") {
        document.getElementById("num2d").innerHTML = "+1% money earned for everything"
      } else if (r == "r") {
        document.getElementById("num2d").innerHTML = "+2% money earned for everything"
      } else if (r == "e") {
        document.getElementById("num2d").innerHTML = "+3% money earned for everything"
      } else if (r == "l") {
        document.getElementById("num2d").innerHTML = "+6% money earned for everything"
      }
    }
    if (rando == 3) {
      document.getElementById("num2t").innerHTML = "Tomato"
      if (r == "c") {
        document.getElementById("num2d").innerHTML = "1% faster tick speed"
      } else if (r == "r") {
        document.getElementById("num2d").innerHTML = "2% faster tick speed"
      } else if (r == "e") {
        document.getElementById("num2d").innerHTML = "3% faster tick speed"
      } else if (r == "l") {
        document.getElementById("num2d").innerHTML = "4.5% faster tick speed"
      }
    }
    if (rando == 4) {
      document.getElementById("num2t").innerHTML = "Mustard"
      if (r == "c") {
        document.getElementById("num2d").innerHTML = "-0.5% upgrade prices"
      } else if (r == "r") {
        document.getElementById("num2d").innerHTML = "-1% upgrade prices"
      } else if (r == "e") {
        document.getElementById("num2d").innerHTML = "-1.75% upgrade prices"
      } else if (r == "l") {
        document.getElementById("num2d").innerHTML = "-2.5% upgrade prices"
      }
    }
    if (rando == 5) {
      document.getElementById("num2t").innerHTML = "Pickles"
      if (r == "c") {
        document.getElementById("num2d").innerHTML = "+30 minutes of offline time"
      } else if (r == "r") {
        document.getElementById("num2d").innerHTML = "+45 minutes of offline time"
      } else if (r == "e") {
        document.getElementById("num2d").innerHTML = "+1.5 hours of offline time"
      } else if (r == "l") {
        document.getElementById("num2d").innerHTML = "+3 hours of offline time"
      }
    }
  } else {
    var rando = Math.floor(Math.random() * 5) + 1
    if (rando == 1) {
      document.getElementById("num3t").innerHTML = "Bacon"
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "-1% shop prices"
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "-2% shop prices"
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "-3.5% shop prices"
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "-5% shop prices"
      }
    }
    if (rando == 2) {
      document.getElementById("num3t").innerHTML = "Lettuce"
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "+1% money earned for everything"
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "+2% money earned for everything"
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "+3% money earned for everything"
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "+6% money earned for everything"
      }
    }
    if (rando == 3) {
      document.getElementById("num3t").innerHTML = "Tomato"
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "1% faster tick speed"
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "2% faster tick speed"
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "3% faster tick speed"
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "4.5% faster tick speed"
      }
    }
    if (rando == 4) {
      document.getElementById("num3t").innerHTML = "Mustard"
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "-0.5% upgrade prices"
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "-1% upgrade prices"
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "-1.75% upgrade prices"
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "-2.5% upgrade prices"
      }
    }
    if (rando == 5) {
      document.getElementById("num3t").innerHTML = "Pickles"
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "+30 minutes of offline time"
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "+45 minutes of offline time"
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "+1.5 hours of offline time"
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "+3 hours of offline time"
      }
    }
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
