var readlineSync = require("readline-sync");
var a = readlineSync.questionInt("enter any num--");
var b = readlineSync.questionInt("enter any num--");
var c = readlineSync.questionInt("enter any num--");

if (a>b){
    if (a>c){
        console.log(a,"a is max")
    }
    else if (a<c){
        console.log(c,"c is max")
    }
}
else if (b>a){
    if (b>c){
        console.log(b,"b is max")
    }
    else if(b<c){
        console.log(c,"c is max")
    }
}