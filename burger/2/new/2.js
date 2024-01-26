// jshint maxerr:2000





//
//Variables
//



  
  
  
var loadd = setTimeout(load,10);
var splashie = setTimeout(function(){
  document.getElementById("splash").style.display = "none";
},1000);
var money = 0;
var moneyS = "$" + money;
var moneyT = 0;

var mOuse = 0;
var grandpas = 0;
var diners = 0;
var largeRs = 0;
var sChains = 0;
var lChains = 0;
var states = 0;
var cryptos = 0;
var monos = 0;
var spac = 0;
var planets = 0;
var galaxies = 0;
var tim3 = 0;
var controllers = 0;
var spaceships = 0;

var mps = 0;


var clickPprice = 2000;
var clickPnum = 0;
var clickPower = 1;

var tic = setInterval(tick, 1000);
var unlocked = 2;
var time = 0;
var startT = false;
var saveC = {"money":money, "moneyT":moneyT, "mouse":mOuse, "grandpas":grandpas, "diners":diners, "largeRs":largeRs, "sChains":sChains, "lChains":lChains, "states":states, "cryptos":cryptos, "monos":monos, "spac":spac, "planets":planets, "galaxies":galaxies, "tim3":tim3, "controllers":controllers};
var prizes = {
  '777': { name: 'Jackpot', money: 1000, clickPower: 2 },
  '111': { name: 'Small Prize', money: 100, clickPower: 1.5 },
  '222': { name: 'Medium Prize', money: 500, clickPower: 1.75 },
  '333': { name: 'Small Prize'},
  '444': { name: 'Small Prize'},
  '555': { name: 'Small Prize'},
  '666': { name: 'Nothing'},
  '888': { name: 'Small Prize'},
  '999': { name: 'Small Prize'},
  '000': { name: 'Small Prize'}
};
var price = 100;









//
// Shop Items
//






