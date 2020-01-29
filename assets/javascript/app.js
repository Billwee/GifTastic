// We begin with an incredibly long list of questions.
// Haha. After finishing the game I realized that 25
// questions is way too many.
// I used an array of objects so each question is fully
// accessable with a counter.
let game = [
  {
    question: "What was the name of Bart's elephant?",
    answerA: 'Stompy',
    answerB: 'Stampy',
    answerC: 'Squishy',
    answerD: 'Dumbo',
    correctIMG: 'https://media.giphy.com/media/xT5LMIOyAHyqSFYPMA/giphy.gif',
    correct: 'b',
    correctDisplay: 'Stampy'
  },
  {
    question:
      "What was the name of Ned Flanders' store in the Springfield Mall?",
    answerA: 'The Leftorium',
    answerB: "Lefties R' Us",
    answerC: "Devil's Hand Emporium",
    answerD: 'Second Hand Store',
    correctIMG: 'https://media.giphy.com/media/3orif8DzFlLlGe00M0/giphy.gif',
    correct: 'a',
    correctDisplay: 'The Leftorium'
  },
  {
    question: "Who is Bart Simpson's nemesis?",
    answerA: 'Groundskeeper Willie',
    answerB: 'Side Show Mel',
    answerC: 'Chief Wiggum ',
    answerD: 'Side Show Bob',
    correctIMG: 'https://media.giphy.com/media/RSOUOj8H9A3Xq/giphy.gif',
    correct: 'd',
    correctDisplay: 'Side Show Bob'
  },
  {
    question: "Krusty The Clown's real name is...",
    answerA: 'Rory B Bellows',
    answerB: 'Herschel Krustofsky',
    answerC: 'Christopher Krust',
    answerD: 'Homer Simpson',
    correctIMG: 'https://media.giphy.com/media/3o6MbaB2rYRC7R3Ng4/giphy.gif',
    correct: 'b',
    correctDisplay: 'Herschel Krustofsky'
  },
  {
    question: 'What instrument does Lisa Simpson play?',
    answerA: 'Flute',
    answerB: 'Drums',
    answerC: 'Saxophone',
    answerD: 'Trumpet',
    correctIMG: 'https://media.giphy.com/media/l2Je0GacMKhoqIM36/giphy.gif',
    correct: 'c',
    correctDisplay: 'Saxophone'
  },
  {
    question: "Marge Simpson's maiden name is..",
    answerA: 'Bouvier',
    answerB: 'Simmons',
    answerC: 'Walters',
    answerD: 'Wiggum',
    correctIMG: 'https://media.giphy.com/media/l2Jedx38sk0Xclaxy/giphy.gif',
    correct: 'a',
    correctDisplay: 'Bouvier'
  },
  {
    question: "What was the name of Homer's plow business?",
    answerA: 'Plow King',
    answerB: 'Super Plow',
    answerC: 'Plows For Less',
    answerD: 'Mr. Plow',
    correctIMG: 'https://media.giphy.com/media/3o75218xzv3Hoe66go/giphy.gif',
    correct: 'd',
    correctDisplay: 'Mr. Plow'
  },
  {
    question:
      "Name the drink that Homer invented using children's cough syrup.",
    answerA: 'Flaming Homer',
    answerB: "Homer's Special Sauce",
    answerC: 'Rum and Homer',
    answerD: 'Long Homer Iced Tea',
    correctIMG: 'https://media.giphy.com/media/8S25zvJxAgN7G/giphy.gif',
    correct: 'a',
    correctDisplay: 'Flaming Homer'
  },
  {
    question: "Maggie's first word was?",
    answerA: 'Homer',
    answerB: 'Mama',
    answerC: 'Bart',
    answerD: 'David Hasselhoff',
    correctIMG: 'https://media.giphy.com/media/3orifhQjTT1CgRE47K/giphy.gif',
    correct: 'c',
    correctDisplay: 'Bart'
  },
  {
    question: "The Simpson's street address is..",
    answerA: '742 Evergreen Terrace',
    answerB: '768 Shelbyville Way',
    answerC: '31 Spooner St',
    answerD: '1024 Cherry Street',
    correctIMG: 'https://media.giphy.com/media/3orieMaXYViCoYIrny/giphy.gif',
    correct: 'a',
    correctDisplay: '742 Evergreen Terrace'
  },
  {
    question: 'Who shot Mr. Burns?',
    answerA: 'Maggie Simpson',
    answerB: 'Waylon Smithers',
    answerC: 'Chief Wiggum',
    answerD: 'Homer Simpson',
    correctIMG: 'https://media.giphy.com/media/3o6MbolBsP7J5X43lK/giphy.gif',
    correct: 'a',
    correctDisplay: 'Maggie Simpson'
  },
  {
    question: "Homer's quartet had a hit song named...",
    answerA: "Don't Stop The Lovin'",
    answerB: 'Baby Forever',
    answerC: 'The Long Walk',
    answerD: 'Baby On Board',
    correctIMG: 'https://media.giphy.com/media/NNvShpev4l7he/giphy.gif',
    correct: 'd',
    correctDisplay: 'Baby On Board'
  },
  {
    question: "How do you spell Apu's last name?",
    answerA: 'Nahasapeemapetilon',
    answerB: 'Nahasapennapetilon',
    answerC: 'Nuhhasapeenapetilon',
    answerD: 'Nuhasapeemapedilon',
    correctIMG: 'https://media.giphy.com/media/3o6Mb43ToTpO3WO4Cc/giphy.gif',
    correct: 'a',
    correctDisplay: 'Nahasapeemapetilon'
  },
  {
    question: "What did the Simpson's get in their first Christmas episode?",
    answerA: 'A Cat',
    answerB: 'Their Car',
    answerC: 'A Dog',
    answerD: 'Their House',
    correctIMG: 'https://media.giphy.com/media/xT5LMvmOApGsQDXGdq/giphy.gif',
    correct: 'c',
    correctDisplay: 'A Dog'
  },
  {
    question: "What is the name of Bart's favorite comic book action hero?",
    answerA: 'Radiation Dude',
    answerB: 'Gamma Ray',
    answerC: 'Atom Bomb',
    answerD: 'Radioactive Man',
    correctIMG: 'https://media.giphy.com/media/3orif1uDmLAeKeJPkA/giphy.gif',
    correct: 'd',
    correctDisplay: 'Radioactive Man'
  },
  {
    question: 'Where did Homer get the idea for his new name, Max Power?',
    answerA: 'A Hair Dryer',
    answerB: 'An Adult Film',
    answerC: 'A Superhero',
    answerD: 'From A Friend',
    correctIMG: 'https://media.giphy.com/media/3oriePDp0hGGwvwc1y/giphy.gif',
    correct: 'a',
    correctDisplay: 'A Hair Dryer'
  },
  {
    question: 'Who moved in across the street from the Simpsons?',
    answerA: 'Comic Book Guy',
    answerB: 'Bill Clinton',
    answerC: 'George Bush Sr',
    answerD: 'Ronald Reagan',
    correctIMG: 'https://media.giphy.com/media/xT5LMResTV3RqAnz1K/giphy.gif',
    correct: 'c',
    correctDisplay: 'George Bush Sr'
  },
  {
    question: 'What section of the power plant does Homer work in?',
    answerA: 'Sector 22',
    answerB: 'Sector 7G',
    answerC: 'Sector 8F',
    answerD: 'Sector 39',
    correctIMG: 'https://media.giphy.com/media/KYMR9VsDGs3PW/giphy.gif',
    correct: 'b',
    correctDisplay: 'Sector 7G'
  },
  {
    question: "What does the J in Homer's middle name stand for?",
    answerA: 'Jason',
    answerB: 'Jojo',
    answerC: 'Jacob',
    answerD: 'Jay',
    correctIMG: 'https://media.giphy.com/media/xT5LMxABbTX8yQA6Y0/giphy.gif',
    correct: 'd',
    correctDisplay: 'Jay'
  },
  {
    question: "What's Patty and Selma's favourite TV show?",
    answerA: 'MacGyver',
    answerB: 'Matlock',
    answerC: 'Murder She Wrote',
    answerD: 'Golden Girls',
    correctIMG: 'https://media.giphy.com/media/xT5LML8JpJ6dnfv4HK/giphy.gif',
    correct: 'a',
    correctDisplay: 'MacGyver'
  },
  {
    question: 'How many kids did Apu and Manjula give birth to?',
    answerA: '7',
    answerB: '8',
    answerC: '10',
    answerD: '4',
    correctIMG: 'https://media.giphy.com/media/3orieQFKy190vYgEes/giphy.gif',
    correct: 'b',
    correctDisplay: '8'
  },
  {
    question: 'Who founded the Simpsons’ hometown?',
    answerA: 'Jebadiah Springfield',
    answerB: 'Herbert Shelbyville',
    answerC: 'Cletus Spuckler',
    answerD: 'Lyle Lanley',
    correctIMG: 'https://media.giphy.com/media/3o6Mbal7VJJo0rtslO/giphy.gif',
    correct: 'a',
    correctDisplay: 'Jebadiah Springfield'
  },
  {
    question: 'Who is the spokesperson for Duff Beer?',
    answerA: 'Duffmeister',
    answerB: 'Duff The Magic Dragon',
    answerC: 'Duffman',
    answerD: 'Spuds Mackenzie',
    correctIMG: 'https://media.giphy.com/media/3oriePn1Zovcmb7q5G/giphy.gif',
    correct: 'c',
    correctDisplay: 'Duffman'
  },
  {
    question: "What is Homer's catch phrase?",
    answerA: '¡Ay, Caramba!',
    answerB: "D'oh!",
    answerC: 'Okalie Dokalie',
    answerD: "Dat's Crayy",
    correctIMG: 'https://media.giphy.com/media/3o6MbkON1CxTbqPT56/giphy.gif',
    correct: 'b',
    correctDisplay: "D'oh!"
  },
  {
    question: 'Whats is the name of the Simpsons yearly halloween special?',
    answerA: 'Treehouse of Horror',
    answerB: 'House of Terror',
    answerC: 'Simpsons Scartacular',
    answerD: "Springfield's Sacrifice",
    correctIMG: 'https://media.giphy.com/media/rBstaErKItWKs/giphy.gif',
    correct: 'a',
    correctDisplay: 'Treehouse of Horror'
  }
];

