'use strict';
var express = require('express');
var router = express.Router();



var graphx = {
    nodes: [
        { id: "Maria West", type: "female" },
        { id: "Hazel Santiago", type: "male" },
        { id: "Sheldon Roy", type: "male" },
        { id: "Tracey Martinez", type: "female" },
        { id: "Warren Mcgee", type: "male" },
        { id: "Donnie Ballard", type: "female" },
        { id: "Jackie Snyder", type: "female" },
        { id: "Robin Luna", type: "male" },
        { id: "Verna Bailey", type: "female" },
        { id: "Donni Ballard", type: "female" },
        { id: "Paal Hansen", type: "male" },
        { id: "Shane	Simpson", type: "male" },
        { id: "Robyn Luna", type: "male" },
        { id: "Penny	Marsh", type: "female" },
    ],
    links: [
        { source: "Maria West", target: "Hazel Santiago", value: 100 },
        { source: "Maria West", target: "Sheldon Roy" },
        { source: "Hazel Santiago", target: "Sheldon Roy" },
        { source: "Maria West", target: "Tracey Martinez" },
        { source: "Maria West", target: "Warren Mcgee" },
        { source: "Hazel Santiago", target: "Tracey Martinez" },
        { source: "Hazel Santiago", target: "Warren Mcgee" },
        { source: "Sheldon Roy", target: "Tracey Martinez" },
        { source: "Sheldon Roy", target: "Warren Mcgee" },
        { source: "Tracey Martinez", target: "Warren Mcgee" },
        { source: "Sheldon Roy", target: "Donnie Ballard" },
        { source: "Donnie Ballard", target: "Jackie Snyder" },
        { source: "Donnie Ballard", target: "Robin Luna" },
        { source: "Jackie Snyder", target: "Robin Luna" },
        { source: "Robin Luna", target: "Verna Bailey" },
        { source: "Donni Ballard", target: "Verna Bailey" },
        { source: "Maria West", target: "Verna Bailey" },
        { source: "Paal Hansen", target: "Verna Bailey" },

        { source: "Shane Simpson", target: "Robyn Luna" },
        { source: "Shane Simpson", target: "Penny Marsh" },
        { source: "Penny Marsh", target: "Robyn Luna" }
    ]
}

/* GET home page. */
router.get('/', function (req, res) {
    var data_list = {
        nodes: [
            { id: "Client", type: "other" },
            { id: "DataInfo", type: "web" },
            { id: "FDS", type: "server" },
            { id: "FS", type: "server" },
            { id: "AS", type: "server" },
            { id: "MainDB", type: "database" },
        ],
        links: [
            { source: "Client", target: "DataInfo" },
            { source: "Client", target: "FDS" },
            { source: "FDS", target: "AS" },
            { source: "DataInfo", target: "FS" },
            { source: "FS", target: "AS" },
            { source: "FS", target: "MainDB" },
            { source: "AS", target: "MainDB" }
        ]
    }
    res.render('index',
        {
            title: 'Express999',
            graphv: data_list
        }
    );
});

module.exports = router;