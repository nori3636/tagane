<script lang="ts">
	import { goto } from '$app/navigation';
	import jsQR from 'jsqr';
	import { onMount } from 'svelte';

	onMount(() => {
		const video = document.createElement('video');
		const canvas = <HTMLCanvasElement>document.getElementById('canvas');
		const ctx = canvas.getContext('2d');
		const msg = document.getElementById('msg');
		const userMedia = { video: { facingMode: 'environment' } };

		navigator.mediaDevices.getUserMedia(userMedia).then((stream) => {
			video.srcObject = stream;
			video.setAttribute('playsinline', '');
			video.play();
			startTick();
		});

		function startTick() {
			msg.innerText = 'Loading video...';
			if (video.readyState === video.HAVE_ENOUGH_DATA) {
				canvas.height = video.videoHeight;
				canvas.width = video.videoWidth;
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
				const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
				const code = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });
				if (code) {
					drawRect(code.location); // Rect
					msg.innerText = code.data; // Data
					if (code.data.startsWith('http://localhost:3000/')) {
						goto(code.data);
					}
				} else {
					msg.innerText = 'Detecting QR-Code...';
				}
			}
			setTimeout(startTick, 100);
		}

		function drawRect(location) {
			drawLine(location.topLeftCorner, location.topRightCorner);
			drawLine(location.topRightCorner, location.bottomRightCorner);
			drawLine(location.bottomRightCorner, location.bottomLeftCorner);
			drawLine(location.bottomLeftCorner, location.topLeftCorner);
		}

		function drawLine(begin, end) {
			ctx.lineWidth = 4;
			ctx.strokeStyle = '#FF3B58';
			ctx.beginPath();
			ctx.moveTo(begin.x, begin.y);
			ctx.lineTo(end.x, end.y);
			ctx.stroke();
		}
	});
</script>

<slot>
	<div id="wrapper">
		<div id="msg">Unable to access video stream.</div>
		<canvas id="canvas" />
	</div>
</slot>