function mous() {
  if (money >= 100) {
    mOuse++;
    mps += 0.2;
    money -= 100;
    moneyS = "$" + (Math.round(money));
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
  if (money >= 950) {
    grandpas++;
    mps += 1;
    money -= 950;
    moneyS = "$" + Math.round(money);
    if (grandpas == 1) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpa";
      unlok(0);
    } else {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function diner() {
  if (money >= 9025) {
    diners++;
    mps += 5;
    money -= 9025;
    moneyS = "$" + Math.round(money);
    if (diners == 1) {
      document.getElementById("diners_owned").innerHTML = diners + " Diner";
      unlok(1);
    } else {
      document.getElementById("diners_owned").innerHTML = diners + " Diners";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function largeR() {
  if (money >= 85730) {
    largeRs++;
    mps += 25;
    money -= 85730;
    moneyS = "$" + Math.round(money);
    if (largeRs == 1) {
      document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturant";
      unlok(2);
    } else {
      document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturants";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function sChain() {
  if (money >= 943030) {
    sChains++;
    mps += 150;
    money -= 943030;
    moneyS = "$" + Math.round(money);
    if (sChains == 1) {
      document.getElementById("sChain_owned").innerHTML = sChains + " Small Resturant Chain";
      unlok(3);
    } else {
      document.getElementById("sChain_owned").innerHTML = sChains + " Small Resturant Chains";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function lChain() {
  if (money >= 10373000) {
    lChains++;
    mps += 800;
    money -= 10373000;
    moneyS = "$" + Math.round(money);
    if (lChains == 1) {
      document.getElementById("lChain_owned").innerHTML = lChains + " Large Resturant Chain";
      unlok(4);
    } else {
      document.getElementById("lChain_owned").innerHTML = lChains + " Large Resturant Chains";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function state() {
  if (money >= 124476000) {
    states++;
    mps += 4000;
    money -= 124476000;
    moneyS = "$" + Math.round(money);
    if (states == 1) {
      document.getElementById("states_owned").innerHTML = states + " State";
      unlok(5);
    } else {
      document.getElementById("states_owned").innerHTML = states + " States";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function cryptob() {
  if (money >= 1618188000) {
    cryptos++;
    mps += 30000;
    money -= 1618188000;
    moneyS = "$" + Math.round(money);
    if (cryptos == 1) {
      document.getElementById("crypto_owned").innerHTML = cryptos + " Cryptocurrency";
      unlok(6);
    } else {
      document.getElementById("crypto_owned").innerHTML = cryptos + " Cryptocurrencies";
    }
    update();
  } else {
    console.log("Not enough money!!!!");
  }
}

function monopoly() {
  if (money >= 22654632000) {
    monos++;
    mps += 500000;
    money -= 22654632000;
    moneyS = "$" + Math.round(money);
    if (monos == 1) {
      document.getElementById("mono_owned").innerHTML = monos + " Monopoly";
      unlok(7);
    } else {
      document.getElementById("mono_owned").innerHTML = monos + " Monopolies";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}

function space() {
  if (money >= 339819480000) {
    spac++;
    mps += 2000000;
    money -= 339819480000;
    moneyS = "$" + Math.round(money);
    if (spac == 1) {
      document.getElementById("space_owned").innerHTML = "Explored space " + spac + " time";
      unlok(8);
    } else {
      document.getElementById("space_owned").innerHTML = "Explored space " + spac + " times";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}

function planet() {
  if (money >= 5437111600000) {
    planets++;
    mps += 15000000;
    money -= 5437111600000;
    moneyS = "$" + Math.round(money);
    if (planets == 1) {
      document.getElementById("planets_owned").innerHTML = planets + " Planet";
      unlok(9);
    } else {
      document.getElementById("planets_owned").innerHTML = planets + " Planets";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}

function galaxy() {
  if (money >= 92430898500000) {
    galaxies++;
    mps += 70000000;
    money -= 92430898500000;
    moneyS = "$" + Math.round(money);
    if (galaxies == 1) {
      document.getElementById("galaxies_owned").innerHTML = galaxies + " Galaxy";
      unlok(10);
    } else {
      document.getElementById("galaxies_owned").innerHTML = galaxies + " Galaxies";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}

function t1me() {
  if (money >= 1571325275000000) {
    tim3++;
    mps += 200000000;
    money -= 1571325275000000;
    moneyS = "$" + Math.round(money);
    if (tim3 == 1) {
      document.getElementById("time_owned").innerHTML = tim3 + " Time Machine";
      unlok(11);
    } else {
      document.getElementById("time_owned").innerHTML = tim3 + " Time Machines";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}

function control() {
  if (money >= 28283854950000000) {
    controllers++;
    mps += 2000000000;
    money -= 28283854950000000;
    moneyS = "$" + Math.round(money);
    if (controllers == 1) {
      document.getElementById("controller_owned").innerHTML = controllers + " Space Time Controller";
    } else {
      document.getElementById("controller_owned").innerHTML = controllers + " Space Time Controllers";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}

function spaceship() {
  if (money >= 537393244200000000) {
    spaceships++;
    mps += 50000000000;
    money -= 537393244200000000;
    moneyS = "$" + Math.round(money);
    if (spaceships == 1) {
      document.getElementById("spaceships_owned").innerHTML = spaceships + " Quantum Spaceship";
    } else {
      document.getElementById("spaceships_owned").innerHTML = spaceships + " Quantum Spaceships";
    }
    update();
  }
  else {
    console.log("Not enough money!!!!");
  }
}






//
// Functional Functions
//





var number = 0;
function max(it) {
  if (it == "m") {
    number = Math.floor(money / 100);
    for (var i = 0; i < number; i++) {
      mOuse++;
      money -= 100;
      mps += 0.2;
      if (mOuse == 1) {
        document.getElementById("mice_owned").innerHTML = mOuse + " Cursor";
      } else {
        document.getElementById("mice_owned").innerHTML = mOuse + " Cursors";
      }
    }
    update();
  }
  if (it == "g") {
    number = Math.floor(money / 950);
    for (var i = 0; i < number; i++) {
      grandpas++;
      mps += 1;
      money -= 950;
      moneyS = "$" + Math.round(money);
      if (grandpas == 1) {
        document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpa";
        unlok(0);
      } else {
        document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
      }
    }
    update();
  }
  if (it == "d") {
    number = Math.floor(money / 9025);
    for (var i = 0; i < number; i++) {
      diners++;
      mps += 5;
      money -= 9025;
      moneyS = "$" + Math.round(money);
      if (diners == 1) {
        document.getElementById("diners_owned").innerHTML = diners + " Diner";
        unlok(1);
      } else {
        document.getElementById("diners_owned").innerHTML = diners + " Diners";
      }
    }
    update();
  }
  if (it == "r") {
    number = Math.floor(money / 85730);
    for (var i = 0; i < number; i++) {
      largeRs++;
      mps += 25;
      money -= 85730;
      moneyS = "$" + Math.round(money);
      if (largeRs == 1) {
        document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturant";
        unlok(2);
      } else {
        document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturants";
      }
    }
    update();
  }
  if (it == "sC") {
    number = Math.floor(money / 947030);
    for (var i = 0; i < number; i++) {
      sChains++;
      mps += 150;
      money -= 943030;
      moneyS = "$" + Math.round(money);
      if (sChains == 1) {
        document.getElementById("sChain_owned").innerHTML = sChains + " Small Resturant Chain";
        unlok(3);
      } else {
        document.getElementById("sChain_owned").innerHTML = sChains + " Small Resturant Chains";
      }
    }
    update();
  }
  if (it == "bC") {
    number = Math.floor(money / 10373000);
    for (var i = 0; i < number; i++) {
      lChains++;
      mps += 800;
      money -= 10373000;
      moneyS = "$" + Math.round(money);
      if (lChains == 1) {
        document.getElementById("lChain_owned").innerHTML = lChains + " Large Resturant Chain";
        unlok(4);
      } else {
        document.getElementById("lChain_owned").innerHTML = lChains + " Large Resturant Chains";
      }
    }
    update();
  }
  if (it == "s") {
    number = Math.floor(money / 124476000);
    for (var i = 0; i < number; i++) {
      states++;
      mps += 4000;
      money -= 124476000;
      moneyS = "$" + Math.round(money);
      if (states == 1) {
        document.getElementById("states_owned").innerHTML = states + " State";
        unlok(5);
      } else {
        document.getElementById("states_owned").innerHTML = states + " States";
      }
    }
    update();
  }
  if (it == "c") {
    number = Math.floor(money / 1618188000);
    for (var i = 0; i < number; i++) {
      cryptos++;
      mps += 30000;
      money -= 1618188000;
      moneyS = "$" + Math.round(money);
      if (cryptos == 1) {
        document.getElementById("crypto_owned").innerHTML = cryptos + " Cryptocurrency";
        unlok(6);
      } else {
        document.getElementById("crypto_owned").innerHTML = cryptos + " Cryptocurrencies";
      }
    }
    update();
  }
  if (it == "mn") {
    number = Math.floor(money / 22654632000);
    for (var i = 0; i < number; i++) {
      monos++;
      mps += 500000;
      money -= 22654632000;
      moneyS = "$" + Math.round(money);
      if (monos == 1) {
        document.getElementById("mono_owned").innerHTML = monos + " Monopoly";
        unlok(7);
      } else {
        document.getElementById("mono_owned").innerHTML = monos + " Monopolies";
      }
    }
    update();
  }
  if (it == "sp") {
    number = Math.floor(money / 339819480000);
    for (var i = 0; i < number; i++) {
      spac++;
      mps += 2000000;
      money -= 339819480000;
      moneyS = "$" + Math.round(money);
      if (spac == 1) {
        document.getElementById("space_owned").innerHTML = "Explored space " + spac + " time";
        unlok(8);
      } else {
        document.getElementById("space_owned").innerHTML = "Explored space " + spac + " times";
      }
    }
    update();
  }
  if (it == "p") {
    number = Math.floor(money / 5437111600000);
    for (var i = 0; i < number; i++) {
      planets++;
      mps += 15000000;
      money -= 5437111600000;
      moneyS = "$" + Math.round(money);
      if (planets == 1) {
        document.getElementById("planets_owned").innerHTML = planets + " Planet";
        unlok(9);
      } else {
        document.getElementById("planets_owned").innerHTML = planets + " Planets";
      }
    }
    update();
  }
  if (it == "G") {
    number = Math.floor(money / 92430898500000);
    for (var i = 0; i < number; i++) {
      galaxies++;
      mps += 70000000;
      money -= 92430898500000;
      moneyS = "$" + Math.round(money);
      if (galaxies == 1) {
        document.getElementById("galaxies_owned").innerHTML = galaxies + " Galaxy";
        unlok(10);
      } else {
        document.getElementById("galaxies_owned").innerHTML = galaxies + " Galaxies";
      }
    }
    update();
  }
  if (it == "t") {
    number = Math.floor(money / 1571325275000000);
    for (var i = 0; i < number; i++) {
      tim3++;
      mps += 200000000;
      money -= 1571325275000000;
      moneyS = "$" + Math.round(money);
      if (tim3 == 1) {
        document.getElementById("time_owned").innerHTML = tim3 + " Time Machine";
        unlok(11);
      } else {
        document.getElementById("time_owned").innerHTML = tim3 + " Time Machines";
      }
    }
    update();
  }
  if (it == "sT") {
    number = Math.floor(money / 28283854950000000);
    for (var i = 0; i < number; i++) {
      controllers++;
      mps += 2000000000;
      money -= 28283854950000000;
      moneyS = "$" + Math.round(money);
      if (controllers == 1) {
        document.getElementById("controller_owned").innerHTML = controllers + " Space Time Controller";
      } else {
        document.getElementById("controller_owned").innerHTML = controllers + " Space Time Controllers";
      }
    }
    update();
  }
  if (it == "q") {
    number = Math.floor(money / 537393244200000000);
    for (var i = 0; i < number; i++) {
      spaceships++;
      mps += 50000000000;
      money -= 537393244200000000;
      moneyS = "$" + Math.round(money);
      if (spaceships == 1) {
        document.getElementById("spaceships_owned").innerHTML = spaceships + " Quantum Spaceship";
      } else {
        document.getElementById("spaceships_owned").innerHTML = spaceships + " Quantum Spaceships";
      }
    }
    update();
  }
}

function unlok(num) {
  if (num === 0) {
    document.getElementById("dinerBtn").addEventListener("click", diner);
    document.getElementById("dinerBtn").classList.remove("locked");
    document.getElementById("dinerBtn").innerHTML = "Local Diner - $9k";
    document.getElementById("dinerBtn").addEventListener("mouseover", function(){
      this.innerHTML = "$5 per second";
    });
    document.getElementById("dinerBtn").addEventListener("mouseout", function(){
      this.innerHTML = "Local Diner - $9k";
    });
    document.getElementById("maxD").classList.remove("locked");
    document.getElementById("maxD").addEventListener("click",function(){max('d')});
    unlocked = 3;
  }
  if (num == 1) {
    document.getElementById("resturantBtn").addEventListener("click", largeR);
      document.getElementById("resturantBtn").classList.remove("locked");
      document.getElementById("resturantBtn").addEventListener("mouseover", function(){
        this.innerHTML = "$25 per second";
      });
      document.getElementById("resturantBtn").addEventListener("mouseout", function(){
        this.innerHTML = "Large Resturant - $85.7k";
      });
      document.getElementById("resturantBtn").innerHTML = "Resturant - $85.7k";
      document.getElementById("maxR").classList.remove("locked");
      document.getElementById("maxR").addEventListener("click",function(){max('r')});
      unlocked = 4;
  }
  if (num == 2) {
    document.getElementById("smallC").addEventListener("click", sChain);
      document.getElementById("smallC").addEventListener("mouseover", function(){
        this.innerHTML = "$150 per second";
      });
      document.getElementById("smallC").addEventListener("mouseout", function(){
        this.innerHTML = "Small Resturant Chain - $943k";
      });
      document.getElementById("smallC").classList.remove("locked");
      document.getElementById("smallC").innerHTML = "Small Resturant Chain - $943k";
      document.getElementById("maxSC").classList.remove("locked");
      document.getElementById("maxSC").addEventListener("click",function(){max('sC')});
      unlocked = 5;
  }
  if (num == 3) {
    document.getElementById("bigC").innerHTML = "Large Resturant Chain - $10.37m";
      document.getElementById("bigC").addEventListener("click", lChain);
      document.getElementById("bigC").addEventListener("mouseover", function(){
        this.innerHTML = "$800 per second";
      });
      document.getElementById("bigC").addEventListener("mouseout", function(){
        this.innerHTML = "Large Resturant Chain - $10.3m";
      });
      document.getElementById("bigC").classList.remove("locked");
      document.getElementById("maxBC").classList.remove("locked");
      document.getElementById("maxBC").addEventListener("click",function(){max('bC')});
      unlocked = 6;
  }
  if (num == 4) {
    document.getElementById("state").addEventListener("click", state);
    document.getElementById("state").addEventListener("mouseover", function(){
      this.innerHTML = "$4k per second";
    });
    document.getElementById("state").addEventListener("mouseout", function(){
      this.innerHTML = "State - $124m";
    });
    document.getElementById("state").classList.remove("locked");
    document.getElementById("state").innerHTML = "State - $124m";
    document.getElementById("maxS").classList.remove("locked");
    document.getElementById("maxS").addEventListener("click",function(){max('s')});
    unlocked = 7;
  }
  if (num == 5) {
    document.getElementById("btc").addEventListener("click", cryptob);
    document.getElementById("btc").addEventListener("mouseover", function(){
      this.innerHTML = "$30k per second";
    });
    document.getElementById("btc").addEventListener("mouseout", function(){
      this.innerHTML = "Cryptocurrency - $1.62b";
    });
    document.getElementById("btc").classList.remove("locked");
    document.getElementById("btc").innerHTML = "Cryptocurrency - $1.62b";
    document.getElementById("maxC").classList.remove("locked");
    document.getElementById("maxC").addEventListener("click",function(){max('c')});
    unlocked = 8;
  }
  if (num == 6) {
    document.getElementById("monopoly").addEventListener("click", monopoly);
    document.getElementById("monopoly").addEventListener("mouseover", function(){
      this.innerHTML = "$500k per second";
    });
    document.getElementById("monopoly").addEventListener("mouseout", function(){
      this.innerHTML = "Monopoly - $22.7b";
    });
    document.getElementById("monopoly").classList.remove("locked");
    document.getElementById("monopoly").innerHTML = "Monopoly - $22.7b";
    document.getElementById("maxMn").classList.remove("locked");
    document.getElementById("maxMn").addEventListener("click",function(){max('mn')});
    unlocked = 9;
  }
  if (num == 7) {
    document.getElementById("space").addEventListener("click", space);
    document.getElementById("space").addEventListener("mouseover", function(){
      this.innerHTML = "$2m per second";
    });
    document.getElementById("space").addEventListener("mouseout", function(){
      this.innerHTML = "Space Exploration - $340b";
    });
    document.getElementById("space").classList.remove("locked");
    document.getElementById("space").innerHTML = "Space Exploration - $340b";
    document.getElementById("maxSp").classList.remove("locked");
    document.getElementById("maxSp").addEventListener("click",function(){max('sp')});
    unlocked = 10;
  }
  if (num == 8) {
    document.getElementById("planet").addEventListener("click", planet);
    document.getElementById("planet").addEventListener("mouseover", function(){
      this.innerHTML = "$15m per second";
    });
    document.getElementById("planet").addEventListener("mouseout", function(){
      this.innerHTML = "Burger Planet - $5.44t";
    });
    document.getElementById("planet").classList.remove("locked");
    document.getElementById("planet").innerHTML = "Burger Planet - $5.44t";
    document.getElementById("maxP").classList.remove("locked");
    document.getElementById("maxP").addEventListener("click",function(){max('p')});
    unlocked = 11;
  }
  if (num == 9) {
    document.getElementById("galaxy").addEventListener("click", galaxy);
    document.getElementById("galaxy").addEventListener("mouseover", function(){
      this.innerHTML = "$70m per second";
    });
    document.getElementById("galaxy").addEventListener("mouseout", function(){
      this.innerHTML = "Burger Galaxy - $92t";
    });
    document.getElementById("galaxy").classList.remove("locked");
    document.getElementById("galaxy").innerHTML = "Burger Galaxy - $92t";
    document.getElementById("maxG").classList.remove("locked");
    document.getElementById("maxG").addEventListener("click",function(){max('G')});
    unlocked = 12;
  }
  if (num == 10) {
    document.getElementById("time").addEventListener("click", t1me);
    document.getElementById("time").addEventListener("mouseover", function(){
      this.innerHTML = "$200m per second";
    });
    document.getElementById("time").addEventListener("mouseout", function(){
      this.innerHTML = "Time Machine - $1.57Qa";
    });
    document.getElementById("time").classList.remove("locked");
    document.getElementById("time").innerHTML = "Time Machine - $1.57Qa";
    document.getElementById("maxT").classList.remove("locked");
    document.getElementById("maxT").addEventListener("click",function(){max('t')});
    unlocked = 13;
  }
  if (num == 11) {
    document.getElementById("control").addEventListener("click", control);
    document.getElementById("control").addEventListener("mouseover", function(){
      this.innerHTML = "$2b per second";
    });
    document.getElementById("control").addEventListener("mouseout", function(){
      this.innerHTML = "Space-Time Controller - $28.3Qa";
    });
    document.getElementById("control").classList.remove("locked");
    document.getElementById("control").innerHTML = "Space-Time Controller - $28.3Qa";
    document.getElementById("maxSt").classList.remove("locked");
    document.getElementById("maxSt").addEventListener("click",function(){max('sT')});
    unlocked = 14;
  }
  if (num == 12) {
    document.getElementById("quantum").addEventListener("click", spaceship);
    document.getElementById("quantum").addEventListener("mouseover", function(){
      this.innerHTML = "$50b per second";
    });
    document.getElementById("quantum").addEventListener("mouseover", function(){
      this.innerHTML = "Quantum Spaceship - $537Qa";
    });
    document.getElementById("quantum").classList.remove("locked");
    document.getElementById("quantum").innerHTML = "Quantum Spaceship - $537Qa";
    document.getElementById("maxQ").classList.remove("locked");
    document.getElementById("maxQ").addEventListener("click",function(){max("q")});
    unlocked = 15;
  }
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function tick() {
  money += (grandpas * 1);
  moneyT += (grandpas * 1);
  money += (mOuse * 0.20);
  moneyT += (mOuse * 0.20);
  money += (diners * 5);
  moneyT += (diners * 5);
  money += (largeRs * 25);
  moneyT += (largeRs * 25);
  money += (sChains * 150);
  moneyT += (sChains * 150);
  money += (lChains * 800);
  moneyT += (lChains * 800);
  money += (states * 4000);
  moneyT += (states * 4000);
  money += (cryptos * 30000);
  moneyT += (cryptos * 30000);
  money += (monos * 500000);
  moneyT += (monos * 500000);
  money += (spac * 2000000);
  moneyT += (spac * 2000000);
  money += (planets * 15000000);
  moneyT += (planets * 15000000);
  money += (galaxies * 70000000);
  moneyT += (galaxies * 70000000);
  money += (tim3 * 200000000);
  moneyT += (tim3 * 200000000);
  money += (controllers * 2000000000);
  moneyT += (controllers * 2000000000);
  money += (spaceships * 50000000000);
  moneyT += (spaceships * 50000000000);
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
    window.localStorage.setItem("sChains", sChains);
    window.localStorage.setItem("lChains", lChains);
    window.localStorage.setItem("states", states);
    window.localStorage.setItem("cryptos", cryptos);
    window.localStorage.setItem("monos", monos);
    window.localStorage.setItem("spac", spac);
    window.localStorage.setItem("planets", planets);
    window.localStorage.setItem("galaxies", galaxies);
    window.localStorage.setItem("tim3", tim3);
    window.localStorage.setItem("controller", controllers);
    window.localStorage.setItem("spaceships", spaceships);
    window.localStorage.setItem("clickPnum", clickPnum);
    
    saveC = {"money":money, "moneyT":moneyT, "mouse":mOuse, "grandpas":grandpas, "diners":diners, "largeRs":largeRs, "sChains":sChains, "lChains":lChains, "states":states, "cryptos":cryptos, "monos":monos, "spac":spac, "planets":planets, "galaxies":galaxies, "tim3":tim3, "controllers":controllers, "spaceships":spaceships};

    localStorage.setItem("unlocked", unlocked);
    localStorage.setItem("saveT", Date.now());
    if (mps > 0) {
      var he = Math.floor((Math.random() * 30) + 5);
      var si = Math.round(Math.random());
      
      var bu = document.createElement("img");
      bu.src = "burger.png";
      document.getElementById("clickArea").appendChild(bu);
      bu.style.width = "50px";
      bu.style.position = "absolute";
      bu.style.top = he + "vh";
      bu.style.top = "calc(" + he + "vh + 20px)";
      if (si == 1) {
        bu.style.marginLeft = "15vw";
      } else {
        bu.style.marginLeft = "45vw";
      }
      bu.style.opacity = "1";
      bu.style.transition = "opacity 2s";
  
      var te = document.createElement("p");
      te.innerHTML = "+" + short(mps.toFixed(1));
      document.getElementById("clickArea").appendChild(te);
      te.style.width = "50px";
      te.style.position = "absolute";
      te.style.top = "calc(" + he + "vh + 20px)";
      if (si == 1) {
        te.style.marginLeft = "calc(15vw + 45px)";
      } else {
        te.style.marginLeft = "calc(45vw + 45px)";
      }
      te.style.opacity = "1";
      te.style.transition = "opacity 1s";
      setTimeout(function(){te.style.opacity = "0"; bu.style.opacity = "0";},400);
      setTimeout(function(){te.remove(); bu.remove()},1500);
    }
  }
  if (localStorage.money == "NaN" || localStorage.moneyT == "NaN" || money === undefined || moneyT === undefined) {
    localStorage.clear();
    saveN();
    location.reload();
  }
  update();
}

function load() {
  moneyS = "$" + money;
  document.getElementById("burger").addEventListener("click", onCl);
  document.getElementById("mouseBtn").addEventListener("click", mous);
  document.getElementById("grandpaBtn").addEventListener("click", grandpa);
  if (localStorage.grandpas >= 1 || localStorage.money >= 9025) {
    unlok(0);
    if (localStorage.grandpas >= 1) {
      unlok(1);
    }
  }
  
  if (localStorage.diners >= 1 || localStorage.money >= 85730) {
    unlok(1);
    if (localStorage.diners >= 1) {
      unlok(2);
    }
  }
  
  if (localStorage.resturants >= 1 || localStorage.money >= 943030) {
    unlok(2);
    if (localStorage.resturants >= 1) {
      unlok(3);
    }
  }
  if (localStorage.sChains >= 1 || localStorage.money >= 10373000) {
    unlok(3);
    if (localStorage.sChains >= 1) {
      unlok(4);
    }
  }
  
  if (localStorage.states >= 1 || localStorage.money >= 124476000) {
    unlok(4);
    if (localStorage.states >= 1) {
      unlok(5);
    }
  }
  
  if (localStorage.cryptos >= 1 || localStorage.money >= 1618188000) {
    unlok(5);
    if (localStorage.cryptos >= 1) {
      unlok(6);
    }
  }
  
  if (localStorage.monos >= 1 || localStorage.money >= 22654632000) {
    unlok(6);
    if (localStorage.monos >= 1) {
      unlok(7);
    }
  }
  
  if (localStorage.spac >= 1 || localStorage.money >= 339819480000) {
    unlok(7);
    if (localStorage.spac >= 1) {
      unlok(8);
    }
  }
  
  if (localStorage.planets >= 1 || localStorage.money >= 5437111600000) {
    unlok(8);
    if (localStorage.planets >= 1) {
      unlok(9);
    }
  }
  
  if (localStorage.galaxies >= 1 || localStorage.money >= 92430898500000) {
    unlok(9);
    if (localStorage.galaxies >= 1) {
      unlok(10);
    }
  }
  
  if (localStorage.tim3 >= 1 || localStorage.money >= 1571325275000000) {
    unlok(10);
    if (localStorage.tim3 >= 1) {
      unlok(11);
    }
  }
  
  if (localStorage.controller >= 1 || localStorage.money >= 28283854950000000) {
    unlok(11);
    if (localStorage.controller >= 1) {
      unlok(12);
    }
  }
  
  if (localStorage.spaceships >= 1 || localStorage.money >= 537393244200000000) {
    unlok(12);
  }
  
  document.getElementById("clickPu").addEventListener("click", upgradeCp);
  document.getElementById("burger").addEventListener("mousedown", dow);
  document.getElementById("yes").addEventListener("click", saveY);
  document.getElementById("no").addEventListener("click", saveN);
  
  
  document.getElementById("burger").addEventListener("mouseup", function(){
    this.style.width = "35%";
    document.getElementById("burger").style.marginTop = "1vw";
  });
  document.getElementById("mouseBtn").addEventListener("mouseover", function(){
    this.innerHTML = "$0.2 per second";
  });
  document.getElementById("mouseBtn").addEventListener("mouseout", function(){
    this.innerHTML = "Mouse - $100";
  });
  document.getElementById("grandpaBtn").addEventListener("mouseover", function(){
    this.innerHTML = "$1 per second";
  });
  document.getElementById("grandpaBtn").addEventListener("mouseout", function(){
    this.innerHTML = "Grandpa - $950";
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
  window.localStorage.setItem("diners", 0);
  window.localStorage.setItem("largeR", 0);
  window.localStorage.setItem("sChains", 0);
  window.localStorage.setItem("lChains", 0);
  window.localStorage.setItem("states", 0);
  window.localStorage.setItem("cryptos", 0);
  window.localStorage.setItem("monos", 0);
  window.localStorage.setItem("spac", 0);
  window.localStorage.setItem("planets", 0);
  window.localStorage.setItem("galaxies", 0);
  window.localStorage.setItem("tim3", 0);
  window.localStorage.setItem("controller", 0);
  window.localStorage.setItem("spaceships", 0);
  window.localStorage.setItem("moneyT", 0);
  window.localStorage.setItem("unlocked", 2);
  window.localStorage.setItem("clickPnum", 0);
  money = 0;
  moneyS = "$" + money;
  moneyT = 0;
  grandpas = 0;
  mOuse = 0;
  diners = 0;
  largeRs = 0;
  sChains = 0;
  lChains = 0;
  states = 0;
  cryptos = 0;
  monos = 0;
  spac = 0;
  planets = 0;
  galaxies = 0;
  tim3 = 0;
  controllers = 0;
  spaceships = 0;
  mps = 0;
  unlocked = 2;
  clickPprice = 500;
  clickPnum = 0;
  clickPower = 1;
  time = 0;
  startT = false;
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
  if (localStorage.bidV !== undefined) {
    price = localStorage.bidV;
    document.getElementById("spend").innerHTML = short(Math.floor(+price));
  }
  mOuse = +(localStorage.mice);
  if (mOuse == 1) {
    document.getElementById("mice_owned").innerHTML = mOuse + " Cursor";
  }
  else if (mOuse !== 0) {
    document.getElementById("mice_owned").innerHTML = mOuse + " Cursors";
  }
  grandpas = +(localStorage.grandpas);
  if (grandpas == 1) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpa";
    }
  else if (grandpas !== 0) {
      document.getElementById("gramps_owned").innerHTML = grandpas + " Grandpas";
    }
  diners = +(localStorage.diners);
  if (diners == 1) {
    document.getElementById("diners_owned").innerHTML = diners + " Diner";
  }
  else if (diners !== 0) {
    document.getElementById("diners_owned").innerHTML = diners + " Diners";
  }
  if (localStorage.largeR !== undefined) {
    largeRs = +(localStorage.largeR);
    if (largeRs == 1) {
      document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturant";
    }
    else if (largeRs !== 0) {
      document.getElementById("largeR_owned").innerHTML = largeRs + " Large Resturants";
    }
  } else {
    largeRs = 0;
  }
  if (localStorage.sChains !== undefined) {
    sChains = +(localStorage.sChains);
    if (sChains == 1) {
      document.getElementById("sChain_owned").innerHTML = sChains + " Small Resturant Chain";
    }
    else if (sChains !== 0) {
      document.getElementById("sChain_owned").innerHTML = sChains + " Small Resturant Chains";
    }
  } else {
    sChains = 0;
  }
  if (localStorage.lChains !== undefined) {
    lChains = +(localStorage.lChains);
    if (lChains == 1) {
      document.getElementById("lChain_owned").innerHTML = lChains + " Large Resturant Chain";
    }
    else if (lChains !== 0) {
      document.getElementById("lChain_owned").innerHTML = lChains + " Large Resturant Chains";
    }
  } else {
    lChains = 0;
  }
  if (localStorage.states !== undefined) {
    states = +(localStorage.states);
    if (states == 1) {
      document.getElementById("states_owned").innerHTML = states + " State";
    }
    else if (states !== 0) {
      document.getElementById("states_owned").innerHTML = states + " States";
    }
  } else {
    states = 0;
  }
  if (localStorage.cryptos !== undefined) {
    cryptos = +(localStorage.cryptos);
    if (cryptos == 1) {
      document.getElementById("crypto_owned").innerHTML = cryptos + " Cryptocurrency";
    }
    else if (cryptos !== 0) {
      document.getElementById("crypto_owned").innerHTML = cryptos + " Cryptocurrencies";
    }
  } else {
    cryptos = 0;
  }
  if (localStorage.monos !== undefined) {
    monos = +(localStorage.monos);
    if (monos == 1) {
      document.getElementById("mono_owned").innerHTML = monos + " Monopoly";
    }
    else if (monos !== 0) {
      document.getElementById("mono_owned").innerHTML = monos + " Monopolies";
    }
  } else {
    monos = 0;
  }
  if (localStorage.spac !== undefined) {
    spac = +(localStorage.spac);
    if (spac == 1) {
      document.getElementById("space_owned").innerHTML = "Explored space " + spac + " time";
    }
    else if (spac !== 0) {
      document.getElementById("space_owned").innerHTML = "Explored space " + spac + " times";
    }
  } else {
    spac = 0;
  }
  if (localStorage.planets !== undefined) {
    planets = +(localStorage.planets);
    if (planets == 1) {
      document.getElementById("planets_owned").innerHTML = planets + " Planet";
    }
    else if (planets !== 0) {
      document.getElementById("planets_owned").innerHTML = planets + " Planets";
    }
  } else {
    planets = 0;
  }
  if (localStorage.galaxies !== undefined) {
    galaxies = +(localStorage.galaxies);
    if (galaxies == 1) {
      document.getElementById("galaxies_owned").innerHTML = galaxies + " Galaxy";
    }
    else if (galaxies !== 0) {
      document.getElementById("galaxies_owned").innerHTML = galaxies + " Galaxies";
    }
  } else {
    galaxies = 0;
  }
  if (localStorage.tim3 !== undefined) {
    tim3 = +(localStorage.tim3);
    if (tim3 == 1) {
      document.getElementById("time_owned").innerHTML = tim3 + " Time Machine";
    }
    else if (tim3 !== 0) {
      document.getElementById("time_owned").innerHTML = tim3 + " Time Machines";
    }
  } else {
    tim3 = 0;
  }
  if (localStorage.controller !== undefined) {
    controllers = +(localStorage.controller);
    if (controllers == 1) {
      document.getElementById("controller_owned").innerHTML = controllers + " Space-Time Controller";
    }
    else if (controllers !== 0) {
      document.getElementById("controller_owned").innerHTML = controllers + " Space-Time Controllers";
    }
  } else {
    controllers = 0;
  }
  if (localStorage.spaceships !== undefined) {
    spaceships = +(localStorage.spaceships);
    if (spaceships == 1) {
      document.getElementById("spaceships_owned").innerHTML = spaceships + " Quantum Spaceship";
    }
    else if (spaceships !== 0) {
      document.getElementById("controller_owned").innerHTML = spaceships + " Quantum Spaceships";
    }
  } else {
    spaceships = 0;
  }
  
  
  moneyT = +(localStorage.moneyT);
  clickPnum = +(localStorage.clickPnum);
  if (clickPnum == 1) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      clickPower = 2;
      clickPprice = 4000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 2) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      clickPower = 3;
      clickPprice = 8000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 3) {
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      clickPower = 4;
      clickPprice = 16000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 4) {
      document.getElementById("cP4").style.fill = "rgb(100,120,120)";
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      clickPower = 5;
      clickPprice = 32000;
      document.getElementById("clickPu").innerHTML = "<u>Upgrade click power - $" + clickPprice + "</u>";
  }
  else if (clickPnum == 5) {
      document.getElementById("cP5").style.fill = "rgb(100,120,120)";
      document.getElementById("cP4").style.fill = "rgb(100,120,120)";
      document.getElementById("cP1").style.fill = "rgb(100,120,120)";
      document.getElementById("cP2").style.fill = "rgb(100,120,120)";
      document.getElementById("cP3").style.fill = "rgb(100,120,120)";
      clickPower = 6;
      clickPprice = 64000;
      document.getElementById("clickPu").innerHTML = "<u>Maximum click power reached!!</u>";
    }
  document.getElementById("notification").style.display = "none";
  if (remembe.checked === true) {
    localStorage.setItem("remember", "yes");
  }
  unlocked = localStorage.unlocked;
  for (var i = 0; i < (unlocked - 2); i++) {
    unlok(i);
  }
  startT = true;
  var oldT = localStorage.saveT;
  var diff = Date.now() - oldT;
  var sec = Math.floor(diff / 1000);
  var offlineMoney = 0;
  if (largeRs !== undefined && largeRs !== null) {
      offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec) + ((largeRs * 25) * sec) + ((sChains * 150) * sec) + ((lChains * 800) * sec) + ((states * 4000) * sec) + ((cryptos * 30000) * sec) + ((monos * 500000) * sec) + ((spac * 2000000) * sec) + ((planets * 15000000) * sec) + ((galaxies * 70000000) * sec) + ((tim3 * 200000000) * sec) + ((controllers * 2000000000) * sec) + ((spaceships * 50000000000) * sec);
    } else {
      offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec) + ((largeRs * 25) * sec) + ((sChains * 150) * sec) + ((lChains * 800) * sec) + ((states * 4000) * sec) + ((cryptos * 30000) * sec) + ((monos * 500000) * sec) + ((spac * 2000000) * sec) + ((planets * 15000000) * sec) + ((galaxies * 70000000) * sec) + ((tim3 * 200000000) * sec) + ((controllers * 2000000000) * sec) + ((spaceships * 50000000000) * sec);
    }
  if (sec >= 60 && sec <= 14400) {
    alert("You earned " + short(offlineMoney) + " dollars while you were away!");
    money += offlineMoney;
    moneyT += offlineMoney;
  } else if (sec >= 14400) {
    sec = 14400;
    if (largeRs !== undefined && largeRs !== null) {
      offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec) + ((largeRs * 25) * sec) + ((sChains * 150) * sec) + ((lChains * 800) * sec) + ((states * 4000) * sec) + ((cryptos * 30000) * sec) + ((monos * 500000) * sec) + ((spac * 2000000) * sec) + ((planets * 15000000) * sec) + ((galaxies * 70000000) * sec) + ((tim3 * 200000000) * sec) + ((controllers * 2000000000) * sec) + ((spaceships * 50000000000) * sec);
    } else {
      offlineMoney = (grandpas * sec) + ((mOuse * 0.2) * sec) + ((diners * 5) * sec) + ((largeRs * 25) * sec) + ((sChains * 150) * sec) + ((lChains * 800) * sec) + ((states * 4000) * sec) + ((cryptos * 30000) * sec) + ((monos * 500000) * sec) + ((spac * 2000000) * sec) + ((planets * 15000000) * sec) + ((galaxies * 70000000) * sec) + ((tim3 * 200000000) * sec) + ((controllers * 2000000000) * sec) + ((spaceships * 50000000000) * sec);
    }
    alert("You earned " + short(Math.floor(offlineMoney)) + " dollars while you were away!");
    money += offlineMoney;
    moneyT += offlineMoney;
  }
  update();
}

function dow() {
    document.getElementById("burger").style.width = "34%";
    document.getElementById("burger").style.marginTop = "1.2vw";
  }

function update() {
  document.querySelectorAll(".money").innerHTML = moneyS;
  if (bid.value === "" || bid.value === undefined || bid.value == "NaN") {
    bid.value = "100";
  }
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
  for (var i = 0; i < money.toString().length; i++) {
    if (money.toString().charAt(i) == ".") {
      money = +(money.toFixed(1));
    }
  }
  document.getElementById("total_money").innerHTML = "You have made " + short(Math.floor(moneyT)) + " dollars in total.";
  mps = ((mOuse * 0.2) + grandpas + (diners * 5) + (largeRs * 25) + (sChains * 150) + (lChains * 800) + (states * 4000)) + (cryptos * 30000) + (monos * 500000) + (spac * 2000000) + (planets * 15000000) + (galaxies * 70000000) + (tim3 * 200000000) + (controllers * 2000000000) + (spaceships * 50000000000);
  document.getElementById("dps").innerHTML = "<i>" + short(mps.toFixed(1)) + " MPS</i>";
  
}

function spin() {
  if (money >= +price) {
    money -= +price;
    var o = price;
    price *= 1.75;
    price = Math.round(price);
    localStorage.bidV = price;
    document.getElementById("spend").innerHTML = short(price);
    let result1 = Math.floor(Math.random() * 10);
    let result2 = Math.floor(Math.random() * 10);
    let result3 = Math.floor(Math.random() * 10);
  
    let combination = `${result1}${result2}${result3}`;
    let prize = prizes[combination];
    
    for (var i = 0; i < 20; i++) {
      setTimeout(function(){
        document.getElementById("slot1").innerHTML = Math.floor(Math.random() * 10);
        document.getElementById("slot2").innerHTML = Math.floor(Math.random() * 10);
        document.getElementById("slot3").innerHTML = Math.floor(Math.random() * 10);
      },(i * 20));
    }
    setTimeout(function(){
      document.getElementById("slot1").innerHTML = result1;
      document.getElementById("slot2").innerHTML = result2;
      document.getElementById("slot3").innerHTML = result3;
      if (prize !== undefined) {
        if (prize == "777") {
          spaceships += controllers;
          controllers += tim3;
          tim3 += galaxies;
          galaxies += planets;
          planets += spac;
          spac += monos;
          monos += cryptos;
          cryptos += states;
          states += lChains;
          lChains += sChains;
          sChains += largeRs;
          largeRs += diners;
          diners += grandpas;
          grandpas += mOuse;
          update();
          document.getElementById("result").innerHTML = "JACKPOT!!! All of your bought items got moved up!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
        if (prize == "222") {
          money *= 2;
          document.getElementById("result").innerHTML = "Money DOUBLED!!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
        if (prize == "000") {
          clearInterval(tic);
          tic = setInterval(tick, 200);
          setTimeout(function(){
            clearInterval(tic);
            tic = setInterval(tick, 1000);
          },60000);
          document.getElementById("result").innerHTML = "Tick speed set to 0.2 SECONDS for a WHOLE MINUTE!!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
        if (prize == "111") {
          money += Math.round(money * 1.11);
          document.getElementById("result").innerHTML = "Money multiplied by 2.11!!!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
        if (prize == "333") {
          var old = clickPower;
          clickPower *= 10000;
          setTimeout(function(){
            clickPower = old;
          },60000);
          document.getElementById("result").innerHTML = "Click power is now 10000!!! Lasts for a minute!!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
        if (prize == "444") {
          document.getElementById("burger").addEventListener("click",function(){
            clickPower *= 2;
          });
          setTimeout(function(){
            document.getElementById("burger").removeEventListener("click",function(){
              clickPower *= 2;
            });
          },60000);
          document.getElementById("result").innerHTML = "Every click DOUBLES your click power for a full minute!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
        if (prize == "666") {
          let p = Math.random();
          if (p <= 0.5) {
            window.location = "chrome://hang";
          } else {
            if (p <= 0.75) {
              window.location = "chrome://kill";
            } else {
              window.location = "chrome://restart";
            }
          }
        }
      } else {
        if (result1 == result2 || result3 == result2 || result1 == result3) {
          money += o * 1.1;
          document.getElementById("result").innerHTML = "You get your money back, plus a little bit more!!";
          setTimeout(function(){
            document.getElementById("result").innerHTML = "Test your luck!!";
          }, 3000);
        }
      }
    },450);
  }
}

function onCl() {
  money += clickPower;
  moneyT += clickPower;
  var lil = document.createElement("img");
  var li = document.createElement("p");
  var r = (Math.floor(Math.random() * 40) + 1);
  lil.src = "burger.png";
  lil.style.position = "absolute";
  lil.style.width = "50px";
  lil.style.top = r + "vh";
  lil.style.cursor = "default";
  li.style.position = "absolute";
  li.style.width = "9px";
  li.style.top = r + "vh";
  li.style.cursor = "default";
  li.innerHTML = "+" + clickPower;
  r = (Math.floor(Math.random() * 2) + 1);
  if (r == 1) {
    lil.style.left = "15vw";
    li.style.left = "calc(15vw + 45px)";
  } else {
    lil.style.left = "45vw";
    li.style.left = "48vw";
  }
  lil.style.transition = "opacity 2s";
  li.style.transition = "opacity 2s";
  setTimeout(function(){
    lil.style.opacity = "0%";
    li.style.opacity = "0%";
  }, 1);
  setTimeout(function(){
    lil.remove();
    li.remove();
  }, 2000);
  document.getElementById("clickArea").appendChild(lil);
  document.getElementById("clickArea").appendChild(li);
  moneyS = "$" + Math.floor(money);
  update();
}

function litle(tr) {
  var lil = document.createElement("img");
  var li = document.createElement("p");
  var r = (Math.floor(Math.random() * 40) + 1);
  console.log(r);
  lil.src = "burger.png";
  lil.style.position = "absolute";
  lil.style.width = "50px";
  lil.style.top = r + "vh";
  lil.style.cursor = "default";
  li.style.position = "absolute";
  li.style.width = "9px";
  li.style.top = r + "vh";
  li.style.cursor = "default";
  if (tr == 1) {
    li.innerHTML = "+" + clickPower;
  } else if (tr == 2) {
    li.innerHTML = "+" + mps;
  }
  
  r = (Math.floor(Math.random() * 2) + 1);
  if (r == 1) {
    lil.style.left = "21vw";
    li.style.left = "24vw";
  } else {
    lil.style.left = "50vw";
    li.style.left = "53vw";
  }
  lil.style.transition = "opacity 2s";
  li.style.transition = "opacity 2s";
  setTimeout(function(){
    lil.style.opacity = "0%";
    li.style.opacity = "0%";
  }, 1);
  setTimeout(function(){
    lil.remove();
    li.remove();
  }, 2000);
  document.getElementById("clickArea").appendChild(lil);
  document.getElementById("clickArea").appendChild(li);
}

function short(val) {
  if (val >= 1000 && val < 1000000) {
    return((val / 1000).toFixed(2) + "k");
  } else if (val >= 100000 && val < 1000000000) {
    return((val / 1000000).toFixed(2) + "m");
  } else if (val >= 100000000 && val < 1000000000000) {
    return((val / 1000000000).toFixed(2) + "b");
  } else if (val >= 100000000000 && val < 1000000000000000) {
    return((val / 1000000000000).toFixed(2) + "t");
  } else if (val >= 100000000000000 && val < 1000000000000000000) {
    return((val / 1000000000000000).toFixed(2) + "Qa");
  } else if (val >= 100000000000000000 && val < 1000000000000000000000) {
    return((val / 1000000000000000000).toFixed(2) + "Qi");
  } else if (val >= 100000000000000000000 && val < 1000000000000000000000000) {
    return((val / 1000000000000000000000).toFixed(2) + "Sx");
  } else if (val >= 100000000000000000000000 && val < 1000000000000000000000000000) {
    return((val / 1000000000000000000000000).toFixed(2) + "Sp");
  }
  else if (val < 1000 || val > 900000000000000000000000000) {
    return(val);
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
    rando = Math.floor(Math.random() * 5) + 1
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
    rando = Math.floor(Math.random() * 5) + 1
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
        document.getElementById("num3d").innerHTML = "1% faster tick speed";
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "2% faster tick speed";
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "3% faster tick speed";
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "4.5% faster tick speed";
      }
    }
    if (rando == 4) {
      document.getElementById("num3t").innerHTML = "Mustard";
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "-0.5% upgrade prices";
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "-1% upgrade prices";
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "-1.75% upgrade prices";
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "-2.5% upgrade prices";
      }
    }
    if (rando == 5) {
      document.getElementById("num3t").innerHTML = "Pickles";
      if (r == "c") {
        document.getElementById("num3d").innerHTML = "+30 minutes of offline time";
      } else if (r == "r") {
        document.getElementById("num3d").innerHTML = "+45 minutes of offline time";
      } else if (r == "e") {
        document.getElementById("num3d").innerHTML = "+1.5 hours of offline time";
      } else if (r == "l") {
        document.getElementById("num3d").innerHTML = "+3 hours of offline time";
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
