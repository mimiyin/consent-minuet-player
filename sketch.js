
let clips = {
  1 : null,
  2 : null,
  3 : null,
  4 : null,
  12 : null,
  13 : null,
  24 : null,
  34 : null,
  1234 : null,
}

let isLoop;

function preload() {
  for(let c in clips) {
    clips[c] = loadSound(c + '.wav');
  }
}

function stopAll() {
  for(let c in clips) {
    clips[c].stop();
  }
}

function setup() {
  noCanvas();

  select('#stop').mousePressed(stopAll);

  isLoop = select('#loop').checked();
  console.log("LOOPING?", isLoop);

  select('#loop').changed(function(){
      isLoop = this.checked();
      console.log("LOOP?", isLoop);
      for(let c in clips) {
        clips[c].setLoop(isLoop);
      }
  });

  for(let c in clips) {
    let button = createButton(c).mousePressed(function(){
      // Stop everything
      stopAll();

      if(isLoop) clips[this.html()].loop();
      else clips[this.html()].play();
    });

    button.id('clip-' + c);

    if(c == '4') {
      createDiv();
    }
  }


}

function draw() {
  background(220);
}
