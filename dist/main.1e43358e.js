// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// inicializace promennych (kdyz se inicializuji v create, tak to nefunguje)
var background;
var playbutton;
var title;
var Menu = -1;
var buttonClick;
var leaderboardbutton;
var playerName; // trida scena, rozsiruje PhaserScene a musi se exportovat

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: "MenuScene",
      active: true // vstupni data

    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {}
  }, {
    key: "preload",
    value: function preload() {
      // funkce ve ktere se nactou obrazky a zvuky ze souboru assets pro vsechny sceny
      this.load.image("title", "./assets/title.png");
      this.load.image("menuBackground", "./assets/MenuBackground.jpg");
      this.load.image("menu", "./assets/Menu.png");
      this.load.image("resume", "./assets/Resume.png");
      this.load.image("play", "./assets/Play.png");
      this.load.image("leaderboard", "./assets/Leaderboard.png");
      this.load.image("nextLevel", "./assets/nextlevel.png");
      this.load.image("PacMan", "./assets/PacMan.png");
      this.load.image("PacMan2", "./assets/PacMan2.png");
      this.load.image("RedGhost", "./assets/RedGhost.png");
      this.load.image("GreenGhost", "./assets/GreenGhost.png");
      this.load.image("PurpleGhost", "./assets/PurpleGhost.png");
      this.load.image("GreyGhost", "./assets/GreyGhost.png");
      this.load.image("BlackGhost", "./assets/BlackGhost.png");
      this.load.image("Srdce", "./assets/Srdce2.png");
      this.load.image("coin", "assets/Point.png");
      this.load.image("bonus", "assets/BonusPoint.png");
    }
  }, {
    key: "create",
    value: function create() {
      // souradnice x, y  a nazev obrazku, co se do toho da
      title = this.add.image(640, 100, 'title');
      playbutton = this.add.image(640, 250, 'play');
      leaderboardbutton = this.add.image(640, 320, 'leaderboard');
      playbutton.setInteractive();
      leaderboardbutton.setInteractive();
      playbutton.on('pointerdown', function (pointer) {
        Menu = 1;
        playerName = prompt("Please enter your nickname", "Pacman");

        if (playerName === null) {
          playerName = "Pacman";
        } else {
          while (playerName.length > 20) {
            alert('Please enter a shorter name');
            playerName = prompt("Please enter your nickname", "Pacman");
          }

          localStorage.setItem("playerName", playerName);
        }
      });
      leaderboardbutton.on('pointerup', function (pointer) {
        Menu = 2;
      });
    }
  }, {
    key: "update",
    value: function update() {
      if (Menu === 1) {
        this.scene.start("PlayScene");
        Menu = 0;
      }

      if (Menu === 2) {
        this.scene.start("LeaderBoardScene");
        Menu = 0;
      }
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{}],"node_modules/easystarjs/src/instance.js":[function(require,module,exports) {
/**
 * Represents a single instance of EasyStar.
 * A path that is in the queue to eventually be found.
 */
module.exports = function() {
    this.pointsToAvoid = {};
    this.startX;
    this.callback;
    this.startY;
    this.endX;
    this.endY;
    this.nodeHash = {};
    this.openList;
};
},{}],"node_modules/easystarjs/src/node.js":[function(require,module,exports) {
/**
* A simple Node that represents a single tile on the grid.
* @param {Object} parent The parent node.
* @param {Number} x The x position on the grid.
* @param {Number} y The y position on the grid.
* @param {Number} costSoFar How far this node is in moves*cost from the start.
* @param {Number} simpleDistanceToTarget Manhatten distance to the end point.
**/
module.exports = function(parent, x, y, costSoFar, simpleDistanceToTarget) {
    this.parent = parent;
    this.x = x;
    this.y = y;
    this.costSoFar = costSoFar;
    this.simpleDistanceToTarget = simpleDistanceToTarget;

    /**
    * @return {Number} Best guess distance of a cost using this node.
    **/
    this.bestGuessDistance = function() {
        return this.costSoFar + this.simpleDistanceToTarget;
    }
};
},{}],"node_modules/heap/lib/heap.js":[function(require,module,exports) {
var define;
// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define([], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory();
    } else {
      return root.Heap = factory();
    }
  })(this, function() {
    return Heap;
  });

}).call(this);

},{}],"node_modules/heap/index.js":[function(require,module,exports) {
module.exports = require('./lib/heap');

},{"./lib/heap":"node_modules/heap/lib/heap.js"}],"node_modules/easystarjs/src/easystar.js":[function(require,module,exports) {
/**
*   EasyStar.js
*   github.com/prettymuchbryce/EasyStarJS
*   Licensed under the MIT license.
*
*   Implementation By Bryce Neal (@prettymuchbryce)
**/

var EasyStar = {}
var Instance = require('./instance');
var Node = require('./node');
var Heap = require('heap');

const CLOSED_LIST = 0;
const OPEN_LIST = 1;

module.exports = EasyStar;

var nextInstanceId = 1;

EasyStar.js = function() {
    var STRAIGHT_COST = 1.0;
    var DIAGONAL_COST = 1.4;
    var syncEnabled = false;
    var pointsToAvoid = {};
    var collisionGrid;
    var costMap = {};
    var pointsToCost = {};
    var directionalConditions = {};
    var allowCornerCutting = true;
    var iterationsSoFar;
    var instances = {};
    var instanceQueue = [];
    var iterationsPerCalculation = Number.MAX_VALUE;
    var acceptableTiles;
    var diagonalsEnabled = false;

    /**
    * Sets the collision grid that EasyStar uses.
    *
    * @param {Array|Number} tiles An array of numbers that represent
    * which tiles in your grid should be considered
    * acceptable, or "walkable".
    **/
    this.setAcceptableTiles = function(tiles) {
        if (tiles instanceof Array) {
            // Array
            acceptableTiles = tiles;
        } else if (!isNaN(parseFloat(tiles)) && isFinite(tiles)) {
            // Number
            acceptableTiles = [tiles];
        }
    };

    /**
    * Enables sync mode for this EasyStar instance..
    * if you're into that sort of thing.
    **/
    this.enableSync = function() {
        syncEnabled = true;
    };

    /**
    * Disables sync mode for this EasyStar instance.
    **/
    this.disableSync = function() {
        syncEnabled = false;
    };

    /**
     * Enable diagonal pathfinding.
     */
    this.enableDiagonals = function() {
        diagonalsEnabled = true;
    }

    /**
     * Disable diagonal pathfinding.
     */
    this.disableDiagonals = function() {
        diagonalsEnabled = false;
    }

    /**
    * Sets the collision grid that EasyStar uses.
    *
    * @param {Array} grid The collision grid that this EasyStar instance will read from.
    * This should be a 2D Array of Numbers.
    **/
    this.setGrid = function(grid) {
        collisionGrid = grid;

        //Setup cost map
        for (var y = 0; y < collisionGrid.length; y++) {
            for (var x = 0; x < collisionGrid[0].length; x++) {
                if (!costMap[collisionGrid[y][x]]) {
                    costMap[collisionGrid[y][x]] = 1
                }
            }
        }
    };

    /**
    * Sets the tile cost for a particular tile type.
    *
    * @param {Number} The tile type to set the cost for.
    * @param {Number} The multiplicative cost associated with the given tile.
    **/
    this.setTileCost = function(tileType, cost) {
        costMap[tileType] = cost;
    };

    /**
    * Sets the an additional cost for a particular point.
    * Overrides the cost from setTileCost.
    *
    * @param {Number} x The x value of the point to cost.
    * @param {Number} y The y value of the point to cost.
    * @param {Number} The multiplicative cost associated with the given point.
    **/
    this.setAdditionalPointCost = function(x, y, cost) {
        if (pointsToCost[y] === undefined) {
            pointsToCost[y] = {};
        }
        pointsToCost[y][x] = cost;
    };

    /**
    * Remove the additional cost for a particular point.
    *
    * @param {Number} x The x value of the point to stop costing.
    * @param {Number} y The y value of the point to stop costing.
    **/
    this.removeAdditionalPointCost = function(x, y) {
        if (pointsToCost[y] !== undefined) {
            delete pointsToCost[y][x];
        }
    }

    /**
    * Remove all additional point costs.
    **/
    this.removeAllAdditionalPointCosts = function() {
        pointsToCost = {};
    }

    /**
    * Sets a directional condition on a tile
    *
    * @param {Number} x The x value of the point.
    * @param {Number} y The y value of the point.
    * @param {Array.<String>} allowedDirections A list of all the allowed directions that can access
    * the tile.
    **/
    this.setDirectionalCondition = function(x, y, allowedDirections) {
        if (directionalConditions[y] === undefined) {
            directionalConditions[y] = {};
        }
        directionalConditions[y][x] = allowedDirections;
    };

    /**
    * Remove all directional conditions
    **/
    this.removeAllDirectionalConditions = function() {
        directionalConditions = {};
    };

    /**
    * Sets the number of search iterations per calculation.
    * A lower number provides a slower result, but more practical if you
    * have a large tile-map and don't want to block your thread while
    * finding a path.
    *
    * @param {Number} iterations The number of searches to prefrom per calculate() call.
    **/
    this.setIterationsPerCalculation = function(iterations) {
        iterationsPerCalculation = iterations;
    };

    /**
    * Avoid a particular point on the grid,
    * regardless of whether or not it is an acceptable tile.
    *
    * @param {Number} x The x value of the point to avoid.
    * @param {Number} y The y value of the point to avoid.
    **/
    this.avoidAdditionalPoint = function(x, y) {
        if (pointsToAvoid[y] === undefined) {
            pointsToAvoid[y] = {};
        }
        pointsToAvoid[y][x] = 1;
    };

    /**
    * Stop avoiding a particular point on the grid.
    *
    * @param {Number} x The x value of the point to stop avoiding.
    * @param {Number} y The y value of the point to stop avoiding.
    **/
    this.stopAvoidingAdditionalPoint = function(x, y) {
        if (pointsToAvoid[y] !== undefined) {
            delete pointsToAvoid[y][x];
        }
    };

    /**
    * Enables corner cutting in diagonal movement.
    **/
    this.enableCornerCutting = function() {
        allowCornerCutting = true;
    };

    /**
    * Disables corner cutting in diagonal movement.
    **/
    this.disableCornerCutting = function() {
        allowCornerCutting = false;
    };

    /**
    * Stop avoiding all additional points on the grid.
    **/
    this.stopAvoidingAllAdditionalPoints = function() {
        pointsToAvoid = {};
    };

    /**
    * Find a path.
    *
    * @param {Number} startX The X position of the starting point.
    * @param {Number} startY The Y position of the starting point.
    * @param {Number} endX The X position of the ending point.
    * @param {Number} endY The Y position of the ending point.
    * @param {Function} callback A function that is called when your path
    * is found, or no path is found.
    * @return {Number} A numeric, non-zero value which identifies the created instance. This value can be passed to cancelPath to cancel the path calculation.
    *
    **/
    this.findPath = function(startX, startY, endX, endY, callback) {
        // Wraps the callback for sync vs async logic
        var callbackWrapper = function(result) {
            if (syncEnabled) {
                callback(result);
            } else {
                setTimeout(function() {
                    callback(result);
                });
            }
        }

        // No acceptable tiles were set
        if (acceptableTiles === undefined) {
            throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");
        }
        // No grid was set
        if (collisionGrid === undefined) {
            throw new Error("You can't set a path without first calling setGrid() on EasyStar.");
        }

        // Start or endpoint outside of scope.
        if (startX < 0 || startY < 0 || endX < 0 || endY < 0 ||
        startX > collisionGrid[0].length-1 || startY > collisionGrid.length-1 ||
        endX > collisionGrid[0].length-1 || endY > collisionGrid.length-1) {
            throw new Error("Your start or end point is outside the scope of your grid.");
        }

        // Start and end are the same tile.
        if (startX===endX && startY===endY) {
            callbackWrapper([]);
            return;
        }

        // End point is not an acceptable tile.
        var endTile = collisionGrid[endY][endX];
        var isAcceptable = false;
        for (var i = 0; i < acceptableTiles.length; i++) {
            if (endTile === acceptableTiles[i]) {
                isAcceptable = true;
                break;
            }
        }

        if (isAcceptable === false) {
            callbackWrapper(null);
            return;
        }

        // Create the instance
        var instance = new Instance();
        instance.openList = new Heap(function(nodeA, nodeB) {
            return nodeA.bestGuessDistance() - nodeB.bestGuessDistance();
        });
        instance.isDoneCalculating = false;
        instance.nodeHash = {};
        instance.startX = startX;
        instance.startY = startY;
        instance.endX = endX;
        instance.endY = endY;
        instance.callback = callbackWrapper;

        instance.openList.push(coordinateToNode(instance, instance.startX,
            instance.startY, null, STRAIGHT_COST));

        var instanceId = nextInstanceId ++;
        instances[instanceId] = instance;
        instanceQueue.push(instanceId);
        return instanceId;
    };

    /**
     * Cancel a path calculation.
     *
     * @param {Number} instanceId The instance ID of the path being calculated
     * @return {Boolean} True if an instance was found and cancelled.
     *
     **/
    this.cancelPath = function(instanceId) {
        if (instanceId in instances) {
            delete instances[instanceId];
            // No need to remove it from instanceQueue
            return true;
        }
        return false;
    };

    /**
    * This method steps through the A* Algorithm in an attempt to
    * find your path(s). It will search 4-8 tiles (depending on diagonals) for every calculation.
    * You can change the number of calculations done in a call by using
    * easystar.setIteratonsPerCalculation().
    **/
    this.calculate = function() {
        if (instanceQueue.length === 0 || collisionGrid === undefined || acceptableTiles === undefined) {
            return;
        }
        for (iterationsSoFar = 0; iterationsSoFar < iterationsPerCalculation; iterationsSoFar++) {
            if (instanceQueue.length === 0) {
                return;
            }

            if (syncEnabled) {
                // If this is a sync instance, we want to make sure that it calculates synchronously.
                iterationsSoFar = 0;
            }

            var instanceId = instanceQueue[0];
            var instance = instances[instanceId];
            if (typeof instance == 'undefined') {
                // This instance was cancelled
                instanceQueue.shift();
                continue;
            }

            // Couldn't find a path.
            if (instance.openList.size() === 0) {
                instance.callback(null);
                delete instances[instanceId];
                instanceQueue.shift();
                continue;
            }

            var searchNode = instance.openList.pop();

            // Handles the case where we have found the destination
            if (instance.endX === searchNode.x && instance.endY === searchNode.y) {
                var path = [];
                path.push({x: searchNode.x, y: searchNode.y});
                var parent = searchNode.parent;
                while (parent!=null) {
                    path.push({x: parent.x, y:parent.y});
                    parent = parent.parent;
                }
                path.reverse();
                var ip = path;
                instance.callback(ip);
                delete instances[instanceId];
                instanceQueue.shift();
                continue;
            }

            searchNode.list = CLOSED_LIST;

            if (searchNode.y > 0) {
                checkAdjacentNode(instance, searchNode,
                    0, -1, STRAIGHT_COST * getTileCost(searchNode.x, searchNode.y-1));
            }
            if (searchNode.x < collisionGrid[0].length-1) {
                checkAdjacentNode(instance, searchNode,
                    1, 0, STRAIGHT_COST * getTileCost(searchNode.x+1, searchNode.y));
            }
            if (searchNode.y < collisionGrid.length-1) {
                checkAdjacentNode(instance, searchNode,
                    0, 1, STRAIGHT_COST * getTileCost(searchNode.x, searchNode.y+1));
            }
            if (searchNode.x > 0) {
                checkAdjacentNode(instance, searchNode,
                    -1, 0, STRAIGHT_COST * getTileCost(searchNode.x-1, searchNode.y));
            }
            if (diagonalsEnabled) {
                if (searchNode.x > 0 && searchNode.y > 0) {

                    if (allowCornerCutting ||
                        (isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y-1, searchNode) &&
                        isTileWalkable(collisionGrid, acceptableTiles, searchNode.x-1, searchNode.y, searchNode))) {

                        checkAdjacentNode(instance, searchNode,
                            -1, -1, DIAGONAL_COST * getTileCost(searchNode.x-1, searchNode.y-1));
                    }
                }
                if (searchNode.x < collisionGrid[0].length-1 && searchNode.y < collisionGrid.length-1) {

                    if (allowCornerCutting ||
                        (isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y+1, searchNode) &&
                        isTileWalkable(collisionGrid, acceptableTiles, searchNode.x+1, searchNode.y, searchNode))) {

                        checkAdjacentNode(instance, searchNode,
                            1, 1, DIAGONAL_COST * getTileCost(searchNode.x+1, searchNode.y+1));
                    }
                }
                if (searchNode.x < collisionGrid[0].length-1 && searchNode.y > 0) {

                    if (allowCornerCutting ||
                        (isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y-1, searchNode) &&
                        isTileWalkable(collisionGrid, acceptableTiles, searchNode.x+1, searchNode.y, searchNode))) {

                        checkAdjacentNode(instance, searchNode,
                            1, -1, DIAGONAL_COST * getTileCost(searchNode.x+1, searchNode.y-1));
                    }
                }
                if (searchNode.x > 0 && searchNode.y < collisionGrid.length-1) {

                    if (allowCornerCutting ||
                        (isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y+1, searchNode) &&
                        isTileWalkable(collisionGrid, acceptableTiles, searchNode.x-1, searchNode.y, searchNode))) {

                        checkAdjacentNode(instance, searchNode,
                            -1, 1, DIAGONAL_COST * getTileCost(searchNode.x-1, searchNode.y+1));
                    }
                }
            }

        }
    };

    // Private methods follow
    var checkAdjacentNode = function(instance, searchNode, x, y, cost) {
        var adjacentCoordinateX = searchNode.x+x;
        var adjacentCoordinateY = searchNode.y+y;

        if ((pointsToAvoid[adjacentCoordinateY] === undefined ||
             pointsToAvoid[adjacentCoordinateY][adjacentCoordinateX] === undefined) &&
            isTileWalkable(collisionGrid, acceptableTiles, adjacentCoordinateX, adjacentCoordinateY, searchNode)) {
            var node = coordinateToNode(instance, adjacentCoordinateX,
                adjacentCoordinateY, searchNode, cost);

            if (node.list === undefined) {
                node.list = OPEN_LIST;
                instance.openList.push(node);
            } else if (searchNode.costSoFar + cost < node.costSoFar) {
                node.costSoFar = searchNode.costSoFar + cost;
                node.parent = searchNode;
                instance.openList.updateItem(node);
            }
        }
    };

    // Helpers
    var isTileWalkable = function(collisionGrid, acceptableTiles, x, y, sourceNode) {
        var directionalCondition = directionalConditions[y] && directionalConditions[y][x];
        if (directionalCondition) {
            var direction = calculateDirection(sourceNode.x - x, sourceNode.y - y)
            var directionIncluded = function () {
                for (var i = 0; i < directionalCondition.length; i++) {
                    if (directionalCondition[i] === direction) return true
                }
                return false
            }
            if (!directionIncluded()) return false
        }
        for (var i = 0; i < acceptableTiles.length; i++) {
            if (collisionGrid[y][x] === acceptableTiles[i]) {
                return true;
            }
        }

        return false;
    };

    /**
     * -1, -1 | 0, -1  | 1, -1
     * -1,  0 | SOURCE | 1,  0
     * -1,  1 | 0,  1  | 1,  1
     */
    var calculateDirection = function (diffX, diffY) {
        if (diffX === 0 && diffY === -1) return EasyStar.TOP
        else if (diffX === 1 && diffY === -1) return EasyStar.TOP_RIGHT
        else if (diffX === 1 && diffY === 0) return EasyStar.RIGHT
        else if (diffX === 1 && diffY === 1) return EasyStar.BOTTOM_RIGHT
        else if (diffX === 0 && diffY === 1) return EasyStar.BOTTOM
        else if (diffX === -1 && diffY === 1) return EasyStar.BOTTOM_LEFT
        else if (diffX === -1 && diffY === 0) return EasyStar.LEFT
        else if (diffX === -1 && diffY === -1) return EasyStar.TOP_LEFT
        throw new Error('These differences are not valid: ' + diffX + ', ' + diffY)
    };

    var getTileCost = function(x, y) {
        return (pointsToCost[y] && pointsToCost[y][x]) || costMap[collisionGrid[y][x]]
    };

    var coordinateToNode = function(instance, x, y, parent, cost) {
        if (instance.nodeHash[y] !== undefined) {
            if (instance.nodeHash[y][x] !== undefined) {
                return instance.nodeHash[y][x];
            }
        } else {
            instance.nodeHash[y] = {};
        }
        var simpleDistanceToTarget = getDistance(x, y, instance.endX, instance.endY);
        if (parent!==null) {
            var costSoFar = parent.costSoFar + cost;
        } else {
            costSoFar = 0;
        }
        var node = new Node(parent,x,y,costSoFar,simpleDistanceToTarget);
        instance.nodeHash[y][x] = node;
        return node;
    };

    var getDistance = function(x1,y1,x2,y2) {
        if (diagonalsEnabled) {
            // Octile distance
            var dx = Math.abs(x1 - x2);
            var dy = Math.abs(y1 - y2);
            if (dx < dy) {
                return DIAGONAL_COST * dx + dy;
            } else {
                return DIAGONAL_COST * dy + dx;
            }
        } else {
            // Manhattan distance
            var dx = Math.abs(x1 - x2);
            var dy = Math.abs(y1 - y2);
            return (dx + dy);
        }
    };
}

