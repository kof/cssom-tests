/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/batch-immutable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/immutable/dist/immutable.js":
/*!**************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }

    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
    return isIterable(value) ? value : Seq(value);
  }

  createClass(KeyedIterable, Iterable);

  function KeyedIterable(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  createClass(IndexedIterable, Iterable);

  function IndexedIterable(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  createClass(SetIterable, Iterable);

  function SetIterable(value) {
    return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;
  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;
  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@'; // Used for setting prototype methods that IE8 chokes on.

  var DELETE = 'delete'; // Constants describing the size of trie nodes.

  var SHIFT = 5; // Resulted in best performance after ______?

  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1; // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.

  var NOT_SET = {}; // Boolean references, Rough equivalent of `bool &`.

  var CHANGE_LENGTH = {
    value: false
  };
  var DID_ALTER = {
    value: false
  };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  } // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.


  function OwnerID() {} // http://jsperf.com/copy-array-inline


  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);

    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }

    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }

    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32

      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }

      index = uint32Index;
    }

    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || size !== undefined && begin <= -size) && (end === undefined || size !== undefined && end >= size);
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === undefined ? index : Math.min(size, index);
  }
  /* global Symbol */


  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;
  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

  function Iterator(next) {
    this.next = next;
  }

  Iterator.prototype.toString = function () {
    return '[Iterator]';
  };

  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
    return this.toString();
  };

  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };

  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? iteratorResult.value = value : iteratorResult = {
      value: value,
      done: false
    };
    return iteratorResult;
  }

  function iteratorDone() {
    return {
      value: undefined,
      done: true
    };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);

  function Seq(value) {
    return value === null || value === undefined ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
  }

  Seq.of = function ()
  /*...values*/
  {
    return Seq(arguments);
  };

  Seq.prototype.toSeq = function () {
    return this;
  };

  Seq.prototype.toString = function () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }

    return this;
  }; // abstract __iterateUncached(fn, reverse)


  Seq.prototype.__iterate = function (fn, reverse) {
    return seqIterate(this, fn, reverse, true);
  }; // abstract __iteratorUncached(type, reverse)


  Seq.prototype.__iterator = function (type, reverse) {
    return seqIterator(this, type, reverse, true);
  };

  createClass(KeyedSeq, Seq);

  function KeyedSeq(value) {
    return value === null || value === undefined ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
  }

  KeyedSeq.prototype.toKeyedSeq = function () {
    return this;
  };

  createClass(IndexedSeq, Seq);

  function IndexedSeq(value) {
    return value === null || value === undefined ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
  }

  IndexedSeq.of = function ()
  /*...values*/
  {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function () {
    return this;
  };

  IndexedSeq.prototype.toString = function () {
    return this.__toString('Seq [', ']');
  };

  IndexedSeq.prototype.__iterate = function (fn, reverse) {
    return seqIterate(this, fn, reverse, false);
  };

  IndexedSeq.prototype.__iterator = function (type, reverse) {
    return seqIterator(this, type, reverse, false);
  };

  createClass(SetSeq, Seq);

  function SetSeq(value) {
    return (value === null || value === undefined ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
  }

  SetSeq.of = function ()
  /*...values*/
  {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function () {
    return this;
  };

  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;
  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
  Seq.prototype[IS_SEQ_SENTINEL] = true;
  createClass(ArraySeq, IndexedSeq);

  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  ArraySeq.prototype.get = function (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function (fn, reverse) {
    var array = this._array;
    var maxIndex = array.length - 1;

    for (var ii = 0; ii <= maxIndex; ii++) {
      if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
        return ii + 1;
      }
    }

    return ii;
  };

  ArraySeq.prototype.__iterator = function (type, reverse) {
    var array = this._array;
    var maxIndex = array.length - 1;
    var ii = 0;
    return new Iterator(function () {
      return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
    });
  };

  createClass(ObjectSeq, KeyedSeq);

  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  ObjectSeq.prototype.get = function (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }

    return this._object[key];
  };

  ObjectSeq.prototype.has = function (key) {
    return this._object.hasOwnProperty(key);
  };

  ObjectSeq.prototype.__iterate = function (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var maxIndex = keys.length - 1;

    for (var ii = 0; ii <= maxIndex; ii++) {
      var key = keys[reverse ? maxIndex - ii : ii];

      if (fn(object[key], key, this) === false) {
        return ii + 1;
      }
    }

    return ii;
  };

  ObjectSeq.prototype.__iterator = function (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var maxIndex = keys.length - 1;
    var ii = 0;
    return new Iterator(function () {
      var key = keys[reverse ? maxIndex - ii : ii];
      return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
    });
  };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
  createClass(IterableSeq, IndexedSeq);

  function IterableSeq(iterable) {
    this._iterable = iterable;
    this.size = iterable.length || iterable.size;
  }

  IterableSeq.prototype.__iterateUncached = function (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var iterable = this._iterable;
    var iterator = getIterator(iterable);
    var iterations = 0;

    if (isIterator(iterator)) {
      var step;

      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }

    return iterations;
  };

  IterableSeq.prototype.__iteratorUncached = function (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterable = this._iterable;
    var iterator = getIterator(iterable);

    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }

    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  createClass(IteratorSeq, IndexedSeq);

  function IteratorSeq(iterator) {
    this._iterator = iterator;
    this._iteratorCache = [];
  }

  IteratorSeq.prototype.__iterateUncached = function (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var iterator = this._iterator;
    var cache = this._iteratorCache;
    var iterations = 0;

    while (iterations < cache.length) {
      if (fn(cache[iterations], iterations++, this) === false) {
        return iterations;
      }
    }

    var step;

    while (!(step = iterator.next()).done) {
      var val = step.value;
      cache[iterations] = val;

      if (fn(val, iterations++, this) === false) {
        break;
      }
    }

    return iterations;
  };

  IteratorSeq.prototype.__iteratorUncached = function (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterator = this._iterator;
    var cache = this._iteratorCache;
    var iterations = 0;
    return new Iterator(function () {
      if (iterations >= cache.length) {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        cache[iterations] = step.value;
      }

      return iteratorValue(type, iterations, cache[iterations++]);
    });
  }; // # pragma Helper functions


  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === 'object' ? new ObjectSeq(value) : undefined;

    if (!seq) {
      throw new TypeError('Expected Array or iterable object of [k, v] entries, ' + 'or keyed object: ' + value);
    }

    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);

    if (!seq) {
      throw new TypeError('Expected Array or iterable object of values: ' + value);
    }

    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) || typeof value === 'object' && new ObjectSeq(value);

    if (!seq) {
      throw new TypeError('Expected Array or iterable object of values, or keyed object: ' + value);
    }

    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : undefined;
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;

    if (cache) {
      var maxIndex = cache.length - 1;

      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];

        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }

      return ii;
    }

    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;

    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function () {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }

    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ? fromJSWith(converter, json, '', {
      '': json
    }) : fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function (v, k) {
        return fromJSWith(converter, v, k, json);
      }));
    }

    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function (v, k) {
        return fromJSWith(converter, v, k, json);
      }));
    }

    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }

    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }

    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }
  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */


  function is(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }

    if (!valueA || !valueB) {
      return false;
    }

    if (typeof valueA.valueOf === 'function' && typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();

      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }

      if (!valueA || !valueB) {
        return false;
      }
    }

    if (typeof valueA.equals === 'function' && typeof valueB.equals === 'function' && valueA.equals(valueB)) {
      return true;
    }

    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (!isIterable(b) || a.size !== undefined && b.size !== undefined && a.size !== b.size || a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;

    var bSize = b.__iterate(function (v, k) {
      if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }

    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);

    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }

      EMPTY_REPEAT = this;
    }
  }

  Repeat.prototype.toString = function () {
    if (this.size === 0) {
      return 'Repeat []';
    }

    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
  };

  Repeat.prototype.reverse = function () {
    return this;
  };

  Repeat.prototype.indexOf = function (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }

    return -1;
  };

  Repeat.prototype.lastIndexOf = function (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }

    return -1;
  };

  Repeat.prototype.__iterate = function (fn, reverse) {
    for (var ii = 0; ii < this.size; ii++) {
      if (fn(this._value, ii, this) === false) {
        return ii + 1;
      }
    }

    return ii;
  };

  Repeat.prototype.__iterator = function (type, reverse) {
    var this$0 = this;
    var ii = 0;
    return new Iterator(function () {
      return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
    });
  };

  Repeat.prototype.equals = function (other) {
    return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
  };

  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }

    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;

    if (end === undefined) {
      end = Infinity;
    }

    step = step === undefined ? 1 : Math.abs(step);

    if (end < start) {
      step = -step;
    }

    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);

    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }

      EMPTY_RANGE = this;
    }
  }

  Range.prototype.toString = function () {
    if (this.size === 0) {
      return 'Range []';
    }

    return 'Range [ ' + this._start + '...' + this._end + (this._step !== 1 ? ' by ' + this._step : '') + ' ]';
  };

  Range.prototype.get = function (index, notSetValue) {
    return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
  };

  Range.prototype.includes = function (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
  };

  Range.prototype.slice = function (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }

    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);

    if (end <= begin) {
      return new Range(0, 0);
    }

    return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
  };

  Range.prototype.indexOf = function (searchValue) {
    var offsetValue = searchValue - this._start;

    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;

      if (index >= 0 && index < this.size) {
        return index;
      }
    }

    return -1;
  };

  Range.prototype.lastIndexOf = function (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function (fn, reverse) {
    var maxIndex = this.size - 1;
    var step = this._step;
    var value = reverse ? this._start + maxIndex * step : this._start;

    for (var ii = 0; ii <= maxIndex; ii++) {
      if (fn(value, ii, this) === false) {
        return ii + 1;
      }

      value += reverse ? -step : step;
    }

    return ii;
  };

  Range.prototype.__iterator = function (type, reverse) {
    var maxIndex = this.size - 1;
    var step = this._step;
    var value = reverse ? this._start + maxIndex * step : this._start;
    var ii = 0;
    return new Iterator(function () {
      var v = value;
      value += reverse ? -step : step;
      return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
    });
  };

  Range.prototype.equals = function (other) {
    return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
  };

  var EMPTY_RANGE;
  createClass(Collection, Iterable);

  function Collection() {
    throw TypeError('Abstract');
  }

  createClass(KeyedCollection, Collection);

  function KeyedCollection() {}

  createClass(IndexedCollection, Collection);

  function IndexedCollection() {}

  createClass(SetCollection, Collection);

  function SetCollection() {}

  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;
  var imul = typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ? Math.imul : function imul(a, b) {
    a = a | 0; // int

    b = b | 0; // int

    var c = a & 0xffff;
    var d = b & 0xffff; // Shift by 0 fixes the sign on the high part.

    return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0; // int
  }; // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.

  function smi(i32) {
    return i32 >>> 1 & 0x40000000 | i32 & 0xBFFFFFFF;
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }

    if (typeof o.valueOf === 'function') {
      o = o.valueOf();

      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }

    if (o === true) {
      return 1;
    }

    var type = typeof o;

    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }

      var h = o | 0;

      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }

      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }

      return smi(h);
    }

    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }

    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }

    if (type === 'object') {
      return hashJSObj(o);
    }

    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }

    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];

    if (hash === undefined) {
      hash = hashString(string);

      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }

      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }

    return hash;
  } // http://jsperf.com/hashing-strings


  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;

    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }

    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;

    if (usingWeakMap) {
      hash = weakMap.get(obj);

      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];

    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];

      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);

      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;

    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function () {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };

      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  } // Get references to ES5 object methods.


  var isExtensible = Object.isExtensible; // True if Object.defineProperty works as expected. IE8 fails this test.

  var canDefineProperty = function () {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }(); // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.


  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          // Element
          return node.uniqueID;

        case 9:
          // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  } // If possible, use a WeakMap.


  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;

  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;
  var UID_HASH_KEY = '__immutablehash__';

  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(size !== Infinity, 'Cannot perform this action with an infinite size.');
  }

  createClass(Map, KeyedCollection); // @pragma Construction

  function Map(value) {
    return value === null || value === undefined ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function (map) {
      var iter = KeyedIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v, k) {
        return map.set(k, v);
      });
    });
  }

  Map.of = function () {
    var keyValues = SLICE$0.call(arguments, 0);
    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }

        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function () {
    return this.__toString('Map {', '}');
  }; // @pragma Access


  Map.prototype.get = function (k, notSetValue) {
    return this._root ? this._root.get(0, undefined, k, notSetValue) : notSetValue;
  }; // @pragma Modification


  Map.prototype.set = function (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.setIn = function (keyPath, v) {
    return this.updateIn(keyPath, NOT_SET, function () {
      return v;
    });
  };

  Map.prototype.remove = function (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteIn = function (keyPath) {
    return this.updateIn(keyPath, function () {
      return NOT_SET;
    });
  };

  Map.prototype.update = function (k, notSetValue, updater) {
    return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
  };

  Map.prototype.updateIn = function (keyPath, notSetValue, updater) {
    if (!updater) {
      updater = notSetValue;
      notSetValue = undefined;
    }

    var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
    return updatedValue === NOT_SET ? undefined : updatedValue;
  };

  Map.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyMap();
  }; // @pragma Composition


  Map.prototype.merge = function ()
  /*...iters*/
  {
    return mergeIntoMapWith(this, undefined, arguments);
  };

  Map.prototype.mergeWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoMapWith(this, merger, iters);
  };

  Map.prototype.mergeIn = function (keyPath) {
    var iters = SLICE$0.call(arguments, 1);
    return this.updateIn(keyPath, emptyMap(), function (m) {
      return typeof m.merge === 'function' ? m.merge.apply(m, iters) : iters[iters.length - 1];
    });
  };

  Map.prototype.mergeDeep = function ()
  /*...iters*/
  {
    return mergeIntoMapWith(this, deepMerger, arguments);
  };

  Map.prototype.mergeDeepWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoMapWith(this, deepMergerWith(merger), iters);
  };

  Map.prototype.mergeDeepIn = function (keyPath) {
    var iters = SLICE$0.call(arguments, 1);
    return this.updateIn(keyPath, emptyMap(), function (m) {
      return typeof m.mergeDeep === 'function' ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
    });
  };

  Map.prototype.sort = function (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  }; // @pragma Mutability


  Map.prototype.withMutations = function (fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
  };

  Map.prototype.asMutable = function () {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
  };

  Map.prototype.asImmutable = function () {
    return this.__ensureOwner();
  };

  Map.prototype.wasAltered = function () {
    return this.__altered;
  };

  Map.prototype.__iterator = function (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    var iterations = 0;
    this._root && this._root.iterate(function (entry) {
      iterations++;
      return fn(entry[1], entry[0], this$0);
    }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;
  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn; // #pragma Trie Nodes

  function ArrayMapNode(ownerID, entries) {
    this.ownerID = ownerID;
    this.entries = entries;
  }

  ArrayMapNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    var entries = this.entries;

    for (var ii = 0, len = entries.length; ii < len; ii++) {
      if (is(key, entries[ii][0])) {
        return entries[ii][1];
      }
    }

    return notSetValue;
  };

  ArrayMapNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var entries = this.entries;
    var idx = 0;

    for (var len = entries.length; idx < len; idx++) {
      if (is(key, entries[idx][0])) {
        break;
      }
    }

    var exists = idx < len;

    if (exists ? entries[idx][1] === value : removed) {
      return this;
    }

    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);

    if (removed && entries.length === 1) {
      return; // undefined
    }

    if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
      return createNodes(ownerID, entries, key, value);
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);

    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }

    if (isEditable) {
      this.entries = newEntries;
      return this;
    }

    return new ArrayMapNode(ownerID, newEntries);
  };

  function BitmapIndexedNode(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
  }

  BitmapIndexedNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
  };

  BitmapIndexedNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;

    if (!exists && value === NOT_SET) {
      return this;
    }

    var idx = popCount(bitmap & bit - 1);
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : undefined;
    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

    if (newNode === node) {
      return this;
    }

    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
      return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
    }

    if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
      return nodes[idx ^ 1];
    }

    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
      return newNode;
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
    var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);

    if (isEditable) {
      this.bitmap = newBitmap;
      this.nodes = newNodes;
      return this;
    }

    return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
  };

  function HashArrayMapNode(ownerID, count, nodes) {
    this.ownerID = ownerID;
    this.count = count;
    this.nodes = nodes;
  }

  HashArrayMapNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var node = this.nodes[idx];
    return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
  };

  HashArrayMapNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var removed = value === NOT_SET;
    var nodes = this.nodes;
    var node = nodes[idx];

    if (removed && !node) {
      return this;
    }

    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

    if (newNode === node) {
      return this;
    }

    var newCount = this.count;

    if (!node) {
      newCount++;
    } else if (!newNode) {
      newCount--;

      if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
        return packNodes(ownerID, nodes, newCount, idx);
      }
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setIn(nodes, idx, newNode, isEditable);

    if (isEditable) {
      this.count = newCount;
      this.nodes = newNodes;
      return this;
    }

    return new HashArrayMapNode(ownerID, newCount, newNodes);
  };

  function HashCollisionNode(ownerID, keyHash, entries) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries;
  }

  HashCollisionNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    var entries = this.entries;

    for (var ii = 0, len = entries.length; ii < len; ii++) {
      if (is(key, entries[ii][0])) {
        return entries[ii][1];
      }
    }

    return notSetValue;
  };

  HashCollisionNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) {
      keyHash = hash(key);
    }

    var removed = value === NOT_SET;

    if (keyHash !== this.keyHash) {
      if (removed) {
        return this;
      }

      SetRef(didAlter);
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
    }

    var entries = this.entries;
    var idx = 0;

    for (var len = entries.length; idx < len; idx++) {
      if (is(key, entries[idx][0])) {
        break;
      }
    }

    var exists = idx < len;

    if (exists ? entries[idx][1] === value : removed) {
      return this;
    }

    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);

    if (removed && len === 2) {
      return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
    }

    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);

    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }

    if (isEditable) {
      this.entries = newEntries;
      return this;
    }

    return new HashCollisionNode(ownerID, this.keyHash, newEntries);
  };

  function ValueNode(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
  }

  ValueNode.prototype.get = function (shift, keyHash, key, notSetValue) {
    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
  };

  ValueNode.prototype.update = function (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var keyMatch = is(key, this.entry[0]);

    if (keyMatch ? value === this.entry[1] : removed) {
      return this;
    }

    SetRef(didAlter);

    if (removed) {
      SetRef(didChangeSize);
      return; // undefined
    }

    if (keyMatch) {
      if (ownerID && ownerID === this.ownerID) {
        this.entry[1] = value;
        return this;
      }

      return new ValueNode(ownerID, this.keyHash, [key, value]);
    }

    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
  }; // #pragma Iterators


  ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;

    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };

  BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;

    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];

      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  };

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  };

  createClass(MapIterator, Iterator);

  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  MapIterator.prototype.next = function () {
    var type = this._type;
    var stack = this._stack;

    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex;

      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;

        if (index <= maxIndex) {
          return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
        }
      } else {
        maxIndex = node.nodes.length - 1;

        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];

          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }

            stack = this._stack = mapIteratorFrame(subNode, stack);
          }

          continue;
        }
      }

      stack = this._stack = this._stack.__prev;
    }

    return iteratorDone();
  };

  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;

  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;

    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }

      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);

      if (!didAlter.value) {
        return map;
      }

      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }

    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }

    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }

      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }

    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }

    var node = new ValueNode(ownerID, hash(key), [key, value]);

    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }

    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);

    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];

      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }

    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);

    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }

    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];

    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);

      if (!isIterable(value)) {
        iter = iter.map(function (v) {
          return fromJS(v);
        });
      }

      iters.push(iter);
    }

    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function (existing, value, key) {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }

      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function (x) {
      return x.size !== 0;
    });

    if (iters.length === 0) {
      return collection;
    }

    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }

    return collection.withMutations(function (collection) {
      var mergeIntoMap = merger ? function (value, key) {
        collection.update(key, NOT_SET, function (existing) {
          return existing === NOT_SET ? value : merger(existing, value, key);
        });
      } : function (value, key) {
        collection.set(key, value);
      };

      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();

    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }

    invariant(isNotSet || existing && existing.set, 'invalid keyPath');
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
    return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - (x >> 1 & 0x55555555);
    x = (x & 0x33333333) + (x >> 2 & 0x33333333);
    x = x + (x >> 4) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;

    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }

    var newArray = new Array(newLen);
    var after = 0;

    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }

    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;

    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }

    var newArray = new Array(newLen);
    var after = 0;

    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }

      newArray[ii] = array[ii + after];
    }

    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
  createClass(List, IndexedCollection); // @pragma Construction

  function List(value) {
    var empty = emptyList();

    if (value === null || value === undefined) {
      return empty;
    }

    if (isList(value)) {
      return value;
    }

    var iter = IndexedIterable(value);
    var size = iter.size;

    if (size === 0) {
      return empty;
    }

    assertNotInfinite(size);

    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }

    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) {
        return list.set(i, v);
      });
    });
  }

  List.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  List.prototype.toString = function () {
    return this.__toString('List [', ']');
  }; // @pragma Access


  List.prototype.get = function (index, notSetValue) {
    index = wrapIndex(this, index);

    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }

    return notSetValue;
  }; // @pragma Modification


  List.prototype.set = function (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function (index) {
    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  };

  List.prototype.insert = function (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyList();
  };

  List.prototype.push = function ()
  /*...values*/
  {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);

      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function ()
  /*...values*/
  {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);

      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function () {
    return setListBounds(this, 1);
  }; // @pragma Composition


  List.prototype.merge = function ()
  /*...iters*/
  {
    return mergeIntoListWith(this, undefined, arguments);
  };

  List.prototype.mergeWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoListWith(this, merger, iters);
  };

  List.prototype.mergeDeep = function ()
  /*...iters*/
  {
    return mergeIntoListWith(this, deepMerger, arguments);
  };

  List.prototype.mergeDeepWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return mergeIntoListWith(this, deepMergerWith(merger), iters);
  };

  List.prototype.setSize = function (size) {
    return setListBounds(this, 0, size);
  }; // @pragma Iteration


  List.prototype.slice = function (begin, end) {
    var size = this.size;

    if (wholeSlice(begin, end, size)) {
      return this;
    }

    return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
  };

  List.prototype.__iterator = function (type, reverse) {
    var index = 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
    });
  };

  List.prototype.__iterate = function (fn, reverse) {
    var index = 0;
    var values = iterateList(this, reverse);
    var value;

    while ((value = values()) !== DONE) {
      if (fn(value, index++, this) === false) {
        break;
      }
    }

    return index;
  };

  List.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      this.__ownerID = ownerID;
      return this;
    }

    return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
  };

  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;
  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;

  function VNode(array, ownerID) {
    this.array = array;
    this.ownerID = ownerID;
  } // TODO: seems like these methods are very similar


  VNode.prototype.removeBefore = function (ownerID, level, index) {
    if (index === level ? 1 << level : 0 || this.array.length === 0) {
      return this;
    }

    var originIndex = index >>> level & MASK;

    if (originIndex >= this.array.length) {
      return new VNode([], ownerID);
    }

    var removingFirst = originIndex === 0;
    var newChild;

    if (level > 0) {
      var oldChild = this.array[originIndex];
      newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);

      if (newChild === oldChild && removingFirst) {
        return this;
      }
    }

    if (removingFirst && !newChild) {
      return this;
    }

    var editable = editableVNode(this, ownerID);

    if (!removingFirst) {
      for (var ii = 0; ii < originIndex; ii++) {
        editable.array[ii] = undefined;
      }
    }

    if (newChild) {
      editable.array[originIndex] = newChild;
    }

    return editable;
  };

  VNode.prototype.removeAfter = function (ownerID, level, index) {
    if (index === (level ? 1 << level : 0) || this.array.length === 0) {
      return this;
    }

    var sizeIndex = index - 1 >>> level & MASK;

    if (sizeIndex >= this.array.length) {
      return this;
    }

    var newChild;

    if (level > 0) {
      var oldChild = this.array[sizeIndex];
      newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);

      if (newChild === oldChild && sizeIndex === this.array.length - 1) {
        return this;
      }
    }

    var editable = editableVNode(this, ownerID);
    editable.array.splice(sizeIndex + 1);

    if (newChild) {
      editable.array[sizeIndex] = newChild;
    }

    return editable;
  };

  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;

      if (to > SIZE) {
        to = SIZE;
      }

      return function () {
        if (from === to) {
          return DONE;
        }

        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : left - offset >> level;
      var to = (right - offset >> level) + 1;

      if (to > SIZE) {
        to = SIZE;
      }

      return function () {
        do {
          if (values) {
            var value = values();

            if (value !== DONE) {
              return value;
            }

            values = null;
          }

          if (from === to) {
            return DONE;
          }

          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;

  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function (list) {
        index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
      });
    }

    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);

    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }

    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = index >>> level & MASK;
    var nodeHas = node && idx < node.array.length;

    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);

      if (newLowerNode === lowerNode) {
        return node;
      }

      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);
    newNode = editableVNode(node, ownerID);

    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }

    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }

    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }

    if (rawIndex < 1 << list._level + SHIFT) {
      var node = list._root;
      var level = list._level;

      while (node && level > 0) {
        node = node.array[rawIndex >>> level & MASK];
        level -= SHIFT;
      }

      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }

    if (end !== undefined) {
      end = end | 0;
    }

    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;

    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    } // If it's going to end after it starts, it's empty.


    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root; // New origin might need creating a higher root.

    var offsetShift = 0;

    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }

    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity); // New size might need creating a higher root.

    while (newTailOffset >= 1 << newLevel + SHIFT) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    } // Locate or create the new tail.


    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail; // Merge Tail into tree.

    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;

      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = oldTailOffset >>> level & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }

      node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
    } // If the size has been reduced, there's a chance the tail needs to be trimmed.


    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    } // If the new origin is within the tail, then we do not need a root.


    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin); // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0; // Identify the new top root node of the subtree of the old root.

      while (newRoot) {
        var beginIndex = newOrigin >>> newLevel & MASK;

        if (beginIndex !== newTailOffset >>> newLevel & MASK) {
          break;
        }

        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }

        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      } // Trim the new sides of the new root.


      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }

      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }

      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }

    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;

    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);

      if (iter.size > maxSize) {
        maxSize = iter.size;
      }

      if (!isIterable(value)) {
        iter = iter.map(function (v) {
          return fromJS(v);
        });
      }

      iters.push(iter);
    }

    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }

    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
  }

  createClass(OrderedMap, Map); // @pragma Construction

  function OrderedMap(value) {
    return value === null || value === undefined ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function (map) {
      var iter = KeyedIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v, k) {
        return map.set(k, v);
      });
    });
  }

  OrderedMap.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function () {
    return this.__toString('OrderedMap {', '}');
  }; // @pragma Access


  OrderedMap.prototype.get = function (k, notSetValue) {
    var index = this._map.get(k);

    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  }; // @pragma Modification


  OrderedMap.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;

      this._map.clear();

      this._list.clear();

      return this;
    }

    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._list.__iterate(function (entry) {
      return entry && fn(entry[1], entry[0], this$0);
    }, reverse);
  };

  OrderedMap.prototype.__iterator = function (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map.__ensureOwner(ownerID);

    var newList = this._list.__ensureOwner(ownerID);

    if (!ownerID) {
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }

    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;
  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;

  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;

    if (v === NOT_SET) {
      // removed
      if (!has) {
        return omap;
      }

      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function (entry, idx) {
          return entry !== undefined && i !== idx;
        });
        newMap = newList.toKeyedSeq().map(function (entry) {
          return entry[0];
        }).flip().toMap();

        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }

        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }

    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }

    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);

  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  ToKeyedSequence.prototype.get = function (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function () {
    var this$0 = this;
    var reversedSequence = reverseFactory(this, true);

    if (!this._useKeys) {
      reversedSequence.valueSeq = function () {
        return this$0._iter.toSeq().reverse();
      };
    }

    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function (mapper, context) {
    var this$0 = this;
    var mappedSequence = mapFactory(this, mapper, context);

    if (!this._useKeys) {
      mappedSequence.valueSeq = function () {
        return this$0._iter.toSeq().map(mapper, context);
      };
    }

    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    var ii;
    return this._iter.__iterate(this._useKeys ? function (v, k) {
      return fn(v, k, this$0);
    } : (ii = reverse ? resolveSize(this) : 0, function (v) {
      return fn(v, reverse ? --ii : ii++, this$0);
    }), reverse);
  };

  ToKeyedSequence.prototype.__iterator = function (type, reverse) {
    if (this._useKeys) {
      return this._iter.__iterator(type, reverse);
    }

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    var ii = reverse ? resolveSize(this) : 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
    });
  };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
  createClass(ToIndexedSequence, IndexedSeq);

  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  ToIndexedSequence.prototype.includes = function (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    var iterations = 0;
    return this._iter.__iterate(function (v) {
      return fn(v, iterations++, this$0);
    }, reverse);
  };

  ToIndexedSequence.prototype.__iterator = function (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value, step);
    });
  };

  createClass(ToSetSequence, SetSeq);

  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  ToSetSequence.prototype.has = function (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._iter.__iterate(function (v) {
      return fn(v, v, this$0);
    }, reverse);
  };

  ToSetSequence.prototype.__iterator = function (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, step.value, step.value, step);
    });
  };

  createClass(FromEntriesSequence, KeyedSeq);

  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  FromEntriesSequence.prototype.entrySeq = function () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedIterable = isIterable(entry);
        return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    return new Iterator(function () {
      while (true) {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value; // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.

        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
        }
      }
    });
  };

  ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;

    flipSequence.flip = function () {
      return iterable;
    };

    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()

      reversedSequence.flip = function () {
        return iterable.reverse();
      };

      return reversedSequence;
    };

    flipSequence.has = function (key) {
      return iterable.includes(key);
    };

    flipSequence.includes = function (key) {
      return iterable.has(key);
    };

    flipSequence.cacheResult = cacheResultThrough;

    flipSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      return iterable.__iterate(function (v, k) {
        return fn(k, v, this$0) !== false;
      }, reverse);
    };

    flipSequence.__iteratorUncached = function (type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);

        return new Iterator(function () {
          var step = iterator.next();

          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }

          return step;
        });
      }

      return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
    };

    return flipSequence;
  }

  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;

    mappedSequence.has = function (key) {
      return iterable.has(key);
    };

    mappedSequence.get = function (key, notSetValue) {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
    };

    mappedSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      return iterable.__iterate(function (v, k, c) {
        return fn(mapper.call(context, v, k, c), k, this$0) !== false;
      }, reverse);
    };

    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      return new Iterator(function () {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value;
        var key = entry[0];
        return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
      });
    };

    return mappedSequence;
  }

  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;

    reversedSequence.reverse = function () {
      return iterable;
    };

    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);

        flipSequence.reverse = function () {
          return iterable.flip();
        };

        return flipSequence;
      };
    }

    reversedSequence.get = function (key, notSetValue) {
      return iterable.get(useKeys ? key : -1 - key, notSetValue);
    };

    reversedSequence.has = function (key) {
      return iterable.has(useKeys ? key : -1 - key);
    };

    reversedSequence.includes = function (value) {
      return iterable.includes(value);
    };

    reversedSequence.cacheResult = cacheResultThrough;

    reversedSequence.__iterate = function (fn, reverse) {
      var this$0 = this;
      return iterable.__iterate(function (v, k) {
        return fn(v, k, this$0);
      }, !reverse);
    };

    reversedSequence.__iterator = function (type, reverse) {
      return iterable.__iterator(type, !reverse);
    };

    return reversedSequence;
  }

  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);

    if (useKeys) {
      filterSequence.has = function (key) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };

      filterSequence.get = function (key, notSetValue) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
      };
    }

    filterSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      var iterations = 0;

      iterable.__iterate(function (v, k, c) {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);

      return iterations;
    };

    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      var iterations = 0;
      return new Iterator(function () {
        while (true) {
          var step = iterator.next();

          if (step.done) {
            return step;
          }

          var entry = step.value;
          var key = entry[0];
          var value = entry[1];

          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    };

    return filterSequence;
  }

  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();

    iterable.__iterate(function (v, k) {
      groups.update(grouper.call(context, v, k, iterable), 0, function (a) {
        return a + 1;
      });
    });

    return groups.asImmutable();
  }

  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();

    iterable.__iterate(function (v, k) {
      groups.update(grouper.call(context, v, k, iterable), function (a) {
        return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
      });
    });

    var coerce = iterableClass(iterable);
    return groups.map(function (arr) {
      return reify(iterable, coerce(arr));
    });
  }

  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size; // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32

    if (begin !== undefined) {
      begin = begin | 0;
    }

    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize); // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.

    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    } // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.


    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;

    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable); // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0

    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
      };
    }

    sliceSeq.__iterateUncached = function (fn, reverse) {
      var this$0 = this;

      if (sliceSize === 0) {
        return 0;
      }

      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }

      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;

      iterable.__iterate(function (v, k) {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
        }
      });

      return iterations;
    };

    sliceSeq.__iteratorUncached = function (type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      } // Don't bother instantiating parent iterator if taking 0.


      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);

      var skipped = 0;
      var iterations = 0;
      return new Iterator(function () {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }

        if (++iterations > sliceSize) {
          return iteratorDone();
        }

        var step = iterator.next();

        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    };

    return sliceSeq;
  }

  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);

    takeSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }

      var iterations = 0;

      iterable.__iterate(function (v, k, c) {
        return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
      });

      return iterations;
    };

    takeSequence.__iteratorUncached = function (type, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }

      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      var iterating = true;
      return new Iterator(function () {
        if (!iterating) {
          return iteratorDone();
        }

        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value;
        var k = entry[0];
        var v = entry[1];

        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }

        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      });
    };

    return takeSequence;
  }

  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);

    skipSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }

      var isSkipping = true;
      var iterations = 0;

      iterable.__iterate(function (v, k, c) {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });

      return iterations;
    };

    skipSequence.__iteratorUncached = function (type, reverse) {
      var this$0 = this;

      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }

      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);

      var skipping = true;
      var iterations = 0;
      return new Iterator(function () {
        var step, k, v;

        do {
          step = iterator.next();

          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }

          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);

        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      });
    };

    return skipSequence;
  }

  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function (v) {
      if (!isIterable(v)) {
        v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }

      return v;
    }).filter(function (v) {
      return v.size !== 0;
    });

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];

      if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);

    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }

    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(function (sum, seq) {
      if (sum !== undefined) {
        var size = seq.size;

        if (size !== undefined) {
          return sum + size;
        }
      }
    }, 0);
    return concatSeq;
  }

  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);

    flatSequence.__iterateUncached = function (fn, reverse) {
      var iterations = 0;
      var stopped = false;

      function flatDeep(iter, currentDepth) {
        var this$0 = this;

        iter.__iterate(function (v, k) {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }

          return !stopped;
        }, reverse);
      }

      flatDeep(iterable, 0);
      return iterations;
    };

    flatSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(type, reverse);

      var stack = [];
      var iterations = 0;
      return new Iterator(function () {
        while (iterator) {
          var step = iterator.next();

          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }

          var v = step.value;

          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }

          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }

        return iteratorDone();
      });
    };

    return flatSequence;
  }

  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(function (v, k) {
      return coerce(mapper.call(context, v, k, iterable));
    }).flatten(true);
  }

  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 - 1;

    interposedSequence.__iterateUncached = function (fn, reverse) {
      var this$0 = this;
      var iterations = 0;

      iterable.__iterate(function (v, k) {
        return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v, iterations++, this$0) !== false;
      }, reverse);

      return iterations;
    };

    interposedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);

      var iterations = 0;
      var step;
      return new Iterator(function () {
        if (!step || iterations % 2) {
          step = iterator.next();

          if (step.done) {
            return step;
          }
        }

        return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
      });
    };

    return interposedSequence;
  }

  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }

    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(function (v, k) {
      return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
    }).toArray();
    entries.sort(function (a, b) {
      return comparator(a[3], b[3]) || a[2] - b[2];
    }).forEach(isKeyedIterable ? function (v, i) {
      entries[i].length = 2;
    } : function (v, i) {
      entries[i] = v[1];
    });
    return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
  }

  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }

    if (mapper) {
      var entry = iterable.toSeq().map(function (v, k) {
        return [v, mapper(v, k, iterable)];
      }).reduce(function (a, b) {
        return maxCompare(comparator, a[1], b[1]) ? b : a;
      });
      return entry && entry[0];
    } else {
      return iterable.reduce(function (a, b) {
        return maxCompare(comparator, a, b) ? b : a;
      });
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a); // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.

    return comp === 0 && b !== a && (b === undefined || b === null || b !== b) || comp > 0;
  }

  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function (i) {
      return i.size;
    }).min(); // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.

    zipSequence.__iterate = function (fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);

      var step;
      var iterations = 0;

      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }

      return iterations;
    };

    zipSequence.__iteratorUncached = function (type, reverse) {
      var iterators = iters.map(function (i) {
        return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
      });
      var iterations = 0;
      var isDone = false;
      return new Iterator(function () {
        var steps;

        if (!isDone) {
          steps = iterators.map(function (i) {
            return i.next();
          });
          isDone = steps.some(function (s) {
            return s.done;
          });
        }

        if (isDone) {
          return iteratorDone();
        }

        return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function (s) {
          return s.value;
        })));
      });
    };

    return zipSequence;
  } // #pragma Helper Functions


  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();

      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);

    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }

      iter = getIterator(Iterable(keyPath));
    }

    return iter;
  }

  createClass(Record, KeyedCollection);

  function Record(defaultValues, name) {
    var hasInitialized;

    var RecordType = function Record(values) {
      if (values instanceof RecordType) {
        return values;
      }

      if (!(this instanceof RecordType)) {
        return new RecordType(values);
      }

      if (!hasInitialized) {
        hasInitialized = true;
        var keys = Object.keys(defaultValues);
        setProps(RecordTypePrototype, keys);
        RecordTypePrototype.size = keys.length;
        RecordTypePrototype._name = name;
        RecordTypePrototype._keys = keys;
        RecordTypePrototype._defaultValues = defaultValues;
      }

      this._map = Map(values);
    };

    var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
    RecordTypePrototype.constructor = RecordType;
    return RecordType;
  }

  Record.prototype.toString = function () {
    return this.__toString(recordName(this) + ' {', '}');
  }; // @pragma Access


  Record.prototype.has = function (k) {
    return this._defaultValues.hasOwnProperty(k);
  };

  Record.prototype.get = function (k, notSetValue) {
    if (!this.has(k)) {
      return notSetValue;
    }

    var defaultVal = this._defaultValues[k];
    return this._map ? this._map.get(k, defaultVal) : defaultVal;
  }; // @pragma Modification


  Record.prototype.clear = function () {
    if (this.__ownerID) {
      this._map && this._map.clear();
      return this;
    }

    var RecordType = this.constructor;
    return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
  };

  Record.prototype.set = function (k, v) {
    if (!this.has(k)) {
      throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
    }

    if (this._map && !this._map.has(k)) {
      var defaultVal = this._defaultValues[k];

      if (v === defaultVal) {
        return this;
      }
    }

    var newMap = this._map && this._map.set(k, v);

    if (this.__ownerID || newMap === this._map) {
      return this;
    }

    return makeRecord(this, newMap);
  };

  Record.prototype.remove = function (k) {
    if (!this.has(k)) {
      return this;
    }

    var newMap = this._map && this._map.remove(k);

    if (this.__ownerID || newMap === this._map) {
      return this;
    }

    return makeRecord(this, newMap);
  };

  Record.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };

  Record.prototype.__iterator = function (type, reverse) {
    var this$0 = this;
    return KeyedIterable(this._defaultValues).map(function (_, k) {
      return this$0.get(k);
    }).__iterator(type, reverse);
  };

  Record.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return KeyedIterable(this._defaultValues).map(function (_, k) {
      return this$0.get(k);
    }).__iterate(fn, reverse);
  };

  Record.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map && this._map.__ensureOwner(ownerID);

    if (!ownerID) {
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }

    return makeRecord(this, newMap, ownerID);
  };

  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;

  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {// Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function () {
        return this.get(name);
      },
      set: function (value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection); // @pragma Construction

  function Set(value) {
    return value === null || value === undefined ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function (set) {
      var iter = SetIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v) {
        return set.add(v);
      });
    });
  }

  Set.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  Set.fromKeys = function (value) {
    return this(KeyedIterable(value).keySeq());
  };

  Set.prototype.toString = function () {
    return this.__toString('Set {', '}');
  }; // @pragma Access


  Set.prototype.has = function (value) {
    return this._map.has(value);
  }; // @pragma Modification


  Set.prototype.add = function (value) {
    return updateSet(this, this._map.set(value, true));
  };

  Set.prototype.remove = function (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function () {
    return updateSet(this, this._map.clear());
  }; // @pragma Composition


  Set.prototype.union = function () {
    var iters = SLICE$0.call(arguments, 0);
    iters = iters.filter(function (x) {
      return x.size !== 0;
    });

    if (iters.length === 0) {
      return this;
    }

    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }

    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetIterable(iters[ii]).forEach(function (value) {
          return set.add(value);
        });
      }
    });
  };

  Set.prototype.intersect = function () {
    var iters = SLICE$0.call(arguments, 0);

    if (iters.length === 0) {
      return this;
    }

    iters = iters.map(function (iter) {
      return SetIterable(iter);
    });
    var originalSet = this;
    return this.withMutations(function (set) {
      originalSet.forEach(function (value) {
        if (!iters.every(function (iter) {
          return iter.includes(value);
        })) {
          set.remove(value);
        }
      });
    });
  };

  Set.prototype.subtract = function () {
    var iters = SLICE$0.call(arguments, 0);

    if (iters.length === 0) {
      return this;
    }

    iters = iters.map(function (iter) {
      return SetIterable(iter);
    });
    var originalSet = this;
    return this.withMutations(function (set) {
      originalSet.forEach(function (value) {
        if (iters.some(function (iter) {
          return iter.includes(value);
        })) {
          set.remove(value);
        }
      });
    });
  };

  Set.prototype.merge = function () {
    return this.union.apply(this, arguments);
  };

  Set.prototype.mergeWith = function (merger) {
    var iters = SLICE$0.call(arguments, 1);
    return this.union.apply(this, iters);
  };

  Set.prototype.sort = function (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function (fn, reverse) {
    var this$0 = this;
    return this._map.__iterate(function (_, k) {
      return fn(k, k, this$0);
    }, reverse);
  };

  Set.prototype.__iterator = function (type, reverse) {
    return this._map.map(function (_, k) {
      return k;
    }).__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map.__ensureOwner(ownerID);

    if (!ownerID) {
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }

    return this.__make(newMap, ownerID);
  };

  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;
  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;
  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }

    return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;

  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set); // @pragma Construction

  function OrderedSet(value) {
    return value === null || value === undefined ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function (set) {
      var iter = SetIterable(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v) {
        return set.add(v);
      });
    });
  }

  OrderedSet.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  OrderedSet.fromKeys = function (value) {
    return this(KeyedIterable(value).keySeq());
  };

  OrderedSet.prototype.toString = function () {
    return this.__toString('OrderedSet {', '}');
  };

  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;
  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;

  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection); // @pragma Construction

  function Stack(value) {
    return value === null || value === undefined ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
  }

  Stack.of = function ()
  /*...values*/
  {
    return this(arguments);
  };

  Stack.prototype.toString = function () {
    return this.__toString('Stack [', ']');
  }; // @pragma Access


  Stack.prototype.get = function (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);

    while (head && index--) {
      head = head.next;
    }

    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function () {
    return this._head && this._head.value;
  }; // @pragma Modification


  Stack.prototype.push = function ()
  /*...values*/
  {
    if (arguments.length === 0) {
      return this;
    }

    var newSize = this.size + arguments.length;
    var head = this._head;

    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments[ii],
        next: head
      };
    }

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function (iter) {
    iter = IndexedIterable(iter);

    if (iter.size === 0) {
      return this;
    }

    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.reverse().forEach(function (value) {
      newSize++;
      head = {
        value: value,
        next: head
      };
    });

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function () {
    return this.slice(1);
  };

  Stack.prototype.unshift = function ()
  /*...values*/
  {
    return this.push.apply(this, arguments);
  };

  Stack.prototype.unshiftAll = function (iter) {
    return this.pushAll(iter);
  };

  Stack.prototype.shift = function () {
    return this.pop.apply(this, arguments);
  };

  Stack.prototype.clear = function () {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyStack();
  };

  Stack.prototype.slice = function (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }

    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);

    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection.prototype.slice.call(this, begin, end);
    }

    var newSize = this.size - resolvedBegin;
    var head = this._head;

    while (resolvedBegin--) {
      head = head.next;
    }

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  }; // @pragma Mutability


  Stack.prototype.__ensureOwner = function (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeStack(this.size, this._head, ownerID, this.__hash);
  }; // @pragma Iteration


  Stack.prototype.__iterate = function (fn, reverse) {
    if (reverse) {
      return this.reverse().__iterate(fn);
    }

    var iterations = 0;
    var node = this._head;

    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }

      node = node.next;
    }

    return iterations;
  };

  Stack.prototype.__iterator = function (type, reverse) {
    if (reverse) {
      return this.reverse().__iterator(type);
    }

    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }

      return iteratorDone();
    });
  };

  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;
  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;

  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;

  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }
  /**
   * Contributes additional methods to a constructor
   */


  function mixin(ctor, methods) {
    var keyCopier = function (key) {
      ctor.prototype[key] = methods[key];
    };

    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;
  mixin(Iterable, {
    // ### Conversion to other types
    toArray: function () {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);

      this.valueSeq().__iterate(function (v, i) {
        array[i] = v;
      });

      return array;
    },
    toIndexedSeq: function () {
      return new ToIndexedSequence(this);
    },
    toJS: function () {
      return this.toSeq().map(function (value) {
        return value && typeof value.toJS === 'function' ? value.toJS() : value;
      }).__toJS();
    },
    toJSON: function () {
      return this.toSeq().map(function (value) {
        return value && typeof value.toJSON === 'function' ? value.toJSON() : value;
      }).__toJS();
    },
    toKeyedSeq: function () {
      return new ToKeyedSequence(this, true);
    },
    toMap: function () {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },
    toObject: function () {
      assertNotInfinite(this.size);
      var object = {};

      this.__iterate(function (v, k) {
        object[k] = v;
      });

      return object;
    },
    toOrderedMap: function () {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function () {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function () {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function () {
      return new ToSetSequence(this);
    },
    toSeq: function () {
      return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function () {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function () {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function () {
      return '[Iterable]';
    },
    __toString: function (head, tail) {
      if (this.size === 0) {
        return head + tail;
      }

      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function () {
      var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },
    includes: function (searchValue) {
      return this.some(function (value) {
        return is(value, searchValue);
      });
    },
    entries: function () {
      return this.__iterator(ITERATE_ENTRIES);
    },
    every: function (predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;

      this.__iterate(function (v, k, c) {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });

      return returnValue;
    },
    filter: function (predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },
    find: function (predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },
    forEach: function (sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function (separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;

      this.__iterate(function (v) {
        isFirst ? isFirst = false : joined += separator;
        joined += v !== null && v !== undefined ? v.toString() : '';
      });

      return joined;
    },
    keys: function () {
      return this.__iterator(ITERATE_KEYS);
    },
    map: function (mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function (reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;

      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }

      this.__iterate(function (v, k, c) {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });

      return reduction;
    },
    reduceRight: function (reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },
    reverse: function () {
      return reify(this, reverseFactory(this, true));
    },
    slice: function (begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function (predicate, context) {
      return !this.every(not(predicate), context);
    },
    sort: function (comparator) {
      return reify(this, sortFactory(this, comparator));
    },
    values: function () {
      return this.__iterator(ITERATE_VALUES);
    },
    // ### More sequential methods
    butLast: function () {
      return this.slice(0, -1);
    },
    isEmpty: function () {
      return this.size !== undefined ? this.size === 0 : !this.some(function () {
        return true;
      });
    },
    count: function (predicate, context) {
      return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
    },
    countBy: function (grouper, context) {
      return countByFactory(this, grouper, context);
    },
    equals: function (other) {
      return deepEqual(this, other);
    },
    entrySeq: function () {
      var iterable = this;

      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }

      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();

      entriesSequence.fromEntrySeq = function () {
        return iterable.toSeq();
      };

      return entriesSequence;
    },
    filterNot: function (predicate, context) {
      return this.filter(not(predicate), context);
    },
    findEntry: function (predicate, context, notSetValue) {
      var found = notSetValue;

      this.__iterate(function (v, k, c) {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });

      return found;
    },
    findKey: function (predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },
    findLast: function (predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function (predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function (predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function () {
      return this.find(returnTrue);
    },
    flatMap: function (mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function (depth) {
      return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function () {
      return new FromEntriesSequence(this);
    },
    get: function (searchKey, notSetValue) {
      return this.find(function (_, key) {
        return is(key, searchKey);
      }, undefined, notSetValue);
    },
    getIn: function (searchKeyPath, notSetValue) {
      var nested = this; // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {

      var iter = forceIterator(searchKeyPath);
      var step;

      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;

        if (nested === NOT_SET) {
          return notSetValue;
        }
      }

      return nested;
    },
    groupBy: function (grouper, context) {
      return groupByFactory(this, grouper, context);
    },
    has: function (searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn: function (searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },
    isSubset: function (iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function (value) {
        return iter.includes(value);
      });
    },
    isSuperset: function (iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },
    keyOf: function (searchValue) {
      return this.findKey(function (value) {
        return is(value, searchValue);
      });
    },
    keySeq: function () {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },
    last: function () {
      return this.toSeq().reverse().first();
    },
    lastKeyOf: function (searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function (comparator) {
      return maxFactory(this, comparator);
    },
    maxBy: function (mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },
    min: function (comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },
    minBy: function (mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },
    rest: function () {
      return this.slice(1);
    },
    skip: function (amount) {
      return this.slice(Math.max(0, amount));
    },
    skipLast: function (amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },
    skipWhile: function (predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function (predicate, context) {
      return this.skipWhile(not(predicate), context);
    },
    sortBy: function (mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function (amount) {
      return this.slice(0, Math.max(0, amount));
    },
    takeLast: function (amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },
    takeWhile: function (predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function (predicate, context) {
      return this.takeWhile(not(predicate), context);
    },
    valueSeq: function () {
      return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function () {
      return this.__hash || (this.__hash = hashIterable(this));
    } // ### Internal
    // abstract __iterate(fn, reverse)
    // abstract __iterator(type, reverse)

  }); // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;

  IterablePrototype.inspect = IterablePrototype.toSource = function () {
    return this.toString();
  };

  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;
  mixin(KeyedIterable, {
    // ### More sequential methods
    flip: function () {
      return reify(this, flipFactory(this));
    },
    mapEntries: function (mapper, context) {
      var this$0 = this;
      var iterations = 0;
      return reify(this, this.toSeq().map(function (v, k) {
        return mapper.call(context, [k, v], iterations++, this$0);
      }).fromEntrySeq());
    },
    mapKeys: function (mapper, context) {
      var this$0 = this;
      return reify(this, this.toSeq().flip().map(function (k, v) {
        return mapper.call(context, k, v, this$0);
      }).flip());
    }
  });
  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;

  KeyedIterablePrototype.__toStringMapper = function (v, k) {
    return JSON.stringify(k) + ': ' + quoteString(v);
  };

  mixin(IndexedIterable, {
    // ### Conversion to other types
    toKeyedSeq: function () {
      return new ToKeyedSequence(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function (predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function (predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    indexOf: function (searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },
    lastIndexOf: function (searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },
    reverse: function () {
      return reify(this, reverseFactory(this, false));
    },
    slice: function (begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function (index, removeNum
    /*, ...values*/
    ) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);

      if (numArgs === 0 || numArgs === 2 && !removeNum) {
        return this;
      } // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.


      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
    },
    // ### More collection methods
    findLastIndex: function (predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    first: function () {
      return this.get(0);
    },
    flatten: function (depth) {
      return reify(this, flattenFactory(this, depth, false));
    },
    get: function (index, notSetValue) {
      index = wrapIndex(this, index);
      return index < 0 || this.size === Infinity || this.size !== undefined && index > this.size ? notSetValue : this.find(function (_, key) {
        return key === index;
      }, undefined, notSetValue);
    },
    has: function (index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
    },
    interpose: function (separator) {
      return reify(this, interposeFactory(this, separator));
    },
    interleave: function ()
    /*...iterables*/
    {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);

      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }

      return reify(this, interleaved);
    },
    keySeq: function () {
      return Range(0, this.size);
    },
    last: function () {
      return this.get(-1);
    },
    skipWhile: function (predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function ()
    /*, ...iterables */
    {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },
    zipWith: function (zipper
    /*, ...iterables */
    ) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }
  });
  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
  mixin(SetIterable, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function (value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    includes: function (value) {
      return this.has(value);
    },
    // ### More sequential methods
    keySeq: function () {
      return this.valueSeq();
    }
  });
  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes; // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);
  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype); // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function () {
      return !predicate.apply(this, arguments);
    };
  }

  function neg(predicate) {
    return function () {
      return -predicate.apply(this, arguments);
    };
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }

    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;

    var size = iterable.__iterate(keyed ? ordered ? function (v, k) {
      h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
    } : function (v, k) {
      h = h + hashMerge(hash(v), hash(k)) | 0;
    } : ordered ? function (v) {
      h = 31 * h + hash(v) | 0;
    } : function (v) {
      h = h + hash(v) | 0;
    });

    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {
    Iterable: Iterable,
    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,
    Record: Record,
    Range: Range,
    Repeat: Repeat,
    is: is,
    fromJS: fromJS
  };
  return Immutable;
});

/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;
/* harmony default export */ __webpack_exports__["default"] = (isBrowser);

/***/ }),

/***/ "./node_modules/jss/lib/Jss.js":
/*!*************************************!*\
  !*** ./node_modules/jss/lib/Jss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _StyleSheet = __webpack_require__(/*! ./StyleSheet */ "./node_modules/jss/lib/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _PluginsRegistry = __webpack_require__(/*! ./PluginsRegistry */ "./node_modules/jss/lib/PluginsRegistry.js");

var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

var _rules = __webpack_require__(/*! ./plugins/rules */ "./node_modules/jss/lib/plugins/rules.js");

var _rules2 = _interopRequireDefault(_rules);

var _observables = __webpack_require__(/*! ./plugins/observables */ "./node_modules/jss/lib/plugins/observables.js");

var _observables2 = _interopRequireDefault(_observables);

var _functions = __webpack_require__(/*! ./plugins/functions */ "./node_modules/jss/lib/plugins/functions.js");

var _functions2 = _interopRequireDefault(_functions);

var _sheets = __webpack_require__(/*! ./sheets */ "./node_modules/jss/lib/sheets.js");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__(/*! ./rules/StyleRule */ "./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createGenerateClassName = __webpack_require__(/*! ./utils/createGenerateClassName */ "./node_modules/jss/lib/utils/createGenerateClassName.js");

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _createRule2 = __webpack_require__(/*! ./utils/createRule */ "./node_modules/jss/lib/utils/createRule.js");

var _createRule3 = _interopRequireDefault(_createRule2);

var _DomRenderer = __webpack_require__(/*! ./renderers/DomRenderer */ "./node_modules/jss/lib/renderers/DomRenderer.js");

var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

var _VirtualRenderer = __webpack_require__(/*! ./renderers/VirtualRenderer */ "./node_modules/jss/lib/renderers/VirtualRenderer.js");

var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.8.7";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])(); // eslint-disable-next-line prefer-spread

    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName; // $FlowFixMe

        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = options.index;

      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }

      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();

      _sheets2['default'].remove(sheet);

      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}; // Enable rule without name for inline styles.

      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      } // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow


      var ruleOptions = options;
      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        // Avoids applying same plugin twice, at least based on ref.
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);

          _this.plugins.use(plugin);
        }
      });
      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;

/***/ }),

/***/ "./node_modules/jss/lib/PluginsRegistry.js":
/*!*************************************************!*\
  !*** ./node_modules/jss/lib/PluginsRegistry.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */

    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      } // $FlowFixMe


      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet); // $FlowFixMe

        rule.style = nextStyle;
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;

/***/ }),

