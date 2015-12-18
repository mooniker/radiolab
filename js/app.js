'use strict';

(function(){
  angular
    .module('radiolab', [
      'ui.router',
      'songs'
    ])
    .config([
      '$stateProvider',
      RouterFunction
    ]);
})();

function RouterFunction($stateProvider) {
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'js/welcome.html'
    })
    .state('songs', {
      url: '/songs',
      templateUrl: 'js/songs.html',
      controller: 'SongsController',
      controllerAs: 'SongsViewModel'
    });
}
