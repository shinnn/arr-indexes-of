# arr-indexes-of

[![npm version](https://img.shields.io/npm/v/arr-indexes-of.svg)](https://www.npmjs.com/package/arr-indexes-of)
[![Build Status](https://travis-ci.org/shinnn/arr-indexes-of.svg?branch=master)](https://travis-ci.org/shinnn/arr-indexes-of)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/arr-indexes-of.svg)](https://coveralls.io/github/shinnn/arr-indexes-of?branch=master)

Like [`Array#indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), but return all indexes instead of the first one

```javascript
import arrIndexesOf from 'arr-indexes-of';

arrIndexesOf(['a', 'a', 'a'], 'a'); //=> [0, 1, 2]
arrIndexesOf(['5', 5, 15, 'five', 5], 5); //=> [1, 4]
```

Almost the same module as [indexes-of](https://github.com/dominictarr/indexes-of), but:

* only supports `Array` by design
  * throws `TypeError` when it takes a `String`
* supports optional [`fromIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#Parameters) parameter

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install arr-indexes-of
```

## API

```javascript
import arrIndexesOf from 'arr-indexes-of';
```

### arrIndexesOf(*array*, *searchValue* [, *fromIndex*])

*array*: `Array`  
*searchValue*:  any type (value to search for)  
*fromIndex*: `integer` (index in the string where to begin searching)  
Return: `Array`

```javascript
arrIndexesOf(['A', 'B', 'C', '-', 'A', 'B', 'C'], 'A'); //=> [0, 4]
arrIndexesOf(['A', 'B', 'C', '-', 'A', 'B', 'C'], 'A', 4); //=> [4]
```

## Related project

[str-indexes-of](https://github.com/shinnn/str-indexes-of) - [`String#indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) version

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
