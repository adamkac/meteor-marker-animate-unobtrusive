[marker-animate-unobtrusive aka SlidingMarker](https://github.com/terikon/marker-animate-unobtrusive) JQuery plugin packaged for Meteor 1.0



### Instalation ###
	mrt:jquery-easing
	dburles:google-maps
    akaczmarzyk:marker-animate-unobtrusive


### Usage ###
	

    GoogleMaps.loadUtilityLibrary('/packages/adamkaczmarzyk_marker-animate-unobtrusive/marker-animate-unobtrusive/vendor/markerAnimate.js')
    GoogleMaps.loadUtilityLibrary('/packages/adamkaczmarzyk_marker-animate-unobtrusive/marker-animate-unobtrusive/SlidingMarker.js')




    GoogleMaps.ready('map', function(map) {

      // 
      SlidingMarker.initializeGlobally();

    });

### New marker ###

	 var marker = new SlidingMarker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(document.lat, document.lng),
        map: map.instance,
        id: document._id,
        duration: 2000,
        easing: "easeOutExpo"
     });