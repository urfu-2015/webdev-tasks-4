'use strict';

const MongoClient = require('mongodb').MongoClient;
const co = require('co');
const config = require('./config');
const dbUri = `${config.db.type}://${config.db.host}/${config.db.name}`;
const collectionName = 'vegetables';

const fs = require('fs');
const path = require('path');

const singletonMongo = (function() {

    let Mongo = function() {
        this.db = null;
        this.collection = null;
    };

    Mongo.prototype.connect = function() {
        return (req, res, next) => {
            co(function *() {
                if (!this.db) {
                    this.db = yield MongoClient.connect(dbUri);
                    this.collection = this.db.collection(collectionName);
                }
                next();
            }.bind(this)).catch(next);
        };
    };

    Mongo.prototype.getVegetables = function() {
        return co(function *() {
            const res = yield this.collection.find().toArray();
            const isFileExists = yield new Promise((resolve, reject) => {
                fs.stat(path.join(__dirname, '../data/data.json'), (err, stats) => {
                    if (!err && stats.size > 0) {
                        resolve(true);
                    } else if (err.code === 'ENOENT') {
                        resolve(false);
                    }
                    reject(err);
                });
            });
            if (!isFileExists) {
                yield new Promise((resolve, reject) => {
                    fs.writeFile(path.join(__dirname, '../data/data.json'), JSON.stringify(res, null, 4), err => {
                        err ? reject(err) : resolve();
                    });
                });
            }
            return res;
        }.bind(this));
    };

    let instance;
    return {
        getInstance: function() {
            if (!instance) {
                instance = new Mongo();
            }
            return instance;
        }
    };
})();

module.exports = singletonMongo.getInstance();