$(document).ready(function() {
	
	
		
	


	$.ajax({
		url:"./moresongs.json"
	}).done(function(songList){
		console.log(songList.songs);

	for (var i = 0; i < songList.songs.length; i++) {
		var currentSong = songList.songs[i];
		$("#listOfSongs").append("<h1>" + currentSong.title + "</h1>");
		$("#listOfSongs").append("<div>Performed by " + currentSong.artist +"</div>");
		$("#listOfSongs").append("<div>On the album " + currentSong.album + "</div>");
		
	};

	

	

});

});