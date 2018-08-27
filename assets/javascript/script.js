var game = {
  timesUp: false,
  revealAnswer: false,
  answerSelected: false,
  correctAnswer: "",
  qi: 0,
  questions: [
    {
      question: "on the eagles’ second attempt at the electric slide against the bears, which eagles player pretended to film it?",
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
      question: "in his iconic speech at the super bowl parade, jason kelce said that three teammates “can’t catch!” who were they?",
      correctAnswer: "c",
      gif: "<img src='./assets/images/kelce.gif'>",
      answers: {
        a: "nelson agholor, zach ertz, jay ajayi",
        b: "torrey smith, jalen mills, brent celek",
        c: "nigel bradham, torrey smith, nelson agholor",
        d: "brent celek, torrey smith, nelson agholor"
      }
    },
    {
      question: "how many teams did the eagles beat by at least three touchdowns?",
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
      question: "who scored the game-winning touchdown in super bowl LII",
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
      question: "what is doug pederson's favorite 'brand' of ice cream?",
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
      question: "if you add up the jersey numbers of all the players who touched the ball during the 'philly special,; what do you get?",
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
      gif: "<img src='./assets/images/vikings.gif'>",
      answers: {
        a: "+44",
        b: "+37",
        c: "+46",
        d: "+42"
      }
    },
    {
      question: "in what place did wentz finish in mvp voting, and who beat him?",
      correctAnswer: "c",
      gif: "<img src='./assets/images/shrug.gif'>",
      answers: {
        a: "2nd; tom brady",
        b: "3rd; tom brady, antonio brown",
        c: "3rd; tom brady, todd gurley",
        d: "t-2nd; tom brady, (t)aaron donald"
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
      gif: "<img src='./assets/images/hr.gif'>",
      answers: {
        a: "it'll be tough, but they have a shot",
        b: "aaron rodgers is back, so most likely not",
        c: "not even the playoffs...",
        d: "embrace the target!"
      }
    },
  ],


  setBoard: function () {

    this.revealAnswer = false;
    this.answerSelected = false;
    this.timeLeft = 2;

    $(".timer").text(game.timeLeft);
    $(".body-row-gif").hide();
    $(".body-row-answers").show();
    $(".timer-row").show();
    $(".head-row").show();

    var currentQuestion = this.questions[this.qi].question;
    this.correctAnswer = this.questions[this.qi].correctAnswer;

    $("#q").text(currentQuestion);
    $("#a1").text(this.questions[this.qi].answers.a);
    $("#a2").text(this.questions[this.qi].answers.b);
    $("#a3").text(this.questions[this.qi].answers.c);
    $("#a4").text(this.questions[this.qi].answers.d);

    this.stopTimer();


    this.timerVar = setInterval(function () {
      if (game.timeLeft === 0) {
        $(".timer").text(game.timeLeft);
        game.stopTimer();
        game.showAnswer("time");
      } else {
        $(".timer").text(game.timeLeft);
        game.timeLeft--;
      }
    }, 1000);

    console.log(this.timerVar);

  },

  // startTimer: function () {
  //   console.log(this.timerVar)
  //   this.timerVar;
  // },



  stopTimer: function () {
    clearInterval(this.timerVar);
  },


  showAnswer: function (result) {
    $(".body-row-answers").hide();
    $(".body-row-gif").show();
    $("#gif").html("<br>" + this.questions[this.qi].gif);

    if (result === "time") {
      $("#q").html("times up! the correct answer was: <br> <span id='a'>" + game.questions[game.qi].answers[game.correctAnswer] + "</span>");
    } else if (result === "right") {
      $("#q").html("you got it! the correct answer was: <br> <span id='a'>" + game.questions[game.qi].answers[game.correctAnswer] + "</span>");
    } else {
      $("#q").html("bad call! the correct answer was: <br> <span id='a'>" + game.questions[game.qi].answers[game.correctAnswer] + "</span>");
    }

    setTimeout(function () {
      game.qi++;
      game.setBoard();
    }, 1000 * 8);
  }
}


$(".body-row-gif").hide();
$(".timer-row").hide();
$(".head-row").hide();



$("#start").on("click", function () {
  $(".intro").hide();
  game.setBoard();
});

$(".answer-div").on("click", function () {
  game.stopTimer();
  game.answerSelected = true;
  var answer = $(this).attr("data-answer");
  for (var i = 0; i < 4; i++) {
    if (answer === game.questions[game.qi].correctAnswer) {
      game.showAnswer("right");
    } else {
      game.showAnswer("wrong");
    }
  }
});