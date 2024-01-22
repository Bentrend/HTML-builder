const path = require("path");
const { stdin, stdout } = process;
const fs = require("fs");

fs.writeFile(
    path.join(__dirname, "text.txt"), "",
    (err) => {if(err) throw err});

stdout.write("Введите ваш текст\n")

process.on('SIGINT', () => {
        console.log('До свидания');
        process.exit();
      });
      
stdin.on("data", data => {
    if(data.toString().trim() == "exit") {
        process.on("exit", () => console.log('До свидания'));
        process.exit();
    }
    fs.appendFile(path.join(__dirname, "text.txt"), `${data}`,
    (err) => {
    if(err) throw err;});
})