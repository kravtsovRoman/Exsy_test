$(document).ready(function(){

	//Anchors
    $("#anhcors").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //Slider 
    $('.slider').slick({
		speed: 500,
		fade: true,
	});
});

//Google maps API
function initMap() {
	
	var hanino = {lat: 54.206996, lng: 36.620595};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12.8,
	  center: hanino,
	  disableDefaultUI: true
	});

	var image = './img/marker.png';
	var marker = new google.maps.Marker({
	  position: hanino,
	  map: map,
	  icon: image,
	  animation: google.maps.Animation.DROP,
	  title: 'поселок Ханино'
	});
}