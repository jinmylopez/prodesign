webpackJsonp([1,4],{136:function(t,e,n){"use strict";var o=n(0),a=n(314);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.af=t}return t.prototype.loginWithGoogle=function(){return this.af.auth.login({provider:a.b.Google,method:a.c.Popup})},t.prototype.logout=function(){return this.af.auth.logout()},t=i([n.i(o.c)(),r("design:paramtypes",["function"==typeof(e=void 0!==a.d&&a.d)&&e||Object])],t);var e}()},344:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=344},345:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(433),a=n(0),i=n(467),r=n(464);i.a.production&&n.i(a.a)(),n.i(o.a)().bootstrapModule(r.a)},463:function(t,e,n){"use strict";var o=n(0),a=n(134),i=n(136);n.d(e,"a",function(){return u});var r=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){var n=this;this.authService=t,this.router=e,this.authService.af.auth.subscribe(function(t){null==t?(console.log("Logged out"),n.isLoggedIn=!1,n.user_displayName="",n.user_email="",n.router.navigate(["prodesign/login"])):(n.isLoggedIn=!0,n.user_displayName=t.google.displayName,n.user_email=t.google.email,console.log("Logged in"),console.log(t),n.router.navigate([""]))})}return t=r([n.i(o._6)({selector:"app-root",template:n(537),styles:[n(534)]}),c("design:paramtypes",["function"==typeof(e=void 0!==i.a&&i.a)&&e||Object,"function"==typeof(u=void 0!==a.b&&a.b)&&u||Object])],t);var e,u}()},464:function(t,e,n){"use strict";var o=n(132),a=n(0),i=n(423),r=n(429),c=n(134),u=n(314),f=n(463),s=n(136),l=n(466),p=n(465);n.d(e,"a",function(){return b});var d=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v={apiKey:"AIzaSyBXBz6NXBPU9c7DmGiL20npaWxjFYw3rVQ",authDomain:"login-prueba-58ad2.firebaseapp.com",databaseURL:"https://login-prueba-58ad2.firebaseio.com",projectId:"login-prueba-58ad2",storageBucket:"login-prueba-58ad2.appspot.com",messagingSenderId:"732749725818"},h=[{path:"",component:p.a},{path:"prodesign/login",component:l.a}],b=function(){function t(){}return t=d([n.i(a.b)({declarations:[f.a,l.a,p.a],imports:[o.a,i.a,r.a,u.a.initializeApp(v),c.a.forRoot(h)],providers:[s.a],bootstrap:[f.a]}),g("design:paramtypes",[])],t)}()},465:function(t,e,n){"use strict";var o=n(0),a=n(134),i=n(136);n.d(e,"a",function(){return u});var r=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){var n=this;this.authService=t,this.router=e,this.authService.af.auth.subscribe(function(t){n.user_displayName=t.google.displayName})}return t.prototype.ngOnInit=function(){},t.prototype.logout=function(){this.authService.logout(),this.router.navigate(["login"])},t=r([n.i(o._6)({selector:"app-home-page",template:n(538),styles:[n(535)]}),c("design:paramtypes",["function"==typeof(e=void 0!==i.a&&i.a)&&e||Object,"function"==typeof(u=void 0!==a.b&&a.b)&&u||Object])],t);var e,u}()},466:function(t,e,n){"use strict";var o=n(0),a=n(134),i=n(136);n.d(e,"a",function(){return u});var r=this&&this.__decorate||function(t,e,n,o){var a,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(r=(i<3?a(r):i>3?a(e,n,r):a(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.authService=t,this.router=e}return t.prototype.ngOnInit=function(){},t.prototype.login=function(){var t=this;this.authService.loginWithGoogle().then(function(e){t.router.navigate([""])})},t=r([n.i(o._6)({selector:"app-login-page",template:n(539),styles:[n(536)]}),c("design:paramtypes",["function"==typeof(e=void 0!==i.a&&i.a)&&e||Object,"function"==typeof(u=void 0!==a.b&&a.b)&&u||Object])],t);var e,u}()},467:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},534:function(t,e){t.exports=""},535:function(t,e){t.exports=""},536:function(t,e){t.exports=""},537:function(t,e){t.exports='<div class="container">\n  \n  <nav class="navbar navbar-default navbar-fixed-top">\n    <div class="container">\n      <div class="navbar-header">\n        <a class="navbar-brand" href="http://codingthesmartway.com">Holi</a>\n      </div>\n      <div *ngIf="isLoggedIn">\n        <p class="navbar-text navbar-right">Logged In: {{user_displayName}} ({{user_email}})<p>\n      </div>\n      <div *ngIf="!isLoggedIn">\n        <p class="navbar-text navbar-right">Logged Out</p>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n'},538:function(t,e){t.exports='<div class="container">\n  <div class="row">\n    <div class="jumbotron">\n      <h1>Welcome</h1>\n      <p> {{user_displayName}} :) </p>\n      <p><button class="btn btn-default" (click)="logout()">Logout</button></p>\n    </div>\n  </div>\n</div>\n'},539:function(t,e){t.exports='<div class="container">\n  <div>\n    <h1>Login To Your Account</h1>\n    <button class="btn btn-default" (click)="login()">Login With Google</button>\n  </div>\n</div>\n'},562:function(t,e,n){t.exports=n(345)}},[562]);