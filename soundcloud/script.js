SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c'
});

var loopcount;
var firsttrack;
var pagenumber;
var tempresults;

$(document).ready(function() {

  $('.music-genre').submit( function(event){
    // zero out results if previous search has run
    /*$('#results').html('');*/
    $('#results').html('');
    // get the value of the tags the user submitted
    var genre = $(this).find("input[name='tags']").val();
    getmusicgenre(genre);
  });

  /*$("button").on("click",function() {
      alert($("#inputvalue1").val());
      SC.oEmbed($("#inputvalue1").val(),document.getElementById('player'));
  });*/

  $(this).find("div").on("click","div",function() 
  {
     var test = $(this).find("input[type='text']").val();
     SC.oEmbed(test + '&auto_play=true',document.getElementById('player'));
    });

});

var getmusicgenre = function(genre) {
  
  loopcount = 0;
  firsttrack = "";
  pagenumber = 1;
  tempresults = 0;

  getTracks(genre);

};

var getTracks = function(genre) {
  SC.get('/tracks', { genres: genre, limit: 400 }, function(tracks) 
    {
       $(tracks).each(function(index, track) 
        {
          loopcount = loopcount + 1;
          if (loopcount === 1) 
          {
            firsttrack = track.permalink_url;
          } 
          else {}
          var artwork;
          artwork = "images/soundcloudlogo.jpg"
          if (track.artwork_url === null) {} else {artwork = track.artwork_url};
          $('#results').append($('<div></div>').html("<img src=" + artwork + ">" + loopcount + ".) " + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
        SC.oEmbed(firsttrack + '&auto_play=true',document.getElementById('player'));
    });
};