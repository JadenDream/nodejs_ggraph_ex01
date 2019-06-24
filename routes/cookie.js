'use strict';
var express = require('express');
var router = express.Router();

/* GET cookie page. */
router.get('/', function (req, res) {
    res.render('cookie', { title: 'Express888' });
});

module.exports = router;