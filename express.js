
import express from 'express';

const app = express();

app.get('/',
    (req, res) => {

    res.send('index');
});

app.get('/test1', (req, res) => {
    res.send('test1');
});

app.get('/test2', (req, res) => {
    res.send('test2');
});

app.listen(80, 'localhost', () => {
    console.log("http://localhost:80");
});
