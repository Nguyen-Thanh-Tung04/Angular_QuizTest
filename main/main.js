var spaApp = angular.module('myApp', ['ngRoute']);

// Khai báo routeProvider
spaApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
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
        .when("/result", {
            templateUrl: "app/Views/user/ketqua.html",
        })
        .when("/admin", {
            templateUrl: "app/Views/admin/home.html",

        })
        .when("/create-product", {
            templateUrl: "pages/product/create.html",
            controller: "createSpCtrl"
        })
        .when("/detail-product/:id_product", {
            templateUrl: "pages/product/detail.html",
            controller: "detailSpCtrl"
        })
        .when("/edit-product/:id", {
            templateUrl: "pages/product/edit.html",
            controller: "editSpCtrl"
        })
        .otherwise({
            redirectTo: '/list-product'
        })

});