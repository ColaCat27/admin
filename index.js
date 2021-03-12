const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const info = require('./models/info.model');

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

const Info = mongoose.model('info');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.html');
});

app.post('/greetings', upload.none(), (req, res) => {
    Info.find((err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            Info.updateOne({greetings: result[0].greetings}, {$set: {greetings: req.body.greetings}}, {upsert: true})
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            })
        }
    })
});

app.post('/about', upload.none(), (req, res) => {
    Info.find((err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            Info.updateOne({about: result[0].about}, {$set: {about: req.body.about}}, {upsert: true})
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            })
        }
    })
});
app.post('/events', upload.none(), (req, res) => {
    Info.find((err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            Info.updateOne({events: result[0].events}, {$set: {events: req.body.events}}, {upsert: true})
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            })
        }
    })
});

// app.post('/', upload.none() ,(req, res) => {
//     Info.find((err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         if (result.length === 0) {
//             new Info(req.body).save();
//         } else {
//             console.log(result[0]);
//             console.log(req.body);
//             Info.updateOne(result[0], {$set: req.body});
//         }
//     });
// });
