const {Router} = require('express');
const mongoose = require('mongoose')
const router = Router();
const multer = require('multer');
const upload = multer();

const info = require('../models/info.model');
const Info = mongoose.model('info');


router.post('/getinfo', (req, res) => {
    Info.find((err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result[0]);
    })
})


router.post('/greetings', upload.none(), (req, res) => {
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

router.post('/about', upload.none(), (req, res) => {
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
router.post('/events', upload.none(), (req, res) => {
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


module.exports = router;