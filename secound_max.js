
var readlineSync=require("readline-sync");
var a= readlineSync.questionInt("enter your num=");
var b= readlineSync.questionInt("enter your num=");
var c= readlineSync.questionInt("enter your num=");


if (a>b && a<c){
    console.log(a,"2max");
}
    
else if ( a<b && a>c){
    console.log(a,"2max");
}
else if (b>c && b<a){
    console.log(b,"2max");
}
   
else if (b<c && b>a){
    console.log(b,"2max");
}
    
else if ( c<a && c>b){
    console.log(c,"2max");
}
else if( c>a && c<b){
    console.log(c,"2max");
}
else{
    console.log("all are equal");
}

