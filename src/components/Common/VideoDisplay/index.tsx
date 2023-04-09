import { useRef, useEffect } from "react";
import { Card } from "antd";

const VideoDisplay = ({ streamUrl }: { streamUrl: any }) => {
  const videoRef = useRef();

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.srcObject = new MediaStream([streamUrl]);
//     }
//   }, [streamUrl]);

  return (
    <Card>
      {/* <video ref={videoRef} autoPlay muted /> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ph-SMrIGeJo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Card>
  );
};

export default VideoDisplay;
