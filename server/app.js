const express = require('express');
const api = require('./routes/api');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(express.json());

// app.use(api);
app.get('/secret',(req,res) => {
  return res.send("Hello dixit secret key is 42!")
})
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname , "main",'index.html'));
})
// app.get('/friends', (req,res) =>{
//     res.json("Friends info")
// })


module.exports = app;