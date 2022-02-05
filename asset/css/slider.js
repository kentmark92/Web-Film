$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
