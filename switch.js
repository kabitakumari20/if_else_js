var readlineSync=require("readline-sync")
var num1=readlineSync.questionInt("enter frist  num1=")
var num2=readlineSync.questionInt("enter secound num2=")
var num3=readlineSync.questionInt("enter secound num3=")
// var num2=readlineSync.question("enter third num=")
switch(true){
    case num1>num2 && num1>num3:
        console.log(num1,"num1 is max num")
        break
    case num2>num1 && num2>num3:
        console.log(num2,"num2 max")
        break
    case num3>num1 && num3>num2:
        console.log(num3,"num3 max")
        break
    default:
        console.log("nothing")
        
}
