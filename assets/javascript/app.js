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

var limit = 10;

generateButtons();

$('button').click(function() {
  var queryURL =
    '//api.giphy.com/v1/gifs/search?q=' +
    $(this).text() +
    '&api_key=uQw4p1YS9v3frf9OYHMePByxlpwxKCfw&limit=' +
    limit;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    $('#movies').empty();
    response.data.forEach(function(mov, idx) {
      $('#movies').append('<div class="image' + (idx + 1) + '" />');
      $('.image' + (idx + 1) + '').addClass('gifContainer');
      var gifIMG = $('<img>').attr({
        src: mov.images.original.url,
        'data-still': mov.images.original_still.url,
        'data-animate': mov.images.original.url,
        'data-state': 'animate'
      });
      var rating = $('<p>Rating: ' + mov.rating.toUpperCase() + '</p>');
      $('.image' + (idx + 1) + '').append(rating);
      $('.image' + (idx + 1) + '').append(gifIMG);
    });
  });
});
