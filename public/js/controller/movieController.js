'use strict';


module.exports = function($scope, $http,$route,$rootScope,$location) {
  $rootScope.RSeats

    var limit1=4;
    $scope.limit=limit1;
$(function(){
$('.panel').hover(function(){
        $(this).find('.panel-footer').slideDown(250);
    },function(){
        $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)
    });
})



//$scope.review = [];
 var refresh5 = function () {
                            $http.get('/movie/movie').success(function (response) {
                                console.log('movie READ IS SUCCESSFUL');
                                $scope.movieObj = response;
                                console.log($scope.movieObj);

                                $scope.moviess="";


                            });
                        };
  refresh5();
                   $scope.addmore = function(){

                  $scope.limit += limit1;

                  }
                   var movieObj={};
  $scope.getData = function(){
    console.log('Hi Welcome');
     $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.Title+'&y='+$scope.movieObj.Year+'&plot=short&r=json').success(function (response){
          console.log(response);
   for(var key in response)
   {
    if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')
        {
        movieObj[key] = response[key];
        }

      console.log(movieObj);

        }
             refresh5();
    });
  }



  $scope.Booking = function (moviess){

      console.log(moviess);

                                  $rootScope.moviebking=moviess;
                                  $location.path('/booking');
$route.reload();

                          };

  $scope.Review = function (moviess){

      console.log(moviess);

                                  $rootScope.moviereview=moviess;
                                  $location.path('/reviews');
$route.reload();
                          };

//                         


};
