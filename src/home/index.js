require('./home.css');

var $ = require('jquery');
var env = require('../common/env/env');

$('#console').html(JSON.stringify(env, null, 4));