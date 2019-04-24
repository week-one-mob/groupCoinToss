import coinTossFunction from '../src/coinTossFunction.js';
const test = QUnit.test;

test('get heads for less then .5', function(assert) {
    const number = .49;
    const expected = "heads";

    const result = coinTossFunction(number);

    assert.equal(result, expected);
});

test('get tails for greater then or equal then 5', function(assert) {
    const number = .5;
    const expected = "tails";

    const result = coinTossFunction(number);
  
    assert.equal(result, expected);
});