var bird;
var pipe = [];
var score = 0;
function setup() {
  createCanvas(400,500);
  jumpbutton = createButton("Jump");
  jumpbutton.mousePressed(Jump);
  jumpbutton.position(width/2-jumpbutton.width/2,height-jumpbutton.height*2);
  jumpbutton.size(80,30);
  gamestate = "alive";
  bird = new Bird();
  pipe.push(new Pipe());
}

function draw() {
    background(78,223,252);
  
  if(gamestate === "alive"){
    for(var i = pipe.length-1; i >= 0; i--){
    pipe[i].show();
    pipe[i].update();
    
    textSize(50);
    text(score,100,200);
    
    if(pipe[i].hits(bird)){
      gamestate = "gameover";
    }
    if(pipe[i].offscreen()){
      pipe.splice(i,1);
      score++;
    }
    
    
  }
  
  bird.update();
  bird.show();
  
  if(frameCount % 100 == 0){
    pipe.push(new Pipe());
  }
  

  }
  if(gamestate === "gameover"){
    Gameover();
  }
}

function keyPressed(){
  if (key == ' '){
    close();
  }
}

function Jump(){
  bird.up();
}



function Gameover(){
 background(78, 223, 252);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width / 2, height / 2);
  text("Score "+score, 200,200);
  text("Press the space key", width / 2, height*0.55);
  
}

