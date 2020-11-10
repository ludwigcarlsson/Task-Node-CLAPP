const fs = require('fs');
const os = require('os');
const http = require('http');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); // adding support for output and input

console.log("Choose an option:\n1. Read package.json\n2. Display OS info\n3. Start HTTP server");
readline.question(`Type a number: `, (choice) => { // wait for input and use input in function
    
    if (choice < 1 || choice > 3) { // check if valid number has been entered
        console.log("Invalid number");
    } else {
        switch (choice) {
            case "1":
                fs.readFile(__dirname + '/package.json', 'utf-8', (err, content) => {
                    console.log(content); // log contents of package.json
                });
                break;
            case "2": 
                displayOS();
                break;
            case "3":
                runServ();
                break;
            default:
                break;
        } 
    }

    readline.close();
})

function displayOS() {
    console.log('Getting OS info...');
    console.log(`
    SYSTEM MEMORY: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)+' GB'}
    FREE MEMORY: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)+' GB'}
    CPU CORES: ${os.cpus().length}
    ARCH: ${os.arch()}
    PLATFORM: ${os.platform()}
    RELEASE: ${os.release()}
    USER: ${os.userInfo().username}
    `); // log OS information
}

function runServ() {
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.write('This is homepage');
            res.end();
        } // create default endpoint

        if (req.url === "/project") {
            res.write('This is not homepage');
            res.end();
        } // create additional endpoint
    });
    const port = 3000;
    console.log("Starting HTTP server...");
    console.log(`listening on port ${port}`);

    server.listen(port);
}
