SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c'
});

$(document).ready(function() {

	$('.music-genre').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submitted
		var genre = $(this).find("input[name='tags']").val();
		getmusicgenre(genre);
	});

    //SC.get("/tracks/293",function(track) {
    //    SC.oEmbed(track.permalink_url, document.getElementById('player'));
    //    })

});

var getmusicgenre = function(genre) {
	
	SC.get('/tracks', { genres: genre }, function(tracks) {
    	$(tracks).each(function(index, track) {
    		$('#results').append($('<li></li>').html(SC.oEmbed(track.permalink_url);
      		//$('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    	});
  	});

}

