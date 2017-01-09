$(document).ready(function() {
  
  // Toggle state disclosures open/close icon
  $("#more-less").on('click', function(){
    $("#more-less .fa").toggleClass("fa-plus");
    $("#more-less .fa").toggleClass("fa-minus");
  });

});