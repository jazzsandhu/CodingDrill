window.onload = function(){


var speedlimit = prompt("Speed Limit");
console.log(speedlimit);
if(speedlimit != null){
    var recordedspeed = prompt("Actual recorded speed");
    console.log(recordedspeed);
}
let sl = parseInt(speedlimit);
let sr = parseInt(recordedspeed);
var msg = document.getElementById("msg");
if(sr <sl){
    msg.innerText = "Congratulations, you are within the speed limit!";
}else if(sr > sl){
    if(sr - sl <= 20){
        msg.innerText = "You are speeding and your fine is $100";
    }else if(sr -sl <=30 && sr- sl >= 21){
        msg.innerText = "You are speeding and your fine is $270";
    }else if(sr - sl >= 31){
        msg.innerText = "You are speeding and your fine is $500";
    }
}



}