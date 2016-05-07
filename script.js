window.onload = function() {

	// Video
	var videocontainer = document.getElementById("video-container");
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("volume-on-off");
	var fullScreenButton = document.getElementById("fullscreen-icon");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			video.play();
			$("#play-pause").attr("src","images/pause-icon.png");
			$(".control").removeClass("controlplaying")
			$(".bar").removeClass("barplaying")
			$(".control").addClass("controlpaused")
			$(".bar").addClass("barpaused")
		} else {
			video.pause();
			$("#play-pause").attr("src","images/play-icon.png");
			$(".control").addClass("controlplaying")
			$(".bar").addClass("barplaying")
			$(".control").removeClass("controlpaused")
			$(".bar").removeClass("barpaused")
		}
	});


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
			$("#volume-on-off").attr("src","images/volume-off-icon.png");
		} else {
			video.muted = false;
			$("#volume-on-off").attr("src","images/volume-on-icon.png");
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});


	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;
		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
}
