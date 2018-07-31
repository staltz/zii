# zii

**Chain function calls using a prototype function `.z()`**

Adds a function `z` to the Object prototype so that you can right-compose functions together. This is like the [proposed pipeline operator `|>`](https://github.com/tc39/proposal-pipeline-operator), but implemented in ES5.

**`value.z(first).z(second)` is the same as `second(first(value))`**

- 150 bytes small!
- Works with RxJS 6+
- Works with Callbags
- Works with plain functions and numbers and strings
- Supports TypeScript

## Installation

```sh
npm install zii
```

## Usage

```js
require('zii');
// Nothing else needed! This require will mutate the Object prototype
```

## Examples

### RxJS

```js
require('zii')
const {from} = require('rxjs')
const {map, filter} = require('rxjs/operators')

from([1, 2, 3, 4, 5])
  .z(filter(x => x % 2 === 1))
  .z(map(x => x * 10))
  .subscribe({
    next: x => console.log(x)
  })
```

### Callbags

```js
require('zii')
const {fromIter, map, filter, forEach} = require('callbag-basics')

fromIter([1, 2, 3, 4, 5])
  .z(filter(x => x % 2 === 1))
  .z(map(x => x * 10))
  .z(forEach(console.log))
```

### Simple JS

```js
function doubleSay(str) {
  return str + ', ' + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + '!';
}

'hello'
  .z(doubleSay)
  .z(capitalize)
  .z(exclaim)
  .z(console.log) // Hello, hello!
```

## License

[MIT](LICENSE)