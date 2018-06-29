(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main *ngIf=\"lang.contents\">\n  <home></home>\n</main>\n<footer *ngIf=\"copyright[0]\">\n  {{copyright[0].content}}\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\na {\n  color: #000; }\n.row {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\nheader {\n  background-color: #4E274C;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); }\nmain {\n  padding: 0;\n  font-family: \"Open Sans\", Arial, Tahoma;\n  text-align: center;\n  margin-top: 75px;\n  flex: 1 0 auto; }\nfooter {\n  text-align: center;\n  font-size: 10px;\n  background-color: #ededed;\n  font-family: \"Open Sans\", Arial, Tahoma; }\n.shield {\n  width: 750px;\n  height: 450px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/configuration/configuration.service */ "./src/app/services/configuration/configuration.service.ts");
/* harmony import */ var services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/language/language.service */ "./src/app/services/language/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// src/app/index.ts



/*
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(intLang, configuration) {
        var _this = this;
        this.intLang = intLang;
        this.configuration = configuration;
        this.lang = {};
        this.copyright = {};
        this.copyrightText = 'copyright';
        this.configuration.getConfig()
            .then(function (config) {
            _this.intLang.geti18nFile(config)
                .then(function (lang) {
                _this.lang = lang;
                _this.copyright = _this.intLang.getSectionContent(_this.copyrightText);
            });
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [services_language_language_service__WEBPACK_IMPORTED_MODULE_2__["Language"], services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_1__["Configuration"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/language/language.service */ "./src/app/services/language/language.service.ts");
/* harmony import */ var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/configuration/configuration.service */ "./src/app/services/configuration/configuration.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home */ "./src/app/components/home/home.ts");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about */ "./src/app/components/about/about.ts");
/* harmony import */ var _components_common_card_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/card/card */ "./src/app/components/common/card/card.ts");
/* harmony import */ var _components_common_circle_image_circleImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/circle-image/circleImage */ "./src/app/components/common/circle-image/circleImage.ts");
/* harmony import */ var _components_common_contact_list_contactList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/contact-list/contactList */ "./src/app/components/common/contact-list/contactList.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home__WEBPACK_IMPORTED_MODULE_12__["Home"],
                _components_about_about__WEBPACK_IMPORTED_MODULE_13__["About"],
                _components_common_card_card__WEBPACK_IMPORTED_MODULE_14__["Card"],
                _components_common_circle_image_circleImage__WEBPACK_IMPORTED_MODULE_15__["CircleImage"],
                _components_common_contact_list_contactList__WEBPACK_IMPORTED_MODULE_16__["ContactList"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
            ],
            providers: [_services_language_language_service__WEBPACK_IMPORTED_MODULE_9__["Language"], _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_10__["Configuration"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _config_config__WEBPACK_IMPORTED_MODULE_11__["Config"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.ts":
/*!*******************************************!*\
  !*** ./src/app/components/about/about.ts ***!
  \*******************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/language/language.service */ "./src/app/services/language/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var About = /** @class */ (function () {
    function About(langFile) {
        this.langFile = langFile;
        this.page = 'about';
        this.contents = langFile.getPageContent(this.page);
    }
    About = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: './about.template.html',
            styles: ['./about.style.scss']
        }),
        __metadata("design:paramtypes", [services_language_language_service__WEBPACK_IMPORTED_MODULE_1__["Language"]])
    ], About);
    return About;
}());



/***/ }),

/***/ "./src/app/components/common/card/card.style.scss":
/*!********************************************************!*\
  !*** ./src/app/components/common/card/card.style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.card {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  padding-bottom: 20px; }\n.card .card-header .icon, .card .card-header .title {\n    color: #ec7263;\n    font-size: 16px;\n    font-weight: bold;\n    padding-bottom: 15px; }\n.card .card-body {\n    width: 90%; }\n.card .card-body .card-text::before {\n      content: \"$ \"; }\n.card .card-body .card-text::after {\n      content: \"| \";\n      -webkit-animation: blinker 1s linear infinite;\n              animation: blinker 1s linear infinite; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n.card .card-body .card-text {\n      font-size: 12px;\n      display: block; }\n"

/***/ }),

