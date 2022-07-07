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



var a =14
var b=84
var c =22
if (a>b && b>c && a>c){
    console.log("max number a" ,a )
}
else if(b>a && b>c){
    console.log("max number b",b)
}
else if(c>a && c>b){
    console.log("max number c",c)
    
    
    
    
    
 var a = 9
var b = 8
a = a + b
b = a - b
a = a - b

console.log("a",a,"b",b)
}
