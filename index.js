const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const upload = multer();

const PORT = 3000;

const app = express();


app.use(express.static(__dirname + '/public'));

async function start() {
    try {
      await mongoose.connect('mongodb+srv://colacat:sMqHVlIICvEleBln@cluster0.igcby.mongodb.net/coffee', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log('Server has been started');
        });
    } catch(e) {
        console.log(e);
    }
};

start();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.html');
});

app.post('/', upload.none() ,(req, res) => {
    console.log(req.body.name);
});
