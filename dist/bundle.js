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

	// TODO: try webpacks require css
	// require( '../node_modules/bootstrap/dist/css/bootstrap.css' );

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// var angular = require( 'angular' );
	// require('angular-ui-router');
	__webpack_require__(4);

	module.exports = angular.module("app", ["ui.router", "common", "templates"]).config(["$stateProvider", function ($stateProvider) {

	    $stateProvider.state("home", {
	        url: "",
	        templateUrl: "components/main.html",
	        controller: "main as main"
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
	__webpack_require__(5);

	app.controller("main", (function () {
	    function mainController($scope, notesStorage) {
	        _classCallCheck(this, mainController);

	        var self = this;

	        this.notesStorage = notesStorage;
	        this.notes = [];
	        this.note = {};

	        // TODO: refactor: awfull all $digest call
	        $scope.$watch(function () {
	            return notesStorage.all;
	        }, function () {
	            self.notes = notesStorage.all;
	        }, true);

	        // help functions
	        Object.defineProperty(this, "overwriting", {
	            get: function get() {
	                return notesStorage.contains(self.note.name);
	            }
	        });

	        Object.defineProperty(this, "isnew", {
	            get: function get() {
	                return !!self.note.name && !notesStorage.contains(self.note.name);
	            }
	        });
	    }
	    mainController.$inject = ["$scope", "notesStorage"];

	    _prototypeProperties(mainController, null, {
	        create: {
	            value: function create() {
	                this.note.name = "";
	                this.note.text = "";
	            },
	            writable: true,
	            configurable: true
	        },
	        save: {
	            value: function save() {
	                this.notesStorage.set(this.note.name || "[no title]", this.note.text || "");
	            },
	            writable: true,
	            configurable: true
	        },
	        open: {
	            value: function open(anote) {
	                this.note.name = anote.name;
	                this.note.text = anote.text;
	            },
	            writable: true,
	            configurable: true
	        },
	        remove: {
	            value: function remove(anote) {
	                this.notesStorage.remove(anote.name);
	            },
	            writable: true,
	            configurable: true
	        }
	    });

	    return mainController;
	})());

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// var angular = require( 'angular' );

	module.exports = angular.module("common", []);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var common = __webpack_require__(4);

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

/***/ }
/******/ ])