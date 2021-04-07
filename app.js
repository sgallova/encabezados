const express = require('express');
const app = express();
const parser = require('ua-parser-js');


app.get('/',(req,res) =>{
    var ua = parser(req.headers['user-agent']);
    res.send(ua.browser.name);
});


app.listen(3000, () => console.log('Listening on port 3000!'));