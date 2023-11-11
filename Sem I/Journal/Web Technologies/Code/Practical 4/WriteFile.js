
var fs = require("fs");
fs.writeFile("Aditya2.txt", "Hii Aditya. Hope you're havin' a good day!", function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Write operation complete");
  }
});
