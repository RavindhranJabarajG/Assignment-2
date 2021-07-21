//2. If a file is not present, create it.
var fs= require("fs");
var exist = require("./1.js");
var filename = "fileA.txt";

const openfile = () =>
{
    fs.open(filename,'w+',function(err) {
        if(err){
            console.log("An error occured")
        }
        else{
            console.log("File opened");
        }
    });  
};

const checkfile = (filename,callback) =>
{
    const fileCheck = (exist.check(filename),callback);
    if(fileCheck){
        callback();
    }
    else{
        console.log("file not found");
    }
    
};

checkfile(filename,openfile);
