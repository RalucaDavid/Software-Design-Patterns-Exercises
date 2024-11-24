const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const counterFile = path.join(__dirname, 'counter.json');

let visitCount = 0;
if (fs.existsSync(counterFile)) {
    const data = fs.readFileSync(counterFile);
    const parsedData = JSON.parse(data);
    visitCount = parsedData.visitCount;
}

app.get('/counter', (req, res) => {
    visitCount++;
    fs.writeFileSync(counterFile, JSON.stringify({ visitCount }, null, 2));
    res.json({ visitCount });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