var counter = 0;
var timer;
var seconds = 15;
var pick;
var running = false;
var correct = 0;
var wrong = 0;
var unanswered = 0;

// This function loads one of  the questions onto
// the page based on the counter.
function loadQuestion(count) {
  $('.question').html(game[count].question);
  $('.a').text(game[count].answerA);
  $('.b').text(game[count].answerB);
  $('.c').text(game[count].answerC);
  $('.d').text(game[count].answerD);
}

// This function first checks if the game is over. If
// it is then it hides the question area and answer
// choices, displays the outcome of your play, and loads
// the play again button. Else it reloads the question
// and answer area, starts the timer, and loads the next
// question.
function triviaGame() {
  if (counter === 25) {
    $('.answerGrid').css('display', 'none');
    $('.questionDiv').css('display', 'none');
    $('.done').text("Finished! Here's How You Did");
    $('.timeLeft').css('font-size', '25px');
    $('.timeLeft').text('Correct: ' + correct);
    $('.answerResponse').css('font-size', '25px');
    $('.answerResponse').text('Incorrect: ' + wrong);
    $('.correctResponse').css('font-size', '25px');
    $('.correctResponse').text('Unanswered: ' + unanswered);
    $('.image').attr('src', '');
    $('.checkAnswerDiv').css('display', 'block');
    $('.againBTN').css('display', 'block');
  } else {
    $('.answerGrid').css('display', 'grid');
    $('.questionDiv').css('display', 'block');
    $('.checkAnswerDiv').css('display', 'none');
    $('.image').attr('src', '');
    $('.timer').text(seconds);
    startClock();
    loadQuestion(counter);
  }
}

