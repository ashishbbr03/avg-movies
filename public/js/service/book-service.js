
'use strict';
Book.$inject = ['$http'];


function Book($http){
   var _this = this;
    _this.getBook = function () {

         return $http({
            method: 'GET',
            url: '/book/getbook',
        })
        .then(function(response) {
            console.log(response);
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.addBook = function (data) {
        //console.log($scope.book);
         return $http({
            method: 'POST',
            url: '/book/addBook',
            data: data,

        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

    _this.deleteBook = function (bookID) {
        //console.log($scope.book);
          return $http.delete('/book/deleteBook/'+bookID)

        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

     _this.editBook = function (bookID) {
        //console.log($scope.book);
          return $http({
            method: 'GET',
            url: '/book/getBook/'+bookID,
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.updateBook = function (book) {
        console.log(book);
          return $http({
            method: 'PUT',
            url: '/book/updateBook/'+book._id,
            data: book
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };
}
module.exports = Book;
