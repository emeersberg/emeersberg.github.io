SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c'
});

var loopcount;

$(document).ready(function() {

  $('.music-genre').submit( function(event){
    // zero out results if previous search has run
    $('.results').html('');
    // get the value of the tags the user submitted
    var genre = $(this).find("input[name='tags']").val();
    getmusicgenre(genre);
  });

  /*$("button").on("click",function() {
      alert($("#inputvalue1").val());
      SC.oEmbed($("#inputvalue1").val(),document.getElementById('player'));
  });*/

  $(this).find("div").on("click","div",function() {
     var test = $(this).find("input[type='text']").val();
     SC.oEmbed(test,document.getElementById('player'));
    });

});

var getmusicgenre = function(genre) {
  
  loopcount = 0;
  var firsttrack = "";

  SC.get('/tracks', { genres: genre, limit: 200 }, function(tracks) {
      $(tracks).each(function(index, track) {
        loopcount = loopcount + 1;
        if (loopcount === 1) {firsttrack = track.permalink_url} else {};
        /*SC.oEmbed(track.permalink_url, document.getElementById('player'));*/
        /*var myPara = document.createElement("div");*/
        $('#results').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + ' - ' + track.genre + "<input type='text' value=" + track.permalink_url + ">"));
        /*$('#player').append($('<div></div>').html('<iframe src="https://w.soundcloud.com/player/?visual=true&amp;url=' + track.permalink_url + '&amp;show_artwork=true"></iframe>'));*/
        /*myPara.setAttribute("id", "oembed" + loopcount);*/
        /*SC.oEmbed(track.permalink_url, document.getElementById("oembed" + loopcount));*/
      });
      SC.oEmbed(firsttrack + '&auto_play=true',document.getElementById('player'));
      alert(loopcount);
    });

  

  $("#inputtext").html('');

}