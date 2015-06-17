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