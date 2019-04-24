import coinTossFunction from '../src/coinTossFunction.js';
const test = QUnit.test;

test('get heads for less then .5', function(assert) {
    //Arrange
    const number = .49;
    const expected = "heads";
    //Act 
    const result = coinTossFunction(number);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});

test('get tails for greater then or equal then 5', function(assert) {
    //Arrange
    const number = .5;
    const expected = "tails";
    //Act 
    const result = coinTossFunction(number);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});