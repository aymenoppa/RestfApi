var express = require('express');
var router = express.Router();
const db = require('../db')


var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    var id =1;
    db.query('SELECT * FROM public.user ', (err, result) => {

        res.json (result.rows)


    if (err) {
            return next(err)
        }
        // res.send(res.rows[0])
})
    // console.log(result.rowCount)
    // res.json(result.rows[0])

});

/* GET POST page. */

router.post('/here', function(req, res, next) {
    console.log(req.body);      // your JSON
    res.send(req.body.id);    // echo the result back


});

module.exports = router;
