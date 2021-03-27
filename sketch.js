var bool=true
var v=5;
var moves=0;
function setup() {
  createCanvas(1000,500);
  ground=createSprite(500,480,1000,20);
  ground.visible=false;
  ring1= createSprite(100, 300, 100, 50);
  ring2= createSprite(100, 350, 150, 50);
  ring3= createSprite(100, 400, 250, 50);

  ring1.shapeColor="gold"
  ring2.shapeColor="gold"
  ring3.shapeColor="gold"

  ring1.velocityY=v;
  ring2.velocityY=v;
  ring3.velocityY=v;
}

function draw() {
  background("red");  
  // text(mouseX+","+mouseY, 600,100)
  textSize(20)
  // text("Moves: "+moves, 600,50)
  if(ring2.y===100 || ring3.y===100 ){
    fill("white")
    text("cant place larger on smaller",400,40)
  }
  if(ring1.x===750 && ring2.x===750 && ring3.x===750 ){
    textSize(40);
    text("You Won ",500,200)
  }
  
  drawSprites();
  drawLines();
  ringCollide();
  ringMoved(ring1);
  ringMoved(ring2);
  ringMoved(ring3); 
}
function drawLines(){
  strokeWeight(5)
  stroke("blue")
  line(100,50,100,500);
  strokeWeight(5)
  stroke("blue")
  line (400,50,400,500);

  strokeWeight(5)
  stroke("blue")
  line (750,50,750,500);
}
function ringTouching(){
  if(ring1.isTouching(ring2)){
   if(ring1.y>ring2.y){
     console.log("ring1 down")        
    ring2.y=100;
    ring2.velocityY=0;   
    
   }else {    
  
    ring1.collide(ring2);      
   }
  }else if(ring2.isTouching(ring3)){
    if(ring2.y>ring3.y){
      console.log("ring2 down")
     ring3.y=100;
     ring3.velocityY=0;
    
    }else {
      
      ring2.collide(ring3);
    }
  }else if(ring1.isTouching(ring3)){
    if(ring1.y>ring3.y){
      console.log("ring1 down")
     ring3.y=100;
     ring3.velocityY=0;
     
    }else{
     
      ring1.collide(ring3);
    }
  }
}





function ringposition(ring){ 
 
    if(ring.x>50&&ring.x<200){
      ring.x=100;
    }else if(ring.x>200&&ring.x<500){
      ring.x=400;
    }else if(ring.x>500&&ring.x<900){
      ring.x=750;
    }

  
 
}
function ringMoved(ring){
  if(mousePressedOver(ring)){
     ring.x=mouseX
     ring.y=mouseY
     ring.velocityY=v;     
  }else{    
    ringposition(ring)
    ringTouching();
  }
}



function ringCollide(){

  ring1.collide(ground);
  ring2.collide(ground);
  ring3.collide(ground);
}
