$.icndb.getCategories(function(cat) {
    for (var ii = 0; ii < cat.length; ii++) {
        $(".category").append('<option value="' + cat[ii] + '">' + cat[ii] + '</option>');
    }
})

$('.button').on('click', function() {
  $.icndb.getRandomJoke({
      limitTo: $('.category').val(),
      success: function(joke) {
          $(".joke").html(joke.joke);
      }
  });
});
