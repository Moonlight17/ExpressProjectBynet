
const express = require('express');
const app = express();
const port = 3000;
const calc = require('./calculator.js');
const fs = require('fs');

app.get('/', function(req, res){
	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
})

app.get('/add/:num1/:num2', function(req, res){
    res.status(200).send(calc.add(req.params.num1, req.params.num2));
})

app.get('/sub/:num1/:num2', function(req, res){
    res.status(200).send(calc.sub(req.params.num1, req.params.num2));
})

app.get('/multi/:num1/:num2', function(req, res){
    res.status(200).send(calc.multi(req.params.num1, req.params.num2));
})

app.get('/div/:num1/:num2', function(req, res){
    res.status(200).send(calc.div(req.params.num1, req.params.num2));
})

exports.stop = function(){
    server.close();
}
const server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
