  $(document).ready(function() {
	function songReturn(songList){
	for (var i = 0; i < songList.songs.length; i++) {
		var currentSong = songList.songs[i];
		var showSongs = "<li>";
		showSongs += "<h2>" + currentSong.title + "</h2>";
		showSongs += "<div>Performed by " + currentSong.artist +"</div>";
		showSongs += "<div>On the album " + currentSong.album + "</div>";
		showSongs += "<button id='delete'>Remove Song</button>";
		showSongs += "</l1>";
		$("#listOfSongs").append(showSongs);	
	}
}
	
		$.ajax({
		url:"./songs.json"
	}).done(songReturn);

	$(document).on("click", "#delete", function() {
		$(this).parent().hide();
  });

	 $("#addSongs").click(function(){
        $.ajax({
            url:"./moresongs.json"
        }).done(songReturn);
    });
});