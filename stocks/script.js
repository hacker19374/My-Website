var money = 10;
var percent = 0.01;

function onCl() {
 money = money + (money * percent);
 update() 
}
function update() {
  document.getElementById("money").innerHTML = "$" + money. toFixed(2);
}
