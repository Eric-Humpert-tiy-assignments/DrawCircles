'use strict';
if (this.DrawCircles === undefined) this.DrawCircles = {};

(function(context) {

  function start() {

    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 8;

    ctx.beginPath();
    ctx.arc(125, 125, 80, 0, 2 * Math.PI);

    ctx.stroke();

    ctx.beginPath();
    ctx.arc(375, 125, 80, 0, 2 * Math.PI);
    ctx.stroke();
    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.DrawCircles);
