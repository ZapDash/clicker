//set databasecount
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update html count to be database count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//add one to database count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1))
	update()
}

//reset database count
function reset() {
	if (confirm("Are you sure you want to clear your clicks?")) {
    	localStorage.setItem("count",0)
		update()
	}
}