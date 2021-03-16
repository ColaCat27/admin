const {Router} = require('express');
const router = Router();
const multer = require('multer');
const mongoose = require('mongoose');
const upload = multer();
const uploading = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});
const translit = require('../handlers/translit');

const item = require('../models/item.model');
const Item = mongoose.model('item');




router.post('/getitems', (req, res) => {
    Item.find((err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result);
    })
});


router.post('/upload', multer({storage: uploading}).single('photo'), (req, res) => {
    req.body.photo = __dirname + '\\uploads\\' + req.file.filename;
    req.body.baseName = translit(req.body.name);
    Item.find({name: req.body.name}, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length === 0) {
            new Item(req.body).save();
        }
    }) 
    console.log(req.body);
});


router.post('/delete', upload.none(), (req, res) => {
    Item.remove(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
    })
});


module.exports = router;