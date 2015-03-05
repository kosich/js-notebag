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

	"use strict";

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);

	// TODO: try webpacks require css
	// require( '../node_modules/bootstrap/dist/css/bootstrap.css' );

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// var angular = require( 'angular' );
	// require('angular-ui-router');
	__webpack_require__(6);

	module.exports = angular.module("app", ["ui.router", "common", "templates"]).config(["$stateProvider", function ($stateProvider) {

	    $stateProvider.state("home", {
	        abstract: true,
	        templateUrl: "components/main.html",
	        controller: "main as main"
	    }).state("home.main", {
	        url: "", // {id}
	        views: {
	            item: {
	                templateUrl: "components/item.html",
	                controller: "item as item"
	            },
	            list: {
	                templateUrl: "components/list.html",
	                controller: "list as list"
	            }
	        }
	    });
	}]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var app = __webpack_require__(1);

	app.filter("shorten", function () {
	    "use strict";

	    var CUT_LEN = 30;

	    return function (text) {
	        if (!text || text.length < CUT_LEN) return text;

	        return text.slice(0, CUT_LEN) + "...";
	    };
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var app = __webpack_require__(1);
	__webpack_require__(7);
	var Note = __webpack_require__(8);

	app.controller("item", (function () {
	    function ItemView($stateParams, notesStorage) {
	        _classCallCheck(this, ItemView);

	        var noteName = $stateParams.id;
	        this.notesStorage = notesStorage;

	        console.log("trying to open ", noteName);

	        this.note = new Note(noteName, notesStorage.get(noteName));
	    }
	    ItemView.$inject = ["$stateParams", "notesStorage"];

	    _prototypeProperties(ItemView, null, {
	        reset: {
	            value: function reset() {
	                this.note = new Note();
	            },
	            writable: true,
	            configurable: true
	        },
	        save: {
	            value: function save() {
	                console.log("trying to save ", this.note.name);
	                this.notesStorage.set(this.note.name || "[no title]", this.note.text || "");
	            },
	            writable: true,
	            configurable: true
	        },
	        overwriting: {
	            get: function () {
	                // TODO: this is being called on every $digest
	                return this.notesStorage.contains(this.note.name);
	            },
	            configurable: true
	        },
	        isnew: {
	            get: function () {
	                // TODO: this is being called on every $digest
	                return !!this.note.name && !this.notesStorage.contains(this.note.name);
	            },
	            configurable: true
	        }
	    });

	    return ItemView;
	})());

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var app = __webpack_require__(1);
	__webpack_require__(7);
	var Note = __webpack_require__(8);

	app.controller("list", (function () {
	    function ListController($scope, $state, notesStorage) {
	        _classCallCheck(this, ListController);

	        console.log("list controller init");

	        var self = this;

	        // saving providers
	        this.$state = $state;
	        this.notesStorage = notesStorage;

	        this.notes = [];

	        // TODO: refactor: awfull all $digest call
	        $scope.$watch(function () {
	            return notesStorage.all;
	        }, function () {
	            self.notes = notesStorage.all;
	        }, true);
	    }
	    ListController.$inject = ["$scope", "$state", "notesStorage"];

	    _prototypeProperties(ListController, null, {
	        remove: {
	            value: function remove(note) {
	                this.notesStorage.remove(note.name);
	            },
	            writable: true,
	            configurable: true
	        },
	        routeTo: {
	            value: function routeTo(note) {
	                console.log("routing to ", note.name);
	                this.$state.go("home.item", { id: note.name });
	            },
	            writable: true,
	            configurable: true
	        }
	    });

	    return ListController;
	})());

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var app = __webpack_require__(1);
	__webpack_require__(7);
	var Note = __webpack_require__(8);

	app.controller("main", function MainController() {
	  _classCallCheck(this, MainController);
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// var angular = require( 'angular' );

	module.exports = angular.module("common", []);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var common = __webpack_require__(6);

	common.service("notesStorage", ["$window", function ($window) {
	    "use strict";

	    var storage = $window.localStorage;

	    return Object.defineProperties({
	        get: function get(name) {
	            return storage.getItem(name);
	        },
	        set: function set(name, value) {
	            return storage.setItem(name, value);
	        },
	        remove: function remove(name) {
	            return $window.localStorage.removeItem(name);
	        },
	        contains: function contains(name) {
	            return name in storage;
	        }
	    }, {
	        all: {
	            get: function () {
	                return Object.keys(storage).map(function (name) {
	                    return {
	                        name: name,
	                        text: storage[name]
	                    };
	                });
	            },
	            enumerable: true,
	            configurable: true
	        },
	        keys: {
	            get: function () {
	                return Object.keys(storage);
	            },
	            enumerable: true,
	            configurable: true
	        }
	    });
	}]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Note = function Note(name, text) {
	    _classCallCheck(this, Note);

	    this.name = name;
	    this.text = text;
	};

	module.exports = Note;

/***/ }
/******/ ])