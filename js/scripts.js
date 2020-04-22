// Lightbox Options

lightbox.option({
  resizeDuration: 500,
  alwaysShowNavOnTouchDevices: true,
  showImageNumberLabel: true,
  maxWidth: 1200,
  wrapAround: true,
});

// Search Feature

$(document).ready(function () {
  $("#search").hideseek({
    list: ".list",
    nodata: "",
    attribute: "title",
    matches: true,
    highlight: false,
    ignore: "",
    navigation: false,
    ignore_accents: false,
    hidden_mode: false,
    min_chars: 1,
  });
});
