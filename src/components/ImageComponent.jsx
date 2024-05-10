import React from "react";

const ImageComponent = ({ src, style }) => {
  return <img src={src} className={style} />;
};

export default ImageComponent;
