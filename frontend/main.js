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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-wrap\" fxLayout=\"column\">\n    <app-settings fxFlex=\"nogrow\"></app-settings>\n    <div fxFlex=\"auto\" class=\"img-holder\">\n        <app-images></app-images>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep html, ::ng-deep body {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0; }\n\n.main-wrap {\n  width: 100%;\n  height: 100%; }\n\n.img-holder {\n  position: relative;\n  overflow: hidden; }\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _services_imgur_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/imgur.service */ "./src/app/services/imgur.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _components_images_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/images/images.component */ "./src/app/components/images/images.component.ts");
/* harmony import */ var _components_images_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/images/image.component */ "./src/app/components/images/image.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_images_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"],
                _components_images_images_component__WEBPACK_IMPORTED_MODULE_8__["ImagesComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            entryComponents: [
                _components_images_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"],
            ],
            providers: [_services_imgur_service__WEBPACK_IMPORTED_MODULE_0__["ImgurService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/images/image.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/images/image.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"inner\" [style.width.px]=\"size\" [style.height.px]=\"size\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img *ngIf=\"isImage\" [src]=\"image.link\"/>\n        <video autoplay *ngIf=\"isVideo\" >\n            <source [src]=\"image.link\" [type]=\"image.type\">\n        </video>\n        <div *ngIf=\"!isImage && !isVideo\">\n            {{ image.type }}\n            {{ image.link }}\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/images/image.component.scss":
/*!********************************************************!*\
  !*** ./src/app/components/images/image.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img, video {\n  max-width: 100%;\n  max-height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/images/image.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/images/image.component.ts ***!
  \******************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
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

var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    Object.defineProperty(ImageComponent.prototype, "isImage", {
        get: function () {
            return this.image.type.indexOf('image/') === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "isVideo", {
        get: function () {
            return this.image.type.indexOf('video/') === 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageComponent.prototype, "size", void 0);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/components/images/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/components/images/image.component.scss")],
        })
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/components/images/images.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/images/images.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #holder class=\"holder\" fxLayout=\"row break\" *ngIf=\"images\">\n    <!-- <div *ngFor=\"let image of images\">\n        <a [href]=\"image.link\" target=\"_blank\" *ngIf=\"isValid(image)\">\n            <app-image *ngIf=\"!image.is_album\" [size]=\"imageSize\" [image]=\"image\"></app-image>\n            <app-image *ngIf=\"image.is_album\" [size]=\"imageSize\" [image]=\"image.images[0]\"></app-image>\n        </a>\n    </div> -->\n\n    <div #componentHost></div>\n</div>"

/***/ }),

