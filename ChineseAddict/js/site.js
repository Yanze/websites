/**
 * Created by Yanze on 02/01/2015.
 */
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//scrolling page
function scrollToAnchor(aid){
    var aidCleaned = aid.replace(/ /g, "-");
    aidCleaned = aidCleaned.replace(/\./g, "-");
    var aTag = $("#"+aidCleaned);
    var posTag = aTag.offset().top;
    $('html, body').animate({scrollTop:posTag},1000, 'easeInOutCubic');
}


function initialize(){
    var mapOptions = {
        center: new google.maps.LatLng(37.376637,237.980089),
        zoom: 14,
        disableDefaultUI:true,
        zoomControl:true,
        scrollwheel:false,
        panControl:true,
        mapTypeControl:true,
        scaleControl:true,
        streetViewControl:true,
        rotateControl:true,
        overviewMapControl:true
    };
    var map = new google.maps.Map(document.getElementById("mapDiv"),mapOptions);
    drawCircle(map);

    function drawCircle(map){
        var circle = new google.maps.Circle({
            map:map,
            center: new google.maps.LatLng(37.378311, -122.030672),
            fillColor:"#19b698",
            fillOpacity:0.5,
            strokeColor:"#16a085",
            strokeOpacity:0.7,
            strokeWeight:1,
        });
        circle.setRadius(500.222737);
    }
}
google.maps.event.addDomListener(window,"load", initialize);



//about us register hover
$(function(){
    $(".wrapAbout").on({
        'mouseenter':function(){
            $('#register').removeClass("btn-inactive");
            $('#register').addClass("btn-active");
        },
        'mouseleave':function(){
            $('#register').removeClass("btn-active");
            $('#register').addClass("btn-inactive");
        }
    })

    //scrolling page
    $(".page-scroll").click(function(e){
        e.preventDefault();
        scrollToAnchor($(this).text());
    })

    // Validate contact form
    $('#form').validate({
        rules: {
            firstname: {
                required: true,
                minlength:2,
                lettersonly: true
            },
            lastname:{
                required: true,
                lettersonly: true
            },
            phonenumber:{
                required: true,
                digits: "Mobile number should contain only digits"
            },
            email:{
                required: true,
                email:true
            },
            comment:{
                maxlength:100
            }
        }
    });

    $("#submit").click(function(){
        $("#form").submit();
        return false;
    });

});
