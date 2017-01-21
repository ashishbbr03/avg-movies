'use strict';

var app = require('angular').module('movieApp');

app.service('AdminCRUDService',  require('./admin-crud-service'));
app.service('BookCRUDService',  require('./book-crud-service'));
app.service('TodoService', require('./todos'));
app.service('TheatreService',  require('./theatre-service'));
app.service('AuthService',  require('./auth-service'));
app.service('AssmService',  require('./assm-service'));
app.service('CityService',  require('./city-service'));
app.service('TimeService',  require('./time-service'));
app.service('BookService',  require('./book-service'));
