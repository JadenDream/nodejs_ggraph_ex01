var express = require('express');
var loginAPI = express.Router();

var isLogin = false;

// 進入需要驗證的頁面
loginAPI.get('/', function (req, res) {
    // ...
    res.send('LoginAPI Index...');

    var name = 'guest';
    isLogin = false;
    if (req.signedCookies.firstName && req.signedCookies.lastName) {
        name = req.signedCookies.firstName + ' ' + req.signedCookies.lastName;
        isLogin = true;
    }

    res.render('index', { title: 'Express', member: name, logstatus: isLogin });
});

loginAPI.psot('/post', function (req, res) {
    if (req.body.firstName == "" || req.body.lastName == "") {
        return res.redirect('Login.html');
    } else {
        res.cookie('firstName', req.body.firstName, { path: '/cookie', signed: true, maxAge: 600000 });  //set cookie
        res.cookie('lastName', req.body.lastName, { path: '/cookie', signed: true, maxAge: 600000 }); //set cookie
        return res.redirect('/cookie');
    }
});

loginAPI.get('/logout', function (req, res) {
    // ...
    res.clearCookie('firstName', { path: '/cookie' });
    res.clearCookie('lastName', { path: '/cookie' });
    return res.redirect('/cookie');
});

module.exports = loginAPI;
