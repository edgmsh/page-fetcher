const needle = require("needle");
const fs = require("fs");

let URL = process.argv[2];
let filePATH = process.argv[3];



needle.get(URL, (err, res, body) => {
  if (err) {
    return console.log(err);
  }

  fs.writeFile(filePATH, body, (error) => {
    if (error) {
      // Handle error
      console.log("Failed to write to file");
      return;
    }
    // Success!
    fs.stat(filePATH, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      //stats.size; // 1024000 //= 1MB
      console.log(`Downloaded and saved ${stats.size} bytes to ${filePATH}`);
    });
  });

}
);

