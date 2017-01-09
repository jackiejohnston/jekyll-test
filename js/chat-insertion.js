insertionQ(".LPMlabel").every(function(element){
  $(".LPMcontainer").removeAttr("style");
  $(".LPMlabel").removeAttr("style");
  $(".LPMlabel").text("");
  var chat_markup = "<i class='icon-chat icon-primary-circle-lg m-r-1'></i><span class='icon-lg-text'>Chat with Us</span>"
  $("#product-page-chat2 .LPMcontainer").html(chat_markup);
  $("#product-page-chat .LPMcontainer").html(chat_markup);
});