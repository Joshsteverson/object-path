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

	it('Should find valid path through falsey props other than undefined.', function itCb(done) {
		// We want to be able to access the values of 0-th indices, maybe empty strings.
		// The rest is weird.
		var obj = {prop: [{[false]: {'': {[null]: {[NaN]: 'val at end of weird path'}}}}]};
		var result = objectPath(obj, 'prop/0/false//null/NaN');
		(result).should.equal('val at end of weird path');
		done();
	});

	it('Should return null if a path is followed but the final value is undefined.', function itCb(done) {
		var obj = {first: {second: {}}};
		var result = objectPath(obj, 'first/second/third');
		(result === null).should.equal(true);
		done();
	});

});
