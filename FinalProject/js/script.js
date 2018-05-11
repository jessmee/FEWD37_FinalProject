//When user clicks on navigation tab, user will be directed to the correct link on page. 
//When user clicks on Read More, more information shows up using the slide down event handler. DONE
//When user clicks on Read Less, extra informtion is hidden using the slide up event handler.  DONE
//When user clciks on Back to Top, the user is taken to the top of the page.DONE
//When user clcks on photo, more information about the picture shows to the right.
//form animation. when user clicks on form, the labels slide down.
//Under Participating Schools, there should be an interactive map. When user clicks on the state,  the name of the school should pop up.


//HAMBURGERWhen the viewport gets smaller, the navigation tabs turn into a hamburger with a dropdown/slide in menu.
//form validation, play with forms more
//thank you popupc- call congress! 


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
/*
function readMoreAboutCornell() {
  $('.actualQuote').html('Cornell Prison Program', 1000);
  $('.actualQuote').css('color', '#2a2a2a');
  $('.marcusQuote').html('Here\'s more info about their program.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptatem, sit exercitationem minus vero a asperiores, dignissimos aspernatur ratione eaque nulla neque eum commodi ducimus? Quaerat libero suscipit lab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptatem, sit exercitationem minus vero a asperiores, dignissimos aspernatur ratione eaque nulla neque eum commodi ducimus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat libero suscipit laborum maiores.');
}
*/


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
    zoom: 4.75,
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
    addMarker({coords: {lat:34.65, lng:-86.95},
      content: '<h3>Calhoun Community College</h3>'
    });
    addMarker({coords: {lat:34.07, lng:-118.17},
      content: '<h3>California State University Los Angeles</h3>'
    });    
    addMarker({coords: {lat:32.62, lng:-96.76},
      content: '<h3>Cedar Valley College</h3>'
    });
    addMarker({coords: {lat:46.72, lng:-122.97},
      content: '<h3>Centralia College</h3>'
    });
    addMarker({coords: {lat:34.15, lng:-117.57},
      content: '<h3>Chaffey Community College</h3>'
    });
    addMarker({coords: {lat:44.98, lng:-122.98},
      content: '<h3>Chemeketa Community College</h3>'
    });
    addMarker({coords: {lat:34.94, lng:-100.90},
      content: '<h3>Clarendon College</h3>'
    });
    addMarker({coords: {lat:41.87, lng:-87.62},
      content: '<h3>Columbia College</h3>'
    });
    addMarker({coords: {lat:35.49, lng:-95.32},
      content: '<h3>Connors State College</h3>'
    });
    addMarker({coords: {lat:35.33, lng:-120.74},
      content: '<h3>Cuesta College</h3>'
    });
    addMarker({coords: {lat:40.82, lng:-73.93},
      content: '<h3>CUNY Hostos Community College</h3>'
    });
    addMarker({coords: {lat:40.74, lng:-73.93},
      content: '<h3>CUNY LaGuardia Community College</h3>'
    });
    addMarker({coords: {lat:40.77, lng:-73.99},
      content: '<h3>CUNY John Jay College of Criminal Justice</h3>'
    });
    addMarker({coords: {lat:40.13, lng:-87.59},
      content: '<h3>Danville Community College</h3>'
    });
    addMarker({coords: {lat:43.56, lng:-83.99},
    content: '<h3>Delta College</h3>'
    });
    addMarker({coords: {lat:26.58, lng:-81.75},
      content: '<h3>Florida Gateway College</h3>'
    });
    addMarker({coords: {lat:46.69, lng:-92.45},
      content: '<h3>Fond du Lac Tribal & Community College</h3>'
    });
    addMarker({coords: {lat:38.93, lng:-80.83},
      content: '<h3>Glenville State College College</h3>'
    });
    addMarker({coords: {lat:39.41, lng:-76.60},
      content: '<h3>Goucher College</h3>'
    });
    addMarker({coords: {lat:41.70, lng:-86.24},
      content: '<h3>Holly Cross College</h3>'
    });
    addMarker({coords: {lat:40.61, lng:-79.16},
      content: '<h3>Indiana University of Pennsylvania</h3>'
    });
    addMarker({coords: {lat:32.58, lng:-86.39},
      content: '<h3>Ingram State Technical College</h3>'
    });
    addMarker({coords: {lat:42.50, lng:-94.17},
      content: '<h3>Iowa Central Community College</h3>'
    });
    addMarker({coords: {lat:42.16, lng:-84.41},
      content: '<h3>Jackson College</h3>'
    });
    addMarker({coords: {lat:29.88, lng:-93.93},
      content: '<h3>Lamar State College - Port Author</h3>'
    });
    addMarker({coords: {lat:35.95, lng:-97.26},
      content: '<h3>Langston University</h3>'
    });
    addMarker({coords: {lat:29.73, lng:-94.98},
      content: '<h3>Lee College</h3>'
    });
    addMarker({coords: {lat:40.66, lng:-75.61},
      content: '<h3>Lehigh Carbon Community College</h3>'
    });
    addMarker({coords: {lat:40.77, lng:-73.96},
      content: '<h3>Marymount Manhattan College</h3>'
    });
    addMarker({coords: {lat:40.84, lng:-73.86},
      content: '<h3>Mercy College</h3>'
    });
    addMarker({coords: {lat:41.31, lng:-95.96},
      content: '<h3>Metropolitan Community College</h3>'
    });
    addMarker({coords: {lat:42.53, lng:-71.27},
      content: '<h3>Middlesex Community College</h3>'
    });
    addMarker({coords: {lat:43.04, lng:-87.92},
      content: '<h3>Milwaukee Area Technical College</h3>'
    });
    addMarker({coords: {lat:43.02, lng:-83.67},
      content: '<h3>Mott Community College</h3>'
    });    
    addMarker({coords: {lat:42.59, lng:-71.98},
      content: '<h3>Mount Wachusett Community College</h3>'
    });
    addMarker({coords: {lat:32.73, lng:-96.90},
      content: '<h3>Mountain View College</h3>'
    });
    addMarker({coords: {lat:44.32, lng:-74.12},
      content: '<h3>North Country Community College</h3>'
    });
    addMarker({coords: {lat:41.97, lng:-87.71},
      content: '<h3>North Park University</h3>'
    });
    addMarker({coords: {lat:34.70, lng:-79.94},
      content: '<h3>Northeastern Technical College</h3>'
    });
    addMarker({coords: {lat:40.71, lng:-74.02},
      content: '<h3>Nyack College</h3>'
    });
    addMarker({coords: {lat:45.82, lng:-92.97},
      content: '<h3>Pine Technical and Community College</h3>'
    });
    addMarker({coords: {lat:41.83, lng:-71.89},
      content: '<h3>Quinebaug Valley Community College</h3>'
    });
    addMarker({coords: {lat:37.96, lng:-76.76},
      content: '<h3>Rappahannock Community College</h3>'
    });
    addMarker({coords: {lat:41.88, lng:-87.63},
      content: '<h3>Roosevelt University</h3>'
    });
    addMarker({coords: {lat:40.50, lng:-74.45},
      content: '<h3>Rutgers, the State University of New Jersey and Raritan Valley Community College</h3>'
    });
    addMarker({coords: {lat:47.62, lng:-122.32},
      content: '<h3>Seattle Central Community College</h3>'
    });
    addMarker({coords: {lat:34.75, lng:-92.29},
      content: '<h3>Shorter College</h3>'
    });
    addMarker({coords: {lat:44.17, lng:-94.05},
      content: '<h3>South Central College</h3>'
    });
    addMarker({coords: {lat:29.22, lng:-99.74},
      content: '<h3>Southwest Texas Junior College</h3>'
    });
    addMarker({coords: {lat:32.64, lng:-117.00},
      content: '<h3>Southwestern Community College District</h3>'
    });
    addMarker({coords: {lat:47.25, lng:-122.52},
      content: '<h3>Tacoma Community College</h3>'
    });
    addMarker({coords: {lat:41.51, lng:-72.10},
      content: '<h3>Three Rivers Community College</h3>'
    });
    addMarker({coords: {lat:36.19, lng:-95.94},
      content: '<h3>Tulsa Community College</h3>'
    });
    addMarker({coords: {lat:39.31, lng:-76.62},
      content: '<h3>University of Baltimore</h3>'
    });
    addMarker({coords: {lat:29.58, lng:-95.10},
      content: '<h3>University of Houston - Clear Lake</h3>'
    });
    addMarker({coords: {lat:44.34, lng:-69.80},
      content: '<h3>University of Maine - Augusta</h3>'
    });
    addMarker({coords: {lat:40.04, lng:-75.34},
      content: '<h3>Villanova University</h3>'
    });
    addMarker({coords: {lat:32.54, lng:-94.38},
      content: '<h3>Wiley College</h3>'
    });
    addMarker({coords: {lat:38.37, lng:-75.50},
      content: '<h3>Wor - Wic Community College</h3>'
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






function findSchool(event) {
  event.preventDefault(); 

  var city = $('#school-type').val();
  city = city.toLowerCase();
    
  if (city === 'ca' || city === 'california') {
    $('.schoolAppears').html('ca');
  } else if (city === 'san francisco' || city === 'san fran' || city === 'bay area' || city === 'sf') {
    $('body').removeClass().addClass('sf');           
  } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
    $('body').removeClass().addClass('la');           
  } else if (city === 'austin' || city === 'atx') {
    $('body').removeClass().addClass('austin');
  } else if (city === 'sydney' || city === 'syd') {
    $('body').removeClass().addClass('sydney');      
  } else {
    $('body').removeClass();
    return error(); //using an alert box, but how can I make a popup?
    event.default();
    }  
  }
  
  $('#submit-btn').click(findSchool);






$('.readmore').click(readMore);
$('.readless').click(readLess);
$('#schools').click(scrollSchools);
$('#top').click(toTheTop)
$('#history').click(scrollHistory);
$('#action').click(scrollAction);
//$('.cornellPrison').click(readMoreAboutCornell);
$('#firstname').click(removeLabelFirstname);
$('#lastname').click(removeLabelLastname);
$('#email').click(removeLabelEmail);
