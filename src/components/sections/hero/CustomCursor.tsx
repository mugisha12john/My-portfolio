import React from "react";

type Props = { mousePosition: { x: number; y: number } };

const CustomCursor: React.FC<Props> = ({ mousePosition }) => (
  <>
    <div
      className="cursor fixed w-2.5 h-2.5 bg-green rounded-full pointer-events-none z-9999 translate-x-[-50%] translate-y-[-50%] mix-blend-difference"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    />
    <div
      className="cursor-ring fixed w-9 h-9 border border-green rounded-full pointer-events-none z-9998 translate-x-[-50%] translate-y-[-50%] opacity-50"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    />
  </>
);

export default CustomCursor;
