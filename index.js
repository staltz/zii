Object.defineProperty(Object.prototype, 'z', {
  value: function(f) {
    return f(this.valueOf());
  },
  writable: true,
  configurable: true,
});
