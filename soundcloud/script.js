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


    //$(this).find("a").on("click",function() {
    //  alert($(this).find("#results").nearest("input[type='text']").val());
      //SC.oEmbed($(this).find("#results").nearest("input[type='text']").val(),document.getElementById('player'));
    //});

    //SC.get("/tracks/293",function(track) {
    //    SC.oEmbed(track.permalink_url, document.getElementById('player'));
    //    })

});

var getmusicgenre = function(genre) {
  
  loopcount = 0;

  SC.get('/tracks', { genres: genre }, function(tracks) {
      $(tracks).each(function(index, track) {
        loopcount = loopcount + 1;
        /*SC.oEmbed(track.permalink_url, document.getElementById('player'));*/
        /*var myPara = document.createElement("div");*/
        $('#results').append($('<div></div>').html(track.title + ' - ' + track.genre + "<input type='text' value=" + track.permalink_url + ">"));
        $('#player').append($('<div></div>').html("<iframe></iframe>"));
        /*myPara.setAttribute("id", "oembed" + loopcount);*/
        /*SC.oEmbed(track.permalink_url, document.getElementById("oembed" + loopcount));*/
      });
    });

  $("#inputtext").html('');

}