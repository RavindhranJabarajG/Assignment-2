//5. Search a particular word and replace it.
var fs = require('fs');
var replace = require('replace');
var glob = require('glob');
var exist = require('./1.js');
var filename = "fileA.txt";

if(!exist.check(filename)){
    try{
        glob(filename, function(err, files) {
            if (err) {
                throw err;
            }
            files.forEach(function(file, index, array) {
                console.log(file + ' exists');
                console.log(fs.readFileSync(file, 'utf8'));
                replace({
                    regex: 'nice', replacement: 'good', paths: [file], recursive: true, silent: true
                });
                console.log('words replaced.');
                console.log(fs.readFileSync(file, 'utf8'));
            });
        });
    }
    catch(err){
        console.log('Unable to find words');
    }
}
