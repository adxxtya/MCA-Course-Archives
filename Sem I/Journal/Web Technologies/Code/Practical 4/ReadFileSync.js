
var fs = require("fs");
var data = fs.readFileSync("Aditya.txt");
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
