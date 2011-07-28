/* 
 * JavaScript Snippets -- Foreach
 * https://github.com/jheusala/js-snippets
 * Version 0.0.20110727
 */

/*
 * Copyright (C) 2011 by Jaakko-Heikki Heusala <jheusala@iki.fi>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of 
 * this software and associated documentation files (the "Software"), to deal in 
 * the Software without restriction, including without limitation the rights to 
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
 * of the Software, and to permit persons to whom the Software is furnished to do 
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all 
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE.
 */

var is = require('../is.js');

/* Foreach every element in an array */
function foreach_array(values) {
	var i=0, length=values.length;
	return {'do': function(f) { for(; i<length; ++i) f(values[i], i); }};
}

/* Foreach every element in an object */
function foreach_object(values) {
	var i;
	return {'do': function(f) { for(i in values) if(values.hasOwnProperty(i)) f(values[i], i); }};
}

/* Foreach single element */
function foreach_single(value) {
	return {'do': function(f) { f(value);}};
}

/* Foreach every element in an array or object, otherwise the element itself */
function foreach_any(values) {
	if(is.array(values)) return foreach_array(values);
	if(is.object(values)) return foreach_object(values);
	return foreach_single(values);
}

exports.any = foreach_any;
exports.object = foreach_object;
exports.array = foreach_array;
exports.single = foreach_single;

/* EOF */
