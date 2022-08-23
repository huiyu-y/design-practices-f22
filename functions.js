$( function() {
    $( "#resources" ).draggable();
  } );

  $(".resources").hide();
  $("#R").click(function(){
    $(".resources").show();
  });

  $("#X").click(function(){
    $(".resources").hide();
  });
