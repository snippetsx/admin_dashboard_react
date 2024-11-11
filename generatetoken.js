const fs = require('fs');

const filePath = 'authtoken.json';

if (!fs.existsSync(filePath)) {
    const randomToken = (Math.random().toString(36).substring(2, 10));
    console.log("You're token is ", randomToken);
    fs.writeFileSync(filePath, JSON.stringify({ token: randomToken }, null, 2));
}