/***/ "./node_modules/jss/lib/RuleList.js":
/*!******************************************!*\
  !*** ./node_modules/jss/lib/RuleList.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _createRule = __webpack_require__(/*! ./utils/createRule */ "./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

var _linkRule = __webpack_require__(/*! ./utils/linkRule */ "./node_modules/jss/lib/utils/linkRule.js");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _StyleRule = __webpack_require__(/*! ./rules/StyleRule */ "./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _escape = __webpack_require__(/*! ./utils/escape */ "./node_modules/jss/lib/utils/escape.js");

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */


var RuleList = function () {
  // Original styles object.
  function RuleList(options) {
    var _this = this;

    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.update = function (name, data) {
      var _options = _this.options,
          plugins = _options.jss.plugins,
          sheet = _options.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, _this.get(name), sheet);
      } else {
        for (var index = 0; index < _this.index.length; index++) {
          plugins.onUpdate(name, _this.index[index], sheet);
        }
      }
    };

    this.options = options;
    this.classes = options.classes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */
  // Used to ensure correct rules order.
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options2 = this.options,
          parent = _options2.parent,
          sheet = _options2.sheet,
          jss = _options2.jss,
          Renderer = _options2.Renderer,
          generateClassName = _options2.generateClassName;
      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;
      var rule = (0, _createRule2['default'])(name, decl, options);
      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }
    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;

      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }
    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }
    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'link',

    /**
     * Link renderable rules with CSSRuleList.
     */
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];

        var _key = this.options.sheet.renderer.getKey(cssRule);

        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }
    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;

