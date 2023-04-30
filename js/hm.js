$('.main__next').click(() => {
  $('html, body').animate({
      scrollTop: $('.intro').offset().top
  }, 500);
});