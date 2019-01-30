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

module.exports = "<main *ngIf=\"lang && lang.contents\">\n  <home></home>\n</main>\n<footer *ngIf=\"copyright[0]\">\n  {{copyright[0].content}}\n</footer>"

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
        __metadata("design:paramtypes", [services_language_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"], services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/language/language.service */ "./src/app/services/language/language.service.ts");
/* harmony import */ var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/configuration/configuration.service */ "./src/app/services/configuration/configuration.service.ts");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/config.service */ "./src/app/config/config.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home */ "./src/app/components/home/home.ts");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about */ "./src/app/components/about/about.ts");
/* harmony import */ var _components_common_card_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/card/card */ "./src/app/components/common/card/card.ts");
/* harmony import */ var _components_common_circle_image_circleImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/circle-image/circleImage */ "./src/app/components/common/circle-image/circleImage.ts");
/* harmony import */ var _components_common_contact_list_contactList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/contact-list/contactList */ "./src/app/components/common/contact-list/contactList.ts");
/* harmony import */ var _components_common_education_list_educationList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/education-list/educationList */ "./src/app/components/common/education-list/educationList.ts");
/* harmony import */ var _components_common_skill_list_skillList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/common/skill-list/skillList */ "./src/app/components/common/skill-list/skillList.ts");
/* harmony import */ var _components_common_training_list_trainingList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/common/training-list/trainingList */ "./src/app/components/common/training-list/trainingList.ts");
/* harmony import */ var _components_common_certification_list_certificationList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/certification-list/certificationList */ "./src/app/components/common/certification-list/certificationList.ts");
/* harmony import */ var _components_common_hobbies_list_hobbiesList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/common/hobbies-list/hobbiesList */ "./src/app/components/common/hobbies-list/hobbiesList.ts");
/* harmony import */ var _components_common_experience_list_experienceList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/common/experience-list/experienceList */ "./src/app/components/common/experience-list/experienceList.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Module







// Services



