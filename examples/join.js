
var join = require('snippets').join,
    util = require('util');

console.log(util.inspect( join(['a', 'b', 'c'], ['.', ' / ']) ));
