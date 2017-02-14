// 'use strict';
// //
// // module.exports = function(){
// // function login(username, password, $q) {
// //  var movieTitle;
// //
// //         return {
// //             getProperty: function () {
// //                 return movieTitle ;
// //             },
// //             setProperty: function(value) {
// //                 movieTitle= value;
// //             }
// //         };
// //     };

// function Booking(Title,$q) {
//         // create a new instance of deferred
//       var deferred = $q.defer();
//       // send a post request to the server
//       $http.post('/user/booking',
//         {Title:Title})
//         // handle success
//         .success(function (data, status) {
//           if(status === 200 && data.status){
//             user = true;
//             deferred.resolve();
//           } else {
//             user = false;
//             deferred.reject();
//           }
//         })

//         var movieTitle;
//            return {
//                     getProperty: function () {
//                         return movieTitle ;
//                     },
//                     setProperty: function(value) {
//                         movieTitle= value;
//                     }
//                 };
//         // handle error
//         .error(function (data) {
//           user = false;
//           deferred.reject();
//         });

//       // return promise object
//       return deferred.promise;

//     }
