/* @preserve
 * Leaflet 1.6.0+master.2a2799b, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";var i=Object.freeze;
/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */
// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function h(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++)for(i in o=arguments[e])t[i]=o[i];return t}
// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
Object.freeze=function(t){return t};var s=Object.create||function(t){return e.prototype=t,new e};
// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function e(){}function a(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}
// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var n=0;
// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function u(t){
/*eslint-disable */
return t._leaflet_id=t._leaflet_id||++n,t._leaflet_id;
/* eslint-enable */}
// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function o(t,i,e){var n,o,s,r;return r=function(){
// reset lock and call if queued
n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?
// called too soon, queue to call later
o=arguments:(
// call and lock until later
t.apply(e,arguments),setTimeout(r,i),n=!0)}}
// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function r(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}
// @function falseFn(): Function
// Returns a function which always returns `false`.
function l(){return!1}
// @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
function c(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}
// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function _(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}
// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function d(t){return _(t).split(/\s+/)}
// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function p(t,i){for(var e in t.hasOwnProperty("options")||(t.options=t.options?s(t.options):{}),i)t.options[e]=i[e];return t.options}
// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function m(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}var f=/\{ *([\w_-]+) *\}/g;
// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function g(t,n){return t.replace(f,function(t,i){var e=n[i];if(void 0===e)throw new Error("No value provided for variable "+t);return"function"==typeof e&&(e=e(n)),e})}
// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};
// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function y(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}
// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var x="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/
function w(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var P=0;
// fallback for IE 7-8
function b(t){var i=+new Date,e=Math.max(0,16-(i-P));return P=i+e,window.setTimeout(t,e)}var T=window.requestAnimationFrame||w("RequestAnimationFrame")||b,z=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};
// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function M(t,i,e){if(!e||T!==b)return T.call(window,a(t,i));t.call(i)}
// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function C(t){t&&z.call(window,t)}var S=(Object.freeze||Object)({freeze:i,extend:h,create:s,bind:a,lastId:n,stamp:u,throttle:o,wrapNum:r,falseFn:l,formatNum:c,trim:_,splitWords:d,setOptions:p,getParamString:m,template:g,isArray:v,indexOf:y,emptyImageUrl:x,requestFn:T,cancelFn:z,requestAnimFrame:M,cancelAnimFrame:C});
// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
function Z(){}Z.extend=function(t){function i(){
// call the constructor
this.initialize&&this.initialize.apply(this,arguments),
// call all constructor hooks
this.callInitHooks()}
// @function extend(props: Object): Function
// [Extends the current class](#class-inheritance) given the properties to be included.
// Returns a Javascript function that is a class constructor (to be called with `new`).
var e=i.__super__=this.prototype,n=s(e);
// inherit parent's statics
for(var o in(n.constructor=i).prototype=n,this)this.hasOwnProperty(o)&&"prototype"!==o&&"__super__"!==o&&(i[o]=this[o]);
// mix static properties into the class
return t.statics&&(h(i,t.statics),delete t.statics),
// mix includes into the prototype
t.includes&&(function(t){if("undefined"==typeof L||!L||!L.Mixin)return;t=v(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}
/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */(t.includes),h.apply(null,[n].concat(t.includes)),delete t.includes),
// merge options
n.options&&(t.options=h(s(n.options),t.options)),
// mix given properties into the prototype
h(n,t),n._initHooks=[],
// add method for calling all hooks
n.callInitHooks=function(){if(!this._initHooksCalled){e.callInitHooks&&e.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=n._initHooks.length;t<i;t++)n._initHooks[t].call(this)}},i},
// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Z.include=function(t){return h(this.prototype,t),this},
// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Z.mergeOptions=function(t){return h(this.prototype.options,t),this},
// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Z.addInitHook=function(t){// (Function) || (String, args...)
var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var E={
/* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */
on:function(t,i,e){
// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)
// we don't process space-separated events here for performance;
// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],i);else for(var o=0,s=(
// types can be a string of space-separated words
t=d(t)).length;o<s;o++)this._on(t[o],i,e);return this},
/* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object. This includes implicitly attached events.
	 */
off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._off(t[o],i,e);else
// clear all listeners if called without arguments
delete this._events;return this},
// attach listener (without syntactic sugar now)
_on:function(t,i,e){this._events=this._events||{};
/* get/init listeners for type */
var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(
// Less memory footprint.
e=void 0);
// check if fn already there
for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)
// find fn and remove it
for(o=0,s=n.length;o<s;o++){var r=n[o];if(r.ctx===e&&r.fn===i)
// set the removed listener to noop so that's not called if remove happens in fire
return r.fn=l,this._firingCount&&(
/* copy array in case events are being fired */
this._events[t]=n=n.slice()),void n.splice(o,1)}}else{
// Set all removed listeners to noop so they are not called if remove happens in fire
for(o=0,s=n.length;o<s;o++)n[o].fn=l;
// clear all listeners for a type if function isn't specified
delete this._events[t]}},
// @method fire(type: String, data?: Object, propagate?: Boolean): this
// Fires an event of the specified type. You can optionally provide an data
// object — the first argument of the listener function will contain its
// properties. The event can optionally be propagated to event parents.
fire:function(t,i,e){if(!this.listens(t,e))return this;var n=h({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s];a.fn.call(a.ctx||this,n)}this._firingCount--}}return e&&
// propagate the event to parents (set with addEventParent)
this._propagateEvent(n),this},
// @method listens(type: String): Boolean
// Returns `true` if a particular event type has any listeners attached to it.
listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)
// also check parents for listeners if event propagates
for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},
// @method once(…): this
// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
once:function(t,i,e){if("object"==typeof t){for(var n in t)this.once(n,t[n],i);return this}var o=a(function(){this.off(t,i,e).off(t,o,e)},this);
// add a listener that's executed once and removed after that
return this.on(t,i,e).on(t,o,e)},
// @method addEventParent(obj: Evented): this
// Adds an event parent - an `Evented` that will receive propagated events
addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[u(t)]=t,this},
// @method removeEventParent(obj: Evented): this
// Removes an event parent, so it will stop receiving propagated events
removeEventParent:function(t){return this._eventParents&&delete this._eventParents[u(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,h({layer:t.target,propagatedFrom:t.target},t),!0)}};
// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
E.addEventListener=E.on,
// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
E.removeEventListener=E.clearAllEventListeners=E.off,
// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
E.addOneTimeEventListener=E.once,
// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
E.fireEvent=E.fire,
// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
E.hasEventListeners=E.listens;var k=Z.extend(E);
/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */function B(t,i,e){
// @property x: Number; The `x` coordinate of the point
this.x=e?Math.round(t):t,
// @property y: Number; The `y` coordinate of the point
this.y=e?Math.round(i):i}var A=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};
// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function I(t,i,e){return t instanceof B?t:v(t)?new B(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,i,e)}
/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */function O(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}
// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function R(t,i){return!t||t instanceof O?t:new O(t,i)}
/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */function N(t,i){// (LatLng, LatLng) or (LatLng[])
if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}
// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function D(t,i){return t instanceof N?t:new N(t,i)}
/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */function j(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");
// @property lat: Number
// Latitude in degrees
this.lat=+t,
// @property lng: Number
// Longitude in degrees
this.lng=+i,
// @property alt: Number
// Altitude in meters (optional)
void 0!==e&&(this.alt=+e)}
// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
function W(t,i,e){return t instanceof j?t:v(t)&&"object"!=typeof t[0]?3===t.length?new j(t[0],t[1],t[2]):2===t.length?new j(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new j(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new j(t,i,e)}
/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leaflet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */B.prototype={
// @method clone(): Point
// Returns a copy of the current point.
clone:function(){return new B(this.x,this.y)},
// @method add(otherPoint: Point): Point
// Returns the result of addition of the current and the given points.
add:function(t){
// non-destructive, returns a new point
return this.clone()._add(I(t))},_add:function(t){
// destructive, used directly for performance in situations where it's safe to modify existing point
return this.x+=t.x,this.y+=t.y,this},
// @method subtract(otherPoint: Point): Point
// Returns the result of subtraction of the given point from the current.
subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},
// @method divideBy(num: Number): Point
// Returns the result of division of the current point by the given number.
divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},
// @method multiplyBy(num: Number): Point
// Returns the result of multiplication of the current point by the given number.
multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},
// @method scaleBy(scale: Point): Point
// Multiply each coordinate of the current point by each coordinate of
// `scale`. In linear algebra terms, multiply the point by the
// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
// defined by `scale`.
scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},
// @method unscaleBy(scale: Point): Point
// Inverse of `scaleBy`. Divide each coordinate of the current point by
// each coordinate of `scale`.
unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},
// @method round(): Point
// Returns a copy of the current point with rounded coordinates.
round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},
// @method floor(): Point
// Returns a copy of the current point with floored coordinates (rounded down).
floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},
// @method ceil(): Point
// Returns a copy of the current point with ceiled coordinates (rounded up).
ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},
// @method trunc(): Point
// Returns a copy of the current point with truncated coordinates (rounded towards zero).
trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=A(this.x),this.y=A(this.y),this},
// @method distanceTo(otherPoint: Point): Number
// Returns the cartesian distance between the current and the given points.
distanceTo:function(t){var i=(t=I(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},
// @method equals(otherPoint: Point): Boolean
// Returns `true` if the given point has the same coordinates.
equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},
// @method contains(otherPoint: Point): Boolean
// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},
// @method toString(): String
// Returns a string representation of the point for debugging purposes.
toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},O.prototype={
// @method extend(point: Point): this
// Extends the bounds to contain the given point.
extend:function(t){// (Point)
return t=I(t),
// @property min: Point
// The top left corner of the rectangle.
// @property max: Point
// The bottom right corner of the rectangle.
this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},
// @method getCenter(round?: Boolean): Point
// Returns the center point of the bounds.
getCenter:function(t){return new B((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},
// @method getBottomLeft(): Point
// Returns the bottom-left point of the bounds.
getBottomLeft:function(){return new B(this.min.x,this.max.y)},
// @method getTopRight(): Point
// Returns the top-right point of the bounds.
getTopRight:function(){// -> Point
return new B(this.max.x,this.min.y)},
// @method getTopLeft(): Point
// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
getTopLeft:function(){return this.min;// left, top
},
// @method getBottomRight(): Point
// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
getBottomRight:function(){return this.max;// right, bottom
},
// @method getSize(): Point
// Returns the size of the given bounds
getSize:function(){return this.max.subtract(this.min)},
// @method contains(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains(point: Point): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof B?I(t):R(t))instanceof O?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},
// @method intersects(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds
// intersect if they have at least one point in common.
intersects:function(t){// (Bounds) -> Boolean
t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},
// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds
// overlap if their intersection is an area.
overlaps:function(t){// (Bounds) -> Boolean
t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},N.prototype={
// @method extend(latlng: LatLng): this
// Extend the bounds to contain the given point
// @alternative
// @method extend(otherBounds: LatLngBounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof j)e=i=t;else{if(!(t instanceof N))return t?this.extend(W(t)||D(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new j(i.lat,i.lng),this._northEast=new j(e.lat,e.lng)),this},
// @method pad(bufferRatio: Number): LatLngBounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new N(new j(i.lat-n,i.lng-o),new j(e.lat+n,e.lng+o))},
// @method getCenter(): LatLng
// Returns the center point of the bounds.
getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},
// @method getSouthWest(): LatLng
// Returns the south-west point of the bounds.
getSouthWest:function(){return this._southWest},
// @method getNorthEast(): LatLng
// Returns the north-east point of the bounds.
getNorthEast:function(){return this._northEast},
// @method getNorthWest(): LatLng
// Returns the north-west point of the bounds.
getNorthWest:function(){return new j(this.getNorth(),this.getWest())},
// @method getSouthEast(): LatLng
// Returns the south-east point of the bounds.
getSouthEast:function(){return new j(this.getSouth(),this.getEast())},
// @method getWest(): Number
// Returns the west longitude of the bounds
getWest:function(){return this._southWest.lng},
// @method getSouth(): Number
// Returns the south latitude of the bounds
getSouth:function(){return this._southWest.lat},
// @method getEast(): Number
// Returns the east longitude of the bounds
getEast:function(){return this._northEast.lng},
// @method getNorth(): Number
// Returns the north latitude of the bounds
getNorth:function(){return this._northEast.lat},
// @method contains(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains (latlng: LatLng): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){// (LatLngBounds) or (LatLng) -> Boolean
t="number"==typeof t[0]||t instanceof j||"lat"in t?W(t):D(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof N?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},
// @method intersects(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
intersects:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},
// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
overlaps:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},
// @method toBBoxString(): String
// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},
// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,i){return!!t&&(t=D(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},
// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!(!this._southWest||!this._northEast)}};var H,F={
// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
// Projects geographical coordinates into pixel coordinates for a given zoom.
latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},
// @method pointToLatLng(point: Point, zoom: Number): LatLng
// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
// zoom into geographical coordinates.
pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},
// @method project(latlng: LatLng): Point
// Projects geographical coordinates into coordinates in units accepted for
// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
project:function(t){return this.projection.project(t)},
// @method unproject(point: Point): LatLng
// Given a projected coordinate returns the corresponding LatLng.
// The inverse of `project`.
unproject:function(t){return this.projection.unproject(t)},
// @method scale(zoom: Number): Number
// Returns the scale used when transforming projected coordinates into
// pixel coordinates for a particular zoom. For example, it returns
// `256 * 2^zoom` for Mercator-based CRS.
scale:function(t){return 256*Math.pow(2,t)},
// @method zoom(scale: Number): Number
// Inverse of `scale()`, returns the zoom level corresponding to a scale
// factor of `scale`.
zoom:function(t){return Math.log(t/256)/Math.LN2},
// @method getProjectedBounds(zoom: Number): Bounds
// Returns the projection's bounds scaled and transformed for the provided `zoom`.
getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new O(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},
// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates.
// @property code: String
// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
//
// @property wrapLng: Number[]
// An array of two numbers defining whether the longitude (horizontal) coordinate
// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
//
// @property wrapLat: Number[]
// Like `wrapLng`, but for the latitude (vertical) axis.
// wrapLng: [min, max],
// wrapLat: [min, max],
// @property infinite: Boolean
// If true, the coordinate space will be unbounded (infinite in both axes)
infinite:!(j.prototype={
// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,i){return!!t&&(t=W(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},
// @method toString(): String
// Returns a string representation of the point (for debugging purposes).
toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},
// @method distanceTo(otherLatLng: LatLng): Number
// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
distanceTo:function(t){return U.distance(this,W(t))},
// @method wrap(): LatLng
// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
wrap:function(){return U.wrapLatLng(this)},
// @method toBounds(sizeInMeters: Number): LatLngBounds
// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return D([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new j(this.lat,this.lng,this.alt)}}),
// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where lat and lng has been wrapped according to the
// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
wrapLatLng:function(t){var i=this.wrapLng?r(t.lng,this.wrapLng,!0):t.lng;return new j(this.wrapLat?r(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},
// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring
// that its center is within the CRS's bounds.
// Only accepts actual `L.LatLngBounds` instances, not arrays.
wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0==n&&0==o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new N(new j(s.lat-n,s.lng-o),new j(r.lat-n,r.lng-o))}},U=h({},F,{wrapLng:[-180,180],
// Mean Earth Radius, as recommended for use by
// the International Union of Geodesy and Geophysics,
// see http://rosettacode.org/wiki/Haversine_formula
R:6371e3,
// distance between two geographical points using spherical law of cosines approximation
distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),V=6378137,q={R:V,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new B(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new j((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:(H=V*Math.PI,new O([-H,-H],[H,H]))};
/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */
/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */
// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function G(t,i,e,n){if(v(t))
// use array properties
return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}
// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
function K(t,i,e,n){return new G(t,i,e,n)}
/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */G.prototype={
// @method transform(point: Point, scale?: Number): Point
// Returns a transformed point, optionally multiplied by the given scale.
// Only accepts actual `L.Point` instances, not arrays.
transform:function(t,i){// (Point, Number) -> Point
return this._transform(t.clone(),i)},
// destructive transform (faster)
_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},
// @method untransform(point: Point, scale?: Number): Point
// Returns the reverse transformation of the given point, optionally divided
// by the given scale. Only accepts actual `L.Point` instances, not arrays.
untransform:function(t,i){return i=i||1,new B((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var Y,X=h({},U,{code:"EPSG:3857",projection:q,transformation:(Y=.5/(Math.PI*q.R),K(Y,.5,-Y,.5))}),J=h({},X,{code:"EPSG:900913"});
// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}
// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function Q(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)h+=(n?"L":"M")+(a=r[n]).x+" "+a.y;
// closes the ring for polygons; "x" is VML syntax
h+=i?Et?"z":"x":""}
// SVG complains about empty path strings
return h||"M0 0"}
/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */var tt=document.documentElement.style,it="ActiveXObject"in window,et=it&&!document.addEventListener,nt="msLaunchUri"in navigator&&!("documentMode"in document),ot=Bt("webkit"),st=Bt("android"),rt=Bt("android 2")||Bt("android 3"),at=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ht=st&&Bt("Google")&&at<537&&!("AudioNode"in window),ut=!!window.opera,lt=!nt&&Bt("chrome"),ct=Bt("gecko")&&!ot&&!ut&&!it,_t=!lt&&Bt("safari"),dt=Bt("phantom"),pt="OTransition"in tt,mt=0===navigator.platform.indexOf("Win"),ft=it&&"transition"in tt,gt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rt,vt="MozPerspective"in tt,yt=!window.L_DISABLE_3D&&(ft||gt||vt)&&!pt&&!dt,xt="undefined"!=typeof orientation||Bt("mobile"),wt=xt&&ot,Pt=xt&&gt,Lt=!window.PointerEvent&&window.MSPointerEvent,bt=!(!window.PointerEvent&&!Lt),Tt=!window.L_NO_TOUCH&&(bt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),zt=xt&&ut,Mt=xt&&ct,Ct=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),St=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",l,i),window.removeEventListener("testPassiveEventSupport",l,i)}catch(t){
// Errors can safely be ignored since this is only a browser support test.
}return t}(),Zt=!!document.createElement("canvas").getContext,Et=!(!document.createElementNS||!$("svg").createSVGRect),kt=!Et&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}();
// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
function Bt(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var At=(Object.freeze||Object)({ie:it,ielt9:et,edge:nt,webkit:ot,android:st,android23:rt,androidStock:ht,opera:ut,chrome:lt,gecko:ct,safari:_t,phantom:dt,opera12:pt,win:mt,ie3d:ft,webkit3d:gt,gecko3d:vt,any3d:yt,mobile:xt,mobileWebkit:wt,mobileWebkit3d:Pt,msPointer:Lt,pointer:bt,touch:Tt,mobileOpera:zt,mobileGecko:Mt,retina:Ct,passiveEvents:St,canvas:Zt,svg:Et,vml:kt}),It=Lt?"MSPointerDown":"pointerdown",Ot=Lt?"MSPointerMove":"pointermove",Rt=Lt?"MSPointerUp":"pointerup",Nt=Lt?"MSPointerCancel":"pointercancel",Dt=["INPUT","SELECT","OPTION"],jt={},Wt=!1;
/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */
// Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
function Ht(t,i,e,n){return"touchstart"===i?function(t,i,e){var n=a(function(t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||"mouse")){
// In IE11, some touch events needs to fire for form controls, or
// the controls will stop working. We keep a whitelist of tag names that
// need these events. For other target tags, we prevent default on the event.
if(it&&0<=Dt.indexOf(t.target.tagName))return;Ni(t)}qt(t,i)});
// need to keep track of what pointers and how many are active to provide e.touches emulation
t["_leaflet_touchstart"+e]=n,t.addEventListener(It,n,!1),Wt||(
// we listen document as any drags that end by moving the touch off the screen get fired there
document.addEventListener(It,Ft,!0),document.addEventListener(Ot,Ut,!0),document.addEventListener(Rt,Vt,!0),document.addEventListener(Nt,Vt,!0),Wt=!0)}(t,e,n):"touchmove"===i?function(t,i,e){function n(t){
// don't fire touch moves when mouse isn't down
t.pointerType===(t.MSPOINTER_TYPE_MOUSE||"mouse")&&0===t.buttons||qt(t,i)}t["_leaflet_touchmove"+e]=n,t.addEventListener(Ot,n,!1)}(t,e,n):"touchend"===i&&function(t,i,e){function n(t){qt(t,i)}t["_leaflet_touchend"+e]=n,t.addEventListener(Rt,n,!1),t.addEventListener(Nt,n,!1)}
/*
 * Extends the event handling code with double tap support for mobile browsers.
 */(t,e,n),this}function Ft(t){jt[t.pointerId]=t}function Ut(t){jt[t.pointerId]&&(jt[t.pointerId]=t)}function Vt(t){delete jt[t.pointerId]}function qt(t,i){for(var e in t.touches=[],jt)t.touches.push(jt[e]);t.changedTouches=[t],i(t)}var Gt=Lt?"MSPointerDown":bt?"pointerdown":"touchstart",Kt=Lt?"MSPointerUp":bt?"pointerup":"touchend",Yt="_leaflet_";
