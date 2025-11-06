import ReactPlayer from "../components/video";
import { HomeButton } from "../components/buttons";

export default function HomeSection() {
  return (
    <div
      id="home"
      role="region"
      aria-labelledby="home-title"
      className="relative w-full h-screen bg-black bg-opacity-30 home-section bg-dark-30"
      style={{
        backgroundImage: "url('assets/images/header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Video Wrapper */}
      <div className="absolute inset-0 z-0">
        <ReactPlayer />
      </div>

      {/* Title Overlay */}
      <div
        role="presentation"
        className="relative z-10 flex items-center justify-center h-full px-4 text-center"
      >
        <div className="space-y-4 home-caption ">
          <h1
            id="home-title"
            className="font-bold text-white uppercase title-size-2"
          >
            Hello &amp; welcome to
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white title-size-3">
            Greig McMahon
          </h2>
          <h3 className="text-2xl md:text-3xl text-white title-size-3">
            Web Development
          </h3>

          <HomeButton title="Learn More" href="about" />
        </div>
      </div>
    </div>
  );
}
