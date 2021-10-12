var readlineSync=require("readline-sync");
var num=readlineSync.question("enter the num=")

if (num%3==0 && num%7==0){
    console.log("navgurukul")
}
else if ( num%3==0){
    console.log("nav")
}
else if (num%7==0){
    console.log("gurukul")
}
else{
    console.log(num)
}