/***/ "./src/app/components/common/card/card.template.html":
/*!***********************************************************!*\
  !*** ./src/app/components/common/card/card.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-light mb-3\" *ngIf=\"cardInfo\">\r\n    <div class=\"card-header\">\r\n        <span class=\"icon glyphicon {{cardInfo.icon}}\" aria-hidden=\"true\"></span>\r\n        <span class=\"title\">{{cardInfo.title}}</span>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"cardInfo.details\">\r\n        <h5 class=\"card-title\" *ngIf=\"cardInfo.details.title\">\r\n            {{cardInfo.details.title}}\r\n        </h5>\r\n        <p class=\"card-text\" *ngIf=\"cardInfo.details.text\">\r\n            {{cardInfo.details.text}}\r\n        </p>\r\n        <div *ngIf=\"cardInfo.details.contacts\">\r\n            <div *ngFor=\"let contact of cardInfo.details.contacts\">\r\n                    <contact-list [contactInfo]=\"contact\"></contact-list>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/card/card.ts":
/*!************************************************!*\
  !*** ./src/app/components/common/card/card.ts ***!
  \************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Card = /** @class */ (function () {
    function Card() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Card.prototype, "cardInfo", void 0);
    Card = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            styles: [__webpack_require__(/*! ./card.style.scss */ "./src/app/components/common/card/card.style.scss")],
            template: __webpack_require__(/*! ./card.template.html */ "./src/app/components/common/card/card.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], Card);
    return Card;
}());



/***/ }),

/***/ "./src/app/components/common/circle-image/circleImage.style.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/circle-image/circleImage.style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photo {\n  margin: auto;\n  margin-top: -75px;\n  padding-top: 30px;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%; }\n  #photo img {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/components/common/circle-image/circleImage.template.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/circle-image/circleImage.template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"photo\">\r\n    <img src=\"{{image}}\" alt=\"avatar\">\r\n  </div>"

/***/ }),

/***/ "./src/app/components/common/circle-image/circleImage.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/common/circle-image/circleImage.ts ***!
  \***************************************************************/
/*! exports provided: CircleImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleImage", function() { return CircleImage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleImage = /** @class */ (function () {
    function CircleImage() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CircleImage.prototype, "image", void 0);
    CircleImage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'circle-image',
            styles: [__webpack_require__(/*! ./circleImage.style.scss */ "./src/app/components/common/circle-image/circleImage.style.scss")],
            template: __webpack_require__(/*! ./circleImage.template.html */ "./src/app/components/common/circle-image/circleImage.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], CircleImage);
    return CircleImage;
}());



/***/ }),

/***/ "./src/app/components/common/contact-list/contactList.style.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/contact-list/contactList.style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.contact-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: block; }\n.contact-item > div {\n    display: inline; }\n.contact-item .icon {\n    background-color: #ededed; }\n.contact-item .title, .contact-item .titleWithUrl {\n    padding-left: 10px; }\n.contact-item .title::after,\n  .contact-item .titleWithUrl::after {\n    content: \"| \";\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite; }\n.contact-item a, .contact-item a:hover, .contact-item a:visited {\n    color: #000; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/components/common/contact-list/contactList.template.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/contact-list/contactList.template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-item\">\r\n    <div *ngIf=\"contactInfo.icon\" class=\"icon\">\r\n        <span class=\"{{contactInfo.icon}}\"></span>\r\n    </div>\r\n    <div *ngIf=\"!contactInfo.url\" class=\"title\">\r\n        {{contactInfo.name}}\r\n    </div>\r\n    <div *ngIf=\"contactInfo.url\" class=\"titleWithUrl\">\r\n        <a *ngIf=\"contactInfo.url\" href=\"{{contactInfo.url}}\" target=\"_blank\">\r\n            {{contactInfo.name}}\r\n        </a>\r\n        <span *ngIf=\"contactInfo.name\">\r\n            {{contactInfo.title}}\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/contact-list/contactList.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/common/contact-list/contactList.ts ***!
  \***************************************************************/
/*! exports provided: ContactList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactList", function() { return ContactList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactList = /** @class */ (function () {
    function ContactList() {
        console.log(JSON.stringify(this.contactInfo));
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactList.prototype, "contactInfo", void 0);
    ContactList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-list',
            styles: [__webpack_require__(/*! ./contactList.style.scss */ "./src/app/components/common/contact-list/contactList.style.scss")],
            template: __webpack_require__(/*! ./contactList.template.html */ "./src/app/components/common/contact-list/contactList.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], ContactList);
    return ContactList;
}());



/***/ }),