/***/ "./src/app/components/images/images.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/images/images.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.holder {\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/images/images.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/images/images.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.component */ "./src/app/components/images/image.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_imgur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/imgur.service */ "./src/app/services/imgur.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(imgur, settings, cfResolver) {
        this.imgur = imgur;
        this.settings = settings;
        this.cfResolver = cfResolver;
        this.componentMap = new Map();
        this.refs = [];
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refs = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.imgur.update(this.settings.settings.gallery);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.settings.settings.delay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this.imgur.update(_this.settings.settings.gallery);
        });
        this.imgur.images$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function (images) {
            _this.images = images;
            _this.onResize();
            _this.updateComponents();
        });
    };
    ImagesComponent.prototype.updateComponents = function () {
        var _this = this;
        var numCreated = 0;
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
            var image = _a[_i];
            if (!image || this.componentMap.has(image.link)) {
                continue;
            }
            this.createComponent(image);
            numCreated++;
        }
        this.refs = this.refs.filter(function (ref, index) {
            ref.instance.size = _this.imageSize;
            var remove = index >= _this.images.length;
            if (remove) {
                _this.componentMap.delete(ref.instance.image.link);
                _this.componentHost.remove(_this.componentHost.indexOf(ref));
            }
            return !remove;
        });
    };
    ImagesComponent.prototype.createComponent = function (image) {
        var factory = this.cfResolver.resolveComponentFactory(_image_component__WEBPACK_IMPORTED_MODULE_0__["ImageComponent"]);
        var ref = this.componentHost.createComponent(factory, 0);
        ref.instance.image = image.is_album ? image.images[0] : image;
        ref.instance.size = this.imageSize;
        this.refs.unshift(ref);
        this.componentMap.set(image.link, ref.instance);
    };
    ImagesComponent.prototype.update = function () {
        var _this = this;
        this.imgur.update(this.settings.settings.gallery);
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(this.settings.settings.delay, function () {
            _this.timer = null;
            _this.update();
        });
    };
    ImagesComponent.prototype.getSize = function (numImages) {
        if (!this.holder) {
            return null;
        }
        var body = this.holder.nativeElement;
        var maxH = body.clientHeight;
        var maxW = body.clientWidth;
        var maxSquares = 1;
        var size = Math.min(maxH, maxW);
        var h = 1;
        var w = 1;
        while (numImages > maxSquares) {
            if (maxH / (h + 1) >= maxW / (w + 1)) {
                h++;
            }
            else {
                w++;
            }
            maxSquares = h * w;
            size = Math.min(maxH / h, maxW / w);
        }
        return size;
    };
    ImagesComponent.prototype.isValid = function (image) {
        var valid = !!image;
        valid = valid && (!image.is_album || (image.is_album && image.images && image.images.length > 0));
        return valid;
    };
    ImagesComponent.prototype.onResize = function () {
        var _this = this;
        this.imageSize = this.getSize(this.images ? this.images.filter(function (x) { return _this.isValid(x); }).length : 50);
    };
    ImagesComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('holder'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], ImagesComponent.prototype, "holder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('componentHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])
    ], ImagesComponent.prototype, "componentHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImagesComponent.prototype, "onResize", null);
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/components/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.scss */ "./src/app/components/images/images.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_imgur_service__WEBPACK_IMPORTED_MODULE_2__["ImgurService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"row\">\n    <select fxFlex=\"nogrow\" (change)=\"update()\" [(ngModel)]=\"gallerySetting\">\n        <option value=\"hot\">hot</option>\n        <option value=\"top\">top</option>\n        <option value=\"user\">user submitted</option>\n        <option value=\"custom\">custom</option>\n    </select>\n    <input fxFlex=\"nogrow\" (change)=\"update()\" type=\"text\" [(ngModel)]=\"settings.settings.gallery.gallery\" *ngIf=\"gallerySetting === 'custom'\" />\n    <select fxFlex=\"nogrow\" (change)=\"update()\" [(ngModel)]=\"settings.settings.gallery.sort\">\n        <option value=\"viral\">viral</option>\n        <option value=\"top\">top</option>\n        <option value=\"time\">time</option>\n    </select>\n    <div fxFlex=\"nogrow\">\n        <input type=\"checkbox\" id=\"chkViral\" (change)=\"update()\" [(ngModel)]=\"settings.settings.gallery.showViral\">\n        <label for=\"chkViral\">Most viral</label>\n    </div>\n    <input fxFlex=\"nogrow\" type=\"number\" (change)=\"update()\" [(ngModel)]=\"refresh\" step=\"1\" min=\"5\" max=\"30\"/>\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _interfaces_gallery_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../interfaces/gallery.interfaces */ "./src/app/interfaces/gallery.interfaces.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settings) {
        var _this = this;
        this.settings = settings;
        this.gallerySetting = settings.settings.gallery.gallery;
        this.refresh = settings.settings.delay / 1000;
        if (!_interfaces_gallery_interfaces__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TYPES"].find(function (item) { return item === _this.gallerySetting; })) {
            this.gallerySetting = 'custom';
        }
    }
    SettingsComponent.prototype.update = function () {
        if (this.gallerySetting !== 'custom') {
            this.settings.settings.gallery.gallery = this.gallerySetting;
        }
        this.settings.settings.delay = this.refresh * 1000;
        this.settings.save();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/gallery.interfaces.ts":
/*!**************************************************!*\
  !*** ./src/app/interfaces/gallery.interfaces.ts ***!
  \**************************************************/
/*! exports provided: Sorting, DEFAULT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorting", function() { return Sorting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TYPES", function() { return DEFAULT_TYPES; });
var Sorting;
(function (Sorting) {
    Sorting["VIRAL"] = "viral";
    Sorting["TOP"] = "top";
    Sorting["TIME"] = "time";
})(Sorting || (Sorting = {}));
var DEFAULT_TYPES = ['hot', 'top', 'user'];


/***/ }),

/***/ "./src/app/services/imgur.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/imgur.service.ts ***!
  \*******************************************/
/*! exports provided: ImgurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgurService", function() { return ImgurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImgurService = /** @class */ (function () {
    function ImgurService(http) {
        this.http = http;
        this.images$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    ImgurService.prototype.update = function (gallery) {
        var _this = this;
        var url = this.host + "/" + gallery.gallery + "/" + gallery.sort + "/" + (gallery.showViral ? 'true' : 'false') + "/raw";
        this.http.get(url).subscribe(function (data) {
            if (data.error && data.error.error) {
                console.error(data.error.error);
            }
            if (data && data.list && data.list.length > 0) {
                _this.mergeList(data.list);
            }
        });
    };
    ImgurService.prototype.mergeList = function (newList) {
        var original = this.images$.value;
        original.map(function (item, index) {
            if (!newList.find(function (newItem) { return newItem.link === item.link; })) {
                delete original[index];
            }
        });
        newList.map(function (item) {
            if (!original.find(function (newItem) { return newItem && newItem.link === item.link; })) {
                original.unshift(item);
            }
        });
        this.images$.next(original);
    };
    Object.defineProperty(ImgurService.prototype, "host", {
        get: function () {
            var host = location.host.split(':')[0];
            var prefix = location.href.split('://')[0];
            return prefix + "://" + host + ":9001";
        },
        enumerable: true,
        configurable: true
    });
    ImgurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImgurService);
    return ImgurService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_gallery_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/gallery.interfaces */ "./src/app/interfaces/gallery.interfaces.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.updated$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.default = {
            delay: 10000,
            gallery: {
                gallery: 'aww',
                sort: _interfaces_gallery_interfaces__WEBPACK_IMPORTED_MODULE_2__["Sorting"].TIME,
                showViral: false,
            }
        };
        this.load();
    }
    SettingsService.prototype.save = function () {
        localStorage.setItem('settings', JSON.stringify(this.settings));
        this.updated$.next();
    };
    SettingsService.prototype.load = function () {
        var load = localStorage.getItem('settings');
        if (load) {
            this.settings = JSON.parse(load);
        }
        else {
            this.settings = this.default;
        }
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
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

module.exports = __webpack_require__(/*! D:\Daten\Documents\Projekte\ImgurStream\imgurstream\frontend-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map