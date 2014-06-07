SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c'
});

var loopcount;
var firsttrack;
var pagenumber;

$(document).ready(function() {

  $('.music-genre').submit( function(event){
    // zero out results if previous search has run
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

  getTracks(genre);

};

var getTracks = function(genre) {
  SC.get('/tracks', { genres: genre, limit: 200 }, function(tracks) 
    {
       $(tracks).each(function(index, track) 
        {
          loopcount = loopcount + 1;
          if (loopcount === 1) 
          {
            firsttrack = track.permalink_url;
          } 
          else {}
          $('#results').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
        SC.oEmbed(firsttrack + '&auto_play=true',document.getElementById('player'));
    });
};

var getTracksTest = function(genre) {

  $('#results').append($('<div id="page' + pagenumber + '"' + '></div>').html(''));

  SC.get('/tracks', { genres: genre, limit: 200 }, function(tracks) 
    {
       $(tracks).each(function(index, track) 
        {
          loopcount = loopcount + 1;
          if (loopcount === 1) 
          {
            firsttrack = track.permalink_url;
          } 
          else {}
          if (loopcount <= 50) 
          {
            pagenumber = pagenumber + 1;
          } 
          else if (loopcount <= 100) 
          {
            pagenumber = pagenumber + 1;
          }
          else if (loopcount <= 150) 
          {
            pagenumber = pagenumber + 1;
          }
          else 
          {
            pagenumber = pagenumber + 1;
          }
          $('#page' + pagenumber).append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
       SC.oEmbed(firsttrack + '&auto_play=true',document.getElementById('player'));
       alert(pagenumber);
       alert(loopcount);
    });
};


