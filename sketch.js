var box


function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);

  if(keyDown ("RIGHT_ARROW")){
   background = background("red");
  };

  if(keyDown ("LEFT_ARROW")){
    background = background("yellow");
  };

  if(keyDown ("UP_ARROW")){
    background = background("green");
  };

  if(keyDown ("DOWN_ARROW")){
    background = background("blue");
  };

  drawSprites();
}


