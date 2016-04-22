'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const mongo = require('./mongo');
const router = require('./router');
const config = require('./config');

app
    .set('handle', process.env.PORT || config.express.port)
    .use(mongo.connect())
    .use(express.static(config.staticFolder))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(errorHandler());
app
    .use(router)
    .listen(app.get('handle'), () => {
        console.log(`Express is listening on port ${app.get('handle')}`);
    });
