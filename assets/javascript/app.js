var topics = [
  'austin powers',
  'the matrix',
  'boondock saints',
  'toy story',
  'aladdin',
  'pulp fiction',
  'lord of the rings',
  'space jam',
  'the godfather',
  'star wars clone wars',
  'spirited away',
  'the lion king',
  'back to the future',
  ' avengers endgame',
  'wall-e',
  'braveheart',
  'die hard',
  'jurassic park',
  'kill bill',
  'harry potter',
  'rocky'
];

function generateButtons() {
  topics.forEach(function(movie) {
    var button = $('<button>');
    button.attr('type', 'button');
    button.html(movie);
    $('#movieButtons').append(button);
  });
}

generateButtons();
