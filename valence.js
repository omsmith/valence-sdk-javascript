'use strict';

module.exports = process.browser
	? require('./lib/browser')
	: require('./lib/valence');
