function granilite(quart) {
  let pos = [0, 0];
  let poly = [];
  let colors = ["#BC7B46", "#D9B576", "#638692"];
  noFill();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      console.log(`${pos[0]} x ${pos[1]}`);
      push();
      translate(pos[0], pos[1]);
      stroke(30);
      //rect(0, 0, quart, quart);
      stroke(255);
      let d = [random(0, quart), random(0, quart)];
      point(d[0], d[1]);
      poly.push(d[0] + pos[0]);
      poly.push(d[1] + pos[1]);
      pos[0] += quart;
      pop();
    }
    pos[0] = 0;
    pos[1] += quart;
  }
  pos = [0, 0];
  fill(colors[parseInt(random(0, 3))]);
  //strokeWeight(4);
  //stroke(255,0,0);
  //point(poly[2], poly[3]);
  //point(poly[4], poly[5]);
  //point(poly[14], poly[15]);
  //point(poly[22], poly[23]);
  //point(poly[28], poly[29]);
  //point(poly[26], poly[27]);
  //point(poly[16], poly[17]);
  //point(poly[8], poly[9]);
  //point(poly[2], poly[3]);
  noStroke();

  beginShape();
  vertex(poly[2], poly[3]);
  vertex(poly[4], poly[5]);
  vertex(poly[14], poly[15]);
  vertex(poly[22], poly[23]);
  vertex(poly[28], poly[29]);
  vertex(poly[26], poly[27]);
  vertex(poly[16], poly[17]);
  vertex(poly[8], poly[9]);
  vertex(poly[2], poly[3]);
  endShape();
}

function setup() {
  createCanvas(500, 500);
  background("#FFF5E4");
}

function draw() {
  granilite(30);
  noLoop();
}
