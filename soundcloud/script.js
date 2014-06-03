SC.initialize({
  client_id: 'e9cc713d5d9719ed8b06e42beff3c38c'
});

$(document).ready(function() {
    SC.get("/tracks/293",function(track) {
        SC.oEmbed(track.permalink_url, document.getElementById('player'));
        })

    $('#startRecording').on("click",function(){
        $('#startRecording').hide();
        $('#stopRecording').show();
        SC.record({
            progress: function(ms) {updateTimer(ms)}
        });
    });
    $('#stopRecording').on("click",function(){
        $('#startRecording').show();
        $('#stopRecording').hide();
        $('#upload').show();
        SC.recordStop();
    });
    $('#playBack a').on("click",function(){
        updateTimer(0);
        SC.recordPlay({
            progress: function(ms) {updateTimer(ms)}
        });
    });
    $('#upload a').on("click",function() {
        SC.connect({
            connected: function() {
                SC.recordUpload({
                    track: {
                        title: "My Codecademy recording",
                        sharing: "private"
                    }
                })    
            }
        });
    });
});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}
