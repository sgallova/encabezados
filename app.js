const express = require('express');
const app = express();
const parser = require('ua-parser-js');
let msg='';


app.get('/',(req,res) =>{
    var ua = parser(req.headers['user-agent']);
    if(ua.browser.name=== ''){
        res.send('mi-super-navegador');
    }else{
    res.send(ua.browser.name);
    }
});


app.listen(3000, () => console.log('Listening on port 3000!'));