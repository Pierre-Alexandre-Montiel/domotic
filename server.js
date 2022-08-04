const express = require('express');
const http = require('http');
const path = require('path');
var fs = require('fs');

const app = express();
const port = process.env.PORT ||  3001;

app.use(express.static(__dirname + '/dist/test'));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname))
});

const server = http.createServer(app);

app.post('/register', (req, res) =>{
    console.log("ALLO");
    //console.log(req.body);
    //console.log(req.body.name);
    fs.writeFile('10:10' + '.txt', '', function(err){
        if (err){
            return console.log(err);
        }
        console.log("file well created");
    })
    console.log(req.body)
})

server.listen(port,() => console.log('##### Server is running #####'))




