const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
