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

  QuoteService.getQuotes()
  .then(function(res) {

    $scope.quotes = res.data;
    console.log(res);
  }, function(err) {
    console.error('err', err)
  })

});




app.controller('editCtrl', function($scope, $state, QuoteService) {

  //populate list of quotes
  QuoteService.getQuotes()
  .then(function(res) {
    $scope.quotes = res.data;
    console.log(res);
  }, function(err) {
    console.log('err', err)
  })

  //delete a quote from the list
  $scope.deleteQuote = function(quote) {
    var id = quote.id;
    QuoteService.deleteQuote(id)
    .then(function(res) {
      console.log('RES', res);
      var index = $scope.quotes.indexOf(quote)
      $scope.quotes.splice(index,1);
    }, function(err) {
      console.log('err', err);
    })
  }

  //make edit fields show and populate with existing data
  $scope.showBox = false;
  $scope.editQuote = function(quote) {
    console.log('QUOTE', quote);
    if($scope.showBox === true) {
        return $scope.showBox = false;
    }

    $scope.edit = quote;
    $scope.showBox = true;
  }

  $scope.saveEditQuote = function(valid) {
    if(!valid) return;
    console.log('you are saving a quote');

    //QuoteService.editQuote().

  }


  $scope.addNewQuote = function() {
    $state.go('add');
  }

});








app.controller('addCtrl', function($scope, $state, QuoteService) {
  console.log("add ctrl is loaded");

  $scope.saveNewQuote = function(valid) {
    if(!valid) return;

    var newQuote = $scope.newQuote;
    newQuote.category = "quotes"
    QuoteService.newQuote(newQuote)
    .then(function(res) {
      $scope.newQuote = {};
      $state.go('edit');
      console.log('res: ', res);
    }, function(err) {
      console.log('err', err);
    })

  }

});
















///
