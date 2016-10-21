//this will look up an existing module with this name
angular.module('starWarsApp')
       .service('swapi', StarWarsAPIService);

function StarWarsAPIService($http) {
  var API = 'http://swapi.co/api';

  this.getFilms = function () {
    //we need to return this whole promise
    return $http.get(API + '/films')
      .then(function (response) {
        return response.data.results;
      });
  };

  this.getFilmData = function (url) {
    return $http.get(url)
      .then(function (response) {
        return response.data;
      });
  };
}
