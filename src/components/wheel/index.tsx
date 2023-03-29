import React from "react";
import "./index.css";

type Props = {
  people: {
    id: number;
    name: string;
  }[];
};

export const WheelSpinner: React.FC<Props> = (props) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(50, 100, 10, 0, 2 * Math.PI);
      ctx.fill();
    }
    
  });

  return <canvas ref={canvasRef} />;
};
