var spaApp = angular.module('myApp', ['ngRoute']);

// Khai báo routeProvider
spaApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'Views/home.html',
            controller: "dsSpCtrl"
        })
        .when('/', {
            templateUrl: 'Views/home.html',
            controller: "dsSpCtrl"
        })
        .when('/about', {
            templateUrl: 'Views/about.html',
        })
        .when('/lienhe', {
            templateUrl: 'Views/lienhe.html',
        })
        .when('/suatk', {
            templateUrl: 'Views/account/suatk.html',
        })
        .when('/login', {
            templateUrl: 'Views/account/dangnhap.html',
            controller: login,
        })
        .when("/register", {
            templateUrl: "Views/account/dangky.html",
            controller: login,
        })
        .when("/forget", {
            templateUrl: "Views/account/quenmk.html",
            controller: login,
        })
        .when("/detail/:id", {
            templateUrl: "Views/detail.html",
            controller: detailController,
        })
        .when("/test/:id", {
            templateUrl: "Views/thi.html",
            controller: testController,
        })
        .when("/result/:id", {
            templateUrl: "Views/ketqua.html",
            controller: ResultController,
        })
        .otherwise({
            redirectTo: 'ERRORS 404 '
        })

});