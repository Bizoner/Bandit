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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _studio_studio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studio/studio.component */ "./src/app/studio/studio.component.ts");
/* harmony import */ var _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favoriets/favoriets.component */ "./src/app/favoriets/favoriets.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-band/new-band.component */ "./src/app/new-band/new-band.component.ts");
/* harmony import */ var _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invite-friend/invite-friend.component */ "./src/app/invite-friend/invite-friend.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-band/edit-band.component */ "./src/app/edit-band/edit-band.component.ts");















var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'band/:id', component: _band_band_component__WEBPACK_IMPORTED_MODULE_4__["BandComponent"] },
    { path: 'studio', component: _studio_studio_component__WEBPACK_IMPORTED_MODULE_5__["StudioComponent"] },
    { path: 'favoriets', component: _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_6__["FavorietsComponent"] },
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"] },
    { path: 'new-band', component: _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_8__["NewBandComponent"] },
    { path: 'invite-friend', component: _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_9__["InviteFriendComponent"] },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'editProfile/:id', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"] },
    { path: 'editBand/:id', component: _edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_14__["EditBandComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "#app-menu {\n  background: #DCDCDC;\n  padding-left:0;\n  padding-right:0;\n}\n#app-main {\n  background: #DCDCDC;\n  padding-left:0;\n  padding-right:0;\n}\napp-header {\n  background: #DCDCDC;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwLW1lbnUge1xuICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xuICBwYWRkaW5nLWxlZnQ6MDtcbiAgcGFkZGluZy1yaWdodDowO1xufVxuI2FwcC1tYWluIHtcbiAgYmFja2dyb3VuZDogI0RDRENEQztcbiAgcGFkZGluZy1sZWZ0OjA7XG4gIHBhZGRpbmctcmlnaHQ6MDtcbn1cblxuYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNEQ0RDREM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-menu\" class=\"col-xs-2\">\n  <app-menu></app-menu>\n</div>\n<div id=\"app-main\" class=\"col-xs-10\">\n  <app-header class=\"col-xs-12\"></app-header>\n  <router-outlet class=\"col-xs-12\"></router-outlet>\n</div>\n<app-sound-player></app-sound-player>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { BandsService} from "./bands.service";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-new';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _studio_studio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./studio/studio.component */ "./src/app/studio/studio.component.ts");
/* harmony import */ var _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favoriets/favoriets.component */ "./src/app/favoriets/favoriets.component.ts");
/* harmony import */ var _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-band/new-band.component */ "./src/app/new-band/new-band.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./invite-friend/invite-friend.component */ "./src/app/invite-friend/invite-friend.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-band/edit-band.component */ "./src/app/edit-band/edit-band.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sound-player/sound-player.component */ "./src/app/sound-player/sound-player.component.ts");





// import { NgxAudioPlayerModule } from 'ngx-audio-player';


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _band_band_component__WEBPACK_IMPORTED_MODULE_7__["BandComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _studio_studio_component__WEBPACK_IMPORTED_MODULE_9__["StudioComponent"],
                _favoriets_favoriets_component__WEBPACK_IMPORTED_MODULE_10__["FavorietsComponent"],
                _new_band_new_band_component__WEBPACK_IMPORTED_MODULE_11__["NewBandComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__["InviteFriendComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_14__["BoardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_18__["TestComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__["EditProfileComponent"],
                _edit_band_edit_band_component__WEBPACK_IMPORTED_MODULE_20__["EditBandComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_22__["SoundPlayerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/band/band.component.css":
/*!*****************************************!*\
  !*** ./src/app/band/band.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n}\n\nbody{\n  height:100%;\n}\n\nmain{\n  display: block;\n  float: right;\n  width: 82%;\n  padding: 1.3%;\n  height:100%;\n  background-color:#DCDCDC;\n\n}\n\n.clear{\n  clear: both;\n}\n\n.topBand{\n  width: 800px;\n  height: 600px;\n  margin: 5%;\n}\n\n.topBand section h3{\n  font-weight: bold;\n  margin-top: 0px;\n  margin-left: 5%;\n}\n\n.topBand span{\n  background-color:#DCDCDC;\n  font-size: 12px;\n  vertical-align: top;\n  padding: 1%;\n}\n\n.topBand img{\n  width: 400px;\n  height:300px;\n  margin-bottom: 5%;\n\n}\n\n.topBand section{\n  display: inline;\n  float: right;\n  width: 400px;\n  height: 300px;\n  margin-bottom: 5%;\n}\n\n.topBand nav h3{\n  font-weight: bold;\n}\n\n.topBand section h5 {\n  margin-bottom:20px;\n  margin-left: 5%;\n}\n\n.topBand p{\n  direction: ltr;\n  float: left;\n  margin-left: 5%;\n  margin-top:24px;\n  display: inline;\n}\n\n.topBand nav{\n  width: 400px;\n  height:300px;\n  float: left;\n}\n\n.members img{\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  float: left;\n}\n\n.members nav{\n  width: 300px;\n  height: 50px;\n  margin-bottom: 3%;\n  vertical-align: middle;\n  line-height: 1px;\n}\n\n.songs nav{\n  width: 300px;\n  height: 50px;\n  margin-bottom: 3%;\n  background: #796EAF;\n  vertical-align: middle;\n  line-height: 1px;\n  margin-left:5%;\n}\n\n.songs img{\n  background-color:white;\n  height:50px;\n  width:50px;\n  border:2px white solid;\n  float: left;\n  border: 2px solid #796EAF;\n}\n\n.songs h3{\n  margin-left: 5%;\n}\n\n.songs p {\n  color:white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuZC9iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7O0FBRTFCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9iYW5kL2JhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmJvZHl7XG4gIGhlaWdodDoxMDAlO1xufVxubWFpbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDgyJTtcbiAgcGFkZGluZzogMS4zJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6I0RDRENEQztcblxufVxuLmNsZWFye1xuICBjbGVhcjogYm90aDtcbn1cbi50b3BCYW5ke1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogNSU7XG59XG4udG9wQmFuZCBzZWN0aW9uIGgze1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4udG9wQmFuZCBzcGFue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMSU7XG59XG4udG9wQmFuZCBpbWd7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OjMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcblxufVxuLnRvcEJhbmQgc2VjdGlvbntcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4udG9wQmFuZCBuYXYgaDN7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9wQmFuZCBzZWN0aW9uIGg1IHtcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4udG9wQmFuZCBwe1xuICBkaXJlY3Rpb246IGx0cjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDoyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4udG9wQmFuZCBuYXZ7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OjMwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lbWJlcnMgaW1ne1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5tZW1iZXJzIG5hdntcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMXB4O1xufVxuLnNvbmdzIG5hdntcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kOiAjNzk2RUFGO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMXB4O1xuICBtYXJnaW4tbGVmdDo1JTtcbn1cbi5zb25ncyBpbWd7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGhlaWdodDo1MHB4O1xuICB3aWR0aDo1MHB4O1xuICBib3JkZXI6MnB4IHdoaXRlIHNvbGlkO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAycHggc29saWQgIzc5NkVBRjtcbn1cbi5zb25ncyBoM3tcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uc29uZ3MgcCB7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/band/band.component.html":
/*!******************************************!*\
  !*** ./src/app/band/band.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n<div class=\"col-xs-5\" style=\"padding: 0 20px;\">\n  <img style=\"width:100%; height: 300px\" src=\"{{bandData.icon}}\">\n</div>\n<div class=\"col-xs-7\" style=\"padding: 0 20px;\">\n  <h1>{{bandData.name}} <a routerLink=\"{{'/editBand/'+bandData._id}}\"><span style=\"font-size:14px;\" class=\"glyphicon glyphicon-pencil\"></span></a></h1>\n  <p><span style=\"margin:10px 0px; font-size:14px;\" class=\"glyphicon glyphicon-tag\"></span>Rock</p>\n  <p style=\"font-size:16px;\">{{bandData.description}}</p>\n</div>\n</div>\n<div class=\"col-xs-12\" style=\"margin-top:30px;\">\n  <div class=\"col-xs-5\" style=\"padding: 0 20px;\">\n    <h2 style=\"margin-bottom:20px;\">MEMBERS</h2>\n    <div *ngFor=\"let member of bandData.members\">\n      <p style=\"margin:15px 0px; font-size: 16px;\"><img style=\"border-radius:50%; width:60px; margin-right:10px;\" src={{member.icon}}>{{member.firstName}} {{member.lastName}}</p>\n    </div>\n  </div>\n  <div class=\"col-xs-7\" style=\"padding: 0 20px;\">\n    <h2>SONGS</h2>\n    <div *ngFor=\"let song of bandData.songs\">\n      <p style=\"margin:15px 0px; font-size: 16px; background: #07072f38; padding: 10px;\">\n        <img style=\"border-radius:50%; width:60px; margin-right:10px;\" src={{bandData.icon}}>{{song.title}}\n        <a href=\"{{'/songstudio/?id='+song._id}}\">\n          <span style=\"margin-left:10px\" class=\"glyphicon glyphicon-edit\"></span>\n        </a>\n      </p>\n    </div>\n    <div>\n\n      <p style=\"margin:15px 0px; font-size: 16px; background: #07072f38; padding: 10px;\">\n        <a (click)=\"createNewSong()\">\n          <span style=\"margin-left:10px\" class=\"glyphicon glyphicon-plus\"></span>\n          Create New Song\n        </a>\n      </p>\n    </div>\n  </div>\n</div>\n <!--<main>-->\n    <!--<div class=\"topBand\">-->\n      <!--<img src={{bandData.icon}}>-->\n      <!--<section>-->\n        <!--<h3>{{bandData.name}}-->\n          <!--<a (click)=\"goToEdit()\">-->\n            <!--<span class=\"glyphicon glyphicon-pencil\"></span>-->\n          <!--</a>-->\n        <!--</h3><br>-->\n\n        <!--<h5> <span class=\"glyphicon glyphicon-tag\"></span> {{bandData.genre}} </h5>-->\n        <!--<p>{{bandData.description}}</p>-->\n      <!--</section>-->\n\n      <!--<nav class=\"members\">-->\n        <!--<h3>MEMBERS</h3>-->\n        <!--<nav *ngFor=\"let member of bandData.members\">-->\n          <!--<img src={{member.icon}}> <P>{{member.firstName}} {{member.lastName}}</P>-->\n        <!--</nav>-->\n      <!--</nav>-->\n      <!--<nav class=\"songs\">-->\n        <!--<h3>SONGS</h3>-->\n        <!--<nav *ngFor=\"let song of bandData.songs\">-->\n          <!--<a href=\"{{'/songstudio/?id='+song._id}}\">-->\n            <!--<img src={{bandData.icon}}>-->\n            <!--<p>{{song.title}}</p>-->\n          <!--</a>-->\n        <!--</nav>-->\n        <!--<nav>-->\n            <!--<p (click)=\"createNewSong()\">Create New Song</p>-->\n        <!--</nav>-->\n      <!--</nav>-->\n        <!--<div class=\"clear\"></div>-->\n    <!--</div>-->\n  <!--</main>-->\n"

/***/ }),

/***/ "./src/app/band/band.component.ts":
/*!****************************************!*\
  !*** ./src/app/band/band.component.ts ***!
  \****************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bands_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bands.service */ "./src/app/bands.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");






var BandComponent = /** @class */ (function () {
    function BandComponent(http, route, router, bandsService, playerService) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.bandsService = bandsService;
        this.playerService = playerService;
        this.bandData = {};
        this.route.params.subscribe(function (params) {
            _this.bandId = params['id'];
        });
        this.bandsService.getBandData({ id: this.bandId }).subscribe(function (data) {
            _this.bandData = data;
        }, function (err) {
            console.error(err);
        });
    }
    BandComponent.prototype.createNewSong = function () {
        var _this = this;
        this.bandsService.createNewSong({ id: this.bandId }).subscribe(function (data) {
            _this.redirectToStudio(data);
        }, function (err) {
            console.error(err);
        });
    };
    BandComponent.prototype.redirectToStudio = function (data) {
        window.location.href = 'https://shenkar-band-it.herokuapp.com/songstudio/?id=' + data._id;
    };
    BandComponent.prototype.playSong = function (songId) {
        var audioObj = {
            songId: songId
        };
        this.playerService.sendToPlayer(audioObj);
    };
    BandComponent.prototype.ngOnInit = function () {
    };
    BandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-band',
            template: __webpack_require__(/*! ./band.component.html */ "./src/app/band/band.component.html"),
            styles: [__webpack_require__(/*! ./band.component.css */ "./src/app/band/band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _bands_service__WEBPACK_IMPORTED_MODULE_4__["BandsService"], _player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]])
    ], BandComponent);
    return BandComponent;
}());



/***/ }),

