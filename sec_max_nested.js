var readlineSync=require("readline-sync")
var a=readlineSync.questionInt("enter the num=")
var b=readlineSync.questionInt("enter the num=")
var c=readlineSync.questionInt("entre the num=")

if (a>b){
    if (b<c){
        console.log(a,"is sec_max======")
    }
    else if (b>c){
        console.log(b," is sec_max(((((((((")
    }
}
else if (b>a){
    if (a<c){
        
        console.log(b," is sec_max--------------")
    }
    else if (b>c){
        console.log(a," is sec_max000000000")
    }
}
else{
    console.log(c," is max**********")
}