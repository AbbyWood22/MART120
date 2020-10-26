var movement = 13;

var x = 180;
var y = 150;
var diameter = 30;

var v = 100;
var q = 150;
var t = 30;

var a = 150;
var b = 200;
var c = 200;

var e = 150;
var f = 300;
var g = 206;
var h = 350;

var j = 10;
var k = 30;

function setup() {
  createCanvas(300,500);
}

function draw() {
  background(123,23,129);
  text('Abbys simple portrait', j, k);
  circle(a,b,c);
  triangle(100, 450, 150, 300, 206, 450);
  square(x,y,diameter);
  square(v,q,t);
  point(150, 250);
  point(151, 250);
  point(152, 250);
  point(153, 250);
  point(154, 250);
  point(155, 250);
  point(156, 250);
  point(157, 250);
  point(158, 250);
  line(e, f, g, h);
  line(150, 300, 106, 350);
  text('By: Abby Wood', 10, 490);
  if(x <= 200)
    {
        movement*=-1
    }
  x += movement;
  if(v <= 150)
    {
        movement*=-1
    }
  v += movement;
  if(b <= 200)
    {
        movement*=-1
    }
  b += movement;
  if(e <= 200 && f <=400)
    {
        movement*=-1
    }
  e += movement;
  f += movement;
}