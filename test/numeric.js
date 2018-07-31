const test = require('tape');
require('../index');

test('it can be used with numeric functions', t => {
  t.plan(1);
  const times3 = x => x * 3;
  const divide4 = x => x / 4;

  const final = (10)
    .z(times3)
    .z(divide4)
    .z(Math.ceil);
  t.deepEquals(final, 8);
});
