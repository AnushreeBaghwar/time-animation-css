document.getElementById("btn").addEventListener('click',display);
function display() {
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds()
var ms = d.getMilliseconds();
var elem = document.getElementById("content"); 
mir =""
if (h>12 && h!=0) {
    h-=12
    mir="PM"
} else {
    mir="AM"
}
var show = h + ":" + m + ":" + s + ":" + ms + " " + mir

elem.innerText=show;
setTimeout(display,1)
}
