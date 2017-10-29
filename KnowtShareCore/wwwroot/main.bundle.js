webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_stage_component__ = __webpack_require__("../../../../../src/app/canvas/stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__networkview_networkview_component__ = __webpack_require__("../../../../../src/app/networkview/networkview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listview_listview_component__ = __webpack_require__("../../../../../src/app/listview/listview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treeview_treeview_component__ = __webpack_require__("../../../../../src/app/treeview/treeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webglview_webglview_component__ = __webpack_require__("../../../../../src/app/webglview/webglview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_swimlaneview_swimlaneview_component__ = __webpack_require__("../../../../../src/app/swimlaneview/swimlaneview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__networkview_test_svg_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__networkview_test_svg_circle_component__ = __webpack_require__("../../../../../src/app/networkview/test-svg-circle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_6__app_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'webgl', component: __WEBPACK_IMPORTED_MODULE_7__webglview_webglview_component__["a" /* WebglviewComponent */] },
    { path: 'canvas', component: __WEBPACK_IMPORTED_MODULE_2__canvas_stage_component__["a" /* StageComponent */] },
    { path: 'svg', component: __WEBPACK_IMPORTED_MODULE_9__networkview_test_svg_component__["a" /* TestSvgComponent */] },
    { path: 'circle', component: __WEBPACK_IMPORTED_MODULE_10__networkview_test_svg_circle_component__["a" /* TestSvgCircleComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_5__treeview_treeview_component__["a" /* TreeviewComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_4__listview_listview_component__["a" /* ListviewComponent */] },
    { path: 'swim', component: __WEBPACK_IMPORTED_MODULE_8_app_swimlaneview_swimlaneview_component__["a" /* SwimlaneviewComponent */] },
    { path: 'network', component: __WEBPACK_IMPORTED_MODULE_3__networkview_networkview_component__["a" /* NetworkviewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
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

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<div class=\"navbar navbar-inverse \" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <a class='navbar-brand' [routerLink]=\"['/welcome']\">Welcome</a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right \">\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/canvas'] \">Canvas</a>\r\n\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/webgl'] \">WebGL</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/svg'] \">SVG</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/tree'] \">Tree</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/list'] \">List</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/swim'] \">Swim</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/network'] \">Network</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\" style=\"padding-top:0px\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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


var AppComponent = /** @class */ (function () {
    function AppComponent(toastrService, options, vcr) {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_maptokeys_pipe__["a" /* MaptoKeysPipe */],
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
                __WEBPACK_IMPORTED_MODULE_26__canvas_stage_component__["a" /* StageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
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

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cPoint; });
var cPoint = /** @class */ (function () {
    function cPoint(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return cPoint;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/selectionManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foComponent_model__ = __webpack_require__("../../../../../src/app/foundry/foComponent.model.ts");
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

var selectionManager = /** @class */ (function (_super) {
    __extends(selectionManager, _super);
    function selectionManager(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.myType = 'selectionManager';
        return _this;
    }
    return selectionManager;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foComponent_model__["a" /* foComponent */]));

//# sourceMappingURL=selectionManager.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/shape.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foComponent_model__ = __webpack_require__("../../../../../src/app/foundry/foComponent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("../../../../../src/app/canvas/point.ts");
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


var foShape = /** @class */ (function (_super) {
    __extends(foShape, _super);
    function foShape(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this._isSelected = false;
        _this._opacity = 1;
        _this.hitTest = function (hit) {
            var x = _this.x;
            var y = _this.y;
            var width = _this.width;
            var height = _this.height;
            if (hit.x < x)
                return false;
            if (hit.x > x + width)
                return false;
            if (hit.y < y)
                return false;
            if (hit.y > y + height)
                return false;
            return true;
        };
        _this.getOffset = function (loc) {
            var x = _this.x;
            var y = _this.y;
            return new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* cPoint */](x - loc.x, y - loc.y);
        };
        _this.getLocation = function () {
            var x = _this.x;
            var y = _this.y;
            return new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* cPoint */](x, y);
        };
        _this.setLocation = function (loc) {
            _this.x = loc.x;
            _this.y = loc.y;
            //structual type
            return {
                x: _this.x,
                y: _this.y
            };
        };
        _this.doMove = function (loc, offset) {
            _this.x = loc.x + (offset ? offset.x : 0);
            _this.y = loc.y + (offset ? offset.y : 0);
            //structual type
            return {
                x: _this.x,
                y: _this.y
            };
        };
        _this.drawHover = function (ctx) { };
        _this.drawSelected = function (ctx) { };
        _this.draw = function (ctx) {
            var x = _this.x;
            var y = _this.y;
            var width = _this.width;
            var height = _this.height;
            ctx.save();
            ctx.fillStyle = 'green';
            ctx.lineWidth = 1;
            ctx.globalAlpha = _this.opacity;
            ctx.fillRect(x, y, width, height);
            if (_this.isSelected) {
                ctx.strokeStyle = "red";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.rect(x, y, width, height);
                ctx.stroke();
            }
            ctx.restore();
        };
        _this.myType = 'foShape';
        _this.myGuid;
        return _this;
    }
    Object.defineProperty(foShape.prototype, "isSelected", {
        get: function () { return this._isSelected; },
        set: function (value) { this._isSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape.prototype, "x", {
        get: function () { return this._x || 0.0; },
        set: function (value) { this._x = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape.prototype, "y", {
        get: function () { return this._y || 0.0; },
        set: function (value) { this._y = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape.prototype, "width", {
        get: function () { return this._width || 0.0; },
        set: function (value) { this._width = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape.prototype, "height", {
        get: function () { return this._height || 0.0; },
        set: function (value) { this._height = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape.prototype, "opacity", {
        get: function () { return this._opacity || 1; },
        set: function (value) { this._opacity = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foShape.prototype, "asJson", {
        get: function () {
            return {
                myGuid: this.myGuid,
                x: this.x,
                y: this.y
            };
        },
        enumerable: true,
        configurable: true
    });
    foShape.prototype.toggleSelected = function () {
        this._isSelected = !this._isSelected;
    };
    return foShape;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foComponent_model__["a" /* foComponent */]));

//# sourceMappingURL=shape.model.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/shapeManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shapeManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foComponent_model__ = __webpack_require__("../../../../../src/app/foundry/foComponent.model.ts");
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

var shapeManager = /** @class */ (function (_super) {
    __extends(shapeManager, _super);
    function shapeManager(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.myType = 'shapeManager';
        return _this;
    }
    return shapeManager;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foComponent_model__["a" /* foComponent */]));

//# sourceMappingURL=shapeManager.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/stage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <a href=\"http://curran.github.io/HTML5Examples/\">Canvas Example  </a>\r\n  <a href=\"http://www.typescriptgames.com/HTML5CanvasBasics.html\">Canvas TypeScript Example  </a>\r\n  <a href=\"https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415\">Canvas with RX  </a>\r\n  <a href=\"https://www.w3schools.com/tags/ref_canvas.asp\">Canvas ref  </a>\r\n\r\n\r\n</p>\r\n<div class=\"row\">\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n      <button (click)=\"doAddShape()\" type=\"button\" class=\"btn btn-secondary\">add</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">delete</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">undo</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">duplicate</button>\r\n    </div>\r\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">5</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">6</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">7</button>\r\n    </div>\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">8</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <canvas class=\"col-md-8\" #canvas>\r\n  </canvas>\r\n  <div class=\"col-md-4\">\r\n    <pre class=\"well\">{{dictionary | json}}</pre>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_canvasDriver__ = __webpack_require__("../../../../../src/app/foundryDrivers/canvasDriver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shapeManager__ = __webpack_require__("../../../../../src/app/canvas/shapeManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectionManager__ = __webpack_require__("../../../../../src/app/canvas/selectionManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundry_foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shape_model__ = __webpack_require__("../../../../../src/app/canvas/shape.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foundry_foDictionary_model__ = __webpack_require__("../../../../../src/app/foundry/foDictionary.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_signalr_service__ = __webpack_require__("../../../../../src/app/common/signalr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_gsap__);
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

var StageComponent = /** @class */ (function () {
    //model = [this.dictionary];
    function StageComponent(signalR) {
        this.signalR = signalR;
        this.width = 1000;
        this.height = 800;
        this.screen2D = new __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_canvasDriver__["a" /* Sceen2D */]();
        this.shapeManager = new __WEBPACK_IMPORTED_MODULE_2__shapeManager__["a" /* shapeManager */]();
        this.selectionManager = new __WEBPACK_IMPORTED_MODULE_3__selectionManager__["a" /* selectionManager */]();
        this.shapelist = new Array();
        this.selections = new Array();
        this.dictionary = new __WEBPACK_IMPORTED_MODULE_7__foundry_foDictionary_model__["a" /* foDictionary */]();
    }
    StageComponent.prototype.findHitShape = function (loc) {
        for (var i = 0; i < this.shapelist.length; i++) {
            var shape = this.shapelist[i];
            if (shape.hitTest(loc)) {
                return shape;
            }
        }
        return null;
    };
    StageComponent.prototype.setupMouseEvents = function (canvas) {
        // Redraw the circle every time the mouse moves
        var _this = this;
        var shape = null;
        var mySelf = this;
        var offset = null;
        __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__["a" /* PubSub */].Sub('mousedown', function (loc, e) {
            shape = mySelf.findHitShape(loc);
            if (shape) {
                shape.isSelected = true;
                mySelf.selections.push(shape);
                offset = shape.getOffset(loc);
            }
            else {
                _this.dictionary.applyTo(function (item) {
                    item.isSelected = false;
                });
            }
            //Toast.success(JSON.stringify(loc), "mousedown");
        });
        __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__["a" /* PubSub */].Sub('mousemove', function (loc, e) {
            if (shape) {
                shape.doMove(loc, offset);
            }
            var overshape = mySelf.findHitShape(loc);
            if (overshape) {
                //overshape.drawHover(mySelf.context);
            }
        });
        __WEBPACK_IMPORTED_MODULE_4__foundry_foPubSub__["a" /* PubSub */].Sub('mouseup', function (loc, e) {
            var drop = shape.getLocation();
            drop['myGuid'] = shape['myGuid'];
            shape = null;
            //Toast.success(JSON.stringify(loc), "mouseup");
            _this.signalR.pubChannel("move", drop);
        });
    };
    StageComponent.prototype.createShape = function (init) {
        var base = {
            x: 20,
            y: 10,
            width: 190,
            height: 100
        };
        var shape = new __WEBPACK_IMPORTED_MODULE_6__shape_model__["a" /* foShape */](__WEBPACK_IMPORTED_MODULE_5__foundry_foTools__["a" /* Tools */].union(base, init));
        return shape;
    };
    StageComponent.prototype.addToModel = function (shape) {
        var _this = this;
        this.dictionary.findItem(shape.myGuid, function () {
            _this.dictionary.addItem(shape.myGuid, shape);
            _this.shapelist.push(shape);
        });
    };
    StageComponent.prototype.doAddShape = function () {
        var shape = this.createShape({
            x: 120,
            y: 110
        });
        this.addToModel(shape);
        var json = shape.asJson;
        //Toast.success(JSON.stringify(json), "add shape");
        this.signalR.pubChannel("addShape", json);
    };
    StageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvas = this.screen2D.setRoot(this.canvasRef.nativeElement, this.width, this.height);
        // we'll implement this method to start capturing mouse events
        this.setupMouseEvents(canvas);
        this.screen2D.render = function (context) {
            context.fillStyle = "yellow";
            context.fillRect(0, 0, _this.width, _this.height);
            _this.drawGrid(context);
            for (var i = 0; i < _this.shapelist.length; i++) {
                var shape = _this.shapelist[i];
                shape.draw(context);
            }
        };
        this.screen2D.go();
        this.signalR.start().then(function () {
            _this.signalR.subChannel("move", function (data) {
                _this.dictionary.found(data.myGuid, function (shape) {
                    var loc = data;
                    console.log(loc);
                    //shape.setLocation(loc);
                    //loc['opacity'] = 0.5;
                    loc['ease'] = __WEBPACK_IMPORTED_MODULE_9_gsap__["Back"].easeOut;
                    //Toast.info(JSON.stringify(loc), "move");
                    __WEBPACK_IMPORTED_MODULE_9_gsap__["TweenLite"].to(shape, .8, loc);
                });
            });
            _this.signalR.subChannel("addShape", function (json) {
                console.log(json);
                _this.dictionary.findItem(json.myGuid, function () {
                    var shape = _this.createShape(json);
                    _this.addToModel(shape);
                });
            });
        });
    };
    StageComponent.prototype.drawGrid = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'gray';
        //ctx.lineWidth = 0;
        var size = 50;
        //draw vertical...
        for (var i = 0; i < this.width; i += size) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.height);
        }
        //draw horizontal...
        for (var i = 0; i < this.height; i += size) {
            ctx.moveTo(0, i);
            ctx.lineTo(this.width, i);
        }
        ctx.stroke();
        ctx.restore();
    };
    StageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], StageComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StageComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StageComponent.prototype, "height", void 0);
    StageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-stage',
            template: __webpack_require__("../../../../../src/app/canvas/stage.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__common_signalr_service__["a" /* SignalRService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common_signalr_service__["a" /* SignalRService */]) === "function" && _b || Object])
    ], StageComponent);
    return StageComponent;
    var _a, _b;
}());

//# sourceMappingURL=stage.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/emitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Credit to https://gist.github.com/sasxa
// Imports

//https://scotch.io/tutorials/angular-2-http-requests-with-observables
var EmitterService = /** @class */ (function () {
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

var popupToast = /** @class */ (function () {
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
//# sourceMappingURL=emitter.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/maptokeys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaptoKeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaptoKeysPipe = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'maptokeys'
        })
    ], MaptoKeysPipe);
    return MaptoKeysPipe;
}());

//# sourceMappingURL=maptokeys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/common/signalr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignalRService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__ = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
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




//https://blogs.msdn.microsoft.com/webdev/2017/09/14/announcing-signalr-for-asp-net-core-2-0/
var SignalRService = /** @class */ (function () {
    function SignalRService() {
        this._started = false;
        //private hubURL = environment.signalRServer;
        this.hubURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].signalfoundry;
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
            this.hub.invoke('send', text);
        }
    };
    SignalRService.prototype.pubChannel = function (name, payload) {
        if (this.hub) {
            this.hub.invoke("broadcast", name, payload);
        }
    };
    SignalRService.prototype.subChannel = function (name, callback) {
        if (this.hub) {
            this.hub.on(name, function (data) {
                callback(data);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].warning("cannot connect at this moment", this.hubURL);
        }
    };
    SignalRService.prototype.receive = function (callback) {
        if (this.hub) {
            this.hub.on('send', function (data) {
                callback(data);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].warning("cannot connect at this moment", this.hubURL);
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
                __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["b" /* Toast */].success("Connected..", _this.hubURL);
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

//# sourceMappingURL=signalr.service.js.map

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

var foAttribute = /** @class */ (function (_super) {
    __extends(foAttribute, _super);
    function foAttribute(spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this, spec) || this;
        _this.myType = 'foAttribute';
        return _this;
    }
    return foAttribute;
}(__WEBPACK_IMPORTED_MODULE_0__foKnowledge_model__["a" /* foKnowledge */]));

var foViewAttribute = /** @class */ (function (_super) {
    __extends(foViewAttribute, _super);
    function foViewAttribute(source, spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this, spec) || this;
        _this._mySource = undefined;
        _this._mySource = source;
        _this.myType = 'foViewAttribute';
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

//# sourceMappingURL=foAttribute.model.js.map

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
var foCollection = /** @class */ (function (_super) {
    __extends(foCollection, _super);
    function foCollection(list) {
        if (list === void 0) { list = undefined; }
        var _this = _super.call(this) || this;
        _this.myType = 'foCollection';
        _this._members = new Array();
        list && list.forEach(function (item) { return _this.addMember(item); });
        return _this;
    }
    foCollection.prototype.isEmpty = function () {
        return this._members.length == 0;
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
    foCollection.prototype.findMember = function (name) {
        return this._members[0];
    };
    foCollection.prototype.getMember = function (id) {
        return this._members[id];
    };
    foCollection.prototype.addMember = function (obj) {
        this._members.push(obj);
    };
    foCollection.prototype.removeMember = function (obj) {
        this._members.push(obj);
    };
    Object.defineProperty(foCollection.prototype, "members", {
        get: function () {
            return this._members;
        },
        enumerable: true,
        configurable: true
    });
    return foCollection;
}(__WEBPACK_IMPORTED_MODULE_0__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foCollection.model.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foComponent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
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



var foComponent = /** @class */ (function (_super) {
    __extends(foComponent, _super);
    function foComponent(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.myType = 'foComponent';
        return _this;
    }
    foComponent.prototype.init = function (properties, subcomponents, parent) {
        var _this = this;
        var self = this;
        this.myName = properties && properties['myName'] ? properties['myName'] : 'unknown';
        //create a different behaviour
        __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(properties, function (key, value) {
            if (__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isFunction(value)) {
                __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].defineCalculatedProperty(self, key, value);
            }
            else {
                self[key] = value;
            }
        });
        this._subcomponents = new __WEBPACK_IMPORTED_MODULE_2__foCollection_model__["a" /* foCollection */]();
        subcomponents && subcomponents.forEach(function (item) { return _this.addSubcomponent(item); });
        return this;
    };
    //return a new collection that could be destroyed
    foComponent.prototype.subcomponents = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_2__foCollection_model__["a" /* foCollection */](this._subcomponents.members);
        return result.members;
    };
    return foComponent;
}(__WEBPACK_IMPORTED_MODULE_1__foNode_model__["a" /* foNode */]));

//# sourceMappingURL=foComponent.model.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foConcept.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foConcept; });
/* unused harmony export foProjection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foKnowledge_model__ = __webpack_require__("../../../../../src/app/foundry/foKnowledge.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__ = __webpack_require__("../../../../../src/app/foundry/foDictionary.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foAttribute_model__ = __webpack_require__("../../../../../src/app/foundry/foAttribute.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foObject_model__ = __webpack_require__("../../../../../src/app/foundry/foObject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foComponent_model__ = __webpack_require__("../../../../../src/app/foundry/foComponent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foNode_model__ = __webpack_require__("../../../../../src/app/foundry/foNode.model.ts");
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








var foConcept = /** @class */ (function (_super) {
    __extends(foConcept, _super);
    function foConcept(properties) {
        var _this = _super.call(this, properties) || this;
        _this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_5__foObject_model__["a" /* foObject */]();
        };
        _this._attributes = new __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__["a" /* foDictionary */]({ myName: 'attributes' });
        _this._projections = new __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__["a" /* foDictionary */]({ myName: 'prohections' });
        _this._spec = properties || {};
        _this.myType = 'foConcept';
        _this.createNode();
        return _this;
        //this.createComponent();
    }
    Object.defineProperty(foConcept.prototype, "attributes", {
        get: function () {
            if (!this._attributes) {
                this._attributes = new __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__["a" /* foDictionary */]({ myName: 'attributes' });
            }
            return this._attributes;
        },
        enumerable: true,
        configurable: true
    });
    foConcept.prototype.establishAttribute = function (key, spec) {
        if (spec === void 0) { spec = undefined; }
        var attributes = this.attributes;
        var attribute = attributes.getItem(key);
        if (!attribute) {
            attribute = attributes.addItem(key, new __WEBPACK_IMPORTED_MODULE_4__foAttribute_model__["a" /* foAttribute */](spec));
            attribute.myName = key;
            __WEBPACK_IMPORTED_MODULE_1__foPubSub__["a" /* PubSub */].Pub("attribute", ["added", this, attribute]);
        }
        return attribute;
    };
    Object.defineProperty(foConcept.prototype, "projections", {
        get: function () {
            if (!this._projections) {
                this._projections = new __WEBPACK_IMPORTED_MODULE_3__foDictionary_model__["a" /* foDictionary */]({ myName: 'projections' });
            }
            return this._projections;
        },
        enumerable: true,
        configurable: true
    });
    foConcept.prototype.establishProjection = function (key, spec) {
        if (spec === void 0) { spec = undefined; }
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
                spec: this._spec,
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
            result.attributes = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].asArray(this.attributes.asJson);
            result.projections = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].asArray(this.projections.asJson);
            //let result = this.jsonMerge(this._attributes.values);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    foConcept.prototype.newInstance = function (properties, subcomponents, parent) {
        var fullSpec = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].union(this._spec, properties);
        var result = this._create(fullSpec, subcomponents, parent);
        return result;
    };
    //start fluent interface
    foConcept.prototype.target = function () {
        return this;
    };
    foConcept.prototype.createNode = function () {
        this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_7__foNode_model__["a" /* foNode */](properties, subcomponents, parent);
        };
        return this;
    };
    foConcept.prototype.createComponent = function () {
        this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_6__foComponent_model__["a" /* foComponent */](properties, subcomponents, parent);
        };
        return this;
    };
    foConcept.prototype.createCustom = function (funct) {
        this._create = funct;
        return this;
    };
    return foConcept;
}(__WEBPACK_IMPORTED_MODULE_2__foKnowledge_model__["a" /* foKnowledge */]));

var foProjection = /** @class */ (function (_super) {
    __extends(foProjection, _super);
    function foProjection(source, properties) {
        var _this = _super.call(this, properties) || this;
        _this._mySource = undefined;
        _this._mySource = source;
        _this.myType = 'foProjection';
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

//# sourceMappingURL=foConcept.model.js.map

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


var foDictionary = /** @class */ (function (_super) {
    __extends(foDictionary, _super);
    function foDictionary(spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this, spec) || this;
        _this._lookup = {};
        _this.myType = 'foDictionary';
        return _this;
    }
    foDictionary.prototype.addItem = function (key, obj) {
        this._lookup[key] = obj;
        return obj;
    };
    foDictionary.prototype.getItem = function (key) {
        var result = this._lookup[key];
        return result;
    };
    foDictionary.prototype.findItem = function (key, onMissing) {
        var found = this.getItem(key);
        if (!found && onMissing) {
            onMissing();
            found = this.getItem(key);
        }
        return found;
    };
    foDictionary.prototype.found = function (key, onFound) {
        var found = this.getItem(key);
        if (found && onFound) {
            onFound(found);
            found = this.getItem(key);
        }
        return found;
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

//# sourceMappingURL=foDictionary.model.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foKnowledge.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foKnowledge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foObject_model__ = __webpack_require__("../../../../../src/app/foundry/foObject.model.ts");
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


var foKnowledge = /** @class */ (function (_super) {
    __extends(foKnowledge, _super);
    function foKnowledge(spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this) || this;
        _this.myType = 'foKnowledge';
        _this.myName = spec && spec['myName'] ? spec['myName'] : 'unknown';
        _this.init(spec);
        return _this;
    }
    foKnowledge.prototype.init = function (spec) {
        var _this = this;
        spec && __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(spec, function (key, value) {
            if (__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isFunction(value)) {
                __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].defineCalculatedProperty(_this, key, value);
            }
            else {
                _this[key] = value;
            }
        });
        return this;
    };
    return foKnowledge;
}(__WEBPACK_IMPORTED_MODULE_1__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foKnowledge.model.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foNode.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foObject_model__ = __webpack_require__("../../../../../src/app/foundry/foObject.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__("../../../../../src/app/foundry/foCollection.model.ts");
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



var foNode = /** @class */ (function (_super) {
    __extends(foNode, _super);
    function foNode(properties, subcomponents, parent) {
        var _this = _super.call(this) || this;
        _this._index = 0;
        _this.myType = 'foNode';
        _this.init(properties, subcomponents, parent);
        return _this;
    }
    foNode.prototype.init = function (properties, subcomponents, parent) {
        var _this = this;
        var self = this;
        properties && __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(properties, function (key, value) {
            if (__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isFunction(value)) {
                __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].defineCalculatedProperty(self, key, value);
            }
            else {
                self[key] = value;
            }
        });
        this._subcomponents = new __WEBPACK_IMPORTED_MODULE_2__foCollection_model__["a" /* foCollection */]();
        subcomponents && subcomponents.forEach(function (item) { return _this.addSubcomponent(item); });
        return this;
    };
    Object.defineProperty(foNode.prototype, "myGuid", {
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
    //todo modify api to take bote item and array
    foNode.prototype.addSubcomponent = function (obj) {
        if (!obj)
            return;
        if (!obj.myParent) {
            obj.myParent = this;
            obj._index = this._subcomponents.length;
        }
        this._subcomponents.addMember(obj);
        return obj;
    };
    foNode.prototype.removeSubcomponent = function (obj) {
        if (!obj)
            return;
        if (obj.myParent == this) {
            obj.myParent = undefined;
            obj._index = 0;
        }
        this._subcomponents.removeMember(obj);
    };
    Object.defineProperty(foNode.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    foNode.prototype.getChildAt = function (i) {
        if (this.hasSubcomponents) {
            return this._subcomponents.getMember(i);
        }
    };
    Object.defineProperty(foNode.prototype, "prevChild", {
        get: function () {
            var prev = this.index - 1;
            if (this.myParent && prev > -1) {
                var found = this.myParent.getChildAt(prev);
                return found;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "nextChild", {
        get: function () {
            var next = this.index + 1;
            if (this.myParent && next < this._subcomponents.length) {
                var found = this.myParent.getChildAt(next);
                return found;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "Subcomponents", {
        get: function () {
            return this._subcomponents.members;
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
            return this._subcomponents && this._subcomponents.hasMembers;
        },
        enumerable: true,
        configurable: true
    });
    return foNode;
}(__WEBPACK_IMPORTED_MODULE_1__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foNode.model.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foObject.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__("../../../../../src/app/foundry/foTools.ts");

var foObject = /** @class */ (function () {
    function foObject() {
        this.myName = 'unknown';
        this.myType = 'foObject';
        this.myParent = undefined;
    }
    foObject.prototype.asReference = function () {
        if (this.myParent === undefined) {
            return "\'root\'";
        }
        return this.myName + "." + this.myParent.asReference();
    };
    Object.defineProperty(foObject.prototype, "hasParent", {
        get: function () {
            return this.myParent ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    foObject.prototype.getChildAt = function (i) {
        return undefined;
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

//# sourceMappingURL=foObject.model.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foPubSub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSub; });

var foPubSub = /** @class */ (function () {
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
    }
    return foPubSub;
}());
var PubSub = new foPubSub();
//# sourceMappingURL=foPubSub.js.map

/***/ }),

/***/ "../../../../../src/app/foundry/foTools.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export foTools */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tools; });

var foTools = /** @class */ (function () {
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
                return 'resolveRef(' + value.asReference() + ',' + value.myType + ')';
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
//# sourceMappingURL=foTools.js.map

/***/ }),

/***/ "../../../../../src/app/foundryDrivers/canvasDriver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sceen2D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__ = __webpack_require__("../../../../../src/app/foundry/foPubSub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_point__ = __webpack_require__("../../../../../src/app/canvas/point.ts");


function doAnimate(mySelf) {
    function animate() {
        requestAnimationFrame(animate);
        mySelf.render(mySelf.context);
    }
    animate();
}
var Sceen2D = /** @class */ (function () {
    function Sceen2D() {
    }
    Sceen2D.prototype.go = function () {
        doAnimate(this);
    };
    Sceen2D.prototype.setRoot = function (nativeElement, width, height) {
        this.canvas = nativeElement;
        this.context = this.canvas.getContext("2d");
        // set the width and height
        this.canvas.width = width;
        this.canvas.height = height;
        // set some default properties about the line
        this.context.lineWidth = 3;
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#000';
        this.setupMouseEvents(nativeElement);
        return nativeElement;
    };
    Sceen2D.prototype.setupMouseEvents = function (canvas) {
        function getMousePos(evt) {
            var rect = canvas.getBoundingClientRect();
            return new __WEBPACK_IMPORTED_MODULE_1__canvas_point__["a" /* cPoint */](evt.clientX - rect.left, evt.clientY - rect.top);
        }
        canvas.addEventListener('mousedown', function (e) {
            var loc = getMousePos(e);
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mousedown', loc, e);
        });
        canvas.addEventListener('mousemove', function (e) {
            var loc = getMousePos(e);
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mousemove', loc, e);
        });
        canvas.addEventListener('mouseup', function (e) {
            var loc = getMousePos(e);
            __WEBPACK_IMPORTED_MODULE_0__foundry_foPubSub__["a" /* PubSub */].Pub('mouseup', loc, e);
        });
    };
    return Sceen2D;
}());

//# sourceMappingURL=canvasDriver.js.map

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
var Diagram = /** @class */ (function () {
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

//# sourceMappingURL=diagramDriver.js.map

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
var Sceen3D = /** @class */ (function () {
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

//# sourceMappingURL=threeDriver.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListviewComponent = /** @class */ (function () {
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

//# sourceMappingURL=listview.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
var DockerecosystemComponent = /** @class */ (function () {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__["a" /* DockerecosystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__["a" /* DockerecosystemService */]) === "function" && _b || Object])
    ], DockerecosystemComponent);
    return DockerecosystemComponent;
    var _a, _b;
}());

//# sourceMappingURL=dockerecosystem.component.js.map

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


var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(properties) {
        var _this = _super.call(this, properties) || this;
        _this.color = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_1_d3__["k" /* schemeCategory20 */]);
        _this.myType = 'Shape';
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
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__["a" /* foConcept */]));

var DockerecosystemModel = /** @class */ (function () {
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

//# sourceMappingURL=dockerecosystem.model.js.map

/***/ }),

/***/ "../../../../../src/app/networkview/dockerecosystem.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
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







var DockerecosystemService = /** @class */ (function () {
    function DockerecosystemService(http) {
        this.http = http;
    }
    DockerecosystemService.prototype.getModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
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
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    DockerecosystemService.prototype.getEcosystem = function () {
        var source = this.http.get('dockerecosystem.json');
        //source.do(this.extractData)
        //  .catch(this.handleError);
        return source;
    };
    DockerecosystemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], DockerecosystemService);
    return DockerecosystemService;
    var _a;
}());

//# sourceMappingURL=dockerecosystem.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkviewComponent = /** @class */ (function () {
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

//# sourceMappingURL=networkview.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var TestForcediagramComponent = /** @class */ (function () {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
    ], TestForcediagramComponent);
    return TestForcediagramComponent;
    var _a, _b;
}());

//# sourceMappingURL=test-forcediagram.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestSvgCircleComponent = /** @class */ (function () {
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

//# sourceMappingURL=test-svg-circle.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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


var TestSvgComponent = /** @class */ (function () {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object])
    ], TestSvgComponent);
    return TestSvgComponent;
    var _a, _b;
}());

//# sourceMappingURL=test-svg.component.js.map

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


var svgConcept = /** @class */ (function (_super) {
    __extends(svgConcept, _super);
    function svgConcept(properties) {
        var _this = _super.call(this, properties) || this;
        _this.myType = 'svgConcept';
        _this.createCustom(function (properties, subcomponents, parent) {
            return new svgShapeView(properties, subcomponents, parent);
        });
        return _this;
    }
    return svgConcept;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__["a" /* foConcept */]));

var svgShapeView = /** @class */ (function (_super) {
    __extends(svgShapeView, _super);
    function svgShapeView(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.isSelected = false;
        _this.myType = 'svgShapeView';
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

var SwimDictionary = /** @class */ (function () {
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

//# sourceMappingURL=swim.model.js.map

/***/ }),

/***/ "../../../../../src/app/swimlaneview/swim.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__("../../../../../src/app/common/emitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
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









var SwimService = /** @class */ (function () {
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
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], SwimService);
    return SwimService;
    var _a;
}());

//# sourceMappingURL=swim.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
var SwimelementComponent = /** @class */ (function () {
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */]) === "function" && _a || Object)
    ], SwimelementComponent.prototype, "viewModel", void 0);
    SwimelementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[foundry-swimelement]',
            template: __webpack_require__("../../../../../src/app/swimlaneview/swimelement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/swimlaneview/swimelement.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
    ], SwimelementComponent);
    return SwimelementComponent;
    var _a, _b;
}());

//# sourceMappingURL=swimelement.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
var SwimlaneComponent = /** @class */ (function () {
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */]) === "function" && _a || Object)
    ], SwimlaneComponent.prototype, "viewModel", void 0);
    SwimlaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[foundry-swimlane]',
            template: __webpack_require__("../../../../../src/app/swimlaneview/swimlane.component.html"),
            styles: [__webpack_require__("../../../../../src/app/swimlaneview/swimlane.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
    ], SwimlaneComponent);
    return SwimlaneComponent;
    var _a, _b;
}());

//# sourceMappingURL=swimlane.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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



var SwimlaneviewComponent = /** @class */ (function () {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__["a" /* SwimService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__["a" /* SwimService */]) === "function" && _b || Object])
    ], SwimlaneviewComponent);
    return SwimlaneviewComponent;
    var _a, _b;
}());

//# sourceMappingURL=swimlaneview.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeitemComponent = /** @class */ (function () {
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

//# sourceMappingURL=treeitem.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeviewComponent = /** @class */ (function () {
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

//# sourceMappingURL=treeview.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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


var TestSceen1Component = /** @class */ (function () {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
    ], TestSceen1Component);
    return TestSceen1Component;
    var _a;
}());

//# sourceMappingURL=test-sceen1.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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

var WebglviewComponent = /** @class */ (function () {
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

//# sourceMappingURL=webglview.component.js.map

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

module.exports = "<p>\r\n    Sample Models generated by Foundry\r\n</p>\r\n\r\n<a target=\"_blank\" href=\"https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html\">SVG and Canvas Graphics in Angular 2</a>\r\n\r\n<button type=\"button\" (click)=\"doToast()\">toast test</button>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>{{model['full']}}</h1>\r\n\r\n        <pre class=\"well\">{{model | json}}</pre>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>SignalR Chat</h1>\r\n        <input type=\"text\" #chat (keyup)=\"onKeyUp(chat.value)\" (keyup.enter)=\"onInput(chat.value)\">\r\n        <button (click)=\"doPost()\">Go</button>\r\n        <br>\r\n        <pre class=\"well\">{{typeinText}}</pre>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>SignalR Text</h1>\r\n        <div *ngFor=\"let item of postList\">{{item}}</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(signalR) {
        this.signalR = signalR;
        this.typeinText = '';
        this.postList = [];
        this.model = [];
        this.def = new __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__["a" /* foConcept */]();
    }
    WelcomeComponent.prototype.doToast = function () {
        __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__["b" /* Toast */].info("info message", "my title");
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
        this.def = new __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__["a" /* foConcept */]({
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
        __metadata("design:type", Object)
    ], WelcomeComponent.prototype, "inputRef", void 0);
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'foundry-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_signalr_service__["a" /* SignalRService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_signalr_service__["a" /* SignalRService */]) === "function" && _a || Object])
    ], WelcomeComponent);
    return WelcomeComponent;
    var _a;
}());

//# sourceMappingURL=welcome.component.js.map

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
    signalRServer: 'http://localhost:5001/chathub',
    signalfoundry: 'http://signalfoundry.azurewebsites.net/chathub'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

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