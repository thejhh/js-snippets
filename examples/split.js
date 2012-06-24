
var split = require('snippets').split,
    util = require('util');

console.log(util.inspect( split(/: */, "Hello: World", 2) ));
console.log(util.inspect( split(/: */, "Hello: World: Hi there!", 2) ));
console.log(util.inspect( split(/:[0-9]/, "Hello:0World:1Hi there:2Working still?", 2) ));