/***/ }),

/***/ "./node_modules/jss/lib/SheetsManager.js":
/*!***********************************************!*\
  !*** ./node_modules/jss/lib/SheetsManager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */


var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;
      var index = sheets.indexOf(sheet);
      if (index !== -1) return index;
      sheets.push(sheet);
      refs.push(0);
      keys.push(key);
      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);

      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
        return;
      }

      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;

/***/ }),

/***/ "./node_modules/jss/lib/SheetsRegistry.js":
/*!************************************************!*\
  !*** ./node_modules/jss/lib/SheetsRegistry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Sheets registry to access them all at one place.
 */


var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',

    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;

/***/ }),

/***/ "./node_modules/jss/lib/StyleSheet.js":
/*!********************************************!*\
  !*** ./node_modules/jss/lib/StyleSheet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _linkRule = __webpack_require__(/*! ./utils/linkRule */ "./node_modules/jss/lib/utils/linkRule.js");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _RuleList = __webpack_require__(/*! ./RuleList */ "./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable-next-line no-use-before-define */


var StyleSheet = function () {
  function StyleSheet(styles, options) {
    var _this = this;

    _classCallCheck(this, StyleSheet);

    this.update = function (name, data) {
      if (typeof name === 'string') {
        _this.rules.update(name, data);
      } else {
        _this.rules.update(name);
      }

      return _this;
    };

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var _name in styles) {
      this.rules.add(_name, styles[_name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }
    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];

      for (var _name2 in styles) {
        added.push(this.addRule(_name2, styles[_name2], options));
      }

      return added;
    }
    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);
      if (!rule) return false;
      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules(); // Is undefined when VirtualRenderer is used.

      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'toString',

    /**
     * Convert rules to a CSS string.
     */
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;

/***/ }),

