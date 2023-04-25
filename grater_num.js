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




var rlSync =require('readline-sync')
var a =rlSync.questionInt('what is your a---:')
var b =rlSync.questionInt('what is your b---:')
var c =rlSync.questionInt('what is your c---:')
if(a>b){
    if(a>c){
        console.log(a,'a bada hai')
    }
}
else if(b>c){
    if(b>a){
        console.log(b,'b bada hai')
    }
}
else {
    console.log(c,'c bada hai')
}

