const express = require('express');
const router = express.Router();
const queries = require('../config/querys');

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await queries.eliminarCelular(id);
        res.render('eliminarid');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el registro');
    }
});

module.exports = router;
