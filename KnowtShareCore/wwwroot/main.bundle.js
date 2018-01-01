webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_stage_component__ = __webpack_require__("../../../../../src/app/canvas/stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_canvastest_component__ = __webpack_require__("../../../../../src/app/canvas/canvastest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__networkview_networkview_component__ = __webpack_require__("../../../../../src/app/networkview/networkview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listview_listview_component__ = __webpack_require__("../../../../../src/app/listview/listview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treeview_treeview_component__ = __webpack_require__("../../../../../src/app/treeview/treeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webglview_webglview_component__ = __webpack_require__("../../../../../src/app/webglview/webglview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlaneview_swimlaneview_component__ = __webpack_require__("../../../../../src/app/swimlaneview/swimlaneview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__networkview_test_svg_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__networkview_test_svg_circle_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg-circle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'webgl', component: __WEBPACK_IMPORTED_MODULE_8__webglview_webglview_component__["a" /* WebglviewComponent */] },
    { path: 'canvas', component: __WEBPACK_IMPORTED_MODULE_2__canvas_stage_component__["a" /* StageComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_3__canvas_canvastest_component__["a" /* CanvasTestComponent */] },
    { path: 'svg', component: __WEBPACK_IMPORTED_MODULE_10__networkview_test_svg_component__["a" /* TestSvgComponent */] },
    { path: 'circle', component: __WEBPACK_IMPORTED_MODULE_11__networkview_test_svg_circle_component__["a" /* TestSvgCircleComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_6__treeview_treeview_component__["a" /* TreeviewComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__listview_listview_component__["a" /* ListviewComponent */] },
    { path: 'swim', component: __WEBPACK_IMPORTED_MODULE_9__swimlaneview_swimlaneview_component__["a" /* SwimlaneviewComponent */] },
    { path: 'network', component: __WEBPACK_IMPORTED_MODULE_4__networkview_networkview_component__["a" /* NetworkviewComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  padding: 30px 15px;\r\n}\r\n\r\n.greeting {\r\n  padding: 30px 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse \" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n      <a class='navbar-brand' href=\"http://localhost:4200/canvas\" target=\"_blank\" >+</a>\r\n    <a class='navbar-brand' [routerLink]=\"['/welcome']\">Welcome</a>\r\n\r\n\r\n    <div class=\"nav navbar-nav navbar-right \">\r\n      \r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/canvas'] \">Canvas</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/test'] \">Test</a>\r\n\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/webgl'] \">WebGL</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/svg'] \">SVG</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/tree'] \">Tree</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/list'] \">List</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/swim'] \">Swim</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/network'] \">Network</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\" style=\"padding-top:0px\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//https://www.npmjs.com/package/ng2-toastr


//import { Point } from "./foundry/foDecorators";
var AppComponent = (function () {
    function AppComponent(toastrService, options, vcr) {
        //let pt = new Point(0,0);
        this.toastrService = toastrService;
        this.options = options;
        this.vcr = vcr;
        this.title = 'ngFoundry';
        this.toastrService.setRootViewContainerRef(vcr);
        this.options.showCloseButton = true;
        this.options.newestOnTop = true;
        this.options.positionClass = "toast-top-right"; //"toast-bottom-left"  toast-top-full-width
    }
    Object.defineProperty(AppComponent.prototype, "IsProduction", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.openToast = function (type, title, message) {
        this.toastrService[type](title, message, this.options);
    };
    AppComponent.prototype.clearToasts = function () {
        this.toastrService.clearAllToasts();
    };
    AppComponent.prototype.showCustom = function () {
        this.toastrService.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWERROR").subscribe(function (item) {
            //console.log('SHOWERROR ' + JSON.stringify(item, undefined, 3));
            _this.openToast('error', item.title, item.message);
        });
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWWARNING").subscribe(function (item) {
            //console.log('SHOWWARNING ' + JSON.stringify(item, undefined, 3));
            _this.openToast('warning', item.title, item.message);
        });
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWINFO").subscribe(function (item) {
            //console.log('SHOWINFO ' + JSON.stringify(item, undefined, 3));
            _this.openToast('info', item.title, item.message);
        });
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWSUCCESS").subscribe(function (item) {
            //console.log('SHOWSUCCESS ' + JSON.stringify(item, undefined, 3));
            _this.openToast('success', item.title, item.message);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_maptokeys_pipe__ = __webpack_require__("../../../../../src/app/common/maptokeys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__treeview_treeview_component__ = __webpack_require__("../../../../../src/app/treeview/treeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__listview_listview_component__ = __webpack_require__("../../../../../src/app/listview/listview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__networkview_networkview_component__ = __webpack_require__("../../../../../src/app/networkview/networkview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__treeview_treeitem_component__ = __webpack_require__("../../../../../src/app/treeview/treeitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__webglview_webglview_component__ = __webpack_require__("../../../../../src/app/webglview/webglview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__networkview_test_forcediagram_component__ = __webpack_require__("../../../../../src/app/networkview/test-forcediagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__webglview_test_sceen1_component__ = __webpack_require__("../../../../../src/app/webglview/test-sceen1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__networkview_dockerecosystem_component__ = __webpack_require__("../../../../../src/app/networkview/dockerecosystem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__networkview_dockerecosystem_service__ = __webpack_require__("../../../../../src/app/networkview/dockerecosystem.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlaneview_swimlaneview_component__ = __webpack_require__("../../../../../src/app/swimlaneview/swimlaneview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__swimlaneview_swimlane_component__ = __webpack_require__("../../../../../src/app/swimlaneview/swimlane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swimlaneview_swimelement_component__ = __webpack_require__("../../../../../src/app/swimlaneview/swimelement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__swimlaneview_swim_service__ = __webpack_require__("../../../../../src/app/swimlaneview/swim.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__networkview_test_svg_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__networkview_test_svg_circle_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_signalr_service__ = __webpack_require__("../../../../../src/app/common/signalr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__canvas_stage_component__ = __webpack_require__("../../../../../src/app/canvas/stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__canvas_canvastest_component__ = __webpack_require__("../../../../../src/app/canvas/canvastest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_accordion__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__canvas_fo_inspector_fo_inspector_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-inspector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__canvas_fo_inspector_fo_stencil_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-stencil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__canvas_fo_inspector_fo_model_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__canvas_fo_inspector_fo_drawing_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__canvas_fo_inspector_fo_runtime_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-runtime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__canvas_fo_inspector_fo_command_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-command.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__canvas_fo_inspector_fo_concept_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-concept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__canvas_fo_inspector_fo_stencil_panel_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-stencil-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__canvas_fo_inspector_fo_page_panel_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-page-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__canvas_fo_inspector_fo_model_panel_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-model-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__canvas_fo_inspector_fo_concept_panel_component__ = __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-concept-panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_maptokeys_pipe__["a" /* MaptoKeysPipe */],
                __WEBPACK_IMPORTED_MODULE_6__common_maptokeys_pipe__["b" /* ModelJsonPipe */],
                __WEBPACK_IMPORTED_MODULE_9__treeview_treeview_component__["a" /* TreeviewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__listview_listview_component__["a" /* ListviewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__networkview_networkview_component__["a" /* NetworkviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__treeview_treeitem_component__["a" /* TreeitemComponent */],
                __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__webglview_webglview_component__["a" /* WebglviewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__networkview_test_forcediagram_component__["a" /* TestForcediagramComponent */],
                __WEBPACK_IMPORTED_MODULE_16__webglview_test_sceen1_component__["a" /* TestSceen1Component */],
                __WEBPACK_IMPORTED_MODULE_17__networkview_dockerecosystem_component__["a" /* DockerecosystemComponent */],
                __WEBPACK_IMPORTED_MODULE_19__swimlaneview_swimlaneview_component__["a" /* SwimlaneviewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__swimlaneview_swimlane_component__["a" /* SwimlaneComponent */],
                __WEBPACK_IMPORTED_MODULE_21__swimlaneview_swimelement_component__["a" /* SwimelementComponent */],
                __WEBPACK_IMPORTED_MODULE_23__networkview_test_svg_component__["a" /* TestSvgComponent */],
                __WEBPACK_IMPORTED_MODULE_24__networkview_test_svg_circle_component__["a" /* TestSvgCircleComponent */],
                __WEBPACK_IMPORTED_MODULE_26__canvas_stage_component__["a" /* StageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__canvas_canvastest_component__["a" /* CanvasTestComponent */],
                __WEBPACK_IMPORTED_MODULE_30__canvas_fo_inspector_fo_inspector_component__["a" /* foInspectorComponent */],
                __WEBPACK_IMPORTED_MODULE_31__canvas_fo_inspector_fo_stencil_component__["a" /* foStencilComponent */],
                __WEBPACK_IMPORTED_MODULE_32__canvas_fo_inspector_fo_model_component__["a" /* foModelComponent */],
                __WEBPACK_IMPORTED_MODULE_33__canvas_fo_inspector_fo_drawing_component__["a" /* foDrawingComponent */],
                __WEBPACK_IMPORTED_MODULE_34__canvas_fo_inspector_fo_runtime_component__["a" /* foRuntimeComponent */],
                __WEBPACK_IMPORTED_MODULE_35__canvas_fo_inspector_fo_command_component__["a" /* foCommandComponent */],
                __WEBPACK_IMPORTED_MODULE_36__canvas_fo_inspector_fo_concept_component__["a" /* foConceptComponent */],
                __WEBPACK_IMPORTED_MODULE_37__canvas_fo_inspector_fo_stencil_panel_component__["a" /* foStencilPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_38__canvas_fo_inspector_fo_page_panel_component__["a" /* foPagePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_39__canvas_fo_inspector_fo_model_panel_component__["a" /* foModelPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_40__canvas_fo_inspector_fo_concept_panel_component__["a" /* foConceptPanelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__networkview_dockerecosystem_service__["a" /* DockerecosystemService */],
                __WEBPACK_IMPORTED_MODULE_22__swimlaneview_swim_service__["a" /* SwimService */],
                __WEBPACK_IMPORTED_MODULE_25__common_signalr_service__["a" /* SignalRService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/canvastest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415





var CanvasTestComponent = (function () {
    function CanvasTestComponent() {
        // setting a width and height for the canvas
        this.width = 400;
        this.height = 400;
    }
    CanvasTestComponent.prototype.ngAfterViewInit = function () {
        // get the context
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        // set the width and height
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        // set some default properties about the line
        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';
        // we'll implement this method to start capturing mouse events
        this.captureEvents(canvasEl);
    };
    CanvasTestComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .fromEvent(canvasEl, 'mousedown')
            .switchMap(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
                .fromEvent(canvasEl, 'mousemove')
                .takeUntil(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(canvasEl, 'mouseup'))
                .pairwise();
        })
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            // previous and current position with the offset
            var prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            var currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            // this method we'll implement soon to do the actual drawing
            _this.drawOnCanvas(prevPos, currentPos);
        });
    };
    CanvasTestComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
        // incase the context is not set
        if (!this.cx) {
            return;
        }
        // start our drawing path
        this.cx.beginPath();
        // we're drawing lines so we need a previous position
        if (prevPos) {
            // sets the start point
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            // draws a line from the start pos until the current position
            this.cx.lineTo(currentPos.x, currentPos.y);
            // strokes the current path with the styles we set earlier
            this.cx.stroke();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CanvasTestComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CanvasTestComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CanvasTestComponent.prototype, "height", void 0);
    CanvasTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testcanvas',
            template: '<canvas #canvas></canvas>',
            styles: ['canvas { border: 1px solid #000; }']
        })
    ], CanvasTestComponent);
    return CanvasTestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/displayshapes.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dGlue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foDisplay2D_model__ = __webpack_require__("../../../../../src/app/foundry/foDisplay2D.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var dRectangle = (function (_super) {
    __extends(dRectangle, _super);
    function dRectangle(properties) {
        var _this = _super.call(this, properties) || this;
        _this.doAnimation = function () { };
        return _this;
    }
    dRectangle.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        this.doAnimation();
        _super.prototype.render.call(this, ctx, deep);
    };
    return dRectangle;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foDisplay2D_model__["a" /* foDisplay2D */]));

var dGlue = (function (_super) {
    __extends(dGlue, _super);
    function dGlue(properties) {
        var _this = _super.call(this, properties) || this;
        _this.pinX = function () { return 0.5 * _this.width; };
        _this.pinY = function () { return 0.5 * _this.height; };
        _this.postDraw = function (ctx) {
            _this.drawPin(ctx);
        };
        _this.width = 50;
        _this.height = 25;
        _this.color = 'green';
        _this.opacity = .8;
        return _this;
    }
    return dGlue;
}(dRectangle));



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-command.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-command.component.html":
/***/ (function(module, exports) {

module.exports = "<accordion [closeOthers]=\"true\">\r\n  <accordion-group heading=\"Glyph\">\r\n    <button (click)=\"stage.doAddGlyph()\" type=\"button\" class=\"btn btn-info\">add Glyph</button>\r\n    <button (click)=\"stage.doAddSubGlyph()\" type=\"button\" class=\"btn btn-info\">add SubGlyph</button>\r\n  </accordion-group>\r\n\r\n  <accordion-group heading=\"Shape\">\r\n    <button (click)=\"stage.doAddOneByOne()\" type=\"button\" class=\"btn btn-success\">1x1</button>\r\n    <button (click)=\"stage.doAddTwoByOne()\" type=\"button\" class=\"btn btn-success\">2x1</button>\r\n    <button (click)=\"stage.doAddTwoByTwo()\" type=\"button\" class=\"btn btn-success\">2x2</button>\r\n    <button (click)=\"stage.doAddTwoByFour()\" type=\"button\" class=\"btn btn-success\">2x4</button>\r\n    <button (click)=\"stage.doAddTenByTen()\" type=\"button\" class=\"btn btn-success\">10x10</button>\r\n    <button (click)=\"stage.doAddThreeByThree()\" type=\"button\" class=\"btn btn-success\">3x3 Circle</button>\r\n  </accordion-group>\r\n\r\n  <accordion-group heading=\"Animation\">\r\n    <button (click)=\"stage.doBoundry()\" type=\"button\" class=\"btn btn-info\">Boundry</button>\r\n\r\n    <button (click)=\"stage.doAddOneByTen()\" type=\"button\" class=\"btn btn-success\">Spin</button>\r\n    <button (click)=\"stage.doAddStack()\" type=\"button\" class=\"btn btn-success\">Box inside</button>\r\n    <button (click)=\"stage.doObjRect()\" type=\"button\" class=\"btn btn-info\">Rect</button>\r\n    <button (click)=\"stage.doObjGroup()\" type=\"button\" class=\"btn btn-info\">Group</button>\r\n  </accordion-group>\r\n\r\n  <accordion-group heading=\"Glue\">\r\n    <button (click)=\"stage.doShape1D()\" type=\"button\" class=\"btn btn-success\">Shape 1D</button>\r\n\r\n    <button (click)=\"stage.doShapeGlue()\" type=\"button\" class=\"btn btn-success\">Glue 1D</button>\r\n    <button (click)=\"stage.doObjGlue()\" type=\"button\" class=\"btn btn-warning\">Glue 1D</button>\r\n  </accordion-group>\r\n\r\n  <accordion-group heading=\"Sets\">\r\n    <button (click)=\"stage.doBlocks()\" type=\"button\" class=\"btn btn-success\">Blocks</button>\r\n    <button (click)=\"stage.doText()\" type=\"button\" class=\"btn btn-success\">Text</button>\r\n    <button (click)=\"stage.doImage()\" type=\"button\" class=\"btn btn-success\">Image</button>\r\n    <button (click)=\"stage.doParticleEngine()\" type=\"button\" class=\"btn btn-success\">Particle Engine</button>\r\n </accordion-group>\r\n\r\n  <accordion-group heading=\"Knowledge\">\r\n    <button (click)=\"stage.doDocker()\" type=\"button\" class=\"btn btn-success\">Blocks</button>\r\n  </accordion-group>\r\n</accordion>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-command.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foCommandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stage_component__ = __webpack_require__("../../../../../src/app/canvas/stage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var foCommandComponent = (function () {
    function foCommandComponent() {
    }
    foCommandComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__stage_component__["a" /* StageComponent */])
    ], foCommandComponent.prototype, "stage", void 0);
    foCommandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-command',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-command.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-command.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foCommandComponent);
    return foCommandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-concept-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-concept-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fo-concept-panel works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-concept-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foConceptPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var foConceptPanelComponent = (function () {
    function foConceptPanelComponent() {
    }
    foConceptPanelComponent.prototype.ngOnInit = function () {
    };
    foConceptPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-concept-panel',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-concept-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-concept-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foConceptPanelComponent);
    return foConceptPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-concept.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-concept.component.html":
/***/ (function(module, exports) {

module.exports = "<accordion>\r\n  <accordion-group *ngFor=\"let key of headings\" [heading]=\"key\" [isOpen]=\"true\">\r\n      <button *ngFor=\"let item of groups[key]\" (click)=\"doCreate(item)\" type=\"button\" class=\"btn btn-info\">{{item.name}}</button>\r\n  </accordion-group>\r\n</accordion>\r\n\r\n<!-- <pre>{{list | json}}</pre> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-concept.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foConceptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__ = __webpack_require__("../../../../../src/app/foundry/foPage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foConcept_model__ = __webpack_require__("../../../../../src/app/foundry/foConcept.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var foConceptComponent = (function () {
    function foConceptComponent() {
        this.list = new Array();
        this.headings = new Array();
        this.groups = {};
    }
    foConceptComponent.prototype.initViewModel = function () {
        this.list = __WEBPACK_IMPORTED_MODULE_3__foundry_foConcept_model__["a" /* Concept */].allConceptItems();
        this.groups = __WEBPACK_IMPORTED_MODULE_2__foundry_foTools__["a" /* Tools */].groupBy(__WEBPACK_IMPORTED_MODULE_2__foundry_foTools__["a" /* Tools */].pluck('namespace'), this.list);
        this.headings = __WEBPACK_IMPORTED_MODULE_3__foundry_foConcept_model__["a" /* Concept */].namespaces();
    };
    foConceptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initViewModel();
        __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__["a" /* PubSub */].Sub('onKnowledgeChanged', function (concept) {
            _this.initViewModel();
        });
    };
    foConceptComponent.prototype.doCreate = function (item) {
        var concept = item.concept;
        var box = concept.newInstance()
            .drop(this.rootPage.centerX, this.rootPage.centerY)
            .addAsSubcomponent(this.rootPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__["a" /* foPage */])
    ], foConceptComponent.prototype, "rootPage", void 0);
    foConceptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-concept',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-concept.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-concept.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foConceptComponent);
    return foConceptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-drawing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-drawing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<p>{{rootPage.myName}}: {{rootPage.myType}}</p>\r\n\r\n<ng-container *ngFor=\"let node of rootPage.nodes.members; let i = index; let isOdd = odd\">\r\n  <fo-page-panel [node]=\"node\"></fo-page-panel>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-drawing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foDrawingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__ = __webpack_require__("../../../../../src/app/foundry/foPage.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var foDrawingComponent = (function () {
    function foDrawingComponent() {
    }
    foDrawingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__["a" /* foPage */])
    ], foDrawingComponent.prototype, "rootPage", void 0);
    foDrawingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-drawing',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-drawing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-drawing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foDrawingComponent);
    return foDrawingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-inspector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-inspector.component.html":
/***/ (function(module, exports) {

module.exports = "<tabset type=\"pills\">\r\n  <tab heading='Live'>\r\n    <pre class=\"well\">{{stage.mouseLoc | json}}</pre>\r\n    <!-- <pre class=\"well\">{{stage.message | json}}</pre> -->\r\n\r\n    <!-- <pre class=\"well\">{{sitOnShape | json}}</pre> -->\r\n\r\n    <!-- <pre class=\"well\">{{_dictionary | json}}</pre> -->\r\n    <!-- <pre class=\"well\">{{Subcomponents | json}}</pre> -->\r\n  </tab>\r\n  <tab heading='Runtime' (select)=\"doRefreshRuntimeTypes()\">\r\n    <fo-runtime ></fo-runtime>\r\n  </tab>\r\n  <tab heading='Page'>\r\n    <fo-drawing [rootPage]=\"rootPage\"></fo-drawing>\r\n  </tab>\r\n  <tab heading='Model'>\r\n    <fo-model></fo-model>\r\n  </tab>\r\n  <tab heading='Stencil' (select)=\"doRefreshStencil()\">\r\n    <fo-stencil [rootPage]=\"rootPage\"></fo-stencil>\r\n  </tab>\r\n  <tab heading='Concepts' (select)=\"doRefreshConcepts()\">\r\n    <fo-concept [rootPage]=\"rootPage\"></fo-concept>\r\n  </tab>\r\n  <tab heading='Commands'>\r\n    <fo-command [stage]=\"stage\"></fo-command>  \r\n  </tab>\r\n</tabset>"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-inspector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foInspectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stage_component__ = __webpack_require__("../../../../../src/app/canvas/stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//https://valor-software.com/ngx-bootstrap/#/tabs
var foInspectorComponent = (function () {
    function foInspectorComponent() {
    }
    foInspectorComponent.prototype.ngOnInit = function () {
        this.rootPage = this.stage;
    };
    foInspectorComponent.prototype.doRefreshRuntimeTypes = function () {
        __WEBPACK_IMPORTED_MODULE_2__foundry_foPubSub__["a" /* PubSub */].Pub('onRuntimeTypeChanged');
    };
    foInspectorComponent.prototype.doRefreshStencil = function () {
        __WEBPACK_IMPORTED_MODULE_2__foundry_foPubSub__["a" /* PubSub */].Pub('onStencilChanged');
    };
    foInspectorComponent.prototype.doRefreshConcepts = function () {
        __WEBPACK_IMPORTED_MODULE_2__foundry_foPubSub__["a" /* PubSub */].Pub('onKnowledgeChanged');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__stage_component__["a" /* StageComponent */])
    ], foInspectorComponent.prototype, "stage", void 0);
    foInspectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-inspector',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-inspector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-inspector.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foInspectorComponent);
    return foInspectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-model-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-model-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fo-model-panel works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-model-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foModelPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var foModelPanelComponent = (function () {
    function foModelPanelComponent() {
    }
    foModelPanelComponent.prototype.ngOnInit = function () {
    };
    foModelPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-model-panel',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-model-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-model-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foModelPanelComponent);
    return foModelPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-model.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-model.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fo-model works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var foModelComponent = (function () {
    function foModelComponent() {
    }
    foModelComponent.prototype.ngOnInit = function () {
    };
    foModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-model',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-model.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-model.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foModelComponent);
    return foModelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-page-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-page-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">{{node.myName}}: {{node.myType}} - {{node.color}}</div>\r\n  <!-- <span>{{node.x}}  {{node.y}}</span> -->\r\n\r\n  <ng-container *ngFor=\"let cmd of commands; let i = index; let isOdd = odd\">\r\n    <button (click)=\"doCommand(cmd)\" type=\"button\" class=\"btn btn-success\">{{cmd}}</button>\r\n  </ng-container>\r\n\r\n  <p *ngFor=\"let node of node.nodes.members; let i = index; let isOdd = odd\">\r\n    <fo-page-panel [node]=\"node\"></fo-page-panel>\r\n  </p>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-page-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foPagePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foStencil__ = __webpack_require__("../../../../../src/app/foundry/foStencil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foGlyph_model__ = __webpack_require__("../../../../../src/app/foundry/foGlyph.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var foPagePanelComponent = (function () {
    function foPagePanelComponent() {
    }
    foPagePanelComponent.prototype.ngOnInit = function () {
        var myClass = this.node.myClass;
        var spec = __WEBPACK_IMPORTED_MODULE_1__foundry_foStencil__["a" /* Stencil */].find(myClass);
        if (spec) {
            this.commands = spec.commands;
        }
    };
    foPagePanelComponent.prototype.doCommand = function (cmd) {
        this.node[cmd] && this.node[cmd]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__foundry_foGlyph_model__["a" /* foGlyph */])
    ], foPagePanelComponent.prototype, "node", void 0);
    foPagePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-page-panel',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-page-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-page-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foPagePanelComponent);
    return foPagePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-runtime.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-runtime.component.html":
/***/ (function(module, exports) {

module.exports = "<pre>{{primitives | json}}</pre>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-runtime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foRuntimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var foRuntimeComponent = (function () {
    function foRuntimeComponent() {
    }
    foRuntimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.primitives = __WEBPACK_IMPORTED_MODULE_1__foundry_foRuntimeType__["a" /* RuntimeType */].primitives();
        __WEBPACK_IMPORTED_MODULE_2__foundry_foPubSub__["a" /* PubSub */].Sub('onRuntimeTypeChanged', function (name) {
            _this.primitives = __WEBPACK_IMPORTED_MODULE_1__foundry_foRuntimeType__["a" /* RuntimeType */].primitives();
        });
    };
    foRuntimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-runtime',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-runtime.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-runtime.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foRuntimeComponent);
    return foRuntimeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-stencil-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-stencil-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n  <button (click)=\"doCreate()\" type=\"button\" class=\"btn btn-info\">{{stencilItem.name}}</button>\r\n\r\n  <ng-container *ngFor=\"let cmd of stencilItem.spec.getCommands(); let i = index; let isOdd = odd\">\r\n    <button (click)=\"doCommand(cmd)\" type=\"button\" class=\"btn btn-success\">{{cmd}}</button>\r\n  </ng-container>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-stencil-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foStencilPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__ = __webpack_require__("../../../../../src/app/foundry/foPage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foStencil__ = __webpack_require__("../../../../../src/app/foundry/foStencil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_signalr_service__ = __webpack_require__("../../../../../src/app/common/signalr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { foGlyph } from "../../foundry/foGlyph.model";

var foStencilPanelComponent = (function () {
    function foStencilPanelComponent(signalR) {
        this.signalR = signalR;
    }
    foStencilPanelComponent.prototype.ngOnInit = function () {
    };
    foStencilPanelComponent.prototype.doCreate = function () {
        var spec = this.stencilItem.spec;
        var shape = spec.newInstance()
            .drop(this.rootPage.centerX, this.rootPage.centerY)
            .addAsSubcomponent(this.rootPage);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    foStencilPanelComponent.prototype.doCommand = function (cmd) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__foundry_foStencil__["b" /* foStencilItem */])
    ], foStencilPanelComponent.prototype, "stencilItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__["a" /* foPage */])
    ], foStencilPanelComponent.prototype, "rootPage", void 0);
    foStencilPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-stencil-panel',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-stencil-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-stencil-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_signalr_service__["a" /* SignalRService */]])
    ], foStencilPanelComponent);
    return foStencilPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-stencil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-stencil.component.html":
/***/ (function(module, exports) {

module.exports = "<accordion>\r\n    <accordion-group *ngFor=\"let key of headings\" [heading]=\"key\" [isOpen]=\"true\">\r\n        <fo-stencil-panel *ngFor=\"let item of groups[key]\" [rootPage]=\"rootPage\" [stencilItem]=\"item\"></fo-stencil-panel>\r\n      </accordion-group>\r\n</accordion>\r\n\r\n<!-- <pre>{{list | json}}</pre> -->"

/***/ }),

/***/ "../../../../../src/app/canvas/fo-inspector/fo-stencil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foStencilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__ = __webpack_require__("../../../../../src/app/foundry/foPage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foStencil__ = __webpack_require__("../../../../../src/app/foundry/foStencil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var foStencilComponent = (function () {
    function foStencilComponent() {
        this.headings = new Array();
        this.groups = {};
    }
    foStencilComponent.prototype.initViewModel = function () {
        this.list = __WEBPACK_IMPORTED_MODULE_3__foundry_foStencil__["a" /* Stencil */].allStencilItem();
        this.groups = __WEBPACK_IMPORTED_MODULE_2__foundry_foTools__["a" /* Tools */].groupBy(__WEBPACK_IMPORTED_MODULE_2__foundry_foTools__["a" /* Tools */].pluck('namespace'), this.list);
        this.headings = __WEBPACK_IMPORTED_MODULE_3__foundry_foStencil__["a" /* Stencil */].namespaces();
    };
    foStencilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initViewModel();
        __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__["a" /* PubSub */].Sub('onStencilChanged', function () {
            _this.initViewModel();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__foundry_foPage_model__["a" /* foPage */])
    ], foStencilComponent.prototype, "rootPage", void 0);
    foStencilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fo-stencil',
            template: __webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-stencil.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/fo-inspector/fo-stencil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], foStencilComponent);
    return foStencilComponent;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/legoshapes.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export legoCore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneByOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TwoByOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TwoByTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TwoByFour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OneByTen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TenByTen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ThreeByThreeCircle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//import { RuntimeType } from '../foundry/foRuntimeType';
var legoCore = (function (_super) {
    __extends(legoCore, _super);
    function legoCore(properties) {
        var _this = _super.call(this, properties) || this;
        _this.size = '0:0';
        _this.doAnimation = function () { };
        _this.postDraw = function (ctx) {
            _this.drawPin(ctx);
        };
        _this.description = _this.myType;
        _this.override({
            height: function () {
                var size = parseInt(this.size.split(':')[1]);
                return 25 * size;
            },
            width: function () {
                var size = parseInt(this.size.split(':')[0]);
                return 25 * size;
            }
        });
        return _this;
    }
    legoCore.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        this.doAnimation();
        _super.prototype.render.call(this, ctx, deep);
    };
    return legoCore;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foShape2D_model__["a" /* foShape2D */]));

var OneByOne = (function (_super) {
    __extends(OneByOne, _super);
    function OneByOne(properties) {
        var _this = _super.call(this, properties) || this;
        _this.size = '1:1';
        return _this;
    }
    return OneByOne;
}(legoCore));

var TwoByOne = (function (_super) {
    __extends(TwoByOne, _super);
    function TwoByOne(properties) {
        var _this = _super.call(this, properties) || this;
        _this.size = '2:1';
        return _this;
    }
    return TwoByOne;
}(legoCore));

var TwoByTwo = (function (_super) {
    __extends(TwoByTwo, _super);
    function TwoByTwo(properties) {
        var _this = _super.call(this, properties) || this;
        _this.pinX = function () { return 0 * _this.width / 2; };
        _this.pinY = function () { return 0 * _this.height / 2; };
        _this.size = '2:2';
        return _this;
    }
    return TwoByTwo;
}(legoCore));

var TwoByFour = (function (_super) {
    __extends(TwoByFour, _super);
    function TwoByFour(properties) {
        var _this = _super.call(this, properties) || this;
        _this.pinX = function () { return 0 * _this.width / 2; };
        _this.pinY = function () { return 1 * _this.height / 2; };
        _this.size = '2:4';
        return _this;
    }
    return TwoByFour;
}(legoCore));

var OneByTen = (function (_super) {
    __extends(OneByTen, _super);
    function OneByTen(properties) {
        var _this = _super.call(this, properties) || this;
        _this.size = '1:10';
        return _this;
    }
    return OneByTen;
}(legoCore));

var TenByTen = (function (_super) {
    __extends(TenByTen, _super);
    function TenByTen(properties) {
        var _this = _super.call(this, properties) || this;
        _this.size = '10:10';
        return _this;
    }
    return TenByTen;
}(legoCore));

var ThreeByThreeCircle = (function (_super) {
    __extends(ThreeByThreeCircle, _super);
    function ThreeByThreeCircle(properties) {
        var _this = _super.call(this, properties) || this;
        _this.draw = function (ctx) {
            var center = _this.pinLocation();
            ctx.save();
            ctx.beginPath();
            ctx.arc(center.x, center.y, _this.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = _this.color;
            ctx.fill();
            ctx.restore();
        };
        _this.size = '3:3';
        return _this;
    }
    ThreeByThreeCircle.prototype.createHandles = function () {
        var DEG_TO_RAD = Math.PI / 180;
        var cx = this.width / 2;
        var cy = this.height / 2;
        var w = cx * Math.cos(45 * DEG_TO_RAD);
        var h = cy * Math.cos(45 * DEG_TO_RAD);
        var spec = [
            { x: cx - w, y: cy - h, myName: "0:0" },
            { x: cx + w, y: cy - h, myName: "W:0" },
            { x: cx + w, y: cy + h, myName: "W:H" },
            { x: cx - w, y: cy + h, myName: "0:H" },
        ];
        return this.generateHandles(spec);
    };
    ThreeByThreeCircle.prototype.drawOutline = function (ctx) {
        var center = this.pinLocation();
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        ctx.beginPath();
        ctx.arc(center.x, center.y, this.width / 2, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return ThreeByThreeCircle;
}(legoCore));



/***/ }),

/***/ "../../../../../src/app/canvas/particle.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export particle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return particleEngine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foStencil__ = __webpack_require__("../../../../../src/app/foundry/foStencil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var particle = (function (_super) {
    __extends(particle, _super);
    function particle(properties) {
        var _this = _super.call(this, properties) || this;
        _this.gravity = 0.03;
        _this.doAnimation = function () {
            _this.vy += _this.gravity;
            _this.x += _this.vx;
            _this.y += _this.vy;
            if (_this.isOffCanvasX || _this.isOffCanvasY) {
                // If any of the above conditions are met then we need to re-position the particles on the base :)
                _this.doReset();
            }
        };
        _this.drawRect = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.globalAlpha = _this.opacity;
            _this.angle += 1;
            _this.angle = _this.angle % 360;
            ctx.fillRect(0, 0, _this.width, _this.height);
        };
        _this.drawCircle = function (ctx) {
            var center = _this.pinLocation();
            ctx.beginPath();
            ctx.arc(center.x, center.y, _this.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = _this.color;
            ctx.globalAlpha = _this.opacity;
            ctx.fill();
        };
        _this.width = 10;
        _this.height = 10;
        _this.color = __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].randomRGBColor();
        return _this;
    }
    particle.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        this.doAnimation();
        ctx.save();
        this.updateContext(ctx);
        this.draw(ctx);
        ctx.restore();
    };
    particle.prototype.doReset = function () {
        var parent = this.myParent();
        this.vx = Math.random() * 4 - 2; // Random Initial Velocities
        this.vy = Math.random() * -4 - 2; // vy should be negative initially then only will it move upwards first and then later come downwards when our gravity is added to it.
        this.x = parent.width / 2;
        this.y = parent.height;
        this.draw = Math.random() > .5 ? this.drawCircle : this.drawRect;
        return this;
    };
    Object.defineProperty(particle.prototype, "isOffCanvasX", {
        get: function () {
            var parent = this.myParent();
            var width = parent.width;
            return this.x > width || this.x < 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(particle.prototype, "isOffCanvasY", {
        get: function () {
            var parent = this.myParent();
            return this.y > parent.height || this.y < 0;
        },
        enumerable: true,
        configurable: true
    });
    return particle;
}(__WEBPACK_IMPORTED_MODULE_1__foundry_foShape2D_model__["a" /* foShape2D */]));

var particleEngine = (function (_super) {
    __extends(particleEngine, _super);
    function particleEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    particleEngine.prototype.doStart = function () {
        var particleType = __WEBPACK_IMPORTED_MODULE_2__foundry_foStencil__["a" /* Stencil */].define('particle', particle);
        var count = this.particleCount || 100;
        for (var i = 0; i < this.particleCount; i++) {
            particleType.newInstance()
                .addAsSubcomponent(this)
                .doReset();
        }
    };
    particleEngine.prototype.doStop = function () {
        this.nodes.clearAll();
    };
    particleEngine.prototype.doRotate = function () {
        this.angle += 30;
    };
    return particleEngine;
}(__WEBPACK_IMPORTED_MODULE_1__foundry_foShape2D_model__["a" /* foShape2D */]));


__WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].define(particleEngine);


/***/ }),

/***/ "../../../../../src/app/canvas/stage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <a target=\"_blank\" href=\"http://curran.github.io/HTML5Examples/\">Canvas Example </a>\r\n  <a target=\"_blank\" href=\"http://www.typescriptgames.com/HTML5CanvasBasics.html\">Canvas TypeScript Example </a>\r\n  <a target=\"_blank\" href=\"https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415\">Canvas with RX </a>\r\n  <a target=\"_blank\" href=\"https://www.w3schools.com/tags/ref_canvas.asp\">Canvas ref </a>\r\n\r\n  <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate\">Translate </a>\r\n  <a target=\"_blank\" href=\"https://www.w3resource.com/html5-canvas/html5-canvas-matrix-transforms.php\">Transforms </a>\r\n\r\n  <a target=\"_blank\" href=\"https://www.alanzucconi.com/2016/02/10/tranfsormation-matrix/\">2D Math </a>\r\n\r\n  <a target=\"_blank\" href=\"https://valor-software.com/ngx-bootstrap\">ngx-bootstrap </a>\r\n\r\n</p>\r\n<div class=\"row\">\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"General Edit commands\">\r\n      <button (click)=\"doClear()\" type=\"button\" class=\"btn btn-danger\">Clear</button>\r\n      <button (click)=\"doDelete()\" type=\"button\" class=\"btn btn-warning\">delete</button>\r\n      <button (click)=\"doDuplicate()\" type=\"button\" class=\"btn btn-warning\">duplicate</button>\r\n      <button (click)=\"doUndo()\" type=\"button\" class=\"btn btn-warning\">undo</button>\r\n    </div>\r\n\r\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"General Edit commands\">\r\n      <button (click)=\"doVert()\" type=\"button\" class=\"btn btn-warning\">Vert</button>\r\n      <button (click)=\"doHorz()\" type=\"button\" class=\"btn btn-warning\">Horz</button>\r\n      <button (click)=\"doLoadConcept()\" type=\"button\" class=\"btn btn-warning\">Load Concepts</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <canvas #canvas></canvas>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <fo-inspector [stage]=\"this\"></fo-inspector>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundryDrivers_canvasDriver__ = __webpack_require__("../../../../../src/app/foundryDrivers/canvasDriver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundry_foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__ = __webpack_require__("../../../../../src/app/foundry/foConcept.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__foundry_foPage_model__ = __webpack_require__("../../../../../src/app/foundry/foPage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__ = __webpack_require__("../../../../../src/app/foundry/foStencil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__foundry_foGlyph_model__ = __webpack_require__("../../../../../src/app/foundry/foGlyph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__foundry_foShape1D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape1D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__ = __webpack_require__("../../../../../src/app/foundry/foText2D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__foundry_foImage_model__ = __webpack_require__("../../../../../src/app/foundry/foImage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__ = __webpack_require__("../../../../../src/app/canvas/legoshapes.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__particle_model__ = __webpack_require__("../../../../../src/app/canvas/particle.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__displayshapes_model__ = __webpack_require__("../../../../../src/app/canvas/displayshapes.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_signalr_service__ = __webpack_require__("../../../../../src/app/common/signalr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_gsap__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















//https://greensock.com/docs/TweenMax

var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Line;
}(__WEBPACK_IMPORTED_MODULE_12__foundry_foShape1D_model__["a" /* foShape1D */]));
__WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].define(Line);
var StageComponent = (function (_super) {
    __extends(StageComponent, _super);
    function StageComponent(signalR, http) {
        var _this = _super.call(this) || this;
        _this.signalR = signalR;
        _this.http = http;
        _this.pageWidth = 1200;
        _this.pageHeight = 1000;
        _this.message = [];
        _this.screen2D = new __WEBPACK_IMPORTED_MODULE_2__foundryDrivers_canvasDriver__["a" /* Sceen2D */]();
        return _this;
    }
    StageComponent.prototype.doClear = function () {
        this.clearAll();
        this.message = [];
        this.signalR.pubCommand("clearAll", {});
    };
    StageComponent.prototype.doUndo = function () {
    };
    StageComponent.prototype.doDelete = function () {
        var _this = this;
        this.deleteSelected(function (shape) {
            _this.signalR.pubCommand("deleteShape", { guid: shape.myGuid });
        });
    };
    StageComponent.prototype.doDuplicate = function () {
    };
    StageComponent.prototype.doVert = function () {
        var pt = new __WEBPACK_IMPORTED_MODULE_5__foundry_foGeometry__["c" /* cPoint */](100, 150);
        this.layoutSubcomponentsVertical(false, 2).nodes.forEach(function (item) {
            item.moveBy(pt);
        });
    };
    StageComponent.prototype.doHorz = function () {
        var pt = new __WEBPACK_IMPORTED_MODULE_5__foundry_foGeometry__["c" /* cPoint */](100, 150);
        this.layoutSubcomponentsHorizontal(false, 2).nodes.forEach(function (item) {
            item.moveBy(pt);
        });
    };
    StageComponent.prototype.addEventHooks = function () {
        var _this = this;
        this.onItemHoverEnter = function (loc, shape, keys) {
            _this.message = [];
            _this.message.push("Hover (" + loc.x + "," + loc.y + ") Enter");
            shape && _this.message.push(shape.globalToLocal(loc.x, loc.y));
            _this.message.push(shape);
            if (shape) {
                shape.drawHover = function (ctx) {
                    ctx.strokeStyle = "yellow";
                    ctx.lineWidth = 4;
                    shape.drawOutline(ctx);
                };
            }
        };
        this.onItemHoverExit = function (loc, shape, keys) {
            _this.message = [];
            _this.message.push("Hover (" + loc.x + "," + loc.y + ") Exit");
            shape && _this.message.push(shape.globalToLocal(loc.x, loc.y));
            _this.message.push(shape);
            if (shape) {
                shape.drawHover = undefined;
            }
        };
        this.onItemOverlapEnter = function (loc, shape, shapeUnder, keys) {
            _this.message = [];
            _this.message.push("Overlap (" + loc.x + "," + loc.y + ") Enter");
            shape && _this.message.push(shape.globalToLocal(loc.x, loc.y));
            _this.message.push(shape);
            if (shapeUnder) {
                shapeUnder.drawHover = function (ctx) {
                    ctx.strokeStyle = "green";
                    ctx.lineWidth = 8;
                    shapeUnder.drawOutline(ctx);
                    ctx.strokeStyle = "yellow";
                    ctx.lineWidth = 4;
                    shapeUnder.drawOutline(ctx);
                };
            }
        };
        this.onItemOverlapExit = function (loc, shape, shapeUnder, keys) {
            _this.message = [];
            _this.message.push("Overlap (" + loc.x + "," + loc.y + ") Exit");
            shape && _this.message.push(shape.globalToLocal(loc.x, loc.y));
            _this.message.push(shape);
            if (shapeUnder) {
                shapeUnder.drawHover = undefined;
            }
        };
        this.onHandleHoverEnter = function (loc, handle, keys) {
            //let shape = handle.myParentGlyph();
            _this.message = [];
            //this.message.push(`Hover (${loc.x},${loc.y}) Enter  ${shape.myName}`);
            //shape && this.message.push(shape.globalToLocal(loc.x, loc.y));
            //this.message.push(shape);
            _this.message.push("Handle Hover (" + loc.x + "," + loc.y + ") Enter " + (handle && handle.myName));
            handle && _this.message.push(handle.globalToLocal(loc.x, loc.y));
            //this.message.push(handle);
        };
        this.onTrackHandles = function (loc, handles, keys) {
            _this.message = [];
            handles.forEach(function (handle) {
                //if (handle.hitTest(loc)) {
                //foObject.beep();
                //}
                _this.message.push("onTrackHandles (" + loc.x + "," + loc.y + ") Move " + (handle && handle.myName));
                handle && _this.message.push(handle.globalToLocal(loc.x, loc.y));
            });
        };
        this.onHandleMoving = function (loc, handle, keys) {
            //let shape = handle.myParentGlyph();
            _this.message = [];
            //this.message.push(`Hover (${loc.x},${loc.y}) Move  ${shape.myName}`);
            //shape && this.message.push(shape.globalToLocal(loc.x, loc.y));
            //this.message.push(shape);
            _this.message.push("Handle Hover (" + loc.x + "," + loc.y + ") Move " + (handle && handle.myName));
            handle && _this.message.push(handle.globalToLocal(loc.x, loc.y));
            //this.message.push(handle);
        };
        this.onHandleHoverExit = function (loc, handle, keys) {
            //let shape = handle.myParentGlyph();
            _this.message = [];
            //this.message.push(`Hover (${loc.x},${loc.y}) Exit ${shape.myName}`);
            //shape && this.message.push(shape.globalToLocal(loc.x, loc.y));
            //this.message.push(shape);
            _this.message.push("Handle Hover (" + loc.x + "," + loc.y + ") Exit " + (handle && handle.myName));
            handle && _this.message.push(handle.globalToLocal(loc.x, loc.y));
            //this.message.push(handle);
        };
    };
    StageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addEventHooks();
        this.onItemChangedParent = function (shape) {
            _this.signalR.pubCommand("syncParent", { guid: shape.myGuid, parentGuid: shape.myParent().myGuid });
        };
        this.onItemChangedPosition = function (shape) {
            _this.signalR.pubCommand("moveShape", { guid: shape.myGuid }, shape.getLocation());
        };
        this.onMouseLocationChanged = function (loc, state, keys) {
            _this.mouseLoc = loc;
            _this.mouseLoc.state = state;
            212;
            _this.mouseLoc.keys = keys;
        };
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["d" /* ThreeByThreeCircle */]);
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["a" /* OneByOne */]);
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["f" /* TwoByOne */], { color: 'coral' });
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["g" /* TwoByTwo */], { width: 50, height: 50 });
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["e" /* TwoByFour */]);
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["b" /* OneByTen */]);
        __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('lego', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["c" /* TenByTen */], { width: 250, height: 250 });
    };
    StageComponent.prototype.doParticleEngine = function () {
        var engine = new __WEBPACK_IMPORTED_MODULE_16__particle_model__["a" /* particleEngine */]({
            color: 'coral',
            particleCount: 10,
            opacity: .1,
            width: 100,
            height: 200,
        }).drop(300, 300).addAsSubcomponent(this)
            .then(function (item) {
            item.doStart();
        });
        var def = __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('particle', __WEBPACK_IMPORTED_MODULE_16__particle_model__["a" /* particleEngine */], {
            color: 'white',
            particleCount: 100,
            opacity: .1,
            width: 700,
            height: 700,
        }).addCommands("doStart", "doStop").addCommands("doRotate");
        this.signalR.pubCommand("syncStencil", { myName: def.myName }, def);
        var shape = def.newInstance().drop(500, 500).addAsSubcomponent(this)
            .then(function (item) {
            item.doStart();
        });
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doLoadConcept = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('boundry::shape1', __WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__["a" /* foShape2D */], {
            color: 'gray',
            width: 50,
            height: 25
        });
        __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('boundry::block', __WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__["a" /* foShape2D */], {
            color: 'green',
            width: 100,
            height: 50
        });
        __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('boundry::text', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'black',
            background: 'grey',
            context: 'HELLO',
            fontSize: 30,
        });
        __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('boundry::boundry', __WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__["a" /* foShape2D */], {
            color: 'cyan',
            width: 100,
            height: 50
        });
        __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__["a" /* PubSub */].Pub('onKnowledgeChanged');
        __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].allConceptItems().forEach(function (item) {
            var concept = item.concept;
            _this.signalR.pubCommand("syncConcept", { guid: concept.myGuid }, concept.asJson);
        });
    };
    StageComponent.prototype.doBoundry = function () {
        var text = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].find('boundry::text');
        var block = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].find('boundry::block');
        var boundry = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].find('boundry::boundry');
        var box = boundry.newInstance().drop(this.centerX, this.centerY).addAsSubcomponent(this);
        var _loop_1 = function () {
            var body = block.newInstance({
                width: 10 + i * 10,
                height: 10 + i * 10,
            }).addAsSubcomponent(box);
            for (var j = 0; j < 4; j++) {
                text.newInstance({
                    context: 'test ' + j
                }).addAsSubcomponent(body);
            }
            body.wait(10, function () { return body.layoutSubcomponentsVertical(true, 10); });
        };
        for (var i = 0; i < 3; i++) {
            _loop_1();
        }
        box.wait(10, function () { return box.layoutSubcomponentsHorizontal(true, 10); });
        this.signalR.pubCommand("syncShape", { guid: box.myGuid }, box.asJson);
    };
    StageComponent.prototype.doImage = function () {
        var _this = this;
        var def = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('blocks::block2d', __WEBPACK_IMPORTED_MODULE_14__foundry_foImage_model__["a" /* foImage */], {
            background: 'green',
            imageURL: "https://lorempixel.com/900/500?r=2",
            width: 100,
            height: 50
        });
        for (var i = 0; i < 15; i++) {
            this.wait(500, function () {
                var picture = def.newInstance().addAsSubcomponent(_this);
                picture.angle = __WEBPACK_IMPORTED_MODULE_6__foundry_foTools__["a" /* Tools */].randomInt(0, 300);
                _this.signalR.pubCommand("syncShape", { guid: picture.myGuid }, picture.asJson);
                var place = { x: 800 + __WEBPACK_IMPORTED_MODULE_6__foundry_foTools__["a" /* Tools */].randomInt(-70, 70), y: 200 + __WEBPACK_IMPORTED_MODULE_6__foundry_foTools__["a" /* Tools */].randomInt(-70, 70) };
                picture.easeTween(place, 1.5);
                _this.signalR.pubCommand("easeTween", { guid: picture.myGuid, }, place);
            });
        }
        var image = new __WEBPACK_IMPORTED_MODULE_14__foundry_foImage_model__["a" /* foImage */]({
            background: 'blue',
            margin: new __WEBPACK_IMPORTED_MODULE_5__foundry_foGeometry__["b" /* cMargin */](10, 10, 10, 10),
            width: 80,
            height: 80,
            imageURL: "http://backyardnaturalist.ca/wp-content/uploads/2011/06/goldfinch-feeder.jpg",
            angle: __WEBPACK_IMPORTED_MODULE_6__foundry_foTools__["a" /* Tools */].randomInt(-30, 30)
        }).drop(330, 330).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: image.myGuid }, image.asJson);
        var size = {
            width: 200,
            height: 200,
        };
        image.easeTween(size, 2.8, __WEBPACK_IMPORTED_MODULE_19_gsap__["Back"]['easeInOut']);
        this.signalR.pubCommand("easeTween", { guid: image.myGuid, ease: 'easeInOut', time: 2.8 }, size);
    };
    StageComponent.prototype.doBlocks = function () {
        var block = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('blocks::block2d', __WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__["a" /* foShape2D */], {
            color: 'green',
            width: 100,
            height: 50
        });
        var text = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('words::text2d', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'black',
            background: 'yellow',
            context: 'HELLO',
            width: 100,
            height: 50
        });
        for (var i = 0; i < 5; i++) {
            var body = block.newInstance({
                width: 10 + i * 10,
                height: 10 + i * 10,
            }).drop(100, 100).addAsSubcomponent(this);
        }
        for (var i = 0; i < 5; i++) {
            var body = text.newInstance({
                width: 10 + i * 10,
                fontSize: 10 + i * 10,
            }).drop(100, 300).addAsSubcomponent(this);
        }
    };
    StageComponent.prototype.doDocker = function () {
        var _this = this;
        var block = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::block', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'green',
            fontSize: 20,
        });
        var attribute = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::attribute', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'red',
            background: 'white',
            fontSize: 20,
        });
        var formula = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::formula', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'gray',
            background: 'white',
            fontSize: 20,
        });
        var concept = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::concept', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'blue',
            background: 'yellow',
            fontSize: 20,
        });
        var body = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::body', __WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__["a" /* foShape2D */], {
            color: 'cyan',
            fontSize: 30,
        });
        // , (parent) => {
        //   parent.context.forEach(item => {
        //     block.newInstance({
        //       context: item,
        //     }).addAsSubcomponent(parent);
        //   });
        // });
        var source = this.http.get('assets/caas.json');
        source.subscribe(function (res) {
            var data = res.json();
            var frame = body.newInstance({
                context: data.categories
            }).drop(100, 200).addAsSubcomponent(_this);
            //give this a chance to render so sizes are right for text
            setTimeout(function () {
                frame.layoutSubcomponentsVertical();
                //frame.layoutSubcomponentsHorizontal();
            }, 10);
            data.containers.forEach(function (item) {
                var body = concept.newInstance({
                    fontSize: 30,
                    context: 'Container',
                }).addAsSubcomponent(_this);
                __WEBPACK_IMPORTED_MODULE_6__foundry_foTools__["a" /* Tools */].forEachKeyValue(item, function (key, value) {
                    var attr = attribute.newInstance({
                        context: key,
                        text: function () { return this.context + " : "; }
                    }).addAsSubcomponent(body);
                    formula.newInstance({
                        context: value,
                        text: function () { return this.context; }
                    }).addAsSubcomponent(attr);
                    setTimeout(function () {
                        attr.layoutMarginRight();
                    }, 10);
                });
                setTimeout(function () {
                    body.layoutMarginTop();
                }, 10);
            });
            setTimeout(function () {
                _this.layoutSubcomponentsVertical(false);
            }, 10);
        });
    };
    StageComponent.prototype.doText = function () {
        var _this = this;
        var textBlock = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::block', __WEBPACK_IMPORTED_MODULE_13__foundry_foText2D_model__["a" /* foText2D */], {
            color: 'black',
            text: 'Hello',
            background: 'yellow',
            margin: new __WEBPACK_IMPORTED_MODULE_5__foundry_foGeometry__["b" /* cMargin */](0, 0, 0, 0)
        });
        this.signalR.pubCommand("syncConcept", { guid: textBlock.myGuid }, textBlock.asJson);
        var wireConcept = __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].define('text::wire', __WEBPACK_IMPORTED_MODULE_12__foundry_foShape1D_model__["a" /* foShape1D */], {
            color: 'green',
            thickness: 1,
        });
        var list = ['Steve', 'Stu', 'Don', 'Linda', 'Anne', 'Debra', 'Evan'];
        var objects = [];
        var y = 100;
        var size = 8;
        var last = undefined;
        list.forEach(function (item) {
            size += 4;
            var shape = textBlock.newInstance({
                text: 'Hello ' + item,
                fontSize: size,
            }).drop(350, y).addAsSubcomponent(_this);
            y += 50;
            _this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
            objects.push(shape);
            // if (!last) {
            //   last = shape;
            // } else {
            //   let wire = wireConcept.newInstance().addAsSubcomponent(this);
            //   this.signalR.pubCommand("syncGlue", wire.glueStart(last).asJson);
            //   this.signalR.pubCommand("syncGlue", wire.glueFinish(shape).asJson);
            //   last = shape;
            // }
        });
        objects.forEach(function (shape) {
            //shape.drop(shape.x + Tools.randomInt(-100, 100));
            _this.signalR.pubCommand("moveShape", { guid: shape.myGuid }, shape.getLocation());
        });
    };
    StageComponent.prototype.doAddGlyph = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_10__foundry_foGlyph_model__["a" /* foGlyph */], {
            color: 'cyan',
            x: 150,
            y: 100,
            height: 150,
            width: 200,
        }).addAsSubcomponent(this);
        this.signalR.pubCommand("syncGlyph", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddSubGlyph = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_10__foundry_foGlyph_model__["a" /* foGlyph */], {
            color: 'purple',
            height: 150,
            width: 200,
        }).addAsSubcomponent(this);
        this.signalR.pubCommand("syncGlyph", { guid: shape.myGuid }, shape.asJson);
        var subShape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_10__foundry_foGlyph_model__["a" /* foGlyph */], {
            color: 'blue',
            x: 25,
            y: 25,
            height: 50,
            width: 300,
        }).addAsSubcomponent(shape);
        this.signalR.pubCommand("syncGlyph", { guid: subShape.myGuid }, subShape.asJson);
        this.signalR.pubCommand("syncParent", { guid: subShape.myGuid, parentGuid: subShape.myParent().myGuid });
    };
    StageComponent.prototype.doAddThreeByThree = function () {
        var def = __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].define('my', __WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["d" /* ThreeByThreeCircle */], {
            color: 'coral',
            x: 400,
            y: 400,
        });
        this.signalR.pubCommand("syncStencil", { myName: def.myName }, def);
        var shape = def.newInstance()
            .addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddOneByOne = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["a" /* OneByOne */], {
            color: 'red',
            x: 200,
            y: 200,
        });
        this.addSubcomponent(shape);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddTwoByOne = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["f" /* TwoByOne */], {
            color: 'cyan'
        });
        this.addSubcomponent(shape);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddTwoByTwo = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["g" /* TwoByTwo */], {
            color: 'pink',
            myName: "main shape"
        }).drop(200, 200).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddTwoByFour = function (properties) {
        var localTwoByFour = (function (_super) {
            __extends(localTwoByFour, _super);
            function localTwoByFour() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.pinX = function () { return 0.5 * _this.width; };
                _this.pinY = function () { return 0.5 * _this.height; };
                return _this;
            }
            return localTwoByFour;
        }(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["e" /* TwoByFour */]));
        __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].define(localTwoByFour);
        var spec = {
            color: 'green',
            angle: 45
        };
        if (!properties) {
            var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(localTwoByFour, spec).drop(200, 200).addAsSubcomponent(this);
            this.signalR.pubCommand("callMethod", { func: 'doAddTwoByFour' }, shape.asJson);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(localTwoByFour, properties).addAsSubcomponent(this);
        }
    };
    StageComponent.prototype.doAddOneByTen = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["b" /* OneByTen */], {
            color: 'yellow',
            // height: 10,
            // width: function (): number { return this.height / 4; },
            Animation: function () {
                var angle = this.angle + 10;
                angle = angle >= 360 ? 0 : angle;
                //this.height = angle;
                this.angle = angle;
            }
        }).drop(500, 500);
        this.addSubcomponent(shape);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddTenByTen = function () {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["c" /* TenByTen */], {
            color: 'gray'
        }).drop(600, 300);
        this.addSubcomponent(shape);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doAddStack = function (properties) {
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["c" /* TenByTen */], {
            myGuid: properties && properties.shape,
            opacity: .5,
            color: 'gray',
            angle: 10
        }).drop(600, 300).addAsSubcomponent(this);
        var subShape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["e" /* TwoByFour */], {
            myGuid: properties && properties.subShape,
            color: 'red',
        }).addAsSubcomponent(shape, {
            x: function () { return shape.width / 4; },
            y: 150,
            angle: 0,
        });
        // => does a scope that moves the page
        // subShape.doAnimation = (): void => {
        //   let angle = this.angle + .5;
        //   angle = angle >= 360 ? 0 : angle;
        //   this.angle = angle;
        // }
        subShape.doAnimation = function () {
            var angle = this.angle + .5;
            angle = angle >= 360 ? 0 : angle;
            this.angle = angle;
        };
        !properties && this.signalR.pubCommand("callMethod", { func: 'doAddStack' }, {
            shape: shape.myGuid,
            subShape: subShape.myGuid
        });
    };
    StageComponent.prototype.doShape1D = function () {
        var height = 20;
        var x1 = 150;
        var y1 = 100;
        var x2 = 350;
        var y2 = 200;
        var dX = x2 - x1;
        var dY = y2 - y1;
        var spec = {
            angle: __WEBPACK_IMPORTED_MODULE_10__foundry_foGlyph_model__["a" /* foGlyph */].RAD_TO_DEG * Math.atan2(dY, dX),
            length: Math.sqrt(dX * dX + dY * dY),
            cX: (x2 + x1) / 2,
            cY: (y2 + y1) / 2,
        };
        var fake = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_11__foundry_foShape2D_model__["a" /* foShape2D */], {
            opacity: .5,
            color: 'gray',
            angle: spec.angle,
            width: spec.length,
            height: height,
        }).drop(400, 400).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: fake.myGuid }, fake.asJson);
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(Line, {
            opacity: .5,
            color: 'gray',
            startX: x1,
            startY: y1,
            finishX: x2,
            finishY: y2,
            height: height,
        }).drop(400, 300).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doShapeGlue = function () {
        var shape1 = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["f" /* TwoByOne */], {
            color: 'cyan',
            opacity: .8,
        }).drop(100, 300, 45).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: shape1.myGuid }, shape1.asJson);
        var shape2 = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_15__legoshapes_model__["f" /* TwoByOne */], {
            color: 'cyan',
            opacity: .8,
        }).drop(300, 400).addAsSubcomponent(this);
        shape2.pinX = function () { return 0.0; };
        this.signalR.pubCommand("syncShape", { guid: shape2.myGuid }, shape2.asJson);
        var pt1 = shape1.localToGlobal(shape1.pinX(), shape1.pinY());
        var pt2 = shape2.localToGlobal(shape2.pinX(), shape2.pinY());
        var pc = pt1.midpoint(pt2);
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(Line, {
            opacity: .5,
            color: 'gray',
            height: 30,
            startX: pt1.x,
            startY: pt1.y,
            finishX: pt2.x,
            finishY: pt2.y,
        }).drop(600, 350).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: shape.myGuid }, shape.asJson);
        var wire = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(Line, {
            opacity: .5,
            height: 30,
            startX: pt1.x,
            startY: pt1.y,
            finishX: pt2.x,
            finishY: pt2.y,
            color: 'black',
        }).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: wire.myGuid }, wire.asJson);
        this.signalR.pubCommand("syncGlue", wire.createGlue('begin', shape1).asJson);
        this.signalR.pubCommand("syncGlue", wire.createGlue('end', shape2).asJson);
    };
    StageComponent.prototype.doObjGlue = function () {
        var _this = this;
        var wire = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(Line, {
            opacity: .5,
            height: 20,
            color: 'black',
        }).drop(400, 400).addAsSubcomponent(this);
        this.signalR.pubCommand("syncShape", { guid: wire.myGuid }, wire.asJson);
        var shape1 = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_17__displayshapes_model__["a" /* dGlue */]).addAsSubcomponent(this);
        var shape2 = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_17__displayshapes_model__["a" /* dGlue */]).addAsSubcomponent(this);
        shape2.pinX = function () { return 0.0; };
        wire.createGlue('begin', shape1);
        wire.createGlue('end', shape2);
        shape1.drop(100, 200, 30);
        shape2.drop(400, 250);
        this.signalR.pubCommand("syncShape", { guid: shape1.myGuid }, shape1.asJson);
        this.signalR.pubCommand("syncShape", { guid: shape2.myGuid }, shape2.asJson);
        wire.glue.forEach(function (glue) {
            _this.signalR.pubCommand("syncGlue", glue.asJson);
        });
    };
    StageComponent.prototype.doObjRect = function () {
        var objRect = (function (_super) {
            __extends(objRect, _super);
            function objRect() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.pinX = function () { return 0.0 * _this.width; };
                _this.pinY = function () { return 0.5 * _this.height; };
                _this.Animation = function () {
                    var angle = _this.angle + .5;
                    angle = angle >= 360 ? 0 : angle;
                    _this.angle = angle;
                };
                return _this;
            }
            return objRect;
        }(__WEBPACK_IMPORTED_MODULE_17__displayshapes_model__["b" /* dRectangle */]));
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(objRect, {
            color: 'blue',
            width: 150,
            height: 100,
        }).drop(300, 300, 0).then(function (item) {
            item.doAnimation = item.Animation;
            item.isSelected = true;
        }).addAsSubcomponent(this);
        this.signalR.pubCommand("syncDisp", { guid: shape.myGuid }, shape.asJson);
    };
    StageComponent.prototype.doObjGroup = function () {
        var myRect = (function (_super) {
            __extends(myRect, _super);
            function myRect() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.pinX = function () { return 50; };
                return _this;
            }
            return myRect;
        }(__WEBPACK_IMPORTED_MODULE_17__displayshapes_model__["b" /* dRectangle */]));
        var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(myRect, {
            color: 'purple',
            myName: 'root  dRectangle',
            width: 300,
            height: 100
        }).drop(150, 150, 0);
        this.addSubcomponent(shape);
        this.signalR.pubCommand("syncDisp", { guid: shape.myGuid }, shape.asJson);
        var subShape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_17__displayshapes_model__["b" /* dRectangle */], {
            color: 'blue',
            myName: 'blue  child',
            width: 50,
            height: 100
        }).addAsSubcomponent(shape).drop(100, 50);
        // //this.addSubcomponent(subShape);
        subShape.doAnimation = function () {
            var angle = this.angle + .5;
            angle = angle >= 360 ? 0 : angle;
            this.angle = angle;
        };
        shape.doAnimation = subShape.doAnimation;
        // this.signalR.pubChannel("syncDisp", subShape.asJson);
    };
    StageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.width = this.pageWidth;
        this.height = this.pageHeight;
        this.screen2D.setRoot(this.canvasRef.nativeElement, this.pageWidth, this.pageHeight);
        this.screen2D.render = function (ctx) {
            ctx.save();
            _this.render(ctx);
            ctx.restore();
        };
        this.screen2D.go();
        this.signalR.start().then(function () {
            _this.signalR.subCommand("moveShape", function (cmd, data) {
                _this.found(cmd.guid, function (shape) {
                    shape.easeTo(data.x, data.y, .8, __WEBPACK_IMPORTED_MODULE_19_gsap__["Back"].easeInOut);
                });
            });
            _this.signalR.subCommand("deleteShape", function (cmd, data) {
                //console.log(json);
                _this.found(cmd.guid, function (shape) {
                    _this.removeSubcomponent(shape);
                });
            });
            _this.signalR.subCommand("clearAll", function (cmd, data) {
                _this.clearAll();
                _this.message = [];
            });
            _this.signalR.subCommand("syncParent", function (cmd, data) {
                _this.found(cmd.guid, function (shape) {
                    if (cmd.parentGuid) {
                        _this.found(cmd.parentGuid, function (item) {
                            shape.removeFromParent();
                            item.addSubcomponent(shape);
                        });
                    }
                    else {
                        shape.removeFromParent();
                        _this.addSubcomponent(shape);
                    }
                });
            });
            _this.signalR.subCommand("syncStencil", function (cmd, data) {
                //foObject.jsonAlert(data);
                __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].override(data);
            });
            _this.signalR.subCommand("syncConcept", function (cmd, data) {
                //foObject.jsonAlert(data);
                __WEBPACK_IMPORTED_MODULE_7__foundry_foConcept_model__["a" /* Concept */].override(data);
            });
            _this.signalR.subCommand("syncGlyph", function (cmd, data) {
                //foObject.jsonAlert(data);
                _this.findItem(cmd.guid, function () {
                    __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].create(__WEBPACK_IMPORTED_MODULE_10__foundry_foGlyph_model__["a" /* foGlyph */], data).addAsSubcomponent(_this);
                });
            });
            _this.signalR.subCommand("syncShape", function (cmd, data) {
                //foObject.jsonAlert(data);
                _this.findItem(cmd.guid, function () {
                    //this.message.push(json);
                    var shape = data.myClass ? __WEBPACK_IMPORTED_MODULE_9__foundry_foStencil__["a" /* Stencil */].newInstance(data.myClass, data) : __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].newInstance(data.myType, data);
                    _this.found(cmd.parentGuid, function (item) { item.addSubcomponent(shape); }, function (miss) { _this.addSubcomponent(shape); });
                }, function (found) {
                    found.override(data);
                });
            });
            _this.signalR.subCommand("easeTween", function (cmd, data) {
                _this.found(cmd.guid, function (item) {
                    item.easeTween(data, cmd.time, __WEBPACK_IMPORTED_MODULE_19_gsap__["Back"][cmd.ease]);
                });
            });
            _this.signalR.subCommand("callMethod", function (cmd, data) {
                var func = cmd.func;
                func && _this[func](data);
            });
            _this.signalR.subCommand("syncDisp", function (cmd, data) {
                //foObject.jsonAlert(data);
                _this.findItem(cmd.guid, function () {
                    //this.message.push(json);
                    var type = data.myType;
                    var shape = __WEBPACK_IMPORTED_MODULE_3__foundry_foRuntimeType__["a" /* RuntimeType */].newInstance(type, data);
                    _this.found(cmd.parentGuid, function (item) { item.addSubcomponent(shape); }, function (miss) { _this.addSubcomponent(shape); });
                });
            });
            _this.signalR.subCommand("syncGlue", function (cmd, data) {
                //foObject.jsonAlert(data);
                _this.found(cmd.sourceGuid, function (source) {
                    _this.found(cmd.targetGuid, function (target) {
                        var glue = source.createGlue(cmd.sourceHandle, target);
                        target.drop();
                    });
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StageComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StageComponent.prototype, "pageWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StageComponent.prototype, "pageHeight", void 0);
    StageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-stage',
            template: __webpack_require__("../../../../../src/app/canvas/stage.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_18__common_signalr_service__["a" /* SignalRService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StageComponent);
    return StageComponent;
}(__WEBPACK_IMPORTED_MODULE_8__foundry_foPage_model__["a" /* foPage */]));



/***/ }),

/***/ "../../../../../src/app/common/emitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Credit to https://gist.github.com/sasxa
// Imports

//https://scotch.io/tutorials/angular-2-http-requests-with-observables
var EmitterService = (function () {
    function EmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return this._emitters[ID];
    };
    // Event store
    EmitterService._emitters = {};
    EmitterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], EmitterService);
    return EmitterService;
}());

