$(function (){
   new WOW().init();
    
    /*******************************************
    ***************WORK SECTION**************
    ********************************************/
    
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 500, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        gallery: {
                enabled: true  
        },
    });
    
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items : 1
            },
            480 : {
                items: 2
            },
            768 : {
                items : 3
            },
        }
    });
    
    $('#client-container').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items : 1
            },
            480 : {
                items: 1
            },
            768 : {
                items : 1
            },
        }
    });
    
    
    $('#clients-section').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 1030,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items : 2
            },
            480 : {
                items: 4
            },
            768 : {
                items : 6
            },
        }
    });
    
    
});