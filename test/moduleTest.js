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

	it('Should find valid path for a falsey value.', function itCb(done) {
		var obj = {numErrors: 0};
		var result = objectPath(obj, 'numErrors');
		(result).should.equal(0);
		done();
	});

	it('Should find valid path through falsey props.', function itCb(done) {
		// We want to be able to access the values of 0-th indices, maybe empty strings.
		var obj = {prop: [{'': {'val of empty string': 'val of val'}}]};
		var result = objectPath(obj, 'prop/0//val of empty string');
		(result).should.equal('val of val');
		done();
	});

	it('Should return null if a path is followed but the final value is undefined.', function itCb(done) {
		var obj = {first: {second: {}}};
		var result = objectPath(obj, 'first/second/third');
		(result === null).should.equal(true);
		done();
	});

});
