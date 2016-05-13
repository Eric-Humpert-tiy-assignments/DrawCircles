'use strict';
if (this.DrawCircles === undefined) this.DrawCircles = {};

(function(context) {

  var canvas = document.querySelector('#canvas');
  var ctx = canvas.getContext('2d');
  //var circle2 = ctx.arc(325, 125, 80, 0, 2 * Math.PI);

  function drawCircle(x, y) {

    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgba(114, 103, 55, 1.0)';
    ctx.beginPath();
    ctx.arc(x, y, 80, 0, 2 * Math.PI);
    ctx.stroke();

  }

  function circleOverlay(x, y, p, r, bool) {
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgba(245, 205, 40, 1.0)';
    ctx.beginPath()
    ctx.arc(x, y, 80, p, r * Math.PI, bool);
    ctx.stroke();
  }

  function circleValues(number, x, y) {
    ctx.fillStyle = 'rgba(245, 205, 40, 1.0)';
    ctx.font = '60pt sans-serif';
    ctx.fillText(number, x, y);
  }



  function start() {


    drawCircle(125, 125);
    circleOverlay(125, 125, 0,  2, true);
    circleValues('100', 60, 150);
    drawCircle(350, 125);
    circleOverlay(350, 125, 0.75, 1.5, true);
    circleValues('37', 315, 150);

    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.DrawCircles);
