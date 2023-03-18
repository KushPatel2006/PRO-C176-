let riddles = [
  {
    question: "What has to be broken before you can use it?",
    answer: "egg",
  },
  {
    question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answer: "candle",
  },
  {
    question: "What is full of holes but still holds water?",
    answer: "sponge",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "map",
  },
  {
    question:
      " I am weightless, but you can see me. Put me in a bucket, and I'll make it lighter. What am I? ",
    answer: "hole",
  },
];
const jsConfetti = new JSConfetti();

$(document).ready(function () {
  display();
  reset_();
});

function reset_() {
  $("#input-answer").keyup(function () {
    $("#next-btn").click(function () {
      $(".answer").empty();
      $("#input-answer").val("");
      display();
    });
  });
}

function display() {
  const question = riddles[Math.floor(Math.random() * riddles.length)];
  $("#question").html(question.question);
  $("#next-btn").hide();

  $("#input-answer").keyup(function () {
    $("#submit").click(function () {
      var input = $("#input-answer").val();
      if (input.toLowerCase() === question.answer) {
        var ht = `Congratulation
        <div class="correctanswer">correct answer: ${question.answer}</div>`;
        $(".answer").html(ht);
        $("#next-btn").show();
        party.confetti(this, {
          // Specify further (optional) configuration here.
          count: party.variation.range(0, 5),
          size: party.variation.range(0.6, 1.2),
        });
        jsConfetti.addConfetti();
      } else {
        $(".answer").html("InCorrect");
      }
    });
  });
}
