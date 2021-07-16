//3. Write some text in the file.
var fs= require("fs");

fs.writeFile('fileB.txt',"Hello Guys!!",function(err,data){
    if(err){
        console.log(err);
    } else{
        console.log('Given content is written');
    }
})
