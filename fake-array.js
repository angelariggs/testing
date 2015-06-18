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
    for (var i = 0; i < this.length-1; i++) {
      string += this[i] + item;
    } 
    string += this[this.length-1];
    return string;
  },
  filter: function (callback) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i]) === true) {
        arr.push(this[i]);
      }
    } return arr;
  }

};

//filter checks each item in the array against a param
//if the param is met, the item from the array is kept and put into a new array

// function filt(nums) {
//   return nums <=10;
// }

// var arr =[2,4,6,8,10,12];

// console.log(arr.filter(filt));










