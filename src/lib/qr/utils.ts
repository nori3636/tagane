import type { QRCode } from 'jsqr';
export type Point = { x: number; y: number };
export const drawRect = (ctx: CanvasRenderingContext2D, location: QRCode['location']): void => {
	drawLine(ctx, location.topLeftCorner, location.topRightCorner);
	drawLine(ctx, location.topRightCorner, location.bottomRightCorner);
	drawLine(ctx, location.bottomRightCorner, location.bottomLeftCorner);
	drawLine(ctx, location.bottomLeftCorner, location.topLeftCorner);
};

export const drawLine = (ctx: CanvasRenderingContext2D, begin: Point, end: Point): void => {
	ctx.save();
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#FF3B58';
	ctx.beginPath();
	ctx.moveTo(begin.x, begin.y);
	ctx.lineTo(end.x, end.y);
	ctx.stroke();
	ctx.restore();
};

export const copyVideoFrameToCanvas = (video: HTMLVideoElement, canvas: HTMLCanvasElement): boolean => {
	if (video.readyState !== video.HAVE_ENOUGH_DATA) return false;
	
	const ctx = canvas.getContext('2d');
	if (!ctx) throw new Error('Browser has no support for canvas 2d context');

	ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	return true;
}
