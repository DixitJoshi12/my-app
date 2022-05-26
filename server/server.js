const https = require("https");
const express = require("express");
const fs = require('fs');
const helmet = require('helmet');
// const mongoose = require('mongoose');

const app = require("./app.js");

const PORT = 8080;

app.use(helmet());

const server = https.createServer({
    key : fs.readFileSync('./key.pem'),
    cert : fs.readFileSync('./cert.pem'),
},app);


 function startServer(){

    server.listen(PORT, () => console.log(`Listinging on PORT : ${PORT}`));
}

startServer();