//7. Display the content of the file
const fs= require("fs");

try{
    var data = fs.readFileSync('fileA.txt',function(err,data) {
        if(err){
            return console.log.error(err);
        }
    });
    console.log(data.toString());
}
catch(err)
{
    console.error('File does not exist');
}