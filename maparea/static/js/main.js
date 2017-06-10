(function($) {
        'use strict';

    /*********** preloader ************/
$(window).load(function() {
						$(".preloader").delay(400).fadeOut(500);
						});
     /*********** preloader Ends ************/
/*********** Navigation ************/
$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });

    $(window).bind('scroll',function(e){
      dotnavigation();
    });

    function dotnavigation(){

        var numSections = $('section').length;

        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');
        $('section').each(function(i,item){
          var ele = $(item), nextTop;

          //console.log(ele.next().html());

          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }

          //if (ele.offset() !== null) {
          //  thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
        //  }
        //  else {
        //    thisTop = 0;
        //  }

          var docTop = $(document).scrollTop();

        //  if(docTop >= thisTop && (docTop < nextTop)){
        //    $('#dot-nav li').eq(i).addClass('active');
        //  }
        });
    }

    /* get clicks working */
    $('#dot-nav li').click(function(){

        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;

        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;

        $('html, body').animate({scrollTop:posi}, 'slow');

        return false;
    });

/* end dot nav */
});
    /*********** Navigation Ends ************/
    /*********** CountDown ************/

    $('.countdown').downCount({
						date: '01/24/2016 12:00:00' // m/d/y
						});


/*********** Navigation Ends ************/
/*********** Twitter Feeds ***********
$('.twitter-feed').twittie({
              username: 'your twiiter username',
						  dateFormate: '%d %B %Y',
						  template: '{{tweet}} <div class="date">{{date}}</div>',
						  count: 2,
						  apiPath: 'js/api/tweet.php'
						});
		/*********** Twitter Feeds Ends ************/
/*********** google map ************/
function initialize() {
						      var location = new google.maps.LatLng(26.8542419, 75.8177054);
						      var mapOptions = {
						              center: location,
						              scrollwheel: false,
						              zoom: 14,
						              /* colorize different sections of map */
						              styles: [{
						                      featureType: 'water',
						                      stylers: [{
						                              color: '#58B325'
						                      }, {
						                              visibility: 'on'
						                      }]
						              }, {
						                      featureType: 'landscape',
						                      stylers: [{
						                              color: '#f2f2f2'
						                      }]
						              }, {
						                      featureType: 'road',
						                      stylers: [{
						                              saturation: -90
						                      }, {
						                              lightness: 15
						                      }]
						              }, {
						                      featureType: 'road.highway',
						                      stylers: [{
						                              visibility: 'simplified'
						                      }]
						              }, {
						                      featureType: 'road.arterial',
						                      elementType: 'labels.icon',
						                      stylers: [{
						                              visibility: 'off'
						                      }]
						              }, {
						                      featureType: 'administrative',
						                      elementType: 'labels.text.fill',
						                      stylers: [{
						                              color: '#444444'
						                      }]
						              }, {
						                      featureType: 'transit',
						                      stylers: [{
						                              visibility: 'off'
						                      }]
						              }, {
						                      featureType: 'poi',
						                      stylers: [{
						                              visibility: 'off'
						                      }]
						              }]

						      };
						      var mapElement = document.getElementById('map-canvas');
						      var map = new google.maps.Map(mapElement, mapOptions);

						      <!-- panorama street view code -->
						      var panoramaOptions = {
						              position: location,
						              pov: {
						                      heading: 34,
						                      pitch: 10
						              }
						      };
						}

						//google.maps.event.addDomListener(window, 'load', initialize);
/*********** google map Ends ************/
    })(jQuery);
