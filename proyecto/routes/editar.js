const express = require('express');
const router = express.Router();
const queries = require('../config/querys');

router.get('/', (req, res) => {
    queries.getCelulares((results) => {
        console.log('Resultados de celulares:', results);
        res.render('editar', { celulares: results });
    });
});

module.exports = router;