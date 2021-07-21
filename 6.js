//6. Write it back on the file.
var fs= require("fs");
var exist = require("./1.js");
var filename = "fileB.txt";
var existsfile = exist.check(filename);

const writefile = () =>
{
    fs.copyFile(filename,'fileB.txt',function(err) {
        //contents of fileB is written back on the same file. Hence, same output.
        if(err){
            console.log("An error occured")
        }
        else{
            console.log("contents written back on the same file");
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