// Components












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_home_home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_about_about__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _components_common_card_card__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                _components_common_circle_image_circleImage__WEBPACK_IMPORTED_MODULE_14__["CircleImageComponent"],
                _components_common_contact_list_contactList__WEBPACK_IMPORTED_MODULE_15__["ContactListComponent"],
                _components_common_education_list_educationList__WEBPACK_IMPORTED_MODULE_16__["EducationListComponent"],
                _components_common_skill_list_skillList__WEBPACK_IMPORTED_MODULE_17__["SkillListComponent"],
                _components_common_training_list_trainingList__WEBPACK_IMPORTED_MODULE_18__["TrainingListComponent"],
                _components_common_certification_list_certificationList__WEBPACK_IMPORTED_MODULE_19__["CertificationListComponent"],
                _components_common_hobbies_list_hobbiesList__WEBPACK_IMPORTED_MODULE_20__["HobbiesListComponent"],
                _components_common_experience_list_experienceList__WEBPACK_IMPORTED_MODULE_21__["ExperienceListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]
            ],
            providers: [
                _services_language_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"],
                _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_8__["ConfigurationService"],
                _config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigCollectionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.ts":
/*!*******************************************!*\
  !*** ./src/app/components/about/about.ts ***!
  \*******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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


var AboutComponent = /** @class */ (function () {
    function AboutComponent(langFile) {
        this.langFile = langFile;
        this.page = 'about';
        this.contents = langFile.getPageContent(this.page);
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: './about.template.html',
            styles: ['./about.style.scss']
        }),
        __metadata("design:paramtypes", [services_language_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/common/card/card.style.scss":
/*!********************************************************!*\
  !*** ./src/app/components/common/card/card.style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.card {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  padding-bottom: 20px; }\n.card .card-header {\n    padding-bottom: 15px; }\n.card .card-header .icon, .card .card-header .title {\n      color: #ec7263;\n      font-size: 16px;\n      font-weight: bold; }\n.card .card-header .options {\n      padding-left: 55%;\n      color: #ec7263;\n      display: inline; }\n.card .card-header .options a {\n        color: #ec7263;\n        text-decoration: underline;\n        cursor: pointer;\n        font-size: 10px; }\n.card .card-body {\n    width: 90%;\n    padding-bottom: 0;\n    margin-bottom: 0;\n    padding-left: 10px; }\n.card .card-body .card-text::before {\n      content: \"$ \"; }\n.card .card-body .card-text::after {\n      content: \"| \";\n      -webkit-animation: blinker 1s linear infinite;\n              animation: blinker 1s linear infinite; }\n.card .card-body .card-text {\n      display: block; }\n.card .card-body .skillCardContainer {\n      width: 85%; }\n.card .card-body .skillContainer,\n    .card .card-body .hobbiesContainer {\n      display: inline;\n      padding: 5px 10px; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/components/common/card/card.template.html":
/*!***********************************************************!*\
  !*** ./src/app/components/common/card/card.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-light mb-3\" *ngIf=\"cardInfo\">\r\n    <div class=\"card-header\">\r\n        <span class=\"icon glyphicon {{cardInfo.icon}}\" aria-hidden=\"true\"></span>&nbsp;\r\n        <span class=\"title\">{{cardInfo.title}}</span>\r\n        <div *ngIf=\"cardInfo.options\" class=\"options\">\r\n            <a *ngFor=\"let label of cardInfo.options\" (click)=\"activateOption(cardInfo.title)\">{{!option ? 'Show' : 'Hide'}} {{label}}</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"cardInfo.details\">\r\n        <h5 class=\"card-title\" *ngIf=\"cardInfo.details.title\">\r\n            {{cardInfo.details.title}}\r\n        </h5>\r\n        <p class=\"card-text\" *ngIf=\"cardInfo.details.text\">\r\n            {{cardInfo.details.text}}\r\n        </p>\r\n        <div *ngIf=\"cardInfo.details.contacts\">\r\n            <div *ngFor=\"let contact of cardInfo.details.contacts\">\r\n                <contact-list [contactInfo]=\"contact\"></contact-list>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"cardInfo.details.education\">\r\n            <div *ngFor=\"let education of cardInfo.details.education\">\r\n                <education-list [educationInfo]=\"education\"></education-list>\r\n            </div>\r\n        </div>\r\n        <div class=\"skillCardContainer\" *ngIf=\"cardInfo.details.skills\">\r\n            <div class=\"skillContainer\" *ngFor=\"let skill of cardInfo.details.skills\">\r\n                <skill-list [skillInfo]=\"skill\" [option]=\"category == 'Skills' && option\"></skill-list>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"cardInfo.details.training\">\r\n            <div class=\"trainingContainer\" *ngFor=\"let training of cardInfo.details.training\">\r\n                <training-list [trainingInfo]=\"training\"></training-list>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"cardInfo.details.certification\">\r\n            <div class=\"certificationContainer\" *ngFor=\"let certification of cardInfo.details.certification\">\r\n                <certification-list [certificationInfo]=\"certification\"></certification-list>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"cardInfo.details.hobbies\">\r\n            <div class=\"hobbiesContainer\" *ngFor=\"let hobbies of cardInfo.details.hobbies\">\r\n                <hobbies-list [hobbiesInfo]=\"hobbies\" [option]=\"category == 'Hobbies' && option\"></hobbies-list>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"cardInfo.details.experiences\">\r\n            <div class=\"experienceContainer\" *ngFor=\"let experience of cardInfo.details.experiences\">\r\n                <experience-list [experienceInfo]=\"experience\" [option]=\"category == 'Experience' && option\"></experience-list>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/card/card.ts":
/*!************************************************!*\
  !*** ./src/app/components/common/card/card.ts ***!
  \************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.option = false;
        this.category = '';
    }
    CardComponent.prototype.activateOption = function (category) {
        this.option = !this.option;
        this.category = category;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "cardInfo", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            styles: [__webpack_require__(/*! ./card.style.scss */ "./src/app/components/common/card/card.style.scss")],
            template: __webpack_require__(/*! ./card.template.html */ "./src/app/components/common/card/card.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/common/certification-list/certificationList.style.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/common/certification-list/certificationList.style.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.certification-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: block; }\n.certification-item > div {\n    display: inline; }\n.certification-item .icon {\n    color: #ec7263; }\n.certification-item .title {\n    font-size: 12px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n    display: block; }\n.certification-item .title .material-icons {\n      font-size: 16px;\n      color: #ec7263; }\n.certification-item .title:hover {\n    overflow: visible; }\n.certification-item a {\n    color: #ec7263; }\n.certification-item .year::after {\n    content: \"| \";\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/components/common/certification-list/certificationList.template.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/common/certification-list/certificationList.template.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"certification-item\">\r\n    <div class=\"title\">\r\n        <i class=\"icon fas fa-award\"></i> \r\n        <span>&nbsp; {{certificationInfo.name}}</span>\r\n        <span *ngIf=\"certificationInfo.source\">\r\n            - Source: \r\n            <a *ngIf=\"certificationInfo.link\" href=\"{{certificationInfo.link}}\" target=\"_blank\">\r\n                {{certificationInfo.source}}\r\n            </a>\r\n        </span>\r\n        <span class=\"year\" *ngIf=\"certificationInfo.year\">\r\n            ({{certificationInfo.year}})\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/certification-list/certificationList.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/common/certification-list/certificationList.ts ***!
  \***************************************************************************/
/*! exports provided: CertificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationListComponent", function() { return CertificationListComponent; });
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

var CertificationListComponent = /** @class */ (function () {
    function CertificationListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CertificationListComponent.prototype, "certificationInfo", void 0);
    CertificationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'certification-list',
            styles: [__webpack_require__(/*! ./certificationList.style.scss */ "./src/app/components/common/certification-list/certificationList.style.scss")],
            template: __webpack_require__(/*! ./certificationList.template.html */ "./src/app/components/common/certification-list/certificationList.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], CertificationListComponent);
    return CertificationListComponent;
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
/*! exports provided: CircleImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleImageComponent", function() { return CircleImageComponent; });
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

var CircleImageComponent = /** @class */ (function () {
    function CircleImageComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CircleImageComponent.prototype, "image", void 0);
    CircleImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'circle-image',
            styles: [__webpack_require__(/*! ./circleImage.style.scss */ "./src/app/components/common/circle-image/circleImage.style.scss")],
            template: __webpack_require__(/*! ./circleImage.template.html */ "./src/app/components/common/circle-image/circleImage.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], CircleImageComponent);
    return CircleImageComponent;
}());



/***/ }),

/***/ "./src/app/components/common/contact-list/contactList.style.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/contact-list/contactList.style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.contact-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: block;\n  font-size: 12px; }\n.contact-item > div {\n    display: inline; }\n.contact-item .icon {\n    font-size: 16px;\n    color: #ec7263; }\n.contact-item .title::after,\n  .contact-item .titleWithUrl::after {\n    content: \"| \";\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite; }\n.contact-item a, .contact-item a:hover, .contact-item a:visited {\n    color: #000; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

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
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
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

var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contactInfo", void 0);
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact-list',
            styles: [__webpack_require__(/*! ./contactList.style.scss */ "./src/app/components/common/contact-list/contactList.style.scss")],
            template: __webpack_require__(/*! ./contactList.template.html */ "./src/app/components/common/contact-list/contactList.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/components/common/education-list/educationList.style.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/common/education-list/educationList.style.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.education-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: block;\n  padding-bottom: 15px; }\n.education-item > div {\n    display: inline; }\n.education-item .icon {\n    color: #ec7263; }\n.education-item .title {\n    font-size: 12px; }\n.education-item .title .material-icons {\n      font-size: 16px;\n      color: #ec7263; }\n.education-item .details {\n    font-size: 10px;\n    margin-left: 20px;\n    display: block; }\n.education-item .details .schoolYear {\n      display: block;\n      color: #ec7263;\n      font-weight: bold; }\n.education-item .details .achievements, .education-item .details .course {\n      display: block;\n      font-style: italic; }\n.education-item .achievements::after,\n  .education-item .course::after {\n    content: \"| \";\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/components/common/education-list/educationList.template.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/education-list/educationList.template.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"education-item\">\r\n    <div class=\"title\">\r\n        <i class=\"material-icons\">school</i>&nbsp;{{educationInfo.name}}\r\n    </div>\r\n    <div class=\"details\">\r\n        <span class=\"schoolYear\" *ngIf=\"educationInfo.fromYear\">\r\n            {{educationInfo.fromYear}} - {{educationInfo.toYear}}\r\n        </span>\r\n        <span class=\"achievements\" *ngIf=\"educationInfo.achievements\">\r\n            Achievement: {{educationInfo.achievements}}\r\n        </span>\r\n        <span class=\"course\" *ngIf=\"educationInfo.course\">\r\n            Course: {{educationInfo.course}}\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/education-list/educationList.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/common/education-list/educationList.ts ***!
  \*******************************************************************/
/*! exports provided: EducationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationListComponent", function() { return EducationListComponent; });
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

var EducationListComponent = /** @class */ (function () {
    function EducationListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EducationListComponent.prototype, "educationInfo", void 0);
    EducationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'education-list',
            styles: [__webpack_require__(/*! ./educationList.style.scss */ "./src/app/components/common/education-list/educationList.style.scss")],
            template: __webpack_require__(/*! ./educationList.template.html */ "./src/app/components/common/education-list/educationList.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], EducationListComponent);
    return EducationListComponent;
}());



/***/ }),

/***/ "./src/app/components/common/experience-list/experienceList.style.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/common/experience-list/experienceList.style.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.experience-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: block;\n  padding-bottom: 10px; }\n.experience-item > div {\n    display: inline; }\n.experience-item .icon {\n    color: #ec7263; }\n.experience-item .title {\n    font-size: 12px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n    display: block; }\n.experience-item .title .material-icons {\n      font-size: 16px;\n      color: #ec7263; }\n.experience-item .title .experienceCompanyName {\n      font-weight: bold; }\n.experience-item .title .experienceYear {\n      color: #ec7263; }\n.experience-item .title:hover {\n    overflow: visible; }\n.experience-item a {\n    color: #ec7263; }\n.experience-item .details > span, .experience-item .details > a, .experience-item .details > p {\n    padding-left: 20px; }\n.experience-item .details > a {\n    cursor: pointer;\n    font-size: 12px;\n    display: block; }\n.experience-item .details .position {\n    font-weight: bold;\n    font-style: italic;\n    font-size: 12px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 80%;\n    overflow: hidden; }\n.experience-item .details .projectlink i {\n    font-size: 12px;\n    vertical-align: bottom; }\n.experience-item .details .ProjectDetail {\n    font-size: 12px; }\n.experience-item .details .technologylink i {\n    font-size: 12px;\n    vertical-align: bottom; }\n.experience-item .details .technologyDetail {\n    font-size: 12px; }\n.experience-item .year::after {\n    content: \"| \";\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/components/common/experience-list/experienceList.template.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/experience-list/experienceList.template.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experience-item\">\r\n    <div class=\"title\">\r\n        <i class=\"material-icons\">work</i>&nbsp;\r\n        <span class=\"experienceCompanyName\" *ngIf=\"experienceInfo.company\">\r\n            {{experienceInfo.company}}\r\n        </span>\r\n        <span class=\"experienceYear\" *ngIf=\"experienceInfo.fromYear\">\r\n            ({{experienceInfo.fromYear}} - {{experienceInfo.toYear}})\r\n        </span>\r\n    </div>\r\n    <div class=\"details\">\r\n        <span class=\"position\" *ngIf=\"experienceInfo.position\">\r\n            {{experienceInfo.position}}\r\n        </span>\r\n        <br />\r\n        <a *ngIf=\"experienceInfo.projects\" (click)=\"showProject(bProjectDetail)\" class=\"projectlink\">\r\n            Projects: \r\n            <i *ngIf=\"!bProjectDetail\" class=\"material-icons\">keyboard_arrow_right</i> \r\n            <i *ngIf=\"bProjectDetail\" class=\"material-icons\">keyboard_arrow_down</i> \r\n        </a>\r\n        <ul class=\"ProjectDetail\" *ngIf=\"experienceInfo.projects && bProjectDetail\">\r\n            <li *ngFor=\"let project of experienceInfo.projects\">\r\n                <a *ngIf=\"project.link\" href=\"{{project.link}}\" target=\"_blank\">{{project.name}}</a>\r\n                <span *ngIf=\"!project.link\">{{project.name}}</span>\r\n            </li>\r\n        </ul>\r\n        <a (click)=\"showTechnology(bTechnologyDetail)\" class=\"technologylink\">\r\n            Technologies: \r\n            <i *ngIf=\"!bTechnologyDetail\" class=\"material-icons\">keyboard_arrow_right</i> \r\n            <i *ngIf=\"bTechnologyDetail\" class=\"material-icons\">keyboard_arrow_down</i> \r\n        </a>\r\n        <ul class=\"technologyDetail\" *ngIf=\"experienceInfo.technologies && bTechnologyDetail\">\r\n            <li *ngFor=\"let tech of experienceInfo.technologies\">\r\n                <span>{{tech}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/experience-list/experienceList.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/common/experience-list/experienceList.ts ***!
  \*********************************************************************/
/*! exports provided: ExperienceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceListComponent", function() { return ExperienceListComponent; });
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

var ExperienceListComponent = /** @class */ (function () {
    function ExperienceListComponent() {
        this.bTechnologyDetail = false;
        this.bProjectDetail = false;
        this.position = 'before';
    }
    Object.defineProperty(ExperienceListComponent.prototype, "option", {
        set: function (option) {
            this.bTechnologyDetail = option;
            this.bProjectDetail = option;
        },
        enumerable: true,
        configurable: true
    });
    ExperienceListComponent.prototype.showProject = function (bProjectStatus) {
        this.bProjectDetail = !bProjectStatus;
    };
    ExperienceListComponent.prototype.showTechnology = function (bDetailStatus) {
        this.bTechnologyDetail = !bDetailStatus;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExperienceListComponent.prototype, "experienceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ExperienceListComponent.prototype, "option", null);
    ExperienceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'experience-list',
            styles: [__webpack_require__(/*! ./experienceList.style.scss */ "./src/app/components/common/experience-list/experienceList.style.scss")],
            template: __webpack_require__(/*! ./experienceList.template.html */ "./src/app/components/common/experience-list/experienceList.template.html")
        })
    ], ExperienceListComponent);
    return ExperienceListComponent;
}());



