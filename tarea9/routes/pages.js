const express = require('express');
const path = require('path');

// Crear un router de Express
const router = express.Router();

// Ruta para la Página 1
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

// Ruta para la Página 2
router.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'qr.html'));
});

// Exportar el router para usarlo en la aplicación principal
module.exports = router;