var popupToast = (function () {
    function popupToast() {
    }
    popupToast.prototype.error = function (message, title) {
        var toast = {
            title: title || '',
            message: message
        };
        EmitterService.get("SHOWERROR").emit(toast);
    };
    popupToast.prototype.warning = function (message, title) {
        var toast = {
            title: title || '',
            message: message
        };
        EmitterService.get("SHOWWARNING").emit(toast);
    };
    popupToast.prototype.success = function (message, title) {
        var toast = {
            title: title || '',
            message: message
        };
        EmitterService.get("SHOWSUCCESS").emit(toast);
    };
    popupToast.prototype.info = function (message, title) {
        var toast = {
            title: title || '',
            message: message
        };
        EmitterService.get("SHOWINFO").emit(toast);
    };
    return popupToast;
}());
var Toast = new popupToast();


/***/ }),

/***/ "../../../../../src/app/common/maptokeys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaptoKeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModelJsonPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaptoKeysPipe = (function () {
    function MaptoKeysPipe() {
    }
    MaptoKeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    MaptoKeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'maptokeys', pure: true })
    ], MaptoKeysPipe);
    return MaptoKeysPipe;
}());

var ModelJsonPipe = (function () {
    function ModelJsonPipe() {
    }
    ModelJsonPipe.prototype.transform = function (val) {
        if (val && val.stringify) {
            return val.stringify(val);
        }
        function resolveCircular(key, value) {
            if (key.startsWith('_'))
                return;
            return value;
        }
        try {
            return JSON.stringify(val, resolveCircular, 3);
        }
        catch (error) {
            throw error;
        }
    };
    ModelJsonPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'modelJson' })
    ], ModelJsonPipe);
    return ModelJsonPipe;
}());



