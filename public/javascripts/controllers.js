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

//quiz controller
app.controller('quizCtrl', function($scope, QuoteService) {

  QuoteService.getQuotes()
    .then(function(res) {
      $scope.quotes = res.data;
    }, function(err) {
      console.log('err', err)
    });

    $scope.viewAll = false;
    $scope.cardView = function() {
      if(!$scope.viewAll){
        return $scope.viewAll = true;
      }
      return $scope.viewAll = false;
    }

    $scope.index = 0;
    $scope.prev = function() {
      if($scope.index === 0) {
        return;
      }
      angular.element('.card-reveal')
      .css("display", "none").css("transform", "translateY(0px)");
      $scope.index--;
    }

    $scope.next = function() {
      if($scope.index === $scope.quotes.length - 1) {
        return;
      }
      angular.element('.card-reveal')
      .css("display", "none").css("transform", "translateY(0px)");
      $scope.index++;
    }
});

//edit controller
app.controller('editCtrl', function($scope, $state, QuoteService) {
  //populate list of quotes
  QuoteService.getQuotes()
    .then(function(res) {
      $scope.quotes = res.data;
    }, function(err) {
      console.log('err', err)
    })

  //delete a quote from the list
  $scope.deleteQuote = function(quote) {
    var id = quote.id;
    QuoteService.deleteQuote(id)
      .then(function(res) {
        var index = $scope.quotes.indexOf(quote)
        $scope.quotes.splice(index, 1);
      }, function(err) {
        console.log('err', err);
      })
  }

  //make edit fields show and populate with existing data
  $scope.showBox = false;
  $scope.editQuote = function(quote) {
    if ($scope.showBox === true) {
      return $scope.showBox = false;
    }
    $scope.edit = quote;
    $scope.showBox = true;
  }

  //save after edit
  $scope.saveEditQuote = function(valid) {
    if (!valid) return;

    var updatedQuote = $scope.edit;
    var id = updatedQuote.id;

    QuoteService.editQuote(updatedQuote, id)
      .then(function(res) {
        $scope.quotes = $scope.quotes.map(function(quote) {
          if (quote.id === id) {
            return updatedQuote;
          } else {
            return quote;
          }
        });
        $scope.showBox = false;
      }, function(err) {
        console.log('ERR', err);
      })
  }

  //change to add quote state
  $scope.addNewQuote = function() {
    $state.go('add');
  }
});

//add quote controller
app.controller('addCtrl', function($scope, $state, QuoteService) {
  $scope.saveNewQuote = function(valid) {
    if (!valid) return;

    var newQuote = $scope.newQuote;
    QuoteService.newQuote(newQuote)
      .then(function(res) {
        $scope.newQuote = {};
        $state.go('edit');
      }, function(err) {
        console.log('err', err);
      })
  }

  //cancel new quote creation
  $scope.cancelQuote = function() {
    $state.go('edit');
  }
});
