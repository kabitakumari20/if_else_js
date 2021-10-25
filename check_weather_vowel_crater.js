//Write a python program to input any alphabet and check whether it is vowel or consonant.

var alphabet=readlineSync.question("Enter the aphabet:-");
if (alphabet.includes("a","e","i","o","u") ){
    console.log("vowel")
}
else{
    console.log("character")
}