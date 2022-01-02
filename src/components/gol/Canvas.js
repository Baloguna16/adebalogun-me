import { useRef, useState, useEffect } from 'react';
import { initialize, regenerate, createNull2D } from './game-of-life';

export const Canvas = ({ width, height, speed }) => {

  const pixels = 10;
  const canvasRef = useRef();

  const draw = (ctx, currGen) => {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let i = 0; i < currGen.length; i++) {

      const currRow = currGen[i];

      for (let j = 0; j < currRow.length; j++) {

        const cellIsAlive = currGen[i][j];

        ctx.fillStyle = cellIsAlive ? "rgba(0, 0, 0, .5)"
          : "rgba(0, 0, 0, 0)"
        ctx.fillRect(i * pixels, j * pixels, pixels, pixels);
      }
    }
  }

  useEffect(() => {

    const seed = 0.2;
    const cols = width / pixels;
    const rows = height / pixels;

    let animationFrameId;
    let currGen = initialize(rows, cols, seed);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const render = () => {
      setTimeout(() => {
        draw(context, currGen);
        animationFrameId = window.requestAnimationFrame(render);

        let nextGen = createNull2D(currGen);
        currGen = regenerate(currGen, nextGen);
      }, speed); // use this to change the pace of the gif
    };
    render();
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [draw, speed, width, height]);

  return (
    <canvas
      width={width}
      height={height}
      ref={canvasRef}
    >
    </canvas>
  );
}
