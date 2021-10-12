// var readlineSync=require("readline-sync");
// var num=readlineSync.questionInt("enter number=")
// switch(num){
//     case 1:
//         console.log("frist")
//         break
//     case 2:
//         console.log("secound")
//         break
//     case 3:
//         console.log("third")
//         break
//     case 4:
//         console.log("fourth")
//     default:
//         console.log("my name is manvi")
// }



// switch(num){
//     case 1:
//         console.log(num>7,"111111")
//         break
//     case 2:
//         console.log(num<8,"manvi")
//         break
//     case 3:
//         console.log(num==3,"navgurukul")
//         break
//     default:
//         console.log("nothing")
// }



// var name=readlineSync.question("enter crater=")
// switch(name){
//     case "a":
//         console.log("yes i am a")
//         break
//     case "b":
//         console.log("i am b")
//         break
//     case "c":
//         console.log("i am c")
//         break
//     default:
//         console.log("i am out of the game")
// }


// var num=readlineSync.questionInt("enter the num=")
// switch(name,num){
//     case "manvi",1:
//         console.log("manvi is here")
//         break
//     case "neha":
//         console.log("neha is here")
//         break
//     case "navgurukul":
//         console.log("navgurukul is in banglore")
//         break
//     default:
//         console.log("i m out of cuntry")
// }



var readlineSync=require("readline-sync");
// var fruits = readlineSync.question("enter input=")

// switch(fruits) {
//   case "banana":
//       console.log("Banana is good!");
//       break;
//   case "orange":
//       console.log("I am not a fan of orange.");
//       break;
//   case "apple":
//       console.log("How you like them apples?");
//       break;
//   default:
//       console.log("I have never heard of that fruit...");
// }

// var num=readlineSync.questionInt("enter the num=")
// var oprater=readlineSync.question("enter oprater=")
// switch (num,oprater){
//     case "+":
//         console.log(num+5);
//         break
//     case "-":
//         console.log(num-3);
//         break
//     case "*":
//         console.log(num*2);
//         break
//     case "/":
//         console.log(num/2);
//         break
//     case "%":
//         console.log(num%3);
//         break
//     case "**":
//         console.log(num**2);
//         break
//     default:
//         console.log("invaild input")

// }




var num=readlineSync.questionInt("enter frist  num=")
var num1=readlineSync.questionInt("enter secound num=")
var oprater=readlineSync.question("enter oprater=")
switch (num,num1,oprater){
    case "+":
        console.log(num+num1);
        break
    case "-":
        console.log(num-num1);
        break
    case "*":
        console.log(num*num1);
        break
    case "/":
        console.log(num/num1);
        break
    case "%":
        console.log(num%num1);
        break
    case "**":
        console.log(num**num1);
        break
    default:
        console.log("invaild input")

}