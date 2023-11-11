
var fs = require("fs");
fs.readFile("Aditya.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});
