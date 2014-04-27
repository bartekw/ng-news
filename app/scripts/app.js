'use strict';

var app = angular
  .module('ngNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'ui.router',
    'ui.bootstrap'
  ])
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ui-sref-active="active }"> will set the <li> // to active whenever
      // 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      }
    ]
  )  
  .constant('FIREBASE_URL', 'https://flickering-fire-2880.firebaseIO.com/')
/*  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })      
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
*/
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('start', {
      url: '/',
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'AuthCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    })
    .state('roles', {
      abstract: true,
      url: '/roles',
      templateUrl: 'views/roles.html',
      controller: 'RolesCtrl'
    })
    .state('roles.list', {
      url: '',
      templateUrl: 'views/roles.html',
      controller: 'RolesCtrl'
    })    
    .state('roles.add', {
      url: '/add',
      templateUrl: 'views/roles.html',
      controller: 'RolesCtrl'
    })
    .state('roles.edit', {
      url: '/edit/:id',
      templateUrl: 'views/roles.html',
      controller: 'RolesCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: '404.html',
      controller: 'AuthCtrl'
    })

});

//  });
