module.exports = {
    express: {
        port: 3000
    },
    server: {
        host: 'localhost',
        port: '3000'
    },
    db: {
        type: 'mongodb',
        host: 'footprint:moonless@ds028799.mlab.com:28799',
        name: 'urfu'
    },
    bem: {
        bundles: ['index']
    },
    staticFolder: './static'
};