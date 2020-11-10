// 1. Read package.json
// 2. Display OS info
// 3. Start HTTP server
// input: 1-3 else 'Invalid option'
const fs = require('fs');
const os = require('os');
const http = require('http');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Choose an option:\n1. Read package.json\n2. Display OS info\n3. Start HTTP server");
readline.question(`Type a number: `, (choice) => {
    
    if (choice < 1 || choice > 3) {
        console.log("Invalid number");
    } else {
        switch (choice) {
            case "1":
                fs.readFile(__dirname + '/package.json', 'utf-8', (err, content) => {
                    console.log(content);
                });
                break;
            case "2": 
                console.log('display');
                break;
            case "3":
                runServ()
                break;
            default:
                break;
        } 
    }

    readline.close();
})


function runServ() {
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.write('Hello World!');
            res.end();
        }

        if (req.url === "/project") {
            res.write(JSON.stringify( ['JS', 'Node'] ));
            res.end();
        }
    });
    const port = 3000;
    console.log("Starting HTTP server...");
    console.log(`listening on port ${port}`);

    server.listen(port);
}
