$(document).ready(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        e.stopPropagation(); 
    }); 

    $('html').click(function() {
        $('.nav-dropdown').hide();
    })

    $('#nav-toggle').click(function() {
        $('nav ul').slideToggle(); 
    })

    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active'); 
    }); 
}); 

$('.img-parallax').each(function() {
    const img = $(this);
    const imgParent = $(this).parent(); 
    function parallaxImg () {
        const speed = img.data('speed'); 
        const imgY = imgParent.offset().top;
        const winY = $(this).scrollTop();
        const winH = $(this).height();
        const parentH = imgParent.innerHeight();

        //Next pixel to show on screen 

        const winBottom = winY + winH;

        //if block shown on screen

        if(winBottom > imgY && winY < imgY + parentH) {
            // Number of pixels shown after block appear
            const imgBottom = ((winBottom - imgY) * speed);
            //max number of pixels until block disappear
            const imgTop = winH + parentH;
            //percentage between start showing until disappearing 
            const imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        } 
        img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
    }
    $(document).on({
        scroll:function () {
            parallaxImg();

        }, ready: function() {
            parallaxImg();
        }
    });
});