const express = require('express');
const path = require('path');

const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

console.log('running service file');

app.listen(3000, () => console.log('server running....'));

