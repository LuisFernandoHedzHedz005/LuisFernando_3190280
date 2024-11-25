const express = require('express');
const router = express.Router();
const queries = require('../config/querys');

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await queries.getCelularesId(id);

        if (result.length === 0) {
            return res.status(404).send('Celular no encontrado');
        }

        res.render('editarid', { celular: result[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;
