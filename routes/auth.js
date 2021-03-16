const {Router} = require('express');
const router = Router();

router.post('/', async (req, res) => {
    req.session.isAuthenticated = true;
    res.redirect('/admin');
});

module.exports = router;