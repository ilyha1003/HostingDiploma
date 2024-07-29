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
})({"yqdo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var BurgerMenu = /*#__PURE__*/_createClass(function BurgerMenu() {
  var _this = this;
  _classCallCheck(this, BurgerMenu);
  this.searchField = document.querySelector('.search-field');
  this.firstLayer = document.querySelector('.first-layer');
  this.secondLayer = document.querySelector('.second-layer');
  this.thirdLayer = document.querySelector('.third-layer');
  this.websiteBody = document.querySelector('body');
  this.mobileList = document.querySelector('.mobile__list');
  this.burgerMenu = document.querySelector('.nav-mobile');
  this.header = document.querySelector('.navigation');
  this.burgerMenu.addEventListener('click', function () {
    _this.header.classList.toggle('nav-mobile-active');
    _this.mobileList.classList.toggle('mobile-list-active');
    _this.websiteBody.classList.toggle('lock');
    _this.firstLayer.classList.toggle('mobile-position');
    _this.secondLayer.classList.toggle('mobile-position-hidden');
    _this.thirdLayer.classList.toggle('mobile-position-reverse');
    _this.burgerMenu.classList.toggle('mobile-active');
    if (_this.searchField) {
      _this.searchField.classList.toggle('hidden');
    }
  });
});
var _default = exports.default = BurgerMenu;
},{}],"vUKY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HeroSlider = /*#__PURE__*/function () {
  function HeroSlider() {
    var _this = this;
    _classCallCheck(this, HeroSlider);
    this.slides = document.querySelector('.hero-slider-slides');
    this.slideIndex = 0;
    this.createPagination(this.slideIndex);
    this.prevBtn = document.getElementById('hero-slider-prev');
    this.prevBtn.addEventListener('click', function () {
      return _this.prevSlide();
    });
    this.nextBtn = document.getElementById('hero-slider-next');
    this.nextBtn.addEventListener('click', function () {
      return _this.nextSlide();
    });
    this.autoSwiping();
  }
  return _createClass(HeroSlider, [{
    key: "autoSwiping",
    value: function autoSwiping() {
      var _this2 = this;
      setInterval(function () {
        if (_this2.slideIndex < 2) {
          _this2.slideIndex += 1;
          _this2.slideTo(_this2.slideIndex);
        } else {
          _this2.slideIndex = 0;
          _this2.slideTo(0);
        }
      }, 4000);
    }
  }, {
    key: "updatePagination",
    value: function updatePagination(slideIndex) {
      var pagination = document.querySelector('.hero-pagination');
      var buttons = pagination.querySelectorAll('button');
      buttons.forEach(function (button, index) {
        if (index === slideIndex) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  }, {
    key: "slideTo",
    value: function slideTo(index) {
      var slideWidth = this.slides.firstElementChild.clientWidth;
      this.slides.style.transform = "translateX(-".concat(index * slideWidth, "px)");
      this.slides.style.transitionDuration = '0.9s';
      this.slideIndex = index;
      this.updatePagination(index);
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      if (this.slideIndex === 0) {
        this.slideTo(this.slides.children.length - 1);
      } else {
        this.slideTo(this.slideIndex - 1);
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      if (this.slideIndex >= this.slides.children.length - 1) {
        this.slideTo(0);
      } else {
        this.slideTo(this.slideIndex + 1);
      }
    }
  }, {
    key: "createPagination",
    value: function createPagination(slideIndex) {
      var _this3 = this;
      var pagination = document.querySelector('.hero-pagination');
      var slides = document.querySelector('.hero-slider-slides');
      var _loop = function _loop(i) {
        var button = document.createElement('button');
        button.addEventListener('click', function () {
          return _this3.slideTo(i);
        });
        pagination.appendChild(button);
      };
      for (var i = 0; i < slides.children.length; i++) {
        _loop(i);
      }
      this.updatePagination(slideIndex);
    }
  }]);
}();
var _default = exports.default = HeroSlider;
},{}],"j2xk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PopularTripsSlider = /*#__PURE__*/function () {
  function PopularTripsSlider() {
    var _this = this;
    _classCallCheck(this, PopularTripsSlider);
    this.slideIndex = 0;
    this.slidesAmount = 2;
    this.slider = document.querySelector('.popular-trips__list');
    this.btnPrev = document.querySelector('.popular-trips-slider-prev');
    this.btnNext = document.querySelector('.popular-trips-slider-next');
    this.btnNext.addEventListener('click', function () {
      _this.scroll(_this.slidesAmount, 0.5);
    });
    this.btnPrev.addEventListener('click', function () {
      _this.scroll(_this.slidesAmount, -0.5);
    });
  }
  return _createClass(PopularTripsSlider, [{
    key: "getItemSize",
    value: function getItemSize() {
      var listItem = document.querySelector('.popular-trips-list__item');
      var listItemWidth = listItem.offsetWidth;
      return listItemWidth;
    }
  }, {
    key: "scroll",
    value: function scroll(slidesAmount, factor) {
      this.slider.scrollTo({
        left: this.slider.scrollLeft + slidesAmount * factor * this.getItemSize(),
        behavior: "smooth"
      });
    }
  }]);
}();
var _default = exports.default = PopularTripsSlider;
},{}],"Llc0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }
  return _createClass(LocalStorage, null, [{
    key: "setRegionName",
    value: function setRegionName(regionName) {
      localStorage.setItem('regionName', JSON.stringify(regionName));
    }
  }, {
    key: "getRegionName",
    value: function getRegionName() {
      return JSON.parse(localStorage.getItem('regionName'));
    }
  }]);
}();
var _default = exports.default = LocalStorage;
},{}],"Ijmk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _localStorage = _interopRequireDefault(require("../pages/destinations-page/js/localStorage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RegionSearch = /*#__PURE__*/function () {
  function RegionSearch() {
    _classCallCheck(this, RegionSearch);
    this.searchByRegion();
  }
  return _createClass(RegionSearch, [{
    key: "searchByRegion",
    value: function searchByRegion() {
      var placesList = document.querySelector('.places__list');
      console.log(placesList.children.length);
      var _loop = function _loop(i) {
        var placesListName = placesList.children[i].querySelector('.places-name');
        console.log(placesListName);
        placesList.children[i].addEventListener('click', function () {
          var regionName = placesList.children[i].querySelector('.places-name').innerHTML;
          console.log(regionName);
          _localStorage.default.setRegionName(regionName);
        });
      };
      for (var i = 0; i < placesList.children.length - 1; i++) {
        _loop(i);
      }
    }
  }]);
}();
var _default = exports.default = RegionSearch;
},{"../pages/destinations-page/js/localStorage":"Llc0"}],"CkpW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ReviewSlider = /*#__PURE__*/function () {
  function ReviewSlider() {
    _classCallCheck(this, ReviewSlider);
    this.slidesAmount = 3;
    this.slideIndex = 0;
    this.pagination = document.querySelector('.review-pagination');
    this.carousel = document.querySelector('.carousel__list');
    this.createPagination(this.slideIndex, this.slidesAmount);
    this.windowResize();
  }
  return _createClass(ReviewSlider, [{
    key: "windowResize",
    value: function windowResize() {
      if (window.innerWidth > 820) {
        this.autoSwiping(this.slidesAmount, 2, 2);
      }
      if (window.innerWidth < 820 && window.innerWidth > 480) {
        this.slidesAmount = 2;
        this.createPagination(this.slideIndex, this.slidesAmount);
        this.autoSwiping(this.slidesAmount, 4, 4);
      }
      if (window.innerWidth < 480 && window.innerWidth > 0) {
        this.slidesAmount = 1;
        this.createPagination(this.slideIndex, this.slidesAmount);
        this.autoSwiping(this.slidesAmount, 8, 8);
      }
    }
  }, {
    key: "getItemSize",
    value: function getItemSize() {
      var listItem = document.querySelector('.carousel-list__item');
      var listItemWidth = listItem.offsetWidth;
      return listItemWidth;
    }
  }, {
    key: "scroll",
    value: function scroll(slidesAmount, factor) {
      this.carousel.scrollTo({
        left: this.carousel.scrollLeft + slidesAmount * factor * this.getItemSize(),
        behavior: "smooth"
      });
    }
  }, {
    key: "autoSwiping",
    value: function autoSwiping(slidesAmount, factor, limit) {
      var _this = this;
      setInterval(function () {
        if (_this.slideIndex < limit) {
          _this.slideIndex += 1;
          _this.updatePagination(_this.slideIndex);
          _this.scroll(slidesAmount, 1);
        } else {
          _this.slideIndex = 0;
          _this.updatePagination(_this.slideIndex);
          _this.scroll(slidesAmount, -factor);
        }
      }, 4000);
    }
  }, {
    key: "createPagination",
    value: function createPagination(slideIndex, slidesAmount) {
      var _this2 = this;
      this.pagination.innerHTML = '';
      var _loop = function _loop(i) {
        var button = document.createElement('button');
        button.addEventListener('click', function () {
          return _this2.slideTo(i);
        });
        _this2.pagination.appendChild(button);
      };
      for (var i = 0; i < Math.round(this.carousel.children.length / slidesAmount); i++) {
        _loop(i);
      }
      this.updatePagination(slideIndex);
    }
  }, {
    key: "updatePagination",
    value: function updatePagination(slideIndex) {
      var buttons = this.pagination.querySelectorAll('button');
      buttons.forEach(function (button, index) {
        if (index === slideIndex) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  }, {
    key: "slideTo",
    value: function slideTo(index) {
      if (index > this.slideIndex) {
        this.scroll(index - this.slideIndex, this.slidesAmount);
        this.updatePagination(index);
        this.slideIndex = index;
      } else {
        this.scroll(-(this.slideIndex - index), this.slidesAmount);
        this.updatePagination(index);
        this.slideIndex = index;
      }
    }
  }]);
}();
var _default = exports.default = ReviewSlider;
},{}],"BeV4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTripDetails = void 0;
var _list = require("./list");
var body = document.querySelector('body');
var popUpWrapper = document.querySelector('.popup-wrapper');
var popUpField = document.querySelector('.popup-field');
var button = document.querySelector('.button');
var showTripDetails = exports.showTripDetails = function showTripDetails(previewImage, previewDescription, title, oldprice, price, days, countries, accomodation, meals, groupSize, team, description, detailsImage, daysSchedule) {
  popUpWrapper.style.display = 'flex';
  body.style.overflow = 'hidden';
  popUpWrapper.scrollTo(0, 0);
  var header = (0, _list.elementCreation)('div', 'trip-description-header-field');
  var headerImage = (0, _list.elementCreation)('img', 'trip-description-header-image');
  headerImage.src = previewImage;
  var headerContent = (0, _list.elementCreation)('div', 'trip-description-header-content');
  var headerTitle = (0, _list.elementCreation)('span', 'trip-description-header');
  headerTitle.innerText = title;
  var ratingField = (0, _list.elementCreation)('div', 'recently-trips-rating-field');
  var ratingList = (0, _list.elementCreation)('ul', 'recently-trips-rating-field-stars');
  for (var i = 0; i < 5; i++) {
    var ratingListElement = (0, _list.elementCreation)('li');
    ratingListElement.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"29\" fill=\"none\">\n        <path fill=\"#7483BD\" d=\"m28.5402 10.1094-8.6783-1.26124L15.9825.98341a1.08704 1.08704 0 0 0-.4956-.4956c-.54-.2666-1.1963-.04444-1.4663.4956l-3.8794 7.86475-8.67819 1.26124c-.23926.0342-.45801.147-.62549.3179a1.09529 1.09529 0 0 0-.3102.7784 1.0955 1.0955 0 0 0 .3307.7699l6.27882 6.1216-1.4834 8.644a1.09211 1.09211 0 0 0 .43431 1.0698c.16512.1199.36053.1911.56408.2057a1.09202 1.09202 0 0 0 .58755-.1236l7.76222-4.0811 7.7622 4.0811c.2119.1128.458.1504.6938.1094.5948-.1026.9947-.6665.8921-1.2613l-1.4834-8.644 6.2788-6.1216c.1709-.1675.2837-.3862.3179-.6255.0923-.5981-.3247-1.1518-.9228-1.2407Z\"/>\n        </svg>";
    ratingList.append(ratingListElement);
  }
  ;
  var ratingNumber = (0, _list.elementCreation)('span', 'recently-trips-rating-field-number', 'trip-description-rating-number');
  ratingNumber.innerText = '5.0';
  ratingField.append(ratingList, ratingNumber);
  var priceOld = (0, _list.elementCreation)('span', 'trip-description-price', 'trip-description-price-old');
  priceOld.innerText = 'Price ' + oldprice;
  var priceNew = (0, _list.elementCreation)('span', 'trip-description-price');
  priceNew.innerText = 'Price ' + price;
  headerContent.append(headerTitle, ratingField, priceOld, priceNew);
  header.append(headerImage, headerContent);
  var tripDetailsSection = (0, _list.elementCreation)('section', 'main-section', 'trip-details-section');
  var tripDetailsWrapper = (0, _list.elementCreation)('div', 'trip-details-wrapper');
  var contentWrapper = (0, _list.elementCreation)('div', 'content-wrapper');
  var tripDetailsContentTitle = (0, _list.elementCreation)('span', 'trip-details-content-title');
  tripDetailsContentTitle.innerText = previewDescription;
  var tripDetailsList = (0, _list.elementCreation)('ul', 'trip-details__list');
  var daysSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\">\n    <path fill=\"#101010\" d=\"M16 25.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm6.7 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm0-5.3a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7ZM16 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm9.3-16H24V2.7a1.3 1.3 0 0 0-2.7 0V4H10.7V2.7a1.3 1.3 0 1 0-2.7 0V4H6.7a4 4 0 0 0-4 4v18.7a4 4 0 0 0 4 4h18.6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm1.4 22.7a1.3 1.3 0 0 1-1.4 1.3H6.7a1.3 1.3 0 0 1-1.4-1.3v-12h21.4v12Zm0-14.7H5.3V8a1.3 1.3 0 0 1 1.4-1.3H8V8a1.3 1.3 0 0 0 2.7 0V6.7h10.6V8A1.3 1.3 0 0 0 24 8V6.7h1.3A1.3 1.3 0 0 1 26.7 8v4ZM9.3 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm0 5.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z\"/>\n    <path fill=\"#000\" fill-opacity=\".2\" d=\"M16 25.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm6.7 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm0-5.3a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7ZM16 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm9.3-16H24V2.7a1.3 1.3 0 0 0-2.7 0V4H10.7V2.7a1.3 1.3 0 1 0-2.7 0V4H6.7a4 4 0 0 0-4 4v18.7a4 4 0 0 0 4 4h18.6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm1.4 22.7a1.3 1.3 0 0 1-1.4 1.3H6.7a1.3 1.3 0 0 1-1.4-1.3v-12h21.4v12Zm0-14.7H5.3V8a1.3 1.3 0 0 1 1.4-1.3H8V8a1.3 1.3 0 0 0 2.7 0V6.7h10.6V8A1.3 1.3 0 0 0 24 8V6.7h1.3A1.3 1.3 0 0 1 26.7 8v4ZM9.3 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm0 5.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z\"/>\n    </svg>";
  var accommodationSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\">\n    <path stroke=\"#101010\" stroke-width=\"3\" d=\"M9.2 16.7v13.8c0 1 0 1.4.3 1.7.3.3.7.3 1.7.3h17.6c1 0 1.4 0 1.7-.3.3-.3.3-.8.3-1.7V16.7\"/>\n    <path stroke=\"#000\" stroke-opacity=\".2\" stroke-width=\"3\" d=\"M9.2 16.7v13.8c0 1 0 1.4.3 1.7.3.3.7.3 1.7.3h17.6c1 0 1.4 0 1.7-.3.3-.3.3-.8.3-1.7V16.7\"/>\n    <path stroke=\"#101010\" stroke-linecap=\"round\" stroke-width=\"3\" d=\"M34.2 19.2 20.6 9.6a1 1 0 0 0-1.2 0L5.8 19.2\"/>\n    <path stroke=\"#000\" stroke-linecap=\"round\" stroke-opacity=\".2\" stroke-width=\"3\" d=\"M34.2 19.2 20.6 9.6a1 1 0 0 0-1.2 0L5.8 19.2\"/>\n    <path stroke=\"#101010\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M24.2 31.7v-8a2 2 0 0 0-2-2h-4.4a2 2 0 0 0-2 2v8\"/>\n    <path stroke=\"#000\" stroke-linejoin=\"round\" stroke-opacity=\".2\" stroke-width=\"3\" d=\"M24.2 31.7v-8a2 2 0 0 0-2-2h-4.4a2 2 0 0 0-2 2v8\"/>\n    <path stroke=\"#101010\" stroke-linecap=\"round\" stroke-width=\"3\" d=\"M29.2 15V9.2\"/>\n    <path stroke=\"#000\" stroke-linecap=\"round\" stroke-opacity=\".2\" stroke-width=\"3\" d=\"M29.2 15V9.2\"/>\n    </svg>";
  var mealsSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\">\n    <path fill=\"#000\" d=\"M20.7 18.8a1.3 1.3 0 1 0-1.9 2l8.3 8.2a1.3 1.3 0 1 0 1.8-2l-8.2-8.2Zm1.6-3.3c1.1 0 2.1-.4 2.9-1.2l3.7-3.7a1.3 1.3 0 1 0-1.8-2l-3.8 3.9a1.3 1.3 0 0 1-1.9 0l4.7-4.8A1.3 1.3 0 1 0 24.2 6l-4.7 4.7a1.3 1.3 0 0 1 0-2L23.3 5A1.3 1.3 0 1 0 21.4 3l-3.8 3.8a4 4 0 0 0 0 5.7L16 14l-2-2a5.5 5.5 0 0 0-1-6.7c-2-2-7-4-9.3-1.7C1.3 6.1 3.5 11 5.3 13c1 1 2.5 1.6 4 1.7h.1c1 0 1.8-.3 2.6-.8l2 2.1L3 27a1.3 1.3 0 1 0 2 2l12-12 2.5-2.6a4 4 0 0 0 2.8 1.1Zm-11-4.2a2.6 2.6 0 0 1-2 .7 3 3 0 0 1-2-1C5.8 9.7 4.8 6.5 5.6 5.7c.2-.2.6-.3.9-.3 1.7.2 3.3.9 4.6 2a2.8 2.8 0 0 1 .1 4Z\"/>\n    </svg>";
  var transportSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\">\n    <path fill=\"#000\" d=\"M11.3 22.7a1.3 1.3 0 0 0 1.4-1.4v-.2l-.1-.3-.1-.2-.2-.2-.4-.3-.8-.1h-.3l-.2.2-.2.2-.2.2v.2l-.2.2v.3a1.3 1.3 0 0 0 1.4 1.3Zm10.7 0a1.3 1.3 0 0 0 1.3-1.4v-.5l-.2-.2-.1-.2-.5-.3h-1l-.4.3-.2.2-.1.2v.5a1.3 1.3 0 0 0 1.2 1.4Zm-4-16h-2.7a1.3 1.3 0 1 0 0 2.6H18a1.3 1.3 0 0 0 0-2.6Zm6.7-4h-16a4 4 0 0 0-4 4v16a4 4 0 0 0 2.6 3.7V28a1.3 1.3 0 1 0 2.7 0v-1.3h13.3V28a1.3 1.3 0 0 0 2.7 0v-1.6a4 4 0 0 0 2.7-3.7v-16a4 4 0 0 0-4-4Zm1.3 20a1.3 1.3 0 0 1-1.3 1.3h-16a1.3 1.3 0 0 1-1.4-1.3v-4H26v4Zm0-6.7H7.3V6.7a1.3 1.3 0 0 1 1.4-1.4h16A1.3 1.3 0 0 1 26 6.7V16Z\"/>\n    </svg>";
  var groupSizeSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"26\" fill=\"none\">\n    <path stroke=\"#222\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M19.4 6.5c0 2.6-1.9 4.5-4 4.5-2 0-4-2-4-4.5 0-2.6 2-4.5 4-4.5 2.1 0 4 2 4 4.5Z\"/>\n    <path stroke=\"#222\" stroke-width=\"2\" d=\"M18 3.8c.3-.6.9-1.1 1.6-1.4a4.5 4.5 0 0 1 4.5.5c.6.5 1 1 1.2 1.7a3 3 0 0 1 0 2A4.3 4.3 0 0 1 21.7 9c-1 0-1.7-.1-2.4-.5M11 3.7c-.3-.6-.8-1-1.3-1.4-.5-.3-1-.4-1.6-.3-.6.1-1.2.4-1.6.8-.5.5-.8 1-1 1.8a4 4 0 0 0 .1 2c.2.7.6 1.3 1 1.7.5.4 1 .7 1.6.7.6 0 1.2-.1 1.7-.4\"/>\n    <path stroke=\"#222\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M15 13c7.7 0 9.1 7.3 9.4 10 0 .6-.4 1-1 1h-17a1 1 0 0 1-1-1c.4-2.7 1.8-10 9.5-10Z\"/>\n    <path fill=\"#222\" d=\"m28 20-1 .2 1-.2Zm-11.1-5.7-.7-.7-1.3 1.4 1.8.3.2-1Zm7.2 6.8-1 .3.2.7h.8v-1Zm-3-7.7c2 0 3.3 1 4.2 2.5a13 13 0 0 1 1.7 4.3l2-.4a15 15 0 0 0-2-5 6.8 6.8 0 0 0-5.9-3.4v2Zm-3.5 1.5c.9-.9 2-1.5 3.5-1.5v-2c-2.1 0-3.8 1-5 2.2l1.5 1.3Zm-.9.4c4 .6 5.7 3.6 6.4 6.1l2-.5c-.9-3-3-6.8-8-7.6l-.4 2ZM27 20h-3v2h3v-2Zm0 .1v2a2 2 0 0 0 2-2.4l-2 .4Z\"/>\n    <path fill=\"#222\" d=\"m13 14.3.2 1 1.9-.3-1.3-1.4-.7.7ZM2 20l-1-.2 1 .2Zm4 1.1v1h.7l.2-.7-1-.3Zm2.9-7.7c1.5 0 2.6.6 3.4 1.5l1.5-1.3a6.5 6.5 0 0 0-5-2.2v2ZM3 20.2A13 13 0 0 1 4.7 16c.9-1.5 2.2-2.5 4.2-2.5v-2a6.8 6.8 0 0 0-6 3.4 15 15 0 0 0-1.9 5l2 .4Zm0 0-2-.4a2 2 0 0 0 2 2.3v-2Zm3 0H3v2h3v-2Zm.9 1.2c.7-2.5 2.4-5.5 6.3-6.1l-.3-2C8 14 5.8 18 5 20.9l2 .5Z\"/>\n    </svg>";
  var teamSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\">\n    <path fill=\"#000\" d=\"M16.4 16.3a6.6 6.6 0 0 0 .3-9.7A6.7 6.7 0 0 0 6 14.1c.4.8 1 1.6 1.7 2.2A10.7 10.7 0 0 0 1.3 26 1.3 1.3 0 1 0 4 26a8 8 0 0 1 16 0 1.3 1.3 0 1 0 2.7 0 10.7 10.7 0 0 0-6.3-9.7Zm-4.4-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm13 .5a6.7 6.7 0 0 0-5-11.1 1.3 1.3 0 0 0 0 2.6 4 4 0 0 1 2 7.5 1.3 1.3 0 0 0 0 2.3l.5.3h.1A9.3 9.3 0 0 1 28 26a1.3 1.3 0 1 0 2.6 0A12 12 0 0 0 25 15.8Z\"/>\n    </svg>";
  tripDetailsList.append(descriptionListElementCreation(daysSvg, 'Days', days, countries), descriptionListElementCreation(accommodationSvg, 'Accommodation', accomodation), descriptionListElementCreation(mealsSvg, 'Meals', meals), descriptionListElementCreation(transportSvg, 'Transport', 'Bus'), descriptionListElementCreation(groupSizeSvg, 'Group size', groupSize), descriptionListElementCreation(teamSvg, 'Team', team));
  var tripDetailsImageField = (0, _list.elementCreation)('div', 'trip-details-image-field');
  var tripDetailsImage = (0, _list.elementCreation)('img');
  tripDetailsImage.src = detailsImage;
  tripDetailsImageField.append(tripDetailsImage);
  var tripDetailsMainDescription = (0, _list.elementCreation)('span', 'trip-details-main-description');
  tripDetailsMainDescription.innerText = description;
  contentWrapper.append(tripDetailsContentTitle, tripDetailsList, tripDetailsMainDescription);
  tripDetailsWrapper.append(contentWrapper, tripDetailsImageField);
  tripDetailsSection.append(tripDetailsWrapper);
  var tripScheduleSection = (0, _list.elementCreation)('section', 'trip-schedule-section');
  var tripScheduleWrapper = (0, _list.elementCreation)('div', 'trip-schedule-wrapper');
  var tripScheduleList = (0, _list.elementCreation)('ul', 'trip-schedule__list');
  daysSchedule.forEach(function (el) {
    tripScheduleList.append(daysScheduleListElementCreation(el));
  });
  tripScheduleWrapper.append(tripScheduleList);
  tripScheduleSection.append(tripScheduleWrapper);
  popUpField.append(header, tripDetailsSection, tripScheduleSection);
};
var descriptionListElementCreation = function descriptionListElementCreation(svg, title, firstConstant, secondConstant) {
  var listElement = (0, _list.elementCreation)('li', 'trip-details-list-element');
  var listElementHeader = (0, _list.elementCreation)('div', 'trip-details-list-element-header');
  listElementHeader.innerHTML = svg;
  var listElementTitle = (0, _list.elementCreation)('span', 'trip-details-list-element-title');
  listElementTitle.innerText = title;
  var listElementDescription = (0, _list.elementCreation)('span', 'trip-details-list-element-description');
  listElementDescription.innerText = firstConstant + (secondConstant ? ', ' + secondConstant : '');
  listElementHeader.append(listElementTitle);
  listElement.append(listElementHeader, listElementDescription);
  return listElement;
};
var daysScheduleListElementCreation = function daysScheduleListElementCreation(el) {
  var listElement = (0, _list.elementCreation)('li', 'trip-schedule-list-element');
  var headerWrapper = (0, _list.elementCreation)('div', 'trip-schedule-header-wrapper');
  var day = (0, _list.elementCreation)('div', 'day-order');
  day.innerText = el.dayOrder;
  var listElementTitle = (0, _list.elementCreation)('span', 'trip-schedule-list-element-title');
  listElementTitle.innerText = el.dayTitle;
  var arrowField = (0, _list.elementCreation)('div', 'arrow-field');
  arrowField.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"28\" fill=\"none\">\n    <path fill=\"#000\" d=\"M13.5 2a1.5 1.5 0 0 0-3 0h3Zm-2.6 25c.6.6 1.6.6 2.2 0l9.5-9.5a1.5 1.5 0 1 0-2.1-2.1L12 23.9l-8.5-8.5a1.5 1.5 0 1 0-2.1 2.1l9.5 9.6Zm-.4-25v24h3V2h-3Z\"/>\n    </svg>";
  headerWrapper.append(day, listElementTitle, arrowField);
  var dayDescription = (0, _list.elementCreation)('span', 'trip-schedule-list-element-description');
  dayDescription.innerText = el.dayDescription;
  listElement.append(headerWrapper, dayDescription);
  var counter = 0;
  headerWrapper.addEventListener('click', function () {
    if (counter === 0) {
      dayDescription.classList.add('active');
      arrowField.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"28\" fill=\"none\">\n            <path fill=\"#000\" d=\"M10.5 26a1.5 1.5 0 0 0 3 0h-3Zm2.6-25c-.6-.6-1.6-.6-2.2 0l-9.5 9.5a1.5 1.5 0 1 0 2.1 2.1L12 4.1l8.5 8.5a1.5 1.5 0 1 0 2.1-2.1L13.1.9Zm.4 25V2h-3v24h3Z\"/>\n            </svg>";
      counter = 1;
    } else {
      dayDescription.classList.remove('active');
      arrowField.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"28\" fill=\"none\">\n            <path fill=\"#000\" d=\"M13.5 2a1.5 1.5 0 0 0-3 0h3Zm-2.6 25c.6.6 1.6.6 2.2 0l9.5-9.5a1.5 1.5 0 1 0-2.1-2.1L12 23.9l-8.5-8.5a1.5 1.5 0 1 0-2.1 2.1l9.5 9.6Zm-.4-25v24h3V2h-3Z\"/>\n            </svg>";
      counter = 0;
    }
  });
  return listElement;
};
var hideTripDetails = function hideTripDetails() {
  popUpWrapper.style.display = 'none';
  popUpField.innerHTML = '';
  body.style.overflow = '';
};
button.addEventListener('click', hideTripDetails);
popUpWrapper.addEventListener('click', function (e) {
  if (e.target === popUpWrapper) {
    hideTripDetails();
  }
});
},{"./list":"WSIo"}],"WSIo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillTripsList = exports.fillRecentlyList = exports.fillPopularList = exports.errorImage = exports.elementCreation = void 0;
var _popUpDetails = require("./popUpDetails");
var elementCreation = exports.elementCreation = function elementCreation(elementName, className, className1, className2) {
  var element = document.createElement(elementName);
  if (className) {
    element.classList.add(className);
  }
  if (className1) {
    element.classList.add(className1);
  }
  if (className2) {
    element.classList.add(className2);
  }
  return element;
};
var listElementCreation = function listElementCreation(el, additionalListElementClassName, additionalImageWrapperClassName) {
  var listElement = elementCreation('li', 'trips-list__item', additionalListElementClassName);
  var tripsPreview = elementCreation('div', 'trip-preview-field', 'recently-trips-preview', additionalImageWrapperClassName);
  var previewImage = elementCreation('img', 'trip-preview-image');
  previewImage.src = el.previewImage;
  var price = elementCreation('div', 'recently-trips-preview-price');
  price.innerText = "From " + el.price;
  tripsPreview.append(previewImage, price);
  var tripsContent = elementCreation('div', 'recently-trips-list-item-wrapper');
  var tripHeader = elementCreation('span', 'recently-trips-list-item-header');
  tripHeader.innerText = el.title;
  var ratingField = elementCreation('div', 'recently-trips-rating-field');
  var ratingList = elementCreation('ul', 'recently-trips-rating-field-stars');
  for (var i = 0; i < 5; i++) {
    var ratingListElement = elementCreation('li');
    ratingListElement.innerHTML = "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m20.942 9.675-5.95-.865-2.661-5.393a.753.753 0 0 0-1.345 0L8.326 8.81l-5.951.865a.749.749 0 0 0-.415 1.28l4.305 4.197-1.017 5.928a.749.749 0 0 0 1.088.79l5.322-2.799 5.323 2.798a.749.749 0 0 0 1.088-.79l-1.018-5.927 4.306-4.197a.749.749 0 0 0 .218-.43.747.747 0 0 0-.633-.85Z\" fill=\"#7483BD\"></path></svg>";
    ratingList.append(ratingListElement);
  }
  var ratingNumber = elementCreation('span', 'recently-trips-rating-field-number');
  ratingNumber.innerText = '5.0';
  ratingField.append(ratingList, ratingNumber);
  var descriptionField = elementCreation('div', 'recently-trips-description-field');
  var daysDescription = elementCreation('div', 'recently-trips-description');
  daysDescription.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\">\n        <path fill=\"#6C7072\" d=\"M12 19a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm5 0a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm0-4a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm-5 0a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm7-12h-1V2a.99997.99997 0 0 0-1.7071-.70711A1.00017 1.00017 0 0 0 16 2v1H8V2a1.00003 1.00003 0 0 0-1-1 1.00003 1.00003 0 0 0-1 1v1H5a3 3 0 0 0-3 3v14a3.00002 3.00002 0 0 0 3 3h14a3.00008 3.00008 0 0 0 3-3V6a3.00006 3.00006 0 0 0-3-3Zm1 17c0 .2652-.1054.5196-.2929.7071A1.0001 1.0001 0 0 1 19 21H5a.99997.99997 0 0 1-1-1v-9h16v9Zm0-11H4V6a1.00003 1.00003 0 0 1 1-1h1v1a1.00003 1.00003 0 0 0 1 1 1.00003 1.00003 0 0 0 1-1V5h8v1a.99997.99997 0 0 0 1.7071.70711A1.00017 1.00017 0 0 0 18 6V5h1a.99997.99997 0 0 1 1 1v3ZM7 15a.99983.99983 0 0 0 .92388-.6173 1.00008 1.00008 0 0 0 .05691-.5778.99973.99973 0 0 0-.27368-.512.99984.99984 0 0 0-.51202-.2737.99976.99976 0 0 0-.57777.0569 1.00036 1.00036 0 0 0-.44879.3683A1.00018 1.00018 0 0 0 6 14a.99997.99997 0 0 0 1 1Zm0 4a.99983.99983 0 0 0 .92388-.6173 1.00008 1.00008 0 0 0 .05691-.5778.99973.99973 0 0 0-.27368-.512.99984.99984 0 0 0-.51202-.2737.99976.99976 0 0 0-.57777.0569 1.00036 1.00036 0 0 0-.44879.3683A1.00018 1.00018 0 0 0 6 18a.99997.99997 0 0 0 1 1Z\"></path>\n        </svg>";
  var daysDescriptionContent = elementCreation('span', 'recently-trips-description-content');
  daysDescriptionContent.innerText = el.days;
  daysDescription.append(daysDescriptionContent);
  var placesDescription = elementCreation('div', 'recently-trips-description');
  placesDescription.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\">\n        <path stroke=\"#6C7072\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 10c0 7-9 13-9 13s-9-6-9-13c0-2.38695.94821-4.67613 2.63604-6.36396S9.61305 1 12 1c2.3869 0 4.6761.94821 6.364 2.63604C20.0518 5.32387 21 7.61305 21 10Z\"></path>\n        <path stroke=\"#6C7072\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 13c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3s-3 1.34315-3 3c0 1.6569 1.3431 3 3 3Z\"></path>\n        </svg>";
  var placesDescriptionContent = elementCreation('span', 'recently-trips-description-content');
  placesDescriptionContent.innerText = el.places;
  placesDescription.append(placesDescriptionContent);
  var countriesDescription = elementCreation('div', 'recently-trips-description');
  countriesDescription.innerHTML = "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM2 12h20\" stroke=\"gray\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10v0Z\" stroke=\"gray\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>";
  var countriesDescriptionContent = elementCreation('span', 'recently-trips-description-content');
  countriesDescriptionContent.innerText = el.countries;
  countriesDescription.append(countriesDescriptionContent);
  descriptionField.append(daysDescription, placesDescription, countriesDescription);
  var tripDescription = elementCreation('span', 'recently-trips-content');
  tripDescription.innerText = el.previewDescription;
  tripsContent.append(tripHeader, ratingField, descriptionField, tripDescription);
  var tripDetails = elementCreation('a', 'hero-go-button', 'recently-trips-small-button');
  tripDetails.innerText = 'View details';
  tripDetails.addEventListener('click', function () {
    (0, _popUpDetails.showTripDetails)(el.previewImage, el.previewDescription, el.title, el.oldprice, el.price, el.days, el.countries, el.accomodation, el.meals, el.groupSize, el.team, el.description, el.detailsImage, el.daysSchedule);
  });
  listElement.append(tripsPreview, tripsContent, tripDetails);
  return listElement;
};
var errorField = function errorField() {
  var noMatches = elementCreation('span', 'section-header', 'error-title');
  noMatches.innerText = 'No Matches Found';
  return noMatches;
};
var errorImage = exports.errorImage = function errorImage(visibilityStyle) {
  var errorImage = document.querySelector('.error-image');
  errorImage.style.display = visibilityStyle;
};
var fillTripsList = exports.fillTripsList = function fillTripsList(apiData, regionInputValue, countryInputValue) {
  var tripsField = document.querySelector('.trips-wrapper');
  var tripsList = document.createElement('ul');
  tripsList.classList.add('trips__list');
  tripsList.classList.add('json-trips__list');
  if (regionInputValue || countryInputValue) {
    if (regionInputValue && !countryInputValue) {
      apiData.forEach(function (el) {
        if (regionInputValue.toLowerCase() === el.region.toLowerCase()) {
          tripsField.innerHTML = '';
          tripsList.append(listElementCreation(el));
          tripsField.append(tripsList);
          errorImage('none');
        } else {
          if (!tripsList.children.length) {
            tripsField.innerHTML = '';
            tripsField.append(errorField());
            errorImage('block');
          }
        }
      });
    }
    if (countryInputValue && !regionInputValue) {
      apiData.forEach(function (el) {
        if (el.keyword.includes(countryInputValue.toLowerCase())) {
          tripsField.innerHTML = '';
          tripsList.append(listElementCreation(el));
          tripsField.append(tripsList);
          errorImage('none');
        } else {
          if (!tripsList.children.length) {
            tripsField.innerHTML = '';
            tripsField.append(errorField());
            errorImage('block');
          }
        }
      });
    }
    if (regionInputValue && countryInputValue) {
      apiData.forEach(function (el) {
        if (regionInputValue.toLowerCase() === el.region.toLowerCase() && el.keyword.includes(countryInputValue.toLowerCase())) {
          tripsField.innerHTML = '';
          tripsList.append(listElementCreation(el));
          tripsField.append(tripsList);
          errorImage('none');
        } else {
          if (!tripsList.children.length) {
            tripsField.innerHTML = '';
            tripsField.append(errorField());
            errorImage('block');
          }
        }
      });
    }
  } else {
    tripsField.innerHTML = '';
    apiData.forEach(function (el) {
      tripsList.append(listElementCreation(el));
      errorImage('none');
    });
    tripsField.append(tripsList);
  }
};
var listAppending = function listAppending(apiData, wrapper, tripName, additionalListElementClassName, additionalImageWrapperClassName) {
  apiData.forEach(function (el) {
    if (el.title === tripName) {
      wrapper.append(listElementCreation(el, additionalListElementClassName, additionalImageWrapperClassName));
    }
  });
};
var fillRecentlyList = exports.fillRecentlyList = function fillRecentlyList(apiData, wrapper, tripName1, tripName2, tripName3) {
  listAppending(apiData, wrapper, tripName1);
  listAppending(apiData, wrapper, tripName2);
  listAppending(apiData, wrapper, tripName3);
};
var fillPopularList = exports.fillPopularList = function fillPopularList(apiData, wrapper, tripName1, tripName2, tripName3, tripName4, tripName5, additionalListElementClassName, additionalImageWrapperClassName) {
  listAppending(apiData, wrapper, tripName1, additionalListElementClassName, additionalImageWrapperClassName);
  listAppending(apiData, wrapper, tripName2, additionalListElementClassName, additionalImageWrapperClassName);
  listAppending(apiData, wrapper, tripName3, additionalListElementClassName, additionalImageWrapperClassName);
  listAppending(apiData, wrapper, tripName4, additionalListElementClassName, additionalImageWrapperClassName);
  listAppending(apiData, wrapper, tripName5, additionalListElementClassName, additionalImageWrapperClassName);
};
},{"./popUpDetails":"BeV4"}],"SCn8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopularTrips = exports.getMatchedPopularTrips = exports.getMatchedData = exports.getInfo = exports.getData = void 0;
var _list = require("../pages/search-page/js/list");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var regionInput = document.querySelector('.region-input');
var countryInput = document.querySelector('.country-input');
var debounce = function debounce(func, delay) {
  var timeout;
  return function () {
    var _arguments = arguments,
      _this = this;
    var funcCall = function funcCall() {
      func.apply(_this, _arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(funcCall, delay);
  };
};
var getTrips = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var regionInputValue, countryInputValue, data, json;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          regionInputValue = regionInput.value;
          countryInputValue = countryInput.value;
          _context.prev = 2;
          _context.next = 5;
          return fetch("https://ilyha1003.github.io/Api-for-travelSite/trips.json");
        case 5:
          data = _context.sent;
          _context.next = 8;
          return data.json();
        case 8:
          json = _context.sent;
          (0, _list.fillTripsList)(json, regionInputValue, countryInputValue);
          return _context.abrupt("return", json);
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 13]]);
  }));
  return function getTrips() {
    return _ref.apply(this, arguments);
  };
}();
var getInfo = exports.getInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(wrapper, tripName1, tripName2, tripName3) {
    var data, json;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("https://ilyha1003.github.io/Api-for-travelSite/trips.json");
        case 3:
          data = _context2.sent;
          _context2.next = 6;
          return data.json();
        case 6:
          json = _context2.sent;
          (0, _list.fillRecentlyList)(json, wrapper, tripName1, tripName2, tripName3);
          return _context2.abrupt("return", json);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getInfo(_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getPopularTrips = exports.getPopularTrips = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(wrapper, tripName1, tripName2, tripName3, tripName4, tripName5, additionalListElementClassName, additionalImageWrapperClassName) {
    var data, json;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("https://ilyha1003.github.io/Api-for-travelSite/trips.json");
        case 3:
          data = _context3.sent;
          _context3.next = 6;
          return data.json();
        case 6:
          json = _context3.sent;
          (0, _list.fillPopularList)(json, wrapper, tripName1, tripName2, tripName3, tripName4, tripName5, additionalListElementClassName, additionalImageWrapperClassName);
          return _context3.abrupt("return", json);
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function getPopularTrips(_x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();
var getMatchedData = exports.getMatchedData = debounce(getTrips, 500);
var getData = exports.getData = debounce(getInfo, 500);
var getMatchedPopularTrips = exports.getMatchedPopularTrips = debounce(getPopularTrips, 500);
},{"../pages/search-page/js/list":"WSIo"}],"cWTO":[function(require,module,exports) {
"use strict";

var _BurgerMenu = _interopRequireDefault(require("./BurgerMenu"));
var _HeroSlider = _interopRequireDefault(require("./HeroSlider"));
var _PopularTripsSlider = _interopRequireDefault(require("./PopularTripsSlider"));
var _RegionSearch = _interopRequireDefault(require("./RegionSearch"));
var _ReviewSlider = _interopRequireDefault(require("./ReviewSlider"));
var _fakeAPI = require("./fakeAPI");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
document.addEventListener('DOMContentLoaded', function () {
  var heroSlider = new _HeroSlider.default();
  var reviewSlider = new _ReviewSlider.default();
  var popularTripsSlider = new _PopularTripsSlider.default();
  var navMenu = new _BurgerMenu.default();
  var regionSearch = new _RegionSearch.default();
  var recentlyList = document.querySelector('.recently-trips__list');
  var popularTrips = document.querySelector('.popular-trips__list');
  (0, _fakeAPI.getData)(recentlyList, 'Scandinavia', 'Barcelona', 'Yellowstone and Grand Tetons');
  (0, _fakeAPI.getMatchedPopularTrips)(popularTrips, 'European Whirl', 'Greek Island Hopping', 'Norway Adventure', 'Romantic Paris Date', 'Philippines Adventures', 'popular-trips-list__item', 'recently-trips-preview');
});
},{"./BurgerMenu":"yqdo","./HeroSlider":"vUKY","./PopularTripsSlider":"j2xk","./RegionSearch":"Ijmk","./ReviewSlider":"CkpW","./fakeAPI":"SCn8"}]},{},["cWTO"], null)
//# sourceMappingURL=app.801f3c12.js.map