
var pass = require('snippets').pass,
    util = require('util');

pass(['foo', 'bar']).on(function(key, value) { console.log(key+" = "+value); });