/***/ }),

/***/ "../../../../../src/app/common/signalr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignalRService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__ = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//https://blogs.msdn.microsoft.com/webdev/2017/09/14/announcing-signalr-for-asp-net-core-2-0/
var SignalRService = (function () {
    function SignalRService() {
        this._started = false;
        //private hubURL = environment.signalRServer;
        this.hubURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].local ? __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].signalRServer : __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].signalfoundry;
        this._guid = __WEBPACK_IMPORTED_MODULE_3__foundry_foTools__["a" /* Tools */].generateUUID();
        if (!this.connection) {
            this.connection = new __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__["HubConnection"](this.hubURL);
        }
    }
    Object.defineProperty(SignalRService.prototype, "hub", {
        get: function () {
            return this._started && this.connection;
        },
        enumerable: true,
        configurable: true
    });
    SignalRService.prototype.send = function (text) {
        if (this.hub) {
            console.log('text: ' + text);
            this.hub.invoke('send', text);
        }
    };
    // public pubChannel(name: string, payload?: any) {
    //   if (this.hub) {
    //     //console.log('pubChannel ' + name)
    //     payload._channel = this._guid;
    //     this.hub.invoke("broadcast", name, payload);
    //   }
    // }
    // public subChannel(name: string, callback) {
    //   if (this.hub) {
    //     //console.log('subChannel ' + name)
    //     this.hub.on(name, data => {
    //       //console.log(name + ':  ' + JSON.stringify(data, undefined, 3));
    //       if ( data._channel != this._guid) {
    //         delete data._channel;
    //         callback(data);
    //       }
    //     });
    //   } else {
    //     Toast.warning("cannot connect at this moment", this.hubURL);
    //   }
    // }
    SignalRService.prototype.pubCommand = function (name, command, payload) {
        if (this.hub) {
            //console.log('pubChannel ' + name)
            command._channel = this._guid;
            this.hub.invoke("command", name, command, payload);
        }
    };
    SignalRService.prototype.subCommand = function (name, callback) {
        var _this = this;
        if (this.hub) {
            //console.log('subChannel ' + name)
            this.hub.on(name, function (command, payload) {
                //console.log(name + ':  command: ' + JSON.stringify(command, undefined, 3));
                //console.log(name + ':  payload: ' + JSON.stringify(payload, undefined, 3));
                if (command._channel != _this._guid) {
                    callback(command, payload);
                }
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].warning("cannot connect at this moment", this.hubURL);
        }
    };
    SignalRService.prototype.receive = function (callback) {
        if (this.hub) {
            this.hub.on('send', function (data) {
                console.log('receive: ' + JSON.stringify(data, undefined, 3));
                callback(data);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].warning("cannot connect at this moment", this.hubURL);
        }
    };
    SignalRService.prototype.askforVersion = function () {
        if (this.hub) {
            this.hub.invoke('version');
        }
    };
    SignalRService.prototype.start = function () {
        var _this = this;
        var promise;
        if (this._started) {
            promise = Promise.resolve(undefined);
        }
        else {
            promise = this.connection.start();
            promise.then(function () {
                _this._started = true;
                //Toast.success(this.hubURL, "Connected..");
                _this.hub.on('version', function (message) {
                    __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].success(_this.hubURL, "Connected.. " + message);
                });
                _this.askforVersion();
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].error(JSON.stringify(error), _this.hubURL);
            });
        }
        return promise;
    };
    SignalRService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SignalRService);
    return SignalRService;
}());



/***/ }),

/***/ "../../../../../src/app/foundry/foAttribute.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return foViewAttribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foKnowledge_model__ = __webpack_require__("../../../../../src/app/foundry/foKnowledge.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var foAttribute = (function (_super) {
    __extends(foAttribute, _super);
    function foAttribute(spec) {
        if (spec === void 0) { spec = undefined; }
        return _super.call(this, spec) || this;
    }
    return foAttribute;
}(__WEBPACK_IMPORTED_MODULE_0__foKnowledge_model__["a" /* foKnowledge */]));

var foViewAttribute = (function (_super) {
    __extends(foViewAttribute, _super);
    function foViewAttribute(source, spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this, spec) || this;
        _this._mySource = undefined;
        _this._mySource = source;
        return _this;
    }
    Object.defineProperty(foViewAttribute.prototype, "title", {
        //https://toddmotto.com/typescript-setters-getter
        get: function () {
            return this._title ? this._title : this.myName;
        },
        set: function (name) {
            this._title = name;
        },
        enumerable: true,
        configurable: true
    });
    return foViewAttribute;
}(foAttribute));



/***/ }),

/***/ "../../../../../src/app/foundry/foCollection.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__("../../../../../src/app/foundry/foObject.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//we want foCollection to be observable
var foCollection = (function (_super) {
    __extends(foCollection, _super);
    function foCollection(list) {
        if (list === void 0) { list = undefined; }
        var _this = _super.call(this) || this;
        _this._members = new Array();
        list && list.forEach(function (item) { return _this.addMember(item); });
        return _this;
    }
    foCollection.prototype.getChildAt = function (i) {
        return this._members[i];
    };
    foCollection.prototype.isEmpty = function () {
        return this._members.length == 0;
    };
    foCollection.prototype.clearAll = function () {
        this._members = [];
    };
    Object.defineProperty(foCollection.prototype, "length", {
        get: function () {
            return this._members.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foCollection.prototype, "hasMembers", {
        get: function () {
            return this.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    foCollection.prototype.map = function (funct) {
        return this._members.map(funct);
    };
    foCollection.prototype.forEach = function (funct) {
        this._members.forEach(funct);
    };
    foCollection.prototype.first = function () {
        return this._members[0];
    };
    foCollection.prototype.last = function () {
        return this._members[this._members.length - 1];
    };
    foCollection.prototype.filter = function (funct) {
        return this._members.filter(funct);
    };
    foCollection.prototype.findMember = function (name) {
        return this._members[0];
    };
    foCollection.prototype.getMember = function (id) {
        return this._members[id];
    };
    foCollection.prototype.copyMembers = function (list) {
        var _this = this;
        list.members.forEach(function (item) {
            _this.addMember(item);
        });
        return this;
    };
    foCollection.prototype.addMember = function (obj) {
        this._members.push(obj);
        return obj;
    };
    foCollection.prototype.removeMembers = function (list) {
        var _this = this;
        list.members.forEach(function (item) {
            _this.removeMember(item);
        });
        return this;
    };
    foCollection.prototype.removeMember = function (obj) {
        var index = this._members.indexOf(obj);
        if (index > -1) {
            this._members.splice(index, 1);
        }
        return obj;
    };
    Object.defineProperty(foCollection.prototype, "members", {
        get: function () {
            return this._members;
        },
        enumerable: true,
        configurable: true
    });
    foCollection.prototype.moveToTop = function (item) {
        var loc = this._members.indexOf(item);
        if (loc != -1) {
            this._members.splice(loc, 1);
            this._members.push(item);
        }
        return this._members;
    };
    return foCollection;
}(__WEBPACK_IMPORTED_MODULE_0__foObject_model__["a" /* foObject */]));



/***/ }),

/***/ "../../../../../src/app/foundry/foComponent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var foComponent = (function (_super) {
    __extends(foComponent, _super);
    function foComponent(properties, subcomponents, parent) {
        return _super.call(this, properties, subcomponents, parent) || this;
    }
    foComponent.prototype.init = function (properties, subcomponents, parent) {
        var _this = this;
        var self = this;
        this.myName = properties && properties['myName'] ? properties['myName'] : 'unknown';
        //create a different behaviour
        this.override(properties);
        this._subcomponents = new __WEBPACK_IMPORTED_MODULE_1__foCollection_model__["a" /* foCollection */]();
        subcomponents && subcomponents.forEach(function (item) { return _this.addSubcomponent(item); });
        return this;
    };
    //return a new collection that could be destroyed
    foComponent.prototype.subcomponents = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_1__foCollection_model__["a" /* foCollection */](this._subcomponents.members);
        return result.members;
    };
    return foComponent;
}(__WEBPACK_IMPORTED_MODULE_0__foNode_model__["a" /* foNode */]));


__WEBPACK_IMPORTED_MODULE_2__foRuntimeType__["a" /* RuntimeType */].define(foComponent);


/***/ }),

/***/ "../../../../../src/app/foundry/foConcept.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return foConcept; });
/* unused harmony export foProjection */
/* unused harmony export foConceptItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Concept; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foKnowledge_model__ = __webpack_require__("../../../../../src/app/foundry/foKnowledge.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__ = __webpack_require__("../../../../../src/app/foundry/foDictionary.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foAttribute_model__ = __webpack_require__("../../../../../src/app/foundry/foAttribute.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var foConcept = (function (_super) {
    __extends(foConcept, _super);
    function foConcept(properties) {
        var _this = _super.call(this, properties) || this;
        _this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_5__foNode_model__["a" /* foNode */](properties, subcomponents, parent);
        };
        return _this;
    }
    Object.defineProperty(foConcept.prototype, "primitive", {
        get: function () { return this._primitive; },
        set: function (value) { this._primitive = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foConcept.prototype, "specification", {
        get: function () { return this._specification; },
        set: function (value) { this._specification = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foConcept.prototype, "attributes", {
        get: function () {
            if (!this._attributes) {
                this._attributes = new __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__["a" /* foDictionary */]({ myName: 'attributes' });
            }
            return this._attributes;
        },
        set: function (value) { this._attributes = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foConcept.prototype, "projections", {
        get: function () {
            if (!this._projections) {
                this._projections = new __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__["a" /* foDictionary */]({ myName: 'projections' });
            }
            return this._projections;
        },
        set: function (value) { this._projections = value; },
        enumerable: true,
        configurable: true
    });
    foConcept.prototype.definePrimitive = function (type) {
        this.primitive = type.name;
        this._create = function (properties, subcomponents, parent) {
            return new type(properties, subcomponents, parent);
        };
        return this;
    };
    foConcept.prototype.establishAttribute = function (key, spec) {
        var attributes = this.attributes;
        var attribute = attributes.getItem(key);
        if (!attribute) {
            attribute = attributes.addItem(key, new __WEBPACK_IMPORTED_MODULE_4__foAttribute_model__["a" /* foAttribute */](spec));
            attribute.myName = key;
            __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Pub("attribute", ["added", this, attribute]);
        }
        return attribute;
    };
    foConcept.prototype.establishProjection = function (key, spec) {
        var projections = this.projections;
        var projection = projections.getItem(key);
        if (!projection) {
            projection = new foProjection(this, spec);
            projections.addItem(key, projection);
            projection.myName = key;
        }
        return projection;
    };
    Object.defineProperty(foConcept.prototype, "debug", {
        get: function () {
            var result = {
                base: this,
                spec: this._specification,
                primitive: this._primitive,
                attributes: this._attributes,
                projections: this._projections,
            };
            return __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].stringify(result);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foConcept.prototype, "asJson", {
        get: function () {
            var result = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].asJson(this);
            result.primitive = this._primitive;
            result.specification = this._specification;
            result.attributes = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].asArray(this.attributes.asJson);
            result.projections = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].asArray(this.projections.asJson);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    foConcept.prototype.newInstance = function (properties, subcomponents, parent) {
        var spec = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].union(this.specification, properties);
        var result = this._create(spec, subcomponents, parent);
        result.initialize();
        return result;
    };
    return foConcept;
}(__WEBPACK_IMPORTED_MODULE_2__foKnowledge_model__["a" /* foKnowledge */]));

__WEBPACK_IMPORTED_MODULE_6__foRuntimeType__["a" /* RuntimeType */].knowledge(foConcept);
var foProjection = (function (_super) {
    __extends(foProjection, _super);
    function foProjection(source, properties) {
        var _this = _super.call(this, properties) || this;
        _this._mySource = undefined;
        _this._mySource = source;
        __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Sub("attribute", function (action, source, attribute) {
            if (_this._mySource === source) {
                var view = _this.establishViewAttribute(attribute);
            }
        });
        return _this;
    }
    foProjection.prototype.establishViewAttribute = function (attribute, spec) {
        if (spec === void 0) { spec = undefined; }
        var attributes = this.attributes;
        var key = attribute.myName;
        var view = attributes.getItem(key);
        if (!view) {
            view = new __WEBPACK_IMPORTED_MODULE_4__foAttribute_model__["b" /* foViewAttribute */](attribute, spec);
            this.attributes.addItem(key, view);
            view.myName = key;
        }
        return view;
    };
    return foProjection;
}(foConcept));

__WEBPACK_IMPORTED_MODULE_6__foRuntimeType__["a" /* RuntimeType */].knowledge(foProjection);
var foConceptItem = (function () {
    function foConceptItem(props) {
        props && __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].mixin(this, props);
    }
    return foConceptItem;
}());

var Concept = (function () {
    function Concept() {
    }
    Concept.namespaces = function () {
        return Object.keys(this.lookup);
    };
    Concept.names = function (namespace) {
        return Object.keys(this.lookup[namespace]);
    };
    Concept.allConceptItems = function () {
        var list = new Array();
        __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(this.lookup, function (namespace, obj) {
            __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(obj, function (name, concept) {
                var id = namespace + "::" + name;
                var item = new foConceptItem({
                    id: id,
                    namespace: namespace,
                    name: name,
                    concept: concept,
                });
                list.push(item);
            });
        });
        return list;
    };
    Concept.find = function (id) {
        var _a = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].splitNamespaceType(id), namespace = _a.namespace, name = _a.name;
        var concept = this.findConcept(namespace, name);
        return concept;
    };
    Concept.register = function (id, concept) {
        var _a = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].splitNamespaceType(id), namespace = _a.namespace, name = _a.name;
        return this.registerConcept(namespace, name, concept);
    };
    Concept.registerConcept = function (namespace, name, concept) {
        if (!this.lookup[namespace]) {
            this.lookup[namespace] = {};
        }
        this.lookup[namespace][name] = concept;
        return concept;
    };
    Concept.findConcept = function (namespace, name) {
        var space = this.lookup[namespace];
        var concept = space && space[name];
        return concept;
    };
    Concept.define = function (myName, type, specification) {
        var _a = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].splitNamespaceType(myName), namespace = _a.namespace, name = _a.name;
        var concept = new foConcept({ myName: myName });
        concept.definePrimitive(type);
        concept.specification = specification || {};
        var result = this.registerConcept(namespace, name, concept);
        __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Pub('onKnowledgeChanged', result);
        return result;
    };
    Concept.override = function (json) {
        var specification = json.specification, primitive = json.primitive;
        var concept = new foConcept(json);
        //foObject.jsonAlert(data);
        var type = __WEBPACK_IMPORTED_MODULE_6__foRuntimeType__["a" /* RuntimeType */].modelPrimitives[primitive];
        if (!type) {
            throw Error('runtimeType not found ' + type);
        }
        concept.definePrimitive(type);
        concept.specification = specification;
        var _a = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].splitNamespaceType(concept.myName), namespace = _a.namespace, name = _a.name;
        var result = this.registerConcept(namespace, name, concept);
        __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Pub('onKnowledgeChanged', result);
        return result;
    };
    Concept.newInstance = function (id, properties, func) {
        var _a = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].splitNamespaceType(id), namespace = _a.namespace, name = _a.name;
        var concept = this.findConcept(namespace, name);
        var instance = concept.newInstance(properties);
        func && func(instance);
        return instance;
    };
    Concept.lookup = {};
    return Concept;
}());



/***/ }),

/***/ "../../../../../src/app/foundry/foDictionary.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foDictionary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foKnowledge_model__ = __webpack_require__("../../../../../src/app/foundry/foKnowledge.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var foDictionary = (function (_super) {
    __extends(foDictionary, _super);
    function foDictionary(spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this, spec) || this;
        _this._lookup = {};
        return _this;
    }
    foDictionary.prototype.addItem = function (key, obj) {
        this._lookup[key] = obj;
        return obj;
    };
    foDictionary.prototype.removeItem = function (key) {
        var obj = this._lookup[key];
        delete this._lookup[key];
        return obj;
    };
    foDictionary.prototype.getItem = function (key) {
        var result = this._lookup[key];
        return result;
    };
    foDictionary.prototype.findItem = function (key, onMissing, onFound) {
        var found = this.getItem(key);
        if (!found && onMissing) {
            onMissing(key);
            found = this.getItem(key);
        }
        else if (found) {
            onFound && onFound(found);
        }
        return found;
    };
    foDictionary.prototype.found = function (key, onFound, onMissing) {
        var found = this.getItem(key);
        if (found && onFound) {
            onFound(found);
            found = this.getItem(key);
        }
        else if (!found) {
            onMissing && onMissing(key);
        }
        return found;
    };
    foDictionary.prototype.clearAll = function () {
        this._lookup = {};
    };
    Object.defineProperty(foDictionary.prototype, "keys", {
        get: function () {
            return Object.keys(this._lookup);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foDictionary.prototype, "members", {
        get: function () {
            var _this = this;
            var keys = this.keys;
            var list = keys.map(function (key) { return _this._lookup[key]; });
            return list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foDictionary.prototype, "values", {
        get: function () {
            var result = this._lookup;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    foDictionary.prototype.mapMembers = function (mapFunc) {
        var _this = this;
        var keys = this.keys;
        var list = keys.map(function (key) { return mapFunc(_this._lookup[key]); });
        return list;
    };
    ;
    foDictionary.prototype.forEachKeyValue = function (mapFunc) {
        var _this = this;
        var keys = this.keys;
        keys.forEach(function (key) {
            var value = _this._lookup[key];
            mapFunc(key, value);
        });
    };
    ;
    foDictionary.prototype.applyTo = function (mapFunc) {
        for (var key in this._lookup) {
            var value = this._lookup[key];
            mapFunc(value);
        }
        ;
    };
    ;
    Object.defineProperty(foDictionary.prototype, "asJson", {
        get: function () {
            var result = this.jsonMerge(this._lookup);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    foDictionary.prototype.jsonMerge = function (source) {
        var result = {};
        if (!__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isEmpty(source)) {
            __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(source, function (key, value) {
                if (!result[key] && !__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isEmpty(value)) {
                    var json = value && value.asJson;
                    result[key] = json ? json : value;
                }
            });
        }
        return result;
    };
    return foDictionary;
}(__WEBPACK_IMPORTED_MODULE_1__foKnowledge_model__["a" /* foKnowledge */]));



/***/ }),

/***/ "../../../../../src/app/foundry/foDisplay2D.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foDisplay2D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foMatrix2D__ = __webpack_require__("../../../../../src/app/foundry/foMatrix2D.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



//a Glyph is a graphic designed to draw on a canvas in absolute coordinates
var foDisplay2D = (function (_super) {
    __extends(foDisplay2D, _super);
    function foDisplay2D(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.snapToPixel = false;
        _this._scaleX = 1;
        _this._scaleY = 1;
        _this.hitTestWithDraw = function (hit, ctx) {
            var x = hit.x;
            var y = hit.y;
            ///var ctx = DisplayObject._hitTestContext;
            ctx.setTransform(1, 0, 0, 1, -x, -y);
            _this.draw(ctx);
            var isHit = _this._testHit(ctx);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, 2, 2);
            return isHit;
        };
        return _this;
    }
    Object.defineProperty(foDisplay2D.prototype, "scaleX", {
        get: function () { return this._scaleX || 1.0; },
        set: function (value) {
            this.smash();
            this._scaleX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foDisplay2D.prototype, "scaleY", {
        get: function () { return this._scaleY || 1.0; },
        set: function (value) {
            this.smash();
            this._scaleY = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Applies this display object's transformation, alpha, globalCompositeOperation, clipping path (mask), and shadow
     * to the specified context. This is typically called prior to "DisplayObject/draw".
     * @method updateContext
     * @param {CanvasRenderingContext2D} ctx The canvas 2D to update.
     **/
    foDisplay2D.prototype.updateContext = function (ctx) {
        var mtx = this.getMatrix();
        var tx = mtx.tx;
        var ty = mtx.ty;
        if (foDisplay2D.snapToPixelEnabled && this.snapToPixel) {
            tx = tx + (tx < 0 ? -0.5 : 0.5) | 0;
            ty = ty + (ty < 0 ? -0.5 : 0.5) | 0;
        }
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty);
        ctx.globalAlpha *= this.opacity;
    };
    ;
    foDisplay2D.prototype.getMatrix = function () {
        if (this._matrix === undefined) {
            this._matrix = new __WEBPACK_IMPORTED_MODULE_1__foMatrix2D__["a" /* Matrix2D */]();
            this._matrix.appendTransform(this.x, this.y, this.scaleX, this.scaleY, this.rotation(), 0, 0, this.pinX(), this.pinY());
            //console.log('getMatrix');
        }
        return this._matrix;
    };
    ;
    foDisplay2D.prototype._testHit = function (ctx) {
        try {
            var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1;
            return hit;
        }
        catch (e) {
            throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
        }
        //return false;
    };
    ;
    foDisplay2D.prototype.getBounds = function () {
        return this._bounds;
    };
    ;
    foDisplay2D.prototype.clearBounds = function () {
        this._bounds = undefined;
        return this._bounds;
    };
    ;
    foDisplay2D.prototype.setBounds = function (x, y, width, height) {
        this._bounds = this._bounds || new __WEBPACK_IMPORTED_MODULE_0__foGeometry__["d" /* cRect */](x, y, width, height);
        return this._bounds;
    };
    ;
    foDisplay2D.prototype.getTransformedBounds = function () {
        return this._getBounds();
    };
    ;
    foDisplay2D.prototype._getBounds = function (matrix, ignoreTransform) {
        return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
    };
    ;
    foDisplay2D.prototype._transformBounds = function (bounds, matrix, ignoreTransform) {
        if (!bounds) {
            return bounds;
        }
        var x = bounds.x;
        var y = bounds.y;
        var width = bounds.width;
        var height = bounds.height;
        var mtx = this.getMatrix();
        if (x || y) {
            mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y);
        }
        if (matrix) {
            mtx.prependMatrix(matrix);
        }
        var x_a = width * mtx.a, x_b = width * mtx.b;
        var y_c = height * mtx.c, y_d = height * mtx.d;
        var tx = mtx.tx, ty = mtx.ty;
        var minX = tx, maxX = tx, minY = ty, maxY = ty;
        if ((x = x_a + tx) < minX) {
            minX = x;
        }
        else if (x > maxX) {
            maxX = x;
        }
        if ((x = x_a + y_c + tx) < minX) {
            minX = x;
        }
        else if (x > maxX) {
            maxX = x;
        }
        if ((x = y_c + tx) < minX) {
            minX = x;
        }
        else if (x > maxX) {
            maxX = x;
        }
        if ((y = x_b + ty) < minY) {
            minY = y;
        }
        else if (y > maxY) {
            maxY = y;
        }
        if ((y = x_b + y_d + ty) < minY) {
            minY = y;
        }
        else if (y > maxY) {
            maxY = y;
        }
        if ((y = y_d + ty) < minY) {
            minY = y;
        }
        else if (y > maxY) {
            maxY = y;
        }
        return bounds.set(minX, minY, maxX - minX, maxY - minY);
    };
    ;
    foDisplay2D.snapToPixelEnabled = false;
    return foDisplay2D;
}(__WEBPACK_IMPORTED_MODULE_2__foundry_foShape2D_model__["a" /* foShape2D */]));



/***/ }),

/***/ "../../../../../src/app/foundry/foGeometry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cMargin; });
/* unused harmony export cBox */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cPoint = (function () {
    function cPoint(x, y, name) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        this.myName = name;
    }
    cPoint.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        return this;
    };
    cPoint.prototype.add = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x += x;
        this.y += y;
        return this;
    };
    cPoint.prototype.subtract = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x -= x;
        this.y -= y;
        return this;
    };
    cPoint.prototype.midpoint = function (pt) {
        var x = (this.x + pt.x) / 2;
        var y = (this.y + pt.y) / 2;
        return new cPoint(x, y);
    };
    return cPoint;
}());

var cRect = (function () {
    function cRect(x, y, width, height, name) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.myName = name;
    }
    cRect.prototype.moveBy = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x += x;
        this.y += y;
        return this;
    };
    cRect.prototype.moveTo = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        return this;
    };
    cRect.prototype.sizeBy = function (width, height) {
        this.width += width;
        this.height += height;
        return this;
    };
    cRect.prototype.sizeTo = function (width, height) {
        this.width = width;
        this.height = height;
        return this;
    };
    cRect.prototype.set = function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return this;
    };
    cRect.prototype.contains = function (x, y) {
        return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
    };
    cRect.prototype.localContains = function (x, y) {
        return 0 <= x && x <= this.width && 0 <= y && y <= this.height;
    };
    cRect.prototype.draw = function (ctx, fill) {
        if (fill) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        else {
            ctx.rect(this.x, this.y, this.width, this.height);
        }
        return this;
    };
    return cRect;
}());

