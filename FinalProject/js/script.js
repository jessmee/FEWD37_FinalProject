function readMore(click) { // <-- put event keyword here
  click.preventDefault(); // <-- call event.preventDefault() first
  $('#show-this-on-click').slideDown(900);
  $('.readless').show();
  $('.readmore').hide();
}

function readLess(click) {
  click.preventDefault();
  $('#show-this-on-click').slideUp(500);
  $('.readless').hide();  
  $('.readmore').show();
}

function scrollSchools(click) { //need to go over this syntax
  click.preventDefault();
  $('body, html'). animate({
    scrollTop: $('#map').offset().top
  }, 2000 );  
};

function toTheTop(click) {
  click.preventDefault();
  $('body, html'). animate({
    scrollTop: $('.boxLogo').offset().top
  });
};

$('.readmore').click(readMore);
$('.readless').click(readLess);
$('#schools').click(scrollSchools);
$('#top').click(toTheTop)
