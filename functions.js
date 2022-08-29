$( function() {
    $( "#resources" ).draggable();
  } );

  $( function() {
      $( ".project1-brief" ).draggable();
    } );

  $(".resources").hide();
  $("#R").click(function(){
    $(".resources").show();
  });

  $("#X").click(function(){
    $(".resources").hide();
  });

  $("#X-1").click(function(){
    $(".project1-brief").hide();
  });

  $(".wks-info").hide();
  $(".wks").hover(function(){
    $(".wks-info").show();
  });

  $(".wks").mouseout(function(){
    $(".wks-info").hide();
  });

  $(".project1-brief").hide();
  $(".project-text").hover(function(){
    $(".project1-brief").show();
  });
  // $(".project-text").mouseout(function(){
  //   $(".project1-brief").hide();
  //     });