/***/ }),

/***/ "./src/app/components/common/hobbies-list/hobbiesList.style.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/hobbies-list/hobbiesList.style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.hobbies-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: inline-block;\n  position: relative; }\n.hobbies-item:hover .hidden {\n    display: block !important;\n    visibility: visible !important; }\n.hobbies-item > div {\n    display: inline; }\n.hobbies-item .icon {\n    background-color: #ededed; }\n.hobbies-item .title {\n    font-size: 12px;\n    text-align: center;\n    display: block; }\n.hobbies-item .title a {\n      font-size: 32px;\n      padding-top: 10px;\n      text-decoration: none;\n      cursor: pointer; }\n.hobbies-item .name {\n    display: block;\n    vertical-align: bottom;\n    text-align: center;\n    font-size: 8px; }\n.hobbies-item a {\n    color: #ec7263; }\n"

/***/ }),

/***/ "./src/app/components/common/hobbies-list/hobbiesList.template.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/hobbies-list/hobbiesList.template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hobbies-item\">\r\n    <div class=\"title\">\r\n        <a *ngIf=\"hobbiesInfo.iconSource != 'material'\"\r\n            name=\"{{hobbiesInfo.name}}\"\r\n            matTooltip=\"{{hobbiesInfo.name}}\"\r\n            class=\"{{hobbiesInfo.icon}}\"></a> \r\n        <a *ngIf=\"hobbiesInfo.iconSource == 'material'\"\r\n            name=\"{{hobbiesInfo.name}}\" \r\n            matTooltip=\"{{hobbiesInfo.name}}\"\r\n            class=\"material-icons\">\r\n            {{hobbiesInfo.icon}}\r\n        </a>\r\n        <span class=\"name\" *ngIf=\"option\">{{hobbiesInfo.name}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/hobbies-list/hobbiesList.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/common/hobbies-list/hobbiesList.ts ***!
  \***************************************************************/
