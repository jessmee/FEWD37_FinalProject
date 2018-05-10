//When user clicks on navigation tab, user will be directed to the correct link on page. 
//When user clicks on Read More, more information shows up using the slide down event handler. DONE
//When user clicks on Read Less, extra informtion is hidden using the slide up event handler.  DONE
//When user clciks on Back to Top, the user is taken to the top of the page.DONE
//When user clcks on photo, more information about the picture shows to the right.
//form animation. when user clicks on form, the labels slide down.


//Under Participating Schools, there should be an interactive map. When user clicks on the state,  the name of the school should pop up.
//HAMBURGERWhen the viewport gets smaller, the navigation tabs turn into a hamburger with a dropdown/slide in menu.
//As viewport gets smaller, the tab for cornell prison should appear below.


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

function removeLabelFirstname(event) {
  event.preventDefault();
  $('.floatingFirstname').addClass('floatDown');  
}

function removeLabelLastname(event) {
  event.preventDefault();
  $('.floatingLastname').addClass('floatDown');  
}

function removeLabelEmail(event) {
  event.preventDefault();
  $('.floatingEmail').addClass('floatDown');  
}

function initMap(){
  //Map options
  var options = {
    zoom: 5,
    center:{lat:36.5, lng:-97.35}
  }

  //New Map
  var map = new
  google.maps.Map(document.getElementById('schoolMap'), options);

  
  //Add Marker
  var marker = new google.maps.Marker({
    position:{lat:29.4238, lng:-95.24},
    map: map
  });
  
  var marker = new google.maps.Marker({   
    position:{lat:38.96, lng:-76.54},
    map: map
  });
}

$('.readmore').click(readMore);
$('.readless').click(readLess);
$('#schools').click(scrollSchools);
$('#top').click(toTheTop)
$('#history').click(scrollHistory);
$('#action').click(scrollAction);
$('.cornellPrison').click(readMoreAboutCornell);
$('#firstname').click(removeLabelFirstname);
$('#lastname').click(removeLabelLastname);
$('#email').click(removeLabelEmail);