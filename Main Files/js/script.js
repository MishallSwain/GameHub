$(() => {
  $(".describe").height($(window).width() > 992?$(".slide").height():400);
  $(".images").click(function(){
    $(".headImage").css("background-image", $(this).css("background-image"));
  })
  $(window).resize(() => {
    if($(window).width() > 992){
      var newHeight = $(".slide").height()
      $(".describe").height(newHeight);
    }
    else{
      $(".describe").height(400);
    }
  });
})

$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});