/*! exports provided: HobbiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesListComponent", function() { return HobbiesListComponent; });
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

var HobbiesListComponent = /** @class */ (function () {
    function HobbiesListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HobbiesListComponent.prototype, "hobbiesInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HobbiesListComponent.prototype, "option", void 0);
    HobbiesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hobbies-list',
            styles: [__webpack_require__(/*! ./hobbiesList.style.scss */ "./src/app/components/common/hobbies-list/hobbiesList.style.scss")],
            template: __webpack_require__(/*! ./hobbiesList.template.html */ "./src/app/components/common/hobbies-list/hobbiesList.template.html")
        })
    ], HobbiesListComponent);
    return HobbiesListComponent;
}());



/***/ }),

/***/ "./src/app/components/common/skill-list/skillList.style.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/common/skill-list/skillList.style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.skill-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: inline-block;\n  padding-left: 10px;\n  padding-bottom: 10px;\n  text-align: center; }\n.skill-item > div {\n    display: inline; }\n.skill-item .icons {\n    background-color: #fff; }\n.skill-item .icons i {\n      cursor: pointer;\n      font-size: 32px; }\n.skill-item .icons i.orange {\n        color: #ec7263; }\n.skill-item .icons .skillName {\n      display: block;\n      font-size: 8px;\n      text-align: center;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      width: 50px;\n      overflow: hidden;\n      padding: 0;\n      margin: 0;\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/common/skill-list/skillList.template.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/skill-list/skillList.template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skill-item\">\r\n    <div class=\"icons\" \r\n        matTooltip=\"{{skillInfo.skillName}} | Rate: {{skillInfo.skillRate}} | Experience: {{skillInfo.experience || '0'}}\">\r\n        <i class=\"{{skillInfo.icon}} colored\"></i>\r\n        <span \r\n            *ngIf=\"option\" \r\n            class=\"skillName\">\r\n            {{skillInfo.skillName}}\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/skill-list/skillList.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/common/skill-list/skillList.ts ***!
  \***********************************************************/
