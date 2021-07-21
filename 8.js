//8.If the text is already present append text on the next line.
var fs = require('fs');
var replace = require('replace');
var glob = require('glob');
var exist = require("./1.js");
var filename = "fileB.txt";

if(!exist.check(filename)){
    try{
        glob('fileA.txt', function(err, files) {
            if (err) {
                throw err;
                }
            files.forEach(function(file, index, array) {
                console.log(file + ' exists');
                fs.appendFile('fileA.txt',"\nHave fun coding!!",function(err){
                    if(err){
                        console.log(err);
                    } else{
                    console.log("File appended");
                    }
                });
            });
        });
    }    
    
    catch(err){
        console.log('File not found');
    }
}
