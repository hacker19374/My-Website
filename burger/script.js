var timer = setInterval(autoClick, 1000);

var dollarsVis = 0;

var dollarsReal = 0;

var clVal = 1;

var AcVal = 0;

var AcPr = 50;

var ClPr = 50;

var z = 0;

function clearSave() {
    localStorage.clear();
}

function load() {
    dollarsReal = +localStorage.moneySave;
    clVal = +localStorage.clValSave;
    AcVal = +localStorage.AcValSave;
    AcPr = +localStorage.AcPrSave;
    ClPr = +localStorage.ClPrSave;
}

function update() {
  if (dollarsReal > 0 && dollarsReal < 9999) {
    dollarsVis = dollarsReal;
  } 
  else {
    if (dollarsReal > 9999 && dollarsReal < 999999) {
      dollarsVis = Math.round(dollarsReal / 10) / 100 + "K";
    } 
    else {
      if (dollarsReal > 999999 && dollarsReal < 999999999) {
        dollarsVis = Math.round(dollarsReal / 10000) / 100 + "M";
      } 
      else {
        if (dollarsReal > 999999999 && dollarsReal < 999999999999) {
          dollarsVis = Math.round(dollarsReal / 10000000) / 100 + "B";
        }
        else {
          if (dollarsReal > 999999999999 && dollarsReal < 999999999999999) {
            dollarsVis = Math.round(dollarsReal / 10000000000) / 100 + "T";
          }
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
    localStorage.moneySave = +dollarsReal;
    localStorage.clValSave = +clVal;
    localStorage.AcValSave = +AcVal;
    localStorage.AcPrSave = +AcPr;
    localStorage.ClPrSave = +ClPr;
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
