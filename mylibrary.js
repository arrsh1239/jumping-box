function bounceOff(){

    if (box.x - blueBlock.x < box.width/2 + blueBlock.width/2
      && box.x - blueBlock.x < box.width/2 + blueBlock.width/2) {
    blueBlock.velocityX = blueBlock.velocityX * (0);
    box.velocityX = box.velocityX * (1
      );
  }
  if (box.y - blueBlock.y < blueBlock.height/2 + box.height/2
    && blueBlock.y - box.y < blueBlock.height/2 + box.height/2){
    box.velocityY = box.velocityY * (-1);
    blueBlock.velocityY = blueBlock.velocityY * (0);
  }

  if (box.x - purpleBlock.x < box.width/2 + purpleBlock.width/2
      && box.x - purpleBlock.x < box.width/2 + purpleBlock.width/2) {
    purpleBlock.velocityX = purpleBlock.velocityX * (0);
    box.velocityX = box.velocityX * (-1);
  }
  if (box.y - purpleBlock.y < purpleBlock.height/2 + box.height/2
    && purpleBlock.y - box.y < purpleBlock.height/2 + box.height/2){
    box.velocityY = box.velocityY * (-1);
    purpleBlock.velocityY = purpleBlock.velocityY * (0);
  }
    if (box.x - greenBlock.x < box.width/2 + greenBlock.width/2
      && box.x - greenBlock.x < box.width/2 + greenBlock.width/2) {
    greenBlock.velocityX = greenBlock.velocityX * (0);
    box.velocityX = box.velocityX * (-1);
  }
  if (box.y - greenBlock.y < greenBlock.height/2 + box.height/2
    && greenBlock.y - box.y < greenBlock.height/2 + box.height/2){
    box.velocityY = box.velocityY * (-1);
    greenBlock.velocityY = greenBlock.velocityY * (0);
  }
  
}
function edgesBounce(){
  if (box.x - topedge.x < box.width/2 + topEdge.width/2
    && box.x - topEdge.x < box.width/2 + topEdge.width/2) {
  topEdge.velocityX = topEdge.velocityX * (0);
  box.velocityX = box.velocityX * (1);
}
if (box.y - topEdge.y < topEdge.height/2 + box.height/2
  && topEdge.y - box.y < topEdge.height/2 + box.height/2){
  box.velocityY = box.velocityY * (1);
  topEdge.velocityY = topEdge.velocityY * (0);
}
if (box.x - rightEdge.x < box.width/2 + rightEdge.width/2
  && box.x - rightEdge.x < box.width/2 + rightEdge.width/2) {
rightEdge.velocityX = rightEdge.velocityX * (0);
box.velocityX = box.velocityX * (-1);
}
if (box.y - rightEdge.y < rightEdge.height/2 + box.height/2
&& rightEdge.y - box.y < rightEdge.height/2 + box.height/2){
box.velocityY = box.velocityY * (-1);
rightEdge.velocityY = rightEdge.velocityY * (0);
}

if (box.x - leftEdge.x < box.width/2 + leftEdge.width/2
  && box.x - leftEdge.x < box.width/2 + leftEdge.width/2) {
leftEdge.velocityX = leftEdge.velocityX * (0);
box.velocityX = box.velocityX * (-1);
}
if (box.y - leftEdge.y < leftEdge.height/2 + box.height/2
&& leftEdge.y - box.y < leftEdge.height/2 + box.height/2){
box.velocityY = box.velocityY * (-1);
leftEdge.velocityY = leftEdge.velocityY * (0);
}

}