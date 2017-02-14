'use strict';

module.exports = function($scope,$route,$rootScope, $http,$location) {
  var s_seat,no_of_seat;
  var seatOnload = function(){
  $(document).ready(function(){
    $('#noofseats').change(function(){
      var no = $('#noofseats').find(":selected").text();
      no_of_seat=document.getElementById("totalst").innerHTML= no;
      //alert(no);
      var countdiv=[];


    $('.floating-box').click(function(){
      if(countdiv.length < no)
    {

      $(this).toggleClass("d1");
      var id=$(this).attr('id');
      var cn=$(this).hasClass('d1');

      if(cn)
          {

              countdiv.push(id);
                $rootScope.TotalSeat=JSON.stringify(countdiv);
            s_seat= document.getElementById("st").innerHTML=countdiv;
            }

      else{
            var ind=countdiv.indexOf(id);
            countdiv.splice(ind,1);
            $rootScope.TotalSeat=JSON.stringify(countdiv);
          }

          document.getElementById("amt").innerHTML=countdiv.length*280;
}


else {
        alert("Request you to  book only " + no +" seats");
  }
//  }
});
 });
});
}

seatOnload();
};