/*! exports provided: SkillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListComponent", function() { return SkillListComponent; });
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

var SkillListComponent = /** @class */ (function () {
    function SkillListComponent() {
    }
    SkillListComponent.prototype.ngOnInit = function () {
        console.log(this.skillInfo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SkillListComponent.prototype, "skillInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SkillListComponent.prototype, "option", void 0);
    SkillListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'skill-list',
            styles: [__webpack_require__(/*! ./skillList.style.scss */ "./src/app/components/common/skill-list/skillList.style.scss")],
            template: __webpack_require__(/*! ./skillList.template.html */ "./src/app/components/common/skill-list/skillList.template.html")
        })
    ], SkillListComponent);
    return SkillListComponent;
}());



/***/ }),

/***/ "./src/app/components/common/training-list/trainingList.style.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/common/training-list/trainingList.style.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n.training-item {\n  font-family: \"Open Sans\", Arial, Tahoma;\n  display: block; }\n.training-item > div {\n    display: inline; }\n.training-item .icon {\n    background-color: #ededed; }\n.training-item .title {\n    font-size: 12px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n    display: block; }\n.training-item .title .material-icons {\n      font-size: 16px;\n      color: #ec7263; }\n.training-item .title:hover {\n      overflow: visible; }\n.training-item .source {\n    padding-left: 20px; }\n.training-item .source a {\n      cursor: pointer; }\n.training-item a {\n    color: #ec7263;\n    cursor: pointer; }\n.training-item .year::after {\n    content: \"| \";\n    -webkit-animation: blinker 1s linear infinite;\n            animation: blinker 1s linear infinite; }\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/components/common/training-list/trainingList.template.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/training-list/trainingList.template.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"training-item\">\r\n    <div class=\"title\">\r\n        <i class=\"material-icons\">assignment_turned_in</i> \r\n        <span> {{trainingInfo.name}} ({{trainingInfo.year}})</span>\r\n        <a (click)=\"showDetails(bDetail)\" class=\"trainingDetailLink\"> \r\n            <i *ngIf=\"!bDetail\" class=\"material-icons\">keyboard_arrow_right</i> \r\n            <i *ngIf=\"bDetail\" class=\"material-icons\">keyboard_arrow_down</i> \r\n        </a>\r\n        <p class=\"source\" *ngIf=\"bDetail\">\r\n            Source: \r\n            <a *ngIf=\"trainingInfo.link\" href=\"{{trainingInfo.link}}\" target=\"_blank\">\r\n                {{trainingInfo.source}}\r\n            </a>\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/training-list/trainingList.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/common/training-list/trainingList.ts ***!
  \*****************************************************************/
