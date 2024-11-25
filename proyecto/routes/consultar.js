const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('consultar');
});

module.exports = router;