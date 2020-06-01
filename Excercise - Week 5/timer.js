function sample(){
	alert('Hello form sample.js');
}
function timerFunc() {
		var now = new Date();
		var hour = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();
		document.getElementById("clock").innerHTML=""+ hour +":"+ min+":"+sec;
}
setInterval(timerFunc, 1000);
// for(i=1;i<=20;i++){
// 	var x=Math.random();
// 	x=10*x+1;
// 	x=Math.floor(x);
// 	document.write("Random number ("+i+") in range"+"1..10-->"+x+"<br/>");
// }