/***/ "./node_modules/jss/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/jss/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;

var _getDynamicStyles = __webpack_require__(/*! ./utils/getDynamicStyles */ "./node_modules/jss/lib/utils/getDynamicStyles.js");

Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getDynamicStyles)['default'];
  }
});

var _toCssValue = __webpack_require__(/*! ./utils/toCssValue */ "./node_modules/jss/lib/utils/toCssValue.js");

Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCssValue)['default'];
  }
});

var _SheetsRegistry = __webpack_require__(/*! ./SheetsRegistry */ "./node_modules/jss/lib/SheetsRegistry.js");

Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsRegistry)['default'];
  }
});

var _SheetsManager = __webpack_require__(/*! ./SheetsManager */ "./node_modules/jss/lib/SheetsManager.js");

Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsManager)['default'];
  }
});

var _RuleList = __webpack_require__(/*! ./RuleList */ "./node_modules/jss/lib/RuleList.js");

Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RuleList)['default'];
  }
});

var _sheets = __webpack_require__(/*! ./sheets */ "./node_modules/jss/lib/sheets.js");

Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sheets)['default'];
  }
});

var _createGenerateClassName = __webpack_require__(/*! ./utils/createGenerateClassName */ "./node_modules/jss/lib/utils/createGenerateClassName.js");

Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createGenerateClassName)['default'];
  }
});

