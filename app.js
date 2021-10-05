const fs = require("fs");
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [named, github] = profileDataArgs

fs.writeFile("./index.html", generatePage(named, github), err => {
    //if err exists it will throw an error and stop execution of the code
    if(err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!")
})