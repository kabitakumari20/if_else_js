// Write a python program to input the month number and print the number of days in that month.
var readlineSync=require("readline-sync");
var day=readlineSync.question("Enter the num:-");
if (day=="1"){
    console.log("Monday")
}
else if (day=="2"){
    console.log("Tuesday")
}
else if (day=="3"){
    console.log("Wednesday")
}
else if (day=="4"){
    console.log("Thrusday")
}
else if (day=="5"){
    console.log("Friday")
}
else if (day == "6"){
    console.log("Saturday")
}
else if (day== "7"){
    console.log("Sunday")
}
else{
    console.log("Nothing")
}