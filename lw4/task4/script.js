String.prototype.countCoincidence = function(arg) {
  if (typeof arg !== 'string') {
    return 0;
  }
  if (!arg) {
    return 0;
  }
  return this.toLowerCase().split(arg.toLowerCase()).length - 1;
}