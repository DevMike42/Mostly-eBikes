// Carousel Slider
$('.carousel').carousel({
  interval: 5000,
  pause: 'hover'
});

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());