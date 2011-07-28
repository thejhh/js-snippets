JavaScript Snippet Collection
=============================

Description
-----------

Small collection of useful small snippets for JavaScript and 
[Node.js](http://www.nodejs.org). Designed to be lightweight, independent and 
undisruptive as much as possible.

Installation for Node.js
------------------------

Simplest way to install is to use [npm](http://npmjs.org/), just simply `npm install snippets`.

License
-------

MIT-style license, see [INSTALL.txt](http://github.com/jheusala/js-snippets/blob/master/LICENSE.txt).

Foreach Example
---------------

See [examples/](http://github.com/jheusala/js-snippets/tree/master/examples) for full examples.

Initialize our foreach function:

	var foreach = require('snippets').foreach;

Write each array element to console:

	var a = [1,2,3,4,5];
	foreach(a).do(function(v) { console.log(v); });
  
Write each object key=value pair to console:

	a = {'foo':1,'bar':2};
	foreach(a).do(function(v, k) { console.log(k+"="+v); });

Write single value to console:

	a = 'foobar';
	foreach(a).do(function(v) { console.log(v); });