var cFrame = (function () {
    function cFrame(source) {
        this.point = new cPoint();
        this.source = source;
    }
    cFrame.prototype.set = function (x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        return this;
    };
    cFrame.prototype.init = function (obj) {
        this.x1 = obj.x;
        this.y1 = obj.y;
        this.x2 = obj.x;
        this.y2 = obj.y;
        return this;
    };
    cFrame.prototype.merge = function (obj) {
        this.x1 = Math.min(this.x1, obj.x1, obj.x2);
        this.y1 = Math.min(this.y1, obj.y1, obj.y2);
        this.x2 = Math.max(this.x2, obj.x2, obj.x1);
        this.y2 = Math.max(this.y2, obj.y2, obj.y1);
        return this;
    };
    cFrame.prototype.minmax = function (obj) {
        this.x1 = Math.min(this.x1, obj.x);
        this.y1 = Math.min(this.y1, obj.y);
        this.x2 = Math.max(this.x2, obj.x);
        this.y2 = Math.max(this.y2, obj.y);
        return this;
    };
    cFrame.prototype.contains = function (x, y) {
        return this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2;
    };
    cFrame.prototype.draw = function (ctx, fill) {
        var width = this.x2 - this.x1;
        var height = this.y2 - this.y1;
        if (fill) {
            ctx.fillRect(this.x1, this.y1, width, height);
        }
        else {
            ctx.rect(this.x1, this.y1, width, height);
        }
        return this;
    };
    return cFrame;
}());

var cMargin = (function () {
    function cMargin(left, top, right, bottom) {
        if (left === void 0) { left = 0; }
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    cMargin.prototype.setAll = function (size) {
        if (size === void 0) { size = 0; }
        this.left = size;
        this.top = size;
        this.right = size;
        this.bottom = size;
        return this;
    };
    Object.defineProperty(cMargin.prototype, "width", {
        get: function () {
            return this.left + this.right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cMargin.prototype, "height", {
        get: function () {
            return this.top + this.bottom;
        },
        enumerable: true,
        configurable: true
    });
    return cMargin;
}());

var cBox = (function (_super) {
    __extends(cBox, _super);
    function cBox(x, y, width, height, name) {
        return _super.call(this, x, y, width, height, name) || this;
    }
    cBox.prototype.pinX = function () {
        return 0 * this.width;
    };
    cBox.prototype.pinY = function () {
        return 0 * this.height;
    };
    cBox.prototype.draw = function (ctx, fill) {
        if (fill) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        else {
            ctx.rect(this.x, this.y, this.width, this.height);
        }
        return this;
    };
    return cBox;
}(cRect));



/***/ }),

/***/ "../../../../../src/app/foundry/foGlue.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foGlue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


//a Glyph is a graphic designed to draw on a canvas in absolute coordinates
var foGlue = (function (_super) {
    __extends(foGlue, _super);
    function foGlue(properties, parent) {
        return _super.call(this, properties, undefined, parent) || this;
    }
    Object.defineProperty(foGlue.prototype, "targetHandle", {
        get: function () { return this._targetHandle; },
        set: function (value) {
            this._targetHandle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlue.prototype, "sourceHandle", {
        get: function () { return this.myName; },
        set: function (value) {
            this.myName = value;
        },
        enumerable: true,
        configurable: true
    });
    foGlue.prototype.glueTo = function (target, handle) {
        var _this = this;
        this.myTarget = function () { return target; };
        this.mySource = function () { return _this.myParent(); };
        this.targetHandle = handle;
        return this;
    };
    foGlue.prototype.toJson = function () {
        return __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].mixin(_super.prototype.toJson.call(this), {
            guid: this.myGuid,
            myType: this.myType,
            sourceGuid: this.mySource() && this.mySource().myGuid,
            sourceHandle: this.sourceHandle,
            targetGuid: this.myTarget() && this.myTarget().myGuid,
            targetHandle: this.targetHandle
        });
    };
    return foGlue;
}(__WEBPACK_IMPORTED_MODULE_1__foNode_model__["a" /* foNode */]));



/***/ }),

