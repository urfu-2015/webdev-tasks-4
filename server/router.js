'use strict';

const express = require('express');
const render = require('./render');
const mongo = require('./mongo');
const router = express.Router();

router.get('/', (req, res) => {
    mongo.getVegetables()
        .then(result => {
            render(req, res, {
                bundle: 'index',
                view: 'index',
                title: 'айБабуленька',
                dataDB: result
            });
        })
        .catch(console.log);
});

router.get('*', (req, res) => {
    render(req, res, {
        bundle: 'index',
        view: 'error',
        title: 'Error Page'
    });
});

module.exports = router;
