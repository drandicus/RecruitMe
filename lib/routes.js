var index = require('./controllers');
var express = require('express');

module.exports = function(app) {
    app.get('/*', index.index);
    app.get('/views/*', index.partials);
}