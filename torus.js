var cam;
var theta = 0;
var donut = torus(100,60);

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);

  cam = createCapture(VIDEO);
  cam.hide();

}

function draw(){
  background(250);
   // translate(-220,0,0);
  push();
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
    //pass image as texture
    texture(cam);
    torus(100,60);
  pop();
    translate(440,0,0);
  theta += 0.05;
}