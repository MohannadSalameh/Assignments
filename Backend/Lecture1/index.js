const fs = require('fs');

//fs.writeFile('message.txt', 'Hello form Node.JS', (err) => {
//    if (err) throw err;
//    console.log('The file has been saved!');
//    }); 

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toUpperCase());

    fs.readFile("./message.txt","utf8" ,(err,data)=>{
            if(err) throw err;
            console.log(data.charAt (9));
    });
});