SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c',
  redirect_uri: 'http://emeersberg.github.io/soundcloud/'
});

$(document).ready(function() {
    SC.get("/tracks/293",function(track) {
        SC.oEmbed(track.permalink_url, document.getElementById('player'));
        })
});