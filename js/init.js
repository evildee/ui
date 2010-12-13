$j = jQuery.noConflict(); //globall no conflict

//fancybox settings
$j(document).ready(function() {
/* This is basic - uses default settings */
	$j("a#single_image").fancybox(); /* Using custom settings */
	$j("a#inline").fancybox({
 			'hideOnContentClick': false,
			'overlayShow': false,
			'scrolling': false,
			'autoDimensions': true
	});
 	$j("a.zoom").fancybox({
 			'zoomSpeedIn': 300,
 			'zoomSpeedOut': 300,
 			'overlayShow': false
 	});
 }); 

//autogrow
        //$j(function() {
          //$j('textarea').autogrow();
        //});

//coda slider settings
		$j(document).ready(function() {
		$j('#coda-slider-1').codaSlider({
			'dynamicArrows': false,
			'dynamicTabs': false
		});
	});

//bouncebox
$j(document).ready(function(){

	/* Converting the #status-message div into a bounceBox: */
	$j('#status-message').bounceBox();

	/* Listening for the click event and toggling the box: */
	$j('a.button').click(function(e){

		$j('#status-message').bounceBoxToggle();
		e.preventDefault();
	});

	/* When the box is clicked, hide it: */
	$j('#status-message').click(function(){
		$j('#status-message').bounceBoxHide();
	});
});

//slickbox
$j(document).ready(function() {
  $j('#slickbox').hide();
  $j('a#slick-toggle').click(function() {
 $j('#slickbox').toggle(300);
 return false;
  });
});

//auto resize textarea
$j(document).ready(function() {
$j('textarea').autoResize({
    // On resize:
    onResize : function() {
        $j(this).css({opacity:0.8});
    },
    // After resize:
    animateCallback : function() {
        $j(this).css({opacity:1});
    },
    // Quite slow animation:
    animateDuration : 300,
    // More extra space:
    extraSpace : 40
});
});

//highslide
    hs.graphicsDir = '/data/assets/dave4/js/highslide/graphics/';
    hs.showCredits = false;
    hs.outlineType = 'rounded-white';

//trigger wysiwyg textarea
$j(document).ready(function() {
  $j('#pr_toggle_enhanced_body').trigger('click');
  $j('#pr_toggle_enhanced_comment').trigger('click');
});


//lazyload (not compatible w/ the loading of images in bouncybox & slickbox!!!!!!)
//$j(document).ready (function(){ 
//	$j("img").lazyload({ 
//    placeholder : "images/grey.gif",
//    effect : "fadeIn",
//    failurelimit : 80
//});
//});
  
//password meter (not compatible w/ ui stars!!!!!!)
//$j(document).ready(function() {
//  $j("#register").validate();
//  $j(".password").valid();
//});