/***/ "../../../../../src/app/foundry/foGlyph.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foGlyph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foMatrix2D__ = __webpack_require__("../../../../../src/app/foundry/foMatrix2D.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foHandle__ = __webpack_require__("../../../../../src/app/foundry/foHandle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







//a Glyph is a graphic designed to draw on a canvas in absolute coordinates
var foGlyph = (function (_super) {
    __extends(foGlyph, _super);
    function foGlyph(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this._isSelected = false;
        _this._visible = true;
        _this._boundry = new __WEBPACK_IMPORTED_MODULE_1__foGeometry__["a" /* cFrame */](_this);
        _this.getOffset = function (loc) {
            var x = _this.x;
            var y = _this.y;
            return new __WEBPACK_IMPORTED_MODULE_1__foGeometry__["c" /* cPoint */](x - loc.x, y - loc.y);
        };
        _this.getLocation = function () {
            var x = _this.x;
            var y = _this.y;
            return new __WEBPACK_IMPORTED_MODULE_1__foGeometry__["c" /* cPoint */](x, y);
        };
        _this.setLocation = function (loc) {
            _this.x = loc ? loc.x : 0;
            _this.y = loc ? loc.y : 0;
        };
        _this.localHitTest = function (hit) {
            var loc = _this.globalToLocal(hit.x, hit.y);
            if (loc.x < 0)
                return false;
            if (loc.x > _this.width)
                return false;
            if (loc.y < 0)
                return false;
            if (loc.y > _this.height)
                return false;
            return true;
        };
        _this.hitTest = function (hit, ctx) {
            return _this.localHitTest(hit);
        };
        _this.overlapTest = function (hit, ctx) {
            var frame = _this.globalToLocalFrame(hit.x1, hit.y1, hit.x2, hit.y2);
            if (_this.localContains(frame.x1, frame.y1))
                return true;
            if (_this.localContains(frame.x1, frame.y2))
                return true;
            if (_this.localContains(frame.x2, frame.y1))
                return true;
            if (_this.localContains(frame.x2, frame.y2))
                return true;
            return false;
        };
        _this.afterRender = function (ctx, deep) {
            if (deep === void 0) { deep = true; }
            ctx.save();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'pink';
            _this.drawBoundry(ctx);
            ctx.restore();
            deep && _this.nodes.forEach(function (item) {
                item.afterRender(ctx, deep);
            });
        };
        _this.drawSelected = function (ctx) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 4;
            _this.drawOutline(ctx);
            _this.drawHandles(ctx);
            _this.drawPin(ctx);
        };
        _this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.lineWidth = 1;
            ctx.fillRect(0, 0, _this.width, _this.height);
        };
        return _this;
    }
    Object.defineProperty(foGlyph.prototype, "isSelected", {
        get: function () { return this._isSelected; },
        set: function (value) { this._isSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (value) { this._visible = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "isVisible", {
        get: function () {
            return !!(this.visible && this.opacity > 0);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(foGlyph.prototype, "x", {
        get: function () { return this._x || 0.0; },
        set: function (value) {
            this.smash();
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "y", {
        get: function () { return this._y || 0.0; },
        set: function (value) {
            this.smash();
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "width", {
        get: function () { return this._width || 0.0; },
        set: function (value) { this._width = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "height", {
        get: function () { return this._height || 0.0; },
        set: function (value) { this._height = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "opacity", {
        get: function () { return this._opacity || 1; },
        set: function (value) { this._opacity = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "color", {
        get: function () {
            return this._color || 'black';
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foGlyph.prototype, "handles", {
        get: function () { return this._handles || this.createHandles(); },
        enumerable: true,
        configurable: true
    });
    foGlyph.prototype.smash = function () {
        //console.log('smash matrix')
        this._matrix = undefined;
        this._invMatrix = undefined;
    };
    foGlyph.prototype.setLayout = function (func) {
        this._layout = func;
        return this;
    };
    ;
    foGlyph.prototype.doLayout = function (deep) {
        if (deep === void 0) { deep = true; }
        if (deep) {
            this.nodes.forEach(function (item) { return item.doLayout(); });
        }
        this._layout && this.wait(1000, this._layout);
        return this;
    };
    ;
    Object.defineProperty(foGlyph.prototype, "boundryFrame", {
        get: function () {
            var _this = this;
            var mtx = this.getGlobalMatrix();
            //this is a buffer so we create less garbage
            var pt = this._boundry.point;
            this._boundry.init(mtx.transformPoint(0, 0, pt));
            this._boundry.minmax(mtx.transformPoint(0, this.height, pt));
            this._boundry.minmax(mtx.transformPoint(this.width, 0, pt));
            this._boundry.minmax(mtx.transformPoint(this.width, this.height, pt));
            this.nodes.forEach(function (item) {
                _this._boundry.merge(item.boundryFrame);
            });
            return this._boundry;
        },
        enumerable: true,
        configurable: true
    });
    foGlyph.prototype.drawBoundry = function (ctx) {
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        this.boundryFrame.draw(ctx, false);
        ctx.stroke();
    };
    foGlyph.prototype.set = function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return this;
    };
    foGlyph.prototype.contains = function (x, y) {
        return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
    };
    foGlyph.prototype.localContains = function (x, y) {
        return 0 <= x && x <= this.width && 0 <= y && y <= this.height;
    };
    foGlyph.prototype.toJson = function () {
        return __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].mixin(_super.prototype.toJson.call(this), {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            opacity: this.opacity,
            color: this.color,
        });
    };
    foGlyph.prototype.initialize = function (x, y, ang) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (ang === void 0) { ang = Number.NaN; }
        return this;
    };
    foGlyph.prototype.drop = function (x, y, angle) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (angle === void 0) { angle = Number.NaN; }
        if (!Number.isNaN(x))
            this.x = x;
        if (!Number.isNaN(y))
            this.y = y;
        return this;
    };
    Object.defineProperty(foGlyph.prototype, "nodes", {
        get: function () {
            return this._subcomponents;
        },
        enumerable: true,
        configurable: true
    });
    foGlyph.prototype.easeTo = function (x, y, time, ease) {
        var _this = this;
        if (time === void 0) { time = .5; }
        if (ease === void 0) { ease = __WEBPACK_IMPORTED_MODULE_3_gsap__["Back"].ease; }
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(this, time, {
            x: x,
            y: y,
            ease: ease
        }).eventCallback("onUpdate", function () {
            _this.drop();
        }).eventCallback("onComplete", function () {
            _this.drop(x, y);
        });
        return this;
    };
    foGlyph.prototype.easeTween = function (to, time, ease) {
        var _this = this;
        if (time === void 0) { time = .5; }
        if (ease === void 0) { ease = __WEBPACK_IMPORTED_MODULE_3_gsap__["Back"].ease; }
        var from = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].union(to, { ease: ease });
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenLite"].to(this, time, from).eventCallback("onComplete", function () { return _this.override(to); });
        return this;
    };
    foGlyph.prototype.moveTo = function (loc, offset) {
        var x = loc.x + (offset ? offset.x : 0);
        var y = loc.y + (offset ? offset.y : 0);
        return this.drop(x, y);
    };
    foGlyph.prototype.moveBy = function (loc, offset) {
        var x = this.x + loc.x + (offset ? offset.x : 0);
        var y = this.y + loc.y + (offset ? offset.y : 0);
        return this.drop(x, y);
    };
    foGlyph.prototype.updateContext = function (ctx) {
        var mtx = this.getMatrix();
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        ctx.globalAlpha *= this.opacity;
    };
    ;
    foGlyph.prototype.getGlobalMatrix = function () {
        var mtx = new __WEBPACK_IMPORTED_MODULE_2__foMatrix2D__["a" /* Matrix2D */](this.getMatrix());
        var parent = this.myParent && this.myParent();
        if (parent) {
            mtx.prependMatrix(parent.getGlobalMatrix());
        }
        return mtx;
    };
    ;
    foGlyph.prototype.getMatrix = function () {
        if (this._matrix === undefined) {
            this._matrix = new __WEBPACK_IMPORTED_MODULE_2__foMatrix2D__["a" /* Matrix2D */]();
            this._matrix.appendTransform(this.x, this.y, 1, 1, 0, 0, 0, 0, 0);
        }
        return this._matrix;
    };
    ;
    foGlyph.prototype.getInvMatrix = function () {
        if (this._invMatrix === undefined) {
            this._invMatrix = this.getMatrix().invertCopy();
        }
        return this._invMatrix;
    };
    ;
    foGlyph.prototype.localToGlobal = function (x, y, pt) {
        var mtx = this.getGlobalMatrix();
        return mtx.transformPoint(x, y, pt);
    };
    ;
    foGlyph.prototype.localToGlobalPoint = function (pt) {
        var mtx = this.getGlobalMatrix();
        return mtx.transformPoint(pt.x, pt.y, pt);
    };
    ;
    foGlyph.prototype.globalToLocal = function (x, y, pt) {
        var inv = this.getGlobalMatrix().invertCopy();
        return inv.transformPoint(x, y, pt);
    };
    ;
    foGlyph.prototype.globalToLocalPoint = function (pt) {
        var inv = this.getGlobalMatrix().invertCopy();
        return inv.transformPoint(pt.x, pt.y, pt);
    };
    ;
    foGlyph.prototype.globalToLocalFrame = function (x1, y1, x2, y2, frame) {
        frame = frame || new __WEBPACK_IMPORTED_MODULE_1__foGeometry__["a" /* cFrame */]();
        var inv = this.getGlobalMatrix().invertCopy();
        frame.init(inv.transformPoint(x1, y1, frame.point));
        frame.minmax(inv.transformPoint(x1, y2, frame.point));
        frame.minmax(inv.transformPoint(x2, y1, frame.point));
        frame.minmax(inv.transformPoint(x2, y2, frame.point));
        return frame;
    };
    ;
    foGlyph.prototype.localToLocal = function (x, y, target, pt) {
        pt = this.localToGlobal(x, y, pt);
        return target.globalToLocal(pt.x, pt.y, pt);
    };
    ;
    foGlyph.prototype.setColor = function (color) {
        this.color = color;
        return this.color;
    };
    ;
    foGlyph.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        return this.opacity;
    };
    ;
    foGlyph.prototype.unSelect = function (deep) {
        if (deep === void 0) { deep = true; }
        this.isSelected = false;
        this._handles && this._handles.forEach(function (item) { return item.color = 'black'; });
        deep && this.Subcomponents.forEach(function (item) {
            item.unSelect(deep);
        });
    };
    foGlyph.prototype.findObjectUnderPoint = function (hit, deep, ctx) {
        var found = this.hitTest(hit, ctx) ? this : undefined;
        if (deep) {
            var child = this.findChildObjectUnderPoint(hit, ctx);
            found = child ? child : found;
        }
        return found;
    };
    foGlyph.prototype.findChildObjectUnderPoint = function (hit, ctx) {
        var children = this.nodes;
        for (var i = 0; i < children.length; i++) {
            var child = children.getMember(i);
            var found = child.findChildObjectUnderPoint(hit, ctx);
            if (found)
                return found;
        }
        if (this.hitTest(hit, ctx)) {
            return this;
        }
    };
    foGlyph.prototype.findObjectUnderFrame = function (source, hit, deep, ctx) {
        var found = this.overlapTest(hit, ctx) ? this : undefined;
        if (deep) {
            var child = this.findChildObjectUnderFrame(source, hit, ctx);
            found = child ? child : found;
        }
        return found;
    };
    foGlyph.prototype.findChildObjectUnderFrame = function (source, hit, ctx) {
        var children = this.nodes;
        for (var i = 0; i < children.length; i++) {
            var child = children.getMember(i);
            if (source.hasAncestor(child))
                continue;
            var found = child.findChildObjectUnderFrame(source, hit, ctx);
            if (found)
                return found;
        }
        if (this.overlapTest(hit, ctx)) {
            return this;
        }
    };
    foGlyph.prototype.pinLocation = function () {
        return {
            x: 0,
            y: 0,
        };
    };
    foGlyph.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        ctx.save();
        //this.drawOrigin(ctx);
        this.updateContext(ctx);
        //this.drawOriginX(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        this.isSelected && this.drawSelected(ctx);
        deep && this._subcomponents.forEach(function (item) {
            item.render(ctx, deep);
        });
        ctx.restore();
    };
    foGlyph.prototype.drawText = function (ctx, text) {
        //http://junerockwell.com/end-of-line-or-line-break-in-html5-canvas/
        var fontsize = 20;
        var array = text.split('|');
        var dx = 10;
        var dy = 20;
        for (var i = 0; i < array.length; i++) {
            ctx.fillText(array[i], dx, dy);
            dy += (fontsize + 4);
        }
    };
    ;
    foGlyph.prototype.drawPin = function (ctx) {
        var _a = this.pinLocation(), x = _a.x, y = _a.y;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'pink';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.restore();
    };
    foGlyph.prototype.drawOrigin = function (ctx) {
        var _a = this.pinLocation(), x = _a.x, y = _a.y;
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(x - 50, y);
        ctx.lineTo(x + 50, y);
        ctx.moveTo(x, y - 50);
        ctx.lineTo(x, y + 50);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.restore();
    };
    foGlyph.prototype.drawOriginX = function (ctx) {
        var _a = this.pinLocation(), x = _a.x, y = _a.y;
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(x - 50, y - 50);
        ctx.lineTo(x + 50, y + 50);
        ctx.moveTo(x + 50, y - 50);
        ctx.lineTo(x - 50, y + 50);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.restore();
    };
    foGlyph.prototype.drawOutline = function (ctx) {
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        ctx.rect(0, 0, this.width, this.height);
        ctx.stroke();
    };
    foGlyph.prototype.generateHandles = function (spec) {
        var _this = this;
        if (!this._handles) {
            this._handles = new __WEBPACK_IMPORTED_MODULE_5__foCollection_model__["a" /* foCollection */]();
            spec.forEach(function (item) {
                var handle = new __WEBPACK_IMPORTED_MODULE_4__foHandle__["a" /* foHandle */](item, undefined, _this);
                _this._handles.addMember(handle);
            });
        }
        else {
            var i_1 = 0;
            spec.forEach(function (item) {
                var handle = _this._handles.getChildAt(i_1++);
                handle.override(item);
            });
        }
        return this._handles;
    };
    foGlyph.prototype.createHandles = function () {
        var spec = [
            { x: 0, y: 0, myName: "0:0" },
            { x: this.width, y: 0, myName: "W:0" },
            { x: this.width, y: this.height, myName: "W:H" },
            { x: 0, y: this.height, myName: "0:H" },
        ];
        return this.generateHandles(spec);
    };
    foGlyph.prototype.findHandle = function (loc, e) {
        if (!this._handles)
            return;
        for (var i = 0; i < this.handles.length; i++) {
            var handle = this.handles.getChildAt(i);
            if (handle.hitTest(loc)) {
                return handle;
            }
        }
    };
    foGlyph.prototype.moveHandle = function (handle, loc) {
    };
    foGlyph.prototype.drawHandles = function (ctx) {
        this.handles.forEach(function (item) {
            item.render(ctx);
        });
    };
    foGlyph.prototype.toggleSelected = function () {
        this.isSelected = !this.isSelected;
    };
    foGlyph.prototype.layoutSubcomponentsVertical = function (resize, space) {
        if (resize === void 0) { resize = true; }
        if (space === void 0) { space = 0; }
        var loc = this.getLocation();
        var self = this;
        if (resize) {
            self.height = self.width = 0;
            loc.x = loc.y = 0;
        }
        else {
            loc = this.nodes.first().getLocation();
        }
        this.nodes.forEach(function (item) {
            item.setLocation(loc);
        });
        this.nodes.forEach(function (item) {
            var _a = item.pinLocation(), pinX = _a.x, pinY = _a.y;
            loc.x = resize ? pinX : loc.x;
            loc.y += pinY;
            item.easeTo(loc.x, loc.y);
            loc.y += (space + item.height) - pinY;
            if (resize) {
                self.width = Math.max(self.width, item.width);
                self.height = loc.y;
            }
        });
        //self.drop(x, y);
        return this;
    };
    foGlyph.prototype.layoutSubcomponentsHorizontal = function (resize, space) {
        if (resize === void 0) { resize = true; }
        if (space === void 0) { space = 0; }
        var loc = this.getLocation();
        var self = this;
        if (resize) {
            self.height = self.width = 0;
            loc.x = loc.y = 0;
        }
        else {
            loc = this.nodes.first().getLocation();
        }
        this.nodes.forEach(function (item) {
            item.setLocation(loc);
        });
        this.nodes.forEach(function (item) {
            var _a = item.pinLocation(), pinX = _a.x, pinY = _a.y;
            loc.x += pinX;
            loc.y = resize ? pinY : loc.y;
            item.easeTo(loc.x, loc.y);
            loc.x += (space + item.width) - pinX;
            if (resize) {
                self.width = loc.x;
                self.height = Math.max(self.height, item.height);
            }
        });
        //self.drop(x, y);
        return this;
    };
    foGlyph.prototype.layoutMarginRight = function (resize, space) {
        if (resize === void 0) { resize = false; }
        if (space === void 0) { space = 0; }
        var loc = this.getLocation();
        var self = this;
        loc.x = (space + this.width);
        loc.y = 0;
        this.nodes.forEach(function (item) {
            var _a = item.pinLocation(), pinX = _a.x, pinY = _a.y;
            loc.x += pinX;
            item.easeTo(loc.x, loc.y + pinY);
            loc.x += (space + item.width) - pinX;
            if (resize) {
                self.width = loc.x;
                self.height = Math.max(self.height, item.height);
            }
        });
        return this;
    };
    foGlyph.prototype.layoutMarginTop = function (resize, space) {
        if (resize === void 0) { resize = false; }
        if (space === void 0) { space = 0; }
        var loc = this.getLocation();
        var self = this;
        loc.x = 10;
        loc.y = (space + this.height);
        this.nodes.forEach(function (item) {
            var _a = item.pinLocation(), pinX = _a.x, pinY = _a.y;
            loc.y += pinY;
            item.easeTo(loc.x + pinX, loc.y);
            loc.y += (space + item.height) - pinY;
            if (resize) {
                self.width = Math.max(self.width, item.width);
                self.height = loc.y;
            }
        });
        return this;
    };
    foGlyph.DEG_TO_RAD = Math.PI / 180;
    foGlyph.RAD_TO_DEG = 180 / Math.PI;
    return foGlyph;
}(__WEBPACK_IMPORTED_MODULE_6__foNode_model__["a" /* foNode */]));


__WEBPACK_IMPORTED_MODULE_7__foRuntimeType__["a" /* RuntimeType */].define(foGlyph);


/***/ }),

/***/ "../../../../../src/app/foundry/foHandle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foMatrix2D__ = __webpack_require__("../../../../../src/app/foundry/foMatrix2D.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



//a Glyph is a graphic designed to draw on a canvas in absolute coordinates
var foHandle = (function (_super) {
    __extends(foHandle, _super);
    function foHandle(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.getOffset = function (loc) {
            var x = _this.x;
            var y = _this.y;
            return new __WEBPACK_IMPORTED_MODULE_0__foGeometry__["c" /* cPoint */](x - loc.x, y - loc.y);
        };
        _this.localHitTest = function (hit) {
            var loc = _this.globalToLocal(hit.x, hit.y);
            if (loc.x < 0)
                return false;
            if (loc.x > _this.size)
                return false;
            if (loc.y < 0)
                return false;
            if (loc.y > _this.size)
                return false;
            //foObject.beep();
            return true;
        };
        _this.hitTest = function (hit, ctx) {
            return _this.localHitTest(hit);
        };
        _this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = _this.opacity;
            ctx.fillRect(0, 0, _this.size, _this.size);
        };
        return _this;
    }
    Object.defineProperty(foHandle.prototype, "x", {
        get: function () { return this._x || 0.0; },
        set: function (value) {
            this.smash();
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foHandle.prototype, "y", {
        get: function () { return this._y || 0.0; },
        set: function (value) {
            this.smash();
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foHandle.prototype, "size", {
        get: function () { return this._size || 10.0; },
        set: function (value) { this._size = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foHandle.prototype, "opacity", {
        get: function () { return this._opacity || .5; },
        set: function (value) { this._opacity = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foHandle.prototype, "color", {
        get: function () {
            return this._color || 'black';
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    foHandle.prototype.smash = function () {
        //console.log('smash matrix')
        this._matrix = undefined;
        this._invMatrix = undefined;
    };
    foHandle.prototype.drop = function (x, y, angle) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (angle === void 0) { angle = Number.NaN; }
        if (!Number.isNaN(x))
            this.x = x;
        if (!Number.isNaN(y))
            this.y = y;
        return this;
    };
    foHandle.prototype.moveTo = function (loc, offset) {
        //let x = loc.x + (offset ? offset.x : 0);
        //let y = loc.y + (offset ? offset.y : 0);
        this.myParentGlyph().moveHandle(this, loc);
        return this;
    };
    foHandle.prototype.updateContext = function (ctx) {
        var mtx = this.getMatrix();
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        ctx.globalAlpha *= this.opacity;
    };
    ;
    foHandle.prototype.getGlobalMatrix = function () {
        var mtx = new __WEBPACK_IMPORTED_MODULE_1__foMatrix2D__["a" /* Matrix2D */](this.getMatrix());
        var parent = this.myParent();
        if (parent) {
            mtx.prependMatrix(parent.getGlobalMatrix());
        }
        return mtx;
    };
    ;
    foHandle.prototype.getMatrix = function () {
        if (this._matrix === undefined) {
            this._matrix = new __WEBPACK_IMPORTED_MODULE_1__foMatrix2D__["a" /* Matrix2D */]();
            var delta = this.size / 2;
            this._matrix.appendTransform(this.x, this.y, 1, 1, 0, 0, 0, delta, delta);
        }
        return this._matrix;
    };
    ;
    foHandle.prototype.getInvMatrix = function () {
        if (this._invMatrix === undefined) {
            this._invMatrix = this.getMatrix().invertCopy();
        }
        return this._invMatrix;
    };
    ;
    foHandle.prototype.localToGlobal = function (x, y, pt) {
        var mtx = this.getGlobalMatrix();
        return mtx.transformPoint(x, y, pt);
    };
    ;
    foHandle.prototype.globalToLocal = function (x, y, pt) {
        var inv = this.getGlobalMatrix().invertCopy();
        return inv.transformPoint(x, y, pt);
    };
    ;
    foHandle.prototype.myParentGlyph = function () {
        return this.myParent && this.myParent();
    };
    foHandle.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        ctx.save();
        this.updateContext(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        ctx.restore();
    };
    return foHandle;
}(__WEBPACK_IMPORTED_MODULE_2__foNode_model__["a" /* foNode */]));



/***/ }),

/***/ "../../../../../src/app/foundry/foImage.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var foImage = (function (_super) {
    __extends(foImage, _super);
    function foImage(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this._loaded = false;
        //"http://backyardnaturalist.ca/wp-content/uploads/2011/06/goldfinch-feeder.jpg";
        _this.pinX = function () { return 0.5 * _this.width; };
        _this.pinY = function () { return 0.5 * _this.height; };
        _this.drawSelected = function (ctx) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 1;
            _this.drawOutline(ctx);
            //this.drawHandles(ctx);
            _this.drawPin(ctx);
        };
        _this.draw = function (ctx) {
            var left = ((_this.margin && _this.margin.left) || 0);
            var top = ((_this.margin && _this.margin.top) || 0);
            ctx.save();
            if (_this.background) {
                var width = _this.width + ((_this.margin && _this.margin.width) || 0);
                var height = _this.height + ((_this.margin && _this.margin.height) || 0);
                ctx.fillStyle = _this.background;
                ctx.fillRect(0, 0, width, height);
            }
            ctx.restore();
            if (_this._loaded) {
                ctx.drawImage(_this._image, left, top, _this.width, _this.height);
            }
        };
        return _this;
    }
    Object.defineProperty(foImage.prototype, "imageURL", {
        get: function () { return this._imageURL; },
        set: function (value) {
            var _this = this;
            this._loaded = false;
            this._imageURL = value;
            this._image = new Image();
            this._image.onload = function () {
                _this._loaded = true;
            };
            this._image.src = this._imageURL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foImage.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value;
        },
        enumerable: true,
        configurable: true
    });
    foImage.prototype.toJson = function () {
        return __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].mixin(_super.prototype.toJson.call(this), {
            background: this.background,
            imageURL: this.imageURL,
            margin: this.margin,
        });
    };
    foImage.prototype.override = function (properties) {
        if (properties && properties.margin) {
            var m = properties.margin;
            properties.margin = new __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__["b" /* cMargin */](m.left, m.top, m.right, m.bottom);
        }
        return _super.prototype.override.call(this, properties);
    };
    foImage.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        ctx.save();
        //this.drawOrigin(ctx);
        this.updateContext(ctx);
        //this.drawOriginX(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        this.isSelected && this.drawSelected(ctx);
        deep && this._subcomponents.forEach(function (item) {
            item.render(ctx, deep);
        });
        ctx.restore();
    };
    foImage.prototype.drawOutline = function (ctx) {
        var width = this.width + ((this.margin && this.margin.width) || 0);
        var height = this.height + ((this.margin && this.margin.height) || 0);
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        ctx.rect(0, 0, width, height);
        ctx.stroke();
    };
    return foImage;
}(__WEBPACK_IMPORTED_MODULE_2__foundry_foShape2D_model__["a" /* foShape2D */]));


__WEBPACK_IMPORTED_MODULE_3__foRuntimeType__["a" /* RuntimeType */].define(foImage);


/***/ }),

/***/ "../../../../../src/app/foundry/foKnowledge.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foKnowledge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__("../../../../../src/app/foundry/foObject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var foKnowledge = (function (_super) {
    __extends(foKnowledge, _super);
    function foKnowledge(properties) {
        return _super.call(this, properties) || this;
    }
    return foKnowledge;
}(__WEBPACK_IMPORTED_MODULE_0__foObject_model__["a" /* foObject */]));


__WEBPACK_IMPORTED_MODULE_1__foRuntimeType__["a" /* RuntimeType */].knowledge(foKnowledge);


/***/ }),

/***/ "../../../../../src/app/foundry/foMatrix2D.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix2D; });
/* unused harmony export Identity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/**
 * Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
 *
 * This matrix can be visualized as:
 *
 * 	[ a  c  tx
 * 	  b  d  ty
 * 	  0  0  1  ]
 *
 * Note the locations of b and c.
 *
 * @class Matrix2D
 * @param {Number} [a=1] Specifies the a property for the new matrix.
 * @param {Number} [b=0] Specifies the b property for the new matrix.
 * @param {Number} [c=0] Specifies the c property for the new matrix.
 * @param {Number} [d=1] Specifies the d property for the new matrix.
 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
 * @constructor
 **/

var Matrix2D = (function () {
    function Matrix2D(matrix) {
        this.a = 1; //Position (0, 0) in a 3x3 affine transformation matrix.
        this.b = 0; //Position (0, 1) in a 3x3 affine transformation matrix.
        this.c = 0; //Position (1, 0) in a 3x3 affine transformation matrix.
        this.d = 1; //Position (1, 1) in a 3x3 affine transformation matrix.
        this.tx = 0; //Position (2, 0) in a 3x3 affine transformation matrix.
        this.ty = 0; //Position (2, 1) in a 3x3 affine transformation matrix.
        if (matrix) {
            this.copy(matrix);
        }
    }
    Matrix2D.prototype.append = function (a, b, c, d, tx, ty) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        if (a != 1 || b != 0 || c != 0 || d != 1) {
            this.a = a1 * a + c1 * b;
            this.b = b1 * a + d1 * b;
            this.c = a1 * c + c1 * d;
            this.d = b1 * c + d1 * d;
        }
        this.tx = a1 * tx + c1 * ty + this.tx;
        this.ty = b1 * tx + d1 * ty + this.ty;
        return this;
    };
    ;
    Matrix2D.prototype.prepend = function (a, b, c, d, tx, ty) {
        var a1 = this.a;
        var c1 = this.c;
        var tx1 = this.tx;
        this.a = a * a1 + c * this.b;
        this.b = b * a1 + d * this.b;
        this.c = a * c1 + c * this.d;
        this.d = b * c1 + d * this.d;
        this.tx = a * tx1 + c * this.ty + tx;
        this.ty = b * tx1 + d * this.ty + ty;
        return this;
    };
    ;
    Matrix2D.prototype.set = function (a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    };
    Matrix2D.prototype.appendMatrix = function (matrix) {
        return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    };
    ;
    Matrix2D.prototype.prependMatrix = function (matrix) {
        return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    };
    ;
    Matrix2D.prototype.appendTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
        if (rotation % 360) {
            var r = rotation * Matrix2D.DEG_TO_RAD;
            var cos = Math.cos(r);
            var sin = Math.sin(r);
        }
        else {
            cos = 1;
            sin = 0;
        }
        if (skewX || skewY) {
            // TODO: can this be combined into a single append operation?
            skewX *= Matrix2D.DEG_TO_RAD;
            skewY *= Matrix2D.DEG_TO_RAD;
            this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
            this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
        }
        else {
            this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
        }
        if (regX || regY) {
            // append the registration offset:
            this.tx -= regX * this.a + regY * this.c;
            this.ty -= regX * this.b + regY * this.d;
        }
        return this;
    };
    ;
    Matrix2D.prototype.prependTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
        if (rotation % 360) {
            var r = rotation * Matrix2D.DEG_TO_RAD;
            var cos = Math.cos(r);
            var sin = Math.sin(r);
        }
        else {
            cos = 1;
            sin = 0;
        }
        if (regX || regY) {
            // prepend the registration offset:
            this.tx -= regX;
            this.ty -= regY;
        }
        if (skewX || skewY) {
            // TODO: can this be combined into a single prepend operation?
            skewX *= Matrix2D.DEG_TO_RAD;
            skewY *= Matrix2D.DEG_TO_RAD;
            this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
        }
        else {
            this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
        }
        return this;
    };
    ;
    /**
 * Applies a clockwise rotation transformation to the matrix.
 * @method rotate
 * @param {Number} angle The angle to rotate by, in degrees. To use a value in radians, multiply it by `180/Math.PI`.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
    Matrix2D.prototype.rotate = function (angle) {
        angle = angle * Matrix2D.DEG_TO_RAD;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var a1 = this.a;
        var b1 = this.b;
        this.a = a1 * cos + this.c * sin;
        this.b = b1 * cos + this.d * sin;
        this.c = -a1 * sin + this.c * cos;
        this.d = -b1 * sin + this.d * cos;
        return this;
    };
    ;
    Matrix2D.prototype.skew = function (skewX, skewY) {
        skewX = skewX * Matrix2D.DEG_TO_RAD;
        skewY = skewY * Matrix2D.DEG_TO_RAD;
        this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
        return this;
    };
    ;
    Matrix2D.prototype.scale = function (x, y) {
        this.a *= x;
        this.b *= x;
        this.c *= y;
        this.d *= y;
        return this;
    };
    ;
    Matrix2D.prototype.translate = function (x, y) {
        this.tx += this.a * x + this.c * y;
        this.ty += this.b * x + this.d * y;
        return this;
    };
    ;
    Matrix2D.prototype.identity = function () {
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
        return this;
    };
    ;
    Matrix2D.prototype.invert = function () {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var ty1 = this.ty;
        var n = a1 * d1 - b1 * c1;
        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = (c1 * this.ty - d1 * tx1) / n;
        this.ty = -(a1 * this.ty - b1 * tx1) / n;
        return this;
    };
    ;
    Matrix2D.prototype.invertCopy = function () {
        var result = new Matrix2D(this);
        return result.invert();
    };
    Matrix2D.prototype.isIdentity = function () {
        return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
    };
    ;
    Matrix2D.prototype.equals = function (matrix) {
        return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d;
    };
    ;
    /**
 * Transforms a point according to this matrix.
 * @method transformPoint
 * @param {Number} x The x component of the point to transform.
 * @param {Number} y The y component of the point to transform.
 * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
 * @return {Point} This matrix. Useful for chaining method calls.
 **/
    Matrix2D.prototype.transformPoint = function (x, y, pt) {
        pt = pt || new __WEBPACK_IMPORTED_MODULE_0__foGeometry__["c" /* cPoint */]();
        pt.x = x * this.a + y * this.c + this.tx;
        pt.y = x * this.b + y * this.d + this.ty;
        return pt;
    };
    ;
    Matrix2D.prototype.invertPoint = function (x, y, pt) {
        var inv = this.invertCopy();
        return inv.transformPoint(x, y, pt);
    };
    ;
    Matrix2D.prototype.decompose = function (target) {
        // TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation even when scale is negative
        if (target == null) {
            target = {};
        }
        target.x = this.tx;
        target.y = this.ty;
        target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
        target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var skewX = Math.atan2(-this.c, this.d);
        var skewY = Math.atan2(this.b, this.a);
        var delta = Math.abs(1 - skewX / skewY);
        if (delta < 0.00001) {
            target.rotation = skewY / Matrix2D.DEG_TO_RAD;
            if (this.a < 0 && this.d >= 0) {
                target.rotation += (target.rotation <= 0) ? 180 : -180;
            }
            target.skewX = target.skewY = 0;
        }
        else {
            target.skewX = skewX / Matrix2D.DEG_TO_RAD;
            target.skewY = skewY / Matrix2D.DEG_TO_RAD;
        }
        return target;
    };
    ;
    Matrix2D.prototype.copy = function (matrix) {
        this.a = matrix.a;
        this.b = matrix.b;
        this.c = matrix.c;
        this.d = matrix.d;
        this.tx = matrix.tx;
        this.ty = matrix.ty;
        return this;
    };
    ;
    Matrix2D.prototype.clone = function () {
        var matrix = new Matrix2D(this);
        return matrix;
    };
    ;
    Matrix2D.prototype.toString = function () {
        return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
    };
    ;
    Matrix2D.DEG_TO_RAD = Math.PI / 180;
    return Matrix2D;
}());

var Identity = new Matrix2D();


/***/ }),

/***/ "../../../../../src/app/foundry/foNode.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__("../../../../../src/app/foundry/foObject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var foNode = (function (_super) {
    __extends(foNode, _super);
    function foNode(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, parent) || this;
        _this._index = 0;
        _this._childDepth = 0;
        _this._subcomponents = new __WEBPACK_IMPORTED_MODULE_1__foCollection_model__["a" /* foCollection */]();
        _this._subcomponents.myName = 'Subparts';
        subcomponents && subcomponents.forEach(function (item) { return _this.addSubcomponent(item); });
        return _this;
    }
    Object.defineProperty(foNode.prototype, "myClass", {
        get: function () {
            var comp = this.constructor;
            return this._class || comp.name;
        },
        set: function (value) {
            this._class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "asJson", {
        get: function () { return this.toJson(); },
        enumerable: true,
        configurable: true
    });
    foNode.prototype.toJson = function () {
        return {
            myGuid: this.myGuid,
            myType: this.myType,
            myClass: this.myClass
        };
    };
    //deep hook for syncing matrix2d with geometry 
    foNode.prototype.initialize = function (x, y, ang) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (ang === void 0) { ang = Number.NaN; }
        return this;
    };
    foNode.prototype.addAsSubcomponent = function (parent, properties) {
        parent.addSubcomponent(this, properties);
        return this;
    };
    foNode.prototype.removeFromParent = function () {
        var parent = (this.myParent && this.myParent());
        parent && parent.removeSubcomponent(this);
        this.myParent = undefined;
        return this;
    };
    //todo modify api to take both item and array
    foNode.prototype.addSubcomponent = function (obj, properties) {
        var _this = this;
        if (!obj)
            return;
        var parent = obj.myParent && obj.myParent();
        if (!parent) {
            obj.myParent = function () { return _this; };
            properties && obj.override(properties);
        }
        obj._index = this._subcomponents.length;
        obj._childDepth = this._childDepth + 1;
        this._subcomponents.addMember(obj);
        return obj;
    };
    foNode.prototype.removeSubcomponent = function (obj) {
        if (!obj)
            return;
        var parent = this.myParent && this.myParent();
        if (parent == this) {
            obj.myParent = undefined;
        }
        obj._index = -1;
        obj._childDepth = 0;
        this._subcomponents.removeMember(obj);
        return obj;
    };
    Object.defineProperty(foNode.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "childDepth", {
        get: function () {
            return this._childDepth;
        },
        enumerable: true,
        configurable: true
    });
    foNode.prototype.getChildAt = function (i) {
        return this.hasSubcomponents && this._subcomponents.getMember(i);
    };
    Object.defineProperty(foNode.prototype, "prevChild", {
        get: function () {
            var prev = this.index - 1;
            var parent = this.myParent && this.myParent();
            if (parent && prev > -1) {
                var found = parent.getChildAt(prev);
                return found;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "nextChild", {
        get: function () {
            var next = this.index + 1;
            var parent = this.myParent && this.myParent();
            if (parent && next < this._subcomponents.length) {
                var found = parent.getChildAt(next);
                return found;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "Subcomponents", {
        get: function () {
            return this.nodes.members;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "nodes", {
        get: function () {
            return this._subcomponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "hasSubcomponents", {
        get: function () {
            var list = this.nodes;
            return list && list.hasMembers;
        },
        enumerable: true,
        configurable: true
    });
    return foNode;
}(__WEBPACK_IMPORTED_MODULE_0__foObject_model__["a" /* foObject */]));


__WEBPACK_IMPORTED_MODULE_2__foRuntimeType__["a" /* RuntimeType */].define(foNode);


/***/ }),

/***/ "../../../../../src/app/foundry/foObject.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");

//import { setTimeout } from 'timers';
var foObject = (function () {
    function foObject(properties, parent) {
        this.myName = 'unknown';
        if (parent) {
            this.myParent = function () { return parent; };
        }
        this.override(properties);
    }
    foObject.beep = function () {
        var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
        snd.play();
    };
    foObject.jsonAlert = function (obj) {
        alert(JSON.stringify(obj, undefined, 3));
    };
    Object.defineProperty(foObject.prototype, "myType", {
        //https://www.npmjs.com/package/reflect-metadata
        //https://stackoverflow.com/questions/13613524/get-an-objects-class-name-at-runtime-in-typescript
        get: function () {
            var comp = this.constructor;
            return comp.name;
        },
        set: function (ignore) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foObject.prototype, "myGuid", {
        get: function () {
            if (!this._myGuid) {
                this._myGuid = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].generateUUID();
            }
            return this._myGuid;
        },
        set: function (value) {
            if (!this._myGuid) {
                this._myGuid = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    foObject.prototype.asReference = function () {
        var parent = this.myParent && this.myParent();
        if (!parent) {
            return "root";
        }
        return this.myName + "." + parent.asReference();
    };
    foObject.prototype.then = function (next) {
        next(this);
        return this;
    };
    foObject.prototype.hasAncestor = function (member) {
        if (member === this)
            return true;
        var parent = this.myParent && this.myParent();
        if (member === parent)
            return true;
        return parent && parent.hasAncestor(member);
    };
    Object.defineProperty(foObject.prototype, "hasParent", {
        get: function () {
            var parent = this.myParent && this.myParent();
            return parent ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    foObject.prototype.removeParent = function (parent) {
        if (this.hasParent && this.myParent() == parent) {
            this.myParent = undefined;
        }
        return this.hasParent;
    };
    foObject.prototype.notifyOnChange = function (source, channel) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
    };
    foObject.prototype.wait = function (time, func) {
        setTimeout(func, time);
        return this;
    };
    foObject.prototype.getChildAt = function (i) {
        return undefined;
    };
    foObject.prototype.override = function (properties) {
        properties && __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].overrideComputed(this, properties);
        return this;
    };
    foObject.prototype.extend = function (properties) {
        properties && __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].extendComputed(this, properties);
        return this;
    };
    foObject.prototype.getMethodList = function () {
        //consider moveing this code to baseobject
        function getAllMethods(object) {
            return Object.getOwnPropertyNames(object).filter(function (property) {
                return typeof object[property] == 'function';
            });
        }
        var names = getAllMethods(this);
        var self = this;
        var obj1 = {};
        names.forEach(function (item) {
            obj1[item] = self[item](); //evaluate all methods
        });
        return names;
    };
    Object.defineProperty(foObject.prototype, "debug", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].stringify(this);
            //return JSON.stringify(this,undefined,3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foObject.prototype, "asJson", {
        get: function () {
            var data = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].stringify(this);
            return JSON.parse(data);
        },
        enumerable: true,
        configurable: true
    });
    foObject.prototype.jsonMerge = function (source) {
        var result = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].asJson(this);
        if (!__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isEmpty(source)) {
            __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(source, function (key, value) {
                if (!result[key] && !__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isEmpty(value)) {
                    var json = value && value.asJson;
                    result[key] = json ? json : value;
                }
            });
        }
        return result;
    };
    return foObject;
}());



/***/ }),

/***/ "../../../../../src/app/foundry/foPage.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foDictionary_model__ = __webpack_require__("../../../../../src/app/foundry/foDictionary.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foMatrix2D__ = __webpack_require__("../../../../../src/app/foundry/foMatrix2D.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





//a Shape is a graphic designed to behave like a visio shape
//and have all the same properties
var foPage = (function (_super) {
    __extends(foPage, _super);
    function foPage(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.gridSizeX = 50;
        _this.gridSizeY = 50;
        _this.showBoundry = false;
        _this.pinX = function () { return 0 * _this.width; };
        _this.pinY = function () { return 0 * _this.height; };
        _this.rotation = function () { return _this.angle; };
        _this.mouseLoc = {};
        _this._dictionary = new __WEBPACK_IMPORTED_MODULE_2__foundry_foDictionary_model__["a" /* foDictionary */]();
        _this.onMouseLocationChanged = function (loc, state, keys) {
            _this.mouseLoc = loc;
            _this.mouseLoc.state = state;
            _this.mouseLoc.keys = keys;
        };
        _this.onItemChangedParent = function (shape) {
        };
        _this.onItemChangedPosition = function (shape) {
        };
        _this.onItemOverlapEnter = function (loc, shape, shapeUnder, keys) {
        };
        _this.onItemOverlapExit = function (loc, shape, shapeUnder, keys) {
        };
        _this.onItemHoverEnter = function (loc, shape, keys) {
        };
        _this.onItemHoverExit = function (loc, shape, keys) {
        };
        _this.onHandleHoverEnter = function (loc, handle, keys) {
        };
        _this.onHandleMoving = function (loc, handle, keys) {
        };
        _this.onHandleHoverExit = function (loc, handle, keys) {
        };
        _this.onTrackHandles = function (loc, handles, keys) {
        };
        _this.afterRender = function (ctx, deep) {
            if (deep === void 0) { deep = true; }
            ctx.save();
            deep && _this.nodes.forEach(function (item) {
                item.afterRender(ctx, deep);
            });
            ctx.restore();
        };
        _this.preDraw = function (ctx) {
            //ctx.fillStyle = this.color;
            //ctx.fillRect(0, 0, this.pageWidth, this.pageHeight);
        };
        _this.draw = function (ctx) {
            _this.drawGrid(ctx);
            _this.drawAxis(ctx);
            _this.drawPage(ctx);
            _this.drawPin(ctx);
        };
        _this.color = 'Linen';
        _this.x = _this.y = 100;
        _this.setupMouseEvents();
        return _this;
    }
    Object.defineProperty(foPage.prototype, "marginX", {
        get: function () { return this._marginX || 0.0; },
        set: function (value) {
            this.smash();
            this._marginX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foPage.prototype, "marginY", {
        get: function () { return this._marginY || 0.0; },
        set: function (value) {
            this.smash();
            this._marginY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foPage.prototype, "scaleX", {
        get: function () { return this._scaleX || 1.0; },
        set: function (value) {
            this.smash();
            this._scaleX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foPage.prototype, "scaleY", {
        get: function () { return this._scaleY || 1.0; },
        set: function (value) {
            this.smash();
            this._scaleY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foPage.prototype, "centerX", {
        //this is used to drop shapes
        get: function () { return this.width / 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foPage.prototype, "centerY", {
        get: function () { return this.height / 2; },
        enumerable: true,
        configurable: true
    });
    foPage.prototype.findItem = function (key, onMissing, onFound) {
        return this._dictionary.findItem(key, onMissing, onFound);
    };
    foPage.prototype.found = function (key, onFound, onMissing) {
        return this._dictionary.found(key, onFound, onMissing);
    };
    foPage.prototype.getMatrix = function () {
        if (this._matrix === undefined) {
            this._matrix = new __WEBPACK_IMPORTED_MODULE_3__foundry_foMatrix2D__["a" /* Matrix2D */]();
            this._matrix.appendTransform(this.marginX + this.x, this.marginY + this.y, this.scaleX, this.scaleY, this.rotation(), 0, 0, this.pinX(), this.pinY());
        }
        return this._matrix;
    };
    ;
    foPage.prototype.findHitShape = function (hit, deep, exclude) {
        if (deep === void 0) { deep = true; }
        if (exclude === void 0) { exclude = null; }
        var found = undefined;
        for (var i = 0; i < this.nodes.length; i++) {
            var shape = this.nodes.getMember(i);
            if (shape == exclude)
                continue;
            found = shape.findObjectUnderPoint(hit, deep, this._ctx);
            if (found)
                return found;
        }
    };
    foPage.prototype.findShapeUnder = function (source, deep, exclude) {
        if (deep === void 0) { deep = true; }
        if (exclude === void 0) { exclude = null; }
        var frame = source.boundryFrame;
        for (var i = 0; i < this.nodes.length; i++) {
            var shape = this.nodes.getMember(i);
            if (source.hasAncestor(shape) || shape == exclude)
                continue;
            if (shape.findObjectUnderFrame(source, frame, deep, this._ctx)) {
                return shape;
            }
        }
    };
    foPage.prototype.addSubcomponent = function (obj, properties) {
        var _this = this;
        var guid = obj.myGuid;
        this._dictionary.findItem(guid, function () {
            _this._dictionary.addItem(guid, obj);
            _super.prototype.addSubcomponent.call(_this, obj, properties);
        });
        return obj;
    };
    foPage.prototype.removeSubcomponent = function (obj) {
        var _this = this;
        var guid = obj.myGuid;
        this._dictionary.found(guid, function () {
            obj.isSelected = false;
            _this._dictionary.removeItem(guid);
            _super.prototype.removeSubcomponent.call(_this, obj);
        });
        return obj;
    };
    foPage.prototype.clearAll = function () {
        this._subcomponents.clearAll();
        this._dictionary.clearAll();
    };
    foPage.prototype.deleteSelected = function (onComplete) {
        var found = this._subcomponents.filter(function (item) { return item.isSelected; })[0];
        if (found) {
            this.removeSubcomponent(found);
            onComplete && onComplete(found);
        }
    };
    foPage.prototype.zoomBy = function (zoom) {
        this.scaleX *= zoom;
        this.scaleY *= zoom;
    };
    foPage.prototype.zoomToCenter = function (g, zoom, e) {
        //you need to track this position in global space
        //so you can return it to the same location on the screen
        var pt1 = this.globalToLocalPoint(g);
        this.zoomBy(zoom);
        //page.updatePIP();
        //once the zoom is applied, measure where the global point has moved to
        //then pan back so it is in the center...
        var pt2 = this.localToGlobal(pt1.x, pt1.y);
        this.x += pt1.x - pt2.x;
        this.y += pt1.y - pt2.y;
        //console.log(pt2.x, pt2.y)
        //page.updatePIP();
    };
    foPage.prototype.setupMouseEvents = function () {
        var _this = this;
        var shape = null;
        var shapeUnder = null;
        var hovershape = null;
        var offset = null;
        var handles = new __WEBPACK_IMPORTED_MODULE_1__foundry_foCollection_model__["a" /* foCollection */]();
        var grab = null;
        var float = null;
        function findHandle(loc) {
            for (var i = 0; i < handles.length; i++) {
                var handle = handles.getChildAt(i);
                if (handle.hitTest(loc)) {
                    return handle;
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Sub('mousedown', function (loc, e, keys) {
            loc.add(_this.marginX, _this.marginY);
            _this.onMouseLocationChanged(loc, "down", keys);
            grab = findHandle(loc);
            if (grab) {
                offset = grab.getOffset(loc);
                return;
            }
            if (!keys.shift) {
                grab = null;
                handles.clearAll();
                _this._subcomponents.forEach(function (item) {
                    item.unSelect();
                });
            }
            shape = _this.findHitShape(loc);
            if (shape) {
                _this._subcomponents.moveToTop(shape);
                shape.isSelected = true;
                offset = shape.getOffset(loc);
                handles.copyMembers(shape.handles);
            }
        });
        __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Sub('mousemove', function (loc, e, keys) {
            if (findHandle(loc) && handles.length) {
                //this.onHandleMoving(loc, handles.first(), keys);
                _this.onTrackHandles(loc, handles, keys);
            }
            handles.forEach(function (handle) {
                handle.color = handle.hitTest(loc) ? 'yellow' : 'black';
            });
            if (grab) {
                _this.onHandleMoving(loc, grab, keys);
                grab.moveTo(loc, offset);
            }
            else if (shape) {
                _this.onMouseLocationChanged(loc, "move", keys);
                shape.moveTo(loc, offset);
                if (keys.ctrl) {
                    var found = _this.findShapeUnder(shape);
                    if (found && found == shapeUnder) {
                        _this.onItemOverlapEnter(loc, shape, shapeUnder, keys);
                    }
                    else if (found) {
                        shapeUnder && _this.onItemOverlapExit(loc, shape, shapeUnder, keys);
                        shapeUnder = found;
                        _this.onItemOverlapEnter(loc, shape, shapeUnder, keys);
                    }
                    else if (shapeUnder) {
                        _this.onItemOverlapExit(loc, shape, shapeUnder, keys);
                        shapeUnder = null;
                    }
                }
                else {
                    shapeUnder && _this.onItemOverlapExit(loc, shape, shapeUnder, keys);
                    shapeUnder = null;
                }
            }
            else {
                _this.onMouseLocationChanged(loc, "hover", keys);
                loc.add(_this.marginX, _this.marginY);
                var found = _this.findHitShape(loc);
                if (found && found == hovershape) {
                    _this.onItemHoverEnter(loc, hovershape);
                }
                else if (found) {
                    hovershape && _this.onItemHoverExit(loc, hovershape);
                    hovershape = found;
                    _this.onItemHoverEnter(loc, hovershape);
                }
                else if (hovershape) {
                    _this.onItemHoverExit(loc, hovershape);
                    grab && _this.onHandleHoverExit(loc, grab, keys);
                    hovershape = undefined;
                    grab = undefined;
                }
                var handle = findHandle(loc);
                if (handle && handle == float) {
                    float = handle;
                    _this.onHandleHoverEnter(loc, handle, keys);
                }
                else if (handle) {
                    float && _this.onHandleHoverExit(loc, float, keys);
                    float = handle;
                    _this.onHandleHoverEnter(loc, float, keys);
                }
                else if (float) {
                    _this.onHandleHoverExit(loc, handle, keys);
                    float = null;
                }
            }
        });
        __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Sub('mouseup', function (loc, e, keys) {
            grab = null;
            _this.onMouseLocationChanged(loc, "up", keys);
            if (!shape)
                return;
            _this._subcomponents.moveToTop(shape);
            if (shapeUnder && keys.ctrl) {
                //foObject.beep();
                var _a = shape.getLocation(), x = _a.x, y = _a.y;
                var drop = shapeUnder.globalToLocal(x, y);
                shapeUnder.addSubcomponent(shape.removeFromParent());
                shape.easeTo(drop.x, drop.y);
                //shape.easeTo(0, 0);
                shapeUnder = null;
                _this.onItemChangedParent(shape);
            }
            else {
                _this.onItemChangedPosition(shape);
            }
            if (shape.myParent() != _this && keys.ctrl) {
                //foObject.beep();
                var _b = shape.pinLocation(), x = _b.x, y = _b.y;
                var drop = shape.localToGlobal(x, y);
                _this.addSubcomponent(shape.removeFromParent());
                shape.easeTo(drop.x, drop.y);
                _this.onItemChangedParent(shape);
            }
            shape = shapeUnder = null;
        });
        __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Sub('wheel', function (loc, g, zoom, e, keys) {
            _this.onMouseLocationChanged(loc, "wheel", keys);
            if (keys.shift && keys.ctrl) {
                _this.zoomToCenter(g, zoom, e);
            }
        });
    };
    foPage.prototype.drawGrid = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5, 1]);
        ctx.strokeStyle = 'gray';
        var left = this.marginX - this.x;
        var top = this.marginY - this.y;
        var width = this.width / this.scaleX;
        var height = this.height / this.scaleY;
        var right = left + width;
        var bottom = top + height;
        //ctx.fillStyle = 'yellow';
        //ctx.fillRect(left,top, width, height);
        //draw vertical...
        var x = this.gridSizeX; //left;
        while (x < right) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
            x += this.gridSizeX;
        }
        x = -this.gridSizeX; //left;
        while (x > left) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
            x -= this.gridSizeX;
        }
        //draw horizontal...
        var y = this.gridSizeY; //top;
        while (y < bottom) {
            ctx.moveTo(left, y);
            ctx.lineTo(right, y);
            y += this.gridSizeY;
        }
        y = -this.gridSizeY; //top;
        while (y > top) {
            ctx.moveTo(left, y);
            ctx.lineTo(right, y);
            y -= this.gridSizeY;
        }
        ctx.stroke();
        ctx.restore();
    };
    foPage.prototype.drawAxis = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        var left = this.marginX - this.x;
        var top = this.marginY - this.y;
        var width = this.width / this.scaleX;
        var height = this.height / this.scaleY;
        var right = left + width;
        var bottom = top + height;
        //draw vertical...
        ctx.moveTo(0, top);
        ctx.lineTo(0, bottom);
        //draw horizontal...
        ctx.moveTo(left, 0);
        ctx.lineTo(right, 0);
        ctx.stroke();
        ctx.restore();
    };
    foPage.prototype.drawPage = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        var left = this.marginX - this.x;
        var top = this.marginY - this.y;
        var width = this.width / this.scaleX;
        var height = this.height / this.scaleY;
        var right = left + width;
        var bottom = top + height;
        //draw vertical...
        ctx.rect(0, 0, this.width, this.height);
        ctx.stroke();
        ctx.restore();
    };
    Object.defineProperty(foPage.prototype, "boundryFrame", {
        get: function () {
            var frame = this.nodes.first().boundryFrame;
            this.nodes.forEach(function (item) {
                frame.merge(item.boundryFrame);
            });
            return frame;
        },
        enumerable: true,
        configurable: true
    });
    foPage.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        this._ctx = ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.save();
        this.updateContext(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        //this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        deep && this._subcomponents.forEach(function (item) {
            item.render(ctx, deep);
        });
        ctx.restore();
        this.showBoundry && this.afterRender(ctx);
    };
    return foPage;
}(__WEBPACK_IMPORTED_MODULE_4__foundry_foShape2D_model__["a" /* foShape2D */]));



/***/ }),

/***/ "../../../../../src/app/foundry/foPubSub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSub; });

var foPubSub = (function () {
    function foPubSub() {
        this.registry = {};
        this.Pub = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!this.registry[name])
                return;
            this.registry[name].forEach(function (x) {
                x.apply(null, args);
            });
        };
        this.Sub = function (name, fn) {
            if (!this.registry[name]) {
                this.registry[name] = [fn];
            }
            else {
                this.registry[name].push(fn);
            }
        };
        this.Unsub = function (name, fn) {
            if (this.registry[name]) {
                delete this.registry[name];
            }
        };
    }
    return foPubSub;
}());
var PubSub = new foPubSub();


/***/ }),

/***/ "../../../../../src/app/foundry/foRuntimeType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimeType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");

var RuntimeType = (function () {
    function RuntimeType() {
    }
    RuntimeType.primitives = function () {
        return Object.keys(this.modelPrimitives);
    };
    RuntimeType.metaPrimitives = function () {
        return Object.keys(this.knowledgePrimitives);
    };
    RuntimeType.newInstance = function (type, properties) {
        var create = this.modelPrimitives[type];
        var instance = this.create(create, properties);
        return instance;
    };
    RuntimeType.define = function (type) {
        var name = type.name;
        this.modelPrimitives[name] = type;
        __WEBPACK_IMPORTED_MODULE_0__foPubSub__["a" /* PubSub */].Pub('onRuntimeTypeChanged', name);
        return type;
    };
    RuntimeType.create = function (type, properties) {
        var instance = new type(properties);
        return instance;
    };
    RuntimeType.establish = function (type, properties) {
        var instance = new type(properties);
        return instance;
    };
    RuntimeType.knowledge = function (type) {
        var name = type.name;
        this.knowledgePrimitives[name] = type;
        __WEBPACK_IMPORTED_MODULE_0__foPubSub__["a" /* PubSub */].Pub('onKnowledgeChanged', name);
        return type;
    };
    RuntimeType.modelPrimitives = {};
    RuntimeType.knowledgePrimitives = {};
    return RuntimeType;
}());



/***/ }),

/***/ "../../../../../src/app/foundry/foShape1D.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foShape1D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foMatrix2D__ = __webpack_require__("../../../../../src/app/foundry/foMatrix2D.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foGlyph_model__ = __webpack_require__("../../../../../src/app/foundry/foGlyph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





//a Shape is a graphic designed to behave like a visio shape
//and have all the same properties
var foShape1D = (function (_super) {
    __extends(foShape1D, _super);
    function foShape1D(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.pinX = function () { return 0.5 * _this.width; };
        _this.pinY = function () { return 0.5 * _this.height; };
        _this.rotation = function () { return _this.angle; };
        _this.begin = function (name) {
            return new __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__["c" /* cPoint */](_this.startX, _this.startY, name);
        };
        _this.end = function (name) {
            return new __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__["c" /* cPoint */](_this.finishX, _this.finishY, name);
        };
        _this.center = function (name) {
            return new __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__["c" /* cPoint */]((_this.startX + _this.finishX) / 2, (_this.startY + _this.finishY) / 2, name);
        };
        _this.localHitTest = function (hit) {
            var loc = _this.globalToLocal(hit.x, hit.y);
            if (loc.x < 0)
                return false;
            if (loc.x > _this.width)
                return false;
            var size = _this.height / 2;
            if (loc.y < -size)
                return false;
            if (loc.y > size)
                return false;
            return true;
        };
        _this.hitTest = function (hit, ctx) {
            return _this.localHitTest(hit);
        };
        _this.drawSelected = function (ctx) {
            ctx.strokeStyle = "red";
            ctx.fillStyle = 'red';
            ctx.lineWidth = 2 * (_this.thickness || 4);
            _this.drawOutline(ctx);
            _this.drawHandles(ctx);
            _this.drawPin(ctx);
        };
        _this.draw = function (ctx) {
            var _a = _this.globalToLocalPoint(_this.begin()), x1 = _a.x, y1 = _a.y;
            var _b = _this.globalToLocalPoint(_this.end()), x2 = _b.x, y2 = _b.y;
            ctx.fillStyle = _this.color;
            ctx.strokeStyle = _this.color;
            //ctx.fillStyle = 'green';
            //ctx.fillRect(0, 0, this.width, this.height);
            ctx.lineWidth = _this.thickness || 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        };
        return _this;
    }
    Object.defineProperty(foShape1D.prototype, "startX", {
        get: function () { return this._x1 || 0.0; },
        set: function (value) {
            this.smash();
            this._x1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape1D.prototype, "startY", {
        get: function () { return this._y1 || 0.0; },
        set: function (value) {
            this.smash();
            this._y1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape1D.prototype, "finishX", {
        get: function () { return this._x2 || 0.0; },
        set: function (value) {
            this.smash();
            this._x2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape1D.prototype, "finishY", {
        get: function () { return this._y2 || 0.0; },
        set: function (value) {
            this.smash();
            this._y2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape1D.prototype, "width", {
        get: function () {
            var _a = this.angleDistance(), angle = _a.angle, length = _a.length;
            return this._width || length;
        },
        set: function (value) { this._width = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape1D.prototype, "height", {
        get: function () { return this._height || 0.0; },
        set: function (value) { this._height = value; },
        enumerable: true,
        configurable: true
    });
    foShape1D.prototype.toJson = function () {
        return __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].mixin(_super.prototype.toJson.call(this), {
            startX: this.startX,
            startY: this.startY,
            finishX: this.finishX,
            finishY: this.finishY,
        });
    };
    foShape1D.prototype.setStart = function (point) {
        this.startX = point.x;
        this.startY = point.y;
        var _a = this.center(), cX = _a.x, cY = _a.y;
        this.x = cX;
        this.y = cY;
    };
    foShape1D.prototype.setFinish = function (point) {
        this.finishX = point.x;
        this.finishY = point.y;
        var _a = this.center(), cX = _a.x, cY = _a.y;
        this.x = cX;
        this.y = cY;
    };
    foShape1D.prototype.notifyOnChange = function (source, channel) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        switch (channel) {
            case 'drop':
                var name_1 = source.myName;
                var pt = args[0];
                if (name_1 == 'begin') {
                    this.setStart(pt);
                }
                if (name_1 == 'end') {
                    this.setFinish(pt);
                }
                break;
        }
    };
    foShape1D.prototype.angleDistance = function () {
        var _a = this.begin(), x1 = _a.x, y1 = _a.y;
        var _b = this.end(), x2 = _b.x, y2 = _b.y;
        var dX = x2 - x1;
        var dY = y2 - y1;
        return {
            angle: __WEBPACK_IMPORTED_MODULE_4__foundry_foGlyph_model__["a" /* foGlyph */].RAD_TO_DEG * Math.atan2(dY, dX),
            length: Math.sqrt(dX * dX + dY * dY),
            cX: (x2 + x1) / 2,
            cY: (y2 + y1) / 2,
        };
    };
    foShape1D.prototype.glueStart = function (target, handle) {
        return this.createGlue('begin', target, handle);
    };
    foShape1D.prototype.glueFinish = function (target, handle) {
        return this.createGlue('end', target, handle);
    };
    foShape1D.prototype.initialize = function (x, y, ang) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (ang === void 0) { ang = Number.NaN; }
        var _a = this.center(), cX = _a.x, cY = _a.y;
        this.x = Number.isNaN(x) ? cX : x;
        this.y = Number.isNaN(y) ? cY : y;
        var mtx = new __WEBPACK_IMPORTED_MODULE_2__foundry_foMatrix2D__["a" /* Matrix2D */]();
        mtx.appendTransform(this.x, this.y, 1, 1, ang + this.rotation(), 0, 0, cX, cY);
        var start = mtx.transformPoint(this.startX, this.startY);
        var finish = mtx.transformPoint(this.finishX, this.finishY);
        this.startX = start.x;
        this.startY = start.y;
        this.finishX = finish.x;
        this.finishY = finish.y;
        return this;
    };
    foShape1D.prototype.drop = function (x, y, ang) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (ang === void 0) { ang = Number.NaN; }
        var angle = Number.isNaN(ang) ? 0 : ang;
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            this.initialize(x, y, angle);
        }
        return this;
    };
    foShape1D.prototype.updateContext = function (ctx) {
        var mtx = this.getMatrix();
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        ctx.globalAlpha *= this.opacity;
    };
    ;
    foShape1D.prototype.getMatrix = function () {
        if (this._matrix === undefined) {
            this._matrix = new __WEBPACK_IMPORTED_MODULE_2__foundry_foMatrix2D__["a" /* Matrix2D */]();
            var angle = this.angleDistance().angle;
            this._matrix.appendTransform(this.x, this.y, 1, 1, angle + this.rotation(), 0, 0, this.pinX(), this.pinY());
        }
        return this._matrix;
    };
    ;
    foShape1D.prototype.drawEnd = function (ctx) {
        var _a = this.globalToLocalPoint(this.end()), x = _a.x, y = _a.y;
        var size = 10;
        ctx.save();
        ctx.beginPath();
        //ctx.setLineDash([5, 5]);
        ctx.moveTo(x - size, y);
        ctx.lineTo(x + size, y);
        ctx.moveTo(x, y - size);
        ctx.lineTo(x, y + size);
        ctx.lineWidth = 2;
        //ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.restore();
    };
    foShape1D.prototype.drawStart = function (ctx) {
        var _a = this.globalToLocalPoint(this.begin()), x = _a.x, y = _a.y;
        var size = 10;
        ctx.save();
        ctx.beginPath();
        //ctx.setLineDash([5, 5]);
        ctx.moveTo(x - size, y - size);
        ctx.lineTo(x + size, y + size);
        ctx.moveTo(x + size, y - size);
        ctx.lineTo(x - size, y + size);
        ctx.lineWidth = 2;
        //ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.restore();
    };
    foShape1D.prototype.createHandles = function () {
        var begin = this.globalToLocalPoint(this.begin('start'));
        var center = this.globalToLocalPoint(this.center('center'));
        var end = this.globalToLocalPoint(this.end('end'));
        var spec = [begin, center, end];
        return this.generateHandles(spec);
    };
    foShape1D.prototype.moveHandle = function (handle, loc) {
        switch (handle.myName) {
            case 'start':
                this.setStart(loc);
                break;
            case 'end':
                this.setFinish(loc);
                break;
            case 'center':
                this.moveTo(loc);
                break;
        }
    };
    //same as Shape1D
    foShape1D.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        ctx.save();
        //this.drawOrigin(ctx);
        this.updateContext(ctx);
        //this.drawOriginX(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        this.isSelected && this.drawSelected(ctx);
        deep && this._subcomponents.forEach(function (item) {
            item.render(ctx, deep);
        });
        ctx.restore();
    };
    foShape1D.prototype.drawOutline = function (ctx) {
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        //ctx.fillRect(0, 0, this.width, this.height);
        ctx.lineWidth = this.thickness || 4;
        //ctx.strokeStyle = '#003300';
        var _a = this.globalToLocalPoint(this.begin()), x1 = _a.x, y1 = _a.y;
        var _b = this.globalToLocalPoint(this.end()), x2 = _b.x, y2 = _b.y;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        //this.drawStart(ctx);
        //this.drawEnd(ctx);
    };
    foShape1D.prototype.drawHandles = function (ctx) {
        this.createHandles();
        _super.prototype.drawHandles.call(this, ctx);
    };
    return foShape1D;
}(__WEBPACK_IMPORTED_MODULE_3__foundry_foShape2D_model__["a" /* foShape2D */]));


__WEBPACK_IMPORTED_MODULE_5__foRuntimeType__["a" /* RuntimeType */].define(foShape1D);


/***/ }),

/***/ "../../../../../src/app/foundry/foShape2D.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foShape2D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foMatrix2D__ = __webpack_require__("../../../../../src/app/foundry/foMatrix2D.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foGlue__ = __webpack_require__("../../../../../src/app/foundry/foGlue.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundry_foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foGlyph_model__ = __webpack_require__("../../../../../src/app/foundry/foGlyph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





//a Shape is a graphic designed to behave like a visio shape
//and have all the same properties
var foShape2D = (function (_super) {
    __extends(foShape2D, _super);
    function foShape2D(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.pinX = function () { return 0.5 * _this.width; };
        _this.pinY = function () { return 0.5 * _this.height; };
        _this.rotation = function () { return _this.angle; };
        _this.localHitTest = function (hit) {
            var loc = _this.globalToLocal(hit.x, hit.y);
            if (loc.x < 0)
                return false;
            if (loc.x > _this.width)
                return false;
            if (loc.y < 0)
                return false;
            if (loc.y > _this.height)
                return false;
            return true;
        };
        _this.hitTest = function (hit, ctx) {
            return _this.localHitTest(hit);
        };
        _this.overlapTest = function (hit, ctx) {
            var frame = _this.globalToLocalFrame(hit.x1, hit.y1, hit.x2, hit.y2);
            if (_this.localContains(frame.x1, frame.y1))
                return true;
            if (_this.localContains(frame.x1, frame.y2))
                return true;
            if (_this.localContains(frame.x2, frame.y1))
                return true;
            if (_this.localContains(frame.x2, frame.y2))
                return true;
            return false;
        };
        _this.drawSelected = function (ctx) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 4;
            _this.drawOutline(ctx);
            _this.drawHandles(ctx);
            _this.drawPin(ctx);
        };
        _this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = _this.opacity;
            ctx.fillRect(0, 0, _this.width, _this.height);
        };
        return _this;
    }
    Object.defineProperty(foShape2D.prototype, "angle", {
        get: function () { return this._angle || 0.0; },
        set: function (value) {
            this.smash();
            this._angle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape2D.prototype, "glue", {
        get: function () { return this._glue; },
        enumerable: true,
        configurable: true
    });
    foShape2D.prototype.toJson = function () {
        return __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].mixin(_super.prototype.toJson.call(this), {
            angle: this.angle
        });
    };
    foShape2D.prototype.notifyOnChange = function (source, channel) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
    };
    foShape2D.prototype.notifySource = function (channel) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._glue && this._glue.forEach(function (item) {
            (_a = item.mySource()).notifyOnChange.apply(_a, [item, channel].concat(args));
            var _a;
        });
    };
    foShape2D.prototype.notifyTarget = function (channel) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._glue && this._glue.forEach(function (item) {
            (_a = item.myTarget()).notifyOnChange.apply(_a, [item, channel].concat(args));
            var _a;
        });
    };
    foShape2D.prototype.drop = function (x, y, angle) {
        if (x === void 0) { x = Number.NaN; }
        if (y === void 0) { y = Number.NaN; }
        if (angle === void 0) { angle = Number.NaN; }
        if (!Number.isNaN(x))
            this.x = x;
        if (!Number.isNaN(y))
            this.y = y;
        if (!Number.isNaN(angle))
            this.angle = angle;
        this.notifySource('drop', this.getLocation());
        return this;
    };
    foShape2D.prototype.updateContext = function (ctx) {
        var mtx = this.getMatrix();
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        ctx.globalAlpha *= this.opacity;
    };
    ;
    foShape2D.prototype.getMatrix = function () {
        if (this._matrix === undefined) {
            this._matrix = new __WEBPACK_IMPORTED_MODULE_1__foundry_foMatrix2D__["a" /* Matrix2D */]();
            this._matrix.appendTransform(this.x, this.y, 1, 1, this.rotation(), 0, 0, this.pinX(), this.pinY());
        }
        return this._matrix;
    };
    ;
    foShape2D.prototype.pinLocation = function () {
        return {
            x: this.pinX(),
            y: this.pinY()
        };
    };
    foShape2D.prototype.moveHandle = function (handle, loc) {
        var pt = handle.localToGlobal(0, 0).subtract(loc.x, loc.y);
        //this.growSize(pt.x, pt.y)
        switch (handle.myName) {
            case '0:0':
                break;
            case 'W:0':
                break;
            case 'W:H':
                break;
            case '0:H':
                break;
        }
    };
    foShape2D.prototype.createGlue = function (name, target, handle) {
        var glue = this.addGlue(new __WEBPACK_IMPORTED_MODULE_2__foundry_foGlue__["a" /* foGlue */]({ myName: name }));
        glue.glueTo(target, handle);
        target.addGlue(glue);
        return glue;
    };
    foShape2D.prototype.addGlue = function (glue) {
        var _this = this;
        if (!this._glue) {
            this._glue = new __WEBPACK_IMPORTED_MODULE_3__foundry_foCollection_model__["a" /* foCollection */]();
        }
        this._glue.addMember(glue);
        if (!glue.hasParent) {
            glue.myParent = function () { return _this; };
        }
        return glue;
    };
    foShape2D.prototype.removeGlue = function (glue) {
        if (this._glue) {
            this._glue.removeMember(glue);
            glue.removeParent(this);
        }
        return glue;
    };
    foShape2D.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        ctx.save();
        //this.drawOrigin(ctx);
        this.updateContext(ctx);
        //this.drawOriginX(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        this.isSelected && this.drawSelected(ctx);
        deep && this._subcomponents.forEach(function (item) {
            item.render(ctx, deep);
        });
        ctx.restore();
    };
    foShape2D.prototype.drawOutline = function (ctx) {
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        ctx.rect(0, 0, this.width, this.height);
        ctx.stroke();
    };
    return foShape2D;
}(__WEBPACK_IMPORTED_MODULE_4__foundry_foGlyph_model__["a" /* foGlyph */]));


__WEBPACK_IMPORTED_MODULE_5__foRuntimeType__["a" /* RuntimeType */].define(foShape2D);


/***/ }),

