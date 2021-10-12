var readlineSync = require("readline-sync");
var time = readlineSync.questionInt("enter the your time=");


if (time >= 5.00 && time <6.00) {
 console.log("sleep well");
}
else if (time >= 6.00 && time <7.00) {
 console.log("Morning Exercise");
}
else if(time >=7.00 && time <8.30){
 console.log("Breakfast");
}
else if ( time > 8.30 && time <12.30){
 console.log("coding");
}
else if (time>12.30 && time<14.00){
    console.log("lunch break");
}
else if (time>=14.00 && time<17.00){
    console.log("coding");
}
else if (time>=17.00 && time<18.00){
    console.log("evening break");
}
else if (time>=18.00 && time<19.00){
    console.log("english");
}
else if (time>=19.00 && time <20.00){
    console.log("recration");
}
else{
    console.log("dinner");
}

