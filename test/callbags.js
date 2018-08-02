const test = require('tape');
const {fromIter, map, filter, forEach} = require('callbag-basics');
require('../index');

test('it can be used with callbag basics', t => {
  t.plan(3);

  const expected = [10, 30, 50];

  fromIter([1, 2, 3, 4, 5])
    .z(filter(x => x % 2 === 1))
    .z(map(x => x * 10))
    .z(
      forEach(x => {
        t.deepEquals(x, expected.shift());
      })
    );
});