EasyStar.TOP = 'TOP'
EasyStar.TOP_RIGHT = 'TOP_RIGHT'
EasyStar.RIGHT = 'RIGHT'
EasyStar.BOTTOM_RIGHT = 'BOTTOM_RIGHT'
EasyStar.BOTTOM = 'BOTTOM'
EasyStar.BOTTOM_LEFT = 'BOTTOM_LEFT'
EasyStar.LEFT = 'LEFT'
EasyStar.TOP_LEFT = 'TOP_LEFT'

},{"./instance":"node_modules/easystarjs/src/instance.js","./node":"node_modules/easystarjs/src/node.js","heap":"node_modules/heap/index.js"}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// inicializace promennych (kdyz se inicializuji v create, tak to nefunguje)
var keys;
var PacMan;
var RedGhost;
var GreenGhost;
var PurpleGhost;
var GreyGhost;
var CoinLayer;
var BonusLayer;
var coins;
var bonus;
var coinScore = 0;
var level = 1;
var topLayer;
var map;
var terrain;
var bonusF;
var text;
var esc;
var resume;
var temp = 0;
var temp2 = 0;
var lives = 3;
var Srdce1;
var Srdce2;
var Srdce3;
var timedEvent;
var scoreField = [];
var spawn = 0;
var toX;
var toY;
var fromX;
var fromY;
var finder;
var grid; // trida scena, rozsiruje PhaserScene a musi se exportovat

var PlayScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: "PlayScene" // vstupni data

    }));
  }

  _createClass(PlayScene, [{
    key: "init",
    value: function init(data) {}
  }, {
    key: "preload",
    value: function preload() {
      // funkce ve ktere se nactou obrazky a zvuky ze souboru assets pro vsechny sceny
      this.load.tilemapTiledJSON("map", "./assets/Tilemaps/map.json");
      this.load.image("terrain", "./assets/Tilesets/BlokyF.png");
    }
  }, {
    key: "create",
    value: function create() {
      lives = 3;
      bonusF = false;
      coinScore = 0;
      level = 1;
      temp = 0;
      temp2 = 0;
      spawn = 0;

      function getTileID(x, y) {
        var tile = map.getTileAt(x, y);
        return tile.index;
      }

      ;

      function collectCoin(PacMan, coin) {
        coin.destroy(coin.x, coin.y);
        coinScore++;
        text.setText("Nickname: ".concat(localStorage.getItem("playerName"), "   Score: ").concat(coinScore));
        return false;
      }

      function collectBonus(PacMan, bonus) {
        bonus.destroy(bonus.x, bonus.y);
        bonusF = true;
        RedGhost.setTexture("BlackGhost");
        PurpleGhost.setTexture("BlackGhost");
        GreenGhost.setTexture("BlackGhost");
        GreyGhost.setTexture("BlackGhost");
        timedEvent = this.time.delayedCall(3000, waitEvent, [], this);

        function waitEvent() {
          RedGhost.setTexture("RedGhost");
          PurpleGhost.setTexture("PurpleGhost");
          GreenGhost.setTexture("GreenGhost");
          GreyGhost.setTexture("GreyGhost");
          bonusF = false;
          temp2 = 0;
        }

        return false;
      }

      function damageR() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          spawn = 0;
          return false;
        } else {
          var respawnEvent = function respawnEvent() {
            if (lives === test) {
              RedGhost.x = 656;
              RedGhost.y = 304;
            }

            temp2 = 0;
          };

          var test = lives;
          RedGhost.x = 646;
          RedGhost.y = 400;
          timedEvent = this.time.delayedCall(3000, respawnEvent, [], this);
        }
      }

      function damageG() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          spawn = 0;
          return false;
        } else {
          var respawnEvent = function respawnEvent() {
            if (lives === test) {
              GreenGhost.x = 1232;
              GreenGhost.y = 464;
            }
          };

          var test = lives;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          var timedEvent = this.time.delayedCall(3000, respawnEvent, [], this);
        }
      }

      function damageP() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          spawn = 0;
          return false;
        } else {
          var respawnEvent1 = function respawnEvent1() {
            if (lives === test) {
              PurpleGhost.x = 48;
              PurpleGhost.y = 464;
            }
          };

          var test = lives;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          var timedEvent1 = this.time.delayedCall(3000, respawnEvent1, [], this);
        }
      }

      function damageGrey() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          spawn = 0;
          return false;
        } else {
          var respawnEvent2 = function respawnEvent2() {
            if (lives === test) {
              GreyGhost.x = 656;
              GreyGhost.y = 848;
            }
          };

          var test = lives;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          var timedEvent2 = this.time.delayedCall(3000, respawnEvent2, [], this);
        }
      }

      keys = this.input.keyboard.addKeys("W,Q,E,A,D,S");
      esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
      map = this.add.tilemap("map");
      terrain = map.addTilesetImage("Bloky", "terrain");
      topLayer = map.createStaticLayer("top", [terrain], 0, 0).setDepth(-1);
      Srdce1 = this.add.image(1000, 15, 'Srdce');
      Srdce2 = this.add.image(1050, 15, 'Srdce');
      Srdce3 = this.add.image(1100, 15, 'Srdce');
      CoinLayer = map.getObjectLayer('points')['objects'];
      coins = this.physics.add.staticGroup();
      CoinLayer.forEach(function (object) {
        var obj = coins.create(object.x + 16, object.y - 16, "coin");
        obj.setScale(0.5);
        obj.body.width = object.width;
        obj.body.height = object.height;
      });
      BonusLayer = map.getObjectLayer('bonus')['objects'];
      bonus = this.physics.add.staticGroup();
      BonusLayer.forEach(function (object) {
        var obj = bonus.create(object.x + 16, object.y - 16, "bonus");
        obj.setScale(0.5);
        obj.body.width = object.width;
        obj.body.height = object.height;
      });
      PacMan = this.physics.add.image(656, 560, 'PacMan');
      RedGhost = this.physics.add.image(656, 304, 'RedGhost');
      GreenGhost = this.physics.add.image(688, 400, 'GreenGhost');
      PurpleGhost = this.physics.add.image(592, 400, 'PurpleGhost');
      GreyGhost = this.physics.add.image(640, 464, 'GreyGhost');
      topLayer.setCollisionByProperty({
        collide: true
      });
      this.physics.add.collider(PacMan, topLayer);
      this.physics.add.collider(RedGhost, topLayer);
      PacMan.setCollideWorldBounds(false);
      RedGhost.setCollideWorldBounds(true);
      this.physics.add.overlap(PacMan, coins, collectCoin, null, this);
      this.physics.add.overlap(PacMan, bonus, collectBonus, null, this);
      this.physics.add.overlap(PacMan, RedGhost, damageR, null, this);
      this.physics.add.overlap(PacMan, GreyGhost, damageGrey, null, this);
      this.physics.add.overlap(PacMan, GreenGhost, damageG, null, this);
      this.physics.add.overlap(PacMan, PurpleGhost, damageP, null, this);

      var easystarjs = require('easystarjs');

      var easystar = new easystarjs.js();
      finder = easystar;
      grid = [];

      for (var y = 0; y < map.height; y++) {
        var col = [];

        for (var x = 0; x < map.width; x++) {
          col.push(getTileID(x, y));
        }

        grid.push(col);
      }

      finder.setGrid(grid);
      var tileset = map.tilesets[0];
      var properties = tileset.tileProperties;
      var acceptableTiles = [];

      for (var i = tileset.firstgid - 1; i < 1120; i++) {
        if (!properties.hasOwnProperty(i)) {
          acceptableTiles.push(i + 1);
          continue;
        }

        if (!properties[i].collide) acceptableTiles.push(i + 1);
      }

      finder.setAcceptableTiles(acceptableTiles);
      text = this.add.text(100, 10, "Nickname: ".concat(localStorage.getItem("playerName"), "   Score: ").concat(coinScore), {
        fontSize: '20px',
        fill: '#ffa500'
      });
      text.setScrollFactor(0);
      var text2 = this.add.text(900, 10, "Lives:", {
        fontSize: '20px',
        fill: '#ff0000'
      });
      text2.setScrollFactor(0);
    }
  }, {
    key: "update",
    value: function update() {
      // funkce, ktera updatuje scenu
      if (lives === 2) {
        Srdce3.visible = false;
      }

      if (lives === 1) {
        Srdce2.visible = false;
      }

      if (lives === 0) {
        var loseEvent = function loseEvent() {
          // nacteni skore a pridani nove serazeneho skore do pameti browseru
          var testObject = JSON.parse(localStorage.getItem("score"));

          if (testObject !== null) {
            scoreField = JSON.parse(localStorage.getItem("score"));
          }

          var scoreObject = {
            playerName: localStorage.getItem("playerName"),
            score: coinScore
          };

          if (scoreField === null || scoreField === undefined) {
            scoreField[0] = scoreObject;
          } else {
            scoreField.push(scoreObject);
            var length = scoreField.length;

            for (var i = length - 1; i >= 0; i--) {
              for (var j = length - i; j > 0; j--) {
                if (scoreField[j] === undefined) {
                  break;
                }

                if (scoreField[j].score > scoreField[j - 1].score) {
                  var tmp = scoreField[j];
                  scoreField[j] = scoreField[j - 1];
                  scoreField[j - 1] = tmp;
                }
              }
            }
          }

          localStorage.setItem("score", JSON.stringify(scoreField));
          coinScore = 0;
          this.scene.stop();
          this.scene.launch("MenuScene");
        };

        Srdce1.visible = false;
        var text3 = this.add.text(325, 100, "Game Over :(", {
          fontSize: '80px',
          fill: '#ff0000'
        });
        text3.setScrollFactor(0);
        timedEvent = this.time.delayedCall(3000, loseEvent, [], this);
      }

      if (spawn === 0) {
        var spawn1Event = function spawn1Event() {
          PurpleGhost.x = 48;
          PurpleGhost.y = 464;
        };

        var spawn2Event = function spawn2Event() {
          GreenGhost.x = 1232;
          GreenGhost.y = 464;
        };

        var spawn3Event = function spawn3Event() {
          GreyGhost.x = 656;
          GreyGhost.y = 848;
        };

        timedEvent = this.time.delayedCall(3000, spawn1Event, [], this);
        timedEvent = this.time.delayedCall(6000, spawn2Event, [], this);
        timedEvent = this.time.delayedCall(9000, spawn3Event, [], this);
        spawn = 1;
      }

      if (coinScore === 159) {
        var winEvent = function winEvent() {
          // nacteni skore a pridani nove serazeneho skore do pameti browseru
          var testObject = JSON.parse(localStorage.getItem("score"));

          if (testObject !== null) {
            scoreField = JSON.parse(localStorage.getItem("score"));
          }

          var scoreObject = {
            playerName: localStorage.getItem("playerName"),
            score: coinScore
          };

          if (scoreField === null || scoreField === undefined) {
            scoreField[0] = scoreObject;
          } else {
            scoreField.push(scoreObject);
            var length = scoreField.length;

            for (var i = length - 1; i >= 0; i--) {
              for (var j = length - i; j > 0; j--) {
                if (scoreField[j] === undefined) {
                  break;
                }

                if (scoreField[j].score > scoreField[j - 1].score) {
                  var tmp = scoreField[j];
                  scoreField[j] = scoreField[j - 1];
                  scoreField[j - 1] = tmp;
                }
              }
            }
          }

          localStorage.setItem("score", JSON.stringify(scoreField));
          coinScore = 0;
          this.scene.stop();
          this.scene.launch("MenuScene");
        };

        var text3 = this.add.text(230, 100, "You won this level!", {
          fontSize: '80px',
          fill: '#ff0000'
        });
        text3.setScrollFactor(0);
        timedEvent = this.time.delayedCall(3000, winEvent, [], this);
      }

      if (temp2 === 72) {
        toX = Math.floor(PacMan.x / 32);
        toY = Math.floor(PacMan.y / 32);
        fromX = Math.floor(RedGhost.x / 32);
        fromY = Math.floor(RedGhost.y / 32);
        finder.findPath(fromX, fromY, toX, toY, function (path) {
          if (path === null) {} else {
            if (bonusF === false) {
              RedGhost.x = Math.floor(path[1].x * 32) + 16;
              RedGhost.y = Math.floor(path[1].y * 32) + 16;
              temp2 = 0;
            }
          }
        });
      }

      finder.calculate();
      temp2 = temp2 + 1;

      if (PacMan.x > 1270) {
        PacMan.x = 10;
      }

      if (PacMan.x < 10) {
        PacMan.x = 1270;
      }

      if (keys.W.isDown || keys.S.isDown || keys.A.isDown || keys.D.isDown) {
        PacMan.setTexture("PacMan");

        if (keys.W.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.x = Math.floor(PacMan.x / 16) * 16;

            if (Math.floor(PacMan.x) % 32 == 0) {
              PacMan.x = PacMan.x - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityY(-400);
          PacMan.angle = 270;
        } else if (keys.S.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.x = Math.floor(PacMan.x / 16) * 16;

            if (Math.floor(PacMan.x) % 32 == 0) {
              PacMan.x = PacMan.x - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityY(+400);
          PacMan.angle = 90;
        }

        if (keys.A.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.y = Math.floor(PacMan.y / 16) * 16;

            if (Math.floor(PacMan.y) % 32 == 0) {
              PacMan.y = PacMan.y - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityX(-400);
          PacMan.angle = 0;
          PacMan.setTexture("PacMan2");
        } else if (keys.D.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.y = Math.floor(PacMan.y / 16) * 16;

            if (Math.floor(PacMan.y) % 32 == 0) {
              PacMan.y = PacMan.y - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityX(400);
          PacMan.angle = 0;
        }
      }

      if (Phaser.Input.Keyboard.JustDown(esc)) {
        this.scene.pause();
        this.scene.launch("PauseScene", {
          level: level,
          coinScore: coinScore
        }); //      music.pause();

        keys.W.isDown = false;
        keys.A.isDown = false;
        keys.S.isDown = false;
        keys.D.isDown = false;
        resume = true;
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"easystarjs":"node_modules/easystarjs/src/easystar.js"}],"src/scenes/PlayScene2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene2 = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// inicializace promennych (kdyz se inicializuji v create, tak to nefunguje)
var keys;
var PacMan;
var RedGhost;
var GreenGhost;
var PurpleGhost;
var GreyGhost;
var CoinLayer;
var BonusLayer;
var coins;
var bonus;
var coinScore = 159;
var health = 3;
var level = 1;
var topLayer;
var botLayer;
var map;
var terrain;
var bonusF;
var text;
var x;
var y;
var esc;
var resume;
var temp = 0;
var temp2 = 0;
var lives = 3;
var Srdce1;
var Srdce2;
var Srdce3;
var timedEvent;
var scoreField = [];
var toX;
var toY;
var fromX;
var fromY;
var finder;
var grid; // trida scena, rozsiruje PhaserScene a musi se exportovat

var PlayScene2 =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene2, _Phaser$Scene);

  function PlayScene2() {
    _classCallCheck(this, PlayScene2);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene2).call(this, {
      key: "PlayScene2" // vstupni data

    }));
  }

  _createClass(PlayScene2, [{
    key: "init",
    value: function init(data) {}
  }, {
    key: "preload",
    value: function preload() {// funkce ve ktere se nactou obrazky a zvuky ze souboru assets pro vsechny sceny
    }
  }, {
    key: "create",
    value: function create() {
      lives = 3;
      bonusF = false;

      function getTileID(x, y) {
        var tile = map.getTileAt(x, y);
        return tile.index;
      }

      ;

      function collectCoin(PacMan, coin) {
        coin.destroy(coin.x, coin.y);
        coinScore++;
        text.setText("Nickname: ".concat(localStorage.getItem("playerName"), "   Score: ").concat(coinScore));
        return false;
      }

      function collectBonus(PacMan, bonus) {
        bonus.destroy(bonus.x, bonus.y);
        bonusF = true;
        RedGhost.setTexture("BlackGhost");
        PurpleGhost.setTexture("BlackGhost");
        GreenGhost.setTexture("BlackGhost");
        GreyGhost.setTexture("BlackGhost");
        timedEvent = this.time.delayedCall(3000, waitEvent, [], this);

        function waitEvent() {
          RedGhost.setTexture("RedGhost");
          PurpleGhost.setTexture("PurpleGhost");
          GreenGhost.setTexture("GreenGhost");
          GreyGhost.setTexture("GreyGhost");
          bonusF = false;
          temp2 = 0;
        }

        return false;
      }

      function damageR() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          return false;
        } else {
          RedGhost.x = 656;
          RedGhost.y = 304;
        }
      }

      function damageG() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          return false;
        } else {
          GreenGhost.x = 688;
          GreenGhost.y = 400;
        }
      }

      function damageP() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          return false;
        } else {
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
        }
      }

      function damageO() {
        if (bonusF === false) {
          PacMan.setVelocityX(0);
          PacMan.setVelocityY(0);
          PacMan.x = 656;
          PacMan.y = 560;
          RedGhost.x = 656;
          RedGhost.y = 304;
          PurpleGhost.x = 592;
          PurpleGhost.y = 400;
          GreyGhost.x = 640;
          GreyGhost.y = 464;
          GreenGhost.x = 688;
          GreenGhost.y = 400;
          lives = lives - 1;
          return false;
        } else {
          GreyGhost.x = 640;
          GreyGhost.y = 464;
        }
      }

      keys = this.input.keyboard.addKeys("W,Q,E,A,D,S");
      esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
      map = this.add.tilemap("map");
      terrain = map.addTilesetImage("Bloky", "terrain");
      topLayer = map.createStaticLayer("top", [terrain], 0, 0).setDepth(-1);
      Srdce1 = this.add.image(1000, 15, 'Srdce');
      Srdce2 = this.add.image(1050, 15, 'Srdce');
      Srdce3 = this.add.image(1100, 15, 'Srdce');
      CoinLayer = map.getObjectLayer('points')['objects'];
      coins = this.physics.add.staticGroup();
      CoinLayer.forEach(function (object) {
        var obj = coins.create(object.x + 16, object.y - 16, "coin");
        obj.setScale(0.5);
        obj.body.width = object.width;
        obj.body.height = object.height;
      });
      BonusLayer = map.getObjectLayer('bonus')['objects'];
      bonus = this.physics.add.staticGroup();
      BonusLayer.forEach(function (object) {
        var obj = bonus.create(object.x + 16, object.y - 16, "bonus");
        obj.setScale(0.5);
        obj.body.width = object.width;
        obj.body.height = object.height;
      });
      PacMan = this.physics.add.image(656, 560, 'PacMan');
      RedGhost = this.physics.add.image(656, 304, 'RedGhost');
      GreenGhost = this.physics.add.image(688, 400, 'GreenGhost');
      PurpleGhost = this.physics.add.image(592, 400, 'PurpleGhost');
      GreyGhost = this.physics.add.image(640, 464, 'GreyGhost');
      topLayer.setCollisionByProperty({
        collide: true
      });
      this.physics.add.collider(PacMan, topLayer);
      this.physics.add.collider(RedGhost, topLayer);
      PacMan.setCollideWorldBounds(false);
      RedGhost.setCollideWorldBounds(true);
      this.physics.add.overlap(PacMan, coins, collectCoin, null, this);
      this.physics.add.overlap(PacMan, bonus, collectBonus, null, this);
      this.physics.add.overlap(PacMan, RedGhost, damageR, null, this);
      this.physics.add.overlap(PacMan, GreyGhost, damageO, null, this);
      this.physics.add.overlap(PacMan, GreenGhost, damageG, null, this);
      this.physics.add.overlap(PacMan, PurpleGhost, damageP, null, this);

      var easystarjs = require('easystarjs');

      var easystar = new easystarjs.js();
      finder = easystar;
      grid = [];

      for (var y = 0; y < map.height; y++) {
        var col = [];

        for (var x = 0; x < map.width; x++) {
          col.push(getTileID(x, y));
        }

        grid.push(col);
      }

      finder.setGrid(grid);
      var tileset = map.tilesets[0];
      var properties = tileset.tileProperties;
      var acceptableTiles = [];

      for (var i = tileset.firstgid - 1; i < 1120; i++) {
        if (!properties.hasOwnProperty(i)) {
          acceptableTiles.push(i + 1);
          continue;
        }

        if (!properties[i].collide) acceptableTiles.push(i + 1);
      }

      finder.setAcceptableTiles(acceptableTiles);
      text = this.add.text(100, 10, "Nickname: ".concat(localStorage.getItem("playerName"), "   Score: ").concat(coinScore), {
        fontSize: '20px',
        fill: '#ffa500'
      });
      text.setScrollFactor(0);
      var text2 = this.add.text(900, 10, "Lives:", {
        fontSize: '20px',
        fill: '#ff0000'
      });
      text2.setScrollFactor(0);
    }
  }, {
    key: "update",
    value: function update() {
      // funkce, ktera updatuje scenu
      if (lives === 2) {
        Srdce3.visible = false;
      }

      if (lives === 1) {
        Srdce2.visible = false;
      }

      if (lives === 0) {
        var loseEvent = function loseEvent() {
          // nacteni skore a pridani nove serazeneho skore do pameti browseru
          var testObject = JSON.parse(localStorage.getItem("score"));

          if (testObject !== null) {
            scoreField = JSON.parse(localStorage.getItem("score"));
          }

          var scoreObject = {
            playerName: localStorage.getItem("playerName"),
            score: coinScore
          };

          if (scoreField === null || scoreField === undefined) {
            scoreField[0] = scoreObject;
          } else {
            scoreField.push(scoreObject);
            var length = scoreField.length;

            for (var i = length - 1; i >= 0; i--) {
              for (var j = length - i; j > 0; j--) {
                if (scoreField[j] === undefined) {
                  break;
                }

                if (scoreField[j].score > scoreField[j - 1].score) {
                  var tmp = scoreField[j];
                  scoreField[j] = scoreField[j - 1];
                  scoreField[j - 1] = tmp;
                }
              }
            }
          }

          localStorage.setItem("score", JSON.stringify(scoreField));
          coinScore = 0;
          this.scene.stop();
          this.scene.launch("MenuScene");
        };

        Srdce1.visible = false;
        var text3 = this.add.text(325, 100, "Game Over :(", {
          fontSize: '80px',
          fill: '#ff0000'
        });
        text3.setScrollFactor(0);
        timedEvent = this.time.delayedCall(3000, loseEvent, [], this);
      }

      if (coinScore === 159
      /*+ novy pocet*/
      ) {
          var winEvent = function winEvent() {
            this.scene.stop();
            this.scene.launch("MenuScene"); //   this.scene.launch("Level2Scene");
          };

          var text3 = this.add.text(310, 100, "You won this level!", {
            fontSize: '80px',
            fill: '#ff0000'
          });
          text3.setScrollFactor(0);
          timedEvent = this.time.delayedCall(3000, winEvent, [], this);
        }

      if (temp2 === 72) {
        toX = Math.floor(PacMan.x / 32);
        toY = Math.floor(PacMan.y / 32);
        fromX = Math.floor(RedGhost.x / 32);
        fromY = Math.floor(RedGhost.y / 32);
        finder.findPath(fromX, fromY, toX, toY, function (path) {
          if (path === null) {} else {
            if (bonusF === false) {
              RedGhost.x = Math.floor(path[1].x * 32) + 16;
              RedGhost.y = Math.floor(path[1].y * 32) + 16;
              temp2 = 0;
            }
          }
        });
      }

      finder.calculate();
      temp2 = temp2 + 1;

      if (PacMan.x > 1270) {
        PacMan.x = 10;
      }

      if (PacMan.x < 10) {
        PacMan.x = 1270;
      }

      if (keys.W.isDown || keys.S.isDown || keys.A.isDown || keys.D.isDown) {
        PacMan.setTexture("PacMan");

        if (keys.W.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.x = Math.floor(PacMan.x / 16) * 16;

            if (Math.floor(PacMan.x) % 32 == 0) {
              PacMan.x = PacMan.x - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityY(-400);
          PacMan.angle = 270;
        } else if (keys.S.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.x = Math.floor(PacMan.x / 16) * 16;

            if (Math.floor(PacMan.x) % 32 == 0) {
              PacMan.x = PacMan.x - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityY(+400);
          PacMan.angle = 90;
        }

        if (keys.A.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.y = Math.floor(PacMan.y / 16) * 16;

            if (Math.floor(PacMan.y) % 32 == 0) {
              PacMan.y = PacMan.y - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityX(-400);
          PacMan.angle = 0;
          PacMan.setTexture("PacMan2");
        } else if (keys.D.isDown) {
          temp = temp + 1;

          if (temp % 60 == 0) {
            PacMan.y = Math.floor(PacMan.y / 16) * 16;

            if (Math.floor(PacMan.y) % 32 == 0) {
              PacMan.y = PacMan.y - 16;
            }

            temp = 0;
          }

          PacMan.setVelocityX(400);
          PacMan.angle = 0;
        }
      }

      if (Phaser.Input.Keyboard.JustDown(esc)) {
        this.scene.pause();
        this.scene.launch("PauseScene", {
          level: level
        }); //      music.pause();

        keys.W.isDown = false;
        keys.A.isDown = false;
        keys.S.isDown = false;
        keys.D.isDown = false;
        resume = true;
      }
    }
  }]);

  return PlayScene2;
}(Phaser.Scene);

