import { Card } from "antd";

const VideoDisplay = ({ streamUrl }: { streamUrl: any }) => {
  return (
    <Card>
      <iframe
        width="560"
        height="398"
        src={streamUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Card>
  );
};

export default VideoDisplay;
