var video = document.getElementById("video");
var playButton = document.getElementById("play-pause");
var muteButton = document.getElementById("volume-on-off");
var fullScreenButton = document.getElementById("fullscreen-icon");
var volumeBar = document.getElementById("volume-bar");
var progressBar = document.getElementById("progress-bar");
var curtimetext = document.getElementById("current");
var durtimetext = document.getElementById("duration");

playButton.addEventListener("click", function() {
	if (video.paused === true) {
		video.play();
		$("#play-pause").attr("src","images/pause-icon.png");
		$(".control").removeClass("controlplaying");
		$(".bar").removeClass("barplaying");
		$(".control").addClass("controlpaused");
		$(".bar").addClass("barpaused");
	} else {
		video.pause();
		$("#play-pause").attr("src","images/play-icon.png");
		$(".control").addClass("controlplaying");
		$(".bar").addClass("barplaying");
		$(".control").removeClass("controlpaused");
		$(".bar").removeClass("barpaused");
	}
});

muteButton.addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		$("#volume-on-off").attr("src","images/volume-off-icon.png");
	} else {
		video.muted = false;
		$("#volume-on-off").attr("src","images/volume-on-icon.png");
	}
});


fullScreenButton.addEventListener("click", function() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen(); // Firefox
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen(); // Chrome and Safari
	}
});

volumeBar.addEventListener("change", function() {
	video.volume = volumeBar.value;
});


progressBar.addEventListener("click", seek);
function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    video.currentTime = percent * video.duration;
    progressBar.value = percent / 100;
}

var caption1 = timeString2ms("00:00:00,240");
var caption2 = timeString2ms("00:00:04,130");
var caption3 = timeString2ms("00:00:07,535");
var caption4 = timeString2ms("00:00:11,270");
var caption5 = timeString2ms("00:00:13,960");
var caption6 = timeString2ms("00:00:17,940");
var caption7 = timeString2ms("00:00:22,370");
var caption8 = timeString2ms("00:00:26,880");
var caption9 = timeString2ms("00:00:32,100");
var caption10 = timeString2ms("00:00:34,730");
var caption11 = timeString2ms("00:00:39,430");
var caption12 = timeString2ms("00:00:42,350");
var caption13 = timeString2ms("00:00:46,300");
var caption14 = timeString2ms("00:00:49,270");
var caption15 = timeString2ms("00:00:53,760");
var caption16 = timeString2ms("00:00:57,780");

function timeString2ms(a,b){// time(HH:MM:SS.mss) // optimized
 return a=a.split(','), // optimized
  b=a[1]*1||0, // optimized
  a=a[0].split(':'),
  (b+(a[2]?a[0]*3600+a[1]*60+a[2]*1:a[1]?a[0]*60+a[1]*1:a[0]*1)*1e3)/1000;// optimized
}

video.addEventListener("timeupdate",seektimeupdate,false);

function seektimeupdate(){
	var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
	$("#captions-container").find('span').css("color", "#444");
	if (video.currentTime >= caption1) {
		$("#caption1").css("transition", "0.5s");
		$("#caption1").css("color", "#FF9900");
	}
	if (video.currentTime >= caption2) {
		$("#caption2").css("transition", "0.5s");
		$("#caption2").css("color", "#FF9900");
	}
	if (video.currentTime >= caption3) {
		$("#caption3").css("transition", "0.5s");
		$("#caption3").css("color", "#FF9900");
	}
	if (video.currentTime >= caption4) {
		$("#caption4").css("transition", "0.5s");
		$("#caption4").css("color", "#FF9900");
	}
	if (video.currentTime >= caption5) {
		$("#caption5").css("transition", "0.5s");
		$("#caption5").css("color", "#FF9900");
	}
	if (video.currentTime >= caption6) {
		$("#caption6").css("transition", "0.5s");
		$("#caption6").css("color", "#FF9900");
	}
	if (video.currentTime >= caption7) {
		$("#caption7").css("transition", "0.5s");
		$("#caption7").css("color", "#FF9900");
	}
	if (video.currentTime >= caption8) {
		$("#caption8").css("transition", "0.5s");
		$("#caption8").css("color", "#FF9900");
	}
	if (video.currentTime >= caption9) {
		$("#caption9").css("transition", "0.5s");
		$("#caption9").css("color", "#FF9900");
	}
	if (video.currentTime >= caption10) {
		$("#caption10").css("transition", "0.5s");
		$("#caption10").css("color", "#FF9900");
	}
	if (video.currentTime >= caption11) {
		$("#caption11").css("transition", "0.5s");
		$("#caption11").css("color", "#FF9900");
	}
	if (video.currentTime >= caption12) {
		$("#caption12").css("transition", "0.5s");
		$("#caption12").css("color", "#FF9900");
	}
	if (video.currentTime >= caption13) {
		$("#caption13").css("transition", "0.5s");
		$("#caption13").css("color", "#FF9900");
	}
	if (video.currentTime >= caption14) {
		$("#caption14").css("transition", "0.5s");
		$("#caption14").css("color", "#FF9900");
	}
	if (video.currentTime >= caption15) {
		$("#caption15").css("transition", "0.5s");
		$("#caption15").css("color", "#FF9900");
	}
	if (video.currentTime >= caption16) {
		$("#caption16").css("transition", "0.5s");
		$("#caption16").css("color", "#FF9900");
	}
}

video.addEventListener('progress', function() {
	var bufferedEnd = video.buffered.end(video.buffered.length - 1);
	var duration =  video.duration;
	if (duration > 0) {
		document.getElementById('buffered-amount').style.width = ((bufferedEnd / duration)*100) + "%";
	}
});

video.addEventListener('timeupdate', function() {
	var duration =  video.duration;
	if (duration > 0) {
		document.getElementById('progress-amount').style.width = ((video.currentTime / duration)*100) + "%";
	}
});