var _Jss = __webpack_require__(/*! ./Jss */ "./node_modules/jss/lib/Jss.js");

var _Jss2 = _interopRequireDefault(_Jss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Creates a new instance of Jss.
 */


var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};
/**
 * A global Jss instance.
 */


exports['default'] = create();

/***/ }),

/***/ "./node_modules/jss/lib/plugins/functions.js":
/*!***************************************************!*\
  !*** ./node_modules/jss/lib/plugins/functions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleList = __webpack_require__(/*! ../RuleList */ "./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

var _StyleRule = __webpack_require__(/*! ../rules/StyleRule */ "./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__(/*! ../utils/createRule */ "./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
} // A symbol replacement.


var now = Date.now();
var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;
exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};

    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[prop] = value;
    }

    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    // It is a rules container like for e.g. ConditionalRule.
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }

    if (!(rule instanceof _StyleRule2['default'])) return;
    rule = rule; // If we have a fn values map, it is a rule with function values.

    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;
    var fnStyle = rule[fnStyleNs]; // If we have a style function, the entire rule is dynamic and style object
    // will be returned from that function.

    if (fnStyle) {
      var style = fnStyle(data);

      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/jss/lib/plugins/observables.js":
/*!*****************************************************!*\
  !*** ./node_modules/jss/lib/plugins/observables.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleRule = __webpack_require__(/*! ../rules/StyleRule */ "./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__(/*! ../utils/createRule */ "./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

var _isObservable = __webpack_require__(/*! ../utils/isObservable */ "./node_modules/jss/lib/utils/isObservable.js");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

    var style$ = decl;
    var rule = (0, _createRule2['default'])(name, {}, options); // TODO
    // Call `stream.subscribe()` returns a subscription, which should be explicitly
    // unsubscribed from when we know this sheet is no longer needed.

    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });
    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};

