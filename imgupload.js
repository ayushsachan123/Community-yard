const multer = require('multer');

// Configure file storage mechanism from multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploaded_docs/')
    },
    filename: function (req, file, cb) {
      cb(null, req.body.rollno + '__' + String(Date.now()) + 
                '.' + file.mimetype.split('/')[1]);
    }
  })
var upload = multer({ storage: storage });