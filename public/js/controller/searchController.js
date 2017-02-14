'use strict';

module.exports = function($scope,$route,$rootScope, $http,$location) {
// //
// // //  var refresh5 = function () {
// // //                             $http.get('/movie/movie').success(function (response) {
// // //                                 console.log('READ IS SUCCESSFUL');
// // //                                 $scope.movieObj = response;
// //
// // //                                 $scope.moviess="";
// //
// //
// // //                             });
// // //                         };
// //
// // //                     refresh5();
// //
// // //                    $scope.addmore = function(){
// //
// // //                   $scope.limit += limit1;
// //
// // //                   }
// // //                    var movieObj={};
// // //   $scope.getData = function(){
// // //     console.log('Hi Welcome');
// // //      $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.Title+'&y='+$scope.movieObj.Year+'&plot=short&r=json').success(function (response){
// // //           console.log(response);
// // //    for(var key in response)
// // //    {
// // //     if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')
// // //         {
// // //         movieObj[key] = response[key];
// // //         }
// //
// // //       console.log(movieObj);
// //
// // //         }
// // //              refresh5();
// // //     });
// // //   }
// //
// //
// //
// //
// //
// // //         // Init layout
// // //         $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
// // //         $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
// //
// // //         // Set reserved and selected
// // //         var reserved = ['A2', 'A3', 'C5', 'C6', 'C7', 'C8', 'J1', 'J2', 'J3', 'J4'];
// // //         var selected = [];
// //
// // //         // seat onClick
// // //         $scope.seatClicked = function(seatPos) {
// // //             //console.log("Selected Seat: " + seatPos);
// // //             var index = selected.indexOf(seatPos);
// // //             if(index != -1) {
// // //                 // seat already selected, remove
// // //                 selected.splice(index, 1)
// // //             } else {
// // //                 // new seat, push
// // //                 selected.push(seatPos);
// // //             }
// // //              //console.log(selected.length);
// // //              var noofSeats=selected.length;
// // //              document.getElementById("cnt").innerHTML = noofSeats;
// // //             var total=noofSeats*200;
// // //              document.getElementById("amt").innerHTML = total;
// //
// // //         }
// //
// // //         // get seat status
// // //         $scope.getStatus = function(seatPos) {
// // //             if(reserved.indexOf(seatPos) > -1) {
// // //                 return 'reserved';
// // //             } else if(selected.indexOf(seatPos) > -1) {
// // //                 return 'selected';
// // //             }
// // //         }
// //
// // //         // clear selected
// // //         $scope.clearSelected = function() {
// // //             selected = [];
// // //         }
// //
// // //         $scope.showSelected = function() {
// // //         // var noofSeats = selected.length;
// // //         // document.getElementById("cnt").innerHTML = noofSeats;
// //
// //
// // //         }
// //
// // //         // show selected
// // //         //$scope.showSelected = function() {
// // //         //     if(selected.length > 0) {
// // //         //         alert("Selected Seats: \n" + selected);
// // //         //     } else {
// // //         //         alert("No seats selected!");
// // //         //     }
// // //         // }
// //
// //
// // //     (function(){
// //
// // //       var userSelector = function($http){
// //
// // //         var getUsers = function(username){
// // //               return $http.get('/movie/movie')
// // //                           .then(function(response){
// // //                              return response.data;
// // //                           });
// // //         };
// //
// // //         return {
// // //             get: getUsers
// // //         };
// //
// // //       };
// //
// // //       var module = angular.module('movieApp');
// // //       module.factory('userSelector', userSelector);
// //
// // //   }());
// //
// // // };
// // module.exports = function($scope, $http, $rootScope,$location ){
// //   var bookingShow=function(){
// //   var data=$rootScope.Moviename;
// //   $http.get('/mt_map/selmoviename/'+data).success(function(response){
// //     $scope.booking=response;
// // // $rootScope.allData=$scope.booking;
// // // console.log($rootScope.allData);
// //
// //   });
// //   $http.get('/theater/showtheater').success(function (response) {
// //     $scope.theaterShow=response;
// //     console.log($scope.theaterShow);
// //   });
// //
// //   $http.get('/mt_map/getMappingData').success(function (response) {
// //     $scope.mappingData=response;
// //   });
// //
// //
// //
// // };
// // bookingShow();
// //
// // $scope.showTimings=function (a,x) {
// //   $rootScope.showTime=a;
// //   $rootScope.CinemaName=x.Cinema;
// //   $rootScope.city=x.City;
// //   $rootScope.rootDate=x.ShowDate;
// //   console.log($rootScope.city);
// //   $location.path('/seatSelect');
// // };
// //
// // $scope.movDates=[];
// // var showDates=function() {
// // for(i=0;i<6;i++)
// // {
// //   var date=new Date();
// //   date.setDate(date.getDate()+i);
// //   $scope.movDates[i]=date;
// //   // $scope.movDates[i].toString();
// // }
// // };
// // showDates();
// //
// //
// // };
// module.exports = function($scope,$route,$rootScope,$http,$location){



// var rating = function() {
//                             $http.get('/ar/ar').success(function (response) {
//                                 console.log('Rating IS SUCCESSFUL');
//                                 $scope.rateObj = response;
//                                 $scope.robj="";


//                             });
//                         };
// rating();
//                     $scope.add = function () {
//                       // var a1=document.getElementById('one').value;
//                       // var a=document.getElementById('two').value;
//                       // robj.t=a1;
//                       //  robj.r=a;

//                               //console.log($scope.robj);
//                               $scope.s1=$rootScope.s;
// $scope.s2= $rootScope.ar;
//                               console.log("started")
//                               $http.post('/ar/ar'+s1+'/'+s2).success(function (response) {
//                                   console.log(response);
//                                   console.log("rated IS SUCCESSFUL");
//                                   rating();
//                               });
//                           };





// /*
//   $(document).ready(function(){
//   $(".floating-box").click(function(){
//    $(this).toggleClass("d1");
//    var arr=[];
//    i=0;
//    sum=0;
//   gold=0;
//   silver=0;

//    $(".d1").each(function(){
//   arr.push($(this).attr('id'));
//   i++;

//   if($(this).attr('id')=="E1")
//   {
//     gold++;
//   }
//   else{
//     silver=i*100;
//   }
//    });

//   sum+=silver+(gold*200);
//   $('#amt').html(sum);
//   $('#totalst').html(i);
//   document.getElementById("st").innerHTML=arr;
//   sum=0;
//   /*
//   if($(this).hasClass("d1"))
//   {
//   arr[i]=this.id;
//   i++;
//   document.getElementById("st").innerHTML=arr;
//   }
//   else {
//   alert(this.id);
//   }
//   */
//   // });
//   //
//   // });

// var s_seat,no_of_seat;
//   var seatOnload = function(){
//   $(document).ready(function(){
//    $('#Seatclass').change(function(){
//       var sel=$('#Seatclass').find(":selected").text();
//       if(sel=="GOLD")
//       {

//       $('#silver tr>td>div').addClass('grey');
//       $('#gold tr>td>div').removeClass('grey');

//       }

//       if(sel=="SILVER")
//       {
//         $('#gold tr>td>div').addClass('grey');
//         $('#silver tr>td>div').removeClass('grey');
//       }

//     $('#noofseats').change(function(){
//       var no = $('#noofseats').find(":selected").text();
//       no_of_seat=document.getElementById("totalst").innerHTML= no;
//       //alert(no);
//       var countdiv=[];


//     $('.floating-box').click(function(){

//     if(!$(this).hasClass('grey')||$(this).hasClass('red'))
//     {
//   //alert($(this).hasClass('grey'));
//       if(countdiv.length < no)
//       {

//         $(this).toggleClass("d1");
//         var id=$(this).attr('id');
//         var cn=$(this).hasClass('d1');

//         if(cn)
//             {

//                 countdiv.push(id);
//                   $rootScope.TotalSeat=JSON.stringify(countdiv);
//               s_seat= document.getElementById("st").innerHTML=countdiv;
//               document.getElementById("amt").innerHTML=countdiv.length*200;
//               }

//         else{
//               var ind=countdiv.indexOf(id);
//               countdiv.splice(ind,1);
//               $rootScope.TotalSeat=JSON.stringify(countdiv);
//               document.getElementById("amt").innerHTML=countdiv.length*200;
//             }
//   // if(sel== "SILVER")
//   // {
//   //   document.getElementById("amt").innerHTML=countdiv.length*200;
//   // }
//   // else
//   // {
//   //   document.getElementById("amt").innerHTML=countdiv.length*280;
//   // }

//   }
//   else {
//           alert("Request you to  book only " + no +" seats");
//     }
//   }
//   });


//   });
//   //});

//   });
// };
// seatOnload();


// $scope.nextPage=function(){
// $rootScope.Amount=document.getElementById("amt").innerHTML;
// $rootScope.TotalSeat1= s_seat;
// $rootScope.coutSeat=no_of_seat;

// var s_no=parseInt(document.getElementById("totalst").innerHTML);
// var count=0;
// $(".d1").each(function(){
//   count++;
// });
// if(count==s_no)
// {
//   $location.path('/home');
// }

// else{
//   alert('ERROR : please select '+s_no+' seats');
// }

// };






// // var init=function()
// // {
// //   var m=$rootScope.Moviename;
// //   var t=$rootScope.CinemaName;
// //   var s=$rootScope.showTime;
// //   var d=$rootScope.rootDate;
// //
// //   $http.get('/pay/bookedseats/'+m+'/'+t+'/'+s).success(function (response) {
// //     for(i=0;i<response.length;i++)
// //     {
// //       for(j=0;j<response[i].SeatNo.length;j++)
// //       {
// //           $('#'+response[i].SeatNo[j]).addClass('red');
// //       }
// //     }
// //   });
// // };
// //
// // init();

// };

//
// var mapping = function () {
//                         $http.get('/st/st').success(function (response) {
//                             console.log('READ IS SUCCESSFUL');
//                             $scope.stObj = response;
                            // try
    // {
    //     for(i=0;i<=response.length;i++)
    //     {
    //       if(response[i].Title==Mirzya )
    //       {
    //       //count+=parseInt(response[i].ratingvalue);
    //       console.log(response[i].availableseats);
    //     }

    //     }

    //   }
    //   catch(e){}
    //$scope.as=$scope.stObj.availableseats;
    //console.log($scope.as);
                           // $scope.st = "";
                       // });
                //    };

          //       mapping();
          //
          //       var seat = function (){
          //
          //         $http.post('/st/st',  $scope.stObj).success(function (response) {
          //       console.log(response);
          //     });
          //   };
          };
