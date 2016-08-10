app.controller('MainController', ['$scope', function($scope) {
  $scope.marco = { 
    series: "Marco Polo", 
    series_img: "http://static.srcdn.com/wp-content/uploads/Marco-Polo-Season-2-Finale-Marco.jpg", 
    genre: "Adventure, Drama, History",
    author: "John Fusco",
    seasons: 6, 
    episode: "The Fellowship", 
    description: "The day of the kurultai arrives, shaping Kublai's fate as khan. Ahmed makes his final stand, and Marco learns a terrible truth.", 
    datetime: new Date(2016, 3, 17, 20, 00, 00, 00)  };
  $scope.got = {
    series: 'Game of Thrones',
    series_img: 'http://vignette3.wikia.nocookie.net/gameofthrones/images/d/d9/Battle_of_the_Bastards_32.jpg/revision/latest/scale-to-width-down/1000?cb=20160620165344',
    genre: 'Fantasy, Adventure, Drama',
    author: "George R.R. Martin",
    season: 6,
    episode: "Battle of the Bastards",
    description: "Battle of the Bastards is the ninth episode of the sixth season of Game of Thrones. It is the fifty-ninth episode of the series overall. It premiered on June 19, 2016. It was written by David Benioff & D.B. Weiss and directed by Miguel Sapochnik.",
    datetime: new Date(2011, 5, 19, 21, 00, 00, 00)
  };
}]);