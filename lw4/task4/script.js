String.prototype.countCoincidence = function(str) {
  if (typeof str !== 'string' || !str) {
    return 0;
  }
  return this.toLowerCase().split(str.toLowerCase()).length - 1;
}