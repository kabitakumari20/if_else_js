var readlineSync=require("readline-sync")
var a=readlineSync.question("Enter the string num:-")
var b=readlineSync.question("Enter  the string num:-")
if (typeof(a)==typeof(b)){
    var v=Number(a)
    var d=Number(b)
    var e=v+d
    console.log(String(e))
}

else{
    console.log("nothing")
}