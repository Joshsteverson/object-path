'use strict';

module.exports = function objectPath(obj, path) {
	var result = obj;
	try{
		var props = path.split('/');
		props.every(function propsEveryCb(prop) {
			if (typeof result[prop] === 'undefined') {
				result = null;
				return false;
			}
			result = result[prop];
			return true;
		});
	} catch(e) {
		result = null;
	}
	return result;
};
