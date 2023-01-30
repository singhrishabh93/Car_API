const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs')

app.get('/', (req, res) => {
  res.send('Hello This is Rishabh Singh');
});

app.get('/student', (req, res) => {
    res.send('Hello This is Rishabh Singh');
  });

app.get('/fellow', (req, res) => {
res.send('Hello This is Prashant Tiwary');
});

app.get("/list_cars", (req, res) => {
    fs.readFile(__dirname + '/' + 'cars.json', (err, data) => {
        res.end(data);
    });
});
  

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });