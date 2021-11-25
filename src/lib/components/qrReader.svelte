<script lang="ts">
	import { goto } from '$app/navigation';
	import { copyVideoFrameToCanvas, drawRect } from '$lib/qr';
	import jsQR from 'jsqr';
	import { onMount } from 'svelte';

	let video: HTMLVideoElement | null = null;
	let canvas: HTMLCanvasElement | null = null;
	let rafId: number | undefined;

	const detectQr = () => {
		if (video === null) throw new Error('Video element has not mounted.');
		if (canvas === null) throw new Error('Canvas element has not mounted.');

		const ctx = canvas.getContext('2d');
		if (!ctx) throw new Error('Browser has no support for canvas 2d context');

		if (!copyVideoFrameToCanvas(video, canvas)) {
			rafId = window.requestAnimationFrame(detectQr);
			return;
		}

		const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const qr = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });

		if (qr === null) {
			rafId = window.requestAnimationFrame(detectQr);
			return;
		}

		drawRect(ctx, qr.location); // Rect
		if (qr.data.startsWith(location.origin)) goto(qr.data);
	};

	onMount(() => {
		let mediaStream: MediaStream | undefined;
		navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then((stream) => {
			if (video === null) throw new Error('Video element has not mounted.');
			mediaStream = stream;
			video.srcObject = stream;
			video.play();
			rafId = window.requestAnimationFrame(detectQr);
		});

		return () => {
			mediaStream?.getTracks()?.forEach((track) => track.stop());
			if (rafId !== undefined) window.cancelAnimationFrame(rafId);
		};
	});
</script>

<div class="center">
	<video bind:this={video} playsinline autoplay>
		<track kind="captions" />
	</video>
	<canvas bind:this={canvas} height="250" />
</div>

<style>
	video {
		display: none;
	}
</style>
