//Alerts warning
setTimeout(alert2, 2000);
document.getElementById("div1").style.visibility = "hidden";
function alert2() {
alert("⚠️ WARNING: This game is an horror game and can scare kids or people that are not for horror.\n\n This game is marked NFE (Not for everyone), if you're not for horror please leave. \n\n For people that are sure what they're playing, thanks for playing this game.");
document.getElementById("div1").style.visibility = "visible";
document.getElementById("body").style.backgroundImage = "url('')";
}

