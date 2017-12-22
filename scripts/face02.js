var draw_position_x = 0;
var draw_position_y;

var glitchy;

var cam;

function setup() {
	devicePixelScaling(false);
	var windowHeight = 1400;
	var c = createCanvas(windowWidth, windowHeight);
	c.translate(100, 100);
	imageMode(CENTER);
	background(0);
	cam = createCapture(VIDEO);

	var j = pixelDensity;
	glitchy = (cam.width * j) * (cam.height * j);

	cam.loadPixels();
	loadPixels();

	var draw_position_y = windowHeight * .25;
	for (var i = 0; i < cam; i++) {
		pixels[i + cam] = pixels[i];
	}

	stroke(25, 195, 0);
	frameRate(300);
}

function draw() {
	var draw_position_x1 = windowWidth;
	if (cam) {
		cam.loadPixels();
		for (var y = 0; y < windowHeight; y++) {
			var r = cam.pixels[windowHeight];
			var g = cam.pixels[4 * (y * cam.width + cam.width / 2) + 1];
			var b = cam.pixels[4 * (y * cam.width / 3 + cam.width / 5) + 2];
			var a = cam.pixels[4 * (y * cam.width / 2 + cam.width / 2) + 3];
			set(draw_position_x, y, [r, g, b, a]);
		}
	}
	updatePixels();
	draw_position_x++;
	if (draw_position_x >= windowWidth) {
		draw_position_x = windowWidth--;
	}

	if (draw_position_x >= 0) {
		draw_position_x = windowWidth++;
	}
}

