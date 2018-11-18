'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});


// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let fileName = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;

  res.json({
    "name": fileName,
    type,
    size
  });

});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