/***/ }),

/***/ "./node_modules/jss/lib/plugins/rules.js":
/*!***********************************************!*\
  !*** ./node_modules/jss/lib/plugins/rules.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleRule = __webpack_require__(/*! ../rules/SimpleRule */ "./node_modules/jss/lib/rules/SimpleRule.js");

var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

var _KeyframesRule = __webpack_require__(/*! ../rules/KeyframesRule */ "./node_modules/jss/lib/rules/KeyframesRule.js");

var _KeyframesRule2 = _interopRequireDefault(_KeyframesRule);

var _ConditionalRule = __webpack_require__(/*! ../rules/ConditionalRule */ "./node_modules/jss/lib/rules/ConditionalRule.js");

var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

var _FontFaceRule = __webpack_require__(/*! ../rules/FontFaceRule */ "./node_modules/jss/lib/rules/FontFaceRule.js");

var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

var _ViewportRule = __webpack_require__(/*! ../rules/ViewportRule */ "./node_modules/jss/lib/rules/ViewportRule.js");

var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']
  /**
   * Generate plugins which will register all rules.
   */

};
var plugins = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var RuleClass = classes[key];

  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new RuleClass(name, decl, options) : null;
  };

  return {
    onCreateRule: onCreateRule
  };
});
exports['default'] = plugins;

