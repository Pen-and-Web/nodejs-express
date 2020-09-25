const express = require('express')
const app = express();

const port = 8000;

app.get("/",(req, res) => {
  res.statusCode = 200;
  res.send("Hello Client");
});

// handling icon request 
app.get("/favicon.ico",(req, res) => {
    res.statusCode = 200;
    res.send("favicon");
  });

app.listen(port, () => {
    console.log('Example app listening on port 8000!')
  });