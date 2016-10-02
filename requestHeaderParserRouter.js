'use strict';

var express = require('express');

var requestHeaderParserRouter = express.Router();

requestHeaderParserRouter.route('/')
    .get(function(req, res) {
        res.json({
            ipaddress: req.headers['x-forwarded-for'],
            language: req.headers['accept-language'],
            software: req.headers['user-agent']
        });
    });

module.exports = requestHeaderParserRouter;