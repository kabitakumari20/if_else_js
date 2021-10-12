var readlineSync=require("readline-sync")
var date=readlineSync.questionInt("enter num=")
switch (date) {
    case 6:
      console.log ("Today is Saturday");
      break;
    case 0:
      console.log("Today is Sunday");
      break;
    default:
      console.log("Looking forward to the Weekend");
  }
  