

module.exports = function(app) {
    'use strict';

    var express       = require('express');

    console.log("Registering /sg. Dirname is " + __dirname);
    app.use('/sg', express.static(__dirname + "/../../../../beaglek/www/"));
}
