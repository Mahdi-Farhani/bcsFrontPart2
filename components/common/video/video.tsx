import React from "react";

interface IframeProps {
  src: string;

  width?: string;
  height?: string;
}

const Iframe: React.FC<IframeProps> = ({ src, width, height }) => {
  return <iframe src={src} width={400} height={200} allowFullScreen />;
};

export default Iframe;
