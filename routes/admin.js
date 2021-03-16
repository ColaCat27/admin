const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    let path = __dirname.replace(/routes/, '');
    if (req.cookies.key === '2359235012foEIW412') {
        res.sendFile(path + '/public/main.html');
    } else {
        res.sendFile(path + '/public/auth.html');
    }

});

module.exports = router;