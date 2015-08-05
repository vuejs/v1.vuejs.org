/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	module.exports = __webpack_require__(121);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	Vue.options.replace = false
	Vue.config.silent = true


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var extend = _.extend
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue (options) {
	  this._init(options)
	}
	
	/**
	 * Mixin global API
	 */
	
	extend(Vue, __webpack_require__(12))
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(28),
	  elementDirectives: __webpack_require__(50),
	  filters: __webpack_require__(53),
	  transitions: {},
	  components: {},
	  partials: {}
	}
	
	/**
	 * Build up the prototype
	 */
	
	var p = Vue.prototype
	
	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */
	
	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})
	
	/**
	 * Mixin internal instance methods
	 */
	
	extend(p, __webpack_require__(55))
	extend(p, __webpack_require__(56))
	extend(p, __webpack_require__(57))
	extend(p, __webpack_require__(61))
	extend(p, __webpack_require__(63))
	
	/**
	 * Mixin public API methods
	 */
	
	extend(p, __webpack_require__(64))
	extend(p, __webpack_require__(65))
	extend(p, __webpack_require__(66))
	extend(p, __webpack_require__(67))
	extend(p, __webpack_require__(68))
	
	module.exports = _.Vue = Vue


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(7)
	var extend = lang.extend
	
	extend(exports, lang)
	extend(exports, __webpack_require__(8))
	extend(exports, __webpack_require__(9))
	extend(exports, __webpack_require__(4))
	extend(exports, __webpack_require__(10))
	extend(exports, __webpack_require__(11))


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var extend = _.extend
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = Object.create(null)
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      to.$add(key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed =
	strats.props = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, guardArrayAssets(childVal))
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}
	
	/**
	 * Other object hashes.
	 */
	
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(parentVal)
	  extend(ret, childVal)
	  return ret
	}
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents (options) {
	  if (options.components) {
	    var components = options.components =
	      guardArrayAssets(options.components)
	    var def
	    var ids = Object.keys(components)
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i]
	      if (_.commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        def.id = def.id || key
	        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def))
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps (options) {
	  var props = options.props
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key]
	      if (!_.isPlainObject(val)) {
	        val = { type: val }
	      }
	      val.name = key
	      return val
	    })
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string'
	        ? { name: prop }
	        : prop
	    })
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets (assets) {
	  if (_.isArray(assets)) {
	    var res = {}
	    var i = assets.length
	    var asset
	    while (i--) {
	      asset = assets[i]
	      var id = asset.id || (asset.options && asset.options.id)
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Array-syntax assets must provide an id field.'
	        )
	      } else {
	        res[id] = asset
	      }
	    }
	    return res
	  }
	  return assets
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	exports.resolveAsset = function resolve (options, type, id) {
	  var camelizedId = _.camelize(id)
	  var asset = options[type][id] || options[type][camelizedId]
	  while (
	    !asset && options._parent &&
	    (!config.strict || options._repeat)
	  ) {
	    options = options._parent.$options
	    asset = options[type][id] || options[type][camelizedId]
	  }
	  return asset
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
	  /**
	   * The prefix to look for when parsing directives.
	   *
	   * @type {String}
	   */
	
	  prefix: 'v-',
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Strict mode.
	   * Disables asset lookup in the view parent chain.
	   */
	
	  strict: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether allow observer to alter data objects'
	   * __proto__.
	   *
	   * @type {Boolean}
	   */
	
	  proto: true,
	
	  /**
	   * Whether to parse mustache tags in templates.
	   *
	   * @type {Boolean}
	   */
	
	  interpolate: true,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}
	
	/**
	 * Interpolation delimiters.
	 * We need to mark the changed flag so that the text parser
	 * knows it needs to recompile the regex.
	 *
	 * @type {Array<String>}
	 */
	
	var delimiters = ['{{', '}}']
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    this._delimitersChanged = true
	  }
	})


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Check is a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value
	  } else {
	    var parsed = Number(value)
	    return isNaN(parsed)
	      ? value
	      : parsed
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : false
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper)
	}
	
	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	exports.hyphenate = function (str) {
	  return str
	    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
	    .toLowerCase()
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	exports.extend = function (to, from) {
	  for (var key in from) {
	    to[key] = from[key]
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === '[object Object]'
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isArray = Array.isArray
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	exports.indexOf = function (arr, obj) {
	  for (var i = 0, l = arr.length; i < l; i++) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}
	
	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'
	
	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0
	
	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0
	
	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function handle () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(handle)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(handle, 0)
	  }
	})()


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Cannot find element: ' + selector
	      )
	    }
	  }
	  return el
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed byy doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}
	
	/**
	 * Extract an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */
	
	exports.attr = function (node, attr) {
	  attr = config.prefix + attr
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    trim(el, el.firstChild)
	    trim(el, el.lastChild)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}
	
	function trim (content, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    content.removeChild(node)
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - component
	 * - repeat
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {String|undefined}
	 */
	
	exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (tag === 'component') {
	    // dynamic syntax
	    var exp = el.getAttribute('is')
	    el.removeAttribute('is')
	    return exp
	  } else if (
	    !exports.commonTagRE.test(tag) &&
	    _.resolveAsset(options, 'components', tag)
	  ) {
	    return tag
	  /* eslint-disable no-cond-assign */
	  } else if (tag = _.attr(el, 'component')) {
	  /* eslint-enable no-cond-assign */
	    return tag
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 * The vm may have inherit:true so we need to make sure
	 * we don't accidentally overwrite parent value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    if (key in vm) {
	      _.define(vm, key, value, true)
	    } else {
	      vm[key] = value
	    }
	    vm._data[key] = value
	  }
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true
	  }
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}
	
	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}
	
	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Enable debug utilities.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	
	  var config = __webpack_require__(6)
	  var hasConsole = typeof console !== 'undefined'
	
	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */
	
	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }
	
	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */
	
	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }
	
	  /**
	   * Assert asset exists
	   */
	
	  exports.assertAsset = function (val, type, id) {
	    /* istanbul ignore if */
	    if (type === 'directive') {
	      if (id === 'with') {
	        exports.warn(
	          'v-with has been deprecated in ^0.12.0. ' +
	          'Use props instead.'
	        )
	        return
	      }
	      if (id === 'events') {
	        exports.warn(
	          'v-events has been deprecated in ^0.12.0. ' +
	          'Pass down methods as callback props instead.'
	        )
	        return
	      }
	    }
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	
	/**
	 * Expose useful internals
	 */
	
	exports.util = _
	exports.config = config
	exports.nextTick = _.nextTick
	exports.compiler = __webpack_require__(16)
	
	exports.parsers = {
	  path: __webpack_require__(23),
	  text: __webpack_require__(13),
	  template: __webpack_require__(25),
	  directive: __webpack_require__(15),
	  expression: __webpack_require__(22)
	}
	
	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */
	
	exports.cid = 0
	var cid = 1
	
	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */
	
	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var Sub = createClass(
	    extendOptions.name ||
	    Super.options.name ||
	    'VueComponent'
	  )
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  return Sub
	}
	
	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */
	
	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}
	
	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */
	
	exports.use = function (plugin) {
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  return this
	}
	
	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */
	
	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	    }
	  }
	})


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(14)
	var config = __webpack_require__(6)
	var dirParser = __webpack_require__(15)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE, firstChar, lastChar
	
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}
	
	/**
	 * Compile the interpolation tag regex.
	 *
	 * @return {RegExp}
	 */
	
	function compileRegex () {
	  config._delimitersChanged = false
	  var open = config.delimiters[0]
	  var close = config.delimiters[1]
	  firstChar = open.charAt(0)
	  lastChar = close.charAt(close.length - 1)
	  var firstCharRE = escapeRegex(firstChar)
	  var lastCharRE = escapeRegex(lastChar)
	  var openRE = escapeRegex(open)
	  var closeRE = escapeRegex(close)
	  tagRE = new RegExp(
	    firstCharRE + '?' + openRE +
	    '(.+?)' +
	    closeRE + lastCharRE + '?',
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + firstCharRE + openRE +
	    '.*' +
	    closeRE + lastCharRE + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	exports.parse = function (text) {
	  if (config._delimitersChanged) {
	    compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, value, first, oneTime, twoWay
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    first = match[1].charCodeAt(0)
	    oneTime = first === 42 // *
	    twoWay = first === 64  // @
	    value = oneTime || twoWay
	      ? match[1].slice(1)
	      : match[1]
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      twoWay: twoWay
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	exports.tokensToExp = function (tokens, vm) {
	  return tokens.length > 1
	    ? tokens.map(function (token) {
	        return formatToken(token, vm)
	      }).join('+')
	    : formatToken(tokens[0], vm, true)
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	function formatToken (token, vm, single) {
	  return token.tag
	    ? vm && token.oneTime
	      ? '"' + vm.$eval(token.value) + '"'
	      : inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)[0]
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */
	
	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = Object.create(null)
	}
	
	var p = Cache.prototype
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}
	
	module.exports = Cache


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Cache = __webpack_require__(14)
	var cache = new Cache(1000)
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
	var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g
	var reservedArgRE = /^in$|^-?\d+/
	
	/**
	 * Parser state
	 */
	
	var str
	var c, i, l
	var inSingle
	var inDouble
	var curly
	var square
	var paren
	var begin
	var argIndex
	var dirs
	var dir
	var lastFilterIndex
	var arg
	
	/**
	 * Push a directive object into the result Array
	 */
	
	function pushDir () {
	  dir.raw = str.slice(begin, i).trim()
	  if (dir.expression === undefined) {
	    dir.expression = str.slice(argIndex, i).trim()
	  } else if (lastFilterIndex !== begin) {
	    pushFilter()
	  }
	  if (i === 0 || dir.expression) {
	    dirs.push(dir)
	  }
	}
	
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg (arg) {
	  var stripped = reservedArgRE.test(arg)
	    ? arg
	    : _.stripQuotes(arg)
	  return {
	    value: stripped || arg,
	    dynamic: !stripped
	  }
	}
	
	/**
	 * Parse a directive string into an Array of AST-like
	 * objects representing directives.
	 *
	 * Example:
	 *
	 * "click: a = a + 1 | uppercase" will yield:
	 * {
	 *   arg: 'click',
	 *   expression: 'a = a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Array<Object>}
	 */
	
	exports.parse = function (s) {
	
	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }
	
	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = begin = argIndex = 0
	  lastFilterIndex = 0
	  dirs = []
	  dir = {}
	  arg = null
	
	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x2C && // comma
	      !paren && !curly && !square
	    ) {
	      // reached the end of a directive
	      pushDir()
	      // reset & skip the comma
	      dir = {}
	      begin = argIndex = lastFilterIndex = i + 1
	    } else if (
	      c === 0x3A && // colon
	      !dir.expression &&
	      !dir.arg
	    ) {
	      // argument
	      arg = str.slice(begin, i).trim()
	      // test for valid argument here
	      // since we may have caught stuff like first half of
	      // an object literal or a ternary expression.
	      if (argRE.test(arg)) {
	        argIndex = i + 1
	        dir.arg = _.stripQuotes(arg) || arg
	      }
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(argIndex, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (i === 0 || begin !== i) {
	    pushDir()
	  }
	
	  cache.put(s, dirs)
	  return dirs
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	_.extend(exports, __webpack_require__(17))
	_.extend(exports, __webpack_require__(27))


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var compileProps = __webpack_require__(18)
	var config = __webpack_require__(6)
	var textParser = __webpack_require__(13)
	var dirParser = __webpack_require__(15)
	var templateParser = __webpack_require__(25)
	var resolveAsset = _.resolveAsset
	var componentDef = __webpack_require__(26)
	
	// terminal directives
	var terminalDirectives = [
	  'repeat',
	  'if'
	]
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @param {Vue} [host] - host vm of transcluded content
	 * @return {Function}
	 */
	
	exports.compile = function (el, options, partial, host) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn (vm, el) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host)
	      if (childLinkFn) childLinkFn(vm, childNodes, host)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  return vm._directives.slice(originalDirCount)
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */
	
	exports.compileAndLinkProps = function (vm, el, props) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, null)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * This function does compile and link at the same time,
	 * since root linkers can not be reused. It returns the
	 * unlink function for potential context directives on the
	 * container.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */
	
	exports.compileAndLinkRoot = function (vm, el, options) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options)
	    }
	  }
	
	  // link context scope dirs
	  var context = vm._context
	  var contextDirs
	  if (context && contextLinkFn) {
	    contextDirs = linkAndCapture(function () {
	      contextLinkFn(context, el)
	    }, context)
	  }
	
	  // link self
	  var selfDirs = linkAndCapture(function () {
	    if (replacerLinkFn) replacerLinkFn(vm, el)
	  }, vm)
	
	  // return the unlink function that tearsdown context
	  // container directives.
	  return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && config.interpolate && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement (el, options) {
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (repeat & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options)
	  }
	  // if the element is a textarea, we need to interpolate
	  // its content on initial render.
	  if (el.tagName === 'TEXTAREA') {
	    var realLinkFn = linkFn
	    linkFn = function (vm, el) {
	      el.value = vm.$interpolate(el.value)
	      if (realLinkFn) realLinkFn(vm, el)
	    }
	    linkFn.terminal = true
	  }
	  return linkFn
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    token.type = type
	    token.def = resolveAsset(options, 'directives', type)
	    token.descriptor = dirParser.parse(token.value)[0]
	  }
	  return el
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = vm.$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.type, node,
	                      token.descriptor, token.def)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host)
	      }
	    }
	  }
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Boolean} hasAttrs
	 * @return {Function|undefined}
	 */
	
	function checkComponent (el, options, hasAttrs) {
	  var componentId = _.checkComponent(el, options, hasAttrs)
	  if (componentId) {
	    var componentLinkFn = function (vm, el, host) {
	      vm._bindDir('component', el, {
	        expression: componentId
	      }, componentDef, host)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives (el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    if ((value = _.attr(el, dirName)) !== null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	  }
	}
	
	function skip () {}
	skip.terminal = true
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var descriptor = dirParser.parse(value)[0]
	  // no need to call resolveAsset since terminal directives
	  // are always internal
	  def = def || options.directives[dirName]
	  var fn = function terminalNodeLinkFn (vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host)
	  }
	  fn.terminal = true
	  return fn
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives (attrs, options) {
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, dir, dirName, dirDef
	  while (i--) {
	    attr = attrs[i]
	    name = attr.name
	    value = attr.value
	    if (name.indexOf(config.prefix) === 0) {
	      dirName = name.slice(config.prefix.length)
	      dirDef = resolveAsset(options, 'directives', dirName)
	      if (process.env.NODE_ENV !== 'production') {
	        _.assertAsset(dirDef, 'directive', dirName)
	      }
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(value),
	          def: dirDef
	        })
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(name, value, options)
	      if (dir) {
	        dirs.push(dir)
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  if (dirs.length) {
	    dirs.sort(directiveComparator)
	    return makeNodeLinkFn(dirs)
	  }
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    var dir, j, k
	    while (i--) {
	      dir = directives[i]
	      if (dir._link) {
	        // custom link fn
	        dir._link(vm, el)
	      } else {
	        k = dir.descriptors.length
	        for (j = 0; j < k; j++) {
	          vm._bindDir(dir.name, el,
	            dir.descriptors[j], dir.def, host)
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * Special case: class interpolations are translated into
	 * v-class instead v-attr, so that it can work with user
	 * provided v-class bindings.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */
	
	function collectAttrDirective (name, value, options) {
	  var tokens = textParser.parse(value)
	  var isClass = name === 'class'
	  if (tokens) {
	    var dirName = isClass ? 'class' : 'attr'
	    var def = options.directives[dirName]
	    var i = tokens.length
	    var allOneTime = true
	    while (i--) {
	      var token = tokens[i]
	      if (token.tag && !token.oneTime) {
	        allOneTime = false
	      }
	    }
	    return {
	      def: def,
	      _link: allOneTime
	        ? function (vm, el) {
	            el.setAttribute(name, vm.$interpolate(value))
	          }
	        : function (vm, el) {
	            var exp = textParser.tokensToExp(tokens, vm)
	            var desc = isClass
	              ? dirParser.parse(exp)[0]
	              : dirParser.parse(name + ':' + exp)[0]
	            if (isClass) {
	              desc._rawClass = value
	            }
	            vm._bindDir(dirName, el, desc, def)
	          }
	    }
	  }
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator (a, b) {
	  a = a.def.priority || 0
	  b = b.def.priority || 0
	  return a > b ? 1 : -1
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var textParser = __webpack_require__(13)
	var propDef = __webpack_require__(19)
	var propBindingModes = __webpack_require__(6)._propBindingModes
	
	// regexes
	var identRE = __webpack_require__(23).identRE
	var dataAttrRE = /^data-/
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
	var literalValueRE = /^(true|false)$|^\d.*/
	
	/**
	 * Compile param attributes on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var i = propOptions.length
	  var options, name, attr, value, path, prop, literal, single
	  while (i--) {
	    options = propOptions[i]
	    name = options.name
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name.replace(dataAttrRE, ''))
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	      continue
	    }
	    attr = _.hyphenate(name)
	    value = el.getAttribute(attr)
	    if (value === null) {
	      attr = 'data-' + attr
	      value = el.getAttribute(attr)
	    }
	    // create a prop descriptor
	    prop = {
	      name: name,
	      raw: value,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    }
	    if (value !== null) {
	      // important so that this doesn't get compiled
	      // again as a normal attribute binding
	      el.removeAttribute(attr)
	      var tokens = textParser.parse(value)
	      if (tokens) {
	        prop.dynamic = true
	        prop.parentPath = textParser.tokensToExp(tokens)
	        // check prop binding type.
	        single = tokens.length === 1
	        literal = literalValueRE.test(prop.parentPath)
	        // one time: {{* prop}}
	        if (literal || (single && tokens[0].oneTime)) {
	          prop.mode = propBindingModes.ONE_TIME
	        } else if (
	          !literal &&
	          (single && tokens[0].twoWay)
	        ) {
	          if (settablePathRE.test(prop.parentPath)) {
	            prop.mode = propBindingModes.TWO_WAY
	          } else {
	            process.env.NODE_ENV !== 'production' && _.warn(
	              'Cannot bind two-way prop with non-settable ' +
	              'parent path: ' + prop.parentPath
	            )
	          }
	        }
	        if (
	          process.env.NODE_ENV !== 'production' &&
	          options.twoWay &&
	          prop.mode !== propBindingModes.TWO_WAY
	        ) {
	          _.warn(
	            'Prop "' + name + '" expects a two-way binding type.'
	          )
	        }
	      }
	    } else if (options && options.required) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Missing required prop: ' + name
	      )
	    }
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, el) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value
	    while (i--) {
	      prop = props[i]
	      path = prop.path
	      vm._props[path] = prop
	      options = prop.options
	      if (prop.raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(options))
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = vm._context.$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir('prop', el, prop, propDef)
	          }
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            prop.raw + '"'
	          )
	        }
	      } else {
	        // literal, cast it and just set once
	        var raw = prop.raw
	        value = options.type === Boolean && raw === ''
	          ? true
	          // do not cast emptry string.
	          // _.toNumber casts empty string to 0.
	          : raw.trim()
	            ? _.toBoolean(_.toNumber(raw))
	            : raw
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault (options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean
	      ? false
	      : undefined
	  }
	  var def = options.default
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Object/Array as default prop values will be shared ' +
	      'across multiple instances. Use a factory function ' +
	      'to return the default value instead.'
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function
	    ? def()
	    : def
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.
	
	var _ = __webpack_require__(3)
	var Watcher = __webpack_require__(20)
	var bindingModes = __webpack_require__(6)._propBindingModes
	
	module.exports = {
	
	  bind: function () {
	
	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this._descriptor
	    var childKey = prop.path
	    var parentKey = prop.parentPath
	
	    this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      }
	    )
	
	    // set the child initial value.
	    var value = this.parentWatcher.value
	    if (childKey === '$data') {
	      child._data = value
	    } else {
	      _.initProp(child, prop, value)
	    }
	
	    // setup two-way binding
	    if (prop.mode === bindingModes.TWO_WAY) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          function (val) {
	            parent.$set(parentKey, val)
	          }
	        )
	      })
	    }
	  },
	
	  unbind: function () {
	    this.parentWatcher.teardown()
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var Dep = __webpack_require__(21)
	var expParser = __webpack_require__(22)
	var batcher = __webpack_require__(24)
	var uid = 0
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 * @constructor
	 */
	
	function Watcher (vm, expOrFn, cb, options) {
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? expOrFn.toString() : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  options = options || {}
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.twoWay = !!options.twoWay
	  this.lazy = !!options.lazy
	  this.dirty = this.lazy
	  this.filters = options.filters
	  this.preProcess = options.preProcess
	  this.deps = []
	  this.newDeps = null
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, options.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}
	
	var p = Watcher.prototype
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	p.addDep = function (dep) {
	  var newDeps = this.newDeps
	  var old = this.deps
	  if (_.indexOf(newDeps, dep) < 0) {
	    newDeps.push(dep)
	    var i = _.indexOf(old, dep)
	    if (i < 0) {
	      dep.addSub(this)
	    } else {
	      old[i] = null
	    }
	  }
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	p.get = function () {
	  this.beforeGet()
	  var vm = this.vm
	  var value
	  try {
	    value = this.getter.call(vm, vm)
	  } catch (e) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? '' :
	          'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = vm._applyFilters(value, null, this.filters, false)
	  }
	  this.afterGet()
	  return value
	}
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	p.set = function (value) {
	  var vm = this.vm
	  if (this.filters) {
	    value = vm._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(vm, vm, value)
	  } catch (e) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	}
	
	/**
	 * Prepare for dependency collection.
	 */
	
	p.beforeGet = function () {
	  Dep.target = this
	  this.newDeps = []
	}
	
	/**
	 * Clean up for dependency collection.
	 */
	
	p.afterGet = function () {
	  Dep.target = null
	  var i = this.deps.length
	  while (i--) {
	    var dep = this.deps[i]
	    if (dep) {
	      dep.removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	  this.newDeps = null
	}
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	p.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true
	  } else if (!config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    batcher.push(this)
	  }
	}
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	p.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      var oldValue = this.value
	      this.value = value
	      this.cb(value, oldValue)
	    }
	    this.queued = this.shallow = false
	  }
	}
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	p.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target
	  this.value = this.get()
	  this.dirty = false
	  Dep.target = current
	}
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	p.depend = function () {
	  var i = this.deps.length
	  while (i--) {
	    this.deps[i].depend()
	  }
	}
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	p.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var i = this.deps.length
	    while (i--) {
	      this.deps[i].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */
	
	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
	  }
	}
	
	module.exports = Watcher
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	function Dep () {
	  this.subs = []
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	
	var p = Dep.prototype
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	p.addSub = function (sub) {
	  this.subs.push(sub)
	}
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	p.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	p.depend = function () {
	  Dep.target.addDep(this)
	}
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	p.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}
	
	module.exports = Dep


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var Path = __webpack_require__(23)
	var Cache = __webpack_require__(14)
	var expressionCache = new Cache(1000)
	
	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = []
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore (str, i) {
	  return saved[i]
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}
	
	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}
	
	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid setter function body: ' + body
	    )
	  }
	}
	
	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */
	
	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var Cache = __webpack_require__(14)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/
	
	// actions
	var APPEND = 0
	var PUSH = 1
	
	// states
	var BEFORE_PATH = 0
	var IN_PATH = 1
	var BEFORE_IDENT = 2
	var IN_IDENT = 3
	var BEFORE_ELEMENT = 4
	var AFTER_ZERO = 5
	var IN_INDEX = 6
	var IN_SINGLE_QUOTE = 7
	var IN_DOUBLE_QUOTE = 8
	var IN_SUB_PATH = 9
	var AFTER_ELEMENT = 10
	var AFTER_PATH = 11
	var ERROR = 12
	
	var pathStateMachine = []
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	}
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	}
	
	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	}
	
	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }
	
	  var code = ch.charCodeAt(0)
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch
	
	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }
	
	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }
	
	  return 'else'
	}
	
	/**
	 * Parse a string path into an array of segments
	 * Todo implement cache
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = BEFORE_PATH
	  var c, newChar, key, type, transition, action, typeMap
	
	  var actions = []
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return
	    }
	    keys.push(key)
	    key = undefined
	  }
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar
	    } else {
	      key += newChar
	    }
	  }
	
	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
	        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions[APPEND]()
	      return true
	    }
	  }
	
	  while (mode != null) {
	    index++
	    c = path[index]
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }
	
	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || ERROR
	
	    if (transition === ERROR) {
	      return // parse error
	    }
	
	    mode = transition[0]
	    action = actions[transition[1]]
	    if (action) {
	      newChar = transition[2]
	      newChar = newChar === undefined
	        ? c
	        : newChar === '*'
	          ? newChar + c
	          : newChar
	      action()
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path
	      return keys
	    }
	  }
	}
	
	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}
	
	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */
	
	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        warnNonExistent(path)
	        obj = {}
	        last.$add(key, obj)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        warnNonExistent(path)
	        obj.$add(key, val)
	      }
	    }
	  }
	  return true
	}
	
	function warnNonExistent (path) {
	  process.env.NODE_ENV !== 'production' && _.warn(
	    'You are setting a non-existent path "' + path.raw + '" ' +
	    'on a vm instance. Consider pre-initializing the property ' +
	    'with the "data" option for more reliable reactivity ' +
	    'and better performance.'
	  )
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var circular = {}
	var waiting = false
	var internalQueueDepleted = false
	
	/**
	 * Reset the batcher's state.
	 */
	
	function reset () {
	  queue = []
	  userQueue = []
	  has = {}
	  circular = {}
	  waiting = internalQueueDepleted = false
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flush () {
	  run(queue)
	  internalQueueDepleted = true
	  run(userQueue)
	  reset()
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function run (queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1)
	        _.warn(
	          'You may have an infinite update loop for watcher ' +
	          'with expression: ' + watcher.expression
	        )
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	exports.push = function (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run()
	      return
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue
	    has[id] = q.length
	    q.push(watcher)
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flush)
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Cache = __webpack_require__(14)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)
	
	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}
	
	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]
	
	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']
	
	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]
	
	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;/
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }
	
	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {
	
	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')
	
	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }
	
	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }
	
	  templateCache.put(templateString, frag)
	  return frag
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (
	    _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	  ) {
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  return frag
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = _.inBrowser
	  ? (function () {
	      var a = document.createElement('div')
	      a.innerHTML = '<template>1</template>'
	      return !a.cloneNode(true).firstChild.innerHTML
	    })()
	  : false
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = _.inBrowser
	  ? (function () {
	      var t = document.createElement('textarea')
	      t.placeholder = 't'
	      return t.cloneNode(true).value === 't'
	    })()
	  : false
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	exports.clone = function (node) {
	  var res = node.cloneNode(true)
	  if (!node.querySelectorAll) {
	    return res
	  }
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = res.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          exports.clone(original[i]),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */
	
	exports.parse = function (template, clone, noSelector) {
	  var node, frag
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    return clone
	      ? exports.clone(template)
	      : template
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }
	
	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var templateParser = __webpack_require__(25)
	
	module.exports = {
	
	  isLiteral: true,
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   v-component="comp"
	   *
	   * - dynamic:
	   *   v-component="{{currentView}}"
	   */
	
	  bind: function () {
	    if (!this.el.__vue__) {
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null
	      // wait for event before insertion
	      this.readyEvent = this._checkParam('wait-for')
	      // check ref
	      this.refID = this._checkParam(config.prefix + 'ref')
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this._pendingCb =
	      this.componentID =
	      this.Component = null
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveComponent(this.expression, _.bind(this.initStatic, this))
	      } else {
	        // check dynamic component params
	        this.transMode = this._checkParam('transition-mode')
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'cannot mount component "' + this.expression + '" ' +
	        'on already mounted element: ' + this.el
	      )
	    }
	  },
	
	  /**
	   * Initialize a static component.
	   */
	
	  initStatic: function () {
	    var child = this.build()
	    var anchor = this.anchor
	    this.setCurrent(child)
	    if (!this.readyEvent) {
	      child.$before(anchor)
	    } else {
	      child.$once(this.readyEvent, function () {
	        child.$before(anchor)
	      })
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. v-component="{{view}}"
	   */
	
	  update: function (value) {
	    this.setComponent(value)
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * @param {String} value
	   * @param {Object} data
	   * @param {Function} afterBuild
	   * @param {Function} afterTransition
	   */
	
	  setComponent: function (value, data, afterBuild, afterTransition) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, afterTransition)
	      this.unsetCurrent()
	    } else {
	      this.resolveComponent(value, _.bind(function () {
	        this.unbuild(true)
	        var newComponent = this.build(data)
	        /* istanbul ignore if */
	        if (afterBuild) afterBuild(newComponent)
	        var self = this
	        if (this.readyEvent) {
	          newComponent.$once(this.readyEvent, function () {
	            self.transition(newComponent, afterTransition)
	          })
	        } else {
	          this.transition(newComponent, afterTransition)
	        }
	      }, this))
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function (id, cb) {
	    var self = this
	    this._pendingCb = _.cancellable(function (component) {
	      self.componentID = id
	      self.Component = component
	      cb()
	    })
	    this.vm._resolveComponent(id, this._pendingCb)
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function () {
	    if (this._pendingCb) {
	      this._pendingCb.cancel()
	      this._pendingCb = null
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [data]
	   * @return {Vue} - the created instance
	   */
	
	  build: function (data) {
	    if (this.keepAlive) {
	      var cached = this.cache[this.componentID]
	      if (cached) {
	        return cached
	      }
	    }
	    if (this.Component) {
	      var parent = this._host || this.vm
	      var el = templateParser.clone(this.el)
	      var child = parent.$addChild({
	        el: el,
	        data: data,
	        template: this.template,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.template,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        _context: this.vm
	      }, this.Component)
	      if (this.keepAlive) {
	        this.cache[this.componentID] = child
	      }
	      return child
	    }
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function (defer) {
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      child.$remove(function () {
	        if (!keepAlive) child._cleanup()
	        if (cb) cb()
	      })
	    } else if (cb) {
	      cb()
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    this.unsetCurrent()
	    this.setCurrent(target)
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          if (!target._isDestroyed) {
	            target.$before(self.anchor, cb)
	          }
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },
	
	  /**
	   * Set childVM and parent ref
	   */
	
	  setCurrent: function (child) {
	    this.childVM = child
	    var refID = child._refID || this.refID
	    if (refID) {
	      this.vm.$[refID] = child
	    }
	  },
	
	  /**
	   * Unset childVM and parent ref
	   */
	
	  unsetCurrent: function () {
	    var child = this.childVM
	    this.childVM = null
	    var refID = (child && child._refID) || this.refID
	    if (refID) {
	      this.vm.$[refID] = null
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    this.unsetCurrent()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var templateParser = __webpack_require__(25)
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-repeat.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<content></content>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (frag) {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // single nested component
	        tag === 'component' ||
	        _.resolveAsset(options, 'components', tag) ||
	        replacer.hasAttribute(config.prefix + 'component') ||
	        // element directive
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        // repeat block
	        replacer.hasAttribute(config.prefix + 'repeat')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid template option: ' + template
	    )
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes)
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value
	      to.setAttribute(name, value)
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// manipulation directives
	exports.text = __webpack_require__(30)
	exports.html = __webpack_require__(31)
	exports.attr = __webpack_require__(32)
	exports.show = __webpack_require__(33)
	exports['class'] = __webpack_require__(35)
	exports.el = __webpack_require__(36)
	exports.ref = __webpack_require__(37)
	exports.cloak = __webpack_require__(38)
	exports.style = __webpack_require__(29)
	exports.transition = __webpack_require__(39)
	
	// event listener directives
	exports.on = __webpack_require__(42)
	exports.model = __webpack_require__(43)
	
	// logic control directives
	exports.repeat = __webpack_require__(48)
	exports['if'] = __webpack_require__(49)
	
	// internal directives that should not be used directly
	// but we still want to expose them for advanced usage.
	exports._component = __webpack_require__(26)
	exports._prop = __webpack_require__(19)


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var camelRE = /([a-z])([A-Z])/g
	var testEl = null
	var propCache = {}
	
	module.exports = {
	
	  deep: true,
	
	  update: function (value) {
	    if (this.arg) {
	      this.setProp(this.arg, value)
	    } else {
	      if (typeof value === 'object') {
	        this.objectHandler(value)
	      } else {
	        this.el.style.cssText = value
	      }
	    }
	  },
	
	  objectHandler: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var prop, val
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null)
	        delete cache[prop]
	      }
	    }
	    for (prop in value) {
	      val = value[prop]
	      if (val !== cache[prop]) {
	        cache[prop] = val
	        this.setProp(prop, val)
	      }
	    }
	  },
	
	  setProp: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }
	
	}
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix (prop) {
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	module.exports = {
	
	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },
	
	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(25)
	
	module.exports = {
	
	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },
	
	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },
	
	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/
	
	module.exports = {
	
	  priority: 850,
	
	  update: function (value) {
	    if (this.arg) {
	      this.setAttr(this.arg, value)
	    } else if (typeof value === 'object') {
	      this.objectHandler(value)
	    }
	  },
	
	  objectHandler: function (value) {
	    // cache object attrs so that only changed attrs
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var attr, val
	    for (attr in cache) {
	      if (!(attr in value)) {
	        this.setAttr(attr, null)
	        delete cache[attr]
	      }
	    }
	    for (attr in value) {
	      val = value[attr]
	      if (val !== cache[attr]) {
	        cache[attr] = val
	        this.setAttr(attr, val)
	      }
	    }
	  },
	
	  setAttr: function (attr, value) {
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	    if (attr === 'value' && 'value' in this.el) {
	      this.el.value = value
	    }
	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var transition = __webpack_require__(34)
	
	module.exports = function (value) {
	  var el = this.el
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none'
	  }, this.vm)
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	/**
	 * Append with transition.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}
	
	/**
	 * Remove with transition.
	 *
	 * @oaram {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}
	
	/**
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * Append the childNodes of a fragment to target.
	 *
	 * @param {DocumentFragment} block
	 * @param {Node} target
	 * @param {Vue} vm
	 */
	
	exports.blockAppend = function (block, target, vm) {
	  var nodes = _.toArray(block.childNodes)
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    exports.before(nodes[i], target, vm)
	  }
	}
	
	/**
	 * Remove a block of nodes between two edge nodes.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 */
	
	exports.blockRemove = function (start, end, vm) {
	  var node = start.nextSibling
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    exports.remove(node, vm)
	    node = next
	  }
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @oaram {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var addClass = _.addClass
	var removeClass = _.removeClass
	
	module.exports = {
	
	  bind: function () {
	    // interpolations like class="{{abc}}" are converted
	    // to v-class, and we need to remove the raw,
	    // uninterpolated className at binding time.
	    var raw = this._descriptor._rawClass
	    if (raw) {
	      this.prevKeys = raw.trim().split(/\s+/)
	    }
	  },
	
	  update: function (value) {
	    if (this.arg) {
	      // single toggle
	      if (value) {
	        addClass(this.el, this.arg)
	      } else {
	        removeClass(this.el, this.arg)
	      }
	    } else {
	      if (value && typeof value === 'string') {
	        this.handleObject(stringToObject(value))
	      } else if (_.isPlainObject(value)) {
	        this.handleObject(value)
	      } else {
	        this.cleanup()
	      }
	    }
	  },
	
	  handleObject: function (value) {
	    this.cleanup(value)
	    var keys = this.prevKeys = Object.keys(value)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      if (value[key]) {
	        addClass(this.el, key)
	      } else {
	        removeClass(this.el, key)
	      }
	    }
	  },
	
	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (!value || !value.hasOwnProperty(key)) {
	          removeClass(this.el, key)
	        }
	      }
	    }
	  }
	}
	
	function stringToObject (value) {
	  var res = {}
	  var keys = value.trim().split(/\s+/)
	  var i = keys.length
	  while (i--) {
	    res[keys[i]] = true
	  }
	  return res
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
	  isLiteral: true,
	
	  bind: function () {
	    this.vm.$$[this.expression] = this.el
	  },
	
	  unbind: function () {
	    delete this.vm.$$[this.expression]
	  }
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	
	module.exports = {
	
	  isLiteral: true,
	
	  bind: function () {
	    var vm = this.el.__vue__
	    if (!vm) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-ref should only be used on a component root element.'
	      )
	      return
	    }
	    // If we get here, it means this is a `v-ref` on a
	    // child, because parent scope `v-ref` is stripped in
	    // `v-component` already. So we just record our own ref
	    // here - it will overwrite parent ref in `v-component`,
	    // if any.
	    vm._refID = this.expression
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(6)
	
	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak')
	    })
	  }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Transition = __webpack_require__(40)
	
	module.exports = {
	
	  priority: 1000,
	  isLiteral: true,
	
	  bind: function () {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression)
	    }
	  },
	
	  update: function (id, oldId) {
	    var el = this.el
	    var vm = this.el.__vue__ || this.vm
	    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
	    id = id || 'v'
	    el.__v_trans = new Transition(el, id, hooks, vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var queue = __webpack_require__(41)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'
	
	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	
	function Transition (el, id, hooks, vm) {
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}
	
	var p = Transition.prototype
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.callHookWithCb('enter')
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p.enterNextTick = function () {
	  var type = this.getCssTransitionType(this.enterClass)
	  var enterDone = this.enterDone
	  if (type === TYPE_TRANSITION) {
	    // trigger transition by removing enter class now
	    removeClass(this.el, this.enterClass)
	    this.setupCssCb(transitionEndEvent, enterDone)
	  } else if (type === TYPE_ANIMATION) {
	    this.setupCssCb(animationEndEvent, enterDone)
	  } else if (!this.pendingJsCb) {
	    enterDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p.enterDone = function () {
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.callHookWithCb('leave')
	  this.cancel = this.hooks && this.hooks.leaveCancelled
	  // only need to do leaveNextTick if there's no explicit
	  // js callback
	  if (!this.pendingJsCb) {
	    queue.push(this.leaveNextTick)
	  }
	}
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p.leaveDone = function () {
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}
	
	module.exports = Transition


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var queue = []
	var queued = false
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	
	module.exports = {
	
	  acceptStatement: true,
	  priority: 700,
	
	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      _.on(this.el, 'load', this.iframeBind)
	    }
	  },
	
	  update: function (handler) {
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Directive v-on="' + this.arg + ': ' +
	        this.expression + '" expects a function value, ' +
	        'got ' + handler
	      )
	      return
	    }
	    this.reset()
	    var vm = this.vm
	    this.handler = function (e) {
	      e.targetVM = vm
	      vm.$event = e
	      var res = handler(e)
	      vm.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },
	
	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },
	
	  unbind: function () {
	    this.reset()
	    _.off(this.el, 'load', this.iframeBind)
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	
	var handlers = {
	  text: __webpack_require__(44),
	  radio: __webpack_require__(45),
	  select: __webpack_require__(46),
	  checkbox: __webpack_require__(47)
	}
	
	module.exports = {
	
	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   *     - TODO: more types may be supplied as a plugin
	   */
	
	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-model does not support element type: ' + tag
	      )
	      return
	    }
	    handler.bind.call(this)
	    this.update = handler.update
	    this.unbind = handler.unbind
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this._checkParam('lazy') != null
	    // - number: cast value into number when updating model.
	    var number = this._checkParam('number') != null
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this._checkParam('debounce'), 10)
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid) {
	      this.onComposeStart = function () {
	        composing = true
	      }
	      this.onComposeEnd = function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        self.listener()
	      }
	      _.on(el, 'compositionstart', this.onComposeStart)
	      _.on(el, 'compositionend', this.onComposeEnd)
	    }
	
	    function syncToModel () {
	      var val = number
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	    }
	
	    // if the directive has filters, we need to
	    // record cursor position and restore it after updating
	    // the input with the filtered value.
	    // also force update for type="range" inputs to enable
	    // "lock in range" (see #506)
	    if (this.hasRead || el.type === 'range') {
	      this.listener = function () {
	        if (composing) return
	        var charsOffset
	        // some HTML5 input types throw error here
	        try {
	          // record how many chars from the end of input
	          // the cursor was at
	          charsOffset = el.value.length - el.selectionStart
	        } catch (e) {}
	        // Fix IE10/11 infinite update cycle
	        // https://github.com/yyx990803/vue/issues/592
	        /* istanbul ignore if */
	        if (charsOffset < 0) {
	          return
	        }
	        syncToModel()
	        _.nextTick(function () {
	          // force a value update, because in
	          // certain cases the write filters output the
	          // same result for different input values, and
	          // the Observer set events won't be triggered.
	          var newVal = self._watcher.value
	          self.update(newVal)
	          if (charsOffset != null) {
	            var cursorPos =
	              _.toString(newVal).length - charsOffset
	            el.setSelectionRange(cursorPos, cursorPos)
	          }
	        })
	      }
	    } else {
	      this.listener = function () {
	        if (composing) return
	        syncToModel()
	      }
	    }
	
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }
	
	    // Now attach the main listener
	
	    this.event = lazy ? 'change' : 'input'
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on(this.event, this.listener)
	    } else {
	      _.on(el, this.event, this.listener)
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.onCut = function () {
	        _.nextTick(self.listener)
	      }
	      this.onDel = function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      }
	      _.on(el, 'cut', this.onCut)
	      _.on(el, 'keyup', this.onDel)
	    }
	
	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this._initValue = number
	        ? _.toNumber(el.value)
	        : el.value
	    }
	  },
	
	  update: function (value) {
	    this.el.value = _.toString(value)
	  },
	
	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off(this.event, this.listener)
	    } else {
	      _.off(el, this.event, this.listener)
	    }
	    if (this.onComposeStart) {
	      _.off(el, 'compositionstart', this.onComposeStart)
	      _.off(el, 'compositionend', this.onComposeEnd)
	    }
	    if (this.onCut) {
	      _.off(el, 'cut', this.onCut)
	      _.off(el, 'keyup', this.onDel)
	    }
	  }
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.value)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.value
	    }
	  },
	
	  update: function (value) {
	    /* eslint-disable eqeqeq */
	    this.el.checked = value == this.el.value
	    /* eslint-enable eqeqeq */
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var Watcher = __webpack_require__(20)
	var dirParser = __webpack_require__(15)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    // update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }
	    // check options param
	    var optionsParam = this._checkParam('options')
	    if (optionsParam) {
	      initOptions.call(this, optionsParam)
	    }
	    this.number = this._checkParam('number') != null
	    this.multiple = el.hasAttribute('multiple')
	    this.listener = function () {
	      var value = self.multiple
	        ? getMultiValue(el)
	        : el.value
	      value = self.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    }
	    _.on(el, 'change', this.listener)
	    checkInitialValue.call(this)
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },
	
	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var option
	    while (i--) {
	      option = options[i]
	      /* eslint-disable eqeqeq */
	      option.selected = multi
	        ? indexOf(value, option.value) > -1
	        : value == option.value
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	    this.vm.$off('hook:attached', this.forceUpdate)
	    if (this.optionWatcher) {
	      this.optionWatcher.teardown()
	    }
	  }
	
	}
	
	/**
	 * Initialize the option list from the param.
	 *
	 * @param {String} expression
	 */
	
	function initOptions (expression) {
	  var self = this
	  var descriptor = dirParser.parse(expression)[0]
	  function optionUpdateWatcher (value) {
	    if (_.isArray(value)) {
	      self.el.innerHTML = ''
	      buildOptions(self.el, value)
	      self.forceUpdate()
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid options value for v-model: ' + value
	      )
	    }
	  }
	  this.optionWatcher = new Watcher(
	    this.vm,
	    descriptor.expression,
	    optionUpdateWatcher,
	    {
	      deep: true,
	      filters: descriptor.filters
	    }
	  )
	  // update with initial value
	  optionUpdateWatcher(this.optionWatcher.value)
	}
	
	/**
	 * Build up option elements. IE9 doesn't create options
	 * when setting innerHTML on <select> elements, so we have
	 * to use DOM API here.
	 *
	 * @param {Element} parent - a <select> or an <optgroup>
	 * @param {Array} options
	 */
	
	function buildOptions (parent, options) {
	  var op, el
	  for (var i = 0, l = options.length; i < l; i++) {
	    op = options[i]
	    if (!op.options) {
	      el = document.createElement('option')
	      if (typeof op === 'string') {
	        el.text = el.value = op
	      } else {
	        if (op.value != null) {
	          el.value = op.value
	        }
	        el.text = op.text || op.value || ''
	        if (op.disabled) {
	          el.disabled = true
	        }
	      }
	    } else {
	      el = document.createElement('optgroup')
	      el.label = op.label
	      buildOptions(el, op.options)
	    }
	    parent.appendChild(el)
	  }
	}
	
	/**
	 * Check the initial value for selected options.
	 */
	
	function checkInitialValue () {
	  var initValue
	  var options = this.el.options
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (options[i].hasAttribute('selected')) {
	      if (this.multiple) {
	        (initValue || (initValue = []))
	          .push(options[i].value)
	      } else {
	        initValue = options[i].value
	      }
	    }
	  }
	  if (typeof initValue !== 'undefined') {
	    this._initValue = this.number
	      ? _.toNumber(initValue)
	      : initValue
	  }
	}
	
	/**
	 * Helper to extract a value array for select[multiple]
	 *
	 * @param {SelectElement} el
	 * @return {Array}
	 */
	
	function getMultiValue (el) {
	  return Array.prototype.filter
	    .call(el.options, filterSelected)
	    .map(getOptionValue)
	}
	
	function filterSelected (op) {
	  return op.selected
	}
	
	function getOptionValue (op) {
	  return op.value || op.text
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with soft equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    /* eslint-disable eqeqeq */
	    if (arr[i] == val) return i
	    /* eslint-enable eqeqeq */
	  }
	  return -1
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.checked)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.checked
	    }
	  },
	
	  update: function (value) {
	    this.el.checked = !!value
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var isObject = _.isObject
	var isPlainObject = _.isPlainObject
	var textParser = __webpack_require__(13)
	var expParser = __webpack_require__(22)
	var templateParser = __webpack_require__(25)
	var compiler = __webpack_require__(16)
	var uid = 0
	
	// async component resolution states
	var UNRESOLVED = 0
	var PENDING = 1
	var RESOLVED = 2
	var ABORTED = 3
	
	module.exports = {
	
	  /**
	   * Setup.
	   */
	
	  bind: function () {
	    // support for item in array syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      this.arg = inMatch[1]
	      this._watcherExp = inMatch[2]
	    }
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + (++uid)
	
	    // setup anchor nodes
	    this.start = _.createAnchor('v-repeat-start')
	    this.end = _.createAnchor('v-repeat-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)
	
	    // check if this is a block repeat
	    this.template = _.isTemplate(this.el)
	      ? templateParser.parse(this.el, true)
	      : this.el
	
	    // check for trackby param
	    this.idKey = this._checkParam('track-by')
	    // check for transition stagger
	    var stagger = +this._checkParam('stagger')
	    this.enterStagger = +this._checkParam('enter-stagger') || stagger
	    this.leaveStagger = +this._checkParam('leave-stagger') || stagger
	
	    // check for v-ref/v-el
	    this.refID = this._checkParam(config.prefix + 'ref')
	    this.elID = this._checkParam(config.prefix + 'el')
	
	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf()
	    this.checkComponent()
	
	    // create cache object
	    this.cache = Object.create(null)
	
	    // some helpful tips...
	    /* istanbul ignore if */
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      this.el.tagName === 'OPTION'
	    ) {
	      _.warn(
	        'Don\'t use v-repeat for v-model options; ' +
	        'use the `options` param instead: ' +
	        'http://vuejs.org/guide/forms.html#Dynamic_Select_Options'
	      )
	    }
	  },
	
	  /**
	   * Warn against v-if usage.
	   */
	
	  checkIf: function () {
	    if (_.attr(this.el, 'if') !== null) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Don\'t use v-if with v-repeat. ' +
	        'Use v-show or the "filterBy" filter instead.'
	      )
	    }
	  },
	
	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */
	
	  checkComponent: function () {
	    this.componentState = UNRESOLVED
	    var options = this.vm.$options
	    var id = _.checkComponent(this.el, options)
	    if (!id) {
	      // default constructor
	      this.Component = _.Vue
	      // inline repeats should inherit
	      this.inline = true
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = compiler.transclude(this.template)
	      var copy = _.extend({}, options)
	      copy._asComponent = false
	      this._linkFn = compiler.compile(this.template, copy)
	    } else {
	      this.Component = null
	      this.asComponent = true
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      var tokens = textParser.parse(id)
	      if (tokens) {
	        // dynamic component to be resolved later
	        var componentExp = textParser.tokensToExp(tokens)
	        this.componentGetter = expParser.parse(componentExp).get
	      } else {
	        // static
	        this.componentId = id
	        this.pendingData = null
	      }
	    }
	  },
	
	  resolveComponent: function () {
	    this.componentState = PENDING
	    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
	      if (this.componentState === ABORTED) {
	        return
	      }
	      this.Component = Component
	      this.componentState = RESOLVED
	      this.realUpdate(this.pendingData)
	      this.pendingData = null
	    }, this))
	  },
	
	    /**
	   * Resolve a dynamic component to use for an instance.
	   * The tricky part here is that there could be dynamic
	   * components depending on instance data.
	   *
	   * @param {Object} data
	   * @param {Object} meta
	   * @return {Function}
	   */
	
	  resolveDynamicComponent: function (data, meta) {
	    // create a temporary context object and copy data
	    // and meta properties onto it.
	    // use _.define to avoid accidentally overwriting scope
	    // properties.
	    var context = Object.create(this.vm)
	    var key
	    for (key in data) {
	      _.define(context, key, data[key])
	    }
	    for (key in meta) {
	      _.define(context, key, meta[key])
	    }
	    var id = this.componentGetter.call(context, context)
	    var Component = _.resolveAsset(this.vm.$options, 'components', id)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(Component, 'component', id)
	    }
	    if (!Component.options) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Async resolution is not supported for v-repeat ' +
	        '+ dynamic component. (component: ' + id + ')'
	      )
	      return _.Vue
	    }
	    return Component
	  },
	
	  /**
	   * Update.
	   * This is called whenever the Array mutates. If we have
	   * a component, we might need to wait for it to resolve
	   * asynchronously.
	   *
	   * @param {Array|Number|String} data
	   */
	
	  update: function (data) {
	    if (this.componentId) {
	      var state = this.componentState
	      if (state === UNRESOLVED) {
	        this.pendingData = data
	        // once resolved, it will call realUpdate
	        this.resolveComponent()
	      } else if (state === PENDING) {
	        this.pendingData = data
	      } else if (state === RESOLVED) {
	        this.realUpdate(data)
	      }
	    } else {
	      this.realUpdate(data)
	    }
	  },
	
	  /**
	   * The real update that actually modifies the DOM.
	   *
	   * @param {Array|Number|String} data
	   */
	
	  realUpdate: function (data) {
	    this.vms = this.diff(data, this.vms)
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.converted
	        ? toRefObject(this.vms)
	        : this.vms
	    }
	    if (this.elID) {
	      this.vm.$$[this.elID] = this.vms.map(function (vm) {
	        return vm.$el
	      })
	    }
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   * @param {Array} oldVms
	   * @return {Array}
	   */
	
	  diff: function (data, oldVms) {
	    var idKey = this.idKey
	    var converted = this.converted
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var alias = this.arg
	    var init = !oldVms
	    var vms = new Array(data.length)
	    var obj, raw, vm, i, l, primitive
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i]
	      raw = converted ? obj.$value : obj
	      primitive = !isObject(raw)
	      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
	      if (vm) { // reusable instance
	        vm._reused = true
	        vm.$index = i // update $index
	        // update data for track-by or object repeat,
	        // since in these two cases the data is replaced
	        // rather than mutated.
	        if (idKey || converted || primitive) {
	          if (alias) {
	            vm[alias] = raw
	          } else if (_.isPlainObject(raw)) {
	            vm.$data = raw
	          } else {
	            vm.$value = raw
	          }
	        }
	      } else { // new instance
	        vm = this.build(obj, i, true)
	        vm._reused = false
	      }
	      vms[i] = vm
	      // insert if this is first run
	      if (init) {
	        vm.$before(end)
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldVms.length - vms.length
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i]
	      if (!vm._reused) {
	        this.uncacheVm(vm)
	        vm.$destroy(false, true) // defer cleanup until removal
	        this.remove(vm, removalIndex++, totalRemoved, inDoc)
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = vms.length; i < l; i++) {
	      vm = vms[i]
	      // this is the vm that we should be after
	      targetPrev = vms[i - 1]
	      prevEl = targetPrev
	        ? targetPrev._staggerCb
	          ? targetPrev._staggerAnchor
	          : targetPrev._fragmentEnd || targetPrev.$el
	        : start
	      if (vm._reused && !vm._staggerCb) {
	        currentPrev = findPrevVm(vm, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(vm, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(vm, insertionIndex++, prevEl, inDoc)
	      }
	      vm._reused = false
	    }
	    return vms
	  },
	
	  /**
	   * Build a new instance and cache it.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {Boolean} needCache
	   */
	
	  build: function (data, index, needCache) {
	    var meta = { $index: index }
	    if (this.converted) {
	      meta.$key = data.$key
	    }
	    var raw = this.converted ? data.$value : data
	    var alias = this.arg
	    if (alias) {
	      data = {}
	      data[alias] = raw
	    } else if (!isPlainObject(raw)) {
	      // non-object values
	      data = {}
	      meta.$value = raw
	    } else {
	      // default
	      data = raw
	    }
	    // resolve constructor
	    var Component = this.Component || this.resolveDynamicComponent(data, meta)
	    var parent = this._host || this.vm
	    var vm = parent.$addChild({
	      el: templateParser.clone(this.template),
	      data: data,
	      inherit: this.inline,
	      template: this.inlineTemplate,
	      // repeater meta, e.g. $index, $key
	      _meta: meta,
	      // mark this as an inline-repeat instance
	      _repeat: this.inline,
	      // is this a component?
	      _asComponent: this.asComponent,
	      // linker cachable if no inline-template
	      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
	      // pre-compiled linker for simple repeats
	      _linkFn: this._linkFn,
	      // identifier, shows that this vm belongs to this collection
	      _repeatId: this.id,
	      // transclusion content owner
	      _context: this.vm
	    }, Component)
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
	    }
	    // sync back changes for two-way bindings of primitive values
	    var dir = this
	    if (this.rawType === 'object' && isPrimitive(raw)) {
	      vm.$watch(alias || '$value', function (val) {
	        if (dir.filters) {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'You seem to be mutating the $value reference of ' +
	            'a v-repeat instance (likely through v-model) ' +
	            'and filtering the v-repeat at the same time. ' +
	            'This will not work properly with an Array of ' +
	            'primitive values. Please use an Array of ' +
	            'Objects instead.'
	          )
	        }
	        dir._withLock(function () {
	          if (dir.converted) {
	            dir.rawValue[vm.$key] = val
	          } else {
	            dir.rawValue.$set(vm.$index, val)
	          }
	        })
	      })
	    }
	    return vm
	  },
	
	  /**
	   * Unbind, teardown everything
	   */
	
	  unbind: function () {
	    this.componentState = ABORTED
	    if (this.refID) {
	      this.vm.$[this.refID] = null
	    }
	    if (this.vms) {
	      var i = this.vms.length
	      var vm
	      while (i--) {
	        vm = this.vms[i]
	        this.uncacheVm(vm)
	        vm.$destroy()
	      }
	    }
	  },
	
	  /**
	   * Cache a vm instance based on its data.
	   *
	   * If the data is an object, we save the vm's reference on
	   * the data object as a hidden property. Otherwise we
	   * cache them in an object and for each primitive value
	   * there is an array in case there are duplicates.
	   *
	   * @param {Object} data
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheVm: function (data, vm, index, key) {
	    var idKey = this.idKey
	    var cache = this.cache
	    var primitive = !isObject(data)
	    var id
	    if (key || idKey || primitive) {
	      id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      if (!cache[id]) {
	        cache[id] = vm
	      } else if (!primitive && idKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Duplicate track-by key in v-repeat: ' + id
	        )
	      }
	    } else {
	      id = this.id
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'Duplicate objects are not supported in v-repeat ' +
	            'when using components or transitions.'
	          )
	        }
	      } else {
	        _.define(data, id, vm)
	      }
	    }
	    vm._raw = data
	  },
	
	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Vue|undefined}
	   */
	
	  getVm: function (data, index, key) {
	    var idKey = this.idKey
	    var primitive = !isObject(data)
	    if (key || idKey || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      return this.cache[id]
	    } else {
	      return data[this.id]
	    }
	  },
	
	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */
	
	  uncacheVm: function (vm) {
	    var data = vm._raw
	    var idKey = this.idKey
	    var index = vm.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = vm.hasOwnProperty('$key') && vm.$key
	    var primitive = !isObject(data)
	    if (idKey || key || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      this.cache[id] = null
	    } else {
	      data[this.id] = null
	      vm._raw = null
	    }
	  },
	
	  /**
	   * Insert an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */
	
	  insert: function (vm, index, prevEl, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	    }
	    var staggerAmount = this.getStagger(vm, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = vm._staggerAnchor
	      if (!anchor) {
	        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vue__ = vm
	      }
	      _.after(anchor, prevEl)
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        vm.$before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      vm.$after(prevEl)
	    }
	  },
	
	  /**
	   * Move an already inserted instance.
	   *
	   * @param {Vue} vm
	   * @param {Node} prevEl
	   */
	
	  move: function (vm, prevEl) {
	    vm.$after(prevEl, null, false)
	  },
	
	  /**
	   * Remove an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Boolean} inDoc
	   */
	
	  remove: function (vm, index, total, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	      // it's not possible for the same vm to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this vm is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(vm, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        remove()
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      remove()
	    }
	    function remove () {
	      vm.$remove(function () {
	        vm._cleanup()
	      })
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} type
	   * @param {Number} total
	   */
	
	  getStagger: function (vm, index, total, type) {
	    type = type + 'Stagger'
	    var transition = vm.$el.__v_trans
	    var hooks = transition && transition.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(vm, index, total)
	      : index * this[type]
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters, and convert non-Array objects to arrays.
	   *
	   * This function will be bound to this directive instance
	   * and passed into the watcher.
	   *
	   * @param {*} value
	   * @return {Array}
	   * @private
	   */
	
	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    var type = this.rawType = typeof value
	    if (!isPlainObject(value)) {
	      this.converted = false
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    } else {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      this.converted = true
	      return res
	    }
	  }
	}
	
	/**
	 * Helper to find the previous element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return vm that is bound to this v-repeat. (see #929)
	 *
	 * @param {Vue} vm
	 * @param {Comment|Text} anchor
	 * @return {Vue}
	 */
	
	function findPrevVm (vm, anchor, id) {
	  var el = vm.$el.previousSibling
	  /* istanbul ignore if */
	  if (!el) return
	  while (
	    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	  }
	  return el.__vue__
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}
	
	/**
	 * Convert a vms array to an object ref for v-ref on an
	 * Object value.
	 *
	 * @param {Array} vms
	 * @return {Object}
	 */
	
	function toRefObject (vms) {
	  var ref = {}
	  for (var i = 0, l = vms.length; i < l; i++) {
	    ref[vms[i].$key] = vms[i]
	  }
	  return ref
	}
	
	/**
	 * Check if a value is a primitive one:
	 * String, Number, Boolean, null or undefined.
	 *
	 * @param {*} value
	 * @return {Boolean}
	 */
	
	function isPrimitive (value) {
	  var type = typeof value
	  return value == null ||
	    type === 'string' ||
	    type === 'number' ||
	    type === 'boolean'
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var compiler = __webpack_require__(16)
	var templateParser = __webpack_require__(25)
	var transition = __webpack_require__(34)
	var Cache = __webpack_require__(14)
	var cache = new Cache(1000)
	
	module.exports = {
	
	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      this.start = _.createAnchor('v-if-start')
	      this.end = _.createAnchor('v-if-end')
	      _.replace(el, this.end)
	      _.before(this.start, this.end)
	      if (_.isTemplate(el)) {
	        this.template = templateParser.parse(el, true)
	      } else {
	        this.template = document.createDocumentFragment()
	        this.template.appendChild(templateParser.clone(el))
	      }
	      // compile the nested partial
	      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML
	      this.linker = cache.get(cacheId)
	      if (!this.linker) {
	        this.linker = compiler.compile(
	          this.template,
	          this.vm.$options,
	          true, // partial
	          this._host // important
	        )
	        cache.put(cacheId, this.linker)
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	      this.invalid = true
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        this.link(
	          templateParser.clone(this.template),
	          this.linker
	        )
	      }
	    } else {
	      this.teardown()
	    }
	  },
	
	  link: function (frag, linker) {
	    var vm = this.vm
	    this.unlink = linker(vm, frag)
	    transition.blockAppend(frag, this.end, vm)
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents()
	      if (children) children.forEach(callAttach)
	    }
	  },
	
	  teardown: function () {
	    if (!this.unlink) return
	    // collect children beforehand
	    var children
	    if (_.inDoc(this.vm.$el)) {
	      children = this.getContainedComponents()
	    }
	    transition.blockRemove(this.start, this.end, this.vm)
	    if (children) children.forEach(callDetach)
	    this.unlink()
	    this.unlink = null
	  },
	
	  getContainedComponents: function () {
	    var vm = this.vm
	    var start = this.start.nextSibling
	    var end = this.end
	
	    function contains (c) {
	      var cur = start
	      var next
	      while (next !== end) {
	        next = cur.nextSibling
	        if (
	          cur === c.$el ||
	          cur.contains && cur.contains(c.$el)
	        ) {
	          return true
	        }
	        cur = next
	      }
	      return false
	    }
	
	    return vm.$children.length &&
	      vm.$children.filter(contains)
	  },
	
	  unbind: function () {
	    if (this.unlink) this.unlink()
	  }
	
	}
	
	function callAttach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}
	
	function callDetach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports.content = __webpack_require__(51)
	exports.partial = __webpack_require__(52)


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var clone = __webpack_require__(25).clone
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	module.exports = {
	
	  bind: function () {
	    var vm = this.vm
	    var host = vm
	    // we need find the content context, which is the
	    // closest non-inline-repeater instance.
	    while (host.$options._repeat) {
	      host = host.$parent
	    }
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var selector = this._checkParam('select')
	    if (!selector) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          vm
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      // select content
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, vm)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },
	
	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },
	
	  compile: function (content, context, host) {
	    if (content && context) {
	      this.unlink = context.$compile(content, host)
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },
	
	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      frag.appendChild(clone(node))
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      frag.appendChild(clone(node))
	    }
	  }
	  return frag
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(25)
	var textParser = __webpack_require__(13)
	var compiler = __webpack_require__(16)
	var Cache = __webpack_require__(14)
	var cache = new Cache(1000)
	
	// v-partial reuses logic from v-if
	var vIf = __webpack_require__(49)
	
	module.exports = {
	
	  link: vIf.link,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,
	
	  bind: function () {
	    var el = this.el
	    this.start = _.createAnchor('v-partial-start')
	    this.end = _.createAnchor('v-partial-end')
	    _.replace(el, this.end)
	    _.before(this.start, this.end)
	    var id = el.getAttribute('name')
	    var tokens = textParser.parse(id)
	    if (tokens) {
	      // dynamic partial
	      this.setupDynamic(tokens)
	    } else {
	      // static partial
	      this.insert(id)
	    }
	  },
	
	  setupDynamic: function (tokens) {
	    var self = this
	    var exp = textParser.tokensToExp(tokens)
	    this.unwatch = this.vm.$watch(exp, function (value) {
	      self.teardown()
	      self.insert(value)
	    }, {
	      immediate: true,
	      user: false
	    })
	  },
	
	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(partial, 'partial', id)
	    }
	    if (partial) {
	      var frag = templateParser.parse(partial, true)
	      // cache partials based on constructor id.
	      var cacheId = (this.vm.constructor.cid || '') + partial
	      var linker = this.compile(frag, cacheId)
	      // this is provided by v-if
	      this.link(frag, linker)
	    }
	  },
	
	  compile: function (frag, cacheId) {
	    var hit = cache.get(cacheId)
	    if (hit) return hit
	    var linker = compiler.compile(frag, this.vm.$options, true)
	    cache.put(cacheId, linker)
	    return linker
	  },
	
	  unbind: function () {
	    if (this.unlink) this.unlink()
	    if (this.unwatch) this.unwatch()
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */
	
	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}
	
	/**
	 * 'abc' => 'Abc'
	 */
	
	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	/**
	 * 'abc' => 'ABC'
	 */
	
	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}
	
	/**
	 * 'AbC' => 'abc'
	 */
	
	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}
	
	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */
	
	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency || '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}
	
	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */
	
	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}
	
	/**
	 * A special filter that takes a handler function,
	 * wraps it so it only gets triggered on specific
	 * keypresses. v-on only.
	 *
	 * @param {String} key
	 */
	
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}
	
	exports.key = function (handler, key) {
	  if (!handler) return
	  var code = keyCodes[key]
	  if (!code) {
	    code = parseInt(key, 10)
	  }
	  return function (e) {
	    if (e.keyCode === code) {
	      return handler.call(this, e)
	    }
	  }
	}
	
	// expose keycode hash
	exports.key.keyCodes = keyCodes
	
	/**
	 * Install special array filters
	 */
	
	_.extend(exports, __webpack_require__(54))


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Path = __webpack_require__(23)
	
	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */
	
	exports.filterBy = function (arr, search, delimiter, dataKey) {
	  // allow optional `in` delimiter
	  // because why not
	  if (delimiter && delimiter !== 'in') {
	    dataKey = delimiter
	  }
	  if (search == null) {
	    return arr
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  return arr.filter(function (item) {
	    return dataKey
	      ? contains(Path.get(item, dataKey), search)
	      : contains(item, search)
	  })
	}
	
	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	exports.orderBy = function (arr, sortKey, reverse) {
	  if (!sortKey) {
	    return arr
	  }
	  var order = 1
	  if (arguments.length > 2) {
	    if (reverse === '-1') {
	      order = -1
	    } else {
	      order = reverse ? -1 : 1
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key' && sortKey !== '$value') {
	      if (a && '$value' in a) a = a.$value
	      if (b && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains (val, search) {
	  if (_.isPlainObject(val)) {
	    for (var key in val) {
	      if (contains(val[key], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    var i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(3).mergeOptions
	
	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */
	
	exports._init = function (options) {
	
	  options = options || {}
	
	  this.$el = null
	  this.$parent = options._parent
	  this.$root = options._root || this
	  this.$children = []
	  this.$ = {}           // child vm references
	  this.$$ = {}          // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives
	  this._childCtors = {} // inherit:true constructors
	
	  // a flag to avoid this being observed
	  this._isVue = true
	
	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._eventCancelled = false // for event cancellation
	
	  // fragment instance properties
	  this._isFragment = false
	  this._fragmentStart =    // @type {CommentNode}
	  this._fragmentEnd = null // @type {CommentNode}
	
	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null
	
	  // context: the scope in which the component was used,
	  // and the scope in which props and contents of this
	  // instance should be compiled in.
	  this._context =
	    options._context ||
	    options._parent
	
	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }
	
	  // props used in v-repeat diffing
	  this._reused = false
	  this._staggerOp = null
	
	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )
	
	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}
	
	  // initialize data observation and scope inheritance.
	  this._initScope()
	
	  // setup event system and option events.
	  this._initEvents()
	
	  // call created hook
	  this._callHook('created')
	
	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var inDoc = _.inDoc
	
	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */
	
	exports._initEvents = function () {
	  var options = this.$options
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}
	
	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */
	
	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}
	
	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */
	
	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}
	
	/**
	 * Setup recursive attached/detached calls
	 */
	
	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}
	
	/**
	 * Callback to recursively call attached hook on children
	 */
	
	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}
	
	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */
	
	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Callback to recursively call detached hook on children
	 */
	
	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}
	
	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */
	
	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}
	
	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */
	
	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var compiler = __webpack_require__(16)
	var Observer = __webpack_require__(58)
	var Dep = __webpack_require__(21)
	var Watcher = __webpack_require__(20)
	
	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */
	
	exports._initScope = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}
	
	/**
	 * Initialize props.
	 */
	
	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && props
	    ? compiler.compileAndLinkProps(
	        this, el, props
	      )
	    : null
	}
	
	/**
	 * Initialize the data.
	 */
	
	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (
	        this._props[prop].raw !== null ||
	        !optionsData.hasOwnProperty(prop)
	      ) {
	        optionsData.$set(prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key)) {
	      this._proxy(key)
	    }
	  }
	  // observe data
	  Observer.create(data, this)
	}
	
	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */
	
	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // copy props.
	  // this should only happen during a v-repeat of component
	  // that also happens to have compiled props.
	  var props = this.$options.props
	  if (props) {
	    i = props.length
	    while (i--) {
	      key = props[i].name
	      if (key !== '$data' && !newData.hasOwnProperty(key)) {
	        newData.$set(key, oldData[key])
	      }
	    }
	  }
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key) && !(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}
	
	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */
	
	exports._proxy = function (key) {
	  // need to store ref to self here
	  // because these getter/setters might
	  // be called by child instances!
	  var self = this
	  Object.defineProperty(self, key, {
	    configurable: true,
	    enumerable: true,
	    get: function proxyGetter () {
	      return self._data[key]
	    },
	    set: function proxySetter (val) {
	      self._data[key] = val
	    }
	  })
	}
	
	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */
	
	exports._unproxy = function (key) {
	  delete this[key]
	}
	
	/**
	 * Force update on every watcher in scope.
	 */
	
	exports._digest = function () {
	  var i = this._watchers.length
	  while (i--) {
	    this._watchers[i].update(true) // shallow updates
	  }
	  var children = this.$children
	  i = children.length
	  while (i--) {
	    var child = children[i]
	    if (child.$options.inherit) {
	      child._digest()
	    }
	  }
	}
	
	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */
	
	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? makeComputedGetter(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}
	
	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be called by children
	 * inheriting them.
	 */
	
	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}
	
	/**
	 * Initialize meta information like $index, $key & $value.
	 */
	
	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      this._defineMeta(key, metas[key])
	    }
	  }
	}
	
	/**
	 * Define a meta property, e.g $index, $key, $value
	 * which only exists on the vm instance but not in $data.
	 *
	 * @param {String} key
	 * @param {*} value
	 */
	
	exports._defineMeta = function (key, value) {
	  var dep = new Dep()
	  Object.defineProperty(this, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter () {
	      if (Dep.target) {
	        dep.depend()
	      }
	      return value
	    },
	    set: function metaSetter (val) {
	      if (val !== value) {
	        value = val
	        dep.notify()
	      }
	    }
	  })
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var Dep = __webpack_require__(21)
	var arrayMethods = __webpack_require__(59)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	__webpack_require__(60)
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = config.proto && _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}
	
	// Static methods
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	Observer.create = function (value, vm) {
	  var ob
	  if (
	    value &&
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    _.isObject(value) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}
	
	// Instance methods
	
	var p = Observer.prototype
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object. Properties prefixed with `$` or `_`
	 * and accessor properties are ignored.
	 *
	 * @param {Object} obj
	 */
	
	p.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  var key, prefix
	  while (i--) {
	    key = keys[i]
	    prefix = key.charCodeAt(0)
	    if (prefix !== 0x24 && prefix !== 0x5F) { // skip $ or _
	      this.convert(key, obj[key])
	    }
	  }
	}
	
	/**
	 * Try to carete an observer for a child value,
	 * and if value is array, link dep to the array.
	 *
	 * @param {*} val
	 * @return {Dep|undefined}
	 */
	
	p.observe = function (val) {
	  return Observer.create(val)
	}
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	p.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    this.observe(items[i])
	  }
	}
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	p.convert = function (key, val) {
	  var ob = this
	  var childOb = ob.observe(val)
	  var dep = new Dep()
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function () {
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (_.isArray(val)) {
	          for (var e, i = 0, l = val.length; i < l; i++) {
	            e = val[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return val
	    },
	    set: function (newVal) {
	      if (newVal === val) return
	      val = newVal
	      childOb = ob.observe(newVal)
	      dep.notify()
	    }
	  })
	}
	
	/**
	 * Add an owner vm, so that when $add/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	p.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	p.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment (target, src) {
	  target.__proto__ = src
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}
	
	module.exports = Observer


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (index) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    if (typeof index !== 'number') {
	      index = _.indexOf(this, index)
	    }
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)
	
	module.exports = arrayMethods


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var objProto = Object.prototype
	
	/**
	 * Add a new property to an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$add',
	  function $add (key, val) {
	    if (this.hasOwnProperty(key)) return
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      this[key] = val
	      return
	    }
	    ob.convert(key, val)
	    ob.dep.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._proxy(key)
	        vm._digest()
	      }
	    }
	  }
	)
	
	/**
	 * Set a property on an observed object, calling add to
	 * ensure the property is observed.
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$set',
	  function $set (key, val) {
	    this.$add(key, val)
	    this[key] = val
	  }
	)
	
	/**
	 * Deletes a property from an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$delete',
	  function $delete (key) {
	    if (!this.hasOwnProperty(key)) return
	    delete this[key]
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      return
	    }
	    ob.dep.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._unproxy(key)
	        vm._digest()
	      }
	    }
	  }
	)


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Directive = __webpack_require__(62)
	var compiler = __webpack_require__(16)
	
	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */
	
	exports._compile = function (el) {
	  var options = this.$options
	  var host = this._host
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el)
	    this._unlinkFn = options._linkFn(this, el, host)
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el
	    el = compiler.transclude(el, options)
	    this._initElement(el)
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var rootUnlinkFn =
	      compiler.compileAndLinkRoot(this, el, options)
	
	    // compile and link the rest
	    var linker
	    var ctor = this.constructor
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      linker = ctor.linker
	      if (!linker) {
	        linker = ctor.linker = compiler.compile(el, options)
	      }
	    }
	    var contentUnlinkFn = linker
	      ? linker(this, el)
	      : compiler.compile(el, options)(this, el, host)
	
	    this._unlinkFn = function () {
	      rootUnlinkFn()
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true)
	    }
	
	    // finally replace original
	    if (options.replace) {
	      _.replace(original, el)
	    }
	  }
	  return el
	}
	
	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */
	
	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true
	    this.$el = this._fragmentStart = el.firstChild
	    this._fragmentEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = ''
	    }
	    this._blockFragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}
	
	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue|undefined} host - transclusion host component
	 */
	
	exports._bindDir = function (name, node, desc, def, host) {
	  this._directives.push(
	    new Directive(name, node, this, desc, def, host)
	  )
	}
	
	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */
	
	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}
	
	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */
	
	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var Watcher = __webpack_require__(20)
	var textParser = __webpack_require__(13)
	var expParser = __webpack_require__(22)
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} expression
	 *                 - {String} [arg]
	 *                 - {Array<Object>} [filters]
	 * @param {Object} def - directive definition object
	 * @param {Vue|undefined} host - transclusion host target
	 * @constructor
	 */
	
	function Directive (name, el, vm, descriptor, def, host) {
	  // public
	  this.name = name
	  this.el = el
	  this.vm = vm
	  // copy descriptor props
	  this.raw = descriptor.raw
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.filters = descriptor.filters
	  // private
	  this._descriptor = descriptor
	  this._host = host
	  this._locked = false
	  this._bound = false
	  // init
	  this._bind(def)
	}
	
	var p = Directive.prototype
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	p._bind = function (def) {
	  if (
	    (this.name !== 'cloak' || this.vm._isCompiled) &&
	    this.el && this.el.removeAttribute
	  ) {
	    this.el.removeAttribute(config.prefix + this.name)
	  }
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }
	  this._watcherExp = this.expression
	  this._checkDynamicLiteral()
	  if (this.bind) {
	    this.bind()
	  }
	  if (this._watcherExp &&
	      (this.update || this.twoWay) &&
	      (!this.isLiteral || this._isDynamicLiteral) &&
	      !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this
	    var update = this._update = this.update
	      ? function (val, oldVal) {
	          if (!dir._locked) {
	            dir.update(val, oldVal)
	          }
	        }
	      : function () {} // noop if no update is provided
	    // pre-process hook called before the value is piped
	    // through the filters. used in v-repeat.
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this._watcherExp,
	      update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess
	      }
	    )
	    if (this._initValue != null) {
	      watcher.set(this._initValue)
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}
	
	/**
	 * check if this is a dynamic literal binding.
	 *
	 * e.g. v-component="{{currentView}}"
	 */
	
	p._checkDynamicLiteral = function () {
	  var expression = this.expression
	  if (expression && this.isLiteral) {
	    var tokens = textParser.parse(expression)
	    if (tokens) {
	      var exp = textParser.tokensToExp(tokens)
	      this.expression = this.vm.$get(exp)
	      this._watcherExp = exp
	      this._isDynamicLiteral = true
	    }
	  }
	}
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. v-on="click: a++"
	 *
	 * @return {Boolean}
	 */
	
	p._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var vm = this.vm
	    var handler = function () {
	      fn.call(vm, vm)
	    }
	    if (this.filters) {
	      handler = vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}
	
	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */
	
	p._checkParam = function (name) {
	  var param = this.el.getAttribute(name)
	  if (param !== null) {
	    this.el.removeAttribute(name)
	    param = this.vm.$interpolate(param)
	  }
	  return param
	}
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	p._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    this.vm = this.el = this._watcher = null
	  }
	}
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	p.set = function (value) {
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  }
	}
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	p._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}
	
	module.exports = Directive


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	
	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */
	
	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(fn, 'filter', filter.name)
	    }
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}
	
	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */
	
	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  if (process.env.NODE_ENV !== 'production') {
	    _.assertAsset(factory, 'component', id)
	  }
	  if (!factory) {
	    return
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var Watcher = __webpack_require__(20)
	var Path = __webpack_require__(23)
	var textParser = __webpack_require__(13)
	var dirParser = __webpack_require__(15)
	var expParser = __webpack_require__(22)
	var filterRE = /[^|]\|[^|]/
	
	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @return {*}
	 */
	
	exports.$get = function (exp) {
	  var res = expParser.parse(exp)
	  if (res) {
	    try {
	      return res.get.call(this, this)
	    } catch (e) {}
	  }
	}
	
	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */
	
	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}
	
	/**
	 * Add a property on the VM
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	exports.$add = function (key, val) {
	  this._data.$add(key, val)
	}
	
	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */
	
	exports.$delete = function (key) {
	  this._data.$delete(key)
	}
	
	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String} exp
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 *                 - {Boolean} user
	 * @return {Function} - unwatchFn
	 */
	
	exports.$watch = function (exp, cb, options) {
	  var vm = this
	  var wrappedCb = function (val, oldVal) {
	    cb.call(vm, val, oldVal)
	  }
	  var watcher = new Watcher(vm, exp, wrappedCb, {
	    deep: options && options.deep,
	    user: !options || options.user !== false
	  })
	  if (options && options.immediate) {
	    wrappedCb(watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}
	
	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$eval = function (text) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)[0]
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text)
	  }
	}
	
	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    return tokens.length === 1
	      ? vm.$eval(tokens[0].value)
	      : tokens.map(function (token) {
	          return token.tag
	            ? vm.$eval(token.value)
	            : token.value
	        }).join('')
	  } else {
	    return text
	  }
	}
	
	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */
	
	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = JSON.parse(JSON.stringify(data))
	  }
	  console.log(data)
	}


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var transition = __webpack_require__(34)
	
	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */
	
	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}
	
	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}
	
	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}
	
	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var op
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (
	    this._isFragment &&
	    !this._blockFragment.hasChildNodes()
	  ) {
	    op = withTransition === false
	      ? append
	      : transition.removeThenAppend
	    blockOp(this, this._blockFragment, op, realCb)
	  } else {
	    op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}
	
	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */
	
	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	    ? op1
	    : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isFragment) {
	    blockOp(vm, target, op, cb)
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}
	
	/**
	 * Execute a transition operation on a fragment instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */
	
	function blockOp (vm, target, op, cb) {
	  var current = vm._fragmentStart
	  var end = vm._fragmentEnd
	  var next
	  while (next !== end) {
	    next = current.nextSibling
	    op(current, target, vm)
	    current = next
	  }
	  op(end, target, vm, cb)
	}
	
	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */
	
	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}
	
	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}
	
	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}
	
	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}
	
	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */
	
	exports.$emit = function (event) {
	  this._eventCancelled = false
	  var cbs = this._events[event]
	  if (cbs) {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length - 1
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i + 1]
	    }
	    i = 0
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    for (var l = cbs.length; i < l; i++) {
	      if (cbs[i].apply(this, args) === false) {
	        this._eventCancelled = true
	      }
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (!child._eventCancelled) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$dispatch = function () {
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._eventCancelled
	      ? null
	      : parent.$parent
	  }
	  return this
	}
	
	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */
	
	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	/**
	 * Create a child instance that prototypally inherits
	 * data on parent. To achieve that we create an intermediate
	 * constructor with its prototype pointing to parent.
	 *
	 * @param {Object} opts
	 * @param {Function} [BaseCtor]
	 * @return {Vue}
	 * @public
	 */
	
	exports.$addChild = function (opts, BaseCtor) {
	  BaseCtor = BaseCtor || _.Vue
	  opts = opts || {}
	  var parent = this
	  var ChildVue
	  var inherit = opts.inherit !== undefined
	    ? opts.inherit
	    : BaseCtor.options.inherit
	  if (inherit) {
	    var ctors = parent._childCtors
	    ChildVue = ctors[BaseCtor.cid]
	    if (!ChildVue) {
	      var optionName = BaseCtor.options.name
	      var className = optionName
	        ? _.classify(optionName)
	        : 'VueComponent'
	      ChildVue = new Function(
	        'return function ' + className + ' (options) {' +
	        'this.constructor = ' + className + ';' +
	        'this._init(options) }'
	      )()
	      ChildVue.options = BaseCtor.options
	      ChildVue.linker = BaseCtor.linker
	      // important: transcluded inline repeaters should
	      // inherit from outer scope rather than host
	      ChildVue.prototype = opts._context || this
	      ctors[BaseCtor.cid] = ChildVue
	    }
	  } else {
	    ChildVue = BaseCtor
	  }
	  opts._parent = parent
	  opts._root = parent.$root
	  var child = new ChildVue(opts)
	  return child
	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(3)
	var compiler = __webpack_require__(16)
	
	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */
	
	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      '$mount() should be called only once.'
	    )
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._isCompiled = true
	  this._callHook('compiled')
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}
	
	/**
	 * Mark an instance as ready.
	 */
	
	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}
	
	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */
	
	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}
	
	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */
	
	exports.$compile = function (el, host) {
	  return compiler.compile(el, this.$options, true, host)(this, el)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = Vue.util
	
	describe('Child API', function () {
	
	  var vm
	  beforeEach(function () {
	    vm = new Vue({
	      data: {
	        a: 1,
	        b: 1
	      },
	      directives: {
	        test: function () {}
	      }
	    })
	  })
	
	  it('default', function () {
	    var child = vm.$addChild()
	    expect(child instanceof Vue).toBe(true)
	    expect(child.a).toBeUndefined()
	    expect(child.$parent).toBe(vm)
	    expect(child.$root).toBe(vm)
	    expect(vm.$children.indexOf(child)).toBe(0)
	    expect(_.resolveAsset(child.$options, 'directives', 'test')).toBeTruthy()
	  })
	
	  it('inherit scope', function () {
	    var child = vm.$addChild({
	      inherit: true,
	      data: {
	        b: 2
	      }
	    })
	    expect(child.a).toBe(1)
	    expect(child.b).toBe(2)
	    expect(child.constructor.prototype).toBe(vm)
	  })
	
	  it('with constructor', function () {
	    var Ctor = Vue.extend({
	      inherit: true,
	      data: function () {
	        return {
	          c: 3
	        }
	      }
	    })
	    var child = vm.$addChild({
	      data: {
	        b: 2
	      }
	    }, Ctor)
	    expect(child.a).toBe(1)
	    expect(child.b).toBe(2)
	    expect(child.c).toBe(3)
	    expect(child.constructor.options).toBe(Ctor.options)
	  })
	
	  it('cache constructor', function () {
	    var Ctor = Vue.extend({
	      inherit: true
	    })
	    var child1 = vm.$addChild(null, Ctor)
	    var child2 = vm.$addChild(null, Ctor)
	    expect(child1.constructor).toBe(child2.constructor)
	  })
	
	  it('Use proper constructor name with inherit', function () {
	    var Ctor = Vue.extend({
	      name: 'vue-test',
	      inherit: true
	    })
	    var child = vm.$addChild(null, Ctor)
	    expect(child.constructor.toString().match(/^function VueTest\s?\(/)).toBeTruthy()
	  })
	
	})


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var nextTick = _.nextTick
	
	describe('Data API', function () {
	
	  var vm
	  beforeEach(function () {
	    spyOn(_, 'warn')
	    vm = new Vue({
	      data: {
	        a: 1,
	        b: {
	          c: 2
	        }
	      },
	      filters: {
	        double: function (v) {
	          return v * 2
	        }
	      }
	    })
	  })
	
	  it('$get', function () {
	    expect(vm.$get('a')).toBe(1)
	    expect(vm.$get('b["c"]')).toBe(2)
	    expect(vm.$get('a + b.c')).toBe(3)
	    expect(vm.$get('c')).toBeUndefined()
	    // invalid, should warn
	    vm.$get('a(')
	    expect(hasWarned(_, 'Invalid expression')).toBe(true)
	  })
	
	  it('$set', function () {
	    vm.$set('a', 2)
	    expect(vm.a).toBe(2)
	    vm.$set('b["c"]', 3)
	    expect(vm.b.c).toBe(3)
	    // setting unexisting
	    vm.$set('c.d', 2)
	    expect(vm.c.d).toBe(2)
	    // warn against setting unexisting
	    expect(hasWarned(_, 'Consider pre-initializing')).toBe(true)
	  })
	
	  it('$set invalid', function () {
	    // invalid, should throw
	    if (leftHandThrows()) {
	      // if creating a function with invalid left hand
	      // expression throws, the exp parser will catch the
	      // error and warn.
	      vm.$set('c + d', 1)
	      expect(hasWarned(_, 'Invalid setter function body')).toBe(true)
	    } else {
	      // otherwise it will throw when calling the setter.
	      expect(function () {
	        try {
	          vm.$set('c + d', 1)
	        } catch (e) {
	          return true
	        }
	      }()).toBe(true)
	    }
	  })
	
	  it('$add', function () {
	    vm._digest = jasmine.createSpy()
	    vm.$add('c', 1)
	    expect(vm.c).toBe(1)
	    expect(vm._data.c).toBe(1)
	    expect(vm._digest).toHaveBeenCalled()
	    // reserved key should not be proxied
	    vm.$add('_c', 1)
	    expect(vm._c).toBeUndefined()
	  })
	
	  it('$delete', function () {
	    vm._digest = jasmine.createSpy()
	    vm.$delete('a')
	    expect(vm.hasOwnProperty('a')).toBe(false)
	    expect(vm._data.hasOwnProperty('a')).toBe(false)
	    expect(vm._digest).toHaveBeenCalled()
	    // reserved key should not be deleted
	    vm.$delete('_data')
	    expect(vm._data).toBeTruthy()
	  })
	
	  it('$watch', function (done) {
	    var spy = jasmine.createSpy()
	    // test immediate invoke
	    var unwatch = vm.$watch('a + b.c', spy, {
	      immediate: true
	    })
	    expect(spy).toHaveBeenCalledWith(3, undefined)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // unwatch
	      unwatch()
	      vm.a = 3
	      nextTick(function () {
	        expect(spy.calls.count()).toBe(2)
	        done()
	      })
	    })
	  })
	
	  it('function $watch', function (done) {
	    var spy = jasmine.createSpy()
	    // test immediate invoke
	    var unwatch = vm.$watch(function () {
	      return this.a + this.b.c
	    }, spy, { immediate: true })
	    expect(spy).toHaveBeenCalledWith(3, undefined)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // unwatch
	      unwatch()
	      vm.a = 3
	      nextTick(function () {
	        expect(spy.calls.count()).toBe(2)
	        done()
	      })
	    })
	  })
	
	  it('deep $watch', function (done) {
	    var oldB = vm.b
	    var spy = jasmine.createSpy()
	    vm.$watch('b', spy, {
	      deep: true
	    })
	    vm.b.c = 3
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(oldB, oldB)
	      vm.b = { c: 4 }
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(vm.b, oldB)
	        done()
	      })
	    })
	  })
	
	  it('$eval', function () {
	    expect(vm.$eval('a')).toBe(1)
	    expect(vm.$eval('b.c')).toBe(2)
	    expect(vm.$eval('a + b.c | double')).toBe(6)
	  })
	
	  it('$interpolate', function () {
	    expect(vm.$interpolate('abc')).toBe('abc')
	    expect(vm.$interpolate('{{a}} and {{a + b.c | double}}')).toBe('1 and 6')
	  })
	
	  if (typeof console !== 'undefined') {
	    it('$log', function () {
	      var oldLog = console.log
	      var spy = jasmine.createSpy()
	      console.log = function (val) {
	        expect(val.a).toBe(1)
	        expect(val.b.c).toBe(2)
	        spy()
	      }
	      vm.$log()
	      expect(spy.calls.count()).toBe(1)
	      console.log = function (val) {
	        expect(val.c).toBe(2)
	        spy()
	      }
	      vm.$log('b')
	      expect(spy.calls.count()).toBe(2)
	      console.log = oldLog
	    })
	  }
	
	})
	
	/**
	 * check if creating a new Function with invalid left-hand
	 * assignment would throw
	 */
	
	function leftHandThrows () {
	  try {
	    new Function('a + b = 1')
	  } catch (e) {
	    return true
	  }
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * We are not testing transition-related stuff here,
	 * those are tested in transition_spec.js.
	 */
	
	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	
	if (_.inBrowser) {
	  describe('DOM API', function () {
	
	    var vm, vm2, parent, target, sibling, empty, spy
	    beforeEach(function () {
	      spy = jasmine.createSpy('dom')
	      parent = document.createElement('div')
	      target = document.createElement('div')
	      sibling = document.createElement('div')
	      empty = document.createElement('div')
	      parent.appendChild(target)
	      parent.appendChild(sibling)
	      var el = document.createElement('div')
	      vm = new Vue({ el: el })
	      // block instance
	      var frag = document.createDocumentFragment()
	      frag.appendChild(document.createElement('p'))
	      frag.appendChild(document.createElement('span'))
	      vm2 = new Vue({
	        el: frag
	      })
	    })
	
	    describe('$appendTo', function () {
	
	      it('normal instance', function () {
	        vm.$appendTo(parent, spy)
	        expect(parent.childNodes.length).toBe(3)
	        expect(parent.lastChild).toBe(vm.$el)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('block instance', function () {
	        vm2.$appendTo(parent, spy)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[2]).toBe(vm2._fragmentStart)
	        expect(parent.childNodes[2]).toBe(vm2.$el)
	        expect(parent.childNodes[3].tagName).toBe('P')
	        expect(parent.childNodes[4].tagName).toBe('SPAN')
	        expect(parent.childNodes[5]).toBe(vm2._fragmentEnd)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	    })
	
	    describe('$prependTo', function () {
	
	      it('normal instance', function () {
	        vm.$prependTo(parent, spy)
	        expect(parent.childNodes.length).toBe(3)
	        expect(parent.firstChild).toBe(vm.$el)
	        expect(spy.calls.count()).toBe(1)
	        vm.$prependTo(empty, spy)
	        expect(empty.childNodes.length).toBe(1)
	        expect(empty.firstChild).toBe(vm.$el)
	        expect(spy.calls.count()).toBe(2)
	      })
	
	      it('block instance', function () {
	        vm2.$prependTo(parent, spy)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[0]).toBe(vm2._fragmentStart)
	        expect(parent.childNodes[0]).toBe(vm2.$el)
	        expect(parent.childNodes[1].tagName).toBe('P')
	        expect(parent.childNodes[2].tagName).toBe('SPAN')
	        expect(parent.childNodes[3]).toBe(vm2._fragmentEnd)
	        expect(spy.calls.count()).toBe(1)
	        // empty
	        vm2.$prependTo(empty, spy)
	        expect(empty.childNodes.length).toBe(4)
	        expect(empty.childNodes[0]).toBe(vm2._fragmentStart)
	        expect(empty.childNodes[0]).toBe(vm2.$el)
	        expect(empty.childNodes[1].tagName).toBe('P')
	        expect(empty.childNodes[2].tagName).toBe('SPAN')
	        expect(empty.childNodes[3]).toBe(vm2._fragmentEnd)
	        expect(spy.calls.count()).toBe(2)
	      })
	
	    })
	
	    describe('$before', function () {
	
	      it('normal instance', function () {
	        vm.$before(sibling, spy)
	        expect(parent.childNodes.length).toBe(3)
	        expect(parent.childNodes[1]).toBe(vm.$el)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('block instance', function () {
	        vm2.$before(sibling, spy)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[1]).toBe(vm2._fragmentStart)
	        expect(parent.childNodes[1]).toBe(vm2.$el)
	        expect(parent.childNodes[2].tagName).toBe('P')
	        expect(parent.childNodes[3].tagName).toBe('SPAN')
	        expect(parent.childNodes[4]).toBe(vm2._fragmentEnd)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	    })
	
	    describe('$after', function () {
	
	      it('normal instance', function () {
	        vm.$after(target, spy)
	        expect(parent.childNodes.length).toBe(3)
	        expect(parent.childNodes[1]).toBe(vm.$el)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('normal instance no next sibling', function () {
	        vm.$after(sibling, spy)
	        expect(parent.childNodes.length).toBe(3)
	        expect(parent.lastChild).toBe(vm.$el)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('block instance', function () {
	        vm2.$after(target, spy)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[1]).toBe(vm2._fragmentStart)
	        expect(parent.childNodes[1]).toBe(vm2.$el)
	        expect(parent.childNodes[2].tagName).toBe('P')
	        expect(parent.childNodes[3].tagName).toBe('SPAN')
	        expect(parent.childNodes[4]).toBe(vm2._fragmentEnd)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('block instance no next sibling', function () {
	        vm2.$after(sibling, spy)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[2]).toBe(vm2._fragmentStart)
	        expect(parent.childNodes[2]).toBe(vm2.$el)
	        expect(parent.childNodes[3].tagName).toBe('P')
	        expect(parent.childNodes[4].tagName).toBe('SPAN')
	        expect(parent.childNodes[5]).toBe(vm2._fragmentEnd)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	    })
	
	    describe('$remove', function () {
	
	      it('normal instance', function () {
	        vm.$before(sibling)
	        expect(parent.childNodes.length).toBe(3)
	        expect(parent.childNodes[1]).toBe(vm.$el)
	        vm.$remove(spy)
	        expect(parent.childNodes.length).toBe(2)
	        expect(parent.childNodes[0]).toBe(target)
	        expect(parent.childNodes[1]).toBe(sibling)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('block instance', function () {
	        vm2.$before(sibling)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[1]).toBe(vm2._fragmentStart)
	        expect(parent.childNodes[1]).toBe(vm2.$el)
	        expect(parent.childNodes[2].tagName).toBe('P')
	        expect(parent.childNodes[3].tagName).toBe('SPAN')
	        expect(parent.childNodes[4]).toBe(vm2._fragmentEnd)
	        vm2.$remove(spy)
	        expect(parent.childNodes.length).toBe(2)
	        expect(parent.childNodes[0]).toBe(target)
	        expect(parent.childNodes[1]).toBe(sibling)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('detached', function () {
	        vm.$remove(spy)
	        expect(spy.calls.count()).toBe(1)
	      })
	
	    })
	
	    describe('$nextTick', function () {
	
	      it('should work', function (done) {
	        var context
	        var called = false
	        vm.$nextTick(function () {
	          called = true
	          context = this
	        })
	        expect(called).toBe(false)
	        _.nextTick(function () {
	          expect(called).toBe(true)
	          expect(context).toBe(vm)
	          done()
	        })
	      })
	
	    })
	
	  })
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	
	describe('Events API', function () {
	
	  var vm, spy
	  beforeEach(function () {
	    vm = new Vue()
	    spy = jasmine.createSpy('emitter')
	  })
	
	  it('$on', function () {
	    vm.$on('test', function () {
	      // expect correct context
	      expect(this).toBe(vm)
	      spy.apply(this, arguments)
	    })
	    vm.$emit('test', 1, 2, 3, 4)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(1, 2, 3, 4)
	  })
	
	  it('$once', function () {
	    vm.$once('test', spy)
	    vm.$emit('test', 1, 2, 3)
	    vm.$emit('test', 2, 3, 4)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(1, 2, 3)
	  })
	
	  it('$off', function () {
	    vm.$on('test1', spy)
	    vm.$on('test2', spy)
	    vm.$off()
	    vm.$emit('test1')
	    vm.$emit('test2')
	    expect(spy).not.toHaveBeenCalled()
	  })
	
	  it('$off event', function () {
	    vm.$on('test1', spy)
	    vm.$on('test2', spy)
	    vm.$off('test1')
	    vm.$off('test1') // test off something that's already off
	    vm.$emit('test1', 1)
	    vm.$emit('test2', 2)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(2)
	  })
	
	  it('$off event + fn', function () {
	    var spy2 = jasmine.createSpy('emitter')
	    vm.$on('test', spy)
	    vm.$on('test', spy2)
	    vm.$off('test', spy)
	    vm.$emit('test', 1, 2, 3)
	    expect(spy).not.toHaveBeenCalled()
	    expect(spy2.calls.count()).toBe(1)
	    expect(spy2).toHaveBeenCalledWith(1, 2, 3)
	  })
	
	  it('$broadcast', function () {
	    var child1 = vm.$addChild()
	    var child2 = vm.$addChild()
	    var child3 = child1.$addChild()
	    child1.$on('test', spy)
	    child2.$on('test', spy)
	    child3.$on('test', spy)
	    vm.$broadcast('test')
	    expect(spy.calls.count()).toBe(3)
	  })
	
	  it('$broadcast optimization', function () {
	    var child = vm.$addChild()
	    var child2 = child.$addChild()
	    // hooks should not incurr the bookkeeping cost
	    child.$on('hook:created', function () {})
	    expect(vm._eventsCount['hook:created']).toBeUndefined()
	    child.$on('test', spy)
	    expect(vm._eventsCount['test']).toBe(1)
	    // child2's $emit & $broadcast
	    // shouldn't get called if no child listens to the event
	    child2.$emit = spy
	    child2.$broadcast = spy
	    vm.$broadcast('test')
	    expect(spy.calls.count()).toBe(1)
	    // check $off bookkeeping
	    child.$off('test', spy)
	    expect(vm._eventsCount['test']).toBe(0)
	    function noop () {}
	    child.$on('test', noop)
	    child2.$on('test', noop)
	    expect(vm._eventsCount['test']).toBe(2)
	    child.$off('test')
	    expect(vm._eventsCount['test']).toBe(1)
	    child.$on('test', noop)
	    child2.$on('test', noop)
	    expect(vm._eventsCount['test']).toBe(3)
	    child.$off()
	    child2.$off()
	    expect(vm._eventsCount['test']).toBe(0)
	  })
	
	  it('$broadcast cancel', function () {
	    var child = vm.$addChild()
	    var child2 = child.$addChild()
	    child.$on('test', function () {
	      return false
	    })
	    child2.$on('test', spy)
	    vm.$broadcast('test')
	    expect(spy).not.toHaveBeenCalled()
	  })
	
	  it('$dispatch', function () {
	    var child = vm.$addChild()
	    var child2 = child.$addChild()
	    child.$on('test', spy)
	    vm.$on('test', spy)
	    child2.$dispatch('test')
	    expect(spy.calls.count()).toBe(2)
	  })
	
	  it('$dispatch cancel', function () {
	    var child = vm.$addChild()
	    var child2 = child.$addChild()
	    child.$on('test', function () {
	      return false
	    })
	    vm.$on('test', spy)
	    child2.$dispatch('test')
	    expect(spy).not.toHaveBeenCalled()
	  })
	
	})


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	
	describe('Global API', function () {
	
	  it('exposed utilities', function () {
	    expect(Vue.util).toBe(_)
	    expect(Vue.nextTick).toBe(_.nextTick)
	    expect(Vue.config).toBe(config)
	  })
	
	  it('extend', function () {
	    var Test = Vue.extend({
	      name: 'test',
	      a: 1,
	      b: 2
	    })
	    expect(Test.options.a).toBe(1)
	    expect(Test.options.b).toBe(2)
	    expect(Test.super).toBe(Vue)
	    // function.name is not available in IE
	    expect(Test.toString().match(/^function Test\s?\(/)).toBeTruthy()
	    var t = new Test({
	      a: 2
	    })
	    expect(t.$options.a).toBe(2)
	    expect(t.$options.b).toBe(2)
	    // inheritance
	    var Test2 = Test.extend({
	      a: 2
	    })
	    expect(Test2.options.a).toBe(2)
	    expect(Test2.options.b).toBe(2)
	    var t2 = new Test2({
	      a: 3
	    })
	    expect(t2.$options.a).toBe(3)
	    expect(t2.$options.b).toBe(2)
	  })
	
	  it('use', function () {
	    var def = {}
	    var options = {}
	    var pluginStub = {
	      install: function (Vue, opts) {
	        Vue.directive('plugin-test', def)
	        expect(opts).toBe(options)
	      }
	    }
	    Vue.use(pluginStub, options)
	    expect(Vue.options.directives['plugin-test']).toBe(def)
	    delete Vue.options.directives['plugin-test']
	    // use a function
	    Vue.use(pluginStub.install, options)
	    expect(Vue.options.directives['plugin-test']).toBe(def)
	    delete Vue.options.directives['plugin-test']
	  })
	
	  describe('Asset registration', function () {
	
	    var Test = Vue.extend()
	
	    it('directive / elementDirective / filter / transition', function () {
	      [
	        'directive',
	        'elementDirective',
	        'filter',
	        'transition'
	      ].forEach(function (type) {
	        var def = {}
	        Test[type]('test', def)
	        expect(Test.options[type + 's'].test).toBe(def)
	        expect(Test[type]('test')).toBe(def)
	        // extended registration should not pollute global
	        expect(Vue.options[type + 's'].test).toBeUndefined()
	      })
	    })
	
	    it('component', function () {
	      var def = { a: 1 }
	      Test.component('test', def)
	      var component = Test.options.components.test
	      expect(typeof component).toBe('function')
	      expect(component.super).toBe(Vue)
	      expect(component.options.a).toBe(1)
	      expect(component.options.name).toBe('test')
	      expect(Test.component('test')).toBe(component)
	      // already extended
	      Test.component('test2', component)
	      expect(Test.component('test2')).toBe(component)
	      // extended registration should not pollute global
	      expect(Vue.options.components.test).toBeUndefined()
	    })
	
	  })
	
	})


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var compiler = __webpack_require__(16)
	
	if (_.inBrowser) {
	  describe('Lifecycle API', function () {
	
	    describe('$mount', function () {
	
	      var el, frag
	      beforeEach(function () {
	        el = document.createElement('div')
	        el.textContent = '{{test}}'
	        frag = document.createDocumentFragment()
	        frag.appendChild(el)
	        spyOn(_, 'warn')
	      })
	
	      it('normal', function () {
	        var vm = new Vue({
	          data: {
	            test: 'hi!'
	          }
	        })
	        vm.$mount(el)
	        expect(vm.$el).toBe(el)
	        expect(el.__vue__).toBe(vm)
	        expect(el.textContent).toBe('hi!')
	      })
	
	      it('auto-create', function () {
	        var vm = new Vue({
	          template: '{{a}}',
	          data: {
	            a: 123
	          }
	        })
	        vm.$mount()
	        expect(vm.$el).toBeTruthy()
	        expect(vm.$el.tagName).toBe('DIV')
	        expect(vm.$el.textContent).toBe('123')
	      })
	
	      it('selector', function () {
	        el.id = 'mount-test'
	        document.body.appendChild(el)
	        var vm = new Vue({
	          data: { test: 'hi!' }
	        })
	        vm.$mount('#mount-test')
	        expect(vm.$el).toBe(el)
	        expect(el.__vue__).toBe(vm)
	        expect(el.textContent).toBe('hi!')
	        document.body.removeChild(el)
	      })
	
	      it('warn invalid selector', function () {
	        var vm = new Vue()
	        vm.$mount('#none-exist')
	        expect(hasWarned(_, 'Cannot find element')).toBe(true)
	      })
	
	      it('replace', function () {
	        el.className = 'replace-test'
	        document.body.appendChild(el)
	        var vm = new Vue({
	          replace: true,
	          data: { test: 'hi!' },
	          template: '<div>{{test}}</div>'
	        })
	        vm.$mount(el)
	        expect(vm.$el).not.toBe(el)
	        expect(vm.$el.textContent).toBe('hi!')
	        expect(document.body.contains(el)).toBe(false)
	        expect(document.body.lastChild).toBe(vm.$el)
	        expect(vm.$el.className).toBe('replace-test')
	        document.body.removeChild(vm.$el)
	      })
	
	      it('precompiled linker', function () {
	        var linker = compiler.compile(el, Vue.options)
	        var vm = new Vue({
	          _linker: linker,
	          data: {
	            test: 'hi!'
	          }
	        })
	        vm.$mount(el)
	        expect(vm.$el).toBe(el)
	        expect(el.__vue__).toBe(vm)
	        expect(el.textContent).toBe('hi!')
	      })
	
	      it('mount to fragment', function () {
	        var vm = new Vue({
	          data: { test: 'frag' }
	        })
	        vm.$mount(frag)
	        expect(vm._blockFragment).toBe(frag)
	        expect(vm.$el.nextSibling.textContent).toBe('frag')
	      })
	
	      it('replace fragment', function () {
	        document.body.appendChild(el)
	        var vm = new Vue({
	          replace: true,
	          data: { test: 'hi!' },
	          template: '<div>{{test}}</div><div>{{test + "!"}}</div>'
	        })
	        vm.$mount(el)
	        expect(vm.$el).not.toBe(el)
	        expect(vm.$el.nextSibling.textContent).toBe('hi!')
	        expect(vm.$el.nextSibling.nextSibling.textContent).toBe('hi!!')
	        expect(document.body.contains(el)).toBe(false)
	        expect(document.body.lastChild).toBe(vm._fragmentEnd)
	        vm.$remove()
	      })
	
	      it('hooks', function () {
	        var hooks = ['created', 'beforeCompile', 'compiled', 'attached', 'ready']
	        var options = {
	          data: {
	            test: 'hihi'
	          }
	        }
	        hooks.forEach(function (hook) {
	          options[hook] = jasmine.createSpy(hook)
	        })
	        var vm = new Vue(options)
	        expect(options.created).toHaveBeenCalled()
	        expect(options.beforeCompile).not.toHaveBeenCalled()
	        vm.$mount(el)
	        expect(options.beforeCompile).toHaveBeenCalled()
	        expect(options.compiled).toHaveBeenCalled()
	        expect(options.attached).not.toHaveBeenCalled()
	        expect(options.ready).not.toHaveBeenCalled()
	        vm.$appendTo(document.body)
	        expect(options.attached).toHaveBeenCalled()
	        expect(options.ready).toHaveBeenCalled()
	        vm.$remove()
	      })
	
	      it('warn against multiple calls', function () {
	        var vm = new Vue({
	          el: el
	        })
	        vm.$mount(el)
	        expect(hasWarned(_, '$mount() should be called only once')).toBe(true)
	      })
	
	    })
	
	    describe('$destroy', function () {
	
	      it('normal', function () {
	        var vm = new Vue()
	        expect(vm._isDestroyed).toBe(false)
	        var data = vm._data
	        expect(data.__ob__.vms.length).toBe(1)
	        vm.$destroy()
	        expect(data.__ob__.vms.length).toBe(0)
	        expect(vm._isDestroyed).toBe(true)
	        expect(vm._watchers).toBeNull()
	        expect(vm.$el).toBeNull()
	        expect(vm.$parent).toBeNull()
	        expect(vm.$root).toBeNull()
	        expect(vm.$children).toBeNull()
	        expect(vm._directives).toBeNull()
	        expect(Object.keys(vm._events).length).toBe(0)
	      })
	
	      it('remove element', function () {
	        var el = document.createElement('div')
	        var parent = document.createElement('div')
	        parent.appendChild(el)
	        var vm = new Vue({ el: el })
	        vm.$destroy(true)
	        expect(parent.childNodes.length).toBe(0)
	        expect(el.__vue__).toBeNull()
	      })
	
	      it('hooks', function () {
	        var opts = {
	          beforeDestroy: jasmine.createSpy(),
	          destroyed: jasmine.createSpy(),
	          detached: jasmine.createSpy()
	        }
	        var el = opts.el = document.createElement('div')
	        document.body.appendChild(el)
	        var vm = new Vue(opts)
	        vm.$destroy(true)
	        expect(opts.beforeDestroy).toHaveBeenCalled()
	        expect(opts.destroyed).toHaveBeenCalled()
	        expect(opts.detached).toHaveBeenCalled()
	      })
	
	      it('parent', function () {
	        var parent = new Vue()
	        var child = parent.$addChild()
	        var child2 = parent.$addChild()
	        expect(parent.$children.length).toBe(2)
	        child.$destroy()
	        expect(parent.$children.length).toBe(1)
	        child2.$destroy()
	        expect(parent.$children.length).toBe(0)
	      })
	
	      it('children', function () {
	        var parent = new Vue()
	        var child = parent.$addChild()
	        parent.$destroy()
	        expect(child._isDestroyed).toBe(true)
	      })
	
	      it('directives', function () {
	        var spy = jasmine.createSpy('directive unbind')
	        var vm = new Vue({
	          el: document.createElement('div'),
	          template: '<div v-test></div>',
	          directives: {
	            test: {
	              unbind: spy
	            }
	          }
	        })
	        vm.$destroy()
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('watchers', function () {
	        var vm = new Vue({
	          el: document.createElement('div'),
	          template: '{{a}}',
	          data: { a: 1 }
	        })
	        vm.$watch('a', function () {})
	        var dirWatcher = vm._watchers[0]
	        var userWatcher = vm._watchers[1]
	        vm.$destroy()
	        expect(dirWatcher.active).toBe(false)
	        expect(userWatcher.active).toBe(false)
	      })
	
	      it('refuse multiple calls', function () {
	        var spy = jasmine.createSpy()
	        var vm = new Vue({
	          beforeDestroy: spy
	        })
	        vm.$destroy()
	        vm.$destroy()
	        expect(spy.calls.count()).toBe(1)
	      })
	
	      it('safely teardown partial compilation', function () {
	        var vm = new Vue({
	          template: '<div v-component="dialog"><div v-partial="hello"></div></div>',
	          partials: {
	            hello: 'Hello {{name}}'
	          },
	          components: {
	            dialog: {
	              template: '<content>'
	            }
	          }
	        }).$mount()
	        expect(function () {
	          vm.$destroy()
	        }).not.toThrow()
	      })
	
	    })
	
	    describe('$compile', function () {
	
	      it('should partial compile and teardown stuff', function (done) {
	        var el = document.createElement('div')
	        var vm = new Vue({
	          el: el,
	          template: '{{a}}',
	          data: {
	            a: 'hi'
	          }
	        })
	        expect(vm._directives.length).toBe(1)
	        var partial = document.createElement('span')
	        partial.textContent = '{{a}}'
	        var decompile = vm.$compile(partial)
	        expect(partial.textContent).toBe('hi')
	        expect(vm._directives.length).toBe(2)
	        decompile()
	        expect(vm._directives.length).toBe(1)
	        vm.a = 'ha'
	        _.nextTick(function () {
	          expect(el.textContent).toBe('ha')
	          expect(partial.textContent).toBe('hi')
	          done()
	        })
	      })
	
	    })
	
	  })
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = Vue.util
	
	describe('Async components', function () {
	
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	    document.body.appendChild(el)
	    spyOn(_, 'warn')
	  })
	
	  afterEach(function () {
	    document.body.removeChild(el)
	  })
	
	  describe('v-component', function () {
	
	    it('normal', function (done) {
	      new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: 'ok'
	              })
	              next()
	            }, 0)
	          }
	        }
	      })
	      function next () {
	        expect(el.textContent).toBe('ok')
	        done()
	      }
	    })
	
	    it('dynamic', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<component is="{{view}}"></component>',
	        data: {
	          view: 'view-a'
	        },
	        components: {
	          'view-a': function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: 'A'
	              })
	              step1()
	            }, 0)
	          },
	          'view-b': function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: 'B'
	              })
	              step2()
	            }, 0)
	          }
	        }
	      })
	      var aCalled = false
	      function step1 () {
	        // ensure A is resolved only once
	        expect(aCalled).toBe(false)
	        aCalled = true
	        expect(el.textContent).toBe('A')
	        vm.view = 'view-b'
	      }
	      function step2 () {
	        expect(el.textContent).toBe('B')
	        vm.view = 'view-a'
	        _.nextTick(function () {
	          expect(el.textContent).toBe('A')
	          done()
	        })
	      }
	    })
	
	    it('invalidate pending on dynamic switch', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<component is="{{view}}"></component>',
	        data: {
	          view: 'view-a'
	        },
	        components: {
	          'view-a': function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: 'A'
	              })
	              step1()
	            }, 100)
	          },
	          'view-b': function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: 'B'
	              })
	              step2()
	            }, 200)
	          }
	        }
	      })
	      expect(el.textContent).toBe('')
	      vm.view = 'view-b'
	      function step1 () {
	        // called after A resolves, but A should have been
	        // invalidated so not cotrId should be set
	        expect(vm._directives[0].componentID).toBe(null)
	      }
	      function step2 () {
	        // B should resolve successfully
	        expect(el.textContent).toBe('B')
	        done()
	      }
	    })
	
	    it('invalidate pending on teardown', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<test></test>',
	        data: {
	          view: 'view-a'
	        },
	        components: {
	          test: function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: 'A'
	              })
	              next()
	            }, 100)
	          }
	        }
	      })
	      expect(el.textContent).toBe('')
	      // cache directive isntance before destroy
	      var dir = vm._directives[0]
	      vm.$destroy()
	      function next () {
	        // called after A resolves, but A should have been
	        // invalidated so not cotrId should be set
	        expect(dir.componentID).toBe(null)
	        done()
	      }
	    })
	
	    it('avoid duplicate requests', function (done) {
	      var factoryCallCount = 0
	      var instanceCount = 0
	      new Vue({
	        el: el,
	        template:
	          '<test></test>' +
	          '<test></test>',
	        components: {
	          test: factory
	        }
	      })
	      function factory (resolve) {
	        factoryCallCount++
	        setTimeout(function () {
	          resolve({
	            template: 'A',
	            created: function () {
	              instanceCount++
	            }
	          })
	          next()
	        }, 0)
	      }
	      function next () {
	        expect(factoryCallCount).toBe(1)
	        expect(el.textContent).toBe('AA')
	        expect(instanceCount).toBe(2)
	        done()
	      }
	    })
	
	    it('warn reject', function () {
	      new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: function (resolve, reject) {
	            reject('nooooo')
	          }
	        }
	      })
	      expect(hasWarned(_, 'Reason: nooooo')).toBe(true)
	    })
	  })
	
	  describe('v-repeat', function () {
	    // - normal
	    // - invalidate on teardown
	    // - warn for dynamic
	
	    it('normal', function (done) {
	      new Vue({
	        el: el,
	        template: '<test v-repeat="list"></test>',
	        data: {
	          list: [1, 2, 3]
	        },
	        components: {
	          test: function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: '{{$value}}'
	              })
	              next()
	            }, 0)
	          }
	        }
	      })
	      function next () {
	        expect(el.textContent).toBe('123')
	        done()
	      }
	    })
	
	    it('only resolve once', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<test v-repeat="list"></test>',
	        data: {
	          list: [1, 2, 3]
	        },
	        components: {
	          test: function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: '{{$value}}'
	              })
	              next()
	            }, 100)
	          }
	        }
	      })
	      // hijack realUpdate - this should only be called once
	      // spyOn doesn't work here
	      var update = vm._directives[0].realUpdate
	      var callCount = 0
	      vm._directives[0].realUpdate = function () {
	        callCount++
	        update.apply(this, arguments)
	      }
	      vm.list = [2, 3, 4]
	      function next () {
	        expect(el.textContent).toBe('234')
	        expect(callCount).toBe(1)
	        done()
	      }
	    })
	
	    it('invalidate on teardown', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<test v-repeat="list"></test>',
	        data: {
	          list: [1, 2, 3]
	        },
	        components: {
	          test: function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: '{{$value}}'
	              })
	              next()
	            }, 0)
	          }
	        }
	      })
	      var dir = vm._directives[0]
	      vm.$destroy()
	      function next () {
	        expect(el.textContent).toBe('')
	        expect(dir.Component).toBe(null)
	        done()
	      }
	    })
	
	    it('warn when used with dynamic v-repeat', function () {
	      new Vue({
	        el: el,
	        template: '<component v-repeat="list" is="{{c}}"></component>',
	        data: {
	          list: [1, 2, 3],
	          c: 'test'
	        },
	        components: {
	          test: function (resolve) {
	            setTimeout(function () {
	              resolve({
	                template: '{{$value}}'
	              })
	            }, 0)
	          }
	        }
	      })
	      expect(hasWarned(_, 'Async resolution is not supported')).toBe(true)
	    })
	  })
	
	})


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var batcher = __webpack_require__(24)
	var nextTick = __webpack_require__(3).nextTick
	
	describe('Batcher', function () {
	
	  var spy
	
	  beforeEach(function () {
	    spy = jasmine.createSpy('batcher')
	    spyOn(_, 'warn')
	  })
	
	  it('push', function (done) {
	    batcher.push({
	      run: spy
	    })
	    nextTick(function () {
	      expect(spy.calls.count()).toBe(1)
	      done()
	    })
	  })
	
	  it('dedup', function (done) {
	    batcher.push({
	      id: 1,
	      run: spy
	    })
	    batcher.push({
	      id: 1,
	      run: spy
	    })
	    nextTick(function () {
	      expect(spy.calls.count()).toBe(1)
	      done()
	    })
	  })
	
	  it('allow diplicate when flushing', function (done) {
	    var job = {
	      id: 1,
	      run: spy
	    }
	    batcher.push(job)
	    batcher.push({
	      id: 2,
	      run: function () {
	        batcher.push(job)
	      }
	    })
	    nextTick(function () {
	      expect(spy.calls.count()).toBe(2)
	      done()
	    })
	  })
	
	  it('calls user watchers after directive updates', function (done) {
	    var vals = []
	    function run () {
	      vals.push(this.id)
	    }
	    batcher.push({
	      id: 2,
	      user: true,
	      run: function () {
	        run.call(this)
	        // user watcher triggering another directive update!
	        batcher.push({
	          id: 3,
	          run: run
	        })
	      }
	    })
	    batcher.push({
	      id: 1,
	      run: run
	    })
	    nextTick(function () {
	      expect(vals[0]).toBe(1)
	      expect(vals[1]).toBe(2)
	      expect(vals[2]).toBe(3)
	      done()
	    })
	  })
	
	  it('warn against infinite update loops', function (done) {
	    var count = 0
	    var job = {
	      id: 1,
	      run: function () {
	        count++
	        batcher.push(job)
	      }
	    }
	    batcher.push(job)
	    nextTick(function () {
	      expect(count).toBe(config._maxUpdateCount + 1)
	      expect(hasWarned(_, 'infinite update loop')).toBe(true)
	      done()
	    })
	  })
	})


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(14)
	
	/**
	 * Debug function to assert cache state
	 *
	 * @param {Cache} cache
	 */
	
	function toString (cache) {
	  var s = ''
	  var entry = cache.head
	  while (entry) {
	    s += String(entry.key) + ':' + entry.value
	    entry = entry.newer
	    if (entry) {
	      s += ' < '
	    }
	  }
	  return s
	}
	
	describe('Cache', function () {
	
	  var c = new Cache(4)
	
	  it('put', function () {
	    c.put('adam', 29)
	    c.put('john', 26)
	    c.put('angela', 24)
	    c.put('bob', 48)
	    expect(c.size).toBe(4)
	    expect(toString(c)).toBe('adam:29 < john:26 < angela:24 < bob:48')
	  })
	
	  it('get', function () {
	    expect(c.get('adam')).toBe(29)
	    expect(c.get('john')).toBe(26)
	    expect(c.get('angela')).toBe(24)
	    expect(c.get('bob')).toBe(48)
	    expect(toString(c)).toBe('adam:29 < john:26 < angela:24 < bob:48')
	
	    expect(c.get('angela')).toBe(24)
	    // angela should now be the tail
	    expect(toString(c)).toBe('adam:29 < john:26 < bob:48 < angela:24')
	  })
	
	  it('expire', function () {
	    c.put('ygwie', 81)
	    expect(c.size).toBe(4)
	    expect(toString(c)).toBe('john:26 < bob:48 < angela:24 < ygwie:81')
	    expect(c.get('adam')).toBeUndefined()
	  })
	})


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var dirParser = __webpack_require__(15)
	var compiler = __webpack_require__(16)
	var compile = compiler.compile
	
	if (_.inBrowser) {
	  describe('Compile', function () {
	
	    var vm, el, data, directiveTeardown
	    beforeEach(function () {
	      // We mock vms here so we can assert what the generated
	      // linker functions do.
	      el = document.createElement('div')
	      data = {}
	      directiveTeardown = jasmine.createSpy()
	      vm = {
	        _data: {},
	        _directives: [],
	        _bindDir: function (name) {
	          this._directives.push({
	            name: name,
	            _teardown: directiveTeardown
	          })
	        },
	        $eval: function (value) {
	          return data[value]
	        },
	        $interpolate: function (value) {
	          return data[value]
	        },
	        _context: {
	          _directives: [],
	          $get: function (v) {
	            return 'from parent: ' + v
	          }
	        }
	      }
	      spyOn(vm, '_bindDir').and.callThrough()
	      spyOn(vm, '$eval').and.callThrough()
	      spyOn(vm, '$interpolate').and.callThrough()
	      spyOn(_, 'warn')
	    })
	
	    it('normal directives', function () {
	      el.setAttribute('v-a', 'b')
	      el.innerHTML = '<p v-a="a" v-b="b">hello</p><div v-b="b"></div>'
	      var defA = { priority: 1 }
	      var defB = { priority: 2 }
	      var descriptorA = dirParser.parse('a')[0]
	      var descriptorB = dirParser.parse('b')[0]
	      var options = _.mergeOptions(Vue.options, {
	        directives: {
	          a: defA,
	          b: defB
	        }
	      })
	      var linker = compile(el, options)
	      expect(typeof linker).toBe('function')
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(4)
	      expect(vm._bindDir).toHaveBeenCalledWith('a', el, descriptorB, defA, undefined)
	      expect(vm._bindDir).toHaveBeenCalledWith('a', el.firstChild, descriptorA, defA, undefined)
	      expect(vm._bindDir).toHaveBeenCalledWith('b', el.firstChild, descriptorB, defB, undefined)
	      expect(vm._bindDir).toHaveBeenCalledWith('b', el.lastChild, descriptorB, defB, undefined)
	      // check the priority sorting
	      // the "b" on the firstNode should be called first!
	      expect(vm._bindDir.calls.argsFor(1)[0]).toBe('b')
	    })
	
	    it('text interpolation', function () {
	      data.b = 'yeah'
	      el.innerHTML = '{{a}} and {{*b}}'
	      var def = Vue.options.directives.text
	      var linker = compile(el, Vue.options)
	      linker(vm, el)
	      // expect 1 call because one-time bindings do not generate a directive.
	      expect(vm._bindDir.calls.count()).toBe(1)
	      var args = vm._bindDir.calls.argsFor(0)
	      expect(args[0]).toBe('text')
	      // skip the node because it's generated in the linker fn via cloneNode
	      expect(args[2]).toBe(dirParser.parse('a')[0])
	      expect(args[3]).toBe(def)
	      // expect $eval to be called during onetime
	      expect(vm.$eval).toHaveBeenCalledWith('b')
	      // {{a}} is mocked so it's a space.
	      // but we want to make sure {{*b}} worked.
	      expect(el.innerHTML).toBe('  and yeah')
	    })
	
	    it('inline html', function () {
	      data.html = '<div>yoyoyo</div>'
	      el.innerHTML = '{{{html}}} {{{*html}}}'
	      var htmlDef = Vue.options.directives.html
	      var htmlDesc = dirParser.parse('html')[0]
	      var linker = compile(el, Vue.options)
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(1)
	      var htmlArgs = vm._bindDir.calls.argsFor(0)
	      expect(htmlArgs[0]).toBe('html')
	      expect(htmlArgs[2]).toBe(htmlDesc)
	      expect(htmlArgs[3]).toBe(htmlDef)
	      // with placeholder comments & interpolated one-time html
	      expect(el.innerHTML).toBe('<!--v-html--> <div>yoyoyo</div>')
	    })
	
	    it('terminal directives', function () {
	      el.innerHTML =
	        '<div v-repeat="items"><p v-a="b"></p></div>' + // v-repeat
	        '<div v-pre><p v-a="b"></p></div>' // v-pre
	      var def = Vue.options.directives.repeat
	      var descriptor = dirParser.parse('items')[0]
	      var linker = compile(el, Vue.options)
	      linker(vm, el)
	      // expect 1 call because terminal should return early and let
	      // the directive handle the rest.
	      expect(vm._bindDir.calls.count()).toBe(1)
	      expect(vm._bindDir).toHaveBeenCalledWith('repeat', el.firstChild, descriptor, def, undefined)
	    })
	
	    it('custom element components', function () {
	      var options = _.mergeOptions(Vue.options, {
	        components: {
	          'my-component': {}
	        }
	      })
	      el.innerHTML = '<my-component><div v-a="b"></div></my-component>'
	      var linker = compile(el, options)
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(1)
	      expect(vm._bindDir.calls.argsFor(0)[0]).toBe('component')
	      expect(_.warn).not.toHaveBeenCalled()
	    })
	
	    it('attribute interpolation', function () {
	      data['{{*b}}'] = 'B'
	      el.innerHTML = '<div a="{{a}}" b="{{*b}}"></div>'
	      var def = Vue.options.directives.attr
	      var descriptor = dirParser.parse('a:a')[0]
	      var linker = compile(el, Vue.options)
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(1)
	      expect(vm._bindDir).toHaveBeenCalledWith('attr', el.firstChild, descriptor, def)
	      expect(el.firstChild.getAttribute('b')).toBe('B')
	    })
	
	    it('props', function () {
	      var bindingModes = Vue.config._propBindingModes
	      var props = [
	        'a',
	        'empty',
	        'data-some-attr',
	        'some-other-attr',
	        'multiple-attrs',
	        'onetime',
	        'twoway',
	        'with-filter',
	        'camelCase',
	        'boolean-literal',
	        {
	          name: 'default-value',
	          default: 123
	        },
	        {
	          name: 'boolean',
	          type: Boolean
	        },
	        {
	          name: 'boolean-absent',
	          type: Boolean
	        },
	        {
	          name: 'factory',
	          type: Object,
	          default: function () {
	            return {
	              a: 123
	            }
	          }
	        },
	        'withDataPrefix',
	        {
	          name: 'forceTwoWay',
	          twoWay: true
	        }
	      ].map(function (p) {
	        return typeof p === 'string' ? { name: p } : p
	      })
	      var def = Vue.options.directives._prop
	      el.setAttribute('a', '1')
	      el.setAttribute('empty', '')
	      el.setAttribute('data-some-attr', '{{a}}')
	      el.setAttribute('some-other-attr', '2')
	      el.setAttribute('multiple-attrs', 'a {{b}} c')
	      el.setAttribute('onetime', '{{*a}}')
	      el.setAttribute('twoway', '{{@a}}')
	      el.setAttribute('with-filter', '{{a | filter}}')
	      el.setAttribute('camel-case', 'hi')
	      el.setAttribute('boolean-literal', '{{true}}')
	      el.setAttribute('boolean', '')
	      el.setAttribute('data-with-data-prefix', '1')
	      el.setAttribute('force-two-way', '{{a}}')
	      compiler.compileAndLinkProps(vm, el, props)
	      // should skip literals and one-time bindings
	      expect(vm._bindDir.calls.count()).toBe(5)
	      // data-some-attr
	      var args = vm._bindDir.calls.argsFor(0)
	      expect(args[0]).toBe('prop')
	      expect(args[1]).toBe(null)
	      expect(args[2].path).toBe('someAttr')
	      expect(args[2].parentPath).toBe('a')
	      expect(args[2].mode).toBe(bindingModes.ONE_WAY)
	      expect(args[3]).toBe(def)
	      // multiple-attrs
	      args = vm._bindDir.calls.argsFor(1)
	      expect(args[0]).toBe('prop')
	      expect(args[1]).toBe(null)
	      expect(args[2].path).toBe('multipleAttrs')
	      expect(args[2].parentPath).toBe('"a "+(b)+" c"')
	      expect(args[2].mode).toBe(bindingModes.ONE_WAY)
	      expect(args[3]).toBe(def)
	      // two way
	      args = vm._bindDir.calls.argsFor(2)
	      expect(args[0]).toBe('prop')
	      expect(args[1]).toBe(null)
	      expect(args[2].path).toBe('twoway')
	      expect(args[2].mode).toBe(bindingModes.TWO_WAY)
	      expect(args[2].parentPath).toBe('a')
	      expect(args[3]).toBe(def)
	      // with-filter
	      args = vm._bindDir.calls.argsFor(3)
	      expect(args[0]).toBe('prop')
	      expect(args[1]).toBe(null)
	      expect(args[2].path).toBe('withFilter')
	      expect(args[2].parentPath).toBe('this._applyFilters(a,null,[{"name":"filter"}],false)')
	      expect(args[2].mode).toBe(bindingModes.ONE_WAY)
	      expect(args[3]).toBe(def)
	      // warn when expecting two-way binding but not getting it
	      expect(hasWarned(_, 'expects a two-way binding type')).toBe(true)
	      // literal and one time should've been set on the _data
	      // and numbers should be casted
	      expect(Object.keys(vm._data).length).toBe(11)
	      expect(vm.a).toBe(1)
	      expect(vm._data.a).toBe(1)
	      expect(vm.empty).toBe('')
	      expect(vm._data.empty).toBe('')
	      expect(vm.someOtherAttr).toBe(2)
	      expect(vm._data.someOtherAttr).toBe(2)
	      expect(vm.onetime).toBe('from parent: a')
	      expect(vm._data.onetime).toBe('from parent: a')
	      expect(vm.booleanLiteral).toBe('from parent: true')
	      expect(vm._data.booleanLiteral).toBe('from parent: true')
	      expect(vm.camelCase).toBe('hi')
	      expect(vm._data.camelCase).toBe('hi')
	      expect(vm.defaultValue).toBe(123)
	      expect(vm._data.defaultValue).toBe(123)
	      expect(vm.boolean).toBe(true)
	      expect(vm._data.boolean).toBe(true)
	      expect(vm.booleanAbsent).toBe(false)
	      expect(vm._data.booleanAbsent).toBe(false)
	      expect(vm.factory).toBe(vm._data.factory)
	      expect(vm.factory.a).toBe(123)
	      expect(vm.withDataPrefix).toBe(1)
	      expect(vm._data.withDataPrefix).toBe(1)
	    })
	
	    it('props on root instance', function () {
	      // temporarily remove vm.$parent
	      var context = vm._context
	      vm._context = null
	      el.setAttribute('a', 'hi')
	      el.setAttribute('b', '{{hi}}')
	      compiler.compileAndLinkProps(vm, el, [
	        { name: 'a' },
	        { name: 'b' }
	      ])
	      expect(vm._bindDir.calls.count()).toBe(0)
	      expect(vm._data.a).toBe('hi')
	      expect(hasWarned(_, 'Cannot bind dynamic prop on a root')).toBe(true)
	      // restore parent mock
	      vm._context = context
	    })
	
	    it('DocumentFragment', function () {
	      var frag = document.createDocumentFragment()
	      frag.appendChild(el)
	      var el2 = document.createElement('div')
	      frag.appendChild(el2)
	      el.innerHTML = '{{*a}}'
	      el2.innerHTML = '{{*b}}'
	      data.a = 'A'
	      data.b = 'B'
	      var linker = compile(frag, Vue.options)
	      linker(vm, frag)
	      expect(el.innerHTML).toBe('A')
	      expect(el2.innerHTML).toBe('B')
	    })
	
	    it('partial compilation', function () {
	      el.innerHTML = '<div v-attr="test:abc">{{bcd}}<p v-show="ok"></p></div>'
	      var linker = compile(el, Vue.options, true)
	      var decompile = linker(vm, el)
	      expect(vm._directives.length).toBe(3)
	      decompile()
	      expect(directiveTeardown.calls.count()).toBe(3)
	      expect(vm._directives.length).toBe(0)
	    })
	
	    it('skip script tags', function () {
	      el.innerHTML = '<script type="x/template">{{test}}</script>'
	      var linker = compile(el, Vue.options)
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(0)
	    })
	
	    it('should handle container/replacer directives with same name', function () {
	      var parentSpy = jasmine.createSpy()
	      var childSpy = jasmine.createSpy()
	      vm = new Vue({
	        el: el,
	        template:
	          '<test class="a" v-on="click:test(1)"></test>',
	        methods: {
	          test: parentSpy
	        },
	        components: {
	          test: {
	            template: '<div class="b" v-on="click:test(2)"></div>',
	            replace: true,
	            methods: {
	              test: childSpy
	            }
	          }
	        }
	      })
	      expect(vm.$el.firstChild.className).toBe('b a')
	      var e = document.createEvent('HTMLEvents')
	      e.initEvent('click', true, true)
	      vm.$el.firstChild.dispatchEvent(e)
	      expect(parentSpy).toHaveBeenCalledWith(1)
	      expect(childSpy).toHaveBeenCalledWith(2)
	    })
	
	    it('should teardown props and replacer directives when unlinking', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<test prop="{{msg}}"></test>',
	        data: {
	          msg: 'hi'
	        },
	        components: {
	          test: {
	            props: ['prop'],
	            template: '<div v-show="true"></div>',
	            replace: true
	          }
	        }
	      })
	      var dirs = vm.$children[0]._directives
	      expect(dirs.length).toBe(2)
	      vm.$children[0].$destroy()
	      var i = dirs.length
	      while (i--) {
	        expect(dirs[i]._bound).toBe(false)
	      }
	    })
	
	    it('should remove parent container directives from parent when unlinking', function () {
	      var vm = new Vue({
	        el: el,
	        template:
	          '<test v-show="ok"></test>',
	        data: {
	          ok: true
	        },
	        components: {
	          test: {
	            template: 'hi'
	          }
	        }
	      })
	      expect(el.firstChild.style.display).toBe('')
	      expect(vm._directives.length).toBe(2)
	      expect(vm.$children.length).toBe(1)
	      vm.$children[0].$destroy()
	      expect(vm._directives.length).toBe(1)
	      expect(vm.$children.length).toBe(0)
	    })
	
	    it('should remove transcluded directives from parent when unlinking (component)', function () {
	      var vm = new Vue({
	        el: el,
	        template:
	          '<test>{{test}}</test>',
	        data: {
	          test: 'parent'
	        },
	        components: {
	          test: {
	            template: '<content></content>'
	          }
	        }
	      })
	      expect(vm.$el.textContent).toBe('parent')
	      expect(vm._directives.length).toBe(2)
	      expect(vm.$children.length).toBe(1)
	      vm.$children[0].$destroy()
	      expect(vm._directives.length).toBe(1)
	      expect(vm.$children.length).toBe(0)
	    })
	
	    it('should remove transcluded directives from parent when unlinking (v-if + component)', function (done) {
	      var vm = new Vue({
	        el: el,
	        template:
	          '<div v-if="ok">' +
	            '<test>{{test}}</test>' +
	          '</div>',
	        data: {
	          test: 'parent',
	          ok: true
	        },
	        components: {
	          test: {
	            template: '<content></content>'
	          }
	        }
	      })
	      expect(vm.$el.textContent).toBe('parent')
	      expect(vm._directives.length).toBe(3)
	      expect(vm.$children.length).toBe(1)
	      vm.ok = false
	      _.nextTick(function () {
	        expect(vm.$el.textContent).toBe('')
	        expect(vm._directives.length).toBe(1)
	        expect(vm.$children.length).toBe(0)
	        done()
	      })
	    })
	
	    it('element directive', function () {
	      new Vue({
	        el: el,
	        template: '<test>{{a}}</test>',
	        elementDirectives: {
	          test: {
	            bind: function () {
	              this.el.setAttribute('test', '1')
	            }
	          }
	        }
	      })
	      // should be terminal
	      expect(el.innerHTML).toBe('<test test="1">{{a}}</test>')
	    })
	
	  })
	}


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var transclude = __webpack_require__(16).transclude
	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	
	if (_.inBrowser) {
	  describe('Transclude', function () {
	
	    var el, options
	    beforeEach(function () {
	      el = document.createElement('div')
	      options = _.extend({}, Vue.options)
	      spyOn(_, 'warn')
	    })
	
	    it('normal', function () {
	      var res = transclude(el, options)
	      expect(res).toBe(el)
	    })
	
	    it('template', function () {
	      options.template = '{{hi}}'
	      var res = transclude(el, options)
	      expect(res).toBe(el)
	      expect(res.innerHTML).toBe('{{hi}}')
	    })
	
	    it('template invalid', function () {
	      options.template = '#non-existent-stuff'
	      var res = transclude(el, options)
	      expect(res).toBeUndefined()
	      expect(hasWarned(_, 'Invalid template option')).toBe(true)
	    })
	
	    it('template replace', function () {
	      el.className = 'hello'
	      options.template = '<div>{{hi}}</div>'
	      options.replace = true
	      var res = transclude(el, options)
	      expect(res).not.toBe(el)
	      expect(res.tagName).toBe('DIV')
	      expect(res.className).toBe('hello')
	      expect(res.innerHTML).toBe('{{hi}}')
	    })
	
	    it('template replace -> fragment instance', function () {
	      var res
	      options.replace = true
	
	      // multiple root
	      options.template = '<div></div><div></div>'
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	
	      // non-element
	      options.template = '{{hi}}'
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	
	      // single component: <component>
	      options.template = '<component is="{{hi}}"></component>'
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	
	      // single component: custom element
	      options.template = '<test></test>'
	      options.components = { test: {}}
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	
	      // single component: v-component
	      options.template = '<div v-component="test"></div>'
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	
	      // element directive
	      options.template = '<el-dir></el-dir>'
	      options.elementDirectives = { 'el-dir': {}}
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	
	      // v-repeat
	      options.template = '<div v-repeat="list"></div>'
	      res = transclude(el, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	    })
	
	    it('direct fragment instance', function () {
	      var frag = document.createDocumentFragment()
	      frag.appendChild(el)
	      var res = transclude(frag, options)
	      expect(res).toBe(frag)
	      expect(res.childNodes.length).toBe(3)
	      expect(res.childNodes[0].nodeType).toBe(3)
	      expect(res.childNodes[1]).toBe(el)
	      expect(res.childNodes[2].nodeType).toBe(3)
	    })
	
	    it('template element', function () {
	      var tpl = document.createElement('template')
	      tpl.innerHTML = '<div>123</div>'
	      var res = transclude(tpl, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	      expect(res.childNodes.length).toBe(3)
	      expect(res.childNodes[0].nodeType).toBe(3)
	      expect(res.childNodes[1].textContent).toBe('123')
	      expect(res.childNodes[2].nodeType).toBe(3)
	    })
	
	    it('replacer attr should overwrite container attr of same name, except class should be merged', function () {
	      el.setAttribute('class', 'test')
	      el.setAttribute('title', 'parent')
	      options.template = '<div class="other" title="child"></div>'
	      options.replace = true
	      options._asComponent = true
	      var res = transclude(el, options)
	      expect(res.getAttribute('class')).toBe('other test')
	      expect(res.getAttribute('title')).toBe('child')
	    })
	
	    it('class merge for svg elements', function () {
	      el.setAttribute('class', 'test')
	      options.template = '<circle class="other"></circle>'
	      options.replace = true
	      options._asComponent = true
	      var res = transclude(el, options)
	      expect(res.namespaceURI).toBe('http://www.w3.org/2000/svg')
	      expect(res.getAttribute('class')).toBe('other test')
	    })
	
	  })
	}


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var Directive = __webpack_require__(62)
	var nextTick = Vue.nextTick
	
	describe('Directive', function () {
	
	  var el = {} // simply a mock to be able to run in Node
	  var vm, def
	
	  beforeEach(function () {
	    def = {
	      bind: jasmine.createSpy('bind'),
	      update: jasmine.createSpy('update'),
	      unbind: jasmine.createSpy('unbind')
	    }
	    vm = new Vue({
	      data: {
	        a: 1,
	        b: { c: { d: 2 }}
	      },
	      filters: {
	        test: function (v) {
	          return v * 2
	        }
	      },
	      directives: {
	        test: def
	      }
	    })
	  })
	
	  it('normal', function (done) {
	    var d = new Directive('test', el, vm, {
	      expression: 'a',
	      arg: 'someArg',
	      filters: [{name: 'test'}]
	    }, def)
	    // properties
	    expect(d.el).toBe(el)
	    expect(d.name).toBe('test')
	    expect(d.vm).toBe(vm)
	    expect(d.arg).toBe('someArg')
	    expect(d.expression).toBe('a')
	    // init calls
	    expect(def.bind).toHaveBeenCalled()
	    expect(def.update).toHaveBeenCalledWith(2)
	    expect(d._bound).toBe(true)
	    // update
	    vm.a = 2
	    nextTick(function () {
	      expect(def.update).toHaveBeenCalledWith(4, 2)
	      // teardown
	      d._teardown()
	      expect(def.unbind).toHaveBeenCalled()
	      expect(d._bound).toBe(false)
	      expect(d._watcher).toBe(null)
	      done()
	    })
	  })
	
	  it('static literal', function () {
	    def.isLiteral = true
	    var d = new Directive('test', el, vm, {
	      expression: 'a'
	    }, def)
	    expect(d._watcher).toBeUndefined()
	    expect(d.expression).toBe('a')
	    expect(d.bind).toHaveBeenCalled()
	    expect(d.update).not.toHaveBeenCalled()
	  })
	
	  it('static literal, interpolate with no update', function () {
	    def.isLiteral = true
	    delete def.update
	    var d = new Directive('test', el, vm, {
	      expression: '{{a}}'
	    }, def)
	    expect(d._watcher).toBeUndefined()
	    expect(d.expression).toBe(1)
	    expect(d.bind).toHaveBeenCalled()
	  })
	
	  it('dynamic literal', function (done) {
	    vm.a = '' // #468 dynamic literals with falsy initial
	              // should still create the watcher.
	    def.isLiteral = true
	    var d = new Directive('test', el, vm, {
	      expression: '{{a}}'
	    }, def)
	    expect(d._watcher).toBeDefined()
	    expect(d.expression).toBe('')
	    expect(def.bind).toHaveBeenCalled()
	    expect(def.update).toHaveBeenCalledWith('')
	    vm.a = 'aa'
	    nextTick(function () {
	      expect(def.update).toHaveBeenCalledWith('aa', '')
	      done()
	    })
	  })
	
	  it('inline statement', function () {
	    def.acceptStatement = true
	    var spy = jasmine.createSpy()
	    vm.$options.filters.test = function (fn) {
	      spy()
	      return function () {
	        // call it twice
	        fn()
	        fn()
	      }
	    }
	    var d = new Directive('test', el, vm, {
	      expression: 'a++',
	      filters: [{name: 'test'}]
	    }, def)
	    expect(d._watcher).toBeUndefined()
	    expect(d.bind).toHaveBeenCalled()
	    var wrappedFn = d.update.calls.argsFor(0)[0]
	    expect(typeof wrappedFn).toBe('function')
	    // test invoke the wrapped fn
	    wrappedFn()
	    expect(vm.a).toBe(3)
	  })
	
	  it('two-way', function (done) {
	    def.twoWay = true
	    vm.$options.filters.test = {
	      write: function (v) {
	        return v * 3
	      }
	    }
	    var d = new Directive('test', el, vm, {
	      expression: 'a',
	      filters: [{name: 'test'}]
	    }, def)
	    d.set(2)
	    expect(vm.a).toBe(6)
	    nextTick(function () {
	      // should have no update calls
	      expect(def.update.calls.count()).toBe(1)
	      done()
	    })
	  })
	
	  it('deep', function (done) {
	    def.deep = true
	    new Directive('test', el, vm, {
	      expression: 'b'
	    }, def)
	    vm.b.c.d = 3
	    nextTick(function () {
	      expect(def.update.calls.count()).toBe(2)
	      done()
	    })
	  })
	
	  it('function def', function () {
	    var d = new Directive('test', el, vm, {
	      expression: 'a'
	    }, def.update)
	    expect(d.update).toBe(def.update)
	    expect(def.update).toHaveBeenCalled()
	  })
	})


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(32)
	
	if (_.inBrowser) {
	  describe('v-attr', function () {
	
	    var el, dir
	    beforeEach(function () {
	      el = document.createElement('div')
	      dir = {el: el}
	      _.extend(dir, def)
	    })
	
	    it('normal attr', function () {
	      dir.arg = 'test'
	
	      dir.update('ok')
	      expect(el.getAttribute('test')).toBe('ok')
	      dir.update('again')
	      expect(el.getAttribute('test')).toBe('again')
	      dir.update(null)
	      expect(el.hasAttribute('test')).toBe(false)
	      dir.update(false)
	      expect(el.hasAttribute('test')).toBe(false)
	      dir.update(0)
	      expect(el.getAttribute('test')).toBe('0')
	    })
	
	    it('should set property for input value', function () {
	      dir.el = document.createElement('input')
	      dir.arg = 'value'
	      dir.update('what')
	      expect(dir.el.getAttribute('value')).toBe('what')
	      expect(dir.el.value).toBe('what')
	    })
	
	    it('xlink', function () {
	      var xlinkNS = 'http://www.w3.org/1999/xlink'
	      dir.arg = 'xlink:special'
	
	      dir.update('ok')
	      expect(el.getAttributeNS(xlinkNS, 'special')).toBe('ok')
	      dir.update('again')
	      expect(el.getAttributeNS(xlinkNS, 'special')).toBe('again')
	      dir.update(null)
	      expect(el.hasAttributeNS(xlinkNS, 'special')).toBe(false)
	    })
	
	    it('object and xlink', function () {
	      var xlinkNS = 'http://www.w3.org/1999/xlink'
	      var obj1 = {special: 'ok', test: 'again'}
	      var obj2 = {'xlink:href': '#', test: 'ok', empty: null}
	      dir.update(obj2)
	      expect(el.getAttributeNS(xlinkNS, 'href')).toBe('#')
	      expect(el.getAttribute('test')).toBe('ok')
	      expect(el.hasAttribute('empty')).toBe(false)
	      dir.update(obj1)
	      expect(el.hasAttributeNS(xlinkNS, 'href')).toBe(false)
	      expect(el.getAttribute('special')).toBe('ok')
	      expect(el.getAttribute('test')).toBe('again')
	      obj1.test = null
	      dir.update(obj1)
	      expect(el.hasAttribute('test')).toBe(false)
	      dir.update(obj2)
	      expect(el.getAttributeNS(xlinkNS, 'href')).toBe('#')
	    })
	  })
	}


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(35)
	
	if (_.inBrowser) {
	  describe('v-class', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	    })
	
	    it('with className', function () {
	      el.className = 'haha'
	      var dir = _.extend({
	        el: el,
	        arg: 'test'
	      }, def)
	      dir.update(true)
	      expect(el.className).toBe('haha test')
	      dir.update(false)
	      expect(el.className).toBe('haha')
	    })
	
	    it('without className', function () {
	      el.className = 'haha'
	      var dir = _.extend({ el: el }, def)
	      dir.update('test')
	      expect(el.className).toBe('haha test')
	      dir.update('what now test')
	      expect(el.className).toBe('haha test now what')
	      dir.update('ok cool')
	      expect(el.className).toBe('haha cool ok')
	      dir.update()
	      expect(el.className).toBe('haha')
	    })
	
	    it('object value', function () {
	      el.className = 'hoho'
	      var dir = _.extend({ el: el }, def)
	      dir.update({
	        a: true,
	        b: false
	      })
	      expect(el.className).toBe('hoho a')
	      dir.update({
	        b: true
	      })
	      expect(el.className).toBe('hoho b')
	      dir.update(null)
	      expect(el.className).toBe('hoho')
	    })
	
	  })
	}


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var compile = __webpack_require__(16).compile
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-cloak', function () {
	
	    it('should not remove during compile', function () {
	      var el = document.createElement('div')
	      el.setAttribute('v-cloak', '')
	      compile(el, Vue.options)
	      expect(el.hasAttribute('v-cloak')).toBe(true)
	    })
	
	    it('should remove after compile', function () {
	      var el = document.createElement('div')
	      el.setAttribute('v-cloak', '')
	      new Vue({
	        el: el
	      })
	      expect(el.hasAttribute('v-cloak')).toBe(false)
	    })
	  })
	}


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-component', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      document.body.appendChild(el)
	      spyOn(_, 'warn')
	    })
	
	    afterEach(function () {
	      document.body.removeChild(el)
	    })
	
	    it('static', function () {
	      new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            data: function () {
	              return { a: 123 }
	            },
	            template: '{{a}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<test>123</test>')
	    })
	
	    it('replace', function () {
	      new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            replace: true,
	            data: function () {
	              return { a: 123 }
	            },
	            template: '<p>{{a}}</p>'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<p>123</p>')
	    })
	
	    it('allow v-component on table elements', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<table><tbody><tr v-component="test"></tr></tbody></table>',
	        components: {
	          test: {
	            data: function () {
	              return { a: 123 }
	            },
	            template: '<td>{{a}}</td>'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe(vm.$options.template.replace(/<tr.*\/tr>/, '<tr><td>123</td></tr>'))
	      expect(_.warn).not.toHaveBeenCalled()
	    })
	
	    it('inline-template', function () {
	      new Vue({
	        el: el,
	        template: '<test inline-template>{{a}}</test>',
	        data: {
	          a: 'parent'
	        },
	        components: {
	          test: {
	            data: function () {
	              return { a: 'child' }
	            },
	            template: 'child option template'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<test>child</test>')
	    })
	
	    it('block replace', function () {
	      new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            replace: true,
	            data: function () {
	              return { a: 123, b: 234 }
	            },
	            template: '<p>{{a}}</p><p>{{b}}</p>'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<p>123</p><p>234</p>')
	    })
	
	    it('dynamic', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<component is="{{view}}" v-attr="view:view"></component>',
	        data: {
	          view: 'view-a'
	        },
	        components: {
	          'view-a': {
	            template: '<div>AAA</div>',
	            replace: true,
	            data: function () {
	              return { view: 'a' }
	            }
	          },
	          'view-b': {
	            template: '<div>BBB</div>',
	            replace: true,
	            data: function () {
	              return { view: 'b' }
	            }
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div view="view-a">AAA</div>')
	      vm.view = 'view-b'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div view="view-b">BBB</div>')
	        vm.view = ''
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('')
	          done()
	        })
	      })
	    })
	
	    it('keep-alive', function (done) {
	      var spyA = jasmine.createSpy()
	      var spyB = jasmine.createSpy()
	      var vm = new Vue({
	        el: el,
	        template: '<component is="{{view}}" keep-alive></component>',
	        data: {
	          view: 'view-a'
	        },
	        components: {
	          'view-a': {
	            created: spyA,
	            template: '<div>AAA</div>',
	            replace: true
	          },
	          'view-b': {
	            created: spyB,
	            template: '<div>BBB</div>',
	            replace: true
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div>AAA</div>')
	      expect(spyA.calls.count()).toBe(1)
	      expect(spyB.calls.count()).toBe(0)
	      vm.view = 'view-b'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>BBB</div>')
	        expect(spyA.calls.count()).toBe(1)
	        expect(spyB.calls.count()).toBe(1)
	        vm.view = 'view-a'
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('<div>AAA</div>')
	          expect(spyA.calls.count()).toBe(1)
	          expect(spyB.calls.count()).toBe(1)
	          vm.view = 'view-b'
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe('<div>BBB</div>')
	            expect(spyA.calls.count()).toBe(1)
	            expect(spyB.calls.count()).toBe(1)
	            done()
	          })
	        })
	      })
	    })
	
	    it('should compile parent template directives & content in parent scope', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          ok: false,
	          message: 'hello'
	        },
	        template: '<test v-show="ok">{{message}}</test>',
	        components: {
	          test: {
	            template: '<div><content></content> {{message}}</div>',
	            replace: true,
	            data: function () {
	              return {
	                message: 'world'
	              }
	            }
	          }
	        }
	      })
	      expect(el.firstChild.style.display).toBe('none')
	      expect(el.firstChild.textContent).toBe('hello world')
	      vm.ok = true
	      vm.message = 'bye'
	      _.nextTick(function () {
	        expect(el.firstChild.style.display).toBe('')
	        expect(el.firstChild.textContent).toBe('bye world')
	        done()
	      })
	    })
	
	    it('parent content + v-if', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          ok: false,
	          message: 'hello'
	        },
	        template: '<test v-if="ok">{{message}}</test>',
	        components: {
	          test: {
	            template: '<content></content> {{message}}',
	            data: function () {
	              return {
	                message: 'world'
	              }
	            }
	          }
	        }
	      })
	      expect(el.textContent).toBe('')
	      expect(vm.$children.length).toBe(0)
	      expect(vm._directives.length).toBe(1) // v-if
	      vm.ok = true
	      _.nextTick(function () {
	        expect(vm.$children.length).toBe(1)
	        expect(vm._directives.length).toBe(3) // v-if, v-component, v-text
	        expect(el.textContent).toBe('hello world')
	        done()
	      })
	    })
	
	    it('props', function () {
	      new Vue({
	        el: el,
	        data: {
	          list: [{a: 1}, {a: 2}]
	        },
	        template: '<test collection="{{list}}"></test>',
	        components: {
	          test: {
	            template: '<ul><li v-repeat="collection">{{a}}</li></ul>',
	            replace: true,
	            props: ['collection']
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<ul><li>1</li><li>2</li></ul>')
	    })
	
	    it('wait-for for static component', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<view-a wait-for="ok"></view-a>',
	        components: {
	          'view-a': {
	            template: 'AAA'
	          }
	        }
	      })
	      expect(el.textContent).toBe('')
	      vm.$children[0].$emit('ok')
	      expect(el.textContent).toBe('AAA')
	    })
	
	    it('wait-for for dynamic components', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          view: 'view-a'
	        },
	        template: '<component is="{{view}}" wait-for="ok"></component>',
	        components: {
	          'view-a': {
	            template: 'AAA'
	          },
	          'view-b': {
	            template: 'BBB'
	          }
	        }
	      })
	      vm.$children[0].$emit('ok')
	      vm.view = 'view-b'
	      _.nextTick(function () {
	        expect(el.textContent).toBe('AAA')
	        // old vm is already removed, this is the new vm
	        vm.$children[0].$emit('ok')
	        expect(el.textContent).toBe('BBB')
	        done()
	      })
	    })
	
	    it('transition-mode: in-out', function (done) {
	      var spy1 = jasmine.createSpy('enter')
	      var spy2 = jasmine.createSpy('leave')
	      var next
	      var vm = new Vue({
	        el: el,
	        data: {
	          view: 'view-a'
	        },
	        template: '<component is="{{view}}" v-transition="test" transition-mode="in-out"></component>',
	        components: {
	          'view-a': { template: 'AAA' },
	          'view-b': { template: 'BBB' }
	        },
	        transitions: {
	          test: {
	            enter: function (el, done) {
	              spy1()
	              next = done
	            },
	            leave: function (el, done) {
	              spy2()
	              _.nextTick(done)
	            }
	          }
	        }
	      })
	      expect(el.textContent).toBe('AAA')
	      vm.view = 'view-b'
	      _.nextTick(function () {
	        expect(spy1).toHaveBeenCalled()
	        expect(spy2).not.toHaveBeenCalled()
	        expect(el.textContent).toBe('AAABBB')
	        next()
	        _.nextTick(function () {
	          expect(spy2).toHaveBeenCalled()
	          _.nextTick(function () {
	            expect(el.textContent).toBe('BBB')
	            done()
	          })
	        })
	      })
	    })
	
	    it('transition-mode: out-in', function (done) {
	      var spy1 = jasmine.createSpy('enter')
	      var spy2 = jasmine.createSpy('leave')
	      var next
	      var vm = new Vue({
	        el: el,
	        data: {
	          view: 'view-a'
	        },
	        template: '<component is="{{view}}" v-transition="test" transition-mode="out-in"></component>',
	        components: {
	          'view-a': { template: 'AAA' },
	          'view-b': { template: 'BBB' }
	        },
	        transitions: {
	          test: {
	            enter: function (el, done) {
	              spy2()
	              _.nextTick(done)
	            },
	            leave: function (el, done) {
	              spy1()
	              next = done
	            }
	          }
	        }
	      })
	      expect(el.textContent).toBe('AAA')
	      vm.view = 'view-b'
	      _.nextTick(function () {
	        expect(spy1).toHaveBeenCalled()
	        expect(spy2).not.toHaveBeenCalled()
	        expect(el.textContent).toBe('AAA')
	        next()
	        expect(spy2).toHaveBeenCalled()
	        expect(el.textContent).toBe('BBB')
	        done()
	      })
	    })
	
	    it('teardown', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<component is="{{view}}" keep-alive></component>',
	        data: {
	          view: 'test'
	        },
	        components: {
	          test: {},
	          test2: {}
	        }
	      })
	      vm.view = 'test2'
	      _.nextTick(function () {
	        expect(vm.$children.length).toBe(2)
	        var child = vm.$children[0]
	        var child2 = vm.$children[1]
	        vm._directives[0].unbind()
	        expect(vm._directives[0].cache).toBeNull()
	        expect(vm.$children.length).toBe(0)
	        expect(child._isDestroyed).toBe(true)
	        expect(child2._isDestroyed).toBe(true)
	        done()
	      })
	    })
	
	    it('already mounted warn', function () {
	      el.setAttribute('v-_component', 'test')
	      new Vue({
	        el: el
	      })
	      expect(hasWarned(_, 'cannot mount component "test" on already mounted element')).toBe(true)
	    })
	
	    it('not found component should not throw', function () {
	      expect(function () {
	        new Vue({
	          el: el,
	          template: '<div v-component="non-existent"></div>'
	        })
	      }).not.toThrow()
	    })
	
	  })
	}


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-el', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })
	
	    it('normal', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-el="test" id="test"></div>'
	      })
	      expect(vm.$$.test).toBeTruthy()
	      expect(vm.$$.test.id).toBe('test')
	      vm._directives[0]._teardown()
	      expect(vm.$$.test).toBeUndefined()
	    })
	
	    it('with v-repeat', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: { items: [1, 2, 3, 4, 5] },
	        template: '<div v-repeat="items" v-el="test">{{$value}}</div>'
	      })
	      expect(vm.$$.test).toBeTruthy()
	      expect(Array.isArray(vm.$$.test)).toBe(true)
	      expect(vm.$$.test[0].textContent).toBe('1')
	      expect(vm.$$.test[4].textContent).toBe('5')
	      vm.items = []
	      _.nextTick(function () {
	        expect(vm.$$.test.length).toBe(0)
	        done()
	      })
	    })
	
	  })
	}


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(31)
	
	if (_.inBrowser) {
	  describe('v-html', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	    })
	
	    it('element', function () {
	      var dir = {
	        el: el
	      }
	      _.extend(dir, def)
	      dir.bind()
	      dir.update('<div>1234</div><p>234</p>')
	      expect(el.innerHTML).toBe('<div>1234</div><p>234</p>')
	      dir.update('<p>123</p><div>444</div>')
	      expect(el.innerHTML).toBe('<p>123</p><div>444</div>')
	      dir.update(null)
	      expect(el.innerHTML).toBe('')
	    })
	
	    it('inline', function () {
	      var node = document.createComment('html-test')
	      el.appendChild(node)
	      var dir = {
	        el: node
	      }
	      _.extend(dir, def)
	      dir.bind()
	      dir.update('<div>1234</div><p>234</p>')
	      expect(el.innerHTML).toBe('<div>1234</div><p>234</p>')
	      dir.update('<p>123</p><div>444</div>')
	      expect(el.innerHTML).toBe('<p>123</p><div>444</div>')
	      dir.update(null)
	      expect(el.innerHTML).toBe('')
	    })
	
	  })
	}


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-if', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })
	
	    it('normal', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: { test: false, a: 'A' },
	        template: '<div v-if="test"><test></test></div>',
	        components: {
	          test: {
	            inherit: true,
	            template: '{{a}}'
	          }
	        }
	      })
	      // lazy instantitation
	      expect(el.innerHTML).toBe('')
	      expect(vm.$children.length).toBe(0)
	      vm.test = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div><test>A</test></div>')
	        expect(vm.$children.length).toBe(1)
	        vm.test = false
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('')
	          expect(vm.$children.length).toBe(0)
	          vm.test = true
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe('<div><test>A</test></div>')
	            expect(vm.$children.length).toBe(1)
	            var child = vm.$children[0]
	            vm.$destroy()
	            expect(child._isDestroyed).toBe(true)
	            done()
	          })
	        })
	      })
	    })
	
	    it('template block', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: { test: false, a: 'A', b: 'B' },
	        template: '<template v-if="test"><p>{{a}}</p><p>{{b}}</p></template>'
	      })
	      // lazy instantitation
	      expect(el.innerHTML).toBe('')
	      vm.test = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<p>A</p><p>B</p>')
	        vm.test = false
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('')
	          done()
	        })
	      })
	    })
	
	    it('v-if + v-component', function (done) {
	      var attachSpy = jasmine.createSpy()
	      var detachSpy = jasmine.createSpy()
	      var readySpy = jasmine.createSpy()
	      var vm = new Vue({
	        el: el,
	        data: { ok: false },
	        template: '<test v-if="ok"></test>',
	        components: {
	          test: {
	            data: function () {
	              return { a: 123 }
	            },
	            template: '{{a}}',
	            ready: readySpy,
	            attached: attachSpy,
	            detached: detachSpy
	          }
	        }
	      })
	      vm.$appendTo(document.body)
	      expect(el.innerHTML).toBe('')
	      expect(vm.$children.length).toBe(0)
	      vm.ok = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<test>123</test>')
	        expect(vm.$children.length).toBe(1)
	        expect(attachSpy).toHaveBeenCalled()
	        expect(readySpy).toHaveBeenCalled()
	        vm.ok = false
	        _.nextTick(function () {
	          expect(detachSpy).toHaveBeenCalled()
	          expect(el.innerHTML).toBe('')
	          expect(vm.$children.length).toBe(0)
	          vm.$remove()
	          done()
	        })
	      })
	    })
	
	    it('v-if + dynamic component', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          ok: false,
	          view: 'view-a'
	        },
	        template: '<component is="{{view}}" v-if="ok"></component>',
	        components: {
	          'view-a': {
	            template: 'AAA'
	          },
	          'view-b': {
	            template: 'BBB'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('')
	      expect(vm.$children.length).toBe(0)
	      // toggle if with lazy instantiation
	      vm.ok = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<component>AAA</component>')
	        expect(vm.$children.length).toBe(1)
	        // switch view when if=true
	        vm.view = 'view-b'
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('<component>BBB</component>')
	          expect(vm.$children.length).toBe(1)
	          // toggle if when already instantiated
	          vm.ok = false
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe('')
	            expect(vm.$children.length).toBe(0)
	            // toggle if and switch view at the same time
	            vm.view = 'view-a'
	            vm.ok = true
	            _.nextTick(function () {
	              expect(el.innerHTML).toBe('<component>AAA</component>')
	              expect(vm.$children.length).toBe(1)
	              done()
	            })
	          })
	        })
	      })
	    })
	
	    it('v-if with different truthy values', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          a: 1
	        },
	        template: '<div v-if="a">{{a}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>1</div>')
	      vm.a = 2
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>2</div>')
	        done()
	      })
	    })
	
	    it('invalid warn', function () {
	      el.setAttribute('v-if', 'test')
	      new Vue({
	        el: el
	      })
	      expect(hasWarned(_, 'cannot be used on an instance root element')).toBe(true)
	    })
	
	    it('call attach/detach for transcluded components', function (done) {
	      document.body.appendChild(el)
	      var attachSpy = jasmine.createSpy('attached')
	      var detachSpy = jasmine.createSpy('detached')
	      var vm = new Vue({
	        el: el,
	        data: { show: true },
	        template: '<outer><transcluded></transcluded></outer>',
	        components: {
	          outer: {
	            template: '<div v-if="$parent.show"><content></content></div>'
	          },
	          transcluded: {
	            template: 'transcluded',
	            attached: attachSpy,
	            detached: detachSpy
	          }
	        }
	      })
	      expect(attachSpy).toHaveBeenCalled()
	      vm.show = false
	      _.nextTick(function () {
	        expect(detachSpy).toHaveBeenCalled()
	        document.body.removeChild(el)
	        done()
	      })
	    })
	
	    it('call attach/detach for dynamicly created components inside if block', function (done) {
	      document.body.appendChild(el)
	      var attachSpy = jasmine.createSpy('attached')
	      var detachSpy = jasmine.createSpy('detached')
	      var vm = new Vue({
	        el: el,
	        data: {
	          show: true,
	          list: [{a: 0}]
	        },
	        template:
	          '<outer>' +
	            '<div>' + // an extra layer to test components deep inside the tree
	              '<transcluded v-repeat="list"></transcluded>' +
	            '</div>' +
	          '</outer>',
	        components: {
	          outer: {
	            template:
	              '<div v-if="$parent.show">' +
	                '<content></content>' +
	              '</div>' +
	              // this is to test that compnents that are not in the if block
	              // should not fire attach/detach when v-if toggles
	              '<transcluded></transcluded>'
	          },
	          transcluded: {
	            template: '{{a}}',
	            attached: attachSpy,
	            detached: detachSpy
	          }
	        }
	      })
	      assertMarkup()
	      expect(attachSpy.calls.count()).toBe(2)
	      vm.show = false
	      _.nextTick(function () {
	        assertMarkup()
	        expect(detachSpy.calls.count()).toBe(1)
	        vm.list.push({a: 1})
	        vm.show = true
	        _.nextTick(function () {
	          assertMarkup()
	          expect(attachSpy.calls.count()).toBe(2 + 2)
	          vm.list.push({a: 2})
	          vm.show = false
	          _.nextTick(function () {
	            assertMarkup()
	            expect(attachSpy.calls.count()).toBe(2 + 2 + 1)
	            expect(detachSpy.calls.count()).toBe(1 + 3)
	            document.body.removeChild(el)
	            done()
	          })
	        })
	      })
	
	      function assertMarkup () {
	        var showBlock = vm.show
	          ? '<div><div>' +
	              vm.list.map(function (o) {
	                return '<transcluded>' + o.a + '</transcluded>'
	              }).join('') +
	            '</div></div>'
	          : ''
	        var markup =
	          '<outer>' +
	              showBlock +
	            '<transcluded></transcluded>' +
	          '</outer>'
	        expect(el.innerHTML).toBe(markup)
	      }
	    })
	
	    // #893 in IE textNodes do not have `contains` method
	    it('call attach/detach: comparing textNodes in IE', function (done) {
	      document.body.appendChild(el)
	      var attachSpy = jasmine.createSpy('attached')
	      var detachSpy = jasmine.createSpy('detached')
	      var vm = new Vue({
	        el: el,
	        data: {
	          show: true
	        },
	        template: '<template v-if="show"><test></test></template>',
	        components: {
	          test: {
	            template: 'hi',
	            replace: true,
	            attached: attachSpy,
	            detached: detachSpy
	          }
	        }
	      })
	      assertMarkup()
	      assertCalls(1, 0)
	      vm.show = false
	      _.nextTick(function () {
	        assertMarkup()
	        assertCalls(1, 1)
	        vm.show = true
	        _.nextTick(function () {
	          assertMarkup()
	          assertCalls(2, 1)
	          vm.show = false
	          _.nextTick(function () {
	            assertMarkup()
	            assertCalls(2, 2)
	            document.body.removeChild(el)
	            done()
	          })
	        })
	      })
	
	      function assertMarkup () {
	        expect(el.innerHTML).toBe(vm.show ? 'hi' : '')
	      }
	
	      function assertCalls (attach, detach) {
	        expect(attachSpy.calls.count()).toBe(attach)
	        expect(detachSpy.calls.count()).toBe(detach)
	      }
	    })
	
	    // #1097 v-if components not having correct parent
	    it('compile with correct transclusion host', function () {
	      var parentA
	      var parentB
	      new Vue({
	        el: el,
	        data: {
	          show: true
	        },
	        template: '<parent><child v-if="show"></child></parent>',
	        components: {
	          parent: {
	            template: '<content></content>',
	            created: function () {
	              parentA = this
	            }
	          },
	          child: {
	            created: function () {
	              parentB = this.$parent
	            }
	          }
	        }
	      })
	      expect(parentA).toBeTruthy()
	      expect(parentA).toBe(parentB)
	    })
	
	  })
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	// unset jQuery to bypass jQuery check for normal test cases
	jQuery = null
	
	/**
	 * Mock event helper
	 */
	
	function trigger (target, event, process) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(event, true, true)
	  if (process) process(e)
	  target.dispatchEvent(e)
	}
	
	/**
	 * setting <select>'s value in IE9 doesn't work
	 * we have to manually loop through the options
	 */
	
	function updateSelect (el, value) {
	  var options = el.options
	  var i = options.length
	  while (i--) {
	    /* eslint-disable eqeqeq */
	    if (options[i].value == value) {
	    /* eslint-enable eqeqeq */
	      options[i].selected = true
	      break
	    }
	  }
	}
	
	if (_.inBrowser) {
	  describe('v-model', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      el.style.display = 'none'
	      document.body.appendChild(el)
	      spyOn(_, 'warn')
	    })
	
	    it('radio buttons', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'a'
	        },
	        template:
	          '<input type="radio" value="a" v-model="test" name="test">' +
	          '<input type="radio" value="b" v-model="test" name="test">'
	      })
	      expect(el.childNodes[0].checked).toBe(true)
	      expect(el.childNodes[1].checked).toBe(false)
	      vm.test = 'b'
	      _.nextTick(function () {
	        expect(el.childNodes[0].checked).toBe(false)
	        expect(el.childNodes[1].checked).toBe(true)
	        el.childNodes[0].click()
	        expect(el.childNodes[0].checked).toBe(true)
	        expect(el.childNodes[1].checked).toBe(false)
	        expect(vm.test).toBe('a')
	        vm._directives[1].unbind()
	        el.childNodes[1].click()
	        expect(vm.test).toBe('a')
	        done()
	      })
	    })
	
	    it('radio default value', function () {
	      var vm = new Vue({
	        el: el,
	        data: {},
	        template: '<input type="radio" checked value="a" v-model="test">'
	      })
	      expect(vm.test).toBe('a')
	    })
	
	    it('checkbox', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: true
	        },
	        template: '<input type="checkbox" v-model="test">'
	      })
	      expect(el.firstChild.checked).toBe(true)
	      vm.test = false
	      _.nextTick(function () {
	        expect(el.firstChild.checked).toBe(false)
	        expect(vm.test).toBe(false)
	        el.firstChild.click()
	        expect(el.firstChild.checked).toBe(true)
	        expect(vm.test).toBe(true)
	        vm._directives[0].unbind()
	        el.firstChild.click()
	        expect(el.firstChild.checked).toBe(false)
	        expect(vm.test).toBe(true)
	        done()
	      })
	    })
	
	    it('checkbox default value', function () {
	      var vm = new Vue({
	        el: el,
	        data: {},
	        template: '<input type="checkbox" checked v-model="test">'
	      })
	      expect(vm.test).toBe(true)
	    })
	
	    it('select', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        template:
	          '<select v-model="test">' +
	            '<option>a</option>' +
	            '<option>b</option>' +
	            '<option>c</option>' +
	          '</select>'
	      })
	      expect(vm.test).toBe('b')
	      expect(el.firstChild.value).toBe('b')
	      expect(el.firstChild.childNodes[1].selected).toBe(true)
	      vm.test = 'c'
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('c')
	        expect(el.firstChild.childNodes[2].selected).toBe(true)
	        updateSelect(el.firstChild, 'a')
	        trigger(el.firstChild, 'change')
	        expect(vm.test).toBe('a')
	        done()
	      })
	    })
	
	    it('select persist non-selected on append', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: null
	        },
	        replace: true,
	        template:
	          '<select v-model="test">' +
	            '<option>a</option>' +
	            '<option>b</option>' +
	            '<option>c</option>' +
	          '</select>'
	      })
	      expect(vm.$el.value).toBe('')
	      expect(vm.$el.selectedIndex).toBe(-1)
	      vm.$remove()
	      vm.$appendTo(document.body)
	      expect(vm.$el.value).toBe('')
	      expect(vm.$el.selectedIndex).toBe(-1)
	    })
	
	    it('select template default value', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'a'
	        },
	        template:
	          '<select v-model="test">' +
	            '<option>a</option>' +
	            '<option selected>b</option>' +
	          '</select>'
	      })
	      expect(vm.test).toBe('b')
	      expect(el.firstChild.value).toBe('b')
	      expect(el.firstChild.childNodes[1].selected).toBe(true)
	    })
	
	    it('select + empty default value', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<select v-model="test"><option value="" selected>null</option><<option value="1">1</option></select>'
	      })
	      expect(vm.test).toBe('')
	      trigger(vm.$el.firstChild, 'change')
	      expect(vm.test).toBe('')
	    })
	
	    it('select + multiple', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: [2] // test number soft equal
	        },
	        template:
	          '<select v-model="test" multiple>' +
	            '<option>1</option>' +
	            '<option>2</option>' +
	            '<option>3</option>' +
	          '</select>'
	      })
	      var opts = el.firstChild.options
	      expect(opts[0].selected).toBe(false)
	      expect(opts[1].selected).toBe(true)
	      expect(opts[2].selected).toBe(false)
	      vm.test = [1, '3'] // mix of number/string
	      _.nextTick(function () {
	        expect(opts[0].selected).toBe(true)
	        expect(opts[1].selected).toBe(false)
	        expect(opts[2].selected).toBe(true)
	        opts[0].selected = false
	        opts[1].selected = true
	        trigger(el.firstChild, 'change')
	        expect(vm.test[0]).toBe('2')
	        expect(vm.test[1]).toBe('3')
	        done()
	      })
	    })
	
	    it('select + multiple default value', function () {
	      var vm = new Vue({
	        el: el,
	        data: {},
	        template:
	          '<select v-model="test" multiple>' +
	            '<option>a</option>' +
	            '<option selected>b</option>' +
	            '<option selected>c</option>' +
	          '</select>'
	      })
	      expect(vm.test[0]).toBe('b')
	      expect(vm.test[1]).toBe('c')
	    })
	
	    it('select + options', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b',
	          opts: ['a', 'b', 'c']
	        },
	        template: '<select v-model="test" options="opts"></select>'
	      })
	      var opts = el.firstChild.options
	      expect(opts.length).toBe(3)
	      expect(opts[0].selected).toBe(false)
	      expect(opts[1].selected).toBe(true)
	      expect(opts[2].selected).toBe(false)
	      vm.opts = ['b', 'c']
	      _.nextTick(function () {
	        expect(opts.length).toBe(2)
	        expect(opts[0].selected).toBe(true)
	        expect(opts[1].selected).toBe(false)
	        // should teardown option watcher when unbind
	        expect(vm._watchers.length).toBe(2)
	        vm._directives[0]._teardown()
	        expect(vm._watchers.length).toBe(0)
	        done()
	      })
	    })
	
	    it('select + options + text', function () {
	      new Vue({
	        el: el,
	        data: {
	          test: 'b',
	          opts: [
	            { text: 'Select an option', value: null, disabled: true },
	            { text: 'A', value: 'a' },
	            { text: 'B', value: 'b' }
	          ]
	        },
	        template: '<select v-model="test" options="opts"></select>'
	      })
	      expect(el.firstChild.innerHTML).toBe(
	        '<option disabled="">Select an option</option>' +
	        '<option value="a">A</option>' +
	        '<option value="b">B</option>'
	      )
	      var opts = el.firstChild.options
	      expect(opts[0].disabled).toBe(true)
	      expect(opts[0].selected).toBe(false)
	      expect(opts[1].selected).toBe(false)
	      expect(opts[2].selected).toBe(true)
	    })
	
	    it('select + options + optgroup', function () {
	      new Vue({
	        el: el,
	        data: {
	          test: 'b',
	          opts: [
	            { label: 'A', options: ['a', 'b'] },
	            { label: 'B', options: ['c'] }
	          ]
	        },
	        template: '<select v-model="test" options="opts"></select>'
	      })
	      expect(el.firstChild.innerHTML).toBe(
	        '<optgroup label="A">' +
	          '<option value="a">a</option><option value="b">b</option>' +
	        '</optgroup>' +
	        '<optgroup label="B">' +
	          '<option value="c">c</option>' +
	        '</optgroup>'
	      )
	      var opts = el.firstChild.options
	      expect(opts[0].selected).toBe(false)
	      expect(opts[1].selected).toBe(true)
	      expect(opts[2].selected).toBe(false)
	    })
	
	    it('select + number', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: '1'
	        },
	        template: '<select v-model="test" number><option value="1">1</option></select>'
	      })
	      expect(vm.test).toBe('1')
	      trigger(vm.$el.firstChild, 'change')
	      expect(vm.test).toBe(1)
	    })
	
	    it('select + number + multiple', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: []
	        },
	        template: '<select v-model="test" multiple number><option>1</option><option>2</option></select>'
	      })
	      ;[].forEach.call(el.querySelectorAll('option'), function (o) {
	        o.selected = true
	      })
	      trigger(el.firstChild, 'change')
	      expect(vm.test[0]).toBe(1)
	      expect(vm.test[1]).toBe(2)
	    })
	
	    it('select + number initial value', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: '1'
	        },
	        template: '<select v-model="test" number><option value="1" selected>1</option></select>'
	      })
	      expect(vm.test).toBe(1)
	    })
	
	    it('select + options + filter', function () {
	      new Vue({
	        el: el,
	        data: {
	          opts: ['a', 'b']
	        },
	        filters: {
	          aFilter: function (opts) {
	            return opts.map(function (val, i) {
	              return val + i
	            })
	          }
	        },
	        template: '<select v-model="test" options="opts | aFilter"></select>'
	      })
	      expect(el.firstChild.innerHTML).toBe(
	          '<option value="a0">a0</option>' +
	          '<option value="b1">b1</option>'
	      )
	    })
	
	    it('text', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        template: '<input v-model="test">'
	      })
	      expect(el.firstChild.value).toBe('b')
	      vm.test = 'a'
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('a')
	        el.firstChild.value = 'c'
	        trigger(el.firstChild, 'input')
	        expect(vm.test).toBe('c')
	        vm._directives[0].unbind()
	        el.firstChild.value = 'd'
	        trigger(el.firstChild, 'input')
	        expect(vm.test).toBe('c')
	        done()
	      })
	    })
	
	    it('text default value', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        template: '<input v-model="test | test" value="a">',
	        filters: {
	          test: {
	            read: function (v) {
	              return v.slice(0, -1)
	            },
	            write: function (v) {
	              return v + 'c'
	            }
	          }
	        }
	      })
	      expect(vm.test).toBe('ac')
	      expect(el.firstChild.value).toBe('a')
	    })
	
	    it('text lazy', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        template: '<input v-model="test" lazy>'
	      })
	      expect(el.firstChild.value).toBe('b')
	      expect(vm.test).toBe('b')
	      el.firstChild.value = 'c'
	      trigger(el.firstChild, 'input')
	      expect(vm.test).toBe('b')
	      trigger(el.firstChild, 'change')
	      expect(vm.test).toBe('c')
	    })
	
	    it('text with filters', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        filters: {
	          test: {
	            write: function (val) {
	              return val.toLowerCase()
	            }
	          }
	        },
	        template: '<input v-model="test | uppercase | test">'
	      })
	      expect(el.firstChild.value).toBe('B')
	      el.firstChild.value = 'cc'
	      trigger(el.firstChild, 'input')
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('CC')
	        expect(vm.test).toBe('cc')
	        done()
	      })
	    })
	
	    // when there's only write filter, should allow
	    // out of sync between the input field and actual data
	    it('text with only write filter', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        filters: {
	          test: {
	            write: function (val) {
	              return val.toUpperCase()
	            }
	          }
	        },
	        template: '<input v-model="test | test">'
	      })
	      el.firstChild.value = 'cc'
	      trigger(el.firstChild, 'input')
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('cc')
	        expect(vm.test).toBe('CC')
	        done()
	      })
	    })
	
	    it('number', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 1
	        },
	        template: '<input v-model="test" value="2" number>'
	      })
	      expect(vm.test).toBe(2)
	      el.firstChild.value = 3
	      trigger(el.firstChild, 'input')
	      expect(vm.test).toBe(3)
	    })
	
	    it('IE9 cut and delete', function (done) {
	      var ie9 = _.isIE9
	      _.isIE9 = true
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'aaa'
	        },
	        template: '<input v-model="test">'
	      })
	      var input = el.firstChild
	      input.value = 'aa'
	      trigger(input, 'cut')
	      _.nextTick(function () {
	        expect(vm.test).toBe('aa')
	        input.value = 'a'
	        trigger(input, 'keyup', function (e) {
	          e.keyCode = 8
	        })
	        expect(vm.test).toBe('a')
	        // teardown
	        vm._directives[0].unbind()
	        input.value = 'bbb'
	        trigger(input, 'keyup', function (e) {
	          e.keyCode = 8
	        })
	        expect(vm.test).toBe('a')
	        _.isIE9 = ie9
	        done()
	      })
	    })
	
	    if (!_.isAndroid) {
	      it('text + compositionevents', function (done) {
	        var vm = new Vue({
	          el: el,
	          data: {
	            test: 'aaa',
	            test2: 'bbb'
	          },
	          template: '<input v-model="test"><input v-model="test2 | uppercase">'
	        })
	        var input = el.firstChild
	        var input2 = el.childNodes[1]
	        trigger(input, 'compositionstart')
	        trigger(input2, 'compositionstart')
	        input.value = input2.value = 'ccc'
	        // input before composition unlock should not call set
	        trigger(input, 'input')
	        trigger(input2, 'input')
	        expect(vm.test).toBe('aaa')
	        expect(vm.test2).toBe('bbb')
	        // after composition unlock it should work
	        trigger(input, 'compositionend')
	        trigger(input2, 'compositionend')
	        trigger(input, 'input')
	        trigger(input2, 'input')
	        expect(vm.test).toBe('ccc')
	        expect(vm.test2).toBe('ccc')
	        // IE complains about "unspecified error" when calling
	        // setSelectionRange() on an input element that's been
	        // removed from the DOM, so we wait until the
	        // selection range callback has fired to end this test.
	        _.nextTick(done)
	      })
	    }
	
	    it('textarea', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b',
	          b: 'BB'
	        },
	        template: '<textarea v-model="test">a {{b}} c</textarea>'
	      })
	      expect(vm.test).toBe('a BB c')
	      expect(el.firstChild.value).toBe('a BB c')
	    })
	
	    it('warn invalid tag', function () {
	      new Vue({
	        el: el,
	        template: '<div v-model="test"></div>'
	      })
	      expect(hasWarned(_, 'does not support element type')).toBe(true)
	    })
	
	    it('warn invalid option value', function () {
	      new Vue({
	        el: el,
	        data: { a: 123 },
	        template: '<select v-model="test" options="a"></select>'
	      })
	      expect(hasWarned(_, 'Invalid options value')).toBe(true)
	    })
	
	    it('warn read-only filters', function () {
	      new Vue({
	        el: el,
	        template: '<input v-model="abc | test">',
	        filters: {
	          test: function (v) {
	            return v
	          }
	        }
	      })
	      expect(hasWarned(_, 'read-only filter')).toBe(true)
	    })
	
	    it('support jQuery change event', function (done) {
	      // restore jQuery
	      jQuery = $
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b'
	        },
	        template: '<input v-model="test" lazy>'
	      })
	      expect(el.firstChild.value).toBe('b')
	      vm.test = 'a'
	      _.nextTick(function () {
	        expect(el.firstChild.value).toBe('a')
	        el.firstChild.value = 'c'
	        jQuery(el.firstChild).trigger('change')
	        expect(vm.test).toBe('c')
	        vm._directives[0].unbind()
	        el.firstChild.value = 'd'
	        jQuery(el.firstChild).trigger('change')
	        expect(vm.test).toBe('c')
	        // unset jQuery
	        jQuery = null
	        done()
	      })
	    })
	
	    it('support debounce', function (done) {
	      var spy = jasmine.createSpy()
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'a'
	        },
	        watch: {
	          test: spy
	        },
	        template: '<input v-model="test" debounce="100">'
	      })
	      el.firstChild.value = 'b'
	      trigger(el.firstChild, 'input')
	      setTimeout(function () {
	        el.firstChild.value = 'c'
	        trigger(el.firstChild, 'input')
	      }, 10)
	      setTimeout(function () {
	        el.firstChild.value = 'd'
	        trigger(el.firstChild, 'input')
	      }, 20)
	      setTimeout(function () {
	        expect(spy.calls.count()).toBe(0)
	        expect(vm.test).toBe('a')
	      }, 30)
	      setTimeout(function () {
	        expect(spy.calls.count()).toBe(1)
	        expect(vm.test).toBe('d')
	        done()
	      }, 200)
	    })
	
	  })
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	function trigger (target, event, process) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(event, true, true)
	  if (process) process(e)
	  target.dispatchEvent(e)
	  return e
	}
	
	if (_.inBrowser) {
	  describe('v-on', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })
	
	    it('methods', function () {
	      var spy = jasmine.createSpy()
	      var vm = new Vue({
	        el: el,
	        template: '<a v-on="click:test"></a>',
	        data: {a: 1},
	        methods: {
	          test: spy
	        }
	      })
	      var a = el.firstChild
	      trigger(a, 'click')
	      expect(spy.calls.count()).toBe(1)
	      vm.$destroy()
	      trigger(a, 'click')
	      expect(spy.calls.count()).toBe(1)
	    })
	
	    it('inline expression', function (done) {
	      new Vue({
	        el: el,
	        template: '<a v-on="click:a++">{{a}}</a>',
	        data: {a: 1}
	      })
	      var a = el.firstChild
	      trigger(a, 'click')
	      _.nextTick(function () {
	        expect(a.textContent).toBe('2')
	        done()
	      })
	    })
	
	    it('with key filter', function (done) {
	      new Vue({
	        el: el,
	        template: '<a v-on="keyup:test | key \'enter\'">{{a}}</a>',
	        data: {a: 1},
	        methods: {
	          test: function () {
	            this.a++
	          }
	        }
	      })
	      var a = el.firstChild
	      trigger(a, 'keyup', function (e) {
	        e.keyCode = 13
	      })
	      _.nextTick(function () {
	        expect(a.textContent).toBe('2')
	        done()
	      })
	    })
	
	    it('warn non-function values', function () {
	      new Vue({
	        el: el,
	        data: { test: 123 },
	        template: '<a v-on="keyup:test"></a>'
	      })
	      expect(hasWarned(_, 'expects a function value')).toBe(true)
	    })
	
	    it('iframe', function () {
	      // iframes only gets contentWindow when inserted
	      // into the document
	      document.body.appendChild(el)
	      var spy = jasmine.createSpy()
	      var vm = new Vue({
	        el: el,
	        template: '<iframe v-on="click:test"></iframe>',
	        methods: {
	          test: spy
	        }
	      })
	      var iframeDoc = el.firstChild.contentDocument
	      trigger(iframeDoc, 'click')
	      expect(spy.calls.count()).toBe(1)
	      vm.$destroy()
	      trigger(iframeDoc, 'click')
	      expect(spy.calls.count()).toBe(1)
	      document.body.removeChild(el)
	    })
	
	    it('passing $event', function () {
	      var test = jasmine.createSpy()
	      new Vue({
	        el: el,
	        template: '<a v-on="click:test($event)"></a>',
	        methods: {
	          test: test
	        }
	      })
	      var e = trigger(el.firstChild, 'click')
	      expect(test).toHaveBeenCalledWith(e)
	    })
	
	    it('passing $event on a nested instance', function () {
	      var test = jasmine.createSpy()
	      var parent = new Vue({
	        methods: {
	          test: test
	        }
	      })
	      parent.$addChild({
	        el: el,
	        inherit: true,
	        template: '<a v-on="click:test($event)"></a>'
	      })
	      var e = trigger(el.firstChild, 'click')
	      expect(test).toHaveBeenCalledWith(e)
	    })
	
	  })
	}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-pre', function () {
	
	    it('should work', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        template: '<div v-pre>{{a}}</div>',
	        data: {
	          a: 123
	        }
	      })
	      expect(vm.$el.firstChild.textContent).toBe('{{a}}')
	    })
	  })
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('prop', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })
	
	    it('one way binding', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          b: 'B'
	        },
	        template: '<test b="{{b}}" v-ref="child"></test>',
	        components: {
	          test: {
	            props: ['b'],
	            template: '{{b}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<test>B</test>')
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<test>BB</test>')
	        vm.$.child.b = 'BBB'
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('<test>BBB</test>')
	          expect(vm.b).toBe('BB')
	          done()
	        })
	      })
	    })
	
	    it('two-way binding', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          b: 'B',
	          test: {
	            a: 'A'
	          }
	        },
	        template: '<test testt="{{@test}}" bb="{{@b}}" a="{{@ test.a }}" v-ref="child"></test>',
	        components: {
	          test: {
	            props: ['testt', 'bb', 'a'],
	            template: '{{testt.a}} {{bb}} {{a}}'
	          }
	        }
	      })
	      expect(el.firstChild.textContent).toBe('A B A')
	      vm.test.a = 'AA'
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('AA BB AA')
	        vm.test = { a: 'AAA' }
	        _.nextTick(function () {
	          expect(el.firstChild.textContent).toBe('AAA BB AAA')
	          vm.$data = {
	            b: 'BBB',
	            test: {
	              a: 'AAAA'
	            }
	          }
	          _.nextTick(function () {
	            expect(el.firstChild.textContent).toBe('AAAA BBB AAAA')
	            // test two-way
	            vm.$.child.bb = 'B'
	            vm.$.child.testt = { a: 'A' }
	            _.nextTick(function () {
	              expect(el.firstChild.textContent).toBe('A B A')
	              expect(vm.test.a).toBe('A')
	              expect(vm.test).toBe(vm.$.child.testt)
	              expect(vm.b).toBe('B')
	              vm.$.child.a = 'Oops'
	              _.nextTick(function () {
	                expect(el.firstChild.textContent).toBe('Oops B Oops')
	                expect(vm.test.a).toBe('Oops')
	                done()
	              })
	            })
	          })
	        })
	      })
	    })
	
	    it('$data as prop', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<test $data="{{ok}}"></test>',
	        data: {
	          ok: {
	            msg: 'hihi'
	          }
	        },
	        components: {
	          test: {
	            props: ['$data'],
	            template: '{{msg}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<test>hihi</test>')
	      vm.ok = { msg: 'what' }
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<test>what</test>')
	        done()
	      })
	    })
	
	    it('explicit one time binding', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          b: 'B'
	        },
	        template: '<test b="{{*b}}" v-ref="child"></test>',
	        components: {
	          test: {
	            props: ['b'],
	            template: '{{b}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<test>B</test>')
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<test>B</test>')
	        done()
	      })
	    })
	
	    it('non-settable parent path', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          b: 'B'
	        },
	        template: '<test b="{{@ b + \'B\' }}" v-ref="child"></test>',
	        components: {
	          test: {
	            props: ['b'],
	            template: '{{b}}'
	          }
	        }
	      })
	      expect(hasWarned(_, 'Cannot bind two-way prop with non-settable parent path')).toBe(true)
	      expect(el.innerHTML).toBe('<test>BB</test>')
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<test>BBB</test>')
	        vm.$.child.b = 'hahaha'
	        _.nextTick(function () {
	          expect(vm.b).toBe('BB')
	          expect(el.innerHTML).toBe('<test>hahaha</test>')
	          done()
	        })
	      })
	    })
	
	    it('warn invalid keys', function () {
	      new Vue({
	        el: el,
	        template: '<test a.b.c="{{test}}"></test>',
	        components: {
	          test: {
	            props: ['a.b.c']
	          }
	        }
	      })
	      expect(hasWarned(_, 'Invalid prop key')).toBe(true)
	    })
	
	    it('warn props with no el option', function () {
	      new Vue({
	        props: ['a']
	      })
	      expect(hasWarned(_, 'Props will not be compiled if no `el`')).toBe(true)
	    })
	
	    it('warn object/array default values', function () {
	      new Vue({
	        el: el,
	        props: {
	          arr: {
	            type: Array,
	            default: []
	          },
	          obj: {
	            type: Object,
	            default: {}
	          }
	        }
	      })
	      expect(hasWarned(_, 'Use a factory function to return the default value')).toBe(true)
	      expect(_.warn.calls.count()).toBe(2)
	    })
	
	    it('teardown', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          a: 'A',
	          b: 'B'
	        },
	        template: '<test aa="{{@a}}" bb="{{b}}"></test>',
	        components: {
	          test: {
	            props: ['aa', 'bb'],
	            template: '{{aa}} {{bb}}'
	          }
	        }
	      })
	      var child = vm.$children[0]
	      expect(el.firstChild.textContent).toBe('A B')
	      child.aa = 'AA'
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('AA BB')
	        expect(vm.a).toBe('AA')
	        // unbind the two props
	        child._directives[0].unbind()
	        child._directives[1].unbind()
	        child.aa = 'AAA'
	        vm.b = 'BBB'
	        _.nextTick(function () {
	          expect(el.firstChild.textContent).toBe('AAA BB')
	          expect(vm.a).toBe('AA')
	          done()
	        })
	      })
	    })
	
	    it('block instance with replace:true', function () {
	      new Vue({
	        el: el,
	        template: '<test b="{{a}}" c="{{d}}"></test>',
	        data: {
	          a: 'AAA',
	          d: 'DDD'
	        },
	        components: {
	          test: {
	            props: ['b', 'c'],
	            template: '<p>{{b}}</p><p>{{c}}</p>',
	            replace: true
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<p>AAA</p><p>DDD</p>')
	    })
	
	    describe('assertions', function () {
	
	      function makeInstance (value, type, validator) {
	        return new Vue({
	          el: document.createElement('div'),
	          template: '<test prop="{{val}}"></test>',
	          data: {
	            val: value
	          },
	          components: {
	            test: {
	              props: [
	                {
	                  name: 'prop',
	                  type: type,
	                  validator: validator
	                }
	              ]
	            }
	          }
	        })
	      }
	
	      it('string', function () {
	        makeInstance('hello', String)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance(123, String)
	        expect(hasWarned(_, 'Expected String')).toBe(true)
	      })
	
	      it('number', function () {
	        makeInstance(123, Number)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance('123', Number)
	        expect(hasWarned(_, 'Expected Number')).toBe(true)
	      })
	
	      it('boolean', function () {
	        makeInstance(true, Boolean)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance('123', Boolean)
	        expect(hasWarned(_, 'Expected Boolean')).toBe(true)
	      })
	
	      it('function', function () {
	        makeInstance(function () {}, Function)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance(123, Function)
	        expect(hasWarned(_, 'Expected Function')).toBe(true)
	      })
	
	      it('object', function () {
	        makeInstance({}, Object)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance([], Object)
	        expect(hasWarned(_, 'Expected Object')).toBe(true)
	      })
	
	      it('array', function () {
	        makeInstance([], Array)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance({}, Array)
	        expect(hasWarned(_, 'Expected Array')).toBe(true)
	      })
	
	      it('custom constructor', function () {
	        function Class () {}
	        makeInstance(new Class(), Class)
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance({}, Class)
	        expect(hasWarned(_, 'Expected custom type')).toBe(true)
	      })
	
	      it('custom validator', function () {
	        makeInstance(123, null, function (v) {
	          return v === 123
	        })
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance(123, null, function (v) {
	          return v === 234
	        })
	        expect(hasWarned(_, 'custom validator check failed')).toBe(true)
	      })
	
	      it('type check + custom validator', function () {
	        makeInstance(123, Number, function (v) {
	          return v === 123
	        })
	        expect(_.warn).not.toHaveBeenCalled()
	        makeInstance(123, Number, function (v) {
	          return v === 234
	        })
	        expect(hasWarned(_, 'custom validator check failed')).toBe(true)
	        makeInstance(123, String, function (v) {
	          return v === 123
	        })
	        expect(hasWarned(_, 'Expected String')).toBe(true)
	      })
	
	      it('required', function () {
	        new Vue({
	          el: document.createElement('div'),
	          template: '<test></test>',
	          components: {
	            test: {
	              props: [
	                {
	                  name: 'prop',
	                  required: true
	                }
	              ]
	            }
	          }
	        })
	        expect(hasWarned(_, 'Missing required prop')).toBe(true)
	      })
	
	    })
	
	    it('alternative syntax', function () {
	      new Vue({
	        el: el,
	        template: '<test b="{{a}}" c="{{d}}"></test>',
	        data: {
	          a: 'AAA',
	          d: 'DDD'
	        },
	        components: {
	          test: {
	            props: {
	              b: String,
	              c: {
	                type: Number
	              },
	              d: {
	                required: true
	              }
	            },
	            template: '<p>{{b}}</p><p>{{c}}</p>'
	          }
	        }
	      })
	      expect(hasWarned(_, 'Missing required prop')).toBe(true)
	      expect(hasWarned(_, 'Expected Number')).toBe(true)
	      expect(el.textContent).toBe('AAA')
	    })
	
	    it('should not overwrite inherit:true properties', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          msg: 'hi!'
	        },
	        template: '<test msg="ho!"></test>',
	        components: {
	          test: {
	            props: ['msg'],
	            inherit: true,
	            template: '{{msg}}'
	          }
	        }
	      })
	      expect(vm.msg).toBe('hi!')
	      expect(el.textContent).toBe('ho!')
	    })
	
	    it('should not overwrite default value for an absent Boolean prop', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            props: {
	              prop: Boolean
	            },
	            data: function () {
	              return {
	                prop: true
	              }
	            },
	            template: '{{prop}}'
	          }
	        }
	      })
	      expect(vm.$children[0].prop).toBe(true)
	      expect(vm.$el.textContent).toBe('true')
	      expect(JSON.stringify(vm.$children[0].$data)).toBe(JSON.stringify({
	        prop: true
	      }))
	    })
	
	    it('should respect default value of a Boolean prop', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            props: {
	              prop: {
	                type: Boolean,
	                default: true
	              }
	            },
	            template: '{{prop}}'
	          }
	        }
	      })
	      expect(vm.$el.textContent).toBe('true')
	    })
	
	    it('should initialize with default value when not provided & has default data', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            props: {
	              prop: {
	                type: String,
	                default: 'hello'
	              }
	            },
	            data: function () {
	              return {
	                other: 'world'
	              }
	            },
	            template: '{{prop}} {{other}}'
	          }
	        }
	      })
	      expect(vm.$el.textContent).toBe('hello world')
	      vm.$children[0].prop = 'bye'
	      _.nextTick(function () {
	        expect(vm.$el.textContent).toBe('bye world')
	        done()
	      })
	    })
	
	    it('should not warn for non-required, absent prop', function () {
	      new Vue({
	        el: el,
	        template: '<test></test>',
	        components: {
	          test: {
	            props: {
	              prop: {
	                type: String
	              }
	            }
	          }
	        }
	      })
	      expect(_.warn).not.toHaveBeenCalled()
	    })
	  })
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-ref', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })
	
	    var components = {
	      test: {
	        id: 'test'
	      },
	      test2: {
	        id: 'test2'
	      }
	    }
	
	    it('normal', function () {
	      var vm = new Vue({
	        el: el,
	        components: components,
	        template: '<test v-ref="test"></test>'
	      })
	      expect(vm.$.test).toBeTruthy()
	      expect(vm.$.test.$options.id).toBe('test')
	    })
	
	    it('with dynamic v-component', function (done) {
	      var vm = new Vue({
	        el: el,
	        components: components,
	        data: { test: 'test' },
	        template: '<component is="{{test}}" v-ref="test"></component>'
	      })
	      expect(vm.$.test.$options.id).toBe('test')
	      vm.test = 'test2'
	      _.nextTick(function () {
	        expect(vm.$.test.$options.id).toBe('test2')
	        vm.test = ''
	        _.nextTick(function () {
	          expect(vm.$.test).toBeNull()
	          done()
	        })
	      })
	    })
	
	    it('should also work in child template', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: { view: 'test1' },
	        template: '<component is="{{view}}"></component>',
	        components: {
	          test1: {
	            id: 'test1',
	            template: '<div v-ref="test1"></div>',
	            replace: true
	          },
	          test2: {
	            id: 'test2',
	            template: '<div v-ref="test2"></div>',
	            replace: true
	          }
	        }
	      })
	      expect(vm.$.test1.$options.id).toBe('test1')
	      vm.view = 'test2'
	      _.nextTick(function () {
	        expect(vm.$.test1).toBeNull()
	        expect(vm.$.test2.$options.id).toBe('test2')
	        done()
	      })
	    })
	
	    it('with v-repeat', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: { items: [1, 2, 3, 4, 5] },
	        template: '<div v-repeat="items" v-ref="test"></div>'
	      })
	      expect(vm.$.test).toBeTruthy()
	      expect(Array.isArray(vm.$.test)).toBe(true)
	      expect(vm.$.test[0].$value).toBe(1)
	      expect(vm.$.test[4].$value).toBe(5)
	      vm.items = []
	      _.nextTick(function () {
	        expect(vm.$.test.length).toBe(0)
	        vm._directives[0].unbind()
	        expect(vm.$.test).toBeNull()
	        done()
	      })
	    })
	
	    it('object v-repeat', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: 1,
	            b: 2
	          }
	        },
	        template: '<div v-repeat="items" v-ref="test"></div>'
	      })
	      expect(vm.$.test).toBeTruthy()
	      expect(_.isPlainObject(vm.$.test)).toBe(true)
	      expect(vm.$.test.a.$value).toBe(1)
	      expect(vm.$.test.b.$value).toBe(2)
	      vm.items = { c: 3 }
	      _.nextTick(function () {
	        expect(Object.keys(vm.$.test).length).toBe(1)
	        expect(vm.$.test.c.$value).toBe(3)
	        vm._directives[0].unbind()
	        expect(vm.$.test).toBeNull()
	        done()
	      })
	    })
	
	    it('nested v-repeat', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<c1 v-ref="c1"></c1>',
	        components: {
	          c1: {
	            template: '<div v-repeat="2" v-ref="c2"></div>'
	          }
	        }
	      })
	      expect(vm.$.c1 instanceof Vue).toBe(true)
	      expect(vm.$.c2).toBeUndefined()
	      expect(Array.isArray(vm.$.c1.$.c2)).toBe(true)
	      expect(vm.$.c1.$.c2.length).toBe(2)
	    })
	
	    it('should warn on non-root', function () {
	      new Vue({
	        el: el,
	        template: '<div v-ref="test"></div>'
	      })
	      expect(hasWarned(_, 'should only be used on a component root element')).toBe(true)
	    })
	  })
	}


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	
	if (_.inBrowser) {
	  describe('v-repeat', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })
	
	    it('objects', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template: '<div v-repeat="items">{{$index}} {{a}}</div>'
	      })
	      assertMutations(vm, el, done)
	    })
	
	    it('primitive values', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [2, 1, 2]
	        },
	        template: '<div v-repeat="items">{{$index}} {{$value}}</div>'
	      })
	      assertPrimitiveMutations(vm, el, done)
	    })
	
	    it('objects with identifier', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template: '<div v-repeat="item:items">{{$index}} {{item.a}}</div>'
	      })
	      assertMutations(vm, el, done)
	    })
	
	    it('item in list syntax', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template: '<div v-repeat="item in items">{{$index}} {{item.a}}</div>'
	      })
	      assertMutations(vm, el, done)
	    })
	
	    it('primitive with identifier', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [2, 1, 2]
	        },
	        template: '<div v-repeat="item:items">{{$index}} {{item}}</div>'
	      })
	      assertPrimitiveMutations(vm, el, done)
	    })
	
	    it('repeating an object of objects', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: {a: 1},
	            b: {a: 2}
	          }
	        },
	        template: '<div v-repeat="items">{{$index}} {{$key}} {{a}}</div>'
	      })
	      assertObjectMutations(vm, el, done)
	    })
	
	    it('repeating an object of primitives', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: 1,
	            b: 2
	          }
	        },
	        template: '<div v-repeat="items">{{$index}} {{$key}} {{$value}}</div>'
	      })
	      assertObjectPrimitiveMutations(vm, el, done)
	    })
	
	    it('repeating an object of objects with identifier', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: {a: 1},
	            b: {a: 2}
	          }
	        },
	        template: '<div v-repeat="item:items">{{$index}} {{$key}} {{item.a}}</div>'
	      })
	      assertObjectMutations(vm, el, done)
	    })
	
	    it('repeating an object of primitives with identifier', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: 1,
	            b: 2
	          }
	        },
	        template: '<div v-repeat="item:items">{{$index}} {{$key}} {{item}}</div>'
	      })
	      assertObjectPrimitiveMutations(vm, el, done)
	    })
	
	    it('array of arrays', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [[1, 1], [2, 2], [3, 3]]
	        },
	        template: '<div v-repeat="items">{{$index}} {{$value}}</div>'
	      })
	      var markup = vm.items.map(function (item, i) {
	        return '<div>' + i + ' ' + item.toString() + '</div>'
	      }).join('')
	      expect(el.innerHTML).toBe(markup)
	    })
	
	    it('repeating object with filter', function () {
	      new Vue({
	        el: el,
	        data: {
	          items: {
	            a: { msg: 'aaa' },
	            b: { msg: 'bbb' }
	          }
	        },
	        template: '<div v-repeat="items | filterBy \'aaa\'">{{msg}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>aaa</div>')
	    })
	
	    it('component', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template: '<test v-repeat="items"></test>',
	        components: {
	          test: {
	            template: '<div>{{$index}} {{a}}</div>',
	            replace: true
	          }
	        }
	      })
	      assertMutations(vm, el, done)
	    })
	
	    it('v-component', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template: '<p v-repeat="items" v-component="test"></p>',
	        components: {
	          test: {
	            template: '<div>{{$index}} {{a}}</div>',
	            replace: true
	          }
	        }
	      })
	      assertMutations(vm, el, done)
	    })
	
	    it('component with inline-template', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template:
	          '<test v-repeat="items" inline-template>' +
	            '{{$index}} {{a}}' +
	          '</test>',
	        components: {
	          test: {}
	        }
	      })
	      assertMutations(vm, el, done)
	    })
	
	    it('component with primitive values', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [2, 1, 2]
	        },
	        template: '<test v-repeat="items"></test>',
	        components: {
	          test: {
	            template: '<div>{{$index}} {{$value}}</div>',
	            replace: true
	          }
	        }
	      })
	      assertPrimitiveMutations(vm, el, done)
	    })
	
	    it('component with object of objects', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: {a: 1},
	            b: {a: 2}
	          }
	        },
	        template: '<test v-repeat="items"></test>',
	        components: {
	          test: {
	            template: '<div>{{$index}} {{$key}} {{a}}</div>',
	            replace: true
	          }
	        }
	      })
	      assertObjectMutations(vm, el, done)
	    })
	
	    it('nested repeats', function () {
	      new Vue({
	        el: el,
	        data: {
	          items: [
	            { items: [{a: 1}, {a: 2}], a: 1 },
	            { items: [{a: 3}, {a: 4}], a: 2 }
	          ]
	        },
	        template: '<div v-repeat="items">' +
	            '<p v-repeat="items">{{$index}} {{a}} {{$parent.$index}} {{$parent.a}}</p>' +
	          '</div>'
	      })
	      expect(el.innerHTML).toBe(
	        '<div><p>0 1 0 1</p><p>1 2 0 1</p></div>' +
	        '<div><p>0 3 1 2</p><p>1 4 1 2</p></div>'
	      )
	    })
	
	    it('nested repeats on object', function () {
	      new Vue({
	        el: el,
	        data: {
	          listHash: {
	            listA: [{a: 1}, {a: 2}],
	            listB: [{a: 1}, {a: 2}]
	          }
	        },
	        template: '<div v-repeat="listHash">{{$key}}' +
	            '<p v-repeat="$value">{{a}}</p>' +
	            '</div>'
	      })
	      function output (key) {
	        var key1 = key === 'listA' ? 'listB' : 'listA'
	        return '<div>' + key + '<p>1</p><p>2</p></div>' +
	               '<div>' + key1 + '<p>1</p><p>2</p></div>'
	      }
	      expect(el.innerHTML === output('listA') || el.innerHTML === output('listB')).toBeTruthy()
	    })
	
	    it('dynamic component type based on instance data', function () {
	      new Vue({
	        el: el,
	        template: '<component v-repeat="list" is="view-{{type}}"></component>',
	        data: {
	          list: [
	            { type: 'a' },
	            { type: 'b' },
	            { type: 'c' }
	          ]
	        },
	        components: {
	          'view-a': {
	            template: 'AAA'
	          },
	          'view-b': {
	            template: 'BBB'
	          },
	          'view-c': {
	            template: 'CCC'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<component>AAA</component><component>BBB</component><component>CCC</component>')
	      // #458 meta properties
	      new Vue({
	        el: el,
	        template: '<component v-repeat="list" is="view-{{$value}}"></component>',
	        data: {
	          list: ['a', 'b', 'c']
	        },
	        components: {
	          'view-a': {
	            template: 'AAA'
	          },
	          'view-b': {
	            template: 'BBB'
	          },
	          'view-c': {
	            template: 'CCC'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<component>AAA</component><component>BBB</component><component>CCC</component>')
	    })
	
	    it('block repeat', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<template v-repeat="list"><p>{{a}}</p><p>{{a + 1}}</p></template>',
	        data: {
	          list: [
	            { a: 1 },
	            { a: 2 },
	            { a: 3 }
	          ]
	        }
	      })
	      assertMarkup()
	      vm.list.reverse()
	      _.nextTick(function () {
	        assertMarkup()
	        vm.list.splice(1, 1)
	        _.nextTick(function () {
	          assertMarkup()
	          vm.list.splice(1, 0, { a: 2 })
	          _.nextTick(function () {
	            assertMarkup()
	            done()
	          })
	        })
	      })
	
	      function assertMarkup () {
	        var markup = vm.list.map(function (item) {
	          return '<p>' + item.a + '</p><p>' + (item.a + 1) + '</p>'
	        }).join('')
	        expect(el.innerHTML).toBe(markup)
	      }
	    })
	
	    it('block repeat with component', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<template v-repeat="list"><test a="{{a}}"></test></template>',
	        data: {
	          list: [
	            { a: 1 },
	            { a: 2 },
	            { a: 3 }
	          ]
	        },
	        components: {
	          test: {
	            props: ['a'],
	            template: '{{a}}'
	          }
	        }
	      })
	      assertMarkup()
	      vm.list.reverse()
	      _.nextTick(function () {
	        assertMarkup()
	        vm.list.splice(1, 1)
	        _.nextTick(function () {
	          assertMarkup()
	          vm.list.splice(1, 0, { a: 2 })
	          _.nextTick(function () {
	            assertMarkup()
	            done()
	          })
	        })
	      })
	
	      function assertMarkup () {
	        var markup = vm.list.map(function (item) {
	          return '<test>' + item.a + '</test>'
	        }).join('')
	        expect(el.innerHTML).toBe(markup)
	      }
	    })
	
	    it('array filters', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="list | filterBy filterKey | orderBy sortKey -1">{{id}}</div>',
	        data: {
	          filterKey: 'hi!',
	          sortKey: 'id',
	          list: [
	            { id: 1, id2: 4, msg: 'hi!' },
	            { id: 2, id2: 3, msg: 'na' },
	            { id: 3, id2: 2, msg: 'hi!' },
	            { id: 4, id2: 1, msg: 'na' }
	          ]
	        }
	      })
	      assertMarkup()
	
	      go(
	        function () {
	          vm.filterKey = 'na'
	        }, assertMarkup
	      )
	      .then(
	        function () {
	          vm.sortKey = 'id2'
	        }, assertMarkup
	      )
	      .then(
	        function () {
	          vm.list[0].id2 = 0
	        }, assertMarkup
	      )
	      .then(
	        function () {
	          vm.list.push({ id: 0, id2: 4, msg: 'na' })
	        }, assertMarkup
	      )
	      .then(
	        function () {
	          vm.list = [
	            { id: 33, id2: 4, msg: 'hi!' },
	            { id: 44, id2: 3, msg: 'na' }
	          ]
	        }, assertMarkup
	      )
	      .run(done)
	
	      function assertMarkup () {
	        var markup = vm.list
	          .filter(function (item) {
	            return item.msg === vm.filterKey
	          })
	          .sort(function (a, b) {
	            return a[vm.sortKey] > b[vm.sortKey] ? -1 : 1
	          })
	          .map(function (item) {
	            return '<div>' + item.id + '</div>'
	          }).join('')
	        expect(el.innerHTML).toBe(markup)
	      }
	    })
	
	    it('orderBy supporting $key for object repeaters', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="obj | orderBy sortKey">{{$value}}</div>',
	        data: {
	          sortKey: '$key',
	          obj: {
	            c: 1,
	            a: 3,
	            b: 2
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div>3</div><div>2</div><div>1</div>')
	      vm.sortKey = '$value'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div>')
	        done()
	      })
	    })
	
	    it('orderBy supporting $value for primitive arrays', function () {
	      new Vue({
	        el: el,
	        template: '<div v-repeat="list | orderBy \'$value\'">{{$value}}</div>',
	        data: {
	          list: [3, 2, 1]
	        }
	      })
	      expect(el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div>')
	    })
	
	    it('track by id', function (done) {
	
	      assertTrackBy('<test v-repeat="list" track-by="id"></test>', '{{msg}}', function () {
	        assertTrackBy('<test v-repeat="item:list" track-by="id"></test>', '{{item.msg}}', done)
	      })
	
	      function assertTrackBy (template, componentTemplate, next) {
	        var vm = new Vue({
	          el: el,
	          template: template,
	          data: {
	            list: [
	              { id: 1, msg: 'hi' },
	              { id: 2, msg: 'ha' },
	              { id: 3, msg: 'ho' }
	            ]
	          },
	          components: {
	            test: {
	              template: componentTemplate
	            }
	          }
	        })
	        assertMarkup()
	        var oldVms = vm.$children.slice()
	        // swap the data with different objects, but with
	        // the same ID!
	        vm.list = [
	          { id: 1, msg: 'wa' },
	          { id: 2, msg: 'wo' }
	        ]
	        _.nextTick(function () {
	          assertMarkup()
	          // should reuse old vms!
	          var i = 2
	          while (i--) {
	            expect(vm.$children[i]).toBe(oldVms[i])
	          }
	          next()
	        })
	
	        function assertMarkup () {
	          var markup = vm.list.map(function (item) {
	            return '<test>' + item.msg + '</test>'
	          }).join('')
	          expect(el.innerHTML).toBe(markup)
	        }
	      }
	    })
	
	    it('track by $index', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a: 1}, {a: 2}]
	        },
	        template: '<div v-repeat="items" track-by="$index">{{$index}} {{a}}</div>'
	      })
	
	      assertMarkup()
	      var el1 = el.children[0]
	      var el2 = el.children[1]
	      vm.items = [{a: 3}, {a: 2}, {a: 1}]
	      _.nextTick(function () {
	        assertMarkup()
	        // should mutate the DOM in-place
	        expect(el.children[0]).toBe(el1)
	        expect(el.children[1]).toBe(el2)
	        done()
	      })
	
	      function assertMarkup () {
	        expect(el.innerHTML).toBe(vm.items.map(function (item, i) {
	          return '<div>' + i + ' ' + item.a + '</div>'
	        }).join(''))
	      }
	    })
	
	    it('warn duplicate objects', function () {
	      var obj = {}
	      new Vue({
	        el: el,
	        template: '<div v-repeat="items"></div>',
	        data: {
	          items: [obj, obj]
	        }
	      })
	      expect(hasWarned(_, 'Duplicate objects')).toBe(true)
	    })
	
	    it('warn duplicate trackby id', function () {
	      new Vue({
	        el: el,
	        template: '<div v-repeat="items" track-by="id"></div>',
	        data: {
	          items: [{id: 1}, {id: 1}]
	        }
	      })
	      expect(hasWarned(_, 'Duplicate track-by key')).toBe(true)
	    })
	
	    it('warn v-if', function () {
	      new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-if="aaa"></div>',
	        data: {
	          items: []
	        }
	      })
	      expect(hasWarned(_, 'Don\'t use v-if')).toBe(true)
	    })
	
	    it('repeat number', function () {
	      new Vue({
	        el: el,
	        template: '<div v-repeat="3">{{$index}} {{$value}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>0 0</div><div>1 1</div><div>2 2</div>')
	    })
	
	    it('repeat string', function () {
	      new Vue({
	        el: el,
	        template: '<div v-repeat="\'vue\'">{{$index}} {{$value}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>0 v</div><div>1 u</div><div>2 e</div>')
	    })
	
	    it('teardown', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items"></div>',
	        data: {
	          items: [{a: 1}, {a: 2}]
	        }
	      })
	      vm._directives[0].unbind()
	      expect(vm.$children.length).toBe(0)
	    })
	
	    it('with transition', function (done) {
	      document.body.appendChild(el)
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-transition="test">{{a}}</div>',
	        data: {
	          items: [{a: 1}, {a: 2}, {a: 3}]
	        },
	        transitions: {
	          test: {
	            leave: function (el, done) {
	              setTimeout(done, 0)
	            }
	          }
	        }
	      })
	      vm.items.splice(1, 1, {a: 4})
	      setTimeout(function () {
	        expect(el.innerHTML).toBe(
	          '<div class="test-transition">1</div>' +
	          '<div class="test-transition">4</div>' +
	          '<div class="test-transition">3</div>'
	        )
	        document.body.removeChild(el)
	        done()
	      }, 100)
	    })
	
	    it('sync $value/alias changes back to original array/object', function (done) {
	      var vm = new Vue({
	        el: el,
	        template:
	          '<div v-repeat="items">{{$value}}</div>' +
	          '<div v-repeat="obj">{{$value}}</div>' +
	          '<div v-repeat="val:vals">{{val}}</div>',
	        data: {
	          items: ['a', true],
	          obj: { foo: 'a', bar: 'b' },
	          vals: [1, null]
	        }
	      })
	      vm.$children[0].$value = 'c'
	      vm.$children[1].$value = 'd'
	      var key = vm.$children[2].$key
	      vm.$children[2].$value = 'e'
	      vm.$children[4].val = 3
	      vm.$children[5].val = 4
	      _.nextTick(function () {
	        expect(vm.items[0]).toBe('c')
	        expect(vm.items[1]).toBe('d')
	        expect(vm.obj[key]).toBe('e')
	        expect(vm.vals[0]).toBe(3)
	        expect(vm.vals[1]).toBe(4)
	        done()
	      })
	    })
	
	    it('warn $value sync with filters', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items | orderBy \'$value\'"></div>',
	        data: {
	          items: ['a', 'b']
	        }
	      })
	      vm.$children[0].$value = 'c'
	      _.nextTick(function () {
	        expect(hasWarned(_, 'use an Array of Objects instead')).toBe(true)
	        done()
	      })
	    })
	
	    it('nested track by', function (done) {
	      assertTrackBy('<div v-repeat="list" track-by="id">{{msg}}<div v-repeat="list" track-by="id">{{msg}}</div></div>', function () {
	        assertTrackBy('<div v-repeat="list" track-by="id">{{msg}}<div v-repeat="list" track-by="id">{{msg}}</div></div>', done)
	      })
	
	      function assertTrackBy (template, next) {
	        var vm = new Vue({
	          el: el,
	          data: {
	            list: [
	              { id: 1, msg: 'hi', list: [
	                { id: 1, msg: 'hi foo' }
	              ] },
	              { id: 2, msg: 'ha', list: [] },
	              { id: 3, msg: 'ho', list: [] }
	            ]
	          },
	          template: template
	        })
	        assertMarkup()
	
	        var oldVms = vm.$children.slice()
	
	        vm.list = [
	          { id: 1, msg: 'wa', list: [
	            { id: 1, msg: 'hi foo' },
	            { id: 2, msg: 'hi bar' }
	          ] },
	          { id: 2, msg: 'wo', list: [] }
	        ]
	
	        _.nextTick(function () {
	          assertMarkup()
	          // should reuse old vms!
	          var i = 2
	          while (i--) {
	            expect(vm.$children[i]).toBe(oldVms[i])
	          }
	          expect(vm.$children[0].$children[0]).toBe(oldVms[0].$children[0])
	          next()
	        })
	
	        function assertMarkup () {
	          var markup = vm.list.map(function (item) {
	            var sublist = item.list.map(function (item) {
	              return '<div>' + item.msg + '</div>'
	            }).join('')
	            return '<div>' + item.msg + sublist + '</div>'
	          }).join('')
	          expect(el.innerHTML).toBe(markup)
	        }
	      }
	    })
	
	    it('switch between object-converted & array mode', function (done) {
	      var obj = {
	        a: { msg: 'AA' },
	        b: { msg: 'BB' }
	      }
	      var arr = [obj.b, obj.a]
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="obj">{{msg}}</div>',
	        data: {
	          obj: obj
	        }
	      })
	      expect(el.innerHTML).toBe(Object.keys(obj).map(function (key) {
	        return '<div>' + obj[key].msg + '</div>'
	      }).join(''))
	      vm.obj = arr
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>BB</div><div>AA</div>')
	        // make sure it cleared the cache
	        expect(vm._directives[0].cache.a).toBeNull()
	        expect(vm._directives[0].cache.b).toBeNull()
	        done()
	      })
	    })
	
	  })
	}
	
	/**
	 * Simple helper for chained async asssertions
	 *
	 * @param {Function} fn - the data manipulation function
	 * @param {Function} cb - the assertion fn to be called on nextTick
	 */
	
	function go (fn, cb) {
	  return {
	    stack: [{fn: fn, cb: cb}],
	    then: function (fn, cb) {
	      this.stack.push({fn: fn, cb: cb})
	      return this
	    },
	    run: function (done) {
	      var self = this
	      var step = this.stack.shift()
	      if (!step) return done()
	      step.fn()
	      _.nextTick(function () {
	        step.cb()
	        self.run(done)
	      })
	    }
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-repeat on
	 * an Array of Objects
	 */
	
	function assertMutations (vm, el, done) {
	  assertMarkup()
	  var poppedItem
	  go(
	    function () {
	      vm.items.push({a: 3})
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.shift()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.reverse()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      poppedItem = vm.items.pop()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.unshift(poppedItem)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.sort(function (a, b) {
	        return a.a > b.a ? 1 : -1
	      })
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.splice(1, 1, {a: 5})
	    },
	    assertMarkup
	  )
	  // test swapping the array
	  .then(
	    function () {
	      vm.items = [{a: 0}, {a: 1}, {a: 2}]
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var tag = el.children[0].tagName.toLowerCase()
	    var markup = vm.items.map(function (item, i) {
	      var el = '<' + tag + '>' + i + ' ' + item.a + '</' + tag + '>'
	      return el
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-repeat on
	 * an Array of primitive values
	 */
	
	function assertPrimitiveMutations (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      // check duplicate
	      vm.items.push(2, 2, 3)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.shift()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.reverse()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.pop()
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.unshift(3)
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.sort(function (a, b) {
	        return a > b ? 1 : -1
	      })
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.splice(1, 1, 5)
	    },
	    assertMarkup
	  )
	  // test swapping the array
	  .then(
	    function () {
	      vm.items = [1, 2, 2]
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = vm.items.map(function (item, i) {
	      return '<div>' + i + ' ' + item + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-repeat on
	 * an Object of Objects
	 */
	
	function assertObjectMutations (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      vm.items.a = {a: 3}
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items = {
	        c: {a: 1},
	        d: {a: 2}
	      }
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.$add('a', {a: 3})
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = Object.keys(vm.items).map(function (key, i) {
	      return '<div>' + i + ' ' + key + ' ' + vm.items[key].a + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}
	
	/**
	 * Assert mutation and markup correctness for v-repeat on
	 * an Object of primitive values
	 */
	
	function assertObjectPrimitiveMutations (vm, el, done) {
	  assertMarkup()
	  go(
	    function () {
	      vm.items.a = 3
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items = {
	        c: 1,
	        d: 2
	      }
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.$add('a', 3)
	    },
	    assertMarkup
	  )
	  .run(done)
	
	  function assertMarkup () {
	    var markup = Object.keys(vm.items).map(function (key, i) {
	      return '<div>' + i + ' ' + key + ' ' + vm.items[key] + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	  }
	}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	var transition = __webpack_require__(34)
	var def = __webpack_require__(33)
	
	if (_.inBrowser) {
	  describe('v-show', function () {
	
	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(transition, 'apply').and.callThrough()
	    })
	
	    it('should work', function () {
	      var dir = {
	        el: el,
	        update: def,
	        vm: new Vue()
	      }
	      dir.update(false)
	      expect(el.style.display).toBe('none')
	      dir.update(true)
	      expect(el.style.display).toBe('')
	      expect(transition.apply).toHaveBeenCalled()
	    })
	  })
	}


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(29)
	var Vue = __webpack_require__(2)
	
	function checkPrefixedProp (prop) {
	  var el = document.createElement('div')
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
	  if (!(prop in el.style)) {
	    var prefixes = ['Webkit', 'Moz', 'ms']
	    var i = prefixes.length
	    while (i--) {
	      if ((prefixes[i] + upper) in el.style) {
	        prop = prefixes[i] + upper
	      }
	    }
	  }
	  return prop
	}
	
	if (_.inBrowser) {
	  describe('v-style', function () {
	
	    var el, dir
	    beforeEach(function () {
	      el = document.createElement('div')
	      dir = { el: el }
	      _.extend(dir, def)
	    })
	
	    it('normal with arg', function () {
	      dir.arg = 'color'
	      dir.update('red')
	      expect(el.style.color).toBe('red')
	    })
	
	    it('normal no arg', function () {
	      dir.update('color:red;')
	      expect(el.style.cssText.replace(/\s/g, '')).toBe('color:red;')
	    })
	
	    it('!important', function () {
	      dir.arg = 'color'
	      dir.update('red !important;')
	      expect(el.style.getPropertyPriority('color')).toBe('important')
	    })
	
	    it('camel case', function () {
	      dir.arg = 'marginLeft'
	      dir.update('30px')
	      expect(el.style.marginLeft).toBe('30px')
	    })
	
	    it('remove on falsy value', function () {
	      el.style.color = 'red'
	      dir.arg = 'color'
	      dir.update(null)
	      expect(el.style.color).toBe('')
	    })
	
	    it('ignore unsupported property', function () {
	      dir.arg = 'unsupported'
	      dir.update('test')
	      expect(el.style.unsupported).not.toBe('test')
	    })
	
	    it('auto prefixing', function () {
	      var prop = checkPrefixedProp('transform')
	      dir.arg = 'transform'
	      var val = 'scale(0.5)'
	      dir.update(val)
	      expect(el.style[prop]).toBe(val)
	    })
	
	    it('update with object', function () {
	      el.style.padding = '10px'
	      dir.update({color: 'red', marginRight: '30px'})
	      expect(el.style.getPropertyValue('color')).toBe('red')
	      expect(el.style.getPropertyValue('margin-right')).toBe('30px')
	      expect(el.style.getPropertyValue('padding')).toBe('10px')
	      dir.update({color: 'blue', padding: null })
	      expect(el.style.getPropertyValue('color')).toBe('blue')
	      expect(el.style.getPropertyValue('margin-right')).toBeFalsy()
	      expect(el.style.getPropertyValue('padding')).toBeFalsy()
	    })
	
	    it('update with object and auto prefix', function () {
	      var prop = checkPrefixedProp('transform')
	      var val = 'scale(0.5)'
	      dir.update({transform: val})
	      expect(el.style[prop]).toBe(val)
	    })
	
	    it('updates object deep', function (done) {
	      el.setAttribute('v-style', 'divStyling')
	      var vm = new Vue({
	        el: el,
	        data: {divStyling: { display: 'none'}}
	      })
	      expect(el.style.display).toBe('none')
	      vm.divStyling.display = 'block'
	      _.nextTick(function () {
	        expect(el.style.display).toBe('block')
	        done()
	      })
	    })
	
	  })
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(30)
	
	if (_.inBrowser) {
	  describe('v-text', function () {
	
	    it('element', function () {
	      var dir = {
	        el: document.createElement('div')
	      }
	      _.extend(dir, def)
	      dir.bind()
	      dir.update('hi')
	      expect(dir.el.textContent).toBe('hi')
	      dir.update(123)
	      expect(dir.el.textContent).toBe('123')
	    })
	
	    it('text node', function () {
	      var dir = {
	        el: document.createTextNode(' ')
	      }
	      _.extend(dir, def)
	      dir.bind()
	      dir.update('hi')
	      expect(dir.el.nodeValue).toBe('hi')
	      dir.update(123)
	      expect(dir.el.nodeValue).toBe('123')
	    })
	  })
	}


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = _.Vue
	var def = __webpack_require__(39)
	
	if (_.inBrowser) {
	  describe('v-transition', function () {
	
	    it('should instantiate a transition object with correct args', function () {
	      var fns = {}
	      var dir = {
	        el: document.createElement('div'),
	        expression: 'test',
	        bind: def.bind,
	        update: def.update,
	        vm: {
	          $options: {
	            transitions: {
	              test: fns
	            }
	          }
	        }
	      }
	      dir.bind()
	      var transition = dir.el.__v_trans
	      expect(transition.el).toBe(dir.el)
	      expect(transition.hooks).toBe(fns)
	      expect(transition.enterClass).toBe('test-enter')
	      expect(transition.leaveClass).toBe('test-leave')
	      expect(dir.el.className === 'test-transition')
	      dir.update('lol', 'test')
	      transition = dir.el.__v_trans
	      expect(transition.enterClass).toBe('lol-enter')
	      expect(transition.leaveClass).toBe('lol-leave')
	      expect(transition.fns).toBeUndefined()
	      expect(dir.el.className === 'lol-transition')
	    })
	
	    it('should bind the transition to closest vm', function () {
	      var vm1 = new Vue()
	      var vm2 = new Vue()
	      var dir = {
	        el: document.createElement('div'),
	        expression: 'test',
	        bind: def.bind,
	        update: def.update,
	        vm: vm1
	      }
	      dir.el.__vue__ = vm2
	      dir.bind()
	      expect(dir.el.__v_trans.vm).toBe(vm2)
	    })
	
	    it('dynamic transitions', function (done) {
	      var el = document.createElement('div')
	      document.body.appendChild(el)
	      var calls = {
	        a: { enter: 0, leave: 0 },
	        b: { enter: 0, leave: 0 }
	      }
	      var vm = new Vue({
	        el: el,
	        template: '<div v-show="show" v-transition="{{trans}}"></div>',
	        data: {
	          show: true,
	          trans: 'a'
	        },
	        transitions: {
	          a: {
	            enter: function (el, done) {
	              calls.a.enter++
	              done()
	            },
	            leave: function (el, done) {
	              calls.a.leave++
	              done()
	            }
	          },
	          b: {
	            enter: function (el, done) {
	              calls.b.enter++
	              done()
	            },
	            leave: function (el, done) {
	              calls.b.leave++
	              done()
	            }
	          }
	        }
	      })
	
	      assertCalls(0, 0, 0, 0)
	      vm.show = false
	      _.nextTick(function () {
	        assertCalls(0, 1, 0, 0)
	        vm.trans = 'b'
	        vm.show = true
	        _.nextTick(function () {
	          assertCalls(0, 1, 1, 0)
	          vm.show = false
	          _.nextTick(function () {
	            assertCalls(0, 1, 1, 1)
	            vm.trans = 'a'
	            vm.show = true
	            _.nextTick(function () {
	              assertCalls(1, 1, 1, 1)
	              done()
	            })
	          })
	        })
	      })
	
	      function assertCalls (a, b, c, d) {
	        expect(el.firstChild.style.display).toBe(vm.show ? '' : 'none')
	        expect(calls.a.enter).toBe(a)
	        expect(calls.a.leave).toBe(b)
	        expect(calls.b.enter).toBe(c)
	        expect(calls.b.leave).toBe(d)
	      }
	    })
	  })
	}


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	
	describe('Content Transclusion', function () {
	
	  var el, vm, options
	  beforeEach(function () {
	    el = document.createElement('div')
	    options = {
	      el: el
	    }
	  })
	
	  function mount () {
	    vm = new Vue(options)
	  }
	
	  it('no content', function () {
	    options.template = '<div><content></content></div>'
	    mount()
	    expect(el.firstChild.childNodes.length).toBe(0)
	  })
	
	  it('default content', function () {
	    el.innerHTML = '<p>hi</p>'
	    options.template = '<div><content></content></div>'
	    mount()
	    expect(el.firstChild.tagName).toBe('DIV')
	    expect(el.firstChild.firstChild.tagName).toBe('P')
	    expect(el.firstChild.firstChild.textContent).toBe('hi')
	  })
	
	  it('no template auto content', function () {
	    el.innerHTML = '<p>hi</p>'
	    options._asComponent = true
	    mount()
	    expect(el.firstChild.tagName).toBe('P')
	    expect(el.firstChild.textContent).toBe('hi')
	  })
	
	  it('fallback content', function () {
	    options.template = '<content><p>fallback</p></content>'
	    mount()
	    expect(el.firstChild.tagName).toBe('P')
	    expect(el.firstChild.textContent).toBe('fallback')
	  })
	
	  it('fallback content with multiple select', function () {
	    el.innerHTML = '<p class="b">select b</p>'
	    options.template =
	      '<content select=".a"><p>fallback a</p></content>' +
	      '<content select=".b">fallback b</content>'
	    mount()
	    expect(el.childNodes.length).toBe(2)
	    expect(el.firstChild.textContent).toBe('fallback a')
	    expect(el.lastChild.textContent).toBe('select b')
	  })
	
	  it('selector matching multiple elements', function () {
	    el.innerHTML = '<p class="t">1</p><div></div><p class="t">2</p>'
	    options.template = '<content select=".t"></content>'
	    mount()
	    expect(el.innerHTML).toBe('<p class="t">1</p><p class="t">2</p>')
	  })
	
	  it('default content should only render parts not selected', function () {
	    el.innerHTML = '<div>hi</div><p class="a">1</p><p class="b">2</p>'
	    options.template =
	      '<content select=".a"></content>' +
	      '<content></content>' +
	      '<content select=".b"></content>'
	    mount()
	    expect(el.innerHTML).toBe('<p class="a">1</p><div>hi</div><p class="b">2</p>')
	  })
	
	  it('content transclusion with replace', function () {
	    el.innerHTML = '<p>hi</p>'
	    options.template = '<div><div><content></content></div></div>'
	    options.replace = true
	    mount()
	    var res = vm.$el
	    expect(res).not.toBe(el)
	    expect(res.firstChild.tagName).toBe('DIV')
	    expect(res.firstChild.firstChild.tagName).toBe('P')
	    expect(res.firstChild.firstChild.textContent).toBe('hi')
	  })
	
	  it('block instance content transclusion', function () {
	    el.innerHTML = '<p>hi</p><span>ho</span>'
	    options.template = '<div></div><content select="p"></content><content select="span"></content>'
	    options.replace = true
	    mount()
	    expect(getChild(1).tagName).toBe('DIV')
	    expect(getChild(2).tagName).toBe('P')
	    expect(getChild(3).tagName).toBe('SPAN')
	
	    function getChild (n) {
	      var el = vm._fragmentStart
	      while (n--) {
	        el = el.nextSibling
	      }
	      return el
	    }
	  })
	
	  it('select should only match children', function () {
	    el.innerHTML =
	      '<p class="b">select b</p>' +
	      '<span><p class="b">nested b</p></span>' +
	      '<span><p class="c">nested c</p></span>'
	    options.template =
	      '<content select=".a"><p>fallback a</p></content>' +
	      '<content select=".b">fallback b</content>' +
	      '<content select=".c">fallback c</content>'
	    mount()
	    expect(el.childNodes.length).toBe(3)
	    expect(el.firstChild.textContent).toBe('fallback a')
	    expect(el.childNodes[1].textContent).toBe('select b')
	    expect(el.lastChild.textContent).toBe('fallback c')
	  })
	
	  it('should accept expressions in selectors', function () {
	    el.innerHTML = '<p>one</p><p>two</p>'
	    options.template = '<content select="p:nth-child({{i}})"></content>'
	    options.data = {
	      i: 2
	    }
	    mount()
	    expect(el.innerHTML).toBe('<p>two</p>')
	  })
	
	  it('content should be dynamic and compiled in parent scope', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        msg: 'hello'
	      },
	      template: '<test>{{msg}}</test>',
	      components: {
	        test: {
	          template: '<content></content>'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<test>hello</test>')
	    vm.msg = 'what'
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<test>what</test>')
	      done()
	    })
	  })
	
	  it('v-if with content transclusion', function (done) {
	    var vm = new Vue({
	      el: el,
	      data: {
	        a: 1,
	        show: true
	      },
	      template: '<test show="{{show}}">{{a}}</test>',
	      components: {
	        test: {
	          props: ['show'],
	          template: '<div v-if="show"><content></cotent></div>'
	        }
	      }
	    })
	    expect(el.textContent).toBe('1')
	    vm.a = 2
	    _.nextTick(function () {
	      expect(el.textContent).toBe('2')
	      vm.show = false
	      _.nextTick(function () {
	        expect(el.textContent).toBe('')
	        vm.show = true
	        vm.a = 3
	        _.nextTick(function () {
	          expect(el.textContent).toBe('3')
	          done()
	        })
	      })
	    })
	  })
	
	  it('inline v-repeat', function () {
	    el.innerHTML = '<p>1</p><p>2</p><p>3</p>'
	    new Vue({
	      el: el,
	      template: '<div v-repeat="list"><content select="p:nth-child({{$index + 1}})"></content></div>',
	      data: {
	        list: 0
	      },
	      beforeCompile: function () {
	        this.list = this.$options._content.querySelectorAll('p').length
	      }
	    })
	    expect(el.innerHTML).toBe('<div><p>1</p></div><div><p>2</p></div><div><p>3</p></div>')
	  })
	
	  it('v-repeat + component + parent directive + transclusion', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<test v-repeat="list" v-class="cls">{{msg}}</test>',
	      data: {
	        cls: 'parent',
	        msg: 'hi',
	        list: [{a: 1}, {a: 2}, {a: 3}]
	      },
	      components: {
	        test: {
	          replace: true,
	          template: '<div class="child">{{a}} <content></content></div>'
	        }
	      }
	    })
	    var markup = vm.list.map(function (item) {
	      return '<div class="child parent">' + item.a + ' hi</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup)
	    vm.msg = 'ho'
	    markup = vm.list.map(function (item) {
	      return '<div class="child parent">' + item.a + ' ho</div>'
	    }).join('')
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe(markup)
	      done()
	    })
	  })
	
	  it('nested transclusions', function (done) {
	    vm = new Vue({
	      el: el,
	      template:
	        '<testa>' +
	          '<testb>' +
	            '<div v-repeat="list">{{$value}}</div>' +
	          '</testb>' +
	        '</testa>',
	      data: {
	        list: [1, 2]
	      },
	      components: {
	        testa: { template: '<content></content>' },
	        testb: { template: '<content></content>' }
	      }
	    })
	    expect(el.innerHTML).toBe(
	      '<testa><testb>' +
	        '<div>1</div><div>2</div>' +
	      '</testb></testa>'
	    )
	    vm.list.push(3)
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe(
	        '<testa><testb>' +
	          '<div>1</div><div>2</div><div>3</div>' +
	        '</testb></testa>'
	      )
	      done()
	    })
	  })
	
	  it('nested transclusion, container dirs & props', function (done) {
	    vm = new Vue({
	      el: el,
	      template:
	        '<testa>' +
	          '<testb v-if="ok" prop="{{msg}}"></testb>' +
	        '</testa>',
	      data: {
	        ok: false,
	        msg: 'hello'
	      },
	      components: {
	        testa: { template: '<content></content>' },
	        testb: {
	          props: ['prop'],
	          template: '{{prop}}'
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<testa></testa>')
	    vm.ok = true
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<testa><testb>hello</testb></testa>')
	      done()
	    })
	  })
	
	  // #1010
	  it('v-repeat inside transcluded content', function () {
	    vm = new Vue({
	      el: el,
	      template:
	        '<testa>' +
	          '{{inner}} {{outer}}' +
	          '<div v-repeat="list"> {{inner}} {{outer}}</div>' +
	        '</testa>',
	      data: {
	        outer: 'outer',
	        inner: 'parent-inner',
	        list: [
	          { inner: 'list-inner' }
	        ]
	      },
	      components: {
	        testa: {
	          data: function () {
	            return {
	              inner: 'component-inner'
	            }
	          },
	          template: '<content></content>'
	        }
	      }
	    })
	    expect(el.textContent).toBe('parent-inner outer list-inner outer')
	  })
	
	  it('single content outlet with replace: true', function () {
	    vm = new Vue({
	      el: el,
	      template:
	        '<test><p>1</p><p>2</p></test>',
	      components: {
	        test: {
	          template: '<content></content>',
	          replace: true
	        }
	      }
	    })
	    expect(el.innerHTML).toBe('<p>1</p><p>2</p>')
	  })
	
	})


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var compiler = __webpack_require__(16)
	
	describe('Partial', function () {
	
	  var el
	  beforeEach(function () {
	    el = document.createElement('div')
	  })
	
	  it('static', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<partial name="yo"></partial>',
	      data: {
	        msg: 'hello'
	      },
	      partials: {
	        yo: '{{msg}}'
	      }
	    })
	    expect(el.textContent).toBe('hello')
	    vm.msg = 'what'
	    _.nextTick(function () {
	      expect(el.textContent).toBe('what')
	      done()
	    })
	  })
	
	  it('dynamic', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<partial name="test-{{id}}"></partial>',
	      data: {
	        id: 'a'
	      },
	      partials: {
	        'test-a': 'a {{id}}',
	        'test-b': 'b {{id}}'
	      }
	    })
	    expect(el.textContent).toBe('a a')
	    vm.id = 'b'
	    _.nextTick(function () {
	      expect(el.textContent).toBe('b b')
	      done()
	    })
	  })
	
	  it('caching', function () {
	    var calls = 0
	    var compile = compiler.compile
	    compiler.compile = function () {
	      calls++
	      return compile.apply(this, arguments)
	    }
	    new Vue({
	      el: el,
	      template:
	        '<partial name="cache-test"></partial> ' +
	        '<partial name="cache-test"></partial>',
	      data: {
	        msg: 'hi'
	      },
	      partials: {
	        'cache-test': 'cache-test {{msg}}'
	      }
	    })
	    expect(el.textContent).toBe('cache-test hi cache-test hi')
	    // one call for instance, and one for partial
	    expect(calls).toBe(2)
	    // cleanup
	    compiler.compile = compile
	  })
	
	  it('teardown', function () {
	    var vm = new Vue({
	      el: el,
	      template: '<partial name="test-{{id}}"></partial>',
	      data: {
	        id: 'a'
	      },
	      partials: {
	        'test-a': 'a {{id}}'
	      }
	    })
	    expect(vm._directives.length).toBe(2)
	    expect(vm._directives[1].name).toBe('partial')
	    expect(vm._watchers.length).toBe(2)
	    vm._directives[1]._teardown()
	    // the text-directive should've been removed.
	    expect(vm._directives.length).toBe(1)
	    expect(vm._directives[0].name).toBe('partial')
	    expect(vm._watchers.length).toBe(0)
	  })
	
	})


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var filters = __webpack_require__(53)
	
	describe('Filters', function () {
	
	  it('json read', function () {
	    var filter = filters.json.read
	    var obj = {a: {b: 2}}
	    expect(filter(obj)).toBe(JSON.stringify(obj, null, 2))
	    expect(filter(obj, 4)).toBe(JSON.stringify(obj, null, 4))
	    // plain string
	    expect(filter('1234')).toBe('1234')
	  })
	
	  it('json write', function () {
	    var filter = filters.json.write
	    var obj = '{"a":{"b":2}}'
	    expect(JSON.stringify(filter(obj))).toBe(obj)
	    // error condition
	    var invalidJSON = '{"a":}'
	    expect(filter(invalidJSON)).toBe(invalidJSON)
	  })
	
	  it('capitalize', function () {
	    var filter = filters.capitalize
	    var res = filter('fsefsfsef')
	    expect(res.charAt(0)).toBe('F')
	    expect(res.slice(1)).toBe('sefsfsef')
	    assertNumberAndFalsy(filter)
	  })
	
	  it('uppercase', function () {
	    var filter = filters.uppercase
	    expect(filter('fsefef')).toBe('FSEFEF')
	    assertNumberAndFalsy(filter)
	  })
	
	  it('lowercase', function () {
	    var filter = filters.lowercase
	    expect(filter('AWEsoME')).toBe('awesome')
	    assertNumberAndFalsy(filter)
	  })
	
	  it('pluralize', function () {
	    var filter = filters.pluralize
	    // single arg
	    var arg = 'item'
	    expect(filter(0, arg)).toBe('items')
	    expect(filter(1, arg)).toBe('item')
	    expect(filter(2, arg)).toBe('items')
	    // multi args
	    expect(filter(0, 'st', 'nd', 'rd', 'th')).toBe('th')
	    expect(filter(1, 'st', 'nd', 'rd', 'th')).toBe('st')
	    expect(filter(2, 'st', 'nd', 'rd', 'th')).toBe('nd')
	    expect(filter(3, 'st', 'nd', 'rd', 'th')).toBe('rd')
	    expect(filter(4, 'st', 'nd', 'rd', 'th')).toBe('th')
	  })
	
	  it('currency', function () {
	    var filter = filters.currency
	    // default
	    expect(filter(1234)).toBe('$1,234.00')
	    expect(filter(1234.45)).toBe('$1,234.45')
	    expect(filter(123443434.4343434)).toBe('$123,443,434.43')
	    expect(filter(0.99)).toBe('$0.99')
	    expect(filter(0.99999)).toBe('$1.00')
	    expect(filter(0.76)).toBe('$0.76')
	    // sign arg
	    expect(filter(2134, '@')).toBe('@2,134.00')
	    // falsy, infinity and 0
	    expect(filter(0)).toBe('$0.00')
	    expect(filter(false)).toBe('')
	    expect(filter(null)).toBe('')
	    expect(filter(undefined)).toBe('')
	    expect(filter(Infinity)).toBe('')
	    // negative numbers
	    expect(filter(-50)).toBe('$-50.00')
	    expect(filter(-150.43)).toBe('$-150.43')
	    expect(filter(-1500.4343434)).toBe('$-1,500.43')
	  })
	
	  it('key', function () {
	    var filter = filters.key
	    expect(filter(null)).toBeUndefined()
	    var spy = jasmine.createSpy('filter:key')
	    var handler = filter(spy, 'enter')
	    handler({ keyCode: 0 })
	    expect(spy).not.toHaveBeenCalled()
	    handler({ keyCode: 13 })
	    expect(spy).toHaveBeenCalled()
	    // direct keycode
	    spy = jasmine.createSpy('filter:key')
	    handler = filter(spy, 13)
	    handler({ keyCode: 0 })
	    expect(spy).not.toHaveBeenCalled()
	    handler({ keyCode: 13 })
	    expect(spy).toHaveBeenCalled()
	  })
	
	  it('filterBy', function () {
	    var filter = filters.filterBy
	    var arr = [
	      { a: 1, b: { c: 'hello' }},
	      { a: 2, b: 'hello'},
	      { a: 3, b: ['yoyo'] }
	    ]
	    var res
	    // normal
	    res = filter(arr, 'hello')
	    expect(res.length).toBe(2)
	    expect(res[0]).toBe(arr[0])
	    expect(res[1]).toBe(arr[1])
	    // data key
	    res = filter(arr, 'hello', 'b.c')
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(arr[0])
	    // delimiter
	    res = filter(arr, 'hello', 'in', 'b.c')
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(arr[0])
	    // no search key
	    res = filter(arr, null)
	    expect(res).toBe(arr)
	    // number search key
	    res = filter(arr, 2)
	    expect(res[0]).toBe(arr[1])
	    // search in sub array
	    res = filter(arr, 'yoyo')
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(arr[2])
	    // filter by false (#928)
	    res = filter([{a: false}, {b: true}], false)
	    expect(res.length).toBe(1)
	    expect(res[0].a).toBe(false)
	  })
	
	  it('orderBy', function () {
	    var filter = filters.orderBy
	    var arr = [
	      { a: { b: 0 }, c: 'b'},
	      { a: { b: 2 }, c: 'c'},
	      { a: { b: 1 }, c: 'a'}
	    ]
	    var res
	    // sort key
	    res = filter(arr, 'a.b')
	    expect(res.length).toBe(3)
	    expect(res[0].a.b).toBe(0)
	    expect(res[1].a.b).toBe(1)
	    expect(res[2].a.b).toBe(2)
	    // reverse key
	    res = filter(arr, 'a.b', true)
	    expect(res.length).toBe(3)
	    expect(res[0].a.b).toBe(2)
	    expect(res[1].a.b).toBe(1)
	    expect(res[2].a.b).toBe(0)
	    // literal args
	    res = filter(arr, 'c', '-1')
	    expect(res.length).toBe(3)
	    expect(res[0].c).toBe('c')
	    expect(res[1].c).toBe('b')
	    expect(res[2].c).toBe('a')
	    // negate reverse
	    res = filter(arr, 'c', false)
	    expect(res.length).toBe(3)
	    expect(res[0].c).toBe('a')
	    expect(res[1].c).toBe('b')
	    expect(res[2].c).toBe('c')
	    // no sort key
	    res = filter(arr, null)
	    expect(res).toBe(arr)
	  })
	
	  it('orderBy on Object-converted array', function () {
	    // object converted
	    var filter = filters.orderBy
	    var arr = [
	      { $key: 'a', $value: 3 },
	      { $key: 'c', $value: 1 },
	      { $key: 'b', $value: 2 }
	    ]
	    var res = filter(arr, '$key')
	    expect(res[0].$value).toBe(3)
	    expect(res[1].$value).toBe(2)
	    expect(res[2].$value).toBe(1)
	    res = filter(arr, '$value')
	    expect(res[0].$value).toBe(1)
	    expect(res[1].$value).toBe(2)
	    expect(res[2].$value).toBe(3)
	    // normal keys
	    arr = [
	      { $key: 'a', $value: { v: 3 } },
	      { $key: 'c', $value: { v: 1 } },
	      { $key: 'b', $value: { v: 2 } }
	    ]
	    res = filter(arr, 'v')
	    expect(res[0].$value.v).toBe(1)
	    expect(res[1].$value.v).toBe(2)
	    expect(res[2].$value.v).toBe(3)
	  })
	})
	
	function assertNumberAndFalsy (filter) {
	  // should stringify numbers
	  expect(filter(12345)).toBe('12345')
	  expect(filter(0)).toBe('0')
	  expect(filter(undefined)).toBe('')
	  expect(filter(null)).toBe('')
	  expect(filter(false)).toBe('')
	}


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	
	describe('Instance Events', function () {
	
	  var spy, spy2
	  beforeEach(function () {
	    spy = jasmine.createSpy()
	    spy2 = jasmine.createSpy()
	    spyOn(_, 'warn')
	  })
	
	  describe('option events', function () {
	
	    it('normal events', function () {
	      var vm = new Vue({
	        events: {
	          test: spy,
	          test2: [spy, spy]
	        }
	      })
	      vm.$emit('test', 123)
	      expect(spy).toHaveBeenCalledWith(123)
	      vm.$emit('test2')
	      expect(spy.calls.count()).toBe(3)
	    })
	
	    it('hook events', function () {
	      new Vue({
	        events: {
	          'hook:created': spy
	        }
	      })
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('method name strings', function () {
	      var vm = new Vue({
	        events: {
	          test: 'doSomething',
	          test2: 'doSomethingElse'
	        },
	        methods: {
	          doSomething: spy
	        }
	      })
	      vm.$emit('test', 123)
	      expect(spy).toHaveBeenCalledWith(123)
	      vm.$emit('test2')
	      expect(hasWarned(_, 'Unknown method')).toBe(true)
	    })
	
	  })
	
	  describe('option watchers', function () {
	
	    it('normal', function (done) {
	      var spyA = jasmine.createSpy()
	      var spyB = jasmine.createSpy()
	      var count = 0
	      var a = {
	        b: { c: 1 }
	      }
	      var vm = new Vue({
	        watch: {
	          'a.b.c': spyA,
	          'b + c': spyB,
	          a: {
	            deep: true,
	            immediate: true,
	            handler: 'test'
	          }
	        },
	        data: {
	          a: a,
	          b: 1,
	          c: 2
	        },
	        methods: {
	          test: function (val) {
	            count++
	            expect(val).toBe(a)
	          }
	        }
	      })
	      vm.a.b.c = 2
	      vm.b = 3
	      vm.c = 4
	      expect(count).toBe(1)
	      _.nextTick(function () {
	        expect(spyA).toHaveBeenCalledWith(2, 1)
	        expect(spyB).toHaveBeenCalledWith(7, 3)
	        expect(count).toBe(2)
	        done()
	      })
	    })
	
	    it('method name strings', function (done) {
	      var spy = jasmine.createSpy()
	      var vm = new Vue({
	        watch: {
	          'a': 'test'
	        },
	        data: {
	          a: 1
	        },
	        methods: {
	          test: spy
	        }
	      })
	      vm.a = 2
	      _.nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(2, 1)
	        done()
	      })
	    })
	
	  })
	
	  describe('hooks', function () {
	
	    it('created', function () {
	      var ctx
	      var vm = new Vue({
	        created: function () {
	          // can't assert this === vm here
	          // because the constructor hasn't returned yet
	          ctx = this
	          // should have observed data
	          expect(this._data.__ob__).toBeTruthy()
	          spy()
	        }
	      })
	      expect(ctx).toBe(vm)
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('beforeDestroy', function () {
	      var vm = new Vue({
	        beforeDestroy: function () {
	          expect(this).toBe(vm)
	          expect(this._isDestroyed).toBe(false)
	          spy()
	        }
	      })
	      vm.$destroy()
	      expect(spy).toHaveBeenCalled()
	    })
	
	    it('destroyed', function () {
	      var vm = new Vue({
	        destroyed: function () {
	          expect(this).toBe(vm)
	          expect(this._isDestroyed).toBe(true)
	          spy()
	        }
	      })
	      vm.$destroy()
	      expect(spy).toHaveBeenCalled()
	    })
	
	    if (Vue.util.inBrowser) {
	
	      it('beforeCompile', function () {
	        var vm = new Vue({
	          template: '{{a}}',
	          data: { a: 1 },
	          beforeCompile: function () {
	            expect(this).toBe(vm)
	            expect(this.$el).toBe(el)
	            expect(this.$el.textContent).toBe('{{a}}')
	            spy()
	          }
	        })
	        var el = document.createElement('div')
	        vm.$mount(el)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('compiled', function () {
	        var vm = new Vue({
	          template: '{{a}}',
	          data: { a: 1 },
	          compiled: function () {
	            expect(this.$el).toBe(el)
	            expect(this.$el.textContent).toBe('1')
	            spy()
	          }
	        })
	        var el = document.createElement('div')
	        vm.$mount(el)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('ready', function () {
	        var vm = new Vue({
	          ready: spy
	        })
	        expect(spy).not.toHaveBeenCalled()
	        var el = document.createElement('div')
	        vm.$mount(el)
	        expect(spy).not.toHaveBeenCalled()
	        vm.$appendTo(document.body)
	        expect(spy).toHaveBeenCalled()
	        vm.$remove()
	        // try mounting on something already in dom
	        el = document.createElement('div')
	        document.body.appendChild(el)
	        vm = new Vue({
	          el: el,
	          ready: spy2
	        })
	        expect(spy2).toHaveBeenCalled()
	        vm.$remove()
	      })
	
	      describe('attached/detached', function () {
	
	        it('in DOM', function () {
	          var el = document.createElement('div')
	          var childEl = document.createElement('div')
	          el.appendChild(childEl)
	          document.body.appendChild(el)
	          var parentVm = new Vue({
	            el: el,
	            attached: spy,
	            detached: spy2
	          })
	          var childVm = parentVm.$addChild({
	            el: childEl,
	            attached: spy,
	            detached: spy2
	          })
	          expect(spy.calls.count()).toBe(2)
	          parentVm.$remove()
	          expect(spy2.calls.count()).toBe(2)
	          // child should be already detached
	          // so the hook should not fire again
	          childVm.$remove()
	          expect(spy2.calls.count()).toBe(2)
	        })
	
	        it('create then attach', function () {
	          var el = document.createElement('div')
	          var childEl = document.createElement('div')
	          el.appendChild(childEl)
	          var parentVm = new Vue({
	            el: el,
	            attached: spy,
	            detached: spy2
	          })
	          var childVm = parentVm.$addChild({
	            el: childEl,
	            attached: spy,
	            detached: spy2
	          })
	          parentVm.$appendTo(document.body)
	          expect(spy.calls.count()).toBe(2)
	          // detach child first
	          childVm.$remove()
	          expect(spy2.calls.count()).toBe(1)
	          // should only fire parent detach
	          parentVm.$remove()
	          expect(spy2.calls.count()).toBe(2)
	        })
	
	        it('should not fire on detached child', function () {
	          var el = document.createElement('div')
	          var childEl = document.createElement('div')
	          var parentVm = new Vue({
	            el: el,
	            attached: spy
	          })
	          var childVm = parentVm.$addChild({
	            el: childEl,
	            attached: spy
	          })
	          parentVm.$appendTo(document.body)
	          expect(spy.calls.count()).toBe(1)
	          childVm.$appendTo(el)
	          expect(spy.calls.count()).toBe(2)
	        })
	
	      })
	
	    }
	
	  })
	
	})


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var init = __webpack_require__(55)._init
	
	describe('Instance Init', function () {
	
	  var stub = {
	    constructor: {
	      options: { a: 1, b: 2 }
	    },
	    _initEvents: jasmine.createSpy(),
	    _callHook: jasmine.createSpy(),
	    _initScope: jasmine.createSpy(),
	    $mount: jasmine.createSpy()
	  }
	
	  var options = {
	    a: 2,
	    el: {}
	  }
	
	  init.call(stub, options)
	
	  it('should setup properties', function () {
	    expect(stub.$el).toBe(null)
	    expect(stub.$root).toBe(stub)
	    expect(stub.$).toBeTruthy()
	    expect(stub._watchers).toBeTruthy()
	    expect(stub._directives).toBeTruthy()
	    expect(stub._events).toBeTruthy()
	    expect(stub._eventsCount).toBeTruthy()
	  })
	
	  it('should merge options', function () {
	    expect(stub.$options.a).toBe(2)
	    expect(stub.$options.b).toBe(2)
	  })
	
	  it('should call other init methods', function () {
	    expect(stub._initEvents).toHaveBeenCalled()
	    expect(stub._initScope).toHaveBeenCalled()
	  })
	
	  it('should call created hook', function () {
	    expect(stub._callHook).toHaveBeenCalledWith('created')
	  })
	
	  it('should call $mount when options.el is present', function () {
	    expect(stub.$mount).toHaveBeenCalledWith(stub.$options.el)
	  })
	})


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(11)
	
	describe('misc', function () {
	
	  describe('_applyFilters', function () {
	
	    var vm = new Vue({
	      data: {
	        msg: 'BBB'
	      },
	      filters: {
	        read: function (v, arg) {
	          return v + ' read:' + arg
	        },
	        read2: {
	          read: function (v, arg) {
	            return v + ' read2:' + arg
	          }
	        },
	        write: {
	          write: function (v, oldV) {
	            return v + ' ' + oldV
	          }
	        }
	      }
	    })
	
	    beforeEach(function () {
	      spyOn(_, 'warn')
	    })
	
	    it('read', function () {
	      var filters = [
	        { name: 'read', args: [{dynamic: false, value: 'AAA'}] },
	        { name: 'read2', args: [{dynamic: true, value: 'msg'}] }
	      ]
	      var val = vm._applyFilters('test', null, filters, false)
	      expect(val).toBe('test read:AAA read2:BBB')
	    })
	
	    it('write', function () {
	      var filters = [
	        { name: 'write' }
	      ]
	      var val = vm._applyFilters('test', 'oldTest', filters, true)
	      expect(val).toBe('test oldTest')
	    })
	
	    it('warn not found', function () {
	      vm._applyFilters('what', null, [{name: 'wtf'}])
	      expect(hasWarned(_, 'Failed to resolve filter')).toBe(true)
	    })
	  })
	})


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	
	describe('Instance Scope', function () {
	
	  describe('data proxy', function () {
	
	    var data = {
	      a: 0,
	      b: 0
	    }
	    var vm = new Vue({
	      data: data
	    })
	
	    it('initial', function () {
	      expect(vm.a).toBe(data.a)
	      expect(vm.b).toBe(data.b)
	    })
	
	    it('vm => data', function () {
	      vm.a = 1
	      expect(data.a).toBe(1)
	      expect(vm.a).toBe(data.a)
	    })
	
	    it('data => vm', function () {
	      data.b = 2
	      expect(vm.b).toBe(2)
	      expect(vm.b).toBe(data.b)
	    })
	
	  })
	
	  describe('$data', function () {
	
	    it('should initialize props', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        props: ['c']
	      })
	      expect(vm.hasOwnProperty('c')).toBe(true)
	    })
	
	    it('should use default prop value if prop not provided', function () {
	      var vm = new Vue({
	        el: document.createElement('div'),
	        props: ['c'],
	        data: {
	          c: 1
	        }
	      })
	      expect(vm.c).toBe(1)
	    })
	
	    it('external prop should overwrite default value', function () {
	      var el = document.createElement('div')
	      el.setAttribute('c', '2')
	      el.textContent = '{{c}}'
	      var vm = new Vue({
	        el: el,
	        props: ['c'],
	        data: {
	          c: 1
	        }
	      })
	      expect(vm.c).toBe(2)
	      expect(el.textContent).toBe('2')
	    })
	
	    it('props should be available in data() and create()', function () {
	      var el = document.createElement('div')
	      el.setAttribute('c', '2')
	      var vm = new Vue({
	        el: el,
	        props: ['c'],
	        data: function () {
	          expect(this.c).toBe(2)
	          expect(this._data.c).toBe(2)
	          return {
	            d: this.c + 1
	          }
	        },
	        created: function () {
	          expect(this.c).toBe(2)
	          expect(this._data.c).toBe(2)
	        }
	      })
	      expect(vm.d).toBe(3)
	    })
	
	    it('replace $data', function () {
	      var vm = new Vue({
	        data: {
	          a: 1
	        }
	      })
	      vm.$data = { b: 2 }
	      // proxy new key
	      expect(vm.b).toBe(2)
	      // unproxy old key that's no longer present
	      expect(vm.hasOwnProperty('a')).toBe(false)
	    })
	
	    it('replace $data and handle props', function (done) {
	      var el = document.createElement('div')
	      var vm = new Vue({
	        el: el,
	        template: '<test a="{{a}}" b="{{*b}}" c="{{@c}}"></test>',
	        data: {
	          a: 1,
	          b: 2,
	          c: 3
	        },
	        components: {
	          test: {
	            props: ['a', 'b', 'c', 'd'],
	            data: function () {
	              return {
	                a: null // should be overwritten
	              }
	            }
	          }
	        }
	      })
	      var child = vm.$children[0]
	      expect(child.a).toBe(1)
	      expect(child.b).toBe(2)
	      expect(child.c).toBe(3)
	
	      // test new data without prop fields:
	      // should just copy
	      child.$data = {}
	      expect(child.a).toBe(1)
	      expect(child.b).toBe(2)
	      expect(child.c).toBe(3)
	
	      // test new data with value:
	      child.$data = {
	        a: 2, // one-way
	        b: 3, // one-time
	        c: 4  // two-way
	      }
	      expect(child.a).toBe(2)
	      expect(child.b).toBe(3)
	      expect(child.c).toBe(4)
	      // assert parent state
	      Vue.nextTick(function () {
	        // one-way
	        expect(vm.a).toBe(1)
	        // one-time
	        expect(vm.b).toBe(2)
	        // two-way
	        expect(vm.c).toBe(4)
	        done()
	      })
	    })
	
	  })
	
	  describe('computed', function () {
	
	    var Test = Vue.extend({
	      computed: {
	        c: function () {
	          return this.a + this.b
	        },
	        d: {
	          get: function () {
	            return this.a + this.b
	          },
	          set: function (newVal) {
	            var vals = newVal.split(' ')
	            this.a = vals[0]
	            this.b = vals[1]
	          }
	        },
	        // chained computed
	        e: function () {
	          return this.c + 'e'
	        }
	      }
	    })
	
	    var spy = jasmine.createSpy()
	    var vm = new Test({
	      data: {
	        a: 'a',
	        b: 'b'
	      }
	    })
	
	    vm.$watch('e', spy)
	
	    it('get', function () {
	      expect(vm.c).toBe('ab')
	      expect(vm.d).toBe('ab')
	      expect(vm.e).toBe('abe')
	    })
	
	    it('set', function (done) {
	      vm.c = 123 // should do nothing
	      vm.d = 'c d'
	      expect(vm.a).toBe('c')
	      expect(vm.b).toBe('d')
	      expect(vm.c).toBe('cd')
	      expect(vm.d).toBe('cd')
	      expect(vm.e).toBe('cde')
	      Vue.nextTick(function () {
	        expect(spy).toHaveBeenCalledWith('cde', 'abe')
	        done()
	      })
	    })
	
	    it('inherit', function (done) {
	      var child = vm.$addChild({
	        inherit: true
	      })
	      expect(child.c).toBe('cd')
	
	      child.d = 'e f'
	      expect(vm.a).toBe('e')
	      expect(vm.b).toBe('f')
	      expect(vm.c).toBe('ef')
	      expect(vm.d).toBe('ef')
	      expect(vm.e).toBe('efe')
	      expect(child.a).toBe('e')
	      expect(child.b).toBe('f')
	      expect(child.c).toBe('ef')
	      expect(child.d).toBe('ef')
	      expect(vm.e).toBe('efe')
	      Vue.nextTick(function () {
	        expect(spy).toHaveBeenCalledWith('efe', 'cde')
	        done()
	      })
	    })
	
	    it('same definition object bound to different instance', function () {
	      vm = new Test({
	        data: {
	          a: 'A',
	          b: 'B'
	        }
	      })
	      expect(vm.c).toBe('AB')
	      expect(vm.d).toBe('AB')
	      vm.d = 'C D'
	      expect(vm.a).toBe('C')
	      expect(vm.b).toBe('D')
	      expect(vm.c).toBe('CD')
	      expect(vm.d).toBe('CD')
	      expect(vm.e).toBe('CDe')
	    })
	
	  })
	
	  describe('methods', function () {
	
	    it('should work and have correct context', function () {
	      var vm = new Vue({
	        data: {
	          a: 1
	        },
	        methods: {
	          test: function () {
	            expect(this instanceof Vue).toBe(true)
	            return this.a
	          }
	        }
	      })
	      expect(vm.test()).toBe(1)
	
	      var child = vm.$addChild({
	        inherit: true
	      })
	      expect(child.test()).toBe(1)
	    })
	
	  })
	
	  describe('meta', function () {
	
	    var vm = new Vue({
	      _meta: {
	        $index: 0,
	        $value: 'test'
	      }
	    })
	
	    it('should define metas only on vm', function () {
	      expect(vm.$index).toBe(0)
	      expect(vm.$value).toBe('test')
	      expect('$index' in vm.$data).toBe(false)
	      expect('$value' in vm.$data).toBe(false)
	    })
	
	  })
	
	})


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// test cases for edge cases & bug fixes
	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(11)
	
	describe('Misc', function () {
	
	  beforeEach(function () {
	    spyOn(_, 'warn')
	  })
	
	  it('should handle directive.bind() altering its childNode structure', function () {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div v-test>{{test}}</div>',
	      data: {
	        test: 'hi'
	      },
	      directives: {
	        test: {
	          bind: function () {
	            this.el.insertBefore(document.createTextNode('yo '),
	              this.el.firstChild)
	          }
	        }
	      }
	    })
	    expect(vm.$el.textContent).toBe('yo hi')
	  })
	
	  it('attached/detached hooks for transcluded components', function () {
	    var spy1 = jasmine.createSpy('attached')
	    var spy2 = jasmine.createSpy('detached')
	    var el = document.createElement('div')
	    el.innerHTML = '<outer v-ref="outter"><inner></inner></outer>'
	    document.body.appendChild(el)
	
	    var vm = new Vue({
	      el: el,
	      components: {
	        outer: {
	          template: '<content></content>'
	        },
	        inner: {
	          template: 'hi',
	          attached: spy1,
	          detached: spy2
	        }
	      }
	    })
	    expect(spy1).toHaveBeenCalled()
	    vm.$.outter.$remove()
	    expect(spy2).toHaveBeenCalled()
	  })
	
	  it('v-repeat on component root node with replace:true', function () {
	    var el = document.createElement('div')
	    var vm = new Vue({
	      el: el,
	      template: '<test></test>',
	      components: {
	        test: {
	          data: function () {
	            return { list: [1, 2, 3] }
	          },
	          template: '<div v-repeat="list">{{$value}}</div>',
	          replace: true
	        }
	      }
	    })
	    expect(vm.$el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div>')
	  })
	
	  // #922
	  it('template repeat inside svg', function () {
	    var el = document.createElement('div')
	    new Vue({
	      el: el,
	      template: '<svg><template v-repeat="list"><text>{{$value}}</text></template></svg>',
	      data: {
	        list: [1, 2, 3]
	      }
	    })
	    // IE inlines svg namespace
	    var xmlns = /\s?xmlns=".*svg"/
	    expect(el.innerHTML.replace(xmlns, '')).toBe('<svg><text>1</text><text>2</text><text>3</text></svg>')
	  })
	
	  // #1005
	  it('call lifecycle hooks for child components', function () {
	    Vue.options.replace = true
	    var el = document.createElement('div')
	    var logs = []
	    function log (n) {
	      return function () {
	        logs.push(n)
	      }
	    }
	    document.body.appendChild(el)
	    var vm = new Vue({
	      el: el,
	      attached: log(0),
	      ready: log(1),
	      detached: log(2),
	      beforeDestroy: log(3),
	      destroyed: log(4),
	      template: '<div><test></test><test></test></div>',
	      components: {
	        test: {
	          template: '<span>hi</span>',
	          attached: log(5),
	          ready: log(6),
	          detached: log(7),
	          beforeDestroy: log(8),
	          destroyed: log(9)
	        }
	      }
	    })
	    expect(vm.$el.innerHTML).toBe('<span>hi</span><span>hi</span>')
	    expect(logs.join()).toBe('0,5,6,5,6,1')
	    logs = []
	    vm.$destroy(true)
	    expect(logs.join()).toBe('3,8,9,8,9,2,7,7,4')
	    Vue.options.replace = false
	  })
	
	  // #1006
	  it('destroyed hook for components inside v-if', function (done) {
	    var spy = jasmine.createSpy('v-if destroyed hook')
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<template v-if="ok"><test></test></template>',
	      data: {
	        ok: true
	      },
	      components: {
	        test: {
	          destroyed: spy
	        }
	      }
	    })
	    vm.ok = false
	    Vue.nextTick(function () {
	      expect(spy).toHaveBeenCalled()
	      done()
	    })
	  })
	
	  it('frozen model, root', function (done) {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '{{msg}}',
	      data: Object.freeze({
	        msg: 'hi!'
	      })
	    })
	    expect(vm.$el.textContent).toBe('hi!')
	    vm.msg = 'ho!'
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('hi!')
	      done()
	    })
	  })
	
	  it('frozen model, non-root', function (done) {
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '{{msg}} {{frozen.msg}}',
	      data: {
	        msg: 'hi',
	        frozen: Object.freeze({
	          msg: 'frozen'
	        })
	      }
	    })
	    expect(vm.$el.textContent).toBe('hi frozen')
	    vm.msg = 'ho'
	    vm.frozen.msg = 'changed'
	    Vue.nextTick(function () {
	      expect(vm.$el.textContent).toBe('ho frozen')
	      done()
	    })
	  })
	
	  it('should not trigger deep/Array watchers when digesting', function (done) {
	    var spy1 = jasmine.createSpy('deep')
	    var spy2 = jasmine.createSpy('Array')
	    var spy3 = jasmine.createSpy('test')
	    var spy4 = jasmine.createSpy('deep-mutated')
	    var vm = new Vue({
	      el: 'body',
	      data: {
	        obj: {},
	        arr: [],
	        obj2: {}
	      },
	      watch: {
	        obj: {
	            handler: spy1,
	            deep: true
	        },
	        arr: spy2,
	        // if the watcher is watching the added value,
	        // it should still trigger properly
	        test: {
	          handler: spy3,
	          deep: true
	        },
	        // if the object is in fact mutated, it should
	        // still trigger.
	        obj2: {
	          handler: spy4,
	          deep: true
	        }
	      }
	    })
	    var test = []
	    var obj2 = vm.obj2
	    vm.$add('test', test)
	    obj2.$add('test', 123)
	    Vue.nextTick(function () {
	      expect(spy1).not.toHaveBeenCalled()
	      expect(spy2).not.toHaveBeenCalled()
	      expect(spy3).toHaveBeenCalledWith(test, undefined)
	      expect(spy4).toHaveBeenCalledWith(obj2, obj2)
	      done()
	    })
	  })
	
	  it('strict mode', function () {
	    Vue.config.strict = true
	    new Vue({
	      el: document.createElement('div'),
	      template: '<test></test>',
	      components: {
	        test: {
	          template: '<div v-strict>hi</div>'
	        }
	      },
	      directives: {
	        strict: function () {}
	      }
	    })
	    expect(hasWarned(_, 'Failed to resolve directive: strict')).toBe(true)
	    Vue.config.strict = false
	  })
	
	  it('strict mode for repeat instances', function () {
	    Vue.config.strict = true
	    var vm = new Vue({
	      el: document.createElement('div'),
	      template: '<div v-repeat="list"><test></test></div>',
	      data: {
	        list: [1, 2]
	      },
	      components: {
	        test: {
	          template: 'hi'
	        }
	      }
	    })
	    expect(_.warn).not.toHaveBeenCalled()
	    expect(vm.$el.textContent).toBe('hihi')
	    Vue.config.strict = false
	  })
	
	  it('class interpolation and v-class should work together', function (done) {
	    var el = document.createElement('div')
	    el.setAttribute('class', 'a {{classB}}')
	    el.setAttribute('v-class', 'c: showC')
	    var vm = new Vue({
	      el: el,
	      data: {
	        classB: 'b',
	        showC: true
	      }
	    })
	    assertClasses(['a', 'b', 'c'])
	    vm.classB = 'bb'
	    vm.showC = false
	    Vue.nextTick(function () {
	      assertClasses(['a', 'bb'])
	      done()
	    })
	
	    function assertClasses (expectedClasses) {
	      var classes = el.className.trim().split(/\s+/)
	      expect(classes.length).toBe(expectedClasses.length)
	      var has = expectedClasses.every(function (cls) {
	        return classes.indexOf(cls) > -1
	      })
	      expect(has).toBe(true)
	    }
	  })
	
	})


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var Dep = __webpack_require__(21)
	
	describe('Dep', function () {
	
	  var d
	  beforeEach(function () {
	    d = new Dep()
	  })
	
	  it('addSub', function () {
	    var sub = {}
	    d.addSub(sub)
	    expect(d.subs.length).toBe(1)
	    expect(d.subs.indexOf(sub)).toBe(0)
	  })
	
	  it('removeSub', function () {
	    var sub = {}
	    d.addSub(sub)
	    d.removeSub(sub)
	    expect(d.subs.length).toBe(0)
	    expect(d.subs.indexOf(sub)).toBe(-1)
	  })
	
	  it('notify', function () {
	    var sub = {
	      update: jasmine.createSpy('sub')
	    }
	    d.addSub(sub)
	    d.notify()
	    expect(sub.update).toHaveBeenCalled()
	  })
	})


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var Observer = __webpack_require__(58)
	var Dep = __webpack_require__(21)
	var config = __webpack_require__(6)
	var _ = __webpack_require__(3)
	
	describe('Observer', function () {
	
	  it('create on non-observables', function () {
	    // skip primitive value
	    var ob = Observer.create(1)
	    expect(ob).toBeUndefined()
	    // avoid vue instance
	    ob = Observer.create(new _.Vue())
	    expect(ob).toBeUndefined()
	    // avoid frozen objects
	    ob = Observer.create(Object.freeze({}))
	    expect(ob).toBeUndefined()
	  })
	
	  it('create on object', function () {
	    // on object
	    var obj = {
	      a: {},
	      b: {}
	    }
	    var ob = Observer.create(obj)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(obj)
	    expect(obj.__ob__).toBe(ob)
	    // should've walked children
	    expect(obj.a.__ob__ instanceof Observer).toBe(true)
	    expect(obj.b.__ob__ instanceof Observer).toBe(true)
	    // should return existing ob on already observed objects
	    var ob2 = Observer.create(obj)
	    expect(ob2).toBe(ob)
	  })
	
	  it('create on array', function () {
	    // on object
	    var arr = [{}, {}]
	    var ob = Observer.create(arr)
	    expect(ob instanceof Observer).toBe(true)
	    expect(ob.value).toBe(arr)
	    expect(arr.__ob__).toBe(ob)
	    // should've walked children
	    expect(arr[0].__ob__ instanceof Observer).toBe(true)
	    expect(arr[1].__ob__ instanceof Observer).toBe(true)
	  })
	
	  it('observing object prop change', function () {
	    var obj = { a: { b: 2 } }
	    Observer.create(obj)
	    // mock a watcher!
	    var watcher = {
	      deps: [],
	      addDep: function (dep) {
	        this.deps.push(dep)
	        dep.addSub(this)
	      },
	      update: jasmine.createSpy()
	    }
	    // collect dep
	    Dep.target = watcher
	    obj.a.b
	    Dep.target = null
	    expect(watcher.deps.length).toBe(3) // obj.a + a.b + b
	    obj.a.b = 3
	    expect(watcher.update.calls.count()).toBe(1)
	    // swap object
	    obj.a = { b: 4 }
	    expect(watcher.update.calls.count()).toBe(2)
	    watcher.deps = []
	    Dep.target = watcher
	    obj.a.b
	    Dep.target = null
	    expect(watcher.deps.length).toBe(3)
	    // set on the swapped object
	    obj.a.b = 5
	    expect(watcher.update.calls.count()).toBe(3)
	  })
	
	  it('observing $add/$set/$delete', function () {
	    var obj = { a: 1 }
	    var ob = Observer.create(obj)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    obj.$add('b', 2)
	    expect(obj.b).toBe(2)
	    expect(dep.notify.calls.count()).toBe(1)
	    obj.$delete('a')
	    expect(obj.hasOwnProperty('a')).toBe(false)
	    expect(dep.notify.calls.count()).toBe(2)
	    // should ignore adding an existing key
	    obj.$add('b', 3)
	    expect(obj.b).toBe(2)
	    expect(dep.notify.calls.count()).toBe(2)
	    // set existing key, should be a plain set and not
	    // trigger own ob's notify
	    obj.$set('b', 3)
	    expect(obj.b).toBe(3)
	    expect(dep.notify.calls.count()).toBe(2)
	    // set non-existing key
	    obj.$set('c', 1)
	    expect(obj.c).toBe(1)
	    expect(dep.notify.calls.count()).toBe(3)
	    // should ignore deleting non-existing key
	    obj.$delete('a')
	    expect(dep.notify.calls.count()).toBe(3)
	    // should work on non-observed objects
	    var obj2 = { a: 1 }
	    obj2.$delete('a')
	    expect(obj2.hasOwnProperty('a')).toBe(false)
	  })
	
	  it('observing array mutation', function () {
	    var arr = []
	    var ob = Observer.create(arr)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    var objs = [{}, {}, {}]
	    arr.push(objs[0])
	    arr.pop()
	    arr.unshift(objs[1])
	    arr.shift()
	    arr.splice(0, 0, objs[2])
	    arr.sort()
	    arr.reverse()
	    expect(dep.notify.calls.count()).toBe(7)
	    // inserted elements should be observed
	    objs.forEach(function (obj) {
	      expect(obj.__ob__ instanceof Observer).toBe(true)
	    })
	  })
	
	  it('array $set', function () {
	    var arr = [1]
	    var ob = Observer.create(arr)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    arr.$set(0, 2)
	    expect(arr[0]).toBe(2)
	    expect(dep.notify.calls.count()).toBe(1)
	    // setting out of bound index
	    arr.$set(2, 3)
	    expect(arr[2]).toBe(3)
	    expect(dep.notify.calls.count()).toBe(2)
	  })
	
	  it('array $remove', function () {
	    var arr = [{}, {}]
	    var obj1 = arr[0]
	    var obj2 = arr[1]
	    var ob = Observer.create(arr)
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    // remove by index
	    arr.$remove(0)
	    expect(arr.length).toBe(1)
	    expect(arr[0]).toBe(obj2)
	    expect(dep.notify.calls.count()).toBe(1)
	    // remove by identity, not in array
	    arr.$remove(obj1)
	    expect(arr.length).toBe(1)
	    expect(arr[0]).toBe(obj2)
	    expect(dep.notify.calls.count()).toBe(1)
	    // remove by identity, in array
	    arr.$remove(obj2)
	    expect(arr.length).toBe(0)
	    expect(dep.notify.calls.count()).toBe(2)
	  })
	
	  it('no proto', function () {
	    config.proto = false
	    // object
	    var obj = {a: 1}
	    var ob = Observer.create(obj)
	    expect(obj.$add).toBeTruthy()
	    expect(obj.$delete).toBeTruthy()
	    var dep = ob.dep
	    spyOn(dep, 'notify')
	    obj.$add('b', 2)
	    expect(dep.notify).toHaveBeenCalled()
	    // array
	    var arr = [1, 2, 3]
	    var ob2 = Observer.create(arr)
	    expect(arr.$set).toBeTruthy()
	    expect(arr.$remove).toBeTruthy()
	    expect(arr.push).not.toBe([].push)
	    var dep2 = ob2.dep
	    spyOn(dep2, 'notify')
	    arr.push(1)
	    expect(dep2.notify).toHaveBeenCalled()
	    config.proto = true
	  })
	
	})


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(15).parse
	
	describe('Directive Parser', function () {
	
	  it('simple', function () {
	    var res = parse('exp')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('exp')
	    expect(res[0].raw).toBe('exp')
	  })
	
	  it('with arg', function () {
	    var res = parse('arg:exp')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('exp')
	    expect(res[0].arg).toBe('arg')
	    expect(res[0].raw).toBe('arg:exp')
	  })
	
	  it('with filters', function () {
	    var res = parse(' arg : exp | abc de \'ok\' | bcd')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('exp')
	    expect(res[0].arg).toBe('arg')
	    expect(res[0].raw).toBe('arg : exp | abc de \'ok\' | bcd')
	    expect(res[0].filters.length).toBe(2)
	    expect(res[0].filters[0].name).toBe('abc')
	    expect(res[0].filters[0].args.length).toBe(2)
	    expect(res[0].filters[0].args[0].value).toBe('de')
	    expect(res[0].filters[0].args[0].dynamic).toBe(true)
	    expect(res[0].filters[0].args[1].value).toBe('ok')
	    expect(res[0].filters[0].args[1].dynamic).toBe(false)
	    expect(res[0].filters[1].name).toBe('bcd')
	    expect(res[0].filters[1].args).toBeUndefined()
	  })
	
	  it('double pipe', function () {
	    var res = parse('a || b | c')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('a || b')
	    expect(res[0].raw).toBe('a || b | c')
	    expect(res[0].filters.length).toBe(1)
	    expect(res[0].filters[0].name).toBe('c')
	    expect(res[0].filters[0].args).toBeUndefined()
	  })
	
	  it('single quote + boolean', function () {
	    var res = parse('a ? \'b\' : c')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('a ? \'b\' : c')
	    expect(res[0].filters).toBeUndefined()
	  })
	
	  it('double quote + boolean', function () {
	    var res = parse('"a:b:c||d|e|f" || d ? a : b')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('"a:b:c||d|e|f" || d ? a : b')
	    expect(res[0].filters).toBeUndefined()
	    expect(res[0].arg).toBeUndefined()
	  })
	
	  it('multiple simple clauses', function () {
	    var res = parse('a, b, c')
	    expect(res.length).toBe(3)
	    expect(res[0].expression).toBe('a')
	    expect(res[1].expression).toBe('b')
	    expect(res[2].expression).toBe('c')
	  })
	
	  it('multiple complex clauses', function () {
	    var res = parse('a:b | c | j, d:e | f | k l, g:h | i "k"')
	    expect(res.length).toBe(3)
	
	    expect(res[0].arg).toBe('a')
	    expect(res[0].expression).toBe('b')
	    expect(res[0].filters.length).toBe(2)
	    expect(res[0].filters[0].name).toBe('c')
	    expect(res[0].filters[0].args).toBeUndefined()
	    expect(res[0].filters[1].name).toBe('j')
	    expect(res[0].filters[1].args).toBeUndefined()
	
	    expect(res[1].arg).toBe('d')
	    expect(res[1].expression).toBe('e')
	    expect(res[1].filters.length).toBe(2)
	    expect(res[1].filters[0].name).toBe('f')
	    expect(res[1].filters[0].args).toBeUndefined()
	    expect(res[1].filters[1].name).toBe('k')
	    expect(res[1].filters[1].args.length).toBe(1)
	    expect(res[1].filters[1].args[0].value).toBe('l')
	    expect(res[1].filters[1].args[0].dynamic).toBe(true)
	
	    expect(res[2].arg).toBe('g')
	    expect(res[2].expression).toBe('h')
	    expect(res[2].filters.length).toBe(1)
	    expect(res[2].filters[0].name).toBe('i')
	    expect(res[2].filters[0].args.length).toBe(1)
	    expect(res[2].filters[0].args[0].value).toBe('k')
	    expect(res[2].filters[0].args[0].dynamic).toBe(false)
	  })
	
	  it('nexted function calls + array/object literals', function () {
	    var res = parse('click:test(c.indexOf(d,f),"e,f"), input: d || [e,f], ok:{a:1,b:2}')
	    expect(res.length).toBe(3)
	    expect(res[0].arg).toBe('click')
	    expect(res[0].expression).toBe('test(c.indexOf(d,f),"e,f")')
	    expect(res[1].arg).toBe('input')
	    expect(res[1].expression).toBe('d || [e,f]')
	    expect(res[1].filters).toBeUndefined()
	    expect(res[2].arg).toBe('ok')
	    expect(res[2].expression).toBe('{a:1,b:2}')
	  })
	
	  it('arguments with non-indentifier chars', function () {
	    var res = parse('show.bs.collapse:test, a@b%c:test')
	    expect(res.length).toBe(2)
	    expect(res[0].arg).toBe('show.bs.collapse')
	    expect(res[0].expression).toBe('test')
	    expect(res[1].arg).toBe('a@b%c')
	    expect(res[1].expression).toBe('test')
	  })
	
	  it('quoted arguments', function () {
	    var res = parse('"xlink:href":a?"fsef":ff')
	    expect(res.length).toBe(1)
	    expect(res[0].arg).toBe('xlink:href')
	  })
	
	  it('cache', function () {
	    var res1 = parse('a || b | c')
	    var res2 = parse('a || b | c')
	    expect(res1).toBe(res2)
	  })
	})


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var expParser = __webpack_require__(22)
	var _ = __webpack_require__(3)
	
	var testCases = [
	  {
	    // simple path
	    exp: 'a.b.d',
	    scope: {
	      a: {b: {d: 123}}
	    },
	    expected: 123,
	    paths: ['a']
	  },
	  // complex path
	  {
	    exp: 'a["b"].c',
	    scope: {
	      a: {b: {c: 234}}
	    },
	    expected: 234,
	    paths: ['a']
	  },
	  {
	    // string concat
	    exp: 'a+b',
	    scope: {
	      a: 'hello',
	      b: 'world'
	    },
	    expected: 'helloworld',
	    paths: ['a', 'b']
	  },
	  {
	    // math
	    exp: 'a - b * 2 + 45',
	    scope: {
	      a: 100,
	      b: 23
	    },
	    expected: 100 - 23 * 2 + 45,
	    paths: ['a', 'b']
	  },
	  {
	    // boolean logic
	    exp: '(a && b) ? c : d || e',
	    scope: {
	      a: true,
	      b: false,
	      c: null,
	      d: false,
	      e: 'worked'
	    },
	    expected: 'worked',
	    paths: ['a', 'b', 'c', 'd', 'e']
	  },
	  {
	    // inline string with newline
	    exp: "a + 'hel\nlo'",
	    scope: {
	      a: 'inline '
	    },
	    expected: 'inline hel\nlo',
	    paths: ['a']
	  },
	  {
	    // multiline expressions
	    exp: "{\n a: '35',\n b: c}",
	    scope: {c: 32},
	    expected: { a: '35', b: 32 }
	  },
	  {
	    // dollar signs and underscore
	    exp: "_a + ' ' + $b",
	    scope: {
	      _a: 'underscore',
	      $b: 'dollar'
	    },
	    expected: 'underscore dollar',
	    paths: ['_a', '$b']
	  },
	  {
	    // complex with nested values
	    exp: "todo.title + ' : ' + (todo['done'] ? 'yep' : 'nope')",
	    scope: {
	      todo: {
	        title: 'write tests',
	        done: false
	      }
	    },
	    expected: 'write tests : nope',
	    paths: ['todo']
	  },
	  {
	    // expression with no data variables
	    exp: "'a' + 'b'",
	    scope: {},
	    expected: 'ab',
	    paths: []
	  },
	  {
	    // values with same variable name inside strings
	    exp: "'\"test\"' + test + \"'hi'\" + hi",
	    scope: {
	      test: 1,
	      hi: 2
	    },
	    expected: '"test"1\'hi\'2',
	    paths: ['test', 'hi']
	  },
	  {
	    // expressions with inline object literals
	    exp: "sortRows({ column: 'name', test: haha, durrr: 123 })",
	    scope: {
	      sortRows: function (params) {
	        return params.column + params.test + params.durrr
	      },
	      haha: 'hoho'
	    },
	    expected: 'namehoho123',
	    paths: ['sortRows', 'haha']
	  },
	  {
	    // space between path segments
	    exp: '  a    .   b    .  c + d',
	    scope: {
	      a: { b: { c: 12 }},
	      d: 3
	    },
	    expected: 15,
	    paths: ['a', 'd']
	  },
	  {
	    // space in bracket identifiers
	    exp: ' a[ " a.b.c " ] + b  [ \' e \' ]',
	    scope: {
	      a: {' a.b.c ': 123},
	      b: {' e ': 234}
	    },
	    expected: 357,
	    paths: ['a', 'b']
	  },
	  {
	    // number literal
	    exp: 'a * 1e2 + 1.1',
	    scope: {
	      a: 3
	    },
	    expected: 301.1,
	    paths: ['a']
	  },
	  {
	    // keyowrd + keyword literal
	    exp: 'true && a.true',
	    scope: {
	      a: { 'true': false }
	    },
	    expected: false,
	    paths: ['a']
	  },
	  {
	    // super complex
	    exp: ' $a + b[ "  a.b.c  " ][\'123\'].$e&&c[ " d " ].e + Math.round(e) ',
	    scope: {
	      $a: 1,
	      b: {
	        '  a.b.c  ': {
	          '123': { $e: 2 }
	        }
	      },
	      c: { ' d ': {e: 3}},
	      e: 4.5
	    },
	    expected: 8,
	    paths: ['$a', 'b', 'c', 'e']
	  },
	  {
	    // Math global, simple path
	    exp: 'Math.PI',
	    scope: {},
	    expected: Math.PI,
	    paths: []
	  },
	  {
	    // Math global, exp
	    exp: 'Math.sin(a)',
	    scope: {
	      a: 1
	    },
	    expected: Math.sin(1),
	    paths: ['a']
	  },
	  {
	    // boolean literal
	    exp: 'true',
	    scope: {
	      true: false
	    },
	    expected: true,
	    paths: []
	  },
	  {
	    // Date global
	    exp: 'Date.now() > new Date("2000-01-01")',
	    scope: {},
	    expected: true,
	    paths: []
	  },
	  // typeof operator
	  {
	    exp: 'typeof test === "string"',
	    scope: { test: '123' },
	    expected: true,
	    paths: ['test']
	  },
	  // isNaN
	  {
	    exp: 'isNaN(a)',
	    scope: { a: 2 },
	    expected: false,
	    paths: ['a']
	  },
	  // parseFloat & parseInt
	  {
	    exp: 'parseInt(a, 10) + parseFloat(b)',
	    scope: { a: 2.33, b: '3.45' },
	    expected: 5.45,
	    paths: ['a', 'b']
	  }
	]
	
	describe('Expression Parser', function () {
	
	  testCases.forEach(function (testCase) {
	    it('parse getter: ' + testCase.exp, function () {
	      var res = expParser.parse(testCase.exp, true)
	      expect(res.get(testCase.scope)).toEqual(testCase.expected)
	    })
	  })
	
	  it('dynamic setter', function () {
	    // make sure checkSetter works:
	    // should add setter if a cache hit doesn't have hit function.
	    expParser.parse('a[b]')
	    var res = expParser.parse('a[b]', true)
	    var scope = {
	      a: { c: 1 },
	      b: 'c'
	    }
	    res.set(scope, 2)
	    expect(scope.a.c).toBe(2)
	  })
	
	  it('simple path setter', function () {
	    var res = expParser.parse('a.b.c', true)
	    var scope = {}
	    expect(function () {
	      res.set(scope, 123)
	    }).not.toThrow()
	    scope.a = {b: {c: 0}}
	    res.set(scope, 123)
	    expect(scope.a.b.c).toBe(123)
	  })
	
	  it('cache', function () {
	    var res1 = expParser.parse('a + b')
	    var res2 = expParser.parse('a + b')
	    expect(res1).toBe(res2)
	  })
	
	  describe('invalid expression', function () {
	
	    beforeEach(function () {
	      spyOn(_, 'warn')
	    })
	
	    it('should warn on invalid expression', function () {
	      expect(_.warn).not.toHaveBeenCalled()
	      expParser.parse('a--b"ffff')
	      expect(hasWarned(_, 'Invalid expression')).toBe(true)
	    })
	
	    if (leftHandThrows()) {
	      it('should warn on invalid left hand expression for setter', function () {
	        expect(_.warn).not.toHaveBeenCalled()
	        expParser.parse('a+b', true)
	        expect(hasWarned(_, 'Invalid setter function body')).toBe(true)
	      })
	    }
	
	    it('should warn if expression contains improper reserved keywords', function () {
	      expect(_.warn).not.toHaveBeenCalled()
	      expParser.parse('break + 1')
	      expect(hasWarned(_, 'Avoid using reserved keywords')).toBe(true)
	    })
	  })
	})
	
	/**
	 * check if creating a new Function with invalid left-hand
	 * assignment would throw
	 */
	
	function leftHandThrows () {
	  try {
	    new Function('a + b = 1')
	  } catch (e) {
	    return true
	  }
	}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var Path = __webpack_require__(23)
	
	function assertPath (str, expected) {
	  var path = Path.parse(str)
	  expect(pathMatch(path, expected)).toBe(true)
	}
	
	function assertInvalidPath (str) {
	  var path = Path.parse(str)
	  expect(path).toBeUndefined()
	}
	
	function pathMatch (a, b) {
	  if (a.length !== b.length) {
	    return false
	  }
	  for (var i = 0; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      return false
	    }
	  }
	  return true
	}
	
	describe('Path Parser', function () {
	
	  it('parse', function () {
	    assertPath('', [])
	    assertPath(' ', [])
	    assertPath('a', ['a'])
	    assertPath('a.b', ['a', 'b'])
	    assertPath('a. b', ['a', 'b'])
	    assertPath('a .b', ['a', 'b'])
	    assertPath('a . b', ['a', 'b'])
	    assertPath(' a . b ', ['a', 'b'])
	    assertPath('a[0]', ['a', '0'])
	    assertPath('a [0]', ['a', '0'])
	    assertPath('a[0][1]', ['a', '0', '1'])
	    assertPath('a [ 0 ] [ 1 ] ', ['a', '0', '1'])
	    assertPath('[1234567890] ', ['1234567890'])
	    assertPath(' [1234567890] ', ['1234567890'])
	    assertPath('opt0', ['opt0'])
	    assertPath('$foo.$bar._baz', ['$foo', '$bar', '_baz'])
	    assertPath('foo["baz"]', ['foo', 'baz'])
	    assertPath('foo["b\\"az"]', ['foo', 'b"az'])
	    assertPath("foo['b\\'az']", ['foo', "b'az"])
	    assertPath('a[b][c]', ['a', '*b', '*c'])
	    assertPath('a[ b ][ c ]', ['a', '*b', '*c'])
	  })
	
	  it('handle invalid paths', function () {
	    assertInvalidPath('.')
	    assertInvalidPath(' . ')
	    assertInvalidPath('..')
	    assertInvalidPath('a[4')
	    assertInvalidPath('a.b.')
	    assertInvalidPath('a,b')
	    assertInvalidPath('a["foo]')
	    assertInvalidPath('[0x04]')
	    assertInvalidPath('[0foo]')
	    assertInvalidPath('[foo-bar]')
	    assertInvalidPath('foo-bar')
	    assertInvalidPath('42')
	    assertInvalidPath('a[04]')
	    assertInvalidPath(' a [ 04 ]')
	    assertInvalidPath('  42   ')
	    assertInvalidPath('foo["bar]')
	    assertInvalidPath("foo['bar]")
	    assertInvalidPath('foo[bar + boo]')
	    assertInvalidPath('a]')
	  })
	
	  it('caching', function () {
	    var path1 = Path.parse('a.b.c')
	    var path2 = Path.parse('a.b.c')
	    expect(path1).toBe(path2)
	  })
	
	  it('get', function () {
	    var path = 'a[\'b"b"c\'][0]'
	    var obj = {
	      a: {
	        'b"b"c': [12345]
	      }
	    }
	    expect(Path.get(obj, path)).toBe(12345)
	    expect(Path.get(obj, 'a.c')).toBeUndefined()
	  })
	
	  it('get dynamic', function () {
	    var path = 'a[b]'
	    var obj = {
	      a: {
	        key: 123
	      },
	      b: 'key'
	    }
	    expect(Path.get(obj, path)).toBe(123)
	  })
	
	  it('set', function () {
	    var path = 'a.b.c'
	    var obj = {
	      a: {
	        b: {
	          c: null
	        }
	      }
	    }
	    var res = Path.set(obj, path, 12345)
	    expect(res).toBe(true)
	    expect(obj.a.b.c).toBe(12345)
	  })
	
	  it('set non-existent', function () {
	    var target = {}
	    var res = Path.set(target, 'a.b.c', 123)
	    expect(res).toBe(true)
	    expect(target.a.b.c).toBe(123)
	  })
	
	  it('set dynamic non-existent', function () {
	    var target = {
	      key: 'what',
	      obj: {}
	    }
	    var res = Path.set(target, 'obj[key]', 123)
	    expect(res).toBe(true)
	    expect(target.obj.what).toBe(123)
	  })
	
	  it('set on prototype chain', function () {
	    var parent = { a: {} }
	    var target = Object.create(parent)
	    var res = Path.set(target, 'a.b.c', 123)
	    expect(res).toBe(true)
	    expect(target.hasOwnProperty('a')).toBe(false)
	    expect(parent.a.b.c).toBe(123)
	  })
	
	  it('set array', function () {
	    var target = {
	      a: []
	    }
	    target.a.$set = jasmine.createSpy('Array.$set')
	    var res = Path.set(target, 'a[1]', 123)
	    expect(res).toBe(true)
	    expect(target.a.$set).toHaveBeenCalledWith('1', 123)
	  })
	
	  it('set invalid', function () {
	    var res = Path.set({}, 'ab[c]d', 123)
	    expect(res).toBe(false)
	  })
	
	})


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(25)
	var parse = templateParser.parse
	var testString = '<div>hello</div><p class="test">world</p>'
	
	if (_.inBrowser) {
	
	  describe('Template Parser', function () {
	
	    it('should return same if argument is already a fragment', function () {
	      var frag = document.createDocumentFragment()
	      var res = parse(frag)
	      expect(res).toBe(frag)
	    })
	
	    it('should return content if argument is a valid template node', function () {
	      var templateNode = document.createElement('template')
	      if (!templateNode.content) {
	        // mock the content
	        templateNode.content = document.createDocumentFragment()
	      }
	      var res = parse(templateNode)
	      expect(res).toBe(templateNode.content)
	    })
	
	    it('should parse if argument is a template string', function () {
	      var res = parse(testString)
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(2)
	      expect(res.querySelector('.test').textContent).toBe('world')
	    })
	
	    it('should work if the template string doesn\'t contain tags', function () {
	      var res = parse('hello!')
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(1)
	      expect(res.firstChild.nodeType).toBe(3) // Text node
	    })
	
	    it('should handle string that contains html entities', function () {
	      var res = parse('hi&lt;hi')
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(1)
	      expect(res.firstChild.nodeValue).toBe('hi<hi')
	    })
	
	    it('should parse textContent if argument is a script node', function () {
	      var node = document.createElement('script')
	      node.textContent = testString
	      var res = parse(node)
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(2)
	      expect(res.querySelector('.test').textContent).toBe('world')
	    })
	
	    it('should parse innerHTML if argument is a normal node', function () {
	      var node = document.createElement('div')
	      node.innerHTML = testString
	      var res = parse(node)
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(2)
	      expect(res.querySelector('.test').textContent).toBe('world')
	    })
	
	    it('should retrieve and parse if argument is an id selector', function () {
	      var node = document.createElement('script')
	      node.setAttribute('id', 'template-test')
	      node.setAttribute('type', 'x/template')
	      node.textContent = testString
	      document.head.appendChild(node)
	      var res = parse('#template-test')
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(2)
	      expect(res.querySelector('.test').textContent).toBe('world')
	      document.head.removeChild(node)
	    })
	
	    it('should work for table elements', function () {
	      var res = parse('<td>hello</td>')
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(1)
	      expect(res.firstChild.tagName).toBe('TD')
	      expect(res.firstChild.textContent).toBe('hello')
	    })
	
	    it('should work for option elements', function () {
	      var res = parse('<option>hello</option>')
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(1)
	      expect(res.firstChild.tagName).toBe('OPTION')
	      expect(res.firstChild.textContent).toBe('hello')
	    })
	
	    it('should work for svg elements', function () {
	      var res = parse('<circle></circle>')
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.childNodes.length).toBe(1)
	      // SVG tagNames should be lowercase because they are XML nodes not HTML
	      expect(res.firstChild.tagName).toBe('circle')
	      expect(res.firstChild.namespaceURI).toBe('http://www.w3.org/2000/svg')
	    })
	
	    it('should cache template strings', function () {
	      var res1 = parse(testString)
	      var res2 = parse(testString)
	      expect(res1).toBe(res2)
	    })
	
	    it('should clone', function () {
	      var res1 = parse(testString, true)
	      var res2 = parse(testString, true)
	      expect(res1).not.toBe(res2)
	    })
	
	    it('should cache id selectors', function () {
	      var node = document.createElement('script')
	      node.setAttribute('id', 'template-test')
	      node.setAttribute('type', 'x/template')
	      node.textContent = '<div>never seen before content</div>'
	      document.head.appendChild(node)
	      var res1 = parse('#template-test')
	      var res2 = parse('#template-test')
	      expect(res1).toBe(res2)
	      document.head.removeChild(node)
	    })
	
	    it('should be able to not use id selectors', function () {
	      var res = parse('#hi', false, true)
	      expect(res instanceof DocumentFragment).toBeTruthy()
	      expect(res.firstChild.nodeValue).toBe('#hi')
	    })
	
	    it('should deal with Safari template clone bug', function () {
	      var a = document.createElement('div')
	      a.innerHTML = '<template>1</template>'
	      var c = templateParser.clone(a)
	      expect(c.firstChild.innerHTML).toBe('1')
	    })
	
	    it('should deal with IE textarea clone bug', function () {
	      var t = document.createElement('textarea')
	      t.placeholder = 't'
	      var c = templateParser.clone(t)
	      expect(c.value).toBe('')
	    })
	  })
	}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var textParser = __webpack_require__(13)
	var dirParser = __webpack_require__(15)
	var config = __webpack_require__(6)
	var Vue = __webpack_require__(2)
	
	var testCases = [
	  {
	    // no tags
	    text: 'haha',
	    expected: null
	  },
	  {
	    // basic
	    text: 'a {{ a }} c',
	    expected: [
	      { value: 'a ' },
	      { tag: true, value: 'a', html: false, oneTime: false },
	      { value: ' c' }
	    ]
	  },
	  {
	    // html
	    text: '{{ text }} and {{{ html }}}',
	    expected: [
	      { tag: true, value: 'text', html: false, oneTime: false },
	      { value: ' and ' },
	      { tag: true, value: 'html', html: true, oneTime: false }
	    ]
	  },
	  {
	    // one time
	    text: '{{* text }} and {{{* html }}}',
	    expected: [
	      { tag: true, value: 'text', html: false, oneTime: true },
	      { value: ' and ' },
	      { tag: true, value: 'html', html: true, oneTime: true }
	    ]
	  },
	  {
	    text: '[{{abc}}]',
	    expected: [
	      { value: '[' },
	      { tag: true, value: 'abc', html: false, oneTime: false },
	      { value: ']' }
	    ]
	  },
	  // multiline
	  {
	    text: '{{\n  value  \n}}',
	    expected: [
	      { tag: true, value: 'value', html: false, oneTime: false }
	    ]
	  }
	]
	
	function assertParse (test) {
	  var res = textParser.parse(test.text)
	  var exp = test.expected
	  if (!Array.isArray(exp)) {
	    expect(res).toBe(exp)
	  } else {
	    expect(res.length).toBe(exp.length)
	    res.forEach(function (r, i) {
	      var e = exp[i]
	      for (var key in e) {
	        expect(e[key]).toEqual(r[key])
	      }
	    })
	  }
	}
	
	describe('Text Parser', function () {
	
	  it('parse', function () {
	    testCases.forEach(assertParse)
	  })
	
	  it('cache', function () {
	    var res1 = textParser.parse('{{a}}')
	    var res2 = textParser.parse('{{a}}')
	    expect(res1).toBe(res2)
	  })
	
	  it('custom delimiters', function () {
	    config.delimiters = ['[%', '%]']
	    assertParse({
	      text: '[%* text %] and [[% html %]]',
	      expected: [
	        { tag: true, value: 'text', html: false, oneTime: true },
	        { value: ' and ' },
	        { tag: true, value: 'html', html: true, oneTime: false }
	      ]
	    })
	    config.delimiters = ['{{', '}}']
	  })
	
	  it('tokens to expression', function () {
	    var tokens = textParser.parse('view-{{test + 1}}-test-{{ok + "|"}}')
	    var exp = textParser.tokensToExp(tokens)
	    expect(exp).toBe('"view-"+(test + 1)+"-test-"+(ok + "|")')
	  })
	
	  it('tokens to expression, single expression', function () {
	    var tokens = textParser.parse('{{test}}')
	    var exp = textParser.tokensToExp(tokens)
	    // should not have parens so it can be treated as a
	    // simple path by the expression parser
	    expect(exp).toBe('test')
	  })
	
	  it('tokens to expression with oneTime tags & vm', function () {
	    var vm = new Vue({
	      data: { test: 'a', ok: 'b' }
	    })
	    var tokens = textParser.parse('view-{{*test}}-test-{{ok}}')
	    var exp = textParser.tokensToExp(tokens, vm)
	    expect(exp).toBe('"view-"+"a"+"-test-"+(ok)')
	  })
	
	  it('tokens to expression with filters, multiple expressions', function () {
	    var tokens = textParser.parse('a {{b | c d | f}} e')
	    var exp = textParser.tokensToExp(tokens)
	    var filters = dirParser.parse('b | c d | f')[0].filters
	    expect(exp).toBe(
	      '"a "+this._applyFilters(b,null,' +
	        JSON.stringify(filters) +
	      ',false)+" e"')
	  })
	
	})


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = Vue.util
	
	describe('Staggering Transitions', function () {
	
	  var el
	  var delayAmount = 50
	  var multiplier = 2.5 // the bigger the slower, but safer
	  beforeEach(function () {
	    el = document.createElement('div')
	    document.body.appendChild(el)
	  })
	
	  afterEach(function () {
	    document.body.removeChild(el)
	  })
	
	  it('as attribute', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-repeat="list" v-transition="stagger" stagger="' + delayAmount + '">{{a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    assertStagger(vm, done)
	  })
	
	  it('as hook', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-repeat="list" v-transition="stagger">{{a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          stagger: function (i) {
	            return i * delayAmount
	          },
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    assertStagger(vm, done)
	  })
	
	  it('remove while staggered', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-repeat="list" v-transition="stagger" stagger="' + delayAmount + '">{{a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    vm.list = [{a: 1}, {a: 2}]
	    expect(el.innerHTML).toBe('')
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div class="stagger-transition stagger-enter">1</div>')
	      vm.list = [vm.list[0]] // remove second
	      setTimeout(function () {
	        // should have only one
	        expect(el.innerHTML).toBe('<div class="stagger-transition">1</div>')
	        done()
	      }, delayAmount * multiplier)
	    })
	  })
	
	  it('reorder while staggered', function (done) {
	    var vm = new Vue({
	      el: el,
	      template: '<div v-repeat="list" v-transition="stagger" stagger="' + delayAmount + '">{{a}}</div>',
	      data: {
	        list: []
	      },
	      transitions: {
	        stagger: {
	          enter: function (el, done) {
	            _.nextTick(done)
	          },
	          leave: function (el, done) {
	            _.nextTick(done)
	          }
	        }
	      }
	    })
	    vm.list = [{a: 1}, {a: 2}, {a: 3}]
	    expect(el.innerHTML).toBe('')
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div class="stagger-transition stagger-enter">1</div>')
	      vm.list = [vm.list[2], vm.list[1], vm.list[0]] // reorder
	      setTimeout(function () {
	        // should have correct order
	        expect(el.innerHTML).toBe(
	          '<div class="stagger-transition">3</div>' +
	          '<div class="stagger-transition">2</div>' +
	          '<div class="stagger-transition">1</div>'
	        )
	        done()
	      }, delayAmount * 3)
	    })
	  })
	
	  function assertStagger (vm, done) {
	    vm.list = [{a: 1}, {a: 2}]
	    expect(el.innerHTML).toBe('')
	    _.nextTick(function () {
	      expect(el.innerHTML).toBe('<div class="stagger-transition stagger-enter">1</div>')
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div class="stagger-transition">1</div>')
	        setTimeout(function () {
	          expect(el.innerHTML).toBe(
	            '<div class="stagger-transition">1</div>' +
	            '<div class="stagger-transition">2</div>'
	          )
	          vm.list = []
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe(
	              '<div class="stagger-transition stagger-leave">1</div>' +
	              '<div class="stagger-transition">2</div>'
	            )
	            _.nextTick(function () {
	              expect(el.innerHTML).toBe('<div class="stagger-transition">2</div>')
	              setTimeout(function () {
	                expect(el.innerHTML).toBe('')
	                done()
	              }, delayAmount * multiplier)
	            })
	          })
	        }, delayAmount * multiplier)
	      })
	    })
	  }
	})


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var transition = __webpack_require__(34)
	var Transition = __webpack_require__(40)
	
	if (_.inBrowser && !_.isIE9) {
	  describe('Transition', function () {
	
	    // insert a test css
	    function insertCSS (text) {
	      var cssEl = document.createElement('style')
	      cssEl.textContent = text
	      document.head.appendChild(cssEl)
	    }
	
	    var duration = '50ms'
	    insertCSS(
	      '.test {\
	        transition: opacity ' + duration + ' ease;\
	        -webkit-transition: opacity ' + duration + ' ease;}'
	    )
	    insertCSS('.test-enter, .test-leave { opacity: 0; }')
	    insertCSS(
	      '.test-anim-enter {\
	        animation: test-enter ' + duration + ';\
	        -webkit-animation: test-enter ' + duration + ';}\
	      .test-anim-leave {\
	        animation: test-leave ' + duration + ';\
	        -webkit-animation: test-leave ' + duration + ';}\
	      @keyframes test-enter {\
	        from { opacity: 0 }\
	        to { opacity: 1 }}\
	      @-webkit-keyframes test-enter {\
	        from { opacity: 0 }\
	        to { opacity: 1 }}\
	      @keyframes test-leave {\
	        from { opacity: 1 }\
	        to { opacity: 0 }}\
	      @-webkit-keyframes test-leave {\
	        from { opacity: 1 }\
	        to { opacity: 0 }}'
	    )
	
	    describe('Wrapper methods', function () {
	
	      var spy, el, target, parent, vm
	      beforeEach(function () {
	        el = document.createElement('div')
	        target = document.createElement('div')
	        parent = document.createElement('div')
	        parent.appendChild(target)
	        spy = jasmine.createSpy('transition skip')
	        vm = new Vue()
	        spyOn(transition, 'apply')
	      })
	
	      it('append', function () {
	        transition.append(el, parent, vm, spy)
	        expect(parent.lastChild).toBe(el)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('before', function () {
	        transition.before(el, target, vm, spy)
	        expect(parent.firstChild).toBe(el)
	        expect(el.nextSibling).toBe(target)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('remove', function () {
	        transition.remove(target, vm, spy)
	        expect(parent.childNodes.length).toBe(0)
	        expect(spy).toHaveBeenCalled()
	      })
	
	      it('removeThenAppend', function () {
	        transition.removeThenAppend(target, el, vm, spy)
	        expect(parent.childNodes.length).toBe(0)
	        expect(el.firstChild).toBe(target)
	        expect(spy).toHaveBeenCalled()
	      })
	
	    })
	
	    describe('Skipping', function () {
	
	      var el, vm, op, cb
	      beforeEach(function () {
	        el = document.createElement('div')
	        op = jasmine.createSpy('transition skip op')
	        cb = jasmine.createSpy('transition skip cb')
	        vm = new Vue()
	      })
	
	      it('skip el with no transition data', function () {
	        transition.apply(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })
	
	      it('skip vm still being compiled', function () {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        transition.apply(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })
	
	      it('skip vm with parent still being compiled', function () {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        var child = vm.$addChild({
	          el: el
	        })
	        expect(child._isCompiled).toBe(true)
	        transition.apply(el, 1, op, child, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })
	
	      it('skip when no css transition is available', function () {
	        var e = _.transitionEndEvent
	        _.transitionEndEvent = null
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        vm.$mount(el)
	        transition.apply(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	        _.transitionEndEvent = e
	      })
	
	    })
	
	    describe('CSS transitions', function () {
	
	      var vm, el, op, cb, hooks
	      beforeEach(function (done) {
	        el = document.createElement('div')
	        vm = new Vue({ el: el })
	        op = jasmine.createSpy('css op')
	        cb = jasmine.createSpy('css cb')
	        document.body.appendChild(el)
	        hooks = {
	          beforeEnter: jasmine.createSpy('beforeEnter'),
	          enter: jasmine.createSpy('enter'),
	          afterEnter: jasmine.createSpy('afterEnter'),
	          beforeLeave: jasmine.createSpy('beforeLeave'),
	          leave: jasmine.createSpy('leave'),
	          afterLeave: jasmine.createSpy('afterLeave')
	        }
	        // !IMPORTANT!
	        // this ensures we force a layout for every test.
	        _.nextTick(done)
	      })
	
	      afterEach(function () {
	        document.body.removeChild(el)
	      })
	
	      it('skip on 0s duration (execute right at next frame)', function (done) {
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        el.style.transition =
	        el.style.WebkitTransition = 'opacity 0s ease'
	        transition.apply(el, 1, op, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	          expect(el.classList.contains('test-enter')).toBe(false)
	          transition.apply(el, -1, op, vm, cb)
	          expect(hooks.beforeLeave).toHaveBeenCalled()
	          expect(hooks.leave).toHaveBeenCalled()
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            expect(el.classList.contains('test-leave')).toBe(false)
	            done()
	          })
	        })
	      })
	
	      it('skip when no transition available', function (done) {
	        el.__v_trans = new Transition(el, 'test-no-trans', hooks, vm)
	        transition.apply(el, 1, op, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	          expect(el.classList.contains('test-no-trans-enter')).toBe(false)
	          transition.apply(el, -1, op, vm, cb)
	          expect(hooks.beforeLeave).toHaveBeenCalled()
	          expect(hooks.leave).toHaveBeenCalled()
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            expect(el.classList.contains('test-no-trans-leave')).toBe(false)
	            done()
	          })
	        })
	      })
	
	      it('transition enter', function (done) {
	        document.body.removeChild(el)
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        // inline style
	        el.style.transition =
	        el.style.WebkitTransition = 'opacity ' + duration + ' ease'
	        transition.apply(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(el.classList.contains('test-enter')).toBe(false)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.transitionEndEvent, function () {
	            expect(cb).toHaveBeenCalled()
	            expect(hooks.afterEnter).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('transition leave', function (done) {
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        // cascaded class style
	        el.classList.add('test')
	        // force a layout here so the transition can be triggered
	        var f = el.offsetHeight
	        transition.apply(el, -1, op, vm, cb)
	        expect(hooks.beforeLeave).toHaveBeenCalled()
	        expect(hooks.leave).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(hooks.afterLeave).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-leave')).toBe(true)
	          _.on(el, _.transitionEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(el.classList.contains('test-leave')).toBe(false)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            done()
	          })
	        })
	        return f
	      })
	
	      it('animation enter', function (done) {
	        document.body.removeChild(el)
	        el.__v_trans = new Transition(el, 'test-anim', hooks, vm)
	        transition.apply(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(hooks.enter).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-anim-enter')).toBe(true)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.animationEndEvent, function () {
	            expect(el.classList.contains('test-anim-enter')).toBe(false)
	            expect(cb).toHaveBeenCalled()
	            expect(hooks.afterEnter).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('animation leave', function (done) {
	        el.__v_trans = new Transition(el, 'test-anim', hooks, vm)
	        transition.apply(el, -1, op, vm, cb)
	        expect(hooks.beforeLeave).toHaveBeenCalled()
	        expect(hooks.leave).toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-anim-leave')).toBe(true)
	          expect(hooks.afterLeave).not.toHaveBeenCalled()
	          _.on(el, _.animationEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(el.classList.contains('test-anim-leave')).toBe(false)
	            expect(hooks.afterLeave).toHaveBeenCalled()
	            done()
	          })
	        })
	      })
	
	      it('css + js hook with callback', function (done) {
	        document.body.removeChild(el)
	        el.classList.add('test')
	
	        // enter hook that expects a second argument
	        // indicates the user wants to control when the
	        // transition ends.
	        var enterCalled = false
	        hooks.enter = function (el, enterDone) {
	          enterCalled = true
	          setTimeout(function () {
	            enterDone()
	            testDone()
	          }, 100)
	        }
	
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.apply(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(hooks.beforeEnter).toHaveBeenCalled()
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        expect(enterCalled).toBe(true)
	        _.nextTick(function () {
	          expect(el.classList.contains('test-enter')).toBe(false)
	          expect(hooks.afterEnter).not.toHaveBeenCalled()
	          _.on(el, _.transitionEndEvent, function () {
	            // should wait until js callback is called!
	            expect(cb).not.toHaveBeenCalled()
	            expect(hooks.afterEnter).not.toHaveBeenCalled()
	          })
	        })
	
	        // this is called by the enter hook
	        function testDone () {
	          expect(cb).toHaveBeenCalled()
	          expect(hooks.afterEnter).toHaveBeenCalled()
	          done()
	        }
	      })
	
	      it('clean up unfinished css callback', function (done) {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        el.classList.add('test')
	        transition.apply(el, -1, function () {
	          document.body.removeChild(el)
	        }, vm, cb)
	        // cancel early
	        _.nextTick(function () {
	          expect(el.__v_trans.pendingCssCb).toBeTruthy()
	          expect(el.classList.contains('test-leave')).toBe(true)
	          transition.apply(el, 1, function () {
	            document.body.appendChild(el)
	          }, vm)
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-leave')).toBe(false)
	          expect(el.__v_trans.pendingCssCb).toBeNull()
	          // IMPORTANT
	          // Let the queue flush finish before enter the next
	          // test. Don't remove the nextTick.
	          _.nextTick(done)
	        })
	      })
	
	      it('cache transition sniff results', function (done) {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        el.classList.add('test')
	        transition.apply(el, 1, op, vm)
	        _.nextTick(function () {
	          expect(el.__v_trans.typeCache['test-enter']).not.toBeUndefined()
	          // for some reason window.getComputedStyle cannot be spied on in
	          // phantomjs after the refactor...
	          var calls = 0
	          Object.defineProperty(el.__v_trans.typeCache, 'test-enter', {
	            get: function () {
	              calls++
	              return 1
	            }
	          })
	          transition.apply(el, 1, op, vm)
	          _.nextTick(function () {
	            expect(calls).toBe(1)
	            done()
	          })
	        })
	      })
	
	    })
	
	    describe('JavaScript only transitions', function () {
	
	      var el, vm, op, cb, hooks
	      beforeEach(function () {
	        hooks = {}
	        el = document.createElement('div')
	        document.body.appendChild(el)
	        op = jasmine.createSpy('js transition op')
	        cb = jasmine.createSpy('js transition cb')
	        vm = new Vue({ el: el })
	      })
	
	      afterEach(function () {
	        document.body.removeChild(el)
	      })
	
	      it('beforeEnter', function () {
	        var spy = jasmine.createSpy('js transition beforeEnter')
	        hooks.beforeEnter = function (el) {
	          spy(this, el)
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.apply(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm, el)
	      })
	
	      it('enter', function () {
	        var spy = jasmine.createSpy('js enter')
	        hooks.enter = function (e, done) {
	          expect(e).toBe(el)
	          expect(op).toHaveBeenCalled()
	          done()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.apply(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm)
	      })
	
	      it('leave', function () {
	        var spy = jasmine.createSpy('js leave')
	        hooks.leave = function (e, done) {
	          expect(e).toBe(el)
	          done()
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.apply(el, -1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm)
	      })
	
	      it('no def', function (done) {
	        el.__v_trans = new Transition(el, 'test', null, vm)
	        transition.apply(el, 1, op, vm, cb)
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          transition.apply(el, -1, op, vm, cb)
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            done()
	          })
	        })
	      })
	
	      it('cancel hook', function (done) {
	        var cleanupSpy = jasmine.createSpy('js cleanup')
	        var leaveSpy = jasmine.createSpy('js leave')
	        var timeout
	        hooks.enter = function (el, done) {
	          timeout = setTimeout(done, 30)
	        }
	        hooks.enterCancelled = function () {
	          clearTimeout(timeout)
	          cleanupSpy()
	        }
	        hooks.leave = function (el, done) {
	          expect(cleanupSpy).toHaveBeenCalled()
	          leaveSpy()
	          done()
	        }
	        el.__v_trans = new Transition(el, 'test', hooks, vm)
	        transition.apply(el, 1, op, vm, cb)
	        setTimeout(function () {
	          transition.apply(el, -1, op, vm)
	          expect(leaveSpy).toHaveBeenCalled()
	          setTimeout(function () {
	            expect(cb).not.toHaveBeenCalled()
	            done()
	          }, 30)
	        }, 15)
	      })
	    })
	  })
	}


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	describe('Util - Misc', function () {
	
	  it('checkComponent', function () {
	    var el = document.createElement('component')
	    // <component> with no is attr
	    var res = _.checkComponent(el)
	    expect(res).toBe(null)
	    // <component is="...">
	    el.setAttribute('is', '{{what}}')
	    res = _.checkComponent(el)
	    expect(res).toBe('{{what}}')
	    // custom element, not defined
	    el = document.createElement('test')
	    res = _.checkComponent(el, {
	      components: {}
	    })
	    expect(res).toBeUndefined()
	    // custom element, defined
	    res = _.checkComponent(el, {
	      components: { test: true }
	    })
	    expect(res).toBe('test')
	  })
	})


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(6)
	var infoPrefix = '[Vue info]: '
	var warnPrefix = '[Vue warn]: '
	
	if (typeof console !== 'undefined') {
	
	  describe('Util - Debug', function () {
	
	    beforeEach(function () {
	      spyOn(console, 'log')
	      spyOn(console, 'warn')
	      if (console.trace) {
	        spyOn(console, 'trace')
	      }
	    })
	
	    it('log when debug is true', function () {
	      config.debug = true
	      _.log('hello')
	      expect(console.log).toHaveBeenCalledWith(infoPrefix + 'hello')
	    })
	
	    it('not log when debug is false', function () {
	      config.debug = false
	      _.log('bye')
	      expect(console.log).not.toHaveBeenCalled()
	    })
	
	    it('warn when silent is false', function () {
	      config.silent = false
	      _.warn('oops')
	      expect(console.warn).toHaveBeenCalledWith(warnPrefix + 'oops')
	    })
	
	    it('not warn when silent is ture', function () {
	      config.silent = true
	      _.warn('oops')
	      expect(console.warn).not.toHaveBeenCalled()
	    })
	
	  })
	}


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	if (_.inBrowser) {
	
	  describe('Util - DOM', function () {
	
	    var parent, child, target
	
	    function div () {
	      return document.createElement('div')
	    }
	
	    beforeEach(function () {
	      parent = div()
	      child = div()
	      target = div()
	      parent.appendChild(child)
	    })
	
	    it('inDoc', function () {
	      expect(_.inDoc(target)).toBe(false)
	      document.body.appendChild(target)
	      expect(_.inDoc(target)).toBe(true)
	      document.body.removeChild(target)
	      expect(_.inDoc(target)).toBe(false)
	    })
	
	    it('attr', function () {
	      target.setAttribute('v-test', 'ok')
	      var val = _.attr(target, 'test')
	      expect(val).toBe('ok')
	      expect(target.hasAttribute('v-test')).toBe(false)
	    })
	
	    it('before', function () {
	      _.before(target, child)
	      expect(target.parentNode).toBe(parent)
	      expect(target.nextSibling).toBe(child)
	    })
	
	    it('after', function () {
	      _.after(target, child)
	      expect(target.parentNode).toBe(parent)
	      expect(child.nextSibling).toBe(target)
	    })
	
	    it('after with sibling', function () {
	      var sibling = div()
	      parent.appendChild(sibling)
	      _.after(target, child)
	      expect(target.parentNode).toBe(parent)
	      expect(child.nextSibling).toBe(target)
	    })
	
	    it('remove', function () {
	      _.remove(child)
	      expect(child.parentNode).toBeNull()
	      expect(parent.childNodes.length).toBe(0)
	    })
	
	    it('prepend', function () {
	      _.prepend(target, parent)
	      expect(target.parentNode).toBe(parent)
	      expect(parent.firstChild).toBe(target)
	    })
	
	    it('prepend to empty node', function () {
	      parent.removeChild(child)
	      _.prepend(target, parent)
	      expect(target.parentNode).toBe(parent)
	      expect(parent.firstChild).toBe(target)
	    })
	
	    it('replace', function () {
	      _.replace(child, target)
	      expect(parent.childNodes.length).toBe(1)
	      expect(parent.firstChild).toBe(target)
	    })
	
	    it('on/off', function () {
	      // IE requires element to be in document to fire events
	      document.body.appendChild(target)
	      var spy = jasmine.createSpy()
	      _.on(target, 'click', spy)
	      var e = document.createEvent('HTMLEvents')
	      e.initEvent('click', true, true)
	      target.dispatchEvent(e)
	      expect(spy.calls.count()).toBe(1)
	      expect(spy).toHaveBeenCalledWith(e)
	      _.off(target, 'click', spy)
	      target.dispatchEvent(e)
	      expect(spy.calls.count()).toBe(1)
	      document.body.removeChild(target)
	    })
	
	    it('addClass/removeClass', function () {
	      var el = document.createElement('div')
	      el.className = 'aa bb cc'
	      _.removeClass(el, 'bb')
	      expect(el.className).toBe('aa cc')
	      _.removeClass(el, 'aa')
	      expect(el.className).toBe('cc')
	      _.addClass(el, 'bb')
	      expect(el.className).toBe('cc bb')
	      _.addClass(el, 'bb')
	      expect(el.className).toBe('cc bb')
	    })
	
	    it('addClass/removeClass for SVG/IE9', function () {
	      var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
	      el.setAttribute('class', 'aa bb cc')
	      _.removeClass(el, 'bb')
	      expect(el.getAttribute('class')).toBe('aa cc')
	      _.removeClass(el, 'aa')
	      expect(el.getAttribute('class')).toBe('cc')
	      _.addClass(el, 'bb')
	      expect(el.getAttribute('class')).toBe('cc bb')
	      _.addClass(el, 'bb')
	      expect(el.getAttribute('class')).toBe('cc bb')
	    })
	  })
	}


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	describe('Util - Environment', function () {
	
	  describe('nextTick', function () {
	
	    it('should accept context', function (done) {
	      var ctx = {}
	      _.nextTick(function () {
	        this.id = 1
	      }, ctx)
	      _.nextTick(function () {
	        expect(ctx.id).toBe(1)
	        done()
	      })
	    })
	  })
	})


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	
	describe('Util - Language Enhancement', function () {
	
	  it('toString', function () {
	    expect(_.toString('hi')).toBe('hi')
	    expect(_.toString(1.234)).toBe('1.234')
	    expect(_.toString(null)).toBe('')
	    expect(_.toString(undefined)).toBe('')
	  })
	
	  it('toNumber', function () {
	    expect(_.toNumber('12')).toBe(12)
	    expect(_.toNumber('1e5')).toBe(1e5)
	    expect(_.toNumber('0x2F')).toBe(0x2F)
	    expect(_.toNumber(null)).toBe(null)
	    expect(_.toNumber(true)).toBe(true)
	    expect(_.toNumber('hello')).toBe('hello')
	  })
	
	  it('strip quotes', function () {
	    expect(_.stripQuotes('"123"')).toBe('123')
	    expect(_.stripQuotes("'fff'")).toBe('fff')
	    expect(_.stripQuotes("'fff")).toBe(false)
	  })
	
	  it('camelize', function () {
	    expect(_.camelize('abc')).toBe('abc')
	    expect(_.camelize('some-long-name')).toBe('someLongName')
	  })
	
	  it('hyphenate', function () {
	    expect(_.hyphenate('whatsUp')).toBe('whats-up')
	    expect(_.hyphenate('a1BfC')).toBe('a1-bf-c')
	    expect(_.hyphenate('already-With-Hyphen')).toBe('already-with-hyphen')
	  })
	
	  it('classify', function () {
	    expect(_.classify('abc')).toBe('Abc')
	    expect(_.classify('some-long-name')).toBe('SomeLongName')
	    expect(_.classify('what_about_this')).toBe('WhatAboutThis')
	    expect(_.classify('how/about/that')).toBe('HowAboutThat')
	  })
	
	  it('bind', function () {
	    var original = function (a) {
	      return this.a + a
	    }
	    var ctx = { a: 'ctx a ' }
	    var bound = _.bind(original, ctx)
	    var res = bound('arg a')
	    expect(res).toBe('ctx a arg a')
	  })
	
	  it('toArray', function () {
	    // should make a copy of original array
	    var arr = [1, 2, 3]
	    var res = _.toArray(arr)
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.toString()).toEqual('1,2,3')
	    expect(res).not.toBe(arr)
	
	    // should work on arguments
	    ;(function () {
	      var res = _.toArray(arguments)
	      expect(Array.isArray(res)).toBe(true)
	      expect(res.toString()).toEqual('1,2,3')
	    })(1, 2, 3)
	  })
	
	  it('extend', function () {
	    var from = {a: 1, b: 2}
	    var to = {}
	    var res = _.extend(to, from)
	    expect(to.a).toBe(from.a)
	    expect(to.b).toBe(from.b)
	    expect(res).toBe(to)
	  })
	
	  it('isObject', function () {
	    expect(_.isObject({})).toBe(true)
	    expect(_.isObject([])).toBe(true)
	    expect(_.isObject(null)).toBeFalsy()
	    expect(_.isObject(123)).toBeFalsy()
	    expect(_.isObject(true)).toBeFalsy()
	    expect(_.isObject('hi')).toBeFalsy()
	    expect(_.isObject(undefined)).toBeFalsy()
	    expect(_.isObject(function () {})).toBeFalsy()
	  })
	
	  it('isPlainObject', function () {
	    expect(_.isPlainObject({})).toBe(true)
	    expect(_.isPlainObject([])).toBe(false)
	    expect(_.isPlainObject(null)).toBe(false)
	    expect(_.isPlainObject(null)).toBeFalsy()
	    expect(_.isPlainObject(123)).toBeFalsy()
	    expect(_.isPlainObject(true)).toBeFalsy()
	    expect(_.isPlainObject('hi')).toBeFalsy()
	    expect(_.isPlainObject(undefined)).toBeFalsy()
	    expect(_.isPlainObject(function () {})).toBe(false)
	    if (_.inBrowser) {
	      expect(_.isPlainObject(window)).toBe(false)
	    }
	  })
	
	  it('isArray', function () {
	    expect(_.isArray([])).toBe(true)
	    expect(_.isArray({})).toBe(false)
	    expect(_.isArray(arguments)).toBe(false)
	  })
	
	  it('define', function () {
	    var obj = {}
	    _.define(obj, 'test', 123)
	    expect(obj.test).toBe(123)
	    var desc = Object.getOwnPropertyDescriptor(obj, 'test')
	    expect(desc.enumerable).toBe(false)
	
	    _.define(obj, 'test2', 123, true)
	    expect(obj.test2).toBe(123)
	    desc = Object.getOwnPropertyDescriptor(obj, 'test2')
	    expect(desc.enumerable).toBe(true)
	  })
	
	  it('debounce', function (done) {
	    var count = 0
	    var fn = _.debounce(function () {
	      count++
	    }, 100)
	    fn()
	    setTimeout(fn, 10)
	    setTimeout(fn, 20)
	    setTimeout(function () {
	      expect(count).toBe(0)
	    }, 30)
	    setTimeout(function () {
	      expect(count).toBe(1)
	      done()
	    }, 200)
	  })
	})


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	var merge = _.mergeOptions
	var resolveAsset = _.resolveAsset
	
	describe('Util - Option merging', function () {
	
	  beforeEach(function () {
	    spyOn(_, 'warn')
	  })
	
	  it('default strat', function () {
	    // child undefined
	    var res = merge({replace: true}, {}).replace
	    expect(res).toBe(true)
	    // child overwrite
	    res = merge({replace: true}, {replace: false}).replace
	    expect(res).toBe(false)
	  })
	
	  it('hooks & props', function () {
	    var fn1 = function () {}
	    var fn2 = function () {}
	    var res
	    // parent undefined
	    res = merge({}, {created: fn1}).created
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(fn1)
	    // child undefined
	    res = merge({created: [fn1]}, {}).created
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(fn1)
	    // both defined
	    res = merge({created: [fn1]}, {created: fn2}).created
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(2)
	    expect(res[0]).toBe(fn1)
	    expect(res[1]).toBe(fn2)
	    // both arrays
	    res = merge({props: [1]}, {props: [2]}).props
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(2)
	    expect(res[0]).toBe(1)
	    expect(res[1]).toBe(2)
	  })
	
	  it('events', function () {
	
	    // no parent
	    res = merge({}, {events: 1})
	    expect(res.events).toBe(1)
	    // no child
	    res = merge({events: 1}, {})
	    expect(res.events).toBe(1)
	
	    var fn1 = function () {}
	    var fn2 = function () {}
	    var fn3 = function () {}
	    var parent = {
	      events: {
	        'fn1': [fn1, fn2],
	        'fn2': fn2
	      }
	    }
	    var child = {
	      events: {
	        'fn1': fn3,
	        'fn2': fn3,
	        'fn3': fn3
	      }
	    }
	    var res = merge(parent, child).events
	    assertRes(res.fn1, [fn1, fn2, fn3])
	    assertRes(res.fn2, [fn2, fn3])
	    assertRes(res.fn3, [fn3])
	
	    function assertRes (res, expected) {
	      expect(Array.isArray(res)).toBe(true)
	      expect(res.length).toBe(expected.length)
	      var i = expected.length
	      while (i--) {
	        expect(res[i]).toBe(expected[i])
	      }
	    }
	  })
	
	  it('normal object hashes', function () {
	    var fn1 = function () {}
	    var fn2 = function () {}
	    var res
	    // parent undefined
	    res = merge({}, {methods: {test: fn1}}).methods
	    expect(res.test).toBe(fn1)
	    // child undefined
	    res = merge({methods: {test: fn1}}, {}).methods
	    expect(res.test).toBe(fn1)
	    // both defined
	    var parent = {methods: {test: fn1}}
	    res = merge(parent, {methods: {test2: fn2}}).methods
	    expect(res.test).toBe(fn1)
	    expect(res.test2).toBe(fn2)
	  })
	
	  it('assets', function () {
	    var asset1 = {}
	    var asset2 = {}
	    var res = merge(
	      { directives: { a: asset1 }},
	      { directives: { b: asset2 }}
	    ).directives
	    expect(res.a).toBe(asset1)
	    expect(res.b).toBe(asset2)
	  })
	
	  it('guard components', function () {
	    var res = merge({
	      components: null
	    }, {
	      components: {
	        test: { template: 'hi' }
	      }
	    })
	    expect(typeof res.components.test).toBe('function')
	    expect(res.components.test.options.id).toBe('test')
	    expect(res.components.test.super).toBe(Vue)
	  })
	
	  it('guard components warn built-in elements', function () {
	    merge({
	      components: null
	    }, {
	      components: {
	        a: { template: 'hi' }
	      }
	    })
	    expect(hasWarned(_, 'Do not use built-in HTML elements')).toBe(true)
	  })
	
	  it('should ignore non-function el & data in class merge', function () {
	    var res = merge({}, {el: 1, data: 2})
	    expect(res.el).toBeUndefined()
	    expect(res.data).toBeUndefined()
	  })
	
	  it('class el merge', function () {
	    function fn1 () {}
	    function fn2 () {}
	    var res = merge({el: fn1}, {el: fn2})
	    expect(res.el).toBe(fn2)
	  })
	
	  it('class data merge', function () {
	    function fn1 () {
	      return { a: 1, c: 4, d: { e: 1 }}
	    }
	    function fn2 () {
	      return { a: 2, b: 3, d: { f: 2 }}
	    }
	    // both present
	    var res = merge({data: fn1}, {data: fn2}).data()
	    expect(res.a).toBe(2)
	    expect(res.b).toBe(3)
	    expect(res.c).toBe(4)
	    expect(res.d.e).toBe(1)
	    expect(res.d.f).toBe(2)
	    // only parent
	    res = merge({data: fn1}, {}).data()
	    expect(res.a).toBe(1)
	    expect(res.b).toBeUndefined()
	    expect(res.c).toBe(4)
	    expect(res.d.e).toBe(1)
	    expect(res.d.f).toBeUndefined()
	  })
	
	  it('instanace el merge', function () {
	    var vm = {} // mock vm presence
	    function fn1 () {
	      expect(this).toBe(vm)
	      return 1
	    }
	    function fn2 () {
	      expect(this).toBe(vm)
	      return 2
	    }
	    // both functions
	    var res = merge({el: fn1}, {el: fn2}, vm)
	    expect(res.el).toBe(2)
	    // direct instance el
	    res = merge({el: fn1}, {el: 2}, vm)
	    expect(res.el).toBe(2)
	    // no parent
	    res = merge({}, {el: 2}, vm)
	    expect(res.el).toBe(2)
	    // no child
	    res = merge({el: fn1}, {}, vm)
	    expect(res.el).toBe(1)
	  })
	
	  it('instance data merge with no instance data', function () {
	    var res = merge(
	      {data: function () {
	        return { a: 1}
	      }},
	      {}, // no instance data
	      {} // mock vm presence
	    )
	    expect(res.data().a).toBe(1)
	  })
	
	  it('instance data merge with default data function', function () {
	    var vm = {} // mock vm presence
	    var res = merge(
	      // component default
	      { data: function () {
	        expect(this).toBe(vm)
	        return {
	          a: 1,
	          b: 2
	        }
	      }},
	      { data: { a: 2 }}, // instance data
	      vm
	    )
	    var data = res.data()
	    expect(data.a).toBe(2)
	    expect(data.b).toBe(2)
	  })
	
	  it('already observed instance data merge with default data', function () {
	    var Observer = __webpack_require__(58)
	    var instanceData = { a: 123 }
	    // observe it
	    Observer.create(instanceData)
	    var res = merge(
	      {
	        data: function () { return { b: 234} }
	      },
	      {
	        data: instanceData
	      },
	      {}
	    )
	    var data = res.data()
	    expect(data.a).toBe(123)
	    expect(data.b).toBe(234)
	    expect(Object.getOwnPropertyDescriptor(data, 'b').get).toBeTruthy()
	  })
	
	  it('mixins', function () {
	    var a = {}
	    var b = {}
	    var c = {}
	    var d = {}
	    var f1 = function () {}
	    var f2 = function () {}
	    var f3 = function () {}
	    var f4 = function () {}
	    var mixinA = { a: 1, directives: { a: a }, created: f2 }
	    var mixinB = { b: 1, directives: { b: b }, created: f3 }
	    var res = merge(
	      { a: 2, directives: { c: c }, created: [f1] },
	      { directives: { d: d }, mixins: [mixinA, mixinB], created: f4 }
	    )
	    expect(res.a).toBe(1)
	    expect(res.b).toBe(1)
	    expect(res.directives.a).toBe(a)
	    expect(res.directives.b).toBe(b)
	    expect(res.directives.c).toBe(c)
	    expect(res.directives.d).toBe(d)
	    expect(res.created[0]).toBe(f1)
	    expect(res.created[1]).toBe(f2)
	    expect(res.created[2]).toBe(f3)
	    expect(res.created[3]).toBe(f4)
	  })
	
	  it('Array assets', function () {
	    var a = {
	      components: {
	        a: Vue.extend({})
	      }
	    }
	    var b = {
	      components: [{ id: 'b' }]
	    }
	    var res = merge(a, b)
	    expect(res.components.a).toBe(a.components.a)
	    // b.components is guarded and converted to object hash
	    expect(res.components.b).toBe(b.components.b)
	  })
	
	  it('warn Array assets without id', function () {
	    var a = {
	      components: {
	        a: Vue.extend({})
	      }
	    }
	    var b = {
	      components: [{}]
	    }
	    merge(a, b)
	    expect(hasWarned(_, 'must provide an id')).toBe(true)
	  })
	
	})
	
	describe('Util - Option resolveAsset', function () {
	
	  var vm
	  beforeEach(function () {
	    vm = new Vue({
	      data: {},
	      components: {
	        'hyphenated-component': {
	          template: 'hi'
	        },
	        camelCasedComponent: {
	          template: 'yo'
	        }
	      }
	    })
	  })
	
	  it('resolves', function () {
	    expect(resolveAsset(vm.$options, 'components', 'hyphenated-component')).toBeTruthy()
	    expect(resolveAsset(vm.$options, 'components', 'camel-cased-component')).toBeTruthy()
	  })
	
	})


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var nextTick = Vue.nextTick
	var Watcher = __webpack_require__(20)
	var _ = Vue.util
	var config = Vue.config
	
	describe('Watcher', function () {
	
	  var vm, spy
	
	  beforeEach(function () {
	    vm = new Vue({
	      filters: {},
	      data: {
	        a: 1,
	        b: {
	          c: 2,
	          d: 4
	        },
	        c: 'c',
	        msg: 'yo'
	      }
	    })
	    spy = jasmine.createSpy('watcher')
	    spyOn(_, 'warn')
	  })
	
	  it('simple path', function (done) {
	    var watcher = new Watcher(vm, 'b.c', spy)
	    expect(watcher.value).toBe(2)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.b = { c: 4 } // swapping the object
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('bracket access path', function (done) {
	    var watcher = new Watcher(vm, 'b["c"]', spy)
	    expect(watcher.value).toBe(2)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.b = { c: 4 } // swapping the object
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('dynamic path', function (done) {
	    var watcher = new Watcher(vm, 'b[c]', spy)
	    expect(watcher.value).toBe(2)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.c = 'd' // changing the dynamic segment in path
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('simple expression', function (done) {
	    var watcher = new Watcher(vm, 'a + b.c', spy)
	    expect(watcher.value).toBe(3)
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe(4)
	      expect(spy.calls.count()).toBe(1)
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // change two dependencies at once
	      vm.a = 2
	      vm.b.c = 4
	      nextTick(function () {
	        expect(watcher.value).toBe(6)
	        // should trigger only once callback,
	        // because it was in the same event loop.
	        expect(spy.calls.count()).toBe(2)
	        expect(spy).toHaveBeenCalledWith(6, 4)
	        done()
	      })
	    })
	  })
	
	  it('ternary expression', function (done) {
	    // we're actually testing for the dependency re-calculation here
	    var watcher = new Watcher(vm, 'a > 1 ? b.c : b.d', spy)
	    expect(watcher.value).toBe(4)
	    vm.a = 2
	    nextTick(function () {
	      expect(watcher.value).toBe(2)
	      expect(spy).toHaveBeenCalledWith(2, 4)
	      vm.b.c = 3
	      nextTick(function () {
	        expect(watcher.value).toBe(3)
	        expect(spy).toHaveBeenCalledWith(3, 2)
	        done()
	      })
	    })
	  })
	
	  it('meta properties', function (done) {
	    vm._defineMeta('$index', 1)
	    var watcher = new Watcher(vm, '$index + 1', spy)
	    expect(watcher.value).toBe(2)
	    vm.$index = 2
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      done()
	    })
	  })
	
	  it('non-existent path, $add later', function (done) {
	    var watcher = new Watcher(vm, 'd.e', spy)
	    var watcher2 = new Watcher(vm, 'b.e', spy)
	    expect(watcher.value).toBeUndefined()
	    expect(watcher2.value).toBeUndefined()
	    // check $add affecting children
	    var child = vm.$addChild({
	      inherit: true
	    })
	    var watcher3 = new Watcher(child, 'd.e', spy)
	    var watcher4 = new Watcher(child, 'b.e', spy)
	    // check $add should not affect isolated children
	    var child2 = vm.$addChild()
	    var watcher5 = new Watcher(child2, 'd.e', spy)
	    expect(watcher5.value).toBeUndefined()
	    vm.$add('d', { e: 123 })
	    vm.b.$add('e', 234)
	    nextTick(function () {
	      expect(watcher.value).toBe(123)
	      expect(watcher2.value).toBe(234)
	      expect(watcher3.value).toBe(123)
	      expect(watcher4.value).toBe(234)
	      expect(watcher5.value).toBeUndefined()
	      expect(spy.calls.count()).toBe(4)
	      expect(spy).toHaveBeenCalledWith(123, undefined)
	      expect(spy).toHaveBeenCalledWith(234, undefined)
	      done()
	    })
	  })
	
	  it('$delete', function (done) {
	    var watcher = new Watcher(vm, 'b.c', spy)
	    expect(watcher.value).toBe(2)
	    vm.$delete('b')
	    nextTick(function () {
	      expect(watcher.value).toBeUndefined()
	      expect(spy).toHaveBeenCalledWith(undefined, 2)
	      done()
	    })
	  })
	
	  it('swapping $data', function (done) {
	    // existing path
	    var watcher = new Watcher(vm, 'b.c', spy)
	    var spy2 = jasmine.createSpy()
	    // non-existing path
	    var watcher2 = new Watcher(vm, 'e', spy2)
	    expect(watcher.value).toBe(2)
	    expect(watcher2.value).toBeUndefined()
	    vm.$data = { b: { c: 3}, e: 4 }
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(watcher2.value).toBe(4)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      expect(spy2).toHaveBeenCalledWith(4, undefined)
	      done()
	    })
	  })
	
	  it('path containing $data', function (done) {
	    var watcher = new Watcher(vm, '$data.b.c', spy)
	    expect(watcher.value).toBe(2)
	    vm.b = { c: 3 }
	    nextTick(function () {
	      expect(watcher.value).toBe(3)
	      expect(spy).toHaveBeenCalledWith(3, 2)
	      vm.$data = { b: {c: 4}}
	      nextTick(function () {
	        expect(watcher.value).toBe(4)
	        expect(spy).toHaveBeenCalledWith(4, 3)
	        done()
	      })
	    })
	  })
	
	  it('watching $data', function (done) {
	    var oldData = vm.$data
	    var watcher = new Watcher(vm, '$data', spy)
	    expect(watcher.value).toBe(oldData)
	    var newData = {}
	    vm.$data = newData
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(newData, oldData)
	      expect(watcher.value).toBe(newData)
	      done()
	    })
	  })
	
	  it('watching parent scope properties', function (done) {
	    var child = vm.$addChild({
	      inherit: true
	    })
	    var spy2 = jasmine.createSpy('watch')
	    var watcher1 = new Watcher(child, '$data', spy)
	    var watcher2 = new Watcher(child, 'a', spy2)
	    vm.a = 123
	    nextTick(function () {
	      // $data should only be called on self data change
	      expect(watcher1.value).toBe(child.$data)
	      expect(spy).not.toHaveBeenCalled()
	      expect(watcher2.value).toBe(123)
	      expect(spy2).toHaveBeenCalledWith(123, 1)
	      done()
	    })
	  })
	
	  it('filters', function (done) {
	    vm.$options.filters.test = function (val, multi) {
	      return val * multi
	    }
	    vm.$options.filters.test2 = function (val, str) {
	      return val + str
	    }
	    var watcher = new Watcher(vm, 'b.c', spy, {
	      filters: [
	        { name: 'test', args: [{value: 3, dynamic: false}]},
	        { name: 'test2', args: [{value: 'msg', dynamic: true}]}
	      ]
	    })
	    expect(watcher.value).toBe('6yo')
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.value).toBe('9yo')
	      expect(spy).toHaveBeenCalledWith('9yo', '6yo')
	      done()
	    })
	  })
	
	  it('setter', function (done) {
	    vm.$options.filters.test = {
	      write: function (val, oldVal, arg) {
	        return val > arg ? val : oldVal
	      }
	    }
	    var watcher = new Watcher(vm, 'b["c"]', spy, {
	      filters: [
	        { name: 'test', args: [{value: 5, dynamic: false}] }
	      ],
	      twoWay: true
	    })
	    expect(watcher.value).toBe(2)
	    watcher.set(4) // shoud not change the value
	    nextTick(function () {
	      expect(vm.b.c).toBe(2)
	      expect(watcher.value).toBe(2)
	      expect(spy).not.toHaveBeenCalled()
	      watcher.set(6)
	      nextTick(function () {
	        expect(vm.b.c).toBe(6)
	        expect(watcher.value).toBe(6)
	        expect(spy).toHaveBeenCalledWith(6, 2)
	        done()
	      })
	    })
	  })
	
	  it('set non-existent values', function (done) {
	    var watcher = new Watcher(vm, 'd.e.f', spy)
	    expect(watcher.value).toBeUndefined()
	    watcher.set(123)
	    nextTick(function () {
	      expect(vm.d.e.f).toBe(123)
	      expect(watcher.value).toBe(123)
	      expect(spy).toHaveBeenCalledWith(123, undefined)
	      done()
	    })
	  })
	
	  it('deep watch', function (done) {
	    new Watcher(vm, 'b', spy, {
	      deep: true
	    })
	    vm.b.c = { d: 4 }
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(vm.b, vm.b)
	      var oldB = vm.b
	      vm.b = { c: [{a: 1}]}
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(vm.b, oldB)
	        expect(spy.calls.count()).toBe(2)
	        vm.b.c[0].a = 2
	        nextTick(function () {
	          expect(spy).toHaveBeenCalledWith(vm.b, vm.b)
	          expect(spy.calls.count()).toBe(3)
	          done()
	        })
	      })
	    })
	  })
	
	  it('watch function', function (done) {
	    var watcher = new Watcher(vm, function () {
	      return this.a + this.b.d
	    }, spy)
	    expect(watcher.value).toBe(5)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(6, 5)
	      vm.b = { d: 2 }
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(4, 6)
	        done()
	      })
	    })
	  })
	
	  it('lazy mode', function (done) {
	    var watcher = new Watcher(vm, function () {
	      return this.a + this.b.d
	    }, null, { lazy: true })
	    expect(watcher.lazy).toBe(true)
	    expect(watcher.value).toBeUndefined()
	    expect(watcher.dirty).toBe(true)
	    watcher.evaluate()
	    expect(watcher.value).toBe(5)
	    expect(watcher.dirty).toBe(false)
	    vm.a = 2
	    nextTick(function () {
	      expect(watcher.value).toBe(5)
	      expect(watcher.dirty).toBe(true)
	      watcher.evaluate()
	      expect(watcher.value).toBe(6)
	      expect(watcher.dirty).toBe(false)
	      done()
	    })
	  })
	
	  it('teardown', function (done) {
	    var watcher = new Watcher(vm, 'b.c', spy)
	    watcher.teardown()
	    vm.b.c = 3
	    nextTick(function () {
	      expect(watcher.active).toBe(false)
	      expect(watcher.vm).toBe(null)
	      expect(watcher.cb).toBe(null)
	      expect(spy).not.toHaveBeenCalled()
	      done()
	    })
	  })
	
	  it('synchronous updates', function () {
	    config.async = false
	    new Watcher(vm, 'a', spy)
	    vm.a = 2
	    vm.a = 3
	    expect(spy.calls.count()).toBe(2)
	    expect(spy).toHaveBeenCalledWith(2, 1)
	    expect(spy).toHaveBeenCalledWith(3, 2)
	    config.async = true
	  })
	
	  it('warn getter errors', function () {
	    new Watcher(vm, 'd.e + c', spy)
	    expect(hasWarned(_, 'Error when evaluating expression')).toBe(true)
	  })
	
	  it('warn setter errors', function () {
	    var watcher = new Watcher(vm, 'a + b', spy)
	    watcher.set(123)
	    expect(hasWarned(_, 'Error when evaluating setter')).toBe(true)
	  })
	
	})


/***/ }
/******/ ]);
//# sourceMappingURL=specs.js.map