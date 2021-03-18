var timer = setInterval(autoClick, 1000);

var dollarsVis = 0;

var dollarsReal = 0;

var clVal = 1;

var AcVal = 0;

var AcPr = 50;

var ClPr = 50;

var z = 0;

function load() {
  if(localStorage.moneySave > 0 && localStorage.moneySave != "") {
    dollarsReal = +localStorage.moneySave;
  }
  if(localStorage.clValSave > 0 && localStorage.clValSave != NaN) {
    clVal = +localStorage.clValSave;
  }
  if(localStorage.AcValSave > 0 && localStorage.AcValSave != NaN) {
    AcVal = +localStorage.AcValSave;
  }
  if(localStorage.AcPrSave > 0 && localStorage.AcPrSave != NaN) {
    AcPr = +localStorage.AcPrSave;
  }
  if(localStorage.ClPrSave > 0 && localStorage.ClPrSave != NaN) {
    ClPr = +localStorage.ClPrSave;
  }
}

function update() {
  if (dollarsReal > 0 && dollarsReal < 9999) {
    dollarsVis = dollarsReal;
  } else {
    if (dollarsReal > 9999 && dollarsReal < 999999) {
      dollarsVis = Math.round(dollarsReal / 10) / 100 + "K";
    } else {
      if (dollarsReal > 999999 && dollarsReal < 999999999) {
        dollarsVis = Math.round(dollarsReal / 10000) / 100 + "M";
      } else {
        if (dollarsReal > 999999999 && dollarsReal < 999999999999) {
          dollarsVis = Math.round(dollarsReal / 10000000) / 100 + "B";
        }
      }
    }
  }
  document.getElementById("p").innerHTML = "$" + dollarsVis;
  document.getElementById("prices").innerHTML =
    "Autoclick Value Price: $" +
    AcPr +
    " <br>Autoclick Speed Price: $" +
    AcPr * 2 +
    "<br>Click Value Price: $" +
    ClPr;
}

function saveMoney() {
  if(dollarsReal >= localStorage.moneySave || localStorage.moneySave == "" || localStorage.moneySave === undefined) {
    localStorage.moneySave = +dollarsReal;
  }
   if(clVal >= localStorage.clValSave || localStorage.clValSave == "" || localStorage.clValSave === undefined) {
    localStorage.clValSave = +clVal;
  }
   if(AcVal >= localStorage.AcValSave || localStorage.AcValSave == "" || localStorage.AcValSave === undefined) {
    localStorage.AcValSave = +AcVal;
  }
   if(AcPr >= localStorage.AcPrSave || localStorage.AcPrSave == "" || localStorage.AcPrSave === undefined) {
    localStorage.AcPrSave = +AcPr;
  }
   if(ClPr >= localStorage.ClPrSave || localStorage.ClPrSave == "" || localStorage.ClPrSave === undefined) {
    localStorage.ClPrSave = +ClPr;
  }
}

function onCl() {
  dollarsReal = dollarsReal + clVal;
  update();
}

function autoClick() {
  dollarsReal = dollarsReal + AcVal;
  update();
}

function upgradeAc() {
  if (dollarsReal >= AcPr) {
    AcVal = AcVal + 1;
    dollarsReal = dollarsReal - AcPr;
    AcPr = AcPr * 2;
    update();
  }
}

function upgradeAcSpeed() {
  if (dollarsReal >= AcPr * 2) {
    if (z === 0) {
      clearInterval(timer);
      timer = setInterval(autoClick, 500);
      dollarsReal = dollarsReal - AcPr * 2;
      z++;
      AcPr = AcPr * 2;
      update();
    } else {
      if (z == 1) {
        clearInterval(timer);
        timer = setInterval(autoClick, 250);
        dollarsReal = dollarsReal - AcPr * 2;
        AcPr = AcPr * 2;
        z++;
        update();
      } else {
        if (z == 2) {
          clearInterval(timer);
          timer = setInterval(autoClick, 125);
          dollarsReal = dollarsReal - AcPr * 2;
          AcPr = AcPr * 2;
          z++;
          update();
        } else {
          if (z == 3) {
            clearInterval(timer);
            timer = setInterval(autoClick, 62);
            dollarsReal = dollarsReal - AcPr * 2;
            AcPr = AcPr * 2;
            z++;
            update();
          } else {
            if (z == 4) {
              clearInterval(timer);
              timer = setInterval(autoClick, 31);
              dollarsReal = dollarsReal - AcPr * 2;
              AcPr = AcPr * 2;
              z++;
              update();
            } else {
              if (z == 5) {
                clearInterval(timer);
                timer = setInterval(autoClick, 16);
                dollarsReal = dollarsReal - AcPr * 2;
                AcPr = AcPr * 2;
                z++;
                update();
              } else {
                if (z == 6) {
                  clearInterval(timer);
                  timer = setInterval(autoClick, 8);
                  dollarsReal = dollarsReal - AcPr * 2;
                  AcPr = AcPr * 2;
                  z++;
                  update();
                } else {
                  alert("You cannot buy this, it is at the max level.");
                }
              }
            }
          }
        }
      }
    }
  }
  update();
}

function upgradeCl() {
  if (dollarsReal >= ClPr) {
    clVal++;
    dollarsReal = dollarsReal - ClPr;
    ClPr = ClPr * 2;
    update();
  }
}

update();
