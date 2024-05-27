// Create a web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1

var express = require('express');
var app = express();

// get
app.get('/comments', function(req, res) {
  res.send('This is a GET request');
});

// post
app.post('/comments', function(req, res) {
  res.send('This is a POST request');
});

// put
app.put('/comments', function(req, res) {
  res.send('This is a PUT request');
});

// delete
app.delete('/comments', function(req, res) {
  res.send('This is a DELETE request');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// npm install -g nodemon
