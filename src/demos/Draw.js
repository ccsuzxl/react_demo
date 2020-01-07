import React from 'react'

class Draw extends React.Component {
  componentDidMount () {
    var canvas = document.getElementById('simle');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      // 二次贝塞尔曲线
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }

    var ctx2 = document.getElementById('colors').getContext('2d');
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx2.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
          Math.floor(255 - 42.5 * j) + ',0)';
        ctx2.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }
  render () {
    return (
      <>
        <canvas id="simle"></canvas>
        <canvas id="colors"></canvas>
      </>
    )
  }
}
export default Draw;