exports.PlayScene2 = PlayScene2;
},{"easystarjs":"node_modules/easystarjs/src/easystar.js"}],"src/scenes/PauseScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PauseScene = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// inicializace promennych
var resumebutton;
var resume = false;
var level;
var menubutton;

var PauseScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PauseScene, _Phaser$Scene);

  function PauseScene() {
    _classCallCheck(this, PauseScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PauseScene).call(this, {
      key: "PauseScene"
    }));
  }

  _createClass(PauseScene, [{
    key: "init",
    value: function init(data) {
      level = data.level;
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      // tlacitka
      resumebutton = this.add.image(643, 535, 'resume');
      menubutton = this.add.image(645, 505, 'menu');
      resumebutton.setInteractive();
      menubutton.setInteractive();
      resumebutton.on('pointerup', function (pointer) {
        resume = true;
      });
      menubutton.on('pointerup', function (pointer) {
        this.scene.start("MenuScene");

        if (level === 1) {
          this.scene.stop("PlayScene");
        }
        /*
        if (level === 2) {
            this.scene.stop("Level2Scene");
        }
        if (level === 3) {
            this.scene.stop("Level3Scene");
        }
        if (level === 4) {
            this.scene.stop("Level4Scene");
        }
        */


        level = 1;
        this.scene.stop();
      }, this);
    }
  }, {
    key: "update",
    value: function update() {
      // navrat do levelu
      if (resume) {
        if (level === 1) {
          this.scene.resume("PlayScene");
        }
        /* if (level === 2) {
             this.scene.resume("Level2Scene");
         }
         if (level === 3) {
             this.scene.resume("Level3Scene");
         }
         if (level === 4) {
             this.scene.resume("Level4Scene");
         }*/


        resume = false;
        this.scene.stop();
      }
    }
  }]);

  return PauseScene;
}(Phaser.Scene);

