'use strict';

const path = require('path');
const config = require('./config');

const bundles = config.bem.bundles;
let bundlesTemplates = {};

bundles.forEach(function(bundle) {
    let pathToBundle = path.resolve('./build/bundles', bundle),
        BEMTREE = require(path.join(pathToBundle, `${bundle}.bemtree.js`)),
        BEMHTML = require(path.join(pathToBundle, `${bundle}.bemhtml.js`));

    bundlesTemplates[bundle] = {
        BEMTREE: BEMTREE,
        BEMHTML: BEMHTML
    };
});

function render(req, res, data, context) {
    let bemtreeCtx = {
        block: 'root',
        context: context,
        data: data
    };

    try {
        var bemjson = bundlesTemplates[data.bundle].BEMTREE.apply(bemtreeCtx);
    } catch (err) {
        console.error('BEMTREE error', err.stack);
        console.trace('server stack');
        return res.sendStatus(500);
    }

    try {
        var html = bundlesTemplates[data.bundle].BEMHTML.apply(bemjson);
    } catch (err) {
        console.error('BEMHTML error', err.stack);
        return res.sendStatus(500);
    }

    res.send(html);
}

module.exports = render;
