// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Lightbox init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
  $(this).ekkoLightbox();
});

// Testimonial slider
if ($('.slider').length === 1) {
    $('.slider').slick({
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1
    });
}