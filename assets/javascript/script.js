// $(".row-a").hide();
// $(".row-b").hide();

// $('#start').on("click", function() {
//   $('.intro').hide();
//   $(".row-a").show();
// })

// $('#a1').on("click", function() {
//   $('.row-a').hide();
//   $(".row-b").show();
// })

$('.intro').hide();
$(".row-a").show();
$(".row-b").hide();

$('#start').on("click", function() {
  $(".row-a").show();
})

var timeLeft = 20;
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        $("#timer").text(timeLeft);
        timeLeft--;
    }
}


$('#a1').on("click", function() {
  $('.row-a').hide();
  $(".row-b").show();
  var anss = setTimeout(function() {
    $('.row-b').hide();
    $(".row-a").show();
  }, 1000 * 3);
})