/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */
// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var Xt,Jt,$t,Qt,ti,ii=gi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ei=gi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ni="webkitTransition"===ei||"OTransition"===ei?ei+"End":"transitionend";
// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser
// @property TRANSITION: String
// Vendor-prefixed transition style name.
// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function oi(t){return"string"==typeof t?document.getElementById(t):t}
// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function si(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}
// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function ri(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}
// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function ai(t){var i=t.parentNode;i&&i.removeChild(t)}
// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function hi(t){for(;t.firstChild;)t.removeChild(t.firstChild)}
// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function ui(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}
// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function li(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}
// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function ci(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=mi(t);return 0<e.length&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}
// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function _i(t,i){if(void 0!==t.classList)for(var e=d(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!ci(t,i)){var s=mi(t);pi(t,(s?s+" ":"")+i)}}
// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function di(t,i){void 0!==t.classList?t.classList.remove(i):pi(t,_((" "+mi(t)+" ").replace(" "+i+" "," ")))}
// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function pi(t,i){void 0===t.className.baseVal?t.className=i:
// in case of SVG element
t.className.baseVal=i}
// @function getClass(el: HTMLElement): String
// Returns the element's class.
function mi(t){
// Check if the element is an SVGElementInstance and use the correspondingElement instead
// (Required for linked SVG elements in IE11.)
return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}
// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function fi(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&function(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";
// filters collection throws an error if we try to retrieve a filter that doesn't exist
try{e=t.filters.item(n)}catch(t){
// don't set opacity to 1 if we haven't already set an opacity,
// it isn't needed and breaks transparent pngs.
if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}
// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
(t,i)}function gi(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}
// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function vi(t,i,e){var n=i||new B(0,0);t.style[ii]=(ft?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}
// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function yi(t,i){
/*eslint-disable */
t._leaflet_pos=i,
/* eslint-enable */
yt?vi(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}
// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function xi(t){
// this method is only used for elements previously positioned using setPosition,
// so it's safe to cache the position for performance
return t._leaflet_pos||new B(0,0)}
// @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.
// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
if("onselectstart"in document)Xt=function(){Si(window,"selectstart",Ni)},Jt=function(){Ei(window,"selectstart",Ni)};else{var wi=gi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Xt=function(){if(wi){var t=document.documentElement.style;$t=t[wi],t[wi]="none"}},Jt=function(){wi&&(document.documentElement.style[wi]=$t,$t=void 0)}}
// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function Pi(){Si(window,"dragstart",Ni)}
// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function Li(){Ei(window,"dragstart",Ni)}
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function bi(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Ti(),ti=(Qt=t).style.outline,t.style.outline="none",Si(window,"keydown",Ti))}
// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function Ti(){Qt&&(Qt.style.outline=ti,ti=Qt=void 0,Ei(window,"keydown",Ti))}
// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function zi(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}
// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function Mi(t){var i=t.getBoundingClientRect();// Read-only in old browsers.
return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}var Ci=(Object.freeze||Object)({TRANSFORM:ii,TRANSITION:ei,TRANSITION_END:ni,get:oi,getStyle:si,create:ri,remove:ai,empty:hi,toFront:ui,toBack:li,hasClass:ci,addClass:_i,removeClass:di,setClass:pi,getClass:mi,setOpacity:fi,testProp:gi,setTransform:vi,setPosition:yi,getPosition:xi,disableTextSelection:Xt,enableTextSelection:Jt,disableImageDrag:Pi,enableImageDrag:Li,preventOutline:bi,restoreOutline:Ti,getSizedParentNode:zi,getScale:Mi});
/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */
// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function Si(t,i,e,n){if("object"==typeof i)for(var o in i)Bi(t,o,i[o],e);else for(var s=0,r=(i=d(i)).length;s<r;s++)Bi(t,i[s],e,n);return this}var Zi="_leaflet_events";
// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function Ei(t,i,e,n){if("object"==typeof i)for(var o in i)Ai(t,o,i[o],e);else if(i)for(var s=0,r=(i=d(i)).length;s<r;s++)Ai(t,i[s],e,n);else{for(var a in t[Zi])Ai(t,a,t[Zi][a]);delete t[Zi]}return this}function ki(){
// See https://github.com/w3c/pointerevents/issues/171
if(bt)return!(nt||_t)}function Bi(i,t,e,n){var o=t+u(e)+(n?"_"+u(n):"");if(i[Zi]&&i[Zi][o])return this;var s=function(t){return e.call(n||i,t||window.event)},r=s;bt&&0===t.indexOf("touch")?
// Needs DomEvent.Pointer.js
Ht(i,t,s,o):Tt&&"dblclick"===t&&!ki()?
// inspired by Zepto touch code by Thomas Fuchs
function(t,o,i){var s,r,a=!1;function e(t){if(bt){if(!t.isPrimary)return;if("mouse"===t.pointerType)return;// mouse fires native dblclick
}else if(1<t.touches.length)return;var i=Date.now(),e=i-(s||i);r=t.touches?t.touches[0]:t,a=0<e&&e<=250,s=i}function n(t){if(a&&!r.cancelBubble){if(bt){if("mouse"===t.pointerType)return;
// work around .type being readonly with MSPointer* events
var i,e,n={};for(e in r)i=r[e],n[e]=i&&i.bind?i.bind(r):i;r=n}r.type="dblclick",r.button=0,o(r),s=null}}t[Yt+Gt+i]=e,t[Yt+Kt+i]=n,t[Yt+"dblclick"+i]=o,t.addEventListener(Gt,e,!!St&&{passive:!1}),t.addEventListener(Kt,n,!!St&&{passive:!1}),
// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
// the browser doesn't fire touchend/pointerup events but does fire
// native dblclicks. See #4127.
// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
t.addEventListener("dblclick",o,!1)}(i,s,o):"addEventListener"in i?"mousewheel"===t?i.addEventListener("onwheel"in i?"wheel":"mousewheel",s,!!St&&{passive:!1}):"touchstart"===t||"touchend"===t?i.addEventListener(t,s,!!St&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?(s=function(t){t=t||window.event,qi(i,t)&&r(t)},i.addEventListener("mouseenter"===t?"mouseover":"mouseout",s,!1)):i.addEventListener(t,r,!1):"attachEvent"in i&&i.attachEvent("on"+t,s),i[Zi]=i[Zi]||{},i[Zi][o]=s}function Ai(t,i,e,n){var o=i+u(e)+(n?"_"+u(n):""),s=t[Zi]&&t[Zi][o];if(!s)return this;bt&&0===i.indexOf("touch")?function(t,i,e){var n=t["_leaflet_"+i+e];"touchstart"===i?t.removeEventListener(It,n,!1):"touchmove"===i?t.removeEventListener(Ot,n,!1):"touchend"===i&&(t.removeEventListener(Rt,n,!1),t.removeEventListener(Nt,n,!1))}(t,i,o):Tt&&"dblclick"===i&&!ki()?function(t,i){var e=t[Yt+Gt+i],n=t[Yt+Kt+i],o=t[Yt+"dblclick"+i];t.removeEventListener(Gt,e,!!St&&{passive:!1}),t.removeEventListener(Kt,n,!!St&&{passive:!1}),t.removeEventListener("dblclick",o,!1)}(t,o):"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",s,!!St&&{passive:!1}):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,s,!1):"detachEvent"in t&&t.detachEvent("on"+i,s),t[Zi][o]=null}
// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function Ii(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?// In case of Leaflet event.
t.originalEvent._stopped=!0:t.cancelBubble=!0,Vi(t),this}
// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
function Oi(t){return Bi(t,"mousewheel",Ii),this}
// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function Ri(t){return Si(t,"mousedown touchstart dblclick",Ii),Bi(t,"click",Ui),this}
// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function Ni(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}
// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function Di(t){return Ni(t),Ii(t),this}
// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function ji(t,i){if(!i)return new B(t.clientX,t.clientY);var e=Mi(i),n=e.boundingClientRect;// left and top  values are in page scale (like the event clientX/Y)
return new B(
// offset.left/top values are in page scale (like clientX/Y),
// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
(t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}
// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels
var Wi=mt&&lt?2*window.devicePixelRatio:ct?window.devicePixelRatio:1;
// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function Hi(t){return nt?t.wheelDeltaY/2:// Don't trust window-geometry-based delta
t.deltaY&&0===t.deltaMode?-t.deltaY/Wi:// Pixels
t.deltaY&&1===t.deltaMode?20*-t.deltaY:// Lines
t.deltaY&&2===t.deltaMode?60*-t.deltaY:// Pages
t.deltaX||t.deltaZ?0:// Skip horizontal/depth wheel events
t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:// Legacy IE pixels
t.detail&&Math.abs(t.detail)<32765?20*-t.detail:// Legacy Moz lines
t.detail?t.detail/-32765*60:// Legacy Moz pages
0}var Fi={};function Ui(t){
// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
Fi[t.type]=!0}function Vi(t){var i=Fi[t.type];
// reset when checking, as it's only used in map container and propagates outside of the map
return Fi[t.type]=!1,i}
// check if element really left/entered the event target (for mouseenter/mouseleave)
function qi(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}var Gi=(Object.freeze||Object)({on:Si,off:Ei,stopPropagation:Ii,disableScrollPropagation:Oi,disableClickPropagation:Ri,preventDefault:Ni,stop:Di,getMousePosition:ji,getWheelDelta:Hi,fakeStop:Ui,skipped:Vi,isExternalTarget:qi,addListener:Si,removeListener:Ei}),Ki=k.extend({
// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
// Run an animation of a given element to a new position, optionally setting
// duration in seconds (`0.25` by default) and easing linearity factor (3rd
// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
// `0.5` by default).
run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=xi(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,
// @event start: Event
// Fired when the animation starts
this.fire("start"),this._animate()},
// @method stop()
// Stops the animation (if currently running).
stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){
// animation loop
this._animId=M(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),yi(this._el,e),
// @event step: Event
// Fired continuously during the animation.
this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,
// @event end: Event
// Fired when the animation ends.
this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Yi=k.extend({options:{
// @section Map State Options
// @option crs: CRS = L.CRS.EPSG3857
// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
// sure what it means.
crs:X,
// @option center: LatLng = undefined
// Initial geographic center of the map
center:void 0,
// @option zoom: Number = undefined
// Initial map zoom level
zoom:void 0,
// @option minZoom: Number = *
// Minimum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the lowest of their `minZoom` options will be used instead.
minZoom:void 0,
// @option maxZoom: Number = *
// Maximum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the highest of their `maxZoom` options will be used instead.
maxZoom:void 0,
// @option layers: Layer[] = []
// Array of layers that will be added to the map initially
layers:[],
// @option maxBounds: LatLngBounds = null
// When this option is set, the map restricts the view to the given
// geographical bounds, bouncing the user back if the user tries to pan
// outside the view. To set the restriction dynamically, use
// [`setMaxBounds`](#map-setmaxbounds) method.
maxBounds:void 0,
// @option renderer: Renderer = *
// The default method for drawing vector layers on the map. `L.SVG`
// or `L.Canvas` by default depending on browser support.
renderer:void 0,
// @section Animation Options
// @option zoomAnimation: Boolean = true
// Whether the map zoom animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
zoomAnimation:!0,
// @option zoomAnimationThreshold: Number = 4
// Won't animate zoom if the zoom difference exceeds this value.
zoomAnimationThreshold:4,
// @option fadeAnimation: Boolean = true
// Whether the tile fade animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
fadeAnimation:!0,
// @option markerZoomAnimation: Boolean = true
// Whether markers animate their zoom with the zoom animation, if disabled
// they will disappear for the length of the animation. By default it's
// enabled in all browsers that support CSS3 Transitions except Android.
markerZoomAnimation:!0,
// @option transform3DLimit: Number = 2^23
// Defines the maximum size of a CSS translation transform. The default
// value should not be changed unless a web browser positions layers in
// the wrong place after doing a large `panBy`.
transform3DLimit:8388608,// Precision limit of a 32-bit float
// @section Interaction Options
// @option zoomSnap: Number = 1
// Forces the map's zoom level to always be a multiple of this, particularly
// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
// By default, the zoom level snaps to the nearest integer; lower values
// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
zoomSnap:1,
// @option zoomDelta: Number = 1
// Controls how much the map's zoom level will change after a
// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
zoomDelta:1,
// @option trackResize: Boolean = true
// Whether the map automatically handles browser window resize to update itself.
trackResize:!0},initialize:function(t,i){// (HTMLElement or String, Object)
i=p(this,i),
// Make sure to assign internal flags at the beginning,
// to avoid inconsistent state in some edge cases.
this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),
// hack for https://github.com/Leaflet/Leaflet/issues/1980
this._onResize=a(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(W(i.center),i.zoom,{reset:!0}),this.callInitHooks(),
// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
this._zoomAnimated=ei&&yt&&!zt&&this.options.zoomAnimation,
// zoom transitions run with the same duration for all layers, so if one of transitionend events
// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
this._zoomAnimated&&(this._createAnimProxy(),Si(this._proxy,ni,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},
// @section Methods for modifying map state
// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) with the given
// animation options.
setView:function(t,i,e){if((i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(W(t),i,this.options.maxBounds),e=e||{},this._stop(),this._loaded&&!e.reset&&!0!==e)&&(void 0!==e.animate&&(e.zoom=h({animate:e.animate},e.zoom),e.pan=h({animate:e.animate,duration:e.duration},e.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,e.zoom):this._tryAnimatedPan(t,e.pan)))
// prevent resize handler call, the view will refresh after animation anyway
return clearTimeout(this._sizeTimer),this;
// animation didn't start, just reset the map view
return this._resetView(t,i),this},
// @method setZoom(zoom: Number, options?: Zoom/pan options): this
// Sets the zoom of the map.
setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},
// @method zoomIn(delta?: Number, options?: Zoom options): this
// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomIn:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},
// @method zoomOut(delta?: Number, options?: Zoom options): this
// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomOut:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},
// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified geographical point on the map
// stationary (e.g. used internally for scroll zoom and double-click zoom).
// @alternative
// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof B?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():D(t);var e=I(i.paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},
// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets a map view that contains the given geographical bounds with the
// maximum zoom level possible.
fitBounds:function(t,i){if(!(t=D(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},
// @method fitWorld(options?: fitBounds options): this
// Sets a map view that mostly contains the whole world with the maximum
// zoom level possible.
fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},
// @method panTo(latlng: LatLng, options?: Pan options): this
// Pans the map to a given center.
panTo:function(t,i){// (LatLng)
return this.setView(t,this._zoom,{pan:i})},
// @method panBy(offset: Point, options?: Pan options): this
// Pans the map by a given number of pixels (animated).
panBy:function(t,i){if(i=i||{},!(t=I(t).round()).x&&!t.y)return this.fire("moveend");
// If we pan too far, Chrome gets issues with tiles
// and makes them disappear or appear in the wrong place (slightly offset) #2602
if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;
// animate pan unless animate: false specified
if(this._panAnim||(this._panAnim=new Ki,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),
// don't fire movestart if animating inertia
i.noMoveStart||this.fire("movestart"),!1!==i.animate){_i(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},
// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) performing a smooth
// pan-zoom animation.
flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!yt)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),i=this.getSize(),a=this._zoom;n=W(n),o=void 0===o?a:o;var h=Math.max(i.x,i.y),u=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,c=1.42,_=c*c;function e(t){var i=(u*u-h*h+(t?-1:1)*_*_*l*l)/(2*(t?u:h)*_*l),e=Math.sqrt(i*i+1)-i;
// workaround for floating point precision bug when sq = 0, log = -Infinite,
// thus triggering an infinite loop in flyTo
return e<1e-9?-18:Math.log(e)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=e(0);function f(t){return h*(p(m)*function(t){return d(t)/p(t)}(m+c*t)-d(m))/_}var g=Date.now(),v=(e(1)-m)/c,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var i=(Date.now()-g)/y,e=function(t){return 1-Math.pow(1-t,1.5)}(i)*v;i<=1?(this._flyToFrame=M(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e)/l)),a),this.getScaleZoom(h/function(t){return h*(p(m)/p(m+c*t))}(e),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},
// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},
// @method setMaxBounds(bounds: LatLngBounds): this
// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
setMaxBounds:function(t){return(t=D(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},
// @method setMinZoom(zoom: Number): this
// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},
// @method setMaxZoom(zoom: Number): this
// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},
// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,D(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},
// @method panInside(latlng: LatLng, options?: options): this
// Pans the map the minimum amount to make the `latlng` visible. Use
// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
// If `latlng` is already within the (optionally padded) display bounds,
// the map will not be panned.
panInside:function(t,i){var e=I((i=i||{}).paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getCenter(),s=this.project(o),r=this.project(t),a=this.getPixelBounds(),h=a.getSize().divideBy(2),u=R([a.min.add(e),a.max.subtract(n)]);if(!u.contains(r)){this._enforcingBounds=!0;var l=s.subtract(r),c=I(r.x+l.x,r.y+l.y);(r.x<u.min.x||r.x>u.max.x)&&(c.x=s.x-l.x,0<l.x?c.x+=h.x-e.x:c.x-=h.x-n.x),(r.y<u.min.y||r.y>u.max.y)&&(c.y=s.y-l.y,0<l.y?c.y+=h.y-e.y:c.y-=h.y-n.y),this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},
// @method invalidateSize(options: Zoom/pan options): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default. If `options.pan` is `false`, panning will not occur.
// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
// that it doesn't happen often even if the method is called many
// times in a row.
// @alternative
// @method invalidateSize(animate: Boolean): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default.
invalidateSize:function(t){if(!this._loaded)return this;t=h({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var e=this.getSize(),n=i.divideBy(2).round(),o=e.divideBy(2).round(),s=n.subtract(o);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:e})):this},
// @section Methods for modifying map state
// @method stop(): this
// Stops the currently running `panTo` or `flyTo` animation, if any.
stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},
// @section Geolocation methods
// @method locate(options?: Locate options): this
// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
// and optionally sets the map view to the user's location with respect to
// detection accuracy (or to the world view if geolocation failed).
// Note that, if your page doesn't use HTTPS, this method will fail in
// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
// See `Locate options` for more details.
locate:function(t){if(t=this._locateOptions=h({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=a(this._handleGeolocationResponse,this),e=a(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,e,t):navigator.geolocation.getCurrentPosition(i,e,t),this},
// @method stopLocate(): this
// Stops watching location previously initiated by `map.locate({watch: true})`
// and aborts resetting the map view if map.locate was called with
// `{setView: true}`.
stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),
// @section Location events
// @event locationerror: ErrorEvent
// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new j(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);
// @event locationfound: LocationEvent
// Fired when geolocation (using the [`locate`](#map-locate) method)
// went successfully.
this.fire("locationfound",s)},
// TODO Appropriate docs section?
// @section Other Methods
// @method addHandler(name: String, HandlerClass: Function): this
// Adds a new `Handler` to the map, given its name and constructor function.
addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},
// @method remove(): this
// Destroys the map and clears all related event listeners.
remove:function(){if(this._initEvents(!0),this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{
// throws error in IE6-8
delete this._container._leaflet_id,delete this._containerId}catch(t){
/*eslint-disable */
this._container._leaflet_id=void 0,
/* eslint-enable */
this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ai(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&
// @section Map state change events
// @event unload: Event
// Fired when the map is destroyed with [remove](#map-remove) method.
this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)ai(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},
// @section Other Methods
// @method createPane(name: String, container?: HTMLElement): HTMLElement
// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
// then returns it. The pane is created as a child of `container`, or
// as a child of the main map pane if not set.
createPane:function(t,i){var e=ri("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},
// @section Methods for Getting Map State
// @method getCenter(): LatLng
// Returns the geographical center of the map view
getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},
// @method getZoom(): Number
// Returns the current zoom level of the map view
getZoom:function(){return this._zoom},
// @method getBounds(): LatLngBounds
// Returns the geographical bounds visible in the current map view
getBounds:function(){var t=this.getPixelBounds();return new N(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},
// @method getMinZoom(): Number
// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},
// @method getMaxZoom(): Number
// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},
// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
getBoundsZoom:function(t,i,e){// (LatLngBounds[, Boolean, Point]) -> Number
t=D(t),e=I(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=R(this.project(a,n),this.project(r,n)).getSize(),l=yt?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),// don't jump if within 1% of a snap level
n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},
// @method getSize(): Point
// Returns the current size of the map container (in pixels).
getSize:function(){return this._size&&!this._sizeChanged||(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},
// @method getPixelBounds(): Bounds
// Returns the bounds of the current map view in projected pixel
// coordinates (sometimes useful in layer and overlay implementations).
getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new O(e,e.add(this.getSize()))},
// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
// the map pane? "left point of the map layer" can be confusing, specially
// since there can be negative offsets.
// @method getPixelOrigin(): Point
// Returns the projected pixel coordinates of the top left point of
// the map layer (useful in custom layer and overlay implementations).
getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},
// @method getPixelWorldBounds(zoom?: Number): Bounds
// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
// If `zoom` is omitted, the map's current zoom level is used.
getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},
// @section Other Methods
// @method getPane(pane: String|HTMLElement): HTMLElement
// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
getPane:function(t){return"string"==typeof t?this._panes[t]:t},
// @method getPanes(): Object
// Returns a plain object containing the names of all [panes](#map-pane) as keys and
// the panes as values.
getPanes:function(){return this._panes},
// @method getContainer: HTMLElement
// Returns the HTML element that contains the map.
getContainer:function(){return this._container},
// @section Conversion Methods
// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
// Returns the scale factor to be applied to a map transition from zoom level
// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
getZoomScale:function(t,i){
// TODO replace with universal implementation after refactoring projections
var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},
// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},
// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(W(t),i)},
// @method unproject(point: Point, zoom: Number): LatLng
// Inverse of [`project`](#map-project).
unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(I(t),i)},
// @method layerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding geographical coordinate (for the current zoom level).
layerPointToLatLng:function(t){var i=I(t).add(this.getPixelOrigin());return this.unproject(i)},
// @method latLngToLayerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the [origin pixel](#map-getpixelorigin).
latLngToLayerPoint:function(t){return this.project(W(t))._round()._subtract(this.getPixelOrigin())},
// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
// CRS's bounds.
// By default this means longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees.
wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},
// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring that
// its center is within the CRS's bounds.
// By default this means the center longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees, and the majority of the bounds
// overlaps the CRS's bounds.
wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(D(t))},
// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates according to
// the map's CRS. By default this measures distance in meters.
distance:function(t,i){return this.options.crs.distance(W(t),W(i))},
// @method containerPointToLayerPoint(point: Point): Point
// Given a pixel coordinate relative to the map container, returns the corresponding
// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
containerPointToLayerPoint:function(t){// (Point)
return I(t).subtract(this._getMapPanePos())},
// @method layerPointToContainerPoint(point: Point): Point
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding pixel coordinate relative to the map container.
layerPointToContainerPoint:function(t){// (Point)
return I(t).add(this._getMapPanePos())},
// @method containerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the map container, returns
// the corresponding geographical coordinate (for the current zoom level).
containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(i)},
// @method latLngToContainerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the map container.
latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},
// @method mouseEventToContainerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to the
// map container where the event took place.
mouseEventToContainerPoint:function(t){return ji(t,this._container)},
// @method mouseEventToLayerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to
// the [origin pixel](#map-getpixelorigin) where the event took place.
mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},
// @method mouseEventToLatLng(ev: MouseEvent): LatLng
// Given a MouseEvent object, returns geographical coordinate where the
// event took place.
mouseEventToLatLng:function(t){// (MouseEvent)
return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},
// map initialization methods
_initContainer:function(t){var i=this._container=oi(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");Si(i,"scroll",this._onScroll,this),this._containerId=u(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&yt,_i(t,"leaflet-container"+(Tt?" leaflet-touch":"")+(Ct?" leaflet-retina":"")+(et?" leaflet-oldie":"")+(_t?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=si(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},
// @section
//
// Panes are DOM elements used to control the ordering of layers on the map. You
// can access panes with [`map.getPane`](#map-getpane) or
// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
// [`map.createPane`](#map-createpane) method.
//
// Every map has the following default panes that differ only in zIndex.
//
// @pane mapPane: HTMLElement = 'auto'
// Pane that contains all other map panes
this._mapPane=this.createPane("mapPane",this._container),yi(this._mapPane,new B(0,0)),
// @pane tilePane: HTMLElement = 200
// Pane for `GridLayer`s and `TileLayer`s
this.createPane("tilePane"),
// @pane overlayPane: HTMLElement = 400
// Pane for overlay shadows (e.g. `Marker` shadows)
this.createPane("shadowPane"),
// @pane shadowPane: HTMLElement = 500
// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
this.createPane("overlayPane"),
// @pane markerPane: HTMLElement = 600
// Pane for `Icon`s of `Marker`s
this.createPane("markerPane"),
// @pane tooltipPane: HTMLElement = 650
// Pane for `Tooltip`s.
this.createPane("tooltipPane"),
// @pane popupPane: HTMLElement = 700
// Pane for `Popup`s.
this.createPane("popupPane"),this.options.markerZoomAnimation||(_i(t.markerPane,"leaflet-zoom-hide"),_i(t.shadowPane,"leaflet-zoom-hide"))},
// private methods that modify map state
// @section Map state change events
_resetView:function(t,i){yi(this._mapPane,new B(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),
// @event viewreset: Event
// Fired when the map needs to redraw its content (this usually happens
// on map zoom or load). Very useful for creating custom overlays.
this.fire("viewreset"),
// @event load: Event
// Fired when the map is initialized (when its center and zoom are set
// for the first time).
e&&this.fire("load")},_moveStart:function(t,i){
// @event zoomstart: Event
// Fired when the map zoom is about to change (e.g. before zoom animation).
// @event movestart: Event
// Fired when the view of the map starts changing (e.g. user starts dragging the map).
return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;
// @event move: Event
// Fired repeatedly during any movement of the map, including pan and
// fly animations.
return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),
// @event zoom: Event
// Fired repeatedly during any change in zoom level, including zoom
// and fly animations.
(n||e&&e.pinch)&&// Always fire 'zoom' if pinching because #3530
this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){
// @event moveend: Event
// Fired when the center of the map stops changing (e.g. user stopped
// dragging the map).
// @event zoomend: Event
// Fired when the map has changed, after any animations.
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){yi(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},
// DOM event handling
// @section Interaction events
_initEvents:function(t){this._targets={};var i=t?Ei:Si;
// @event click: MouseEvent
// Fired when the user clicks (or taps) the map.
// @event dblclick: MouseEvent
// Fired when the user double-clicks (or double-taps) the map.
// @event mousedown: MouseEvent
// Fired when the user pushes the mouse button on the map.
// @event mouseup: MouseEvent
// Fired when the user releases the mouse button on the map.
// @event mouseover: MouseEvent
// Fired when the mouse enters the map.
// @event mouseout: MouseEvent
// Fired when the mouse leaves the map.
// @event mousemove: MouseEvent
// Fired while the mouse moves over the map.
// @event contextmenu: MouseEvent
// Fired when the user pushes the right mouse button on the map, prevents
// default browser context menu from showing if there are listeners on
// this event. Also fired on mobile when the user holds a single touch
// for a second (also called long press).
// @event keypress: KeyboardEvent
// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
// @event keydown: KeyboardEvent
// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
// the `keydown` event is fired for keys that produce a character value and for keys
// that do not produce a character value.
// @event keyup: KeyboardEvent
// Fired when the user releases a key from the keyboard while the map is focused.
i((this._targets[u(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),yt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=M(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&
// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,n=[],o="mouseout"===i||"mouseover"===i,s=t.target||t.srcElement,r=!1;s;){if((e=this._targets[u(s)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){
// Prevent firing click after you just dragged an object.
r=!0;break}if(e&&e.listens(i,!0)){if(o&&!qi(s,t))break;if(n.push(e),o)break}if(s===this._container)break;s=s.parentNode}return n.length||r||o||!qi(s,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Vi(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i&&"keyup"!==i&&"keydown"!==i||
// prevents outline when clicking on keyboard-focusable element
bi(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,e){if("click"===t.type){
// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
// @event preclick: MouseEvent
// Fired before mouse click on the map (sometimes useful when you
// want something to happen on click before any existing click
// handlers start running).
var n=h({},t);n.type="preclick",this._fireDOMEvent(n,n.type,e)}if(!t._stopped&&(
// Find the layer the event is propagating from and its parents.
e=(e||[]).concat(this._findEventTargets(t,i))).length){var o=e[0];"contextmenu"===i&&o.listens(i,!0)&&Ni(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var r=o.getLatLng&&(!o._radius||o._radius<=10);s.containerPoint=r?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=r?o.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var a=0;a<e.length;a++)if(e[a].fire(i,s,!0),s.originalEvent._stopped||!1===e[a].options.bubblingMouseEvents&&-1!==y(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},
// @section Other Methods
// @method whenReady(fn: Function, context?: Object): this
// Runs the given function `fn` when the map gets initialized with
// a view (center and zoom) and at least one layer, or immediately
// if it's already initialized, optionally passing a function context.
whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},
// private methods for getting map state
_getMapPanePos:function(){return xi(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return R([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},
// layer point of the current center
_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},
// offset of the specified place to the current center in pixels
_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},
// adjust center for view to get inside bounds
_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new O(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);
// If offset is less than a pixel, ignore.
// This prevents unstable projections from getting into
// an infinite loop of tiny offsets.
return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},
// adjust offset for view to get inside bounds
_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new O(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},
// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
_getBoundsOffset:function(t,i,e){var n=R(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new B(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return 0<t+i?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=yt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){di(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){
// difference between the new and current centers in pixels
var e=this._getCenterOffset(t)._trunc();
// don't animate too far unless animate: true specified in options
return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=ri("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ii,e=this._proxy.style[i];vi(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),
// workaround for case when transform is the same and so transitionend event is not fired
e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ai(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),i=this.getZoom();vi(this._proxy,this.project(t,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;
// don't animate if disabled, not supported or zoom difference is too large
if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;
// offset is the pixel coords of the zoom origin relative to the current center
var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);
// don't animate if the zoom origin isn't within one screen from the current center, unless forced
return!(!0!==e.animate&&!this.getSize().contains(o))&&(M(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,e,n){this._mapPane&&(e&&(this._animatingZoom=!0,
// remember what center/zoom to set after animation
this._animateToCenter=t,this._animateToZoom=i),
// @section Other Events
// @event zoomanim: ZoomAnimEvent
// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
this.fire("zoomanim",{center:t,zoom:i,noUpdate:n}),
// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane,this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),
// This anim frame should prevent an obscure iOS webkit tile loading race condition.
M(function(){this._moveEnd(!0)},this))}});
/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */function Xi(t){return new Ji(t)}
/*
 * @class Control
 * @aka L.Control
 * @inherits Class
 *
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */
var Ji=Z.extend({
// @section
// @aka Control options
options:{
// @option position: String = 'topright'
// The position of the control (one of the map corners). Possible values are `'topleft'`,
// `'topright'`, `'bottomleft'` or `'bottomright'`
position:"topright"},initialize:function(t){p(this,t)},
/* @section
	 * Classes extending L.Control will inherit the following methods:
	 *
	 * @method getPosition: string
	 * Returns the position of the control.
	 */
getPosition:function(){return this.options.position},
// @method setPosition(position: string): this
// Sets the position of the control.
setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},
// @method getContainer: HTMLElement
// Returns the HTMLElement that contains the control.
getContainer:function(){return this._container},
// @method addTo(map: Map): this
// Adds the control to the given map.
addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return _i(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this._map.on("unload",this.remove,this),this},
// @method remove: this
// Removes the control from the map it is currently active on.
remove:function(){return this._map&&(ai(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){
// if map exists and event is not a keyboard event
this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}});
/* @section Extension methods
 * @uninheritable
 *
 * Every control should extend from `L.Control` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): HTMLElement
 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
 *
 * @method onRemove(map: Map)
 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
 */
/* @namespace Map
 * @section Methods for Layers and Controls
 */
Yi.include({
// @method addControl(control: Control): this
// Adds the given control to the map
addControl:function(t){return t.addTo(this),this},
// @method removeControl(control: Control): this
// Removes the given control from the map
removeControl:function(t){return t.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",s=this._controlContainer=ri("div",o+"control-container",this._container);function t(t,i){var e=o+t+" "+o+i;n[t+i]=ri("div",e,s)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ai(this._controlCorners[t]);ai(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});
/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```js
 * var baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * var overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```js
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```js
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */
var $i=Ji.extend({
// @section
// @aka Control.Layers options
options:{
// @option collapsed: Boolean = true
// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
collapsed:!0,position:"topright",
// @option autoZIndex: Boolean = true
// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
autoZIndex:!0,
// @option hideSingleBase: Boolean = false
// If `true`, the base layers in the control will be hidden when there is only one.
hideSingleBase:!1,
// @option sortLayers: Boolean = false
// Whether to sort the layers. When `false`, layers will keep the order
// in which they were added to the control.
sortLayers:!1,
// @option sortFunction: Function = *
// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// that will be used for sorting the layers, when `sortLayers` is `true`.
// The function receives both the `L.Layer` instances and their names, as in
// `sortFunction(layerA, layerB, nameA, nameB)`.
// By default, it sorts layers alphabetically by their name.
sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){for(var n in p(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){
// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
return Ji.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},
// @method addBaseLayer(layer: Layer, name: String): this
// Adds a base layer (radio button entry) with the given name to the control.
addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},
// @method addOverlay(layer: Layer, name: String): this
// Adds an overlay (checkbox entry) with the given name to the control.
addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},
// @method removeLayer(layer: Layer): this
// Remove the given layer from the control.
removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(u(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},
// @method expand(): this
// Expand the control container if collapsed.
expand:function(){_i(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(_i(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):di(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},
// @method collapse(): this
// Collapse the control container if expanded.
collapse:function(){return di(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ri("div",t),e=this.options.collapsed;
// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
i.setAttribute("aria-haspopup",!0),Ri(i),Oi(i);var n=this._section=ri("section",t+"-list");e&&(this._map.on("click",this.collapse,this),st||Si(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=ri("a",t+"-toggle",i);o.href="#",o.title="Layers",Tt?(Si(o,"click",Di),Si(o,"click",this.expand,this)):Si(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=ri("div",t+"-base",n),this._separator=ri("div",t+"-separator",n),this._overlaysList=ri("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&u(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(a(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;hi(this._baseLayersList),hi(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;
// Hide base layers section if there's only one layer.
return this.options.hideSingleBase&&(t=t&&1<o,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(u(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;
// @namespace Map
// @section Layer events
// @event baselayerchange: LayersControlEvent
// Fired when the base layer is changed through the [layers control](#control-layers).
// @event overlayadd: LayersControlEvent
// Fired when an overlay is selected through the [layers control](#control-layers).
// @event overlayremove: LayersControlEvent
// Fired when an overlay is deselected through the [layers control](#control-layers).
// @namespace Control.Layers
e&&this._map.fire(e,i)},
// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+u(this),n),this._layerControlInputs.push(i),i.layerId=u(t.layer),Si(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;
// Helps from preventing layer control flicker when checkboxes are disabled
// https://github.com/Leaflet/Leaflet/issues/2771
var s=document.createElement("div");return e.appendChild(s),s.appendChild(i),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;0<=s;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);
// Bugfix issue 2318: Should remove all old layers before readding new ones
for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;0<=o;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){
// Backward compatibility, remove me in 1.1.
return this.expand()},_collapse:function(){
// Backward compatibility, remove me in 1.1.
return this.collapse()}}),Qi=Ji.extend({
// @section
// @aka Control.Zoom options
options:{position:"topleft",
// @option zoomInText: String = '+'
// The text set on the 'zoom in' button.
zoomInText:"+",
// @option zoomInTitle: String = 'Zoom in'
// The title set on the 'zoom in' button.
zoomInTitle:"Zoom in",
// @option zoomOutText: String = '&#x2212;'
// The text set on the 'zoom out' button.
zoomOutText:"&#x2212;",
// @option zoomOutTitle: String = 'Zoom out'
// The title set on the 'zoom out' button.
zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=ri("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=ri("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,
/*
		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
		 */
s.setAttribute("role","button"),s.setAttribute("aria-label",i),Ri(s),Si(s,"click",Di),Si(s,"click",o,this),Si(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";di(this._zoomInButton,i),di(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMinZoom()||_i(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMaxZoom()||_i(this._zoomInButton,i)}});
// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Yi.mergeOptions({zoomControl:!0}),Yi.addInitHook(function(){this.options.zoomControl&&(
// @section Controls
// @property zoomControl: Control.Zoom
// The default zoom control (only available if the
// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
this.zoomControl=new Qi,this.addControl(this.zoomControl))});
// @namespace Control.Zoom
// @factory L.control.zoom(options: Control.Zoom options)
// Creates a zoom control
var te=Ji.extend({
// @section
// @aka Control.Scale options
options:{position:"bottomleft",
// @option maxWidth: Number = 100
// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
maxWidth:100,
// @option metric: Boolean = True
// Whether to show the metric scale line (m/km).
metric:!0,
// @option imperial: Boolean = True
// Whether to show the imperial scale line (mi/ft).
imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=ri("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=ri("div",i,e)),t.imperial&&(this._iScale=ri("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;5280<o?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return i*(e=10<=e?10:5<=e?5:3<=e?3:2<=e?2:1)}}),ie=Ji.extend({
// @section
// @aka Control.Attribution options
options:{position:"bottomright",
// @option prefix: String = 'Leaflet'
// The HTML text shown before the attributions. Pass `false` to disable.
prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){
// TODO ugly, refactor
for(var i in(t.attributionControl=this)._container=ri("div","leaflet-control-attribution"),Ri(this._container),t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},
// @method setPrefix(prefix: String): this
// Sets the text before the attributions.
setPrefix:function(t){return this.options.prefix=t,this._update(),this},
// @method addAttribution(text: String): this
// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},
// @method removeAttribution(text: String): this
// Removes an attribution text.
removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});
/*
 * @class Control.Scale
 * @aka L.Control.Scale
 * @inherits Control
 *
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
 *
 * @example
 *
 * ```js
 * L.control.scale().addTo(map);
 * ```
 */
// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Yi.mergeOptions({attributionControl:!0}),Yi.addInitHook(function(){this.options.attributionControl&&(new ie).addTo(this)});Ji.Layers=$i,Ji.Zoom=Qi,Ji.Scale=te,Ji.Attribution=ie,Xi.layers=function(t,i,e){return new $i(t,i,e)},Xi.zoom=function(t){return new Qi(t)},Xi.scale=function(t){return new te(t)},Xi.attribution=function(t){return new ie(t)};
/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/
// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers
var ee=Z.extend({initialize:function(t){this._map=t},
// @method enable(): this
// Enables the handler
enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},
// @method disable(): this
// Disables the handler
disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},
// @method enabled(): Boolean
// Returns `true` if the handler is enabled
enabled:function(){return!!this._enabled}
// @section Extension methods
// Classes inheriting from `Handler` must implement the two following methods:
// @method addHooks()
// Called when the handler is enabled, should add event hooks.
// @method removeHooks()
// Called when the handler is disabled, should remove the event hooks added previously.
});
// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
ee.addTo=function(t,i){return t.addHandler(i,this),this};var ne,oe={Events:E},se=Tt?"touchstart mousedown":"mousedown",re={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},ae={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},he=k.extend({options:{
// @section
// @aka Draggable options
// @option clickTolerance: Number = 3
// The max number of pixels a user can shift the mouse pointer during a click
// for it to be considered a valid click (as opposed to a mouse drag).
clickTolerance:3},
// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
initialize:function(t,i,e,n){p(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},
// @method enable()
// Enables the dragging ability
enable:function(){this._enabled||(Si(this._dragStartTarget,se,this._onDown,this),this._enabled=!0)},
// @method disable()
// Disables the dragging ability
disable:function(){this._enabled&&(
// If we're currently dragging this draggable,
// disabling it counts as first ending the drag.
he._dragging===this&&this.finishDrag(),Ei(this._dragStartTarget,se,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){
// Ignore simulated events, since we handle both touch and
// mouse explicitly; otherwise we risk getting duplicates of
// touch events, see #4315.
// Also ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!t._simulated&&this._enabled&&(this._moved=!1,!ci(this._element,"leaflet-zoom-anim")&&!(he._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(// Prevent dragging multiple objects at once.
(he._dragging=this)._preventOutline&&bi(this._element),Pi(),Xt(),this._moving)))){
// @event down: Event
// Fired when a drag is about to start.
this.fire("down");var i=t.touches?t.touches[0]:t,e=zi(this._element);this._startPoint=new B(i.clientX,i.clientY),
// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
this._parentScale=Mi(e),Si(document,ae[t.type],this._onMove,this),Si(document,re[t.type],this._onUp,this)}},_onMove:function(t){
// Ignore simulated events, since we handle both touch and
// mouse explicitly; otherwise we risk getting duplicates of
// touch events, see #4315.
// Also ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!t._simulated&&this._enabled)if(t.touches&&1<t.touches.length)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new B(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(
// We assume that the parent container's position, border and scale do not change for the duration of the drag.
// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
// and we can use the cached value for the scale.
e.x/=this._parentScale.x,e.y/=this._parentScale.y,Ni(t),this._moved||(
// @event dragstart: Event
// Fired when a drag starts
this.fire("dragstart"),this._moved=!0,this._startPos=xi(this._element).subtract(e),this._lastTarget=t.target||t.srcElement,
// IE and Edge do not give the <use> element, so fetch it
// if necessary
window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement)),this._newPos=this._startPos.add(e),this._moving=!0,C(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};
// @event predrag: Event
// Fired continuously during dragging *before* each corresponding
// update of the element's position.
this.fire("predrag",t),yi(this._element,this._newPos),
// @event drag: Event
// Fired continuously during dragging.
this.fire("drag",t)},_onUp:function(t){
// Ignore simulated events, since we handle both touch and
// mouse explicitly; otherwise we risk getting duplicates of
// touch events, see #4315.
// Also ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in this._lastTarget&&(this._lastTarget=null),ae)Ei(document,ae[t],this._onMove,this),Ei(document,re[t],this._onUp,this);Li(),Jt(),this._moved&&this._moving&&(
// ensure drag is not fired after dragend
C(this._animRequest),
// @event dragend: DragEndEvent
// Fired when the drag ends.
this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,he._dragging=!1}});
/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */
/*
 * @namespace LineUtil
 *
 * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
 */
// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
function ue(t,i){if(!i||!t.length)return t.slice();var e=i*i;
// stage 1: vertex reduction
// stage 2: Douglas-Peucker simplification
return t=
// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
function(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,function t(i,e,n,o,s){var r,a,h,u=0;for(a=o+1;a<=s-1;a++)h=pe(i[a],i[o],i[s],!0),u<h&&(r=a,u=h);n<u&&(e[r]=1,t(i,e,n,o,r),t(i,e,n,r,s))}
// reduce points that are too close to each other to a single point
(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}(t=function(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)r=t[n],a=t[o],void 0,h=a.x-r.x,u=a.y-r.y,i<h*h+u*u&&(e.push(t[n]),o=n);
// square distance (to avoid unnecessary Math.sqrt calls)
var r,a,h,u;
// return closest point on segment or distance to that point
o<s-1&&e.push(t[s-1]);return e}(t,e),e)}
// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function le(t,i,e){return Math.sqrt(pe(t,i,e,!0))}
// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function ce(t,i,e,n,o){var s,r,a,h=n?ne:de(t,e),u=de(i,e);
// save 2nd code to avoid calculating it on the next segment
for(ne=u;;){
// if a,b is inside the clip window (trivial accept)
if(!(h|u))return[t,i];
// if a,b is outside the clip window (trivial reject)
if(h&u)return!1;
// other cases
a=de(r=_e(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function _e(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(// top
s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(// bottom
s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(// right
s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(// left
s=u.x,r=t.y+h*(u.x-t.x)/a),new B(s,r,o)}function de(t,i){var e=0;return t.x<i.min.x?// left
e|=1:t.x>i.max.x&&(// right
e|=2),t.y<i.min.y?// bottom
e|=4:t.y>i.max.y&&(// top
e|=8),e}function pe(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return 0<u&&(1<(o=((t.x-s)*a+(t.y-r)*h)/u)?(s=e.x,r=e.y):0<o&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new B(s,r)}
// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function me(t){return!v(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function fe(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),me(t)}var ge=(Object.freeze||Object)({simplify:ue,pointToSegmentDistance:le,closestPointOnSegment:function(t,i,e){return pe(t,i,e)},clipSegment:ce,_getEdgeIntersection:_e,_getBitCode:de,_sqClosestPointOnSegment:pe,isFlat:me,_flat:fe});
/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */
/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a separate method for it.
 */function ve(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=de(t[o],i);
// for each edge (left, bottom, right, top)
for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],
// if a is inside the clip window
a._code&l?h._code&l||((c=_e(h,a,l,i,e))._code=de(c,i),n.push(c)):(
// if b is outside the clip window (a->b goes out of screen)
h._code&l&&((c=_e(h,a,l,i,e))._code=de(c,i),n.push(c)),n.push(a));t=n}return t}var ye,xe=(Object.freeze||Object)({clipPolygon:ve}),we={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new j(t.y,t.x)},bounds:new O([-180,-90],[180,90])},Pe={R:6378137,R_MINOR:6356752.314245179,bounds:new O([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new B(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&1e-7<Math.abs(u);h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new j(a*e,t.x*e/n)}},Le=(Object.freeze||Object)({LonLat:we,Mercator:Pe,SphericalMercator:q}),be=h({},U,{code:"EPSG:3395",projection:Pe,transformation:(ye=.5/(Math.PI*Pe.R),K(ye,.5,-ye,.5))}),Te=h({},U,{code:"EPSG:4326",projection:we,transformation:K(1/180,1,-1/180,.5)}),ze=h({},F,{projection:we,transformation:K(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});
/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */F.Earth=U,F.EPSG3395=be,F.EPSG3857=X,F.EPSG900913=J,F.EPSG4326=Te,F.Simple=ze;
/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */
var Me=k.extend({
// Classes extending `L.Layer` will inherit the following options:
options:{
// @option pane: String = 'overlayPane'
// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
pane:"overlayPane",
// @option attribution: String = null
// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
attribution:null,bubblingMouseEvents:!0},
/* @section
	 * Classes extending `L.Layer` will inherit the following methods:
	 *
	 * @method addTo(map: Map|LayerGroup): this
	 * Adds the layer to the given map or layer group.
	 */
addTo:function(t){return t.addLayer(this),this},
// @method remove: this
// Removes the layer from the map it is currently active on.
remove:function(){return this.removeFrom(this._map||this._mapToAdd)},
// @method removeFrom(map: Map): this
// Removes the layer from the given map
removeFrom:function(t){return t&&t.removeLayer(this),this},
// @method getPane(name? : String): HTMLElement
// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[u(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[u(t)],this},
// @method getAttribution: String
// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;
// check in case layer gets added and then removed before the map is ready
if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});
/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */
/* @namespace Map
 * @section Layer events
 *
 * @event layeradd: LayerEvent
 * Fired when a new layer is added to the map.
 *
 * @event layerremove: LayerEvent
 * Fired when some layer is removed from the map
 *
 * @section Methods for Layers and Controls
 */Yi.include({
// @method addLayer(layer: Layer): this
// Adds the given layer to the map
addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=u(t);return this._layers[i]||((this._layers[i]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},
// @method removeLayer(layer: Layer): this
// Removes the given layer from the map.
removeLayer:function(t){var i=u(t);return this._layers[i]&&(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},
// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the map
hasLayer:function(t){return!!t&&u(t)in this._layers},
/* @method eachLayer(fn: Function, context?: Object): this
	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
	 * ```
	 * map.eachLayer(function(layer){
	 *     layer.bindPopup('Hello');
	 * });
	 * ```
	 */
eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?v(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[u(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=u(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,
// @section Map state change events
// @event zoomlevelschange: Event
// Fired when the number of zoomlevels on the map is changed due
// to adding or removing a layer.
e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});
/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */
var Ce=Me.extend({initialize:function(t,i){var e,n;if(p(this,i),this._layers={},t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},
// @method addLayer(layer: Layer): this
// Adds the given layer to the group.
addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},
// @method removeLayer(layer: Layer): this
// Removes the given layer from the group.
// @alternative
// @method removeLayer(id: Number): this
// Removes the layer with the given internal ID from the group.
removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},
// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the group.
// @alternative
// @method hasLayer(id: Number): Boolean
// Returns `true` if the given internal ID is currently added to the group.
hasLayer:function(t){return!!t&&("number"==typeof t?t:this.getLayerId(t))in this._layers},
// @method clearLayers(): this
// Removes all the layers from the group.
clearLayers:function(){return this.eachLayer(this.removeLayer,this)},
// @method invoke(methodName: String, …): this
// Calls `methodName` on every layer contained in this group, passing any
// additional parameters. Has no effect if the layers contained do not
// implement `methodName`.
invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},
// @method eachLayer(fn: Function, context?: Object): this
// Iterates over the layers of the group, optionally specifying context of the iterator function.
// ```js
// group.eachLayer(function (layer) {
// 	layer.bindPopup('Hello');
// });
// ```
eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},
// @method getLayer(id: Number): Layer
// Returns the layer with the given internal ID.
getLayer:function(t){return this._layers[t]},
// @method getLayers(): Layer[]
// Returns an array of all the layers added to the group.
getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},
// @method setZIndex(zIndex: Number): this
// Calls `setZIndex` on every layer contained in this group, passing the z-index.
setZIndex:function(t){return this.invoke("setZIndex",t)},
// @method getLayerId(layer: Layer): Number
// Returns the internal ID for a layer
getLayerId:function(t){return u(t)}}),Se=Ce.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ce.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ce.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},
// @method setStyle(style: Path options): this
// Sets the given path options to each layer of the group that has a `setStyle` method.
setStyle:function(t){return this.invoke("setStyle",t)},
// @method bringToFront(): this
// Brings the layer group to the top of all other layers
bringToFront:function(){return this.invoke("bringToFront")},
// @method bringToBack(): this
// Brings the layer group to the back of all other layers
bringToBack:function(){return this.invoke("bringToBack")},
// @method getBounds(): LatLngBounds
// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
getBounds:function(){var t=new N;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ze=Z.extend({
/* @section
	 * @aka Icon options
	 *
	 * @option iconUrl: String = null
	 * **(required)** The URL to the icon image (absolute or relative to your script path).
	 *
	 * @option iconRetinaUrl: String = null
	 * The URL to a retina sized version of the icon image (absolute or relative to your
	 * script path). Used for Retina screen devices.
	 *
	 * @option iconSize: Point = null
	 * Size of the icon image in pixels.
	 *
	 * @option iconAnchor: Point = null
	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
	 * will be aligned so that this point is at the marker's geographical location. Centered
	 * by default if size is specified, also can be set in CSS with negative margins.
	 *
	 * @option popupAnchor: Point = [0, 0]
	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
	 *
	 * @option tooltipAnchor: Point = [0, 0]
	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
	 *
	 * @option shadowUrl: String = null
	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
	 *
	 * @option shadowRetinaUrl: String = null
	 *
	 * @option shadowSize: Point = null
	 * Size of the shadow image in pixels.
	 *
	 * @option shadowAnchor: Point = null
	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
	 * as iconAnchor if not specified).
	 *
	 * @option className: String = ''
	 * A custom class name to assign to both icon and shadow images. Empty by default.
	 */
options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){p(this,t)},
// @method createIcon(oldIcon?: HTMLElement): HTMLElement
// Called internally when the icon has to be shown, returns a `<img>` HTML element
// styled according to the options.
createIcon:function(t){return this._createIcon("icon",t)},
// @method createShadow(oldIcon?: HTMLElement): HTMLElement
// As `createIcon`, but for the shadow beneath it.
createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=I(n),s=I("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return(i=i||document.createElement("img")).src=t,i},_getIconUrl:function(t){return Ct&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});
// @factory L.layerGroup(layers?: Layer[], options?: Object)
// Create a layer group, optionally given an initial set of layers and an `options` object.
/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */
var Ee=Ze.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){
// @option imagePath: String
// `Icon.Default` will try to auto-detect the location of the
// blue icon images. If you are placing these images in a non-standard
// way, set this option to point to the right path.
return Ee.imagePath||(// Deprecated, backwards-compatibility only
Ee.imagePath=this._detectIconPath()),(this.options.imagePath||Ee.imagePath)+Ze.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=ri("div","leaflet-default-icon-path",document.body),i=si(t,"background-image")||si(t,"backgroundImage");// IE8
return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),ke=ee.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new he(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),_i(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&di(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=xi(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=R(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){
// Compute incremental movement
var u=I((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),yi(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t))}},_onDragStart:function(){
// @section Dragging events
// @event dragstart: Event
// Fired when the user starts dragging the marker.
// @event movestart: Event
// Fired when the marker starts moving (because of dragging).
this._oldLatLng=this._marker.getLatLng(),
// When using ES6 imports it could not be set when `Popup` was not imported as well
this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=xi(i._icon),o=i._map.layerPointToLatLng(n);
// update shadow position
e&&yi(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,
// @event drag: Event
// Fired repeatedly while the user drags the marker.
i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){
// @event dragend: DragEndEvent
// Fired when the user stops dragging the marker.
C(this._panRequest),
// @event moveend: Event
// Fired when the marker stops moving (because of dragging).
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Be=Me.extend({
// @section
// @aka Marker options
options:{
// @option icon: Icon = *
// Icon instance to use for rendering the marker.
// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
// If not specified, a common instance of `L.Icon.Default` is used.
icon:new Ee,
// Option inherited from "Interactive layer" abstract class
interactive:!0,
// @option keyboard: Boolean = true
// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
keyboard:!0,
// @option title: String = ''
// Text for the browser tooltip that appear on marker hover (no tooltip by default).
title:"",
// @option alt: String = ''
// Text for the `alt` attribute of the icon image (useful for accessibility).
alt:"",
// @option zIndexOffset: Number = 0
// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
zIndexOffset:0,
// @option opacity: Number = 1.0
// The opacity of the marker.
opacity:1,
// @option riseOnHover: Boolean = false
// If `true`, the marker will get on top of others when you hover the mouse over it.
riseOnHover:!1,
// @option riseOffset: Number = 250
// The z-index offset used for the `riseOnHover` feature.
riseOffset:250,
// @option pane: String = 'markerPane'
// `Map pane` where the markers icon will be added.
pane:"markerPane",
// @option pane: String = 'shadowPane'
// `Map pane` where the markers shadow will be added.
shadowPane:"shadowPane",
// @option bubblingMouseEvents: Boolean = false
// When `true`, a mouse event on this marker will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!1,
// @section Draggable marker options
// @option draggable: Boolean = false
// Whether the marker is draggable with mouse/touch or not.
draggable:!1,
// @option autoPan: Boolean = false
// Whether to pan the map when dragging this marker near its edge or not.
autoPan:!1,
// @option autoPanPadding: Point = Point(50, 50)
// Distance (in pixels to the left/right and to the top/bottom) of the
// map edge to start panning the map.
autoPanPadding:[50,50],
// @option autoPanSpeed: Number = 10
// Number of pixels the map should pan by.
autoPanSpeed:10},
/* @section
	 *
	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
	 */
initialize:function(t,i){p(this,i),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},
// @method getLatLng: LatLng
// Returns the current geographical position of the marker.
getLatLng:function(){return this._latlng},
// @method setLatLng(latlng: LatLng): this
// Changes the marker position to the given point.
setLatLng:function(t){var i=this._latlng;
// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},
// @method setZIndexOffset(offset: Number): this
// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},
// @method getIcon: Icon
// Returns the current icon used by the marker
getIcon:function(){return this.options.icon},
// @method setIcon(icon: Icon): this
// Changes the marker icon.
setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;
// if we're not reusing the icon, remove the old one and init new one
e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),_i(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(_i(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ai(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ai(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&yi(this._icon,t),this._shadow&&yi(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(_i(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ke)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ke(this),t&&this.dragging.enable()}},
// @method setOpacity(opacity: Number): this
// Changes the opacity of the marker.
setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&fi(this._icon,t),this._shadow&&fi(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});
/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */
/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */
/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */
var Ae=Me.extend({
// @section
// @aka Path options
options:{
// @option stroke: Boolean = true
// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
stroke:!0,
// @option color: String = '#3388ff'
// Stroke color
color:"#3388ff",
// @option weight: Number = 3
// Stroke width in pixels
weight:3,
// @option opacity: Number = 1.0
// Stroke opacity
opacity:1,
// @option lineCap: String= 'round'
// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
lineCap:"round",
// @option lineJoin: String = 'round'
// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
lineJoin:"round",
// @option dashArray: String = null
// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashArray:null,
// @option dashOffset: String = null
// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashOffset:null,
// @option fill: Boolean = depends
// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
fill:!1,
// @option fillColor: String = *
// Fill color. Defaults to the value of the [`color`](#path-color) option
fillColor:null,
// @option fillOpacity: Number = 0.2
// Fill opacity.
fillOpacity:.2,
// @option fillRule: String = 'evenodd'
// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
fillRule:"evenodd",
// className: '',
// Option inherited from "Interactive layer" abstract class
interactive:!0,
// @option bubblingMouseEvents: Boolean = true
// When `true`, a mouse event on this path will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!0},beforeAdd:function(t){
// Renderer is set here because we need to call renderer.getEvents
// before this.getEvents.
this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},
// @method redraw(): this
// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
redraw:function(){return this._map&&this._renderer._updatePath(this),this},
// @method setStyle(style: Path options): this
// Changes the appearance of a Path based on the options in the `Path options` object.
setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&t.hasOwnProperty("weight")&&this._updateBounds()),this},
// @method bringToFront(): this
// Brings the layer to the top of all path layers.
bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},
// @method bringToBack(): this
// Brings the layer to the bottom of all path layers.
bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){
// defined in child classes
this._project(),this._update()},_clickTolerance:function(){
// used when doing hit detection for Canvas layers
return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Ie=Ae.extend({
// @section
// @aka CircleMarker options
options:{fill:!0,
// @option radius: Number = 10
// Radius of the circle marker, in pixels
radius:10},initialize:function(t,i){p(this,i),this._latlng=W(t),this._radius=this.options.radius},
// @method setLatLng(latLng: LatLng): this
// Sets the position of a circle marker to a new location.
setLatLng:function(t){var i=this._latlng;
// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=W(t),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},
// @method getLatLng(): LatLng
// Returns the current geographical position of the circle marker
getLatLng:function(){return this._latlng},
// @method setRadius(radius: Number): this
// Sets the radius of a circle marker. Units are in pixels.
setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},
// @method getRadius(): Number
// Returns the current radius of the circle
getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Ae.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new O(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},
// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});
/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */
/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */
var Oe=Ie.extend({initialize:function(t,i,e){if("number"==typeof i&&(
// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
i=h({},e,{radius:i})),p(this,i),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");
// @section
// @aka Circle options
// @option radius: Number; Radius of the circle, in meters.
this._mRadius=this.options.radius},
// @method setRadius(radius: Number): this
// Sets the radius of a circle. Units are in meters.
setRadius:function(t){return this._mRadius=t,this.redraw()},
// @method getRadius(): Number
// Returns the current radius of a circle. Units are in meters.
getRadius:function(){return this._mRadius},
// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Ae.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===U.distance){var o=Math.PI/180,s=this._mRadius/U.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;!isNaN(l)&&0!==l||(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}});
// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */
var Re=Ae.extend({
// @section
// @aka Polyline options
options:{
// @option smoothFactor: Number = 1.0
// How much to simplify the polyline on each zoom level. More means
// better performance and smoother look, and less means more accurate representation.
smoothFactor:1,
// @option noClip: Boolean = false
// Disable polyline clipping.
noClip:!1},initialize:function(t,i){p(this,i),this._setLatLngs(t)},
// @method getLatLngs(): LatLng[]
// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
getLatLngs:function(){return this._latlngs},
// @method setLatLngs(latlngs: LatLng[]): this
// Replaces all the points in the polyline with the given array of geographical points.
setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},
// @method isEmpty(): Boolean
// Returns `true` if the Polyline has no LatLngs.
isEmpty:function(){return!this._latlngs.length},
// @method closestLayerPoint(p: Point): Point
// Returns the point closest to `p` on the Polyline.
closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=pe,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},
// @method getCenter(): LatLng
// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
getCenter:function(){
// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;
// polyline centroid algorithm; only uses the first ring if there are multiple
for(i=t=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;
// The line is so small in the current view that all points are on the same pixel.
if(0===i)return this._map.layerPointToLatLng(a[0]);for(n=t=0;t<h-1;t++)if(o=a[t],s=a[t+1],i<(n+=e=o.distanceTo(s)))return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},
// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){return this._bounds},
// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
// Adds a given point to the polyline. By default, adds to the first ring of
// the polyline in case of a multi-polyline, but can be overridden by passing
// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
addLatLng:function(t,i){return i=i||this._defaultShape(),t=W(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new N,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return me(this._latlngs)?this._latlngs:this._latlngs[0]},
// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
_convertLatLngs:function(t){for(var i=[],e=me(t),n=0,o=t.length;n<o;n++)e?(i[n]=W(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new B(t,t);this._pxBounds=new O([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)])},
// recursively turns latlngs into a set of rings with projected coordinates
_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof j,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},
// clip polyline by renderer bounds so that we have less to render for performance
_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(n=i=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=ce(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),
// if segment goes out of screen, or it's the last one, it's the end of the line part
r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},
// simplify each clipped part of the polyline for performance
_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=ue(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},
// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;
// hit detection for polylines
for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&le(t,a[o],a[n])<=h)return!0;return!1}});
// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
Re._flat=fe;
/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */
var Ne=Re.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){
// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;
// polygon centroid algorithm; only uses the first ring if there are multiple
for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;
// Polygon is so small that all points are on same pixel.
return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=Re.prototype._convertLatLngs.call(this,t),e=i.length;
// remove last point if it equals first one
return 2<=e&&i[0]instanceof j&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){Re.prototype._setLatLngs.call(this,t),me(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return me(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){
// polygons need a different clipping algorithm so we redefine that
var t=this._renderer._bounds,i=this.options.weight,e=new B(i,i);
// increase clip padding by stroke width to avoid stroke on clip edges
if(t=new O(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=ve(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},
// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;
// ray casting algorithm for detecting if point is in polygon
for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);
// also check if it's on polygon stroke
return u||Re.prototype._containsPoint.call(this,t,!0)}});
// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */
var De=Se.extend({
/* @section
	 * @aka GeoJSON options
	 *
	 * @option pointToLayer: Function = *
	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
	 * The default is to spawn a default `Marker`:
	 * ```js
	 * function(geoJsonPoint, latlng) {
	 * 	return L.marker(latlng);
	 * }
	 * ```
	 *
	 * @option style: Function = *
	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
	 * called internally when data is added.
	 * The default value is to not override any defaults:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return {}
	 * }
	 * ```
	 *
	 * @option onEachFeature: Function = *
	 * A `Function` that will be called once for each created `Feature`, after it has
	 * been created and styled. Useful for attaching events and popups to features.
	 * The default is to do nothing with the newly created layers:
	 * ```js
	 * function (feature, layer) {}
	 * ```
	 *
	 * @option filter: Function = *
	 * A `Function` that will be used to decide whether to include a feature or not.
	 * The default is to include all features:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return true;
	 * }
	 * ```
	 * Note: dynamically changing the `filter` option will have effect only on newly
	 * added data. It will _not_ re-evaluate already included features.
	 *
	 * @option coordsToLatLng: Function = *
	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
	 * The default is the `coordsToLatLng` static method.
	 *
	 * @option markersInheritOptions: Boolean = false
	 * Whether default Markers for "Point" type Features inherit from group options.
	 */
initialize:function(t,i){p(this,i),this._layers={},t&&this.addData(t)},
// @method addData( <GeoJSON> data ): this
// Adds a GeoJSON object to the layer.
addData:function(t){var i,e,n,o=v(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)
// only add this if geometry or geometries are set and not null
((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=je(t,s);return r?(r.feature=Ge(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},
// @method resetStyle( <Path> layer? ): this
// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
// If `layer` is omitted, the style of all features in the current layer is reset.
resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(
// reset any custom styles
t.options=h({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},
// @method setStyle( <Function> style ): this
// Changes styles of GeoJSON vector layers with the given style function.
setStyle:function(i){return this.eachLayer(function(t){this._setLayerStyle(t,i)},this)},_setLayerStyle:function(t,i){t.setStyle&&("function"==typeof i&&(i=i(t.feature)),t.setStyle(i))}});
// @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function je(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||He;if(!a&&!r)return null;switch(r.type){case"Point":return We(u,t,e=l(a),i);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(We(u,t,e,i));return new Se(h);case"LineString":case"MultiLineString":return n=Fe(a,"LineString"===r.type?0:1,l),new Re(n,i);case"Polygon":case"MultiPolygon":return n=Fe(a,"Polygon"===r.type?1:2,l),new Ne(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=je({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Se(h);default:throw new Error("Invalid GeoJSON object.")}}function We(t,i,e,n){return t?t(i,e):new Be(e,n&&n.markersInheritOptions&&n)}
// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function He(t){return new j(t[1],t[0],t[2])}
// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function Fe(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Fe(t[s],i-1,e):(e||He)(t[s]),o.push(n);return o}
// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
function Ue(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[c(t.lng,i),c(t.lat,i),c(t.alt,i)]:[c(t.lng,i),c(t.lat,i)]}
// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
function Ve(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Ve(t[s],i-1,e,n):Ue(t[s],n));return!i&&e&&o.push(o[0]),o}function qe(t,i){return t.feature?h({},t.feature,{geometry:i}):Ge(i)}
// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function Ge(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var Ke={toGeoJSON:function(t){return qe(this,{type:"Point",coordinates:Ue(this.getLatLng(),t)})}};
// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function Ye(t,i){return new De(t,i)}
// Backward compatibility.
Be.include(Ke),
// @namespace CircleMarker
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
Oe.include(Ke),Ie.include(Ke),
// @namespace Polyline
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
Re.include({toGeoJSON:function(t){var i=!me(this._latlngs);return qe(this,{type:(i?"Multi":"")+"LineString",coordinates:Ve(this._latlngs,i?1:0,!1,t)})}}),
// @namespace Polygon
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
Ne.include({toGeoJSON:function(t){var i=!me(this._latlngs),e=i&&!me(this._latlngs[0]),n=Ve(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),qe(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),
// @namespace LayerGroup
Ce.include({toMultiPoint:function(i){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON(i).geometry.coordinates)}),qe(this,{type:"MultiPoint",coordinates:e})},
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
toGeoJSON:function(n){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(n);var o="GeometryCollection"===t,s=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(n);if(o)s.push(i.geometry);else{var e=Ge(i);
// Squash nested feature collections
"FeatureCollection"===e.type?s.push.apply(s,e.features):s.push(e)}}}),o?qe(this,{geometries:s,type:"GeometryCollection"}):{type:"FeatureCollection",features:s}}});var Xe=Ye,Je=Me.extend({
// @section
// @aka ImageOverlay options
options:{
// @option opacity: Number = 1.0
// The opacity of the image overlay.
opacity:1,
// @option alt: String = ''
// Text for the `alt` attribute of the image (useful for accessibility).
alt:"",
// @option interactive: Boolean = false
// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
interactive:!1,
// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the image.
// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,
// @option errorOverlayUrl: String = ''
// URL to the overlay image to show in place of the overlay that failed to load.
errorOverlayUrl:"",
// @option zIndex: Number = 1
// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
zIndex:1,
// @option className: String = ''
// A custom class name to assign to the image. Empty by default.
className:""},initialize:function(t,i,e){// (String, LatLngBounds, Object)
this._url=t,this._bounds=D(i),p(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(_i(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ai(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},
// @method setOpacity(opacity: Number): this
// Sets the opacity of the overlay.
setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},
// @method bringToFront(): this
// Brings the layer to the top of all overlays.
bringToFront:function(){return this._map&&ui(this._image),this},
// @method bringToBack(): this
// Brings the layer to the bottom of all overlays.
bringToBack:function(){return this._map&&li(this._image),this},
// @method setUrl(url: String): this
// Changes the URL of the image.
setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},
// @method setBounds(bounds: LatLngBounds): this
// Update the bounds that this ImageOverlay covers
setBounds:function(t){return this._bounds=D(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},
// @method setZIndex(value: Number): this
// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},
// @method getBounds(): LatLngBounds
// Get the bounds that this ImageOverlay covers
getBounds:function(){return this._bounds},
// @method getElement(): HTMLElement
// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
// used by this overlay.
getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:ri("img");_i(i,"leaflet-image-layer"),this._zoomAnimated&&_i(i,"leaflet-zoom-animated"),this.options.className&&_i(i,this.options.className),i.onselectstart=l,i.onmousemove=l,
// @event load: Event
// Fired when the ImageOverlay layer has loaded its image
i.onload=a(this.fire,this,"load"),i.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;vi(this._image,e,i)},_reset:function(){var t=this._image,i=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();yi(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){fi(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){
// @event error: Event
// Fired when the ImageOverlay layer fails to load its image
this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),$e=Je.extend({
// @section
// @aka VideoOverlay options
options:{
// @option autoplay: Boolean = true
// Whether the video starts playing automatically when loaded.
autoplay:!0,
// @option loop: Boolean = true
// Whether the video will loop back to the beginning when played.
loop:!0,
// @option keepAspectRatio: Boolean = true
// Whether the video will save aspect ratio after the projection.
// Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:ri("video");if(_i(i,"leaflet-image-layer"),this._zoomAnimated&&_i(i,"leaflet-zoom-animated"),this.options.className&&_i(i,this.options.className),i.onselectstart=l,i.onmousemove=l,
// @event load: Event
// Fired when the video has finished loading the first frame
i.onloadeddata=a(this.fire,this,"load"),t){for(var e=i.getElementsByTagName("source"),n=[],o=0;o<e.length;o++)n.push(e[o].src);this._url=0<e.length?n:[i.src]}else{v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&i.style.hasOwnProperty("objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var r=ri("source");r.src=this._url[s],i.appendChild(r)}}}
// @method getElement(): HTMLVideoElement
// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
// used by this overlay.
});
/*
 * @class ImageOverlay
 * @aka L.ImageOverlay
 * @inherits Interactive layer
 *
 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
 * ```
 */
/*
 * @class SVGOverlay
 * @aka L.SVGOverlay
 * @inherits ImageOverlay
 *
 * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
 *
 * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
 *
 * @example
 *
 * ```js
 * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
 * svgElement.setAttribute('viewBox', "0 0 200 200");
 * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
 * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
 * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
 * ```
 */
var Qe=Je.extend({_initImage:function(){var t=this._image=this._url;_i(t,"leaflet-image-layer"),this._zoomAnimated&&_i(t,"leaflet-zoom-animated"),this.options.className&&_i(t,this.options.className),t.onselectstart=l,t.onmousemove=l}
// @method getElement(): SVGElement
// Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
// used by this overlay.
});
// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.
/*
 * @class DivOverlay
 * @inherits Layer
 * @aka L.DivOverlay
 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
 */
// @namespace DivOverlay
var tn=Me.extend({
// @section
// @aka DivOverlay options
options:{
// @option offset: Point = Point(0, 7)
// The offset of the popup position. Useful to control the anchor
// of the popup when opening it on some overlays.
offset:[0,7],
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:"",
// @option pane: String = 'popupPane'
// `Map pane` where the popup will be added.
pane:"popupPane"},initialize:function(t,i){p(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&fi(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&fi(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(fi(this._container,0),this._removeTimeout=setTimeout(a(ai,void 0,this._container),200)):ai(this._container)},
// @namespace Popup
// @method getLatLng: LatLng
// Returns the geographical point of popup.
getLatLng:function(){return this._latlng},
// @method setLatLng(latlng: LatLng): this
// Sets the geographical point where the popup will open.
setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},
// @method getContent: String|HTMLElement
// Returns the content of the popup.
getContent:function(){return this._content},
// @method setContent(htmlContent: String|HTMLElement|Function): this
// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
setContent:function(t){return this._content=t,this.update(),this},
// @method getElement: String|HTMLElement
// Alias for [getContent()](#popup-getcontent)
getElement:function(){return this._container},
// @method update: null
// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},
// @method isOpen: Boolean
// Returns `true` when the popup is visible on the map.
isOpen:function(){return!!this._map&&this._map.hasLayer(this)},
// @method bringToFront: this
// Brings this popup in front of other popups (in the same map pane).
bringToFront:function(){return this._map&&ui(this._container),this},
// @method bringToBack: this
// Brings this popup to the back of other popups (in the same map pane).
bringToBack:function(){return this._map&&li(this._container),this},_prepareOpen:function(t,i,e){if(i instanceof Me||(e=i,i=t),i instanceof Se)for(var n in t._layers){i=t._layers[n];break}if(!e)if(i.getCenter)e=i.getCenter();else{if(!i.getLatLng)throw new Error("Unable to get source layer LatLng.");e=i.getLatLng()}
// set overlay source to this layer
return this._source=i,
// update the overlay (content, layout, ect...)
this.update(),e},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=I(this.options.offset),e=this._getAnchor();this._zoomAnimated?yi(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;
// bottom position the popup in case the height of the popup changes (images loading etc)
this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),en=tn.extend({
// @section
// @aka Popup options
options:{
// @option maxWidth: Number = 300
// Max width of the popup, in pixels.
maxWidth:300,
// @option minWidth: Number = 50
// Min width of the popup, in pixels.
minWidth:50,
// @option maxHeight: Number = null
// If set, creates a scrollable container of the given height
// inside a popup if its content exceeds it.
maxHeight:null,
// @option autoPan: Boolean = true
// Set it to `false` if you don't want the map to do panning animation
// to fit the opened popup.
autoPan:!0,
// @option autoPanPaddingTopLeft: Point = null
// The margin between the popup and the top left corner of the map
// view after autopanning was performed.
autoPanPaddingTopLeft:null,
// @option autoPanPaddingBottomRight: Point = null
// The margin between the popup and the bottom right corner of the map
// view after autopanning was performed.
autoPanPaddingBottomRight:null,
// @option autoPanPadding: Point = Point(5, 5)
// Equivalent of setting both top left and bottom right autopan padding to the same value.
autoPanPadding:[5,5],
// @option keepInView: Boolean = false
// Set it to `true` if you want to prevent users from panning the popup
// off of the screen while it is open.
keepInView:!1,
// @option closeButton: Boolean = true
// Controls the presence of a close button in the popup.
closeButton:!0,
// @option autoClose: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the popup closing when another popup is opened.
autoClose:!0,
// @option closeOnEscapeKey: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the ESC key for closing of the popup.
closeOnEscapeKey:!0,
// @option closeOnClick: Boolean = *
// Set it if you want to override the default behavior of the popup closing when user clicks
// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:""},
// @namespace Popup
// @method openOn(map: Map): this
// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
openOn:function(t){return t.openPopup(this),this},onAdd:function(t){tn.prototype.onAdd.call(this,t),
// @namespace Map
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup is opened in the map
t.fire("popupopen",{popup:this}),this._source&&(
// @namespace Layer
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup bound to this layer is opened
this._source.fire("popupopen",{popup:this},!0),
// For non-path layers, we toggle the popup when clicking
// again the layer, so prevent the map to reopen it.
this._source instanceof Ae||this._source.on("preclick",Ii))},onRemove:function(t){tn.prototype.onRemove.call(this,t),
// @namespace Map
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup in the map is closed
t.fire("popupclose",{popup:this}),this._source&&(
// @namespace Layer
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup bound to this layer is closed
this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ae||this._source.off("preclick",Ii))},getEvents:function(){var t=tn.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=ri("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=ri("div",t+"-content-wrapper",i);if(this._contentNode=ri("div",t+"-content",e),Ri(e),Oi(this._contentNode),Si(e,"contextmenu",Ii),this._tipContainer=ri("div",t+"-tip-container",i),this._tip=ri("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=ri("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",Si(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&o<n?(i.height=o+"px",_i(t,s)):di(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();yi(this._container,i.add(e))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,i=parseInt(si(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new B(this._containerLeft,-e-this._containerBottom);o._add(xi(this._container));var s=t.layerPointToContainerPoint(o),r=I(this.options.autoPanPadding),a=I(this.options.autoPanPaddingTopLeft||r),h=I(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(// right
l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(// left
l=s.x-a.x),s.y+e+h.y>u.y&&(// bottom
c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(// top
c=s.y-a.y),
// @namespace Map
// @section Popup events
// @event autopanstart: Event
// Fired when the map starts autopanning when opening a popup.
(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Di(t)},_getAnchor:function(){
// Where should we anchor the popup on the source layer?
return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});
/*
 * @class Popup
 * @inherits DivOverlay
 * @aka L.Popup
 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
 * open popups while making sure that only one popup is open at one time
 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
 *
 * @example
 *
 * If you want to just bind a popup to marker click and then open it, it's really easy:
 *
 * ```js
 * marker.bindPopup(popupContent).openPopup();
 * ```
 * Path overlays like polylines also have a `bindPopup` method.
 * Here's a more complicated way to open a popup on a map:
 *
 * ```js
 * var popup = L.popup()
 * 	.setLatLng(latlng)
 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 * 	.openOn(map);
 * ```
 */
// @namespace Popup
/* @namespace Map
 * @section Interaction Options
 * @option closePopupOnClick: Boolean = true
 * Set it to `false` if you don't want popups to close when user clicks the map.
 */
Yi.mergeOptions({closePopupOnClick:!0}),
// @namespace Map
// @section Methods for Layers and Controls
Yi.include({
// @method openPopup(popup: Popup): this
// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
// @alternative
// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
// Creates a popup with the specified content and options and opens it in the given point on a map.
openPopup:function(t,i,e){return t instanceof en||(t=new en(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},
// @method closePopup(popup?: Popup): this
// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),
/*
 * @namespace Layer
 * @section Popup methods example
 *
 * All layers share a set of methods convenient for binding popups to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
 * layer.openPopup();
 * layer.closePopup();
 * ```
 *
 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
 */
// @section Popup methods
Me.include({
// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
// Binds a popup to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindPopup:function(t,i){return t instanceof en?(p(t,i),(this._popup=t)._source=this):(this._popup&&!i||(this._popup=new en(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},
// @method unbindPopup(): this
// Removes the popup previously bound with `bindPopup`.
unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},
// @method openPopup(latlng?: LatLng): this
// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
openPopup:function(t,i){return this._popup&&this._map&&(i=this._popup._prepareOpen(this,t,i),
// open the popup on the map
this._map.openPopup(this._popup,i)),this},
// @method closePopup(): this
// Closes the popup bound to this layer if it is open.
closePopup:function(){return this._popup&&this._popup._close(),this},
// @method togglePopup(): this
// Opens or closes the popup bound to this layer depending on its current state.
togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},
// @method isPopupOpen(): boolean
// Returns `true` if the popup bound to this layer is currently open.
isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},
// @method setPopupContent(content: String|HTMLElement|Popup): this
// Sets the content of the popup bound to this layer.
setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},
// @method getPopup(): Popup
// Returns the popup bound to this layer.
getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(
// prevent map click
Di(t),
// if this inherits from Path its a vector and we can just
// open the popup at the new location
i instanceof Ae?this.openPopup(t.layer||t.target,t.latlng):
// otherwise treat it like a marker and figure out
// if we should toggle it open/closed
this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});
/*
 * @class Tooltip
 * @inherits DivOverlay
 * @aka L.Tooltip
 * Used to display small texts on top of map layers.
 *
 * @example
 *
 * ```js
 * marker.bindTooltip("my tooltip text").openTooltip();
 * ```
 * Note about tooltip offset. Leaflet takes two options in consideration
 * for computing tooltip offsetting:
 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
 *   move it to the bottom. Negatives will move to the left and top.
 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
 *   should adapt this value if you use a custom icon.
 */
// @namespace Tooltip
var nn=tn.extend({
// @section
// @aka Tooltip options
options:{
// @option pane: String = 'tooltipPane'
// `Map pane` where the tooltip will be added.
pane:"tooltipPane",
// @option offset: Point = Point(0, 0)
// Optional offset of the tooltip position.
offset:[0,0],
// @option direction: String = 'auto'
// Direction where to open the tooltip. Possible values are: `right`, `left`,
// `top`, `bottom`, `center`, `auto`.
// `auto` will dynamically switch between `right` and `left` according to the tooltip
// position on the map.
direction:"auto",
// @option permanent: Boolean = false
// Whether to open the tooltip permanently or only on mouseover.
permanent:!1,
// @option sticky: Boolean = false
// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
sticky:!1,
// @option interactive: Boolean = false
// If true, the tooltip will listen to the feature events.
interactive:!1,
// @option opacity: Number = 0.9
// Tooltip container opacity.
opacity:.9},onAdd:function(t){tn.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),
// @namespace Map
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip is opened in the map.
t.fire("tooltipopen",{tooltip:this}),this._source&&
// @namespace Layer
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip bound to this layer is opened.
this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){tn.prototype.onRemove.call(this,t),
// @namespace Map
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip in the map is closed.
t.fire("tooltipclose",{tooltip:this}),this._source&&
// @namespace Layer
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip bound to this layer is closed.
this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=tn.prototype.getEvents.call(this);return Tt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ri("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=I(this.options.offset),u=this._getAnchor();t="top"===s?t.add(I(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t.subtract(I(r/2-h.x,-h.y,!0)):"center"===s?t.subtract(I(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t.add(I(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t.subtract(I(r+u.x-h.x,a/2-u.y-h.y,!0))),di(e,"leaflet-tooltip-right"),di(e,"leaflet-tooltip-left"),di(e,"leaflet-tooltip-top"),di(e,"leaflet-tooltip-bottom"),_i(e,"leaflet-tooltip-"+s),yi(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&fi(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){
// Where should we anchor the tooltip on the source layer?
return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});
// @namespace Tooltip
// @factory L.tooltip(options?: Tooltip options, source?: Layer)
// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
// @namespace Map
// @section Methods for Layers and Controls
Yi.include({
// @method openTooltip(tooltip: Tooltip): this
// Opens the specified tooltip.
// @alternative
// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
// Creates a tooltip with the specified content and options and open it.
openTooltip:function(t,i,e){return t instanceof nn||(t=new nn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},
// @method closeTooltip(tooltip?: Tooltip): this
// Closes the tooltip given as parameter.
closeTooltip:function(t){return t&&this.removeLayer(t),this}}),
/*
 * @namespace Layer
 * @section Tooltip methods example
 *
 * All layers share a set of methods convenient for binding tooltips to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
 * layer.openTooltip();
 * layer.closeTooltip();
 * ```
 */
// @section Tooltip methods
Me.include({
// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
// Binds a tooltip to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindTooltip:function(t,i){return t instanceof nn?(p(t,i),(this._tooltip=t)._source=this):(this._tooltip&&!i||(this._tooltip=new nn(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},
// @method unbindTooltip(): this
// Removes the tooltip previously bound with `bindTooltip`.
unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Tt&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},
// @method openTooltip(latlng?: LatLng): this
// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
openTooltip:function(t,i){return this._tooltip&&this._map&&(i=this._tooltip._prepareOpen(this,t,i),
// open the tooltip on the map
this._map.openTooltip(this._tooltip,i),
// Tooltip container may not be defined if not permanent and never
// opened.
this._tooltip.options.interactive&&this._tooltip._container&&(_i(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},
// @method closeTooltip(): this
// Closes the tooltip bound to this layer if it is open.
closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(di(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},
// @method toggleTooltip(): this
// Opens or closes the tooltip bound to this layer depending on its current state.
toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},
// @method isTooltipOpen(): boolean
// Returns `true` if the tooltip bound to this layer is currently open.
isTooltipOpen:function(){return this._tooltip.isOpen()},
// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
// Sets the content of the tooltip bound to this layer.
setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},
// @method getTooltip(): Tooltip
// Returns the tooltip bound to this layer.
getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});
/*
 * @class DivIcon
 * @aka L.DivIcon
 * @inherits Icon
 *
 * Represents a lightweight icon for markers that uses a simple `<div>`
 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
 *
 * @example
 * ```js
 * var myIcon = L.divIcon({className: 'my-div-icon'});
 * // you can set .my-div-icon styles in CSS
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
 */
var on=Ze.extend({options:{
// @section
// @aka DivIcon options
iconSize:[12,12],// also can be set through CSS
// iconAnchor: (Point),
// popupAnchor: (Point),
// @option html: String|HTMLElement = ''
// Custom HTML code to put inside the div element, empty by default. Alternatively,
// an instance of `HTMLElement`.
html:!1,
// @option bgPos: Point = [0, 0]
// Optional relative position of the background, in pixels
bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(e.html instanceof Element?(hi(i),i.appendChild(e.html)):i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=I(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});
// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
Ze.Default=Ee;
/*
 * @class GridLayer
 * @inherits Layer
 * @aka L.GridLayer
 *
 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
 *
 *
 * @section Synchronous usage
 * @example
 *
 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords){
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
 *         var ctx = tile.getContext('2d');
 *
 *         // return the tile so it can be rendered on screen
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section Asynchronous usage
 * @example
 *
 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords, done){
 *         var error;
 *
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // draw something asynchronously and pass the tile to the done() callback
 *         setTimeout(function() {
 *             done(error, tile);
 *         }, 1000);
 *
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section
 */
var sn=Me.extend({
// @section
// @aka GridLayer options
options:{
// @option tileSize: Number|Point = 256
// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
tileSize:256,
// @option opacity: Number = 1.0
// Opacity of the tiles. Can be used in the `createTile()` function.
opacity:1,
// @option updateWhenIdle: Boolean = (depends)
// Load new tiles only when panning ends.
// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
updateWhenIdle:xt,
// @option updateWhenZooming: Boolean = true
// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
updateWhenZooming:!0,
// @option updateInterval: Number = 200
// Tiles will not update more than once every `updateInterval` milliseconds when panning.
updateInterval:200,
// @option zIndex: Number = 1
// The explicit zIndex of the tile layer.
zIndex:1,
// @option bounds: LatLngBounds = undefined
// If set, tiles will only be loaded inside the set `LatLngBounds`.
bounds:null,
// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,
// @option maxZoom: Number = undefined
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:void 0,
// @option maxNativeZoom: Number = undefined
// Maximum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
// from `maxNativeZoom` level and auto-scaled.
maxNativeZoom:void 0,
// @option minNativeZoom: Number = undefined
// Minimum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
// from `minNativeZoom` level and auto-scaled.
minNativeZoom:void 0,
// @option noWrap: Boolean = false
// Whether the layer is wrapped around the antimeridian. If `true`, the
// GridLayer will only be displayed once at low zoom levels. Has no
// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
// tiles outside the CRS limits.
noWrap:!1,
// @option pane: String = 'tilePane'
// `Map pane` where the grid layer will be added.
pane:"tilePane",
// @option className: String = ''
// A custom class name to assign to the tile layer. Empty by default.
className:"",
// @option keepBuffer: Number = 2
// When panning the map, keep this many rows and columns of tiles before unloading them.
keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ai(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},
// @method bringToFront: this
// Brings the tile layer to the top of all tile layers.
bringToFront:function(){return this._map&&(ui(this._container),this._setAutoZIndex(Math.max)),this},
// @method bringToBack: this
// Brings the tile layer to the bottom of all tile layers.
bringToBack:function(){return this._map&&(li(this._container),this._setAutoZIndex(Math.min)),this},
// @method getContainer: HTMLElement
// Returns the HTML element that contains the tiles for this layer.
getContainer:function(){return this._container},
// @method setOpacity(opacity: Number): this
// Changes the [opacity](#gridlayer-opacity) of the grid layer.
setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},
// @method setZIndex(zIndex: Number): this
// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},
// @method isLoading: Boolean
// Returns `true` if any tile in the grid layer has not finished loading.
isLoading:function(){return this._loading},
// @method redraw: this
// Causes the layer to clear all the tiles and request them again.
redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(
// update tiles on move, but not more often than once per given interval
this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},
// @section Extension methods
// Layers extending `GridLayer` shall reimplement the following method.
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, must be overridden by classes extending `GridLayer`.
// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
// is specified, it must be called when the tile has finished loading and drawing.
createTile:function(){return document.createElement("div")},
// @section
// @method getTileSize: Point
// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){// -Infinity for max, Infinity for min
for(
// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!et)
// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
{fi(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);fi(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=ri("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ai(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=ri("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ai(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new B(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?u.retain=!0:(u&&u.loaded&&(u.retain=!0),n<r&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new B(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),
// Flag to prevent _updateOpacity from pruning tiles during
// a zoom anim or a pinch gesture
this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();yt?vi(t.el,o,n):yi(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new O(o.subtract(s),o.add(s))},
// Private method to load tiles in the grid's active zoom level according to map bounds
_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){// if out of minzoom/maxzoom
var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new O(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));
// Sanity check: panic if the tile range contains Infinity somewhere.
if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new B(l.x,l.y))||(this._tiles[u].current=!1)}
// _update just loads more tiles. If the tile zoom level differs too much
// from the map's, let _setView reset levels and prune old tiles.
if(1<Math.abs(e-this._tileZoom))this._setView(t,e);else{
// create a queue of coordinates to load tiles from
for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new B(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}
// sort tile queue to load tiles in order of their distance to center
if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){
// if it's the first batch of tiles to load
this._loading||(this._loading=!0,
// @event loading: Event
// Fired when the grid layer starts loading tiles.
this.fire("loading"));
// create DOM fragment to append tiles in one batch
var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){
// don't load tile if it's out of bounds and not wrapped
var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;
// don't load tile if it doesn't intersect the bounds in options
var n=this._tileCoordsToBounds(t);return D(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},
// converts tile coordinates to its geographical bounds
_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new N(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},
// converts tile coordinates to key for the tile cache
_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},
// converts tile cache key to coordinates
_keyToTileCoords:function(t){var i=t.split(":"),e=new B(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(ai(i.el),delete this._tiles[t],
// @event tileunload: TileEvent
// Fired when a tile is removed (e.g. when a tile goes off the screen).
this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){_i(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=l,t.onmousemove=l,
// update opacity on tiles in IE7-8 because of filter inheritance problems
et&&this.options.opacity<1&&fi(t,this.options.opacity),
// without this hack, tiles disappear after zoom on Chrome for Android
// https://github.com/Leaflet/Leaflet/issues/2078
st&&!rt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var e=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),
// if createTile is defined with a second argument ("done" callback),
// we know that tile is async and will be ready later; otherwise
this.createTile.length<2&&
// mark tile as ready, but delay one frame for opacity animation to happen
M(a(this._tileReady,this,t,null,o)),yi(o,e),
// save tile in cache
this._tiles[n]={el:o,coords:t,current:!0},i.appendChild(o),
// @event tileloadstart: TileEvent
// Fired when a tile is requested and starts loading.
this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,i,e){i&&
// @event tileerror: TileErrorEvent
// Fired when there is an error loading a tile.
this.fire("tileerror",{error:i,tile:e,coords:t});var n=this._tileCoordsToKey(t);(e=this._tiles[n])&&(e.loaded=+new Date,this._map._fadeAnimated?(fi(e.el,0),C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),i||(_i(e.el,"leaflet-tile-loaded"),
// @event tileload: TileEvent
// Fired when a tile loads.
this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,
// @event load: Event
// Fired when the grid layer loaded all visible tiles.
this.fire("load"),et||!this._map._fadeAnimated?M(this._pruneTiles,this):
// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
// to trigger a pruning.
setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new B(this._wrapX?r(t.x,this._wrapX):t.x,this._wrapY?r(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new O(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});
// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
/*
 * @class TileLayer
 * @inherits GridLayer
 * @aka L.TileLayer
 * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
 *
 * @example
 *
 * ```js
 * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
 * ```
 *
 * @section URL template
 * @example
 *
 * A string of the following form:
 *
 * ```
 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
 * ```
 *
 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
 *
 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
 *
 * ```
 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
 * ```
 */
var rn=sn.extend({
// @section
// @aka TileLayer options
options:{
// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,
// @option maxZoom: Number = 18
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:18,
// @option subdomains: String|String[] = 'abc'
// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
subdomains:"abc",
// @option errorTileUrl: String = ''
// URL to the tile image to show in place of the tile that failed to load.
errorTileUrl:"",
// @option zoomOffset: Number = 0
// The zoom number used in tile URLs will be offset with this value.
zoomOffset:0,
// @option tms: Boolean = false
// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
tms:!1,
// @option zoomReverse: Boolean = false
// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
zoomReverse:!1,
// @option detectRetina: Boolean = false
// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
detectRetina:!1,
// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1},initialize:function(t,i){this._url=t,
// detecting retina displays, adjusting tileSize and zoom levels
(i=p(this,i)).detectRetina&&Ct&&0<i.maxZoom&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),
// for https://github.com/Leaflet/Leaflet/issues/137
st||this.on("tileunload",this._onTileRemove)},
// @method setUrl(url: String, noRedraw?: Boolean): this
// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
// If the URL does not change, the layer will not be redrawn unless
// the noRedraw parameter is set to false.
setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
// callback is called when the tile has been loaded.
createTile:function(t,i){var e=document.createElement("img");return Si(e,"load",a(this._tileOnLoad,this,i,e)),Si(e,"error",a(this._tileOnError,this,i,e)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin)
/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/,e.alt="",
/*
		 Set role="presentation" to force screen readers to ignore this
		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
		*/
e.setAttribute("role","presentation"),e.src=this.getTileUrl(t),e},
// @section Extension methods
// @uninheritable
// Layers extending `TileLayer` might reimplement the following method.
// @method getTileUrl(coords: Object): String
// Called only internally, returns the URL for a tile given its coordinates.
// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
getTileUrl:function(t){var i={r:Ct?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var e=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=e),i["-y"]=e}return g(this._url,h(i,this.options))},_tileOnLoad:function(t,i){
// For https://github.com/Leaflet/Leaflet/issues/3332
et?setTimeout(a(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom;return this.options.zoomReverse&&(t=i-t),t+this.options.zoomOffset},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},
// stops loading all tiles in the background layer
_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=l,i.onerror=l,i.complete||(i.src=x,ai(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)
// Cancels any pending http requests associated with the tile
// unless we're on Android's stock browser,
// see https://github.com/Leaflet/Leaflet/issues/137
return ht||i.el.setAttribute("src",x),sn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==x))return sn.prototype._tileReady.call(this,t,i,e)}});
// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.
function an(t,i){return new rn(t,i)}
/*
 * @class TileLayer.WMS
 * @inherits TileLayer
 * @aka L.TileLayer.WMS
 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
 *
 * @example
 *
 * ```js
 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
 * 	layers: 'nexrad-n0r-900913',
 * 	format: 'image/png',
 * 	transparent: true,
 * 	attribution: "Weather data © 2012 IEM Nexrad"
 * });
 * ```
 */var hn=rn.extend({
// @section
// @aka TileLayer.WMS options
// If any custom options not documented here are used, they will be sent to the
// WMS server as extra parameters in each request URL. This can be useful for
// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
defaultWmsParams:{service:"WMS",request:"GetMap",
// @option layers: String = ''
// **(required)** Comma-separated list of WMS layers to show.
layers:"",
// @option styles: String = ''
// Comma-separated list of WMS styles.
styles:"",
// @option format: String = 'image/jpeg'
// WMS image format (use `'image/png'` for layers with transparency).
format:"image/jpeg",
// @option transparent: Boolean = false
// If `true`, the WMS service will return images with transparency.
transparent:!1,
// @option version: String = '1.1.1'
// Version of the WMS service to use
version:"1.1.1"},options:{
// @option crs: CRS = null
// Coordinate Reference System to use for the WMS requests, defaults to
// map CRS. Don't change this if you're not sure what it means.
crs:null,
// @option uppercase: Boolean = false
// If `true`, WMS request parameter keys will be uppercase.
uppercase:!1},initialize:function(t,i){this._url=t;var e=h({},this.defaultWmsParams);
// all keys that are not TileLayer options go to WMS params
for(var n in i)n in this.options||(e[n]=i[n]);var o=(i=p(this,i)).detectRetina&&Ct?2:1,s=this.getTileSize();e.width=s.x*o,e.height=s.y*o,this.wmsParams=e},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[i]=this._crs.code,rn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=R(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(1.3<=this._wmsVersion&&this._crs===Te?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=rn.prototype.getTileUrl.call(this,t);return a+m(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},
// @method setParams(params: Object, noRedraw?: Boolean): this
// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
setParams:function(t,i){return h(this.wmsParams,t),i||this.redraw(),this}});
// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
rn.WMS=hn,an.wms=function(t,i){return new hn(t,i)};
/*
 * @class Renderer
 * @inherits Layer
 * @aka L.Renderer
 *
 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
 * DOM container of the renderer, its bounds, and its zoom animation.
 *
 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
 * itself can be added or removed to the map. All paths use a renderer, which can
 * be implicit (the map will decide the type of renderer and use it automatically)
 * or explicit (using the [`renderer`](#path-renderer) option of the path).
 *
 * Do not use this class directly, use `SVG` and `Canvas` instead.
 *
 * @event update: Event
 * Fired when the renderer updates its bounds, center and zoom, for example when
 * its map has moved
 */
var un=Me.extend({
// @section
// @aka Renderer options
options:{
// @option padding: Number = 0.1
// How much to extend the clip area around the map view (relative to its size)
// e.g. 0.1 would be 10% of map view in each direction
padding:.1,
// @option tolerance: Number = 0
// How much to extend click tolerance round a path/object on the map
tolerance:0},initialize:function(t){p(this,t),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),// defined by renderer implementations
this._zoomAnimated&&_i(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=xi(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);yt?vi(this._container,a,e):yi(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){
// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
// Subclasses are responsible of firing the 'update' event.
var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new O(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ln=un.extend({getEvents:function(){var t=un.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){
// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
this._postponeUpdatePaths=!0},onAdd:function(){un.prototype.onAdd.call(this),
// Redraw vectors since canvas is cleared upon removal,
// in case of removing the renderer itself from the map.
this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Si(t,"mousemove",this._onMouseMove,this),Si(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Si(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,ai(this._container),Ei(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){un.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ct?2:1;yi(i,t.min),
// set canvas size (also clearing it); use double size on retina
i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ct&&this._ctx.scale(2,2),
// translate so we use the same path coordinates after canvas element moves
this._ctx.translate(-t.min.x,-t.min.y),
// Tell paths to redraw themselves
this.fire("update")}},_reset:function(){un.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);var i=(this._layers[u(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[u(t)],this._requestRedraw(t)},_updatePath:function(t){
// Redraw the union of the layer's old pixel
// bounds and the new pixel bounds.
this._extendRedrawBounds(t),t._project(),t._update(),
// The redraw will extend the redraw bounds
// with the new pixel bounds.
this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e,n=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<n.length;e++){
// Ignore dash array containing invalid lengths
if(i=Number(n[e]),isNaN(i))return;o.push(i)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),// clear layers in redraw bounds
this._draw(),// draw layers
this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!=o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!=o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},
// Canvas obviously doesn't have mouse events for individual drawn objects,
// so we emulate that by calculating what's under the mouse on mousemove/click manually
_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(Ui(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(
// if we're leaving the layer, fire mouseout
di(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,i){if(!this._mouseHoverThrottled){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(_i(this._container,"leaflet-interactive"),// change cursor
this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;e&&((e.prev=n)?n.next=e:e&&(
// Update first entry unless this is the
// single entry
this._drawFirst=e),i.prev=this._drawLast,(this._drawLast.next=i).next=null,this._drawLast=i,this._requestRedraw(t))}},_bringToBack:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;n&&((n.next=e)?e.prev=n:n&&(
// Update last entry unless this is the
// single entry
this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}});
/*
 * @class Canvas
 * @inherits Renderer
 * @aka L.Canvas
 *
 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
 * available in all web browsers, notably IE8, and overlapping geometries might
 * not display properly in some edge cases.
 *
 * @example
 *
 * Use Canvas by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.canvas()
 * });
 * ```
 *
 * Use a Canvas renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.canvas({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */
// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function cn(t){return Zt?new ln(t):null}
/*
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */var _n=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),dn={_initContainer:function(){this._container=ri("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(un.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=_n("shape");_i(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=_n("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ai(i),t.removeInteractiveTarget(i),delete this._layers[u(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=_n("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=v(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=_n("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){ui(t._container)},_bringToBack:function(t){li(t._container)}},pn=kt?_n:$,mn=un.extend({getEvents:function(){var t=un.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=pn("svg"),
// makes it possible to click through svg root; we'll reset it back in individual paths
this._container.setAttribute("pointer-events","none"),this._rootGroup=pn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ai(this._container),Ei(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){
// Drag-then-pinch interactions might mess up the center and zoom.
// In this case, the easiest way to prevent this is re-do the renderer
//   bounds and padding when the zooming starts.
this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){un.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;
// set size of svg-container if changed
this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),
// movement: update container viewBox so that we don't have to change coordinates of individual layers
yi(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},
// methods below are called by vector layers implementations
_initPath:function(t){var i=t._path=pn("path");
// @namespace Path
// @option className: String = null
// Custom class name set on an element. Only for SVG renderer.
t.options.className&&_i(i,t.options.className),t.options.interactive&&_i(i,"leaflet-interactive"),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ai(t._path),t.removeInteractiveTarget(t._path),delete this._layers[u(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,Q(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";
// drawing a circle with two half-arcs
this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},
// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
_bringToFront:function(t){ui(t._path)},_bringToBack:function(t){li(t._path)}});
/*
 * @class SVG
 *
 *
 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
 * with old versions of Internet Explorer.
 */
// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function fn(t){return Et||kt?new mn(t):null}kt&&mn.include(dn),Yi.include({
// @namespace Map; @method getRenderer(layer: Path): Renderer
// Returns the instance of `Renderer` that should be used to render the given
// `Path`. It will ensure that the `renderer` options of the map and paths
// are respected, and that the renderers do exist on the map.
getRenderer:function(t){
// @namespace Path; @option renderer: Renderer
// Use this specific instance of `Renderer` for this path. Takes
// precedence over the map's [default renderer](#map-renderer).
var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){
// @namespace Map; @option preferCanvas: Boolean = false
// Whether `Path`s should be rendered on a `Canvas` renderer.
// By default, all `Path`s are rendered in a `SVG` renderer.
return this.options.preferCanvas&&cn(t)||fn(t)}});
/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */
/*
 * @class Rectangle
 * @aka L.Rectangle
 * @inherits Polygon
 *
 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
 *
 * @example
 *
 * ```js
 * // define rectangle geographical bounds
 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
 *
 * // create an orange rectangle
 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
 *
 * // zoom the map to the rectangle bounds
 * map.fitBounds(bounds);
 * ```
 *
 */
var gn=Ne.extend({initialize:function(t,i){Ne.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},
// @method setBounds(latLngBounds: LatLngBounds): this
// Redraws the rectangle with the passed bounds.
setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=D(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});
// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
mn.create=pn,mn.pointsToPath=Q,De.geometryToLayer=je,De.coordsToLatLng=He,De.coordsToLatLngs=Fe,De.latLngToCoords=Ue,De.latLngsToCoords=Ve,De.getFeature=qe,De.asFeature=Ge,
/*
 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
 * (zoom to a selected bounding box), enabled by default.
 */
// @namespace Map
// @section Interaction Options
Yi.mergeOptions({
// @option boxZoom: Boolean = true
// Whether the map can be zoomed to a rectangular area specified by
// dragging the mouse while pressing the shift key.
boxZoom:!0});var vn=ee.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Si(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ei(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ai(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;
// Clear the deferred resetState if it hasn't executed yet, otherwise it
// will interrupt the interaction and orphan a box element in the container.
this._clearDeferredResetState(),this._resetState(),Xt(),Pi(),this._startPoint=this._map.mouseEventToContainerPoint(t),Si(document,{contextmenu:Di,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ri("div","leaflet-zoom-box",this._container),_i(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new O(this._point,this._startPoint),e=i.getSize();yi(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ai(this._box),di(this._container,"leaflet-crosshair")),Jt(),Li(),Ei(document,{contextmenu:Di,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){
// Postpone to next JS tick so internal click event handling
// still see it as "moved".
this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0);var i=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});
// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Yi.addInitHook("addHandler","boxZoom",vn),
/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */
// @namespace Map
// @section Interaction Options
Yi.mergeOptions({
// @option doubleClickZoom: Boolean|String = true
// Whether the map can be zoomed in by double clicking on it and
// zoomed out by double clicking while holding shift. If passed
// `'center'`, double-click zoom will zoom to the center of the
//  view regardless of where the mouse was.
doubleClickZoom:!0});var yn=ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});
// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Yi.addInitHook("addHandler","doubleClickZoom",yn),
/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */
// @namespace Map
// @section Interaction Options
Yi.mergeOptions({
// @option dragging: Boolean = true
// Whether the map be draggable with mouse/touch or not.
dragging:!0,
// @section Panning Inertia Options
// @option inertia: Boolean = *
// If enabled, panning of the map will have an inertia effect where
// the map builds momentum while dragging and continues moving in
// the same direction for some time. Feels especially nice on touch
// devices. Enabled by default unless running on old Android devices.
inertia:!rt,
// @option inertiaDeceleration: Number = 3000
// The rate with which the inertial movement slows down, in pixels/second².
inertiaDeceleration:3400,// px/s^2
// @option inertiaMaxSpeed: Number = Infinity
// Max speed of the inertial movement, in pixels/second.
inertiaMaxSpeed:1/0,// px/s
// @option easeLinearity: Number = 0.2
easeLinearity:.2,
// TODO refactor, move to CRS
// @option worldCopyJump: Boolean = false
// With this option enabled, the map tracks when you pan to another "copy"
// of the world and seamlessly jumps to the original one so that all overlays
// like markers and vector layers are still visible.
worldCopyJump:!1,
// @option maxBoundsViscosity: Number = 0.0
// If `maxBounds` is set, this option will control how solid the bounds
// are when dragging the map around. The default value of `0.0` allows the
// user to drag outside the bounds at normal speed, higher values will
// slow down map dragging outside bounds, and `1.0` makes the bounds fully
// solid, preventing the user from dragging outside the bounds.
maxBoundsViscosity:0});var xn=ee.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new he(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}_i(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){di(this._map._container,"leaflet-grab"),di(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=D(this._map.options.maxBounds);this._offsetLimit=R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){
// TODO refactor to be able to adjust map pane position after zoom
var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),M(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});
// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Yi.addInitHook("addHandler","dragging",xn),
/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */
// @namespace Map
// @section Keyboard Navigation Options
Yi.mergeOptions({
// @option keyboard: Boolean = true
// Makes the map focusable and allows users to navigate the map with keyboard
// arrows and `+`/`-` keys.
keyboard:!0,
// @option keyboardPanDelta: Number = 80
// Amount of pixels to pan when pressing an arrow key.
keyboardPanDelta:80});var wn=ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;
// make the container focusable by tabbing
t.tabIndex<=0&&(t.tabIndex="0"),Si(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ei(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){Si(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ei(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=I(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Di(t)}}});
// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Yi.addInitHook("addHandler","keyboard",wn),
/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */
// @namespace Map
// @section Interaction Options
Yi.mergeOptions({
// @section Mousewheel options
// @option scrollWheelZoom: Boolean|String = true
// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
// it will zoom to the center of the view regardless of where the mouse was.
scrollWheelZoom:!0,
// @option wheelDebounceTime: Number = 40
// Limits the rate at which a wheel can fire (in milliseconds). By default
// user can't zoom via wheel more often than once per 40 ms.
wheelDebounceTime:40,
// @option wheelPxPerZoomLevel: Number = 60
// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
// mean a change of one full zoom level. Smaller values will make wheel-zooming
// faster (and vice versa).
wheelPxPerZoomLevel:60});var Pn=ee.extend({addHooks:function(){Si(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ei(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Hi(t),e=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(e-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),n),Di(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();// stop panning and fly animations if any
// map the delta with a sigmoid function to -4..4 range leaning on -1..1
var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(0<this._delta?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});
// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Yi.addInitHook("addHandler","scrollWheelZoom",Pn),
/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */
// @namespace Map
// @section Interaction Options
Yi.mergeOptions({
// @section Touch interaction options
// @option tap: Boolean = true
// Enables mobile hacks for supporting instant taps (fixing 200ms click
// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
tap:!0,
// @option tapTolerance: Number = 15
// The max number of pixels a user can shift his finger during touch
// for it to be considered a valid tap.
tapTolerance:15});var Ln=ee.extend({addHooks:function(){Si(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ei(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){
// don't simulate click or track longpress if more than 1 touch
if(Ni(t),this._fireClick=!0,1<t.touches.length)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],e=i.target;this._startPos=this._newPos=new B(i.clientX,i.clientY),
// if touching a link, highlight it
e.tagName&&"a"===e.tagName.toLowerCase()&&_i(e,"leaflet-active"),
// simulate long hold but setting a timeout
this._holdTimeout=setTimeout(a(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),Si(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Ei(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&di(e,"leaflet-active"),this._simulateEvent("mouseup",i),
// simulate click if the touch didn't move too much
this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new B(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});
// @section Handlers
// @property tap: Handler
// Mobile touch hacks (quick tap and touch hold) handler.
!Tt||bt&&!_t||Yi.addInitHook("addHandler","tap",Ln),
/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */
// @namespace Map
// @section Interaction Options
Yi.mergeOptions({
// @section Touch interaction options
// @option touchZoom: Boolean|String = *
// Whether the map can be zoomed by touch-dragging with two fingers. If
// passed `'center'`, it will zoom to the center of the view regardless of
// where the touch events (fingers) were. Enabled for touch-capable web
// browsers except for old Androids.
touchZoom:Tt&&!rt,
// @option bounceAtZoomLimits: Boolean = true
// Set it to false if you don't want the map to zoom beyond min/max zoom
// and then bounce back when pinch-zooming.
bounceAtZoomLimits:!0});var bn=ee.extend({addHooks:function(){_i(this._map._container,"leaflet-touch-zoom"),Si(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){di(this._map._container,"leaflet-touch-zoom"),Ei(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),Si(document,"touchmove",this._onTouchMove,this),Si(document,"touchend",this._onTouchEnd,this),Ni(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(n)/this._startDist;if(this._zoom=i.getScaleZoom(o,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&o<1||this._zoom>i.getMaxZoom()&&1<o)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{
// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
var s=e._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===s.x&&0===s.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var r=a(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(r,this,!0),Ni(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,C(this._animRequest),Ei(document,"touchmove",this._onTouchMove,this),Ei(document,"touchend",this._onTouchEnd,this),
// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});
// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Yi.addInitHook("addHandler","touchZoom",bn),Yi.BoxZoom=vn,Yi.DoubleClickZoom=yn,Yi.Drag=xn,Yi.Keyboard=wn,Yi.ScrollWheelZoom=Pn,Yi.Tap=Ln,Yi.TouchZoom=bn,Object.freeze=i,t.version="1.6.0+master.2a2799b4",t.Control=Ji,t.control=Xi,t.Browser=At,t.Evented=k,t.Mixin=oe,t.Util=S,t.Class=Z,t.Handler=ee,t.extend=h,t.bind=a,t.stamp=u,t.setOptions=p,t.DomEvent=Gi,t.DomUtil=Ci,t.PosAnimation=Ki,t.Draggable=he,t.LineUtil=ge,t.PolyUtil=xe,t.Point=B,t.point=I,t.Bounds=O,t.bounds=R,t.Transformation=G,t.transformation=K,t.Projection=Le,t.LatLng=j,t.latLng=W,t.LatLngBounds=N,t.latLngBounds=D,t.CRS=F,t.GeoJSON=De,t.geoJSON=Ye,t.geoJson=Xe,t.Layer=Me,t.LayerGroup=Ce,t.layerGroup=function(t,i){return new Ce(t,i)},t.FeatureGroup=Se,t.featureGroup=function(t){return new Se(t)},t.ImageOverlay=Je,t.imageOverlay=function(t,i,e){return new Je(t,i,e)},t.VideoOverlay=$e,t.videoOverlay=
// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.
function(t,i,e){return new $e(t,i,e)},t.SVGOverlay=Qe,t.svgOverlay=function(t,i,e){return new Qe(t,i,e)},t.DivOverlay=tn,t.Popup=en,t.popup=function(t,i){return new en(t,i)},t.Tooltip=nn,t.tooltip=function(t,i){return new nn(t,i)},t.Icon=Ze,t.icon=
// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function(t){return new Ze(t)},t.DivIcon=on,t.divIcon=function(t){return new on(t)},t.Marker=Be,t.marker=
// factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function(t,i){return new Be(t,i)},t.TileLayer=rn,t.tileLayer=an,t.GridLayer=sn,t.gridLayer=function(t){return new sn(t)},t.SVG=mn,t.svg=fn,t.Renderer=un,t.Canvas=ln,t.canvas=cn,t.Path=Ae,t.CircleMarker=Ie,t.circleMarker=
// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function(t,i){return new Ie(t,i)},t.Circle=Oe,t.circle=function(t,i,e){return new Oe(t,i,e)},t.Polyline=Re,t.polyline=function(t,i){return new Re(t,i)},t.Polygon=Ne,t.polygon=function(t,i){return new Ne(t,i)},t.Rectangle=gn,t.rectangle=function(t,i){return new gn(t,i)},t.Map=Yi,t.map=
// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function(t,i){return new Yi(t,i)};var Tn=window.L;t.noConflict=function(){return window.L=Tn,this}
// Always export us to window global (see #2364)
,window.L=t});
//# sourceMappingURL=leaflet-src.js.map