/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */




var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/rentcycles", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/corporate", {templateUrl: "partials/corporate.html", controller: "PageCtrl"})
    .when("/tourwithus", {templateUrl: "partials/tourwithus.html", controller: "PageCtrl"})
    .when("/bicycle_sharing", {templateUrl: "partials/bicycle_sharing.html", controller: "PageCtrl"})
    .when("/cycle_tourism", {templateUrl: "partials/cycle_tourism.html", controller: "PageCtrl"})
    .when("/bicycle_sharing", {templateUrl: "partials/bicycle_sharing.html", controller: "PageCtrl"})
    .when("/nandi_habba", {templateUrl: "partials/nandi_habba.html", controller: "PageCtrl"})
    .when("/campaign", {templateUrl: "partials/campaign.html", controller: "PageCtrl"})

   .when("/gallery", {templateUrl: "partials/gallery.html", controller: "PageCtrl"})
   .when("/join", {templateUrl: "partials/join.html", controller: "PageCtrl"})
    .when("/team", {templateUrl: "partials/team.html", controller: "PageCtrl"})
    .when("/accomplish", {templateUrl: "partials/acheivement.html", controller: "PageCtrl"})

    .when("/partner", {templateUrl: "partials/partners.html", controller: "PageCtrl"})
    .when("/vision", {templateUrl: "partials/vision.html", controller: "PageCtrl"})
    .when("/news", {templateUrl: "partials/news.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/intern", {templateUrl: "partials/intern.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

   
});
