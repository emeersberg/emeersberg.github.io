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
    $('#page1').html('');
    $('#page2').html('');
    $('#page3').html('');
    $('#page4').html('');
    $('#page5').html('');
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

  getTracksTest(genre);

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

  getTracksTest2(genre);
  
};

var appendNewPage = function() {
  $('#results').append($('<div id="page' + pagenumber + '"' + '></div>').html(''));
};

var getTracksTest2 = function(genre) {

hidePages();

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
          $('#page1').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
    });

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
          $('#page2').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
    });

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
          $('#page3').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
    });

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
          $('#page4').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
    });

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
          $('#page5').append($('<div></div>').html("<img src=" + track.artwork_url + ">" + track.title + "<input type='text' value=" + track.permalink_url + ">"));
        });
       alert(loopcount);
       if (loopcount >=801) {
          $('#page1').show();
          $('#page2').show();
          $('#page3').show();
          $('#page4').show();
          $('#page5').show();
       } else if (>=601) {
          $('#page1').show();
          $('#page2').show();
          $('#page3').show();
          $('#page4').show();
       } else if (>=401) {
          $('#page1').show();
          $('#page2').show();
          $('#page3').show();
       } else if (>=201) {
          $('#page1').show();
          $('#page2').show();
       } else {
          $('#page1').show();
       };
    });

}

var hidePages = function() {
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
};


