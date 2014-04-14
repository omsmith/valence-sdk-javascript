'use strict';

var D2L = module.exports = require('./valence');

var globalD2l = window.D2L = window.D2L || {};

Object
	.keys(D2L)
	.forEach(function (prop) {
		globalD2l[prop] = D2L[prop];
	});
