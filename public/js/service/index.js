'use strict';

var app = require('angular').module('movieApp');

app.service('MovieList', require('./movie-list-service'));
app.service('TodoService', require('./todos'));
app.service('CityService',  require('./city-service'));
app.service('TheatreService',  require('./theatre-service'));
app.service('AuthService',  require('./auth-service'));
// app.service('shared', function() {
//     var stringValue ={};
//     var objectValue = {
//         data: 'test object value'
//     };
    
//     return {
//         getString: function() {
//             return stringValue;
//         },
//         Booking: function(value) {
//             stringValue = value;
//         },
//         getObject: function() {
//             return objectValue;
//         }
//     }
// });


