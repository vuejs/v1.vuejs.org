/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
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
	module.exports = __webpack_require__(112);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)

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
	    expect(vm._children.indexOf(child)).toBe(0)
	    expect(child.$options.directives.test).toBeTruthy()
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

	extend(Vue, __webpack_require__(10))

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  directives  : __webpack_require__(20),
	  filters     : __webpack_require__(52),
	  partials    : {},
	  transitions : {},
	  components  : {}
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
	    this._setData(newData)
	  }
	})

	/**
	 * Mixin internal instance methods
	 */

	extend(p, __webpack_require__(54))
	extend(p, __webpack_require__(55))
	extend(p, __webpack_require__(56))
	extend(p, __webpack_require__(57))

	/**
	 * Mixin public API methods
	 */

	extend(p, __webpack_require__(59))
	extend(p, __webpack_require__(60))
	extend(p, __webpack_require__(61))
	extend(p, __webpack_require__(62))
	extend(p, __webpack_require__(63))

	module.exports = _.Vue = Vue

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var lang   = __webpack_require__(4)
	var extend = lang.extend

	extend(exports, lang)
	extend(exports, __webpack_require__(5))
	extend(exports, __webpack_require__(6))
	extend(exports, __webpack_require__(8))
	extend(exports, __webpack_require__(9))

