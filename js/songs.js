'use strict';

(function(){ // song.module.js
  angular
  .module('songs', [
    'ngResource'
  ]);
})();

(function(){
  angular
  .module('songs')
  .directive('song', function(){
    return {
      templateUrl: 'js/_song.html',
      restrict: 'E',
      replace: true
    }
  });
})();

(function(){ // song.factory.js
  angular
    .module( "songs" )
    .factory( "SongFactory", [
      "$resource",
      FactoryFunction
    ]);

    function FactoryFunction( $resource ){
      return $resource( "http://localhost:3000/songs/:id" );
    }
})();

(function(){
  angular
    .module('songs')
    .controller('SongsController', [
      'SongFactory',
      // '$stateParams',
      SongsController
    ]);

    function SongsController(SongFactory){
      this.songs = SongFactory.query();
      // [{
      // id: 35,
      // title: "Miss You",
      // audio_url: "http://a1748.phobos.apple.com/us/r1000/015/Music6/v4/48/65/e8/4865e870-cdf5-2a52-000f-7abb2c1190c8/mzaf_2164517038202581690.plus.aac.p.m4a",
      // album_art: "http://is1.mzstatic.com/image/thumb/Music/v4/72/68/10/72681092-1482-3c1c-eb43-023509c4c3a3/source/100x100bb.jpg",
      // artist: "Beat Les",
      // genre: "Electronic",
      // created_at: "2015-12-16T19:32:10.910Z",
      // updated_at: "2015-12-16T19:32:10.910Z"
      // },
      // {
      // id: 50,
      // title: "Derezzed",
      // audio_url: "http://a905.phobos.apple.com/us/r1000/108/Music/0a/86/6f/mzm.hrrrijfe.aac.p.m4a",
      // album_art: "http://is3.mzstatic.com/image/thumb/Music/v4/cb/3f/1d/cb3f1dcb-ac41-e92f-d29a-3642c45ecf14/source/100x100bb.jpg",
      // artist: "Daft Punk",
      // genre: "Soundtrack",
      // created_at: "2015-12-16T19:32:11.706Z",
      // updated_at: "2015-12-16T19:32:11.706Z"
      // },
      // {
      // id: 46,
      // title: "Da Funk",
      // audio_url: "http://a364.phobos.apple.com/us/r1000/051/Music4/v4/12/dd/61/12dd615a-e5b3-1f66-ca78-e96970f894ad/mzaf_3842253962510534687.plus.aac.p.m4a",
      // album_art: "http://is5.mzstatic.com/image/thumb/Music/v4/48/66/83/4866835f-a129-e805-d218-116e04bce84a/source/100x100bb.jpg",
      // artist: "Daft Punk",
      // genre: "Dance",
      // created_at: "2015-12-16T19:32:11.677Z",
      // updated_at: "2015-12-16T19:32:11.677Z"
      // },
      // {
      // id: 43,
      // title: "Da Funk / Dadftendirekt",
      // audio_url: "http://a1339.phobos.apple.com/us/r1000/000/Music6/v4/b0/71/b7/b071b748-da23-2023-aa47-91a0a803a632/mzaf_9106025012001367678.plus.aac.p.m4a",
      // album_art: "http://is5.mzstatic.com/image/thumb/Music/v4/ef/dc/57/efdc5783-063b-63ad-e39b-7f49b708295f/source/100x100bb.jpg",
      // artist: "Daft Punk",
      // genre: "Dance",
      // created_at: "2015-12-16T19:32:11.663Z",
      // updated_at: "2015-12-16T19:32:11.663Z"
      // }];
    }
})();
