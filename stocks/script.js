var money = 10;
var percent = 0.01;
var percPrice = 50;


function onCl() {
 money = money + (money * percent);
 update() 
}
function update() {
  document.getElementById("money").innerHTML = "$" + money.toFixed(2);
}
function buyUpPercent() {
  if (money >= percPrice) { 
    money -= percPrice;
			 percPrice += (percPrice * (1/3)).toFixed(0)
			 percent += 0.1;
  }
}
function autoStock() {
	
}
