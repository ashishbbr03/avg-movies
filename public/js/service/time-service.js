
'use strict';
Time.$inject = ['$http'];


function Time($http){
   var _this = this;
    _this.getTime = function () {

         return $http({
            method: 'GET',
            url: '/time/gettime',
        })
        .then(function(response) {
            console.log(response);
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.addTime = function (data) {
        //console.log($scope.time);
         return $http({
            method: 'POST',
            url: '/time/addTime',
            data: data,

        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

    _this.deleteTime = function (timeID) {
        //console.log($scope.time);
          return $http.delete('/time/deleteTime/'+timeID)

        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

     _this.editTime = function (timeID) {
        //console.log($scope.time);
          return $http({
            method: 'GET',
            url: '/time/getTime/'+timeID,
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.updateTime = function (time) {
        console.log(time);
          return $http({
            method: 'PUT',
            url: '/time/updateTime/'+time._id,
            data: time
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };
}
module.exports = Time;
