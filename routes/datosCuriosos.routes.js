const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'html', 'DatosCuriosos.html'), { encoding: 'utf-8' });

router.use('/', (request, response, next)=>{
    response.send(html);
})

module.exports = router;