/***/ }),

/***/ "./node_modules/jss/lib/renderers/DomRenderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/jss/lib/renderers/DomRenderer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _sheets = __webpack_require__(/*! ../sheets */ "./node_modules/jss/lib/sheets.js");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__(/*! ../rules/StyleRule */ "./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _toCssValue = __webpack_require__(/*! ../utils/toCssValue */ "./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Cache the value from the first time a function is called.
 */


var memoize = function memoize(fn) {
  var value = void 0;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    cssRule.style.removeProperty(prop);
  } catch (err) {
    (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
  }
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7
  /**
   * Get the CSS Rule key.
   */

};

var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;

    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;
      if (name) return '@keyframes ' + name; // There is no rule.name in the following browsers:
      // - IE 9
      // - Safari 7.1.8
      // - Mobile Safari 9.0.0

      var cssText = cssRule.cssText;
      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    } // Conditionals.


    return extractKey(cssRule.cssText);
  };
}();
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 */


var getHead = memoize(function () {
  return document.head || document.getElementsByTagName('head')[0];
});
/**
 * Gets a map of rule keys, where the property is an unescaped key and value
 * is a potentially escaped one.
 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
 * and so CSS rule's `selectorText` won't match JSS rule selector.
 *
 * https://www.w3.org/International/questions/qa-escapes#cssescapes
 */

var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;
  return function (rules) {
    var map = {}; // https://github.com/facebook/flow/issues/2696

    if (!style) style = document.createElement('style');

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector; // Only unescape selector over CSSOM if it contains a back slash.

      if (selector && selector.indexOf('\\') !== -1) {
        // Lazilly attach when needed.
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }

        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;
          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }

    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }

    return map;
  };
}();
/**
 * Find attached sheet with an index higher than the passed one.
 */


function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = _sheets2['default'].registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element; // Otherwise insert after the last attached.

    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling; // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.

    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;
    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;
    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false; // There is no sheet when the renderer is used from a standalone StyleRule.

    if (sheet) _sheets2['default'].add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return; // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.

      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }
    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }
    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }
    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;
      var str = rule.toString();
      if (!index) index = cssRules.length;
      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }

      this.hasInsertedRules = true;
      return cssRules[index];
    }
    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }

      return -1;
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     */

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }
    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;

/***/ }),

/***/ "./node_modules/jss/lib/renderers/VirtualRenderer.js":
/*!***********************************************************!*\
  !*** ./node_modules/jss/lib/renderers/VirtualRenderer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */


