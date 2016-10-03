# arr-indexes-of

[![NPM version](https://img.shields.io/npm/v/arr-indexes-of.svg)](https://www.npmjs.com/package/arr-indexes-of)
[![Bower version](https://img.shields.io/bower/v/arr-indexes-of.svg)](https://github.com/shinnn/arr-indexes-of/releases)
[![Build Status](https://travis-ci.org/shinnn/arr-indexes-of.svg?branch=master)](https://travis-ci.org/shinnn/arr-indexes-of)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/arr-indexes-of.svg)](https://coveralls.io/r/shinnn/arr-indexes-of)
[![devDependencies Status](https://david-dm.org/shinnn/arr-indexes-of/dev-status.svg)](https://david-dm.org/shinnn/arr-indexes-of?type=dev)

Like [`Array#indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), but return all indexes instead of the first one

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

### [npm](https://www.npmjs.com/)

```
npm install arr-indexes-of
```

### [bower](https://bower.io/)

```
bower install arr-indexes-of
```

## API

### arrIndexesOf(*array*, *searchValue* [, *fromIndex*])

*array*: `Array`  
*searchValue*:  any type (value to search for)  
*fromIndex*: `Number` (index in the string where to begin searching)  
Return: `Array`

```javascript
arrIndexesOf(['A', 'B', 'C', '-', 'A', 'B', 'C'], 'A'); //=> [0, 4]
arrIndexesOf(['A', 'B', 'C', '-', 'A', 'B', 'C'], 'A', 4); //=> [4]
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
