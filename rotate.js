//this is the code for "slide" and "drippingface" .mov

var draw_position_x = 0;
var draw_position_x1 = 300;
var draw_position_y;
var cur = 0;
var cam;
var cam1;
var cam2;
var glitchy;


function setup() {
  devicePixelScaling(false);
  var c = createCanvas(windowWidth, windowHeight);
  c.translate(100, 100);
  imageMode(CENTER);
  background(0);
  cam = createCapture(VIDEO);
  cam1 = createCapture(VIDEO);
  cam2 = createCapture(VIDEO);

  var j = pixelDensity;
  glitchy = (cam.width * j) * (cam.height / 2 * j);
  // var glitchy1 = 4 * (cam1.width * j) * (cam1.height / 2 * j);
  // var glitchy2 = 2 * (cam2.height * j) * (cam2.width / 2 * j);
  cam.loadPixels();
  cam1.loadPixels();
  cam2.loadPixels();
  loadPixels();

  var draw_position_y = windowHeight;
  for (var i = 0; i < cam1; i++) {
    pixels[i + cam1] = pixels[i];
  }

  for (var i2 = 0; i2 < cam2; i2++) {
    pixels[i2 + cam2] = pixels[i2];
  }

  stroke(255, 255, 0);
  frameRate(300);
}


function draw() {
  var draw_position_x1 = windowWidth;
  if (cam) {
    cam.loadPixels();
    for (var y = 0; y < windowHeight; y++) {
      var r = rotate(cam2.pixels[4 * (y * cam.width + cam.width / 2)]);
      var g = cam1.pixels[4 * (y * cam.width + cam.width / 2) + 1];
      var b = cam.pixels[4 * (y * cam.width / 3 + cam.width / 5) + 2];
      var a = cam2.pixels[4 * (y * cam.width / 2 + cam.width / 2) + 3];
      // var d = cam2.pixels[2 * (y * cam.width + cam2.width / 2) + 4];
      // var c = cam1.pixels[2 * (y * cam.width / 2 + cam2.height / 2) + 1];
      // var q = cam1.pixels[3 * (y * cam.width + cam.width / 2) + 1];
      // var w = cam.pixels[(y * cam.width + cam.width / 2) + 2];
      set(draw_position_x, y, [r, g, b, a]);
    }
  }
  updatePixels();
  draw_position_x++;
  if (draw_position_x >= windowWidth) {
    draw_position_x = windowWidth / 2;
  }

  if (cam1) {
    cam1.loadPixels();
    for (var y1 = 0; y1 < windowHeight; y1++) {
      var r1 = cam1.pixels[4 * (y1 * cam1.width + cam1.width / 2)];
      var g1 = cam1.pixels[4 * (y1 * cam1.width + cam1.width / 2) + 1];
      var b1 = cam.pixels[4.5 * (draw_position_x1 * cam1.height / 3.6 + cam1.width / 5) + 2];
      var a1 = cam.pixels[4 * (y1 * cam1.width / 2 + cam1.width / 2) + 6];
      // var d1 = cam.pixels[9 * (draw_position_x1 * cam1.width / 3 + cam1.width / 5) + 2];
      // var c1 = cam.pixels[3 * (draw_position_x1 * cam1.width / 2 + cam1.height / 9) + 10];
      set(draw_position_y, y1, [r1, g1, b1, a1]);
    }
    updatePixels();
    // loop back around
    draw_position_x1++;
    if (draw_position_x1 >= windowWidth) {
      draw_position_x1 = windowWidth;
    }

    if (cam2) {
      cam2.loadPixels();
      for (var draw_position_y = windowHeight; draw_position_y < 0; draw_position_y++) {
        var r2 = cam.pixels[4 * (draw_position_y * cam2.width + cam2.width / 2)];
        var g2 = cam.pixels[4 * (draw_position_y * cam2.width + cam2.width / 2) + 1];
        var b2 = cam1.pixels[4 * (draw_position_y * cam2.height / 3.6 + cam2.width / 5) + 2];
        var a2 = cam2.pixels[4 * (x2 * cam2.width / 2 + cam2.width / 2) + 3];
        // var d2 = cam2.pixels[4 * (draw_position_y * cam2.width / 3 + cam2.width / 5) + 2];
        // var c2 = cam2.pixels[3 * (draw_position_y * cam2.width / 2 + cam2.height / 9) + 10];
        set(x2, draw_position_y, [r2, g2, b2, a2]);
      }
      updatePixels();
      // loop back around
      draw_position_y--;
      if (draw_position_y >= windowHeight) {
        draw_position_y = windowHeight;
      }
    }
  }
}