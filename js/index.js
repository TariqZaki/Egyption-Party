"use strict";
//? <---- side nnav-bar logic  ----->

$('.unlock').on('click' , function(){
    $('.inner-side').animate({width: 'show' , padding: 'show'} , 1000);
    $('.unlock').addClass('d-none');
    $('.lock').removeClass('d-none');
    // $("ul li").animate({ marginTop: "30px" }, 300);

})

$('.lock').on('click' , function()
{
    $('.inner-side').animate({width:'toggle' , padding: 'toggle'} , 1000);
    $('.lock').addClass('d-none');
    $('.unlock').removeClass('d-none');
    // $("ul li").animate({ marginTop: "0" }, 300);
})

//? <---- side nnav-bar logic  ----->

//? <---- singer card logic  ----->
$(".singersCard h3").on("click", (e) => {
  $(e.target).next().slideToggle(1000);

  $(".singersCard div").not($(e.target).next()).slideUp();
});

//? <---- singer card logic  ----->

//? <---- count timer logic  ----->
function makeTimer() {
  let endTime = new Date("12 novamber 2024");
  endTime = Date.parse(endTime) / 1000;

  let now = new Date();
  now = Date.parse(now) / 1000;

  let timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - days * 86400) / 3600);
  let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  let seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days + `<span class="text-center">Days</span>`);
  $("#hours").html(hours + `<span class="text-center">Hours</span>`);
  $("#minutes").html(minutes + `<span class="text-center">Minutes</span>`);
  $("#seconds").html(seconds + `<span class="text-center">Seconds</span>`);
}

setInterval(() => {
  makeTimer();
}, 1000);
//? <---- count timer logic  ----->

//? <---- contact section logic  ----->
$(document).ready(() => {
  $("textarea").keyup(function () {
    var box = $(this).val();
    var main = box.length * 100;
    var value = main / 100;
    var count = 0 + box.length;
    var reverse_count = 100 - box.length;

    if (box.length >= 0) {
      $(".progress-bar").css("width", count + "%");
      $(".current-value").text(count + "%");
      $(".count").text(reverse_count);

      if (count >= 50 && count < 85) {
        $(".progress-bar")
          .removeClass("progress-bar-danger")
          .addClass("progress-bar-warning");
      }
      if (count > 85) {
        $(".progress-bar")
          .removeClass("progress-bar-warning")
          .addClass("progress-bar-danger");
      }
      if (count >= 0 && count < 50) {
        $(".progress-bar").removeClass("progress-bar-danger");
        $(".progress-bar").removeClass("progress-bar-warning");
        $(".progress-bar").addClass("progress-bar-success");
      }
    }
    return false;
  });
});
//? <---- contact section logic  ----->

//? <---- backk to top icon logic  ----->
let homeOffset = $("#home").offset().top;

$(window).on("scroll", function () {
  if ($(window).scrollTop() > homeOffset) {
    $(".backToTop").fadeIn(1000);
    $(".backToTop").css("display", "flex");
  } else {
    $(".backToTop").fadeOut(1000);
    $(".backToTop").css("display", "none");
  }
});

$(".backToTop").on("click", function () {
  $(window).scrollTop(0);
});
//? <---- backk to top icon logic  ----->

//? <---- loadinng & spinner logic  ----->
$(() => {
  $(".loader").fadeOut(800, () => {
    $(".loading").slideUp(800, () => {
      $("body").css("overflow", "auto");

      $(".loading").remove();
    });
  });
});
//? <---- loadinng & spinner logic  ----->
