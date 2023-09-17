const express = require('express');
const path = require('path');

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"frontend","static")));
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

console.log('running service file');

app.listen(3000, () => console.log('server running....'));