/*! exports provided: TrainingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingListComponent", function() { return TrainingListComponent; });
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

var TrainingListComponent = /** @class */ (function () {
    function TrainingListComponent() {
        this.bDetail = false;
    }
    TrainingListComponent.prototype.showDetails = function (bShowDetail) {
        this.bDetail = !bShowDetail;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrainingListComponent.prototype, "trainingInfo", void 0);
    TrainingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'training-list',
            styles: [__webpack_require__(/*! ./trainingList.style.scss */ "./src/app/components/common/training-list/trainingList.style.scss")],
            template: __webpack_require__(/*! ./trainingList.template.html */ "./src/app/components/common/training-list/trainingList.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], TrainingListComponent);
    return TrainingListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.style.scss":
/*!*************************************************!*\
  !*** ./src/app/components/home/home.style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n/*\r\n * App-wide Color\r\n */\n/*\r\n * Font Sizes\r\n */\n/*\r\n * Font Face\r\n */\n@media print {\n  body {\n    color: #ec7263; }\n  .col-print-1 {\n    width: 8%;\n    float: left; }\n  .col-print-2 {\n    width: 16%;\n    float: left; }\n  .col-print-3 {\n    width: 25%;\n    float: left; }\n  .col-print-4 {\n    width: 33%;\n    float: left; }\n  .col-print-5 {\n    width: 42%;\n    float: left; }\n  .col-print-6 {\n    width: 50%;\n    float: left; }\n  .col-print-7 {\n    width: 58%;\n    float: left; }\n  .col-print-8 {\n    width: 66%;\n    float: left; }\n  .col-print-9 {\n    width: 75%;\n    float: left; }\n  .col-print-10 {\n    width: 83%;\n    float: left; }\n  .col-print-11 {\n    width: 92%;\n    float: left; }\n  .col-print-12 {\n    width: 100%;\n    float: left; } }\n* {\n  color: #000; }\n.resumeContainer {\n  padding: 0;\n  margin: 5px 0; }\n.resumeContainer .row {\n    background-color: #fff;\n    margin: 0 80px !important; }\n.resumeContainer .row.rowFirst .col {\n      margin: 0; }\n.resumeContainer .row.succeedingRow {\n      position: relative; }\n.resumeContainer .row .col {\n      background-color: #fff;\n      text-align: left;\n      /* The typing effect */ }\n.resumeContainer .row .col.col-padding {\n        padding-left: 30px; }\n.resumeContainer .row .col #photo-header {\n        padding-bottom: 20px; }\n.resumeContainer .row .col #photo-header hr {\n          padding: 0;\n          margin: 5px 0;\n          border-color: #ededed; }\n.resumeContainer .row .col #text-header {\n        padding: 20px 0 0;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        font-family: \"Open Sans\", Arial, Tahoma; }\n.resumeContainer .row .col #text-header h1 {\n          text-transform: uppercase;\n          font-size: 2em;\n          letter-spacing: -1px;\n          margin-top: 5px; }\n.resumeContainer .row .col #text-header h1 span {\n            color: #ec7263; }\n.resumeContainer .row .col #text-header h1 sup {\n            opacity: 0.5; }\n@-webkit-keyframes type {\n  from {\n    width: 0; } }\n@keyframes type {\n  from {\n    width: 0; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.template.html":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.template.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resumeContainer\" *ngIf=\"contents\">\r\n    <div class=\"row rowFirst\">\r\n      <div class=\"col col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-1\">\r\n        <div id=\"photo-header\" class=\"text-center\">\r\n          <!-- PHOTO (AVATAR) -->\r\n          <circle-image image=\"assets/img/avatar.jpg\"></circle-image>\r\n          <div id=\"text-header\" class=\"no-print\">\r\n            <h1 [innerHTML]=\"greetings[0].content\"></h1>\r\n          </div>\r\n          <hr />\r\n          <hr />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"row succeedingRow\">\r\n    <div *ngFor=\"let section of contents; let i = index;\" \r\n      class=\"col col-md-12 col-sm-12 col-12 {{section.section}}\" \r\n      [ngClass]=\"{\r\n        'col-lg-7 col-print-7': i%2==0, \r\n        'col-lg-5 col-print-5': i%2!=0}\">\r\n        <card [cardInfo]=\"section\"></card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.ts":
/*!*****************************************!*\
  !*** ./src/app/components/home/home.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(langFile) {
        this.langFile = langFile;
        this.header = 'greetings';
        this.page = 'resume';
        this.greetings = langFile.getSectionContent(this.header);
        this.contents = this.sortingOfContents(langFile.getPageContent(this.page));
    }
    HomeComponent.prototype.sortingOfContents = function (contents) {
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
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            styles: [__webpack_require__(/*! ./home.style.scss */ "./src/app/components/home/home.style.scss")],
            template: __webpack_require__(/*! ./home.template.html */ "./src/app/components/home/home.template.html")
        }),
        __metadata("design:paramtypes", [services_language_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigCollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigCollectionService", function() { return ConfigCollectionService; });
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

var ConfigCollectionService = /** @class */ (function () {
    function ConfigCollectionService() {
        this.apiCollectionUrl = "https://jjbxaqu2hd.execute-api.ap-southeast-1.amazonaws.com/dev/getAllConfigs";
    }
    ConfigCollectionService.prototype.getApiUrl = function () {
        return this.apiCollectionUrl;
    };
    ConfigCollectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigCollectionService);
    return ConfigCollectionService;
}());



/***/ }),

