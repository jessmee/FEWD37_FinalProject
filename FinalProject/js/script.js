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

  /* This is too long!
  //Add Marker
  var marker = new google.maps.Marker({
    position:{lat:29.4238, lng:-95.24},
    map: map
  });

  //Info Window
  var infoWindow = new google.maps.InfoWindow({
    content: '<h2>Alvin Community College</h2>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
}
*/

    addMarker({coords: {lat:29.42, lng:-95.24},
      content: '<h3>Alvin Community College</h3>'
    });
    addMarker({coords: {lat:38.95, lng:-76.55},
      content: '<h3>Anne Arundel Community College</h3>'
    });
    addMarker({coords: {lat:35.84, lng:-90.67},
      content: '<h3>Arkansas State University - Newport</h3>'
    });
    addMarker({coords: {lat:40.86, lng:-82.32},
      content: '<h3>Ashland University</h3>'
    });
    addMarker({coords: {lat:42.00, lng:-72.57},
      content: '<h3>Asnuntuck Community College</h3>'
    });
    addMarker({coords: {lat:32.59, lng:-85.50},
      content: '<h3>Auburn University</h3>'
    });
    addMarker({coords: {lat:42.02, lng:-73.91},
      content: '<h3>Bard College</h3>'
    });
    addMarker({coords: {lat:42.92, lng:-73.24},
      content: '<h3>Bennington College</h3>'
    });
    addMarker({coords: {lat:41.00, lng:-76.45},
      content: '<h3>Bloomsburg University of Pennsylvania</h3>'
    });

//Add Marker Function to make this shorter

function addMarker(props){
  var marker = new google.maps.Marker({
  position: props.coords,
  map:map  
});

//check for content
if(props.content){
  var infoWindow = new google.maps.InfoWindow({
    content: props.content
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });  
}
}
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