exports.PauseScene = PauseScene;
},{}],"src/scenes/LeaderBoardScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeaderBoardScene = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// inicializace promennych
var backsbutton;
var back = false;
var scoreText = [];
var nameText = [];
var scoreField = [];
var x;
var title;

var LeaderBoardScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LeaderBoardScene, _Phaser$Scene);

  function LeaderBoardScene() {
    _classCallCheck(this, LeaderBoardScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeaderBoardScene).call(this, {
      key: "LeaderBoardScene"
    }));
  }

  _createClass(LeaderBoardScene, [{
    key: "preload",
    value: function preload() {
      this.load.image("back", "./assets/Back2.png");
    }
  }, {
    key: "create",
    value: function create() {
      title = this.add.image(640, 100, 'title');
      backsbutton = this.add.image(160, 850, 'back');
      backsbutton.setInteractive();
      backsbutton.on('pointerup', function (pointer) {
        back = true;
      }); // nacteni skore a pridani nove serazeneho skore do pameti browseru

      scoreField = JSON.parse(localStorage.getItem("score"));

      for (var i = 0; i < 10; i++) {
        scoreText.push(this.add.text(800, 198 + i * 65));
        nameText.push(this.add.text(400, 198 + i * 65));
      }

      if (scoreField !== null && scoreField !== undefined) {
        x = scoreField.length;

        if (x > 10) {
          x = 10;
        }

        for (var i = 0; i < 10; i++) {
          if (i < x) {
            scoreText[i].setText(" " + scoreField[i].score);
            nameText[i].setText(i + 1 + ": " + scoreField[i].playerName);
          } else {
            nameText[i].setText(i + 1 + ": ");
          }
        }
      } else {
        for (var i = 0; i < 10; i++) {
          scoreText[i].setText(i + 1 + ": ");
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (back) {
        this.scene.start("MenuScene");
        back = false;
        scoreText = [];
        nameText = [];
        scoreField = [];
      }
    }
  }]);

  return LeaderBoardScene;
}(Phaser.Scene);

exports.LeaderBoardScene = LeaderBoardScene;
},{}],"src/main.js":[function(require,module,exports) {
"use strict";

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

var _PlayScene2 = require("./scenes/PlayScene2");

var _PauseScene = require("./scenes/PauseScene");

var _LeaderBoardScene = require("./scenes/LeaderBoardScene");

/** @type {import("../typings/phaser")} */
// import typingu
// importy scen
// importy scen
// importy scen
// importy scen
// importy scen
// ohraniceni okna hry
var myCustomCanvas = document.createElement('canvas');
myCustomCanvas.id = 'myCustomCanvas'; // myCustomCanvas.style = 'border: 4px solid black';

document.body.appendChild(myCustomCanvas); // inicializace hry

var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1280,
  // sirka okna
  height: 896,
  // vyska okna
  canvas: document.getElementById('myCustomCanvas'),
  //seznam scen
  scene: [_MenuScene.MenuScene, _PlayScene.PlayScene, _PauseScene.PauseScene, _LeaderBoardScene.LeaderBoardScene, _PlayScene2.PlayScene2],
  audio: {
    disableWebAudio: false
  },
  render: {
    pixelArt: true
  },
  // nastaveni fyziky(gravitace, fps ...)
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      gravity: {
        y: 0
      }
    }
  }
});
},{"./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js","./scenes/PlayScene2":"src/scenes/PlayScene2.js","./scenes/PauseScene":"src/scenes/PauseScene.js","./scenes/LeaderBoardScene":"src/scenes/LeaderBoardScene.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49488" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map