/***/ "./src/app/services/configuration/configuration.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/configuration/configuration.service.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/config.service */ "./src/app/config/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http, location, config) {
        this.http = http;
        this.location = location;
        this.config = config;
        this.title = 'Environmental configurations';
        this.env = 'prod';
        this.content = '1';
        this.env = this.getEnv();
    }
    ConfigurationService.prototype.getConfig = function () {
        var $host = this.getHost();
        return this.http.get($host)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    ConfigurationService.prototype.getHost = function () {
        return this.config.getApiUrl();
    };
    ConfigurationService.prototype.getEnv = function () {
        var env = 'prod';
        if (window.location.host.indexOf('localhost') > -1) {
            env = 'dev';
        }
        else if (window.location.host.indexOf('stage') > -1) {
            env = 'stage';
        }
        return env;
    };
    ConfigurationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ConfigurationService.prototype.handleErrorPromise = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigCollectionService"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/services/language/language.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
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


var LanguageService = /** @class */ (function () {
    function LanguageService(http) {
        this.http = http;
        this.configType = 'CONTENT_API';
    }
    LanguageService.prototype.getPageContent = function (page) {
        var arrContents = [];
        var content = this.lang.contents || [];
        if (content.length > 0) {
            arrContents = content.filter(function (x) { return x.page === page && x.status != 'inactive'; });
        }
        return arrContents;
    };
    LanguageService.prototype.getSectionContent = function (section) {
        var arrContents = [];
        var content = this.lang.contents || [];
        if (content.length > 0) {
            arrContents = content.filter(function (x) { return x.section === section && x.status != 'inactive'; });
        }
        return arrContents;
    };
    LanguageService.prototype.geti18nFile = function (config) {
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
    LanguageService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    LanguageService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LanguageService);
    return LanguageService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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