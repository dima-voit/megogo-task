$(function() {
  $.scrollify({
    section : ".section",
  });

  $('.scroll img').click(function(){
    $.scrollify.next();
  });
});