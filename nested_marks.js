var readlineSync = require("readline-sync");
var marks =Number(readlineSync.question("enter the marks="))

if (marks>25){
    if (marks<45){
        console.log("d grate")
    }
    else if (marks<60){
        console.log("c grate")
    }
    else if (marks<80){
        console.log("b grate")
    }
    else if (marks<=100){
        console.log("a grate")
    }
else{
    console.log("you fail")
}
}