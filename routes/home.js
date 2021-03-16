const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    let path = __dirname.replace(/routes/, '');
    res.sendFile(path + '/public/auth.html');
});


module.exports = router;