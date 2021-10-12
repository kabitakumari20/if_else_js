var readlineSync = require("readline-sync");
var time =Number(readlineSync.question("enter the time="))

if(time>=5){
    if(time<=6){
        console.log("sleep");
    }
    
    else if (time<=7){
            console.log("mornig exercise")
        }
    
    else if (time<=8.30){
            console.log("breakfast")
        }

    else if (time<=12.30){
            console.log("frist coding")
        }
    else if (time<=14){
            console.log("lunch")
        }
    else if (time<=17){
            console.log("secoding coding")
        }
    else if (time<=18){
            console.log("evening break")
        }
    else if (time<=19){
            console.log("english")
        }
    else if (time<20){
            console.log("recration")
        }
    else if (time<=20){
            console.log("dinner")
        }
    
}




