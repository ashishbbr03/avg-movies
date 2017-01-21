
'use strict';
Assm.$inject = ['$http'];


function Assm($http){
   var _this = this;
    _this.getAssm = function () {

         return $http({
            method: 'GET',
            url: '/assm/getassm',
        })
        .then(function(response) {
            console.log(response);
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.addAssm = function (data) {
        //console.log($scope.assm);
         return $http({
            method: 'POST',
            url: '/assm/addAssm',
            data: data,

        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

    _this.deleteAssm = function (assmID) {
        //console.log($scope.assm);
          return $http.delete('/assm/deleteAssm/'+assmID)

        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

     _this.editAssm = function (assmID) {
        //console.log($scope.assm);
          return $http({
            method: 'GET',
            url: '/assm/getAssm/'+assmID,
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.updateAssm = function (assm) {
        console.log(assm);
          return $http({
            method: 'PUT',
            url: '/assm/updateAssm/'+assm._id,
            data: assm
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };
}
module.exports = Assm;
