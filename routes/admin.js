const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    let path = __dirname.replace(/routes/, '');
    res.sendFile(path + '/public/main.html');
});

module.exports = router;