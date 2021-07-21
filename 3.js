//3. Write some text in the file.
var fs= require("fs");
var exist = require("./1.js");
var filename = "fileA.txt";
var existsfile = exist.check(filename);

const writefile = () =>
{
    fs.writeFile(filename,"Cheers!",function(err) {
        if(err){
            console.log("An error occured")
        }
        else{
            console.log("contents written on the given file.");
        }
    });  
};

const checkfile = (filename,callback) =>
{
    const fileCheck = (existsfile,callback);
    if(fileCheck){
        callback();
    }
    else{
        console.log("file not found");
    }
};

checkfile(filename,writefile);
