//1. Check if the file is present or not.
var fs = require("fs");

function check(filename){
    fs.access(filename, function(err){
        if(err){
            console.log("File does not exist.");
            return false;
        }
        else{
            return true;
        }
    });
}

module.exports = {check};

