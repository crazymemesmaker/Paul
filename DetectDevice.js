var block;
function block() {
alert("You can't play this game in mobile without desktop site. Go and enable desktop site and try again.");
document.write("Put desktop site and try again to play. If you don't know how to put it just go see a tutorial. Desktop site is obligatory to play the game better.");
block = "block";
}
//Detects device
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        block(); //Tablet
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        block(); //Phone
    } else {
     //Computer
    }
