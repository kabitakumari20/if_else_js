var readlineSync = require("readline-sync");
var a = readlineSync.questionInt("enter any num--");
var b = readlineSync.questionInt("enter any num--");
var c = readlineSync.questionInt("enter any num--");

if (a>b && a>c){
    console.log(a,"a grater than both of them ")
}
else if (b>a && b>c){
    console.log(b,"b is grater than both of them")
}
else{
    console.log(c,"c is grather than both of them")
}



