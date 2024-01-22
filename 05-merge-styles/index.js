const path = require("path");
const fs = require("fs");
// let arrStyles = [];
const dst = path.join(__dirname, "project-dist");
console.log(dst);

fs.writeFile(
    path.join(__dirname, "project-dist", "bundle.css"),
    "",
    (err) => {
      if (err) throw err;
    },
  );

  fs.readdir(
    path.join(__dirname, 'styles'),
    { withFileTypes: true }, (err, files) => {
        if (err) throw err;
        for (item of files) {
            if(item.isFile()) {
                let arr = item.name.split(".")
                let fullPath = path.join(__dirname, "styles", `${item.name}`);
                if(arr[1] === "css") {
                    const stream = fs.createReadStream(fullPath, "utf-8");
                    // let data = "";
                    stream.on("data", (chunk) => (fs.appendFile(path.join(__dirname, "project-dist", "bundle.css"), `${chunk}`,
                    (err) => {
                    if(err) throw err;})));
                    
                }
            }
        }
    })
    // console.log(arrStyles);