// This function takes arguments from the click events
// and the timer. All three hide the question and answer
// area, show how much time you had left, tell you
// correct/incorrect/out of time, and display a related
// gif. if you're incorrect a serperate <p> loads and
// displays the right answer.
function answer(x) {
  if (x === 'r') {
    $('.answerGrid').css('display', 'none');
    $('.questionDiv').css('display', 'none');
    $('.timeLeft').text('With ' + seconds + ' Seconds Left...');
    $('.answerResponse').text('That is Correct!');
    $('.correctResponse').text('');
    $('.image').attr('src', game[counter].correctIMG);
    $('.checkAnswerDiv').css('display', 'block');
  } else if (x === 'w') {
    $('.answerGrid').css('display', 'none');
    $('.questionDiv').css('display', 'none');
    $('.timeLeft').text('With ' + seconds + ' Seconds Left...');
    $('.answerResponse').text('That is Incorrect!');
    $('.correctResponse').text(
      'The Correct Answer: ' + game[counter].correctDisplay
    );
    $('.image').attr('src', game[counter].correctIMG);
    $('.checkAnswerDiv').css('display', 'block');
  } else if (x === 'o') {
    $('.answerGrid').css('display', 'none');
    $('.questionDiv').css('display', 'none');
    $('.timeLeft').text('');
    $('.answerResponse').text('Out Of Time!');
    $('.correctResponse').text(
      'The Correct Answer: ' + game[counter].correctDisplay
    );
    $('.image').attr('src', game[counter].correctIMG);
    $('.checkAnswerDiv').css('display', 'block');
  }
}

