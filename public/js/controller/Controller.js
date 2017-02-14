

app.controller("HomeController", function ($scope, $location,$http) {

 var refresh5 = function () {
                            $http.get('/movie/movie').success(function (response) {
                                console.log('movie READ IS SUCCESSFUL');
                                $scope.movieObj = response;

                                $scope.moviess="";


                            });
                        };

                    refresh5();
                    


$scope.headerSrc = "views/index.html";
$scope.movies = movieObj.query();
$scope.currMovie = null;
$scope.getMovieById = function (id) {
var movies = $scope.movies;
for (var i = 0; i < movies.length; i++) {
var movie = $scope.movies[i];
if (movie.id == id) {
$scope.currMovie = movie;
}
}
};
$scope.back = function () {
window.history.back();
};
$scope.getCount = function (n) {
return new Array(n);
}
$scope.isActive = function (route) {
return route === $location.path();
}
$scope.isActivePath = function (route) {
return ($location.path()).indexOf(route) >= 0;
}

app.controller("movieController", function ($scope, $routeParams) {
$scope.getMovieById($routeParams.id);
});
app.controller("confirmController", function ($scope, $http, $location, $routeParams) {
$scope.getMovieById($routeParams.id);
$scope.onlyNumbers = /^\d+$/;
$scope.formData = {};
$scope.formData.movie_id = $scope.currMovie.id;
$scope.formData.movie_name = $scope.currMovie.Title;
$scope.formData.date = "Today"
$scope.processForm = function () {
console.log($scope.formData);
$http({
method: 'POST',
url: 'http://localhost:8000/#/movies',
data: $.param($scope.formData), // pass in data as strings
headers: {
'Content-Type': 'application/x-www-form-urlencoded'
} // set the headers so angular passing info as form data (not request payload)
})
.success(function (data) {
$location.path("/bookings");
});
};
});

});