var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setProperty',
    value: function setProperty() {
      return true;
    }
  }, {
    key: 'getPropertyValue',
    value: function getPropertyValue() {
      return '';
    }
  }, {
    key: 'removeProperty',
    value: function removeProperty() {}
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;

/***/ }),

/***/ "./node_modules/jss/lib/rules/ConditionalRule.js":
/*!*******************************************************!*\
  !*** ./node_modules/jss/lib/rules/ConditionalRule.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _RuleList = __webpack_require__(/*! ../RuleList */ "./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Conditional rule for @media, @supports
 */


var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        indent: 1
      };
      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/FontFaceRule.js":
/*!****************************************************!*\
  !*** ./node_modules/jss/lib/rules/FontFaceRule.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _toCss = __webpack_require__(/*! ../utils/toCss */ "./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/KeyframesRule.js":
/*!*****************************************************!*\
  !*** ./node_modules/jss/lib/rules/KeyframesRule.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _RuleList = __webpack_require__(/*! ../RuleList */ "./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Rule for @keyframes
 */


var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        indent: 1
      };
      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/SimpleRule.js":
/*!**************************************************!*\
  !*** ./node_modules/jss/lib/rules/SimpleRule.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/StyleRule.js":
/*!*************************************************!*\
  !*** ./node_modules/jss/lib/rules/StyleRule.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _toCss = __webpack_require__(/*! ../utils/toCss */ "./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

var _toCssValue = __webpack_require__(/*! ../utils/toCssValue */ "./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;
    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',

    /**
     * Get or set a style property.
     */
    value: function prop(name, value) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      if (this.style[name] === value) return this;
      value = this.options.jss.plugins.onChangeValue(value, name, this);
      var isEmpty = value == null || value === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = value; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) {
        (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
      }

      return this;
    }
    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();

      for (var prop in json) {
        this.renderer.setProperty(renderable, prop, json[prop]);
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      if (!this.renderable) return;
      var hasChanged = this.renderer.setSelector(this.renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged && this.renderable) {
        var renderable = this.renderer.replaceRule(this.renderable, this);
        if (renderable) this.renderable = renderable;
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/ViewportRule.js":
/*!****************************************************!*\
  !*** ./node_modules/jss/lib/rules/ViewportRule.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _toCss = __webpack_require__(/*! ../utils/toCss */ "./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;

/***/ }),

/***/ "./node_modules/jss/lib/sheets.js":
/*!****************************************!*\
  !*** ./node_modules/jss/lib/sheets.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SheetsRegistry = __webpack_require__(/*! ./SheetsRegistry */ "./node_modules/jss/lib/SheetsRegistry.js");

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */


exports['default'] = new _SheetsRegistry2['default']();

/***/ }),

/***/ "./node_modules/jss/lib/utils/cloneStyle.js":
/*!**************************************************!*\
  !*** ./node_modules/jss/lib/utils/cloneStyle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports['default'] = cloneStyle;

var _isObservable = __webpack_require__(/*! ./isObservable */ "./node_modules/jss/lib/utils/isObservable.js");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var isArray = Array.isArray;

function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style; // Support string value for SimpleRule.

  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  } // Support array for FontFaceRule.


  if (isArray(style)) return style.map(cloneStyle); // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.

  if ((0, _isObservable2['default'])(style)) return style;
  var newStyle = {};

  for (var name in style) {
    var value = style[name];

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }

    newStyle[name] = value;
  }

  return newStyle;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/createGenerateClassName.js":
/*!***************************************************************!*\
  !*** ./node_modules/jss/lib/utils/createGenerateClassName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _StyleSheet = __webpack_require__(/*! ../StyleSheet */ "./node_modules/jss/lib/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _moduleId = __webpack_require__(/*! ./moduleId */ "./node_modules/jss/lib/utils/moduleId.js");

var _moduleId2 = _interopRequireDefault(_moduleId);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var maxRules = 1e10;
var env = "development";
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};

/***/ }),

/***/ "./node_modules/jss/lib/utils/createRule.js":
/*!**************************************************!*\
  !*** ./node_modules/jss/lib/utils/createRule.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _StyleRule = __webpack_require__(/*! ../rules/StyleRule */ "./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _cloneStyle = __webpack_require__(/*! ../utils/cloneStyle */ "./node_modules/jss/lib/utils/cloneStyle.js");

var _cloneStyle2 = _interopRequireDefault(_cloneStyle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Create a rule instance.
 */


function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;
  var declCopy = (0, _cloneStyle2['default'])(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/escape.js":
/*!**********************************************!*\
  !*** ./node_modules/jss/lib/utils/escape.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = global.CSS;
var env = "development";
var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jss/lib/utils/getDynamicStyles.js":
/*!********************************************************!*\
  !*** ./node_modules/jss/lib/utils/getDynamicStyles.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports['default'] = getDynamicStyles;
/**
 * Extracts a styles object with only props that contain function values.
 */

function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/isObservable.js":
/*!****************************************************!*\
  !*** ./node_modules/jss/lib/utils/isObservable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};

/***/ }),

/***/ "./node_modules/jss/lib/utils/linkRule.js":
/*!************************************************!*\
  !*** ./node_modules/jss/lib/utils/linkRule.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */

function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/moduleId.js":
/*!************************************************!*\
  !*** ./node_modules/jss/lib/utils/moduleId.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (global[ns] == null) global[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

exports['default'] = global[ns]++;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jss/lib/utils/toCss.js":
/*!*********************************************!*\
  !*** ./node_modules/jss/lib/utils/toCss.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;

var _toCssValue = __webpack_require__(/*! ./toCssValue */ "./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */


function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = '';
  if (!style) return result;
  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result;
  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);
  return result;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/toCssValue.js":
/*!**************************************************!*\
  !*** ./node_modules/jss/lib/utils/toCssValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseRandom.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRandom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;
/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */

function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/random.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/random.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(/*! ./_baseRandom */ "./node_modules/lodash/_baseRandom.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");
/** Built-in method references without a dependency on `root`. */


var freeParseFloat = parseFloat;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMin = Math.min,
    nativeRandom = Math.random;
/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */

function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }

  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    } else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }

  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  } else {
    lower = toFinite(lower);

    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }

  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }

  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
  }

  return baseRandom(lower, upper);
}

module.exports = random;

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber(value);

  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}

module.exports = toFinite;

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (true) {
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/batch-immutable.js":
/*!********************************!*\
  !*** ./src/batch-immutable.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "./node_modules/lodash/random.js");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/common.js");


 // [[{rule: 'box-0': color: 'red'}, ...], [{rule: 'box-0': color: 'red'}, ...]]

var generateBatches = function generateBatches(amount) {
  return new Array(1e3).fill(null).map(function () {
    return new Array(amount).fill(null).map(function (v, index) {
      return {
        rule: "box-".concat(index),
        color: Object(_common__WEBPACK_IMPORTED_MODULE_2__["getRandomColor"])()
      };
    });
  });
};

Object(_common__WEBPACK_IMPORTED_MODULE_2__["renderControls"])(function (amount) {
  var _renderObjects = Object(_common__WEBPACK_IMPORTED_MODULE_2__["renderObjects"])(amount),
      remove = _renderObjects.remove,
      update = _renderObjects.update;

  var batches = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(generateBatches(amount));
  var stop = Object(_common__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
    var batch = batches.get(lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, amount - 1));
    batch.forEach(function (item) {
      update(item.get('rule'), item.get('color'));
    });
  });
  return function () {
    stop();
    remove();
  };
});

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: getRandomColor, createStyles, createElements, renderControls, renderObjects, raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElements", function() { return createElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderControls", function() { return renderControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderObjects", function() { return renderObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/lib/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var getRandomColor = function getRandomColor() {
  return "#".concat(Math.floor(Math.random() * 0x1000000).toString(16));
};
var createStyles = function createStyles(amount) {
  return new Array(amount).fill(null).reduce(function (styles, style, i) {
    return _objectSpread({}, styles, _defineProperty({}, "box-".concat(i), {
      float: 'left',
      width: '20px',
      height: '20px',
      background: getRandomColor(),
      margin: '2px',
      border: '1px solid purple'
    }));
  }, {});
};
var createElements = function createElements(classNames) {
  return classNames.map(function (className) {
    var el = document.createElement('div');
    el.className = className;
    return el;
  });
};
var renderControls = function renderControls(renderObjects) {
  var remove;
  var amount = 100;
  var buttonRender = document.createElement('button');
  buttonRender.innerText = "Render ".concat(amount);

  buttonRender.onclick = function () {
    if (remove) remove();
    remove = renderObjects(amount);
    amount += 100;
    buttonRender.innerText = "Render ".concat(amount);
  };

  document.body.appendChild(buttonRender);
  var buttonClear = document.createElement('button');
  buttonClear.innerText = 'Clear';

  buttonClear.onclick = function () {
    if (!remove) return;
    remove();
    remove = null;
  };

  document.body.appendChild(buttonClear);
};
var renderObjects = function renderObjects(amount) {
  var sheet = jss__WEBPACK_IMPORTED_MODULE_0___default.a.createStyleSheet(createStyles(amount), {
    link: true
  }).attach();
  var elements = createElements(Object.values(sheet.classes));
  var container = document.createElement('div');
  elements.forEach(container.appendChild, container);
  document.body.appendChild(container);

  var remove = function remove() {
    document.body.removeChild(container);
    sheet.detach();
  };

  var update = function update(rule, color) {
    sheet.getRule(rule).prop('background-color', color);
  };

  return {
    remove: remove,
    update: update
  };
};
var raf = function raf(callback) {
  var running = true;

  (function run() {
    if (!running) return;
    callback();
    requestAnimationFrame(run);
  })();

  return function () {
    running = false;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=batch-immutable.js.map