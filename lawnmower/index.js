var money = 0
			var moneyAll = 0
			var clickValue = 1
			var autoClickValue = 0
			var clickPrice = 50
			var autoClickPrice = 50
			var timer1 = setInterval(update, 5)
			var timer2 = setInterval(autoClick, 1000)
			
			
			function onCl() {
				money = money + clickValue;
				moneyAll = moneyAll + clickValue;
			}
			function update() {
				document.getElementById("money").innerHTML = "Dollars: " + money
				document.getElementById("total").innerHTML = "Total dollars earned: " + moneyAll
				
			}
			function hireWorker() {
				
			}
			function autoClick() {
				money = money + autoClickValue
				moneyAll += autoClickValue
			}
