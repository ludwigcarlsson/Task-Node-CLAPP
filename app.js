// 1. Read package.json
// 2. Display OS info
// 3. Start HTTP server
// input: 1-3 else 'Invalid option'

console.log("Choose an option:\n1. Read package.json\n2. Display OS info\n3. Start HTTP server");
console.log("Type a number:");


const fs = require('fs');

fs.readFile(__dirname + '/package.json', 'utf-8', (err, content) => {
    //console.log(content);
})