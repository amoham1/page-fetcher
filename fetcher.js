const request = require('request');
const fs = require('fs');

let url = process.argv[2];
let filePath = process.argv[3];
const getData = function (url,filePath){
request(url, (error, response, body) => {
  if (response){
    console.log("Data retrived");
    printData(filePath,body);
  }else{
    console.log(`No website found. ${error}`);
  }
});
}

const printData = function(filePath,body) {
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
      return
    }else{
      console.log("new File has been created");
      const length = (new TextEncoder().encode('body')).length;
      console.log(`Download and saved ${length} bytes to ${filePath}`);
    }
    //file written successfully
  })
}
getData(url,filePath);
// with help for Cat => lighthouse lab tutor