/***/ "./src/app/components/home/home.style.scss":
/*!*************************************************!*\
  !*** ./src/app/components/home/home.style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n* {\n  color: #000; }\n.resumeContainer {\n  padding: 0;\n  margin: 5px 0; }\n.resumeContainer .row {\n    background-color: #fff;\n    margin: 0 80px !important; }\n.resumeContainer .row .col {\n      min-height: 150px;\n      background-color: #fff;\n      text-align: left;\n      /* The typing effect */ }\n.resumeContainer .row .col.col-padding {\n        padding-left: 30px; }\n.resumeContainer .row .col #photo-header {\n        padding-bottom: 20px; }\n.resumeContainer .row .col #photo-header hr {\n          padding: 0;\n          margin: 5px 0;\n          border-color: #ededed; }\n.resumeContainer .row .col #text-header {\n        padding: 20px 0 0;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        font-family: \"Open Sans\", Arial, Tahoma; }\n.resumeContainer .row .col #text-header h1 {\n          text-transform: uppercase;\n          font-size: 2em;\n          letter-spacing: -1px;\n          margin-top: 5px; }\n.resumeContainer .row .col #text-header h1 span {\n            color: #ec7263; }\n.resumeContainer .row .col #text-header h1 sup {\n            opacity: 0.5; }\n@-webkit-keyframes type {\n  from {\n    width: 0; } }\n@keyframes type {\n  from {\n    width: 0; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.template.html":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.template.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resumeContainer\" *ngIf=\"contents\">\r\n    <div class=\"row rowFirst\">\r\n      <div class=\"col col-xs-10 col-lg-offset-1\">\r\n        <div id=\"photo-header\" class=\"text-center\">\r\n          <!-- PHOTO (AVATAR) -->\r\n          <circle-image image=\"assets/img/avatar.jpg\"></circle-image>\r\n          <div id=\"text-header\">\r\n            <h1 [innerHTML]=\"greetings[0].content\"></h1>\r\n          </div>\r\n          <hr />\r\n          <hr />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let section of contents; let i = index;\" \r\n      class=\"col {{section.section}}\" \r\n      [ngClass]=\"{'col-lg-8 col-padding': i%2==0, 'col-lg-4': i%2!=0}\">\r\n        <card [cardInfo]=\"section\"></card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.ts":
/*!*****************************************!*\
  !*** ./src/app/components/home/home.ts ***!
  \*****************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/language/language.service */ "./src/app/services/language/language.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home = /** @class */ (function () {
    function Home(langFile) {
        this.langFile = langFile;
        this.header = 'greetings';
        this.page = 'resume';
        this.greetings = langFile.getSectionContent(this.header);
        this.contents = this.sortingOfContents(langFile.getPageContent(this.page));
    }
    Home.prototype.sortingOfContents = function (contents) {
        if (contents.length > 0) {
            contents.sort(function (a, b) {
                if (a.sort < b.sort) {
                    return -1;
                }
                else if (a.sort > b.sort) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return contents;
    };
    Home = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            styles: [__webpack_require__(/*! ./home.style.scss */ "./src/app/components/home/home.style.scss")],
            template: __webpack_require__(/*! ./home.template.html */ "./src/app/components/home/home.template.html")
        }),
        __metadata("design:paramtypes", [services_language_language_service__WEBPACK_IMPORTED_MODULE_1__["Language"]])
    ], Home);
    return Home;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Config = /** @class */ (function () {
    function Config() {
        this.apiCollectionUrl = "https://jjbxaqu2hd.execute-api.ap-southeast-1.amazonaws.com/dev/getAllConfigs";
    }
    Config.prototype.getApiUrl = function () {
        return this.apiCollectionUrl;
    };
    Config = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());



/***/ }),

/***/ "./src/app/services/configuration/configuration.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/configuration/configuration.service.ts ***!
  \*****************************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Configuration = /** @class */ (function () {
    function Configuration(http, location, config) {
        this.http = http;
        this.location = location;
        this.config = config;
        this.title = 'Environmental configurations';
        this.env = 'prod';
        this.content = '1';
        this.env = this.getEnv();
    }
    Configuration.prototype.getConfig = function () {
        var $host = this.getHost();
        return this.http.get($host)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    Configuration.prototype.getHost = function () {
        return this.config.getApiUrl();
    };
    Configuration.prototype.getEnv = function () {
        var env = 'prod';
        if (window.location.host.indexOf('localhost') > -1) {
            env = 'dev';
        }
        else if (window.location.host.indexOf('stage') > -1) {
            env = 'stage';
        }
        return env;
    };
    Configuration.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    Configuration.prototype.handleErrorPromise = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    Configuration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            config_config__WEBPACK_IMPORTED_MODULE_3__["Config"]])
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "./src/app/services/language/language.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Language = /** @class */ (function () {
    function Language(http) {
        this.http = http;
        this.configType = 'CONTENT_API';
    }
    Language.prototype.getPageContent = function (page) {
        var arrContents = [];
        var content = this.lang.contents || [];
        console.log(this.lang);
        if (content.length > 0) {
            arrContents = content.filter(function (x) { return x.page === page; });
        }
        return arrContents;
    };
    Language.prototype.getSectionContent = function (section) {
        var arrContents = [];
        var content = this.lang.contents || [];
        console.log(this.lang);
        if (content.length > 0) {
            arrContents = content.filter(function (x) { return x.section === section; });
        }
        return arrContents;
    };
    Language.prototype.geti18nFile = function (config) {
        var _this = this;
        var langConfig = config.find(function (conf) { return conf.code === _this.configType; });
        return this.http.get(langConfig.configUrl + langConfig.configPath)
            .toPromise()
            .then(function (response) {
            _this.lang = _this.extractData(response);
            return _this.lang;
        })
            .catch(this.handleErrorPromise);
    };
    Language.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    Language.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    Language = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], Language);
    return Language;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Repo\ce-site-v4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map