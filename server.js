const express = require('express')
const app = express()
const port = 4269

app.get("/", (req, res) => {
    res.send('Skeleton Vercel Node.js Deploy')
})

app.listen(port, () => {
    console.log(`Express() running on ${port}`);
});