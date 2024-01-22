const fs = require("fs");
const path = require("path");

fs.readdir(
    path.join(__dirname, 'secret-folder'),
    { withFileTypes: true }, (err, files) => {
        if (err) throw err;
        for (item of files) {
            if(item.isFile()) {
                let arr = item.name.split(".")
                let fullPath = path.join(__dirname, "secret-folder", `${item.name}`);
                fs.stat(fullPath, (err, stats) => {
                    if(err) throw err;
                    console.log(`${arr[0]}-${arr[1]}-${stats.size}kb`) }) ;
            }
        }
        
    })