$(document).ready(function() {
    const owl = $('.main-carousel');
    $('.main-carousel').owlCarousel({
        items: 1,
        margin: 15
    })
    $('.prev-carousel--btn').click(function() {
        owl.trigger('prev.owl.carousel')
    })
    $('.next-carousel--btn').click(function() {
        owl.trigger('next.owl.carousel')
    })
})