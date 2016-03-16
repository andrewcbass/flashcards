'use strict';

var app = angular.module('flashApp');

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl loaded');
});

app.controller('homeCtrl', function($scope, $state) {
  $scope.quoteQuiz = function() {
    $state.go('quiz')
  }

});


app.controller('quizCtrl', function($scope, QuoteService) {
  console.log('quizCtrl loaded');

  QuoteService.getQuotes()
  .then(function(res) {

    $scope.quotes = res.data;

    console.log(res);
  }, function(err) {
    console.error('err', err)
  })



});

app.controller('editCtrl', function($scope, QuoteService) {
  console.log('editCtrl loaded');

  QuoteService.getQuotes()
  .then(function(res) {

    $scope.quotes = res.data;

    console.log(res);
  }, function(err) {
    console.error('err', err)
  })



});