// Clock functions
function startClock() {
  if (!running) {
    timer = setInterval(function() {
      $('.timer').text(seconds);
      seconds--;
      // This section of the timer function is for showing
      // the answer after time has reached zero.
      if (seconds < 0) {
        pick = '';
        stopClock();
        answer('o');
        seconds = 15;
        counter++;
        unanswered++;
        setTimeout(triviaGame, 4000);
      }
    }, 1000);
  }
  running = true;
}

function stopClock() {
  clearInterval(timer);
  running = false;
}

// Click Events
// This click event checks what you clicked against
// the correct answer in the object. They both clear
// what you picked after comparing, stops the clock,
// runs the answer function with the corresponding string
// resets the timer and adds 1 to the counter and
// correct/wrong/out of time counter. After 4 seconds
// the triviaGame function runs to display the next
// question.
$('.answerBox').click(function() {
  console.log($(this).attr('id'));
  pick = $(this).attr('id');

  if (pick === game[counter].correct) {
    pick = '';
    stopClock();
    answer('r');
    seconds = 15;
    counter++;
    correct++;
    setTimeout(triviaGame, 4000);
  } else if (pick !== game[counter].correct) {
    pick = '';
    stopClock();
    answer('w');
    seconds = 15;
    counter++;
    wrong++;
    setTimeout(triviaGame, 4000);
  }
});

// Start button which loads the first question. After
// clicking it it hides itself and displays the first
// question.
$('.start').click(function() {
  $('.startBTN').css('display', 'none');
  triviaGame();
});

// Play again button which resets your question counter,
// and your correct.wrong, and out of time counters. Then
// runs triviaGame to restart the game.
$('.againBTN').click(function() {
  $('.answerResponse').css('font-size', '40px');
  $('.correctResponse').css('font-size', '40px');
  $('.timeLeft').css('font-size', '40px');
  $('.done').text('');
  $('.againBTN').css('display', 'none');
  counter = 0;
  correct = 0;
  wrong = 0;
  unanswered = 0;
  triviaGame();
});
