var x = 100;
var y = 100;
var a = 130;
var b = 140;
var c = 450;
var d = 150;
var myXs = [];
var myYs = [];
var myDiameters = [];

function setup()
{
    createCanvas(800,600);
  var a = 130;
  var b = 140;
  var d = 150;
  for(var i = 0; i < 10; i++)
  {
    myXs[i] = a;
    myYs[i] = b;
    myDiameters[i] = d;
    a += 50;
    b += 50;
    d += 25;
  }
}
function draw() 
{
  background(123,28,38);
  circle(x,y,50);
  square(a,b,d);
  square(c,b,d);
  for(var i = 0; i < myXs.length; i++)
  {
    circle(myXs[i],myYs[i],myDiameters[i]);
  }
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
function changeDiameter()
{
  if (diameter < 200) 
  {
    diameter += 2;
  } 
  else if (diameter >= 200) 
  {
    diameter = 25;
  }
}
function getRandomNumber(number)
{
  return Math.floor(Math.random()*number)+10;
}