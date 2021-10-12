var readlineSync=require("readline-sync")
var user=readlineSync.question("Enter the string:-")
var a=user.length
if (a>=3 && (!(user.includes("ing")))){
    console.log(user+"ing")
}
else if (a>=3 && user.includes("ing")){
    console.log(user+"ly")
}
else{
    console.log("nothing")
}


// const a = 3;
// const b = -2;

// console.log(!(a > 0 || b > 0))