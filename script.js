var i;
var clicks = 0;
var myVar;
var audio;
var id;
var id2;
var words = ["You can't hide, you can't run, i will hunt you, i will kill you, and you can't do anything.","LOOK BEHIND YOU, I WILL BE IN YOUR HOUSE AT 3AM UNDER YOUR BED. HOPE YOU SLEEP BECAUSE I'M GONNA WATCH YOU."]
//Change intro text opacity for cool effect
function effectText() {
 i = document.getElementById("text1");
 i.style.opacity = document.getElementById("text1").style.opacity - 0.1;
if (i.style.opacity == 0.0) {
 myVar = clearInterval(myVar);
}
}
//When game starts
function play() {
//It sets the annoucements comments to null to solve a problem with the text position
 switchVisual();
 switchVisual();
 document.getElementById("div1").style.visibility = "hidden";
 document.getElementById("body").style.backgroundColor = "white";
//Check device orentation
if(window.innerHeight < window.innerWidth) {
 document.getElementById("div3").style.visibility = "visible";
 document.getElementById("turn").style.visibility = "hidden";
 document.getElementById("div2").style.visibility = "visible";
 audio = new Audio("https://www.myinstants.com/media/sounds/ghostly-breath.mp3").play();
 //Run opacity effect
function triggerEffect() {
 myVar = setInterval(effectText, 200);
}
 myVar = setTimeout(triggerEffect, 5000);
} else {
 document.getElementById("turn").style.visibility = "visible";
//Waits unitil the player turned the device
function checkOrentation() {
if(window.innerHeight < window.innerWidth){
 myVar = clearInterval(myVar);
//restart when turned 
 restart();
}
}
myVar = setInterval(checkOrentation, 100);
}
}
//Pause click button
var pauseButton = 0;
function wait() {
 document.getElementById("button").src = "https://svgshare.com/i/cMp.svg";
}
function pause() {
 pauseButton = 0;
}
//When button clicked
function buttonClicked() {
if (pauseButton == 0) {
 clicks++;
 document.getElementById("text2").innerHTML = "<b>" + clicks + "</b>";
 audio = new Audio("https://www.myinstants.com/media/sounds/button-click.mp3").play();
 pauseButton = 1;
 document.getElementById("button").src = "https://svgshare.com/i/cKx.svg";
 myVar = setTimeout(wait,100);
 myVar = setTimeout(pause,100);
}
}
function switchVisual() {
i = document.getElementById("div3");
if (i.style.visibility == "visible") {
document.getElementById("div3").style.visibility = "hidden";
document.getElementById("button").style.visibility = "hidden";
document.getElementById("thing").style.visibility = "hidden";
document.getElementById("div4").style.visibility = "visible";
} else {
document.getElementById("div3").style.visibility = "visible";
document.getElementById("button").style.visibility = "visible";
document.getElementById("thing").style.visibility = "visible";
document.getElementById("div4").style.visibility = "hidden";
}
}
//Restarts game (it dosn't start from the intro page)
function restart() {
play();
}
//Trigger jumpscare
function jumpscareEffect() {
i = document.getElementById("paulJumpscare");
id2 = id2 - 5;
id = id + 20;
i.style.width = id + "px";
i.style.height = id + "px";
i.style.left = id2 + "px";
if (i.style.height == 1000 + "px") {
myVar = clearInterval(myVar);
i.src = "https://i.ibb.co/7NhzHNw/Paul-Face2.png"
myVar = setTimeout(hideJumpscarePaul, 800);
function hideJumpscarePaul() {
i.style.visibility = "hidden";
i.style.width = "100px";
i.style.height = "100px";
document.getElementById("body").style.backgroundColor = "white";
}

}
}
function jumpscarePaul() {
document.getElementById("body").style.backgroundColor = "red";
audio = new Audio("https://www.mboxdrive.com/Scream.mp3").play();
id2 = 250;
id = 100;
i = document.getElementById("paulJumpscare");
i.style.visibility = "visible";
myVar = setInterval(jumpscareEffect, 0);
}

var stop = 0;

function static() {
document.getElementById("static").style.visibility = "visible";
var audio2 = new Audio("https://www.myinstants.com/media/sounds/tv-static-01_IOJDWir.mp3").play();
}

function hideStatic() {
document.getElementById("static").style.visibility = "hidden"
}

function detect() {
if (clicks > 9 && stop == 0) {
myVar = new Audio("https://www.myinstants.com/media/sounds/annihilation-the-alien.mp3").play();
setTimeout(static, 1000);
setTimeout(hideStatic, 4000);
stop = 1;
}
}

setTimeout(static, 1000);
setTimeout(hideStatic, 4000);

setInterval(detect, 0);
