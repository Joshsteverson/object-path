
'use strict';

module.exports = function objectPath(obj, path) {
	var result = obj;
	try{
		var props = path.split('/');
		props.forEach(function propsForEachCb(prop) {
			if(result[prop]) {
				result = result[prop];
			} else {
				result = null;
			}
		});
	} catch(e) {
		result = null;
	}
	return result;
};
