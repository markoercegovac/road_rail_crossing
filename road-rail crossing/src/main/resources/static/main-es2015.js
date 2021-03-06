(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_road_rail_crossing_new_road_rail_crossing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-road-rail-crossing/new-road-rail-crossing.component */ "./src/app/new-road-rail-crossing/new-road-rail-crossing.component.ts");
/* harmony import */ var _risk_risk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./risk/risk.component */ "./src/app/risk/risk.component.ts");






const routes = [
    { path: 'new-road-rail-crossing', component: _new_road_rail_crossing_new_road_rail_crossing_component__WEBPACK_IMPORTED_MODULE_2__["NewRoadRailCrossingComponent"] },
    { path: 'risk', component: _risk_risk_component__WEBPACK_IMPORTED_MODULE_3__["RiskComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'road-rail-crossing-ng';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _new_road_rail_crossing_new_road_rail_crossing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-road-rail-crossing/new-road-rail-crossing.component */ "./src/app/new-road-rail-crossing/new-road-rail-crossing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _risk_risk_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./risk/risk.component */ "./src/app/risk/risk.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
        _new_road_rail_crossing_new_road_rail_crossing_component__WEBPACK_IMPORTED_MODULE_6__["NewRoadRailCrossingComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _risk_risk_component__WEBPACK_IMPORTED_MODULE_12__["RiskComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                    _new_road_rail_crossing_new_road_rail_crossing_component__WEBPACK_IMPORTED_MODULE_6__["NewRoadRailCrossingComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _risk_risk_component__WEBPACK_IMPORTED_MODULE_12__["RiskComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "row", "vcenter"], [1, "pull-left", "col-lg-6", "col-xs-12"], [1, "col-lg-4", "col-lg-offset-4", "col-xs-12"], [1, "pull-right"], ["href", "https://www.linkedin.com/in/marko-ercegovac-2a81bb18b/"], [1, "fa", "fa-linkedin-square", "fa-icon"], ["href", "https://github.com/markoercegovac"], [1, "fa", "fa-github-square", "fa-icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Copyright \u00A92022 by Pamela Ercegovac and Marko Ercegovac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NavigationComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 14);
} }
class NavigationComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    newLevelCrossing() {
        this.isHome = false;
        this.router.navigate(['/new-road-rail-crossing']);
    }
    home() {
        this.isHome = true;
        this.router.navigate(['']);
    }
    showRiskPage() {
        this.isHome = false;
        this.router.navigate(['/risk']);
    }
}
NavigationComponent.??fac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavigationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 31, vars: 1, consts: [["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "navbar-brand"], [1, "fa-solid", "fa-train"], [1, "fa-solid", "fa-car-crash"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], [1, "text-danger"], [1, "text-success"], ["class", "image", 4, "ngIf"], [1, "image"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Rizik od pojave nesre\u0107e/nezgode na putno-pru\u017Enim prelazima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavigationComponent_Template_a_click_12_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Po\u010Detna stranica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavigationComponent_Template_a_click_16_listener() { return ctx.newLevelCrossing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Novi putno-pru\u017Eni prelaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavigationComponent_Template_a_click_20_listener() { return ctx.showRiskPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Rangiranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "rizik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "pouzdanost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NavigationComponent_div_30_Template, 1, 0, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isHome);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".image[_ngcontent-%COMP%]{\r\n    height:50em; background-size:cover; width:auto;\r\n    background-image:url('Pru\u017Eni_prelaz_\u0160abac.jpg');\r\n    background-position:50% 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsVUFBVTtJQUM5QywrQ0FBMEQ7SUFDMUQsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgICBoZWlnaHQ6NTBlbTsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB3aWR0aDphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ3NyYy9hc3NldHMvUHJ1xb5uaV9wcmVsYXpfxaBhYmFjLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/new-road-rail-crossing/new-road-rail-crossing.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/new-road-rail-crossing/new-road-rail-crossing.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewRoadRailCrossingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoadRailCrossingComponent", function() { return NewRoadRailCrossingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_road_rail_crossing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/road-rail-crossing-service */ "./src/app/services/road-rail-crossing-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NewRoadRailCrossingComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Naziv/ime putno-pru\u017Enog prelaza je obavezno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Naziv/ime putno-pru\u017Enog prelaza je obavezno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Naziv drumske saobra\u0107ajnice/puta na kojem se putno-pru\u017Eni prelaz nalazi je obavezno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Nivo obezbe\u0111enja putno-pru\u017Enog prelaza");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Prose\u010Dan dnevni intenzitet tokova drumskih vozila ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Prose\u010Dan dnevni intenzitet tokova \u017Eelezni\u010Dkih vozila ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Srednja du\u017Eina drumskih vozila ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Du\u017Eina kriti\u010Dnog rastojanja za drumska vozila ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Srednja brzina kretanja drumskih vozila preko kriti\u010Dnog puta ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Du\u017Eina kriti\u010Dnog rastojanja ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Du\u017Eina kriti\u010Dnog rastojanja za \u017Eelezni\u010Dka vozila ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Srednja brzina kretanja \u017Eelezni\u010Dkog vozila preko kriti\u010Dnog puta ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Broj godina za koji posmatramo nesre\u0107e nezgode ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NewRoadRailCrossingComponent_small_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Ukupan broj nesre\u0107a/nezgoda u posmatranom broju godina ne sme biti negativan broj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class NewRoadRailCrossingComponent {
    constructor(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
    }
    ngOnInit() {
        this.newForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            railName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            roadName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            safetyLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vehiclePerDay: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            trainPerDay: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            mediumLengthOfVehicle: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            criticalDistanceLengthOfVehicle: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            mediumVelocityOfVehicle: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            mediumLengthOfTrain: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            criticalDistanceLengthOfTrain: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            mediumVelocityOfTrain: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            numberOfYearsOfAccidents: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            totalNumberOfAccidents: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]
        });
    }
    createNewRoadRailCrossing(form) {
        if (form.valid) {
            let newRoadRailCrossing = {
                name: form.value.name,
                railName: form.value.railName,
                roadName: form.value.roadName,
                safetyLevel: form.value.safetyLevel,
                vehiclePerDay: form.value.vehiclePerDay,
                trainPerDay: form.value.trainPerDay,
                mediumLengthOfVehicle: form.value.mediumLengthOfVehicle,
                criticalDistanceLengthOfVehicle: form.value.criticalDistanceLengthOfVehicle,
                mediumVelocityOfVehicle: form.value.mediumVelocityOfVehicle,
                mediumLengthOfTrain: form.value.mediumLengthOfTrain,
                criticalDistanceLengthOfTrain: form.value.criticalDistanceLengthOfTrain,
                mediumVelocityOfTrain: form.value.mediumVelocityOfTrain,
                numberOfYearsOfAccidents: form.value.numberOfYearsOfAccidents,
                totalNumberOfAccidents: form.value.totalNumberOfAccidents
            };
            this.service.save(newRoadRailCrossing).subscribe();
        }
    }
    get f() { return this.newForm.controls; }
}
NewRoadRailCrossingComponent.??fac = function NewRoadRailCrossingComponent_Factory(t) { return new (t || NewRoadRailCrossingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_road_rail_crossing_service__WEBPACK_IMPORTED_MODULE_2__["RoadRailCrossingService"])); };
NewRoadRailCrossingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewRoadRailCrossingComponent, selectors: [["app-new-road-rail-crossing"]], decls: 167, vars: 15, consts: [[1, "w3-main"], [1, "row"], [1, "offset-3"], [1, "col-md-6"], [3, "formGroup", "ngSubmit"], [1, "fa", "fa-road"], [1, "form-group", 2, "margin-top", "20px"], ["sanitaze", "", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "railName", 1, "form-control"], ["formControlName", "roadName", 1, "form-control"], ["formControlName", "safetyLevel", 1, "form-control"], [1, "fa-solid", "fa-chart-line"], ["type", "number", "formControlName", "vehiclePerDay", 1, "form-control"], ["type", "number", "formControlName", "trainPerDay", 1, "form-control"], ["type", "number", "formControlName", "mediumLengthOfVehicle", 1, "form-control"], ["type", "number", "formControlName", "criticalDistanceLengthOfVehicle", 1, "form-control"], ["type", "number", "formControlName", "mediumVelocityOfVehicle", 1, "form-control"], ["type", "number", "formControlName", "mediumLengthOfTrain", 1, "form-control"], ["type", "number", "formControlName", "criticalDistanceLengthOfTrain", 1, "form-control"], ["type", "number", "formControlName", "mediumVelocityOfTrain", 1, "form-control"], ["type", "number", "formControlName", "numberOfYearsOfAccidents", 1, "form-control"], ["type", "number", "formControlName", "totalNumberOfAccidents", 1, "form-control"], ["type", "submit", "value", "Napravi novi putno-pru\u017Eni prelaz", 1, "btn", "btn-primary", "float-right"], [1, "text-danger"]], template: function NewRoadRailCrossingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NewRoadRailCrossingComponent_Template_form_ngSubmit_4_listener() { return ctx.createNewRoadRailCrossing(ctx.newForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Putno-pru\u017Eni prelaz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Naziv/ime putno-pru\u017Enog prelaza.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, NewRoadRailCrossingComponent_small_15_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Naziv pruge na kojoj se putno-pru\u017Eni prelaz nalazi sa kilometarskim polo\u017Eajem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, NewRoadRailCrossingComponent_small_21_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Naziv drumske saobra\u0107ajnice/puta na kojem se putno-pru\u017Eni prelaz nalazi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, NewRoadRailCrossingComponent_small_27_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Nivo obezbe\u0111enja putno-pru\u017Enog prelaza, shodno odredbama Pravilnika o na\u010Dinu ukr\u0161tanja \u017Eelezni\u010Dke pruge i puta, pe\u0161a\u010Dke ili biciklisti\u010Dke staze, mestu na kojem se mo\u017Ee izvesti ukr\u0161tanje i merama za osiguranje bezbednog saobra\u0107aja (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, ",,Slu\u017Ebeni glasnik RS\u201D, br. 89/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, NewRoadRailCrossingComponent_small_36_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Statisti\u010Dki podaci ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Prose\u010Dan dnevni intenzitet tokova drumskih vozila (drumskih vozila/dan), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\u03BBc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, NewRoadRailCrossingComponent_small_53_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Prose\u010Dan dnevni intenzitet tokova \u017Eelezni\u010Dkih vozila (vozova/dan), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\u03BBt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, NewRoadRailCrossingComponent_small_62_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Srednja du\u017Eina drumskih vozila ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "lc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, NewRoadRailCrossingComponent_small_74_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Du\u017Eina kriti\u010Dnog rastojanja za drumska vozila, koja je jednaka prose\u010Dnoj \u010Deonoj \u0161irini voza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Lc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, NewRoadRailCrossingComponent_small_86_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Srednja brzina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "vc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "km/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, ") kretanja drumskih vozila preko kriti\u010Dnog puta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "lc+Lc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](102, NewRoadRailCrossingComponent_small_102_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Du\u017Eina kriti\u010Dnog rastojanja, koja je jednaka prose\u010Dnoj du\u017Eini vozova ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "lt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](114, NewRoadRailCrossingComponent_small_114_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Du\u017Eina kriti\u010Dnog rastojanja za \u017Eelezni\u010Dka vozila, koja je jednaka \u0161irini putno-pru\u017Enog prelaza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Lt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](126, NewRoadRailCrossingComponent_small_126_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Srednja brzina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "vc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "km/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, ") kretanja \u017Eelezni\u010Dkog vozila preko kriti\u010Dnog puta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "lt+Lt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](142, NewRoadRailCrossingComponent_small_142_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Broj godina za koji posmatramo nesre\u0107e nezgode (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](151, NewRoadRailCrossingComponent_small_151_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Ukupan broj nesre\u0107a/nezgoda u posmatranom broju godina (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "nreal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](160, NewRoadRailCrossingComponent_small_160_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.railName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.roadName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.safetyLevel.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.vehiclePerDay.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.trainPerDay.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.mediumLengthOfVehicle.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.criticalDistanceLengthOfVehicle.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.mediumVelocityOfVehicle.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.mediumLengthOfTrain.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.criticalDistanceLengthOfTrain.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.mediumVelocityOfTrain.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.numberOfYearsOfAccidents.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.f.totalNumberOfAccidents.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJvYWQtcmFpbC1jcm9zc2luZy9uZXctcm9hZC1yYWlsLWNyb3NzaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9uZXctcm9hZC1yYWlsLWNyb3NzaW5nL25ldy1yb2FkLXJhaWwtY3Jvc3NpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewRoadRailCrossingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-road-rail-crossing',
                templateUrl: './new-road-rail-crossing.component.html',
                styleUrls: ['./new-road-rail-crossing.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_road_rail_crossing_service__WEBPACK_IMPORTED_MODULE_2__["RoadRailCrossingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/risk/risk.component.ts":
/*!****************************************!*\
  !*** ./src/app/risk/risk.component.ts ***!
  \****************************************/
/*! exports provided: RiskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskComponent", function() { return RiskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_risk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/risk-service */ "./src/app/services/risk-service.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");








function RiskComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Naziv pru\u017Enog prelaza");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RiskComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r10.name);
} }
function RiskComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Nivo obezbe\u0111enja putno-pru\u017Enog prelaza");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RiskComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r11.safetyLevel);
} }
function RiskComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Pouzdanost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RiskComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r12.reliability);
} }
function RiskComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Rizik");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function RiskComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r13.risk);
} }
function RiskComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 15);
} }
function RiskComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 16);
} }
class RiskComponent {
    constructor(riskService, _liveAnnouncer) {
        this.riskService = riskService;
        this._liveAnnouncer = _liveAnnouncer;
        this.displayedColumns = ['name', 'safetyLevel', 'reliability', 'risk'];
    }
    ngOnInit() {
        this.renderTable();
    }
    renderTable() {
        this.riskService.getAllRiskData().subscribe(data => {
            this.allRiskData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            this.allRiskData.sort = this.sort;
        });
    }
    announceSortChange(sortState) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
RiskComponent.??fac = function RiskComponent_Factory(t) { return new (t || RiskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_risk_service__WEBPACK_IMPORTED_MODULE_3__["RiskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["LiveAnnouncer"])); };
RiskComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RiskComponent, selectors: [["app-risk"]], viewQuery: function RiskComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 18, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "safetyLevel"], ["matColumnDef", "reliability"], ["matColumnDef", "risk"], ["mat-header-cell", "", "mat-sort-header", "", "class", "text-danger text-lg-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-danger text-lg-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-danger", "text-lg-right"], ["mat-cell", "", 1, "text-danger", "text-lg-right"], ["mat-header-row", ""], ["mat-row", ""]], template: function RiskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RiskComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, RiskComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, RiskComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, RiskComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, RiskComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RiskComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, RiskComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, RiskComponent_td_12_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, RiskComponent_tr_13_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, RiskComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.allRiskData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlzay9yaXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmlzay9yaXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RiskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risk',
                templateUrl: './risk.component.html',
                styleUrls: ['./risk.component.css']
            }]
    }], function () { return [{ type: _services_risk_service__WEBPACK_IMPORTED_MODULE_3__["RiskService"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["LiveAnnouncer"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/services/risk-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/risk-service.ts ***!
  \******************************************/
/*! exports provided: RiskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskService", function() { return RiskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].risk;
class RiskService {
    constructor(http) {
        this.http = http;
    }
    getAllRiskData() {
        return this.http.get(URL + '/all');
    }
}
RiskService.??fac = function RiskService_Factory(t) { return new (t || RiskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RiskService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RiskService, factory: RiskService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RiskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/road-rail-crossing-service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/road-rail-crossing-service.ts ***!
  \********************************************************/
/*! exports provided: RoadRailCrossingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadRailCrossingService", function() { return RoadRailCrossingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].road_rail_crossing;
class RoadRailCrossingService {
    constructor(http) {
        this.http = http;
    }
    save(roadRailCrossing) {
        return this.http.post(URL + '/save', roadRailCrossing);
    }
}
RoadRailCrossingService.??fac = function RoadRailCrossingService_Factory(t) { return new (t || RoadRailCrossingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoadRailCrossingService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RoadRailCrossingService, factory: RoadRailCrossingService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoadRailCrossingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    risk: 'http://localhost:9090/api/risk',
    road_rail_crossing: 'http://localhost:9090/api/road-rail-crossing'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projekat putno pruzni prelazi\road_rail_crossing\road-rail-crossing-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map