/***/ "../../../../../src/app/foundry/foStencil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export foStencilSpec */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return foStencilItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stencil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");



var foStencilSpec = (function () {
    function foStencilSpec(name, type, inits, subs) {
        this.commands = new Array();
        this.myName = name;
        this.myType = type.name;
        this.primitive = type;
        this.properties = inits;
        this.subcomponents = subs;
    }
    foStencilSpec.prototype.newInstance = function (properties, subcomponents) {
        var spec = __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].union(properties, this.properties);
        var instance = new this.primitive(spec);
        instance.myClass = this.myName;
        return instance;
    };
    foStencilSpec.prototype.addCommands = function () {
        var cmds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cmds[_i] = arguments[_i];
        }
        this.commands && (_a = this.commands).push.apply(_a, cmds);
        return this;
        var _a;
    };
    foStencilSpec.prototype.getCommands = function () {
        return this.commands;
    };
    return foStencilSpec;
}());

var foStencilItem = (function () {
    function foStencilItem(props) {
        props && __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].mixin(this, props);
    }
    return foStencilItem;
}());

var Stencil = (function () {
    function Stencil() {
    }
    Stencil.namespaces = function () {
        return Object.keys(this.lookup);
    };
    Stencil.names = function (namespace) {
        return Object.keys(this.lookup[namespace]);
    };
    Stencil.allStencilItem = function () {
        var list = new Array();
        __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].forEachKeyValue(this.lookup, function (namespace, obj) {
            __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].forEachKeyValue(obj, function (name, spec) {
                var id = namespace + "::" + name;
                var item = new foStencilItem({
                    id: id,
                    namespace: namespace,
                    name: name,
                    spec: spec,
                });
                list.push(item);
            });
        });
        return list;
    };
    Stencil.register = function (id, item) {
        var _a = __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].splitNamespaceType(id), namespace = _a.namespace, name = _a.name;
        if (!this.lookup[namespace]) {
            this.lookup[namespace] = {};
        }
        this.lookup[namespace][name] = item;
        return item;
    };
    Stencil.find = function (id) {
        var _a = __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].splitNamespaceType(id), namespace = _a.namespace, name = _a.name;
        return this.findSpec(namespace, name);
    };
    Stencil.findSpec = function (namespace, name) {
        var space = this.lookup[namespace];
        var spec = space && space[name];
        return spec;
    };
    Stencil.define = function (id, type, properties, subcomponents) {
        __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__["a" /* RuntimeType */].define(type);
        var _a = __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].splitNamespaceType(id, type.name), namespace = _a.namespace, name = _a.name;
        var spec = new foStencilSpec(__WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].namespace(namespace, name), type, properties, subcomponents);
        var result = this.register(spec.myName, spec);
        __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Pub('onStencilChanged', result);
        return result;
    };
    Stencil.create = function (id, type, properties, subcomponents, func) {
        __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__["a" /* RuntimeType */].define(type);
        var _a = __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].splitNamespaceType(id, type.name), namespace = _a.namespace, name = _a.name;
        var spec = this.findSpec(namespace, name);
        var instance = spec && spec.newInstance(properties, subcomponents);
        func && func(instance);
        return instance;
    };
    Stencil.newInstance = function (id, properties, subcomponents, func) {
        var spec = this.find(id);
        var instance = spec && spec.newInstance(properties, subcomponents);
        func && func(instance);
        return instance;
    };
    Stencil.override = function (json) {
        var myName = json.myName, myType = json.myType, properties = json.properties, subcomponents = json.subcomponents, commands = json.commands;
        var type = __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__["a" /* RuntimeType */].modelPrimitives[myType];
        if (!type) {
            throw Error('runtimeType not found ' + type);
        }
        var spec = new foStencilSpec(myName, type, properties, subcomponents);
        spec.addCommands.apply(spec, commands);
        var result = this.register(myName, spec);
        __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Pub('onStencilChanged', result);
        return result;
    };
    Stencil.lookup = {};
    return Stencil;
}());



/***/ }),

/***/ "../../../../../src/app/foundry/foText2D.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foText2D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foShape2D_model__ = __webpack_require__("../../../../../src/app/foundry/foShape2D.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foRuntimeType__ = __webpack_require__("../../../../../src/app/foundry/foRuntimeType.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// ctx.textAlign = "left" || "right" || "center" || "start" || "end";
// ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
// ctx.font = '48px serif';
// ctx.font = "20px Georgia";
// ctx.font = "italic 10pt Courier";
// ctx.font = "bold 10pt Courier";
// ctx.font = "italic bold 10pt Courier";
//a Shape is a graphic designed to behave like a visio shape
//and have all the same properties
var foText2D = (function (_super) {
    __extends(foText2D, _super);
    function foText2D(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.pinX = function () { return 0.5 * _this.width; };
        _this.pinY = function () { return 0.5 * _this.height; };
        _this.drawSelected = function (ctx) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 1;
            _this.drawOutline(ctx);
            //this.drawHandles(ctx);
            _this.drawPin(ctx);
        };
        _this.draw = function (ctx) {
            var left = ((_this.margin && _this.margin.left) || 0);
            var top = ((_this.margin && _this.margin.top) || 0);
            ctx.save();
            if (_this.background) {
                ctx.fillStyle = _this.background;
                ctx.fillRect(0, 0, _this.width, _this.height);
            }
            ctx.restore();
            ctx.fillStyle = _this.color;
            ctx.fillText(_this.text, _this.pinX() + left, _this.pinY() + top);
        };
        _this.extend({
            text: function () {
                if (this.context && this.context.text) {
                    return this.context.text;
                }
                if (this.context && __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].isObject(this.context)) {
                    return JSON.stringify(this.context, undefined, 3);
                }
                return this.context;
            }
        });
        return _this;
    }
    Object.defineProperty(foText2D.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value;
        },
        enumerable: true,
        configurable: true
    });
    foText2D.prototype.toJson = function () {
        return __WEBPACK_IMPORTED_MODULE_0__foundry_foTools__["a" /* Tools */].mixin(_super.prototype.toJson.call(this), {
            text: this.text
        });
    };
    foText2D.prototype.render = function (ctx, deep) {
        if (deep === void 0) { deep = true; }
        ctx.save();
        ctx.textAlign = this.textAlign || 'center';
        ctx.textBaseline = this.textBaseline || 'middle';
        var size = (this.fontSize || 12);
        ctx.font = this.font || size + "px Georgia";
        var textMetrics = ctx.measureText(this.text);
        this.width = textMetrics.width + ((this.margin && this.margin.width) || 0);
        this.height = size + ((this.margin && this.margin.height) || 0);
        //this.drawOrigin(ctx);
        this.updateContext(ctx);
        //this.drawOriginX(ctx);
        this.preDraw && this.preDraw(ctx);
        this.draw(ctx);
        this.drawHover && this.drawHover(ctx);
        this.postDraw && this.postDraw(ctx);
        this.isSelected && this.drawSelected(ctx);
        deep && this._subcomponents.forEach(function (item) {
            item.render(ctx, deep);
        });
        ctx.restore();
    };
    foText2D.prototype.drawOutline = function (ctx) {
        ctx.beginPath();
        ctx.setLineDash([15, 5]);
        ctx.rect(0, 0, this.width, this.height);
        ctx.stroke();
    };
    foText2D.prototype.drawSample = function (ctx) {
        ctx.translate(-10, 25);
        ctx.scale(1.2, 0.8);
        ctx.rotate(5 * Math.PI / 180);
        var fillText = "fillText";
        var strokeText = "strokeText";
        ctx.textBaseline = "top";
        ctx.font = "32pt Arial";
        ctx.fillStyle = "orange"; // shadow color
        ctx.fillText(fillText, 22, 22);
        ctx.fillStyle = "red";
        ctx.fillText(fillText, 20, 20);
        ctx.strokeStyle = "blue";
        ctx.strokeText(strokeText, 20, 80);
    };
    //http://tutorials.jenkov.com/html5-canvas/text.html
    /// expand with color, background etc.
    foText2D.prototype.drawTextBG = function (ctx, txt, font, x, y) {
        ctx.save();
        ctx.font = font;
        /// draw text from top - makes life easier at the moment
        ctx.textBaseline = 'top';
        /// color for background
        ctx.fillStyle = '#f50';
        /// get width of text
        var width = ctx.measureText(txt).width;
        /// draw background rect assuming height of font
        ctx.fillRect(x, y, width, parseInt(font, 10));
        ctx.fillStyle = '#000';
        /// draw text on top
        ctx.fillText(txt, x, y);
        ctx.restore();
    };
    foText2D.prototype.drawMultiLineText = function (ctx, text) {
        var textMetrics = ctx.measureText(text);
        ctx.textAlign = "left" || "right" || "center" || "start" || "end";
        ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
        ctx.font = '48px serif';
        ctx.font = "20px Georgia";
        ctx.font = "italic 10pt Courier";
        ctx.font = "bold 10pt Courier";
        ctx.font = "italic bold 10pt Courier";
        //http://junerockwell.com/end-of-line-or-line-break-in-html5-canvas/
        var fontsize = 60;
        var array = text.split('|');
        var dx = 10;
        var dy = 20;
        for (var i = 0; i < array.length; i++) {
            ctx.fillText(array[i], dx, dy);
            dy += (fontsize + 4);
        }
    };
    return foText2D;
}(__WEBPACK_IMPORTED_MODULE_1__foundry_foShape2D_model__["a" /* foShape2D */]));


__WEBPACK_IMPORTED_MODULE_2__foRuntimeType__["a" /* RuntimeType */].define(foText2D);


/***/ }),

/***/ "../../../../../src/app/foundry/foTools.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export foTools */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tools; });

var foTools = (function () {
    function foTools() {
        // Speed up calls to hasOwnProperty
        this.hasOwnProperty = Object.prototype.hasOwnProperty;
    }
    /**
     * http://stackoverflow.com/questions/6588977/how-to-to-extract-a-javascript-function-from-a-javascript-file
     * @param funct
     */
    foTools.prototype.getFunctionName = function (funct) {
        var ret = funct.toString(); //do with regx
        ret = ret.substr('function '.length);
        ret = ret.substr(0, ret.indexOf('('));
        return ret.trim();
    };
    ;
    //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    foTools.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    foTools.prototype.asJson = function (target) {
        var result = this.stringify(target);
        return JSON.parse(result);
    };
    foTools.prototype.stringify = function (target, func, deep) {
        if (func === void 0) { func = undefined; }
        if (deep === void 0) { deep = 3; }
        function resolveReference(value) {
            if (value && value.asReference) {
                return 'resolveRef(' + value.asReference() + ',' + value.constructor.name + ')';
            }
            return value;
        }
        function resolveCircular(key, value) {
            switch (key) {
                case 'myParent':
                    return resolveReference(value);
                case 'myMembers':
                    return value ? value.map(function (item) { return resolveReference(item); }) : value;
                case '_lookup':
                    return value;
                case '_members':
                    return value;
            }
            if (key.startsWith('_'))
                return;
            //if (this.isCustomLinkName(key)) {
            //    return resolveReference(value);
            //}
            return value;
        }
        return JSON.stringify(target, resolveCircular, deep);
    };
    ;
    foTools.prototype.splitNamespaceType = function (id, primitive) {
        var typeId = id.split('::');
        var result = { namespace: '', name: id };
        if (typeId.length == 2) {
            result = {
                namespace: typeId[0],
                name: typeId[1]
            };
        }
        else if (primitive) {
            result = {
                namespace: typeId[0],
                name: primitive
            };
        }
        return result;
    };
    ;
    foTools.prototype.getNamespace = function (obj) {
        var myNamespace = obj.myType ? obj.myType.split('::') : [''];
        myNamespace = myNamespace[0];
        return myNamespace;
    };
    ;
    foTools.prototype.getType = function (obj) {
        var myType = obj.myType ? obj.myType.split('::') : [''];
        myType = myType.length == 2 ? myType[1] : myType[0];
        return myType;
    };
    ;
    foTools.prototype.namespace = function (namespace, name) {
        return namespace + "::" + name;
    };
    ;
    foTools.prototype.randomInt = function (low, high) {
        return low + Math.floor(Math.random() * (high - low + 1));
    };
    ;
    foTools.prototype.random = function (low, high) {
        return low + Math.random() * (high - low);
    };
    ;
    foTools.prototype.randomRGBColor = function () {
        var r = 255 * Math.random() | 0, g = 255 * Math.random() | 0, b = 255 * Math.random() | 0;
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    foTools.prototype.isSelf = function (ref) {
        return ref.matches('@') || ref.matches('this') || ref.matches('self');
    };
    ;
    foTools.prototype.isArray = function (obj) {
        if (Array.isArray)
            return Array.isArray(obj);
        return (Object.prototype.toString.call(obj) === '[object Array]') ? true : false;
    };
    ;
    foTools.prototype.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    ;
    foTools.prototype.isString = function (obj) {
        return typeof obj === 'string';
    };
    ;
    foTools.prototype.isNumber = function (obj) {
        return typeof obj === 'number';
    };
    ;
    foTools.prototype.isDate = function (obj) {
        return obj instanceof Date;
    };
    ;
    foTools.prototype.isObject = function (obj) {
        return obj && typeof obj === 'object'; //prevents typeOf null === 'object'
    };
    ;
    foTools.prototype.isCustomLinkName = function (key) {
        return false;
    };
    ;
    foTools.prototype.isTyped = function (obj) {
        return obj && obj.isInstanceOf;
    };
    ;
    foTools.prototype.isEmpty = function (obj) {
        // null and undefined are "empty"
        if (obj == null)
            return true;
        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length > 0)
            return false;
        if (obj.length === 0)
            return true;
        // If it isn't an object at this point
        // it is empty, but it can't be anything *but* empty
        // Is it empty?  Depends on your application.
        if (typeof obj !== "object")
            return true;
        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and valueOf enumeration bugs in IE < 9
        for (var key in obj) {
            if (this.hasOwnProperty.call(obj, key))
                return false;
        }
        return true;
    };
    ;
    foTools.prototype.removeDQ = function (str) {
        return str.replace(/^"(.*)"$/, '$1');
    };
    foTools.prototype.unwrap = function (str) {
        return str.substring(1, str.length - 1);
    };
    foTools.prototype.wrapDQ = function (str) {
        return "\"" + str + "\"";
    };
    foTools.prototype.wrapSQ = function (str) {
        return "'" + str + "'";
    };
    foTools.prototype.decomposeHostPath = function (filename) {
        var string = filename.toLowerCase();
        string = string.replace('http://', "");
        string = string.replace('https://', "");
        var host = string.split('/')[0];
        var path = string.replace(host, '');
        return {
            fullpath: filename,
            host: host,
            path: path,
        };
    };
    ;
    foTools.prototype.extend = function (target, source) {
        if (!source)
            return target;
        for (var key in source) {
            if (this.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
        return target;
    };
    ;
    foTools.prototype.mixin = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    };
    ;
    foTools.prototype.mixExact = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        for (var key in source) {
            if (foTools.hasOwnProperty.call(target, key)) {
                target[key] = source[key];
            }
        }
        return target;
    };
    ;
    foTools.prototype.mixout = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        for (var key in source) {
            if (this.hasOwnProperty.call(target, key)) {
                delete target[key];
            }
        }
        return target;
    };
    ;
    foTools.prototype.mixMap = function (target, source) {
        if (!source)
            return target;
        var result = {};
        for (var key in target) {
            var keyMap = source[key] || key;
            result[keyMap] = target[key];
        }
        return result;
    };
    ;
    foTools.prototype.intersect = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        var intersect = {};
        for (var key in target) {
            if (this.hasOwnProperty.call(source, key)) {
                intersect[key] = source[key];
            }
            else {
                intersect[key] = target[key];
            }
        }
        return intersect;
    };
    ;
    foTools.prototype.union = function (target, source) {
        var result = {};
        if (target) {
            for (var key in target) {
                result[key] = target[key];
            }
        }
        if (source) {
            for (var key in source) {
                result[key] = source[key];
            }
        }
        return result;
    };
    ;
    foTools.prototype.defineCalculatedProperty = function (target, name, func) {
        var self = target;
        Object.defineProperty(target, name, {
            enumerable: true,
            configurable: true,
            get: func,
        });
        return target;
    };
    ;
    foTools.prototype.getMethods = function (obj) {
        var list = [];
        for (var m in obj.prototype) {
            if (typeof obj[m] == "function") {
                list.push(m);
            }
        }
        return list;
    };
    foTools.prototype.asArray = function (obj, funct) {
        if (this.isArray(obj))
            return obj;
        return this.mapOverKeyValue(obj, function (key, value) { return funct ? funct(key, value) : value; });
    };
    ;
    foTools.prototype.applyOverKeyValue = function (obj, mapFunc) {
        var _this = this;
        var body = {};
        var keys = obj ? Object.keys(obj) : [];
        keys.forEach(function (key) {
            if (_this.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                var result = mapFunc(key, value);
                if (result)
                    body[key] = result;
            }
        });
        return body;
    };
    ;
    foTools.prototype.mapOverKeyValue = function (obj, mapFunc) {
        var _this = this;
        var list = [];
        var keys = obj ? Object.keys(obj) : [];
        keys.forEach(function (key) {
            if (_this.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                var result = mapFunc(key, value);
                if (result)
                    list.push(result);
            }
        });
        return list;
    };
    ;
    foTools.prototype.forEachKeyValue = function (obj, mapFunc) {
        var _this = this;
        var keys = obj ? Object.keys(obj) : [];
        keys.forEach(function (key) {
            if (_this.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                mapFunc(key, value);
            }
        });
    };
    ;
    foTools.prototype.findKeyForValue = function (obj, key) {
        for (var name in obj) {
            if (this.hasOwnProperty.call(obj, key)) {
                if (obj[name].matches(key))
                    return name;
            }
        }
        return obj;
    };
    ;
    foTools.prototype.overrideComputed = function (obj, properties) {
        Tools.forEachKeyValue(properties, function (key, value) {
            try {
                if (Tools.isFunction(value)) {
                    Tools.defineCalculatedProperty(obj, key, value);
                }
                else {
                    obj[key] = value;
                }
            }
            catch (ex) {
                console.log(ex);
            }
        });
    };
    foTools.prototype.extendComputed = function (obj, properties) {
        Tools.forEachKeyValue(properties, function (key, value) {
            try {
                if (!obj[key]) {
                    if (Tools.isFunction(value)) {
                        Tools.defineCalculatedProperty(obj, key, value);
                    }
                    else {
                        obj[key] = value;
                    }
                }
            }
            catch (ex) {
                console.log(ex);
            }
        });
    };
    foTools.prototype.pluck = function (name) {
        return function (x) { return x[name]; };
    };
    foTools.prototype.distinctItems = function (list) {
        var distinct = {};
        list.forEach(function (item) {
            distinct[item] = item;
        });
        return Object.keys(distinct);
    };
    foTools.prototype.groupBy = function (pluckBy, list) {
        var dictionary = {};
        list.forEach(function (item) {
            var key = pluckBy(item);
            if (!dictionary[key]) {
                dictionary[key] = [];
            }
            dictionary[key].push(item);
        });
        return dictionary;
    };
    return foTools;
}());

var Tools = new foTools();


/***/ }),

/***/ "../../../../../src/app/foundryDrivers/canvasDriver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sceen2D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__ = __webpack_require__("../../../../../src/app/foundry/foGeometry.ts");


function doAnimate(mySelf) {
    function animate() {
        requestAnimationFrame(animate);
        mySelf.render(mySelf.context);
    }
    animate();
}
var Sceen2D = (function () {
    function Sceen2D() {
    }
    Sceen2D.prototype.go = function (next) {
        doAnimate(this);
        next && next();
    };
    Sceen2D.prototype.setRoot = function (nativeElement, width, height) {
        this.canvas = nativeElement;
        this.context = this.canvas.getContext("2d");
        // set the width and height
        this.canvas.width = width;
        this.canvas.height = height;
        // set some default properties about the line
        this.context.lineWidth = 1;
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#000';
        this.pubMouseEvents(nativeElement);
        return nativeElement;
    };
    Sceen2D.prototype.pubMouseEvents = function (canvas) {
        var rect = canvas.getBoundingClientRect();
        var body = canvas.ownerDocument.body;
        var pt = new __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__["c" /* cPoint */]();
        function getMousePos(event) {
            var px = event.pageX;
            var py = event.pageY;
            var x = rect.left;
            var y = rect.top;
            return pt.set(event.clientX - x, event.clientY - y);
        }
        //http://jsfiddle.net/jy5yQ/1/
        function getMousePosition(event) {
            var x;
            var y;
            if (event.pageX != undefined && event.pageY != undefined) {
                x = event.pageX;
                y = event.pageY;
            }
            else {
                x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            x -= canvas.offsetLeft;
            y -= canvas.offsetTop;
            return pt.set(x, y);
        }
        canvas.addEventListener('mousedown', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mousedown', loc, e, keys);
        });
        canvas.addEventListener('mousemove', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mousemove', loc, e, keys);
        });
        canvas.addEventListener('wheel', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            var scale = 1.1;
            var zoom = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) > 0 ? scale : 1 / scale;
            var g = new __WEBPACK_IMPORTED_MODULE_1__foundry_foGeometry__["c" /* cPoint */](e.offsetX, e.offsetY);
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('wheel', loc, g, zoom, e, keys);
        });
        canvas.addEventListener('dblclick', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('dblclick', loc, e, keys);
        });
        canvas.addEventListener('click', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('click', loc, e, keys);
        });
        canvas.addEventListener('mouseup', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mouseup', loc, e, keys);
        });
        canvas.addEventListener('mouseover', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mouseover', loc, e, keys);
        });
        canvas.addEventListener('mouseout', function (e) {
            e.preventDefault();
            var loc = getMousePos(e);
            var keys = { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, button: e.button };
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mouseout', loc, e, keys);
        });
    };
    return Sceen2D;
}());



/***/ }),

/***/ "../../../../../src/app/foundryDrivers/diagramDriver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("../../../../d3/index.js");

function makeTransform(dx, dy, s) {
    if (s === void 0) { s = 0; }
    if (s) {
        return "translate(" + dx + "," + dy + ") scale (" + s + ")";
    }
    return "translate(" + dx + "," + dy + ")";
}
var Diagram = (function () {
    function Diagram() {
        this.svgRoot = {};
        this.scale = 1.0;
        this.scaleFactor = 0.2;
        this.Tx = 0.0;
        this.Ty = 0.0;
        this.width = 960;
        this.height = 600;
    }
    Diagram.prototype.setRoot = function (nativeElement) {
        this.svgRoot = __WEBPACK_IMPORTED_MODULE_0_d3__["l" /* select */](nativeElement)
            .append("svg")
            .attr("class", "svg-canvas")
            .attr("width", this.width) //.attr("width", "100%")
            .attr("height", this.height);
    };
    Diagram.prototype.renderGraph = function (graph) {
        var boxWidth = 80;
        var boxHeight = 40;
        var color = __WEBPACK_IMPORTED_MODULE_0_d3__["j" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_0_d3__["k" /* schemeCategory20 */]);
        var allLinks = graph.links.map(function (item) {
            return item;
        });
        var counter = 0;
        var allNodes = graph.nodes.map(function (item) {
            var count = 3;
            counter++;
            var quotient = Math.floor(counter / count);
            item.width = boxWidth;
            item.height = boxHeight;
            item.x = 100 * quotient;
            item.y = boxHeight;
            //console.log(item);
            return item;
        });
        var link = this.svgRoot.append("g")
            .attr("class", "links-style")
            .selectAll("line")
            .data(allLinks)
            .enter().append("line")
            .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
        var node = this.svgRoot.append("g")
            .attr("class", "nodes-style")
            .selectAll(".node-body")
            .data(allNodes)
            .enter().append("g")
            .attr("class", "node-body")
            .call(__WEBPACK_IMPORTED_MODULE_0_d3__["a" /* drag */]()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        node.append("rect")
            .attr("width", function (d) { return d.width; })
            .attr("height", function (d) { return d.height; })
            .attr("fill", function (d) { return color(d.group); });
        node.append("text")
            .attr("y", boxHeight / 2)
            .attr("x", boxWidth / 2)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function (d) { return d.id; });
        var simulation = __WEBPACK_IMPORTED_MODULE_0_d3__["g" /* forceSimulation */]()
            .force("x", __WEBPACK_IMPORTED_MODULE_0_d3__["h" /* forceX */](function (d) { return d.x; }).strength(4))
            .force("collide", __WEBPACK_IMPORTED_MODULE_0_d3__["d" /* forceCollide */](22))
            .force("center", __WEBPACK_IMPORTED_MODULE_0_d3__["c" /* forceCenter */](this.width / 2, this.height / 2));
        simulation
            .nodes(allNodes)
            .on("tick", ticked);
        //simulation.force("link")
        //  .links(allLinks);
        function collide(node) {
            var r = node.width, nx1 = node.x - node.width / 2, nx2 = node.x + node.width / 2, ny1 = node.y - node.heigth / 2, ny2 = node.y + node.heigth / 2;
            return function (quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== node)) {
                    var x = node.x - quad.point.x, y = node.y - quad.point.y, l = Math.sqrt(x * x + y * y), r = node.width + quad.point.radius;
                    if (l < r) {
                        l = (l - r) / l * .5;
                        node.x -= x *= l;
                        node.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2
                    || x2 < nx1
                    || y1 > ny2
                    || y2 < ny1;
            };
        }
        function ticked() {
            var q = __WEBPACK_IMPORTED_MODULE_0_d3__["i" /* quadtree */]().addAll(allNodes), i = 0, n = allNodes.length;
            while (++i < n) {
                q.visit(collide(allNodes[i]));
            }
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node
                .attr("transform", function (d) {
                return makeTransform(d.x - d.width / 2, d.y - d.height / 2);
            });
        }
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    Diagram.prototype.renderDiagram = function (nodes, nodeRenderFn, links, linkRenderFn) {
        //var color = d3.scaleOrdinal(d3.schemeCategory20);
        var link = this.svgRoot.append("g")
            .attr("class", "links-style")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
        var node = this.svgRoot.append("g")
            .attr("class", "nodes-style")
            .selectAll(".node-body")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node-body");
        nodeRenderFn && nodeRenderFn(node);
        // node.append("rect")
        //     .attr("width", function (d) { return d.width; })
        //     .attr("height", function (d) { return d.height; })
        //     .attr("fill", function (d) { return color(d.group); });
        // node.append("text")
        //     //.attr("dy", ".75em")
        //     .attr("y", function (d) { return d.height / 2; })
        //     .attr("x", function (d) { return d.width / 2; })
        //     .attr("text-anchor", "middle")
        //     .attr("font-family", "sans-serif")
        //     .attr("font-size", "10px")
        //     .text(function (d) { return d.id; })
        node.call(__WEBPACK_IMPORTED_MODULE_0_d3__["a" /* drag */]()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        var simulation = __WEBPACK_IMPORTED_MODULE_0_d3__["g" /* forceSimulation */]()
            .force("x", __WEBPACK_IMPORTED_MODULE_0_d3__["h" /* forceX */](function (d) { return d.x; }).strength(4))
            .force("collide", __WEBPACK_IMPORTED_MODULE_0_d3__["d" /* forceCollide */](22))
            .force("center", __WEBPACK_IMPORTED_MODULE_0_d3__["c" /* forceCenter */](this.width / 2, this.height / 2));
        simulation
            .nodes(nodes)
            .on("tick", ticked);
        //simulation.force("link")
        //  .links(links);
        function collide(node) {
            var r = node.width, nx1 = node.x - node.width / 2, nx2 = node.x + node.width / 2, ny1 = node.y - node.heigth / 2, ny2 = node.y + node.heigth / 2;
            return function (quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== node)) {
                    var x = node.x - quad.point.x, y = node.y - quad.point.y, l = Math.sqrt(x * x + y * y), r = node.width + quad.point.radius;
                    if (l < r) {
                        l = (l - r) / l * .5;
                        node.x -= x *= l;
                        node.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2
                    || x2 < nx1
                    || y1 > ny2
                    || y2 < ny1;
            };
        }
        function ticked() {
            var q = __WEBPACK_IMPORTED_MODULE_0_d3__["i" /* quadtree */]().addAll(nodes), i = 0, n = nodes.length;
            while (++i < n) {
                q.visit(collide(nodes[i]));
            }
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node
                .attr("transform", function (d) {
                return makeTransform(d.x - d.width / 2, d.y - d.height / 2);
            });
        }
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["b" /* event */].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    return Diagram;
}());



/***/ }),

/***/ "../../../../../src/app/foundryDrivers/threeDriver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sceen3D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");

function doAnimate(mySelf) {
    function animate() {
        requestAnimationFrame(animate);
        mySelf.doRotation(.01, .02, .03);
    }
    animate();
}
var Sceen3D = (function () {
    function Sceen3D() {
        this.scene = {};
        this.camera = {};
        this.renderer = {};
        this.geometry = {};
        this.material = {};
        this.mesh = {};
    }
    Sceen3D.prototype.doRotation = function (x, y, z) {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    };
    Sceen3D.prototype.go = function () {
        doAnimate(this);
    };
    Sceen3D.prototype.setRoot = function (nativeElement) {
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["a" /* BoxGeometry */](100, 400, 900);
        this.material = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* MeshBasicMaterial */]({ color: 0x990033, wireframe: false });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* Mesh */](this.geometry, this.material);
        this.scene.add(this.mesh);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* WebGLRenderer */]();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        nativeElement.append(this.renderer.domElement);
    };
    Sceen3D.prototype.init = function (id) {
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["a" /* BoxGeometry */](100, 400, 900);
        this.material = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* MeshBasicMaterial */]({ color: 0x990033, wireframe: false });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* Mesh */](this.geometry, this.material);
        this.scene.add(this.mesh);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* WebGLRenderer */]();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        var element = document.getElementById(id);
        element.appendChild(this.renderer.domElement);
    };
    return Sceen3D;
}());



/***/ }),

/***/ "../../../../../src/app/listview/listview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listview/listview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listview works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/listview/listview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListviewComponent = (function () {
    function ListviewComponent() {
    }
    ListviewComponent.prototype.ngOnInit = function () {
    };
    ListviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-listview',
            template: __webpack_require__("../../../../../src/app/listview/listview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listview/listview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListviewComponent);
    return ListviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/dockerecosystem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#outer-dropzone {\r\n  height: 140px;\r\n}\r\n\r\n#inner-dropzone {\r\n  height: 80px;\r\n}\r\n\r\n.dropzone {\r\n  background-color: #ccc;\r\n  border: dashed 4px transparent;\r\n  border-radius: 4px;\r\n  margin: 10px auto 30px;\r\n  padding: 10px;\r\n  width: 80%;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.drop-active {\r\n  border-color: #aaa;\r\n}\r\n\r\n.drop-target {\r\n  background-color: #29e;\r\n  border-color: #fff;\r\n  border-style: solid;\r\n}\r\n\r\n.drag-drop {\r\n  display: inline-block;\r\n  min-width: 40px;\r\n  padding: 2em 0.5em;\r\n\r\n  color: #fff;\r\n  background-color: #29e;\r\n  border: solid 2px #fff;\r\n\r\n  -webkit-transform: translate(0px, 0px);\r\n          transform: translate(0px, 0px);\r\n\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.drag-drop.can-drop {\r\n  color: #000;\r\n  background-color: #4e4;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/networkview/dockerecosystem.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dockerecosystem works!\r\n  <a href=\"https://bl.ocks.org/mbostock/4062045\">forcediagram</a>\r\n  <button (click)=\"scaleIn()\">Scale in</button>\r\n  <button (click)=\"scaleOut()\">Scale out</button>\r\n\r\n\r\n</p>\r\n\r\n\r\n<div id=\"no-drop\" class=\"draggable drag-drop\"> #no-drop </div>\r\n\r\n<div id=\"yes-drop\" class=\"draggable drag-drop\"> #yes-drop </div>\r\n\r\n<div id=\"outer-dropzone\" class=\"dropzone\">\r\n  #outer-dropzone\r\n  <div id=\"inner-dropzone\" class=\"dropzone\">#inner-dropzone</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/networkview/dockerecosystem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_diagramDriver__ = __webpack_require__("../../../../../src/app/foundryDrivers/diagramDriver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dockerecosystem_model__ = __webpack_require__("../../../../../src/app/networkview/dockerecosystem.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__ = __webpack_require__("../../../../../src/app/networkview/dockerecosystem.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function getWindow() {
    return window;
}
function dragMoveListener(event) {
    var target = event.target, 
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}
// this is used later in the resizing and gesture demos
getWindow().dragMoveListener = dragMoveListener;
var DockerecosystemComponent = (function () {
    function DockerecosystemComponent(vcr, service) {
        this.vcr = vcr;
        this.service = service;
        this.myDiagram = new __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_diagramDriver__["a" /* Diagram */]();
        this.myModel = new __WEBPACK_IMPORTED_MODULE_2__dockerecosystem_model__["a" /* DockerecosystemModel */]();
    }
    DockerecosystemComponent.prototype.scaleOut = function () {
        // this.scale -= this.scaleFactor;
        // this.Tx -= this.scaleFactor * this.width / 2;
        // this.Ty -= this.scaleFactor * this.height / 2;
        // this.svgRoot
        //   .attr("transform", makeTransform(this.Tx, this.Ty, this.scale))
        //   .attr("width", this.width / this.scale)
        //   .attr("height", this.height / this.scale)
    };
    DockerecosystemComponent.prototype.scaleIn = function () {
        // this.scale += this.scaleFactor;
        // this.Tx += this.scaleFactor * this.width / 2;
        // this.Ty += this.scaleFactor * this.height / 2;
        // this.svgRoot
        //   .attr("transform", makeTransform(this.Tx, this.Ty, this.scale))
        //   .attr("width", this.width / this.scale)
        //   .attr("height", this.height / this.scale)
    };
    // zoomListener = d3.behavior.zoom()
    //   .scaleExtent([0.1, 3])
    //   .on("zoom", zoomHandler);
    DockerecosystemComponent.prototype.ngOnInit = function () {
        this.myDiagram.setRoot(this.vcr.element.nativeElement);
        // this.service.getEcosystem()
        //   .subscribe(res => {
        //     let graph = res.json();
        //     this.myDiagram.renderGraph(graph);
        //   })
        var test1 = {
            "nodes": [
                { "id": "Myriel", "group": 1 },
                { "id": "Napoleon", "group": 1 },
                { "id": "Mlle.Baptistine", "group": 1 },
                { "id": "Fameuil", "group": 3 }
            ],
            "links": [
                { "source": "Napoleon", "target": "Myriel", "value": 1 }
            ]
        };
        this.myDiagram.renderGraph(test1);
        var nodes = [];
        var links = [];
        var nodeDef = this.myModel.nodeDef;
        for (var i = 0; i < 2; i++) {
            var obj = nodeDef.newInstance({
                index: i,
                id: function () { return "Hello all " + this.myGuid; }
            });
            nodes.push(obj);
        }
        console.log(nodes);
        // this.myDiagram.renderDiagram(
        //   nodes, (i) => { 
        //     return this.myModel.doGeom(i) 
        //   },
        //   links, _ => { }
        // );
        // target elements with the "draggable" class
        // interact('.draggable')
        //   .draggable({
        //     // enable inertial throwing
        //     inertia: true,
        //     // keep the element within the area of it's parent
        //     restrict: {
        //       restriction: "parent",
        //       endOnly: true,
        //       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        //     },
        //     // enable autoScroll
        //     autoScroll: true,
        //     // call this function on every dragmove event
        //     onmove: dragMoveListener,
        //     // call this function on every dragend event
        //     onend: function (event) {
        //       var textEl = event.target.querySelector('p');
        //       textEl && (textEl.textContent =
        //         'moved a distance of '
        //         + (Math.sqrt(event.dx * event.dx +
        //           event.dy * event.dy) | 0) + 'px');
        //     }
        //   });
    };
    DockerecosystemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-dockerecosystem',
            template: __webpack_require__("../../../../../src/app/networkview/dockerecosystem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/networkview/dockerecosystem.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__["a" /* DockerecosystemService */]])
    ], DockerecosystemComponent);
    return DockerecosystemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/dockerecosystem.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Shape */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__ = __webpack_require__("../../../../../src/app/foundry/foConcept.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape(properties) {
        var _this = _super.call(this, properties) || this;
        _this.color = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_1_d3__["k" /* schemeCategory20 */]);
        return _this;
    }
    Shape.prototype.localGeom = function (item) {
        item.append("rect")
            .attr("width", function (d) { return d.width; })
            .attr("height", function (d) { return d.height; })
            .attr("fill", function (d) { return this.color(d.group); })
            .append("text")
            .attr("class", "text-style");
        //.attr("dy", ".75em")
        item.attr("y", function (d) { return d.height / 2; })
            .attr("x", function (d) { return d.width / 2; })
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function (d) {
            return d.text + d.myGuid;
        });
        return item;
    };
    ;
    return Shape;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__["b" /* foConcept */]));

var DockerecosystemModel = (function () {
    function DockerecosystemModel() {
        this.nodeDef = new Shape({
            id: "steve",
            group: 1,
            width: 80,
            height: 40,
            text: "hello"
        });
    }
    DockerecosystemModel.prototype.doGeom = function (item) {
        var root = item
            .append("rect")
            .attr("width", function (d) { return d.width; })
            .attr("height", function (d) { return d.height; })
            .attr("fill", function (d) { return __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_1_d3__["k" /* schemeCategory20 */])(d.group); })
            .append("text")
            .attr("class", "text-style");
        item.attr("y", function (d) { return d.height / 2; })
            .attr("x", function (d) { return d.width / 2; })
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function (d) {
            return d.text + d.myGuid;
        });
        return root;
    };
    ;
    return DockerecosystemModel;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/dockerecosystem.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DockerecosystemService = (function () {
    function DockerecosystemService(http) {
        this.http = http;
    }
    DockerecosystemService.prototype.getModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            setTimeout(function () {
                observer.next(21);
            }, 1000);
            setTimeout(function () {
                observer.next(22);
            }, 2000);
            setTimeout(function () {
                observer.complete();
            }, 3000);
        });
        return model;
    };
    DockerecosystemService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DockerecosystemService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        var toast = {
            title: "Dockerecosystem Service",
            message: errMsg
        };
        __WEBPACK_IMPORTED_MODULE_6__common_emitter_service__["a" /* EmitterService */].get("SHOWERROR").emit(toast);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    DockerecosystemService.prototype.getEcosystem = function () {
        var source = this.http.get('dockerecosystem.json');
        //source.do(this.extractData)
        //  .catch(this.handleError);
        return source;
    };
    DockerecosystemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DockerecosystemService);
    return DockerecosystemService;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/networkview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/networkview/networkview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  networkview works!\r\n</p>\r\n\r\n<foundry-dockerecosystem> </foundry-dockerecosystem>\r\n<foundry-test-forcediagram>\r\n</foundry-test-forcediagram>"

/***/ }),

/***/ "../../../../../src/app/networkview/networkview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkviewComponent = (function () {
    function NetworkviewComponent() {
    }
    NetworkviewComponent.prototype.ngOnInit = function () {
    };
    NetworkviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-networkview',
            template: __webpack_require__("../../../../../src/app/networkview/networkview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/networkview/networkview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NetworkviewComponent);
    return NetworkviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/test-forcediagram.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.svg-canvas {\r\n  /*background-color: #333;*/\r\n  border: darkblue;\r\n  border-style: solid;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/networkview/test-forcediagram.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-forcediagram works!\r\n  <a href=\"https://bl.ocks.org/mbostock/4062045\">forcediagram</a>\r\n</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/networkview/test-forcediagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestForcediagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestForcediagramComponent = (function () {
    function TestForcediagramComponent(http, vcr) {
        this.http = http;
        this.vcr = vcr;
        this.graph = {};
    }
    TestForcediagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        var root = this.vcr.element.nativeElement;
        var width = 1000;
        var height = 600;
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["l" /* select */](root)
            .append("svg")
            .attr("class", "svg-canvas")
            .attr("width", width)
            .attr("height", height);
        var color = __WEBPACK_IMPORTED_MODULE_2_d3__["j" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_2_d3__["k" /* schemeCategory20 */]);
        var simulation = __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* forceSimulation */]()
            .force("link", __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* forceLink */]().id(function (d) { return d.id; }))
            .force("charge", __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* forceManyBody */]())
            .force("center", __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* forceCenter */](width / 2, height / 2));
        this.http.get('miserables.json')
            .subscribe(function (res) {
            _this.graph = res.json();
            var link = svg.append("g")
                .attr("class", "links-style")
                .selectAll("line")
                .data(_this.graph.links)
                .enter().append("line")
                .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
            var node = svg.append("g")
                .attr("class", "nodes-style")
                .selectAll("circle")
                .data(_this.graph.nodes)
                .enter().append("circle")
                .attr("r", 5)
                .attr("fill", function (d) { return color(d.group); })
                .call(__WEBPACK_IMPORTED_MODULE_2_d3__["a" /* drag */]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            node.append("title")
                .text(function (d) { return d.id; });
            simulation
                .nodes(_this.graph.nodes)
                .on("tick", ticked);
            simulation.force("link")
                .links(_this.graph.links);
            function ticked() {
                link
                    .attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });
                node
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; });
            }
        });
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    TestForcediagramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-test-forcediagram',
            template: __webpack_require__("../../../../../src/app/networkview/test-forcediagram.component.html"),
            styles: [__webpack_require__("../../../../../src/app/networkview/test-forcediagram.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], TestForcediagramComponent);
    return TestForcediagramComponent;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/test-svg-circle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "polyline\r\n{\r\n\tstroke: 0;\r\n\tstroke-linejoin: butt;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\npolyline.orange\r\n{\r\n\tfill: #ff6400;\r\n}\r\n\r\ntext#display\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 120%;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\nrect#shape\r\n{\r\n\tstroke:#000;\r\n\tfill: yellow;\r\n}\r\n\r\nrect#select\r\n{\r\n\tstroke-width: 4px;  \r\n\tstroke:red;\r\n\tfill: none\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/networkview/test-svg-circle.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <svg:g (click)=\"doClick()\" transform=\"translate (40 40) \">\r\n    <svg:rect x=\"0\" y=\"0\" [attr.height]=\"height\" [attr.width]=\"width\" style='fill:green; '>\r\n    </svg:rect>\r\n    <circle cx='25' cy='25' r='20' style='fill:orange; ' />\r\n    <svg:text id=\"display\" x=\"20\" [attr.y]=\"height/3\"> {{ title }}</svg:text>\r\n\r\n    <svg:rect id=\"select\" *ngIf=\"isSelected\" [attr.height]=\"height\" [attr.width]=\"width\">\r\n    </svg:rect>\r\n\r\n  </svg:g>\r\n"

/***/ }),

/***/ "../../../../../src/app/networkview/test-svg-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSvgCircleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestSvgCircleComponent = (function () {
    function TestSvgCircleComponent() {
        this.height = 50;
        this.width = 75;
        this.isSelected = false;
        this.title = "hello";
    }
    TestSvgCircleComponent.prototype.ngOnInit = function () {
    };
    TestSvgCircleComponent.prototype.doClick = function () {
    };
    TestSvgCircleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[foundry-circle]',
            template: __webpack_require__("../../../../../src/app/networkview/test-svg-circle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/networkview/test-svg-circle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestSvgCircleComponent);
    return TestSvgCircleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/networkview/test-svg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/networkview/test-svg.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"row\">\r\n    <button (click)='addCircle($event)'>Add Circle</button>\r\n    <button (click)='addComponent($event)'>Add Component</button>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div id=\"drawing\" class=\"col-sm-4 col-sm-offset-2\">\r\n\r\n      <svg #container id='page' width='800' height='300' (mousedown)='Grab($event)' (mousemove)='Drag($event)' (mouseup)='Drop($event)'>\r\n\r\n\r\n        <rect id='BackDrop' x='-10%' y='-10%' width='110%' height='110%' fill='yellow' pointer-events='all' />\r\n\r\n        <g foundry-circle />\r\n\r\n      </svg>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/networkview/test-svg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSvgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkview_test_svg_circle_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg-circle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestSvgComponent = (function () {
    function TestSvgComponent(vcr, resolve) {
        this.vcr = vcr;
        this.resolve = resolve;
        this.SVGDocument = null;
        this.SVGDrawing = null;
        this.SVGRoot = null;
        this.TrueCoords = null;
        this.GrabPoint = null;
        this.BackDrop = null;
        this.DragTarget = null;
        this.circledata = [
            { height: 20, width: 50, isSelected: false, title: 'hello shapes' }
        ];
    }
    TestSvgComponent.prototype.ngOnInit = function () {
        this.SVGDocument = this.vcr.element.nativeElement;
        this.SVGDrawing = this.SVGDocument.querySelector('#drawing');
        this.SVGRoot = this.SVGDocument.querySelector('#page');
        // these svg points hold x and y values...
        //    very handy, but they do not display on the screen (just so you know)
        this.TrueCoords = this.SVGRoot.createSVGPoint();
        this.GrabPoint = this.SVGRoot.createSVGPoint();
        // this will serve as the canvas over which items are dragged.
        //    having the drag events occur on the mousemove over a backdrop
        //    (instead of the dragged element) prevents the dragged element
        //    from being inadvertantly dropped when the mouse is moved rapidly
        this.BackDrop = this.SVGRoot.getElementById('BackDrop');
    };
    TestSvgComponent.prototype.addCircle = function (evt) {
        var group = document.createElementNS("http://www.w3.org/2000/svg", 'g'); //Create a path in SVG's namespace
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
        newElement.setAttribute("cx", '0');
        newElement.setAttribute("cy", '0');
        newElement.setAttribute("r", '50');
        newElement.setAttribute("style", 'fill:red; ');
        group.appendChild(newElement);
        var newX = 300;
        var newY = 30;
        group.setAttribute('transform', 'translate(' + newX + ',' + newY + ')');
        this.SVGRoot.appendChild(group);
    };
    //https://blog.lacolaco.net/post/dynamic-component-creation-in-angular-2/
    TestSvgComponent.prototype.addComponent = function (evt) {
        //let widgetComponent = this.resolve.resolveComponentFactory(SwimlaneviewComponent);
        var widgetComponent = this.resolve.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__networkview_test_svg_circle_component__["a" /* TestSvgCircleComponent */]);
        var cmpRef = this._container.createComponent(widgetComponent);
        setTimeout(function () {
            if (cmpRef.instance && cmpRef.instance.hasOwnProperty('title')) {
                cmpRef.instance.title = "Hello Steve";
            }
        }, 1000);
    };
    TestSvgComponent.prototype.Grab = function (evt) {
        // find out which element we moused down on
        var targetElement = evt.target;
        targetElement = targetElement.parentNode; //force to parent group
        // you cannot drag the background itself, so ignore any attempts to mouse down on it
        if (this.BackDrop != targetElement) {
            //set the item moused down on as the element to be dragged
            this.DragTarget = targetElement;
            // move this element to the "top" of the display, so it is (almost)
            //    always over other elements (exception: in this case, elements that are
            //    "in the folder" (children of the folder group) with only maintain
            //    hierarchy within that group
            this.DragTarget.parentNode.appendChild(this.DragTarget);
            // turn off all pointer events to the dragged element, this does 2 things:
            //    1) allows us to drag text elements without selecting the text
            //    2) allows us to find out where the dragged element is dropped (see Drop)
            this.DragTarget.setAttributeNS(null, 'pointer-events', 'none');
            // we need to find the current position and translation of the grabbed element,
            //    so that we only apply the differential between the current location
            //    and the new location
            var transMatrix = this.DragTarget.getCTM();
            this.GrabPoint.x = this.TrueCoords.x - Number(transMatrix.e);
            this.GrabPoint.y = this.TrueCoords.y - Number(transMatrix.f);
            console.log(" shape was hit X: " + evt.offsetX + "  Y: " + evt.offsetY);
        }
        else {
            console.log(" backdrop was hit X: " + evt.offsetX + "  Y: " + evt.offsetY);
        }
    };
    ;
    TestSvgComponent.prototype.Drag = function (evt) {
        // account for zooming and panning
        this.GetTrueCoords(evt);
        // if we don't currently have an element in tow, don't do anything
        if (this.DragTarget) {
            // account for the offset between the element's origin and the
            //    exact place we grabbed it... this way, the drag will look more natural
            var newX = this.TrueCoords.x - this.GrabPoint.x;
            var newY = this.TrueCoords.y - this.GrabPoint.y;
            // apply a new tranform translation to the dragged element, to display
            //    it in its new location
            this.DragTarget.setAttributeNS(null, 'transform', 'translate(' + newX + ',' + newY + ')');
        }
    };
    ;
    TestSvgComponent.prototype.Drop = function (evt) {
        // if we aren't currently dragging an element, don't do anything
        if (this.DragTarget) {
            // since the element currently being dragged has its pointer-events turned off,
            //    we are afforded the opportunity to find out the element it's being dropped on
            var targetElement = evt.target;
            // turn the pointer-events back on, so we can grab this item later
            this.DragTarget.setAttributeNS(null, 'pointer-events', 'all');
            if ('Folder' == targetElement.parentNode.id) {
                // if the dragged element is dropped on an element that is a child
                //    of the folder group, it is inserted as a child of that group
                targetElement.parentNode.appendChild(this.DragTarget);
                console.log(this.DragTarget.id + ' has been dropped into a folder, and has been inserted as a child of the containing group.');
            }
            else {
                // for this example, you cannot drag an item out of the folder once it's in there;
                //    however, you could just as easily do so here
                console.log(this.DragTarget.id + ' has been dropped on top of ' + targetElement.id);
            }
            // set the global variable to null, so nothing will be dragged until we
            //    grab the next element
            this.DragTarget = null;
        }
    };
    ;
    TestSvgComponent.prototype.GetTrueCoords = function (evt) {
        // find the current zoom level and pan setting, and adjust the reported
        //    mouse position accordingly
        var newScale = this.SVGRoot.currentScale;
        var translation = this.SVGRoot.currentTranslate;
        this.TrueCoords.x = (evt.clientX - translation.x) / newScale;
        this.TrueCoords.y = (evt.clientY - translation.y) / newScale;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], TestSvgComponent.prototype, "_container", void 0);
    TestSvgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-test-svg',
            template: __webpack_require__("../../../../../src/app/networkview/test-svg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/networkview/test-svg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], TestSvgComponent);
    return TestSvgComponent;
}());



/***/ }),

/***/ "../../../../../src/app/swimlaneview/swim.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export svgConcept */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return svgShapeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimDictionary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__ = __webpack_require__("../../../../../src/app/foundry/foConcept.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foComponent_model__ = __webpack_require__("../../../../../src/app/foundry/foComponent.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var svgConcept = (function (_super) {
    __extends(svgConcept, _super);
    function svgConcept(properties) {
        var _this = _super.call(this, properties) || this;
        _this.definePrimitive(svgShapeView);
        return _this;
    }
    return svgConcept;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__["b" /* foConcept */]));

var svgShapeView = (function (_super) {
    __extends(svgShapeView, _super);
    function svgShapeView(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.isSelected = false;
        return _this;
    }
    svgShapeView.prototype.makeTransform = function (dx, dy, s) {
        if (s === void 0) { s = 0; }
        if (s) {
            return "translate(" + dx + "," + dy + ") scale (" + s + ")";
        }
        return "translate(" + dx + "," + dy + ")";
    };
    svgShapeView.prototype.translate = function (root) {
        this.nativeElement = root ? root : this.nativeElement;
        return this.makeTransform(this['pinX'], this['pinY']);
    };
    svgShapeView.prototype.refresh = function () {
        if (this.nativeElement) {
            this.nativeElement.setAttribute("transform", this.translate());
        }
        this.nodes.map(function (item) { return item.refresh(); });
    };
    svgShapeView.prototype.toggleSelected = function () {
        this.isSelected = !this.isSelected;
    };
    return svgShapeView;
}(__WEBPACK_IMPORTED_MODULE_1__foundry_foComponent_model__["a" /* foComponent */]));

var SwimDictionary = (function () {
    function SwimDictionary() {
        this.elementDefaults = {
            width: 240,
            gap: 5,
            height: 90,
            pinX: function () { return this.gap; },
            pinY: function () {
                return this.topEdge + 50;
            },
            topEdge: function () {
                if (this.prevChild) {
                    return this.prevChild.bottomEdge + this.gap;
                }
                return 0;
            },
            bottomEdge: function () {
                return this.topEdge + this.height;
            }
        };
        this.swimElementDef = new svgConcept(this.elementDefaults);
        this.laneDefaults = {
            width: function () {
                if (!this.hasSubcomponents) {
                    return 50;
                }
                var width = Math.max.apply(Math, this.nodes.map(function (o) { return o.width; }));
                return width + 2 * this.gap;
            },
            gap: 5,
            height: 800,
            pinX: function () {
                return this.leftEdge;
            },
            pinY: function () {
                return this.gap;
            },
            leftEdge: function () {
                if (this.prevChild) {
                    return this.prevChild.rightEdge + this.gap;
                }
                return this.gap;
            },
            rightEdge: function () {
                return this.leftEdge + this.width;
            }
        };
        this.swimLaneDef = new svgConcept(this.laneDefaults);
        this.swimDefaults = {
            title: "The Docker Ecosystem. - dockercon17",
            width: 1800,
            height: 1000
        };
        this.swimDef = new svgConcept(this.swimDefaults);
    }
    return SwimDictionary;
}());



/***/ }),

/***/ "../../../../../src/app/swimlaneview/swim.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swim_model__ = __webpack_require__("../../../../../src/app/swimlaneview/swim.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SwimService = (function () {
    function SwimService(http) {
        this.http = http;
        this.Dictionary = new __WEBPACK_IMPORTED_MODULE_8__swim_model__["a" /* SwimDictionary */]();
        this.viewElementDef = this.Dictionary.swimElementDef;
        this.viewLaneDef = this.Dictionary.swimLaneDef;
        this.viewDef = this.Dictionary.swimDef;
    }
    SwimService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].error(errMsg, 'SwimService');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    SwimService.prototype.getRootView = function () {
        var result = this.viewDef.newInstance();
        return result;
    };
    // load() {
    //   console.log('json called');
    //   return new Promise(resolve => {
    //     this.http.get('sampledata/caas.json').map(response => {
    //       this.data = response.json();
    //       resolve(this.data);
    //     });
    //   });
    // }
    SwimService.prototype.getEcosystem = function (callback) {
        var _this = this;
        var source = this.http.get('assets/caas.json');
        source.subscribe(function (res) {
            var body = res.json();
            var categories = body.categories;
            var result = _this.viewDef.newInstance();
            //categories = Tools.distinctItems(body.products.map(Tools.pluck('category')));
            var lanes = categories.map(function (item) {
                return { 'title': item, 'myName': item };
            });
            lanes.map(function (item) {
                var found = _this.viewLaneDef.newInstance(item);
                result.addSubcomponent(found);
                result[item.myName] = found;
            });
            var groups = __WEBPACK_IMPORTED_MODULE_7__foundry_foTools__["a" /* Tools */].groupBy(__WEBPACK_IMPORTED_MODULE_7__foundry_foTools__["a" /* Tools */].pluck('category'), body.products);
            __WEBPACK_IMPORTED_MODULE_7__foundry_foTools__["a" /* Tools */].mapOverKeyValue(groups, function (key, list) {
                var product = result[key];
                list.forEach(function (item) {
                    var spec = { 'name': item.product, 'myName': item.product };
                    var element = _this.viewElementDef.newInstance(spec);
                    product.addSubcomponent(element);
                });
            });
            callback && callback(result);
        }, this.handleError);
        return source;
    };
    SwimService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SwimService);
    return SwimService;
}());



/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimelement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "polyline\r\n{\r\n\tstroke: 0;\r\n\tstroke-linejoin: butt;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\npolyline.orange\r\n{\r\n\tfill: #ff6400;\r\n}\r\n\r\ntext#display\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 120%;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\nrect#shape\r\n{\r\n\tstroke:#000;\r\n\tfill: yellow;\r\n}\r\n\r\nrect#select\r\n{\r\n\tstroke-width: 4px;  \r\n\tstroke:red;\r\n\tfill: none\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimelement.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<svg:g (click)=\"doClick()\">\r\n  <svg:rect id=\"shape\" x=\"0\" y=\"0\" [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n  </svg:rect>\r\n  <svg:text id=\"display\" x=\"20\" [attr.y]=\"viewModel.height/3\" > {{ viewModel['name'] }}</svg:text>\r\n\r\n<svg:rect id=\"select\" *ngIf=\"viewModel.isSelected\"  [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n        <!--<animateTransform\r\n            attributeName=\"transform\"\r\n            begin=\"0s\"\r\n            dur=\"20s\"\r\n            type=\"rotate\"\r\n            from=\"0 60 60\"\r\n            to=\"360 60 60\"\r\n            repeatCount=\"indefinite\"\r\n        />-->\r\n        </svg:rect>\r\n\r\n</svg:g>\r\n"

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimelement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimelementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swim_model__ = __webpack_require__("../../../../../src/app/swimlaneview/swim.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//http://stackoverflow.com/questions/32211013/how-can-i-nest-directives-that-render-svg-in-angular-2
var SwimelementComponent = (function () {
    ///@ViewChild('display') svgText;
    function SwimelementComponent(vcr) {
        this.vcr = vcr;
    }
    SwimelementComponent.prototype.ngOnInit = function () {
        var root = this.vcr.element.nativeElement;
        root.setAttribute("transform", this.viewModel.translate(root));
    };
    SwimelementComponent.prototype.doClick = function () {
        this.viewModel.toggleSelected();
        this.viewModel['width'] += this.viewModel['gap'];
        this.viewModel['height'] += this.viewModel['gap'];
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].info("info message", this.viewModel['name']);
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].get("RECOMPUTE").emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */])
    ], SwimelementComponent.prototype, "viewModel", void 0);
    SwimelementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[foundry-swimelement]',
            template: __webpack_require__("../../../../../src/app/swimlaneview/swimelement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/swimlaneview/swimelement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SwimelementComponent);
    return SwimelementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimlane.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "polyline\r\n{\r\n\tstroke: 0;\r\n\tstroke-linejoin: butt;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\npolyline.orange\r\n{\r\n\tfill: #ff6400;\r\n}\r\n\r\ntext#horz\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 170%;\r\n\tfill: #003565;\r\n}\r\n\r\ntext#vert\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 170%;\r\n\tfill: goldenrod;\r\n}\r\n\r\nrect#select\r\n{\r\n\tstroke-width: 4px;  \r\n\tstroke:red;\r\n\tfill: none\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimlane.component.html":
/***/ (function(module, exports) {

module.exports = "<svg:rect (click)=\"doClick()\"  [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" style=\"stroke:#000\">\r\n</svg:rect>\r\n\r\n<svg:text *ngIf=\"viewModel.hasSubcomponents\" id=\"horz\" x=\"10\" y=\"40\"  >{{ viewModel.title }}</svg:text>\r\n<svg:text *ngIf=\"!viewModel.hasSubcomponents\" id=\"vert\" x=\"20\" y=\"20\" style=\"writing-mode: tb;\" >{{ viewModel.title }}</svg:text>\r\n\r\n<svg:g *ngFor=\"let component of viewModel.subcomponents()\" foundry-swimelement [viewModel]=\"component\">\r\n</svg:g>\r\n\r\n<!--\r\nhttp://tutorials.jenkov.com/svg/rect-element.html\r\n-->\r\n\r\n<svg:rect id=\"select\" *ngIf=\"viewModel.isSelected\"  [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n        <!--<animateTransform\r\n            attributeName=\"transform\"\r\n            begin=\"0s\"\r\n            dur=\"20s\"\r\n            type=\"rotate\"\r\n            from=\"0 60 60\"\r\n            to=\"360 60 60\"\r\n            repeatCount=\"indefinite\"\r\n        />-->\r\n        </svg:rect>"

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimlane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimlaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swim_model__ = __webpack_require__("../../../../../src/app/swimlaneview/swim.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//http://stackoverflow.com/questions/32211013/how-can-i-nest-directives-that-render-svg-in-angular-2
var SwimlaneComponent = (function () {
    function SwimlaneComponent(vcr) {
        this.vcr = vcr;
    }
    SwimlaneComponent.prototype.ngOnInit = function () {
        var root = this.vcr.element.nativeElement;
        root.setAttribute("transform", this.viewModel.translate(root));
    };
    SwimlaneComponent.prototype.doClick = function () {
        this.viewModel.toggleSelected();
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].success("render this", this.viewModel['title']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */])
    ], SwimlaneComponent.prototype, "viewModel", void 0);
    SwimlaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[foundry-swimlane]',
            template: __webpack_require__("../../../../../src/app/swimlaneview/swimlane.component.html"),
            styles: [__webpack_require__("../../../../../src/app/swimlaneview/swimlane.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SwimlaneComponent);
    return SwimlaneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimlaneview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "circle\r\n{\r\n\tstroke: yellow;\r\n\tfill: red;\r\n    stroke-width: 5;\r\n}\r\n\r\ntext#title\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 270%;\r\n\tfill: black;\r\n}\r\n\r\nsvg#page\r\n{\r\n\tstroke-width: 1px; \r\n\tbackground-color:none; \r\n\tstroke:black; \r\n\tfill:navajowhite\r\n}  \r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimlaneview.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"row\">\r\n    <button (click)='addCircle($event)'>Add Circle</button>\r\n\r\n  </div>\r\n\r\n  <div id=\"drawing\" class=\"row\">\r\n    <svg:svg id=\"page\" [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" (mousedown)='Grab($event)' (mousemove)='Drag($event)'\r\n      (mouseup)='Drop($event)'>\r\n      <svg:text id=\"title\" x=\"10\" y=\"35\">{{ viewModel.title }}</svg:text>\r\n      <svg:g transform=\"translate(0 50)\">\r\n        <svg:g *ngFor=\"let component of viewModel.subcomponents()\" foundry-swimlane [viewModel]=\"component\">\r\n\r\n        </svg:g>\r\n      </svg:g>\r\n\r\n\r\n      <!--<svg:g transform=\"translate(130 200) rotate(45 50 50) scale(1.5)\">\r\n    <svg:circle *ngFor=\"let circle of circles\" [attr.cx]=\"circle.x\" [attr.cy]=\"circle.y\" [attr.r]=\"circle.r\">\r\n    </svg:circle>\r\n   </svg:g>-->\r\n    </svg:svg>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swimlaneview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimlaneviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__ = __webpack_require__("../../../../../src/app/swimlaneview/swim.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwimlaneviewComponent = (function () {
    function SwimlaneviewComponent(vcr, service) {
        this.vcr = vcr;
        this.service = service;
        this.SVGDocument = null;
        this.SVGDrawing = null;
        this.SVGRoot = null;
        this.TrueCoords = null;
        this.GrabPoint = null;
        this.BackDrop = null;
        this.DragTarget = null;
        this.circle = [
            { 'x': 105, 'y': 10, 'r': 30 },
            { 'x': 305, 'y': 60, 'r': 20 },
            { 'x': 505, 'y': 10, 'r': 40 },
        ];
    }
    SwimlaneviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SVGDocument = this.vcr.element.nativeElement;
        this.SVGDrawing = this.SVGDocument.querySelector('#drawing');
        this.SVGRoot = this.SVGDocument.querySelector('#page');
        // these svg points hold x and y values...
        //    very handy, but they do not display on the screen (just so you know)
        this.TrueCoords = this.SVGRoot.createSVGPoint();
        this.GrabPoint = this.SVGRoot.createSVGPoint();
        this.viewModel = this.service.getRootView();
        this.service && this.service.getEcosystem(function (result) {
            _this.viewModel = result;
        });
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].get("RECOMPUTE").subscribe(function (_) {
            _this.viewModel.refresh();
            //this.swimLanes.forEach(item => {
            //  item.refresh()
        });
    };
    SwimlaneviewComponent.prototype.Grab = function (evt) {
        // find out which element we moused down on
        var targetElement = evt.target;
        targetElement = targetElement.parentNode;
        // you cannot drag the background itself, so ignore any attempts to mouse down on it
        if (this.BackDrop != targetElement) {
            this.GetTrueCoords(evt);
            //set the item moused down on as the element to be dragged
            this.DragTarget = targetElement;
            // move this element to the "top" of the display, so it is (almost)
            //    always over other elements (exception: in this case, elements that are
            //    "in the folder" (children of the folder group) with only maintain
            //    hierarchy within that group
            //this.DragTarget.parentNode.appendChild(this.DragTarget);
            // turn off all pointer events to the dragged element, this does 2 things:
            //    1) allows us to drag text elements without selecting the text
            //    2) allows us to find out where the dragged element is dropped (see Drop)
            this.DragTarget.setAttributeNS(null, 'pointer-events', 'none');
            // we need to find the current position and translation of the grabbed element,
            //    so that we only apply the differential between the current location
            //    and the new location
            var transMatrix = this.DragTarget.getCTM();
            this.GrabPoint.x = this.TrueCoords.x - Number(transMatrix.e);
            this.GrabPoint.y = this.TrueCoords.y - Number(transMatrix.f);
        }
    };
    ;
    SwimlaneviewComponent.prototype.Drag = function (evt) {
        // account for zooming and panning
        this.GetTrueMoveCoords(evt);
        // if we don't currently have an element in tow, don't do anything
        if (this.DragTarget) {
            // account for the offset between the element's origin and the
            //    exact place we grabbed it... this way, the drag will look more natural
            var newX = this.TrueCoords.x - this.GrabPoint.x;
            var newY = this.TrueCoords.y - this.GrabPoint.y;
            // apply a new tranform translation to the dragged element, to display
            //    it in its new location
            this.DragTarget.setAttributeNS(null, 'transform', 'translate(' + newX + ',' + newY + ')');
        }
    };
    ;
    SwimlaneviewComponent.prototype.Drop = function (evt) {
        // if we aren't currently dragging an element, don't do anything
        if (this.DragTarget) {
            // since the element currently being dragged has its pointer-events turned off,
            //    we are afforded the opportunity to find out the element it's being dropped on
            var targetElement = evt.target;
            // turn the pointer-events back on, so we can grab this item later
            this.DragTarget.setAttributeNS(null, 'pointer-events', 'all');
            // for this example, you cannot drag an item out of the folder once it's in there;
            //    however, you could just as easily do so here
            console.log(this.DragTarget.id + ' has been dropped on top of ' + targetElement.id);
            // set the global variable to null, so nothing will be dragged until we
            //    grab the next element
            this.DragTarget = null;
        }
    };
    ;
    //https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/
    SwimlaneviewComponent.prototype.GetTrueCoords = function (evt) {
        // find the current zoom level and pan setting, and adjust the reported
        //    mouse position accordingly
        var top = this.SVGDrawing.offsetTop;
        var left = this.SVGDrawing.offsetLeft;
        var newScale = this.SVGRoot.currentScale;
        var translation = this.SVGRoot.currentTranslate;
        this.TrueCoords.x = (evt.clientX - translation.x + left) / newScale;
        this.TrueCoords.y = (evt.clientY - translation.y + top) / newScale;
    };
    ;
    SwimlaneviewComponent.prototype.GetTrueMoveCoords = function (evt) {
        // find the current zoom level and pan setting, and adjust the reported
        //    mouse position accordingly
        var newScale = this.SVGRoot.currentScale;
        var translation = this.SVGRoot.currentTranslate;
        this.TrueCoords.x = (evt.clientX - translation.x) / newScale;
        this.TrueCoords.y = (evt.clientY - translation.y) / newScale;
    };
    ;
    SwimlaneviewComponent.prototype.addCircle = function (evt) {
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
        newElement.setAttribute("cx", '50');
        newElement.setAttribute("cy", '50');
        newElement.setAttribute("r", '50');
        newElement.setAttribute("style", 'fill:green; ');
        this.SVGRoot.appendChild(newElement);
    };
    SwimlaneviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-swimlaneview',
            template: __webpack_require__("../../../../../src/app/swimlaneview/swimlaneview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/swimlaneview/swimlaneview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__["a" /* SwimService */]])
    ], SwimlaneviewComponent);
    return SwimlaneviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/treeview/treeitem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/treeview/treeitem.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Lets do a quick SVG test Ok?\r\n</p>\r\n\r\n<!--<svg viewBox=\"0 0 250 250\">\r\n  <polygon points=\"125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2\" />\r\n  <polygon points=\"125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30\" />\r\n  <path d=\"M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1\r\n      L125,52.1z M142,135.4H108l17-40.9L142,135.4z\"/>\r\n</svg>-->\r\n\r\n<svg:svg [attr.height]=\"graph.height\" [attr.width]=\"graph.width\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <svg:g transform=\"translate(130 200) rotate(45 50 50) scale(2.5)\">\r\n    <svg:circle *ngFor=\"let circle of circles\" [attr.cx]=\"circle.x\" [attr.cy]=\"circle.y\" [attr.r]=\"circle.r\">\r\n    </svg:circle>\r\n    <svg:rect x=\"50\" y=\"50\" height=\"100\" width=\"100\" style=\"stroke:#000; fill: #0086B2\" transform=\"translate(130) rotate(45 50 50)\"> </svg:rect>\r\n  </svg:g>\r\n\r\n</svg:svg>\r\n\r\n\r\n<p>\r\n  Did that work?\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/treeview/treeitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeitemComponent = (function () {
    function TreeitemComponent() {
        this.graph = {
            width: 800,
            height: 600
        };
        this.circles = [
            { 'x': 15, 'y': 10, 'r': 3 },
            { 'x': 35, 'y': 60, 'r': 20 },
            { 'x': 55, 'y': 10, 'r': 4 },
        ];
    }
    TreeitemComponent.prototype.ngOnInit = function () {
    };
    TreeitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-treeitem',
            template: __webpack_require__("../../../../../src/app/treeview/treeitem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/treeview/treeitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeitemComponent);
    return TreeitemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/treeview/treeview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/treeview/treeview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  treeview works!\r\n</p>\r\n\r\n<foundry-treeitem></foundry-treeitem>\r\n"

/***/ }),

/***/ "../../../../../src/app/treeview/treeview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeviewComponent = (function () {
    function TreeviewComponent() {
    }
    TreeviewComponent.prototype.ngOnInit = function () {
    };
    TreeviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-treeview',
            template: __webpack_require__("../../../../../src/app/treeview/treeview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/treeview/treeview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeviewComponent);
    return TreeviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/webglview/test-sceen1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/webglview/test-sceen1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-sceen1 works!\r\n</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/webglview/test-sceen1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSceen1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__ = __webpack_require__("../../../../../src/app/foundryDrivers/threeDriver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestSceen1Component = (function () {
    function TestSceen1Component(vcr) {
        this.vcr = vcr;
        this.mySceen = new __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__["a" /* Sceen3D */]();
    }
    TestSceen1Component.prototype.ngOnInit = function () {
        this.mySceen.setRoot(this.vcr.element.nativeElement);
        this.mySceen.go();
    };
    TestSceen1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-test-sceen1',
            template: __webpack_require__("../../../../../src/app/webglview/test-sceen1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/webglview/test-sceen1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], TestSceen1Component);
    return TestSceen1Component;
}());



/***/ }),

/***/ "../../../../../src/app/webglview/webglview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/webglview/webglview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  webglview works!\r\n</p>\r\n\r\n<foundry-test-sceen1>\r\n  \r\n</foundry-test-sceen1>\r\n"

/***/ }),

/***/ "../../../../../src/app/webglview/webglview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebglviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { element } from 'protractor/built';

var WebglviewComponent = (function () {
    //https://www.npmjs.com/package/three
    function WebglviewComponent() {
    }
    WebglviewComponent.prototype.ngOnInit = function () {
    };
    WebglviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-webglview',
            template: __webpack_require__("../../../../../src/app/webglview/webglview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/webglview/webglview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebglviewComponent);
    return WebglviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Sample Models generated by Foundry\r\n</p>\r\n\r\n<a target=\"_blank\" href=\"https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html\">SVG and Canvas Graphics in Angular 2</a>\r\n\r\n<button type=\"button\" (click)=\"doToast()\">toast test</button>\r\n<button type=\"button\" (click)=\"doVersion()\">version test</button>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>{{model['full']}}</h1>\r\n\r\n        <pre class=\"well\">{{model | json}}</pre>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>SignalR Chat</h1>\r\n        <input type=\"text\" #chat (keyup)=\"onKeyUp(chat.value)\" (keyup.enter)=\"onInput(chat.value)\">\r\n        <button (click)=\"doPost()\">Go</button>\r\n        <br>\r\n        <pre class=\"well\">{{typeinText}}</pre>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>SignalR Text</h1>\r\n        <div *ngFor=\"let item of postList\">{{item}}</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__ = __webpack_require__("../../../../../src/app/foundry/foConcept.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_signalr_service__ = __webpack_require__("../../../../../src/app/common/signalr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///import { parse } from 'querystring';





//https://www.npmjs.com/package/ng2-tag-input
var WelcomeComponent = (function () {
    function WelcomeComponent(signalR) {
        this.signalR = signalR;
        this.typeinText = '';
        this.postList = [];
        this.model = [];
        this.def = new __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__["b" /* foConcept */]();
    }
    WelcomeComponent.prototype.doToast = function () {
        __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__["b" /* Toast */].info("info message", "my title");
    };
    WelcomeComponent.prototype.doVersion = function () {
        this.signalR.askforVersion();
    };
    WelcomeComponent.prototype.doPost = function () {
        var text = this.inputRef.innerText || this.typeinText;
        this.signalR.send(text);
        this.typeinText = '';
    };
    WelcomeComponent.prototype.onKeyUp = function (value) {
        this.typeinText = value;
    };
    WelcomeComponent.prototype.onInput = function (value) {
        this.typeinText = value;
        this.doPost();
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signalR.start().then(function () {
            _this.signalR.receive(function (data) {
                __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__["b" /* Toast */].info(JSON.stringify(data), "receive");
                _this.postList.push(data);
            });
        });
        var xxx = function () { return "hello"; };
        var yyy = xxx.toString();
        var zzz = '{ return "hello" }';
        function evil(fn) {
            return new Function(fn)();
        }
        var props = {
            first: 'steve',
            last: 'strong',
            full: function () {
                return "hello all " + this.first + " - " + this.last;
            },
            xxx: xxx,
            yyy: yyy,
            zzz: evil(zzz),
            morestuff: function (x) {
                return this.first + " - " + this.last;
            }
        };
        this.def = new __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__["b" /* foConcept */]({
            first: 'mile',
            last: 'davis',
        });
        this.model = [
            this.def,
            this.def.newInstance(),
            // new foNode(props),
            // new foNode(props),
            new __WEBPACK_IMPORTED_MODULE_1__foundry_foNode_model__["a" /* foNode */](props)
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat'),
        __metadata("design:type", HTMLInputElement)
    ], WelcomeComponent.prototype, "inputRef", void 0);
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_signalr_service__["a" /* SignalRService */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    local: false,
    signalRServer: 'http://localhost:5001/chathub',
    signalfoundry: 'http://signalfoundry.azurewebsites.net/chathub'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map