const test = require('tape');
require('../index');

test('it can be used to output an object with a field "z"', t => {
  t.plan(1);
  const times3 = x => x * 3;
  const calculateCoords = i => ({x: i, y: i, z: i});

  const final = (3).z(times3).z(calculateCoords);
  t.deepEquals(final, {x: 9, y: 9, z: 9});
});

test('it cannot be used with an input object with field "z"', t => {
  t.plan(1);
  const times3 = x => x * 3;
  const calculateCoords = i => ({x: i, y: i, z: i});
  const pickY = coords => coords.y;

  const pre = (3).z(times3).z(calculateCoords);

  try {
    const post = pre.z(pickY);
  } catch (err) {
    t.deepEquals(err.message, 'pre.z is not a function');
  }
});
