//When user clicks on navigation tab, user will be directed to the correct link on page. 
//When user clicks on Read More, more information shows up using the slide down event handler. DONE
//When user clicks on Read Less, extra informtion is hidden using the slide up event handler.  DONE
//When user clciks on Back to Top, the user is taken to the top of the page.DONE
//When user clcks on photo, more information about the picture shows to the right.

//Maybe a slide with the quotes??
//do javascript around quotes
//Under Participating Schools, there should be an interactive map. When user clicks on the state,  the name of the school should pop up.
//HAMBURGERWhen the viewport gets smaller, the navigation tabs turn into a hamburger with a dropdown menu.




function readMore(click) { 
  click.preventDefault(); 
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

function scrollHistory(click) { //need to go over this syntax
  click.preventDefault();
  $('body, html'). animate({
    scrollTop: $('.pellDescription').offset().top
  }, 2000 );  
};  

function scrollAction(click) {
  click.preventDefault();
  $('body, html'). animate({
    scrollTop: $('.darkGreyBackground').offset().top
  }, 2000 );    
}

function toTheTop(click) {
  click.preventDefault();
  $('body, html'). animate({
    scrollTop: $('.boxLogo').offset().top
  });
};

function readMoreAboutCornell() {
  $('.titleCornell').html('CornellPrison');
  $('.descriptionCornell').html('Here\'s more info about their program');
}

$('.readmore').click(readMore);
$('.readless').click(readLess);
$('#schools').click(scrollSchools);
$('#top').click(toTheTop)
$('#history').click(scrollHistory);
$('#action').click(scrollAction);
$('#cornellPrison').click(readMoreAboutCornell);
