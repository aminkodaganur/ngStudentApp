webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section\">\n    <div class=\"ui container\">\n\n        <div class=\"ui segment main__segment\">\n\n            <h2 class=\"ui header\">\n                <i class=\"users icon\"></i>\n                <div class=\"content\">\n                    Students App\n                    <div class=\"sub header\">Manage Students Details</div>\n                </div>\n            </h2>\n            <div class=\"ui divider\"></div>\n\n            <router-outlet></router-outlet>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right__aligned {\n  text-align: right; }\n\n.section__heading {\n  margin-top: 14px !important; }\n\n.center__aligned {\n  text-align: center; }\n\n.main-section {\n  background-color: #333;\n  margin: 0px;\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: auto; }\n  .main-section .main__segment {\n    margin-top: 60px;\n    padding-bottom: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_list_student_list_component__ = __webpack_require__("../../../../../src/app/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_edit_student_edit_component__ = __webpack_require__("../../../../../src/app/student-edit/student-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__student_list_student_list_component__["a" /* StudentListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__student_edit_student_edit_component__["a" /* StudentEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_router__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_student_service__["a" /* StudentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_list_student_list_component__ = __webpack_require__("../../../../../src/app/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_edit_student_edit_component__ = __webpack_require__("../../../../../src/app/student-edit/student-edit.component.ts");



var router = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_1__student_list_student_list_component__["a" /* StudentListComponent */] },
    { path: 'edit/:uid', component: __WEBPACK_IMPORTED_MODULE_2__student_edit_student_edit_component__["a" /* StudentEditComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.allStudent = [];
    }
    StudentService.prototype.putAllStudents = function (data) {
        this.allStudent = data;
    };
    StudentService.prototype.getAllStudent = function () {
        return this.allStudent;
    };
    StudentService.prototype.getAllStudentsServer = function () {
        var data$ = this.http.get('assets/student.json');
        return data$;
    };
    StudentService.prototype.addStudent = function (newStudent) {
        this.allStudent.push(newStudent);
    };
    StudentService.prototype.removeStudent = function (uid) {
        var index = this.allStudent.findIndex(function (item) { return item.uid === uid; });
        this.allStudent.splice(index, 1);
    };
    StudentService.prototype.getStudentByUID = function (uid) {
        var index = this.allStudent.findIndex(function (item) { return item.uid === uid; });
        return this.allStudent[index];
    };
    StudentService.prototype.updateStudent = function (data, uid) {
        var index = this.allStudent.findIndex(function (item) { return item.uid === uid; });
        this.allStudent[index]['fname'] = data['fname'];
        this.allStudent[index]['lname'] = data['lname'];
        this.allStudent[index]['school'] = data['school'];
        this.allStudent[index]['gender'] = data['gender'];
        this.allStudent[index]['uid'] = data['uid'];
        this.allStudent[index]['avt'] = data['avt'];
    };
    return StudentService;
}());
StudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/student-edit/student-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container student__list\">\n\n    <div class=\"ui grid\">\n        <div class=\"eight wide column\">\n            <h3 class=\"ui header section__heading\">\n                Add/Edit Students\n            </h3>\n        </div>\n        <div class=\"eight wide column\">\n            <div class=\"right__aligned\">\n                <button [routerLink] = '[\"/list\"]' class=\"circular ui icon big grey button\">\n                  <i class=\"remove icon\"></i>\n                </button>\n                <button class=\"circular ui icon big green button\" (click)=\"submitData();\">\n                    <i class=\"checkmark icon\"></i>\n                </button>                \n            </div>\n        </div>\n    </div>\n    <div class=\"ui divider\"></div>\n\n    <form novalidate [formGroup]=\"studentForm\">\n    <div class=\"ui stacked segment\">\n        <div class=\"ui grid\">\n            <div class=\"four wide column\">\n                <div class=\"center__aligned\">\n                    <img class=\"ui avatar image student__avatar\" src=\"/assets/img/{{studentForm.controls['avt'].value}}\">\n                </div>\n            </div>\n            <div class=\"twelve wide column\">\n                <div class=\"ui form form__container\">\n                    \n                    <div class=\"inline fields\">\n                        <div class=\"eight wide field\">\n                            <label>Name</label>\n                            <input type=\"text\" placeholder=\"First Name\" formControlName=\"fname\">\n                        </div>\n                        <div class=\"five wide field\">\n                            <input type=\"text\" placeholder=\"Last Name\" formControlName=\"lname\">\n                        </div>\n                    </div>\n\n                    <div class=\"inline fields\">\n                        <div class=\"ten wide field\">\n                            <label>School</label>\n                            <select class=\"ui fluid dropdown\" formControlName=\"school\">\n                                <option value=\"delhi\">Delhi Public School</option>\n                                <option value=\"greenwood\">Greenwood High International School</option>\n                                <option value=\"inventure\">Inventure Academy</option>\n                            </select>\n                        </div>\n                        <div class=\"three wide field\">\n                            <select class=\"ui fluid dropdown\" formControlName=\"gender\">\n                                <option value=\"female\">Female</option>\n                                <option value=\"male\">Male</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"inline fields\">\n                        <div class=\"ten wide field\">\n                            <label>Sl.No</label>\n                            <input type=\"text\" placeholder=\"Serial Number\" formControlName=\"uid\">                            \n                        </div>\n                    </div>\n                    <div class=\"error__msg elm__block\" *ngIf=\"studentForm.controls['uid'].dirty && studentForm.controls['uid'].invalid\">\n                        It must be 8 Charecters & First Charecter should letter.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/student-edit/student-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right__aligned {\n  text-align: right; }\n\n.section__heading {\n  margin-top: 14px !important; }\n\n.center__aligned {\n  text-align: center; }\n\n.student__list {\n  width: 85%; }\n\n.ui.avatar.image.student__avatar {\n  width: 8em;\n  height: 8em; }\n\n.ng-dirty.ng-invalid.ng-touched {\n  background-color: #fff6f6;\n  border-color: #e0b4b4;\n  color: #9f3a38;\n  box-shadow: none; }\n\n.elm__block {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-edit/student-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentEditComponent = (function () {
    function StudentEditComponent(_studentService, formBuilder, router, routerB) {
        var _this = this;
        this._studentService = _studentService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.routerB = routerB;
        this.router.params.subscribe(function (params) {
            if (params['uid'] == '000New') {
                //do nothing
            }
            else {
                _this.uid = params['uid'];
            }
        });
    }
    StudentEditComponent.prototype.ngOnInit = function () {
        this.studentForm = this.formBuilder.group({
            "fname": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            "lname": [],
            "school": ['delhi'],
            "gender": ['male'],
            "uid": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^[a-zA-Z][0-9]{7}$/)]],
            "avt": ['mark.png']
        });
        if (this.uid) {
            this.populateData();
        }
        var self = this;
        this.studentForm.controls['gender'].valueChanges.subscribe(function () {
            self.toggelAvt();
        });
    };
    StudentEditComponent.prototype.populateData = function () {
        var exStudent = this._studentService.getStudentByUID(this.uid);
        this.studentForm.controls['fname'].setValue(exStudent.fname);
        this.studentForm.controls['lname'].setValue(exStudent.lname);
        this.studentForm.controls['school'].setValue(exStudent.school);
        this.studentForm.controls['gender'].setValue(exStudent.gender);
        this.studentForm.controls['uid'].setValue(exStudent.uid);
        this.studentForm.controls['avt'].setValue(exStudent.avt);
    };
    StudentEditComponent.prototype.submitData = function () {
        if (this.studentForm.valid) {
            var data = {
                "fname": this.studentForm.controls['fname'].value,
                "lname": this.studentForm.controls['lname'].value,
                "school": this.studentForm.controls['school'].value,
                "gender": this.studentForm.controls['gender'].value,
                "uid": this.studentForm.controls['uid'].value,
                "avt": this.studentForm.controls['avt'].value
            };
            if (this.uid) {
                this._studentService.updateStudent(data, this.uid);
            }
            else {
                this._studentService.addStudent(data);
            }
            this.routerB.navigate(['/list']);
        }
    };
    StudentEditComponent.prototype.toggelAvt = function () {
        if (this.studentForm.controls['gender'].value == 'male') {
            this.studentForm.controls['avt'].setValue('mark.png');
        }
        else {
            this.studentForm.controls['avt'].setValue('lena.png');
        }
    };
    return StudentEditComponent;
}());
StudentEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-edit',
        template: __webpack_require__("../../../../../src/app/student-edit/student-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-edit/student-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], StudentEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=student-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container student__list\">\n\n    <div class=\"ui grid\">\n        <div class=\"eight wide column\">\n            <h3 class=\"ui header section__heading\">\n                List of All Students\n            </h3>\n        </div>\n        <div class=\"eight wide column\">\n            <div class=\"right__aligned\">\n                <button [routerLink] = '[\"/edit\", \"000New\"]' class=\"circular ui icon big violet button\">\n                    <i class=\"icon plus\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui divider\"></div>\n\n    <div class=\"ui stacked segment make__small\">\n        <div class=\"ui middle aligned divided list\" *ngIf=\"serverData.length > 0\">\n            <div class=\"item\" *ngFor=\"let student of serverData;\">\n                <div class=\"right floated content\">\n                    <button class=\"ui icon button\" [routerLink]=\"['/edit', student.uid]\">\n                        <i class=\"edit icon\"></i>\n                    </button>\n                    <button class=\"ui icon red button\" (click)=\"removeUser(student.uid)\">\n                        <i class=\"remove icon\"></i>\n                    </button>\n                </div>\n                <img class=\"ui avatar image\" src=\"{{'/assets/img/'+student.avt}}\">\n                <div class=\"content\">\n                    <h3>{{student.fname}} {{student.lname}}</h3> from {{ schoolMapping[student.school] }}\n                </div>\n            </div>            \n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/student-list/student-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right__aligned {\n  text-align: right; }\n\n.section__heading {\n  margin-top: 14px !important; }\n\n.center__aligned {\n  text-align: center; }\n\n.student__list {\n  width: 85%; }\n\n.ui.avatar.image {\n  width: 5em;\n  height: 5em; }\n\n.make__small {\n  width: 70%;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-list/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentListComponent = (function () {
    function StudentListComponent(_studentService, router) {
        this._studentService = _studentService;
        this.router = router;
        this.serverData = [];
        this.schoolMapping = {};
        this.getLatestStudentFromService();
    }
    StudentListComponent.prototype.ngOnInit = function () {
        if (!(this.serverData.length > 0)) {
            var self_1 = this;
            this._studentService.getAllStudentsServer().subscribe(function (res) {
                var data = res.json();
                self_1.serverData = data['data']['studentsData'];
                self_1._studentService.putAllStudents(self_1.serverData);
            });
        }
        this.schoolMapping = {
            'delhi': 'Delhi Public School',
            'inventure': 'Inventure Academy',
            'greenwood': 'Greenwood High International School'
        };
    };
    StudentListComponent.prototype.getLatestStudentFromService = function () {
        this.serverData = this._studentService.getAllStudent();
    };
    StudentListComponent.prototype.removeUser = function (uid) {
        this._studentService.removeStudent(uid);
        this.getLatestStudentFromService();
    };
    return StudentListComponent;
}());
StudentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-list',
        template: __webpack_require__("../../../../../src/app/student-list/student-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-list/student-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], StudentListComponent);

var _a, _b;
//# sourceMappingURL=student-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map