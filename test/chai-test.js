var chai = require('chai');
var expect = chai.expect;
var fakeArray = require('../fake-array.js');

// describe('My fake array object', function() {
//   describe('The pop method', function() {

//     before(function() {
//       fakeArray[0] = 1;
//       fakeArray[1] = 2;
//       fakeArray[2] = 3;
//       fakeArray.length = 3;
//     });

//     it('should return the final element', function() {
//       assert.equal(fakeArray.pop(), 3);
//     });
//   });
// });

  describe('Pops and pushes', function() {

    before (function() {
      fakeArray[0] = 1;
      fakeArray[1] = 3;
      fakeArray[2] = 5;
      fakeArray[3] = 7;
      fakeArray[4] = 9;
      fakeArray[5] = 11;
      fakeArray.length = 6;

      fakeArray.pop();
      fakeArray.pop();
    });

    it('should pop off 11 and 9, then return the last element added by push', function() {
      assert.equal(fakeArray.push(12), 5)
    });
  });

  describe('Pushing stuff', function() {
    var arrLength;

    before(function() {
      fakeArray[0] = 2;
      fakeArray[1] = 4;
      fakeArray[2] = 6;
      fakeArray[3] = 8;
      fakeArray[4] = 10;

      arrLength = fakeArray.push(12);
    });

    it('Push on 12, length of fakeArray should be 6', function(){
      assert.equal(arrLength, 6)
    });
  });

  describe('Joining with an exclamation point', function() {
    var arrJoin;

    before(function() {
      arrJoin = fakeArray.join('! ');
    });

    it('should add an exc. point between array items', function() {
      assert.equal(arrJoin, '2! 4! 6! 8! 10! 12');
    });
  });




