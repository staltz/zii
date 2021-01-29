Object.defineProperty(Object.prototype, 'z', {
  value: function(f) {
    if (typeof f === 'function') return f(this.valueOf());
  },
  writable: true,
  configurable: true,
});
