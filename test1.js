var assert = require('assert');

var arr = [1,2,3],
    lastElem = arr.pop();

assert.equal(lastElem, 3, "expected " + lastElem + " to equal 3, but it didn't!" );


var arr = [2,4,6,8,10],
  arrLength = arr.push(12);
  firstElem = arr.shift();

assert.equal(arrLength, 6, "expected" + arrLength + " to equal 6, but it didn't!");

assert.equal(firstElem, 2, "expected" + firstElem + " to equal 2, but it didn't!");

var b = ['a', 'b', 'c'];
var b2 = b.join(', ');
var b3 = b.join('! ')

assert.equal(b2, 'a, b, c', "expected" + b2 + " to look like this!");
assert.equal(b3, 'a! b! c', "expected" + b3 + " to look like this!");

var arr2 = [1,3,5,7,9,11];
arr2.pop();
arr2.pop();
var arrResult = arr2.push(12);


assert.equal(arrResult, 5, 'expected' + arrResult + " to be 5, but it's not!")