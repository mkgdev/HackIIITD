var express = require('express');
var router = express.Router();


//Landing page

router.get('/', function(req, res)
{

res.render('../views/landing');

}             
);



module.exports = router;