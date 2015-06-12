  document.addEventListener("DOMContentLoaded", function(event) {

	var video = document.querySelector("#videoElement");
	 
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
	 
	if (navigator.getUserMedia) {      
	    navigator.getUserMedia({video: true}, handleVideo, videoError);
	}
	 
	function handleVideo(stream) {
	    video.src = window.URL.createObjectURL(stream);
	    console.log(video.src);
	}
	 
	function videoError(e) {
		console.log(e);
	    // do something
	} 

});
