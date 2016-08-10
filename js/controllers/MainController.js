app.controller('MainController', ['$scope', function($scope) {
  $scope.marco = { 
    series: "Marco Polo", 
    series_img: "http://static.srcdn.com/wp-content/uploads/Marco-Polo-Season-2-Finale-Marco.jpg", 
    genre: "Adventure, Drama, History",
    author: "John Fusco",
    seasons: 2, 
    episode: "The Fellowship", 
    description: "Marco Polo is een Amerikaanse televisieserie over de jaren van ontdekkingsreiziger Marco Polo aan het hof van Koeblai Khan. De door John Fusco bedachte serie ging op 12 december 2014 in première op Netflix.", 
    datetime: new Date(2014, 11, 12, 20, 00, 00, 00)  };
  $scope.got = {
    series: 'Game of Thrones',
    series_img: 'http://vignette3.wikia.nocookie.net/gameofthrones/images/d/d9/Battle_of_the_Bastards_32.jpg/revision/latest/scale-to-width-down/1000?cb=20160620165344',
    genre: 'Fantasy, Adventure, Drama',
    author: "George R.R. Martin",
    seasons: 6,
    episode: "Battle of the Bastards",
    description: "Game of Thrones is een Amerikaanse fantasy-televisieserie die sinds 17 april 2011 uitgezonden wordt op de televisiezender HBO. De serie is gebaseerd op de boeken uit de serie Het Lied van IJs en Vuur van de Amerikaanse schrijver George R.R. Martin. Het verhaal van Game of Thrones speelt zich af in een mythische wereld, vooral in de Zeven Koninkrijken op het westelijke continent Westeros. Maar ook in het uiterste noorden van Westeros en op het oostelijke continent Essos.",
    datetime: new Date(2011, 3, 17, 21, 00, 00, 00)
  };
}]);