const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json({
        message: 'Mensaje en JSON desde el servidor'
    });
});

app.listen(5000, () => {
    console.log('Loading on http://localhost:5000');
});