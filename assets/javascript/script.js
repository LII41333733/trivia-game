var game = {
  setBoard: function () {
    if (this.questionIndex === 10) {
      $("#q").html("game stats");
      $("#gif").html("<span>Guesses Correct: " + this.guessesCorrect + " </span> - <span>Guesses Incorrect: " + this.guessesIncorrect + " </span> - <span>Timed Out: " + this.timedOut + " </span><br><img class='stat-gif' src='./assets/images/bg.gif'> <img class='stat-gif' src='./assets/images/ps-end.gif'> <img class='stat-gif' src='./assets/images/hr.gif'>")
      $(".head-row").css("margin-top", "40px");
      $(".body-row-gif").css("margin-top", "40px");
      $("span").css("margin-top", "20px");
      $(".stat-gif").css("width", "350px");
      $(".stat-gif").css("height", "190px");
      $(".stat-gif").css("margin-top", "40px");
      $(".timer-row").hide();
      $(".body-row-gif").hide();
      $(".head-row").hide();
      $(".head-row").delay(300).fadeIn(800);
      $(".body-row-gif").delay(2000).fadeIn(1500);
    } else {
      this.questions = [
        {
          question: "on the eagles’ attempt at the electric slide against the bears, which eagles player pretended to film it?",
          correctAnswer: "d",
          gif: "<img src='./assets/images/electric.gif'>",
          answers: {
            a: "brandon graham",
            b: "malcolm jenkins",
            c: "rodney mccleod",
            d: "corey graham"
          }
        },
        {
          question: "in his iconic speech at the super bowl parade, <br> jason kelce said that three teammates “can’t catch!” who were they?",
          correctAnswer: "c",
          gif: "<img src='./assets/images/kelce.gif'>",
          answers: {
            a: "nelson agholor, zach ertz and jay ajayi",
            b: "torrey smith, jalen mills and brent celek",
            c: "nigel bradham, torrey smith and nelson agholor",
            d: "brent celek, torrey smith and nelson agholor"
          }
        },
        {
          question: "how many teams did the eagles beat <br> by at least three touchdowns?",
          correctAnswer: "c",
          gif: "<img src='./assets/images/cash.gif'>",
          answers: {
            a: "7",
            b: "8",
            c: "6",
            d: "5"
          }
        },
        {
          question: "who scored the game-winning touchdown in <br> super bowl LII?",
          correctAnswer: "b",
          gif: "<img src='./assets/images/ertz.gif'>",
          answers: {
            a: "alshon jeffrey",
            b: "zach ertz",
            c: "corey clement",
            d: "nelson agholor"
          }
        },
        {
          question: "what is doug pederson's favorite brand of ice cream?",
          correctAnswer: "b",
          gif: "<img src='./assets/images/doug.gif'>",
          answers: {
            a: "breyers",
            b: "haagen-dazs",
            c: "ben and jerry's",
            d: "blue bell"
          }
        },
        {
          question: "if you add up the jersey numbers of all the players who touched the ball during the 'philly special', <br> what number do you get?",
          correctAnswer: "d",
          gif: "<img src='./assets/images/philly-special.gif'>",
          answers: {
            a: "201",
            b: "145",
            c: "166",
            d: "189"
          }
        },
        {
          question: "what patriots offensive lineman did brandon graham beat before his strip sack of brady?",
          correctAnswer: "a",
          gif: "<img src='./assets/images/strip.gif'>",
          answers: {
            a: "shaq mason",
            b: "nate solder",
            c: "david andrews",
            d: "joe thuney"
          }
        },
        {
          question: "what was the eagles' point differential in the playoffs?",
          correctAnswer: "a",
          gif: "<img src='./assets/images/alshon.gif'>",
          answers: {
            a: "+44",
            b: "+37",
            c: "+46",
            d: "+42"
          }
        },
        {
          question: "in what place did wentz finish in mvp voting, <br>and who beat him?",
          correctAnswer: "c",
          gif: "<img src='./assets/images/shrug.gif'>",
          answers: {
            a: "2nd; tom brady",
            b: "3rd; tom brady, antonio brown",
            c: "3rd; tom brady, todd gurley",
            d: "t-2nd; tom brady, aaron donald[tie]"
          }
        },
        {
          question: "against what team did mack hollins do his signature 'backpack kid' dance?",
          correctAnswer: "a",
          gif: "<img src='./assets/images/backpack.gif'>",
          answers: {
            a: "redskins",
            b: "cowboys",
            c: "giants",
            d: "panthers"
          }
        },
        {
          question: "are the eagles going to repeat in 2018?",
          correctAnswer: "d",
          gif: "<img src='./assets/images/clap.gif'>",
          answers: {
            a: "it'll be tough, but they have a shot",
            b: "aaron rodgers is back, so most likely not",
            c: "not even the playoffs...",
            d: "embrace the target!"
          }
        },
      ];
      this.revealAnswer = false;
      this.timeLeft = 20;
      this.questionIndex++;
      this.currentQuestion = this.questions[this.questionIndex].question;
      this.correctAnswerKey = this.questions[this.questionIndex].correctAnswer;
      this.correctAnswerString = this.questions[this.questionIndex].answers[this.correctAnswerKey];

      $(".body-row-gif").hide();
      $("#q").html(this.currentQuestion);
      $("#a1").text(this.questions[this.questionIndex].answers.a);
      $("#a2").text(this.questions[this.questionIndex].answers.b);
      $("#a3").text(this.questions[this.questionIndex].answers.c);
      $("#a4").text(this.questions[this.questionIndex].answers.d);
      $(".timer").text(this.timeLeft);

      $(".timer-row").hide();
      $(".head-row").hide();
      $(".timer-row").delay(300).fadeIn(800);
      $(".head-row").delay(300).fadeIn(800);



      $(".answer-1-div").delay(1000 * 2).fadeIn(1500);
      $(".answer-2-div").delay(1000 * 2.2).fadeIn(1500);
      $(".answer-3-div").delay(1000 * 2.4).fadeIn(1500);
      $(".answer-4-div").delay(1000 * 2.6).fadeIn(1500);





      this.stopTimer();

      this.timerVar = setInterval(function () {
        if (game.timeLeft === 0) {
          $(".timer").text(game.timeLeft);
          game.stopTimer();
          game.showAnswer();
        } else {
          $(".timer").text(game.timeLeft);
          game.timeLeft--;
        }
      }, 1000);

    }


  },

  stopTimer: function () {
    clearInterval(this.timerVar);
  },


  showAnswer: function (clickedAnswer) {
    $(".answer-1-div").hide();
    $(".answer-2-div").hide();
    $(".answer-3-div").hide();
    $(".answer-4-div").hide();
    $(".body-row-gif").show();
    $("#gif").html("<br>" + this.questions[this.questionIndex].gif);

    if (clickedAnswer === undefined) {
      $("#q").html("times up! the correct answer was: <br> <span id='a'>" + this.correctAnswerString + "</span>");
      this.timedOut++;
    } else if (this.correctAnswerKey === clickedAnswer) {
      $("#q").html("it's good! the correct answer was: <br> <span id='a'>" + this.correctAnswerString + "</span>");
      this.guessesCorrect++;
    } else {
      $("#q").html("bad call! the correct answer was: <br> <span id='a'>" + this.correctAnswerString + "</span>");
      this.guessesIncorrect++;
    }

    setTimeout(function () {
      game.setBoard();
    }, 1000 * 7);
  }
}

$(".game-container").hide();
$(".body-row-gif").hide();
$(".timer-row").hide();
$(".head-row").hide();
$("#start").hide();
$(".answer-1-div").hide();
$(".answer-2-div").hide();
$(".answer-3-div").hide();
$(".answer-4-div").hide();


$(".game-container").delay(2000).fadeIn(800);
$("#start").delay(7000).fadeIn(1200);


$("#start").on("click", function () {
  $(".intro").hide();
  game.questionIndex = -1;
  game.guessesCorrect = 0;
  game.guessesIncorrect = 0;
  game.timedOut = 0;
  game.setBoard();
});

$(".answer-div").on("click", function () {
  game.stopTimer();
  game.showAnswer($(this).attr("data-answer"));
});