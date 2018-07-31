const test = require('tape');
require('../index');
const {from} = require('rxjs');
const {map, filter} = require('rxjs/operators');

test('it can be used with RxJS', t => {
  t.plan(3);

  const expected = [10, 30, 50];

  from([1, 2, 3, 4, 5])
    .z(filter(x => x % 2 === 1))
    .z(map(x => x * 10))
    .subscribe(x => {
      t.deepEquals(x, expected.shift());
    });
});
