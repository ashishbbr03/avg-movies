
'use strict';

module.exports = function($scope, $http, BookCRUDService) {
  $scope.admin = 'admin';

  var collections = ['city', 'thtr', 'time' , 'movie' ,'assm' ,'book'];



var dataRefresh = function (collections) {
        collections.forEach(function(collection){
                                var promise =  BookCRUDService.getData(collection);
                                    promise.then(function(data){
                                        $scope[`${collection}List`] = data;
                                        $scope[collection] = "";
                                    })
                             });
    };

    dataRefresh(collections);


$scope.addData = function(model){
    var serviceName = (Object.keys(model)[0]).substring(0,4);
	var promise =  BookCRUDService.addData(model, serviceName);
    promise.then(function(data){
        dataRefresh([serviceName]);
    })

}

$scope.deleteData= function(model){
    var serviceName = (Object.keys(model)[1]).substring(0,4);
    var promise =  BookCRUDService.deleteData(model, serviceName);
    promise.then(function(data){
      dataRefresh([serviceName]);
    })
}

$scope.editData = function(model){
    var serviceName = (Object.keys(model)[1]).substring(0,4);
    var promise =  BookCRUDService.editData(model, serviceName);
    promise.then(function(data){
        $scope[serviceName] = data[0];
    })
}

$scope.updateData = function(model){
    var serviceName = (Object.keys(model)[1]).substring(0,4);
    var promise =  BookCRUDService.updateData(model, serviceName);
    promise.then(function(data){
        dataRefresh([serviceName]);
    })
}

$scope.loadTheatres = function(){
  $scope.cityTheatre = [];
  for(var theatre of $scope.thtrList){
    if(thtr.cityName == $scope.assm.cityName){
      $scope.cityTheatre.push(theatre)
    }
  }
}

$( function() {
  $( "#datepicker" ).multiDatesPicker({
  dateFormat: "dd-mm-yy"
});
} );

 $(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});


    // Init layout
    $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Set reserved and selected
    var reserved = ['A2', 'A3', 'C5', 'C6', 'C7', 'C8', 'J1', 'J2', 'J3', 'J4'];
    var selected = [];

    // seat onClick
    $scope.seatClicked = function(seatPos) {
        console.log("Selected Seat: " + seatPos);
        var index = selected.indexOf(seatPos);
        if(index != -1) {
            // seat already selected, remove
            selected.splice(index, 1)
        } else {
            // new seat, push
            selected.push(seatPos);
        }
    }

    // get seat status
    $scope.getStatus = function(seatPos) {
        if(reserved.indexOf(seatPos) > -1) {
            return 'reserved';
        } else if(selected.indexOf(seatPos) > -1) {
            return 'selected';
        }
    }

    // clear selected
    $scope.clearSelected = function() {
        selected = [];
    }

    // show selected
    $scope.showSelected = function() {
        if(selected.length > 0) {
            alert("Selected Seats: \n" + selected);
        } else {
            alert("No seats selected!");
        }
    }
    $scope.viewdetails = function(){
      $scope.myseating.amount = selected.length*300*115/100+150;
    }

    $scope.addSeat = function () {
        console.log($scope.myseating);
        $scope.myseating.seatNo = selected;
        $scope.myseating.amount = selected.length*300*115/100+150;
        $scope.myseating.seatID = $scope.myseatinglist.length;
        $http.post('/book/book', $scope.myseating).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
            viewdetails();
        });
    };

    // $scope.loadTheatres = function(){
    //   $scope.bookTheatre = [];
    //   for(var movie of $scope.moviList){
    //     if(time.moviTitle == $scope.book.cityName){
    //       $scope.bookTheatre.push(theatre)
    //     }
    //   }
    // }

$scope.seatselection = 'seatselection';




};
