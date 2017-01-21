
'use strict';
City.$inject = ['$http'];


function City($http){
   var _this = this;
    _this.getCity = function () {

         return $http({
            method: 'GET',
            url: '/city/getcity',
        })
        .then(function(response) {
            console.log(response);
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.addCity = function (data) {
        //console.log($scope.city);
         return $http({
            method: 'POST',
            url: '/city/addCity',
            data: data,

        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

    _this.deleteCity = function (cityID) {
        //console.log($scope.city);
          return $http.delete('/city/deleteCity/'+cityID)

        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

     _this.editCity = function (cityID) {
        //console.log($scope.city);
          return $http({
            method: 'GET',
            url: '/city/getCity/'+cityID,
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.updateCity = function (city) {
        console.log(city);
          return $http({
            method: 'PUT',
            url: '/city/updateCity/'+city._id,
            data: city
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };
}
module.exports = City;
