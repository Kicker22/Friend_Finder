const questions = [
    {
      question: "I prefer to charge head first into battle!",
      answers: ["Strongly Disagree", "Disagree", "Nutral", "Agree", "Strongly Agree"]
    },
    {
      question: "I tend to be opportunistic in my dealings with others",
      answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
  ]

  let questionIndex = 0;
  let buttonValue = 0;
  let userChoices = [];

  function start() {
    // when the start button is clicked start the quiz
    $('body').on('click', '.start-button', function () {
      $(this).remove()
      appendQuestion()
      appendAnswers()
    })
  }

  start()

  function appendQuestion() {
    var question = questions[questionIndex].question
    var questionDiv = $("<div>");
    questionDiv.text(question);
    questionDiv.addClass("display-4")
    $(".questions").append(questionDiv)

  }

  function appendAnswers() {
    var answers = questions[questionIndex].answers;
    for (let i = 0; i < answers.length; i++) {
      buttonValue++
      var button = $("<button>");
      button.addClass(' btn btn-lg btn-dark mr-1 mb-2 choices')
      button.val(buttonValue)
      button.text(answers[i])
      $('.buttons').append(button)
    }
  }

  function clearQuestion() {
    $('.buttons').empty();
    $('.questions').empty();
  }

  $('body').on('click', '.choices', function () {
    let userValues = $(this).val()
    userChoices.push(userValues)
    questionIndex++
    console.log(questionIndex);
    console.log(userChoices)
    clearQuestion()
    appendQuestion()
    appendAnswers()
  })