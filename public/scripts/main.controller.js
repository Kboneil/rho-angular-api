angular.module('starWarsApp')
       .controller('MainController', MainController);

function MainController(swapi) {
  //var swapi = New StarWarsAPIService();
  var main = this;
  console.log('MainController loaded');

  main.films = [];
  main.lines = [];
  main.title;
  main.episode;
  main.show = '';
  main.crawl = '';
  main.paragraphs = '';

  swapi.getFilms().then(function (films) {
    main.films = films;
  });

  main.getFilmData = function () {
    document.getElementById('makeChoice').style.display = 'none';
    document.getElementById('introWords').style.display = 'none';
    main.lines = [];
    main.song = 'vendor/theme.m4a';
    main.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png';
    main.show = 'move';
    main.crawl = 'crawl';
    main.paragraphs = 'paragraphs';
    setTimeout(function () {
      console.log('hidden');
      document.getElementById('show').style.display = 'none';
    }, 9850);

    swapi.getFilmData(main.selected).then(function (film) {
      main.lines = film.opening_crawl.split('\r\n\r\n');
      main.episode = 'Episode: ' + film.episode_id;
      main.title = film.title;
      console.log(film.opening_crawl);
    });

    setTimeout(function () {
      document.getElementById('makeChoice').style.display = '';
      document.getElementById('introWords').style.display = '';
    }, 60000);

  };
}
