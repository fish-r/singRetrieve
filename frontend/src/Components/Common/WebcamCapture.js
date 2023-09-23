import React, { useRef, useEffect } from "react";

function WebcamCapture() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true }) // Request access to the camera
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing the webcam:", error);
        });
    }
  }, []);

  return (
    <div align="center">
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
}

export default WebcamCapture;
