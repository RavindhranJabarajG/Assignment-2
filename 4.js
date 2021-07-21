//4. Display the text on the screen
var fs = require('fs');
var exist = require('./1.js');
var filename = "fileA.txt"

const readfile = () =>
{
    fs.readFile(filename,function(err,data) {
        if(err){
            console.log("Unable to read");
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
