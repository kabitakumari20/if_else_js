var readlineSync=require("readline-sync");
var marks=readlineSync.questionInt("enter the marks=");
// var readlineSync = require("readline-sync");
// var marks = readlineSync.questionInt("enter any marks--");

if (marks<=25){
    console.log("e grate")
}
else if (marks>25 && marks<=45){
    console.log("d grate")
}
else if (marks>45 && marks<=60){
    console.log("c grate")
}
else if (marks>60 && marks<=80){
    console.log("b grate")
}
else if (marks>80 && marks<95){
    console.log("a,grate")
}
else{
    console.log("nothing")
}
