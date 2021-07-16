//6. Write it back on the file.

var fs= require('fs');

fs.copyFile('fileA.txt','fileA.txt',function(err){
    if(err){
        console.log("couldn't write back on the file");
    }
    else{
        console.log("wriiten on the same file");
    }
});