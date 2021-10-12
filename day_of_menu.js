// Programming seekh ke hum computers ko kuch bhi karva sakte hain jo hum chaye. 
// Jaise agar aap ek program bana rahe ho jo ki jo har din ka menu dikhata hai, 
// usmein aap aisi condition laga sakte hain jo din ke hisaab se menu dikhana. 
// Jaise: 1. Monday hai toh "Rajma Chawal" banenge. 2. Tuesday hai toh "Mutton Kosha" 
// banega. 3. Wednesday hai toh "Pizza" banega 4. Thursday hai toh "Dal - Roti" 
// banegi
var readlineSync = require("readline-sync");
var day = readlineSync.question("enter any day--");
if (day=="monday"){
    console.log("rajma rice")
}
else if (day=="tuesday"){
    console.log("mutton kosha")
}
else if (day=="wednesday"){
    console.log("pizza ")
}
else if (day=="thrisday"){
    console.log("dal rice")
}
else if (day=="friday"){
    console.log("pasta")
}
else if (day=="saterday"){
    console.log("mutton chikan")
}
else {
    console.log("gulab jamun")
}
