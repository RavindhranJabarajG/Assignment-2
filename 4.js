//4. Display the text on the screen
var fs= require("fs");

try{
    var data = fs.readFileSync('fileC.txt',function(err,data) {
        if(err){
            throw err;
        }
    });
    console.log(data.toString());
}
catch(err)
{
    console.error('readFile failed due to unexisting file');
}