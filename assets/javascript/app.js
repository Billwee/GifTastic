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

var limit = 10;
var currentMovie;

function generateButtons() {
  topics.forEach(function(movie) {
    var button = $('<button>');
    button.attr('type', 'button');
    button.addClass('movBTN');
    button.html(movie);
    $('#movieButtons').append(button);
  });
}

generateButtons();

$(document).on('click', '.movBTN', function() {
  limit = 10;
  currentMovie = $(this).text();

  var queryURL =
    '//api.giphy.com/v1/gifs/search?q=' +
    $(this).text() +
    '&api_key=uQw4p1YS9v3frf9OYHMePByxlpwxKCfw&limit=' +
    limit;

  var queryURL2 =
    'https://www.omdbapi.com/?t=' + $(this).text() + '&apikey=trilogy';

  $.when($.get(queryURL), $.get(queryURL2)).then(function(
    response1,
    response2
  ) {
    console.log(response1);
    $('.tenMoreDiv').css('display', 'flex');
    $('.related').css('display', 'block');
    $('.gifContainer').remove();
    response1[0].data.forEach(function(mov, idx) {
      $('#movies').append('<div class="image' + (idx + 1) + '" />');
      $('.image' + (idx + 1) + '').addClass('gifContainer');
      var gifIMG = $('<img>').attr({
        src: mov.images.original_still.url,
        'data-still': mov.images.original_still.url,
        'data-animate': mov.images.original.url,
        'data-state': 'still'
      });
      var rating = $('<p>Rating: ' + mov.rating.toUpperCase() + '</p>');
      $('.image' + (idx + 1) + '').append(gifIMG);
      $('.image' + (idx + 1) + '').append(rating);
    });
    console.log(response2);
    $('.movieInfo').css('display', 'flex');
    $('.infoImg').attr('src', response2[0].Poster);
    $('.title').text(response2[0].Title);
    $('.rating').text('Rated: ' + response2[0].Rated);
    $('.release').text('Release Date: ' + response2[0].Released);
    $('.plot').text(response2[0].Plot);
  });
});

//Ten More
$(document).on('click', '.tenMore', function() {
  limit += 10;
  var queryURL =
    '//api.giphy.com/v1/gifs/search?q=' +
    currentMovie +
    '&api_key=uQw4p1YS9v3frf9OYHMePByxlpwxKCfw&limit=' +
    limit;

  console.log(queryURL);

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
        src: mov.images.original_still.url,
        'data-still': mov.images.original_still.url,
        'data-animate': mov.images.original.url,
        'data-state': 'still'
      });
      var rating = $('<p>Rating: ' + mov.rating.toUpperCase() + '</p>');
      $('.image' + (idx + 1) + '').append(gifIMG);
      $('.image' + (idx + 1) + '').append(rating);
    });
  });
});

//Pausing Gifs
$(document).on('click', 'img', function() {
  var state = $(this).attr('data-state');
  console.log(this);
  if (state === 'animate') {
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  } else {
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  }
});

//Adding movie to list
$('#addMovie').on('click', function(e) {
  e.preventDefault();
  let input = true;
  let value = $('#movie-input')
    .val()
    .trim();
  topics.forEach(function(topic) {
    if (topic === value) {
      input = false;
      return alert("You've already added " + value);
    }
  });
  if (value === '') {
    return alert('Please Enter a Movie Title');
  } else if (input) {
    input = true;
    topics = [];
    topics.push(value.trim());
    $('#movie-input').val('');
    generateButtons();
  }
});
