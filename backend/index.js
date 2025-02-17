const express = require('express');
const app = express();
const cors = require('cors');
const { exec } = require('child_process');
const multer = require('multer');
const connection = require('./db');


// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Configure Multer (adjust storage as needed)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage });



const port = 8050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
