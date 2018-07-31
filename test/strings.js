const test = require('tape');
require('../index');

test('it can be used with string functions', t => {
  t.plan(1);
  function doubleSay(str) {
    return str + ', ' + str;
  }
  function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  function exclaim(str) {
    return str + '!';
  }

  const final = 'hello'
    .z(doubleSay)
    .z(capitalize)
    .z(exclaim);
  t.deepEquals(final, 'Hello, hello!');
});
