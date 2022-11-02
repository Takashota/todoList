const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Paste the code to start the server
app.listen(8080);