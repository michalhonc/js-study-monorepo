export function stopVideoAndAudio(stream) {
	stream.getTracks().forEach(function(track) {
		if (track.readyState == 'live') {
			track.stop();
		}
	});
}

export function stopVideoOnly(stream) {
	stream.getTracks().forEach(function(track) {
		if (track.readyState == 'live' && track.kind === 'video') {
			track.stop();
		}
	});
}

export function stopAudioOnly(stream) {
	stream.getTracks().forEach(function(track) {
		if (track.readyState == 'live' && track.kind === 'audio') {
			track.stop();
		}
	});
}
