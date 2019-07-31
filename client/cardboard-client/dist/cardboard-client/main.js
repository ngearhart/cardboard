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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routing_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing-components */ "./src/app/routing-components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: '', component: _routing_components__WEBPACK_IMPORTED_MODULE_2__["MusicManagerComponent"] },
    { path: 'parts', component: _routing_components__WEBPACK_IMPORTED_MODULE_2__["PartManagerComponent"] },
    { path: 'users', component: _routing_components__WEBPACK_IMPORTED_MODULE_2__["UserManagerComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"title\" class=\"docs-navbar-header app-navbar\">\n  <h1 class=\"mat-display-1\">Cardboard</h1>\n  <h4 class=\"mat-subheading-1\">BLUE BAND DIGITAL LIBRARY</h4>\n</div>\n\n<table style=\"width:100%;height:100%;border-collapse: collapse;\">\n  <tbody>\n    <tr>\n      <td style=\"height:4em;\"></td>\n    </tr>\n    <tr><td style=\"padding: 0.5em;width: 15vw;box-shadow: 0px 0px 20px 5px rgba(50, 50, 50, 0.5);\">\n      <div style=\"height:100%;padding-top: 3em;\">\n          <navBar></navBar>\n        </div>\n      </td><td>\n        <div style=\"width:100%;height:100%;padding:2em 1em;\">\n            <router-outlet></router-outlet>\n          </div>\n        </td></tr>\n      </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cardboard-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.objectKeys = Object.keys;
        this.links = { "All Music": "/", "Manage Parts": "/parts", "Manage Users": "/users" };
    }
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navBar',
            template: __webpack_require__(/*! ./navBar.html */ "./src/app/navBar.html")
        })
    ], NavBarComponent);
    return NavBarComponent;
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _routing_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing-components */ "./src/app/routing-components.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _routing_components__WEBPACK_IMPORTED_MODULE_10__["MusicManagerComponent"],
                _routing_components__WEBPACK_IMPORTED_MODULE_10__["PartManagerComponent"],
                _routing_components__WEBPACK_IMPORTED_MODULE_10__["UserManagerComponent"],
                _routing_components__WEBPACK_IMPORTED_MODULE_10__["MusicViewerDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [
                _routing_components__WEBPACK_IMPORTED_MODULE_10__["MusicViewerDialog"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navBar.html":
/*!*****************************!*\
  !*** ./src/app/navBar.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button color=\"primary\" *ngFor=\"let link of objectKeys(links)\" [routerLink]=\"links[link]\" style=\"width:100%;text-align: left;\">\r\n    {{link}}\r\n    <mat-icon style=\"float:right; padding-top: 4%;\" class=\"rotating-icon mat-icon\" role=\"img\" svgicon=\"keyboard_arrow_right\" aria-hidden=\"true\"><svg focusable=\"false\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\"></path></svg></mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/routing-components.ts":
/*!***************************************!*\
  !*** ./src/app/routing-components.ts ***!
  \***************************************/
/*! exports provided: MusicManagerComponent, MusicViewerDialog, PartManagerComponent, UserManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicManagerComponent", function() { return MusicManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicViewerDialog", function() { return MusicViewerDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartManagerComponent", function() { return PartManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerComponent", function() { return UserManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MusicManagerComponent = /** @class */ (function () {
    //ViewChild('loading') spinner: MatSpinner;
    function MusicManagerComponent(http, dialog) {
        var _this = this;
        this.dialog = dialog;
        this.music = [];
        this.unloaded = true;
        http.get("http://" + window.location.hostname + "/box-api/list-music").subscribe(function (res) {
            _this.unloaded = false;
            var data = res.json();
            _this.music = data;
        });
    }
    MusicManagerComponent.prototype.openViewer = function (id, title) {
        this.dialog.open(MusicViewerDialog, { data: { id: id, title: title } });
    };
    MusicManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'music-manager',
            template: __webpack_require__(/*! ./routing-components/music-manager.html */ "./src/app/routing-components/music-manager.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MusicManagerComponent);
    return MusicManagerComponent;
}());

var MusicViewerDialog = /** @class */ (function () {
    function MusicViewerDialog(self, data, sanitizer) {
        this.self = self;
        this.frameLoaded = false;
        this.title = data.title;
        this.id = data.id;
        this.url = sanitizer.bypassSecurityTrustResourceUrl("box-api/download?id=" + this.id);
    }
    MusicViewerDialog.prototype.ngOnInit = function () {
        // - - - Only necessary if using id. Multiple dialogs might break this
        // var i: number = 0;
        // while (!document.getElementById('cdk-overlay-' + i++));
        // document.getElementById('cdk-overlay-' + --i).style.maxWidth = '100vw';
        document.getElementsByClassName("cdk-overlay-pane")[0]["style"].maxWidth = '100vw';
    };
    MusicViewerDialog.prototype.close = function () {
        this.self.close();
    };
    MusicViewerDialog.prototype.iframeLoaded = function () {
        this.frameLoaded = true;
        this.iframe.nativeElement.style.visibility = "visible";
        console.log("load");
        //this.iframe.nativeElement.width = 0.45 * window.outerWidth;
        //this.iframe.nativeElement.height = 0.9 * window.outerHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MusicViewerDialog.prototype, "iframe", void 0);
    MusicViewerDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'music-viewer-dialog',
            template: __webpack_require__(/*! ./routing-components/music-viewer-dialog.html */ "./src/app/routing-components/music-viewer-dialog.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], MusicViewerDialog);
    return MusicViewerDialog;
}());

var PartManagerComponent = /** @class */ (function () {
    function PartManagerComponent() {
    }
    PartManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'part-manager',
            template: '<p>Part Manager</p>'
        })
    ], PartManagerComponent);
    return PartManagerComponent;
}());

var UserManagerComponent = /** @class */ (function () {
    function UserManagerComponent() {
    }
    UserManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-manager',
            template: '<p>User Manager</p>'
        })
    ], UserManagerComponent);
    return UserManagerComponent;
}());



/***/ }),

/***/ "./src/app/routing-components/music-manager.html":
/*!*******************************************************!*\
  !*** ./src/app/routing-components/music-manager.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"unloaded\" style=\"margin:auto;margin-top:20vh;\"></mat-spinner>\r\n<mat-list *ngIf=\"!unloaded\">\r\n    <h3 mat-subheader style=\"color:rgba(0,0,0,.54);\">Music</h3>\r\n    <mat-list-item *ngFor=\"let song of music\" (click)=\"openViewer(song.id, song.title);\">\r\n        <h4 mat-line>{{song.title}}</h4>\r\n    </mat-list-item>\r\n</mat-list>"

/***/ }),

/***/ "./src/app/routing-components/music-viewer-dialog.html":
/*!*************************************************************!*\
  !*** ./src/app/routing-components/music-viewer-dialog.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{title}}</h1>\r\n<div mat-dialog-content>\r\n    <mat-spinner *ngIf=\"!frameLoaded\" style=\"margin:auto;margin-top:20vh;\"></mat-spinner>\r\n    <iframe #iframe [src]=\"url\" (load)=\"iframeLoaded()\" style=\"height: 60vh;width:45vw;visibility:hidden;\"></iframe>\r\n    <div style=\"width:45vw;padding-left:1em;height:60vh;float:right;\">\r\n        <h3>Content</h3>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions style=\"float:right;\">\r\n    <button mat-button (click)=\"close()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Save</button>\r\n</div>"

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
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\noahl\Desktop\Version Controlled Projects\cardboardbb\client\cardboard-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map