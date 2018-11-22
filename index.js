// server.js
var pg = require('pg');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
    user: 'pldev',
    database : 'pldev',
    host: 'pldev.cwdewulhyl96.ap-southeast-2.rds.amazonaws.com',
    password: 'pldev123',
    port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

app.get('/', (req, res, next) => {


    pool.connect(function (err, client, done) {
        if (err) {
            return res.send(err);
        }
        res.send('does this work?');
        client.query("SELECT * FROM applicants;", function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            console.log('hi', result.rows);
            res.send(result.rows);
            res.status(200).send(result.rows);
        })
    })


});

console.log(config);


app.get('/submission', (req, res, next) => {
    console.log("DOES THIS WORK2?");
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query("SELECT * FROM applicants;", function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            console.log('hi', result.rows);
            res.status(200).send(result.rows);
        })
    })


});

app.listen(PORT, () => {
    console.log('PL Server is running on PORT:',PORT);
});


