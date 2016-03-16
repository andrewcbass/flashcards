'use strict';

angular.module('flashApp', ['ui.router', 'ngMessages'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .state('quiz', {
      url: '/quiz',
      templateUrl: 'partials/quiz.html',
      controller: 'quizCtrl'
    })
    .state('edit', {
      url: '/edit',
      templateUrl: 'partials/edit.html',
      controller: 'editCtrl'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'partials/add.html',
      controller: 'addCtrl'
    })

});
