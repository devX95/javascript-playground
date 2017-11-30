//used for file management
const fs = require('fs');

//create a new file or overwrite an exisitng one
fs.writeFile("data.txt", "Some data here", (error)=>{
    //callback function incase something goes wrong
    if(error){
        console.log(error);
    }
    
});

//write data to an existitng file or create a new one 
fs.appendFile("data.txt", "\nsome data", (err) => {
    if(err){
        console.log(err);
    }
});

//get data from a file
var content;
fs.readFile("data.txt", "utf-8", (err, data) => {
    if(err){
        console.log('There was an error: ', err);
        return;
    }
    content = data;
    console.log(content);
});