var readlinSync=require("readline-sync");
var num=readlinSync.questionInt("Enter the day:-");
switch(num){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thresday")
        break
    case 5:
        console.log("Fraiday")
        break
    case 6:
        console.log("Saterday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("nothing")
}
