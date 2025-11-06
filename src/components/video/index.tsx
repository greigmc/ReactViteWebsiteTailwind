export default function ReactPlayer() {
  return (
    <div className="video-responsive">
      <video
        data-testid="video-element"
        src="https://greigmcmahon.com/assets/video/video.mp4"
        autoPlay
        muted
        loop
        controls={false}
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
}
