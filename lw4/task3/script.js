Array.prototype.forEachRight = function (arr) {
  var array = this;
  for (var i = array.length - 1; i >= 0; i--) {
    arr(array[i], i, array);
  }
};