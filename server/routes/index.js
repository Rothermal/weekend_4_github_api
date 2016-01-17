var express = require('express');
var path = require('path');
var router = express.Router();

console.log('hello is it me you are looking for?');

router.get('/',function(request,response){
   response.sendFile(path.join(__dirname,'../public/views/index.html'));
});


module.exports = router;