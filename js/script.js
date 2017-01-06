$.icndb.getRandomJoke({
    success: function(joke) {
        $(".joke").html(joke.joke);
    }
})
