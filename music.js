var songs = [];

var songList = document.getElementById("music_project");

songs[songs.length] = "Legs > by Z*Z Top on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Idioteque > by Radiohead on the album Kid A");
songs.push("Ramble On > by Led Zeppelin on the album II");


for (var i = 0; i < songs.length; i++) {
	var song = songs[i];
	song = song.replace(/[&\/\\#,+(!)$~%.'":&*@?<{}]/g, '');
	song = song.replace(">", "-");
	songList.innerHTML += song + "<br>";

}

