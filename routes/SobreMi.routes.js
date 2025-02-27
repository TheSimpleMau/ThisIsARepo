const express = require('express');
const router = express.Router();
const fs = require('fs');

const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'html', 'SobreMi.html'), { encoding: 'utf-8' });


// let html = fs.readFileSync('./routes/html/SobreMi.html',{encoding:'utf-8',flag:'r'});

router.use('/', (request, response, next)=>{
    response.send(html);
    // next();
})

// router.use('/',(request, response, netx) => {
//     console.log("Hola desde sobre mi");
//     response.send(html);
//     netx();
// })


module.exports = router; 