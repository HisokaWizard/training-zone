const express = require('express');

const app = express();

const PORT = 7008;

app.get('/somedata', (req, res, next) => {
    const heroes = [];

    const warrior = {
        name: 'Anduluato',
        key: 'super-warrior',
        strength: '3456',
        power: '3423',
        intellect: '13',
        magic: '0'
    };

    const wizard = {
        name: 'Colcutoin',
        key: 'super-mage',
        strength: '23',
        power: '32',
        intellect: '5790',
        magic: '7894'
    };

    heroes.push(warrior);
    heroes.push(wizard);

    res.set('Access-Control-Allow-Origin', '*')
    res.json(heroes);
    res.end();
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
})