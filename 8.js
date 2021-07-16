//If the text is already present append text on the next line.
var fs = require('fs');
var replace = require('replace');
var glob = require('glob');

try{
    glob('fileA.txt', function(err, files) {
        if (err) {
             throw err;
             }
        files.forEach(function(file, index, array) {
              console.log(file + ' exists');
              fs.appendFile('fileA.txt',"Have fun coding!!",function(err){
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