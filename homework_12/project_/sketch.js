var x = 100;
var y = 100;
var a = 130;
var b = 140;
var c = 450;
var d = 150;

function setup()
{
    createCanvas(800,600);
}
function draw() 
{
  background(123,28,38);
  circle(x,y,50);
  square(a,b,d);
  square(c,b,d);
}
function keyPressed() 
{
  if (key == 'd') 
  {
    x+=15;
  } 
  else if (key == 'a') 
  {
    x-=15;
  }
  else if (key == 'w') 
  {
    y+=15;
  }
  else if (key == 's') 
  {
    y-=15;
  }
}
function isHit()
{
  if(x == a || x == c)
    text('OUCH!', 10, 30);
  else if(y == b)
    text('RATS!', 10, 30);
}
function switchSides()
{
  if(x == 800)
    x = 10
  else if( y == 600)
    y = 10   
}
function mouseClicked() 
{  
  mousex = mouseX;
  mousey = mouseY;
  if (mouseX == True)
    square(500,500,75);
  if (mouseY == True)
    circle(50, 150, 44); 
}
function isExit()
{
  if (x == 450 && y == 350)
    text('YOU WIN!', 10, 60);
}