/***/ "./src/app/bands.service.ts":
/*!**********************************!*\
  !*** ./src/app/bands.service.ts ***!
  \**********************************/
/*! exports provided: BandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandsService", function() { return BandsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BandsService = /** @class */ (function () {
    function BandsService(http) {
        this.http = http;
    }
    BandsService.prototype.updateBand = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/band/updateBand', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.getSongUrl = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/bands/getSongUrl', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.favoriteSong = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/bands/favoriteSong', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.getFavorites = function () {
        return this.http.get('https://shenkar-band-it.herokuapp.com/bands/getFavorites', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.createNewBand = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/bands/createNewBand', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.createNewSong = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/bands/createNewSong', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.getBandData = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/bands/getBandData', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService.prototype.getAllSongs = function () {
        return this.http.post('https://shenkar-band-it.herokuapp.com/bands/getAllSongs', {}, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    BandsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BandsService);
    return BandsService;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>THE BOARD IN PROGRESS...</h1>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/edit-band/edit-band.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-band/edit-band.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  width: 82%;\n  float: right;\n  height: 770px;\n  background-color:#DCDCDC;\n}\n.clear{\n  clear:both;\n}\n.userDiv{\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n  padding: 5%;\n\n}\nh2{\n  text-align: center;\n}\n.Details{\n  width: 45%;\n  float: right;\n  margin-left: 5%;\n  margin-right: 10%;\n  height: 220px;\n}\n.photo{\n  width: 40%;\n  height: 220px;\n  float: right;\n}\nimg{\n  width: 100%;\n  height: 200px;\n}\nspan{\n  width: 40px;\n}\nli{\n  font-size: 15px;\n  text-decoration: none;\n}\nh1{\n  text-align: center;\n}\nselect{\n  width: 73%;\n  display: inline;\n}\ntextarea{\n  width: 73%;\n}\nbutton{\n  background-color: midnightblue;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 12px;\n  margin-top: 5%;\n  text-transform: uppercase;\n}\nbutton:hover,\nbutton:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\nh3{\n  border-bottom: black 1px solid;\n  margin: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1iYW5kL2VkaXQtYmFuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7O0FBRWI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1iYW5kL2VkaXQtYmFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIHdpZHRoOiA4MiU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA3NzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojRENEQ0RDO1xufVxuLmNsZWFye1xuICBjbGVhcjpib3RoO1xufVxuLnVzZXJEaXZ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwYWRkaW5nOiA1JTtcblxufVxuaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5EZXRhaWxze1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGhlaWdodDogMjIwcHg7XG59XG4ucGhvdG97XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbmltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5zcGFue1xuICB3aWR0aDogNDBweDtcbn1cbmxpe1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWxlY3R7XG4gIHdpZHRoOiA3MyU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbnRleHRhcmVhe1xuICB3aWR0aDogNzMlO1xufVxuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNBMzQ3O1xuICBib3JkZXItY29sb3I6ICMxQ0EzNDc7XG59XG5oM3tcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMXB4IHNvbGlkO1xuICBtYXJnaW46IDIlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/edit-band/edit-band.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-band/edit-band.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<body>\n<app-menu></app-menu>\n  <main>\n    <div class=\"topBand\">\n      <h2> ETID MY BAND </h2><br><br>\n      <div class=\"photo\">\n        <img [src]=\"imageUrl\">\n        <input formControlName=\"icon\" type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n      </div>\n      <section>\n        <form [formGroup]=\"newBandForm\" >\n          <h5> <input formControlName=\"name\" value = \"{{bandData.name}}\" >  </h5>\n          <h5>\n            <p> <select formControlName=\"genre\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Genre\" value=\"{{bandData.genre}}\">\n              <option> rock </option>\n              <option> punk </option>\n              <option> classic </option>\n            </select> </p>\n          </h5><br>\n          <p> <textarea  formControlName=\"description\" value = \" {{bandData.description}} \"></textarea> </p>\n          <button (click)=\"updateBand()\" type=\"submit\"> Submit </button>\n        </form>\n      </section>\n      <div class=\"clear\"></div>\n    </div>\n  </main>\n</body>-->\n\n<div class=\"wrapper\">\n  <div class=\"userDiv\">\n    <h2> EDIT MY BAND </h2><br>\n\n        <form method=\"post\" role=\"form\" [formGroup]=\"newBandForm\">\n          <div class=\"Details\">\n              <ul class=\"container details\">\n                <h3> {{bandData.name}}  </h3> <br><br>\n                <li><p><span class=\"glyphicon glyphicon-music\"></span> <input  formControlName=\"name\" value=\"{{bandData.name}}\"> </p></li>\n                <li><p><span class=\"glyphicon glyphicon-tag\"></span>\n                  <select formControlName=\"genre\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Genre\" value=\"{{bandData.genre}}\">\n                    <option> rock </option>\n                    <option> punk </option>\n                    <option> classic </option>\n                  </select></p>\n                </li>\n\n                <li><p><span class=\"glyphicon glyphicon-comment\"></span>\n                  <textarea  formControlName=\"description\" value = \" {{bandData.description}} \"></textarea>\n                </p></li>\n              </ul> <br><br>\n          </div>\n\n          <div class=\"photo\">\n            <img [src]=\"imageUrl\">\n            <input formControlName=\"icon\" type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n          </div> <br><br>\n\n          <button (click)=\"updateBand()\" type=\"submit\"> Submit </button>\n        </form>\n\n    <div class=\"clear\"></div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/edit-band/edit-band.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-band/edit-band.component.ts ***!
  \**************************************************/
/*! exports provided: EditBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBandComponent", function() { return EditBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bands.service */ "./src/app/bands.service.ts");






var EditBandComponent = /** @class */ (function () {
    function EditBandComponent(http, route, _bands, _router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this._bands = _bands;
        this._router = _router;
        this.newBandForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        var req = this.http.post("https://shenkar-band-it.herokuapp.com/bands/getBandData", { id: this.id });
        req.subscribe(function (data) {
            _this.bandData = data;
            console.log('The edit Bands data: ' + JSON.stringify(_this.bandData));
            console.log('The edit id: ' + _this.id);
        });
    }
    EditBandComponent.prototype.ngOnInit = function () {
    };
    EditBandComponent.prototype.updateBand = function () {
        var _this = this;
        console.log('Form:' + JSON.stringify(this.newBandForm.value));
        var updateObj = Object.assign(this.newBandForm.value, { id: this.id });
        console.log(updateObj);
        this._bands.updateBand(JSON.stringify(updateObj))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/band', _this.id]); }, function (error) { return console.error(error); });
    };
    EditBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-band',
            template: __webpack_require__(/*! ./edit-band.component.html */ "./src/app/edit-band/edit-band.component.html"),
            styles: [__webpack_require__(/*! ./edit-band.component.css */ "./src/app/edit-band/edit-band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _bands_service__WEBPACK_IMPORTED_MODULE_5__["BandsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditBandComponent);
    return EditBandComponent;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  width: 82%;\n  float: right;\n  height: 770px;\n  background-color:#DCDCDC;\n}\n.clear{\n  clear:both;\n}\n.userDiv{\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n  padding: 5%;\n\n}\nh2{\n  text-align: center;\n}\n.Details{\n  width: 45%;\n  float: right;\n  margin-left: 5%;\n  margin-right: 10%;\n  height: 220px;\n}\n.photo{\n  width: 40%;\n  height: 220px;\n  float: right;\n}\nimg{\n  width: 100%;\n  height: 200px;\n}\nspan{\n  width: 40px;\n}\nli{\n  font-size: 15px;\n  text-decoration: none;\n}\nh1{\n  text-align: center;\n}\nselect{\n  width: 73%;\n  display: inline;\n}\nbutton{\n  background-color: midnightblue;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 12px;\n  margin-top: 5%;\n  text-transform: uppercase;\n}\nbutton:hover,\nbutton:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\nh3{\n  border-bottom: black 1px solid;\n  margin: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7O0FBRWI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICB3aWR0aDogODIlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNzcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I0RDRENEQztcbn1cbi5jbGVhcntcbiAgY2xlYXI6Ym90aDtcbn1cbi51c2VyRGl2e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZzogNSU7XG5cbn1cbmgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uRGV0YWlsc3tcbiAgd2lkdGg6IDQ1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBoZWlnaHQ6IDIyMHB4O1xufVxuLnBob3Rve1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuc3BhbntcbiAgd2lkdGg6IDQwcHg7XG59XG5saXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5oMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VsZWN0e1xuICB3aWR0aDogNzMlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQ0EzNDc7XG4gIGJvcmRlci1jb2xvcjogIzFDQTM0Nztcbn1cbmgze1xuICBib3JkZXItYm90dG9tOiBibGFjayAxcHggc29saWQ7XG4gIG1hcmdpbjogMiU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"userDiv\">\n    <h2> EDIT MY PROFILE </h2><br>\n\n        <form method=\"post\" role=\"form\" [formGroup]=\"userForm\">\n          <div class=\"Details\">\n              <ul class=\"container details\">\n                <h3> {{firstName}} {{lastName}} </h3> <br><br>\n                <li><p><span class=\"glyphicon glyphicon-user\"></span> <input  formControlName=\"firstName\" value=\"{{firstName}}\"> </p></li>\n                <li><p><span class=\"glyphicon glyphicon-user\"></span> <input  formControlName=\"lastName\" value=\"{{lastName}}\"> </p></li>\n                <li><p><span class=\"glyphicon glyphicon-envelope one\"></span> <input type=\"email\" formControlName=\"email\" value=\"{{email}}\"> </p></li>\n                <li><p><span class=\"glyphicon glyphicon-tag\"></span>\n                  <select formControlName=\"genre\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Genre\" value=\"{{genre}}\">\n                    <option> rock </option>\n                    <option> punk </option>\n                    <option> classic </option>\n                  </select></p>\n                </li>\n              </ul> <br><br>\n          </div>\n\n          <div class=\"photo\">\n            <img [src]=\"imageUrl\">\n            <input formControlName=\"icon\" type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n          </div> <br><br>\n\n          <button (click)=\"updateUser()\" type=\"submit\"> Submit </button>\n        </form>\n\n    <div class=\"clear\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_user, _router, rout) {
        var _this = this;
        this._user = _user;
        this._router = _router;
        this.rout = rout;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.genre = '';
        this.icon = '';
        this.imageUrl = "../../assets/userImg.png";
        this.fileToUpload = null;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this._user.user()
            .subscribe(function (data) { return _this.addDetails(data); }, function (error) { return console.error(error); });
    }
    EditProfileComponent.prototype.addDetails = function (data) {
        this._id = data._id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.genre = data.genre;
        this.email = data.email;
        this.icon = data.icon;
    };
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //Show image preview
        var render = new FileReader();
        render.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        render.readAsDataURL(this.fileToUpload);
    };
    EditProfileComponent.prototype.updateUser = function () {
        var _this = this;
        /*if ( !this.userForm.valid ) {
          console.log('Invalid Form');
          return;
        }*/
        console.log(this.userForm.value);
        var updateObj = Object.assign(this.userForm.value, { id: this._id });
        console.log(updateObj);
        this._user.updateUser(JSON.stringify(updateObj))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/profile/:id']); }, function (error) { return console.error(error); });
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/favoriets/favoriets.component.css":
/*!***************************************************!*\
  !*** ./src/app/favoriets/favoriets.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaWV0cy9mYXZvcmlldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/favoriets/favoriets.component.html":
/*!****************************************************!*\
  !*** ./src/app/favoriets/favoriets.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <h1>Favorites List</h1>\n  <div *ngFor=\"let song of favorites\">\n    <a (click)=\"playFavorite(song._id)\">\n    <p style=\"margin:15px 0px; font-size: 16px; background: #07072f38; padding: 10px;\">\n      <img style=\"border-radius:50%; width:60px; margin-right:10px;\" src={{song.band.icon}}>{{song.band.name}} - {{song.title}}\n    </p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/favoriets/favoriets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favoriets/favoriets.component.ts ***!
  \**************************************************/
/*! exports provided: FavorietsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorietsComponent", function() { return FavorietsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bands.service */ "./src/app/bands.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");




var FavorietsComponent = /** @class */ (function () {
    function FavorietsComponent(bandsService, playerService) {
        var _this = this;
        this.bandsService = bandsService;
        this.playerService = playerService;
        this.bandsService.getFavorites().subscribe(function (data) {
            _this.setFavorites(data);
        }, function (err) {
            console.error(err);
        });
    }
    FavorietsComponent.prototype.setFavorites = function (data) {
        this.favorites = data;
    };
    FavorietsComponent.prototype.playFavorite = function (songId) {
        this.playerService.sendToPlayer({ songId: songId });
    };
    FavorietsComponent.prototype.ngOnInit = function () {
    };
    FavorietsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favoriets',
            template: __webpack_require__(/*! ./favoriets.component.html */ "./src/app/favoriets/favoriets.component.html"),
            styles: [__webpack_require__(/*! ./favoriets.component.css */ "./src/app/favoriets/favoriets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bands_service__WEBPACK_IMPORTED_MODULE_2__["BandsService"], _player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], FavorietsComponent);
    return FavorietsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  background:#DCDCDC;\n}\ninput{\n  border:none;\n  border-radius: 40px;\n  width:340px;\n  height:20px;\n  padding: 5%;\n\n}\n.search-box{\n  background-color:white;\n  border-radius: 40px;\n  width:400px;\n  margin-left:1.5%;\n  margin-bottom: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVzs7QUFFYjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcbiAgYmFja2dyb3VuZDojRENEQ0RDO1xufVxuaW5wdXR7XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDozNDBweDtcbiAgaGVpZ2h0OjIwcHg7XG4gIHBhZGRpbmc6IDUlO1xuXG59XG5cbi5zZWFyY2gtYm94e1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDo0MDBweDtcbiAgbWFyZ2luLWxlZnQ6MS41JTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"logout\">-->\n  <!--<button  (click)=\"logout()\"> Log Out </button>-->\n<!--</div>-->\n<!--<h3>{{firstName}} {{lastName}} </h3>-->\n\n\n<div class=\"col-xs-4 search-box\">\n  <!--<input type=\"text\" name=\"\" placeholder=\"Search Library\"> <span class=\"glyphicon glyphicon-search\"></span>-->\n</div>\n<div *ngIf=\"!isLoggedIn\" style=\"float:right; text-align:right\" class=\"col-xs-3\">\n  <a routerLink=\"/login\"  id=\"login-form-link\">\n  <span style=\"font-size: 14px; margin-right:15px;\">Login</span> <img style=\"width:45px; border-radius:100%\" src=\"../../assets/anonymous-user.png\">\n  </a>\n</div>\n<div *ngIf=\"isLoggedIn\" style=\"float:right; text-align:right\" class=\"col-xs-3\">\n  <a routerLink=\"/profile/{{_id}}\"  id=\"login-form-link\">\n    <span style=\"font-size: 14px; margin-right:15px;\">Hi {{firstName}} {{lastName}} ! </span> <img style=\"width:45px; border-radius:100%\" src=\"{{icon}}\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(registerService) {
        var _this = this;
        this.registerService = registerService;
        this.isLoggedIn = false;
        this.registerService.user().subscribe(function (user) {
            _this.updateLogin(user);
        });
        this.subscription = this.registerService.getUserObj().subscribe(function (user) {
            _this.updateLogin(user);
        });
    }
    HeaderComponent.prototype.updateLogin = function (user) {
        this.isLoggedIn = true;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this._id = user._id;
        this.icon = user.icon;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/index.service.ts":
/*!**********************************!*\
  !*** ./src/app/index.service.ts ***!
  \**********************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IndexService = /** @class */ (function () {
    function IndexService(http) {
        this.http = http;
    }
    IndexService.prototype.getIndexData = function () {
        return this.http.get('https://shenkar-band-it.herokuapp.com/index/getIndexData', {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    IndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-featured {\n  width:100%;\n  height:250px;\n  margin-bottom: 30px;\n}\n\n.sub-featured {\n  width:100%;\n  margin-bottom: 30px;\n}\n\n.chart {\n  color:white;\n  background: #06002f;\n  text-align:center;\n  margin-bottom: 20px;\n}\n\nh3 {\n  padding:10px 0px;\n}\n\n.chart span {\n  margin-right:10px;\n}\n\n.chart img {\n  width:100%;\n  height: 40px;\n}\n\n.chart p {\n  line-height: 1;\n  position:relative;\n  top:9px;\n  text-align: left;\n  font-size:14px;\n  margin-bottom:0px;\n}\n\n.chart .title {\n  padding:0;\n  margin-bottom:10px;\n  display: table-cell;\n  background: rgba(255, 255, 255, 0.66);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1mZWF0dXJlZCB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnN1Yi1mZWF0dXJlZCB7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jaGFydCB7XG4gIGNvbG9yOndoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDYwMDJmO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaDMge1xuICBwYWRkaW5nOjEwcHggMHB4O1xufVxuXG4uY2hhcnQgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xufVxuXG4uY2hhcnQgaW1nIHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uY2hhcnQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjlweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOjE0cHg7XG4gIG1hcmdpbi1ib3R0b206MHB4O1xufVxuXG4uY2hhcnQgLnRpdGxlIHtcbiAgcGFkZGluZzowO1xuICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nik7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-9\">\n  <div class=\"col-xs-12\">\n    <img class=\"main-featured\" src=\"{{featuredMain.imgUrl}}\">\n  </div>\n  <div *ngFor=\"let feature of featured;\" class=\"col-xs-3 hov-container\">\n    <a (click)=\"playSong(feature.songId)\">\n    <img class=\"sub-featured\" src=\"{{feature.imgUrl}}\">\n      <div class=\"playButton\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </div>\n    </a>\n  </div>\n</div>\n<div class=\"col-xs-3\">\n  <div class=\"chart col-xs-12\">\n    <h3><span class=\"glyphicon glyphicon-signal\"></span>TOP 5 SONGS</h3>\n    <div *ngFor=\"let song of topSongs; let i = index\" class=\"col-xs-12 title\">\n      <div class=\"col-xs-1\" style=\"padding-left:10px; padding-right:15px;\">\n        <p>{{i + 1}}</p>\n      </div>\n      <div class=\"col-xs-3\" style=\"padding-left:0\">\n      <img src=\"{{song.imgUrl}}\">\n      </div>\n      <div class=\"col-xs-6\" style=\"padding-left:0\">\n        <p>{{song.bandName}} - {{song.title}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"chart col-xs-12\">\n    <h3><span class=\"glyphicon glyphicon-signal\"></span>TOP 5 BANDS</h3>\n    <div *ngFor=\"let band of topBands; let i = index\" class=\"col-xs-12 title\">\n      <div class=\"col-xs-1\" style=\"padding-left:10px; padding-right:15px;\">\n        <p>{{i+1}}</p>\n      </div>\n      <div class=\"col-xs-3\" style=\"padding-left:0\">\n        <img src=\"{{band.imgUrl}}\">\n      </div>\n      <div class=\"col-xs-6\" style=\"padding-left:0\">\n        <p>{{band.bandName}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.service */ "./src/app/index.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");




var IndexComponent = /** @class */ (function () {
    function IndexComponent(_index, playerService) {
        var _this = this;
        this._index = _index;
        this.playerService = playerService;
        this.featuredMain = {};
        this._index.getIndexData().subscribe(function (data) {
            _this.updateData(data);
        }, function (err) {
            console.error(err);
        });
    }
    IndexComponent.prototype.playSong = function (songId, songUrl) {
        var audioObj = {
            songId: songId, songUrl: songUrl
        };
        this.playerService.sendToPlayer(audioObj);
    };
    IndexComponent.prototype.updateData = function (data) {
        this.topSongs = data.topSongs;
        this.topBands = data.topBands;
        this.featuredMain = data.featuredMain;
        this.featured = data.featured;
    };
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/invite-friend/invite-friend.component.css":
/*!***********************************************************!*\
  !*** ./src/app/invite-friend/invite-friend.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRlLWZyaWVuZC9pbnZpdGUtZnJpZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGUtZnJpZW5kL2ludml0ZS1mcmllbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/invite-friend/invite-friend.component.html":
/*!************************************************************!*\
  !*** ./src/app/invite-friend/invite-friend.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<h1>INVITE A FRIEND IN PROGRESS...</h1>\n"

/***/ }),

/***/ "./src/app/invite-friend/invite-friend.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/invite-friend/invite-friend.component.ts ***!
  \**********************************************************/
/*! exports provided: InviteFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendComponent", function() { return InviteFriendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InviteFriendComponent = /** @class */ (function () {
    function InviteFriendComponent() {
    }
    InviteFriendComponent.prototype.ngOnInit = function () {
    };
    InviteFriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite-friend',
            template: __webpack_require__(/*! ./invite-friend.component.html */ "./src/app/invite-friend/invite-friend.component.html"),
            styles: [__webpack_require__(/*! ./invite-friend.component.css */ "./src/app/invite-friend/invite-friend.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InviteFriendComponent);
    return InviteFriendComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 90px;\n}\n.panel-login {\n  border-color: #ccc;\n  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n  color: #00415d;\n  background-color: #fff;\n  border-color: #fff;\n  text-align:center;\n}\n.panel-login>.panel-heading a{\n  text-decoration: none;\n  color: #666;\n  font-weight: bold;\n  font-size: 15px;\n  transition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n  color: #029f5b;\n  font-size: 18px;\n}\n.panel-login>.panel-heading hr{\n  margin-top: 10px;\n  margin-bottom: 0px;\n  clear: both;\n  border: 0;\n  height: 1px;\n  background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n  height: 45px;\n  border: 1px solid #ddd;\n  font-size: 16px;\n  transition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n  outline:none;\n  box-shadow: none;\n  border-color: #ccc;\n}\n.btn-login {\n  background-color: #59B2E0;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n  color: #fff;\n  background-color: #53A3CD;\n  border-color: #53A3CD;\n}\n.forgot-password {\n  text-decoration: underline;\n  color: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n  text-decoration: underline;\n  color: #666;\n}\n.btn-register {\n  background-color: #1CB94E;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBR2xCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBR2YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFJWCx1RkFBdUY7QUFDekY7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUdmLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLFlBQVk7RUFHWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG59XG4ucGFuZWwtbG9naW4ge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xufVxuLnBhbmVsLWxvZ2luPi5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMwMDQxNWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcgYS5hY3RpdmV7XG4gIGNvbG9yOiAjMDI5ZjViO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcgaHJ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLCAwLCAwLCAwKSxyZ2JhKDAsIDAsIDAsIDAuMTUpLHJnYmEoMCwgMCwgMCwgMCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsMCkscmdiYSgwLDAsMCwwLjE1KSxyZ2JhKDAsMCwwLDApKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsMCkscmdiYSgwLDAsMCwwLjE1KSxyZ2JhKDAsMCwwLDApKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDAuMTUpLHJnYmEoMCwwLDAsMCkpO1xufVxuLnBhbmVsLWxvZ2luIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLC5wYW5lbC1sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sLnBhbmVsLWxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbn1cbi5wYW5lbC1sb2dpbiBpbnB1dDpob3Zlcixcbi5wYW5lbC1sb2dpbiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6bm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5idG4tbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTlCMkUwO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTlCMkU2O1xufVxuLmJ0bi1sb2dpbjpob3Zlcixcbi5idG4tbG9naW46Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzQTNDRDtcbiAgYm9yZGVyLWNvbG9yOiAjNTNBM0NEO1xufVxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzg4ODtcbn1cbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXG4uZm9yZ290LXBhc3N3b3JkOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uYnRuLXJlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDQjk0RTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1jb2xvcjogIzFDQjk0QTtcbn1cbi5idG4tcmVnaXN0ZXI6aG92ZXIsXG4uYnRuLXJlZ2lzdGVyOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQ0EzNDc7XG4gIGJvcmRlci1jb2xvcjogIzFDQTM0Nztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!------ Include the above in your HEAD tag ---------->\n<body>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-md-offset-3\">\n            <div class=\"panel panel-login\">\n              <div class=\"panel-heading\">\n                <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                    <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n                  </div>\n                  <div class=\"col-xs-6\">\n                    <a routerLink=\"/register\"  id=\"register-form-link\">Register</a>\n                  </div>\n                </div>\n                <hr>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <form [formGroup]=\"loginForm\">\n                      <div class=\"form-group\">\n                        <input type=\"text\" formControlName=\"email\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input formControlName=\"pass\" type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                      </div>\n                      <div class=\"form-group text-center\">\n                        <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                        <label for=\"remember\"> Remember Me</label>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-6 col-sm-offset-3\">\n                            <input (click)=\"login()\" type=\"submit\"  name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-12\">\n                            <div class=\"text-center\">\n                              <a tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n</body>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, login_s) {
        this._router = _router;
        this.login_s = login_s;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid Form');
            return;
        }
        this.login_s.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) {
            _this.login_s.updateUserSuccessObj(data);
            _this._router.navigate(['/index']);
        }, function (error) { return console.error(error); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n}\n#logo{\n  display: block;\n  background: url('logo.png') no-repeat;\n  background-position: center;\n  background-size:50%;\n  width:100%;\n  height:100px;\n}\n#menu{\n  min-height:100vh;\n  background-color: #06002f;\n}\na{\n  color: white;\n  text-decoration: none;\n}\na:hover{\n  color: #FF8C00;\n  text-decoration: none;\n}\na.active{\n  color:#FF8C00;\n}\nli{\n  font-size: 14px;\n  padding: 10%;\n  list-style-type: none;\n  padding-left: 30px;\n}\nli.active{\n  background-color: #708090;\n}\nli:hover{\n  background-color: #708090;\n}\n.line{\n  border-bottom: 1px solid white;\n  padding-bottom: 20%;\n}\nspan{\n  color: orange;\n  margin-right: 4%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUNBQWtEO0VBQ2xELDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuI2xvZ297XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dvLnBuZycpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6NTAlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwcHg7XG59XG4jbWVudXtcbiAgbWluLWhlaWdodDoxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDAyZjtcbn1cbmF7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlcntcbiAgY29sb3I6ICNGRjhDMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEuYWN0aXZle1xuICBjb2xvcjojRkY4QzAwO1xufVxubGl7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbmxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwODA5MDtcbn1cbmxpOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MDkwO1xufVxuLmxpbmV7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbn1cbnNwYW57XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\">\n  <a routerLink=\"/index\" id=\"logo\"></a>\n  <ul>\n    <li> <span class=\"glyphicon glyphicon-headphones\"></span> <a routerLink=\"/index\" >EXPLORE</a></li>\n    <li *ngIf=\"isLoggedIn\"> <span class=\"glyphicon glyphicon-signal\"></span> <a routerLink=\"/studio\" >MY STUDIO</a> </li>\n    <li *ngIf=\"isLoggedIn\"> <span class=\"glyphicon glyphicon-heart-empty\"></span> <a routerLink=\"/favoriets\" >FAVORITES</a> </li>\n\n    <li class=\"line\" > <span class=\"glyphicon glyphicon-music\"></span> <a routerLink=\"/board\" >THE BOARD</a> </li>\n    <li *ngFor=\"let band of bands\" style=\"color:white;\">\n      <a routerLink=\"{{'/band/'+band._id}}\">\n        <img [src]=\"band.icon\" style=\"width: 30px;margin-right: 5px;\">\n        {{band.name}}\n      </a>\n    </li>\n    <li *ngIf=\"isLoggedIn\" class=\"line\" ><span class=\"glyphicon glyphicon-plus-sign\"></span><a routerLink=\"/new-band\" >CREATE NEW BAND</a> </li>\n    <!--<li ><span class=\"glyphicon glyphicon-plus-sign\"></span><a routerLink=\"/invite-friend\" >INVITE A FRIEND</a> </li>-->\n\n\n    <li *ngIf=\"isLoggedIn\" ><span class=\"glyphicon glyphicon-user\"></span><a routerLink=\"/profile/{{id}}\">MY PROFILE</a> </li>\n  </ul>\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(registerService, http) {
        var _this = this;
        this.registerService = registerService;
        this.http = http;
        this.bands = [];
        this.isLoggedIn = false;
        this.registerService.user().subscribe(function (data) {
            _this.updateBands(data);
        }, function (err) {
            console.error(err);
        });
        this.subscription = this.registerService.getUserObj().subscribe(function (data) {
            _this.updateBands(data);
        });
    }
    MenuComponent.prototype.updateBands = function (data) {
        this.isLoggedIn = true;
        this.uId = data._id;
        this.bands = data.bands;
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/new-band/new-band.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-band/new-band.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  display: block;\n}\nform{\n  width: 100%;\n}\ntextarea{\n  width: 50%;\n}\ninput{\n  font-size:14px;\n  width: 50%;\n}\nselect{\n  width: 50%;\n}\nlabel {\n  font-size: 14px;\n}\n.custom-file-label{\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWJhbmQvbmV3LWJhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL25ldy1iYW5kL25ldy1iYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmZvcm17XG4gIHdpZHRoOiAxMDAlO1xufVxudGV4dGFyZWF7XG4gIHdpZHRoOiA1MCU7XG59XG5pbnB1dHtcbiAgZm9udC1zaXplOjE0cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5zZWxlY3R7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmN1c3RvbS1maWxlLWxhYmVse1xuICB3aWR0aDogNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-band/new-band.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-band/new-band.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n      <h1>Add New Band</h1>\n      <form (ngSubmit)=\"onSubmit()\">\n          <label> Band name: </label> <input type=\"text\" [(ngModel)]=\"name\" name=\"bandName\"><br>\n          <label> Genre: </label>\n            <select [(ngModel)]=\"genre\" name=\"genre\">\n              <option> Rock </option>\n              <option> Punk </option>\n              <option> Jazz </option>\n            </select><br>\n          <label> Description: </label>\n          <textarea [(ngModel)]=\"description\" name=\"description\"></textarea><br>\n        <label> Members Emails (seperated by comma): </label> <input type=\"text\" [(ngModel)]=\"members\" name=\"members\"><br>\n          <div class=\"custom-file mb-3\">\n            <input  (change)=\"onFileChange($event)\" type=\"file\" ngModel name=\"icon\" class=\"custom-file-input\">\n            <label for=\"file\" class=\"custom-file-label\"> Add band photo </label><br>\n          </div><br>\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\">\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-band/new-band.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-band/new-band.component.ts ***!
  \************************************************/
/*! exports provided: NewBandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBandComponent", function() { return NewBandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bands.service */ "./src/app/bands.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewBandComponent = /** @class */ (function () {
    function NewBandComponent(http, bandsService, _router) {
        this.http = http;
        this.bandsService = bandsService;
        this._router = _router;
    }
    NewBandComponent.prototype.ngOnInit = function () {
    };
    NewBandComponent.prototype.onSubmit = function () {
        var _this = this;
        var objReq = {
            name: this.name,
            description: this.description,
            members: this.members,
            genre: this.genre,
            file: this.file,
        };
        this.bandsService.createNewBand(objReq).subscribe(function (data) {
            _this.goToPage(data);
        }, function (err) {
        });
    };
    NewBandComponent.prototype.goToPage = function (data) {
        this._router.navigate(['/band/' + data._id]);
    };
    NewBandComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.file = {
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result
                };
            };
        }
    };
    NewBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-band',
            template: __webpack_require__(/*! ./new-band.component.html */ "./src/app/new-band/new-band.component.html"),
            styles: [__webpack_require__(/*! ./new-band.component.css */ "./src/app/new-band/new-band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _bands_service__WEBPACK_IMPORTED_MODULE_3__["BandsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewBandComponent);
    return NewBandComponent;
}());



/***/ }),

/***/ "./src/app/player.service.ts":
/*!***********************************!*\
  !*** ./src/app/player.service.ts ***!
  \***********************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PlayerService.prototype.sendToPlayer = function (audio) {
        this.subject.next(audio);
    };
    PlayerService.prototype.playAudio = function () {
        return this.subject.asObservable();
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  width: 82%;\n  float: right;\n  height: 770px;\n  background-color:#DCDCDC;\n  border: 1px solid black;\n}\n.clear{\n  clear:both;\n}\n.userDiv{\n  width: 80%;\n  margin: auto;\n  margin-top: 10%;\n  padding: 5%;\n}\nh2{\n  border-bottom: black 1px solid;\n}\n.Details{\n  width: 45%;\n  float: right;\n  margin-left: 5%;\n  margin-right: 10%;\n  height: 220px;\n}\n.photo{\n  width: 40%;\n  height: 220px;\n  float: right;\n}\nimg{\n  width: 100%;\n  height: 200px;\n}\nspan{\n  width: 40px;\n}\nli{\n  font-size: 15px;\n  text-decoration: none;\n}\nh3{\n  float: right;\n  margin: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgd2lkdGg6IDgyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDc3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmNsZWFye1xuICBjbGVhcjpib3RoO1xufVxuLnVzZXJEaXZ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwYWRkaW5nOiA1JTtcbn1cbmgye1xuICBib3JkZXItYm90dG9tOiBibGFjayAxcHggc29saWQ7XG59XG4uRGV0YWlsc3tcbiAgd2lkdGg6IDQ1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBoZWlnaHQ6IDIyMHB4O1xufVxuLnBob3Rve1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuc3BhbntcbiAgd2lkdGg6IDQwcHg7XG59XG5saXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5oM3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDIlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"userDiv\">\n          <div class=\"Details\">\n                <button (click) = \"logout()\">LOGOUT</button>\n                <h2> {{firstName}} {{lastName}}\n                  <a (click) = \"goToEdit()\">\n                    <span class=\"glyphicon glyphicon-pencil\"></span>\n                  </a>\n                </h2> <br><br>\n                <ul class=\"container details\">\n                  <li><p><span class=\"glyphicon glyphicon-user\"></span> {{firstName}} {{lastName}}</p></li>\n                  <li><p><span class=\"glyphicon glyphicon-envelope one\"></span>{{email}}</p></li>\n                  <li><p><span class=\"glyphicon glyphicon-tag\"></span>{{genre}}</p></li>\n                </ul> <br><br>\n          </div>\n      <div class=\"photo\">\n          <img [src]=\"imageUrl\">\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_user, router) {
        var _this = this;
        this._user = _user;
        this.router = router;
        this._id = '';
        this.firstName = '';
        this.lastName = '';
        this.genre = '';
        this.email = '';
        this.imageUrl = "../../assets/userImg.png";
        this._user.user()
            .subscribe(function (data) { console.log(JSON.stringify(data)); _this.addDetails(data); }, function (error) { return console.error(error); });
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this._user.logout()
            .subscribe(function (data) {
            _this._user.updateUserSuccessObj({});
            window.location.href = 'https://shenkar-band-it.herokuapp.com/';
        }, function (error) { return console.error(error); });
    };
    ProfileComponent.prototype.addDetails = function (data) {
        this._id = data._id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.genre = data.genre;
        this.email = data.email;
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.goToEdit = function () {
        this.router.navigate(['/editProfile/:id']);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RegisterService.prototype.updateUserSuccessObj = function (user) {
        this.userData = user;
        this.subject.next(user);
    };
    RegisterService.prototype.getUserObj = function () {
        return this.subject.asObservable();
    };
    RegisterService.prototype.getUser = function () {
        return this.userData;
    };
    RegisterService.prototype.logout = function () {
        return this.http.get('https://shenkar-band-it.herokuapp.com/users/logout', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    RegisterService.prototype.register = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/users/register', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    RegisterService.prototype.updateUser = function (body) {
        console.log('hi from service');
        return this.http.post('https://shenkar-band-it.herokuapp.com/user/updateUser', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    RegisterService.prototype.login = function (body) {
        return this.http.post('https://shenkar-band-it.herokuapp.com/users/login', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    RegisterService.prototype.user = function () {
        return this.http.get('https://shenkar-band-it.herokuapp.com/users/getUserData', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 90px;\n}\n.panel-login {\n  border-color: #ccc;\n  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n  color: #00415d;\n  background-color: #fff;\n  border-color: #fff;\n  text-align:center;\n}\n.panel-login>.panel-heading a{\n  text-decoration: none;\n  color: #666;\n  font-weight: bold;\n  font-size: 15px;\n  transition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n  color: #029f5b;\n  font-size: 18px;\n}\n.panel-login>.panel-heading hr{\n  margin-top: 10px;\n  margin-bottom: 0px;\n  clear: both;\n  border: 0;\n  height: 1px;\n  background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n  height: 45px;\n  border: 1px solid #ddd;\n  font-size: 16px;\n  transition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n  outline:none;\n  box-shadow: none;\n  border-color: #ccc;\n}\n.btn-login {\n  background-color: #59B2E0;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n  color: #fff;\n  background-color: #53A3CD;\n  border-color: #53A3CD;\n}\n.forgot-password {\n  text-decoration: underline;\n  color: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n  text-decoration: underline;\n  color: #666;\n}\n.btn-register {\n  background-color: #1CB94E;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBR2xCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBR2YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFJWCx1RkFBdUY7QUFDekY7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUdmLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLFlBQVk7RUFHWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG59XG4ucGFuZWwtbG9naW4ge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xufVxuLnBhbmVsLWxvZ2luPi5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMwMDQxNWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcgYS5hY3RpdmV7XG4gIGNvbG9yOiAjMDI5ZjViO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcgaHJ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLCAwLCAwLCAwKSxyZ2JhKDAsIDAsIDAsIDAuMTUpLHJnYmEoMCwgMCwgMCwgMCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsMCkscmdiYSgwLDAsMCwwLjE1KSxyZ2JhKDAsMCwwLDApKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsMCkscmdiYSgwLDAsMCwwLjE1KSxyZ2JhKDAsMCwwLDApKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDAuMTUpLHJnYmEoMCwwLDAsMCkpO1xufVxuLnBhbmVsLWxvZ2luIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLC5wYW5lbC1sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sLnBhbmVsLWxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbn1cbi5wYW5lbC1sb2dpbiBpbnB1dDpob3Zlcixcbi5wYW5lbC1sb2dpbiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6bm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5idG4tbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTlCMkUwO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTlCMkU2O1xufVxuLmJ0bi1sb2dpbjpob3Zlcixcbi5idG4tbG9naW46Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzQTNDRDtcbiAgYm9yZGVyLWNvbG9yOiAjNTNBM0NEO1xufVxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzg4ODtcbn1cbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXG4uZm9yZ290LXBhc3N3b3JkOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uYnRuLXJlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDQjk0RTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1jb2xvcjogIzFDQjk0QTtcbn1cbi5idG4tcmVnaXN0ZXI6aG92ZXIsXG4uYnRuLXJlZ2lzdGVyOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQ0EzNDc7XG4gIGJvcmRlci1jb2xvcjogIzFDQTM0Nztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<body class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <div class=\"panel panel-login\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              <a routerLink=\"/login\"  id=\"login-form-link\">Login</a>\n            </div>\n            <div class=\"col-xs-6\">\n              <a routerLink=\"/register\"  class=\"active\" id=\"register-form-link\">Register</a>\n            </div>\n          </div>\n          <hr>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <form [formGroup]=\"registerForm\" id=\"register-form\"  method=\"post\" role=\"form\" style=\"display: block;\">\n                <div class=\"form-group\">\n                  <input type=\"text\" formControlName=\"firstName\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Firstname\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" formControlName=\"lastName\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Lastname\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <select formControlName=\"genre\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Genre\" value=\"\">\n                    <option value=\"\" disabled selected>Select your style</option>\n                    <option> Rock </option>\n                    <option> Punk </option>\n                    <option> Classic </option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <select formControlName=\"instrument\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Instrument\" value=\"\">\n                    <option value=\"\" disabled selected>Select your instrument</option>\n                    <option> Guitar </option>\n                    <option> Drums </option>\n                    <option> Vocals </option>\n                    <option> Bass </option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" formControlName=\"email\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"pass\"  tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"cpass\"  tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input (change)=\"onFileChange($event)\" type=\"file\" formControlName=\"file\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Upload Profile Image\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-sm-offset-3\">\n                      <input  (click)=\"register()\" type=\"submit\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_router, register_s) {
        this._router = _router;
        this.register_s = register_s;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            instrument: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cpass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid || (this.registerForm.controls.pass.value != this.registerForm.controls.cpass.value)) {
            console.log('Invalid Form');
            return;
        }
        this.registerForm.value.file = this.file;
        this.register_s.register(JSON.stringify(this.registerForm.value))
            .subscribe(function (data) { console.log(data); _this.register_s.updateUserSuccessObj(data); _this._router.navigate(['/index']); }, function (error) { return console.error(error); });
    };
    RegisterComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.file = {
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result
                };
            };
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sound-player/sound-player.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sound-player/sound-player.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sound-player {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  background: #1b1d25;\n  padding: 20px;\n  color:white;\n}\n\n#sound-player img {\n  width: 60px;\n  height: 60px;\n  border-radius:500px;\n}\n\n#sound-player audio {\n  width:100%;\n}\n\n#sound-player .icons {\n  font-size: 20px;\n}\n\n#sound-player .icons .glyphicon {\n  /*font-size: 15px;*/\n  margin-right:5px;\n}\n\nh3, p {\n  position:relative;\n  top:10px;\n  color:white;\n  line-height: 1;\n}\n\nh3 .glyphicon {\n  font-size:30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc291bmQtcGxheWVyL3NvdW5kLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zb3VuZC1wbGF5ZXIvc291bmQtcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc291bmQtcGxheWVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMWIxZDI1O1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuI3NvdW5kLXBsYXllciBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOjUwMHB4O1xufVxuXG4jc291bmQtcGxheWVyIGF1ZGlvIHtcbiAgd2lkdGg6MTAwJTtcbn1cbiNzb3VuZC1wbGF5ZXIgLmljb25zIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jc291bmQtcGxheWVyIC5pY29ucyAuZ2x5cGhpY29uIHtcbiAgLypmb250LXNpemU6IDE1cHg7Ki9cbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxuaDMsIHAge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjEwcHg7XG4gIGNvbG9yOndoaXRlO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuaDMgLmdseXBoaWNvbiB7XG4gIGZvbnQtc2l6ZTozMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/sound-player/sound-player.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-player/sound-player.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isInit\" id=\"sound-player\">\n  <div class=\"col-md-3\">\n    <div class=\"col-md-3\">\n    <img [src]=\"icon\">\n    </div>\n      <div class=\"col-md-9\">\n    <h3>{{title}}</h3>\n    <p>{{bandName}}</p>\n    </div>\n  </div>\n  <div class=\"col-md-7\">\n    <audio controls [src]=\"currentAudioUrl\" autoplay>\n    </audio>\n  </div>\n  <div class=\"col-md-2\" style=\"text-align:center\">\n    <h3 *ngIf=\"isLoggedIn()\">\n    <span (click)= \"addToFavorite()\" *ngIf=\"!favorited\" class=\"glyphicon glyphicon-heart-empty\"></span>\n      <span *ngIf=\"favorited\" class=\"glyphicon glyphicon-heart\"></span>\n    </h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-player/sound-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-player/sound-player.component.ts ***!
  \********************************************************/
/*! exports provided: SoundPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundPlayerComponent", function() { return SoundPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
/* harmony import */ var _bands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bands.service */ "./src/app/bands.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");





var SoundPlayerComponent = /** @class */ (function () {
    function SoundPlayerComponent(playerService, bandsService, registerService) {
        var _this = this;
        this.playerService = playerService;
        this.bandsService = bandsService;
        this.registerService = registerService;
        this.favorited = false;
        this.isInit = true;
        this.subscription = this.playerService.playAudio().subscribe(function (audio) {
            _this.songId = audio.songId;
            _this.bandsService.getSongUrl(audio).subscribe(function (data) {
                _this.setUrl(data);
            }, function (err) {
                console.error(err);
            });
        });
    }
    SoundPlayerComponent.prototype.setUrl = function (data) {
        this.currentAudioUrl = data.lastExportedUrl;
        this.title = data.title;
        this.bandName = data.bandName;
        this.icon = data.bandIcon;
        this.isInit = false;
    };
    SoundPlayerComponent.prototype.isLoggedIn = function () {
        var user = this.registerService.getUser();
        if (user && user._id) {
            return true;
        }
        else {
            return false;
        }
    };
    SoundPlayerComponent.prototype.addToFavorite = function () {
        var _this = this;
        this.bandsService.favoriteSong({ songId: this.songId }).subscribe(function (data) {
            _this.favorited = true;
        }, function (err) {
            console.error(err);
        });
    };
    SoundPlayerComponent.prototype.ngOnInit = function () {
    };
    SoundPlayerComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    SoundPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-player',
            template: __webpack_require__(/*! ./sound-player.component.html */ "./src/app/sound-player/sound-player.component.html"),
            styles: [__webpack_require__(/*! ./sound-player.component.css */ "./src/app/sound-player/sound-player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _bands_service__WEBPACK_IMPORTED_MODULE_3__["BandsService"], _register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], SoundPlayerComponent);
    return SoundPlayerComponent;
}());



/***/ }),

/***/ "./src/app/studio/studio.component.css":
/*!*********************************************!*\
  !*** ./src/app/studio/studio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRpby9zdHVkaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/studio/studio.component.html":
/*!**********************************************!*\
  !*** ./src/app/studio/studio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <h1>MY STUDIO</h1>\n  <h2>EXPORTED SONGS</h2>\n  <div *ngFor=\"let song of exportedSongs\">\n    <a (click)=\"playSong(song._id)\">\n      <p style=\"margin:15px 0px; font-size: 16px; background: #07072f38; padding: 10px;\">\n        <img style=\"border-radius:50%; width:60px; margin-right:10px;\" src={{song.band.icon}}>{{song.band.name}} - {{song.title}}\n        <a href=\"{{'/songstudio/?id='+song._id}}\">\n          <span style=\"margin-left:10px\" class=\"glyphicon glyphicon-edit\"></span>\n        </a>\n      </p>\n    </a>\n  </div>\n  <h2>YET TO BE EXPORTED</h2>\n  <div *ngFor=\"let song of unexportedSongs\">\n      <p style=\"margin:15px 0px; font-size: 16px; background: #07072f38; padding: 10px;\">\n        <img style=\"border-radius:50%; width:60px; margin-right:10px;\" src={{song.band.icon}}>{{song.band.name}} - {{song.title}}\n        <a href=\"{{'/songstudio/?id='+song._id}}\">\n          <span style=\"margin-left:10px\" class=\"glyphicon glyphicon-edit\"></span>\n        </a>\n      </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/studio/studio.component.ts":
/*!********************************************!*\
  !*** ./src/app/studio/studio.component.ts ***!
  \********************************************/
/*! exports provided: StudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioComponent", function() { return StudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bands.service */ "./src/app/bands.service.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");




var StudioComponent = /** @class */ (function () {
    function StudioComponent(bandsService, playerService) {
        var _this = this;
        this.bandsService = bandsService;
        this.playerService = playerService;
        this.exportedSongs = [];
        this.unexportedSongs = [];
        this.bandsService.getAllSongs().subscribe(function (data) {
            _this.sortSongs(data);
        });
    }
    StudioComponent.prototype.sortSongs = function (data) {
        var _this = this;
        data.forEach(function (song) {
            if (song.lastExportedUrl) {
                _this.exportedSongs.push(song);
            }
            else {
                _this.unexportedSongs.push(song);
            }
        });
    };
    StudioComponent.prototype.playSong = function (songId) {
        var audioObj = {
            songId: songId
        };
        this.playerService.sendToPlayer(audioObj);
    };
    StudioComponent.prototype.ngOnInit = function () {
    };
    StudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studio',
            template: __webpack_require__(/*! ./studio.component.html */ "./src/app/studio/studio.component.html"),
            styles: [__webpack_require__(/*! ./studio.component.css */ "./src/app/studio/studio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bands_service__WEBPACK_IMPORTED_MODULE_2__["BandsService"], _player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], StudioComponent);
    return StudioComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 90px;\n}\n.panel-login {\n  border-color: #ccc;\n  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n  color: #00415d;\n  background-color: #fff;\n  border-color: #fff;\n  text-align:center;\n}\n.panel-login>.panel-heading a{\n  text-decoration: none;\n  color: #666;\n  font-weight: bold;\n  font-size: 15px;\n  transition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n  color: #029f5b;\n  font-size: 18px;\n}\n.panel-login>.panel-heading hr{\n  margin-top: 10px;\n  margin-bottom: 0px;\n  clear: both;\n  border: 0;\n  height: 1px;\n  background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n  height: 45px;\n  border: 1px solid #ddd;\n  font-size: 16px;\n  transition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n  outline:none;\n  box-shadow: none;\n  border-color: #ccc;\n}\n.btn-login {\n  background-color: #59B2E0;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n  color: #fff;\n  background-color: #53A3CD;\n  border-color: #53A3CD;\n}\n.forgot-password {\n  text-decoration: underline;\n  color: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n  text-decoration: underline;\n  color: #666;\n}\n.btn-register {\n  background-color: #1CB94E;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUdsQiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUdmLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBSVgsdUZBQXVGO0FBQ3pGO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFHZiwyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSxZQUFZO0VBR1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjtBQUNBOztFQUVFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogOTBweDtcbn1cbi5wYW5lbC1sb2dpbiB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG59XG4ucGFuZWwtbG9naW4+LnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogIzAwNDE1ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5wYW5lbC1sb2dpbj4ucGFuZWwtaGVhZGluZyBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbn1cbi5wYW5lbC1sb2dpbj4ucGFuZWwtaGVhZGluZyBhLmFjdGl2ZXtcbiAgY29sb3I6ICMwMjlmNWI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wYW5lbC1sb2dpbj4ucGFuZWwtaGVhZGluZyBocntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsIDAsIDAsIDApLHJnYmEoMCwgMCwgMCwgMC4xNSkscmdiYSgwLCAwLCAwLCAwKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDAuMTUpLHJnYmEoMCwwLDAsMCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwwKSxyZ2JhKDAsMCwwLDAuMTUpLHJnYmEoMCwwLDAsMCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsMCwwLDApLHJnYmEoMCwwLDAsMC4xNSkscmdiYSgwLDAsMCwwKSk7XG59XG4ucGFuZWwtbG9naW4gaW5wdXRbdHlwZT1cInRleHRcIl0sLnBhbmVsLWxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwucGFuZWwtbG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xufVxuLnBhbmVsLWxvZ2luIGlucHV0OmhvdmVyLFxuLnBhbmVsLWxvZ2luIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTpub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmJ0bi1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OUIyRTA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItY29sb3I6ICM1OUIyRTY7XG59XG4uYnRuLWxvZ2luOmhvdmVyLFxuLmJ0bi1sb2dpbjpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBM0NEO1xuICBib3JkZXItY29sb3I6ICM1M0EzQ0Q7XG59XG4uZm9yZ290LXBhc3N3b3JkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjODg4O1xufVxuLmZvcmdvdC1wYXNzd29yZDpob3Zlcixcbi5mb3Jnb3QtcGFzc3dvcmQ6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5idG4tcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCOTRFO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWNvbG9yOiAjMUNCOTRBO1xufVxuLmJ0bi1yZWdpc3Rlcjpob3Zlcixcbi5idG4tcmVnaXN0ZXI6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDQTM0NztcbiAgYm9yZGVyLWNvbG9yOiAjMUNBMzQ3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <div class=\"panel panel-login\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n            </div>\n            <div class=\"col-xs-6\">\n              <a href=\"#\" id=\"register-form-link\">Register</a>\n            </div>\n          </div>\n          <hr>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <form [formGroup]=\"loginForm\" id=\"login-form\" action=\"https://phpoll.com/login/process\" method=\"post\" role=\"form\" style=\"display: block;\">\n                <div class=\"form-group\">\n                  <input type=\"text\" formControlName=\"email\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group text-center\">\n                  <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                  <label for=\"remember\"> Remember Me</label>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-sm-offset-3\">\n                      <input (click)=\"login()\" type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"text-center\">\n                        <a href=\"https://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <form id=\"register-form\" action=\"https://phpoll.com/register/process\" method=\"post\" role=\"form\" style=\"display: none;\">\n                <div class=\"form-group\">\n                  <input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-sm-offset-3\">\n                      <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email)
        });
    }
    TestComponent.prototype.login = function () {
        if (!this.loginForm.valid) {
            console.log('Invalid Form');
            return;
        }
        console.log(JSON.stringify(this.loginForm.value));
    };
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gadyezra/Sites/Bandit/app-new/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map