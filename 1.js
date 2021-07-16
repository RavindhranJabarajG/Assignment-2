//1. Check if the file is present or not.
var fs= require("fs");


fs.access('fileA.txt', (err) => {
    if(err){
        console.log("File does not exist.");
    }
    else{
        console.log("File exists");
    }
})

