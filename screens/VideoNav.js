import VideoScreen from "./VideoScreen";
import LiveCamera from "./LiveCamera";
import CameraGallery from "./CameraGallery";

const VideoNav = ({
  showLiveCamera,
  setShowLiveCamera,
  showGallery,
  setShowGallery,
}) => {
  if (showLiveCamera) {
    return <LiveCamera setShowLiveCamera={setShowLiveCamera} />;
  } else if (showGallery) {
    return <CameraGallery setShowGallery={setShowGallery} />;
  } else {
    return (
      <VideoScreen
        setShowLiveCamera={setShowLiveCamera}
        setShowGallery={setShowGallery}
      />
    );
  }
};

export default VideoNav;
