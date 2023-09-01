import React, { useState, useRef } from "react";
import Cropper from "react-easy-crop";

interface Props {}
/**
 * @memo react cropper component
 * @url react cropper component
 */

//クロッパーに画像や、useStateを渡すことで色々できるようになる

const ReactCropperComponent: React.FC = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0);
  const onCropComplete = () => {
    console.log("aa");
  };
  return (
    <div>
      <Cropper
        image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
        crop={crop}
        zoom={zoom}
        rotation={90}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
};

export default ReactCropperComponent;
