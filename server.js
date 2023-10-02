const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/' || '/home/home.html', (req, res) => {
    fs.readFile('home/home.html', (err, data) => { // Read the contents of 'home.html'
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the response header to indicate the file type
      res.end(data); // Send the contents of 'home.html' to the client
    })
})
app.get('/home/home.css', (req, res) => {
    fs.readFile('home/home.css', (err, data) => { // Reads the contents of 'home.css'
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css' }); // Set the response header to indicate the file type
      res.end(data); // Send the contents of 'home.css' to the client
    })
})
app.get('/register/register.html', (req, res) => {
    fs.readFile('register/register.html', (err, data) => { // Read the contents of 'register.html'
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the response header to indicate the file type
      res.end(data); // Send the contents of 'register.html' to the client
    })
})
app.get('/register/register.css', (req, res) => {
    fs.readFile('register/register.css', (err, data) => { // Read the contents of 'register.css'
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css' }); // Set the response header to indicate the file type
      res.end(data); // Send the contents of 'register.css' to the client
    })
})
app.get('/register/register.js', (req, res) => {
  fs.readFile('register/register.js', (err, data) => { // Read the contents of 'register.css'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'application/javascript' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of 'register.css' to the client
  })
})
app.get('/login/login.html', (req, res) => {
  fs.readFile('login/login.html', (err, data) => { // Read the contents of 'login.html'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of 'login.html' to the client
  })
})
app.get('/login/login.css', (req, res) => {
  fs.readFile('login/login.css', (err, data) => { // Read the contents of 'login.css'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/css' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of 'login.css' to the client
  })
})
app.get('/login/login.js', (req, res) => {
  fs.readFile('login/login.js', (err, data) => { // Read the contents of 'login.js'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'application/javascript' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of 'login.js' to the client
  })
})
app.get('/404Page/404', (req, res) => {
  fs.readFile('login/login.html', (err, data) => { // Read the contents of 'login.html'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of 'login.html' to the client
  })
})
app.get('/login/login.css', (req, res) => {
  fs.readFile('login/login.css', (err, data) => { // Read the contents of 'login.css'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/css' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of 'login.css' to the client
  })
})
app.get('/static/icons/*', (req, res) => {
  console.log(req.url);
  console.log(req.url.slice(1,req.url.length));
  fs.readFile(req.url.slice(1,req.url.length), (err, data) => { // Read the contents of 'req.url, and load the specific file from icon folder'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'image/png' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of req.url to the client
  })
})
app.get('/static/logos/*', (req, res) => {
  fs.readFile(req.url.slice(1,req.url.length), (err, data) => { // Read the contents of 'req.url, and load the specific file from logos folder'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'image/png' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of req.url to the client
  })
})
app.get('/static/backgrounds/*', (req, res) => {
  fs.readFile(req.url.slice(1,req.url.length), (err, data) => { // Read the contents of 'req.url, and load the specific file from backgrounds folder'
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'image/png' }); // Set the response header to indicate the file type
    res.end(data); // Send the contents of req.url to the client
  })
})
app.get('/404Page/404.css', (req, res) =>{
  fs.readFile('404Page/404.css', (err, data) =>{
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/css'});
    res.end(data);
  })
});
app.get('*', (req, res) =>{
  fs.readFile('404Page/404.html', (err, data) =>{
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(data);
  })
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})