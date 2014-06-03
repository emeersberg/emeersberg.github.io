SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c'
});

$(document).ready(function() {


    SC.get("/tracks/293",function(track) {
        SC.oEmbed(track.permalink_url, document.getElementById('player'));
        })

    SC.get('/tracks', { genres: 'industrial, rock' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });

    
});

