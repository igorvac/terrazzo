function granilite(x, y, siz) {
  let pos = [x, y];
  const orign = pos[0];
  let poly = [];
  let colors = ["#BC7B45", "#D9B576", "#638692"];
  noFill();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      //console.log(`${pos[0]} x ${pos[1]}`);
      push();
      translate(pos[0], pos[1]);
      //stroke(30);
      //rect(0, 0, siz, siz);
      //stroke(255);
      let d = [random(0, siz), random(0, siz)];
      //point(d[0], d[1]);
      poly.push(d[0] + pos[0]);
      poly.push(d[1] + pos[1]);
      pos[0] += siz;
      pop();
    }
    pos[0] = orign;
    pos[1] += siz;
  }
  pos = [0, 0];
  fill(colors[parseInt(random(0, 3))]);
  strokeWeight(4);
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
  let posX = [0];
  let posY = [0];

  for (let i = 0; i < 200; i++) {
    granilite(random(0, width), random(0, height), random(2, 6));
  }

  noLoop();
}
