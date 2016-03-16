'use strict'

angular.module('flashApp')
.factory('QuoteService', function($http) {

  function getQuotes() {
    return $http({
      method: "GET",
      url: "/quotes",
    })
  };


  return {
    getQuotes: getQuotes
  }


})
