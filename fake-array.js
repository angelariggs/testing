//[1,2,3]
//this.length = 3; this.length - 1 = 2; this[this.length-1] = this[2] = 3;

module.exports = {
  length: 0,
  pop: function() {
    var returnValue = this[this.length - 1];
    this[this.length-1] = undefined;
    this.length--;
    return returnValue;
  },
  push: function(input) {
    this[this.length] = input;
    this.length++;
    return this.length;
  },
  join: function(item) {
    var string = '';
    for (var i = 0; i = this.length; i++) {
      if (i < this.length) {
        string += this[i] + item
      } else {
        string = this.length[i]
      }
    }
  }
};

//join retruns a string

// var b = ['a', 'b', 'c'];
// var b2 = b.join(', ');
// var b3 = b.join('! ')

// assert.equal(b2, 'a, b, c', "expected" + b2 + " to look like this!");
// assert.equal(b3, 'a! b! c!', "expected" + b3 + " to look like this!");