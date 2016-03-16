'use strict'

angular.module('flashApp')
.factory('QuoteService', function($http) {

  function getQuotes() {
    return $http.get("/quotes")
  };

  function deleteQuote(id) {
    return $http.delete(`/quotes/${id}`)
  };

  function newQuote(quote) {
    return $http.post('/quotes', quote)
  };

  function editQuote(quote, id) {
    return $http.put(`/quotes/${id}`, quote)
  };

  return {
    getQuotes: getQuotes,
    deleteQuote: deleteQuote,
    newQuote: newQuote,
    editQuote: editQuote
  }
})
