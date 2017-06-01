//路由
var app=angular.module('myapp',['ngRoute','angularCSS']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{templateUrl:'html/home.html',css:'css/home.css',controller:'home'})
    .when('/shandian',{templateUrl:'html/shandian.html',css:'css/shandian.css',controller:'shandian'})
    .when('/shopcar',{templateUrl:'html/shopcar.html',css:'css/shopcar.css',controller:'shopCars'})
    .when('/yuding',{templateUrl:'html/yuding.html'})
    .when('/mine',{templateUrl:'html/mine.html'})   
    .otherwise('/');
}]);