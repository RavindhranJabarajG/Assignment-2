//2. If a file is not present, create it.
var fs= require("fs");


fs.open('fileB.txt','w+',function(err,fd){
    if(err){
        return console.log.error("Failed tp create");
    }
    else{
        console.log("The file you sought doesn't exist. A new file with the given name has been created!!")
    }
})
