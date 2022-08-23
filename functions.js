$( function() {
    $( "#resources" ).draggable();
  } );

  $(".resources").hide();
  $("#R").hover(function(){
    $(".resources").show();
  });

  $("#X").click(function(){
    $(".resources").hide();
  });

  $(".wks-info").hide();
  $(".wks").hover(function(){
    $(".wks-info").show();
  });

  $(".wks").mouseout(function(){
    $(".wks-info").hide();
  });