/***/ },
/* 4 */
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
	 * Check and convert possible numeric numbers before
	 * setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	exports.toNumber = function (value) {
	  return (
	    isNaN(value) ||
	    value === null ||
	    typeof value === 'boolean'
	  ) ? value
	    : Number(value)
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
	 * Replace helper
	 *
	 * @param {String} _ - matched delimiter
	 * @param {String} c - matched char
	 * @return {String}
	 */
	function toUpper (_, c) {
	  return c ? c.toUpperCase () : ''
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelRE = /-(\w)/g
	exports.camelize = function (str) {
	  return str.replace(camelRE, toUpper)
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
	  return function () {
	    return fn.apply(ctx, arguments)
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
	  return obj && typeof obj === 'object'
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

	exports.isArray = function (obj) {
	  return Array.isArray(obj)
	}

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
	    value        : val,
	    enumerable   : !!enumerable,
	    writable     : true,
	    configurable : true
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

	exports.debounce = function(func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function() {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function() {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Can we use __proto__?
	 *
	 * @type {Boolean}
	 */

	exports.hasProto = '__proto__' in {}

	/**
	 * Indicates we have a window
	 *
	 * @type {Boolean}
	 */

	var toString = Object.prototype.toString
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  toString.call(window) !== '[object Object]'

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

	/**
	 * Detect if we are in IE9...
	 *
	 * @type {Boolean}
	 */

	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.indexOf('MSIE 9.0') > 0

	/**
	 * Sniff transition/animation events
	 */

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(7)

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

	var doc =
	  typeof document !== 'undefined' &&
	  document.documentElement

	exports.inDoc = function (node) {
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
	 * Copy attributes from one element to another.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	exports.copyAttributes = function (from, to) {
	  if (from.hasAttributes()) {
	    var attrs = from.attributes
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var attr = attrs[i]
	      to.setAttribute(attr.name, attr.value)
	    }
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
	  if (el.hasChildNodes()) {
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* jshint boss:true */
	    while (child = el.firstChild) {
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}


/***/ },
/* 7 */
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

	  _delimitersChanged: true

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(9)

	/**
	 * Resolve read & write filters for a vm instance. The
	 * filters descriptor Array comes from the directive parser.
	 *
	 * This is extracted into its own utility so it can
	 * be used in multiple scenarios.
	 *
	 * @param {Vue} vm
	 * @param {Array<Object>} filters
	 * @param {Object} [target]
	 * @return {Object}
	 */

	exports.resolveFilters = function (vm, filters, target) {
	  if (!filters) {
	    return
	  }
	  var res = target || {}
	  // var registry = vm.$options.filters
	  filters.forEach(function (f) {
	    var def = vm.$options.filters[f.name]
	    _.assertAsset(def, 'filter', f.name)
	    if (!def) return
	    var args = f.args
	    var reader, writer
	    if (typeof def === 'function') {
	      reader = def
	    } else {
	      reader = def.read
	      writer = def.write
	    }
	    if (reader) {
	      if (!res.read) res.read = []
	      res.read.push(function (value) {
	        return args
	          ? reader.apply(vm, [value].concat(args))
	          : reader.call(vm, value)
	      })
	    }
	    if (writer) {
	      if (!res.write) res.write = []
	      res.write.push(function (value, oldVal) {
	        return args
	          ? writer.apply(vm, [value, oldVal].concat(args))
	          : writer.call(vm, value, oldVal)
	      })
	    }
	  })
	  return res
	}

	/**
	 * Apply filters to a value
	 *
	 * @param {*} value
	 * @param {Array} filters
	 * @param {Vue} vm
	 * @param {*} oldVal
	 * @return {*}
	 */

	exports.applyFilters = function (value, filters, vm, oldVal) {
	  if (!filters) {
	    return value
	  }
	  for (var i = 0, l = filters.length; i < l; i++) {
	    value = filters[i].call(vm, value, oldVal)
	  }
	  return value
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(7)

	/**
	 * Enable debug utilities. The enableDebug() function and
	 * all _.log() & _.warn() calls will be dropped in the
	 * minified production build.
	 */

	enableDebug()

	function enableDebug () {

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

	  exports.warn = function (msg) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        /* jshint debug: true */
	        debugger
	      }
	    }
	  }

	  /**
	   * Assert asset exists
	   */

	  exports.assertAsset = function (val, type, id) {
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var mergeOptions = __webpack_require__(13)

	/**
	 * Expose useful internals
	 */

	exports.util = _
	exports.nextTick = _.nextTick
	exports.config = __webpack_require__(7)

	exports.compiler = {
	  compile: __webpack_require__(14),
	  transclude: __webpack_require__(18)
	}

	exports.parsers = {
	  path: __webpack_require__(11),
	  text: __webpack_require__(15),
	  template: __webpack_require__(17),
	  directive: __webpack_require__(16),
	  expression: __webpack_require__(19)
	}

	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */

	exports.cid = 0
	var cid = 1

	/**
	 * Class inehritance
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
	  Sub.options = mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  createAssetRegisters(Sub)
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
	 * Define asset registration methods on a constructor.
	 *
	 * @param {Function} Constructor
	 */

	var assetTypes = [
	  'directive',
	  'filter',
	  'partial',
	  'transition'
	]

	function createAssetRegisters (Constructor) {

	  /* Asset registration methods share the same signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  assetTypes.forEach(function (type) {
	    Constructor[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        this.options[type + 's'][id] = definition
	      }
	    }
	  })

	  /**
	   * Component registration needs to automatically invoke
	   * Vue.extend on object values.
	   *
	   * @param {String} id
	   * @param {Object|Function} definition
	   */

	  Constructor.component = function (id, definition) {
	    if (!definition) {
	      return this.options.components[id]
	    } else {
	      if (_.isPlainObject(definition)) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options.components[id] = definition
	    }
	  }
	}

	createAssetRegisters(exports)

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Cache = __webpack_require__(12)
	var pathCache = new Cache(1000)
	var identRE = /^[$_a-zA-Z]+[\w$]*$/

	/**
	 * Path-parsing algorithm scooped from Polymer/observe-js
	 */

	var pathStateMachine = {
	  'beforePath': {
	    'ws': ['beforePath'],
	    'ident': ['inIdent', 'append'],
	    '[': ['beforeElement'],
	    'eof': ['afterPath']
	  },

	  'inPath': {
	    'ws': ['inPath'],
	    '.': ['beforeIdent'],
	    '[': ['beforeElement'],
	    'eof': ['afterPath']
	  },

	  'beforeIdent': {
	    'ws': ['beforeIdent'],
	    'ident': ['inIdent', 'append']
	  },

	  'inIdent': {
	    'ident': ['inIdent', 'append'],
	    '0': ['inIdent', 'append'],
	    'number': ['inIdent', 'append'],
	    'ws': ['inPath', 'push'],
	    '.': ['beforeIdent', 'push'],
	    '[': ['beforeElement', 'push'],
	    'eof': ['afterPath', 'push']
	  },

	  'beforeElement': {
	    'ws': ['beforeElement'],
	    '0': ['afterZero', 'append'],
	    'number': ['inIndex', 'append'],
	    "'": ['inSingleQuote', 'append', ''],
	    '"': ['inDoubleQuote', 'append', '']
	  },

	  'afterZero': {
	    'ws': ['afterElement', 'push'],
	    ']': ['inPath', 'push']
	  },

	  'inIndex': {
	    '0': ['inIndex', 'append'],
	    'number': ['inIndex', 'append'],
	    'ws': ['afterElement'],
	    ']': ['inPath', 'push']
	  },

	  'inSingleQuote': {
	    "'": ['afterElement'],
	    'eof': 'error',
	    'else': ['inSingleQuote', 'append']
	  },

	  'inDoubleQuote': {
	    '"': ['afterElement'],
	    'eof': 'error',
	    'else': ['inDoubleQuote', 'append']
	  },

	  'afterElement': {
	    'ws': ['afterElement'],
	    ']': ['inPath', 'push']
	  }
	}

	function noop () {}

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} char
	 * @return {String} type
	 */

	function getPathCharType (char) {
	  if (char === undefined) {
	    return 'eof'
	  }

	  var code = char.charCodeAt(0)

	  switch(code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return char

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
	  if ((0x61 <= code && code <= 0x7A) ||
	      (0x41 <= code && code <= 0x5A)) {
	    return 'ident'
	  }

	  // 1-9
	  if (0x31 <= code && code <= 0x39) {
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
	  var mode = 'beforePath'
	  var c, newChar, key, type, transition, action, typeMap

	  var actions = {
	    push: function() {
	      if (key === undefined) {
	        return
	      }
	      keys.push(key)
	      key = undefined
	    },
	    append: function() {
	      if (key === undefined) {
	        key = newChar
	      } else {
	        key += newChar
	      }
	    }
	  }

	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === 'inSingleQuote' && nextChar === "'") ||
	        (mode === 'inDoubleQuote' && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions.append()
	      return true
	    }
	  }

	  while (mode) {
	    index++
	    c = path[index]

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }

	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || 'error'

	    if (transition === 'error') {
	      return // parse error
	    }

	    mode = transition[0]
	    action = actions[transition[1]] || noop
	    newChar = transition[2] === undefined
	      ? c
	      : transition[2]
	    action()

	    if (mode === 'afterPath') {
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

	function formatAccessor(key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}

	/**
	 * Compiles a getter function with a fixed path.
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
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length - 1; i < l; i++) {
	    last = obj
	    key = path[i]
	    obj = obj[key]
	    if (!_.isObject(obj)) {
	      obj = {}
	      last.$add(key, obj)
	    }
	  }
	  key = path[i]
	  if (key in obj) {
	    obj[key] = val
	  } else {
	    obj.$add(key, val)
	  }
	  return true
	}

/***/ },
/* 12 */
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
	  this._keymap = {}
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
	    key:key,
	    value:value
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
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
	      _.warn(
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
	  } else {
	    // instance merge, return raw object
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

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    _.warn(
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
	strats.paramAttributes = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	strats.directives =
	strats.filters =
	strats.partials =
	strats.transitions =
	strats.components = function (parentVal, childVal, vm, key) {
	  var ret = Object.create(
	    vm && vm.$parent
	      ? vm.$parent.$options[key]
	      : _.Vue.options[key]
	  )
	  if (parentVal) {
	    var keys = Object.keys(parentVal)
	    var i = keys.length
	    var field
	    while (i--) {
	      field = keys[i]
	      ret[field] = parentVal[field]
	    }
	  }
	  if (childVal) extend(ret, childVal)
	  return ret
	}

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
	 * @param {Object} components
	 */

	function guardComponents (components) {
	  if (components) {
	    var def
	    for (var key in components) {
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        def.name = key
	        components[key] = _.Vue.extend(def)
	      }
	    }
	  }
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

	module.exports = function mergeOptions (parent, child, vm) {
	  guardComponents(child.components)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    merge(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      merge(key)
	    }
	  }
	  function merge (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)
	var textParser = __webpack_require__(15)
	var dirParser = __webpack_require__(16)
	var templateParser = __webpack_require__(17)

	module.exports = compile

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function should only be
	 * called on instance root nodes.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @param {Boolean} transcluded
	 * @return {Function}
	 */

	function compile (el, options, partial, transcluded) {
	  var isBlock = el.nodeType === 11
	  // link function for param attributes.
	  var params = options.paramAttributes
	  var paramsLinkFn = params && !partial && !transcluded && !isBlock
	    ? compileParamAttributes(el, params, options)
	    : null
	  // link function for the node itself.
	  // if this is a block instance, we return a link function
	  // for the attributes found on the container, if any.
	  // options._containerAttrs are collected during transclusion.
	  var nodeLinkFn = isBlock
	    ? compileBlockContainer(options._containerAttrs, params, options)
	    : compileNode(el, options)
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

	  function compositeLinkFn (vm, el) {
	    var originalDirCount = vm._directives.length
	    var parentOriginalDirCount =
	      vm.$parent && vm.$parent._directives.length
	    if (paramsLinkFn) {
	      paramsLinkFn(vm, el)
	    }
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // if this is a transcluded compile, linkers need to be
	    // called in source scope, and the host needs to be
	    // passed down.
	    var source = transcluded ? vm.$parent : vm
	    var host = transcluded ? vm : undefined
	    // link
	    if (nodeLinkFn) nodeLinkFn(source, el, host)
	    if (childLinkFn) childLinkFn(source, childNodes, host)

	    /**
	     * If this is a partial compile, the linker function
	     * returns an unlink function that tearsdown all
	     * directives instances generated during the partial
	     * linking.
	     */

	    if (partial && !transcluded) {
	      var selfDirs = vm._directives.slice(originalDirCount)
	      var parentDirs = vm.$parent &&
	        vm.$parent._directives.slice(parentOriginalDirCount)

	      var teardownDirs = function (vm, dirs) {
	        var i = dirs.length
	        while (i--) {
	          dirs[i]._teardown()
	        }
	        i = vm._directives.indexOf(dirs[0])
	        vm._directives.splice(i, dirs.length)
	      }

	      return function unlink () {
	        teardownDirs(vm, selfDirs)
	        if (parentDirs) {
	          teardownDirs(vm.$parent, parentDirs)
	        }
	      }
	    }
	  }

	  // transcluded linkFns are terminal, because it takes
	  // over the entire sub-tree.
	  if (transcluded) {
	    compositeLinkFn.terminal = true
	  }

	  return compositeLinkFn
	}

	/**
	 * Compile the attributes found on a "block container" -
	 * i.e. the container node in the parent tempate of a block
	 * instance. We are only concerned with v-with and
	 * paramAttributes here.
	 *
	 * @param {Object} attrs - a map of attr name/value pairs
	 * @param {Array} params - param attributes list
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileBlockContainer (attrs, params, options) {
	  if (!attrs) return null
	  var paramsLinkFn = params
	    ? compileParamAttributes(attrs, params, options)
	    : null
	  var withVal = attrs[config.prefix + 'with']
	  var withLinkFn = null
	  if (withVal) {
	    var descriptor = dirParser.parse(withVal)[0]
	    var def = options.directives['with']
	    withLinkFn = function (vm, el) {
	      vm._bindDir('with', el, descriptor, def)   
	    }
	  }
	  return function blockContainerLinkFn (vm) {
	    // explicitly passing null to the linkers
	    // since v-with doesn't need a real element
	    if (paramsLinkFn) paramsLinkFn(vm, null)
	    if (withLinkFn) withLinkFn(vm, null)
	  }
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
	  if (checkTransclusion(el)) {
	    // unwrap textNode
	    if (el.hasAttribute('__vue__wrap')) {
	      el = el.firstChild
	    }
	    return compile(el, options._parent.$options, true, true)
	  }
	  var linkFn, tag, component
	  // check custom element component, but only on non-root
	  if (!el.__vue__) {
	    tag = el.tagName.toLowerCase()
	    component =
	      tag.indexOf('-') > 0 &&
	      options.components[tag]
	    if (component) {
	      el.setAttribute(config.prefix + 'component', tag)
	    }
	  }
	  if (component || el.hasAttributes()) {
	    // check terminal direcitves
	    linkFn = checkTerminalDirectives(el, options)
	    // if not terminal, build normal link function
	    if (!linkFn) {
	      var dirs = collectDirectives(el, options)
	      linkFn = dirs.length
	        ? makeNodeLinkFn(dirs)
	        : null
	    }
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
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    var dir, j, k, target
	    while (i--) {
	      dir = directives[i]
	      // a directive can be transcluded if it's written
	      // on a component's container in its parent tempalte.
	      target = dir.transcluded
	        ? vm.$parent
	        : vm
	      if (dir._link) {
	        // custom link fn
	        dir._link(target, el)
	      } else {
	        k = dir.descriptors.length
	        for (j = 0; j < k; j++) {
	          target._bindDir(dir.name, el,
	            dir.descriptors[j], dir.def, host)
	        }
	      }
	    }
	  }
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
	    } else if (token.partial) {
	      el = document.createComment('v-partial')
	      setTokenType('partial')
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
	    token.def = options.directives[type]
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
	 * Compile param attributes on a root element and return
	 * a paramAttributes link function.
	 *
	 * @param {Element|Object} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} paramsLinkFn
	 */

	function compileParamAttributes (el, attrs, options) {
	  var params = []
	  var isEl = el.nodeType
	  var i = attrs.length
	  var name, value, param
	  while (i--) {
	    name = attrs[i]
	    if (/[A-Z]/.test(name)) {
	      _.warn(
	        'You seem to be using camelCase for a paramAttribute, ' +
	        'but HTML doesn\'t differentiate between upper and ' +
	        'lower case. You should use hyphen-delimited ' +
	        'attribute names. For more info see ' +
	        'http://vuejs.org/api/options.html#paramAttributes'
	      )
	    }
	    value = isEl ? el.getAttribute(name) : el[name]
	    if (value !== null) {
	      param = {
	        name: name,
	        value: value
	      }
	      var tokens = textParser.parse(value)
	      if (tokens) {
	        if (isEl) el.removeAttribute(name)
	        if (tokens.length > 1) {
	          _.warn(
	            'Invalid param attribute binding: "' +
	            name + '="' + value + '"' +
	            '\nDon\'t mix binding tags with plain text ' +
	            'in param attribute bindings.'
	          )
	          continue
	        } else {
	          param.dynamic = true
	          param.value = tokens[0].value
	        }
	      }
	      params.push(param)
	    }
	  }
	  return makeParamsLinkFn(params, options)
	}

	/**
	 * Build a function that applies param attributes to a vm.
	 *
	 * @param {Array} params
	 * @param {Object} options
	 * @return {Function} paramsLinkFn
	 */

	var dataAttrRE = /^data-/

	function makeParamsLinkFn (params, options) {
	  var def = options.directives['with']
	  return function paramsLinkFn (vm, el) {
	    var i = params.length
	    var param, path
	    while (i--) {
	      param = params[i]
	      // params could contain dashes, which will be
	      // interpreted as minus calculations by the parser
	      // so we need to wrap the path here
	      path = _.camelize(param.name.replace(dataAttrRE, ''))
	      if (param.dynamic) {
	        // dynamic param attribtues are bound as v-with.
	        // we can directly duck the descriptor here beacuse
	        // param attributes cannot use expressions or
	        // filters.
	        vm._bindDir('with', el, {
	          arg: path,
	          expression: param.value
	        }, def)
	      } else {
	        // just set once
	        vm.$set(path, param.value)
	      }
	    }
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

	var terminalDirectives = [
	  'repeat',
	  'if',
	  'component'
	]

	function skip () {}
	skip.terminal = true

	function checkTerminalDirectives (el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip
	  }
	  var value, dirName
	  /* jshint boss: true */
	  for (var i = 0; i < 3; i++) {
	    dirName = terminalDirectives[i]
	    if (value = _.attr(el, dirName)) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	  }
	}

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
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn (el, dirName, value, options) {
	  var descriptor = dirParser.parse(value)[0]
	  var def = options.directives[dirName]
	  var fn = function terminalNodeLinkFn (vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host)
	  }
	  fn.terminal = true
	  return fn
	}

	/**
	 * Collect the directives on an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Array}
	 */

	function collectDirectives (el, options) {
	  var attrs = _.toArray(el.attributes)
	  var i = attrs.length
	  var dirs = []
	  var attr, attrName, dir, dirName, dirDef, transcluded
	  while (i--) {
	    attr = attrs[i]
	    attrName = attr.name
	    transcluded =
	      options._transcludedAttrs &&
	      options._transcludedAttrs[attrName]
	    if (attrName.indexOf(config.prefix) === 0) {
	      dirName = attrName.slice(config.prefix.length)
	      dirDef = options.directives[dirName]
	      _.assertAsset(dirDef, 'directive', dirName)
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(attr.value),
	          def: dirDef,
	          transcluded: transcluded
	        })
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(el, attrName, attr.value,
	                                 options)
	      if (dir) {
	        dir.transcluded = transcluded
	        dirs.push(dir)
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  dirs.sort(directiveComparator)
	  return dirs
	}

	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * @param {Element} el
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */

	function collectAttrDirective (el, name, value, options) {
	  var tokens = textParser.parse(value)
	  if (tokens) {
	    var def = options.directives.attr
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
	            var value = textParser.tokensToExp(tokens, vm)
	            var desc = dirParser.parse(name + ':' + value)[0]
	            vm._bindDir('attr', el, desc, def)
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

	/**
	 * Check whether an element is transcluded
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	var transcludedFlagAttr = '__vue__transcluded'
	function checkTransclusion (el) {
	  if (el.nodeType === 1 && el.hasAttribute(transcludedFlagAttr)) {
	    el.removeAttribute(transcludedFlagAttr)
	    return true
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(12)
	var config = __webpack_require__(7)
	var dirParser = __webpack_require__(16)
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
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, value, first, oneTime, partial
	  /* jshint boss:true */
	  while (match = tagRE.exec(text)) {
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    first = match[1].charCodeAt(0)
	    oneTime = first === 0x2A // *
	    partial = first === 0x3E // >
	    value = (oneTime || partial)
	      ? match[1].slice(1)
	      : match[1]
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      partial: partial
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
	      : single
	        ? token.value
	        : inlineFilters(token.value)
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
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp) {
	  if (!filterRE.test(exp)) {
	    return '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)[0]
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      exp = dir.expression
	      for (var i = 0, l = dir.filters.length; i < l; i++) {
	        var filter = dir.filters[i]
	        var args = filter.args
	          ? ',"' + filter.args.join('","') + '"'
	          : ''
	        filter = 'this.$options.filters["' + filter.name + '"]'
	        exp = '(' + filter + '.read||' + filter + ')' +
	          '.apply(this,[' + exp + args + '])'
	      }
	      return exp
	    }
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Cache = __webpack_require__(12)
	var cache = new Cache(1000)
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
	var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g

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
	    filter.args = tokens.length > 1 ? tokens.slice(1) : null
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Cache = __webpack_require__(12)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)

	var map = {
	  _default : [0, '', ''],
	  legend   : [1, '<fieldset>', '</fieldset>'],
	  tr       : [2, '<table><tbody>', '</tbody></table>'],
	  col      : [
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

	    var tag    = tagMatch && tagMatch[1]
	    var wrap   = map[tag] || map._default
	    var depth  = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node   = document.createElement('div')

	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }

	    var child
	    /* jshint boss:true */
	    while (child = node.firstChild) {
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
	  var tag = node.tagName
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (
	    tag === 'TEMPLATE' &&
	    node.content instanceof DocumentFragment
	  ) {
	    return node.content
	  }
	  // script template
	  if (tag === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* jshint boss:true */
	  while (child = clone.firstChild) {
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
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = res.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          original[i].cloneNode(true),
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
	      ? template.cloneNode(true)
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)
	var templateParser = __webpack_require__(17)
	var transcludedFlagAttr = '__vue__transcluded'

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

	module.exports = function transclude (el, options) {
	  if (options && options._asComponent) {
	    // mutating the options object here assuming the same
	    // object will be used for compile right after this
	    options._transcludedAttrs = extractAttrs(el.attributes)
	    // Mark content nodes and attrs so that the compiler
	    // knows they should be compiled in parent scope.
	    var i = el.childNodes.length
	    while (i--) {
	      var node = el.childNodes[i]
	      if (node.nodeType === 1) {
	        node.setAttribute(transcludedFlagAttr, '')
	      } else if (node.nodeType === 3 && node.data.trim()) {
	        // wrap transcluded textNodes in spans, because
	        // raw textNodes can't be persisted through clones
	        // by attaching attributes.
	        var wrapper = document.createElement('span')
	        wrapper.textContent = node.data
	        wrapper.setAttribute('__vue__wrap', '')
	        wrapper.setAttribute(transcludedFlagAttr, '')
	        el.replaceChild(wrapper, node)
	      }
	    }
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for block instances)
	  if (el.tagName === 'TEMPLATE') {
	    el = templateParser.parse(el)
	  }
	  if (options && options.template) {
	    el = transcludeTemplate(el, options)
	  }
	  if (el instanceof DocumentFragment) {
	    _.prepend(document.createComment('v-start'), el)
	    el.appendChild(document.createComment('v-end'))
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
	  if (!frag) {
	    _.warn('Invalid template option: ' + template)
	  } else {
	    var rawContent = options._content || _.extractContent(el)
	    if (options.replace) {
	      if (frag.childNodes.length > 1) {
	        // this is a block instance which has no root node.
	        // however, the container in the parent template
	        // (which is replaced here) may contain v-with and
	        // paramAttributes that still need to be compiled
	        // for the child. we store all the container
	        // attributes on the options object and pass it down
	        // to the compiler.
	        var containerAttrs = options._containerAttrs = {}
	        var i = el.attributes.length
	        while (i--) {
	          var attr = el.attributes[i]
	          containerAttrs[attr.name] = attr.value
	        }
	        transcludeContent(frag, rawContent)
	        return frag
	      } else {
	        var replacer = frag.firstChild
	        _.copyAttributes(el, replacer)
	        transcludeContent(replacer, rawContent)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      transcludeContent(el, rawContent)
	      return el
	    }
	  }
	}

	/**
	 * Resolve <content> insertion points mimicking the behavior
	 * of the Shadow DOM spec:
	 *
	 *   http://w3c.github.io/webcomponents/spec/shadow/#insertion-points
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Element} raw
	 */

	function transcludeContent (el, raw) {
	  var outlets = getOutlets(el)
	  var i = outlets.length
	  if (!i) return
	  var outlet, select, selected, j, main

	  function isDirectChild (node) {
	    return node.parentNode === raw
	  }

	  // first pass, collect corresponding content
	  // for each outlet.
	  while (i--) {
	    outlet = outlets[i]
	    if (raw) {
	      select = outlet.getAttribute('select')
	      if (select) {  // select content
	        selected = raw.querySelectorAll(select)
	        if (selected.length) {
	          // according to Shadow DOM spec, `select` can
	          // only select direct children of the host node.
	          // enforcing this also fixes #786.
	          selected = [].filter.call(selected, isDirectChild)
	        }
	        outlet.content = selected.length
	          ? selected
	          : _.toArray(outlet.childNodes)
	      } else { // default content
	        main = outlet
	      }
	    } else { // fallback content
	      outlet.content = _.toArray(outlet.childNodes)
	    }
	  }
	  // second pass, actually insert the contents
	  for (i = 0, j = outlets.length; i < j; i++) {
	    outlet = outlets[i]
	    if (outlet !== main) {
	      insertContentAt(outlet, outlet.content)
	    }
	  }
	  // finally insert the main content
	  if (main) {
	    insertContentAt(main, _.toArray(raw.childNodes))
	  }
	}

	/**
	 * Get <content> outlets from the element/list
	 *
	 * @param {Element|Array} el
	 * @return {Array}
	 */

	var concat = [].concat
	function getOutlets (el) {
	  return _.isArray(el)
	    ? concat.apply([], el.map(getOutlets))
	    : el.querySelectorAll
	      ? _.toArray(el.querySelectorAll('content'))
	      : []
	}

	/**
	 * Insert an array of nodes at outlet,
	 * then remove the outlet.
	 *
	 * @param {Element} outlet
	 * @param {Array} contents
	 */

	function insertContentAt (outlet, contents) {
	  // not using util DOM methods here because
	  // parentNode can be cached
	  var parent = outlet.parentNode
	  for (var i = 0, j = contents.length; i < j; i++) {
	    parent.insertBefore(contents[i], outlet)
	  }
	  parent.removeChild(outlet)
	}

	/**
	 * Helper to extract a component container's attribute names
	 * into a map, and filtering out `v-with` in the process.
	 * The resulting map will be used in compiler/compile to
	 * determine whether an attribute is transcluded.
	 *
	 * @param {NameNodeMap} attrs
	 */

	function extractAttrs (attrs) {
	  if (!attrs) return null
	  var res = {}
	  var vwith = config.prefix + 'with'
	  var i = attrs.length
	  while (i--) {
	    var name = attrs[i].name
	    if (name !== vwith) res[name] = true
	  }
	  return res
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Path = __webpack_require__(11)
	var Cache = __webpack_require__(12)
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
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\])*$/
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
	    _.warn(
	      'Avoid using reserved keywords in expression: '
	      + exp
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
	    _.warn(
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
	    _.warn('Invalid setter function body: ' + body)
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
	  var res =
	    pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	      ? compilePathFns(exp)
	      : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}

	// Export the pathRegex for external use
	exports.pathTestRE = pathTestRE

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// manipulation directives
	exports.text       = __webpack_require__(26)
	exports.html       = __webpack_require__(27)
	exports.attr       = __webpack_require__(28)
	exports.show       = __webpack_require__(29)
	exports['class']   = __webpack_require__(30)
	exports.el         = __webpack_require__(31)
	exports.ref        = __webpack_require__(32)
	exports.cloak      = __webpack_require__(33)
	exports.style      = __webpack_require__(34)
	exports.partial    = __webpack_require__(21)
	exports.transition = __webpack_require__(35)

	// event listener directives
	exports.on         = __webpack_require__(36)
	exports.model      = __webpack_require__(37)

	// child vm directives
	exports.component  = __webpack_require__(48)
	exports.repeat     = __webpack_require__(49)
	exports['if']      = __webpack_require__(22)

	// child vm communication directives
	exports['with']    = __webpack_require__(50)
	exports.events     = __webpack_require__(51)

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(17)
	var vIf = __webpack_require__(22)

	module.exports = {

	  isLiteral: true,

	  // same logic reuse from v-if
	  compile: vIf.compile,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,
	  unbind: vIf.unbind,

	  bind: function () {
	    var el = this.el
	    this.start = document.createComment('v-partial-start')
	    this.end = document.createComment('v-partial-end')
	    if (el.nodeType !== 8) {
	      el.innerHTML = ''
	    }
	    if (el.tagName === 'TEMPLATE' || el.nodeType === 8) {
	      _.replace(el, this.end)
	    } else {
	      el.appendChild(this.end)
	    }
	    _.before(this.start, this.end)
	    if (!this._isDynamicLiteral) {
	      this.insert(this.expression)
	    }
	  },

	  update: function (id) {
	    this.teardown()
	    this.insert(id)
	  },

	  insert: function (id) {
	    var partial = this.vm.$options.partials[id]
	    _.assertAsset(partial, 'partial', id)
	    if (partial) {
	      var filters = this.filters && this.filters.read
	      if (filters) {
	        partial = _.applyFilters(partial, filters, this.vm)
	      }
	      this.compile(templateParser.parse(partial, true))
	    }
	  }

	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var compile = __webpack_require__(14)
	var templateParser = __webpack_require__(17)
	var transition = __webpack_require__(23)

	module.exports = {

	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      this.start = document.createComment('v-if-start')
	      this.end = document.createComment('v-if-end')
	      _.replace(el, this.end)
	      _.before(this.start, this.end)
	      if (el.tagName === 'TEMPLATE') {
	        this.template = templateParser.parse(el, true)
	      } else {
	        this.template = document.createDocumentFragment()
	        this.template.appendChild(templateParser.clone(el))
	      }
	      // compile the nested partial
	      this.linker = compile(
	        this.template,
	        this.vm.$options,
	        true
	      )
	    } else {
	      this.invalid = true
	      _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an already mounted instance.'
	      )
	    }
	  },

	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        var frag = templateParser.clone(this.template)
	        this.compile(frag)
	      }
	    } else {
	      this.teardown()
	    }
	  },

	  // NOTE: this function is shared in v-partial
	  compile: function (frag) {
	    var vm = this.vm
	    // the linker is not guaranteed to be present because
	    // this function might get called by v-partial 
	    this.unlink = this.linker
	      ? this.linker(vm, frag)
	      : vm.$compile(frag)
	    transition.blockAppend(frag, this.end, vm)
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents()
	      if (children) children.forEach(callAttach)
	    }
	  },

	  // NOTE: this function is shared in v-partial
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

	  // NOTE: this function is shared in v-partial
	  getContainedComponents: function () {
	    var vm = this.vm
	    var start = this.start.nextSibling
	    var end = this.end
	    var selfCompoents =
	      vm._children.length &&
	      vm._children.filter(contains)
	    var transComponents =
	      vm._transCpnts &&
	      vm._transCpnts.filter(contains)

	    function contains (c) {
	      var cur = start
	      var next
	      while (next !== end) {
	        next = cur.nextSibling
	        if (cur.contains(c.$el)) {
	          return true
	        }
	        cur = next
	      }
	      return false
	    }

	    return selfCompoents
	      ? transComponents
	        ? selfCompoents.concat(transComponents)
	        : selfCompoents
	      : transComponents
	  },

	  // NOTE: this function is shared in v-partial
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

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var applyCSSTransition = __webpack_require__(24)
	var applyJSTransition = __webpack_require__(25)
	var doc = typeof document === 'undefined' ? null : document

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
	  var transData = el.__v_trans
	  if (
	    !transData ||
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
	  // determine the transition type on the element
	  var jsTransition = transData.fns
	  if (jsTransition) {
	    // js
	    applyJSTransition(
	      el,
	      direction,
	      op,
	      transData,
	      jsTransition,
	      vm,
	      cb
	    )
	  } else if (
	    _.transitionEndEvent &&
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    !(doc && doc.hidden)
	  ) {
	    // css
	    applyCSSTransition(
	      el,
	      direction,
	      op,
	      transData,
	      cb
	    )
	  } else {
	    // not applicable
	    op()
	    if (cb) cb()
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'

	var queue = []
	var queued = false

	/**
	 * Push a job into the transition queue, which is to be
	 * executed on next frame.
	 *
	 * @param {Element} el    - target element
	 * @param {Number} dir    - 1: enter, -1: leave
	 * @param {Function} op   - the actual dom operation
	 * @param {String} cls    - the className to remove when the
	 *                          transition is done.
	 * @param {Function} [cb] - user supplied callback.
	 */

	function push (el, dir, op, cls, cb) {
	  queue.push({
	    el  : el,
	    dir : dir,
	    cb  : cb,
	    cls : cls,
	    op  : op
	  })
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
	  /* jshint unused: false */
	  var f = document.documentElement.offsetHeight
	  queue.forEach(run)
	  queue = []
	  queued = false
	}

	/**
	 * Run a transition job.
	 *
	 * @param {Object} job
	 */

	function run (job) {

	  var el = job.el
	  var data = el.__v_trans
	  var cls = job.cls
	  var cb = job.cb
	  var op = job.op
	  var transitionType = getTransitionType(el, data, cls)

	  if (job.dir > 0) { // ENTER
	    if (transitionType === 1) {
	      // trigger transition by removing enter class
	      removeClass(el, cls)
	      // only need to listen for transitionend if there's
	      // a user callback
	      if (cb) setupTransitionCb(_.transitionEndEvent)
	    } else if (transitionType === 2) {
	      // animations are triggered when class is added
	      // so we just listen for animationend to remove it.
	      setupTransitionCb(_.animationEndEvent, function () {
	        removeClass(el, cls)
	      })
	    } else {
	      // no transition applicable
	      removeClass(el, cls)
	      if (cb) cb()
	    }
	  } else { // LEAVE
	    if (transitionType) {
	      // leave transitions/animations are both triggered
	      // by adding the class, just remove it on end event.
	      var event = transitionType === 1
	        ? _.transitionEndEvent
	        : _.animationEndEvent
	      setupTransitionCb(event, function () {
	        op()
	        removeClass(el, cls)
	      })
	    } else {
	      op()
	      removeClass(el, cls)
	      if (cb) cb()
	    }
	  }

	  /**
	   * Set up a transition end callback, store the callback
	   * on the element's __v_trans data object, so we can
	   * clean it up if another transition is triggered before
	   * the callback is fired.
	   *
	   * @param {String} event
	   * @param {Function} [cleanupFn]
	   */

	  function setupTransitionCb (event, cleanupFn) {
	    data.event = event
	    var onEnd = data.callback = function transitionCb (e) {
	      if (e.target === el) {
	        _.off(el, event, onEnd)
	        data.event = data.callback = null
	        if (cleanupFn) cleanupFn()
	        if (cb) cb()
	      }
	    }
	    _.on(el, event, onEnd)
	  }
	}

	/**
	 * Get an element's transition type based on the
	 * calculated styles
	 *
	 * @param {Element} el
	 * @param {Object} data
	 * @param {String} className
	 * @return {Number}
	 *         1 - transition
	 *         2 - animation
	 */

	function getTransitionType (el, data, className) {
	  var type = data.cache && data.cache[className]
	  if (type) return type
	  var inlineStyles = el.style
	  var computedStyles = window.getComputedStyle(el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = 1
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = 2
	    }
	  }
	  if (type) {
	    if (!data.cache) data.cache = {}
	    data.cache[className] = type
	  }
	  return type
	}

	/**
	 * Apply CSS transition to an element.
	 *
	 * @param {Element} el
	 * @param {Number} direction - 1: enter, -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Object} data - target element's transition data
	 */

	module.exports = function (el, direction, op, data, cb) {
	  var prefix = data.id || 'v'
	  var enterClass = prefix + '-enter'
	  var leaveClass = prefix + '-leave'
	  // clean up potential previous unfinished transition
	  if (data.callback) {
	    _.off(el, data.event, data.callback)
	    removeClass(el, enterClass)
	    removeClass(el, leaveClass)
	    data.event = data.callback = null
	  }
	  if (direction > 0) { // enter
	    addClass(el, enterClass)
	    op()
	    push(el, direction, null, enterClass, cb)
	  } else { // leave
	    addClass(el, leaveClass)
	    push(el, direction, op, leaveClass, cb)
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Apply JavaScript enter/leave functions.
	 *
	 * @param {Element} el
	 * @param {Number} direction - 1: enter, -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Object} data - target element's transition data
	 * @param {Object} def - transition definition object
	 * @param {Vue} vm - the owner vm of the element
	 * @param {Function} [cb]
	 */

	module.exports = function (el, direction, op, data, def, vm, cb) {
	  // if the element is the root of an instance,
	  // use that instance as the transition function context
	  vm = el.__vue__ || vm
	  if (data.cancel) {
	    data.cancel()
	    data.cancel = null
	  }
	  if (direction > 0) { // enter
	    if (def.beforeEnter) {
	      def.beforeEnter.call(vm, el)
	    }
	    op()
	    if (def.enter) {
	      data.cancel = def.enter.call(vm, el, function () {
	        data.cancel = null
	        if (cb) cb()
	      })
	    } else if (cb) {
	      cb()
	    }
	  } else { // leave
	    if (def.leave) {
	      data.cancel = def.leave.call(vm, el, function () {
	        data.cancel = null
	        op()
	        if (cb) cb()
	      })
	    } else {
	      op()
	      if (cb) cb()
	    }
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	module.exports = {

	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'nodeValue'
	      : 'textContent'
	  },

	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	  
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(17)

	module.exports = {

	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
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
	    _.before(frag, this.el)
	  }

	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/

	module.exports = {

	  priority: 850,

	  bind: function () {
	    var name = this.arg
	    this.update = xlinkRE.test(name)
	      ? xlinkHandler
	      : defaultHandler
	  }

	}

	function defaultHandler (value) {
	  if (value || value === 0) {
	    this.el.setAttribute(this.arg, value)
	  } else {
	    this.el.removeAttribute(this.arg)
	  }
	}

	function xlinkHandler (value) {
	  if (value != null) {
	    this.el.setAttributeNS(xlinkNS, this.arg, value)
	  } else {
	    this.el.removeAttributeNS(xlinkNS, 'href')
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var transition = __webpack_require__(23)

	module.exports = function (value) {
	  var el = this.el
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none'
	  }, this.vm)
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var addClass = _.addClass
	var removeClass = _.removeClass

	module.exports = function (value) {
	  if (this.arg) {
	    var method = value ? addClass : removeClass
	    method(this.el, this.arg)
	  } else {
	    if (this.lastVal) {
	      removeClass(this.el, this.lastVal)
	    }
	    if (value) {
	      addClass(this.el, value)
	      this.lastVal = value
	    }
	  }
	}

/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	module.exports = {

	  isLiteral: true,

	  bind: function () {
	    var vm = this.el.__vue__
	    if (!vm) {
	      _.warn(
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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(7)

	module.exports = {

	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak')
	    })
	  }

	}

/***/ },
/* 34 */
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
	        // cache object styles so that only changed props
	        // are actually updated.
	        if (!this.cache) this.cache = {}
	        for (var prop in value) {
	          this.setProp(prop, value[prop])
	          /* jshint eqeqeq: false */
	          if (value[prop] != this.cache[prop]) {
	            this.cache[prop] = value[prop]
	            this.setProp(prop, value[prop])
	          }
	        }
	      } else {
	        this.el.style.cssText = value
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	  priority: 1000,
	  isLiteral: true,

	  bind: function () {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression)
	    }
	  },

	  update: function (id) {
	    var vm = this.el.__vue__ || this.vm
	    this.el.__v_trans = {
	      id: id,
	      // resolve the custom transition functions now
	      // so the transition module knows this is a
	      // javascript transition without having to check
	      // computed CSS.
	      fns: vm.$options.transitions[id]
	    }
	  }

	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

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
	      _.warn(
	        'Directive "v-on:' + this.expression + '" ' +
	        'expects a function value.'
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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	var handlers = {
	  _default: __webpack_require__(38),
	  radio: __webpack_require__(39),
	  select: __webpack_require__(40),
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
	    var filters = this.filters
	    if (filters && filters.read && !filters.write) {
	      _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers._default
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers._default
	    } else {
	      _.warn("v-model doesn't support element type: " + tag)
	      return
	    }
	    handler.bind.call(this)
	    this.update = handler.update
	    this.unbind = handler.unbind
	  }

	}

/***/ },
/* 38 */
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
	    // http://blog.evanyou.me/2014/01/03/composition-event/
	    var cpLocked = false
	    this.cpLock = function () {
	      cpLocked = true
	    }
	    this.cpUnlock = function () {
	      cpLocked = false
	      // in IE11 the "compositionend" event fires AFTER
	      // the "input" event, so the input handler is blocked
	      // at the end... have to call it here.
	      set()
	    }
	    _.on(el,'compositionstart', this.cpLock)
	    _.on(el,'compositionend', this.cpUnlock)

	    // shared setter
	    function set () {
	      self.set(
	        number ? _.toNumber(el.value) : el.value,
	        true
	      )
	    }

	    // if the directive has filters, we need to
	    // record cursor position and restore it after updating
	    // the input with the filtered value.
	    // also force update for type="range" inputs to enable
	    // "lock in range" (see #506)
	    var hasReadFilter = this.filters && this.filters.read
	    this.listener = hasReadFilter || el.type === 'range'
	      ? function textInputListener () {
	          if (cpLocked) return
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
	          set()
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
	      : function textInputListener () {
	          if (cpLocked) return
	          set()
	        }

	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }
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
	    _.off(el,'compositionstart', this.cpLock)
	    _.off(el,'compositionend', this.cpUnlock)
	    if (this.onCut) {
	      _.off(el,'cut', this.onCut)
	      _.off(el,'keyup', this.onDel)
	    }
	  }

	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.value, true)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.value
	    }
	  },

	  update: function (value) {
	    /* jshint eqeqeq: false */
	    this.el.checked = value == this.el.value
	  },

	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }

	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Watcher = __webpack_require__(41)
	var dirParser = __webpack_require__(16)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
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
	      self.set(value, true)
	    }
	    _.on(el, 'change', this.listener)
	    checkInitialValue.call(this)
	  },

	  update: function (value) {
	    /* jshint eqeqeq: false */
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var option
	    while (i--) {
	      option = options[i]
	      option.selected = multi
	        ? indexOf(value, option.value) > -1
	        : value == option.value
	    }
	  },

	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
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
	      if (self._watcher) {
	        self.update(self._watcher.value)
	      }
	    } else {
	      _.warn('Invalid options value for v-model: ' + value)
	    }
	  }
	  this.optionWatcher = new Watcher(
	    this.vm,
	    descriptor.expression,
	    optionUpdateWatcher,
	    {
	      deep: true,
	      filters: _.resolveFilters(this.vm, descriptor.filters)
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
	        el.text = op.text
	        el.value = op.value
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
	  /* jshint eqeqeq: false */
	  var i = arr.length
	  while (i--) {
	    if (arr[i] == val) return i
	  }
	  return -1
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)
	var Observer = __webpack_require__(42)
	var expParser = __webpack_require__(19)
	var batcher = __webpack_require__(46)
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
	 * @constructor
	 */

	function Watcher (vm, expression, cb, options) {
	  this.vm = vm
	  vm._watcherList.push(this)
	  this.expression = expression
	  this.cbs = [cb]
	  this.id = ++uid // uid for batching
	  this.active = true
	  options = options || {}
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.deps = Object.create(null)
	  // setup filters if any.
	  // We delegate directive filters here to the watcher
	  // because they need to be included in the dependency
	  // collection process.
	  if (options.filters) {
	    this.readFilters = options.filters.read
	    this.writeFilters = options.filters.write
	  }
	  // parse expression for getter/setter
	  var res = expParser.parse(expression, options.twoWay)
	  this.getter = res.get
	  this.setter = res.set
	  this.value = this.get()
	}

	var p = Watcher.prototype

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	p.addDep = function (dep) {
	  var id = dep.id
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep
	    if (!this.deps[id]) {
	      this.deps[id] = dep
	      dep.addSub(this)
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
	    if (config.warnExpressionErrors) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '":\n   ' + e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  value = _.applyFilters(value, this.readFilters, vm)
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
	  value = _.applyFilters(
	    value, this.writeFilters, vm, this.value
	  )
	  try {
	    this.setter.call(vm, vm, value)
	  } catch (e) {
	    if (config.warnExpressionErrors) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '":\n   ' + e
	      )
	    }
	  }
	}

	/**
	 * Prepare for dependency collection.
	 */

	p.beforeGet = function () {
	  Observer.target = this
	  this.newDeps = {}
	}

	/**
	 * Clean up for dependency collection.
	 */

	p.afterGet = function () {
	  Observer.target = null
	  for (var id in this.deps) {
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	}

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */

	p.update = function () {
	  if (!config.async || config.debug) {
	    this.run()
	  } else {
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
	      Array.isArray(value) ||
	      this.deep
	    ) {
	      var oldValue = this.value
	      this.value = value
	      var cbs = this.cbs
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i](value, oldValue)
	        // if a callback also removed other callbacks,
	        // we need to adjust the loop accordingly.
	        var removed = l - cbs.length
	        if (removed) {
	          i -= removed
	          l -= removed
	        }
	      }
	    }
	  }
	}

	/**
	 * Add a callback.
	 *
	 * @param {Function} cb
	 */

	p.addCb = function (cb) {
	  this.cbs.push(cb)
	}

	/**
	 * Remove a callback.
	 *
	 * @param {Function} cb
	 */

	p.removeCb = function (cb) {
	  var cbs = this.cbs
	  if (cbs.length > 1) {
	    var i = cbs.indexOf(cb)
	    if (i > -1) {
	      cbs.splice(i, 1)
	    }
	  } else if (cb === cbs[0]) {
	    this.teardown()
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
	      var list = this.vm._watcherList
	      var i = list.indexOf(this)
	      if (i > -1) {
	        list.splice(i, 1)
	      }
	    }
	    for (var id in this.deps) {
	      this.deps[id].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cbs = this.value = null
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

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)
	var Dep = __webpack_require__(43)
	var arrayMethods = __webpack_require__(44)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	__webpack_require__(45)

	var uid = 0

	/**
	 * Type enums
	 */

	var ARRAY  = 0
	var OBJECT = 1

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

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @param {Number} type
	 * @constructor
	 */

	function Observer (value, type) {
	  this.id = ++uid
	  this.value = value
	  this.active = true
	  this.deps = []
	  _.define(value, '__ob__', this)
	  if (type === ARRAY) {
	    var augment = config.proto && _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else if (type === OBJECT) {
	    this.walk(value)
	  }
	}

	Observer.target = null

	var p = Observer.prototype

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @return {Observer|undefined}
	 * @static
	 */

	Observer.create = function (value) {
	  if (
	    value &&
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    return value.__ob__
	  } else if (_.isArray(value)) {
	    return new Observer(value, ARRAY)
	  } else if (
	    _.isPlainObject(value) &&
	    !value._isVue // avoid Vue instance
	  ) {
	    return new Observer(value, OBJECT)
	  }
	}

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
	  if (childOb) {
	    childOb.deps.push(dep)
	  }
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function () {
	      // Observer.target is a watcher whose getter is
	      // currently being evaluated.
	      if (ob.active && Observer.target) {
	        Observer.target.addDep(dep)
	      }
	      return val
	    },
	    set: function (newVal) {
	      if (newVal === val) return
	      // remove dep from old value
	      var oldChildOb = val && val.__ob__
	      if (oldChildOb) {
	        var oldDeps = oldChildOb.deps
	        oldDeps.splice(oldDeps.indexOf(dep), 1)
	      }
	      val = newVal
	      // add dep to new value
	      var newChildOb = ob.observe(newVal)
	      if (newChildOb) {
	        newChildOb.deps.push(dep)
	      }
	      dep.notify()
	    }
	  })
	}

	/**
	 * Notify change on all self deps on an observer.
	 * This is called when a mutable value mutates. e.g.
	 * when an Array's mutating methods are called, or an
	 * Object's $add/$delete are called.
	 */

	p.notify = function () {
	  var deps = this.deps
	  for (var i = 0, l = deps.length; i < l; i++) {
	    deps[i].notify()
	  }
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
	  (this.vms = this.vms || []).push(vm)
	}

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	p.removeVm = function (vm) {
	  this.vms.splice(this.vms.indexOf(vm), 1)
	}

	module.exports = Observer


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var uid = 0
	var _ = __webpack_require__(3)

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	function Dep () {
	  this.id = ++uid
	  this.subs = []
	}

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
	  if (this.subs.length) {
	    var i = this.subs.indexOf(sub)
	    if (i > -1) this.subs.splice(i, 1)
	  }
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
/* 44 */
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
	    ob.notify()
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
	    if (typeof index !== 'number') {
	      index = this.indexOf(index)
	    }
	    if (index > -1) {
	      return this.splice(index, 1)[0]
	    }
	  }
	)

	module.exports = arrayMethods

/***/ },
/* 45 */
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
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._proxy(key)
	        vm._digest()
	      }
	    } else {
	      ob.notify()
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
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._unproxy(key)
	        vm._digest()
	      }
	    } else {
	      ob.notify()
	    }
	  }
	)

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var MAX_UPDATE_COUNT = 10

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var waiting = false
	var flushing = false

	/**
	 * Reset the batcher's state.
	 */

	function reset () {
	  queue = []
	  userQueue = []
	  has = {}
	  waiting = false
	  flushing = false
	}

	/**
	 * Flush both queues and run the jobs.
	 */

	function flush () {
	  flushing = true
	  run(queue)
	  run(userQueue)
	  reset()
	}

	/**
	 * Run the jobs in a single queue.
	 *
	 * @param {Array} queue
	 */

	function run (queue) {
	  // do not cache length because more jobs might be pushed
	  // as we run existing jobs
	  for (var i = 0; i < queue.length; i++) {
	    queue[i].run()
	  }
	}

	/**
	 * Push a job into the job queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Object} job
	 *   properties:
	 *   - {String|Number} id
	 *   - {Function}      run
	 */

	exports.push = function (job) {
	  var id = job.id
	  if (!id || !has[id] || flushing) {
	    if (!has[id]) {
	      has[id] = 1
	    } else {
	      has[id]++
	      // detect possible infinite update loops
	      if (has[id] > MAX_UPDATE_COUNT) {
	        _.warn(
	          'You may have an infinite update loop for the ' +
	          'watcher with expression: "' + job.expression + '".'
	        )
	        return
	      }
	    }
	    // A user watcher callback could trigger another
	    // directive update during the flushing; at that time
	    // the directive queue would already have been run, so
	    // we call that update immediately as it is pushed.
	    if (flushing && !job.user) {
	      job.run()
	      return
	    }
	    ;(job.user ? userQueue : queue).push(job)
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flush)
	    }
	  }
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.checked, true)
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

	var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(17)

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
	      this.ref = document.createComment('v-component')
	      _.replace(this.el, this.ref)
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null
	      // check ref
	      this.refID = _.attr(this.el, 'ref')
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true)
	      }
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveCtor(this.expression)
	        var child = this.build()
	        child.$before(this.ref)
	        this.setCurrent(child)
	      } else {
	        // check dynamic component params
	        this.readyEvent = this._checkParam('wait-for')
	        this.transMode = this._checkParam('transition-mode')
	      }
	    } else {
	      _.warn(
	        'v-component="' + this.expression + '" cannot be ' +
	        'used on an already mounted instance.'
	      )
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveCtor: function (id) {
	    this.ctorId = id
	    this.Ctor = this.vm.$options.components[id]
	    _.assertAsset(this.Ctor, 'component', id)
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @return {Vue} - the created instance
	   */

	  build: function () {
	    if (this.keepAlive) {
	      var cached = this.cache[this.ctorId]
	      if (cached) {
	        return cached
	      }
	    }
	    var vm = this.vm
	    var el = templateParser.clone(this.el)
	    if (this.Ctor) {
	      var child = vm.$addChild({
	        el: el,
	        template: this.template,
	        _asComponent: true,
	        _host: this._host
	      }, this.Ctor)
	      if (this.keepAlive) {
	        this.cache[this.ctorId] = child
	      }
	      return child
	    }
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   */

	  unbuild: function () {
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, true)
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
	   * Update callback for the dynamic literal scenario,
	   * e.g. v-component="{{view}}"
	   */

	  update: function (value) {
	    if (!value) {
	      // just destroy and remove current
	      this.unbuild()
	      this.remove(this.childVM)
	      this.unsetCurrent()
	    } else {
	      this.resolveCtor(value)
	      this.unbuild()
	      var newComponent = this.build()
	      var self = this
	      if (this.readyEvent) {
	        newComponent.$once(this.readyEvent, function () {
	          self.swapTo(newComponent)
	        })
	      } else {
	        this.swapTo(newComponent)
	      }
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   */

	  swapTo: function (target) {
	    var self = this
	    var current = this.childVM
	    this.unsetCurrent()
	    this.setCurrent(target)
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.ref, function () {
	          self.remove(current)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.ref)
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.ref)
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
	    this.unbuild()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }

	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var isObject = _.isObject
	var isPlainObject = _.isPlainObject
	var textParser = __webpack_require__(15)
	var expParser = __webpack_require__(19)
	var templateParser = __webpack_require__(17)
	var compile = __webpack_require__(14)
	var transclude = __webpack_require__(18)
	var mergeOptions = __webpack_require__(13)
	var uid = 0

	module.exports = {

	  /**
	   * Setup.
	   */

	  bind: function () {
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + (++uid)
	    // we need to insert the objToArray converter
	    // as the first read filter, because it has to be invoked
	    // before any user filters. (can't do it in `update`)
	    if (!this.filters) {
	      this.filters = {}
	    }
	    // add the object -> array convert filter
	    var objectConverter = _.bind(objToArray, this)
	    if (!this.filters.read) {
	      this.filters.read = [objectConverter]
	    } else {
	      this.filters.read.unshift(objectConverter)
	    }
	    // setup ref node
	    this.ref = document.createComment('v-repeat')
	    _.replace(this.el, this.ref)
	    // check if this is a block repeat
	    this.template = this.el.tagName === 'TEMPLATE'
	      ? templateParser.parse(this.el, true)
	      : this.el
	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf()
	    this.checkRef()
	    this.checkComponent()
	    // check for trackby param
	    this.idKey =
	      this._checkParam('track-by') ||
	      this._checkParam('trackby') // 0.11.0 compat
	    this.cache = Object.create(null)
	  },

	  /**
	   * Warn against v-if usage.
	   */

	  checkIf: function () {
	    if (_.attr(this.el, 'if') !== null) {
	      _.warn(
	        'Don\'t use v-if with v-repeat. ' +
	        'Use v-show or the "filterBy" filter instead.'
	      )
	    }
	  },

	  /**
	   * Check if v-ref/ v-el is also present.
	   */

	  checkRef: function () {
	    var refID = _.attr(this.el, 'ref')
	    this.refID = refID
	      ? this.vm.$interpolate(refID)
	      : null
	    var elId = _.attr(this.el, 'el')
	    this.elId = elId
	      ? this.vm.$interpolate(elId)
	      : null
	  },

	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */

	  checkComponent: function () {
	    var id = _.attr(this.el, 'component')
	    var options = this.vm.$options
	    if (!id) {
	      // default constructor
	      this.Ctor = _.Vue
	      // inline repeats should inherit
	      this.inherit = true
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = transclude(this.template)
	      this._linkFn = compile(this.template, options)
	    } else {
	      this.asComponent = true
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTempalte = _.extractContent(this.el, true)
	      }
	      var tokens = textParser.parse(id)
	      if (!tokens) { // static component
	        var Ctor = this.Ctor = options.components[id]
	        _.assertAsset(Ctor, 'component', id)
	        var merged = mergeOptions(Ctor.options, {}, {
	          $parent: this.vm
	        })
	        merged.template = this.inlineTempalte || merged.template
	        merged._asComponent = true
	        merged._parent = this.vm
	        this.template = transclude(this.template, merged)
	        // Important: mark the template as a root node so that
	        // custom element components don't get compiled twice.
	        // fixes #822
	        this.template.__vue__ = true
	        this._linkFn = compile(this.template, merged)
	      } else {
	        // to be resolved later
	        var ctorExp = textParser.tokensToExp(tokens)
	        this.ctorGetter = expParser.parse(ctorExp).get
	      }
	    }
	  },

	  /**
	   * Update.
	   * This is called whenever the Array mutates.
	   *
	   * @param {Array|Number|String} data
	   */

	  update: function (data) {
	    data = data || []
	    var type = typeof data
	    if (type === 'number') {
	      data = range(data)
	    } else if (type === 'string') {
	      data = _.toArray(data)
	    }
	    this.vms = this.diff(data, this.vms)
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.vms
	    }
	    if (this.elId) {
	      this.vm.$$[this.elId] = this.vms.map(function (vm) {
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
	    var ref = this.ref
	    var alias = this.arg
	    var init = !oldVms
	    var vms = new Array(data.length)
	    var obj, raw, vm, i, l
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i]
	      raw = converted ? obj.$value : obj
	      vm = !init && this.getVm(raw)
	      if (vm) { // reusable instance
	        vm._reused = true
	        vm.$index = i // update $index
	        if (converted) {
	          vm.$key = obj.$key // update $key
	        }
	        if (idKey) { // swap track by id data
	          if (alias) {
	            vm[alias] = raw
	          } else {
	            vm._setData(raw)
	          }
	        }
	      } else { // new instance
	        vm = this.build(obj, i, true)
	        vm._new = true
	        vm._reused = false
	      }
	      vms[i] = vm
	      // insert if this is first run
	      if (init) {
	        vm.$before(ref)
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i]
	      if (!vm._reused) {
	        this.uncacheVm(vm)
	        vm.$destroy(true)
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place. We're going in reverse here because
	    // insertBefore relies on the next sibling to be
	    // resolved.
	    var targetNext, currentNext
	    i = vms.length
	    while (i--) {
	      vm = vms[i]
	      // this is the vm that we should be in front of
	      targetNext = vms[i + 1]
	      if (!targetNext) {
	        // This is the last item. If it's reused then
	        // everything else will eventually be in the right
	        // place, so no need to touch it. Otherwise, insert
	        // it.
	        if (!vm._reused) {
	          vm.$before(ref)
	        }
	      } else {
	        var nextEl = targetNext.$el
	        if (vm._reused) {
	          // this is the vm we are actually in front of
	          currentNext = findNextVm(vm, ref)
	          // we only need to move if we are not in the right
	          // place already.
	          if (currentNext !== targetNext) {
	            vm.$before(nextEl, null, false)
	          }
	        } else {
	          // new instance, insert to existing next
	          vm.$before(nextEl)
	        }
	      }
	      vm._new = false
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
	    var Ctor = this.Ctor || this.resolveCtor(data, meta)
	    var vm = this.vm.$addChild({
	      el: templateParser.clone(this.template),
	      _asComponent: this.asComponent,
	      _host: this._host,
	      _linkFn: this._linkFn,
	      _meta: meta,
	      data: data,
	      inherit: this.inherit,
	      template: this.inlineTempalte
	    }, Ctor)
	    // flag this instance as a repeat instance
	    // so that we can skip it in vm._digest
	    vm._repeat = true
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm)
	    }
	    // sync back changes for $value, particularly for
	    // two-way bindings of primitive values
	    var self = this
	    vm.$watch('$value', function (val) {
	      if (self.converted) {
	        self.rawValue[vm.$key] = val
	      } else {
	        self.rawValue.$set(vm.$index, val)
	      }
	    })
	    return vm
	  },

	  /**
	   * Resolve a contructor to use for an instance.
	   * The tricky part here is that there could be dynamic
	   * components depending on instance data.
	   *
	   * @param {Object} data
	   * @param {Object} meta
	   * @return {Function}
	   */

	  resolveCtor: function (data, meta) {
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
	    var id = this.ctorGetter.call(context, context)
	    var Ctor = this.vm.$options.components[id]
	    _.assertAsset(Ctor, 'component', id)
	    return Ctor
	  },

	  /**
	   * Unbind, teardown everything
	   */

	  unbind: function () {
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
	   */

	  cacheVm: function (data, vm) {
	    var idKey = this.idKey
	    var cache = this.cache
	    var id
	    if (idKey) {
	      id = data[idKey]
	      if (!cache[id]) {
	        cache[id] = vm
	      } else {
	        _.warn('Duplicate track-by key in v-repeat: ' + id)
	      }
	    } else if (isObject(data)) {
	      id = this.id
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm
	        } else {
	          _.warn(
	            'Duplicate objects are not supported in v-repeat ' +
	            'when using components or transitions.'
	          )
	        }
	      } else {
	        _.define(data, this.id, vm)
	      }
	    } else {
	      if (!cache[data]) {
	        cache[data] = [vm]
	      } else {
	        cache[data].push(vm)
	      }
	    }
	    vm._raw = data
	  },

	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @return {Vue|undefined}
	   */

	  getVm: function (data) {
	    if (this.idKey) {
	      return this.cache[data[this.idKey]]
	    } else if (isObject(data)) {
	      return data[this.id]
	    } else {
	      var cached = this.cache[data]
	      if (cached) {
	        var i = 0
	        var vm = cached[i]
	        // since duplicated vm instances might be a reused
	        // one OR a newly created one, we need to return the
	        // first instance that is neither of these.
	        while (vm && (vm._reused || vm._new)) {
	          vm = cached[++i]
	        }
	        return vm
	      }
	    }
	  },

	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */

	  uncacheVm: function (vm) {
	    var data = vm._raw
	    if (this.idKey) {
	      this.cache[data[this.idKey]] = null
	    } else if (isObject(data)) {
	      data[this.id] = null
	      vm._raw = null
	    } else {
	      this.cache[data].pop()
	    }
	  }

	}

	/**
	 * Helper to find the next element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * @param {Vue} vm
	 * @param {CommentNode} ref
	 * @return {Vue}
	 */

	function findNextVm (vm, ref) {
	  var el = (vm._blockEnd || vm.$el).nextSibling
	  while (!el.__vue__ && el !== ref) {
	    el = el.nextSibling
	  }
	  return el.__vue__
	}

	/**
	 * Attempt to convert non-Array objects to array.
	 * This is the default filter installed to every v-repeat
	 * directive.
	 *
	 * It will be called with **the directive** as `this`
	 * context so that we can mark the repeat array as converted
	 * from an object.
	 *
	 * @param {*} obj
	 * @return {Array}
	 * @private
	 */

	function objToArray (obj) {
	  // regardless of type, store the un-filtered raw value.
	  this.rawValue = obj
	  if (!isPlainObject(obj)) {
	    return obj
	  }
	  var keys = Object.keys(obj)
	  var i = keys.length
	  var res = new Array(i)
	  var key
	  while (i--) {
	    key = keys[i]
	    res[i] = {
	      $key: key,
	      $value: obj[key]
	    }
	  }
	  // `this` points to the repeat directive instance
	  this.converted = true
	  return res
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

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Watcher = __webpack_require__(41)
	var expParser = __webpack_require__(19)
	var literalRE = /^(true|false|\s?('[^']*'|"[^"]")\s?)$/

	module.exports = {

	  priority: 900,

	  bind: function () {

	    var child = this.vm
	    var parent = child.$parent
	    var childKey = this.arg || '$data'
	    var parentKey = this.expression

	    if (this.el && this.el !== child.$el) {
	      _.warn(
	        'v-with can only be used on instance root elements.'
	      )
	    } else if (!parent) {
	      _.warn(
	        'v-with must be used on an instance with a parent.'
	      )
	    } else if (literalRE.test(parentKey)) {
	      // no need to setup watchers for literal bindings
	      if (!this.arg) {
	        _.warn(
	          'v-with cannot bind literal value as $data: ' +
	          parentKey
	        )
	      } else {
	        var value = expParser.parse(parentKey).get()
	        child.$set(childKey, value)
	      }
	    } else {

	      // simple lock to avoid circular updates.
	      // without this it would stabilize too, but this makes
	      // sure it doesn't cause other watchers to re-evaluate.
	      var locked = false
	      var lock = function () {
	        locked = true
	        _.nextTick(unlock)
	      }
	      var unlock = function () {
	        locked = false
	      }

	      this.parentWatcher = new Watcher(
	        parent,
	        parentKey,
	        function (val) {
	          if (!locked) {
	            lock()
	            child.$set(childKey, val)
	          }
	        }
	      )
	      
	      // set the child initial value first, before setting
	      // up the child watcher to avoid triggering it
	      // immediately.
	      child.$set(childKey, this.parentWatcher.value)

	      this.childWatcher = new Watcher(
	        child,
	        childKey,
	        function (val) {
	          if (!locked) {
	            lock()
	            parent.$set(parentKey, val)
	          }
	        }
	      )
	    }
	  },

	  unbind: function () {
	    if (this.parentWatcher) {
	      this.parentWatcher.teardown()
	      this.childWatcher.teardown()
	    }
	  }

	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	module.exports = {

	  acceptStatement: true,

	  bind: function () {
	    var child = this.el.__vue__
	    if (!child || this.vm !== child.$parent) {
	      _.warn(
	        '`v-events` should only be used on a child component ' +
	        'from the parent template.'
	      )
	      return
	    }
	  },

	  update: function (handler, oldHandler) {
	    if (typeof handler !== 'function') {
	      _.warn(
	        'Directive "v-events:' + this.expression + '" ' +
	        'expects a function value.'
	      )
	      return
	    }
	    var child = this.el.__vue__
	    if (oldHandler) {
	      child.$off(this.arg, oldHandler)
	    }
	    child.$on(this.arg, handler)
	  }

	  // when child is destroyed, all events are turned off,
	  // so no need for unbind here.

	}

/***/ },
/* 52 */
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

	exports.currency = function (value, sign) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  sign = sign || '$'
	  var s = Math.floor(Math.abs(value)).toString(),
	    i = s.length % 3,
	    h = i > 0
	      ? (s.slice(0, i) + (s.length > 3 ? ',' : ''))
	      : '',
	    v = Math.abs(parseInt((value * 100) % 100, 10)),
	    f = '.' + (v < 10 ? ('0' + v) : v)
	  return (value < 0 ? '-' : '') +
	    sign + h + s.slice(i).replace(digitsRE, '$1,') + f
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
	  enter    : 13,
	  tab      : 9,
	  'delete' : 46,
	  up       : 38,
	  left     : 37,
	  right    : 39,
	  down     : 40,
	  esc      : 27
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

	_.extend(exports, __webpack_require__(53))


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Path = __webpack_require__(11)

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */

	exports.filterBy = function (arr, searchKey, delimiter, dataKey) {
	  // allow optional `in` delimiter
	  // because why not
	  if (delimiter && delimiter !== 'in') {
	    dataKey = delimiter
	  }
	  // get the search string
	  var search =
	    _.stripQuotes(searchKey) ||
	    this.$get(searchKey)
	  if (!search) {
	    return arr
	  }
	  search = ('' + search).toLowerCase()
	  // get the optional dataKey
	  dataKey =
	    dataKey &&
	    (_.stripQuotes(dataKey) || this.$get(dataKey))
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
	 * @param {String} reverseKey
	 */

	exports.orderBy = function (arr, sortKey, reverseKey) {
	  var key =
	    _.stripQuotes(sortKey) ||
	    this.$get(sortKey)
	  if (!key) {
	    return arr
	  }
	  var order = 1
	  if (reverseKey) {
	    if (reverseKey === '-1') {
	      order = -1
	    } else if (reverseKey.charCodeAt(0) === 0x21) { // !
	      reverseKey = reverseKey.slice(1)
	      order = this.$get(reverseKey) ? 1 : -1
	    } else {
	      order = this.$get(reverseKey) ? -1 : 1
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    a = _.isObject(a) ? Path.get(a, key) : a
	    b = _.isObject(b) ? Path.get(b, key) : b
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
	  if (_.isObject(val)) {
	    for (var key in val) {
	      if (contains(val[key], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(13)

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

	  this.$el           = null
	  this.$parent       = options._parent
	  this.$root         = options._root || this
	  this.$             = {} // child vm references
	  this.$$            = {} // element references
	  this._watcherList  = [] // all watchers as an array
	  this._watchers     = {} // internal watchers as a hash
	  this._userWatchers = {} // user watchers as a hash
	  this._directives   = [] // all directives

	  // a flag to avoid this being observed
	  this._isVue = true

	  // events bookkeeping
	  this._events         = {}    // registered callbacks
	  this._eventsCount    = {}    // for $broadcast optimization
	  this._eventCancelled = false // for event cancellation

	  // block instance properties
	  this._isBlock     = false
	  this._blockStart  =          // @type {CommentNode}
	  this._blockEnd    = null     // @type {CommentNode}

	  // lifecycle state
	  this._isCompiled  =
	  this._isDestroyed =
	  this._isReady     =
	  this._isAttached  =
	  this._isBeingDestroyed = false

	  // children
	  this._children = []
	  this._childCtors = {}

	  // transclusion unlink functions
	  this._containerUnlinkFn =
	  this._contentUnlinkFn = null

	  // transcluded components that belong to the parent.
	  // need to keep track of them so that we can call
	  // attached/detached hooks on them.
	  this._transCpnts = []
	  this._host = options._host

	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent._children.push(this)
	  }
	  if (this._host) {
	    this._host._transCpnts.push(this)
	  }

	  // props used in v-repeat diffing
	  this._new = true
	  this._reused = false

	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )

	  // set data after merge.
	  this._data = options.data || {}

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
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
	 * @param {*} handler
	 */

	function register (vm, action, key, handler) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method)
	    } else {
	      _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
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
	  this._isAttached = true
	  this._children.forEach(callAttach)
	  if (this._transCpnts.length) {
	    this._transCpnts.forEach(callAttach)
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
	  this._isAttached = false
	  this._children.forEach(callDetach)
	  if (this._transCpnts.length) {
	    this._transCpnts.forEach(callDetach)
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

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Observer = __webpack_require__(42)
	var Dep = __webpack_require__(43)

	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */

	exports._initScope = function () {
	  this._initData()
	  this._initComputed()
	  this._initMethods()
	  this._initMeta()
	}

	/**
	 * Initialize the data. 
	 */

	exports._initData = function () {
	  // proxy data on instance
	  var data = this._data
	  var keys = Object.keys(data)
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key)) {
	      this._proxy(key)
	    }
	  }
	  // observe data
	  Observer.create(data).addVm(this)
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
	  Observer.create(newData).addVm(this)
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
	  var i = this._watcherList.length
	  while (i--) {
	    this._watcherList[i].update()
	  }
	  var children = this._children
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
	        def.get = _.bind(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? _.bind(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
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
	      if (Observer.target) {
	        Observer.target.addDep(dep)
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

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Directive = __webpack_require__(58)
	var compile = __webpack_require__(14)
	var transclude = __webpack_require__(18)

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
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el)
	    options._linkFn(this, el)
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference
	    var original = el
	    el = transclude(el, options)
	    this._initElement(el)
	    // compile and link the rest
	    compile(el, options)(this, el)
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
	    this._isBlock = true
	    this.$el = this._blockStart = el.firstChild
	    this._blockEnd = el.lastChild
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
	    i = parent._children.indexOf(this)
	    parent._children.splice(i, 1)
	  }
	  // same for transclusion host.
	  var host = this._host
	  if (host && !host._isBeingDestroyed) {
	    i = host._transCpnts.indexOf(this)
	    host._transCpnts.splice(i, 1)
	  }
	  // destroy all children.
	  i = this._children.length
	  while (i--) {
	    this._children[i].$destroy()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers. intentionally check for
	  // directives array length on every loop since directives
	  // that manages partial compilation can splice ones out
	  for (i = 0; i < this._directives.length; i++) {
	    this._directives[i]._teardown()
	  }
	  // teardown all user watchers.
	  var watcher
	  for (i in this._userWatchers) {
	    watcher = this._userWatchers[i]
	    if (watcher) {
	      watcher.teardown()
	    }
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
	  this._data.__ob__.removeVm(this)
	  this._data =
	  this._watchers =
	  this._userWatchers =
	  this._watcherList =
	  this.$el =
	  this.$parent =
	  this.$root =
	  this._children =
	  this._transCpnts =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)
	var Watcher = __webpack_require__(41)
	var textParser = __webpack_require__(15)
	var expParser = __webpack_require__(19)

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
	  this.filters = _.resolveFilters(vm, descriptor.filters)
	  // private
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
	  if (this.name !== 'cloak' && this.el && this.el.removeAttribute) {
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
	    // use raw expression as identifier because filters
	    // make them different watchers
	    var watcher = this.vm._watchers[this.raw]
	    // v-repeat always creates a new watcher because it has
	    // a special filter that's bound to its directive
	    // instance.
	    if (!watcher || this.name === 'repeat') {
	      watcher = this.vm._watchers[this.raw] = new Watcher(
	        this.vm,
	        this._watcherExp,
	        update, // callback
	        {
	          filters: this.filters,
	          twoWay: this.twoWay,
	          deep: this.deep
	        }
	      )
	    } else {
	      watcher.addCb(update)
	    }
	    this._watcher = watcher
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
	    !expParser.pathTestRE.test(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var vm = this.vm
	    var handler = function () {
	      fn.call(vm, vm)
	    }
	    if (this.filters) {
	      handler = _.applyFilters(
	        handler,
	        this.filters.read,
	        vm
	      )
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
	  }
	  return param
	}

	/**
	 * Teardown the watcher and call unbind.
	 */

	p._teardown = function () {
	  if (this._bound) {
	    if (this.unbind) {
	      this.unbind()
	    }
	    var watcher = this._watcher
	    if (watcher && watcher.active) {
	      watcher.removeCb(this._update)
	      if (!watcher.active) {
	        this.vm._watchers[this.raw] = null
	      }
	    }
	    this._bound = false
	    this.vm = this.el = this._watcher = null
	  }
	}

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @param {Boolean} lock - prevent wrtie triggering update.
	 * @public
	 */

	p.set = function (value, lock) {
	  if (this.twoWay) {
	    if (lock) {
	      this._locked = true
	    }
	    this._watcher.set(value)
	    if (lock) {
	      var self = this
	      _.nextTick(function () {
	        self._locked = false
	      })
	    }
	  }
	}

	module.exports = Directive

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Watcher = __webpack_require__(41)
	var Path = __webpack_require__(11)
	var textParser = __webpack_require__(15)
	var dirParser = __webpack_require__(16)
	var expParser = __webpack_require__(19)
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
	 * @param {Boolean} [deep]
	 * @param {Boolean} [immediate]
	 * @return {Function} - unwatchFn
	 */

	exports.$watch = function (exp, cb, deep, immediate) {
	  var vm = this
	  var key = deep ? exp + '**deep**' : exp
	  var watcher = vm._userWatchers[key]
	  var wrappedCb = function (val, oldVal) {
	    cb.call(vm, val, oldVal)
	  }
	  if (!watcher) {
	    watcher = vm._userWatchers[key] =
	      new Watcher(vm, exp, wrappedCb, {
	        deep: deep,
	        user: true
	      })
	  } else {
	    watcher.addCb(wrappedCb)
	  }
	  if (immediate) {
	    wrappedCb(watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.removeCb(wrappedCb)
	    if (!watcher.active) {
	      vm._userWatchers[key] = null
	    }
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
	    return dir.filters
	      ? _.applyFilters(
	          this.$get(dir.expression),
	          _.resolveFilters(this, dir.filters).read,
	          this
	        )
	      : this.$get(dir.expression)
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var transition = __webpack_require__(23)

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
	    this._isBlock &&
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
	  if (vm._isBlock) {
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
	 * Execute a transition operation on a block instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */

	function blockOp (vm, target, op, cb) {
	  var current = vm._blockStart
	  var end = vm._blockEnd
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
/* 61 */
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
	  var children = this._children
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	/**
	 * Create a child instance that prototypally inehrits
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
	      ChildVue.prototype = this
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var compile = __webpack_require__(14)

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
	    _.warn('$mount() should be called only once.')
	    return
	  }
	  if (!el) {
	    el = document.createElement('div')
	  } else if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      _.warn('Cannot find element: ' + selector)
	      return
	    }
	  }
	  this._compile(el)
	  this._isCompiled = true
	  this._callHook('compiled')
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    this._initDOMHooks()
	    ready.call(this)
	  } else {
	    this._initDOMHooks()
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
	 * @return {Function}
	 */

	exports.$compile = function (el) {
	  return compile(el, this.$options, true)(this, el)
	}

/***/ },
/* 64 */
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
	    expect(_.warn).toHaveBeenCalled()
	  })

	  it('$set', function () {
	    vm.$set('a', 2)
	    expect(vm.a).toBe(2)
	    vm.$set('b["c"]', 3)
	    expect(vm.b.c).toBe(3)
	    // setting unexisting
	    vm.$set('c.d', 2)
	    expect(vm.c.d).toBe(2)
	    // invalid, should throw
	    if (leftHandThrows()) {
	      // if creating a function with invalid left hand
	      // expression throws, the exp parser will catch the 
	      // error and warn.
	      vm.$set('c + d', 1)
	      expect(_.warn).toHaveBeenCalled()
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
	    var unwatch = vm.$watch('a + b.c', spy, false, true)
	    expect(spy).toHaveBeenCalledWith(3, undefined)
	    vm.a = 2
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(4, 3)
	      // reuse same watcher
	      var spy2 = jasmine.createSpy()
	      var unwatch2 = vm.$watch('a + b.c', spy2)
	      expect(vm._watcherList.length).toBe(1)
	      vm.b = { c: 3 }
	      nextTick(function () {
	        expect(spy).toHaveBeenCalledWith(5, 4)
	        expect(spy2).toHaveBeenCalledWith(5, 4)
	        // unwatch
	        unwatch()
	        unwatch2()
	        vm.a = 3
	        nextTick(function () {
	          expect(spy.calls.count()).toBe(3)
	          expect(spy2.calls.count()).toBe(1)
	          done()
	        })
	      })
	    })
	  })

	  it('deep $watch', function (done) {
	    var oldB = vm.b
	    var spy = jasmine.createSpy()
	    vm.$watch('b', spy, true)
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
	    var fn = new Function('a + b = 1')
	  } catch (e) {
	    return true
	  }
	}

/***/ },
/* 65 */
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
	        expect(parent.childNodes[2]).toBe(vm2._blockStart)
	        expect(parent.childNodes[2]).toBe(vm2.$el)
	        expect(parent.childNodes[3].tagName).toBe('P')
	        expect(parent.childNodes[4].tagName).toBe('SPAN')
	        expect(parent.childNodes[5]).toBe(vm2._blockEnd)
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
	        expect(parent.childNodes[0]).toBe(vm2._blockStart)
	        expect(parent.childNodes[0]).toBe(vm2.$el)
	        expect(parent.childNodes[1].tagName).toBe('P')
	        expect(parent.childNodes[2].tagName).toBe('SPAN')
	        expect(parent.childNodes[3]).toBe(vm2._blockEnd)
	        expect(spy.calls.count()).toBe(1)
	        // empty
	        vm2.$prependTo(empty, spy)
	        expect(empty.childNodes.length).toBe(4)
	        expect(empty.childNodes[0]).toBe(vm2._blockStart)
	        expect(empty.childNodes[0]).toBe(vm2.$el)
	        expect(empty.childNodes[1].tagName).toBe('P')
	        expect(empty.childNodes[2].tagName).toBe('SPAN')
	        expect(empty.childNodes[3]).toBe(vm2._blockEnd)
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
	        expect(parent.childNodes[1]).toBe(vm2._blockStart)
	        expect(parent.childNodes[1]).toBe(vm2.$el)
	        expect(parent.childNodes[2].tagName).toBe('P')
	        expect(parent.childNodes[3].tagName).toBe('SPAN')
	        expect(parent.childNodes[4]).toBe(vm2._blockEnd)
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
	        expect(parent.childNodes[1]).toBe(vm2._blockStart)
	        expect(parent.childNodes[1]).toBe(vm2.$el)
	        expect(parent.childNodes[2].tagName).toBe('P')
	        expect(parent.childNodes[3].tagName).toBe('SPAN')
	        expect(parent.childNodes[4]).toBe(vm2._blockEnd)
	        expect(spy.calls.count()).toBe(1)
	      })

	      it('block instance no next sibling', function () {
	        vm2.$after(sibling, spy)
	        expect(parent.childNodes.length).toBe(6)
	        expect(parent.childNodes[2]).toBe(vm2._blockStart)
	        expect(parent.childNodes[2]).toBe(vm2.$el)
	        expect(parent.childNodes[3].tagName).toBe('P')
	        expect(parent.childNodes[4].tagName).toBe('SPAN')
	        expect(parent.childNodes[5]).toBe(vm2._blockEnd)
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
	        expect(parent.childNodes[1]).toBe(vm2._blockStart)
	        expect(parent.childNodes[1]).toBe(vm2.$el)
	        expect(parent.childNodes[2].tagName).toBe('P')
	        expect(parent.childNodes[3].tagName).toBe('SPAN')
	        expect(parent.childNodes[4]).toBe(vm2._blockEnd)
	        vm2.$remove(spy)
	        expect(parent.childNodes.length).toBe(2)
	        expect(parent.childNodes[0]).toBe(target)
	        expect(parent.childNodes[1]).toBe(sibling)
	        expect(spy.calls.count()).toBe(1)
	      })

	    })

	  })
	}

/***/ },
/* 66 */
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
	    vm.$emit('test', 1, 2 ,3, 4)
	    expect(spy.calls.count()).toBe(1)
	    expect(spy).toHaveBeenCalledWith(1, 2, 3, 4)
	  })

	  it('$once', function () {
	    vm.$once('test', spy)
	    vm.$emit('test', 1, 2 ,3)
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)

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
	    
	    it('directive / filter / partial / transition', function () {
	      [
	        'directive',
	        'filter',
	        'partial',
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var compile = __webpack_require__(14)

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
	        expect(_.warn).toHaveBeenCalled()
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
	        var linker = compile(el, Vue.options)
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
	        expect(document.body.lastChild).toBe(vm._blockEnd)
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
	        expect(_.warn).toHaveBeenCalled()
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
	        expect(vm._userWatchers).toBeNull()
	        expect(vm._watcherList).toBeNull()
	        expect(vm.$el).toBeNull()
	        expect(vm.$parent).toBeNull()
	        expect(vm.$root).toBeNull()
	        expect(vm._children).toBeNull()
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
	        expect(parent._children.length).toBe(2)
	        child.$destroy()
	        expect(parent._children.length).toBe(1)
	        child2.$destroy()
	        expect(parent._children.length).toBe(0)
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
	        var dirWatcher = vm._watcherList[0]
	        var userWatcher = vm._watcherList[1]
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var batcher = __webpack_require__(46)
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
	    batcher.push({
	      id: 1,
	      run: function () {
	        spy()
	        batcher.push({
	          id: 1,
	          run: spy
	        })
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
	      expect(count).not.toBe(0)
	      expect(_.warn).toHaveBeenCalled()
	      done()
	    })
	  })

	})

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(12)

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var dirParser = __webpack_require__(16)
	var merge = __webpack_require__(13)
	var compile = __webpack_require__(14)

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
	        _directives: [],
	        _bindDir: function (name) {
	          this._directives.push({
	            name: name,
	            _teardown: directiveTeardown
	          })
	        },
	        $set: jasmine.createSpy(),
	        $eval: function (value) {
	          return data[value]
	        },
	        $interpolate: function (value) {
	          return data[value]
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
	      var options = merge(Vue.options, {
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

	    it('inline html and partial', function () {
	      data.html = 'yoyoyo'
	      el.innerHTML = '{{{html}}} {{{*html}}} {{>partial}}'
	      var htmlDef = Vue.options.directives.html
	      var partialDef = Vue.options.directives.partial
	      var htmlDesc = dirParser.parse('html')[0]
	      var partialDesc = dirParser.parse('partial')[0]
	      var linker = compile(el, Vue.options)
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(2)
	      var htmlArgs = vm._bindDir.calls.argsFor(0)
	      expect(htmlArgs[0]).toBe('html')
	      expect(htmlArgs[2]).toBe(htmlDesc)
	      expect(htmlArgs[3]).toBe(htmlDef)
	      var partialArgs = vm._bindDir.calls.argsFor(1)
	      expect(partialArgs[0]).toBe('partial')
	      expect(partialArgs[2]).toBe(partialDesc)
	      expect(partialArgs[3]).toBe(partialDef)
	      expect(vm.$eval).toHaveBeenCalledWith('html')
	      // with placeholder comments & interpolated one-time html
	      expect(el.innerHTML).toBe('<!--v-html--> yoyoyo <!--v-partial-->')
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
	      var options = merge(Vue.options, {
	        components: {
	          'my-component': {}
	        }
	      })
	      el.innerHTML = '<my-component><div v-a="b"></div></my-component>'
	      var def = Vue.options.directives.component
	      var descriptor = dirParser.parse('my-component')[0]
	      var linker = compile(el, options)
	      linker(vm, el)
	      expect(vm._bindDir.calls.count()).toBe(1)
	      expect(vm._bindDir).toHaveBeenCalledWith('component', el.firstChild, descriptor, def, undefined)
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

	    it('param attributes', function () {
	      var options = merge(Vue.options, {
	        paramAttributes: ['a', 'data-some-attr', 'some-other-attr', 'invalid', 'camelCase']
	      })
	      var def = Vue.options.directives['with']
	      el.setAttribute('a', '1')
	      el.setAttribute('data-some-attr', '{{a}}')
	      el.setAttribute('some-other-attr', '2')
	      el.setAttribute('invalid', 'a {{b}} c') // invalid
	      var linker = compile(el, options)
	      linker(vm, el)
	      // should skip literal & invliad
	      expect(vm._bindDir.calls.count()).toBe(1)
	      var args = vm._bindDir.calls.argsFor(0)
	      expect(args[0]).toBe('with')
	      expect(args[1]).toBe(el)
	      expect(args[2].arg).toBe('someAttr')
	      expect(args[3]).toBe(def)
	      // invalid and camelCase should've warn
	      expect(_.warn.calls.count()).toBe(2)
	      // literal should've called vm.$set
	      expect(vm.$set).toHaveBeenCalledWith('a', '1')
	      expect(vm.$set).toHaveBeenCalledWith('someOtherAttr', '2')
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

	    it('should handle nested transclusions', function (done) {
	      vm = new Vue({
	        el: el,
	        template:
	          '<div v-component="a">' +
	            '<div v-component="b">' +
	              '<div v-repeat="list">{{$value}}</div>' +
	            '</div>' +
	          '</div>',
	        data: {
	          list: [1,2]
	        },
	        components: {
	          a: { template: '<content></content>' },
	          b: { template: '<content></content>' }
	        }
	      })
	      expect(el.innerHTML).toBe(
	        '<div><div>' +
	          '<div>1</div><div>2</div><!--v-repeat-->' +
	        '</div><!--v-component-->' +
	        '</div><!--v-component-->'
	      )
	      vm.list.push(3)
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(
	          '<div><div>' +
	            '<div>1</div><div>2</div><div>3</div><!--v-repeat-->' +
	          '</div><!--v-component-->' +
	          '</div><!--v-component-->'
	        )
	        done()
	      })
	    })

	  })
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var transclude = __webpack_require__(18)
	var _ = __webpack_require__(3)

	if (_.inBrowser) {
	  describe('Transclude', function () {

	    var el, options
	    beforeEach(function () {
	      el = document.createElement('div')
	      options = {}
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
	      expect(_.warn).toHaveBeenCalled()
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

	    it('block instance', function () {
	      var frag = document.createDocumentFragment()
	      frag.appendChild(el)
	      var res = transclude(frag, options)
	      expect(res).toBe(frag)
	      expect(res.childNodes.length).toBe(3)
	      expect(res.childNodes[0].nodeType).toBe(8)
	      expect(res.childNodes[1]).toBe(el)
	      expect(res.childNodes[2].nodeType).toBe(8)
	    })

	    it('template element', function () {
	      var tpl = document.createElement('template')
	      tpl.innerHTML = '<div>123</div>'
	      var res = transclude(tpl, options)
	      expect(res instanceof DocumentFragment).toBe(true)
	      expect(res.childNodes.length).toBe(3)
	      expect(res.childNodes[0].nodeType).toBe(8)
	      expect(res.childNodes[1].textContent).toBe('123')
	      expect(res.childNodes[2].nodeType).toBe(8)
	    })

	    it('content transclusion', function () {
	      el.innerHTML = '<p>hi</p>'
	      options.template = '<div><content></content></div>'
	      var res = transclude(el, options)
	      expect(res.firstChild.tagName).toBe('DIV')
	      expect(res.firstChild.firstChild.tagName).toBe('P')
	      expect(res.firstChild.firstChild.textContent).toBe('hi')
	    })

	    it('fallback content', function () {
	      options.template = '<content><p>fallback</p></content>'
	      var res = transclude(el, options)
	      expect(res.firstChild.tagName).toBe('P')
	      expect(res.firstChild.textContent).toBe('fallback')
	    })

	    it('fallback content with multiple select', function () {
	      el.innerHTML = '<p class="b">select b</p>'
	      options.template = '<content select=".a"><p>fallback a</p></content><content select=".b">fallback b</content>'
	      var res = transclude(el, options)
	      expect(res.childNodes.length).toBe(2)
	      expect(res.firstChild.textContent).toBe('fallback a')
	      expect(res.lastChild.textContent).toBe('select b')
	    })

	    it('content transclusion with replace', function () {
	      el.innerHTML = '<p>hi</p>'
	      options.template = '<div><div><content></content></div></div>'
	      options.replace = true
	      var res = transclude(el, options)
	      expect(res).not.toBe(el)
	      expect(res.firstChild.tagName).toBe('DIV')
	      expect(res.firstChild.firstChild.tagName).toBe('P')
	      expect(res.firstChild.firstChild.textContent).toBe('hi')
	    })

	    it('block instance content transclusion', function () {
	      el.innerHTML = '<p>hi</p><span>ho</span>'
	      options.template = '<div></div><content select="p"></content><content select="span"></content>'
	      options.replace = true
	      var res = transclude(el, options)
	      expect(res.childNodes[1].tagName).toBe('DIV')
	      expect(res.childNodes[2].tagName).toBe('P')
	      expect(res.childNodes[3].tagName).toBe('SPAN')
	    })

	    it('select should only match children', function () {
	      el.innerHTML = '<p class="b">select b</p><span><p class="b">nested b</p></span><span><p class="c">nested c</p></span>'
	      options.template = '<content select=".a"><p>fallback a</p></content><content select=".b">fallback b</content><content select=".c">fallback c</content>'
	      var res = transclude(el, options)
	      expect(res.childNodes.length).toBe(3)
	      expect(res.firstChild.textContent).toBe('fallback a')
	      expect(res.childNodes[1].textContent).toBe('select b')
	      expect(res.lastChild.textContent).toBe('fallback c')
	    })

	  })
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var Directive = __webpack_require__(58)
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
	      data:{
	        a:1,
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
	      filters: [{name:'test'}]
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
	      filters: [{name:'test'}]
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
	      filters: [{name:'test'}]
	    }, def)
	    d.set(2)
	    expect(vm.a).toBe(6)
	    nextTick(function () {
	      expect(def.update.calls.count()).toBe(2)
	      expect(def.update).toHaveBeenCalledWith(6, 1)
	      // locked set
	      d.set(3, true)
	      expect(vm.a).toBe(9)
	      nextTick(function () {
	        // should have no update calls
	        expect(def.update.calls.count()).toBe(2)
	        done()
	      })
	    })
	  })

	  it('deep', function (done) {
	    def.deep = true
	    var d = new Directive('test', el, vm, {
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

	  it('reuse the same watcher', function (done) {
	    var d = new Directive('test', el, vm, {
	      expression: 'a',
	    }, def)
	    var d2 = new Directive('test', el, vm, {
	      expression: 'a',
	    }, def)
	    expect(vm._watcherList.length).toBe(1)
	    expect(d._watcher).toBe(d2._watcher)
	    d2._teardown()
	    expect(d2._watcher).toBeNull()
	    expect(vm._watcherList.length).toBe(1)
	    vm.a = 2
	    nextTick(function () {
	      expect(def.update).toHaveBeenCalledWith(2, 1)
	      d._teardown()
	      expect(vm._watcherList.length).toBe(0)
	      done()
	    })
	  })

	})

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(28)

	if (_.inBrowser) {
	  describe('v-attr', function () {

	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	    })

	    it('normal attr', function () {
	      var dir = {
	        el: el,
	        arg: 'test'
	      }
	      _.extend(dir, def)
	      dir.bind()
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

	    it('xlink', function () {
	      var xlinkNS = 'http://www.w3.org/1999/xlink'
	      var dir = {
	        el: el,
	        arg: 'xlink:href'
	      }
	      _.extend(dir, def)
	      dir.bind()
	      dir.update('ok')
	      expect(el.getAttributeNS(xlinkNS, 'href')).toBe('ok')
	      dir.update('again')
	      expect(el.getAttributeNS(xlinkNS, 'href')).toBe('again')
	      dir.update(null)
	      expect(el.hasAttributeNS(xlinkNS, 'test')).toBe(false)
	    })

	  })
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(30)

	if (_.inBrowser) {
	  describe('v-class', function () {

	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	    })

	    it('with className', function () {
	      el.className = 'haha'
	      var dir = {
	        el: el,
	        arg: 'test',
	        update: def
	      }
	      dir.update(true)
	      expect(el.className).toBe('haha test')
	      dir.update(false)
	      expect(el.className).toBe('haha')
	    })

	    it('without className', function () {
	      el.className = 'haha'
	      var dir = {
	        el: el,
	        update: def
	      }
	      dir.update('test')
	      expect(el.className).toBe('haha test')
	      dir.update('what')
	      expect(el.className).toBe('haha what')
	      dir.update()
	      expect(el.className).toBe('haha')
	    })

	  })
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var compile = __webpack_require__(14)
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
/* 77 */
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
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test"></div>',
	        components: {
	          test: {
	            data: function () {
	              return { a: 123 }
	            },
	            template: '{{a}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div>123</div><!--v-component-->')
	    })

	    it('replace', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test"></div>',
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
	      expect(el.innerHTML).toBe('<p>123</p><!--v-component-->')
	    })

	    it('inline-template', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test" inline-template>{{a}}</div>',
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
	      expect(el.innerHTML).toBe('<div>child</div><!--v-component-->')
	    })

	    it('block replace', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test"></div>',
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
	      expect(el.innerHTML).toBe('<!--v-start--><p>123</p><p>234</p><!--v-end--><!--v-component-->')
	    })

	    it('dynamic', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="{{view}}" v-attr="view:view"></div>',
	        data: {
	          view: 'a'
	        },
	        components: {
	          a: {
	            template: 'AAA',
	            data: function () {
	              return { view: 'a' }
	            }
	          },
	          b: {
	            template: 'BBB',
	            data: function () {
	              return { view: 'b' }
	            }
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div view="a">AAA</div><!--v-component-->')
	      vm.view = 'b'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div view="b">BBB</div><!--v-component-->')
	        vm.view = ''
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('<!--v-component-->')
	          done()
	        })
	      })
	    })

	    it('keep-alive', function (done) {
	      var spyA = jasmine.createSpy()
	      var spyB = jasmine.createSpy()
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="{{view}}" keep-alive></div>',
	        data: {
	          view: 'a'
	        },
	        components: {
	          a: {
	            created: spyA,
	            template: 'AAA'
	          },
	          b: {
	            created: spyB,
	            template: 'BBB'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div>AAA</div><!--v-component-->')
	      expect(spyA.calls.count()).toBe(1)
	      expect(spyB.calls.count()).toBe(0)
	      vm.view = 'b'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>BBB</div><!--v-component-->')
	        expect(spyA.calls.count()).toBe(1)
	        expect(spyB.calls.count()).toBe(1)
	        vm.view = 'a'
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe('<div>AAA</div><!--v-component-->')
	          expect(spyA.calls.count()).toBe(1)
	          expect(spyB.calls.count()).toBe(1)
	          vm.view = 'b'
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe('<div>BBB</div><!--v-component-->')
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
	        template: '<div v-component="test" v-show="ok">{{message}}</div>',
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
	        template: '<div v-component="test" v-if="ok">{{message}}</div>',
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
	      expect(vm._children.length).toBe(0)
	      expect(vm._directives.length).toBe(1) // v-if
	      vm.ok = true
	      _.nextTick(function () {
	        expect(vm._children.length).toBe(1)
	        expect(vm._directives.length).toBe(3) // v-if, v-component, v-text
	        expect(el.textContent).toBe('hello world')
	        done()
	      })
	    })

	    it('paramAttributes', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          list: [{a:1}, {a:2}]
	        },
	        template: '<ul v-component="test" collection="{{list}}"></ul>',
	        components: {
	          test: {
	            template: '<li v-repeat="collection">{{a}}</li>',
	            paramAttributes: ['collection']
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<ul><li>1</li><li>2</li><!--v-repeat--></ul><!--v-component-->')
	    })

	    it('wait-for', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          view: 'a'
	        },
	        template: '<div v-component="{{view}}" wait-for="ok"></div>',
	        components: {
	          a: {
	            template: 'AAA'
	          },
	          b: {
	            template: 'BBB'
	          }
	        }
	      })
	      vm._children[0].$emit('ok')
	      vm.view = 'b'
	      _.nextTick(function () {
	        expect(el.textContent).toBe('AAA')
	        // old vm is already removed, this is the new vm
	        vm._children[0].$emit('ok')
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
	          view: 'a'
	        },
	        template: '<div v-component="{{view}}" v-transition="test" transition-mode="in-out"></div>',
	        components: {
	          a: { template: 'AAA' },
	          b: { template: 'BBB' }
	        },
	        transitions: {
	          test: {
	            enter: function (el, done) {
	              spy1()
	              next = done
	            },
	            leave: function (el, done) {
	              spy2()
	              done()
	            }
	          }
	        }
	      })
	      expect(el.textContent).toBe('AAA')
	      vm.view = 'b'
	      _.nextTick(function () {
	        expect(spy1).toHaveBeenCalled()
	        expect(spy2).not.toHaveBeenCalled()
	        expect(el.textContent).toBe('AAABBB')
	        next()
	        expect(spy2).toHaveBeenCalled()
	        expect(el.textContent).toBe('BBB')
	        done()
	      })
	    })

	    it('transition-mode: out-in', function (done) {
	      var spy1 = jasmine.createSpy('enter')
	      var spy2 = jasmine.createSpy('leave')
	      var next
	      var vm = new Vue({
	        el: el,
	        data: {
	          view: 'a'
	        },
	        template: '<div v-component="{{view}}" v-transition="test" transition-mode="out-in"></div>',
	        components: {
	          a: { template: 'AAA' },
	          b: { template: 'BBB' }
	        },
	        transitions: {
	          test: {
	            enter: function (el, done) {
	              spy2()
	              done()
	            },
	            leave: function (el, done) {
	              spy1()
	              next = done
	            }
	          }
	        }
	      })
	      expect(el.textContent).toBe('AAA')
	      vm.view = 'b'
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
	        template: '<div v-component="{{view}}" keep-alive></div>',
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
	        expect(vm._children.length).toBe(2)
	        var child = vm._children[0]
	        var child2 = vm._children[1]
	        vm._directives[0].unbind()
	        expect(vm._directives[0].cache).toBeNull()
	        expect(vm._children.length).toBe(0)
	        expect(child._isDestroyed).toBe(true)
	        expect(child2._isDestroyed).toBe(true)
	        done()
	      })
	    })

	    it('already mounted warn', function () {
	      el.setAttribute('v-component', 'test')
	      var vm = new Vue({
	        el: el
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	  })
	}

/***/ },
/* 78 */
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
	        data: { items: [1,2,3,4,5] },
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)

	if (_.inBrowser) {
	  describe('v-events', function () {

	    var el
	    beforeEach(function () {
	      spyOn(_, 'warn')
	      el = document.createElement('div')
	    })

	    it('should register events', function () {
	      var spy = jasmine.createSpy('v-events')
	      new Vue({
	        el: el,
	        template: '<div v-component="test" v-events="test:test"></div>',
	        methods: {
	          test: spy
	        },
	        components: {
	          test: {
	            compiled: function () {
	              this.$emit('test')
	            }
	          }
	        }
	      })
	      expect(spy).toHaveBeenCalled()
	    })

	    it('should warn when used on non-root node', function () {
	      new Vue({
	        el: el,
	        template: '<div v-events="test:test"></div>'
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('should warn when used on child component root', function () {
	      var spy = jasmine.createSpy('v-events')
	      new Vue({
	        el: el,
	        template: '<div v-component="test"></div>',
	        methods: {
	          test: spy
	        },
	        components: {
	          test: {
	            replace: true,
	            template: '<div v-events="test:test"></div>',
	            compiled: function () {
	              this.$emit('test')
	            }
	          }
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
	      expect(spy).not.toHaveBeenCalled()
	    })

	    it('should warn on non-function values', function () {
	      var vm = new Vue({
	        el: el,
	        data: { test: 123 },
	        template: '<div v-component="test" v-events="test:test"></div>',
	        components: {
	          test: {}
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('should accept inline statement', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {a:1},
	        template: '<div v-component="test" v-events="test:a++"></div>',
	        components: {
	          test: {
	            compiled: function () {
	              this.$emit('test')
	            }
	          }
	        }
	      })
	      _.nextTick(function () {
	        expect(vm.a).toBe(2)
	        done()
	      })
	    })

	    it('should be able to switch handlers if not a method', function (done) {
	      var a = 0
	      var b = 0
	      var vm = new Vue({
	        el: el,
	        data: {
	          handle: function () {
	            a++
	          }
	        },
	        template: '<div v-component="test" v-events="test:handle"></div>',
	        components: {
	          test: {
	            compiled: function () {
	              this.$emit('test')
	            }
	          }
	        }
	      })
	      _.nextTick(function () {
	        expect(a).toBe(1)
	        expect(b).toBe(0)
	        vm.handle = function () {
	          b++
	        }
	        _.nextTick(function () {
	          vm._children[0].$emit('test')
	          expect(a).toBe(1)
	          expect(b).toBe(1)
	          done()
	        })
	      })
	    })

	  })
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(27)

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
	      var node = document.createComment('htm-test')
	      el.appendChild(node)
	      var dir = {
	        el: node
	      }
	      _.extend(dir, def)
	      dir.bind()
	      dir.update('<div>1234</div><p>234</p>')
	      expect(el.innerHTML).toBe('<div>1234</div><p>234</p><!--htm-test-->')
	      dir.update('<p>123</p><div>444</div>')
	      expect(el.innerHTML).toBe('<p>123</p><div>444</div><!--htm-test-->')
	      dir.update(null)
	      expect(el.innerHTML).toBe('<!--htm-test-->')
	    })

	  })
	}

/***/ },
/* 81 */
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

	    function wrap (content) {
	      return '<!--v-if-start-->' + content + '<!--v-if-end-->'
	    }

	    it('normal', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: { test: false, a: 'A' },
	        template: '<div v-if="test"><div v-component="test"></div></div>',
	        components: {
	          test: {
	            inherit: true,
	            template: '{{a}}'
	          }
	        }
	      })
	      // lazy instantitation
	      expect(el.innerHTML).toBe(wrap(''))
	      expect(vm._children.length).toBe(0)
	      vm.test = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(wrap('<div><div>A</div><!--v-component--></div>'))
	        expect(vm._children.length).toBe(1)
	        vm.test = false
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe(wrap(''))
	          expect(vm._children.length).toBe(0)
	          vm.test = true
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe(wrap('<div><div>A</div><!--v-component--></div>'))
	            expect(vm._children.length).toBe(1)
	            var child = vm._children[0]
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
	      expect(el.innerHTML).toBe(wrap(''))
	      vm.test = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(wrap('<p>A</p><p>B</p>'))
	        vm.test = false
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe(wrap(''))
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
	        template: '<div v-component="test" v-if="ok"></div>',
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
	      expect(el.innerHTML).toBe(wrap(''))
	      expect(vm._children.length).toBe(0)
	      vm.ok = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(wrap('<div>123</div><!--v-component-->'))
	        expect(vm._children.length).toBe(1)
	        expect(attachSpy).toHaveBeenCalled()
	        expect(readySpy).toHaveBeenCalled()
	        vm.ok = false
	        _.nextTick(function () {
	          expect(detachSpy).toHaveBeenCalled()
	          expect(el.innerHTML).toBe(wrap(''))
	          expect(vm._children.length).toBe(0)
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
	          view: 'a'
	        },
	        template: '<div v-component="{{view}}" v-if="ok"></div>',
	        components: {
	          a: {
	            template: 'AAA'
	          },
	          b: {
	            template: 'BBB'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe(wrap(''))
	      expect(vm._children.length).toBe(0)
	      // toggle if with lazy instantiation
	      vm.ok = true
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(wrap('<div>AAA</div><!--v-component-->'))
	        expect(vm._children.length).toBe(1)
	        // switch view when if=true
	        vm.view = 'b'
	        _.nextTick(function () {
	          expect(el.innerHTML).toBe(wrap('<div>BBB</div><!--v-component-->'))
	          expect(vm._children.length).toBe(1)
	          // toggle if when already instantiated
	          vm.ok = false
	          _.nextTick(function () {
	            expect(el.innerHTML).toBe(wrap(''))
	            expect(vm._children.length).toBe(0)
	            // toggle if and switch view at the same time
	            vm.view = 'a'
	            vm.ok = true
	            _.nextTick(function () {
	              expect(el.innerHTML).toBe(wrap('<div>AAA</div><!--v-component-->'))
	              expect(vm._children.length).toBe(1)
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
	      expect(el.innerHTML).toBe(wrap('<div>1</div>'))
	      vm.a = 2
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(wrap('<div>2</div>'))
	        done()
	      })
	    })

	    it('invalid warn', function () {
	      el.setAttribute('v-if', 'test')
	      var vm = new Vue({
	        el: el
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('v-if with content transclusion', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          a: 1,
	          show: true
	        },
	        template: '<div v-component="test" show="{{show}}">{{a}}</div>',
	        components: {
	          test: {
	            paramAttributes: ['show'],
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

	    it('call attach/detach for transcluded components', function (done) {
	      document.body.appendChild(el)
	      var attachSpy = jasmine.createSpy('attached')
	      var detachSpy = jasmine.createSpy('detached')
	      var vm = new Vue({
	        el: el,
	        data: { show: true },
	        template: '<div v-component="outer"><div v-component="transcluded"></div></div>',
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
	          list: [{a:0}]
	        },
	        template:
	          '<div v-component="outer">' +
	            '<div>' + // an extra layer to test components deep inside the tree
	              '<div v-repeat="list" v-component="transcluded"></div>' +
	            '</div>' +
	          '</div>',
	        components: {
	          outer: {
	            template:
	              '<div v-if="$parent.show">' +
	                '<content></content>' +
	              '</div>' +
	              // this is to test that compnents that are not in the if block
	              // should not fire attach/detach when v-if toggles
	              '<div v-component="transcluded"></div>'
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
	        vm.list.push({a:1})
	        vm.show = true
	        _.nextTick(function () {
	          assertMarkup()
	          expect(attachSpy.calls.count()).toBe(2 + 2)
	          vm.list.push({a:2})
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
	                return '<div>' + o.a + '</div>'
	              }).join('') + '<!--v-repeat-->' +
	            '</div></div>'
	          : ''
	        var markup = '<div>' +
	          '<!--v-if-start-->' +
	            showBlock +
	          '<!--v-if-end-->' +
	          '<div></div><!--v-component-->' +
	        '</div><!--v-component-->'
	        expect(el.innerHTML).toBe(markup)
	      }
	    })

	  })
	}

/***/ },
/* 82 */
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
	  /* jshint eqeqeq: false */
	  var options = el.options
	  var i = options.length
	  while (i--) {
	    if (options[i].value == value) {
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

	    it('select default value', function () {
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
	        expect(vm._watcherList.length).toBe(2)
	        vm._directives[0]._teardown()
	        expect(vm._watcherList.length).toBe(0)
	        done()
	      })
	    })

	    it('select + options + text', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b',
	          opts: [
	            { text: 'A', value: 'a' },
	            { text: 'B', value: 'b' }
	          ]
	        },
	        template: '<select v-model="test" options="opts"></select>'
	      })
	      expect(el.firstChild.innerHTML).toBe(
	        '<option value="a">A</option>' +
	        '<option value="b">B</option>'
	      )
	      var opts = el.firstChild.options
	      expect(opts[0].selected).toBe(false)
	      expect(opts[1].selected).toBe(true)
	    })

	    it('select + options + optgroup', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: 'b',
	          opts: [
	            { label: 'A', options: ['a','b'] },
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
	      var vm = new Vue({
	        el: el,
	        data: {
	          opts: ['a','b']
	        },
	        filters: {
	          aFilter: function (opts){
	            return opts.map(function (val,i){
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
	      var vm = new Vue({
	        el: el,
	        template: '<div v-model="test"></div>'
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('warn invalid option value', function () {
	      var vm = new Vue({
	        el: el,
	        data: { a: 123 },
	        template: '<select v-model="test" options="a"></select>'
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('warn read-only filters', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<input v-model="abc | test">',
	        filters: {
	          test: function (v) {
	            return v
	          }
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
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
/* 83 */
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
	        data: {a:1},
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
	      var vm = new Vue({
	        el: el,
	        template: '<a v-on="click:a++">{{a}}</a>',
	        data: {a:1}
	      })
	      var a = el.firstChild
	      trigger(a, 'click')
	      _.nextTick(function () {
	        expect(a.textContent).toBe('2')
	        done()
	      })
	    })

	    it('with key filter', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<a v-on="keyup:test | key enter">{{a}}</a>',
	        data: {a:1},
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
	      var vm = new Vue({
	        el: el,
	        data: { test: 123 },
	        template: '<a v-on="keyup:test"></a>'
	      })
	      expect(_.warn).toHaveBeenCalled()
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
	      var vm = new Vue({
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
	      var child = parent.$addChild({
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)

	if (_.inBrowser) {
	  describe('v-partial', function () {

	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })

	    function wrap (content) {
	      return '<!--v-partial-start-->' + content + '<!--v-partial-end-->'
	    }

	    it('element', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-partial="test"></div>',
	        partials: {
	          test: '<p>{{a}}</p><p>{{b}}</p>'
	        },
	        data: {
	          a: 'A',
	          b: 'B'
	        }
	      })
	      expect(el.innerHTML).toBe('<div>' + wrap('<p>A</p><p>B</p>') + '</div>')
	    })

	    it('inline', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div>{{>test}}</div>',
	        partials: {
	          test: '<p>{{a}}</p><p>{{b}}</p>'
	        },
	        data: {
	          a: 'A',
	          b: 'B'
	        }
	      })
	      expect(el.innerHTML).toBe('<div>' + wrap('<p>A</p><p>B</p>') + '</div>')
	    })

	    it('not found', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div>{{>test}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>' + wrap('') + '</div>')
	    })

	    it('dynamic partial', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-partial="{{partial}}"></div>',
	        data: {
	          msg: 'hello',
	          partial: 'p1'
	        },
	        partials: {
	          p1: '{{msg}}',
	          p2: '<div v-component="child"></div>'
	        },
	        components: {
	          child: {
	            data: function () {
	              return {a:123}
	            },
	            template: '{{a}}'
	          }
	        }
	      })
	      expect(el.firstChild.innerHTML).toBe(wrap('hello'))
	      expect(vm._directives.length).toBe(2)
	      vm.partial = 'p2'
	      _.nextTick(function () {
	        expect(el.firstChild.innerHTML).toBe(wrap('<div>123</div><!--v-component-->'))
	        expect(vm._directives.length).toBe(2)
	        expect(vm._children.length).toBe(1)
	        vm.partial = 'p1'
	        _.nextTick(function () {
	          expect(el.firstChild.innerHTML).toBe(wrap('hello'))
	          expect(vm._directives.length).toBe(2)
	          expect(vm._children.length).toBe(0)
	          done()
	        })
	      })
	    })

	    it('template block partial', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<template v-partial="{{test}}"></template>',
	        data: {
	          test: 'p1',
	          msg: 'b'
	        },
	        partials: {
	          p1: 'a {{msg}} c',
	          p2: '<span>1</span><a>2</a>'
	        }
	      })
	      expect(el.innerHTML).toBe(wrap('a b c'))
	      vm.test = 'p2'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(wrap('<span>1</span><a>2</a>'))
	        done()
	      })
	    })

	    it('partial with filters', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div>{{>test | replace}}</div>',
	        partials: {
	          test: '{{a}}'
	        },
	        data: {
	          a: 'A',
	          b: 'B'
	        },
	        filters: {
	          replace: function () {
	            return '{{b}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<div>' + wrap('B') + '</div>')
	    })

	  })
	}

/***/ },
/* 85 */
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
/* 86 */
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
	        template: '<div v-component="test" v-ref="test"></div>'
	      })
	      expect(vm.$.test).toBeTruthy()
	      expect(vm.$.test.$options.id).toBe('test')
	    })

	    it('with dynamic v-component', function (done) {
	      var vm = new Vue({
	        el: el,
	        components: components,
	        data: { test: 'test' },
	        template: '<div v-component="{{test}}" v-ref="test"></div>'
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
	        template: '<div v-component="{{view}}"></div>',
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
	        data: { items: [1,2,3,4,5] },
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

	    it('nested v-repeat', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="c1" v-ref="c1"></div>',
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
	      var vm = new Vue({
	        el: el,
	        template: '<div v-ref="test"></div>'
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	  })
	}

/***/ },
/* 87 */
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
	          items: [{a:1}, {a:2}]
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
	          items: [{a:1}, {a:2}]
	        },
	        template: '<div v-repeat="item:items">{{$index}} {{item.a}}</div>'
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
	            a: {a:1},
	            b: {a:2}
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
	            a: {a:1},
	            b: {a:2}
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
	          items: [[1,1], [2,2], [3,3]]
	        },
	        template: '<div v-repeat="items">{{$index}} {{$value}}</div>'
	      })
	      var markup = vm.items.map(function (item, i) {
	        return '<div>' + i + ' ' + item.toString() + '</div>'
	      }).join('') + '<!--v-repeat-->'
	      expect(el.innerHTML).toBe(markup)
	    })

	    it('repeating object with filter', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: { msg: 'aaa' },
	            b: { msg: 'bbb' }
	          }
	        },
	        template: '<div v-repeat="items | filterBy \'aaa\'">{{msg}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>aaa</div><!--v-repeat-->')
	    })

	    it('v-component', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a:1}, {a:2}]
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

	    it('v-component with inline-template', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a:1}, {a:2}]
	        },
	        template:
	          '<div v-repeat="items" v-component="test" inline-template>' +
	            '{{$index}} {{a}}' +
	          '</div>',
	        components: {
	          test: {}
	        }
	      })
	      assertMutations(vm, el, done)
	    })

	    it('v-component with primitive values', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [2, 1, 2]
	        },
	        template: '<p v-repeat="items" v-component="test"></p>',
	        components: {
	          test: {
	            template: '<div>{{$index}} {{$value}}</div>',
	            replace: true
	          }
	        }
	      })
	      assertPrimitiveMutations(vm, el, done)
	    })

	    it('v-component with object of objects', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: {
	            a: {a:1},
	            b: {a:2}
	          }
	        },
	        template: '<p v-repeat="items" v-component="test"></p>',
	        components: {
	          test: {
	            template: '<div>{{$index}} {{$key}} {{a}}</div>',
	            replace: true
	          }
	        }
	      })
	      assertObjectMutations(vm, el, done)
	    })

	    it('custom element component', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a:1}, {a:2}, {a:3}]
	        },
	        template: '<test-component v-repeat="items"></test-component>',
	        components: {
	          'test-component': {
	            template: '{{$index}} {{a}}'
	          }
	        }
	      })
	      expect(el.innerHTML).toBe(
	        '<test-component>0 1</test-component>' +
	        '<test-component>1 2</test-component>' +
	        '<test-component>2 3</test-component>' +
	        '<!--v-repeat-->'
	      )
	    })

	    it('custom element component with replace:true', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [{a:1}, {a:2}, {a:3}]
	        },
	        template: '<test-component v-repeat="items"></test-component>',
	        components: {
	          'test-component': {
	            template: '<p>{{$index}} {{a}}</p>',
	            replace: true
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<p>0 1</p><p>1 2</p><p>2 3</p><!--v-repeat-->')
	    })

	    it('nested repeats', function () {
	      var vm = new Vue({
	        el: el,
	        data: {
	          items: [
	            { items: [{a:1}, {a:2}], a: 1 },
	            { items: [{a:3}, {a:4}], a: 2 }
	          ]
	        },
	        template: '<div v-repeat="items">' +
	            '<p v-repeat="items">{{$index}} {{a}} {{$parent.$index}} {{$parent.a}}</p>' +
	          '</div>'
	      })
	      expect(el.innerHTML).toBe(
	        '<div><p>0 1 0 1</p><p>1 2 0 1</p><!--v-repeat--></div>' +
	        '<div><p>0 3 1 2</p><p>1 4 1 2</p><!--v-repeat--></div>' +
	        '<!--v-repeat-->'
	      )
	    })

	    it('nested repeats on object', function(){
	      var vm = new Vue({
	        el: el,
	        data: {
	          listHash: {
	            listA: [{a: 1},{a: 2}],
	            listB: [{a: 1},{a: 2}]
	          }
	        },
	        template: '<div v-repeat="listHash">{{$key}}' +
	            '<p v-repeat="$value">{{a}}</p>' +
	            '</div>'
	      })
	      function output(key){
	        var key1 = key === 'listA' ? 'listB' : 'listA'
	        return  '<div>'+ key +'<p>1</p><p>2</p><!--v-repeat--></div>' +
	                '<div>'+ key1 +'<p>1</p><p>2</p><!--v-repeat--></div>' +
	                '<!--v-repeat-->'
	      }
	      expect(el.innerHTML === output('listA') || el.innerHTML === output('listB')).toBeTruthy()
	    })

	    it('dynamic component type based on instance data', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="list" v-component="view-{{type}}"></div>',
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
	      expect(el.innerHTML).toBe('<div>AAA</div><div>BBB</div><div>CCC</div><!--v-repeat-->')
	      // #458 meta properties
	      vm = new Vue({
	        el: el,
	        template: '<div v-repeat="list" v-component="view-{{$value}}"></div>',
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
	      expect(el.innerHTML).toBe('<div>AAA</div><div>BBB</div><div>CCC</div><!--v-repeat-->')
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
	        done()
	      })

	      function assertMarkup () {
	        var markup = vm.list.map(function (item) {
	          return '<!--v-start--><p>' + item.a + '</p><p>' + (item.a + 1) + '</p><!--v-end-->'
	        }).join('')
	        expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
	      }
	    })

	    // added for #799
	    it('block repeat with diff', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<template v-repeat="list" v-component="test"></template>',
	        data: {
	          list: [
	            { a: 1 },
	            { a: 2 },
	            { a: 3 }
	          ]
	        },
	        components: {
	          test: {
	            template: '<p>{{a}}</p><p>{{a + 1}}</p>'
	          }
	        }
	      })
	      assertMarkup()
	      vm.list.reverse()
	      _.nextTick(function () {
	        assertMarkup()
	        done()
	      })

	      function assertMarkup () {
	        var markup = vm.list.map(function (item) {
	          return '<!--v-start--><p>' + item.a + '</p><p>' + (item.a + 1) + '</p><!--v-end-->'
	        }).join('')
	        expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
	      }
	    })

	    it('component + parent directive + transclusion', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="list" v-component="test" v-class="cls">{{msg}}</div>',
	        data: {
	          cls: 'parent',
	          msg: 'hi',
	          list: [{a:1},{a:2},{a:3}]
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
	      expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
	      vm.msg = 'ho'
	      markup = vm.list.map(function (item) {
	        return '<div class="child parent">' + item.a + ' ho</div>'
	      }).join('')
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
	        done()
	      })
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
	        expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
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
	      expect(el.innerHTML).toBe('<div>3</div><div>2</div><div>1</div><!--v-repeat-->')
	      vm.sortKey = '$value'
	      _.nextTick(function () {
	        expect(el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div><!--v-repeat-->')
	        done()
	      })
	    })

	    it('orderBy supporting $value for primitive arrays', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="list | orderBy \'$value\'">{{$value}}</div>',
	        data: {
	          list: [3, 2, 1]
	        }
	      })
	      expect(el.innerHTML).toBe('<div>1</div><div>2</div><div>3</div><!--v-repeat-->')
	    })

	    it('track by id', function (done) {

	      assertTrackBy('<div v-repeat="list" v-component="test" track-by="id"></div>', '{{msg}}', function () {
	        assertTrackBy('<div v-repeat="item:list" v-component="test" track-by="id"></div>', '{{item.msg}}', done)
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
	        var oldVms = vm._children.slice()
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
	            expect(vm._children[i]).toBe(oldVms[i])
	          }
	          next()
	        })

	        function assertMarkup () {
	          var markup = vm.list.map(function (item) {
	            return '<div>' + item.msg + '</div>'
	          }).join('')
	          expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
	        }
	      }
	    })

	    it('warn duplicate objects', function () {
	      var obj = {}
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-component="test"></div>',
	        data: {
	          items: [obj, obj]
	        },
	        components: {
	          test: {}
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('warn duplicate trackby id', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-component="test" track-by="id"></div>',
	        data: {
	          items: [{id:1}, {id:1}]
	        },
	        components: {
	          test: {}
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('warn v-if', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-if="aaa"></div>',
	        data: {
	          items: []
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('repeat number', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="3">{{$index}} {{$value}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>0 0</div><div>1 1</div><div>2 2</div><!--v-repeat-->')
	    })

	    it('repeat string', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="\'vue\'">{{$index}} {{$value}}</div>'
	      })
	      expect(el.innerHTML).toBe('<div>0 v</div><div>1 u</div><div>2 e</div><!--v-repeat-->')
	    })

	    it('teardown', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-component="test"></div>',
	        data: {
	          items: [{a:1}, {a:2}]
	        },
	        components: {
	          test: {}
	        }
	      })
	      vm._directives[0].unbind()
	      expect(vm._children.length).toBe(0)
	    })

	    it('with transition', function (done) {
	      document.body.appendChild(el)
	      var vm = new Vue({
	        el: el,
	        template: '<div v-repeat="items" v-transition="test">{{a}}</div>',
	        data: {
	          items: [{a:1}, {a:2}, {a:3}]
	        },
	        transitions: {
	          test: {
	            leave: function (el, done) {
	              setTimeout(done, 1)
	            }
	          }
	        }
	      })
	      vm.items.splice(1, 1, {a:4})
	      setTimeout(function () {
	        expect(el.innerHTML).toBe('<div>1</div><div>4</div><div>3</div><!--v-repeat-->')
	        document.body.removeChild(el)
	        done()
	      }, 30)
	    })

	    it('sync $value changes back to original array/object', function (done) {
	      var vm = new Vue({
	        el: el,
	        template:
	          '<div v-repeat="items">{{$value}}</div>' +
	          '<div v-repeat="obj">{{$value}}</div>',
	        data: {
	          items: ['a', 'b'],
	          obj: { foo: 'a', bar: 'b' }
	        }
	      })
	      vm._children[0].$value = 'c'
	      var key = vm._children[2].$key
	      vm._children[2].$value = 'd'
	      _.nextTick(function () {
	        expect(vm.items[0]).toBe('c')
	        expect(vm.obj[key]).toBe('d')
	        done()
	      })
	    })

	    it('nested track by', function (done) {
	      assertTrackBy('<div v-repeat="list" track-by="id">{{msg}}<div v-repeat="list" track-by="id">{{msg}}</div></div>', function () {
	        assertTrackBy('<div v-transition v-repeat="list" track-by="id">{{msg}}<div v-transition v-repeat="list" track-by="id">{{msg}}</div></div>', done)
	      })

	      function assertTrackBy(template, next) {
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

	        var oldVms = vm._children.slice()

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
	            expect(vm._children[i]).toBe(oldVms[i])
	          }
	          expect(vm._children[0]._children[0]).toBe(oldVms[0]._children[0])
	          next()
	        })

	        function assertMarkup () {
	          var markup = vm.list.map(function (item) {
	            var sublist = item.list.map(function (item) {
	              return '<div>' + item.msg + '</div>'
	            }).join('') + '<!--v-repeat-->'
	            return '<div>' + item.msg + sublist + '</div>'
	          }).join('') + '<!--v-repeat-->'
	          expect(el.innerHTML).toBe(markup)
	        }
	      }
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
	    stack: [{fn:fn, cb:cb}],
	    then: function (fn, cb) {
	      this.stack.push({fn:fn, cb:cb})
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
	      vm.items.push({a:3})
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
	      vm.items.splice(1, 1, {a:5})
	    },
	    assertMarkup
	  )
	  // test swapping the array
	  .then(
	    function () {
	      vm.items = [{a:0}, {a:1}, {a:2}]
	    },
	    assertMarkup
	  )
	  .run(done)

	  function assertMarkup () {
	    var markup = vm.items.map(function (item, i) {
	      return '<div>' + i + ' ' + item.a + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
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
	    expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
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
	      vm.items.a = {a:3}
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items = {
	        c: {a:1},
	        d: {a:2}
	      }
	    },
	    assertMarkup
	  )
	  .then(
	    function () {
	      vm.items.$add('a', {a:3})
	    },
	    assertMarkup
	  )
	  .run(done)

	  function assertMarkup () {
	    var markup = Object.keys(vm.items).map(function (key, i) {
	      return '<div>' + i + ' ' + key + ' ' + vm.items[key].a + '</div>'
	    }).join('')
	    expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
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
	    expect(el.innerHTML).toBe(markup + '<!--v-repeat-->')
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	var transition = __webpack_require__(23)
	var def = __webpack_require__(29)

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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(34)
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
	      dir.update({color: 'red', marginRight: '30px'})
	      expect(el.style.getPropertyValue('color')).toBe('red')
	      expect(el.style.getPropertyValue('margin-right')).toBe('30px')
	    })

	    it('update with object and auto prefix', function () {
	      var prop = checkPrefixedProp('transform')
	      var val = 'scale(0.5)';
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var def = __webpack_require__(26)

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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = _.Vue
	var def = __webpack_require__(35)

	if (_.inBrowser) {
	  describe('v-transition', function () {

	    it('should save the transition id and custom functions as data', function () {
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
	      expect(dir.el.__v_trans.id).toBe('test')
	      expect(dir.el.__v_trans.fns).toBe(fns)
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)

	if (_.inBrowser) {
	  describe('v-with', function () {

	    var el
	    beforeEach(function () {
	      el = document.createElement('div')
	      spyOn(_, 'warn')
	    })

	    it('no arg', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          test: {
	            a: 'A'
	          }
	        },
	        template: '<div v-component="test" v-with="test"></div>',
	        components: {
	          test: {
	            template: '{{a}}'
	          }
	        }
	      })
	      expect(el.firstChild.textContent).toBe('A')
	      // swap nested prop
	      vm.test.a = 'B'
	      _.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('B')
	        // swap passed down prop
	        vm.test = { a: 'C' }
	        _.nextTick(function () {
	          expect(el.firstChild.textContent).toBe('C')
	          // swap root $data
	          vm.$data = { test: { a: 'D' }}
	          _.nextTick(function () {
	            expect(el.firstChild.textContent).toBe('D')
	            done()
	          })
	        })
	      })
	    })

	    it('with arg', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          b: 'B',
	          test: {
	            a: 'A'
	          }
	        },
	        template: '<div v-component="test" v-with="testt:test,bb:b" v-ref="child"></div>',
	        components: {
	          test: {
	            template: '{{testt.a}} {{bb}}'
	          }
	        }
	      })
	      expect(el.firstChild.textContent).toBe('A B')
	      vm.test.a = 'AA'
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('AA BB')
	        vm.test = { a: 'AAA' }
	        _.nextTick(function () {
	          expect(el.firstChild.textContent).toBe('AAA BB')
	          vm.$data = {
	            b: 'BBB',
	            test: {
	              a: 'AAAA'
	            }
	          }
	          _.nextTick(function () {
	            expect(el.firstChild.textContent).toBe('AAAA BBB')
	            // test two-way
	            vm.$.child.bb = 'B'
	            vm.$.child.testt = { a: 'A' }
	            _.nextTick(function () {
	              expect(el.firstChild.textContent).toBe('A B')
	              expect(vm.test.a).toBe('A')
	              expect(vm.test).toBe(vm.$.child.testt)
	              expect(vm.b).toBe('B')
	              done()
	            })
	          })
	        })
	      })
	    })

	    it('teardown', function (done) {
	      var vm = new Vue({
	        el: el,
	        data: {
	          b: 'B'
	        },
	        template: '<div v-component="test" v-with="bb:b"></div>',
	        components: {
	          test: {
	            template: '{{bb}}'
	          }
	        }
	      })
	      expect(el.firstChild.textContent).toBe('B')
	      vm.b = 'BB'
	      _.nextTick(function () {
	        expect(el.firstChild.textContent).toBe('BB')
	        vm._children[0]._directives[0].unbind()
	        vm.b = 'BBB'
	        _.nextTick(function () {
	          expect(el.firstChild.textContent).toBe('BB')
	          done()
	        })
	      })
	    })

	    it('non-root warning', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-with="test"></div>'
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('no-parent warning', function () {
	      el.setAttribute('v-with', 'test')
	      var vm = new Vue({
	        el: el
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	    it('block instance with replace:true', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test" v-with="b:a" c="{{d}}"></div>',
	        data: {
	          a: 'AAA',
	          d: 'DDD'
	        },
	        components: {
	          test: {
	            paramAttributes: ['c'],
	            template: '<p>{{b}}</p><p>{{c}}</p>',
	            replace: true
	          }
	        }
	      })
	      expect(el.innerHTML).toBe('<!--v-start--><p>AAA</p><p>DDD</p><!--v-end--><!--v-component-->')
	    })

	    it('bind literal values should not trigger setter warning', function (done) {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test" v-with="a:\'test\'"></div>',
	        components: {
	          test: {
	            template: '{{a}}'
	          }
	        }
	      })
	      expect(el.firstChild.innerHTML).toBe('test')
	      vm._children[0].a = 'changed'
	      _.nextTick(function () {
	        expect(el.firstChild.innerHTML).toBe('changed')
	        expect(_.warn).not.toHaveBeenCalled()
	        done()
	      })
	    })

	    it('should warn when binding literal value without childKey', function () {
	      var vm = new Vue({
	        el: el,
	        template: '<div v-component="test" v-with="\'test\'"></div>',
	        components: {
	          test: {}
	        }
	      })
	      expect(_.warn).toHaveBeenCalled()
	    })

	  })
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var filters = __webpack_require__(52)

	describe('Filters', function () {

	  it('json read', function () {
	    var filter = filters.json.read
	    var obj = {a:{b:2}}
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
	    expect(filter(0.99999)).toBe('$0.99')
	    // sign arg
	    expect(filter(2134, '@')).toBe('@2,134.00')
	    // falsy, infinity and 0
	    expect(filter(0)).toBe('$0.00')
	    expect(filter(false)).toBe('')
	    expect(filter(null)).toBe('')
	    expect(filter(undefined)).toBe('')
	    expect(filter(Infinity)).toBe('')
	    // negative numbers
	    expect(filter(-50)).toBe('-$50.00')
	    expect(filter(-150.43)).toBe('-$150.43')
	    expect(filter(-1500.4343434)).toBe('-$1,500.43')
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
	      { a: 3, b: 2 }
	    ]
	    var vm = new Vue({
	      data: {
	        search: {
	          key: 'hello',
	          datakey: 'b.c',
	          n: 2
	        }
	      }
	    })
	    var res
	    // normal
	    res = filter.call(vm, arr, 'search.key')
	    expect(res.length).toBe(2)
	    expect(res[0]).toBe(arr[0])
	    expect(res[1]).toBe(arr[1])
	    // data key
	    res = filter.call(vm, arr, 'search.key', 'search.datakey')
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(arr[0])
	    // quotes
	    res = filter.call(vm, arr, "'hello'", "'b.c'")
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(arr[0])
	    // delimiter
	    res = filter.call(vm, arr, 'search.key', 'in', 'search.datakey')
	    expect(res.length).toBe(1)
	    expect(res[0]).toBe(arr[0])
	    // no search key
	    res = filter.call(vm, arr, 'abc')
	    expect(res).toBe(arr)
	    // number search key
	    res = filter.call(vm, arr, 'search.n')
	    expect(res[0]).toBe(arr[1])
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
	    res = filter.call(new Vue({
	      data: {
	        sortby: 'a.b',
	      }
	    }), arr, 'sortby')
	    expect(res.length).toBe(3)
	    expect(res[0].a.b).toBe(0)
	    expect(res[1].a.b).toBe(1)
	    expect(res[2].a.b).toBe(2)
	    // reverse key
	    res = filter.call(new Vue({
	      data: { sortby: 'a.b', reverse: true }
	    }), arr, 'sortby', 'reverse')
	    expect(res.length).toBe(3)
	    expect(res[0].a.b).toBe(2)
	    expect(res[1].a.b).toBe(1)
	    expect(res[2].a.b).toBe(0)
	    // literal args
	    res = filter.call(new Vue(), arr, "'c'", '-1')
	    expect(res.length).toBe(3)
	    expect(res[0].c).toBe('c')
	    expect(res[1].c).toBe('b')
	    expect(res[2].c).toBe('a')
	    // negate reverse
	    res = filter.call(new Vue({
	      data: { reverse: true }
	    }), arr, "'c'", '!reverse')
	    expect(res.length).toBe(3)
	    expect(res[0].c).toBe('a')
	    expect(res[1].c).toBe('b')
	    expect(res[2].c).toBe('c')
	    // no sort key
	    res = filter.call(new Vue(), arr, 'abc')
	    expect(res).toBe(arr)
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
/* 94 */
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
	      var vm = new Vue({
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
	      expect(_.warn).toHaveBeenCalled()
	    })

	  })

	  describe('option watchers', function () {

	    it('normal', function (done) {
	      var spyA = jasmine.createSpy()
	      var spyB = jasmine.createSpy()
	      var vm = new Vue({
	        watch: {
	          'a.b.c': spyA,
	          'b + c': spyB
	        },
	        data: {
	          a: {
	            b: { c: 1 }
	          },
	          b: 1,
	          c: 2
	        }
	      })
	      vm.a.b.c = 2
	      vm.b = 3
	      vm.c = 4
	      _.nextTick(function () {
	        expect(spyA).toHaveBeenCalledWith(2, 1)
	        expect(spyB).toHaveBeenCalledWith(7, 3)
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
	          expect(this._data).toBeNull()
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var init = __webpack_require__(54)._init

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
	    _anonymous: true,
	    el: {}
	  }

	  init.call(stub, options)

	  it('should setup properties', function () {
	    expect(stub.$el).toBe(null)
	    expect(stub.$root).toBe(stub)
	    expect(stub.$).toBeTruthy()
	    expect(stub._watcherList).toBeTruthy()
	    expect(stub._watchers).toBeTruthy()
	    expect(stub._userWatchers).toBeTruthy()
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
/* 96 */
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

	  describe('computed', function () {
	    
	    var Test = Vue.extend({
	      computed: {
	        c: function () {
	          expect(this).toBe(vm)
	          return this.a + this.b
	        },
	        d: {
	          get: function () {
	            expect(this).toBe(vm)
	            return this.a + this.b
	          },
	          set: function (newVal) {
	            expect(this).toBe(vm)
	            var vals = newVal.split(' ')
	            this.a = vals[0]
	            this.b = vals[1]
	          }
	        }
	      }
	    })

	    var vm = new Test({
	      data: {
	        a: 'a',
	        b: 'b'
	      }
	    })

	    it('get', function () {
	      expect(vm.c).toBe('ab')
	      expect(vm.d).toBe('ab')
	    })

	    it('set', function () {
	      vm.c = 123 // should do nothing
	      vm.d = 'c d'
	      expect(vm.a).toBe('c')
	      expect(vm.b).toBe('d')
	      expect(vm.c).toBe('cd')
	      expect(vm.d).toBe('cd')
	    })

	    it('inherit', function () {
	      var child = vm.$addChild({
	        inherit: true
	      })
	      expect(child.c).toBe('cd')

	      child.d = 'e f'
	      expect(vm.a).toBe('e')
	      expect(vm.b).toBe('f')
	      expect(vm.c).toBe('ef')
	      expect(vm.d).toBe('ef')
	      expect(child.a).toBe('e')
	      expect(child.b).toBe('f')
	      expect(child.c).toBe('ef')
	      expect(child.d).toBe('ef')
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// test cases for edge cases & bug fixes
	var Vue = __webpack_require__(2)

	describe('Misc', function () {

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
	    el.innerHTML = '<div v-component="outter" v-ref="outter"><div v-component="inner"></div></div>'
	    document.body.appendChild(el)

	    var vm = new Vue({
	      el: el,
	      components: {
	        outter: {
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

	})

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var Dep = __webpack_require__(43)

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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var Observer = __webpack_require__(42)
	var config = __webpack_require__(7)
	var Dep = __webpack_require__(43)
	var _ = __webpack_require__(3)

	describe('Observer', function () {

	  var spy
	  beforeEach(function () {
	    spy = jasmine.createSpy('observer')
	  })

	  it('create on non-observables', function () {
	    // skip primitive value
	    var ob = Observer.create(1)
	    expect(ob).toBeUndefined()
	    // avoid vue instance
	    ob = Observer.create(new _.Vue())
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
	    expect(ob.active).toBe(true)
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
	    expect(ob.active).toBe(true)
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
	    var dump
	    // collect dep
	    Observer.target = watcher
	    dump = obj.a.b
	    Observer.target = null
	    expect(watcher.deps.length).toBe(2)
	    dump = obj.a.b = 3
	    expect(watcher.update.calls.count()).toBe(1)
	    // swap object
	    var oldA = obj.a
	    obj.a = { b: 4 }
	    expect(watcher.update.calls.count()).toBe(2)
	    expect(oldA.__ob__.deps.length).toBe(0)
	    expect(obj.a.__ob__.deps.length).toBe(1)
	    // recollect dep
	    var oldDeps = watcher.deps
	    watcher.deps = []
	    Observer.target = watcher
	    dump = obj.a.b
	    Observer.target = null
	    expect(watcher.deps.length).toBe(2)
	    // set on the swapped object
	    obj.a.b = 5
	    expect(watcher.update.calls.count()).toBe(3)
	  })

	  it('observing $add/$set/$delete', function () {
	    var obj = { a: 1 }
	    var ob = Observer.create(obj)
	    var dep = new Dep()
	    ob.deps.push(dep)
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
	    var dep = new Dep()
	    ob.deps.push(dep)
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
	    var dep = new Dep()
	    ob.deps.push(dep)
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
	    var dep = new Dep()
	    ob.deps.push(dep)
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
	    var obj = {a:1}
	    var ob = Observer.create(obj)
	    expect(obj.$add).toBeTruthy()
	    expect(obj.$delete).toBeTruthy()
	    var dep = new Dep()
	    ob.deps.push(dep)
	    spyOn(dep, 'notify')
	    obj.$add('b', 2)
	    expect(dep.notify).toHaveBeenCalled()
	    // array
	    var arr = [1, 2, 3]
	    var ob2 = Observer.create(arr)
	    expect(arr.$set).toBeTruthy()
	    expect(arr.$remove).toBeTruthy()
	    expect(arr.push).not.toBe([].push)
	    var dep2 = new Dep()
	    ob2.deps.push(dep2)
	    spyOn(dep2, 'notify')
	    arr.push(1)
	    expect(dep2.notify).toHaveBeenCalled()
	    config.proto = true
	  })

	})

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(16).parse

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
	    var res = parse(' arg : exp | abc de | bcd')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('exp')
	    expect(res[0].arg).toBe('arg')
	    expect(res[0].raw).toBe('arg : exp | abc de | bcd')
	    expect(res[0].filters.length).toBe(2)
	    expect(res[0].filters[0].name).toBe('abc')
	    expect(res[0].filters[0].args.length).toBe(1)
	    expect(res[0].filters[0].args[0]).toBe('de')
	    expect(res[0].filters[1].name).toBe('bcd')
	    expect(res[0].filters[1].args).toBeNull()
	  })

	  it('double pipe', function () {
	    var res = parse('a || b | c')
	    expect(res.length).toBe(1)
	    expect(res[0].expression).toBe('a || b')
	    expect(res[0].raw).toBe('a || b | c')
	    expect(res[0].filters.length).toBe(1)
	    expect(res[0].filters[0].name).toBe('c')
	    expect(res[0].filters[0].args).toBeNull()
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
	    var res = parse('a:b | c | j, d:e | f | k l, g:h | i')
	    expect(res.length).toBe(3)

	    expect(res[0].arg).toBe('a')
	    expect(res[0].expression).toBe('b')
	    expect(res[0].filters.length).toBe(2)
	    expect(res[0].filters[0].name).toBe('c')
	    expect(res[0].filters[0].args).toBeNull()
	    expect(res[0].filters[1].name).toBe('j')
	    expect(res[0].filters[1].args).toBeNull()

	    expect(res[1].arg).toBe('d')
	    expect(res[1].expression).toBe('e')
	    expect(res[1].filters.length).toBe(2)
	    expect(res[1].filters[0].name).toBe('f')
	    expect(res[1].filters[0].args).toBeNull()
	    expect(res[1].filters[1].name).toBe('k')
	    expect(res[1].filters[1].args.length).toBe(1)
	    expect(res[1].filters[1].args[0]).toBe('l')

	    expect(res[2].arg).toBe('g')
	    expect(res[2].expression).toBe('h')
	    expect(res[2].filters.length).toBe(1)
	    expect(res[2].filters[0].name).toBe('i')
	    expect(res[2].filters[0].args).toBeNull()
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var expParser = __webpack_require__(19)
	var _ = __webpack_require__(3)

	var testCases = [
	  {
	    // simple path
	    exp: 'a.b.d',
	    scope: {
	      a:{b:{d:123}}
	    },
	    expected: 123,
	    paths: ['a']
	  },
	  // complex path
	  {
	    exp: 'a["b"].c',
	    scope: {
	      a:{b:{c:234}}
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
	    //multiline expressions
	    exp: "{\n a: '35',\n b: c}",
	    scope:{c:32},
	    expected: { a : '35', b : 32 }
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
	    //keyowrd + keyword literal
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
	    scope: { test: "123" },
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
	    scope.a = {b:{c:0}}
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
	      var res = expParser.parse('a--b"ffff')
	      expect(_.warn).toHaveBeenCalled()
	    })

	    if (leftHandThrows()) {
	      it('should warn on invalid left hand expression for setter', function () {
	        expect(_.warn).not.toHaveBeenCalled()
	        var res = expParser.parse('a+b', true)
	        expect(_.warn).toHaveBeenCalled()
	      })
	    }

	    it('should warn if expression contains improper reserved keywords', function () {
	      expect(_.warn).not.toHaveBeenCalled()
	      var res = expParser.parse('break + 1')
	      expect(_.warn).toHaveBeenCalled()
	    })
	  })
	})

	/**
	 * check if creating a new Function with invalid left-hand
	 * assignment would throw
	 */

	function leftHandThrows () {
	  try {
	    var fn = new Function('a + b = 1')
	  } catch (e) {
	    return true
	  }
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var Path = __webpack_require__(11)

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

	  it('set on prototype chain', function () {
	    var parent = { a: {} }
	    var target = Object.create(parent)
	    var res = Path.set(target, 'a.b.c', 123)
	    expect(res).toBe(true)
	    expect(target.hasOwnProperty('a')).toBe(false)
	    expect(parent.a.b.c).toBe(123)
	  })

	  it('set invalid', function () {
	    var res = Path.set({}, 'ab[c]d', 123)
	    expect(res).toBe(false)
	  })

	})

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var templateParser = __webpack_require__(17)
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
	      expect(a.firstChild.innerHTML).toBe('1')
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var textParser = __webpack_require__(15)
	var config = __webpack_require__(7)
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
	      { tag: true, value: 'html', html: true, oneTime: false },
	    ]
	  },
	  {
	    // one time
	    text: '{{* text }} and {{{* html }}}',
	    expected: [
	      { tag: true, value: 'text', html: false, oneTime: true },
	      { value: ' and ' },
	      { tag: true, value: 'html', html: true, oneTime: true },
	    ]
	  },
	  {
	    // partial
	    text: '{{> hello }} and {{>hello}}',
	    expected: [
	      { tag: true, value: 'hello', html: false, oneTime: false, partial: true },
	      { value: ' and ' },
	      { tag: true, value: 'hello', html: false, oneTime: false, partial: true }
	    ]
	  },
	  {
	    text: '[{{abc}}]',
	    expected: [
	      { value: '[' },
	      { tag: true, value: 'abc', html: false, oneTime: false },
	      { value: ']' }
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
	        { tag: true, value: 'html', html: true, oneTime: false },
	      ]
	    })
	    config.delimiters = ['{{', '}}']
	  })

	  it('tokens to expression', function () {
	    var tokens = textParser.parse('view-{{test + 1}}-test-{{ok + "|"}}')
	    var exp = textParser.tokensToExp(tokens)
	    expect(exp).toBe('"view-"+(test + 1)+"-test-"+(ok + "|")')
	  })

	  it('tokens to expression with oneTime tags & vm', function () {
	    var vm = new Vue({
	      data: { test: 'a', ok: 'b' }
	    })
	    var tokens = textParser.parse('view-{{*test}}-test-{{ok}}')
	    var exp = textParser.tokensToExp(tokens, vm)
	    expect(exp).toBe('"view-"+"a"+"-test-"+(ok)')
	  })

	  it('tokens to expression with filters, single expression', function () {
	    var tokens = textParser.parse('{{test | abc}}')
	    var exp = textParser.tokensToExp(tokens)
	    expect(exp).toBe('test | abc')
	  })

	  it('tokens to expression with filters, multiple expressions', function () {
	    var tokens = textParser.parse('a {{b | c d}} e')
	    var exp = textParser.tokensToExp(tokens)
	    expect(exp).toBe('"a "+(this.$options.filters["c"].read||this.$options.filters["c"]).apply(this,[b,"d"])+" e"')
	  })

	})

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var _ = __webpack_require__(3)
	var transition = __webpack_require__(23)

	if (_.inBrowser && !_.isIE9) {
	  describe('Transition', function () {

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
	        el.__v_trans = { id: 'test' }
	        transition.apply(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })

	      it('skip vm with parent still being compiled', function () {
	        el.__v_trans = { id: 'test' }
	        var child = vm.$addChild({
	          el: el
	        })
	        expect(child._isCompiled).toBe(true)
	        transition.apply(el, 1, op, child, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	      })

	      it('skip when no transition available', function () {
	        var e = _.transitionEndEvent
	        _.transitionEndEvent = null
	        el.__v_trans = { id: 'test' }
	        vm.$mount(el)
	        transition.apply(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	        _.transitionEndEvent = e
	      })

	    })

	    describe('CSS transitions', function () {

	      var duration = '50ms'

	      // insert a test css
	      function insertCSS (text) {
	        var cssEl = document.createElement('style')
	        cssEl.textContent = text
	        document.head.appendChild(cssEl)
	      }

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

	      var vm, el, op, cb
	      beforeEach(function (done) {
	        el = document.createElement('div')
	        el.__v_trans = {}
	        vm = new Vue({ el: el })
	        op = jasmine.createSpy('css op')
	        cb = jasmine.createSpy('css cb')
	        document.body.appendChild(el)
	        // !IMPORTANT!
	        // this ensures we force a layout for every test.
	        _.nextTick(done)
	        spyOn(window, 'getComputedStyle').and.callThrough()
	      })

	      afterEach(function () {
	        document.body.removeChild(el)
	      })

	      it('skip on 0s duration (execute right at next frame)', function (done) {
	        el.__v_trans.id = 'test'
	        el.style.transition =
	        el.style.WebkitTransition = 'opacity 0s ease'
	        transition.apply(el, 1, op, vm, cb)
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          expect(el.classList.contains('test-enter')).toBe(false)
	          transition.apply(el, -1, op, vm, cb)
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            expect(el.classList.contains('test-leave')).toBe(false)
	            done()
	          })
	        })
	      })

	      it('skip when no transition available', function (done) {
	        el.__v_trans.id = 'test-no-trans'
	        transition.apply(el, 1, op, vm, cb)
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          expect(el.classList.contains('test-no-trans-enter')).toBe(false)
	          transition.apply(el, -1, op, vm, cb)
	          _.nextTick(function () {
	            expect(op.calls.count()).toBe(2)
	            expect(cb.calls.count()).toBe(2)
	            expect(el.classList.contains('test-no-trans-leave')).toBe(false)
	            done()
	          })
	        })
	      })

	      it('transition enter', function (done) {
	        document.body.removeChild(el)
	        el.__v_trans.id = 'test'
	        // inline style
	        el.style.transition =
	        el.style.WebkitTransition = 'opacity ' + duration + ' ease'
	        transition.apply(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).not.toHaveBeenCalled()
	        _.nextTick(function () {
	          expect(el.classList.contains('test-enter')).toBe(false)
	          _.on(el, _.transitionEndEvent, function () {
	            expect(cb).toHaveBeenCalled()
	            done()
	          })
	        })
	      })

	      it('transition leave', function (done) {
	        el.__v_trans.id = 'test'
	        // cascaded class style
	        el.classList.add('test')
	        // force a layout here so the transition can be triggered
	        var f = el.offsetHeight
	        transition.apply(el, -1, op, vm, cb)
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-leave')).toBe(true)
	          _.on(el, _.transitionEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(el.classList.contains('test-leave')).toBe(false)
	            done()
	          })
	        })
	      })

	      it('animation enter', function (done) {
	        document.body.removeChild(el)
	        el.__v_trans.id = 'test-anim'
	        transition.apply(el, 1, function () {
	          document.body.appendChild(el)
	          op()
	        }, vm, cb)
	        _.nextTick(function () {
	          expect(op).toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-anim-enter')).toBe(true)
	          _.on(el, _.animationEndEvent, function () {
	            expect(el.classList.contains('test-anim-enter')).toBe(false)
	            expect(cb).toHaveBeenCalled()
	            done()
	          })
	        })
	      })

	      it('animation leave', function (done) {
	        el.__v_trans.id = 'test-anim'
	        transition.apply(el, -1, op, vm, cb)
	        _.nextTick(function () {
	          expect(op).not.toHaveBeenCalled()
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-anim-leave')).toBe(true)
	          _.on(el, _.animationEndEvent, function () {
	            expect(op).toHaveBeenCalled()
	            expect(cb).toHaveBeenCalled()
	            expect(el.classList.contains('test-anim-leave')).toBe(false)
	            done()
	          })
	        })
	      })

	      it('clean up unfinished callback', function (done) {
	        el.__v_trans.id = 'test'
	        el.classList.add('test')
	        transition.apply(el, -1, function () {
	          document.body.removeChild(el)
	        }, vm, cb)
	        // cancel early
	        _.nextTick(function () {
	          expect(el.__v_trans.callback).toBeTruthy()
	          expect(el.classList.contains('test-leave')).toBe(true)
	          transition.apply(el, 1, function () {
	            document.body.appendChild(el)
	          }, vm)
	          expect(cb).not.toHaveBeenCalled()
	          expect(el.classList.contains('test-leave')).toBe(false)
	          expect(el.__v_trans.callback).toBeNull()
	          // IMPORTANT
	          // Let the queue flush finish before enter the next
	          // test. Don't remove the nextTick.
	          _.nextTick(done)
	        })
	      })

	      it('cache transition sniff results', function (done) {
	        el.__v_trans.id = 'test'
	        el.classList.add('test')
	        transition.apply(el, 1, op, vm)
	        _.nextTick(function () {
	          expect(window.getComputedStyle.calls.count()).toBe(1)
	          transition.apply(el, 1, op, vm)
	          _.nextTick(function () {
	            expect(window.getComputedStyle.calls.count()).toBe(1)
	            done()
	          })
	        })
	      })

	    })

	    describe('JavaScript transitions', function () {

	      var el, vm, op, cb, def, emitter
	      beforeEach(function () {
	        emitter = {}
	        def = {}
	        el = document.createElement('div')
	        el.__v_trans = { id: 'test', fns: def }
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
	        def.beforeEnter = function (el) {
	          spy(this, el)
	        }
	        transition.apply(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm, el)
	      })

	      it('enter', function () {
	        var spy = jasmine.createSpy('js enter')
	        def.enter = function (e, done) {
	          expect(e).toBe(el)
	          expect(op).toHaveBeenCalled()
	          done()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        transition.apply(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm)
	      })

	      it('this context set to el instance', function () {
	        var spy = jasmine.createSpy('js enter this')
	        var vm2 = el.__vue__ = {}
	        def.enter = function (e, done) {
	          expect(e).toBe(el)
	          expect(op).toHaveBeenCalled()
	          done()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        transition.apply(el, 1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm2)
	      })

	      it('leave', function () {
	        var spy = jasmine.createSpy('js leave')
	        def.leave = function (e, done) {
	          expect(e).toBe(el)
	          done()
	          expect(op).toHaveBeenCalled()
	          expect(cb).toHaveBeenCalled()
	          spy(this)
	        }
	        transition.apply(el, -1, op, vm, cb)
	        expect(spy).toHaveBeenCalledWith(vm)
	      })

	      it('no def', function () {
	        transition.apply(el, 1, op, vm, cb)
	        expect(op).toHaveBeenCalled()
	        expect(cb).toHaveBeenCalled()
	        transition.apply(el, -1, op, vm, cb)
	        expect(op.calls.count()).toBe(2)
	        expect(cb.calls.count()).toBe(2)
	      })

	      it('optional cleanup callback', function (done) {
	        var cleanupSpy = jasmine.createSpy('js cleanup')
	        var leaveSpy = jasmine.createSpy('js leave')
	        def.enter = function (el, done) {
	          var to = setTimeout(done, 30)
	          return function () {
	            clearTimeout(to)
	            cleanupSpy()
	          }
	        }
	        def.leave = function (el, done) {
	          expect(cleanupSpy).toHaveBeenCalled()
	          leaveSpy()
	          done()
	        }
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var config = __webpack_require__(7)
	var infoPrefix = '[Vue info]: '
	var warnPrefix = '[Vue warn]: '
	config.silent = true

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
/* 107 */
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

	    it('copyAttributes', function () {
	      parent.setAttribute('test1', 1)
	      parent.setAttribute('test2', 2)
	      _.copyAttributes(parent, target)
	      expect(target.attributes.length).toBe(2)
	      expect(target.getAttribute('test1')).toBe('1')
	      expect(target.getAttribute('test2')).toBe('2')
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
/* 108 */
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)

	describe('Util - Filter', function () {
	  
	  it('resolveFilters', function () {
	    var filters = [
	      { name: 'a', args: ['a'] },
	      { name: 'b', args: ['b']},
	      { name: 'c' }
	    ]
	    var vm = {
	      _asset: function (type, id) {
	        return this.$options[type][id]
	      },
	      $options: {
	        filters: {
	          a: function (v, arg) {
	            return { id: 'a', value: v, arg: arg }
	          },
	          b: {
	            read: function (v, arg) {
	              return { id: 'b', value: v, arg: arg }
	            },
	            write: function (v, oldVal, arg) {
	              return { id: 'bw', value: v, arg: arg }
	            }
	          }
	        }
	      }
	    }
	    var target = {
	      value: 'v'
	    }
	    var res = _.resolveFilters(vm, filters, target)
	    expect(res.read.length).toBe(2)
	    expect(res.write.length).toBe(1)

	    var readA = res.read[0](1)
	    expect(readA.id).toBe('a')
	    expect(readA.value).toBe(1)
	    expect(readA.arg).toBe('a')

	    var readB = res.read[1](2)
	    expect(readB.id).toBe('b')
	    expect(readB.value).toBe(2)
	    expect(readB.arg).toBe('b')
	    
	    var writeB = res.write[0](3)
	    expect(writeB.id).toBe('bw')
	    expect(writeB.value).toBe(3)
	    expect(writeB.arg).toBe('b')
	  })

	  it('applyFilters', function () {
	    var filters = [
	      function (v) {
	        return v + 2
	      },
	      function (v) {
	        return v + 3
	      }
	    ]
	    var res = _.applyFilters(1, filters)
	    expect(res).toBe(6)
	  })

	})

/***/ },
/* 110 */
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
	    var arr = [1,2,3]
	    var res = _.toArray(arr)
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.toString()).toEqual('1,2,3')
	    expect(res).not.toBe(arr)

	    // should work on arguments
	    ;(function () {
	      var res = _.toArray(arguments)
	      expect(Array.isArray(res)).toBe(true)
	      expect(res.toString()).toEqual('1,2,3')
	    })(1,2,3)
	  })

	  it('extend', function () {
	    var from = {a:1,b:2}
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
	    expect(_.isObject(function(){})).toBeFalsy()
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
	    expect(_.isPlainObject(function(){})).toBe(false)
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(3)
	var Vue = __webpack_require__(2)
	var merge = __webpack_require__(13)

	describe('Util - Option merging', function () {
	  
	  it('default strat', function () {
	    // child undefined
	    var res = merge({replace:true}, {}).replace
	    expect(res).toBe(true)
	    // child overwrite
	    res = merge({replace:true}, {replace:false}).replace
	    expect(res).toBe(false)
	  })

	  it('hooks & paramAttributes', function () {
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
	    res = merge({paramAttributes: [1]}, {paramAttributes: [2]}).paramAttributes
	    expect(Array.isArray(res)).toBe(true)
	    expect(res.length).toBe(2)
	    expect(res[0]).toBe(1)
	    expect(res[1]).toBe(2)
	  })

	  it('events', function () {

	    // no parent
	    res = merge({}, {events:1})
	    expect(res.events).toBe(1)
	    // no child
	    res = merge({events:1}, {})
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
	    var asset3 = {}
	    var asset4 = {}
	    var asset5 = {}
	    var res = merge(
	      { directives: { a: asset1 }},
	      { directives: { b: asset2 }}
	    ).directives
	    expect(res.a).toBe(asset1)
	    expect(res.b).toBe(asset2)
	    // vm asset merge should do tree-way merge
	    var proto = { d: asset5 }
	    var parent = { directives: Object.create(proto) }
	    parent.directives.a = asset1
	    parent.directives.b = asset4
	    res = merge(
	      parent,
	      { directives: { b: asset2 }},
	      {
	        $parent: {
	          $options: {
	            directives: { c: asset3 }
	          }
	        }
	      },
	      'directives'
	    ).directives
	    expect(res.a).toBe(asset1)
	    // child should overwrite parent
	    expect(res.b).toBe(asset2)
	    expect(res.c).toBe(asset3)
	    // should not copy parent prototype properties
	    expect(res.d).toBeUndefined()
	  })

	  it('guard components', function () {
	    var res = merge({}, {
	      components: {
	        a: { template: 'hi' }
	      }
	    })
	    expect(typeof res.components.a).toBe('function')
	    expect(res.components.a.options.name).toBe('a')
	    expect(res.components.a.super).toBe(Vue)
	  })

	  it('should ignore non-function el & data in class merge', function () {
	    var res = merge({}, {el:1, data:2})
	    expect(res.el).toBeUndefined()
	    expect(res.data).toBeUndefined()
	  })

	  it('class el merge', function () {
	    function fn1 () {}
	    function fn2 () {}
	    var res = merge({el:fn1}, {el:fn2})
	    expect(res.el).toBe(fn2)
	  })

	  it('class data merge', function () {
	    function fn1 () {
	      return { a: 1, c: 4, d: { e: 1 } }
	    }
	    function fn2 () {
	      return { a: 2, b: 3, d: { f: 2 } }
	    }
	    // both present
	    var res = merge({data:fn1}, {data:fn2}).data()
	    expect(res.a).toBe(2)
	    expect(res.b).toBe(3)
	    expect(res.c).toBe(4)
	    expect(res.d.e).toBe(1)
	    expect(res.d.f).toBe(2)
	    // only parent
	    res = merge({data:fn1}, {}).data()
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
	    var res = merge({el:fn1}, {el:fn2}, vm)
	    expect(res.el).toBe(2)
	    // direct instance el
	    res = merge({el:fn1}, {el:2}, vm)
	    expect(res.el).toBe(2)
	    // no parent
	    res = merge({}, {el:2}, vm)
	    expect(res.el).toBe(2)
	    // no child
	    res = merge({el:fn1}, {}, vm)
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
	    expect(res.data.a).toBe(1)
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
	    expect(res.data.a).toBe(2)
	    expect(res.data.b).toBe(2)
	  })

	  it('already observed instance data merge with default data', function () {
	    var Observer = __webpack_require__(42)
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
	    expect(res.data.a).toBe(123)
	    expect(res.data.b).toBe(234)
	    expect(Object.getOwnPropertyDescriptor(res.data, 'b').get).toBeTruthy()
	  })

	  it('mixins', function () {
	    var a = {}, b = {}, c = {}, d = {}
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

	})

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var nextTick = Vue.nextTick
	var Watcher = __webpack_require__(41)
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
	        c: 'c'
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
	    nextTick(function() {
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
	    var filters = _.resolveFilters(vm, [
	      { name: 'test', args: [3] },
	      { name: 'test2', args: ['yo']}
	    ])
	    var watcher = new Watcher(vm, 'b.c', spy, {
	      filters: filters
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
	    var filters = _.resolveFilters(vm, [
	      { name: 'test', args: [5] }
	    ])
	    var watcher = new Watcher(vm, 'b["c"]', spy, {
	      filters: filters,
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
	    var watcher = new Watcher(vm, 'b', spy, {
	      deep: true
	    })
	    vm.b.c = { d: 4 }
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(vm.b, vm.b)
	      var oldB = vm.b
	      vm.b = { c: [{a:1}] }
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

	  it('add callback', function (done) {
	    var watcher = new Watcher(vm, 'a', spy)
	    var spy2 = jasmine.createSpy()
	    watcher.addCb(spy2)
	    vm.a = 99
	    nextTick(function () {
	      expect(spy).toHaveBeenCalledWith(99, 1)
	      expect(spy2).toHaveBeenCalledWith(99, 1)
	      done()
	    })
	  })

	  it('remove callback', function (done) {
	    // single, should equal teardown
	    var fn = function () {}
	    var watcher = new Watcher(vm, 'a', fn)
	    watcher.removeCb(fn)
	    expect(watcher.active).toBe(false)
	    expect(watcher.vm).toBe(null)
	    expect(watcher.cbs).toBe(null)
	    // multiple
	    watcher = new Watcher(vm, 'a', spy)
	    var spy2 = jasmine.createSpy()
	    watcher.addCb(spy2)
	    watcher.removeCb(spy)
	    vm.a = 234
	    nextTick(function () {
	      expect(spy).not.toHaveBeenCalled()
	      expect(spy2).toHaveBeenCalledWith(234, 1)
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
	      expect(watcher.cbs).toBe(null)
	      expect(spy).not.toHaveBeenCalled()
	      done()
	    })
	  })

	  it('synchronous updates', function () {
	    config.async = false
	    var watcher = new Watcher(vm, 'a', spy)
	    vm.a = 2
	    vm.a = 3
	    expect(spy.calls.count()).toBe(2)
	    expect(spy).toHaveBeenCalledWith(2, 1)
	    expect(spy).toHaveBeenCalledWith(3, 2)
	    config.async = true
	  })

	  it('handle a cb that triggers removeCb', function () {
	    var watcher = new Watcher(vm, 'a', spy)
	    watcher.addCb(function () {
	      watcher.removeCb(spy)
	    })
	    watcher.addCb(function () {})
	    config.async = false
	    expect(function () {
	      vm.a = 2
	    }).not.toThrow()
	    config.async = true
	    expect(spy).toHaveBeenCalled()
	    expect(watcher.cbs.length).toBe(2)
	  })

	  it('warn getter errors', function () {
	    var watcher = new Watcher(vm, 'd.e + c', spy)
	    expect(_.warn).toHaveBeenCalled()
	  })

	  it('warn setter errors', function () {
	    var watcher = new Watcher(vm, 'a + b', spy)
	    watcher.set(123)
	    expect(_.warn).toHaveBeenCalled()
	  })

	})

/***/ }
/******/ ]);