const {Router} = require('express');
const router = Router();
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose');
const admin = require('../models/admin.model');
const Admin = mongoose.model('admin');


router.post('/', upload.none(), async (req, res) => {
        const user = Admin.find(req.body, (err, res) => {
            if (err) {
                throw err;
            }
            return res;
        })
    
        req.session.key = '2359235012foEIW412';
        req.session.user = user._conditions;
        req.session.isAuthenticated = true;

        req.session.save(err => {
            if (err) {
                throw err
            }
            res.send({isAuthenticated:true, key: req.session.key});
        })

});

module.exports = router;