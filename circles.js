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

  function circleOverlay(x, y, r, d, bool) {
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgba(245, 205, 40, 1.0)';
    ctx.beginPath()
    ctx.arc(x, y, 80, 0, r * Math.PI/d, bool);
    ctx.stroke();
  }



  function start() {


    drawCircle(125, 125);
    circleOverlay(125, 125, 4, 2, true);
    drawCircle(350, 125);
    circleOverlay(350, 125, 3, 2, true);
    circleOverlay(350, 125, 1, 5, false);

    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.DrawCircles);
