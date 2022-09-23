const express = require('express')
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send('foooo')
})

app.listen(port, () => {
    console.log(`Express() running on ${port}`);
});
  
module.exports = app