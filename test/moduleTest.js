'use strict';
require('chai').should();

var objectPath = require('../index');

describe('Object Path tests', function describeCb() {

	it('Should find valid path for valid object.', function itCb(done) {
		var obj = {animal: {type: 'Feline', dailyNeeds: [{timeOfDay: 'morning', need: 'Breakfast'}, {timeOfDay: 'evening', need: 'Dinner'}]}};
		var result = objectPath(obj, 'animal/dailyNeeds/1/timeOfDay');
		result.should.equal('evening');
		(typeof result).should.equal('string');
		done();
	});

	it('Should fail to find path based on invalid object.', function itCb(done) {
		var obj = 'invalid_object';
		var result = objectPath(obj, 'animal/dailyNeeds/1/timeOfDay');
		(result === null).should.equal(true);
		(typeof result).should.equal('object');
		done();
	});

});
