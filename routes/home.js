const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    if (req.cookies.key == '2359235012foEIW412') {
        let path = __dirname.replace(/routes/, '');
        res.sendFile(path + '/public/main.html');
    } else {
        let path = __dirname.replace(/routes/, '');
        res.sendFile(path + '/public/auth.html');
    }

});


module.exports = router;