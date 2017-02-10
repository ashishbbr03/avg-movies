'use strict';

module.exports = function($scope,$route,$rootScope,$http,$location) {
  $scope.movieRw = $rootScope.moviereview;


  $scope.ratecount=0;
 var mname;
 $rootScope.s=$scope.movieRw.Title;

  //                          $('#avg').click(function() {
  //        $('#tr1').toggle('show');
  // });



  $(function () {

     var numMin =  '55';
     var numMax = '555';

     var adjustedHigh = (parseFloat(numMax) - parseFloat(numMin)) + 1;


     var numRand = Math.floor(Math.random() * adjustedHigh) + parseFloat(numMin);


     if ((IsNumeric(numMin)  && (IsNumeric(numMax)) && (parseFloat(numMin) <= parseFloat(numMax )) && (numMin != '') && (numMax != ''))) {
         $("#randomnumber").val('R'+numRand);
     }
});

function IsNumeric(n){
    return !isNaN(n);
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

  var refresh5 = function () {
                              $http.get('/movie/movie').success(function (response) {
                                  console.log('READ IS SUCCESSFUL');
                                  $scope.movieObj = response;
                                  $scope.moviess = "";
                              });
                          };

                    refresh5();

                      (function(){

                          var getMovieInfo = function($http){

                            var getshowinfo = function(showinfo){
                                  return $http.get('/movieinfo/movieinfo')
                                              .then(function(response){
                                                 return response.data;
                                              });
                            };

                            return {
                                get: getshowinfo
                            };

                          };

                          var module = angular.module('movieApp');
                          module.factory('getMovieInfo', getMovieInfo);

                      }());

var reviewrefresh = function () {
                            $http.get('/cmt/cmt').success(function (response) {
                                console.log('READ IS SUCCESSFUL');
                                $scope.reviewObj = response;
                                $scope.reviewmovie = "";
                            });
                        };

                    reviewrefresh();
                    var rating = function() {
                            $http.get('/avg/avg').success(function (response) {
                                console.log('Rating IS SUCCESSFUL');
                                $scope.rateObj = response;
                                $scope.robj = "";
                              });
                        };

                    rating();


  // var init=function()
  // {
  //   $http.get('/reviewapi/readreview').success(function(response)
  // {
  //   $scope.reviewData=response;
  //   console.log($scope.reviewData);
  // });
  // };

  // init();




//
//                     $scope.Back=function(){
// $scope.rateObj.movieName=$scope.movieRw.Title;
// $scope.rateObj.avgrating=$scope.ratecount;
//
// $http.post('/avg/avg',$scope.rateObj).success(function (response) {
//                                 console.log(response);
//                                 console.log("AVG RATING IS POST SUCCESSFUL");
//                                  rating();
//
// });
// };
// $scope.robj.t=$scope.reviewmovie.MovieTitle;
//   $scope.robj.r=$scope.ratecount;
//       $http.post('/ar/ar',$scope.robj).success(function (response) {
//                                   console.log(response);
//                                   console.log("AVG RATING IS POST SUCCESSFUL");
//                                   rating();
//                                 });

//                     };
  // $scope.addReview = function () {
  // $scope.reviewmovie.MovieTitle= $scope.movieRw.Title;
  // $http.post('/cmt/cmt',$scope.reviewmovie).success(function (response) {
  //                                 console.log(response);
  //                                 mname=$scope.reviewmovie.MovieTitle;
  //                                 console.log("REV  IS ADDED  SUCCESSFUL");
  // $http.get('/cmt/cmt').success(function (response) {
  //                                      console.log(response);
  //
  //
  //    var count=0;
  //    var i;
  //    try
  //   {
  //       for(i=0;i<=response.length;i++)
  //       {
  //         if(response[i].MovieTitle== mname)
  //         {
  //         count+=parseInt(response[i].ratingvalue);
  //       }
  //
  //       }
  //
  //     }
  //    catch(e){}
  //
  //     if(count>0)
  //     {
  //       $scope.ratecount=Math.round(count*100/(i*5));
  //
  //     }
  //
  //
  //    //alert("Thanks For Review This Movie");
  //   //   $location.path('/home');
  // //document.getElementById("rate").innerHTML=$scope.ratecount;
  // });
  //   });
  //
  //                         };

//  $scope.addavg = function () {
//    var j;
//    var k=0;
//    var len;
// var avg=[];

//        try
//       {
//           for(j=0;j<=$scope.rateObj.length;j++)
//           {
//           len=$scope.rateObj.length;
//           if($scope.rateObj.length==0)
//           {
//             $scope.robj.movieName = $scope.movieRw.Title;
//               $scope.avg = $scope.ratecount;

//             // $http.post('/avg/avg',$scope.robj).success(function (response) {
//             //                                 console.log(response);
//             //                               });
//           }
//           else if($scope.rateObj.length > 0)
//           {
//           if(scope.rateObj[j].movieName== $scope.movieRw.Title)
//           {
//             avg=scope.rateObj[j].avgrating;
//             var sum = 0;
//     for( var i = 0; i < avg.length; i++ ){
//     sum += parseInt( avg[i] ); //don't forget to add the base
//     }

//     var a = sum/avg.length;
//     $scope.avg=a;
//           }
//         }

//       }

//   //             k+=parseInt(scope.rateObj[j].avgrating);
//   // console.log(k);
//   // var cnt=$scope.ratecount;
//   //       $scope.avg= (k+cnt)/(len+1);
//   //       console.log($scope.avg);



//     }

//         catch(e){}
//         $scope.robj.movieName = $scope.movieRw.Title;
//           $scope.robj.avgrating = $scope.avg;
//   $http.post('/avg/avg',$scope.robj).success(function (response) {
//                                             console.log(response);
//                                           });
//  };


                          $("#modal").click(function(){
                            $scope.reviewmovie.MovieTitle= $scope.movieRw.Title;
                            $http.post('/cmt/cmt',$scope.reviewmovie).success(function (response) {
                                                            console.log(response);
                                                            mname=$scope.reviewmovie.MovieTitle;
                                                            console.log("REVIEW  IS ADDED  SUCCESSFUL");
                            $http.get('/cmt/cmt').success(function (response) {
                                                                 console.log(response);


                               var count=0;
                               var i;
                               try
                              {
                                  for(i=0;i<=response.length;i++)
                                  {
                                    if(response[i].MovieTitle== mname)
                                    {
                                    count+=parseInt(response[i].ratingvalue);
                                  }

                                  }

                                }
                               catch(e){}

                                if(count>0)
                                {
                                  $scope.ratecount=Math.round(count*100/(i*5));

                                }


                               //alert("Thanks For Review This Movie");
                              //   $location.path('/home');
                            //document.getElementById("rate").innerHTML=$scope.ratecount;
                            });
                              });
                                 $("#myModal").modal();

                             });


                          $scope.addavg = function () {
                            console.log("REACHED UPDATE");
                            var i;
                            for(i=0;i<=$scope.movieObj.length;i++)
                                  {
                                    if($scope.movieObj[i].Title== $scope.movieRw.Title){
                    console.log($scope.movieObj[i]._id);

                              $scope.movieObj[i].avg=$scope.ratecount;
                              console.log($scope.movieObj[i]);
                              $http.put('/movie/movie/' + $scope.movieObj[i]._id, $scope.movieObj[i]).success(function (response) {
                                  console.log(response);
                                  refresh5();
                                  $location.path('/home');
                              });
                            }

                          }
 
                          };


};
