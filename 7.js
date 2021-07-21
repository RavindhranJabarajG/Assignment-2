//7. Display the content of the file
var fs = require('fs');
var exist = require('./1.js');
var filename = "fileA.txt"

const readfile = () =>
{
    fs.readFile(filename,function(err,data) {
        if(err){
            console.log("File not found");
        }
        else{
            console.log(data.toString());
        }
    });  
};

const checkfile = (filename,callback) =>
{
    const fileCheck = (exist.check(filename),callback);
    if(fileCheck){
        readfile();
    }
    else{
        console.log("file not found");
    }
    
};

checkfile(filename,readfile);
