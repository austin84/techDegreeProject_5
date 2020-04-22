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

// const input = $("#search").val().toUpperCase();
// const gallery = $(".photo");
// const data = $(".photo a").attr("data-title").toUpperCase();

// $("#search").keyup(function () {
//   let search = $("#search").val().toUpperCase();
//   let gallery = $(".photo");
//   for (let i = 0; i < gallery.length; i += 1) {
//     let data = $(".photo a"[i]).attr("data-title").toUpperCase();
//     if (search == data) {
//       gallery[i].style.display = "none";
//     } else {
//       gallery[i].style.display = "block";
//     }
//   }
// });
